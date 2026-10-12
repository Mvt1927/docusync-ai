"use client";

import React, { useEffect } from "react";
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
    <div className="min-h-[100dvh] bg-[#F6F4EE] text-[#141413] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col items-center border border-[#DCD8CE] bg-[#EFECE4] p-8 rounded-md">
        <div className="size-12 rounded-md bg-[#F6F4EE] border border-[#DCD8CE] flex items-center justify-center mb-5 font-mono text-sm text-[#C84B31]">
          !
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#C84B31] mb-2">
          Runtime Exception Caught
        </span>
        <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#141413] tracking-tight mb-3">
          Something went wrong
        </h1>
        <p className="text-xs sm:text-sm text-[#6E6A63] leading-relaxed mb-6">
          An unexpected error occurred during contract intelligence execution. Our telemetry has logged this incident.
        </p>
        <Button
          onClick={() => reset()}
          className="bg-[#141413] hover:bg-[#C84B31] text-[#F6F4EE] text-xs font-mono uppercase tracking-wider h-10 px-5 rounded-md inline-flex items-center gap-2"
        >
          <span>Try Again</span>
        </Button>
      </div>
    </div>
  );
}
