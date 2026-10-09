import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { InteractiveSandbox } from "@/components/InteractiveSandbox";
import { Metrics } from "@/components/Metrics";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Sticky Header */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero />
        <Features />
        <HowItWorks />
        <InteractiveSandbox />
        <Metrics />
        <Pricing />
        <FAQ />
        <CTA />
      </main>

      {/* Enterprise Footer */}
      <Footer />
    </div>
  );
}
