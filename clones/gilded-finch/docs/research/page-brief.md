# The Gilded Finch — page brief

Source: Wix Studio template "Bar (Friendly)" (viewer id `wh-1463`), published at
https://www.wix.com/demone2/the-gilded-finch-1. Measurements below were read from the live DOM/CSS
with Playwright (1280x800, 1440x900, 1920x1080, 1024x800 desktop UA, iPhone 13 UA).

## Layout system (applies to every page)

- **Wix Studio, fluid ("SPX" scaling).** Every authored size is `coef × (scaling-factor − scrollbar)`
  where scaling-factor = `clamp(0, 100vw, 1920px)` on desktop and `clamp(0, 100vw, 700px)` at
  `max-width: 1023px`. Desktop coefficients are authored at 1280px, mobile at 390px.
- Clone: `--sf` / `--u` in `globals.css` (`--u` = one design pixel). `--sbw` (scrollbar width) is
  measured by `ScrollbarWidth.tsx`, like Wix's `--scrollbar-width`.
- **Breakpoint:** one switch at 1024px (source `@media screen and (max-width:1023px)`). Mobile-first
  CSS: base = 390 layout (horizontal values in % of the viewport, vertical in `--u`), `min-width:1024px`
  = desktop layout (`--u` everywhere). Between 700 and 1023px the source keeps the mobile layout
  with widths in % and type capped at the 700px scale; the clone does the same.
- **Fixed-pixel exceptions found by comparing 1024/1280/1920:** header gutters (24px), events
  section top padding (100px), gallery section side/bottom padding (20px), contact containers'
  side padding (20px), and all Wix app widgets (Restaurant Menus, Wix Forms) which use fixed px
  type/padding with fluid width. The menu widgets switch to columns by their own width
  (container queries at 440px; desktop prices move beside names at 900px).
- Colors: cream `#FEFAF6` (page), ink `#1D1D1D`, shade `#F6EDE6` (paper card), lemon `#FCFFC3`
  (tagline pill, testimonial text), mobile menu overlay `#E6E6E6`, dark band `#1D1D1D`.
- Type: Mansalva 400 (headings H1 84/34, H2 52/28, H3 44/26 — desktop/mobile units),
  Neue Haas Unica Pro 400/500/700 (+500 italic) for body (15/16, 1.25em), nav (14, 700),
  buttons (15/16, 700). Wix Madefor Text only for form error messages.

## Header (all pages)

Fixed overlay (`pointer-events:none` container). Desktop: 24px gutters; bird logo tile 3.13% of the
bar width; nav (Menu, Contact) at 3.31% with width 14.59%, cream boxes 39.2u tall, 1u gap, 14u bold
labels, underline on hover and on the current page; lemon pill at 74.18% (25.83% wide, 38.6u tall)
with a left-scrolling marquee "Your neighborhood spot for every kind of night" (4 repeats ×2,
17px gaps, ~73.5px/s, pauses on hover). Mobile: logo 40u tile, hamburger 40u cream button
(32u icon). Hamburger opens a full-screen `#E6E6E6` dialog (fade 0.4s
cubic-bezier(.645,.045,.355,1)): close X 20u top-right, two cream menu items (354u wide), marquee
pill below. Escape/close/link click dismiss it.

## Footer (all pages)

Desktop 258.8u: social icons (20u, 12u gap) centred at 33u; address (2 lines), email + phone at
118.6u; policy links left (underlined) at 206u; wordmark logo centred; copyright right-aligned.
Mobile 451.3u: everything centred and stacked (links order: Accessibility, Privacy, Terms, Refund).

## Home `/`

1. **Hero** 645.7u / 608u — background video (1080p desktop, 480p mobile; object-position top on
   desktop, 28% x on mobile). H1 "Where Good Times And Great Drinks Meet" (Mansalva 44u, −0.05em,
   cream), paragraph, cream "See Our Menu" button → /menus.
2. **About collage** 1694.4u / 1094.5u — absolute collage: photo (airy), H2 "More Than a Bar,
   We're Your Second Home" (84u, line-height .75, −0.1em), bottle (parallax), street photo (airy),
   story paragraph, cocktail photo (airy), lime and face cut-outs (rotate 14°, spin).
