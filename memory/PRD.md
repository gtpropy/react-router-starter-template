# SajiloHealth — Coming Soon Landing Page

## Original Problem Statement
Build a premium "Coming Soon" landing page for SajiloHealth, a Nepal-based digital healthcare platform (appointments, video consults, EMR, billing, pharmacy, labs, QR payments, clinic marketplace, analytics). Iteration 2 elevation: **investor-grade / enterprise-grade / healthcare-infrastructure** brand. Must impress investors, doctors, clinic owners.

## User Choices (cumulative)
- Frontend-only (no backend); leads → localStorage
- Beta form: Email + Role (Patient / Doctor / Clinic)
- Bilingual EN + Nepali (persisted via localStorage)
- Logo placeholder (typographic wordmark with caduceus mark)
- **Brand palette: Navy + Subtle Emerald (Palette C)**
- Hero visual: bespoke clinic dashboard mockup (not stock 3D)
- Investor signals strip (marquee)
- Roadmap as horizontal stepper

## Architecture
- **Frontend**: React 19 + Tailwind + Shadcn base + Sonner + lucide-react
- **Fonts**: Outfit (headings) + Manrope (body) + JetBrains Mono (data accents)
- **State**: React Context for language (`/app/frontend/src/i18n/LanguageContext.jsx`)
- **Copy**: Bilingual EN/NE in `/app/frontend/src/i18n/copy.js`
- **Backend**: Not used

## Brand System (v2)
- Navy primary: `#0a1834` · Accent emerald: `#047857`
- Surfaces: pure white, `#fafbfc`, `#0a1834` (dark sections)
- Precision grid background in hero, glass-card dashboard mockup
- Mono accents for data, 0.18em uppercase tracking for labels

## What's Been Implemented (Dec 2025)
### Iteration 1 — MVP
- Header (wordmark, nav, EN/NE toggle, CTA)
- Hero, Patients, Doctors, Clinics, Trust, Beta form, Footer
- Bilingual copy + localStorage persistence
- testing_agent_v3: 14/14 passed

### Iteration 2 — Enterprise/Investor-Grade Redesign
- ✅ New navy + emerald brand system
- ✅ New wordmark with caduceus-style icon + "Healthcare OS" tagline
- ✅ Hero rebuilt with bespoke clinic dashboard mockup (KPIs, chart, queue, floating Payment & Prescription cards, security badge)
- ✅ Eyebrow updated to "Healthcare Infrastructure for Nepal"
- ✅ InvestorStrip section (marquee) below hero with 6 trust signals
- ✅ What section: 4 pillars (Unified, Secure, Local-first, Long-term)
- ✅ BenefitGrid refined: numbered cards (01/02/03), emerald icon chips, dark brand tile for Clinics
- ✅ Trust section: 4-stat row (256-bit, 99.9%, RBAC, Audit) + 4 detail cards
- ✅ Roadmap stepper: Private Beta (Active) → Public Beta (Q2) → Stable Release (Q3-Q4) → Nationwide (Year 2)
- ✅ Beta form on dark navy background with emerald CTA
- ✅ 3-column enterprise footer (Platform / Company / Legal) + "Private Beta · Active" status pill
- ✅ Section numbering pattern (01–06) like a product spec sheet
- ✅ testing_agent_v3: 14/14 passed, no console errors, mobile-safe

## Prioritized Backlog
### P1
- Replace Privacy/Terms anchor stubs with real policy pages
- Drop in finalized brand logo when ready
- Wire form to a backend / CRM (Resend, Mailchimp, MongoDB)

### P2
- OG/Twitter meta + share image
- /thank-you route for SEO-trackable conversion
- Analytics events (CTA clicks, scroll depth, form submit)
- Split `i18n/copy.js` per-section as it grows
- Make roadmap progress bar dynamic from active step index
- Light-touch motion (Framer Motion) for premium reveals on scroll
