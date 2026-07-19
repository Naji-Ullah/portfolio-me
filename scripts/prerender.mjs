// Injects the server-rendered app into dist/index.html after `vite build`,
// so crawlers and first paint get the complete document with zero JS.
import { readFileSync, writeFileSync, rmSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");
const ssrEntry = pathToFileURL(path.join(dist, ".ssr/entry-ssr.js")).href;

const { render } = await import(ssrEntry);
const html = render();

const file = path.join(dist, "index.html");
const marker = '<div id="root"></div>';
let doc = readFileSync(file, "utf8");
if (!doc.includes(marker)) {
  throw new Error("prerender: could not find the #root marker in dist/index.html");
}
doc = doc.replace(marker, `<div id="root">${html}</div>`);
writeFileSync(file, doc);
rmSync(path.join(dist, ".ssr"), { recursive: true, force: true });
console.log(`prerender: injected ${(html.length / 1024).toFixed(1)} kB of HTML into dist/index.html`);
