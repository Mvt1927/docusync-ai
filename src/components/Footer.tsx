import React from "react";
import Link from "next/link";

const footerColumns = [
  {
    index: "01",
    heading: "ENGINE & PROTOCOL",
    links: [
      { label: "Deterministic Clause Parser", href: "#features" },
      { label: "Playbook Concordance Engine", href: "#features" },
      { label: "Interactive Redline Sandbox", href: "#sandbox" },
      { label: "Multi-Document Cross-Audit", href: "#how-it-works" },
      { label: "Enterprise Licensing", href: "#pricing" },
    ],
  },
  {
    index: "02",
    heading: "SECURITY & COMPLIANCE",
    links: [
      { label: "SOC 2 Type II Attestation", href: "#security" },
      { label: "Zero Data Retention SLA", href: "#security" },
      { label: "GDPR Article 28 Addendum", href: "#security" },
      { label: "ISO 27001 Cryptographic Spec", href: "#security" },
      { label: "Dedicated VPC Deployment", href: "#pricing" },
    ],
  },
  {
    index: "03",
    heading: "LEGAL & GOVERNANCE",
    links: [
      { label: "Master Services Agreement", href: "#faq" },
      { label: "Data Processing Ledger", href: "#security" },
      { label: "Subprocessor Registry", href: "#security" },
      { label: "Privacy & Archival Policy", href: "#faq" },
      { label: "Security Vulnerability Disclosure", href: "#faq" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-[#EFECE4] border-t border-[#DCD8CE] text-[#141413] text-xs">
      <div className="max-w-7xl mx-auto">
        {/* Top System Telemetry Bar */}
        <div className="px-4 sm:px-8 lg:px-10 py-4 border-b border-[#DCD8CE] flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-[#F6F4EE]">
          <div className="flex items-center gap-2.5 font-mono text-[11px]">
            <span className="text-[#2D5A3C] font-medium">[✓]</span>
            <span className="tracking-wider uppercase text-[#141413]">
              SYSTEM STATUS: ALL DETERMINISTIC NODES OPERATIONAL (99.99% SLA)
            </span>
          </div>
          <span className="font-mono text-[11px] text-[#6E6A63]">
            SPECIFICATION REV 4.2 // US-EAST & EU-CENTRAL ENCLAVES
          </span>
        </div>

        {/* Architectural Grid Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 border-b border-[#DCD8CE]">
          {/* Brand & Archival Colophon (5 cols) */}
          <div className="md:col-span-5 p-6 sm:p-8 lg:p-10 border-b md:border-b-0 md:border-r border-[#DCD8CE] flex flex-col justify-between">
            <div>
              <Link href="/" className="inline-flex items-center gap-3 mb-5">
                <span className="font-mono text-xs px-2 py-1 bg-[#141413] text-[#F6F4EE]">
                  [§]
                </span>
                <span className="text-sm font-medium tracking-tight text-[#141413]">
                  DOCUSYNC // LEGAL INTELLIGENCE
                </span>
              </Link>
              <p className="text-xs text-[#6E6A63] leading-relaxed max-w-sm mb-6">
                Deterministic contract review, automated playbook enforcement,
                and citation-locked redlining engineered for enterprise legal
                departments and M&amp;A counsel.
              </p>
            </div>

            <div className="pt-4 border-t border-[#DCD8CE] font-mono text-[11px] text-[#6E6A63] space-y-1">
              <div>ENCRYPTION: AES-256-GCM / TLS 1.3 STRICT</div>
              <div>RETENTION POLICY: ZERO TRAINING / EPHEMERAL RAM</div>
            </div>
          </div>

          {/* Navigation Columns (7 cols split into 3 architectural cells) */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[#DCD8CE]">
            {footerColumns.map((col) => (
              <div key={col.index} className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4 pb-2 border-b border-[#DCD8CE]">
                  <span className="font-mono text-[10px] text-[#C84B31]">
                    {col.index}
                  </span>
                  <h4 className="font-mono text-[11px] font-normal uppercase tracking-wider text-[#141413]">
                    {col.heading}
                  </h4>
                </div>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs text-[#6E6A63] hover:text-[#C84B31] transition-colors inline-flex items-center gap-1.5"
                      >
                        <span>{link.label}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Copyright & Archival Ledger Bar */}
        <div className="px-4 sm:px-8 lg:px-10 py-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-[11px] text-[#6E6A63]">
            © 2026 DocuSync AI Inc. All rights reserved. Deterministic Contract
            Workbench.
          </p>
          <div className="flex items-center gap-6 font-mono text-[11px] text-[#141413]">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C84B31] transition-colors"
            >
              GITHUB ↗
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C84B31] transition-colors"
            >
              X / TWITTER ↗
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C84B31] transition-colors"
            >
              LINKEDIN ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
