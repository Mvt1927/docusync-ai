import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[100dvh] bg-[#F6F4EE] text-[#141413] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center flex flex-col items-center border border-[#DCD8CE] bg-[#EFECE4] p-8 rounded-md">
        <div className="size-12 rounded-md bg-[#F6F4EE] border border-[#DCD8CE] flex items-center justify-center mb-5 font-mono text-sm text-[#C84B31]">
          404
        </div>
        <span className="text-xs font-mono uppercase tracking-widest text-[#C84B31] mb-2">
          Clause Reference Not Found
        </span>
        <h1 className="font-serif text-3xl font-normal text-[#141413] tracking-tight mb-3">
          Page Not Available
        </h1>
        <p className="text-xs sm:text-sm text-[#6E6A63] leading-relaxed mb-8">
          The legal document or route you are looking for has been relocated or expired. Return to the DocuSync AI workspace.
        </p>
        <Link
          href="/"
          className="bg-[#141413] hover:bg-[#C84B31] text-[#F6F4EE] text-xs font-mono uppercase tracking-wider h-10 px-5 rounded-md inline-flex items-center gap-2 transition-colors"
        >
          <span aria-hidden="true">&larr;</span>
          <span>Return to Workspace</span>
        </Link>
      </div>
    </div>
  );
}
