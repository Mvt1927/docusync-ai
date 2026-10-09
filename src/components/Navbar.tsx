"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Sparkles, Menu, X, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Sandbox", href: "#sandbox" },
    { name: "Security", href: "#security" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
      <div
        className={`rounded-full transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          scrolled
            ? "bg-[#090D17]/90 backdrop-blur-2xl border border-white/[0.1] shadow-[0_12px_40px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] py-2 px-4 sm:px-5"
            : "bg-[#0B0F19]/70 backdrop-blur-xl border border-white/[0.06] shadow-[0_8px_30px_rgba(0,0,0,0.4),inset_0_1px_1px_rgba(255,255,255,0.08)] py-2 px-4 sm:px-5"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center size-9 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all">
              <div className="size-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                <FileText className="size-4 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="absolute -top-1 -right-1 flex size-3 items-center justify-center rounded-full bg-cyan-400">
                  <Sparkles className="size-1.5 text-[#0B0F19]" />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold tracking-tight text-white flex items-center gap-1">
                DocuSync <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-extrabold">AI</span>
              </span>
              <span className="text-[9px] uppercase font-semibold tracking-wider text-slate-400 -mt-1 font-mono">
                Legal Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-0.5 bg-white/[0.03] border border-white/[0.05] px-3 py-1 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1 rounded-full transition-all duration-300 hover:bg-white/[0.06]"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/[0.06] text-xs font-medium h-8 px-3 rounded-full"
            >
              Sign In
            </Button>
            <a
              href="#trial"
              className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 via-indigo-500 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs h-8 pl-3.5 pr-1.5 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 border border-indigo-400/30 transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <span>Start Free Trial</span>
              <span className="size-5 rounded-full bg-black/25 flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                <ArrowRight className="size-3" />
              </span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white size-8 rounded-full"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0F19]/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 mt-3">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-indigo-400 px-3 py-2 rounded-lg hover:bg-slate-800/40"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800/80 flex flex-col gap-2.5">
            <Button
              variant="outline"
              className="w-full justify-center border-slate-700 text-slate-200 text-xs h-9"
            >
              Sign In
            </Button>
            <a
              href="#trial"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full justify-center bg-gradient-to-r from-indigo-600 to-cyan-500 text-white text-xs h-9 font-medium rounded-lg inline-flex items-center"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
