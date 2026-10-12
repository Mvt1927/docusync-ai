import React from "react";
import { HeroMockup } from "@/components/HeroMockup";

const legalPartners = [
  { code: "01", label: "CRAVATH / BENCHMARK", metric: "MSA + M&A CORPUS" },
  { code: "02", label: "SKADDEN / ARCHIVE", metric: "CROSS-BORDER INDEMNITY" },
  { code: "03", label: "LATHAM / CORPUS", metric: "PLAYBOOK ENFORCEMENT" },
  { code: "04", label: "KIRKLAND / VAULT", metric: "DEBT & COVENANT AUDIT" },
  { code: "05", label: "SULLIVAN / LEDGER", metric: "REGULATORY COMPLIANCE" },
];

const technicalGuarantees = [
  { code: "A1", spec: "14-DAY TRIAL / NO CREDIT CARD" },
  { code: "A2", spec: "SOC2 TYPE II CERTIFIED" },
  { code: "A3", spec: "ZERO DATA RETENTION" },
];

export function Hero() {
  return (
    <section className="w-full bg-[#F6F4EE] text-[#141413] border-b border-[#DCD8CE]">
      {/* Top Asymmetric 12-Column Swiss Editorial Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 border-b border-[#DCD8CE]">
        {/* Left Column (7 cols): Primary Editorial Statement & CTAs */}
        <div className="lg:col-span-7 px-4 sm:px-8 lg:px-10 py-12 sm:py-16 lg:py-20 border-b lg:border-b-0 lg:border-r border-[#DCD8CE] flex flex-col justify-between">
          <div>
            {/* Left-Aligned Technical Index Bar */}
            <div className="flex items-center gap-3 pb-4 mb-8 border-b border-[#DCD8CE]">
              <span className="font-mono text-xs text-[#C84B31] font-medium">
                [§]
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#141413]">
                DOCUSYNC // LEGAL ENGINEERING SPECIFICATION 01
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-normal tracking-tight text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.04] text-[#141413] mb-6">
              Review Complex Contracts at{" "}
              <span className="font-serif italic text-[#C84B31]">
                Deterministic Speed
              </span>{" "}
              With Zero Hallucinations.
            </h1>

            {/* Conversion Copywriting Subheadline */}
            <p className="text-base sm:text-lg text-[#6E6A63] leading-relaxed max-w-2xl mb-10 font-normal">
              Parse 100-page Master Services Agreements against your corporate
              playbook in 1.8 seconds. Every flagged liability, uncapped
              indemnity, and suggested redline is anchored to an exact clause
              citation.
            </p>

            {/* Square Architectural CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
              <a
                href="#trial"
                className="rounded-none bg-[#141413] text-[#F6F4EE] hover:bg-[#C84B31] text-xs sm:text-sm font-medium px-7 py-4 transition-colors inline-flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <span>Start 14-Day Free Trial →</span>
              </a>
              <a
                href="#sandbox"
                className="rounded-none border border-[#141413] bg-transparent text-[#141413] hover:bg-[#EFECE4] text-xs sm:text-sm font-medium px-7 py-4 transition-colors inline-flex items-center justify-center gap-3 whitespace-nowrap"
              >
                <span>Inspect Live Sandbox [§]</span>
              </a>
            </div>
          </div>

          {/* Technical Assurance Ledger Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-[#DCD8CE] bg-[#EFECE4]">
            {technicalGuarantees.map((item) => (
              <div
                key={item.code}
                className="px-3.5 py-3 border-b sm:border-b-0 sm:border-r last:border-b-0 last:border-r-0 border-[#DCD8CE] flex items-center gap-2"
              >
                <span className="font-mono text-[10px] text-[#C84B31]">
                  [{item.code}]
                </span>
                <span className="font-mono text-[10px] tracking-wider uppercase text-[#141413]">
                  {item.spec}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (5 cols): Real-Time System Telemetry & Concordance Ledger */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#EFECE4]">
          {/* Telemetry Header */}
          <div className="px-6 py-4 border-b border-[#DCD8CE] flex items-center justify-between bg-[#F6F4EE]">
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#141413]">
              SYSTEM TELEMETRY / CONCORDANCE LEDGER
            </span>
            <span className="font-mono text-[11px] text-[#2D5A3C]">
              [✓] VERIFIED
            </span>
          </div>

          {/* Primary Metrics Grid (2 Cells) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-[#DCD8CE]">
            <div className="p-6 border-b sm:border-b-0 sm:border-r border-[#DCD8CE] bg-[#F6F4EE]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E6A63] block mb-2">
                THROUGHPUT BENCHMARK
              </span>
              <div className="font-mono text-2xl sm:text-3xl font-normal text-[#141413] tracking-tight">
                1.8s / 100 pages
              </div>
              <span className="font-mono text-[11px] text-[#6E6A63] mt-1.5 block">
                Deterministic AST clause parser
              </span>
            </div>

            <div className="p-6 bg-[#F6F4EE]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E6A63] block mb-2">
                EXTRACTION PRECISION
              </span>
              <div className="font-mono text-2xl sm:text-3xl font-normal text-[#2D5A3C] tracking-tight">
                99.4%
              </div>
              <span className="font-mono text-[11px] text-[#6E6A63] mt-1.5 block">
                Zero ungrounded citations
              </span>
            </div>
          </div>

          {/* Citation Verification Spec */}
          <div className="px-6 py-4 border-b border-[#DCD8CE] bg-[#EFECE4] flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E6A63]">
              CONTEXT WINDOW CAPACITY
            </span>
            <span className="font-mono text-xs text-[#141413] font-medium">
              1,000,000 TOKENS / 100% CITATION LOCK
            </span>
          </div>

          {/* Reference Corpus / Legal Partners Table */}
          <div className="flex-1 flex flex-col justify-between">
            <div className="px-6 py-3 border-b border-[#DCD8CE] bg-[#F6F4EE]">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E6A63]">
                INSTITUTIONAL PLAYBOOK BENCHMARKS
              </span>
            </div>

            <div className="divide-y divide-[#DCD8CE]">
              {legalPartners.map((partner) => (
                <div
                  key={partner.code}
                  className="px-6 py-3.5 flex items-center justify-between bg-[#F6F4EE] hover:bg-[#EFECE4] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-[11px] text-[#C84B31]">
                      {partner.code}
                    </span>
                    <span className="font-mono text-xs font-medium tracking-wider text-[#141413]">
                      {partner.label}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-[#6E6A63]">
                    {partner.metric}
                  </span>
                </div>
              ))}
            </div>

            <div className="px-6 py-3.5 border-t border-[#DCD8CE] bg-[#EFECE4] flex items-center justify-between">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E6A63]">
                AUDIT LOGGING PROTOCOL
              </span>
              <span className="font-mono text-[11px] text-[#141413]">
                SHA-256 IMMUTABLE LEDGER
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Interactive Archival Courtroom Workbench */}
      <div id="product" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 py-12 sm:py-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-6 border-b border-[#DCD8CE]">
          <div className="flex items-center gap-2.5">
            <span className="font-mono text-xs text-[#C84B31]">[§ 01.A]</span>
            <span className="font-mono text-xs uppercase tracking-widest text-[#141413]">
              ARCHIVAL COURTROOM WORKBENCH / LIVE REDLINE ENGINE
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#6E6A63]">
            SELECT ANY CLAUSE BELOW TO INSPECT PLAYBOOK DEVIATION & REDLINE DIFF
          </span>
        </div>

        <HeroMockup />
      </div>
    </section>
  );
}
