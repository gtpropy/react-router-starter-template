import React, { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";

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
        arr.push({
          email: email.trim(),
          role,
          ts: new Date().toISOString(),
        });
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
      className="py-24 sm:py-32 border-t border-slate-100 bg-slate-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: pitch */}
          <div className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-blue-600">
              {t.beta.label}
            </div>
            <h2
              data-testid="beta-headline"
              className="mt-4 font-heading text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 tracking-tight leading-[1.1]"
            >
              {t.beta.headline}
            </h2>
            <p
              data-testid="beta-paragraph"
              className="mt-6 text-base text-slate-600 leading-relaxed font-body max-w-lg"
            >
              {t.beta.paragraph}
            </p>
            <div className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-blue-500 opacity-60 animate-ping" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-600" />
              </span>
              <span data-testid="beta-seats-note" className="text-xs font-medium text-slate-600">
                {t.beta.seatsNote}
              </span>
            </div>
          </div>

          {/* Right: form card */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10">
              {done ? (
                <div
                  data-testid="beta-success-state"
                  className="flex flex-col items-start gap-4 py-8"
                >
                  <span className="inline-flex w-12 h-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <CheckCircle2 strokeWidth={1.8} size={26} />
                  </span>
                  <div>
                    <div className="font-heading text-2xl font-medium text-slate-900 tracking-tight">
                      {t.beta.success}
                    </div>
                    <div className="mt-2 text-sm text-slate-600 font-body">
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
                    className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-700"
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
                  {/* Email */}
                  <div>
                    <label
                      htmlFor="beta-email"
                      className="block text-xs uppercase tracking-[0.16em] font-semibold text-slate-500"
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
                      className={`mt-2 w-full px-4 py-3.5 rounded-xl border bg-white text-slate-900 placeholder:text-slate-400 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 ${
                        errors.email ? "border-rose-300" : "border-slate-200"
                      }`}
                    />
                    {errors.email && (
                      <p
                        data-testid="beta-email-error"
                        className="mt-2 text-xs text-rose-600"
                      >
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <span className="block text-xs uppercase tracking-[0.16em] font-semibold text-slate-500">
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
                            className={`flex items-center justify-between text-left px-4 py-3.5 rounded-xl border text-sm font-medium transition-all ${
                              active
                                ? "border-blue-500 bg-blue-50 text-slate-900 ring-2 ring-blue-100"
                                : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                            }`}
                          >
                            <span>{opt.label}</span>
                            <span
                              className={`w-4 h-4 rounded-full border ${
                                active
                                  ? "border-blue-600 bg-blue-600"
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
                        className="mt-2 text-xs text-rose-600"
                      >
                        {errors.role}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    data-testid="beta-submit-button"
                    disabled={submitting}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-blue-600 hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-semibold transition-all"
                  >
                    {submitting ? t.beta.submitting : t.beta.submit}
                    {!submitting && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M13 6l6 6-6 6"/>
                      </svg>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
