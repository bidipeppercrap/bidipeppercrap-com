// Generates apps/web/public/og.png (1200x630) from the brand logo.
// Mirrors the site header: black background, emerald-900 rounded card, white logo.
// Re-run with: bun scripts/generate-og.mjs
import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Resvg } from "@resvg/resvg-js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const logo = readFileSync(join(root, "public/main_logo.svg"), "utf8");
const d = logo.match(/\sd="([^"]+)"/)?.[1];
if (!d) throw new Error("Could not find the logo path data in main_logo.svg");

// Logo path lives in a 343.95832 x 39.6875 space (after the inner translate).
// Scale it to ~860px wide and center it in the emerald card.
const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#000000"/>
  <rect x="100" y="190" width="1000" height="250" rx="48" fill="#064e3b"/>
  <path transform="translate(170,265.4) scale(2.5003) translate(-25.401551,-162.70231)" fill="#ffffff" d="${d}"/>
</svg>`;

const png = new Resvg(svg, { fitTo: { mode: "width", value: 1200 } })
  .render()
  .asPng();
writeFileSync(join(root, "public/og.png"), png);
console.log("Wrote public/og.png (1200x630)");
