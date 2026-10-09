import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DocuSync AI — Enterprise Contract Intelligence at Lightning Speed",
  description:
    "Turn complex 50+ page commercial contracts into instant, actionable risk intelligence. Clause comparison, automated redlines, and legal compliance audits with zero hallucination.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-slate-100">{children}</body>
    </html>
  );
}
