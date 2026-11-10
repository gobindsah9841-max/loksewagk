import Link from "next/link";

export const dynamic = "force-static";

export default function OfflinePage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#F8FAFC] px-6 py-12 dark:bg-[#0B1120]">
      <section className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm dark:border-slate-800 dark:bg-[#131C31]">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0F294A] text-white dark:bg-sky-500 dark:text-slate-950">
          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.1"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3z" />
            <path d="M9 12l2 2 4-4" />
          </svg>
        </div>
        <h1 className="text-xl font-bold text-slate-900 dark:text-white">
          You are offline
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          Loksewa Pro needs an internet connection to load fresh questions,
          mock exams and your saved progress. Please reconnect and try again.
        </p>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          तपाईं अफलाइन हुनुहुन्छ। इन्टरनेट जोडेर पुनः प्रयास गर्नुहोस्।
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0F294A] px-6 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950"
        >
          Retry / पुनः प्रयास
        </Link>
      </section>
    </main>
  );
}
