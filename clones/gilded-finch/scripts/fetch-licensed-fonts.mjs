// Downloads the commercial (Monotype) "Neue Haas Unica Pro" webfont files that the
// Wix template loads from static.parastorage.com into public/assets/fonts/licensed/.
// These files are NOT committed (see .gitignore): they are licensed to Wix for use on
// Wix sites. Run `npm run fetch-fonts` locally for visual comparison only; without them
// the site falls back to the system sans-serif stack declared in globals.css.
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const dir = path.resolve(import.meta.dirname, "..", "public", "assets", "fonts", "licensed");
const base = "https://static.parastorage.com/fonts/v2";
const files = [
  ["neue-haas-unica-pro-400.woff2", "43aff0f4-50c1-48ba-babd-ee13cf442d34"],
  ["neue-haas-unica-pro-500.woff2", "e3f3713c-72bd-4679-b0df-7d709c4ee5ac"],
  ["neue-haas-unica-pro-500-italic.woff2", "392e787d-5362-48ab-b5a0-b697f8c542a4"],
  ["neue-haas-unica-pro-700.woff2", "8c415121-43c6-4dba-9e85-7657003c5930"],
];

await mkdir(dir, { recursive: true });
for (const [name, id] of files) {
  const url = `${base}/${id}/v1/neue-haas-unica-pro.latin.woff2`;
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const bytes = Buffer.from(await res.arrayBuffer());
  await writeFile(path.join(dir, name), bytes);
  console.log(`${name}\t${bytes.length} bytes\t${url}`);
}
