import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function What() {
  const { t } = useLanguage();
  return (
    <section
      id="what"
      data-testid="what-section"
      className="py-24 sm:py-32 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <div className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600">
                {t.what.label}
              </div>
              <div className="mt-6 hidden lg:block">
                <div className="h-px w-12 bg-slate-300" />
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2
              data-testid="what-headline"
              className="font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.1]"
            >
              {t.what.headline}
            </h2>
            <p
              data-testid="what-body"
              className="mt-8 text-lg text-slate-600 leading-relaxed font-body max-w-3xl"
            >
              {t.what.body}
            </p>

            {/* Pill grid - capability anchors */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-2">
              {[
                "Appointments",
                "EMR",
                "Pharmacy",
                "Labs",
                "Billing",
                "Video Consults",
                "QR Payments",
                "Analytics",
                "Marketplace",
              ].map((cap) => (
                <span
                  key={cap}
                  className="text-xs sm:text-sm px-3 py-2 rounded-full bg-slate-50 border border-slate-200 text-slate-700 text-center font-medium"
                >
                  {cap}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
