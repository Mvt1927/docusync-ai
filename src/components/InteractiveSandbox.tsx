"use client";

import React, { useState } from "react";

interface ClauseAuditItem {
  clauseRef: string;
  title: string;
  badge: "[FLAGGED : HIGH RISK]" | "[VERIFIED : COMPLIANT]";
  isFlagged: boolean;
  extractedText: string;
  ruleCitation: string;
  proposedRedline: string;
}

interface SampleContract {
  id: string;
  selectorLabel: string;
  fileName: string;
  documentCode: string;
  pages: number;
  totalClauses: number;
  riskScore: number;
  overallStatus: "[FLAGGED : HIGH RISK]" | "[VERIFIED : COMPLIANT]";
  isHighRisk: boolean;
  flaggedCount: number;
  latency: string;
  playbookRuleSummary: string;
  counterparty: string;
  governingLaw: string;
  clauses: ClauseAuditItem[];
}

const sampleContracts: SampleContract[] = [
  {
    id: "msa",
    selectorLabel: "Master Services Agreement (MSA)",
    fileName: "Enterprise_Cloud_MSA_2026.pdf",
    documentCode: "DOC_ID // MSA-2026-094",
    pages: 58,
    totalClauses: 136,
    riskScore: 84,
    overallStatus: "[FLAGGED : HIGH RISK]",
    isHighRisk: true,
    flaggedCount: 4,
    latency: "1.18s",
    playbookRuleSummary:
      "Violates Playbook Rule 5.2 (Unilateral SLA Modification) & Rule 8.4 (Uncapped IP Indemnity).",
    counterparty: "Northstar Cloud Infrastructure Corp.",
    governingLaw: "State of New York, US",
    clauses: [
      {
        clauseRef: "§ 12.3 // SERVICE LEVEL MODIFICATIONS (PAGE 29)",
        title: "Unilateral Right to Degrade SLA Thresholds",
        badge: "[FLAGGED : HIGH RISK]",
        isFlagged: true,
        extractedText:
          "Provider reserves the sole and unilateral right to modify, suspend, or revise Service Level Availability targets at any time upon posting notice to the customer portal without fee adjustment.",
        ruleCitation: "VIOLATES PLAYBOOK RULE 5.2 // SLA DEGRADATION REMEDY",
        proposedRedline:
          "- upon posting notice to the customer portal without fee adjustment.\n+ only upon mutual written consent of both Parties; provided that any material SLA reduction grants Customer a thirty (30) day termination right with pro-rata refund of prepaid fees.",
      },
      {
        clauseRef: "§ 16.1 // GOVERNING LAW & VENUE (PAGE 44)",
        title: "Commercial Venue & Dispute Resolution",
        badge: "[VERIFIED : COMPLIANT]",
        isFlagged: false,
        extractedText:
          "This Agreement shall be governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles.",
        ruleCitation: "MATCHES PLAYBOOK RULE 1.1 // APPROVED US COMMERCIAL VENUE",
        proposedRedline:
          "[✓] NO REDLINE REQUIRED: Clause conforms to institutional Tier-1 governing law baseline.",
      },
    ],
  },
  {
    id: "nda",
    selectorLabel: "Mutual Non-Disclosure (NDA)",
    fileName: "Mutual_Confidentiality_NDA.docx",
    documentCode: "DOC_ID // NDA-2026-019",
    pages: 8,
    totalClauses: 24,
    riskScore: 18,
    overallStatus: "[VERIFIED : COMPLIANT]",
    isHighRisk: false,
    flaggedCount: 0,
    latency: "0.42s",
    playbookRuleSummary:
      "Conforms to Standard Mutual Confidentiality Playbook v4.2. Trade secret survival & residual knowledge carve-outs verified.",
    counterparty: "Meridian Quantitative Partners LLC",
    governingLaw: "State of Delaware, US",
    clauses: [
      {
        clauseRef: "§ 4.1 // CONFIDENTIALITY SURVIVAL PERIOD (PAGE 3)",
        title: "Three-Year Standard Term with Trade Secret Carve-Out",
        badge: "[VERIFIED : COMPLIANT]",
        isFlagged: false,
        extractedText:
          "Confidentiality obligations under this Agreement shall remain in effect for three (3) years from disclosure, except with respect to Trade Secrets, which shall remain protected for so long as they qualify under applicable law.",
        ruleCitation: "MATCHES PLAYBOOK RULE 2.4 // SURVIVAL HORIZON",
        proposedRedline:
          "[✓] NO REDLINE REQUIRED: Survival duration aligns with standard 36-month corporate threshold.",
      },
      {
        clauseRef: "§ 6.2 // COMPELLED DISCLOSURE NOTICE (PAGE 5)",
        title: "Prior Written Notice for Regulatory Subpoenas",
        badge: "[VERIFIED : COMPLIANT]",
        isFlagged: false,
        extractedText:
          "Receiving Party shall provide prompt prior written notice to Disclosing Party to permit Disclosing Party to seek a protective order prior to any compelled disclosure.",
        ruleCitation: "MATCHES PLAYBOOK RULE 3.1 // SUBPOENA SAFEGUARD",
        proposedRedline:
          "[✓] NO REDLINE REQUIRED: Prior notice and cooperation obligations verified.",
      },
    ],
  },
  {
    id: "dpa",
    selectorLabel: "Data Processing Addendum (DPA)",
    fileName: "GDPR_Standard_DPA_Schedule.pdf",
    documentCode: "DOC_ID // DPA-2026-307",
    pages: 24,
    totalClauses: 68,
    riskScore: 72,
    overallStatus: "[FLAGGED : HIGH RISK]",
    isHighRisk: true,
    flaggedCount: 2,
    latency: "0.79s",
    playbookRuleSummary:
      "Violates Playbook Rule 9.1 (Subprocessor Objection Window) & GDPR Article 28 Breach Notification Timeline.",
    counterparty: "Euclid Telemetry Systems GmbH",
    governingLaw: "Republic of Ireland / EU GDPR",
    clauses: [
      {
        clauseRef: "§ 7.2 // SUBPROCESSOR AUTHORIZATION (PAGE 11)",
        title: "Insufficient Prior Notice Window for New Subprocessors",
        badge: "[FLAGGED : HIGH RISK]",
        isFlagged: true,
        extractedText:
          "Processor shall notify Controller at least five (5) business days prior to authorizing any new Subprocessor to access Personal Data.",
        ruleCitation: "VIOLATES PLAYBOOK RULE 9.1 // MINIMUM 30-DAY OBJECTION WINDOW",
        proposedRedline:
          "- at least five (5) business days prior to authorizing any new Subprocessor\n+ at least thirty (30) calendar days prior to authorizing any new Subprocessor, granting Controller the right to object in writing and terminate affected services without penalty.",
      },
      {
        clauseRef: "§ 10.4 // CROSS-BORDER TRANSFER MECHANISM (PAGE 18)",
        title: "EU Standard Contractual Clauses (Module Two)",
        badge: "[VERIFIED : COMPLIANT]",
        isFlagged: false,
        extractedText:
          "Transfers of Personal Data outside the EEA shall be governed by the 2021 European Commission Standard Contractual Clauses (Module Two: Controller to Processor).",
        ruleCitation: "MATCHES PLAYBOOK RULE 9.6 // SCC TRANSFER VALIDATION",
        proposedRedline:
          "[✓] NO REDLINE REQUIRED: EU 2021 SCC Module Two incorporation verified.",
      },
    ],
  },
];

