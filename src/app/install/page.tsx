import type { Metadata } from "next";
import Link from "next/link";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Get the Mobile App (APK) — Loksewa Pro",
  description:
    "Install Loksewa Pro on Android as a PWA or build a Play-Store-ready APK/AAB via PWABuilder (Option B).",
};

const CHECKLIST = [
  "Web app manifest (/manifest.webmanifest) with name, icons & standalone display",
  "App icons: 192px, 512px, maskable 512px & Apple touch icon",
  "Service worker (/sw.js) with offline fallback page (/offline)",
  "Mobile viewport (viewport-fit=cover), theme-color & install banner",
];

const PWA_STEPS = [
  "Deploy this project to a public HTTPS URL (Vercel / Railway / Render). PWABuilder and Android both reject plain-HTTP and private preview URLs.",
  "On your Android phone open the deployed URL in Chrome.",
  "Tap the ⋮ menu → “Add to Home screen” → “Install”. (If the in-app “Install Loksewa Pro app” banner appears, just tap Install.)",
  "The app now launches fullscreen from your home screen like a native app and works with the offline page when the network drops.",
];

const OPTION_B_STEPS = [
  "Deploy the web app to production HTTPS and confirm these URLs load: /manifest.webmanifest, /sw.js, /icons/icon-512.png and /offline.",
  "Go to pwabuilder.com and enter your production URL (e.g. https://loksewapro.com). Wait for the validation score — fix anything it flags.",
  "Click Android → Generate package with these settings: Package ID np.loksewapro.app (reverse-domain, lowercase), App name “Loksewa Pro”, Display mode Standalone, Signing key “Generate new (recommended)” and keep the downloaded keystore + passwords somewhere safe — you need the SAME key for every future update.",
  "Download the .aab (for Google Play) or the signed .apk (for direct install / sharing). Install the APK on your phone (allow “Install unknown apps” for your browser when asked).",
  "Optional but recommended: remove the browser address bar inside the installed APK by proving you own the domain — PWABuilder shows your SHA-256 fingerprint; publish it at https://YOUR-DOMAIN/.well-known/assetlinks.json (exact template is shown below), then reinstall once.",
];

const BUBBLEWRAP_COMMANDS = [
  "npm i -g @bubblewrap/cli",
  "bubblewrap init --manifest https://YOUR-DOMAIN/manifest.webmanifest",
  "# accept defaults, Package ID: np.loksewapro.app",
  "bubblewrap build",
  "# first build creates android.keystore — BACK IT UP with its passwords",
];

export default function InstallPage() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl bg-[#F8FAFC] px-4 py-8 text-slate-900 sm:px-6 dark:bg-[#0B1120] dark:text-slate-100">
      <Link
        href="/"
        className="text-xs font-semibold text-[#0F294A] hover:underline dark:text-sky-400"
      >
        ← Back to Loksewa Pro
      </Link>

      <p className="mt-4 inline-block rounded-full bg-[#C81E3D]/10 px-3 py-1 text-[11px] font-bold text-[#C81E3D]">
        MOBILE APK · OPTION B (PWA → PLAY-STORE PACKAGE)
      </p>
      <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
        Get Loksewa Pro as a mobile app
      </h1>
      <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        This web app is already packaged as an installable PWA.{" "}
        <strong>Option B</strong> turns that PWA into a real Android{" "}
        <strong>APK / AAB</strong> with PWABuilder (Microsoft&apos;s free
        Trusted-Web-Activity packager) — no Android Studio needed. Your data,
        questions and mock exams stay on the server; the APK is a fullscreen
        wrapper around your deployed site.
      </p>

      {/* Readiness checklist */}
      <section className="mt-6 rounded-2xl border border-emerald-200 bg-white p-5 dark:border-emerald-900/60 dark:bg-[#131C31]">
        <h2 className="text-base font-bold text-emerald-800 dark:text-emerald-300">
          ✅ Already done in this project
        </h2>
        <ul className="mt-3 space-y-2">
          {CHECKLIST.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 font-bold text-emerald-600">✓</span>
              <span className="font-mono-num text-[13px]">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Option B */}
      <section className="mt-5 rounded-2xl border-2 border-[#0F294A] bg-white p-5 dark:border-sky-500 dark:bg-[#131C31]">
        <h2 className="text-base font-bold">
          Option B (recommended): build the APK with PWABuilder
        </h2>
        <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed">
          {OPTION_B_STEPS.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <a
          href="https://www.pwabuilder.com"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#0F294A] px-6 text-sm font-semibold text-white dark:bg-sky-500 dark:text-slate-950"
        >
          Open PWABuilder →
        </a>
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          Use your <strong>production</strong> domain here — the temporary
          sandbox preview URL will not validate and cannot ship to the Play
          Store.
        </p>
      </section>

      {/* assetlinks template */}
      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#131C31]">
        <h2 className="text-base font-bold">
          Domain verification file (removes the URL bar)
        </h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          After PWABuilder shows your SHA-256 certificate fingerprint, serve
          exactly this file from your production domain (replace the
          placeholders). In this project that means creating{" "}
          <code>public/.well-known/assetlinks.json</code> and redeploying.
        </p>
        <pre className="font-mono-num mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-[11px] leading-relaxed text-emerald-200">
          {`[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package_name": "np.loksewapro.app",
    "sha256_cert_fingerprints": ["PASTE_SHA256_FROM_PWABUILDER_HERE"]
  }
}]`}
        </pre>
      </section>

      {/* Bubblewrap alternative */}
      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#131C31]">
        <h2 className="text-base font-bold">
          Same Option B, command-line way (Bubblewrap)
        </h2>
        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
          Identical output to PWABuilder (it uses Bubblewrap under the hood).
          Needs Node 18+ and Java 17 on your computer — not in this sandbox.
        </p>
        <pre className="font-mono-num mt-3 overflow-x-auto rounded-xl bg-slate-950 p-4 text-[11px] leading-relaxed text-sky-200">
          {BUBBLEWRAP_COMMANDS.join("\n")}
        </pre>
      </section>

      {/* Option A */}
      <section className="mt-5 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-[#131C31]">
        <h2 className="text-base font-bold">
          Option A: skip the APK — install the PWA directly (fastest)
        </h2>
        <ol className="mt-3 list-decimal space-y-2.5 pl-5 text-sm leading-relaxed">
          {PWA_STEPS.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
        <p className="mt-3 text-xs text-slate-500 dark:text-slate-400">
          Best for classroom / coaching-centre distribution today: share one
          link, students install in 10 seconds, updates are instant (no
          re-install, no keystore to guard).
        </p>
      </section>

      <p className="mt-6 text-center text-[11px] text-slate-400">
        Loksewa Pro · PWA + TWA packaging notes · keep your Android keystore
        backed up — losing it means a new Play listing.
      </p>
    </main>
  );
}
