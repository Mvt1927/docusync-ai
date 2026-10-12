"use client";

import React, { useState } from "react";

interface ContractLine {
  lineNumber: string;
  text: string;
}

interface ClauseSpec {
  id: string;
  label: string;
  sectionCode: string;
  title: string;
  severityLabel: string;
  riskScore: number;
  playbookHeader: string;
  playbookRuleText: string;
  auditFinding: string;
  removedLine: string;
  addedLine: string;
  lines: ContractLine[];
}

const clausesData: ClauseSpec[] = [
  {
    id: "indemnification",
    label: "§ 14.2 Indemnification",
    sectionCode: "§ 14.2",
    title: "Indemnification",
    severityLabel: "CRITICAL DEVIATION",
    riskScore: 88,
    playbookHeader: "PLAYBOOK RULE #8.4",
    playbookRuleText:
      "PLAYBOOK RULE #8.4: Mutual IP & Operational Indemnification must be capped at 2x 12-Month Contract Value. Uncapped customer obligations are prohibited.",
    auditFinding:
      "Lines 001 to 006 impose unilateral, uncapped defense and indemnification obligations on Customer without reciprocal Vendor IP infringement coverage.",
    removedLine:
      "Customer shall unconditionally defend and indemnify Vendor against all third-party claims without monetary limit or liability cap.",
    addedLine:
      "Each party shall mutually defend and indemnify the other for third-party IP claims, subject to a two-times (2x) 12-month fee cap.",
    lines: [
      {
        lineNumber: "001",
        text: "SECTION 14.2: INDEMNIFICATION & THIRD-PARTY DEFENSE OBLIGATIONS.",
      },
      {
        lineNumber: "002",
        text: "Customer shall unconditionally defend, indemnify, and hold harmless",
      },
      {
        lineNumber: "003",
        text: "Vendor, its officers, and affiliates against any third-party claims,",
      },
      {
        lineNumber: "004",
        text: "damages, regulatory fines, or legal fees arising from Customer use,",
      },
      {
        lineNumber: "005",
        text: "and such indemnification obligations shall remain entirely uncapped",
      },
      {
        lineNumber: "006",
        text: "notwithstanding any limitation of liability set forth in this Agreement.",
      },
    ],
  },
  {
    id: "liability",
    label: "§ 18.1 Limitation of Liability",
    sectionCode: "§ 18.1",
    title: "Limitation of Liability",
    severityLabel: "HIGH EXPOSURE",
    riskScore: 74,
    playbookHeader: "PLAYBOOK RULE #8.4",
    playbookRuleText:
      "PLAYBOOK RULE #8.4 (SUB-CLAUSE B): Aggregate supercap must equal at least 2x Annual Contract Value (ACV) for both parties across all direct damages.",
    auditFinding:
      "Lines 007 to 012 restrict Vendor aggregate liability to three (3) months of fees while carving out Customer confidentiality and indemnity caps.",
    removedLine:
      "IN NO EVENT SHALL VENDOR AGGREGATE LIABILITY EXCEED FEES PAID IN THE THREE (3) MONTHS PRECEDING THE CLAIM.",
    addedLine:
      "IN NO EVENT SHALL EITHER PARTY AGGREGATE LIABILITY EXCEED TWO TIMES (2X) THE TOTAL FEES PAID IN THE PRECEDING TWELVE (12) MONTHS.",
    lines: [
      {
        lineNumber: "007",
        text: "SECTION 18.1: AGGREGATE LIMITATION OF MONETARY LIABILITY.",
      },
      {
        lineNumber: "008",
        text: "IN NO EVENT SHALL VENDOR AGGREGATE LIABILITY ARISING OUT OF OR",
      },
      {
        lineNumber: "009",
        text: "RELATING TO THIS MASTER AGREEMENT EXCEED THE TOTAL FEES PAID BY",
      },
      {
        lineNumber: "010",
        text: "CUSTOMER IN THE THREE (3) MONTHS IMMEDIATELY PRECEDING THE EVENT,",
      },
      {
        lineNumber: "011",
        text: "EXCEPT THAT CUSTOMER OBLIGATIONS UNDER SECTION 14 SHALL BE",
      },
      {
        lineNumber: "012",
        text: "SUBJECT TO NO MONETARY CEILING OR AGGREGATE LIABILITY LIMITATION.",
      },
    ],
  },
  {
    id: "gdpr",
    label: "§ 9.3 Data Processing & GDPR",
    sectionCode: "§ 9.3",
    title: "Data Processing & GDPR",
    severityLabel: "REVISION ADVISED",
    riskScore: 32,
    playbookHeader: "PLAYBOOK RULE #8.4",
    playbookRuleText:
      "PLAYBOOK RULE #8.4 (ADDENDUM C): Zero training on Customer Data, mandatory 24-hour breach notification under GDPR Art. 28, and EU/US data residency lock.",
    auditFinding:
      "Lines 013 to 018 permit anonymized telemetry aggregation and allow a 72-hour breach notice window instead of our mandatory 24-hour SLA.",
    removedLine:
      "Vendor may retain anonymized derivative telemetry for model tuning and shall notify Customer within 72 hours of a confirmed breach.",
    addedLine:
      "Vendor shall enforce Zero Data Retention with no model training and notify Customer within 24 hours of any suspected security incident.",
    lines: [
      {
        lineNumber: "013",
        text: "SECTION 9.3: DATA PROCESSING, SUBPROCESSORS & GDPR ARTICLE 28.",
      },
      {
        lineNumber: "014",
        text: "Each party retains all right, title, and ownership in pre-existing",
      },
      {
        lineNumber: "015",
        text: "Intellectual Property and Customer Data uploaded to the Services.",
      },
      {
        lineNumber: "016",
        text: "Vendor may retain anonymized derivative telemetry for model tuning",
      },
      {
        lineNumber: "017",
        text: "and shall notify Customer within seventy-two (72) hours following",
      },
      {
        lineNumber: "018",
        text: "confirmation of any unauthorized disclosure of Personal Data.",
      },
    ],
  },
];

