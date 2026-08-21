# GulfFast — Premium Theme Brief

Implement the visual system in `mockup-premium-v3.html` across the real site.
That file is the reference: open it, and match its type scale, spacing, colour
use, motion and component shapes. It is a static mockup with placeholder copy —
take the **design** from it, never the content.

---

## 1. Design tokens — `app/globals.css`

Replace the current warm palette with these. `#253F78` was sampled from the
actual logo artwork; do not adjust it.

```css
:root {
  --background:        #F5F7FB;  /* page ground, tinted sections */
  --card-background:   #FFFFFF;  /* cards, header, white sections */
  --foreground:        #14203D;  /* body text */
  --muted:             #667085;  /* secondary text */
  --faint:             #98A2B3;  /* tertiary, meta */
  --border:            #E7EBF2;  /* hairlines */
  --tint:              #EEF2FA;  /* image wells, active states */
  --primary:           #253F78;  /* BRAND NAVY — headings, nav, logo */
  --primary-deep:      #182C57;  /* footer, utility bar, CTA band */
  --accent:            #E8871A;  /* bright amber — NON-TEXT only */
  --accent-strong:     #B45309;  /* buttons + links (4.8:1 on white) */
  --accent-ink:        #96430A;  /* small amber text on white */
}
```

Mirror every one into the Tailwind `@theme` block as `--color-*` so they are
usable as `bg-primary`, `text-muted`, `border-border` etc.

### Amber contrast rule — not negotiable
`--accent` (#E8871A) fails contrast for text (2.8:1 on white). Use it ONLY for
non-text elements: nav underlines, badges, arrows, rules, glows.
Any amber **text** or any button with white text on amber uses `--accent-strong`
or `--accent-ink`.

---

## 2. Typography — `next/font/google`

- Display (h1/h2/h3, stat numbers, brand): **Poppins** 500/600/700
- Body: **Inter** 400/500/600

Load via `next/font/google` in `app/layout.tsx`, expose as `--font-display` and
`--font-body`, wire into the `@theme` block. Do NOT use a `<link>` to Google Fonts.

Scale to match the mockup: h1 56px / -0.03em, section h2 40px / -0.028em,
body 15.5px / 1.7. All headings in `--primary`.

---

## 3. Motion

Build `components/Reveal.tsx` — a small `'use client'` wrapper using
IntersectionObserver that adds a class when the element enters view.
Props: `delay` (0–3 step index). Fade up 28px, 0.7s, `cubic-bezier(.22,.8,.3,1)`,
unobserve after firing.

Build `components/CountUp.tsx` — `'use client'`, animates 0 → target over 1.5s
with a cubic ease-out when scrolled into view.

Everything else is CSS: header shrink on scroll, nav underline wipe, card lift +
image zoom, arrow slide, button lift, marquee, WhatsApp pulse.

**Every animation must be disabled under `prefers-reduced-motion: reduce`.**
Reveal elements must be visible, not stuck at opacity 0.

---

## 4. Components

- **Header** — navy utility bar above the nav (careers / quote / phone), white
  sticky nav 86px shrinking to 70px on scroll with a shadow. Uppercase nav links
  with amber underline wipe. Amber pill CTA on the right. Keep the existing
  `/logo-mark.png` + GULFFAST text lockup, but move the hardcoded `#253F78` to
  the `--primary` token.
- **Footer** — `--primary-deep` background, 4-column, same logo lockup.
- **EquipmentCard** — restyle to match the mockup: 16px radius, no border,
  shadow lift on hover, 3:2 image, amber pill "Owned" badge, arrow that slides.
- **Buttons** — add a `Pill` component: solid (`--accent-strong`, white text)
  and ghost (transparent, navy text, border) variants.

---

## 5. Home page — `app/page.tsx`

Three photos are already in `public/images/`:

| File | Use |
|---|---|
| `hero-equipment.jpg` | Hero image, right column |
| `manpower-welder.jpg` | Manpower section |
| `sparks-accent.jpg` | Optional section background, heavily overlaid |

Compose: hero (eyebrow / h1 / lead / two pills / image with two floating stat
chips) → navy stats band with CountUp → category marquee → equipment section →
**manpower section using `manpower-welder.jpg`** → CTA band → footer.

Use `next/image` with `priority` on the hero only. All stats must come from
`lib/site-stats.ts` / real data — do not hardcode numbers into JSX.

---

## 6. Convert hardcoded hex

Roughly 30 files carry literal hex (`#0F172A`, `#C0714A`, `#F0EBE3`, `#E2DED4`,
`#2B2620`, `#FAF6EF`, `#DED7CB`, `#6B6257`, …). Replace every one with the
matching token utility. When done, `grep -rn "#[0-9A-Fa-f]\{6\}" app components`
should return only `app/globals.css`.

Old → new mapping:
`#F0EBE3`→background · `#FAF6EF`→card-background · `#0F172A`→primary ·
`#C0714A`→accent-strong (text/buttons) or accent (non-text) ·
`#2B2620`→foreground · `#E2DED4`/`#DED7CB`→border · `#6B6257`→muted

---

## 7. Hard constraints

1. **Do not change any route, `generateStaticParams`, `sitemap.ts`, `robots.ts`
   or metadata.** The `/equipment/[category]/[city]` tree is the site's SEO
   asset. Route count must be identical before and after.
2. **Keep the `/equipment` page layout as it is** — sidebar with cluster counts,
   3-up grid, spec line, "N cities →" and Request. Restyle only; do not
   restructure it.
3. **Do not invent content** — no fabricated specs, fleet numbers, client names,
   testimonials or certifications. If data is missing, omit the element.
4. No new npm dependencies. No animation library — the motion above is CSS plus
   two small components.
5. Keep `node:fs` out of client bundles (`lib/equipment-images.ts` is server-only).
6. Do not commit or push.

---

## 8. Verification

- `npm run build` clean; report route count before vs after (expect 361).
- `npm run lint` clean.
- Check `/`, `/equipment`, `/equipment/excavators`, `/manpower` render.
- Confirm reduced-motion: with the OS setting on, all content is visible.
- Report: files changed, anything you guessed at, any hex you could not map.
