import React from "react";

export function Metrics() {
  const stats = [
    {
      code: "METRIC // 01",
      value: "10.4x",
      label: "Throughput Velocity",
      detail:
        "Mean contract audit duration reduced from 6.2 billable hours to 11.4 minutes per 80-page enterprise agreement.",
      accent: "text-[#141413]",
    },
    {
      code: "METRIC // 02",
      value: "99.4%",
      label: "Clause Recall Precision",
      detail:
        "Deterministic AST extraction verified against senior associate ground-truth annotations across 42 risk taxonomies.",
      accent: "text-[#C84B31]",
    },
    {
      code: "METRIC // 03",
      value: "$142K",
      label: "Mean Annual Outside Counsel Savings",
      detail:
        "Direct reduction in routine pre-signature redlining and third-party counterparty paper triage billing per deal desk.",
      accent: "text-[#141413]",
    },
    {
      code: "METRIC // 04",
      value: "0 Bytes",
      label: "Post-Session Data Retention",
      detail:
        "Ephemeral enclave execution with cryptographic memory wipe immediately following DOCX redline export.",
      accent: "text-[#2D5A3C]",
    },
  ];

  const ledgerRows = [
    {
      vector: "Indemnification Cap Detection",
      manual: "94.2% recall (fatigue variance on nested carve-outs)",
      genericLlm: "78.6% recall (misses cross-exhibit super-caps)",
      docusync: "[✓] 99.7% recall (full syntactic tree resolution)",
    },
    {
      vector: "Cross-Reference Verification",
      manual: "Manual page-flipping / 14.8% orphan section oversight",
      genericLlm: "Unverified token window / fails on broken § links",
      docusync: "[✓] 100% deterministic graph traversal across all exhibits",
    },
    {
      vector: "GDPR Art. 28 Sub-processor Audit",
      manual: "45 min manual DPA annex & sub-processor cross-check",
      genericLlm: "High false-negative rate on jurisdictional transfer clauses",
      docusync: "[✓] Automated SCC module & sub-processor registry diffing",
    },
    {
      vector: "Hallucination / False Citation Rate",
      manual: "0.0% fabrication / 3.1% human transcription error",
      genericLlm: "11.4% fabricated clause citations or misquoted sections",
      docusync: "[✓] 0.0% guaranteed via verbatim character-offset anchoring",
    },
    {
      vector: "Mean Time for 80-Page MSA",
      manual: "6 hr 12 min (median across 38 senior corporate associates)",
      genericLlm: "42 min (including manual audit of ungrounded outputs)",
      docusync: "[✓] 1 min 48 sec (with exportable DOCX track-changes)",
    },
  ];

  return (
    <section
      id="metrics"
      className="py-24 bg-[#F6F4EE] text-[#141413] border-t border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asymmetric Editorial Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C84B31] block mb-3">
              SECTION 03 // EMPIRICAL BENCHMARK CONCORDANCE LEDGER
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#141413] leading-[1.1]">
              Verified Audit Performance Across{" "}
              <span className="font-serif italic text-[#C84B31]">
                1,420 Commercial Agreements
              </span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-sm sm:text-base text-[#6E6A63] leading-relaxed">
              Evaluated in a blind concordance study against senior AmLaw 100
              corporate associates across multi-jurisdictional Master Services
              Agreements, Data Processing Addenda, and M&amp;A disclosure
              schedules.
            </p>
          </div>
        </div>

        {/* Top Architectural 4-Cell Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#DCD8CE] divide-y sm:divide-y-0 sm:divide-x divide-[#DCD8CE] bg-[#EFECE4] mb-16">
          {stats.map((stat) => (
            <div
              key={stat.code}
              className="p-6 sm:p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#6E6A63]">
                    {stat.code}
                  </span>
                  <span className="font-mono text-xs text-[#6E6A63]">§</span>
                </div>
                <div
                  className={`text-4xl sm:text-5xl font-normal tracking-tight font-mono mb-3 ${stat.accent}`}
                >
                  {stat.value}
                </div>
                <h3 className="text-sm font-medium text-[#141413] mb-2">
                  {stat.label}
                </h3>
              </div>
              <p className="text-xs text-[#6E6A63] leading-relaxed pt-4 border-t border-[#DCD8CE]">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Empirical Benchmark Concordance Ledger Table */}
        <div className="border border-[#DCD8CE] bg-[#F6F4EE]">
          <div className="px-6 py-4 bg-[#EFECE4] border-b border-[#DCD8CE] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs uppercase tracking-wider text-[#141413] font-medium">
                EMPIRICAL BENCHMARK CONCORDANCE LEDGER // CORPUS N = 1,420
                COMMERCIAL AGREEMENTS
              </span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-widest text-[#2D5A3C]">
              [✓] PROTOCOL: BLIND DUAL-ASSOCIATE GROUND TRUTH
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[#DCD8CE] bg-[#EFECE4]/60 font-mono text-[11px] uppercase tracking-wider text-[#6E6A63]">
                  <th className="py-4 px-6 border-r border-[#DCD8CE] font-medium">
                    Evaluation Vector
                  </th>
                  <th className="py-4 px-6 border-r border-[#DCD8CE] font-medium">
                    Manual Associate Review
                  </th>
                  <th className="py-4 px-6 border-r border-[#DCD8CE] font-medium">
                    Generic LLM Wrapper
                  </th>
                  <th className="py-4 px-6 font-medium text-[#141413]">
                    DocuSync Deterministic AST Engine
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#DCD8CE] text-xs sm:text-sm">
                {ledgerRows.map((row) => (
                  <tr
                    key={row.vector}
                    className="hover:bg-[#EFECE4]/40 transition-colors"
                  >
                    <td className="py-4 px-6 border-r border-[#DCD8CE] font-medium text-[#141413]">
                      {row.vector}
                    </td>
                    <td className="py-4 px-6 border-r border-[#DCD8CE] text-[#6E6A63] font-mono text-xs">
                      {row.manual}
                    </td>
                    <td className="py-4 px-6 border-r border-[#DCD8CE] text-[#C84B31] font-mono text-xs">
                      {row.genericLlm}
                    </td>
                    <td className="py-4 px-6 bg-[#EFECE4]/50 text-[#2D5A3C] font-mono text-xs font-medium">
                      {row.docusync}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-3.5 bg-[#EFECE4] border-t border-[#DCD8CE] flex flex-wrap items-center justify-between gap-2 font-mono text-[11px] text-[#6E6A63]">
            <span>
              METHODOLOGY: 80-PAGE ENTERPRISE MSA + DPA TEST SUITE (2026
              RELEASE)
            </span>
            <span>ZERO UNGROUNDED INFERENCE PERMITTED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
