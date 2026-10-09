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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 shadow-2xl shadow-indigo-950/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center size-10 rounded-xl bg-gradient-to-br from-indigo-500 via-indigo-600 to-cyan-500 p-[1px] shadow-lg shadow-indigo-500/25 group-hover:shadow-indigo-500/40 transition-all">
              <div className="size-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                <FileText className="size-5 text-indigo-400 group-hover:text-indigo-300 transition-colors" />
                <span className="absolute -top-1 -right-1 flex size-3.5 items-center justify-center rounded-full bg-cyan-400">
                  <Sparkles className="size-2 text-[#0B0F19]" />
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                DocuSync <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400 font-extrabold">AI</span>
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider text-slate-400 -mt-1">
                Legal Intelligence
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 px-4 py-1.5 rounded-full backdrop-blur-sm">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded-full transition-colors hover:bg-slate-800/50"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-slate-800/60 text-xs font-medium h-9 px-3.5"
            >
              Sign In
            </Button>
            <a
              href="#trial"
              className="relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-cyan-500 hover:from-indigo-500 hover:to-cyan-400 text-white font-semibold text-xs h-9 px-4 rounded-lg shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 transition-all border border-indigo-400/30 inline-flex items-center gap-1.5"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="size-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
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
