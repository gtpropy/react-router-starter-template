import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

const HERO_IMAGE =
  "https://static.prod-images.emergentagent.com/jobs/faed50f3-de58-44c1-a0bf-ffc29dd81bab/images/99b7fb3a52f7291324157bb5f355e303af4600106d6aae28f475be589e870c55.png";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-32 sm:pt-40 pb-20 sm:pb-28 overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 hero-grid-bg pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div
              data-testid="hero-eyebrow"
              className="fade-up inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/70 backdrop-blur"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              <span className="text-xs font-semibold tracking-[0.18em] uppercase text-slate-700">
                {t.hero.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1
              data-testid="hero-headline"
              className="fade-up delay-1 mt-6 font-heading text-4xl sm:text-5xl lg:text-6xl font-medium text-slate-900 leading-[1.05]"
            >
              {t.hero.headline}
            </h1>

            {/* Subheadline */}
            <p
              data-testid="hero-subheadline"
              className="fade-up delay-2 mt-6 text-lg sm:text-xl text-slate-700 max-w-2xl leading-relaxed font-body"
            >
              {t.hero.subheadline}
            </p>

            {/* Paragraph */}
            <p
              data-testid="hero-paragraph"
              className="fade-up delay-3 mt-4 text-base text-slate-500 max-w-2xl leading-relaxed font-body"
            >
              {t.hero.paragraph}
            </p>

            {/* CTAs */}
            <div className="fade-up delay-4 mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#beta"
                data-testid="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-all shadow-sm hover:shadow"
              >
                {t.hero.primaryCta}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </a>
              <a
                href="#clinics"
                data-testid="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-900 text-sm font-semibold border border-slate-200 transition-all"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            {/* Meta */}
            <p
              data-testid="hero-meta"
              className="fade-up delay-5 mt-8 text-xs text-slate-500 font-body inline-flex items-center gap-2"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-slate-400">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              {t.hero.meta}
            </p>
          </div>

          {/* Visual */}
          <div className="lg:col-span-5 fade-up delay-3">
            <div className="relative aspect-square w-full max-w-md mx-auto">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-blue-50/60 to-transparent" aria-hidden="true" />
              <img
                src={HERO_IMAGE}
                alt="Abstract minimalist medical tech visual"
                data-testid="hero-visual"
                className="relative w-full h-full object-contain"
                loading="eager"
              />
              {/* Floating spec card */}
              <div className="absolute -bottom-4 -left-2 sm:left-0 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm hidden sm:flex items-center gap-3 max-w-[240px]">
                <span className="flex w-9 h-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="16" rx="3"/>
                    <path d="M3 10h18M8 4v4M16 4v4"/>
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold">Appointments</div>
                  <div className="text-sm font-semibold text-slate-900">Online + In-clinic</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 sm:right-0 bg-white border border-slate-200 rounded-2xl px-4 py-3 shadow-sm hidden sm:flex items-center gap-3 max-w-[240px]">
                <span className="flex w-9 h-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="3"/>
                    <path d="M9 9h6v6H9zM4 9h2M4 15h2M18 9h2M18 15h2M9 4v2M15 4v2M9 18v2M15 18v2"/>
                  </svg>
                </span>
                <div className="text-left">
                  <div className="text-[11px] uppercase tracking-[0.16em] text-slate-400 font-semibold">Payments</div>
                  <div className="text-sm font-semibold text-slate-900">NepalPay · QR</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
