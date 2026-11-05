# Asphalt Bloom Cafe — Next.js clone of the Wix "Cafe (Grunge)" template

A standalone Next.js 16 (App Router, React 19, TypeScript, Tailwind CSS v4) recreation of the Wix restaurant template **Asphalt Bloom Cafe** (template viewer id `wh-1378`), covering every page of the template. The Wix preview toolbar is not part of the clone.

- Template viewer: https://ko.wix.com/website-template/view/html/wh-1378
- Source site: https://www.wix.com/demone2/asphalt-bloom-cafe

## Route map

| Source path | Local route | Notes |
|---|---|---|
| `/` | `/` | Home |
| `/our-story` | `/our-story` | |
| `/menus` (also `?menu=artisanal-beverages`) | `/menus` | Wix Restaurants Menus widget, single menu; the query string renders the same state |
| `/contact` | `/contact` | Wix form + map |
| `/terms-and-conditions` | `/terms-and-conditions` | |
| `/accessibility-statement` | `/accessibility-statement` | the footer's "Privacy Policy" link also points here, as in the source |

Outbound links keep their source destinations: Facebook / Instagram (`/wix`), wix.com, Wix support articles, Google Maps directions.

## Run it

```bash
npm ci
npm run fetch-fonts   # downloads the commercial Helvetica W01 font locally (not committed)
npm run dev           # http://localhost:3000
npm run check         # lint + typecheck + production build
```

Requires Node 24.

## How it is built

- The source is a fluid Wix Studio site: everything scales with the viewport width. The clone uses one CSS unit, `--u` (one design pixel): `100cqw / 1440` at ≥ 1024 px (desktop design) and `100cqw / 390` below (mobile design, also used for tablets). See `docs/research/page-brief.md`.
- `src/components/site/` — header (hide-on-scroll, mobile menu dialog), footer, home sections, Menus widget, contact form, map, `MotionController` (entrance, scroll-linked parallax/spin and looping effects measured from the source's motion CSS).
- `src/lib/site-data.ts` — navigation, contact details and menu data.
- `public/assets/` — downloaded images, SVG art and open-licensed fonts; mapping in `docs/research/asset-map.md`.
- `docs/design-references/` — source full-page captures (desktop 1440 and iPhone 13) for every page, plus source-vs-clone comparisons.

## Local-only behavior

- **Contact form:** client-side validation with the template's messages and its thank-you message; nothing is submitted.
- **Map:** a keyless Google Maps embed with a CSS dark tint and a recreated marker/info window (the source uses a styled Google Maps JS widget).
- The template has no reservations, online ordering, cart, member login or chat widget, so none are included.

## Licensing

- **Fonts:** Anton and IBM Plex Mono are OFL (Google Fonts) and are included. `helvetica-w01-roman` is a commercial Monotype font served by Wix; it is **not** included — `npm run fetch-fonts` fetches it into `public/assets/fonts/licensed/` (git-ignored). Without it, text falls back to Helvetica Neue / Helvetica / Arial.
- **Content:** the images, copy, logo/wordmark, favicon and branding belong to Wix and their respective owners. Replace them before publishing anything based on this clone.

## Known differences

- The map is an embed tinted with a CSS filter, so street/label colors only approximate the custom dark map style; Google's own UI (zoom, fullscreen, "Map data") differs from the JS widget.
- Below 1024 px the clone shows the mobile design scaled to the width. The source shows a separate "tablet" variant to desktop browsers between 751 and 1023 px with very small text; the clone keeps the larger mobile proportions there.
- The thank-you message typography is inferred (the source form was not submitted during inspection); the form's error font is the system fallback for Wix's Madefor font, as rendered in the source.
- Header hide/show thresholds (400 px down, ~120–150 px back up) were measured with wheel input and approximated.
