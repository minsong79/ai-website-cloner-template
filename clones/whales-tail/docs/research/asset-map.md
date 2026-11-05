# Asset map — The Whale's Tail

Source URL → local path. Images were requested as `v1/fit/w_N,h_N,q_85,enc_auto` (about 2× the largest rendered size, capped at 2560 px); every file was checked to be real JPEG bytes.

## Images

| Local path | Source URL | Size (px) | Type | Bytes | Use |
|---|---|---|---|---|---|
| `/assets/images/hero-bar.jpg` | https://static.wixstatic.com/media/84770f_5326d94e9f8346eaa4dd5edbca3ae217~mv2.jpg | 2560×1706 | image/jpeg | 432900 | Home hero parallax background |
| `/assets/images/bartender.jpg` | https://static.wixstatic.com/media/84770f_75bd83c6c2ff429cb783376a6c1f074b~mv2.jpg | 1800×1431 | image/jpeg | 325400 | Home "Make Yourself at Home" column (object-position 100% 50%) |
| `/assets/images/special-drink.jpg` | https://static.wixstatic.com/media/c837a6_2bdb7cf2d6d54ca4a40719da5b2872fb~mv2.jpg | 1333×2000 | image/jpeg | 329792 | Home "This Month’s Special" column |
| `/assets/images/moments-1.jpg` | https://static.wixstatic.com/media/c837a6_92fef946d8ec460da8285b5729e3b306~mv2.jpg | 2179×1545 | image/jpeg | 283888 | Happy Moments slide 1 (fp 0.85/0.76) |
| `/assets/images/moments-2.jpg` | https://static.wixstatic.com/media/c837a6_53a891944ae24814a618981afcb80664~mv2.jpg | 2560×1700 | image/jpeg | 856824 | Happy Moments slide 2 (fp 0.86/0.08) |
| `/assets/images/moments-3.jpg` | https://static.wixstatic.com/media/c837a6_ecab072c02014209b57088c3dee95363~mv2.jpg | 2560×1706 | image/jpeg | 622770 | Happy Moments slide 3 |
| `/assets/images/moments-4.jpg` | https://static.wixstatic.com/media/c837a6_74148f2f57ec4c26a8368e0805a8f689~mv2.jpg | 2560×1706 | image/jpeg | 485851 | Happy Moments slide 4 (fp 0.29/0.19) |
| `/assets/images/drop-by.jpg` | https://static.wixstatic.com/media/c837a6_5707aea2484d4e5ebfc50ab7e62615cf~mv2.jpg | 2000×3000 | image/jpeg | 393717 | Home "Drop by" parallax background |
| `/assets/images/about-bar.jpg` | https://static.wixstatic.com/media/c837a6_017e5b7237504a2b9f85ec360b88f8d0~mv2.jpg | 1600×1031 | image/jpeg | 227810 | About "Our Story" column |
| `/assets/images/about-cheers.jpg` | https://static.wixstatic.com/media/c837a6_61a7a9389e064f1f9d1d1dab34e049d7~mv2.jpg | 1800×1454 | image/jpeg | 349038 | About "Private Events" column |
| `/assets/images/item-bacon-rolls.jpg` | https://static.wixstatic.com/media/c837a6_58ac812549104345b2ddfc8ddd0b51b2~mv2.jpeg | 1400×933 | image/jpeg | 239261 | Menu item |
| `/assets/images/item-onion-rings.jpg` | https://static.wixstatic.com/media/c837a6_bc1d8abadd8d4d74b9a8f3716a7a7d0c~mv2.jpg | 1275×971 | image/jpeg | 172299 | Menu item |
| `/assets/images/item-brussels-sprouts.jpg` | https://static.wixstatic.com/media/c837a6_b8f483f9ad3942a1834d1d83688a975a~mv2.jpg | 1400×1050 | image/jpeg | 242654 | Menu item |
| `/assets/images/item-home-fries.jpg` | https://static.wixstatic.com/media/c837a6_632407d941c04e92a156da1606957194~mv2.jpeg | 1400×933 | image/jpeg | 248443 | Menu item |
| `/assets/images/item-chickpeas.jpg` | https://static.wixstatic.com/media/c837a6_36e29dbaddd64ed09fa0354304400a47~mv2.jpg | 1400×1050 | image/jpeg | 204842 | Menu item |
| `/assets/images/item-nachos.jpg` | https://static.wixstatic.com/media/c837a6_436bfc9c09a343009a46965347a969df~mv2.jpg | 1400×929 | image/jpeg | 164019 | Menu item |
| `/assets/images/item-lamb-burger.jpg` | https://static.wixstatic.com/media/c837a6_c911ff805da74b0e9c0ee310e48bb693~mv2.jpg | 1400×933 | image/jpeg | 239924 | Menu item |
| `/assets/images/item-hot-wings.jpg` | https://static.wixstatic.com/media/c837a6_0c42cc5dd02942faa7575be9d7773984~mv2.jpg | 1399×1050 | image/jpeg | 234904 | Menu item |
| `/assets/images/item-taco-triple.jpg` | https://static.wixstatic.com/media/c837a6_7ee944f628a242a7a4b17a8c8ea79e9e~mv2.jpg | 1400×933 | image/jpeg | 270417 | Menu item |

## Vector art

| Local path | Source | Notes |
|---|---|---|
| `/assets/svg/whale-logo.svg` | inline SVG `#comp-kzpjz4bf` (header) / `#comp-kzppnnit` (footer) | single colour `#E1D0B6`; Wix `<style>` removed |
| `/assets/svg/special-badge.svg` | inline SVG `#comp-kzwr4sws` | "SPECIAL" badge, 139×139 rotated 25.99° (mobile 78×78, 18.26°) |
| `src/components/site/Icons.tsx` | inline Wix SVG icons (avatar, cart bag with count, sparkle, slideshow arrow, chevrons, calendar, close, qty ±, trash, tag, note, lock, clock, pin, vegan, hot, share icons, error circle) | rendered with `currentColor` |
| Back-to-top (inline in `Overlays.tsx`) | `#BACK_TO_TOP_BUTTON` SVG (mobile) | colours `#20241A` / `#CFD3C7` / `#A3A79C` |

## Fonts

| Local path | Source URL | License |
|---|---|---|
| `/assets/fonts/fahkwang-400-latin.woff2` | https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/fahkwang/v16/Noax6Uj3zpmBOgbNpOqIuLx7PiZ5.woff2 | OFL (Google Fonts) |
| `/assets/fonts/fahkwang-700-latin.woff2` | https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/fahkwang/v16/Noa26Uj3zpmBOgbNpOIznalWHCtTkBjw.woff2 | OFL (Google Fonts) |
| `/assets/fonts/marmelad-400-latin.woff2` | https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/marmelad/v10/Qw3eZQdSHj_jK2e-8uFMEecuCFR9.woff2 | OFL (Google Fonts) |
| `/assets/fonts/wix-madefor-text-vf.woff2` | https://static.parastorage.com/services/santa-resources/resources/viewer/user-site-fonts/fonts/WixMadefor/v3/WixMadeforTextVF_W_Wght.woff2 | OFL (Wix Madefor, published by Wix; checkout page only) |

No commercial fonts are rendered by this template (`npm run fetch-fonts` is a documented no-op). Form error text names `Madefor, "Helvetica Neue", Helvetica, Arial` but the source never loads a file for it, so both render the system Helvetica/Arial fallback.

## External embeds

- Event map: Google Maps embed `https://maps.google.com/maps?q=37.7703718,-122.3871248&z=14&output=embed` (source uses the Wix Events Google-map iframe for the same coordinates).
