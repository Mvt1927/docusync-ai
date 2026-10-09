import React from "react";
import Link from "next/link";
import { FileText, Sparkles, ShieldCheck, CheckCircle2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-[#070A11] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Brand Info */}
          <div className="col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 group">
              <div className="flex items-center justify-center size-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 p-[1px]">
                <div className="size-full bg-[#0B0F19] rounded-[7px] flex items-center justify-center">
                  <FileText className="size-4 text-indigo-400" />
                </div>
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                DocuSync <span className="text-cyan-400 font-extrabold">AI</span>
              </span>
            </Link>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm mb-4">
              Enterprise contract intelligence platform powered by long-context LLMs. 
              Accelerate contract review, detect hidden liabilities, and enforce playbook compliance with zero hallucination.
            </p>
            <div className="flex items-center gap-3">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/50 text-[11px] text-emerald-400 font-medium">
                <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
                Systems Operational (99.99%)
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase mb-3.5">
              Product
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Multi-Doc Reasoning
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Playbook Compliance
                </a>
              </li>
              <li>
                <a href="#sandbox" className="hover:text-white transition-colors">
                  Interactive Sandbox
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Automated Redlines
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing Plans
                </a>
              </li>
            </ul>
          </div>

          {/* Security & Trust */}
          <div>
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase mb-3.5">
              Trust & Security
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#security" className="hover:text-white transition-colors flex items-center gap-1">
                  <ShieldCheck className="size-3 text-cyan-400" />
                  SOC 2 Type II
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Zero Data Retention SLA
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  GDPR & HIPAA Compliance
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  256-bit AES Encryption
                </a>
              </li>
              <li>
                <a href="#security" className="hover:text-white transition-colors">
                  Security Whitepaper
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-slate-200 font-semibold text-xs tracking-wider uppercase mb-3.5">
              Legal & Policies
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Data Processing Agreement
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Subprocessor Registry
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cookie Preferences
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-[11px]">
            &copy; 2026 DocuSync AI Inc. All rights reserved. Enterprise Contract Intelligence.
          </p>
          <div className="flex items-center gap-4 text-slate-400">
            <a href="#" className="hover:text-white transition-colors" aria-label="X (formerly Twitter)">
              <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
              <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
            <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
              <svg className="size-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
