"use client";

import React, { useState } from "react";

interface PipelineStage {
  id: number;
  code: string;
  buttonLabel: string;
  title: string;
  latency: string;
  throughput: string;
  summary: string;
  checkpoints: string[];
  terminalHeader: string;
  terminalStatus: string;
  payloadType: string;
  payload: string;
}

const pipelineStages: PipelineStage[] = [
  {
    id: 1,
    code: "STAGE 01",
    buttonLabel: "STAGE 01: Multi-Format Ingestion",
    title: "Hierarchical AST Tokenization & OCR Reconstruction",
    latency: "180ms / 50 pages",
    throughput: "100% Layout Fidelity",
    summary:
      "Ingests complex multi-column PDFs, native OpenXML Word (.docx) files, and scanned TIFF counterparts. Reconstructs nested numbering schemes, cross-referenced exhibits, defined term tables, and signature blocks into an immutable Abstract Syntax Tree.",
    checkpoints: [
      "[✓] Multi-column table & fee schedule geometry preservation",
      "[✓] Automatic resolution of external annexes (SOW, DPA, SLA)",
      "[✓] Byte-offset indexing for deterministic clause citation",
    ],
    terminalHeader: "PIPELINE_STAGE_01 // AST_PARSER_DAEMON",
    terminalStatus: "[✓] AST_COMMITTED",
    payloadType: "AST_DOCUMENT_GRAPH (JSON)",
    payload: `{
  "documentId": "doc_msa_2026_094",
  "sourceFormat": "PDF_SCANNED_OCR_HYBRID",
  "totalPages": 64,
  "indexedNodes": 142,
  "definedTermsCount": 48,
  "linkedSchedules": [
    "Exhibit_A_SOW_01",
    "Exhibit_B_Security_Addendum",
    "Schedule_3_GDPR_DPA"
  ],
  "clauseTree": [
    {
      "nodeId": "sec_12_3",
      "heading": "12.3 Limitation of Liability",
      "page": 29,
      "byteRange": [48120, 49015],
      "crossRefs": ["sec_8_1", "Exhibit_B_sec_4"]
    }
  ]
}`,
  },
  {
    id: 2,
    code: "STAGE 02",
    buttonLabel: "STAGE 02: Playbook Rule Verification",
    title: "Deterministic Policy Evaluation & Exposure Scoring",
    latency: "340ms / 142 clauses",
    throughput: "0 Hallucinations",
    summary:
      "Evaluates every parsed AST clause node against your institution's compiled legal playbook. Flags uncapped indemnities, unilateral amendment rights, non-standard governing jurisdictions, and SLA degradation loopholes with exact rule citations.",
    checkpoints: [
      "[✓] Cross-document reasoning across 1M+ context tokens",
      "[✓] Multi-tier fallback position matching (Tier 1 / Tier 2 / Escalate)",
      "[✓] Verifiable line-and-page citation attached to every finding",
    ],
    terminalHeader: "PIPELINE_STAGE_02 // PLAYBOOK_RULE_ENGINE",
    terminalStatus: "[!] 2 VIOLATIONS FLAGGED",
    payloadType: "VERIFICATION_LEDGER (AUDIT_TRACE)",
    payload: `AUDIT_RUN_ID : aud_2026_8841a
PLAYBOOK_REF : ENTERPRISE_SAAS_V4.2
VERIFICATION : DETERMINISTIC_AST_MATCH

[FLAGGED : HIGH RISK] -> Clause 12.3 (Page 29, Line 14)
  Rule Violated : PB_LIAB_04 (Super-Cap Ceiling)
  Detected Text : "Supplier liability for data breach shall be capped at $50,000."
  Playbook Rule : Minimum 2x Annual Contract Value (ACV) required for Data/IP claims.
  Fallback Tier : TIER_1_MANDATORY_REJECT

[VERIFIED : COMPLIANT] -> Clause 15.1 (Page 34, Line 02)
  Rule Checked  : PB_GOV_01 (Governing Law & Venue)
  Detected Text : "State of Delaware, Chancery Court."
  Status        : [✓] EXACT_POLICY_MATCH`,
  },
  {
    id: 3,
    code: "STAGE 03",
    buttonLabel: "STAGE 03: Deterministic Redline Export",
    title: "Surgical Diff Synthesis & Native OpenXML Serialization",
    latency: "95ms / Export",
    throughput: "DOCX + CLM Sync",
    summary:
      "Synthesizes clause-level counter-proposals anchored to historical deal precedents. Exports a native Word (.docx) file populated with real Track Changes markup and negotiator margin comments, or dispatches structured approval payloads to your CLM.",
    checkpoints: [
      "[✓] Native OpenXML (w:ins / w:del) Track Changes generation",
      "[✓] Automated margin commentary citing corporate fallback rules",
      "[✓] Webhook dispatch to Ironclad, Salesforce, and DocuSign",
    ],
    terminalHeader: "PIPELINE_STAGE_03 // REDLINE_SYNTHESIS_EXPORT",
    terminalStatus: "[✓] READY_FOR_DISPATCH",
    payloadType: "OPENXML_REDLINE_DIFF (PATCH)",
    payload: `--- a/Enterprise_MSA_v1.docx :: Clause_12.3
+++ b/Enterprise_MSA_v1_Redlined.docx :: Clause_12.3
@@ Page 29, Paragraph 4, Offset 48120 @@

  Notwithstanding anything to the contrary in Section 12.1,
  Supplier's aggregate liability arising out of a Data Security
  Incident or Confidentiality Breach shall not exceed
- Fifty Thousand Dollars ($50,000).
+ two times (2x) the total Fees paid or payable under this
+ Agreement in the twelve (12) months preceding the claim.

  [COMMENT // DocuSync Legal Engine]:
  "Aligned super-cap ceiling to 2x ACV per Playbook Rule PB_LIAB_04."

EXPORT_ARTIFACTS:
  [+] Enterprise_MSA_v1_Redlined.docx (OpenXML Track Changes)
  [+] Executive_Risk_Memo_2026.pdf   (Deal Desk Sign-Off)
  [✓] Ironclad_Workflow_Webhook      (Dispatched -> Status: 200 OK)`,
  },
];

