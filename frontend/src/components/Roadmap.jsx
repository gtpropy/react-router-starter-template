import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Roadmap() {
  const { t } = useLanguage();
  const steps = t.roadmap.steps;

  return (
    <section
      id="roadmap"
      data-testid="roadmap-section"
      className="py-28 sm:py-36 border-t border-[rgba(15,34,71,0.06)]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-slate-400" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-slate-500">
                {t.roadmap.label}
              </span>
            </div>
            <div className="mt-3 font-heading text-[13px] font-semibold text-slate-400">
              06 / Roadmap
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#0a1834] tracking-tight leading-[1.08]">
              {t.roadmap.headline}
            </h2>
            <p className="mt-5 text-[16px] text-slate-600 leading-[1.6] font-body max-w-[620px]">
              {t.roadmap.sub}
            </p>
          </div>
        </div>

        {/* Stepper */}
        <div className="mt-16 relative">
          {/* horizontal connector line */}
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-0 right-0 top-[26px] h-px bg-[rgba(15,34,71,0.1)]"
          />
          <div
            aria-hidden="true"
            className="hidden lg:block absolute left-0 top-[26px] h-px bg-emerald-600"
            style={{ width: "12.5%" }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, idx) => {
              const active = idx === 0;
              return (
                <div
                  key={idx}
                  data-testid={`roadmap-step-${idx}`}
                  className="relative"
                >
                  {/* Node */}
                  <div className="flex items-center gap-3 lg:block">
                    <span
                      className={`relative inline-flex items-center justify-center w-[52px] h-[52px] rounded-full border ${
                        active
                          ? "bg-emerald-600 border-emerald-600 text-white shadow-[0_6px_18px_-8px_rgba(4,120,87,0.6)]"
                          : "bg-white border-[rgba(15,34,71,0.12)] text-[#0a1834]"
                      }`}
                    >
                      <span className="font-heading text-[15px] font-semibold tracking-tight">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                      {active && (
                        <span className="absolute -top-1 -right-1 inline-flex w-3 h-3 rounded-full bg-emerald-400 ring-2 ring-white soft-pulse" />
                      )}
                    </span>
                    <div className="lg:hidden font-heading text-[15px] font-semibold text-[#0a1834]">
                      {step.title}
                    </div>
                  </div>

                  <div className="mt-5 lg:mt-7">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em] font-semibold text-slate-400">
                        {step.phase}
                      </span>
                      <span
                        className={`inline-flex items-center px-1.5 py-0.5 rounded-full text-[10px] font-semibold ${
                          active
                            ? "bg-emerald-50 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {step.status}
                      </span>
                    </div>
                    <div className="hidden lg:block mt-2 font-heading text-[17px] font-semibold text-[#0a1834] tracking-tight">
                      {step.title}
                    </div>
                    <p className="mt-3 text-[13.5px] text-slate-500 leading-[1.6] font-body max-w-[260px]">
                      {step.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
