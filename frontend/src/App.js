import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { LanguageProvider, useLanguage } from "./i18n/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InvestorStrip from "./components/InvestorStrip";
import What from "./components/What";
import BenefitGrid from "./components/BenefitGrid";
import Trust from "./components/Trust";
import Roadmap from "./components/Roadmap";
import BetaForm from "./components/BetaForm";
import Footer from "./components/Footer";

function Landing() {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-white text-[#0a1834]" data-testid="landing-page">
      <Header />
      <main>
        <Hero />
        <InvestorStrip />
        <What />
        <BenefitGrid
          id="patients"
          testId="patients-section"
          label={t.patients.label}
          headline={t.patients.headline}
          sub={t.patients.sub}
          items={t.patients.items}
          audience="patients"
        />
        <BenefitGrid
          id="doctors"
          testId="doctors-section"
          label={t.doctors.label}
          headline={t.doctors.headline}
          sub={t.doctors.sub}
          items={t.doctors.items}
          audience="doctors"
        />
        <BenefitGrid
          id="clinics"
          testId="clinics-section"
          label={t.clinics.label}
          headline={t.clinics.headline}
          sub={t.clinics.sub}
          items={t.clinics.items}
          audience="clinics"
        />
        <Trust />
        <Roadmap />
        <BetaForm />
      </main>
      <Footer />
      <Toaster position="bottom-right" richColors closeButton />
    </div>
  );
}

export default function App() {
  return (
    <div className="App">
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<Landing />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </div>
  );
}
