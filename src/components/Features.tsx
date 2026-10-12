import React from "react";

interface SpecificationRow {
  index: string;
  metric: string;
  metricTone: "vermilion" | "sage";
  title: string;
  clauseRef: string;
  description: string;
  snippetLabel: string;
  snippet: string;
  anchorId?: string;
}

const specificationRows: SpecificationRow[] = [
  {
    index: "01",
    metric: "1M+ Context",
    metricTone: "vermilion",
    title: "Multi-Instrument Cross-Reference",
    clauseRef: "§ 1.01 // HIERARCHY RESOLUTION",
    description:
      "Cross-reference Master Services Agreements against concurrent Statements of Work, fee schedules, and Data Processing Addenda in a single pass. Identifies hierarchy contradictions where annex provisions silently override baseline liability caps.",
    snippetLabel: "AST_CROSS_REF_TRACE",
    snippet: `§ 4.2 MSA <-> Exhibit B § 1.1
[CONFLICT] Cap: 12mo Fees vs Unlimited
RESOLUTION: Enforce MSA § 18.4 Precedence`,
  },
  {
    index: "02",
    metric: "100% Citation",
    metricTone: "sage",
    title: "Playbook Rule Verification",
    clauseRef: "§ 1.02 // DETERMINISTIC POLICY AUDIT",
    description:
      "Compile corporate fallback positions into strict verification predicates. Every incoming counterparty draft is evaluated clause-by-clause against approved legal tolerances, anchoring each finding to exact page, paragraph, and byte offsets.",
    snippetLabel: "POLICY_EVAL_OUTPUT",
    snippet: `RULE_ID: PB_INDEM_08 (IP Infringement)
TARGET : Page 14, Clause 11.2, Line 418
STATUS : [✓] VERIFIED_FALLBACK_TIER_1`,
  },
  {
    index: "03",
    metric: "< 40ms",
    metricTone: "vermilion",
    title: "Structured Obligation Extraction",
    clauseRef: "§ 1.03 // TYPED SCHEMA SERIALIZATION",
    description:
      "Parse unstructured indemnity ceilings, auto-renewal notice windows, governing jurisdictions, and termination-for-convenience triggers into strictly typed JSON payloads ready for direct ERP and billing ledger ingestion.",
    snippetLabel: "SCHEMA_EXTRACT_JSON",
    snippet: `{
  "liabilityCap": "2.0x_ANNUAL_FEES",
  "optOutNoticeDays": 60,
  "governingLaw": "DE_CHANCERY_US"
}`,
  },
  {
    index: "04",
    metric: "SOC2 Zero-Retention",
    metricTone: "sage",
    title: "Volatile Enclave Execution",
    clauseRef: "§ 1.04 // CRYPTOGRAPHIC ISOLATION",
    description:
      "Execute contract audits inside SOC2 Type II attested memory enclaves with zero disk persistence. Counterparty agreements are never written to non-volatile storage or exposed to external model training pipelines.",
    snippetLabel: "ENCLAVE_ATTESTATION",
    snippet: `CIPHER : TLS_1.3 // AES_256_GCM
DISK_IO: 0 BYTES WRITTEN
PURGE  : [✓] VOLATILE_HEAP_CLEARED`,
    anchorId: "security",
  },
  {
    index: "05",
    metric: "AST Diff Engine",
    metricTone: "vermilion",
    title: "Surgical Redline Synthesis",
    clauseRef: "§ 1.05 // COUNTER-PROPOSAL GENERATION",
    description:
      "Generate defensible negotiation counter-proposals with word-level insertions and deletions. Every proposed modification cites the governing playbook rule and preserves surrounding defined terms without altering grammatical scope.",
    snippetLabel: "REDLINE_DIFF_PATCH",
    snippet: `@@ Clause 9.3: Notice Window @@
- upon five (5) business days notice
+ upon thirty (30) calendar days prior written notice
[✓] Aligned with Playbook Rule 9.3`,
  },
  {
    index: "06",
    metric: "DOCX Native",
    metricTone: "sage",
    title: "Bi-Directional CLM Telemetry",
    clauseRef: "§ 1.06 // OPENXML ROUND-TRIP",
    description:
      "Serialize approved redlines directly into native OpenXML Word track-changes runs (w:ins / w:del) with embedded legal commentary. Dispatch structured state transitions to Ironclad, Salesforce, and DocuSign via signed webhooks.",
    snippetLabel: "OPENXML_STREAM_SPEC",
    snippet: `FORMAT : ECMA-376 OpenXML (w:trackRevisions)
WEBHOOK: IRONCLAD_STATE_SYNC [200 OK]
CHECKSUM: sha256:9f84c2e1...a40b`,
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="py-24 sm:py-32 bg-[#F6F4EE] text-[#141413] border-b border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-start">
          {/* Left Column (4 cols): Editorial Header & Architectural Summary Ledger */}
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <div className="font-mono text-xs uppercase tracking-widest text-[#C84B31] mb-4">
              SECTION 01 // ARCHITECTURAL CAPABILITIES
            </div>

            <h2 className="font-normal text-3xl sm:text-5xl text-[#141413] tracking-tight leading-[1.12] mb-6">
              Engineered for deterministic{" "}
              <span className="font-serif italic font-normal">
                legal precision.
              </span>
            </h2>

            <p className="text-[#6E6A63] text-sm sm:text-base leading-relaxed mb-8">
              Replace manual clause-by-clause review with an auditable legal
              verification matrix. Every claim is anchored to an explicit byte
              offset and evaluated against your institutional playbook.
            </p>

            {/* Technical Specification Summary Table */}
            <div className="bg-[#EFECE4] border border-[#DCD8CE] p-5">
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#DCD8CE] font-mono text-xs text-[#141413]">
                <span>SYSTEM SPECIFICATION LEDGER</span>
                <span className="text-[#2D5A3C]">[✓] REV 4.2</span>
              </div>

              <dl className="space-y-3 font-mono text-xs">
                <div className="flex items-center justify-between py-1 border-b border-[#DCD8CE]">
                  <dt className="text-[#6E6A63]">CONTEXT WINDOW</dt>
                  <dd className="text-[#141413] font-medium">1,048,576 TOKENS</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DCD8CE]">
                  <dt className="text-[#6E6A63]">PARSER LATENCY</dt>
                  <dd className="text-[#141413] font-medium">&lt; 40.0 MS / CLAUSE</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DCD8CE]">
                  <dt className="text-[#6E6A63]">CITATION FIDELITY</dt>
                  <dd className="text-[#2D5A3C] font-medium">100% DETERMINISTIC</dd>
                </div>
                <div className="flex items-center justify-between py-1 border-b border-[#DCD8CE]">
                  <dt className="text-[#6E6A63]">DATA RETENTION</dt>
                  <dd className="text-[#141413] font-medium">0.00 MS (VOLATILE)</dd>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <dt className="text-[#6E6A63]">ATTESTATION</dt>
                  <dd className="text-[#C84B31] font-medium">SOC2 TYPE II / ISO</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Right Column (8 cols): 6-Row Specification Matrix */}
          <div className="lg:col-span-8 border-t border-[#DCD8CE]">
            {specificationRows.map((row) => (
              <article
                key={row.index}
                id={row.anchorId}
                className="py-8 border-b border-[#DCD8CE] transition-colors hover:bg-[#EFECE4]/50"
              >
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                  {/* Sub-column 1 (3 cols): Index & Telemetry Metric */}
                  <div className="md:col-span-3 flex flex-row md:flex-col justify-between md:justify-start gap-2">
                    <div className="font-mono text-xs text-[#6E6A63]">
                      SPEC // {row.index}
                    </div>
                    <div className="mt-1">
                      <span
                        className={`inline-block font-mono text-xs px-2.5 py-1 bg-[#EFECE4] border border-[#DCD8CE] ${
                          row.metricTone === "vermilion"
                            ? "text-[#C84B31]"
                            : "text-[#2D5A3C]"
                        }`}
                      >
                        {row.metric}
                      </span>
                    </div>
                    <div className="hidden md:block font-mono text-[11px] text-[#6E6A63] mt-3">
                      {row.clauseRef}
                    </div>
                  </div>

                  {/* Sub-column 2 (5 cols): Heading & Deep Technical Description */}
                  <div className="md:col-span-5">
                    <h3 className="font-normal text-xl text-[#141413] tracking-tight mb-2.5">
                      {row.title}
                    </h3>
                    <p className="text-sm text-[#6E6A63] leading-relaxed">
                      {row.description}
                    </p>
                  </div>

                  {/* Sub-column 3 (4 cols): Real Clause / Code Verification Snippet */}
                  <div className="md:col-span-4 w-full">
                    <div className="font-mono text-xs bg-[#EFECE4] p-3 border border-[#DCD8CE] text-[#141413]">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#DCD8CE] text-[10px] text-[#6E6A63]">
                        <span>{row.snippetLabel}</span>
                        <span>→</span>
                      </div>
                      <pre className="overflow-x-auto whitespace-pre-wrap leading-relaxed text-[11px] text-[#141413]">
                        <code>{row.snippet}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
