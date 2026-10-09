"use client";

import React, { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export function Pricing() {
  const [annualBilling, setAnnualBilling] = useState<boolean>(true);

  const tiers = [
    {
      name: "Starter",
      description: "For boutique law firms and high-velocity startups needing fast contract triage.",
      monthlyPrice: 99,
      annualPrice: 79,
      popular: false,
      ctaText: "Start 14-Day Trial",
      ctaVariant: "outline" as const,
      features: [
        "Up to 50 contracts parsed per month",
        "Standard Legal Playbook ruleset",
        "PDF clause extraction & risk flags",
        "Executive PDF memo exports",
        "Standard email support (24h SLA)",
      ],
    },
    {
      name: "Pro",
      description: "For scaling legal teams, commercial counsel, and deal desks closing high contract volumes.",
      monthlyPrice: 299,
      annualPrice: 239,
      popular: true,
      badge: "Most Popular",
      ctaText: "Start 14-Day Pro Trial",
      ctaVariant: "default" as const,
      features: [
        "Unlimited contract ingestion & audits",
        "Custom Enterprise Legal Playbook engine",
        "Multi-document reasoning (MSA + SOWs + DPAs)",
        "Automated Word (.docx) track-changes redlining",
        "Native Slack, Salesforce & Ironclad connectors",
        "Zero data retention SLA on all inference",
        "Priority dedicated support (4h SLA)",
      ],
    },
    {
      name: "Enterprise",
      description: "For Fortune 500 legal ops, multinational corporations, and regulated financial institutions.",
      monthlyPrice: null,
      annualPrice: null,
      popular: false,
      ctaText: "Contact Enterprise Sales",
      ctaVariant: "outline" as const,
      features: [
        "Dedicated isolated LLM inference instance",
        "Custom on-prem or VPC data residency (AWS/GCP/Azure)",
        "Tailored CLM & custom API bi-directional hooks",
        "Custom playbook fine-tuning with historic precedents",
        "SOC2 Type II, ISO 27001 & HIPAA BAAs signed",
        "Dedicated Legal Solutions Engineer 24/7",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#090D16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Badge
            variant="outline"
            className="border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs px-3 py-1 mb-3"
          >
            Transparent B2B Pricing
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Predictable Plans for Legal Velocity
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            No surprise overage fees. Scale your contract review capacity with confidence.
          </p>

          {/* Monthly / Annual Billing Toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span
              className={`text-xs font-semibold ${
                !annualBilling ? "text-white" : "text-slate-400"
              }`}
            >
              Monthly
            </span>
            <button
              type="button"
              onClick={() => setAnnualBilling(!annualBilling)}
              className="relative inline-flex h-6 w-12 items-center rounded-full bg-slate-800 border border-slate-700 transition-colors focus:outline-none"
              aria-label="Toggle billing frequency"
            >
              <span
                className={`inline-block size-4 transform rounded-full bg-indigo-400 transition-transform ${
                  annualBilling ? "translate-x-6 bg-cyan-400" : "translate-x-1"
                }`}
              />
            </button>
            <span
              className={`text-xs font-semibold flex items-center gap-1.5 ${
                annualBilling ? "text-white" : "text-slate-400"
              }`}
            >
              Annual Billing
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={`relative bg-[#0E1424] border flex flex-col justify-between transition-all duration-300 ${
                tier.popular
                  ? "border-indigo-500 shadow-2xl shadow-indigo-950/50 ring-1 ring-indigo-500/50 lg:-translate-y-2"
                  : "border-slate-800/90 hover:border-slate-700"
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-gradient-to-r from-indigo-500 to-cyan-400 text-[#0B0F19] shadow-md shadow-indigo-500/30">
                    <Sparkles className="size-3" />
                    {tier.badge}
                  </span>
                </div>
              )}

              <CardHeader className="pt-8 pb-4">
                <CardTitle className="text-xl font-bold text-white mb-1">
                  {tier.name}
                </CardTitle>
                <CardDescription className="text-xs text-slate-400 min-h-[36px] leading-relaxed">
                  {tier.description}
                </CardDescription>

                {/* Price Display */}
                <div className="pt-4 pb-2 border-b border-slate-800/80">
                  {tier.monthlyPrice !== null ? (
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-white font-mono">
                        ${annualBilling ? tier.annualPrice : tier.monthlyPrice}
                      </span>
                      <span className="text-xs text-slate-400">/month</span>
                      {annualBilling && (
                        <span className="text-[10px] text-slate-400 ml-2">
                          billed annually
                        </span>
                      )}
                    </div>
                  ) : (
                    <div className="text-3xl font-black text-white">Custom Quote</div>
                  )}
                </div>
              </CardHeader>

              <CardContent className="flex-1 py-4">
                <span className="text-[11px] uppercase font-bold text-slate-400 tracking-wider block mb-3">
                  Included Features:
                </span>
                <ul className="space-y-2.5">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-4 pb-6">
                <a
                  href="#trial"
                  className={`w-full text-xs font-bold h-10 rounded-lg inline-flex items-center justify-center gap-1.5 transition-all ${
                    tier.popular
                      ? "bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-lg shadow-indigo-500/25"
                      : "bg-slate-900 border border-slate-700 text-slate-200 hover:bg-slate-800 hover:text-white"
                  }`}
                >
                  <span>{tier.ctaText}</span>
                  <ArrowRight className="size-3.5" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
