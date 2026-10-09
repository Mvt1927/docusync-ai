"use client";

import React, { useState } from "react";
import {
  FileText,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldAlert,
  ChevronRight,
  Download,
  Check,
  RotateCcw,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface ClauseItem {
  id: string;
  section: string;
  title: string;
  risk: "high" | "medium" | "low";
  riskScore: number;
  originalText: string;
  suggestedText: string;
  issueDescription: string;
  playbookRule: string;
}

const clausesData: ClauseItem[] = [
  {
    id: "liability",
    section: "§ 14.2",
    title: "Limitation of Liability",
    risk: "high",
    riskScore: 85,
    originalText:
      "IN NO EVENT SHALL VENDOR'S AGGREGATE LIABILITY EXCEED THE TOTAL FEES PAID HEREUNDER, EXCEPT FOR VENDOR'S BREACH OF CONFIDENTIALITY OR INDEMNIFICATION OBLIGATIONS, WHICH SHALL BE ENTIRELY UNCAPPED.",
    suggestedText:
      "IN NO EVENT SHALL EITHER PARTY'S AGGREGATE LIABILITY EXCEED TWO TIMES (2X) THE TOTAL FEES PAID OR PAYABLE IN THE PRECEDING TWELVE (12) MONTHS, INCLUDING ANY INDEMNIFICATION LIABILITIES.",
    issueDescription:
      "Uncapped indemnification liability contradicts Corporate Legal Playbook 8.4 (Max 2x Annual Contract Value).",
    playbookRule: "Enterprise Playbook Rule 8.4: Mutual 2x 12-Month ACV Liability Cap Required.",
  },
  {
    id: "indemnity",
    section: "§ 18.1",
    title: "Indemnification & Defense",
    risk: "medium",
    riskScore: 62,
    originalText:
      "Customer shall defend, indemnify, and hold harmless Vendor against all third-party claims arising from Customer's use of the Services or any data provided.",
    suggestedText:
      "Vendor shall defend and indemnify Customer against any third-party claims alleging that Customer's authorized use of the Services infringes intellectual property rights.",
    issueDescription:
      "One-sided indemnity shifting all operational liability to Customer without mutual IP infringement shield.",
    playbookRule: "Enterprise Playbook Rule 4.1: Vendor IP Infringement Indemnity is Non-Negotiable.",
  },
  {
    id: "ip",
    section: "§ 9.3",
    title: "Intellectual Property Rights",
    risk: "low",
    riskScore: 12,
    originalText:
      "Each party retains all right, title, and interest in its pre-existing Intellectual Property. Customer retains all ownership of Customer Data.",
    suggestedText:
      "Fully compliant with standard enterprise IP reservation terms.",
    issueDescription:
      "Clear ownership demarcation. No broad derivative work claims or hidden assignment traps detected.",
    playbookRule: "Enterprise Playbook Rule 2.0: Customer Data Retention & IP Reservation (Passed).",
  },
];

export function HeroMockup() {
  const [selectedClauseId, setSelectedClauseId] = useState<string>("liability");
  const [redlineAccepted, setRedlineAccepted] = useState<boolean>(false);

  const activeClause =
    clausesData.find((c) => c.id === selectedClauseId) || clausesData[0];

  const handleSelectClause = (id: string) => {
    setSelectedClauseId(id);
    setRedlineAccepted(false);
  };

  return (
    <div className="relative w-full p-2 sm:p-2.5 rounded-[2.2rem] bg-gradient-to-b from-white/[0.1] via-white/[0.04] to-transparent border border-white/[0.08] shadow-[0_32px_80px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.15)]">
      <div className="rounded-[calc(2.2rem-0.625rem)] border border-white/[0.05] bg-[#080C16] overflow-hidden shadow-2xl">
      {/* Window Title Bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800/90 bg-slate-950/70">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="size-3 rounded-full bg-rose-500/80 inline-block border border-rose-600/40" />
            <span className="size-3 rounded-full bg-amber-500/80 inline-block border border-amber-600/40" />
            <span className="size-3 rounded-full bg-emerald-500/80 inline-block border border-emerald-600/40" />
          </div>
          <div className="hidden sm:flex items-center gap-2 ml-4 px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
            <FileText className="size-3.5 text-indigo-400" />
            <span className="font-mono text-slate-200">MSA_Enterprise_Agreement_v4.2.pdf</span>
            <span className="text-slate-500">•</span>
            <span className="text-emerald-400 font-medium flex items-center gap-1">
              <Check className="size-3" /> 64 pages parsed in 1.4s
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Badge
            variant="outline"
            className="border-indigo-500/40 bg-indigo-950/40 text-indigo-300 text-[10px] py-0.5 px-2 flex items-center gap-1"
          >
            <Sparkles className="size-2.5 text-indigo-400" />
            Zero-Hallucination Verified
          </Badge>
          <Button
            variant="outline"
            size="xs"
            className="h-6 text-[10px] border-slate-700 bg-slate-800/60 text-slate-300 hover:text-white"
            onClick={() => setRedlineAccepted(false)}
          >
            <RotateCcw className="size-2.5 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Main Mockup Body: Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
        {/* Left Column: Contract Document Viewer */}
        <div className="lg:col-span-6 border-b lg:border-b-0 lg:border-r border-slate-800/80 p-4 sm:p-5 flex flex-col bg-[#070A11]/60">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800/60">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
                Document Clauses (Extracted)
              </span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">
                3 Flagged
              </span>
            </div>
            <span className="text-[11px] text-slate-400 italic">Click a clause to inspect</span>
          </div>

          {/* Selectable Clause list */}
          <div className="flex flex-col gap-2.5 flex-1">
            {clausesData.map((clause) => {
              const isSelected = clause.id === selectedClauseId;
              return (
                <div
                  key={clause.id}
                  onClick={() => handleSelectClause(clause.id)}
                  className={`cursor-pointer rounded-xl p-3 border transition-all text-left ${
                    isSelected
                      ? "bg-slate-900/90 border-indigo-500/70 shadow-lg shadow-indigo-950/30 ring-1 ring-indigo-500/40"
                      : "bg-slate-950/40 border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/50"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-bold text-slate-300">
                        {clause.section}
                      </span>
                      <span className="text-xs font-semibold text-white">
                        {clause.title}
                      </span>
                    </div>
                    {clause.risk === "high" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-rose-950/60 text-rose-400 border border-rose-800/60">
                        <AlertTriangle className="size-2.5" /> High Risk
                      </span>
                    )}
                    {clause.risk === "medium" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-950/60 text-amber-400 border border-amber-800/60">
                        <AlertTriangle className="size-2.5" /> Review Required
                      </span>
                    )}
                    {clause.risk === "low" && (
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/60">
                        <CheckCircle2 className="size-2.5" /> Passed
                      </span>
                    )}
                  </div>

                  <p className="font-mono text-[11px] leading-relaxed text-slate-400 line-clamp-2">
                    {clause.originalText}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Document metadata footer */}
          <div className="mt-3 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center gap-1 text-slate-400">
              <Clock className="size-3" /> Audit Timestamp: Today, 03:24 UTC
            </span>
            <span className="text-indigo-400 font-mono text-[10px]">
              Page 18 of 64
            </span>
          </div>
        </div>

        {/* Right Column: AI Risk Intelligence & Redline Copilot */}
        <div className="lg:col-span-6 p-4 sm:p-5 flex flex-col bg-[#0B0F19]/40 justify-between">
          <div>
            {/* Header with Risk Gauge */}
            <div className="flex items-start justify-between mb-4 pb-3 border-b border-slate-800/80">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    AI Clause Intelligence
                  </span>
                  <Badge variant="secondary" className="text-[10px] py-0 px-1.5 bg-slate-800 text-slate-300">
                    {activeClause.section}
                  </Badge>
                </div>
                <h4 className="text-sm font-bold text-white mt-0.5">
                  {activeClause.title} Analysis
                </h4>
              </div>

              {/* Risk Dial Score */}
              <div className="flex items-center gap-2.5 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-slate-800">
                <div className="flex flex-col text-right">
                  <span className="text-[9px] uppercase tracking-wider font-semibold text-slate-400">
                    Risk Score
                  </span>
                  <span
                    className={`text-base font-extrabold font-mono leading-none ${
                      activeClause.risk === "high"
                        ? "text-rose-400"
                        : activeClause.risk === "medium"
                        ? "text-amber-400"
                        : "text-emerald-400"
                    }`}
                  >
                    {activeClause.riskScore}
                    <span className="text-[11px] text-slate-500 font-normal">/100</span>
                  </span>
                </div>
                <div
                  className={`size-8 rounded-full flex items-center justify-center border-2 ${
                    activeClause.risk === "high"
                      ? "border-rose-500 bg-rose-950/40 text-rose-400"
                      : activeClause.risk === "medium"
                      ? "border-amber-500 bg-amber-950/40 text-amber-400"
                      : "border-emerald-500 bg-emerald-950/40 text-emerald-400"
                  }`}
                >
                  <ShieldAlert className="size-4" />
                </div>
              </div>
            </div>

            {/* Playbook conflict note */}
            <div className="mb-3.5 p-2.5 rounded-lg bg-slate-900/90 border border-slate-800 text-xs">
              <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block mb-1">
                Internal Playbook Assessment
              </span>
              <p className="text-slate-300 text-[11px] leading-relaxed">
                {activeClause.issueDescription}
              </p>
            </div>

            {/* Smart Redline Diff Box */}
            <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] font-semibold text-slate-300 flex items-center gap-1.5">
                  <Sparkles className="size-3 text-cyan-400" />
                  Suggested AI Redline (Precedent Aligned)
                </span>
                <span className="text-[10px] text-slate-400 font-mono">
                  Diff Mode: Track Changes
                </span>
              </div>

              {redlineAccepted ? (
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-800/60 text-emerald-300 text-xs flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-400 shrink-0" />
                  <span>
                    Redline accepted and queued for CLM export to Ironclad / Salesforce.
                  </span>
                </div>
              ) : (
                <div className="space-y-2 text-[11px] font-mono leading-relaxed">
                  <div className="bg-rose-950/30 border-l-2 border-rose-500 px-2 py-1 text-rose-300/90 line-through">
                    {activeClause.originalText}
                  </div>
                  <div className="bg-emerald-950/30 border-l-2 border-emerald-500 px-2 py-1 text-emerald-300">
                    {activeClause.suggestedText}
                  </div>
                </div>
              )}
            </div>

            {/* Micro Compliance Checklist */}
            <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-300 mb-2">
              <div className="flex items-center gap-1.5 p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span>GDPR Art. 28: Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                <span className="size-1.5 rounded-full bg-emerald-400" />
                <span>Jurisdiction: Delaware US</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-3">
            <Button
              variant="outline"
              size="sm"
              className="border-slate-700 bg-slate-900 text-slate-300 hover:text-white text-xs h-8"
              onClick={() => {
                alert("Audit report download triggered: MSA_Enterprise_Audit_Report.pdf");
              }}
            >
              <Download className="size-3 mr-1.5" />
              Export PDF Memo
            </Button>

            <Button
              size="sm"
              className={`text-xs h-8 font-semibold transition-all ${
                redlineAccepted
                  ? "bg-emerald-600 hover:bg-emerald-500 text-white"
                  : "bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white shadow-md shadow-indigo-500/20"
              }`}
              onClick={() => setRedlineAccepted(true)}
            >
              {redlineAccepted ? (
                <>
                  <Check className="size-3 mr-1" /> Accepted
                </>
              ) : (
                <>
                  Accept Redline
                  <ArrowRight className="size-3 ml-1" />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
