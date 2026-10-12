import React from "react";

export default function Loading() {
  return (
    <div className="min-h-[100dvh] bg-[#F6F4EE] text-[#141413] flex items-center justify-center px-4">
      <div className="flex flex-col items-center gap-4 text-center max-w-sm w-full border border-[#DCD8CE] bg-[#EFECE4] p-8 rounded-md">
        <div className="flex items-center justify-center size-12 rounded-md border border-[#DCD8CE] bg-[#F6F4EE] text-[#C84B31] font-mono text-sm">
          §
        </div>
        <div className="flex flex-col gap-1.5">
          <h2 className="font-serif text-xl font-normal text-[#141413] tracking-tight">
            DocuSync AI
          </h2>
          <p className="text-xs font-mono text-[#6E6A63]">
            Indexing contract clauses and deterministic rules...
          </p>
        </div>
      </div>
    </div>
  );
}
