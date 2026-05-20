import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Network, Lock, MapPin, Infinity as InfinityIcon } from "lucide-react";

const ICONS = [Network, Lock, MapPin, InfinityIcon];

export default function What() {
  const { t } = useLanguage();

  return (
    <section
      id="what"
      data-testid="what-section"
      className="py-28 sm:py-36 border-t border-[rgba(15,34,71,0.06)]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Section meta */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="inline-flex items-center gap-2">
                <span className="w-6 h-px bg-slate-400" />
                <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-slate-500">
                  {t.what.label}
                </span>
              </div>
              <h3 className="mt-6 hidden lg:block font-heading text-[15px] font-semibold text-slate-400">
                01 / Overview
              </h3>
            </div>
          </div>

          {/* Content */}
          <div className="lg:col-span-8">
            <h2
              data-testid="what-headline"
              className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#0a1834] tracking-tight leading-[1.08]"
            >
              {t.what.headline}
            </h2>
            <p
              data-testid="what-body"
              className="mt-8 text-[17px] text-slate-600 leading-[1.65] font-body max-w-[640px]"
            >
              {t.what.body}
            </p>

            {/* Pillars - 4 col bento */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(15,34,71,0.08)] border border-[rgba(15,34,71,0.08)] rounded-[16px] overflow-hidden">
              {t.what.pillars.map((p, idx) => {
                const Icon = ICONS[idx] || Network;
                return (
                  <div
                    key={idx}
                    data-testid={`what-pillar-${idx}`}
                    className="bg-white p-6 lg:p-7 card-precise"
                  >
                    <Icon size={18} strokeWidth={1.6} className="text-emerald-700" />
                    <div className="mt-5 font-heading text-[15px] font-semibold text-[#0a1834] tracking-tight">
                      {p.title}
                    </div>
                    <p className="mt-1.5 text-[13.5px] text-slate-500 leading-[1.55] font-body">
                      {p.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
