import React from "react";
import {
  Layers,
  BookCheck,
  FileSpreadsheet,
  ShieldCheck,
  GitCompare,
  Zap,
  Lock,
  Workflow,
  Sparkles,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Features() {
  const features = [
    {
      title: "Multi-Document Reasoning",
      badge: "1M+ Tokens",
      description:
        "Seamlessly cross-reference Master Services Agreements with dozens of SOWs, amendments, and DPAs across massive context windows to catch conflicting terms.",
      icon: Layers,
      accent: "from-indigo-500/20 to-indigo-500/0",
      iconColor: "text-indigo-400",
      featured: true,
    },
    {
      title: "Playbook Compliance Engine",
      badge: "Custom Rules",
      description:
        "Ingest your company's standard fallback positions and automatically audit incoming counterparty paper against your internal legal guidelines.",
      icon: BookCheck,
      accent: "from-cyan-500/20 to-cyan-500/0",
      iconColor: "text-cyan-400",
      featured: true,
    },
    {
      title: "Structured Risk Extraction",
      badge: "JSON / CSV / PDF",
      description:
        "Extract key contract metadata, uncapped liability warnings, payment schedules, and governing law into clean, structured datasets for your ERP.",
      icon: FileSpreadsheet,
      accent: "from-emerald-500/20 to-emerald-500/0",
      iconColor: "text-emerald-400",
      featured: false,
    },
    {
      title: "Enterprise-Grade Security",
      badge: "Zero-Data Retention",
      description:
        "SOC2 Type II certified infrastructure with strict zero data retention. Your confidential contracts are never stored or used to train public or foundational models.",
      icon: ShieldCheck,
      accent: "from-purple-500/20 to-purple-500/0",
      iconColor: "text-purple-400",
      featured: false,
    },
    {
      title: "Automated AI Redlining",
      badge: "Track Changes",
      description:
        "Generate instant negotiation counter-proposals with defensible track changes backed by historical deal precedents and industry benchmarks.",
      icon: GitCompare,
      accent: "from-blue-500/20 to-blue-500/0",
      iconColor: "text-blue-400",
      featured: false,
    },
    {
      title: "Bi-Directional CLM Integrations",
      badge: "One-Click Sync",
      description:
        "Native connectors for Salesforce, Ironclad, DocuSign, Slack, and Google Drive to keep legal review seamless within your existing deal workflows.",
      icon: Workflow,
      accent: "from-pink-500/20 to-pink-500/0",
      iconColor: "text-pink-400",
      featured: false,
    },
  ];

  return (
    <section id="features" className="py-24 bg-[#090D16] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge
            variant="outline"
            className="border-indigo-500/30 bg-indigo-950/40 text-indigo-300 text-xs px-3 py-1 mb-4"
          >
            Core Capabilities
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Built for Modern Enterprise Legal Teams
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Replace painful clause-by-clause manual reviews with deterministic, playbook-driven intelligence that guarantees zero hallucinations.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                id={feature.title.includes("Security") ? "security" : undefined}
                className="group relative bg-[#0D121F]/90 border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-950/20 flex flex-col justify-between overflow-hidden"
              >
                {/* Subtle card glow overlay on hover */}
                <div
                  className={`absolute -top-12 -right-12 size-36 rounded-full bg-gradient-to-br ${feature.accent} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`}
                />

                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-11 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className={`size-5 ${feature.iconColor}`} />
                    </div>
                    <Badge
                      variant="secondary"
                      className="text-[10px] bg-slate-900 text-slate-300 border border-slate-800"
                    >
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg font-bold text-white group-hover:text-indigo-200 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
