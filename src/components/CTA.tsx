"use client";

import React, { useState } from "react";
import { ArrowRight, CheckCircle2, Sparkles, Lock, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="trial" className="py-24 bg-[#090D16] relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-indigo-600/20 via-cyan-500/15 to-transparent rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Double-Bezel Shell */}
        <div className="p-2 sm:p-2.5 rounded-[2.5rem] bg-gradient-to-b from-white/[0.1] via-white/[0.04] to-transparent border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)]">
          <div className="relative rounded-[calc(2.5rem-0.625rem)] border border-white/[0.04] bg-gradient-to-b from-[#10172A] to-[#080C16] p-8 sm:p-14 text-center overflow-hidden">
            {/* Subtle grid pattern inside card */}
            <div className="absolute inset-0 bg-grid-pattern opacity-15 pointer-events-none" />

            <div className="relative max-w-2xl mx-auto">
              {/* Microscopic Eyebrow */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-indigo-300 text-[10px] font-mono uppercase tracking-[0.15em] mb-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                <Sparkles className="size-3 text-cyan-400" />
                <span>Zero Deployment Friction • 2 Minutes</span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-[-0.03em] leading-tight mb-4 text-balance">
                Accelerate Your Contract Reviews by{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-200">
                  10x Today
                </span>
              </h2>

              {/* Subtext */}
              <p className="text-slate-300/90 text-sm sm:text-base leading-relaxed mb-8">
                Join leading legal operations and deal-desk teams eliminating contract review bottlenecks with zero-hallucination AI.
              </p>

              {/* Form */}
              {submitted ? (
                <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-sm flex items-center justify-center gap-2 max-w-md mx-auto">
                  <CheckCircle2 className="size-5 text-emerald-400" />
                  <span>
                    Welcome aboard! Check <strong>{email}</strong> for your sandbox access link.
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6"
                >
                  <Input
                    type="email"
                    placeholder="Enter your corporate email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11 bg-slate-950/80 border-white/[0.1] text-white placeholder:text-slate-500 text-xs sm:text-sm px-4 rounded-full focus-visible:ring-indigo-500 shadow-inner"
                  />
                  <button
                    type="submit"
                    className="group w-full sm:w-auto h-11 pl-5 pr-1.5 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-[0_8px_24px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] border border-white/20 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] inline-flex items-center justify-center gap-2.5 shrink-0"
                  >
                    <span>Start 14-Day Free Trial</span>
                    <span className="size-8 rounded-full bg-black/25 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                      <ArrowRight className="size-3.5" />
                    </span>
                  </button>
                </form>
              )}

            {/* Guarantees */}
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                No credit card required
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="size-3.5 text-emerald-400" />
                14-day full platform access
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Lock className="size-3.5 text-cyan-400" />
                Zero data retention SLA
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
