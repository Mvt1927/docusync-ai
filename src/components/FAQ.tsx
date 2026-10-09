"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "How does DocuSync AI guarantee zero hallucinations?",
      answer:
        "DocuSync AI relies on deterministic grounded extraction rather than generative guessing. Every single flagged risk, liability score, and suggested redline is mathematically tied to exact verbatim line and page numbers in your source contract. If an assertion cannot be cited with 100% confidence, the engine marks it as 'Uncertain — Human Review Required' instead of guessing.",
    },
    {
      question: "Is our company contract data used to train AI models?",
      answer:
        "Never. Under our enterprise Service Level Agreement (SLA), customer data is protected by strict Zero Data Retention (ZDR). Your documents, playbooks, and redlines are processed in transient, isolated memory environments and never stored, logged, or utilized to train proprietary, open-source, or third-party foundational models.",
    },
    {
      question: "How does playbook customization work for our company guidelines?",
      answer:
        "You can upload your existing standard contract templates, negotiation fallback matrices, or standard playbook guidelines (PDF, DOCX, or markdown). DocuSync AI parses your acceptable risk boundaries (e.g. 'Never accept uncapped indemnity', 'Payment terms must be Net 45 or shorter') and grades counterparty contracts directly against those standards.",
    },
    {
      question: "Can DocuSync AI integrate with our existing CLM (Ironclad, Agiloft, etc.)?",
      answer:
        "Yes. We support pre-built bi-directional connectors for Ironclad, Salesforce, DocuSign CLM, Agiloft, and Slack. You can configure DocuSync AI to automatically trigger upon receiving new counterparty paper in your CLM, run the audit, and post redlines directly into the contract record.",
    },
    {
      question: "What file formats and length limits are supported?",
      answer:
        "We support native PDF, scanned PDFs (with OCR), Microsoft Word (.docx), and Rich Text (.rtf). Because our models utilize 1M+ token context windows, there are virtually no page limits—we routinely parse 100+ page government solicitations, cross-border master agreements, and complex syndicated credit agreements.",
    },
    {
      question: "What certifications and security compliance standards do you maintain?",
      answer:
        "DocuSync AI is SOC 2 Type II certified, ISO 27001 compliant, and fully aligned with GDPR and HIPAA guidelines. All document transmissions utilize TLS 1.3 in transit and AES-256 at rest, with optional dedicated VPC single-tenant hosting for enterprise tiers.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#0B0F19] relative border-t border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge
            variant="outline"
            className="border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-xs px-3 py-1 mb-3"
          >
            Got Questions?
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Everything legal and security teams need to know about DocuSync AI.
          </p>
        </div>

        {/* Custom Accordion for Dark Mode Elegance */}
        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-xl border transition-all ${
                  isOpen
                    ? "bg-[#0E1524] border-indigo-500/50 shadow-lg shadow-indigo-950/20"
                    : "bg-[#090D16] border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`size-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-cyan-400" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Security Reassurance Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-cyan-950/60 border border-cyan-800/50 flex items-center justify-center shrink-0">
              <ShieldCheck className="size-5 text-cyan-400" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Have specific InfoSec or compliance requirements?
              </h4>
              <p className="text-xs text-slate-400">
                Our legal engineering team will provide our complete SOC 2 report and architecture review.
              </p>
            </div>
          </div>
          <a
            href="mailto:security@docusync.ai"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 underline underline-offset-4 shrink-0"
          >
            Request Security Packet →
          </a>
        </div>
      </div>
    </section>
  );
}
