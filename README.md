# Nest AI — Website

A Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 marketing site for
Nest AI, an AI automation agency for businesses in Ghana and Nigeria.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## What's inside

```
src/
  app/
    layout.tsx      -> fonts, page metadata
    page.tsx         -> assembles all sections
    globals.css      -> color palette, type tokens, base styles
  components/
    NestMark.tsx      -> logo mark + wordmark
    NestWeave.tsx      -> signature hero illustration
    Navbar.tsx
    Hero.tsx
    TrustBar.tsx
    Problem.tsx        -> "cold lead" pain point section
    Services.tsx        -> the 4 core offerings
    Process.tsx           -> how-it-works steps
    FoundingCohort.tsx     -> early-client positioning (no fake testimonials)
    CTASection.tsx           -> closing call-to-action + form
    Footer.tsx
```

## Editing content

Everything is plain text inside each component -- no CMS. Open the relevant
file in `src/components/` and edit the arrays/strings directly. For example,
to change a service description, edit the `services` array at the top of
`Services.tsx`.

## Editing the color palette

All brand colors live as CSS variables in `src/app/globals.css` under `:root`,
then get exposed to Tailwind via the `@theme inline` block. Change a value
once there and it updates everywhere the corresponding Tailwind class
(`bg-cream`, `text-gold`, `bg-forest`, etc.) is used.

| Token         | Hex       | Used for                          |
|---------------|-----------|------------------------------------|
| `cream`       | `#F6F1E4` | Page background                    |
| `cream-soft`  | `#EFE8D4` | Alternate section background       |
| `ink`         | `#21261D` | Primary text                       |
| `ink-soft`    | `#4B5142` | Secondary text                     |
| `gold`        | `#B5822C` | Primary accent / CTA highlight     |
| `gold-soft`   | `#D9A94B` | Hover states, lighter accent       |
| `forest`      | `#33513C` | Buttons, dark section background   |
| `forest-deep` | `#22362A` | Services section background        |
| `clay`        | `#A8552F` | Warm highlight, small accents      |

## Fonts

Self-hosted via `@fontsource-variable/fraunces` (display/headings) and
`@fontsource-variable/inter` (body/UI) -- no external network call at build
or runtime, so the site works even on unreliable connections.

## Before going live

- Replace the placeholder form in `CTASection.tsx` with a real submission
  handler (e.g. an API route, Formspree, or a WhatsApp deep link).
- Swap `hello@nest-ai.co` in `Footer.tsx` for your real contact details.
- Update the founding-cohort copy in `FoundingCohort.tsx` as real clients
  come on board -- replace it with genuine case studies and testimonials
  once you have them.
- Add a real favicon in `src/app/favicon.ico`.
- Confirm the domain (`nest-ai.co` used as a placeholder throughout).