3. **Menu teaser** — paper texture card (min-height 569.1u / 700.2u), "A Taste of / What's
   Shaking", Restaurant Menus widget (3 items, name 24px bold, desc/price 15px), "Explore Full
   Menu" dark button directly under the widget. Section height grows with the fixed-px widget.
4. **Events** — "There's Always / Something On" (84u), bold lead + 400-weight paragraph.
5. **Margaritas + gallery** — two wiggling margarita PNGs; Wix fast gallery 4×306u squares
   (desktop grid, 6u gap) / swipeable scroll-snap strip (mobile, 294u window, 20px gap).
   Clicking opens the white expand view (fade .3s): image `contain` from 77px to bottom−40px,
   close 17px at 40/40, chevrons at left/right 40px, no wrap-around, arrows/Escape/swipe.
6. **Testimonials** 1071u / 560u — lime background video, slideshow of 3 quotes (24u/20u bold
   lemon, −0.05em) autoplaying every 5s with a 3s bottom-to-top slide (CSS `ease`), no visible
   controls; hidden play/pause button bottom-right (visible on focus/hover).

### Motion (from the page's interactions JSON + CSS, verified with scroll sampling)

| Element | Trigger | Effect |
|---|---|---|
| Bottle | view progress, range `cover −25vh → cover 100% +25vh` | translateY −25vh → +25vh, linear |
| Lime, face | view progress, range `cover 0 → 100%` | rotate(14° −180° → 14° +180°), scale 1 → 0.7 |
| 3 photos | pointer move (desktop, hover devices) | rotate −10° × dx/max(cx, W−cx), translateY −5px × dy/max(cy, H−cy); `transform 5s ease-out` |
| Margaritas | view enter | Wiggle loop: 3.7s / 3.3s cycles, keyframes 10°/−8°/6°/−4°/0° (first with −10px lift) |

Clone values match the source within 0.1px / 0.1° at 1280x800 (bottle −177.06 vs −177.05px at
scrollY 400; lime matrix at scrollY 800 `-0.2809,-0.9086` vs `-0.2812,-0.9085`).

## Menus `/menus`

One Restaurant Menus widget ("Our Crafted Menu", description, sections Starters / Signature
Cocktails / Classic Cocktails, 25 items). Fixed px: title 40/44 500, description 16/22.4, section
title 24 bold, hr 1px rgba(29,29,29,.3), items 16px top / 12px bottom padding, name 15px, price
16px. Desktop: 3 columns, 60px gap, price right; mobile: single column, price under name, 40px
section gaps. Top padding 100.9u (100u mobile). The source also publishes a second menu ("A Taste
of What's Shaking", shown on the home teaser); `?menu=a-taste-of-whats-shaking` renders an error
state on the source, so no tab/query state exists to reproduce.

## Contact `/contact`

Section 1 (625u / 822.9u): H1 "Drop By or Drop Us a Line", lead, email/phone, bar photo,
"Opening Hours" with four day/time rows. Section 2 (961u / 724u): "Contact form" (Wix Forms:
First name*, Last name*, Email*, Write a message, SEND; fixed px fields 34.75px, fill
rgba(160,157,144,.15) → rgba(70,67,54,.18) on hover/focus; errors "Enter a first name." etc.
with icon in Madefor 14px; success "Thanks for submitting! / We'll get back to you shortly." for
8s). Map 453.5u / 200u: Google map centred on 37.77065, −122.387301 with an open info window
"Location Name / Directions".

## Policy pages

`/privacy-policy`, `/refund-policy`, `/terms-and-conditions`: one section each; H1 Mansalva 52u/28u,
H2 Neue Haas 500 32u/24u, body 15u/16u; blocks at measured offsets (left 50.1u desktop, 24u
mobile). `/accessibility-statement`: dark (#1D1D1D) intro band with cream text, then six cream
sections; lists use disc bullets (0.5em margin, 1.3em padding), placeholders in 500 italic.
