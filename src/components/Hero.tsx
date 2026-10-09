import React from "react";
import { Sparkles, ArrowRight, Play, Calendar, ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { HeroMockup } from "@/components/HeroMockup";

export function Hero() {
  const logos = [
    { name: "Snowflake", text: "SNOWFLAKE" },
    { name: "Datadog", text: "DATADOG" },
    { name: "Stripe", text: "STRIPE" },
    { name: "Scale AI", text: "SCALE AI" },
    { name: "Vercel", text: "VERCEL" },
    { name: "Ramp", text: "RAMP" },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-[#0B0F19]">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Above-The-Fold Copy & CTAs */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          {/* Microscopic Eyebrow Tag */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1 rounded-full bg-white/[0.03] border border-white/[0.08] text-indigo-300 text-[11px] font-mono uppercase tracking-[0.15em] mb-8 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.12)]">
            <span className="flex size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
            <span>Deterministic Legal AI</span>
            <span className="text-white/20">•</span>
            <span className="text-cyan-300 font-semibold">Zero Hallucinations</span>
            <span className="text-white/20">•</span>
            <span>1M+ Tokens</span>
          </div>

          {/* High-Impact Headline with Negative Tracking */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] text-white leading-[1.06] mb-6 text-balance">
            Enterprise Contract Intelligence at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-cyan-200 to-indigo-200">
              Lightning Speed
            </span>
          </h1>

          {/* Subheadline (Refined width and line-height) */}
          <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed mb-9 max-w-2xl mx-auto font-normal">
            Eliminate manual contract review bottlenecks. Instantly extract structured risks, audit legal clauses against your company playbook, and auto-flag liabilities in seconds.
          </p>

          {/* Dual CTAs with Button-in-Button Trailing Icon */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-6">
            <a
              href="#trial"
              className="group w-full sm:w-auto h-12 pl-6 pr-2 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-indigo-500 via-indigo-600 to-cyan-500 hover:from-indigo-400 hover:to-cyan-400 text-white shadow-[0_12px_32px_rgba(99,102,241,0.35),inset_0_1px_1px_rgba(255,255,255,0.25)] border border-white/20 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] inline-flex items-center justify-center gap-3"
            >
              <Calendar className="size-4 text-indigo-100" />
              <span>Book a Demo</span>
              <span className="size-8 rounded-full bg-black/25 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="size-3.5" />
              </span>
            </a>

            <a
              href="#sandbox"
              className="w-full sm:w-auto h-12 px-6 rounded-full font-semibold text-xs sm:text-sm border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] text-slate-200 hover:text-white backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.06)] transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] inline-flex items-center justify-center gap-2.5"
            >
              <Play className="size-3.5 text-cyan-400 fill-cyan-400/20" />
              <span>Try Interactive Sandbox</span>
            </a>
          </div>

          {/* Micro Risk-Reversal right below CTA */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              14-day free trial
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <CheckCircle2 className="size-3.5 text-emerald-400" />
              No credit card required
            </span>
            <span className="text-slate-600">•</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <Lock className="size-3.5 text-cyan-400" />
              SOC 2 Type II Certified
            </span>
          </div>
        </div>

        {/* Hero Interactive UI Mockup */}
        <div id="product" className="relative max-w-5xl mx-auto mb-16 sm:mb-20">
          <HeroMockup />
        </div>

        {/* Social Proof Sub-bar */}
        <div className="text-center pt-8 border-t border-slate-800/60 max-w-5xl mx-auto">
          <p className="text-xs uppercase font-semibold tracking-wider text-slate-400 mb-6">
            Trusted by legal & operations teams at fast-growing companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 opacity-65 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
            {logos.map((logo) => (
              <span
                key={logo.name}
                className="font-mono text-sm sm:text-base font-extrabold tracking-widest text-slate-300 hover:text-white transition-colors"
              >
                {logo.text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
