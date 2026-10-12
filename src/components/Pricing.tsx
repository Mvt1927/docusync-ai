"use client";

import React, { useState } from "react";

export function Pricing() {
  const [annualBilling, setAnnualBilling] = useState<boolean>(true);

  const tiers = [
    {
      code: "TIER 01 // BOUTIQUE",
      name: "Boutique Practice",
      description:
        "For specialist law practices and high-velocity legal counsel triaging routine commercial agreements.",
      monthlyPrice: 240,
      annualPrice: 190,
      highlighted: false,
      ctaText: "Provision Boutique Sandbox",
      features: [
        "Up to 75 commercial agreement audits per month",
        "Standard Legal Playbook ruleset (MSA, NDA, SaaS)",
        "Deterministic PDF & DOCX clause extraction",
        "Verbatim line-and-page citation anchoring",
        "Exportable executive risk ledger (PDF & CSV)",
      ],
    },
    {
      code: "TIER 02 // INSTITUTIONAL",
      name: "Corporate Legal",
      badge: "RECOMMENDED ALLOCATION",
      description:
        "For scaling in-house legal departments and commercial deal desks negotiating multi-exhibit counterparty paper.",
      monthlyPrice: 610,
      annualPrice: 490,
      highlighted: true,
      ctaText: "Deploy Corporate Trial",
      features: [
        "Unlimited agreement ingestion & multi-document audits",
        "Custom Playbook Rule Engine with fallback matrices",
        "Cross-document reasoning (MSA + SOW + DPA + Annexes)",
        "Automated Microsoft Word (.docx) track-changes output",
        "Bi-directional Ironclad, Salesforce & DocuSign CLM hooks",
        "Cryptographic Zero Data Retention (ZDR) SLA guarantee",
        "Dedicated legal engineering support (4-hour SLA)",
      ],
    },
    {
      code: "TIER 03 // SOVEREIGN ENCLAVE",
      name: "AmLaw / Enterprise",
      description:
        "For AmLaw 100 firms, multinational general counsel, and regulated institutions requiring single-tenant isolation.",
      monthlyPrice: null,
      annualPrice: null,
      highlighted: false,
      ctaText: "Request Architecture Briefing",
      features: [
        "Dedicated isolated inference cluster (AWS, GCP, Azure VPC)",
        "Custom historical precedent & clause library indexing",
        "Full REST API & webhook pipeline for proprietary CLMs",
        "SOC 2 Type II, ISO 27001, HIPAA BAA & GDPR Art. 28",
        "Custom cryptographic key management (BYOK)",
        "Dedicated Legal Solutions Architect (1-hour SLA)",
      ],
    },
  ];

  return (
    <section
      id="pricing"
      className="py-24 bg-[#F6F4EE] text-[#141413] border-t border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 12-Column Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C84B31] block mb-3">
              SECTION 04 // LICENSING &amp; DEPLOYMENT LEDGER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141413] leading-[1.1]">
              Predictable Commercial Licensing for{" "}
              <span className="font-serif italic text-[#C84B31]">
                High-Velocity Deal Desks
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#6E6A63] mt-4 max-w-2xl leading-relaxed">
              Flat-rate institutional allocations with zero token overage
              penalties and cryptographic Zero Data Retention included across
              every deployment tier.
            </p>
          </div>

          {/* Mechanical Square Billing Toggle */}
          <div className="lg:col-span-5 flex lg:justify-end">
            <div className="inline-flex border border-[#DCD8CE] bg-[#EFECE4] p-1">
              <button
                type="button"
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer ${
                  !annualBilling
                    ? "bg-[#141413] text-[#F6F4EE]"
                    : "text-[#6E6A63] hover:text-[#141413]"
                }`}
              >
                Monthly Cycle
              </button>
              <button
                type="button"
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-2.5 font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2 cursor-pointer ${
                  annualBilling
                    ? "bg-[#141413] text-[#F6F4EE]"
                    : "text-[#6E6A63] hover:text-[#141413]"
                }`}
              >
                <span>Annual Commitment</span>
                <span
                  className={`px-1.5 py-0.5 text-[10px] ${
                    annualBilling
                      ? "bg-[#2D5A3C] text-[#F6F4EE]"
                      : "bg-[#DCD8CE] text-[#141413]"
                  }`}
                >
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* 3-Tier Gapless 1px Architectural Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-[#DCD8CE] divide-y lg:divide-y-0 lg:divide-x divide-[#DCD8CE] bg-[#F6F4EE]">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`p-8 sm:p-10 flex flex-col justify-between ${
                tier.highlighted
                  ? "bg-[#EFECE4] border-t-4 border-t-[#C84B31]"
                  : "bg-[#F6F4EE]"
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-[#6E6A63]">
                    {tier.code}
                  </span>
                  {tier.badge && (
                    <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 bg-[#C84B31] text-[#F6F4EE]">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-2xl font-normal text-[#141413] tracking-tight mb-2">
                  {tier.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#6E6A63] leading-relaxed min-h-[42px] mb-6">
                  {tier.description}
                </p>

                {/* Price Block */}
                <div className="py-6 border-y border-[#DCD8CE] mb-6">
                  {tier.monthlyPrice !== null ? (
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl sm:text-5xl font-normal font-mono tracking-tight text-[#141413]">
                          ${annualBilling ? tier.annualPrice : tier.monthlyPrice}
                        </span>
                        <span className="font-mono text-xs uppercase tracking-wider text-[#6E6A63]">
                          / seat / month
                        </span>
                      </div>
                      <span className="block font-mono text-[11px] text-[#2D5A3C] mt-1.5">
                        {annualBilling
                          ? "[✓] Billed annually // 20% institutional discount applied"
                          : "Billed monthly // Switch to annual for 20% savings"}
                      </span>
                    </div>
                  ) : (
                    <div>
                      <div className="text-3xl sm:text-4xl font-normal font-serif italic text-[#141413] tracking-tight">
                        Custom Allocation
                      </div>
                      <span className="block font-mono text-[11px] text-[#6E6A63] mt-1.5">
                        Dedicated Single-Tenant VPC // Unlimited Seats
                      </span>
                    </div>
                  )}
                </div>

                {/* Feature Specifications */}
                <div className="mb-8">
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#6E6A63] block mb-4">
                    INCLUDED SPECIFICATIONS:
                  </span>
                  <ul className="space-y-3">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-xs sm:text-sm text-[#141413] leading-relaxed"
                      >
                        <span className="font-mono text-xs text-[#2D5A3C] shrink-0 mt-0.5">
                          [✓]
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <a
                href="#trial"
                className={`w-full h-12 px-5 font-mono text-xs uppercase tracking-[0.14em] inline-flex items-center justify-between transition-colors ${
                  tier.highlighted
                    ? "bg-[#C84B31] text-[#F6F4EE] hover:bg-[#141413]"
                    : "bg-[#141413] text-[#F6F4EE] hover:bg-[#C84B31]"
                }`}
              >
                <span>{tier.ctaText}</span>
                <span>→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
