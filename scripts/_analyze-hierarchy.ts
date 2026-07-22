import fs from 'fs';
import path from 'path';
import { getTaxonomyDetails } from '../src/lib/seo/taxonomyEngine';

const BASE = 'src/content/knowledge';
function walk(dir: string): string[] {
  let out: string[] = [];
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out = out.concat(walk(p));
    else if (e.name.endsWith('.md')) out.push(p);
  }
  return out;
}
function fm(txt: string, key: string): string {
  const m = txt.match(new RegExp('^' + key + ':\\s*"?([^"\\n]+)"?', 'm'));
  return m ? m[1].trim() : '';
}

const files = walk(BASE).filter(f => !f.includes('/Locations/'));
const mains = new Map<string, {cats: Set<string>, subs: Set<string>, leaves: number}>();
let bad = 0;
for (const f of files) {
  const rel = path.relative(BASE, f).replace(/\.md$/, '');
  const txt = fs.readFileSync(f, 'utf-8');
  const entry = { id: rel, data: { category: fm(txt,'category'), subCategory: fm(txt,'subCategory'), title: fm(txt,'title') } };
  let tax;
  try { tax = getTaxonomyDetails(entry); } catch { bad++; continue; }
  if (!tax) { bad++; continue; }
  const mk = tax.mainCategory.slug;
  if (!mains.has(mk)) mains.set(mk, {cats:new Set(),subs:new Set(),leaves:0});
  const m = mains.get(mk)!;
  m.cats.add(tax.category.slug);
  m.subs.add(tax.category.slug + '/' + tax.subCategory.slug);
  m.leaves++;
}

let tLeaves=0,tCats=0,tSubs=0;
const rows = [...mains.entries()].sort((a,b)=>b[1].leaves-a[1].leaves);
console.log('PILLAR(mainCategory.slug)'.padEnd(28), 'CATS'.padStart(6), 'SUBS'.padStart(6), 'LEAVES'.padStart(7), 'PAGES'.padStart(7));
for (const [k,v] of rows) {
  const pages = 1 + v.cats.size + v.subs.size + v.leaves; // hub + cats + subs + leaves
  tLeaves+=v.leaves; tCats+=v.cats.size; tSubs+=v.subs.size;
  console.log(k.padEnd(28), String(v.cats.size).padStart(6), String(v.subs.size).padStart(6), String(v.leaves).padStart(7), String(pages).padStart(7));
}
const totalPages = mains.size + tCats + tSubs + tLeaves;
console.log('-'.repeat(60));
console.log('TOTALS:', 'pillars='+mains.size, 'cats='+tCats, 'subs='+tSubs, 'leaves='+tLeaves, 'bad/unrouted='+bad);
console.log('GENERATED KNOWLEDGE PAGES (hub+cat+sub+leaf, excl. Locations):', totalPages);
