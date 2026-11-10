import { NextResponse } from "next/server";
import { and, desc, eq } from "drizzle-orm";
import { db, mockExamSessions, questions, userBookmarks } from "@/db";
import { ensureDatabaseSeeded } from "@/db/seed";
import { getActiveUser } from "@/lib/auth";

export interface BackupBookmarkItem {
  questionId: number;
  questionEn?: string;
  questionNe?: string;
  topicSlug?: string;
  subjectCode?: string;
  personalNote: string;
  createdAt: string;
}

export interface BackupExamItem {
  titleEn: string;
  titleNe: string;
  commission: string;
  examType: string;
  totalQuestions: number;
  attemptedQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  negativeMarking: boolean;
  netScore: string;
  accuracyPct: number;
  durationMinutes: number;
  timeTakenSeconds: number;
  status: string;
  questionIds: number[];
  answers: Record<string, string>;
  startedAt: string;
  completedAt: string | null;
}

export interface BackupPayload {
  version: string;
  app: string;
  exportedAt: string;
  user: {
    name: string;
    email: string;
    targetCommission: string;
    targetLevel: string;
  } | null;
  stats: {
    totalBookmarks: number;
    totalExams: number;
  };
  bookmarks: BackupBookmarkItem[];
  examHistory: BackupExamItem[];
}

function toIsoString(val: unknown): string {
  if (!val) return new Date().toISOString();
  if (val instanceof Date) return val.toISOString();
  try {
    const d = new Date(val as string | number);
    return isNaN(d.getTime()) ? String(val) : d.toISOString();
  } catch {
    return String(val);
  }
}

