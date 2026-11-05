# Asset map

All files live under `public/assets/`. Downloaded by `scripts/download-assets.mjs` (committed) and, for the commercial font, `scripts/fetch-licensed-fonts.mjs` (not committed). Images were requested from Wix media at about 2x their largest rendered size (`v1/fit/w_N,h_N,q_85`); the content type is the one returned by the server.

| Local path | Source URL | Dimensions | Type | Bytes | Used for |
|---|---|---|---|---|---|
| `images/hero-pour-poster.jpg` | https://static.wixstatic.com/media/c837a6_127afc7fdca1464a9f84bd65b0b794eef000.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_127afc7fdca1464a9f84bd65b0b794eef000.jpg | ~1662x1080 (from player metadata) | image/jpeg | 232402 | Home hero video poster |
| `video/hero-pour-1080p.mp4` | https://video.wixstatic.com/video/c837a6_127afc7fdca1464a9f84bd65b0b794ee/1080p/mp4/file.mp4 | ~1662x1080 (from player metadata) | video/mp4 | 4836830 | Home hero background video (desktop) |
| `video/hero-pour-480p.mp4` | https://video.wixstatic.com/video/c837a6_127afc7fdca1464a9f84bd65b0b794ee/480p/mp4/file.mp4 | ~738x480 (from player metadata) | video/mp4 | 1304517 | Home hero background video (<=1023px) |
| `images/about-bar-table.jpg` | https://static.wixstatic.com/media/c837a6_8898dcc6e8924789b88bf1f80a65fbd8~mv2.jpg/v1/fit/w_1400,h_1400,q_85/c837a6_8898dcc6e8924789b88bf1f80a65fbd8~mv2.jpg | 1400x1400 | image/jpeg | 487897 | About collage, top-left photo (pointer tilt) |
| `images/about-bottle.png` | https://static.wixstatic.com/media/c837a6_7cd20c0b0707494e9bbce40ae65c060e~mv2.png/v1/fit/w_1716,h_1716,q_85/c837a6_7cd20c0b0707494e9bbce40ae65c060e~mv2.png | 723x1716 | image/png | 1737831 | About collage bottle (scroll parallax) |
| `images/about-street-crowd.jpg` | https://static.wixstatic.com/media/c837a6_c28b03e1804b4aab96c688b248b1f66b~mv2.jpg/v1/fit/w_1100,h_1100,q_85/c837a6_c28b03e1804b4aab96c688b248b1f66b~mv2.jpg | 1100x1100 | image/jpeg | 275694 | About collage street photo (pointer tilt) |
| `images/about-cocktail-pour.jpg` | https://static.wixstatic.com/media/c837a6_44e0f3f92c734860bd6f64a5eeda390a~mv2.jpg/v1/fit/w_1410,h_1410,q_85/c837a6_44e0f3f92c734860bd6f64a5eeda390a~mv2.jpg | 1410x1410 | image/jpeg | 446330 | About collage cocktail photo (pointer tilt) |
| `images/about-lime.png` | https://static.wixstatic.com/media/c837a6_89c64ef2b8754810a0b7c5be1287f1dc~mv2.png/v1/fit/w_480,h_480,q_85/c837a6_89c64ef2b8754810a0b7c5be1287f1dc~mv2.png | ~480x480 (from player metadata) | image/png | 210373 | About collage lime cut-out (scroll spin) |
| `images/about-face-cherry.png` | https://static.wixstatic.com/media/c837a6_d4928952397f4616983ab42ebccd7b13~mv2.png/v1/fit/w_762,h_762,q_85/c837a6_d4928952397f4616983ab42ebccd7b13~mv2.png | 651x762 | image/png | 476910 | About collage face cut-out (scroll spin) |
| `images/menu-paper-texture.jpg` | https://static.wixstatic.com/media/c837a6_2273e2ce537d406db1b08e6d1968ed4f~mv2.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_2273e2ce537d406db1b08e6d1968ed4f~mv2.jpg | 1920x1213 | image/jpeg | 194423 | Menu teaser paper background |
| `images/events-margarita-1.png` | https://static.wixstatic.com/media/c837a6_b0d12c6453614aec854ae27cc11a96d5~mv2.png/v1/fit/w_730,h_730,q_85/c837a6_b0d12c6453614aec854ae27cc11a96d5~mv2.png | 459x730 | image/png | 93311 | Events margarita (wiggle) |
| `images/events-margarita-2.png` | https://static.wixstatic.com/media/c837a6_3a2db426ef26493da350d0d7a537f624~mv2.png/v1/fit/w_640,h_640,q_85/c837a6_3a2db426ef26493da350d0d7a537f624~mv2.png | 371x640 | image/png | 79265 | Events margarita (wiggle) |
| `images/gallery-bar-counter.jpg` | https://static.wixstatic.com/media/c837a6_4a748030839045978fca7f9d80fb9b18~mv2.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_4a748030839045978fca7f9d80fb9b18~mv2.jpg | 1920x1920 | image/jpeg | 708038 | Gallery item 1 + expand view |
| `images/gallery-chalkboard.jpg` | https://static.wixstatic.com/media/c837a6_4fe01a913f3f4357923188b12eec38b8~mv2.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_4fe01a913f3f4357923188b12eec38b8~mv2.jpg | 1280x1920 | image/jpeg | 629856 | Gallery item 2 + expand view |
| `images/gallery-beanie.jpg` | https://static.wixstatic.com/media/c837a6_f89493fe6ec640e2902d0e074fbde7a6~mv2.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_f89493fe6ec640e2902d0e074fbde7a6~mv2.jpg | 1920x1920 | image/jpeg | 715153 | Gallery item 3 + expand view |
| `images/gallery-pasta.jpg` | https://static.wixstatic.com/media/c837a6_3619d21ced604753870269363675dd8c~mv2.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_3619d21ced604753870269363675dd8c~mv2.jpg | 1920x1920 | image/jpeg | 639656 | Gallery item 4 + expand view |
| `images/testimonial-lime-poster.jpg` | https://static.wixstatic.com/media/c837a6_d1ea6bc35a9a4e3b8adc602375a0d086f000.jpg/v1/fit/w_1920,h_1920,q_85/c837a6_d1ea6bc35a9a4e3b8adc602375a0d086f000.jpg | 1440x1440 | image/jpeg | 291306 | Testimonials video poster |
| `video/testimonial-lime-1080p.mp4` | https://video.wixstatic.com/video/c837a6_d1ea6bc35a9a4e3b8adc602375a0d086/1080p/mp4/file.mp4 | ~1080x1080 (from player metadata) | video/mp4 | 3636225 | Testimonials background video (desktop) |
| `video/testimonial-lime-480p.mp4` | https://video.wixstatic.com/video/c837a6_d1ea6bc35a9a4e3b8adc602375a0d086/480p/mp4/file.mp4 | ~480x480 (from player metadata) | video/mp4 | 530813 | Testimonials background video (<=1023px) |
| `images/contact-bar.jpg` | https://static.wixstatic.com/media/c837a6_f5024b5d59e14075b06c2207bcaac989~mv2.jpg/v1/fit/w_1516,h_1516,q_85/c837a6_f5024b5d59e14075b06c2207bcaac989~mv2.jpg | 1516x1516 | image/jpeg | 596182 | Contact page photo |
| `svg/logo-bird.svg` | https://static.wixstatic.com/shapes/c837a6_697aecd34e7741148e429c65966312d1.svg | 32x32 viewBox | image/svg+xml | 10912 | Header logo (bird on cream tile) |
| `svg/logo-wordmark.svg` | https://static.wixstatic.com/shapes/c837a6_fc060ab0b6e9435d917178d93bbadef2.svg | 58x43 viewBox | image/svg+xml | 7664 | Footer wordmark |
| `fonts/mansalva-latin.woff2` | https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/mansalva/v15/aWB4m0aacbtDfvq5NKliKY_NdDBh.woff2 |  | font/woff2 | 53644 | Mansalva 400 (SIL OFL) - script headings |
| `fonts/wix-madefor-text-latin.woff2` | https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/wixmadefortext/v13/-W_lXI_oSymQ8Qj-Apx3HGN_Hu1RZiUR5y4coj8.woff2 |  | font/woff2 | 20260 | Wix Madefor Text variable (SIL OFL) - form error messages |

