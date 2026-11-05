// Downloads the template's images, video and open-licensed fonts into public/assets/.
// Source: https://www.wix.com/demone2/the-gilded-finch-1 (Wix template "Bar (Friendly)").
// Images are requested from Wix's media service at ~2x their largest rendered size.
// Usage: node scripts/download-assets.mjs
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "public", "assets");
const media = (file, box) =>
  `https://static.wixstatic.com/media/${file}/v1/fit/w_${box},h_${box},q_85/${file}`;
const video = (id, q) => `https://video.wixstatic.com/video/${id}/${q}/mp4/file.mp4`;

const assets = [
  ["images/hero-pour-poster", media("c837a6_127afc7fdca1464a9f84bd65b0b794eef000.jpg", 1920)],
  ["video/hero-pour-1080p.mp4", video("c837a6_127afc7fdca1464a9f84bd65b0b794ee", "1080p")],
  ["video/hero-pour-480p.mp4", video("c837a6_127afc7fdca1464a9f84bd65b0b794ee", "480p")],
  ["images/about-bar-table", media("c837a6_8898dcc6e8924789b88bf1f80a65fbd8~mv2.jpg", 1400)],
  ["images/about-bottle", media("c837a6_7cd20c0b0707494e9bbce40ae65c060e~mv2.png", 1716)],
  ["images/about-street-crowd", media("c837a6_c28b03e1804b4aab96c688b248b1f66b~mv2.jpg", 1100)],
  ["images/about-cocktail-pour", media("c837a6_44e0f3f92c734860bd6f64a5eeda390a~mv2.jpg", 1410)],
  ["images/about-lime", media("c837a6_89c64ef2b8754810a0b7c5be1287f1dc~mv2.png", 480)],
  ["images/about-face-cherry", media("c837a6_d4928952397f4616983ab42ebccd7b13~mv2.png", 762)],
  ["images/menu-paper-texture", media("c837a6_2273e2ce537d406db1b08e6d1968ed4f~mv2.jpg", 1920)],
  ["images/events-margarita-1", media("c837a6_b0d12c6453614aec854ae27cc11a96d5~mv2.png", 730)],
  ["images/events-margarita-2", media("c837a6_3a2db426ef26493da350d0d7a537f624~mv2.png", 640)],
  ["images/gallery-bar-counter", media("c837a6_4a748030839045978fca7f9d80fb9b18~mv2.jpg", 1920)],
  ["images/gallery-chalkboard", media("c837a6_4fe01a913f3f4357923188b12eec38b8~mv2.jpg", 1920)],
  ["images/gallery-beanie", media("c837a6_f89493fe6ec640e2902d0e074fbde7a6~mv2.jpg", 1920)],
  ["images/gallery-pasta", media("c837a6_3619d21ced604753870269363675dd8c~mv2.jpg", 1920)],
  ["images/testimonial-lime-poster", media("c837a6_d1ea6bc35a9a4e3b8adc602375a0d086f000.jpg", 1920)],
  ["video/testimonial-lime-1080p.mp4", video("c837a6_d1ea6bc35a9a4e3b8adc602375a0d086", "1080p")],
  ["video/testimonial-lime-480p.mp4", video("c837a6_d1ea6bc35a9a4e3b8adc602375a0d086", "480p")],
  ["images/contact-bar", media("c837a6_f5024b5d59e14075b06c2207bcaac989~mv2.jpg", 1516)],
  ["svg/logo-bird.svg", "https://static.wixstatic.com/shapes/c837a6_697aecd34e7741148e429c65966312d1.svg"],
  ["svg/logo-wordmark.svg", "https://static.wixstatic.com/shapes/c837a6_fc060ab0b6e9435d917178d93bbadef2.svg"],
  // Open-licensed fonts (SIL OFL), as served to the source page.
  ["fonts/mansalva-latin.woff2", "https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/mansalva/v15/aWB4m0aacbtDfvq5NKliKY_NdDBh.woff2"],
  ["fonts/wix-madefor-text-latin.woff2", "https://static.parastorage.com/tag-bundler/api/v1/fonts-cache/googlefont/woff2/s/wixmadefortext/v13/-W_lXI_oSymQ8Qj-Apx3HGN_Hu1RZiUR5y4coj8.woff2"],
];

const extFor = (type) =>
  ({ "image/jpeg": ".jpg", "image/png": ".png", "image/webp": ".webp", "image/avif": ".avif" })[type] ?? "";

for (const [name, url] of assets) {
  const res = await fetch(url, { headers: { accept: "image/png,image/jpeg,video/mp4,font/woff2,*/*;q=0.5" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const type = (res.headers.get("content-type") ?? "").split(";")[0];
  const file = path.extname(name) ? name : name + extFor(type);
  const dest = path.join(root, file);
  await mkdir(path.dirname(dest), { recursive: true });
  const bytes = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, bytes);
  console.log(`${file}\t${type}\t${bytes.length}\t${url}`);
}
