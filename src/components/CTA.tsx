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
        <div className="relative rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#10172A] to-[#0A0E1A] p-8 sm:p-14 shadow-2xl shadow-indigo-950/40 text-center overflow-hidden">
          {/* Subtle grid pattern inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

          <div className="relative max-w-2xl mx-auto">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-6">
              <Sparkles className="size-3 text-cyan-400" />
              <span>Instant Setup in 2 Minutes</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
              Accelerate Your Contract Reviews by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
                10x Today
              </span>
            </h2>

            {/* Subtext */}
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
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
                  className="h-11 bg-slate-950/80 border-slate-700 text-white placeholder:text-slate-500 text-xs sm:text-sm px-4 rounded-xl focus-visible:ring-indigo-500"
                />
                <Button
                  type="submit"
                  className="w-full sm:w-auto h-11 px-6 rounded-xl font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25 shrink-0"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="size-4 ml-1.5" />
                </Button>
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
    </section>
  );
}
