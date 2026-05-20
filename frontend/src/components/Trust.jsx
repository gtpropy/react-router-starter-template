import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Lock, KeyRound, MapPin, FileBadge } from "lucide-react";

export default function Trust() {
  const { t } = useLanguage();
  const icons = [Lock, KeyRound, MapPin, FileBadge];

  return (
    <section
      id="trust"
      data-testid="trust-section"
      className="relative py-28 sm:py-36 border-t border-[rgba(15,34,71,0.06)] bg-[#fafbfc]"
    >
      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-slate-400" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-slate-500">
                {t.trust.label}
              </span>
            </div>
            <div className="mt-3 font-heading text-[13px] font-semibold text-slate-400">
              05 / Security
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2
              data-testid="trust-headline"
              className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#0a1834] tracking-tight leading-[1.08]"
            >
              {t.trust.headline}
            </h2>
            <p className="mt-5 text-[16px] text-slate-600 leading-[1.6] font-body max-w-[620px]">
              {t.trust.sub}
            </p>
          </div>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(15,34,71,0.08)] border border-[rgba(15,34,71,0.08)] rounded-[18px] overflow-hidden">
          {t.trust.stats.map((s, idx) => (
            <div
              key={idx}
              data-testid={`trust-stat-${idx}`}
              className="bg-white p-7 lg:p-8"
            >
              <div className="font-heading text-[28px] lg:text-[32px] font-semibold text-[#0a1834] tracking-tight">
                {s.value}
              </div>
              <div className="mt-1.5 text-[12px] text-slate-500 font-medium uppercase tracking-[0.14em]">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Detailed cards */}
        <div className="mt-8 grid md:grid-cols-2 gap-px bg-[rgba(15,34,71,0.08)] border border-[rgba(15,34,71,0.08)] rounded-[18px] overflow-hidden">
          {t.trust.points.map((point, idx) => {
            const Icon = icons[idx] || Lock;
            return (
              <div
                key={idx}
                data-testid={`trust-point-${idx}`}
                className="bg-white p-8 lg:p-10 card-precise"
              >
                <div className="flex items-start justify-between">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-[10px] bg-[#0a1834] text-white">
                    <Icon strokeWidth={1.6} size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
                <div className="mt-7 font-heading text-[17px] font-semibold text-[#0a1834] tracking-tight">
                  {point.title}
                </div>
                <p className="mt-2 text-[14px] text-slate-500 leading-[1.65] font-body max-w-[440px]">
                  {point.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
