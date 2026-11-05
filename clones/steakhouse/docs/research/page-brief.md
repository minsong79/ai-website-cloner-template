# Page brief — Steakhouse (Wix template 1807, "레스토랑 / Restaurant")

Source: https://www.wix.com/demone2/steakhouse (viewer 1807, preview toolbar excluded).
Measured with Playwright/Chromium on the live source (desktop 1024/1440/1920 at 900px height, iPhone 13 with mobile UA). All `y` values are page coordinates at 1440 unless noted.

## Global

- **Editor type:** classic Wix. Desktop = fixed 980px stage centered, full-bleed strips. Mobile = separate 320px layout served by UA (`<meta name="viewport" content="width=320">`, so an iPhone 13 shows it scaled ×1.21875).
- **Breakpoints in the clone:** `>= 980px` desktop layout (exact source px). `< 980px` source mobile layout, every source pixel = `--u = min(100vw / 320, 1.5px)` (exact at 320–480px, then a 480px column centered between 480 and 979px; backgrounds stay full width). No horizontal overflow at 390/768/980/1024/1280/1440/1920.
- **Colors:** gold `#ae9a64`, charcoal `#323232`, mailing strip `#242323`, white; slot/selected fill `rgba(174,154,100,.1)` over charcoal (`#3e3c36`); light borders `#adadad`; error red `#df3131` (subscribe) / `#ff4040` (contact).
- **Fonts:** Lulo Clean W01 One Bold (caps-only, commercial → `npm run fetch-fonts`), Anton 400 (OFL, committed), Georgia stack `georgia, palatino, "book antiqua", "palatino linotype", serif` (system; resolves to Liberation Serif on Linux in both source and clone), Avenir LT 35 Light (commercial; Order Online card descriptions only). Roboto appears only inside third-party iframes.
- **Header (all pages):** desktop 76px gold bar, `position: sticky`. Nav ul at stage x=0,y=22, 720×30, six items stretched (flex-grow) with 0 10px label padding; 12px Lulo, line-height 30px, `#323232`; hover/current = white, `transition: color .4s`. "Log In" 12px Lulo, right edge at stage 945, hover opacity .7. Cart icon 27×23 at stage x=953 (SVG with count). Mobile: 74u gold bar, not sticky; cart 34×29 at (19,22), hamburger 50×50 at (259,11) with three 22×2 bars.
- **Anchor menu:** OUR PLACE → anchor at the top of THE RESTAURANT (+8px), CONTACT → top of CONTACT (+21px); click = smooth scroll to `anchor − header height` (936 / 5113). Current item: anchor reached the header and its strip still under the header; at the very bottom of the page HOME is current again (measured).
- **Mobile menu:** full-screen gold panel, LOG IN (13u Lulo) top center, white × at (259,11), items 207×56u centered from y=100u, current item white.
- **Footer:** charcoal, 78px (73u), "© 2035 by Steakhouse. Powered and secured by Wix" 15px Georgia gold, centered, Wix link underlined.
- **Page background:** desktop fixed layer `#323232` + steak photo at 49% opacity, 120vh tall, moves up `scrollY / maxScroll × 20vh` (measured −39px at 1200 / −180px at the end). Mobile: portrait photo, 624u tall, top-aligned, 50% opacity, scrolls with the page. The Reservations page uses a plain charcoal background (visible under the footer).
- **Chat (all pages):** desktop 64×64 gold square at right/bottom 20 with white 32px bubble; panel 340×600 (gold 80px header "RESTAURANT", green dot "We’ll reply as soon as we can", tinted body, "Write your message..." footer). Mobile: 50u gold circle at right 16u / bottom 15u; panel full screen.
- **Popup backdrops (measured):** item modal / lightbox / fulfillment = `rgba(0,0,0,.6)` + site photo at 49%; side cart = `rgba(255,255,255,.3)` + photo; reservation notice = `rgba(0,0,0,.6)`; Log In = solid charcoal "Demo Mode" screen.

