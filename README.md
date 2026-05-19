# Sawtooth Customs / Sawtooth Roofing — Web

Next.js 15 (App Router) + TypeScript + Tailwind. Mobile-first marketing site
with a campaign landing page for the door-hanger QR flyer.

## Stack
- **Framework:** Next.js 15 App Router, React 18, TypeScript
- **Styling:** Tailwind CSS with brand palette
- **CRM/Forms:** GoHighLevel (iframe embed)
- **Field photos:** CompanyCam (to be wired in Task 3)
- **Hosting:** Vercel

## Brand palette (`tailwind.config.ts`)

| Token              | Hex       | Use                            |
|--------------------|-----------|--------------------------------|
| `brand-red`        | `#a01d25` | Primary CTAs, accents          |
| `brand-red-dark`   | `#7c161c` | Hover/active CTA               |
| `brand-red-light`  | `#c8323d` | Highlights on dark backgrounds |
| `brand-black`      | `#0b0d0f` | Hero, footer, body text        |
| `brand-gray`       | `#6d797d` | Logo gray, secondary text      |
| `brand-gray-light` | `#b6bcbe` | Borders, muted surfaces        |

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` — it redirects to `/claim-check`.

## Routes

| Path           | What lives there                                    |
|----------------|-----------------------------------------------------|
| `/`            | Redirects to `/claim-check` while the QR campaign is live. Replace in Task 2. |
| `/claim-check` | The flyer landing page (Task 1).                    |

## Tasks tracker

### ✅ Task 1 — QR Flyer Landing Page (`/claim-check`)
Hero, GHL form slot, Local Impact grid (CompanyCam placeholders), sticky
mobile Tap-to-Call bar, footer.

### ⏭ Task 2 — Core Site Rebuild
Programmatic localized SEO pages (`/roofing-meridian`, `/roof-insurance-claims`,
etc.). Index page becomes the real homepage.

### ⏭ Task 3 — n8n + CompanyCam integration
- `app/api/companycam/route.ts` → webhook target for n8n
- AI vision pass for alt-text/SEO captions
- Dynamic "Recent Projects" map fed from a DB or KV

## Wiring up the GoHighLevel form

1. In GHL, open your survey → **Integrate** → **Inline Embed**.
2. Copy the **`<iframe …></iframe>`** markup.
3. Paste it into `components/GHLFormContainer.tsx` as the value of
   `GHL_IFRAME_HTML` (as a string).
4. Save — the loader script (`form_embed.js`) is already injected on mount.

The placeholder block in the form container disappears as soon as
`GHL_IFRAME_HTML` is non-empty.

## Swapping CompanyCam placeholders

`components/LocalImpactGrid.tsx` has a `projects` array. Add an
`imageUrl` field to each tile (or replace with a fetched list once the
CompanyCam webhook is live). `next.config.js` already allowlists
`*.companycam.com` and `*.amazonaws.com` for `next/image`.

## Outstanding items from Sam

- [ ] GHL inline embed snippet for `/claim-check`
- [ ] Real CompanyCam photo URLs (or wait for Task 3 automation)
- [ ] Favicon / `apple-touch-icon` (drop in `/app/` as `icon.png` + `apple-icon.png`)
- [ ] Privacy + Terms page content (`/privacy`, `/terms` routes)
- [ ] Confirm production domain for `openGraph.url` in `app/layout.tsx`

## Deploy

Push to GitHub, import in Vercel, set production domain. No env vars required
for Task 1.