export function InteractiveSandbox() {
  const [selectedId, setSelectedId] = useState<string>("msa");
  const [isScanning, setIsScanning] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(100);
  const [hasScanned, setHasScanned] = useState<boolean>(true);
  const [exportMessage, setExportMessage] = useState<string | null>(null);
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
    setExportMessage(null);
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
    }, 180);
  };

  const handleSelectContract = (id: string) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setIsScanning(false);
    setProgress(100);
    setSelectedId(id);
    setHasScanned(true);
    setExportMessage(null);
  };

  return (
    <section
      id="sandbox"
      className="py-24 sm:py-32 bg-[#EFECE4] text-[#141413] border-b border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric 12-Column Editorial Header on #EFECE4 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-12 mb-10 border-b border-[#DCD8CE] items-end">
          <div className="lg:col-span-7">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C84B31] mb-4">
              SECTION 03 // INTERACTIVE AUDIT TERMINAL
            </div>
            <h2 className="font-normal text-3xl sm:text-5xl text-[#141413] tracking-tight leading-[1.12]">
              Inspect deterministic clause verification{" "}
              <span className="font-serif italic font-normal">
                in real time.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between">
            <p className="text-sm sm:text-base text-[#6E6A63] leading-relaxed mb-4">
              Select a commercial instrument below and execute our deterministic
              audit engine to inspect extracted risk exposures and native OpenXML
              redline patches.
            </p>
            <div className="font-mono text-xs text-[#141413] bg-[#F6F4EE] border border-[#DCD8CE] px-3.5 py-2 flex items-center justify-between">
              <span>ENCLAVE: SANDBOX_NODE_04</span>
              <span className="text-[#2D5A3C]">[✓] PLAYBOOK V4.2 LOADED</span>
            </div>
          </div>
        </div>

        {/* Editorial Legal Terminal Container */}
        <div className="border border-[#DCD8CE] bg-[#F6F4EE]">
          {/* Top Control Bar: Sample Selectors & Execute Action */}
          <div className="p-4 sm:p-6 bg-[#F6F4EE] border-b border-[#DCD8CE] flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-[#6E6A63] mr-2">
                INSTRUMENT SAMPLE:
              </span>
              {sampleContracts.map((contract) => {
                const isSelected = selectedId === contract.id;
                return (
                  <button
                    key={contract.id}
                    type="button"
                    onClick={() => handleSelectContract(contract.id)}
                    className={`px-3.5 py-2 font-mono text-xs border transition-colors ${
                      isSelected
                        ? "bg-[#181715] text-[#F6F4EE] border-[#181715]"
                        : "bg-[#EFECE4] text-[#141413] border-[#DCD8CE] hover:border-[#141413]"
                    }`}
                  >
                    {contract.selectorLabel}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={handleRunAudit}
              disabled={isScanning}
              className="px-5 py-2.5 bg-[#C84B31] text-[#F6F4EE] font-mono text-xs uppercase tracking-wider hover:bg-[#C84B31]/90 transition-colors disabled:opacity-60 shrink-0"
            >
              {isScanning
                ? `Executing AST Audit... ${progress}%`
                : "Execute Deterministic Audit →"}
            </button>
          </div>

          {/* Scanning Progress Bar */}
          {isScanning && (
            <div className="p-6 bg-[#181715] text-[#F6F4EE] border-b border-[#DCD8CE] font-mono text-xs">
              <div className="flex items-center justify-between mb-2">
                <span>
                  PARSING AST NODES // {selectedContract.fileName} (
                  {selectedContract.pages} PAGES)
                </span>
                <span className="text-[#C84B31]">{progress}%</span>
              </div>
              <div className="w-full bg-[#2E2C29] h-1.5 overflow-hidden">
                <div
                  className="bg-[#C84B31] h-1.5 transition-all duration-150"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}

          {/* Two-Pane Workbench: Left (#F6F4EE) & Right (#181715) */}
          {hasScanned && (
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Left Workbench Pane (5 cols): Source Instrument Dossier */}
              <div className="lg:col-span-5 bg-[#F6F4EE] text-[#141413] p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#DCD8CE] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#DCD8CE] font-mono text-xs">
                    <span className="text-[#6E6A63]">
                      {selectedContract.documentCode}
                    </span>
                    <span
                      className={`px-2 py-0.5 font-medium ${
                        selectedContract.isHighRisk
                          ? "bg-[#C84B31]/10 text-[#C84B31] border border-[#C84B31]"
                          : "bg-[#2D5A3C]/10 text-[#2D5A3C] border border-[#2D5A3C]"
                      }`}
                    >
                      {selectedContract.overallStatus}
                    </span>
                  </div>

                  <div className="mb-6">
                    <div className="font-mono text-xs text-[#6E6A63] mb-1">
                      SOURCE INSTRUMENT FILE
                    </div>
                    <h3 className="font-normal text-xl text-[#141413] font-mono break-all">
                      {selectedContract.fileName}
                    </h3>
                  </div>

                  {/* Metadata Grid */}
                  <div className="grid grid-cols-2 border-t border-l border-[#DCD8CE] mb-6 font-mono text-xs">
                    <div className="p-3.5 border-r border-b border-[#DCD8CE] bg-[#EFECE4]/60">
                      <span className="text-[10px] text-[#6E6A63] block mb-1">
                        DOCUMENT LENGTH
                      </span>
                      <span className="text-sm text-[#141413] font-medium">
                        {selectedContract.pages} Pages /{" "}
                        {selectedContract.totalClauses} Clauses
                      </span>
                    </div>
                    <div className="p-3.5 border-r border-b border-[#DCD8CE] bg-[#EFECE4]/60">
                      <span className="text-[10px] text-[#6E6A63] block mb-1">
                        FLAGGED DEVIATIONS
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          selectedContract.flaggedCount > 0
                            ? "text-[#C84B31]"
                            : "text-[#2D5A3C]"
                        }`}
                      >
                        {selectedContract.flaggedCount} Clauses Flagged
                      </span>
                    </div>
                    <div className="p-3.5 border-r border-b border-[#DCD8CE] bg-[#EFECE4]/60">
                      <span className="text-[10px] text-[#6E6A63] block mb-1">
                        COUNTERPARTY PAPER
                      </span>
                      <span className="text-xs text-[#141413]">
                        {selectedContract.counterparty}
                      </span>
                    </div>
                    <div className="p-3.5 border-r border-b border-[#DCD8CE] bg-[#EFECE4]/60">
                      <span className="text-[10px] text-[#6E6A63] block mb-1">
                        GOVERNING VENUE
                      </span>
                      <span className="text-xs text-[#141413]">
                        {selectedContract.governingLaw}
                      </span>
                    </div>
                  </div>

                  {/* Playbook Alignment Box */}
                  <div className="p-4 bg-[#EFECE4] border border-[#DCD8CE] mb-6">
                    <div className="font-mono text-[11px] uppercase tracking-wider text-[#C84B31] mb-1.5">
                      § PLAYBOOK ALIGNMENT SUMMARY
                    </div>
                    <p className="text-xs sm:text-sm text-[#141413] leading-relaxed">
                      {selectedContract.playbookRuleSummary}
                    </p>
                  </div>
                </div>

                {/* Telemetry Footer */}
                <div className="pt-4 border-t border-[#DCD8CE] flex items-center justify-between font-mono text-xs text-[#6E6A63]">
                  <span>EXECUTION LATENCY: {selectedContract.latency}</span>
                  <span className="text-[#2D5A3C]">[✓] 100% DETERMINISTIC</span>
                </div>
              </div>

              {/* Right Workbench Pane (7 cols): Dark Legal Terminal Output */}
              <div className="lg:col-span-7 bg-[#181715] text-[#F6F4EE] p-6 sm:p-8 font-mono flex flex-col justify-between">
                <div>
                  {/* Terminal Header & Liability Index */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-5 mb-6 border-b border-[#2E2C29]">
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-[#6E6A63] block mb-1">
                        CALCULATED LIABILITY EXPOSURE INDEX
                      </span>
                      <div className="flex items-baseline gap-3">
                        <span className="text-2xl sm:text-3xl text-[#F6F4EE] font-normal">
                          INDEX: {selectedContract.riskScore}
                          <span className="text-sm text-[#6E6A63]">/100</span>
                        </span>
                      </div>
                    </div>

                    <div
                      className={`px-3 py-1.5 text-xs border ${
                        selectedContract.isHighRisk
                          ? "border-[#C84B31] text-[#C84B31] bg-[#141413]"
                          : "border-[#2D5A3C] text-[#2D5A3C] bg-[#141413]"
                      }`}
                    >
                      {selectedContract.overallStatus}
                    </div>
                  </div>

                  {/* Clause-by-Clause Verification Ledger */}
                  <div className="space-y-6">
                    {selectedContract.clauses.map((clause, index) => (
                      <div
                        key={index}
                        className="border border-[#2E2C29] bg-[#141413] p-4 sm:p-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-[#2E2C29] text-xs">
                          <span className="text-[#F6F4EE]">
                            {clause.clauseRef}
                          </span>
                          <span
                            className={`px-2 py-0.5 ${
                              clause.isFlagged
                                ? "text-[#C84B31] border border-[#C84B31]"
                                : "text-[#2D5A3C] border border-[#2D5A3C]"
                            }`}
                          >
                            {clause.badge}
                          </span>
                        </div>

                        <h4 className="font-sans font-normal text-base text-[#F6F4EE] mb-2">
                          {clause.title}
                        </h4>

                        <div className="mb-3">
                          <div className="text-[10px] text-[#6E6A63] uppercase mb-1">
                            EXTRACTED COUNTERPARTY CLAUSE:
                          </div>
                          <p className="text-xs text-[#6E6A63] leading-relaxed bg-[#181715] p-3 border border-[#2E2C29]">
                            &ldquo;{clause.extractedText}&rdquo;
                          </p>
                        </div>

                        <div className="text-[11px] text-[#C84B31] mb-2">
                          → {clause.ruleCitation}
                        </div>

                        <div>
                          <div className="text-[10px] text-[#2D5A3C] uppercase mb-1">
                            PROPOSED REDLINE COUNTER-PROPOSAL:
                          </div>
                          <pre className="text-xs text-[#F6F4EE] bg-[#181715] p-3 border border-[#2E2C29] overflow-x-auto whitespace-pre-wrap leading-relaxed">
                            <code>{clause.proposedRedline}</code>
                          </pre>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Terminal Action Bar */}
                <div className="pt-5 mt-6 border-t border-[#2E2C29] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
                  <div className="text-[#6E6A63]">
                    {exportMessage ? (
                      <span className="text-[#2D5A3C]">{exportMessage}</span>
                    ) : (
                      <span>
                        OUTPUT FORMAT: ECMA-376 DOCX TRACK CHANGES + JSON
                      </span>
                    )}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setExportMessage(
                        `[✓] Dispatched ${selectedContract.fileName} redline bundle to local workspace.`
                      )
                    }
                    className="px-4 py-2 bg-[#EFECE4] text-[#141413] hover:bg-[#F6F4EE] transition-colors font-mono text-xs shrink-0"
                  >
                    Export Redline Dossier (.DOCX) →
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
