# Page brief — The Whale's Tail (Wix template 3094 "펍 / Pub")

Source: https://www.wix.com/demone2/pub-the-whale (classic Wix editor site: 980 px stage, strips/columns that stretch, separate 320 px mobile layout served by user agent; iPhone UA gets `<meta viewport width=320>`).

## Breakpoints and units (clone)

All measurements are Wix design pixels, written as `calc(var(--u) * N)` in CSS modules (mobile-first, desktop in `@media (min-width: 768px)`).

| Viewport | Layout | `--u` |
|---|---|---|
| ≥ 980 px | desktop layout, fluid parts use % of the width (boxes are `max(980px, 100% − 160px)`, columns 35/65, 45/55, 50/50) | `1px` |
| 768–979 px | desktop layout scaled so the 980 px stage fits (source shows a horizontal scrollbar here) | `(100vw − scrollbar) / 980` |
| < 768 px | Wix mobile layout (320 px design) scaled to the screen exactly as the source scales it on phones (iPhone 13 = ×1.21875) | `(100vw − scrollbar) / 320` |

`ScrollbarWidth` publishes `--sbw` so desktop browsers with classic scrollbars never overflow. Verified no horizontal overflow at 390, 768, 1024, 1440, 1920.

## Tokens

- Colors: ink `#20241A` (page), sand `#E1D0B6` (text/beige bands), sage `#CFD3C7` (hover/secondary text), cream `#F0E7D9`, olive `#514213`, rust `#4D2107`, umber `#38342E` (mobile Menu page background), moss `#4C5045` (order tabs bar, About image column), slate `#2B4553` (About image column), form error `#E86215`.
- Glass header/tagline: frame `rgba(225,208,182,.55)` with 1 px gaps, cells `rgba(32,36,26,.85)`. Footer frame `rgba(225,208,182,.6)`, cells ink.
- Type: Fahkwang 400/700 (headings, buttons), Marmelad 400 (body). Desktop scale: 44/1.2 (h1), 42/1.2 (section titles), 22/1.4 (kickers), 16/1.6 (body), buttons Fahkwang 700 16. Mobile: 26/1.2 titles, 17/1.4 kickers, 15/1.6 body.

## Global behaviour

- Header is in flow (not sticky). Desktop: framed box 100 px tall at y 61, logo + "The Whale's Tail", nav (hover → sage), Log In (avatar), cart bag with count. Mobile: 93 px bar with logo, cart, hamburger → full-screen menu (current page in sage, Log In at top).
- Log In → Wix "Demo Mode" full-screen notice (reproduced; adds a small "not connected" note).
- Cart icon: opens the side cart when it has items, otherwise goes to `/cart-page`.
- Entrance animation (Wix Float In): 1200 ms `cubic-bezier(.445,.05,.55,.95)`, from 60 px below (badge: 60 px left) at opacity 0, plays once on entering the viewport. Applied to the same components as the source (home texts/buttons/happy-hour box/badge/drop-by card items, About texts).
- Background parallax (measured with wheel input): media layer is `max(100vh, container)` tall and sits at `0.2 × container top` in the viewport (moves at 20 % of scroll speed). Desktop only; mobile shows plain cover images. Used by hero, bartender column, special column, drop-by strip, both About image columns.
- Home-only vertical tabs fixed at the right edge (`top: 50% − 61 px` and `50% + 79 px`, 45×142, hover inverts to sand). Mobile-only back-to-top button after 300 px of scroll.

## Home `/` (desktop height 6189 = source)