export async function GET() {
  try {
    await ensureDatabaseSeeded();
    const user = await getActiveUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const [rawBookmarks, rawExams, allQuestions] = await Promise.all([
      db
        .select()
        .from(userBookmarks)
        .where(eq(userBookmarks.userId, user.id))
        .orderBy(desc(userBookmarks.createdAt)),
      db
        .select()
        .from(mockExamSessions)
        .where(eq(mockExamSessions.userId, user.id))
        .orderBy(desc(mockExamSessions.startedAt)),
      db.select().from(questions),
    ]);

    const questionById = new Map(allQuestions.map((q) => [q.id, q]));

    const bookmarks: BackupBookmarkItem[] = rawBookmarks.map((b) => {
      const q = questionById.get(b.questionId);
      return {
        questionId: b.questionId,
        questionEn: q?.questionEn ?? "",
        questionNe: q?.questionNe ?? "",
        topicSlug: q?.examLevel ?? "",
        personalNote: b.personalNote ?? "",
        createdAt: toIsoString(b.createdAt),
      };
    });

    const examHistory: BackupExamItem[] = rawExams.map((e) => {
      let qIds: number[] = [];
      let ans: Record<string, string> = {};
      try {
        qIds = JSON.parse(e.questionIdsJson);
      } catch {
        qIds = [];
      }
      try {
        ans = JSON.parse(e.answersJson);
      } catch {
        ans = {};
      }

      return {
        titleEn: e.titleEn,
        titleNe: e.titleNe,
        commission: e.commission,
        examType: e.examType,
        totalQuestions: e.totalQuestions,
        attemptedQuestions: e.attemptedQuestions,
        correctAnswers: e.correctAnswers,
        wrongAnswers: e.wrongAnswers,
        negativeMarking: e.negativeMarking,
        netScore: e.netScore,
        accuracyPct: e.accuracyPct,
        durationMinutes: e.durationMinutes,
        timeTakenSeconds: e.timeTakenSeconds,
        status: e.status,
        questionIds: qIds,
        answers: ans,
        startedAt: toIsoString(e.startedAt),
        completedAt: e.completedAt ? toIsoString(e.completedAt) : null,
      };
    });

    const backupData: BackupPayload = {
      version: "1.0",
      app: "Loksewa Pro",
      exportedAt: new Date().toISOString(),
      user: {
        name: user.name,
        email: user.email,
        targetCommission: user.targetCommission,
        targetLevel: user.targetLevel,
      },
      stats: {
        totalBookmarks: bookmarks.length,
        totalExams: examHistory.length,
      },
      bookmarks,
      examHistory,
    };

    return NextResponse.json(backupData);
  } catch (err) {
    console.error("GET /api/backup error:", err);
    return NextResponse.json(
      {
        error: "Failed to generate backup export",
        details: (err as any)?.message || String(err),
        stack: (err as any)?.stack || "",
        cause: (err as any)?.cause ? String((err as any)?.cause) : "",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    await ensureDatabaseSeeded();
    const user = await getActiveUser();
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await req.json();
    const mode = body.mode === "replace" ? "replace" : "merge";

    const incomingBookmarks: BackupBookmarkItem[] = Array.isArray(
      body.bookmarks
    )
      ? body.bookmarks
      : [];
    const incomingExams: BackupExamItem[] = Array.isArray(body.examHistory)
      ? body.examHistory
      : [];

    if (incomingBookmarks.length === 0 && incomingExams.length === 0) {
      return NextResponse.json(
        { error: "No bookmarks or exam history found in backup file" },
        { status: 400 }
      );
    }

    // If replace mode, clear existing bookmarks and exam sessions for user
    if (mode === "replace") {
      await Promise.all([
        db.delete(userBookmarks).where(eq(userBookmarks.userId, user.id)),
        db.delete(mockExamSessions).where(eq(mockExamSessions.userId, user.id)),
      ]);
    }

    // 1. Process Bookmarks with robust cross-device matching
    const allQuestions = await db.select().from(questions);
    const questionById = new Map(allQuestions.map((q) => [q.id, q]));
    const questionByEnText = new Map(
      allQuestions.map((q) => [q.questionEn.trim().toLowerCase(), q])
    );
    const questionByNeText = new Map(
      allQuestions.map((q) => [q.questionNe.trim(), q])
    );

    const existingBookmarks = await db
      .select()
      .from(userBookmarks)
      .where(eq(userBookmarks.userId, user.id));

    const bookmarkedQIds = new Set(existingBookmarks.map((b) => b.questionId));

    let importedBookmarksCount = 0;
    let updatedBookmarksCount = 0;

    for (const b of incomingBookmarks) {
      // Find target question:
      // Try ID match first
      let matchedQ = questionById.get(Number(b.questionId));

      // If text exists, check if texts agree, or fallback to text matching across databases
      if (b.questionEn && b.questionEn.trim()) {
        const textMatch = questionByEnText.get(b.questionEn.trim().toLowerCase());
        if (textMatch) matchedQ = textMatch;
      } else if (b.questionNe && b.questionNe.trim()) {
        const textMatch = questionByNeText.get(b.questionNe.trim());
        if (textMatch) matchedQ = textMatch;
      }

      if (!matchedQ) {
        // As a last fallback, use the numerical questionId if it is valid in our DB
        matchedQ = questionById.get(Number(b.questionId));
      }

      if (!matchedQ) continue;

      const personalNote = typeof b.personalNote === "string" ? b.personalNote : "";
      const createdAtDate = b.createdAt ? new Date(b.createdAt) : new Date();

      if (bookmarkedQIds.has(matchedQ.id)) {
        // Update personal note if incoming has one
        if (personalNote.trim()) {
          await db
            .update(userBookmarks)
            .set({ personalNote })
            .where(
              and(
                eq(userBookmarks.userId, user.id),
                eq(userBookmarks.questionId, matchedQ.id)
              )
            );
          updatedBookmarksCount++;
        }
      } else {
        await db.insert(userBookmarks).values({
          userId: user.id,
          questionId: matchedQ.id,
          personalNote,
          createdAt: isNaN(createdAtDate.getTime()) ? new Date() : createdAtDate,
        });
        bookmarkedQIds.add(matchedQ.id);
        importedBookmarksCount++;
      }
    }

    // 2. Process Exam History
    const existingExams = await db
      .select()
      .from(mockExamSessions)
      .where(eq(mockExamSessions.userId, user.id));

    const existingExamSignatures = new Set(
      existingExams.map(
        (e) => `${e.titleEn}|${e.startedAt.toISOString().slice(0, 19)}|${e.netScore}`
      )
    );

    let importedExamsCount = 0;
    let skippedExamsCount = 0;

    for (const exam of incomingExams) {
      const startedAtDate = exam.startedAt ? new Date(exam.startedAt) : new Date();
      const startedIso = isNaN(startedAtDate.getTime())
        ? new Date().toISOString().slice(0, 19)
        : startedAtDate.toISOString().slice(0, 19);

      const netScore = String(exam.netScore || "0.00");
      const titleEn = String(exam.titleEn || "Mock Examination").trim();
      const signature = `${titleEn}|${startedIso}|${netScore}`;

      if (mode === "merge" && existingExamSignatures.has(signature)) {
        skippedExamsCount++;
        continue;
      }

      const qIdsJson = Array.isArray(exam.questionIds)
        ? JSON.stringify(exam.questionIds)
        : "[]";
      const ansJson =
        exam.answers && typeof exam.answers === "object"
          ? JSON.stringify(exam.answers)
          : "{}";

      const completedAtDate = exam.completedAt
        ? new Date(exam.completedAt)
        : null;

      await db.insert(mockExamSessions).values({
        userId: user.id,
        titleEn,
        titleNe: String(exam.titleNe || titleEn).trim(),
        commission: String(exam.commission || user.targetCommission || "Federal"),
        examType: String(exam.examType || "full_mock"),
        totalQuestions: Number(exam.totalQuestions) || 20,
        attemptedQuestions: Number(exam.attemptedQuestions) || 0,
        correctAnswers: Number(exam.correctAnswers) || 0,
        wrongAnswers: Number(exam.wrongAnswers) || 0,
        negativeMarking:
          exam.negativeMarking !== undefined
            ? Boolean(exam.negativeMarking)
            : true,
        netScore,
        accuracyPct: Number(exam.accuracyPct) || 0,
        durationMinutes: Number(exam.durationMinutes) || 45,
        timeTakenSeconds: Number(exam.timeTakenSeconds) || 0,
        status: String(exam.status || "completed"),
        questionIdsJson: qIdsJson,
        answersJson: ansJson,
        startedAt: isNaN(startedAtDate.getTime()) ? new Date() : startedAtDate,
        completedAt:
          completedAtDate && !isNaN(completedAtDate.getTime())
            ? completedAtDate
            : null,
      });

      existingExamSignatures.add(signature);
      importedExamsCount++;
    }

    return NextResponse.json({
      success: true,
      mode,
      importedBookmarks: importedBookmarksCount,
      updatedBookmarks: updatedBookmarksCount,
      importedExams: importedExamsCount,
      skippedExams: skippedExamsCount,
    });
  } catch (err) {
    console.error("POST /api/backup error:", err);
    return NextResponse.json(
      { error: "Failed to import backup data" },
      { status: 500 }
    );
  }
}
