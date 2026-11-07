"use client";

import { useEffect, useState } from "react";
import { Download, Smartphone, X } from "lucide-react";

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed" }>;
}

export function PwaManager() {
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Register service worker (production only — harmless in dev)
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => undefined);
    }

    const mq = window.matchMedia("(display-mode: standalone)");
    const checkStandalone =
      mq.matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone ===
        true;
    setIsStandalone(checkStandalone);

    const onBeforeInstall = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    };
    const onInstalled = () => {
      setInstalled(true);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", onBeforeInstall);
    window.addEventListener("appinstalled", onInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", onBeforeInstall);
      window.removeEventListener("appinstalled", onInstalled);
    };
  }, []);

  if (isStandalone || installed || dismissed || !deferredPrompt) {
    return null;
  }

  async function handleInstall() {
    if (!deferredPrompt) return;
    await deferredPrompt.prompt();
    const choice = await deferredPrompt.userChoice.catch(() => ({
      outcome: "dismissed" as const,
    }));
    if (choice.outcome === "accepted") {
      setInstalled(true);
    }
    setDeferredPrompt(null);
  }

  return (
    <div className="fixed right-3 bottom-20 left-3 z-40 mx-auto max-w-xl lg:bottom-6">
      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/95 p-3 shadow-lg backdrop-blur dark:border-slate-700 dark:bg-[#131C31]/95">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F294A] text-white dark:bg-sky-500 dark:text-slate-950">
          <Smartphone className="h-5 w-5" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-bold text-slate-900 dark:text-white">
            Install Loksewa Pro app
          </p>
          <p className="truncate text-xs text-slate-500 dark:text-slate-400">
            Faster launch, fullscreen, offline-ready
          </p>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss install banner"
          className="rounded-lg p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          <X className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={handleInstall}
          className="inline-flex min-h-[40px] shrink-0 items-center gap-1.5 rounded-xl bg-[#C81E3D] px-4 text-xs font-semibold text-white hover:bg-[#a81732]"
        >
          <Download className="h-4 w-4" />
          Install
        </button>
      </div>
    </div>
  );
}
