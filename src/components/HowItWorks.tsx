"use client";

import React, { useState } from "react";
import {
  UploadCloud,
  Cpu,
  FileCheck2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileSearch,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: "Ingest & Parse",
      shortDesc: "Universal document ingestion",
      badge: "Step 01",
      icon: UploadCloud,
      summary:
        "Upload complex 50+ page PDF, Word (DOCX), or scanned agreements. DocuSync OCR reconstructs document hierarchy, tables, schedules, and cross-referenced annexes with 100% layout fidelity.",
      details: [
        "Native PDF & scanned TIFF parsing with multi-column table recognition",
        "Automatic discovery of referenced exhibits, schedules, and definitions",
        "Deterministic token indexing for instant clause retrieval",
      ],
      previewCode: `// Step 1: Document Structure Ingested
{
  "documentId": "doc_msa_2026_094",
  "totalPages": 64,
  "detectedClauses": 142,
  "tablesExtracted": 14,
  "annexesLinked": ["SOW-01", "Security-Exhibit-B", "GDPR-DPA"]
}`,
    },
    {
      step: 2,
      title: "Deep Contextual Reasoning",
      shortDesc: "Playbook alignment & risk audit",
      badge: "Step 02",
      icon: Cpu,
      summary:
        "Long-context legal models evaluate every clause against your internal playbook rules. It detects hidden liabilities, ambiguous terms, non-standard indemnities, and governing law conflicts.",
      details: [
        "Cross-document reasoning across 1M+ tokens without truncation",
        "Playbook policy matching with fallback tier suggestions",
        "Zero hallucination guarantee: every claim cites exact line & page numbers",
      ],
      previewCode: `// Step 2: Playbook Audit Execution
{
  "riskLevel": "HIGH_EXPOSURE",
  "ruleViolations": [
    { "rule": "Rule 8.4", "issue": "Uncapped indemnity on IP claims", "severity": 0.85 }
  ],
  "verificationMode": "DETERMINISTIC_CITATION"
}`,
    },
    {
      step: 3,
      title: "Actionable Insights & Redlines",
      shortDesc: "Instant track changes & export",
      badge: "Step 03",
      icon: FileCheck2,
      summary:
        "Receive structured audit scores, executive risk summaries, and one-click redlines in Word track changes format. Sync directly to your CLM or export audit reports for stakeholder sign-off.",
      details: [
        "One-click Word (.docx) track changes export with negotiation remarks",
        "Executive PDF memo for CEO & Deal Desk sign-offs",
        "Bi-directional sync into Ironclad, Salesforce, and DocuSign",
      ],
      previewCode: `// Step 3: Redline & Sync Ready
{
  "exportFormats": ["DOCX_TRACK_CHANGES", "EXECUTIVE_MEMO_PDF", "JSON_API"],
  "clmSyncStatus": "QUEUED_IRONCLAD",
  "approvalReadiness": "ACTION_REQUIRED_1_CLAUSE"
}`,
    },
  ];

  const currentStepData = steps[activeStep - 1];

  return (
    <section id="how-it-works" className="py-24 bg-[#090D16] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs px-3 py-1 mb-3"
          >
            How It Works
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            From Raw PDF to Actionable Redline in 3 Steps
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            A seamless three-phase pipeline engineered for speed, legal precision, and compliance.
          </p>
        </div>

        {/* 3 Step Interactive Selector */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto">
          {steps.map((s) => {
            const Icon = s.icon;
            const isActive = activeStep === s.step;
            return (
              <button
                key={s.step}
                onClick={() => setActiveStep(s.step)}
                className={`flex items-start gap-4 p-4 rounded-xl border text-left transition-all ${
                  isActive
                    ? "bg-slate-900 border-indigo-500/70 shadow-lg shadow-indigo-950/40 ring-1 ring-indigo-500/40"
                    : "bg-slate-950/50 border-slate-800 hover:border-slate-700 hover:bg-slate-900/40"
                }`}
              >
                <div
                  className={`size-10 rounded-lg flex items-center justify-center shrink-0 ${
                    isActive
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-900 text-slate-400 border border-slate-800"
                  }`}
                >
                  <Icon className="size-5" />
                </div>
                <div>
                  <span
                    className={`text-[10px] font-bold uppercase tracking-wider block ${
                      isActive ? "text-indigo-400" : "text-slate-400"
                    }`}
                  >
                    {s.badge}
                  </span>
                  <h3 className="text-sm font-bold text-white mt-0.5">
                    {s.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-1">
                    {s.shortDesc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Step Detail Display Window */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Step Explanation */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-slate-800 text-indigo-300 text-xs">
                    Phase {currentStepData.step} of 3
                  </Badge>
                  <span className="text-xs text-slate-400 font-mono">
                    Deterministic Engine
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-white mb-3">
                  {currentStepData.title}
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                  {currentStepData.summary}
                </p>

                <div className="space-y-2.5 mb-6">
                  {currentStepData.details.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <CheckCircle2 className="size-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <Button
                  size="sm"
                  className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs h-8"
                  onClick={() => {
                    setActiveStep(activeStep < 3 ? activeStep + 1 : 1);
                  }}
                >
                  <span>{activeStep < 3 ? "Next Step" : "Restart Workflow"}</span>
                  <ArrowRight className="size-3.5 ml-1.5" />
                </Button>
              </div>
            </div>

            {/* Code / Data Preview Box */}
            <div className="lg:col-span-5 bg-[#070A11] rounded-xl border border-slate-800 p-4 font-mono text-[11px] text-slate-300 relative shadow-inner">
              <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-[10px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="size-3 text-cyan-400" />
                  Audit Engine Output
                </span>
                <span className="text-emerald-400">● Live Stream</span>
              </div>
              <pre className="overflow-x-auto text-cyan-300 leading-relaxed">
                <code>{currentStepData.previewCode}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
