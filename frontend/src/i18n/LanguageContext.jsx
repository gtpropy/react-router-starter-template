import React, { createContext, useContext, useEffect, useState } from "react";
import { copy } from "./copy";

const LanguageContext = createContext(null);

const STORAGE_KEY = "sh_lang";

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "ne") setLang(stored);
    } catch (e) {
      // ignore
    }
  }, []);

  const updateLang = (next) => {
    setLang(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch (e) {
      // ignore
    }
    if (typeof document !== "undefined") {
      document.documentElement.lang = next === "ne" ? "ne" : "en";
    }
  };

  const t = copy[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang: updateLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
