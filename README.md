# Aconcept Studio

> Designing Timeless Spaces. Creating Lasting Impressions.

Marketing website for Aconcept Studio — a luxury architecture and interior
design firm. Built as a crafted editorial experience, benchmarked against
Foster + Partners, BIG, and Gensler.

## Stack

- **React 18 + Vite + TypeScript** (strict)
- **Tailwind CSS v4** — design tokens via `@theme`, zero hardcoded hex in JSX
- **Framer Motion** — `LazyMotion` + `domAnimation`, `MotionConfig reducedMotion="user"`
- **React Router v7**
- **Embla Carousel** — custom-skinned testimonials
- **React Hook Form + Zod** — contact form validation
- **Radix UI Dialog** — keyboard-navigable portfolio lightbox
- **React Helmet Async** — per-route meta + JSON-LD
- **Lucide React** — tree-shaken icons

## Getting Started

```bash
npm install
npm run dev        # local dev server
npm run build      # typecheck + production build
npm run preview    # preview production build
```

## Architecture

```
src/
├── lib/
│   ├── motion.ts        # shared Framer Motion variants (fadeUp, clipReveal, …)
│   └── data.ts          # all content: projects, services, team, awards, …
├── components/
│   ├── shared/          # OptimizedImage, Magnetic, CounterUp, SectionHeading
│   ├── layout/          # Navbar (glass-on-scroll), Footer, ScrollManager
│   └── sections/        # Hero, StatsBar, FeaturedProjects, About, Services,
│                        # Process, Gallery (+lightbox), Testimonials, Awards,
│                        # Sustainability, Team, ConsultCTA, Contact
└── pages/               # Home (full narrative), Projects (portfolio)
```

## Design System

Tokens live in `src/index.css` under `@theme`:

| Token              | Value     |
| ------------------ | --------- |
| `--color-primary`  | `#0F172A` |
| `--color-secondary`| `#1E293B` |
| `--color-accent`   | `#C8A97E` |
| `--color-canvas`   | `#FAFAF9` |
| `--color-ink`      | `#111827` |
| `--color-muted`    | `#64748B` |

Typography: **Playfair Display** (display) + **Inter** (body), fluid via
`clamp()`. Motion easing: expo-out `cubic-bezier(0.16, 1, 0.3, 1)`.

## Accessibility

- All animations disabled for `prefers-reduced-motion` users via
  `MotionConfig reducedMotion="user"` + `useReducedMotion()` in custom hooks
- Hover-revealed overlays are always visible below `lg` (no hover-only UI on touch)
- Lightbox: Radix Dialog with focus trap, Esc to close, arrow-key navigation
- Carousel announces slides via `aria-live="polite"`
- Form errors announced via `role="alert"`

## Notes

- Contact form submission is simulated (`Contact.tsx` → `onSubmit`) — wire to
  a real endpoint when backend is available.
- Images served from Unsplash with `auto=format` (AVIF/WebP), lazy-loaded,
  explicit dimensions to prevent CLS.
