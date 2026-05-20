import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { toast } from "sonner";
import { CheckCircle2, ShieldCheck } from "lucide-react";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function BetaForm() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [errors, setErrors] = useState({ email: "", role: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const next = { email: "", role: "" };
    if (!EMAIL_RE.test(email.trim())) next.email = t.beta.invalidEmail;
    if (!role) next.role = t.beta.selectRole;
    setErrors(next);
    if (next.email || next.role) return;

    setSubmitting(true);
    setTimeout(() => {
      try {
        const key = "sh_leads";
        const raw = localStorage.getItem(key);
        const arr = raw ? JSON.parse(raw) : [];
        arr.push({ email: email.trim(), role, ts: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(arr));
      } catch (err) {
        // ignore
      }
      setSubmitting(false);
      setDone(true);
      toast.success(t.beta.success, { description: t.beta.successDesc });
    }, 600);
  };

  return (
    <section
      id="beta"
      data-testid="beta-section"
      className="py-28 sm:py-36 border-t border-[rgba(15,34,71,0.06)] bg-[#0a1834] text-white relative overflow-hidden"
    >
      {/* Soft pattern */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 60% at 50% 30%, black, transparent 75%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(4,120,87,0.18), transparent 60%)",
        }}
      />

      <div className="relative max-w-[1240px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2">
              <span className="w-6 h-px bg-emerald-400" />
              <span className="text-[11px] uppercase tracking-[0.22em] font-semibold text-emerald-300">
                {t.beta.label}
              </span>
            </div>
            <h2
              data-testid="beta-headline"
              className="mt-5 font-heading text-[32px] sm:text-[40px] lg:text-[48px] font-medium tracking-tight leading-[1.08]"
            >
              {t.beta.headline}
            </h2>
            <p className="mt-5 text-[16px] text-slate-300 leading-[1.6] font-body max-w-[440px]">
              {t.beta.sub}
            </p>
            <p
              data-testid="beta-paragraph"
              className="mt-4 text-[14px] text-slate-400 leading-[1.65] font-body max-w-[440px]"
            >
              {t.beta.paragraph}
            </p>

            <div className="mt-7 inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="status-dot soft-pulse" />
              <span
                data-testid="beta-seats-note"
                className="text-[12px] font-medium text-slate-200 tracking-wide"
              >
                {t.beta.seatsNote}
              </span>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white text-[#0a1834] rounded-[20px] p-7 sm:p-10 border border-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)]">
              {done ? (
                <div
                  data-testid="beta-success-state"
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                    <CheckCircle2 strokeWidth={1.8} size={26} />
                  </span>
                  <div>
                    <div className="font-heading text-[24px] font-medium text-[#0a1834] tracking-tight">
                      {t.beta.success}
                    </div>
                    <div className="mt-2 text-[14px] text-slate-600 font-body max-w-md">
                      {t.beta.successDesc}
                    </div>
                  </div>
                  <button
                    type="button"
                    data-testid="beta-submit-another"
                    onClick={() => {
                      setDone(false);
                      setEmail("");
                      setRole("");
                    }}
                    className="mt-2 text-[13px] font-semibold text-emerald-700 hover:text-emerald-800"
                  >
                    ← Submit another
                  </button>
                </div>
              ) : (
                <form
                  data-testid="beta-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="beta-email"
                      className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-500"
                    >
                      {t.beta.emailLabel}
                    </label>
                    <input
                      id="beta-email"
                      data-testid="beta-email-input"
                      type="email"
                      autoComplete="email"
                      placeholder={t.beta.emailPlaceholder}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`mt-2 w-full px-4 py-3.5 rounded-xl border bg-white text-[#0a1834] placeholder:text-slate-400 text-[14px] transition-all focus:outline-none focus:ring-2 focus:ring-emerald-200 focus:border-emerald-600 ${
                        errors.email ? "border-rose-300" : "border-[rgba(15,34,71,0.12)]"
                      }`}
                    />
                    {errors.email && (
                      <p
                        data-testid="beta-email-error"
                        className="mt-2 text-[12px] text-rose-600"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <span className="block text-[11px] uppercase tracking-[0.18em] font-semibold text-slate-500">
                      {t.beta.roleLabel}
                    </span>
                    <div
                      role="radiogroup"
                      aria-label={t.beta.roleLabel}
                      className="mt-2 grid grid-cols-1 sm:grid-cols-3 gap-2"
                    >
                      {[
                        { id: "patient", label: t.beta.roles.patient },
                        { id: "doctor", label: t.beta.roles.doctor },
                        { id: "clinic", label: t.beta.roles.clinic },
                      ].map((opt) => {
                        const active = role === opt.id;
                        return (
                          <button
                            key={opt.id}
                            type="button"
                            role="radio"
                            aria-checked={active}
                            data-testid={`beta-role-${opt.id}`}
                            onClick={() => setRole(opt.id)}
                            className={`flex items-center justify-between text-left px-4 py-3.5 rounded-xl border text-[13.5px] font-semibold transition-all ${
                              active
                                ? "border-emerald-600 bg-emerald-50 text-[#0a1834] ring-2 ring-emerald-100"
                                : "border-[rgba(15,34,71,0.12)] bg-white text-slate-700 hover:border-[rgba(15,34,71,0.22)]"
                            }`}
                          >
                            <span>{opt.label}</span>
                            <span
                              className={`w-4 h-4 rounded-full border ${
                                active
                                  ? "border-emerald-600 bg-emerald-600"
                                  : "border-slate-300 bg-white"
                              } flex items-center justify-center`}
                            >
                              {active && (
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                              )}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                    {errors.role && (
                      <p
                        data-testid="beta-role-error"
                        className="mt-2 text-[12px] text-rose-600"
                      >
                        {errors.role}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
                    <button
                      type="submit"
                      data-testid="beta-submit-button"
                      disabled={submitting}
                      className="group inline-flex items-center justify-center gap-2 pl-6 pr-3.5 py-3.5 rounded-full bg-[#047857] hover:bg-[#065f46] disabled:opacity-60 disabled:cursor-not-allowed text-white text-[14px] font-semibold transition-all shadow-[0_8px_24px_-12px_rgba(4,120,87,0.6)]"
                    >
                      {submitting ? t.beta.submitting : t.beta.submit}
                      {!submitting && (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/15 group-hover:translate-x-0.5 transition-transform">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14M13 6l6 6-6 6"/>
                          </svg>
                        </span>
                      )}
                    </button>

                    <div className="inline-flex items-center gap-2 text-[11.5px] text-slate-500 font-medium">
                      <ShieldCheck size={13} strokeWidth={1.8} className="text-emerald-700" />
                      We never share your details.
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
