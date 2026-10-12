"use client";

import React, { useState } from "react";

interface FAQItem {
  code: string;
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      code: "01",
      question: "How does DocuSync AI guarantee zero hallucinations?",
      answer:
        "DocuSync AI relies on deterministic grounded extraction rather than generative guessing. Every single flagged risk, liability score, and suggested redline is mathematically tied to exact verbatim line and page numbers in your source contract. If an assertion cannot be cited with 100% confidence, the engine marks it as 'Uncertain : Human Review Required' instead of guessing.",
    },
    {
      code: "02",
      question: "Is our company contract data used to train AI models?",
      answer:
        "Never. Under our enterprise Service Level Agreement (SLA), customer data is protected by strict Zero Data Retention (ZDR). Your documents, playbooks, and redlines are processed in transient, isolated memory environments and never stored, logged, or utilized to train proprietary, open-source, or third-party foundational models.",
    },
    {
      code: "03",
      question: "How does playbook customization work for our company guidelines?",
      answer:
        "You can upload your existing standard contract templates, negotiation fallback matrices, or standard playbook guidelines (PDF, DOCX, or Markdown). DocuSync AI compiles your acceptable risk boundaries (for example: 'Never accept uncapped indemnity' or 'Payment terms must be Net 45 or shorter') into deterministic AST rules and grades counterparty contracts directly against those standards.",
    },
    {
      code: "04",
      question: "Can DocuSync AI integrate with our existing CLM (Ironclad, Agiloft, etc.)?",
      answer:
        "Yes. We support pre-built bi-directional connectors for Ironclad, Salesforce, DocuSign CLM, Agiloft, and Slack. You can configure DocuSync AI to automatically trigger upon receiving new counterparty paper in your CLM, execute the playbook audit, and post native DOCX track-change redlines directly into the contract record.",
    },
    {
      code: "05",
      question: "What file formats and length limits are supported?",
      answer:
        "We support native PDF, scanned PDFs (with optical layout recovery), Microsoft Word (.docx), and Rich Text (.rtf). Because our parser builds a hierarchical document tree across 1M+ token context windows, there are virtually no page limits: we routinely parse 150+ page government solicitations, cross-border master agreements, and complex syndicated credit agreements.",
    },
    {
      code: "06",
      question: "What certifications and security compliance standards do you maintain?",
      answer:
        "DocuSync AI is SOC 2 Type II certified, ISO 27001 compliant, and fully aligned with GDPR Article 28 and HIPAA safeguards. All document transmissions utilize TLS 1.3 in transit and AES-256 in ephemeral memory, with optional dedicated single-tenant VPC deployment for enterprise legal teams.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-[#F6F4EE] text-[#141413] border-t border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Section Header & Technical Contact Box */}
          <div className="lg:col-span-4">
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C84B31] block mb-3">
              SECTION 05 // TECHNICAL SPECIFICATION FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-normal tracking-tight text-[#141413] leading-[1.15] mb-4">
              Architecture, Security &amp;{" "}
              <span className="font-serif italic text-[#C84B31]">
                Verification Protocols
              </span>
            </h2>
            <p className="text-sm text-[#6E6A63] leading-relaxed mb-8">
              Direct technical responses for General Counsel, Chief Information
              Security Officers, and Legal Operations engineers evaluating
              deterministic contract verification.
            </p>

            {/* Technical Contact Box */}
            <div className="border border-[#DCD8CE] bg-[#EFECE4] p-6">
              <span className="font-mono text-[10px] uppercase tracking-widest text-[#2D5A3C] block mb-2">
                [✓] INFOSEC &amp; ARCHITECTURE REVIEW
              </span>
              <h3 className="text-base font-medium text-[#141413] mb-2">
                Require a full SOC 2 Type II packet or custom DPA?
              </h3>
              <p className="text-xs text-[#6E6A63] leading-relaxed mb-5">
                Our security engineering team provides complete penetration test
                summaries, enclave topology diagrams, and zero-retention
                attestations.
              </p>
              <a
                href="mailto:security@docusync.ai"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#141413] border-b border-[#141413] pb-0.5 hover:text-[#C84B31] hover:border-[#C84B31] transition-colors"
              >
                <span>Request Security Dossier</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Specification Ledger */}
          <div className="lg:col-span-8 border-t border-[#DCD8CE] divide-y divide-[#DCD8CE]">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.code}
                  className={`transition-colors ${
                    isOpen ? "bg-[#EFECE4]/70" : "bg-transparent"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(index)}
                    className="w-full flex items-start justify-between gap-4 py-6 px-4 sm:px-6 text-left cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-baseline gap-4 pr-4">
                      <span className="font-mono text-xs text-[#C84B31] shrink-0">
                        § {faq.code}
                      </span>
                      <span className="text-base sm:text-lg font-medium text-[#141413]">
                        {faq.question}
                      </span>
                    </div>
                    <span className="font-mono text-lg text-[#141413] shrink-0 leading-none select-none">
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-6 pb-6 pl-12 sm:pl-16 text-sm text-[#6E6A63] leading-relaxed">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
