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
          {/* Announcement pill badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-950/70 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-6 shadow-sm shadow-indigo-950 hover:border-indigo-500/50 transition-colors">
            <span className="flex size-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Next-Gen Legal AI</span>
            <span className="text-slate-600">•</span>
            <span className="text-cyan-300 font-semibold">Zero Hallucination Guarantee</span>
            <span className="text-slate-600">•</span>
            <span>1M+ Context Window</span>
          </div>

          {/* High-Impact Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Enterprise Contract Intelligence at{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-indigo-300">
              Lightning Speed
            </span>
          </h1>

          {/* Subheadline (Clean, no AI slop) */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto">
            Eliminate manual contract review bottlenecks. Instantly extract structured risks, audit legal clauses against your company playbook, and auto-flag liabilities in seconds.
          </p>

          {/* Dual CTAs (Optimized for CRO) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-5">
            <a
              href="#trial"
              className="w-full sm:w-auto h-12 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 border border-indigo-400/30 transition-all inline-flex items-center justify-center gap-2"
            >
              <Calendar className="size-4" />
              <span>Book a Demo</span>
              <ArrowRight className="size-4 ml-1" />
            </a>

            <a
              href="#sandbox"
              className="w-full sm:w-auto h-12 px-6 rounded-xl font-semibold text-sm border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white backdrop-blur-sm transition-all inline-flex items-center justify-center gap-2"
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
