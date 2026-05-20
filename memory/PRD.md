# SajiloHealth — Coming Soon Landing Page

## Original Problem Statement
Build a premium "Coming Soon" landing page for SajiloHealth, a Nepal-based digital healthcare platform (appointments, video consults, EMR, billing, pharmacy, labs, QR payments, clinic marketplace, analytics). Tone: confident, clean, modern healthcare professionalism. Design like Stripe / Linear / Notion meets healthcare. White + soft blue palette.

## User Choices
- Frontend-only (no backend); leads stored to localStorage
- Beta form: Email + Role (Patient / Doctor / Clinic)
- Bilingual: English + Nepali toggle (persisted via localStorage)
- Logo placeholder (typographic wordmark)
- Stripe-like crisp minimal aesthetic

## Architecture
- **Frontend**: React 19 + Tailwind CSS + Shadcn UI base + Sonner toasts + lucide-react icons
- **Fonts**: Outfit (headings) + Manrope (body) via Google Fonts
- **State**: React Context for language (`/app/frontend/src/i18n/LanguageContext.jsx`)
- **Copy**: Bilingual EN/NE in `/app/frontend/src/i18n/copy.js`
- **Backend**: Not used (frontend-only per user choice)

## User Personas
- **Patients** (consumers): Want easy booking + records + local payments
- **Doctors** (independent / clinic-affiliated): Want EMR, scheduling, marketplace visibility
- **Clinics / Hospitals**: Want one operational system end-to-end (front desk → financials)

## Core Requirements (static)
1. Hero with eyebrow, headline, sub, paragraph, primary + secondary CTAs
2. "What is SajiloHealth" positioning
3. Patients benefit grid (4)
4. Doctors benefit grid (4)
5. Clinics benefit grid (5) — EMR, billing, pharmacy, tax-ready reports, QR payments
6. Trust section (Built for Nepal — secure infra, regulatory awareness without claims)
7. Beta invite form (email + role; limited seats messaging)
8. Footer
9. EN/NE toggle, persisted
10. Premium Stripe-like aesthetic; no loud gradients; no hype

## What's Been Implemented (Dec 2025)
- ✅ Sticky glass header with brand wordmark, 4 nav links, EN/NE toggle, Join Beta CTA
- ✅ Hero: animated eyebrow, headline, subheadline, paragraph, primary + secondary CTAs, 3D visual with floating spec cards
- ✅ What section with capability pill grid
- ✅ Patients / Doctors / Clinics bento grids with lucide icons
- ✅ Dark brand tile completes the 5-item clinics grid
- ✅ Trust section with soft Kathmandu background overlay
- ✅ Beta form with email + role radio group, validation, success state, Sonner toast, localStorage persistence
- ✅ Footer with tagline, "Designed and built in Kathmandu", and 3 footer links
- ✅ Bilingual copy (EN + NE), persisted via localStorage `sh_lang`
- ✅ data-testid attributes throughout
- ✅ testing_agent_v3 — 14/14 checkpoints passed, 0 console errors, mobile-safe

## Prioritized Backlog
### P1
- Replace Privacy/Terms anchor stubs with real policy pages
- Add a real provided logo when available
- Wire form to a backend (when ready) — currently localStorage only

### P2
- Add Open Graph / Twitter meta for shareable previews
- Add a /thank-you route for SEO-trackable conversion
- Add analytics events for CTA clicks and form submit
- Optional: GSAP/Framer Motion scroll reveals for richer entrances
- Optional: A scheduled launch countdown above the hero
