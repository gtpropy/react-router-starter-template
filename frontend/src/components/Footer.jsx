import React from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();
  return (
    <footer
      data-testid="site-footer"
      className="border-t border-slate-100 py-12 sm:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-blue-600 text-white">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 21s-7-4.534-7-10a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 5.466-7 10-7 10" />
                  <path d="M12 8v6M9 11h6" />
                </svg>
              </span>
              <span className="font-heading text-base font-semibold tracking-tight text-slate-900">
                SajiloHealth
              </span>
            </div>
            <p className="mt-4 text-sm text-slate-600 max-w-sm font-body">
              {t.footer.tagline}
            </p>
            <p className="mt-2 text-xs text-slate-400 font-body">{t.footer.built}</p>
          </div>

          <div className="flex flex-col sm:items-end gap-4">
            <nav className="flex flex-wrap gap-x-6 gap-y-2">
              <a
                href="#beta"
                data-testid="footer-link-contact"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.footer.links.contact}
              </a>
              <a
                href="#trust"
                data-testid="footer-link-privacy"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.footer.links.privacy}
              </a>
              <a
                href="#trust"
                data-testid="footer-link-terms"
                className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
              >
                {t.footer.links.terms}
              </a>
            </nav>
            <p className="text-xs text-slate-400 font-body">
              © {year} SajiloHealth. {t.footer.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
