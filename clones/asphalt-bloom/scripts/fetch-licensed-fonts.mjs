#!/usr/bin/env node
// Downloads the commercial (Monotype) font files that the source Wix template
// loads from static.parastorage.com. They are NOT committed to the repository:
// the files land in public/assets/fonts/licensed/, which is git-ignored.
// Without them the site falls back to Helvetica Neue / Helvetica / Arial.
//
// Usage: npm run fetch-fonts
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "assets", "fonts", "licensed");

const fonts = [
  {
    file: "helvetica-w01-roman.woff2",
    url: "https://static.parastorage.com/fonts/v2/2af1bf48-e783-4da8-9fa0-599dde29f2d5/v1/helvetica-w01-roman.woff2",
  },
];

async function exists(file) {
  try {
    const info = await stat(file);
    return info.size > 0;
  } catch {
    return false;
  }
}

await mkdir(outDir, { recursive: true });

for (const font of fonts) {
  const target = path.join(outDir, font.file);
  if (await exists(target)) {
    console.log(`skip  ${font.file} (already present)`);
    continue;
  }
  const res = await fetch(font.url);
  if (!res.ok) {
    console.error(`fail  ${font.file}: HTTP ${res.status}`);
    process.exitCode = 1;
    continue;
  }
  const bytes = Buffer.from(await res.arrayBuffer());
  // woff2 files start with the "wOF2" signature.
  if (bytes.subarray(0, 4).toString("latin1") !== "wOF2") {
    console.error(`fail  ${font.file}: response is not a woff2 file`);
    process.exitCode = 1;
    continue;
  }
  await writeFile(target, bytes);
  console.log(`saved ${font.file} (${bytes.length} bytes)`);
}
