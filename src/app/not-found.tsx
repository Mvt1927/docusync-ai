import React from "react";
import Link from "next/link";
import { FileQuestion, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="size-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center mb-6 shadow-xl shadow-indigo-950/40">
          <FileQuestion className="size-8 text-indigo-400" />
        </div>
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-cyan-400 mb-2">
          404 — Contract Clause Not Found
        </span>
        <h1 className="text-3xl font-extrabold text-white mb-3">
          Page Not Available
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
          The legal document or route you are looking for has been relocated or expired. Return to the DocuSync AI intelligence portal.
        </p>
        <Link
          href="/"
          className="bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold h-10 px-5 rounded-lg inline-flex items-center gap-2 shadow-lg shadow-indigo-500/25"
        >
          <ArrowLeft className="size-4" />
          <span>Return to Landing Page</span>
        </Link>
      </div>
    </div>
  );
}
