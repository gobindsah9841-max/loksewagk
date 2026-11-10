CREATE TABLE "current_affairs" (
	"id" serial PRIMARY KEY NOT NULL,
	"title_en" text NOT NULL,
	"title_ne" text NOT NULL,
	"summary_en" text NOT NULL,
	"summary_ne" text NOT NULL,
	"key_points_en" text NOT NULL,
	"key_points_ne" text NOT NULL,
	"category" text DEFAULT 'National' NOT NULL,
	"published_date_bs" text NOT NULL,
	"published_date_ad" text NOT NULL,
	"linked_question_id" integer,
	"is_important" boolean DEFAULT true NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "mock_exam_sessions" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"title_en" text NOT NULL,
	"title_ne" text NOT NULL,
	"commission" text DEFAULT 'Federal' NOT NULL,
	"exam_type" text DEFAULT 'full_mock' NOT NULL,
	"total_questions" integer NOT NULL,
	"attempted_questions" integer DEFAULT 0 NOT NULL,
	"correct_answers" integer DEFAULT 0 NOT NULL,
	"wrong_answers" integer DEFAULT 0 NOT NULL,
	"negative_marking" boolean DEFAULT true NOT NULL,
	"net_score" text DEFAULT '0.00' NOT NULL,
	"accuracy_pct" integer DEFAULT 0 NOT NULL,
	"duration_minutes" integer DEFAULT 45 NOT NULL,
	"time_taken_seconds" integer DEFAULT 0 NOT NULL,
	"status" text DEFAULT 'completed' NOT NULL,
	"question_ids_json" text DEFAULT '[]' NOT NULL,
	"answers_json" text DEFAULT '{}' NOT NULL,
	"started_at" timestamp DEFAULT now() NOT NULL,
	"completed_at" timestamp
);
--> statement-breakpoint
CREATE TABLE "questions" (
	"id" serial PRIMARY KEY NOT NULL,
	"subject_id" integer NOT NULL,
	"topic_id" integer NOT NULL,
	"question_en" text NOT NULL,
	"question_ne" text NOT NULL,
	"option_a_en" text NOT NULL,
	"option_a_ne" text NOT NULL,
	"option_b_en" text NOT NULL,
	"option_b_ne" text NOT NULL,
	"option_c_en" text NOT NULL,
	"option_c_ne" text NOT NULL,
	"option_d_en" text NOT NULL,
	"option_d_ne" text NOT NULL,
	"correct_option" text NOT NULL,
	"explanation_en" text NOT NULL,
	"explanation_ne" text NOT NULL,
	"difficulty" text DEFAULT 'medium' NOT NULL,
	"commission" text DEFAULT 'Federal' NOT NULL,
	"exam_level" text DEFAULT 'Fifth Level - General Administration' NOT NULL,
	"is_previous_year" boolean DEFAULT false NOT NULL,
	"previous_year_info" text,
	"is_important" boolean DEFAULT false NOT NULL,
	"is_daily_challenge" boolean DEFAULT false NOT NULL,
	"created_by_user_id" integer,
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "study_progress" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"topic_id" integer NOT NULL,
	"last_question_id" integer,
	"questions_solved" integer DEFAULT 0 NOT NULL,
	"correct_count" integer DEFAULT 0 NOT NULL,
	"mastery_pct" integer DEFAULT 0 NOT NULL,
	"last_studied_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "subjects" (
	"id" serial PRIMARY KEY NOT NULL,
	"code" text NOT NULL,
	"name_en" text NOT NULL,
	"name_ne" text NOT NULL,
	"description_en" text NOT NULL,
	"description_ne" text NOT NULL,
	"icon_name" text NOT NULL,
	"accent_color" text NOT NULL,
	"sort_order" integer DEFAULT 1 NOT NULL,
	CONSTRAINT "subjects_code_unique" UNIQUE("code")
);
--> statement-breakpoint
CREATE TABLE "topics" (
	"id" serial PRIMARY KEY NOT NULL,
	"subject_id" integer NOT NULL,
	"sub_category_en" text NOT NULL,
	"sub_category_ne" text NOT NULL,
	"name_en" text NOT NULL,
	"name_ne" text NOT NULL,
	"slug" text NOT NULL,
	"weightage_marks" integer DEFAULT 5 NOT NULL,
	"sort_order" integer DEFAULT 1 NOT NULL,
	CONSTRAINT "topics_slug_unique" UNIQUE("slug")
);
--> statement-breakpoint
CREATE TABLE "user_bookmarks" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"personal_note" text DEFAULT '',
	"created_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user_question_attempts" (
	"id" serial PRIMARY KEY NOT NULL,
	"user_id" integer NOT NULL,
	"question_id" integer NOT NULL,
	"selected_option" text NOT NULL,
	"is_correct" boolean NOT NULL,
	"mode" text DEFAULT 'practice' NOT NULL,
	"exam_session_id" integer,
	"time_spent_sec" integer DEFAULT 18 NOT NULL,
	"attempted_at" timestamp DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password_hash" text NOT NULL,
	"role" text DEFAULT 'student' NOT NULL,
	"target_commission" text DEFAULT 'Federal (Loksewa Aayog)' NOT NULL,
	"target_level" text DEFAULT 'Fifth Level - General Administration' NOT NULL,
	"preferred_lang" text DEFAULT 'en' NOT NULL,
	"preferred_theme" text DEFAULT 'light' NOT NULL,
	"streak_days" integer DEFAULT 1 NOT NULL,
	"created_at" timestamp DEFAULT now() NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
ALTER TABLE "current_affairs" ADD CONSTRAINT "current_affairs_linked_question_id_questions_id_fk" FOREIGN KEY ("linked_question_id") REFERENCES "public"."questions"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "mock_exam_sessions" ADD CONSTRAINT "mock_exam_sessions_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "questions" ADD CONSTRAINT "questions_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "study_progress" ADD CONSTRAINT "study_progress_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "study_progress" ADD CONSTRAINT "study_progress_topic_id_topics_id_fk" FOREIGN KEY ("topic_id") REFERENCES "public"."topics"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "topics" ADD CONSTRAINT "topics_subject_id_subjects_id_fk" FOREIGN KEY ("subject_id") REFERENCES "public"."subjects"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_bookmarks" ADD CONSTRAINT "user_bookmarks_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_question_attempts" ADD CONSTRAINT "user_question_attempts_user_id_users_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "user_question_attempts" ADD CONSTRAINT "user_question_attempts_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE cascade ON UPDATE no action;