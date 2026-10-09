import React from "react";
import { TrendingUp, CheckCircle, Zap, DollarSign, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function Metrics() {
  const stats = [
    {
      value: "80%",
      label: "Reduction in review turnaround",
      detail: "From 6 hours down to 12 minutes per enterprise master agreement.",
      icon: Zap,
      color: "text-indigo-400",
    },
    {
      value: "99.4%",
      label: "Clause extraction accuracy",
      detail: "Benchmarked against AmLaw 100 senior associates with zero hallucinations.",
      icon: CheckCircle,
      color: "text-cyan-400",
    },
    {
      value: "10x",
      label: "Faster compliance sign-offs",
      detail: "Sales deal cycles unblocked without waiting on outside counsel queues.",
      icon: TrendingUp,
      color: "text-emerald-400",
    },
    {
      value: "$420K",
      label: "Average annual legal spend saved",
      detail: "Drastic reduction in routine outside legal redlining fees.",
      icon: DollarSign,
      color: "text-amber-400",
    },
  ];

  const testimonials = [
    {
      quote:
        "DocuSync AI transformed our deal-desk velocity. In the past, 50-page MSAs sat in legal queues for weeks. Now, our commercial team gets playbook-compliant redlines and risk flags within 2 minutes.",
      author: "Sarah Jenkins",
      role: "General Counsel",
      company: "CloudScale Technologies",
    },
    {
      quote:
        "The zero-data-retention guarantee and SOC2 Type II compliance gave our InfoSec team immediate comfort. It's the first legal AI tool that our enterprise risk committee approved without hesitation.",
      author: "David Chen",
      role: "VP of Legal Operations",
      company: "Nexus Global Logistics",
    },
  ];

  return (
    <section className="py-24 bg-[#0B0F19] relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs uppercase font-bold tracking-widest text-cyan-400 mb-3">
            Proven Business Impact
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Accelerating Enterprise Deal Velocity
          </h3>
        </div>

        {/* Big Numbers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="relative rounded-2xl bg-[#0F1524] border border-slate-800/80 p-6 flex flex-col justify-between hover:border-slate-700 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-4xl sm:text-5xl font-extrabold tracking-tight font-mono ${stat.color}`}>
                      {stat.value}
                    </span>
                    <div className="size-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center">
                      <Icon className={`size-4 ${stat.color}`} />
                    </div>
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    {stat.label}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.detail}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <Card
              key={t.author}
              className="bg-slate-900/60 border-slate-800 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden"
            >
              <Quote className="size-8 text-indigo-500/20 mb-4" />
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-800/80">
                <div className="size-10 rounded-full bg-gradient-to-tr from-indigo-500 to-cyan-400 flex items-center justify-center text-white font-bold text-xs">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h5 className="text-sm font-bold text-white">{t.author}</h5>
                  <p className="text-xs text-slate-400">
                    {t.role} • <span className="text-slate-300">{t.company}</span>
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