export function HeroMockup() {
  const [selectedClauseId, setSelectedClauseId] =
    useState<string>("indemnification");
  const [redlineAccepted, setRedlineAccepted] = useState<boolean>(false);

  const activeClause =
    clausesData.find((c) => c.id === selectedClauseId) || clausesData[0];

  const handleSelectClause = (id: string) => {
    setSelectedClauseId(id);
    setRedlineAccepted(false);
  };

  return (
    <div className="w-full bg-[#181715] text-[#F6F4EE] border border-[#141413]">
      {/* Workbench Top Archival Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3.5 border-b border-[#2E2C29] bg-[#141413]">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs px-2 py-0.5 bg-[#C84B31] text-[#F6F4EE]">
            EXHIBIT A
          </span>
          <span className="font-mono text-xs text-[#F6F4EE]">
            MSA_ENTERPRISE_AGREEMENT_v4.2.PDF
          </span>
          <span className="font-mono text-[11px] text-[#A39E93]">
            / 64 PAGES / PARSED IN 1.4S
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="font-mono text-[11px] text-[#2D5A3C] bg-[#181715] border border-[#2E2C29] px-2.5 py-1">
            [✓] ZERO-HALLUCINATION VERIFIED
          </span>
          <button
            type="button"
            onClick={() => setRedlineAccepted(false)}
            className="font-mono text-[11px] text-[#A39E93] hover:text-[#F6F4EE] border border-[#2E2C29] bg-[#181715] px-2.5 py-1 transition-colors"
          >
            RESET STATE
          </button>
        </div>
      </div>

      {/* Interactive Clause Selector Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-[#2E2C29] bg-[#141413]">
        {clausesData.map((clause) => {
          const isSelected = clause.id === selectedClauseId;
          return (
            <button
              key={clause.id}
              type="button"
              onClick={() => handleSelectClause(clause.id)}
              className={`px-4 sm:px-5 py-3.5 text-left border-b md:border-b-0 md:border-r last:border-r-0 border-[#2E2C29] transition-colors flex items-center justify-between gap-2 ${
                isSelected
                  ? "bg-[#181715] text-[#F6F4EE] border-l-2 border-l-[#C84B31]"
                  : "bg-[#141413] text-[#A39E93] hover:bg-[#181715] hover:text-[#F6F4EE]"
              }`}
            >
              <span className="font-mono text-xs font-medium">
                {clause.label}
              </span>
              <span
                className={`font-mono text-[10px] px-2 py-0.5 border ${
                  isSelected
                    ? "border-[#C84B31] text-[#C84B31]"
                    : "border-[#2E2C29] text-[#A39E93]"
                }`}
              >
                RISK {clause.riskScore}/100
              </span>
            </button>
          );
        })}
      </div>

      {/* Main Workbench Grid: Left (7 Cols) Contract Ledger, Right (5 Cols) Playbook & Redline Diff */}
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Left Column (7 cols): Numbered Contract Lines 001..018 */}
        <div className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[#2E2C29] flex flex-col justify-between bg-[#181715]">
          <div>
            <div className="px-4 sm:px-6 py-3 border-b border-[#2E2C29] flex items-center justify-between bg-[#141413]">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#A39E93]">
                EXTRACTED CONTRACT TRANSCRIPT (LINES 001 TO 018)
              </span>
              <span className="font-mono text-[11px] text-[#C84B31]">
                ACTIVE: {activeClause.sectionCode}
              </span>
            </div>

            {/* 001..018 Line Ledger grouped by the 3 interactive clauses */}
            <div className="divide-y divide-[#2E2C29]">
              {clausesData.map((clause) => {
                const isSelected = clause.id === selectedClauseId;
                return (
                  <div
                    key={clause.id}
                    onClick={() => handleSelectClause(clause.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleSelectClause(clause.id);
                      }
                    }}
                    className={`cursor-pointer p-4 sm:px-6 sm:py-4 transition-colors ${
                      isSelected
                        ? "bg-[#141413] border-l-2 border-l-[#C84B31]"
                        : "bg-[#181715] hover:bg-[#141413]/60 opacity-75 hover:opacity-100"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs text-[#F6F4EE] font-medium">
                        {clause.label}
                      </span>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider ${
                          isSelected ? "text-[#C84B31]" : "text-[#A39E93]"
                        }`}
                      >
                        {isSelected ? "[SELECTED FOR AUDIT]" : "[CLICK TO INSPECT]"}
                      </span>
                    </div>

                    <div className="space-y-1">
                      {clause.lines.map((line) => (
                        <div
                          key={line.lineNumber}
                          className="flex items-baseline gap-3 font-mono text-[11px] sm:text-xs leading-relaxed"
                        >
                          <span className="text-[#6E6A63] select-none shrink-0">
                            {line.lineNumber}
                          </span>
                          <span
                            className={
                              isSelected ? "text-[#F6F4EE]" : "text-[#A39E93]"
                            }
                          >
                            {line.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Document Footer */}
          <div className="px-4 sm:px-6 py-3 border-t border-[#2E2C29] bg-[#141413] flex items-center justify-between font-mono text-[11px] text-[#A39E93]">
            <span>AUDIT TIMESTAMP: 2026-10-12 03:24:19 UTC</span>
            <span>FOLIO 18 OF 64</span>
          </div>
        </div>

        {/* Right Column (5 cols): Playbook Concordance Record & Redline Diff */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-[#141413]">
          <div>
            {/* Right Header */}
            <div className="px-5 py-3 border-b border-[#2E2C29] flex items-center justify-between">
              <span className="font-mono text-[11px] uppercase tracking-widest text-[#A39E93]">
                PLAYBOOK CONCORDANCE RECORD
              </span>
              <span className="font-mono text-[11px] text-[#C84B31]">
                {activeClause.playbookHeader}
              </span>
            </div>

            {/* Active Clause Title & Risk Meter */}
            <div className="p-5 border-b border-[#2E2C29] flex items-start justify-between gap-4 bg-[#181715]">
              <div>
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#A39E93] block mb-1">
                  CLAUSE UNDER EXAMINATION
                </span>
                <h3 className="text-base font-normal text-[#F6F4EE]">
                  {activeClause.label}
                </h3>
                <span className="font-mono text-[11px] text-[#C84B31] mt-1 inline-block">
                  [{activeClause.severityLabel}]
                </span>
              </div>

              <div className="border border-[#2E2C29] bg-[#141413] px-3.5 py-2 text-right shrink-0">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#A39E93] block">
                  RISK INDEX
                </span>
                <span className="font-mono text-xl font-normal text-[#C84B31]">
                  {activeClause.riskScore}
                  <span className="text-xs text-[#A39E93]">/100</span>
                </span>
              </div>
            </div>

            {/* Playbook Rule Box */}
            <div className="p-5 border-b border-[#2E2C29]">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-[#C84B31]">
                  {activeClause.playbookHeader} // CORPORATE STANDARD
                </span>
                <span className="font-mono text-[10px] text-[#A39E93]">
                  MANDATORY
                </span>
              </div>
              <p className="text-xs text-[#F6F4EE] leading-relaxed mb-2.5">
                {activeClause.playbookRuleText}
              </p>
              <p className="font-mono text-[11px] text-[#A39E93] leading-relaxed">
                FINDING: {activeClause.auditFinding}
              </p>
            </div>

            {/* Redline Diff Frame */}
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="font-mono text-[11px] uppercase tracking-widest text-[#F6F4EE]">
                  DETERMINISTIC REDLINE DIFF
                </span>
                <span className="font-mono text-[10px] text-[#A39E93]">
                  TRACK CHANGES: ON
                </span>
              </div>

              {redlineAccepted ? (
                <div className="p-4 border border-[#2D5A3C] bg-[#181715] font-mono text-xs text-[#F6F4EE] space-y-2">
                  <div className="text-[#2D5A3C] font-medium">
                    [✓] REDLINE COMMITTED TO CONTRACT LEDGER
                  </div>
                  <p className="text-[11px] text-[#A39E93] leading-relaxed">
                    Clause {activeClause.sectionCode} updated to comply with{" "}
                    {activeClause.playbookHeader}. Ready for DOCX / PDF export.
                  </p>
                </div>
              ) : (
                <div className="space-y-3 font-mono text-xs leading-relaxed">
                  {/* Deleted / Original Strikethrough in #C84B31 */}
                  <div className="p-3 bg-[#181715] border-l-2 border-[#C84B31] text-[#C84B31]">
                    <span className="select-none mr-2">-</span>
                    <span className="line-through">
                      {activeClause.removedLine}
                    </span>
                  </div>

                  {/* Added / Replacement in #2D5A3C */}
                  <div className="p-3 bg-[#181715] border-l-2 border-[#2D5A3C] text-[#2D5A3C]">
                    <span className="select-none mr-2">+</span>
                    <span>{activeClause.addedLine}</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="p-5 border-t border-[#2E2C29] bg-[#181715] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <button
              type="button"
              onClick={() => setRedlineAccepted(false)}
              className="px-4 py-2.5 border border-[#2E2C29] bg-[#141413] text-[#A39E93] hover:text-[#F6F4EE] font-mono text-xs transition-colors"
            >
              Revert Clause
            </button>

            <button
              type="button"
              onClick={() => setRedlineAccepted(true)}
              className={`px-5 py-2.5 font-mono text-xs font-medium transition-colors ${
                redlineAccepted
                  ? "bg-[#2D5A3C] text-[#F6F4EE]"
                  : "bg-[#C84B31] text-[#F6F4EE] hover:bg-[#141413] hover:border hover:border-[#C84B31]"
              }`}
            >
              {redlineAccepted
                ? "[✓] Redline Applied"
                : "Apply Playbook Redline →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
