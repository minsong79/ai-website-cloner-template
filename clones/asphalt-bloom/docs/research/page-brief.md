# Page brief — Asphalt Bloom Cafe (Wix "Cafe (Grunge)", wh-1378)

Source: https://www.wix.com/demone2/asphalt-bloom-cafe (Wix Studio site). Evidence: Playwright captures at 1440×900, 1920×1080, 1280, 1024, iPhone 13 (390×664 @3x), Pixel 7, iPhone SE, and desktop-UA 390/800/1000. Screenshots in `docs/design-references/`.

## Responsive model (decisive finding)

- **Fully fluid (Wix Studio scaling).** Every geometry and type value is proportional to the viewport width: page height 4691 / 5864 / 6597 / 8796 px at 1024 / 1280 / 1440 / 1920 (ratio = width/1440); body text 12 / 15 / 16.875 / 22.5 px.
- **Two designs.** Desktop (≥ 1024 px, source `@media (max-width:1023px)` switch) drawn at 1440; mobile drawn at 390 and served to mobile user agents (iPhone 13, Pixel 7, iPhone SE all scale by width/390). Desktop UAs below 1024 get a "tablet" variant: the mobile structure with desktop type scaling (tiny 9 px text at 800 px).
- **Clone breakpoint choice:** `--u` = one design pixel = `100cqw/1440` at ≥ 1024 px, `100cqw/390` below. The mobile design therefore also covers tablet widths (scaled up, overflow-free; text is larger than the source's tablet variant). Container units (`.site`, header and menu panel are inline-size containers) keep classic scrollbars from causing overflow.
- Exceptions that do **not** scale (fixed px, like the Wix app widgets): Menus widget (16/28 px type, 20 px padding, 80 px section gap), Wix Forms (14/16 px type, 42 px inputs, form width scales), map info window, motion distances in px (breathe 11 px, wiggle 10 px).

## Global

- Colors: bg #262626, cards #383838, light text #dedddb, gray text #bfbfbf, orange #fe7f24 (nav, doodles, button border), menu gold #c1a67d, footer band #bfbfbf with text #262626 / #383838.
- Fonts: Anton 400 (display, uppercase, lh 0.95), helvetica-w01-roman 400 (lead 31.5/22 px, lh 1.1, tracking −0.035em; −0.05em on "Find your corner"/"The story of…"; −0.0325em hero title), IBM Plex Mono 400 (+italic) (body 16.875/16 px lh 1.25; small 15.75/14 px tracking −0.05em).
- Dark sections = #262626 + the grunge photo at 25 % opacity (27 % hero), `object-fit: cover` with per-section focal points (hero 52.1% 10.8%, signature 50.8% 80.7%, corner 50% 62.9%, street 44.5% 27.5%, others 50% 50%). Policy content sections are solid #262626.
- **Header** (fixed "pinned layer", z above content): 245.2/113.3 design px tall, rgba(38,38,38,.75) + texture 25 %. Desktop: wordmark SVG 1448.5×215.2 at (−3.1, −0.6); nav (Home/Our Story/Menu/Contact) Plex 16.875 uppercase orange, `space-between` across 1400 px with 11 px item padding, current page and hover underlined. Mobile: wordmark 368.9×54.8 at (9, 11), hamburger 42×48 centered. **Hide on scroll:** slides up (`translateY(-100%)`, 0.3 s linear) once scrolled > 400 px while moving down; reappears after ~150 px of upward scroll (measured: 100 px up = still hidden, 150 px = shown).
- **Mobile menu:** full-screen #262626 dialog, opacity fade 0.4 s cubic-bezier(.645,.045,.355,1); close X 68×68 top-right (24 px icon); items Anton 34 uppercase #dedddb centered at y 89/162/235/308, current underlined; light wordmark at (13, 438) 369×55. Body scroll locked.
- **Footer** (#bfbfbf): desktop — email/phone (22.6, 33.6), address (342.3, 33.9), FACEBOOK (1031.6) and INSTAGRAM (right-aligned to 1417.7) Helvetica 31.5, dark wordmark 1440×214 at y 205.7, bottom row T&C / Accessibility Statement / Privacy Policy (→ /accessibility-statement, as in source) / © line at y ≈ 428. Mobile — stacked centered: wordmark, INSTAGRAM, FACEBOOK, address, email, phone, legal links, ©. No hover changes on footer links.
- Page backgrounds: home/menus/contact/accessibility content starts at y=0 under the header; Our Story and Terms have a header-height spacer (Our Story's page bg #262626; Terms has none, so the translucent header shows lighter over white).

## Home (`/`) — section order, desktop px @1440 (mobile @390)

1. **Hero** 827.9 (1113.1): photos 449.7×556 at (23,261) and 449.2×558.3 at (967.9,260.2) (mobile 342×300 stacked at y 117.5 / 786.4); center column "Coffee with Character" (h1, lead #dedddb), 3-line mono text #bfbfbf, "SEE THE MENU" button 210.7×45.4, 2 px orange border, white mono text, hover underline → /menus.
2. **More than a cafe** 846.8 (470.6): Anton 93.4 heading 2 lines #bfbfbf; lead paragraph; croissant (rot 16°) and moka-pot (rot 10°) doodles.
3. **Interior photo** 910.1 (445): full-bleed background image.
4. **Our Signature Creations** 1407.1 (1688.7): heading with hearts doodle (rot −20°), subtitle, three #383838 cards 398.9×568.9 staggered at y 610 / 747.5 / 679 (mobile stacked 342 wide, 24 px padding), image square on top, Helvetica title, small mono text.
5. **Find your corner** 865.4 (646): lead title, 569.4×398.6 photo, mono paragraph.
6. **From the street** 1217.8 (1277.5): Anton heading left-aligned (centered on mobile); three hand-drawn speech bubbles (rot −6°, −10°, 4°; mobile 0°, −11°, 0°, overflowing and clipped) each with an orange asterisk, Helvetica quote #bfbfbf and right-aligned mono name.
7. Footer.

### Motion (from the source's motion CSS; reproduced in `MotionController.tsx` + `globals.css`)

| Element | Trigger | Effect |
|---|---|---|
| "Coffee with Character" | enter viewport | fade 1000 ms ease-in-out-sine |
| Mindset heading | enter | fade 1200 linear + scale 0.8→1 1200 ms ease-in-out-cubic |
| Mindset paragraph | enter | fade 1200 ms, delay 200 |
| Signature / "FROM THE STREET" / Contact heading / map | enter | fade 840 ms ease-in-sine + blur 6 px→0 1200 linear |
| Find-your-corner photo | enter | fade 960 + translateY 120 px & scale .8 → 0/1, 1200 ms ease-in-out-cubic |
| Corner paragraph | enter | fade 1000 ms, delay 200 |
| Our Story image/title (0 ms) and subtitle/body (200 ms) | enter | fade 1200 ms ease-in-out-sine |
| Cards 1/2/3 | scroll | translateY −to→+to, to = 20 / 10 / 20 vh, over the "cover" range extended by `to` |
| Croissant / moka | scroll | translateY, to = −7.5 / −17.5 vh desktop, −10 / −5 vh mobile |
| Asterisks | scroll | rotate −180°→180° (+6° base desktop) over "cover" |
| Speech bubbles | loop while visible | "breathe" translateY 0→11→−11→0 px, 7.5 s |
| Hearts | loop while visible | "wiggle" 1.4 s (+10/−8/+6/−4° and −10 px hop, rest to 100 %) |

Verified: clone transforms equal the source's at the same scroll (e.g. scroll 1000: croissant −51.8 px, moka −157.5 px; 1920 px wide at scroll 3900: cards −37.9 / −40.2 / −55.3 px in both). Entrance effects play once; `prefers-reduced-motion` disables all motion. Note: Playwright full-page screenshots resize the viewport, so scroll-linked positions in full-page comparison images differ from what a visitor sees; compare viewport shots for motion.

## Our Story (`/our-story`)
Spacer 245.2 (113.3); textured section 1401.7 (789.3): photo 569.5×399 at (432.4,156.9), lead subtitle 2 lines, Anton "BREWED FROM THE CONCRETE" (2 lines on mobile), mono body lh 1.35 with blank line between paragraphs.

## Menus (`/menus`, `?menu=artisanal-beverages` = same state)
Wix Restaurants Menus app with a single menu "ARTISANAL BEVERAGES" (page title), so no menu tabs. Heading "THE FULL GRIND" + lead subtitle, then widget at y 622 (338): sections Crafted Beverages / Artisanal Bites / Sweet Indulgences, each title (Helvetica 28 #bfbfbf) between 1 px rgba(222,221,219,.3) rules, 3-column grid (20 px gap; 1 column on mobile with 40 px gaps), item name/price #c1a67d, description #dedddb, all 16 px mono. No item modals, prices only.

## Contact (`/contact`)
Section 1 1233.6 (auto on mobile): Anton "DROP A LINE, / OR JUST DROP IN", lead "We're here. Let's talk", Wix form 512.8 wide (338.2) with 24 px padding: First name*, Last name*, Email*, Message (single line), Submit (1 px orange border; hover fills orange with dark text). Inputs 42 px, border rgba(222,221,219,.6) → solid on hover/focus, orange input text. Validation as in Wix Forms: on submit only the first invalid field shows its message and gets focus ("Enter a first name." / "Enter a last name." / "Enter an email address like example@mysite.com."); edited fields validate on blur. Success: "Thanks, we received your submission." for 8 s (local only).
Section 2 713.9 (1124.9): Location / Hours / Contact columns (mobile order Contact, Location, Hours) and the map 1396.6×434.2 (342×600) with marker + "Asphalt Bloom Cafe / Directions" info window.

## Terms and Conditions, Accessibility Statement
Template legal copy in Anton headings (78.75 / 27; mobile 30 / 20) and mono body; accessibility page starts with a light-gray (#bfbfbf) note section with dark text, italic placeholders in Plex Mono italic, bullet lists. Support-article links open wix.com in a new tab.
