import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { CalendarCheck, ShieldCheck, Activity, Pill, Receipt } from "lucide-react";

/* Bespoke clinic dashboard mockup — pure CSS/SVG.
   This replaces stock 3D imagery and feels enterprise-grade. */
function DashboardMockup() {
  return (
    <div className="relative w-full max-w-[560px] mx-auto select-none">
      {/* Ambient blur halo behind */}
      <div className="absolute -inset-8 rounded-[40px] bg-[radial-gradient(60%_60%_at_50%_30%,rgba(4,120,87,0.08),transparent_60%),radial-gradient(60%_60%_at_70%_70%,rgba(10,24,52,0.06),transparent_60%)] pointer-events-none" />

      {/* Main dashboard glass card */}
      <div className="relative glass-card rounded-[20px] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[rgba(15,34,71,0.06)] bg-white/60">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          </div>
          <div className="text-[10px] font-mono text-slate-400 tracking-[0.18em] uppercase">
            sajilohealth.np / dashboard
          </div>
          <div className="flex items-center gap-1.5">
            <span className="status-dot" />
            <span className="text-[10px] font-medium text-slate-500">Live</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Clinic Overview
              </div>
              <div className="mt-1 font-heading text-[15px] font-semibold text-[#0a1834] tracking-tight">
                Dhulikhel Family Clinic
              </div>
            </div>
            <div className="text-right">
              <div className="text-[10px] uppercase tracking-[0.18em] text-slate-400 font-semibold">Today</div>
              <div className="mt-1 text-[13px] font-medium text-[#0a1834]">Mon · Asar 32</div>
            </div>
          </div>

          {/* KPI row */}
          <div className="mt-4 grid grid-cols-3 gap-2.5">
            {[
              { label: "Appointments", value: "27", delta: "+4", icon: CalendarCheck },
              { label: "Pending labs", value: "9", delta: "-2", icon: Activity },
              { label: "Revenue", value: "रू 84.2k", delta: "+12%", icon: Receipt },
            ].map((k) => {
              const Icon = k.icon;
              return (
                <div
                  key={k.label}
                  className="rounded-xl border border-[rgba(15,34,71,0.07)] bg-white px-3 py-3"
                >
                  <div className="flex items-center justify-between">
                    <Icon size={13} strokeWidth={1.7} className="text-slate-400" />
                    <span className="text-[9px] font-semibold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                      {k.delta}
                    </span>
                  </div>
                  <div className="mt-2 font-heading text-[18px] font-semibold text-[#0a1834] tracking-tight">
                    {k.value}
                  </div>
                  <div className="mt-0.5 text-[10px] text-slate-500">{k.label}</div>
                </div>
              );
            })}
          </div>

          {/* Chart */}
          <div className="mt-4 rounded-xl border border-[rgba(15,34,71,0.07)] bg-white px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-[11px] font-semibold text-[#0a1834]">Patient Visits · 14d</div>
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1 text-[10px] text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-[#0a1834]" /> In-clinic
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-slate-500">
                  <span className="w-2 h-2 rounded-full bg-[#10b981]" /> Remote
                </span>
              </div>
            </div>
            <svg viewBox="0 0 320 80" className="mt-2 w-full h-[88px]" aria-hidden="true">
              <defs>
                <linearGradient id="navyFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0a1834" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0a1834" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="emFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#10b981" stopOpacity="0.22" />
                  <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                </linearGradient>
              </defs>
              {/* gridlines */}
              {[0, 20, 40, 60].map((y) => (
                <line key={y} x1="0" x2="320" y1={y} y2={y} stroke="rgba(15,34,71,0.05)" strokeDasharray="3 4" />
              ))}
              <path
                d="M0,55 L24,48 L48,52 L72,40 L96,44 L120,30 L144,36 L168,22 L192,28 L216,18 L240,24 L264,14 L288,20 L320,10 L320,80 L0,80 Z"
                fill="url(#navyFill)"
              />
              <path
                d="M0,55 L24,48 L48,52 L72,40 L96,44 L120,30 L144,36 L168,22 L192,28 L216,18 L240,24 L264,14 L288,20 L320,10"
                className="spark-line"
                stroke="#0a1834"
                strokeWidth="1.8"
              />
              <path
                d="M0,65 L24,60 L48,62 L72,55 L96,58 L120,48 L144,52 L168,42 L192,46 L216,38 L240,42 L264,34 L288,38 L320,32 L320,80 L0,80 Z"
                fill="url(#emFill)"
              />
              <path
                d="M0,65 L24,60 L48,62 L72,55 L96,58 L120,48 L144,52 L168,42 L192,46 L216,38 L240,42 L264,34 L288,38 L320,32"
                className="spark-line"
                stroke="#10b981"
                strokeWidth="1.6"
              />
            </svg>
          </div>

          {/* Patient queue */}
          <div className="mt-3 rounded-xl border border-[rgba(15,34,71,0.07)] bg-white">
            <div className="px-4 py-2.5 border-b border-[rgba(15,34,71,0.05)] flex items-center justify-between">
              <div className="text-[11px] font-semibold text-[#0a1834]">Next in queue</div>
              <span className="text-[10px] font-mono text-slate-400">3 waiting</span>
            </div>
            {[
              { n: "Anita Shrestha", r: "Cardiology · 10:40", t: "Confirmed", c: "emerald" },
              { n: "Bibek Karki", r: "Follow-up · 11:00", t: "Online", c: "slate" },
            ].map((p) => (
              <div
                key={p.n}
                className="flex items-center justify-between px-4 py-2.5 border-b last:border-b-0 border-[rgba(15,34,71,0.05)]"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-7 h-7 rounded-full bg-slate-100 text-[10px] font-semibold text-[#0a1834] inline-flex items-center justify-center">
                    {p.n.split(" ").map((s) => s[0]).join("")}
                  </span>
                  <div>
                    <div className="text-[12px] font-semibold text-[#0a1834] tracking-tight">{p.n}</div>
                    <div className="text-[10px] text-slate-500">{p.r}</div>
                  </div>
                </div>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${
                    p.c === "emerald" ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {p.t}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating right card — Payments */}
      <div className="hidden md:flex absolute -right-6 top-24 glass-card rounded-2xl px-4 py-3 items-center gap-3 w-[220px]">
        <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-[#0a1834] text-white">
          <Receipt size={16} strokeWidth={1.7} />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">Payment</div>
          <div className="text-[12px] font-semibold text-[#0a1834]">रू 1,250 · QR</div>
          <div className="text-[10px] text-emerald-700 font-medium mt-0.5 inline-flex items-center gap-1">
            <span className="w-1 h-1 rounded-full bg-emerald-600" /> Settled · NepalPay
          </div>
        </div>
      </div>

      {/* Floating left card — Prescription */}
      <div className="hidden md:flex absolute -left-8 bottom-20 glass-card rounded-2xl px-4 py-3 items-center gap-3 w-[220px]">
        <span className="inline-flex w-9 h-9 items-center justify-center rounded-lg bg-emerald-600 text-white">
          <Pill size={16} strokeWidth={1.7} />
        </span>
        <div>
          <div className="text-[10px] uppercase tracking-[0.16em] text-slate-400 font-semibold">Prescription</div>
          <div className="text-[12px] font-semibold text-[#0a1834]">Amoxicillin · 500mg</div>
          <div className="text-[10px] text-slate-500 font-medium mt-0.5">Sent to pharmacy · 09:42</div>
        </div>
      </div>

      {/* Trust micro-row beneath */}
      <div className="hidden md:flex absolute -bottom-7 left-1/2 -translate-x-1/2 items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[rgba(15,34,71,0.08)] shadow-sm">
        <ShieldCheck size={13} strokeWidth={1.8} className="text-emerald-700" />
        <span className="text-[10.5px] font-semibold text-slate-600 tracking-wide">
          AES-256 · TLS 1.2+ · RBAC
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="top"
      data-testid="hero-section"
      className="relative pt-36 sm:pt-44 pb-24 sm:pb-32 overflow-hidden"
    >
      <div className="absolute inset-0 precision-grid pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 hero-ambient pointer-events-none" aria-hidden="true" />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Copy column */}
          <div className="lg:col-span-7">
            <div
              data-testid="hero-eyebrow"
              className="fade-up inline-flex items-center gap-2 pl-1.5 pr-3.5 py-1.5 rounded-full border border-[rgba(15,34,71,0.1)] bg-white/70 backdrop-blur"
            >
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-[#0a1834] text-white">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.534-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.466-7 10-7 10" />
                </svg>
              </span>
              <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0a1834]">
                {t.hero.eyebrow}
              </span>
            </div>

            <h1
              data-testid="hero-headline"
              className="fade-up delay-1 mt-7 font-heading text-[42px] sm:text-[56px] lg:text-[64px] font-medium text-[#0a1834] leading-[1.02] tracking-tight"
            >
              {t.hero.headline}
            </h1>

            <p
              data-testid="hero-subheadline"
              className="fade-up delay-2 mt-7 text-[17px] sm:text-[19px] text-slate-700 max-w-[600px] leading-[1.55] font-body"
            >
              {t.hero.subheadline}
            </p>

            <p
              data-testid="hero-paragraph"
              className="fade-up delay-3 mt-4 text-[15px] text-slate-500 max-w-[560px] leading-[1.6] font-body"
            >
              {t.hero.paragraph}
            </p>

            <div className="fade-up delay-4 mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href="#beta"
                data-testid="hero-primary-cta"
                className="group inline-flex items-center justify-center gap-2 pl-6 pr-3.5 py-3.5 rounded-full bg-[#047857] hover:bg-[#065f46] text-white text-[14px] font-semibold transition-all shadow-[0_8px_24px_-12px_rgba(4,120,87,0.6)]"
              >
                {t.hero.primaryCta}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:translate-x-0.5 transition-transform">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"/>
                  </svg>
                </span>
              </a>
              <a
                href="#clinics"
                data-testid="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-[#0a1834] text-[14px] font-semibold border border-[rgba(15,34,71,0.12)] transition-all"
              >
                {t.hero.secondaryCta}
              </a>
            </div>

            <div className="fade-up delay-5 mt-8 inline-flex items-center gap-2.5 text-[12px] text-slate-500 font-body">
              <span className="status-dot soft-pulse" />
              <span className="font-medium tracking-wide">{t.hero.status}</span>
            </div>
          </div>

          {/* Visual column */}
          <div className="lg:col-span-5 fade-up delay-3">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
