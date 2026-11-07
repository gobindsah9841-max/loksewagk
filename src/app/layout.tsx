import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { PwaManager } from "@/components/PwaManager";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Loksewa Pro — Complete Nepal Public Service Commission (PSC & PPSC) Exam Preparation",
  description:
    "Comprehensive bilingual (Nepali & English) examination preparation platform for Federal Loksewa Aayog, all 7 Provincial Public Service Commissions (PPSC), and Fifth Level General Administration.",
  manifest: "/manifest.webmanifest",
  applicationName: "Loksewa Pro",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Loksewa Pro",
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      {
        url: "/icons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  other: {
    "mobile-web-app-capable": "yes",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F294A" },
    { media: "(prefers-color-scheme: dark)", color: "#0B1120" },
  ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-[#F8FAFC] text-slate-900 antialiased dark:bg-[#0B1120] dark:text-slate-100">
        {children}
        <PwaManager />
      </body>
    </html>
  );
}
