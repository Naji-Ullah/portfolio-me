import { execFileSync } from "node:child_process";
import { writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ORIGIN = "https://naji.codes";
const dist = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../dist");

function lastModified() {
  try {
    const iso = execFileSync("git", ["log", "-1", "--format=%cI"], {
      encoding: "utf8",
    }).trim();
    if (iso) return iso.slice(0, 10);
  } catch {
    // No git history available (e.g. a shallow CI checkout) — fall through.
  }
  return new Date().toISOString().slice(0, 10);
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${ORIGIN}/</loc>
    <lastmod>${lastModified()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>
`;

const file = path.join(dist, "sitemap.xml");
writeFileSync(file, xml);
console.log(`sitemap: wrote ${path.relative(process.cwd(), file)}`);
