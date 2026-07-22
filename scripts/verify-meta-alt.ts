// scripts/autoMetaAlt.ts
/**
 * This script scans all Astro pages and updates:
 * 1. Replaces static `export const title` / `export const description` (and optional ogImage, keywords, geo)
 *    with a dynamic import of `generateMeta` and an exported meta object.
 * 2. Ensures every <img> tag has an `alt` attribute. If missing, adds `alt=""`.
 *
 * It is intentionally simple – it does not try to infer the best alt text, just guarantees the attribute exists.
 */
import { promisify } from "node:util";
import { readFile, writeFile } from "node:fs/promises";
import { glob } from "glob";

const PAGE_GLOB = "src/pages/**/*.astro";

async function processFile(filePath: string) {
  let content = await readFile(filePath, "utf8");
  let modified = false;

  // 1. Replace static meta exports with generateMeta import if they exist
  const hasStaticExports = /export const\s+(title|description)\s*=/.test(content);
  if (hasStaticExports) {
    // Insert import at top if not already present
    if (!content.includes("generateMeta")) {
      content = content.replace(/^---/m, "---\nimport { generateMeta } from '../lib/seo/generateMeta';");
    }
    // Find a content object to pass – we try to locate a variable named `article`, `food`, `herb`, etc.
    // Simple heuristic: look for a const assignment from a data source.
    const contentVarMatch = content.match(/const\s+(\w+)\s*=\s*.*?;/s);
    const contentVar = contentVarMatch ? contentVarMatch[1] : undefined;
    const metaExport = `export const { title, description, ogImage, keywords, geo } = generateMeta(${contentVar || "{}"});`;
    // Remove existing title/description exports (and optional others)
    content = content.replace(/export const\s+title\s*=.*?;\s*/s, "");
    content = content.replace(/export const\s+description\s*=.*?;\s*/s, "");
    content = content.replace(/export const\s+canonicalUrl\s*=.*?;\s*/s, "");
    content = content.replace(/export const\s+ogImage\s*=.*?;\s*/s, "");
    content = content.replace(/export const\s+keywords\s*=.*?;\s*/s, "");
    content = content.replace(/export const\s+geo\s*=.*?;\s*/s, "");
    // Insert the new meta export after the frontmatter delimiter (---)
    content = content.replace(/^---\n/, `---\n${metaExport}\n`);
    modified = true;
  }

  // 2. Ensure every <img> tag has an alt attribute
  const newContent = content.replace(/<img([^>]*?)>/g, (match, attrs) => {
    if (/\balt\s*=/.test(attrs)) return match; // already has alt
    return `<img${attrs} alt=""`;
  });
  if (newContent !== content) {
    content = newContent;
    modified = true;
  }

  if (modified) {
    await writeFile(filePath, content, "utf8");
    console.log(`✅ Updated ${filePath}`);
  }
}

async function main() {
  const files = await glob(PAGE_GLOB);
  for (const f of files) {
    await processFile(f);
  }
  console.log(`✅ Processed ${files.length} pages`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
