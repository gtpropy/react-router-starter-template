import React from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { ShieldCheck, Layers, Lock, MapPin, Users, ArrowRight } from "lucide-react";

const ICONS = [Layers, Lock, MapPin, Users, ArrowRight];

export default function InvestorStrip() {
  const { t } = useLanguage();
  const items = t.investorStrip;
  // Duplicate items for seamless marquee
  const track = [...items, ...items];

  return (
    <section
      data-testid="investor-strip"
      aria-label="Trust signals"
      className="relative border-y border-[rgba(15,34,71,0.08)] bg-[#fafbfc]"
    >
      <div className="max-w-[1240px] mx-auto overflow-hidden">
        <div className="flex items-stretch">
          <div className="hidden sm:flex items-center px-5 sm:px-6 lg:px-8 py-4 border-r border-[rgba(15,34,71,0.06)] bg-white">
            <span className="inline-flex items-center gap-2 text-[10.5px] uppercase tracking-[0.22em] font-semibold text-slate-500">
              <ShieldCheck size={13} strokeWidth={1.8} className="text-emerald-700" />
              Platform Signals
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            {/* Fades */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-[#fafbfc] to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-[#fafbfc] to-transparent z-10" />
            <div className="marquee-track flex items-center gap-10 py-4 whitespace-nowrap will-change-transform">
              {track.map((label, idx) => {
                const Icon = ICONS[idx % ICONS.length];
                return (
                  <span
                    key={`${label}-${idx}`}
                    className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#0a1834] tracking-wide"
                  >
                    <Icon size={13} strokeWidth={1.7} className="text-slate-400" />
                    {label}
                    <span className="ml-6 inline-block w-1 h-1 rounded-full bg-slate-300" />
                  </span>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
