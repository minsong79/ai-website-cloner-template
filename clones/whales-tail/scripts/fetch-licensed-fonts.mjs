// Downloads commercial (non-OFL) fonts observed on the source into public/assets/fonts/licensed/.
//
// The Whale's Tail template only renders open-licensed fonts:
//   - Fahkwang 400/700 and Marmelad 400 (Google Fonts, OFL) — committed in public/assets/fonts/
//   - Wix Madefor Text (OFL, published by Wix) on the checkout page — committed
// The form error stack names "Madefor, Helvetica Neue, Helvetica, Arial", but the source never
// loads a Madefor file there, so it falls back to system Helvetica/Arial exactly like this clone.
// No commercial font files are required, so this script has nothing to fetch. It is kept so
// `npm run fetch-fonts` behaves the same across the clones in this repository.
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const target = path.join(root, "public", "assets", "fonts", "licensed");
const FONTS = []; // [{ url, file }] — none observed for this template

await mkdir(target, { recursive: true });
if (FONTS.length === 0) {
  console.log("fetch-fonts: this template uses only open-licensed fonts; nothing to download.");
}
for (const { url, file } of FONTS) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const { writeFile } = await import("node:fs/promises");
  await writeFile(path.join(target, file), Buffer.from(await res.arrayBuffer()));
  console.log(`fetched ${file}`);
}
