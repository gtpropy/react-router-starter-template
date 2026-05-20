import React, { useState, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { id: "patients", label: t.nav.patients },
    { id: "doctors", label: t.nav.doctors },
    { id: "clinics", label: t.nav.clinics },
    { id: "trust", label: t.nav.trust },
  ];

  return (
    <header
      data-testid="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl border-b border-slate-200/70"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Wordmark */}
          <a
            href="#top"
            data-testid="brand-wordmark"
            className="flex items-center gap-2 group"
          >
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-md bg-blue-600 text-white">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 21s-7-4.534-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.466-7 10-7 10" />
                <path d="M12 8v6M9 11h6" />
              </svg>
            </span>
            <span className="font-heading text-[17px] font-semibold tracking-tight text-slate-900">
              SajiloHealth
            </span>
          </a>

          {/* Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                data-testid={`nav-${item.id}`}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right: lang + cta */}
          <div className="flex items-center gap-3">
            <div
              role="group"
              aria-label="Language toggle"
              className="inline-flex items-center rounded-full border border-slate-200 bg-white p-0.5"
            >
              <button
                type="button"
                data-testid="lang-toggle-en"
                onClick={() => setLang("en")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === "en"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                EN
              </button>
              <button
                type="button"
                data-testid="lang-toggle-ne"
                onClick={() => setLang("ne")}
                className={`px-3 py-1 text-xs font-semibold rounded-full transition-all ${
                  lang === "ne"
                    ? "bg-slate-900 text-white"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                नेपाली
              </button>
            </div>

            <a
              href="#beta"
              data-testid="header-cta-beta"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium transition-colors"
            >
              {t.nav.beta}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