export function HowItWorks() {
  const [activeStageId, setActiveStageId] = useState<number>(1);

  const activeStage =
    pipelineStages.find((stage) => stage.id === activeStageId) ||
    pipelineStages[0];

  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 bg-[#F6F4EE] text-[#141413] border-b border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (5 cols): Editorial Title & Vertical Stage Dossier Selector */}
          <div className="lg:col-span-5">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C84B31] mb-4">
              SECTION 02 // EXECUTION PIPELINE LEDGER
            </div>

            <h2 className="font-normal text-3xl sm:text-5xl text-[#141413] tracking-tight leading-[1.12] mb-5">
              From raw instrument to{" "}
              <span className="font-serif italic font-normal">
                verified redline.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#6E6A63] leading-relaxed mb-8">
              An auditable three-stage pipeline engineered for high-volume commercial
              counsel. Select any execution stage below to inspect the live AST
              and redline output stream.
            </p>

            {/* Vertical Technical Dossier Buttons */}
            <div className="border-t border-[#DCD8CE]">
              {pipelineStages.map((stage) => {
                const isActive = stage.id === activeStageId;
                return (
                  <button
                    key={stage.id}
                    type="button"
                    onClick={() => setActiveStageId(stage.id)}
                    className={`w-full text-left p-5 border-b border-r border-[#DCD8CE] transition-colors ${
                      isActive
                        ? "border-l-4 border-l-[#C84B31] bg-[#EFECE4]"
                        : "border-l-4 border-l-transparent bg-[#F6F4EE] hover:bg-[#EFECE4]/60"
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono text-xs mb-2">
                      <span
                        className={
                          isActive
                            ? "text-[#C84B31] font-medium"
                            : "text-[#6E6A63]"
                        }
                      >
                        {stage.buttonLabel}
                      </span>
                      <span className="text-[#6E6A63]">{stage.latency}</span>
                    </div>

                    <h3 className="font-normal text-lg text-[#141413] mb-1.5">
                      {stage.title}
                    </h3>

                    <div className="flex items-center justify-between font-mono text-[11px] text-[#6E6A63] pt-1">
                      <span>THROUGHPUT: {stage.throughput}</span>
                      <span
                        className={
                          isActive ? "text-[#C84B31]" : "text-[#6E6A63]"
                        }
                      >
                        {isActive ? "ACTIVE VIEW →" : "INSPECT [+]"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column (7 cols): Execution Output Terminal */}
          <div className="lg:col-span-7 bg-[#181715] text-[#F6F4EE] border border-[#141413] p-6 sm:p-8 font-mono">
            {/* Terminal Top Bar */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-6 border-b border-[#2E2C29] text-xs">
              <div className="flex items-center gap-3">
                <span className="px-2 py-0.5 bg-[#C84B31] text-[#F6F4EE]">
                  {activeStage.code}
                </span>
                <span className="text-[#F6F4EE]">
                  {activeStage.terminalHeader}
                </span>
              </div>
              <span className="text-[#2D5A3C] bg-[#141413] px-2.5 py-1 border border-[#2E2C29]">
                {activeStage.terminalStatus}
              </span>
            </div>

            {/* Stage Narrative & Checkpoints inside Terminal */}
            <div className="mb-6 font-sans">
              <div className="font-mono text-xs text-[#6E6A63] uppercase tracking-wider mb-1.5">
                STAGE SPECIFICATION // {activeStage.buttonLabel}
              </div>
              <h3 className="font-normal text-xl sm:text-2xl text-[#F6F4EE] mb-3">
                {activeStage.title}
              </h3>
              <p className="text-sm text-[#6E6A63] leading-relaxed mb-5">
                {activeStage.summary}
              </p>

              <div className="grid grid-cols-1 gap-2 pt-4 border-t border-[#2E2C29] font-mono text-xs">
                {activeStage.checkpoints.map((item, idx) => (
                  <div key={idx} className="text-[#F6F4EE] flex items-start gap-2">
                    <span className="text-[#2D5A3C] shrink-0">
                      {item.slice(0, 3)}
                    </span>
                    <span className="text-[#F6F4EE]/90">{item.slice(4)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Raw AST / JSON / Diff Output Block */}
            <div className="border border-[#2E2C29] bg-[#141413]">
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2E2C29] text-[11px] text-[#6E6A63]">
                <span>STREAM // {activeStage.payloadType}</span>
                <span>LATENCY: {activeStage.latency}</span>
              </div>
              <pre className="p-4 sm:p-5 text-xs text-[#F6F4EE] overflow-x-auto leading-relaxed">
                <code>{activeStage.payload}</code>
              </pre>
            </div>

            {/* Terminal Footer Controls */}
            <div className="mt-6 pt-4 border-t border-[#2E2C29] flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="text-[#6E6A63]">
                STEP {activeStage.id} OF 3 // DETERMINISTIC VERIFICATION PIPELINE
              </div>
              <div className="flex items-center gap-3">
                {pipelineStages.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActiveStageId(s.id)}
                    className={`px-2.5 py-1 border transition-colors ${
                      s.id === activeStageId
                        ? "border-[#C84B31] text-[#C84B31]"
                        : "border-[#2E2C29] text-[#6E6A63] hover:text-[#F6F4EE]"
                    }`}
                  >
                    0{s.id}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() =>
                    setActiveStageId(activeStageId < 3 ? activeStageId + 1 : 1)
                  }
                  className="px-4 py-1.5 bg-[#C84B31] text-[#F6F4EE] hover:bg-[#C84B31]/90 transition-colors"
                >
                  {activeStageId < 3
                    ? "Advance Stage →"
                    : "Restart Pipeline →"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
