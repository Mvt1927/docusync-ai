"use client";

import React, { useEffect } from "react";
import { AlertOctagon, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("DocuSync Application Error:", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col items-center">
        <div className="size-16 rounded-2xl bg-rose-950/40 border border-rose-800/60 flex items-center justify-center mb-6 shadow-xl shadow-rose-950/40">
          <AlertOctagon className="size-8 text-rose-400" />
        </div>
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-rose-400 mb-2">
          Runtime Exception Caught
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
          Something went wrong
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          An unexpected error occurred during contract intelligence execution. Our telemetry has logged this incident.
        </p>
        <Button
          onClick={() => reset()}
          className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold h-10 px-5 inline-flex items-center gap-2"
        >
          <RotateCcw className="size-4" />
          <span>Try Again</span>
        </Button>
      </div>
    </div>
  );
}