## Home `/` (desktop 6426px; mobile 4688u)

| # | Section | Desktop y / height | Mobile y / height | Notes |
|---|---|---|---|---|
| 1 | Hero | 76 / 928 | 74 / 292 | transparent (page bg shows). Address strip 30px charcoal (−2px overlap), 14px italic Georgia gold. STEAKHOUSE Anton 210/189 (letter-spacing −.03em, "E" −.02em) top 313; "GREAT AMERICAN FOOD" 30/36 Lulo at stage x=38 w=911 top 508; MENU button 159×40 at stage x=410 top 564 (gold → charcoal bg + gold text on hover, .4s). Mobile: 61u / 14u / 188×42u button; phone is a `tel:` link. |
| 2 | THE RESTAURANT | 1004 / 701 | 366 / 905 | fixed bg chef photo 48% over charcoal. Title 40/48 gold top +116. Three columns (num 18px white, 96px gold 1px rule, title 25/30 gold, paragraph 15/22.5 gold) at stage x 95/440/782; boxes from measured rects. Mobile: stacked, 23u title, 19u/22.8u column titles. |
| 3 | MAKE A RESERVATION | 1705 / 857 | 1270 / 501 | fixed bg fork & knife on gold. Widget top +163, max-width 1200 + 20px padding: title 40/56 white, text 16/22.4, row of Party size / Date / Time (white 40px fields, labels 16px) + "Find a Table" 107×40 `rgba(50,50,50,.7)`. Mobile: stacked 288u. |
| 4 | STEAK PERFECTION TAKES TIME | 2562 / 758 | 1771 / 367 | fixed bg cow on charcoal; title 40/48 gold (w712), paragraph 15/22.5 gold (w604). |
| 5 | HAVE A DRINK AT THE BAR | 3320 / 798 | 2139 / 305 | fixed bg martini on gold; white title + text. |
| 6 | GALLERY | 4118 / 672 | 2444 / 540 | charcoal; title 40/48 gold; Instagram feed 4×2, each 25vw × 18.75vw (360×270 at 1440, 480×360 at 1920), min-height 460. Mobile 2 columns 134×101u, gap 12u. Hover: `rgba(0,0,0,.3)` + caption 15/25 Georgia `#f8f8f8`. Click: lightbox 980×603 (image 603², panel 377: account, ×, prev/next, caption, today's date). |
| 7 | JOIN OUR MAILING LIST | 4790 / 378 | 2984 / 338 | `#242323` + 720p grill video at 46% + 6×6 dot overlay. Desktop parallax: video top = 0.2 × strip viewport offset. Mobile: poster image only. Form 696px (24px padding): email (underline), consent checkbox, SUBSCRIBE NOW 648×41 gold. |
| 8 | CONTACT & LOCATION | 5168 / 1180 | 3322 / 1293 | charcoal. Title 40/48 white, subtitle 12/15.6 gold. Form 616px: First/Last, Email/Phone (country selector), message; 4px gold borders; SUBMIT 181×38 right. Address/hours 12/20.4 gold. Map 566×256 (Google embed, grayscale-inverted to read as the source's dark style). Chevron + GO TO TOP (smooth scroll to top). |
| — | Social bar | fixed right 20px, top `50% − 136px` | hidden | Twitter + Instagram 32px PNGs, 10px gap (home only). |

Form validation copied from the source (client-side only): "Enter an email address like example@mysite.com.", "Check the box to continue.", "Enter a first name.", "Enter a last name." — red border/underline + icon line. Success messages ("Thanks for subscribing!", "Thanks for submitting!") are Wix defaults; the source's own success state was not triggered (submitting the live demo would send data).

## Menu `/menu` (desktop 1631; mobile 2257u)

Restaurant Menus widget, single menu "Dinner Menu" (no tabs): title 40/48 gold at +83; container 980 (padding 20 50) on charcoal. Sections Steak / Side Dishes: name 25/35 Lulo gold, description 16/22.4; each dish = grey 1px rule (`rgb(128,128,128)`) + 8px, name 18px bold Georgia, price `$9.00` top-right, description 16/22.4 (36px right padding). Mobile: 19u section names, 17u bold dish names, price under the description.

## Order Online `/order-online` (desktop 1696; mobile ≈2656u)

Fluid layout with 60px gutters (mobile 27u left / 13u right). Header image 100%×320 (mobile 320u square offset 7u). ORDER ONLINE 48px Lulo; intro 16/25.6; "Accepting Orders" pill; Pickup/Delivery toggle 172×44 (selected: gold border + `#3e3c36`); pickup time + Change + pickup address row. Sticky section tabs (below the header on desktop, top 0 on mobile; active = gold underline, mobile = gold underlined text + scroll chevron) with "View Cart (n)" (180×40 gold, slides in when the cart has items; opens the side cart). "DINNER MENU" 32px + rule; sections 28px; cards `repeat(auto-fill, minmax(280px, 1fr))`, gap 24 (4 columns at 1440, 6 at 1920, 3 at 1024), 162px tall, 1px `#adadad` border, name 16px Lulo ellipsis, description Avenir 14/19.6 2-line clamp, price 16/25.6; hover scale 1.025 + white border; quantity badge (gold circle) when in cart. Item modal 700px: name 28px, description, "Important notes" textarea, Quantity stepper 120×40, divider, "Add to cart | $x" 660×40 gold. Delivery/Change → "How would you like to receive your order?" modal (Pickup/Delivery, "Deliver to:" address, Save). Mobile: full-screen item sheet, fixed bottom "View Cart (n)" bar → /cart-page.

## Reservations `/reservations` (desktop 900; mobile 1249u)

898px column: breadcrumb "Home › RESERVATIONS", title 40/56 gold (mobile: the word RESERVATION overflows and is clipped, as on the source), text 15/21, three outlined 50px fields (2px `rgba(255,255,255,.6)`), 2px gold-50% rule, "Choose an available time slot:", 15 slots from the chosen time (5 columns desktop / 3 mobile, 44px, 1px `#adadad`; selected gold border + `#3e3c36`), "Reserve Now" 121×39 gold. Dropdowns: 1–6 guests; 57 times 8:00 AM–10:00 PM every 15 minutes. Date picker: month grid, past days disabled, today gold circle.

The demo's real next step for both "Find a Table" (home) and "Reserve Now" is a white notice "ONLINE RESERVATIONS ARE CURRENTLY UNAVAILABLE / To make a reservation, contact us directly by phone. / Close"; the clone reproduces exactly that (no invented details form).

## Cart Page `/cart-page` (desktop 900; mobile 557u)

Transparent strip over the page photo. 940px content (padding 45 20 40). Empty: "My cart" 20/28 + rule, "Cart is empty" 22px, "Continue Browsing" link to `/`. With items: 608px line items (100px thumb, name, customer notes, stepper, price, remove) + "Enter a promo code" / "Add a note"; 280px "Order summary" (Subtotal, Pickup/Delivery FREE, Total 20/36, Checkout 280×42 gold, Secure Checkout). Mobile: extra Checkout button on top, stacked summary. The source's Checkout opens Wix's hosted checkout (`/checkout?checkoutId=…`, outside the cloned routes); the clone shows a local "Checkout is not connected" notice.

## Interactions summary

Scroll: sticky header + anchor highlighting, fixed-background strips, page-background parallax, mailing video parallax, sticky Order Online tabs with section highlighting. Click: nav/anchors (smooth), mobile menu, Log In (Demo Mode), chat panel, gallery lightbox (prev/next, Esc), reservation dropdowns/date picker/slots/notice, forms validation/success, item modal, add to cart (badge + header count + View Cart), side cart (steppers, remove, promo code), fulfillment modal, cart page, checkout notice. Hover: nav color, MENU button, Log In opacity, gallery overlay, card scale, slot border. Time: looping video.
