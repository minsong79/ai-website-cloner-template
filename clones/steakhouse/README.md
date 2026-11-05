# Steakhouse — Wix restaurant template clone

A standalone Next.js 16 (App Router, React 19, TypeScript strict, Tailwind CSS v4 + CSS Modules) recreation of the Wix template **"레스토랑 / Restaurant" (viewer id 1807)**, built for comparing templates. It reproduces every page of the template website (the Wix preview toolbar is excluded) with its real copy, images, video, and interactions, working locally without any backend.

- Template viewer: https://ko.wix.com/website-template/view/html/1807
- Source site: https://www.wix.com/demone2/steakhouse

## Route map

| Source | Local route | Notes |
|---|---|---|
| `/demone2/steakhouse` | `/` | Home; nav items OUR PLACE and CONTACT are in-page anchors (`/#our-place`, `/#contact`) |
| `/demone2/steakhouse/menu` | `/menu` | Restaurant Menus ("Dinner Menu") |
| `/demone2/steakhouse/order-online` | `/order-online` | Online Orders (item modal, fulfillment modal, side cart) |
| `/demone2/steakhouse/reservations` | `/reservations` | Table Reservations |
| `/demone2/steakhouse/cart-page` | `/cart-page` | eCommerce cart |

## Run it

```bash
npm ci
npm run fetch-fonts   # downloads the two commercial Wix fonts into public/assets/fonts/licensed/ (git-ignored)
npm run dev           # http://localhost:3000
npm run check         # lint + typecheck + production build
```

Node 24 is required (`.nvmrc`). Without `fetch-fonts` the site still renders, using Arial Black / Helvetica fallbacks for Lulo Clean and Avenir.

## Project layout

- `src/app/` — one route per source page
- `src/components/site/` — header, footer, chat, overlays, page background; `home/`, `menu/`, `order/`, `reservations/`, `cart/`
- `src/lib/site-data.ts` — source copy (menu items, prices, nav, addresses); `cart-store.ts` (localStorage cart); `ui-store.ts` (overlays)
- `public/assets/` — images, video, Anton font (see `docs/research/asset-map.md`)
- `docs/research/page-brief.md` — measurements, breakpoints, interactions; `docs/design-references/` — source screenshots and source-vs-clone comparisons
- `scripts/fetch-licensed-fonts.mjs` — commercial font download

Responsive behavior: at `>= 980px` the classic Wix 980px desktop stage is reproduced pixel for pixel; below that the source's separate 320px mobile layout is reproduced and scaled with the viewport (capped to a 480px column on tablets).

## What is local-only

Nothing is sent anywhere:

- **Forms** (mailing list, contact): client-side validation with the source's messages; success messages shown locally.
- **Reservations**: party size, date picker and time are interactive; "Find a Table" / "Reserve Now" show the same "Online reservations are currently unavailable" notice the demo shows.
- **Online orders / cart**: item modal (notes, quantity), cart badge and count, side cart, cart page (quantity, remove, promo field, note), pickup/delivery choice — persisted in `localStorage`. Checkout shows a "Checkout is not connected" notice (the demo opens Wix's hosted checkout).
- **Log In**: shows the demo's "Demo Mode" screen; sign-in is not connected.
- **Chat**: the panel opens and accepts messages, which stay on the page with a "not connected" note.
- Outbound links keep their real destinations (Twitter/Instagram/Wix). The map is a Google Maps embed iframe.

## Licensing

- Lulo Clean and Avenir are commercial Monotype fonts licensed to Wix: they are **not** included; `npm run fetch-fonts` downloads them for local comparison only.
- Anton is SIL Open Font License (Google Fonts).
- All images, video, copy, and branding belong to Wix and their owners. Replace them before publishing anything based on this clone.

## Known differences

- Popups and some widget details were reconstructed from measurements rather than Wix code: lightbox Instagram glyph is redrawn; chat panel typography uses a Helvetica stack; fulfillment modal layout is approximate.
- The source's Table Reservations dropdown list and calendar month label render dark text on dark backgrounds (unreadable); the clone shows them readable (white text).
- Map: the template address is fictional; the embed centers on the same Civic Center spot but cannot reproduce the source's custom dark map style, info window, or controls (a CSS grayscale/invert filter approximates the look).
- Wix entrance timing (fade-ins of widgets after hydration) and the exact video frame differ; the Wix "Load More" gallery button and hidden dietary labels are not reproduced (hidden on the source).
- Success messages of the two forms use Wix defaults; the live demo was not submitted.
- Between 480px and 979px the mobile layout is shown in a 480px column (the source serves either its 320px mobile site or the fixed 980px desktop site, depending on the device).