1. Hero 890 px (strip starts 11 px below page top, under the header): bar photo parallax; tagline box at y 159 (55/45 cells): "Drink, Eat, Enjoy." 44 px, "Pub & Eatery | Est. 2035" 20 px.
2. Make Yourself at Home (1183): sand band 709 px; kicker + 2-line uppercase title at x 100; 45 % column with bartender photo from y 404 (619 tall, olive under it); right column content box 539 px centered: paragraph, "Book a Table" → `/reservations`; HAPPY HOUR box 500×255 (12PM – 3PM — line — Monday – Thursday).
3. This Month's Special (748): left half content box 490 (+58 inset), "Our Menu" → `/menu`; right half drink photo; SPECIAL badge at `50% − 44 px`, y 528, rotated 26°.
4. Happy Moments (949): heading x 110; slideshow `W − 160` × 722, 4 images with focal-point crops, horizontal slide 400 ms; "Next" always (forward loop through repeats), "Previous" only after moving; swipe on touch.
5. Upcoming Events (711): Wix Events list, 3 rows (Movie Night 5 PM, Open Stage 6 PM, Trivia Night 7 PM). Desktop: title click/hover shows chevron and expands date, address, description; RSVP → `/event-details/<slug>`. Mobile: title links to the event, "More info / Less info" toggles.
6. Reserve a Table (362, anchor `#bookatable`): party size (1–6 guests), date picker (today default, past days disabled), time (8:00 AM–10:00 PM, 15 min); "Find a Table" → "Online reservations are currently unavailable" dialog (this is what the demo shows).
7. Drop by (805): rust strip + parallax photo, sand capsule card 455×589 (radius 300) with sparkles, address, opening hours.
8. Footer (530): framed rows 382/345/549 and 63/893/255/64; social links (Facebook, Instagram, Yelp! → real URLs), contacts, newsletter (required email + consent; errors "Enter an email address like example@mysite.com." / "Check the box to continue."; success "Thanks, we received your submission."), © line with Wix link.

Mobile home: 5004 design px (clone 6105 px at 390 = 5009 design px).

## Menu `/menu` (1888)
Sand box `max(980, W−160)` with 80 px padding; "Menu" 44 px; sections Starters / Sides & Snacks / Main Dishes, each 3-column grid (gap 104) of name (Fahkwang 700 16), description, price. Hot Wings shows 300 gr $12.99 / 400 gr $14.99 in sage (low contrast, as on the source). Mobile: umber page, sand box inset 20, single column with 1 px separators.

## About `/about` (2266)
Two framed rows: text (Our Story, "Pub & Eatery / Est. 2035" 40 px, two paragraphs) + bar photo (parallax, moss under it); cheers photo (parallax, slate) + "We Are Open for Private Events", paragraph, contact line (email link, phone).

## Order Online `/order-online` (2969)
Framed panel: title, intro, "Accepting Orders" pill, Pickup/Delivery toggle, pickup time + Change (opens "How would you like to receive your order?" dialog with Pickup / Delivery, ASAP / schedule, delivery address), pickup address. Sticky section tabs bar (moss) with scroll-spy; "View Cart (n)" appears when the cart has items. Item cards 2-column (568×184 at 1440, image 152). Item dialog: photo, name, description, labels (Vegan / Hot), required variant radio (Hot Wings), notes, quantity, "Add to cart | $price". Item quantity badge on cards. State lives in `localStorage` (`whales-tail-cart-v1`).

## Cart `/cart-page` (1258) and Checkout `/checkout`
Empty: "My cart", "Cart is empty", "Continue Browsing". With items: lines (thumb, name, variant, qty counter, line price, remove), promo code and note toggles, Order summary (Subtotal, Pickup FREE, Total), Checkout, Secure Checkout. Side cart drawer (420 px) with the same data, Checkout and View Cart. Checkout reproduces the demo's white Wix checkout: "We can’t accept online payments — Contact us for help with your order." with the order summary (mobile: collapsible summary bar).

## Reservations `/reservations` (1402)
Breadcrumb, "Make a reservation", fields (dark theme), divider, 15 time slots from the chosen time (5 columns desktop / 3 mobile, selected slot tinted), "Reserve Now" → unavailable dialog.

## Event details `/event-details/{movie-night,open-stage,trivia-night}` (1879) and `/…/form`
Title, date | location, description, RSVP; Time & Location with RSVP; map (Google embed); Share this event (Facebook, X, LinkedIn share URLs with the source event URL). RSVP → `/event-details/<slug>/form`: "Add your details" (First name*, Last Name*, Email*, SUBMIT) with event summary box; local confirmation "Thank you! An email with all the event info was sent to you." + Add to Calendar / Share.
