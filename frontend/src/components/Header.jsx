import React, { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

function Wordmark() {
  return (
    <a href="#top" data-testid="brand-wordmark" className="flex items-center gap-2.5 group">
      <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-[10px] bg-[#0a1834] text-white">
        {/* Stylized "S/H" caduceus-grade mark */}
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
    </a>
  );
}

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "patients", label: t.nav.patients },
    { id: "doctors", label: t.nav.doctors },
    { id: "clinics", label: t.nav.clinics },
    { id: "trust", label: t.nav.trust },
    { id: "roadmap", label: t.nav.roadmap },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl border-b border-[rgba(15,34,71,0.08)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          <Wordmark />

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`nav-${item.id}`}
                className="px-3 py-2 text-[13px] font-medium text-slate-600 hover:text-[#0a1834] transition-colors rounded-md"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            {/* Lang toggle */}
            <div
              role="group"
              aria-label="Language toggle"
              className="inline-flex items-center rounded-full border border-[rgba(15,34,71,0.1)] bg-white/70 backdrop-blur p-0.5"
            >
              <button
                type="button"
                data-testid="lang-toggle-en"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all tracking-wider ${
                  lang === "en"
                    ? "bg-[#0a1834] text-white"
                    : "text-slate-500 hover:text-[#0a1834]"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                data-testid="lang-toggle-ne"
                onClick={() => setLang("ne")}
                className={`px-2.5 py-1 text-[11px] font-semibold rounded-full transition-all ${
                  lang === "ne"
                    ? "bg-[#0a1834] text-white"
                    : "text-slate-500 hover:text-[#0a1834]"
                }`}
              >
                नेपाली
              </button>
            </div>

            <a
              href="#beta"
              data-testid="header-cta-beta"
              className="hidden sm:inline-flex items-center gap-1.5 pl-4 pr-3 py-2 rounded-full bg-[#047857] hover:bg-[#065f46] text-white text-[13px] font-semibold transition-colors"
            >
              {t.nav.beta}
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/15">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
