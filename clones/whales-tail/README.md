# The Whale's Tail — Wix "펍 / Pub" template clone

A standalone Next.js 16 (App Router, React 19, TypeScript strict, Tailwind CSS v4 + CSS modules) recreation of the Wix restaurant template **"펍" (Pub), viewer id 3094**, covering every page of the template website (the Wix preview toolbar is excluded).

- Template viewer: https://ko.wix.com/website-template/view/html/3094
- Source site: https://www.wix.com/demone2/pub-the-whale

## Route map

| Source path | Local route | Notes |
|---|---|---|
| `/` (+ `#bookatable`) | `/` | hero, specials, Happy Moments slideshow, events list, reserve widget, drop-by card |
| `/menu` | `/menu` | Wix Restaurants Menus |
| `/about` | `/about` | |
| `/order-online` | `/order-online` | Online Orders: item dialog, fulfillment dialog, sticky tabs |
| `/reservations` | `/reservations` | Table Reservations with slot grid |
| `/event-details/movie-night`, `/open-stage`, `/trivia-night` | same | Wix Events details |
| `/event-details/<slug>/form` | same | RSVP "Add your details" step |
| `/cart-page` | `/cart-page` | empty and filled states |
| `/checkout?checkoutId=…` | `/checkout` | Wix checkout notice "We can’t accept online payments" |

## Run

```bash
npm ci
npm run fetch-fonts   # no-op here: the template only uses open-licensed fonts (see below)
npm run dev           # http://localhost:3000
npm run check         # lint + typecheck + production build
```

## Responsive approach

Desktop layout (980 px Wix stage, fluid strips) at ≥ 980 px; the same layout scaled to fit between 768 and 979 px; the Wix mobile layout (320 px design, scaled to the screen like the source does on phones) below 768 px. Every measurement is a Wix design pixel multiplied by `--u` (see `src/app/globals.css` and `docs/research/page-brief.md`).

## What is local-only

Nothing is sent anywhere.

- **Cart / ordering**: client state in `localStorage` (`whales-tail-cart-v1`); header badge, side cart, cart page, quantities and totals all work. Checkout shows the demo's own notice ("We can’t accept online payments").
- **Reservations**: party size / date / time / slot selection work; "Find a Table" and "Reserve Now" show the dialog the demo shows ("Online reservations are currently unavailable").
- **Event RSVP**: validated form with a local "Thank you!" confirmation.
- **Newsletter**: source validation messages and success text, no submission.
- **Log In**: reproduces the demo's "Demo Mode" notice, with a note that sign-in is not connected.
- Social/share links, the Wix credit link and `mailto:`/`tel:` links keep their real destinations. The event map is a Google Maps embed for the source coordinates.

## Licensing

- Fonts committed in `public/assets/fonts/`: Fahkwang and Marmelad (Google Fonts, OFL) and Wix Madefor Text (OFL, published by Wix; checkout page only). No commercial fonts are rendered by this template, so `scripts/fetch-licensed-fonts.mjs` has nothing to download; `public/assets/fonts/licensed/` is git-ignored for consistency with the other clones.
- Images, copy, logo/badge artwork and branding come from the Wix template and belong to Wix and their owners. Replace them before publishing anything. Sources are listed in `docs/research/asset-map.md`.

## Docs

- `docs/research/page-brief.md` — section order, measurements, type scale, colors, breakpoints, interactions.
- `docs/research/asset-map.md` — source URL → local asset, sizes, types.
- `docs/design-references/` — source screenshots per page (desktop 1440 and iPhone 13), source interaction states, and source-vs-clone comparisons (home, menu, about, order online; desktop and mobile; home parallax scroll states).

## Known differences

- The source's mobile Online Orders item cards never rendered in headless capture; the clone's mobile cards (single column, 80 px image) follow the desktop card design and the measured mobile text positions, not a verified source image.
- The event map is a standard Google Maps embed (the source's Wix Events map is a greyscale styled map in an iframe).
- 768–979 px: the source keeps the 980 px stage and scrolls horizontally; the clone scales the stage to fit instead.
- Mobile Menu page: the source paints the page background umber including behind the footer top gap; the clone's footer gap stays ink.
- Validation wording for the RSVP form (not observable without submitting data to the demo) is generic ("Enter a first name", …); the confirmation copy is the source's.
- The date picker defaults to today's date like the source; past days are disabled. Calendar popover styling for the light (home) variant is inferred from the dark variant.
- Login shows Wix's Demo Mode screen (what the demo shows) rather than a member sign-in form.