## Licensed fonts (fetched locally, gitignored)

| Local path | Source URL | Weight/style |
|---|---|---|
| `fonts/licensed/neue-haas-unica-pro-400.woff2` | https://static.parastorage.com/fonts/v2/43aff0f4-50c1-48ba-babd-ee13cf442d34/v1/neue-haas-unica-pro.latin.woff2 | 400 normal |
| `fonts/licensed/neue-haas-unica-pro-500.woff2` | https://static.parastorage.com/fonts/v2/e3f3713c-72bd-4679-b0df-7d709c4ee5ac/v1/neue-haas-unica-pro.latin.woff2 | 500 normal |
| `fonts/licensed/neue-haas-unica-pro-500-italic.woff2` | https://static.parastorage.com/fonts/v2/392e787d-5362-48ab-b5a0-b697f8c542a4/v1/neue-haas-unica-pro.latin.woff2 | 500 italic |
| `fonts/licensed/neue-haas-unica-pro-700.woff2` | https://static.parastorage.com/fonts/v2/8c415121-43c6-4dba-9e85-7657003c5930/v1/neue-haas-unica-pro.latin.woff2 | 700 normal |

## Inline SVG (src/components/site/icons.tsx)

Facebook / Instagram / TikTok social icons, hamburger, menu-dialog close, gallery close and chevrons, background-video play/pause glyphs and the Wix Forms error glyph were copied from the source DOM paths.

## Not reproduced

- `https://www.wix.com/favicon.ico` (Wix brand favicon) - the scaffold favicon is kept.
- Google Maps tiles: replaced by a keyless Google Maps embed iframe centred on 37.77065, -122.387301.
