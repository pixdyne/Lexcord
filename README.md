# Lexcord Lawyers

Marketing website for Lexcord, an Australian law firm. Built with **Next.js 14 (App Router) + TypeScript**, a hand-built CSS design system (no UI framework), and `next/font` for typography.

Visual direction: **editorial-luxury legal** — deep navy authority, warm gold accents, refined Fraunces serif display paired with Inter for body.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (fully static / SSG)
npm run start    # serve the production build
```

## Architecture

```
src/
├── app/
│   ├── layout.tsx              # root layout, fonts, nav + footer
│   ├── page.tsx                # home
│   ├── home.module.css
│   ├── about/page.tsx
│   ├── contact/                # contact form (client island) + page
│   └── expertise/[slug]/       # data-driven practice-area pages (SSG)
├── components/                 # SiteNav, SiteFooter, PracticeSections, Faq, Reveal …
├── data/
│   ├── types.ts                # content model
│   └── practices/              # one file per practice area + index
└── lib/accent.tsx              # {accent} headline-highlight helper
```

All seven practice-area pages render from typed data in `src/data/practices/`. To edit copy, edit the data file — no JSX changes needed.

## Practice areas

Property & Conveyancing · Commercial · Wills & Estates · Intellectual Property · Criminal Law · Notary Public · Migration Law

## Content status

Body copy is sourced from the supplied firm document. The following are **placeholders pending real content**: firm contact details (phone, email, address), About/team/credentials, logo, and any photography.
