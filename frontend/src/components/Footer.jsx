import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

function Wordmark() {
  return (
    <div className="flex items-center gap-2.5">
      <span className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] bg-[#0a1834] text-white">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 4v16M19 4v16M5 12h14" />
          <circle cx="12" cy="12" r="2.2" fill="#10b981" stroke="none" />
        </svg>
      </span>
      <div className="flex flex-col leading-none">
        <span className="font-heading text-[17px] font-semibold tracking-tight text-[#0a1834]">
          SajiloHealth
        </span>
        <span className="mt-0.5 text-[10px] tracking-[0.18em] uppercase text-slate-400 font-medium">
          Healthcare OS
        </span>
      </div>
    </div>
  );
}

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  const cols = [
    {
      heading: t.footer.sections.platform,
      links: [
        { label: t.footer.links.patients, href: "#patients" },
        { label: t.footer.links.doctors, href: "#doctors" },
        { label: t.footer.links.clinics, href: "#clinics" },
        { label: t.footer.links.security, href: "#trust" },
        { label: t.footer.links.roadmap, href: "#roadmap" },
      ],
    },
    {
      heading: t.footer.sections.company,
      links: [
        { label: t.footer.links.beta, href: "#beta" },
        { label: t.footer.links.contact, href: "#beta" },
      ],
    },
    {
      heading: t.footer.sections.legal,
      links: [
        { label: t.footer.links.privacy, href: "#trust" },
        { label: t.footer.links.terms, href: "#trust" },
      ],
    },
  ];

  return (
    <footer
      data-testid="site-footer"
      className="border-t border-[rgba(15,34,71,0.08)] pt-16 pb-10 bg-white"
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
          <div className="lg:col-span-5">
            <Wordmark />
            <p className="mt-5 text-[14px] text-slate-600 max-w-sm font-body leading-[1.6]">
              {t.footer.tagline}
            </p>
            <p className="mt-2 text-[12px] text-slate-400 font-body">{t.footer.built}</p>

            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(15,34,71,0.08)] bg-[#fafbfc]">
              <span className="status-dot" />
              <span className="text-[11px] font-semibold text-slate-600 tracking-wide">
                Private Beta · Active
              </span>
            </div>
          </div>

          {cols.map((col, idx) => (
            <div key={idx} className="lg:col-span-2">
              <div className="text-[11px] uppercase tracking-[0.2em] font-semibold text-slate-400">
                {col.heading}
              </div>
              <ul className="mt-5 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className="text-[13.5px] text-slate-600 hover:text-[#0a1834] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-1 flex flex-col items-start lg:items-end">
            <div className="inline-flex items-center rounded-full border border-[rgba(15,34,71,0.1)] bg-white p-0.5">
              <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider text-slate-400">v0.9</span>
              <span className="px-2.5 py-1 text-[10px] font-semibold tracking-wider rounded-full bg-[#0a1834] text-white">Beta</span>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[rgba(15,34,71,0.06)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-[12px] text-slate-400 font-body">
            © {year} SajiloHealth. {t.footer.rights}
          </p>
          <p className="text-[11px] font-mono text-slate-400 tracking-[0.14em] uppercase">
            Kathmandu · Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
