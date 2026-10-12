"use client";

import React, { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="trial"
      className="py-24 bg-[#141413] text-[#F6F4EE] border-t border-[#DCD8CE]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#DCD8CE]/25 bg-[#181715]">
          {/* Top Ledger Bar */}
          <div className="border-b border-[#DCD8CE]/20 px-6 sm:px-10 py-3.5 flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#6E6A63]">
            <span>
              SECTION 06 // EDITORIAL DISPATCH &amp; SANDBOX PROVISIONING
            </span>
            <span className="text-[#2D5A3C]">
              [✓] SLA: ZERO DATA RETENTION // ENCLAVE READY
            </span>
          </div>

          {/* 12-Column Asymmetric Dispatch Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#DCD8CE]/20">
            {/* Left Column: Value Proposition */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-[#F6F4EE] leading-[1.1] mb-6">
                  Accelerate Commercial Contract Audits by{" "}
                  <span className="font-serif italic text-[#C84B31]">
                    10.4x Today
                  </span>
                </h2>
                <p className="text-sm sm:text-base text-[#6E6A63] leading-relaxed max-w-2xl mb-10">
                  Deploy a private, deterministic contract audit workspace in
                  under two minutes. Upload your corporate playbook and
                  benchmark our AST citation engine against your most complex
                  counterparty paper.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#DCD8CE]/20 font-mono text-xs text-[#F6F4EE]">
                <div>[✓] 14-Day Full Enclave Access</div>
                <div>[✓] No Credit Card Required</div>
                <div>§ Zero-Retention SLA Active</div>
              </div>
            </div>

            {/* Right Column: Trial Dispatch Form */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 flex flex-col justify-between bg-[#141413]">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-[#C84B31] block mb-2">
                  SANDBOX CREDENTIAL DISPATCH
                </span>
                <h3 className="text-xl font-normal text-[#F6F4EE] mb-6">
                  Provision Your Dedicated Trial Workspace
                </h3>

                {submitted ? (
                  <div className="border border-[#2D5A3C] bg-[#181715] p-6">
                    <div className="font-mono text-xs uppercase tracking-wider text-[#2D5A3C] mb-2">
                      [✓] DISPATCH CONFIRMED // ENCLAVE INITIALIZED
                    </div>
                    <p className="text-sm text-[#F6F4EE] leading-relaxed mb-4">
                      Sandbox credentials and single-tenant access keys have
                      been dispatched to{" "}
                      <span className="font-mono underline">{email}</span>.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setSubmitted(false);
                        setEmail("");
                      }}
                      className="font-mono text-xs uppercase tracking-wider text-[#C84B31] hover:underline cursor-pointer"
                    >
                      → Register Another Corporate Address
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="corporate-email"
                        className="block font-mono text-[11px] uppercase tracking-wider text-[#6E6A63] mb-2"
                      >
                        Corporate Counsel Email Address
                      </label>
                      <input
                        id="corporate-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="counsel@enterprise-legal.com"
                        className="w-full h-12 px-4 bg-[#181715] border border-[#DCD8CE]/35 text-[#F6F4EE] placeholder:text-[#6E6A63] font-mono text-xs sm:text-sm focus:outline-none focus:border-[#C84B31] transition-colors"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full h-12 bg-[#C84B31] hover:bg-[#F6F4EE] text-[#F6F4EE] hover:text-[#141413] font-mono text-xs uppercase tracking-[0.15em] transition-colors flex items-center justify-between px-5 cursor-pointer"
                    >
                      <span>Start 14-Day Free Trial</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>

              <p className="font-mono text-[11px] text-[#6E6A63] pt-6 border-t border-[#DCD8CE]/15 mt-8">
                ENCRYPTED TLS 1.3 // SOC 2 TYPE II ATTESTED // NO MODEL TRAINING
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
