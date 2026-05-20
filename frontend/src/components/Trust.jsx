import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { Mountain, ShieldCheck, FileBadge } from "lucide-react";

const NEPAL_BG =
  "https://images.unsplash.com/photo-1597228887398-6aa9bcadf134?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDQ2NDF8MHwxfHNlYXJjaHwxfHxrYXRobWFuZHUlMjBuZXBhbCUyMGxhbmRzY2FwZXxlbnwwfHx8fDE3NzkyODM2MDJ8MA&ixlib=rb-4.1.0&q=85";

export default function Trust() {
  const { t } = useLanguage();
  const icons = [Mountain, ShieldCheck, FileBadge];

  return (
    <section
      id="trust"
      data-testid="trust-section"
      className="relative py-24 sm:py-32 border-t border-slate-100 overflow-hidden"
    >
      {/* Subtle background imagery */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06] grayscale"
        style={{
          backgroundImage: `url(${NEPAL_BG})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600">
            {t.trust.label}
          </div>
          <h2
            data-testid="trust-headline"
            className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.1]"
          >
            {t.trust.headline}
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6 lg:gap-8">
          {t.trust.points.map((point, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={idx}
                data-testid={`trust-point-${idx}`}
                className="bg-white border border-slate-200 rounded-2xl p-8 card-hover"
              >
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-slate-900 text-white">
                  <Icon strokeWidth={1.6} size={20} />
                </span>
                <div className="mt-6 text-[15px] font-semibold text-slate-900 font-heading tracking-tight">
                  {point.title}
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-body">
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
