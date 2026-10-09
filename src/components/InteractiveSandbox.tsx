"use client";

import React, { useState } from "react";
import {
  FileText,
  Play,
  CheckCircle2,
  AlertTriangle,
  ShieldAlert,
  Sparkles,
  RefreshCw,
  Download,
  Check,
  Cpu,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface SampleContract {
  id: string;
  name: string;
  type: string;
  pages: number;
  riskScore: number;
  status: "High Risk" | "Low Risk" | "Compliant";
  statusColor: string;
  flaggedClauses: number;
  highlightedIssue: string;
  proposedRedline: string;
  playbookStatus: string;
}

const sampleContracts: SampleContract[] = [
  {
    id: "msa",
    name: "Enterprise_Cloud_MSA_2026.pdf",
    type: "Master Services Agreement",
    pages: 58,
    riskScore: 84,
    status: "High Risk",
    statusColor: "text-rose-400 bg-rose-950/50 border-rose-800/60",
    flaggedClauses: 4,
    highlightedIssue:
      "Section 12.3: Unilateral right to alter service levels without fee adjustment or termination remedy.",
    proposedRedline:
      "Add mutual consent requirement and 30-day notice for material SLA alterations with pro-rata refund remedy.",
    playbookStatus: "Violates Playbook Rule 5.2 (SLA Degradation Protections)",
  },
  {
    id: "nda",
    name: "Mutual_Confidentiality_NDA.docx",
    type: "Non-Disclosure Agreement",
    pages: 8,
    riskScore: 28,
    status: "Low Risk",
    statusColor: "text-emerald-400 bg-emerald-950/50 border-emerald-800/60",
    flaggedClauses: 1,
    highlightedIssue:
      "Section 4.1: Perpetual trade secret survival period with standard 3-year term for general confidential information.",
    proposedRedline:
      "Standard clause aligned with AmLaw standard. Minor language tweak to exclude residual knowledge.",
    playbookStatus: "Playbook Approved (Minor optional edit)",
  },
  {
    id: "dpa",
    name: "GDPR_Standard_DPA_Schedule.pdf",
    type: "Data Processing Addendum",
    pages: 24,
    riskScore: 68,
    status: "High Risk",
    statusColor: "text-amber-400 bg-amber-950/50 border-amber-800/60",
    flaggedClauses: 2,
    highlightedIssue:
      "Section 7.2: Subprocessor notification window is only 5 business days instead of the required 30-day objection window.",
    proposedRedline:
      "Extend subprocessor notification to minimum 30 days prior notice with formal right to terminate without penalty.",
    playbookStatus: "Violates GDPR Compliance Standard & Playbook Rule 9.1",
  },
];

export function InteractiveSandbox() {
  const [selectedId, setSelectedId] = useState<string>("msa");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100);
  const [hasScanned, setHasScanned] = useState<boolean>(true);
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const selectedContract =
    sampleContracts.find((c) => c.id === selectedId) || sampleContracts[0];

  const handleRunAudit = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsScanning(true);
    setProgress(0);
    setHasScanned(false);

    let current = 0;
    timerRef.current = setInterval(() => {
      current += 25;
      setProgress(current);
      if (current >= 100) {
        if (timerRef.current) clearInterval(timerRef.current);
        setIsScanning(false);
        setHasScanned(true);
      }
    }, 200);
  };

  return (
    <section id="sandbox" className="py-24 bg-[#0B0F19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs px-3 py-1 mb-3"
          >
            Live Sandbox
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Test Drive DocuSync AI in Real-Time
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Select a commercial contract sample and trigger our deterministic analysis engine. No sign-up required.
          </p>
        </div>

        {/* Sandbox Console Container */}
        <div className="max-w-5xl mx-auto rounded-2xl border border-slate-800 bg-[#0E1422] shadow-2xl p-6 sm:p-8">
          {/* Top Contract Selectors */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 mb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
              <span className="text-xs font-semibold text-slate-400 mr-2">
                Sample Document:
              </span>
              {sampleContracts.map((contract) => (
                <button
                  key={contract.id}
                  onClick={() => {
                    setSelectedId(contract.id);
                    setHasScanned(true);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    selectedId === contract.id
                      ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/30"
                      : "bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {contract.type}
                </button>
              ))}
            </div>

            <Button
              onClick={handleRunAudit}
              disabled={isScanning}
              className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white text-xs font-semibold h-9 px-4"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="size-3.5 mr-2 animate-spin" />
                  Running Neural Audit... {progress}%
                </>
              ) : (
                <>
                  <Play className="size-3.5 mr-2 fill-current" />
                  Run AI Audit
                </>
              )}
            </Button>
          </div>

          {/* Progress Bar (when scanning) */}
          {isScanning && (
            <div className="w-full bg-slate-900 rounded-full h-1.5 mb-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-indigo-500 to-cyan-400 h-1.5 transition-all duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>
          )}

          {/* Audit Results Dashboard */}
          {hasScanned && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Contract Specs */}
              <div className="lg:col-span-5 bg-slate-950/60 rounded-xl border border-slate-800/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <FileText className="size-4 text-indigo-400" />
                    <span className="font-mono text-xs font-semibold text-white">
                      {selectedContract.name}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block mb-0.5">
                        Length
                      </span>
                      <span className="font-mono font-bold text-slate-200">
                        {selectedContract.pages} pages
                      </span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-slate-900/80 border border-slate-800">
                      <span className="text-[10px] text-slate-400 block mb-0.5">
                        Flagged Clauses
                      </span>
                      <span className="font-mono font-bold text-rose-400">
                        {selectedContract.flaggedClauses} detected
                      </span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs">
                    <span className="text-[10px] uppercase font-bold text-indigo-400 tracking-wider block mb-1">
                      Playbook Alignment
                    </span>
                    <p className="text-slate-300 text-xs leading-relaxed">
                      {selectedContract.playbookStatus}
                    </p>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Cpu className="size-3.5 text-cyan-400" />
                    Latency: 1.18s
                  </span>
                  <span className="text-emerald-400 font-mono text-[11px]">
                    100% Deterministic
                  </span>
                </div>
              </div>

              {/* Right Column: AI Risk Intelligence Report */}
              <div className="lg:col-span-7 bg-[#090D16] rounded-xl border border-slate-800 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">
                        Calculated Liability Rating
                      </span>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="text-2xl font-black font-mono text-white">
                          Score: {selectedContract.riskScore}
                          <span className="text-xs text-slate-400 font-normal">/100</span>
                        </span>
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${selectedContract.statusColor}`}
                        >
                          {selectedContract.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Highlighted Risk Issue */}
                  <div className="mb-4">
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <AlertTriangle className="size-3.5 text-amber-400" />
                      Critical Red Flag Detected
                    </span>
                    <p className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-slate-300 font-mono leading-relaxed">
                      {selectedContract.highlightedIssue}
                    </p>
                  </div>

                  {/* Proposed Redline */}
                  <div>
                    <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5 mb-1.5">
                      <Sparkles className="size-3.5 text-cyan-400" />
                      Suggested Redline Counter-Proposal
                    </span>
                    <p className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-800/40 text-xs text-emerald-300 leading-relaxed">
                      {selectedContract.proposedRedline}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-end gap-3">
                  <Button
                    size="sm"
                    className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs h-8"
                    onClick={() => alert(`Exporting ${selectedContract.name} summary audit report!`)}
                  >
                    <Download className="size-3 mr-1.5" />
                    Download Audit Report
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
