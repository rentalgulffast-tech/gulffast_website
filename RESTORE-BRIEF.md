# Home page — restore the trust sections

The premium theme pass rebuilt `app/page.tsx` down to six sections. The previous
home page (commit `a57c3d0`) had thirteen. Six content sections were dropped, and
that was a mistake in my brief, not a design decision.

Bring them back, restyled into the new navy/amber system.

## What was lost

Compare against `git show a57c3d0:app/page.tsx` — it is the source of truth for
the copy and data wiring. Do NOT rewrite that content; port it.

| Old section | Component | Status now |
|---|---|---|
| 4. Where We Work | `ServiceAreaMap` | orphaned — used nowhere on the site |
| 7. Why Choose GulfFast | `WhyChooseUsChecklist` | survives only on `/about` |
| 8. Industries We Serve | inline | gone |
| 9. Certifications & Compliance | `CertificationsBadges` | survives only on `/about` |
| 10. Named projects | inline | gone |
| 12. FAQ teaser | inline | gone |

All of these components already carry the new tokens from the theme pass, so they
should drop in without colour work.

## Target composition

```
hero → stats band → marquee → equipment
     → manpower
     → Why Choose GulfFast          ← restore
     → Industries We Serve          ← restore
     → Named projects               ← restore
     → Where We Work (ServiceAreaMap) ← restore
     → Certifications & Compliance  ← restore
     → FAQ teaser                   ← restore
     → CTA band → footer
```

Trust content builds toward the CTA: capability, then sectors, then proof, then
coverage, then credentials, then objection-handling.

## How to restyle each

- Wrap each section in `<Reveal>`; stagger children with the delay prop where
  there is a grid or list.
- Alternate `bg-card-background` and `bg-background` between consecutive sections
  so they separate without borders.
- Section headers use the mockup's centred `.shead` pattern: amber eyebrow,
  40px Poppins h2 in `--primary`, muted lead sentence.
- Cards and tiles: 16px radius, no border, soft shadow, lift on hover — same as
  `EquipmentCard`.
- Keep `--accent` for non-text only. Amber text uses `--accent-strong` / `--accent-ink`.

## Rules

1. **Port the existing copy verbatim** from `a57c3d0:app/page.tsx`. Do not write
   new marketing claims, and do not invent certifications, client names, project
   names or numbers. Every figure comes from `lib/` as before.
2. `StatsBar.tsx` is superseded by the new navy stats band — delete it.
   `ServiceAreaMap.tsx` must come back into use, not be deleted.
3. Do not change any route, `generateStaticParams`, `sitemap.ts`, `robots.ts` or
   metadata. Route count stays 361.
4. Do not touch `/equipment` — that page is finished.
5. No new dependencies. No hardcoded hex: `grep -rn "#[0-9A-Fa-f]\{6\}" app components`
   must still return only `app/globals.css`.
6. Every animation stays disabled under `prefers-reduced-motion`.

## Verify

- `npm run build` clean, 361 routes, `npm run lint` clean.
- Load `/` and scroll the whole page: every section reveals, nothing stuck at
  opacity 0, no console errors.
- Confirm `ServiceAreaMap` renders and its city links work.
- Report files changed and anything you had to guess at. Do not commit or push.
