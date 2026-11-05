# Wix restaurant template clones

Four standalone Next.js 16 apps, each recreating one Wix restaurant/bar template, including all of the template's pages. Every folder is independent: it has its own `package.json`, lockfile, and checks. The template app at the repository root is unchanged and ignores this folder.

| Folder | Template (Wix viewer) | Source site |
| --- | --- | --- |
| [`gilded-finch/`](gilded-finch/) | Bar (Friendly) — [`wh-1463`](https://ko.wix.com/website-template/view/html/wh-1463) | https://www.wix.com/demone2/the-gilded-finch-1 |
| [`steakhouse/`](steakhouse/) | 레스토랑 (Restaurant) — [`1807`](https://ko.wix.com/website-template/view/html/1807) | https://www.wix.com/demone2/steakhouse |
| [`whales-tail/`](whales-tail/) | 펍 (Pub) — [`3094`](https://ko.wix.com/website-template/view/html/3094) | https://www.wix.com/demone2/pub-the-whale |
| [`asphalt-bloom/`](asphalt-bloom/) | Cafe (Grunge) — [`wh-1378`](https://ko.wix.com/website-template/view/html/wh-1378) | https://www.wix.com/demone2/asphalt-bloom-cafe |

The Wix preview toolbar is not part of the clones; each app recreates only the template website.

## Run one

Node 24 or newer is required.

```bash
cd clones/steakhouse
npm ci
npm run fetch-fonts   # only in apps that use commercial fonts; see the app README
npm run dev
```

`npm run check` runs lint, typecheck, and the production build.

## Before publishing

- **Fonts:** commercial fonts that Wix licenses for its own sites (for example Neue Haas Unica, Helvetica W01, Lulo Clean) are not committed. `npm run fetch-fonts` downloads them for local reference only; license them or switch to the documented fallbacks before going live.
- **Images, copy, and branding** come from the Wix templates and belong to Wix and their owners. Replace them with your own content before publishing.
- **Wix apps** (reservations, online ordering and cart, forms, members log-in, chat) are rebuilt as working front-end UI with local state only. Nothing is sent to a server; connect a real backend before use.

Each app's own `README.md` has its route map, local-only features, and remaining known differences from the source.
