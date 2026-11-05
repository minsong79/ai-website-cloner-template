# Asset map — Asphalt Bloom Cafe (Wix wh-1378)

Source media base: `https://static.wixstatic.com/media/`. Photos were requested as JPEG (`.jpg` output name) at about 2x their largest rendered size, capped by the original's size; bytes were checked with `file`.

## Images (`public/assets/images/`)

| Local file | Source (media id + transform) | Size | Type | Used by |
|---|---|---|---|---|
| `texture.jpg` | `c837a6_4cc3dd88d7d347bb931a01e0642fcbba~mv2.jpg/v1/fill/w_1280,h_1298,q_85` (original 1280×1298) | 1280×1298, 138 KB | image/jpeg | grunge overlay on every dark section and the header (25 % opacity, 27 % on the home hero), cropped per section by focal point |
| `hero-pour.jpg` | `84770f_b9af54c37b6b410fbb08789b1628879e~mv2.png/v1/fill/w_1024,h_1024,q_85` (original 1024²) | 1024×1024, 199 KB | image/jpeg | home hero, left photo (object-fit: cover) |
| `hero-friends.jpg` | `84770f_34f8eae061bb497f8c8a4a9a3d0cf7d6~mv2.png/v1/fill/w_1024,h_1024,q_85` | 1024×1024, 228 KB | image/jpeg | home hero, right photo |
| `cafe-interior.jpg` | `84770f_b087cfc59f2e409a8eceb7b23126fa47~mv2.png/v1/fill/w_2560,h_1466,q_85` (original 2560×1466) | 2560×1466, 524 KB | image/jpeg | home full-width section background |
| `card-cappuccino.jpg` | `84770f_e4944d079f694fbea8fcfaf2e845cf87~mv2.png/v1/crop/x_176,y_297,w_664,h_664/fill/w_664,h_664,q_85` | 664×664, 59 KB | image/jpeg | home card 1 (source crop preserved) |
| `card-croissant.jpg` | `84770f_d73007c816e14864b0c1be8e83cbb986~mv2.png/v1/crop/x_54,y_47,w_946,h_946/fill/w_946,h_946,q_85` | 946×946, 188 KB | image/jpeg | home card 2 |
| `card-iced-latte.jpg` | `84770f_4c97a93c5eb84471b334fa59d54e7e71~mv2.png/v1/crop/x_103,y_121,w_817,h_815/fill/w_817,h_815,q_85` | 817×815, 102 KB | image/jpeg | home card 3 |
| `find-your-corner.jpg` | `84770f_22d9b9ca8cf5445e97ad1690367655c3~mv2.png/v1/fill/w_1600,h_900,q_85` (original 3840×2160) | 1600×900, 345 KB | image/jpeg | home "Find your corner" |
| `our-story-storefront.jpg` | `84770f_b5f4a70929a54ee9a222998dc1d1614d~mv2.png/v1/crop/x_178,y_102,w_2938,h_2058/fill/w_1520,h_1065,q_85` (original 3840×2160) | 1520×1065, 349 KB | image/jpeg | Our Story photo (source crop preserved) |

## Vector art (`public/assets/svg/`)

| Local file | Source | Notes |
|---|---|---|
| `wordmark-light.svg` | `https://static.wixstatic.com/shapes/c837a6_a830844b906c409ab20bd048a7be405f.svg` | header + mobile-menu logo (#dedddb letters, #fe7f24 flower), 350×52 viewBox |
| `wordmark-dark.svg` | `https://static.wixstatic.com/shapes/c837a6_adbf3e68042c49fca2e4442670a4b394.svg` | footer logo (#0a0a0a letters, orange flower) |
| `doodle-croissant.svg` | inline SVG of `#comp-moudu0rb` (home) | color kept by `<style>[data-color="1"]{fill:#fe7f24}` inside the file |
| `doodle-moka-pot.svg` | inline SVG of `#comp-moud4hcw` | orange |
| `doodle-hearts.svg` | inline SVG of `#comp-motymryu` | orange |
| `doodle-asterisk.svg` | inline SVG of `#comp-moudunqo` / `mpnqoj8d` / `mpnqope1` (identical) | orange |
| `speech-bubble-round.svg` | inline SVG of `#comp-motzc5zt` / `#comp-motzcbsq` (identical files) | #bfbfbf |
| `speech-bubble-wide.svg` | inline SVG of `#comp-motzcdw2` | #bfbfbf |
| inline in `SiteHeader.tsx` | Wix hamburger (`viewBox 0 0 200 200`) and close (`viewBox 0 0 600 592`) icons | fill #dedddb |

## Fonts (`public/assets/fonts/`)

| Local file | Source | License |
|---|---|---|
| `anton-latin-400.woff2` | `static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/anton/v11/1Ptgg87LROyAm3Kz-C8CSKlv.woff2` | Google Fonts, OFL (committed) |
| `ibm-plex-mono-latin-400.woff2` | `…/googlefont/woff2/s/ibmplexmono/v19/-F63fjptAgt5VM-kVkqdyU8n1i8q131nj-o.woff2` (normal 400) | OFL (committed) |
| `ibm-plex-mono-latin-400-italic.woff2` | `…/ibmplexmono/v19/-F6pfjptAgt5VM-kVkqdyU8n1ioa1XdgregdFA.woff2` (italic 400, used on the accessibility page) | OFL (committed) |
| `licensed/helvetica-w01-roman.woff2` | `static.parastorage.com/fonts/v2/2af1bf48-e783-4da8-9fa0-599dde29f2d5/v1/helvetica-w01-roman.woff2` | Monotype, commercial — **not committed**; `npm run fetch-fonts` downloads it; fallback Helvetica Neue / Helvetica / Arial |

Anton italic (accessibility headings with "[only add if relevant]") is synthesized by the browser, as on the source.

## Other

| Local | Source | Notes |
|---|---|---|
| `src/app/icon.png` | `https://www.wix.com/favicon.ico` (PNG bytes, 192×192) | the template uses the Wix favicon |
| map | Google Maps JS widget (dark custom style, center 37.7749,-122.4194, z15) | replaced by a keyless `maps.google.com/maps?q=…&output=embed` iframe with a CSS dark tint and a recreated marker/info window |

Not used: 14 `static.wixstatic.com/shapes/11062b_*.svg` / `82fcd3_*.svg` icons the mobile viewer preloads for Wix's (hidden) quick-action bar, and the Menus app's `menus_side_image.jpeg` (not displayed in this layout).
