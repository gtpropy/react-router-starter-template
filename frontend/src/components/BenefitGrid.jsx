import React from "react";
import {
  CalendarCheck,
  Video,
  FolderOpen,
  QrCode,
  Clock,
  FileText,
  Globe,
  Wallet,
  ClipboardList,
  Receipt,
  Pill,
  FileSpreadsheet,
  ScanLine,
} from "lucide-react";

const ICON_MAP = {
  patients: [CalendarCheck, Video, FolderOpen, QrCode],
  doctors: [Clock, FileText, Globe, Wallet],
  clinics: [ClipboardList, Receipt, Pill, FileSpreadsheet, ScanLine],
};

const SECTION_NUM = {
  patients: "02",
  doctors: "03",
  clinics: "04",
};

export default function BenefitGrid({ id, label, headline, sub, items, testId, audience }) {
  const icons = ICON_MAP[audience] || [];
  const num = SECTION_NUM[audience] || "00";

  return (
    <section
      id={id}
      data-testid={testId}
      className="py-28 sm:py-36 border-t border-[rgba(15,34,71,0.06)]"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-slate-400" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-slate-500">
                {label}
              </span>
            </div>
            <div className="mt-3 font-heading text-[13px] font-semibold text-slate-400">
              {num} / Module
            </div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-medium text-[#0a1834] tracking-tight leading-[1.08]">
              {headline}
            </h2>
            {sub && (
              <p className="mt-5 text-[16px] text-slate-600 leading-[1.6] font-body max-w-[620px]">
                {sub}
              </p>
            )}
          </div>
        </div>

        <div
          className={`mt-16 grid gap-px bg-[rgba(15,34,71,0.08)] border border-[rgba(15,34,71,0.08)] rounded-[18px] overflow-hidden ${
            items.length === 5
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
              : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {items.map((item, idx) => {
            const Icon = icons[idx] || ClipboardList;
            return (
              <div
                key={idx}
                data-testid={`${testId}-item-${idx}`}
                className="bg-white p-8 lg:p-9 card-precise group"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-flex w-10 h-10 items-center justify-center rounded-[10px] bg-[#f1f5f4] text-[#047857] group-hover:bg-emerald-50 transition-colors">
                    <Icon strokeWidth={1.6} size={18} />
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-slate-400">
                    0{idx + 1}
                  </span>
                </div>
                <div className="mt-7 font-heading text-[16px] font-semibold text-[#0a1834] tracking-tight leading-snug">
                  {item.title}
                </div>
                <p className="mt-2 text-[13.5px] text-slate-500 leading-[1.6] font-body">
                  {item.body}
                </p>
              </div>
            );
          })}
          {items.length === 5 && (
            <div
              data-testid={`${testId}-brand-tile`}
              className="relative bg-[#0a1834] text-white p-8 lg:p-9 flex flex-col justify-between overflow-hidden"
            >
              {/* faint pattern */}
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div className="relative">
                <span className="inline-flex w-10 h-10 items-center justify-center rounded-[10px] bg-white/8 text-emerald-300">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 4v16M19 4v16M5 12h14" />
                    <circle cx="12" cy="12" r="2.2" fill="currentColor" stroke="none" />
                  </svg>
                </span>
              </div>
              <div className="relative mt-8">
                <div className="font-heading text-[18px] font-medium tracking-tight leading-snug">
                  One operating system. Front desk to financials.
                </div>
                <div className="mt-3 text-[13px] text-slate-300 font-body leading-[1.6]">
                  Replace disconnected tools with a single, audited platform — built for the way Nepali clinics actually work.
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.18em] font-semibold text-emerald-300">
                  <span className="w-5 h-px bg-emerald-300" />
                  Healthcare OS
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
