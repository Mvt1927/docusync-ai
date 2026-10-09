import React from "react";
import { FileText, Sparkles } from "lucide-react";

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="relative flex items-center justify-center size-14 rounded-2xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 p-[1px] shadow-2xl shadow-indigo-500/30 animate-pulse">
          <div className="size-full bg-[#0B0F19] rounded-[15px] flex items-center justify-center">
            <FileText className="size-7 text-indigo-400" />
            <span className="absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full bg-cyan-400">
              <Sparkles className="size-2.5 text-[#0B0F19]" />
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-bold text-white tracking-wider uppercase font-mono">
            DocuSync AI
          </h2>
          <p className="text-xs text-slate-400">
            Initializing neural legal intelligence...
          </p>
        </div>
      </div>
    </div>
  );
}
