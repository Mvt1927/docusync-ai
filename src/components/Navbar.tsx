"use client";

import React, { useState } from "react";
import Link from "next/link";

const navLinks = [
  { index: "01", name: "Features", href: "#features" },
  { index: "02", name: "How It Works", href: "#how-it-works" },
  { index: "03", name: "Sandbox", href: "#sandbox" },
  { index: "04", name: "Pricing", href: "#pricing" },
  { index: "05", name: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F6F4EE] border-b border-[#DCD8CE] text-[#141413]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-12 items-stretch min-h-[64px]">
        {/* Left Cell: Brand Mark & Protocol Version */}
        <div className="col-span-1 lg:col-span-3 flex items-center justify-between px-4 sm:px-6 border-r border-[#DCD8CE]">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="font-mono text-xs px-2 py-1 bg-[#141413] text-[#F6F4EE] group-hover:bg-[#C84B31] transition-colors">
              [§]
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium tracking-tight text-[#141413]">
                DOCUSYNC
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-[#6E6A63]">
                PROTOCOL v4.2
              </span>
            </div>
          </Link>
        </div>

        {/* Center Cell: Indexed Architectural Navigation */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:col-span-6 lg:flex items-stretch border-r border-[#DCD8CE]"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex-1 flex items-center justify-center gap-2 px-3 border-r last:border-r-0 border-[#DCD8CE] text-xs font-medium text-[#141413] hover:bg-[#EFECE4] hover:text-[#C84B31] transition-colors"
            >
              <span className="font-mono text-[10px] text-[#6E6A63]">
                {link.index}
              </span>
              <span>{link.name}</span>
            </a>
          ))}
        </nav>

        {/* Right Cell: Command Shortcut, Sign In & Trial CTA */}
        <div className="col-span-1 lg:col-span-3 flex items-center justify-end gap-3 px-4 sm:px-6">
          <div className="hidden sm:flex items-center gap-3">
            <kbd className="hidden xl:inline-flex items-center px-2 py-1 text-[11px] font-mono text-[#6E6A63] bg-[#EFECE4] border border-[#DCD8CE]">
              ⌘K
            </kbd>
            <a
              href="#sandbox"
              className="text-xs font-medium text-[#141413] hover:text-[#C84B31] px-2 py-1.5 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#trial"
              className="bg-[#141413] text-[#F6F4EE] hover:bg-[#C84B31] text-xs font-medium px-4 py-2.5 transition-colors inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Start Free Trial →</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            className="lg:hidden font-mono text-xs px-3 py-2 border border-[#DCD8CE] bg-[#EFECE4] text-[#141413] hover:border-[#141413] transition-colors"
          >
            {mobileMenuOpen ? "[CLOSE]" : "[MENU]"}
          </button>
        </div>
      </div>

      {/* Mobile Architectural Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#F6F4EE] border-t border-[#DCD8CE]">
          <div className="divide-y divide-[#DCD8CE]">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between px-6 py-3.5 text-xs font-medium text-[#141413] hover:bg-[#EFECE4] hover:text-[#C84B31] transition-colors"
              >
                <span className="flex items-center gap-3">
                  <span className="font-mono text-[11px] text-[#C84B31]">
                    {link.index}
                  </span>
                  <span>{link.name}</span>
                </span>
                <span className="font-mono text-xs text-[#6E6A63]">→</span>
              </a>
            ))}
          </div>
          <div className="p-4 bg-[#EFECE4] border-t border-[#DCD8CE] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
            <div className="flex items-center justify-between gap-2">
              <span className="font-mono text-[11px] text-[#6E6A63]">
                QUICK AUDIT COMMAND
              </span>
              <kbd className="px-2 py-0.5 text-[11px] font-mono text-[#141413] bg-[#F6F4EE] border border-[#DCD8CE]">
                ⌘K
              </kbd>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#sandbox"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 px-4 border border-[#141413] text-xs font-medium text-[#141413] bg-[#F6F4EE]"
              >
                Sign In
              </a>
              <a
                href="#trial"
                onClick={() => setMobileMenuOpen(false)}
                className="flex-1 text-center py-2.5 px-4 bg-[#141413] text-[#F6F4EE] hover:bg-[#C84B31] text-xs font-medium transition-colors"
              >
                Start Free Trial →
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
