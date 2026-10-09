import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DocuSync AI — Enterprise Contract Intelligence at Lightning Speed",
  description:
    "Turn complex 50+ page commercial contracts into instant, actionable risk intelligence. Clause comparison, automated redlines, and legal compliance audits with zero hallucination.",
  keywords: [
    "Legal AI",
    "Contract Review",
    "B2B SaaS",
    "Compliance Audit",
    "Automated Redlining",
    "Enterprise Contract Intelligence",
  ],
  authors: [{ name: "DocuSync AI" }],
  openGraph: {
    title: "DocuSync AI — Enterprise Contract Intelligence",
    description:
      "Eliminate contract review bottlenecks. Instant structured risks & playbook compliance with zero hallucination.",
    url: "https://docusync.ai",
    siteName: "DocuSync AI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DocuSync AI — Enterprise Contract Intelligence",
    description:
      "Turn 50+ page commercial contracts into actionable risk intelligence in seconds.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${jetbrainsMono.variable} dark h-full antialiased selection:bg-indigo-500/30 selection:text-indigo-200`}
    >
      <body className="min-h-full flex flex-col bg-[#0B0F19] text-slate-100 font-sans">{children}</body>
    </html>
  );
}
