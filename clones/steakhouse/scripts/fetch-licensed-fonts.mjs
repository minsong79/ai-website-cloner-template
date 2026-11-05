// Downloads the commercial fonts the source template loads from Wix (static.parastorage.com).
// They are licensed to Wix and are NOT committed: run `npm run fetch-fonts` locally.
// Output: public/assets/fonts/licensed/ (git-ignored). The site falls back to
// Arial Black / Helvetica stacks when these files are missing.
import { mkdir, writeFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "public", "assets", "fonts", "licensed");

const FONTS = [
  {
    file: "lulo-clean-w01-one-bold.woff2",
    url: "https://static.parastorage.com/fonts/v2/e3cf8f7e-35c4-446f-9b93-de93e989f66f/v1/lulo-clean-w01-one-bold.woff2",
  },
  {
    file: "avenir-lt-w01-35-light.woff2",
    url: "https://static.parastorage.com/fonts/v2/af36905f-3c92-4ef9-b0c1-f91432f16ac1/v1/avenir-lt-w01_35-light1475496.woff2",
  },
];

await mkdir(outDir, { recursive: true });

for (const font of FONTS) {
  const target = path.join(outDir, font.file);
  try {
    const s = await stat(target);
    if (s.size > 0 && !process.argv.includes("--force")) {
      console.log(`✓ ${font.file} already present (${s.size} bytes)`);
      continue;
    }
  } catch {
    // not downloaded yet
  }
  const res = await fetch(font.url, { headers: { Origin: "https://www.wix.com", Referer: "https://www.wix.com/" } });
  if (!res.ok) {
    console.error(`✗ ${font.file}: HTTP ${res.status}`);
    process.exitCode = 1;
    continue;
  }
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.subarray(0, 4).toString("latin1") !== "wOF2") {
    console.error(`✗ ${font.file}: response is not a WOFF2 file`);
    process.exitCode = 1;
    continue;
  }
  await writeFile(target, buf);
  console.log(`↓ ${font.file} (${buf.length} bytes)`);
}
