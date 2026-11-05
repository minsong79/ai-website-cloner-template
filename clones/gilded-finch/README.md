# The Gilded Finch — Wix "Bar (Friendly)" template clone

A standalone Next.js 16 (App Router, React 19, TypeScript, Tailwind CSS v4) recreation of the
Wix Studio restaurant template **"Bar (Friendly)"** (template viewer id `wh-1463`). The Wix
preview toolbar is not part of the clone.

- Template viewer: https://ko.wix.com/website-template/view/html/wh-1463
- Source site: https://www.wix.com/demone2/the-gilded-finch-1

## Route map

| Source | Local route | Notes |
|---|---|---|
| `/` | `/` | hero video, scroll/pointer collage, menu teaser, events, gallery + expand view, testimonial slideshow |
| `/menus` | `/menus` | Restaurant Menus widget "Our Crafted Menu" (3 sections, 25 items) |
| `/contact` | `/contact` | details, opening hours, contact form, Google map |
| `/privacy-policy` | `/privacy-policy` | |
| `/accessibility-statement` | `/accessibility-statement` | |
| `/refund-policy` | `/refund-policy` | |
| `/terms-and-conditions` | `/terms-and-conditions` | |

Outbound links keep their source destinations: Facebook/Instagram/TikTok (`/wix` accounts),
wix.com, Wix support articles and Google Maps directions.

## Run

```bash
npm ci
npm run fetch-fonts   # optional: downloads the commercial Neue Haas Unica Pro files locally
npm run dev           # http://localhost:3000
npm run check         # lint + typecheck + production build
```

`scripts/download-assets.mjs` re-downloads the committed images, video and open-licensed fonts
from Wix (already in `public/assets/`).

## Project layout

- `src/app/` — one route per source page; `globals.css` holds the Wix Studio scaling system
  (`--sf`, `--u`), fonts and shared button styles.
- `src/components/site/` — header (marquee, mobile menu), footer, background video, motion
  (parallax / spin / pointer tilt / wiggle), gallery + expand view, testimonial slideshow, menu
  widgets, contact form, map, policy page frame.
- `src/data/menus.ts` — the published Restaurant Menus data.
- `docs/research/` — `page-brief.md` (measurements, breakpoints, motion) and `asset-map.md`.
- `docs/design-references/` — source full-page captures (desktop 1440, iPhone 13) for every
  page and source-vs-clone comparisons for home, menus and contact.

## Local-only behaviour

- **Contact form:** client-side validation with the source messages; a valid submit shows the
  source's thank-you text for 8 seconds. Nothing is sent anywhere.
- **Map:** keyless Google Maps embed iframe (the source uses the Maps JS API) with a recreated
  "Location Name / Directions" info window.
- The template has no reservations, ordering, cart, member login or chat widget, so none are
  included.

## Licensing

- **Neue Haas Unica Pro** is a commercial Monotype font served by Wix. It is not included in
  the repository (`public/assets/fonts/licensed/` is gitignored); `npm run fetch-fonts` downloads
  it for local comparison only. Without it, text falls back to Helvetica Neue / Arial and line
  breaks will differ.
- Mansalva and Wix Madefor Text are SIL Open Font License fonts and are committed.
- All images, video, copy, logos and branding come from the Wix template and belong to Wix and
  their owners. Replace them before publishing anything based on this clone.

## Known differences

- Map: Google's embed UI (zoom buttons, attribution, pin style) differs from the source's
  styled Maps JS map; the mobile source shows a static map image.
- Gallery expand view: navigation scrolls the strip smoothly; the source's exact easing was not
  measured. Thumbnails have no hover effect (same as source).
- Contact form: on submit the clone flags every invalid field; the source flags only fields the
  visitor has already touched.
- Slideshow: autoplay runs from page load (the source's start offset relative to load varies);
  it stops under `prefers-reduced-motion`.
- Between 700px and 1023px the clone follows the source's mobile layout rules (% widths, type
  capped at the 700px scale); the Restaurant Menus widgets switch to columns at a 440px widget
  width, approximating Wix's user-agent-based widget layout.
- Above 1920px the content stage stops growing and is centred (the source keeps stretching
  percentage-based positions); full-bleed backgrounds and videos still span the viewport.
- The favicon is the scaffold's, not Wix's.
