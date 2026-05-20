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

export default function BenefitGrid({ id, label, headline, items, testId, audience }) {
  const icons = ICON_MAP[audience] || [];

  return (
    <section
      id={id}
      data-testid={testId}
      className="py-24 sm:py-32 border-t border-slate-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600">
            {label}
          </div>
          <h2 className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.1]">
            {headline}
          </h2>
        </div>

        <div
          className={`mt-14 grid gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden ${
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
                className="bg-white p-8 md:p-10 card-hover"
              >
                <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon strokeWidth={1.6} size={20} />
                </span>
                <div className="mt-6 text-[15px] font-semibold text-slate-900 font-heading tracking-tight">
                  {item.title}
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed font-body">
                  {item.body}
                </p>
              </div>
            );
          })}
          {items.length === 5 && (
            <div
              data-testid={`${testId}-brand-tile`}
              className="bg-slate-900 text-white p-8 md:p-10 flex flex-col justify-between"
            >
              <span className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-white/10 text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.534-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.466-7 10-7 10" />
                  <path d="M12 8v6M9 11h6" />
                </svg>
              </span>
              <div className="mt-6">
                <div className="font-heading text-lg font-medium tracking-tight leading-tight">
                  One platform. Front desk to financials.
                </div>
                <div className="mt-3 text-sm text-slate-300 font-body">
                  No more disconnected tools. SajiloHealth replaces them with a single, calm system.
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
