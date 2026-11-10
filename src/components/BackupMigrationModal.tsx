"use client";

import React, { useRef, useState } from "react";
import {
  X,
  Download,
  Upload,
  FileJson,
  CheckCircle2,
  AlertTriangle,
  History,
  Bookmark,
  RefreshCw,
  ArrowRight,
  ShieldAlert,
} from "lucide-react";
import { UI_TEXT, type Lang } from "@/lib/i18n";
import type { BackupPayload } from "@/app/api/backup/route";

interface BackupMigrationModalProps {
  lang: Lang;
  totalBookmarks: number;
  totalExams: number;
  onClose: () => void;
  onBackupImported: () => Promise<void>;
}

export function BackupMigrationModal({
  lang,
  totalBookmarks,
  totalExams,
  onClose,
  onBackupImported,
}: BackupMigrationModalProps) {
  const t = UI_TEXT[lang];
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [activeTab, setActiveTab] = useState<"export" | "import">("export");
  const [exporting, setExporting] = useState(false);
  const [importing, setImporting] = useState(false);

  // Import state
  const [parsedFile, setParsedFile] = useState<BackupPayload | null>(null);
  const [fileName, setFileName] = useState<string>("");
  const [parseError, setParseError] = useState<string>("");
  const [importMode, setImportMode] = useState<"merge" | "replace">("merge");
  const [importResult, setImportResult] = useState<{
    success: boolean;
    message: string;
    importedBookmarks: number;
    importedExams: number;
  } | null>(null);

  async function handleExportDownload() {
    setExporting(true);
    try {
      const res = await fetch("/api/backup", { cache: "no-store" });
      if (!res.ok) {
        throw new Error("Failed to export backup");
      }
      const data: BackupPayload = await res.json();
      const jsonString = JSON.stringify(data, null, 2);
      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      const dateStr = new Date().toISOString().slice(0, 10);
      a.href = url;
      a.download = `loksewa_pro_backup_${dateStr}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Export error:", err);
      alert(
        lang === "ne"
          ? "ब्याकअप डाउनलोड गर्न सकिएन।"
          : "Failed to download backup."
      );
    } finally {
      setExporting(false);
    }
  }

  function handleFileSelect(e: React.ChangeEvent<HTMLInputElement>) {
    setParseError("");
    setImportResult(null);
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const text = event.target?.result as string;
        const parsed = JSON.parse(text);

        // Validation: verify structure
        const hasBookmarks = Array.isArray(parsed.bookmarks);
        const hasExams = Array.isArray(parsed.examHistory);

        if (!hasBookmarks && !hasExams) {
          throw new Error(
            lang === "ne"
              ? "अमान्य फाइल संरचना: 'bookmarks' वा 'examHistory' फेला परेन।"
              : "Invalid backup format: Must contain 'bookmarks' or 'examHistory'."
          );
        }

        setParsedFile(parsed as BackupPayload);
      } catch (err) {
        console.error("File parse error:", err);
        setParseError(
          err instanceof Error
            ? err.message
            : lang === "ne"
              ? "अमान्य JSON फाइल।"
              : "Invalid JSON backup file."
        );
        setParsedFile(null);
      }
    };
    reader.readAsText(file);
  }

  async function handleConfirmImport() {
    if (!parsedFile) return;
    setImporting(true);
    setParseError("");
    try {
      const res = await fetch("/api/backup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          mode: importMode,
          bookmarks: parsedFile.bookmarks,
          examHistory: parsedFile.examHistory,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Import failed");
      }

      await onBackupImported();

      setImportResult({
        success: true,
        message:
          lang === "ne"
            ? "ब्याकअप सफलतापूर्वक इम्पोर्ट गरियो!"
            : "Backup imported successfully!",
        importedBookmarks: data.importedBookmarks ?? 0,
        importedExams: data.importedExams ?? 0,
      });
      setParsedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
    } catch (err) {
      console.error("Import execution error:", err);
      setParseError(
        err instanceof Error
          ? err.message
          : lang === "ne"
            ? "इम्पोर्ट प्रक्रिया असफल भयो।"
            : "Failed to complete data import."
      );
    } finally {
      setImporting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/60 p-3 backdrop-blur-xs">
      <div className="max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl dark:border-slate-800 dark:bg-[#131C31]">
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b border-slate-100 pb-3 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#0F294A] text-white dark:bg-sky-500 dark:text-slate-950">
              <FileJson className="h-5 w-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {t.backupAndMigration}
              </h3>
              <p className="text-[11px] text-slate-500 dark:text-slate-400">
                {lang === "ne"
                  ? "परीक्षा इतिहास र बुकमार्कको JSON ब्याकअप / स्थानान्तरण"
                  : "Exam history & bookmarks backup, restore and cross-device migration"}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="mb-5 flex rounded-xl bg-slate-100 p-1 dark:bg-slate-900">
          <button
            type="button"
            onClick={() => setActiveTab("export")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
              activeTab === "export"
                ? "bg-white text-[#0F294A] shadow-xs dark:bg-[#131C31] dark:text-sky-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <Download className="h-3.5 w-3.5" />
            {t.exportBackup}
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("import")}
            className={`flex flex-1 items-center justify-center gap-2 rounded-lg py-2 text-xs font-semibold transition-all ${
              activeTab === "import"
                ? "bg-white text-[#0F294A] shadow-xs dark:bg-[#131C31] dark:text-sky-400"
                : "text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-200"
            }`}
          >
            <Upload className="h-3.5 w-3.5" />
            {t.importBackup}
          </button>
        </div>

        {/* TAB 1: EXPORT */}
        {activeTab === "export" && (
          <div className="space-y-4">
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300">
              {t.backupDescription}
            </p>

            {/* Current Snapshot Stats */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Bookmark className="h-4 w-4 text-amber-500" />
                  <span className="text-xs font-medium">
                    {lang === "ne" ? "बुकमार्क गरिएका प्रश्न" : "Bookmarked Questions"}
                  </span>
                </div>
                <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {totalBookmarks}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {lang === "ne"
                    ? "व्यक्तिगत अध्ययन नोट सहित"
                    : "Includes your personal revision notes"}
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-3.5 dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <History className="h-4 w-4 text-emerald-500" />
                  <span className="text-xs font-medium">
                    {lang === "ne" ? "परीक्षा इतिहास" : "Exam History"}
                  </span>
                </div>
                <div className="font-mono-num mt-1 text-2xl font-bold text-slate-900 dark:text-slate-100">
                  {totalExams}
                </div>
                <p className="mt-1 text-[11px] text-slate-500 dark:text-slate-400">
                  {lang === "ne"
                    ? "स्कोर र समय विश्लेषण सहित"
                    : "Complete scores, accuracy & answer logs"}
                </p>
              </div>
            </div>

            <div className="rounded-xl border border-sky-100 bg-sky-50/70 p-3.5 dark:border-sky-950 dark:bg-sky-950/20">
              <div className="flex items-start gap-2.5">
                <FileJson className="mt-0.5 h-4 w-4 shrink-0 text-sky-600 dark:text-sky-400" />
                <div className="text-xs text-sky-900 dark:text-sky-200">
                  <span className="font-semibold">
                    {lang === "ne" ? "मानकीकृत JSON ढाँचा:" : "Standard JSON format:"}
                  </span>{" "}
                  {lang === "ne"
                    ? "यो फाइल कुनै पनि मोबाइल वा कम्प्युटरको ब्राउजरमा सजिलै इम्पोर्ट गर्न सकिन्छ।"
                    : "Fully portable across any browser or phone. No proprietary lock-in."}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleExportDownload}
                disabled={exporting}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-[#0F294A] px-5 text-sm font-semibold text-white shadow-xs hover:bg-[#1a3d6b] disabled:opacity-60 dark:bg-sky-500 dark:text-slate-950 dark:hover:bg-sky-400"
              >
                {exporting ? (
                  <>
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    {lang === "ne" ? "तयार हुँदैछ..." : "Generating Backup..."}
                  </>
                ) : (
                  <>
                    <Download className="h-4 w-4" />
                    {t.downloadBackup}
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: IMPORT */}
        {activeTab === "import" && (
          <div className="space-y-4">
            {importResult && (
              <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600 dark:text-emerald-400" />
                  <div>
                    <h4 className="text-xs font-bold text-emerald-900 dark:text-emerald-200">
                      {importResult.message}
                    </h4>
                    <p className="mt-1 text-xs text-emerald-800 dark:text-emerald-300">
                      {lang === "ne"
                        ? `${importResult.importedBookmarks} बुकमार्क र ${importResult.importedExams} परीक्षा इतिहास सफलतापूर्वक थपियो।`
                        : `Imported ${importResult.importedBookmarks} bookmarks and ${importResult.importedExams} exam records.`}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {parseError && (
              <div className="rounded-xl border border-rose-200 bg-rose-50 p-3.5 dark:border-rose-900/60 dark:bg-rose-950/30">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600 dark:text-rose-400" />
                  <div className="text-xs text-rose-900 dark:text-rose-200">
                    <span className="font-semibold">
                      {lang === "ne" ? "त्रुटि:" : "Error:"}
                    </span>{" "}
                    {parseError}
                  </div>
                </div>
              </div>
            )}

            {/* File Selector */}
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                {t.selectBackupFile}
              </label>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json,application/json"
                onChange={handleFileSelect}
                className="block w-full cursor-pointer rounded-xl border border-dashed border-slate-300 bg-slate-50 p-3 text-xs text-slate-600 file:mr-3 file:cursor-pointer file:rounded-lg file:border-0 file:bg-[#0F294A] file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-white dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:file:bg-sky-500 dark:file:text-slate-950"
              />
            </div>

            {/* Parsed File Preview */}
            {parsedFile && (
              <div className="space-y-3 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-800 dark:bg-slate-900/60">
                <div className="flex items-center justify-between border-b border-slate-200 pb-2 dark:border-slate-800">
                  <div className="flex items-center gap-2">
                    <FileJson className="h-4 w-4 text-emerald-600 dark:text-emerald-400" />
                    <span className="text-xs font-bold text-slate-900 dark:text-slate-100">
                      {fileName || "backup.json"}
                    </span>
                  </div>
                  <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    {lang === "ne" ? "वैध ब्याकअप" : "Valid Backup"}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-1 text-xs">
                  <div className="rounded-lg bg-white p-2.5 dark:bg-[#131C31]">
                    <span className="text-slate-500 dark:text-slate-400">
                      {lang === "ne" ? "बुकमार्कहरू:" : "Bookmarks Found:"}
                    </span>
                    <div className="font-mono-num text-base font-bold text-slate-900 dark:text-slate-100">
                      {parsedFile.bookmarks?.length ?? 0}
                    </div>
                  </div>
                  <div className="rounded-lg bg-white p-2.5 dark:bg-[#131C31]">
                    <span className="text-slate-500 dark:text-slate-400">
                      {lang === "ne" ? "परीक्षाहरू:" : "Exams Found:"}
                    </span>
                    <div className="font-mono-num text-base font-bold text-slate-900 dark:text-slate-100">
                      {parsedFile.examHistory?.length ?? 0}
                    </div>
                  </div>
                </div>

                {parsedFile.exportedAt && (
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {lang === "ne" ? "निर्यात मिति:" : "Exported on:"}{" "}
                    <span className="font-mono-num font-medium text-slate-700 dark:text-slate-300">
                      {new Date(parsedFile.exportedAt).toLocaleString()}
                    </span>
                  </p>
                )}

                {/* Import Strategy Selection */}
                <div className="pt-2">
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700 dark:text-slate-300">
                    {lang === "ne" ? "इम्पोर्ट विधि छनोट गर्नुहोस्:" : "Import Strategy:"}
                  </label>
                  <div className="space-y-2">
                    <label
                      className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 transition-all ${
                        importMode === "merge"
                          ? "border-[#0F294A] bg-white ring-2 ring-[#0F294A]/10 dark:border-sky-500 dark:bg-[#131C31]"
                          : "border-slate-200 bg-white hover:bg-slate-100/70 dark:border-slate-800 dark:bg-[#131C31]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="importMode"
                        value="merge"
                        checked={importMode === "merge"}
                        onChange={() => setImportMode("merge")}
                        className="mt-0.5 text-[#0F294A] focus:ring-sky-500"
                      />
                      <div>
                        <div className="text-xs font-bold text-slate-900 dark:text-slate-100">
                          {t.mergeOption}
                        </div>
                        <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                          {lang === "ne"
                            ? "हालका रेकर्डहरू नहटाएर नयाँ परीक्षा तथा बुकमार्कहरू मात्र थप्छ।"
                            : "Preserves your current exams & bookmarks, adds new ones and updates notes."}
                        </p>
                      </div>
                    </label>

                    <label
                      className={`flex cursor-pointer items-start gap-2.5 rounded-xl border p-3 transition-all ${
                        importMode === "replace"
                          ? "border-amber-500 bg-amber-50/50 ring-2 ring-amber-500/20 dark:border-amber-500 dark:bg-amber-950/20"
                          : "border-slate-200 bg-white hover:bg-slate-100/70 dark:border-slate-800 dark:bg-[#131C31]/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="importMode"
                        value="replace"
                        checked={importMode === "replace"}
                        onChange={() => setImportMode("replace")}
                        className="mt-0.5 text-amber-600 focus:ring-amber-500"
                      />
                      <div>
                        <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-slate-100">
                          <ShieldAlert className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
                          {t.replaceOption}
                        </div>
                        <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">
                          {lang === "ne"
                            ? "हालका सबै बुकमार्क र परीक्षा इतिहास हटाएर ब्याकअप फाइलको तथ्याङ्क राख्छ।"
                            : "Overwrites current exam history and bookmarks with this file's contents."}
                        </p>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Confirm Import Button */}
                <button
                  type="button"
                  onClick={handleConfirmImport}
                  disabled={importing}
                  className="mt-2 flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 text-sm font-semibold text-white shadow-xs hover:bg-emerald-700 disabled:opacity-60 dark:bg-emerald-500 dark:hover:bg-emerald-400"
                >
                  {importing ? (
                    <>
                      <RefreshCw className="h-4 w-4 animate-spin" />
                      {lang === "ne" ? "इम्पोर्ट गरिँदैछ..." : "Importing Data..."}
                    </>
                  ) : (
                    <>
                      <ArrowRight className="h-4 w-4" />
                      {lang === "ne"
                        ? "तथ्याङ्क इम्पोर्ट पुष्टि गर्नुहोस्"
                        : "Confirm & Import Data"}
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer Actions */}
        <div className="mt-5 flex items-center justify-end border-t border-slate-100 pt-3 dark:border-slate-800">
          <button
            type="button"
            onClick={onClose}
            className="min-h-[38px] rounded-xl border border-slate-200 px-4 text-xs font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-slate-800"
          >
            {lang === "ne" ? "बन्द गर्नुहोस्" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}
