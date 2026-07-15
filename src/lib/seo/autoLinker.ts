// Entity auto-linker (MRS §44 — internal linking). Builds a registry of known entities
// (herbs/spices, medical conditions, disease topics, fruits) and provides helpers to:
//   1. findEntityUrl(name)   — exact/near lookup for structured items (e.g. a recipe
//      ingredient name, a location's "local fruits" chip) so it can be rendered as a link.
//   2. linkifyText(text)     — scans a prose string and wraps the FIRST mention of each
//      known entity name in a link, leaving everything else untouched.
//
// Deliberately conservative: only links exact whole-word matches against real, existing
// pages (no fuzzy/partial matching, no guessing at URLs) so nothing links to a 404.

import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from '../clinical_databases';
import { TOPICS } from '../../data/topics';
import { FRUITS_DATA, GRAINS_DATA, VEGETABLES_DATA, SPICES_DATA, SEEDS_DATA, PULSES_DATA } from '../foods_database';
import { LOCATIONS_DATA } from '../locationsData';
import { INTERNATIONAL_COUNTRIES } from '../internationalData';
import { RECIPES } from '../recipes_database';

// Canonical /knowledge/... URL for each of the 12 fruit pages migrated 2026-07-15 (round 5) —
// src/content/knowledge/Fruits/... is canonical; /foods/fruits/* now redirects into this.
// Computed from taxonomyEngine.ts's getTaxonomyDetails() routing for each file's folder.
export const FRUIT_KNOWLEDGE_URL: Record<string, string> = {
  mango: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/mango',
  banana: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/banana',
  guava: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/guava',
  papaya: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/papaya',
  pomegranate: '/knowledge/fruits/berries-aggregate-fruits/aggregate-fruits/pomegranate',
  amla: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/amla',
  apple: '/knowledge/fruits/pome-stone-fruits/drupes/apple',
  watermelon: '/knowledge/fruits/melons/watermelons/watermelon',
  orange: '/knowledge/fruits/citrus-fruits/sweet-citrus/orange',
  jackfruit: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/jackfruit',
  pineapple: '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/pineapple',
  'sapota-chikoo': '/knowledge/fruits/tropical-exotic-fruits/creamy-dense-tropicals/sapota-chikoo',
};

// Canonical /knowledge/... URL for each of the 9 grain pages migrated 2026-07-15 (round 7),
// computed from taxonomyEngine.ts's getTaxonomyDetails() routing for each file's folder.
export const GRAIN_KNOWLEDGE_URL: Record<string, string> = {
  rice: '/knowledge/grains/cereal-grains/oryza-species/oryza-sativa-indica',
  wheat: '/knowledge/grains/cereal-grains/triticum-species/triticum-aestivum',
  oats: '/knowledge/grains/ancient-heritage-cereals/avena-secale-genus/avena-sativa',
  barley: '/knowledge/grains/ancient-heritage-cereals/avena-secale-genus/hordeum-vulgare',
  bajra: '/knowledge/grains/coarse-small-grains/pennisetum-eleusine-genus/pennisetum-glaucum',
  ragi: '/knowledge/grains/coarse-small-grains/pennisetum-eleusine-genus/eleusine-coracana',
  jowar: '/knowledge/grains/coarse-small-grains/sorghum-genus/sorghum-bicolor',
  'proso-millet': '/knowledge/grains/coarse-small-grains/pennisetum-eleusine-genus/panicum-miliaceum',
  quinoa: '/knowledge/grains/pseudocereals/amaranthaceae-seeds/chenopodium-quinoa',
};

// Canonical /knowledge/... URL for each of the 12 vegetable pages migrated 2026-07-15
// (round 9), computed from taxonomyEngine.ts's getTaxonomyDetails() routing for each file's folder.
export const VEGETABLE_KNOWLEDGE_URL: Record<string, string> = {
  spinach: '/knowledge/vegetables/leafy-green-vegetables/amaranthaceae-greens/spinacia-oleracea',
  kale: '/knowledge/vegetables/cruciferous-vegetables/leafy-heading-brassicas/brassica-oleracea-var-sabellica',
  cabbage: '/knowledge/vegetables/cruciferous-vegetables/leafy-heading-brassicas/brassica-oleracea-var-capitata',
  broccoli: '/knowledge/vegetables/cruciferous-vegetables/flowering-brassicas/brassica-oleracea-var-italica',
  cauliflower: '/knowledge/vegetables/cruciferous-vegetables/flowering-brassicas/brassica-oleracea-var-botrytis',
  carrot: '/knowledge/vegetables/root-tuber-vegetables/true-root-vegetables/daucus-carota',
  beetroot: '/knowledge/vegetables/root-tuber-vegetables/true-root-vegetables/beta-vulgaris',
  onion: '/knowledge/vegetables/bulb-stem-vegetables/edible-bulbs/allium-cepa',
  tomato: '/knowledge/vegetables/fruiting-vegetables/solanaceae-crops/solanum-lycopersicum',
  potato: '/knowledge/vegetables/root-tuber-vegetables/tuberous-vegetables/solanum-tuberosum',
  'sweet-potato': '/knowledge/vegetables/root-tuber-vegetables/tuberous-vegetables/ipomoea-batatas',
  eggplant: '/knowledge/vegetables/fruiting-vegetables/solanaceae-crops/solanum-melongena',
};

// Canonical /knowledge/... URL for each of the 5 spice pages migrated 2026-07-15 (round 10),
// computed from taxonomyEngine.ts's getTaxonomyDetails() routing for each file's folder.
// Deliberately limited to spices with no existing /herb/{id} page (see SPICES_DATA comment).
export const SPICE_KNOWLEDGE_URL: Record<string, string> = {
  'coriander-seed': '/knowledge/spices/seed-derived-spices/apiaceae-aromatic-seeds/coriandrum-sativum',
  'fennel-seed': '/knowledge/spices/seed-derived-spices/apiaceae-aromatic-seeds/foeniculum-vulgare',
  nutmeg: '/knowledge/spices/seed-derived-spices/myristicaceae-seeds/myristica-fragrans-inner',
  allspice: '/knowledge/spices/fruit-berry-spices/schisandraceae-myrtaceae-fruits/pimenta-dioica',
  'white-pepper': '/knowledge/spices/fruit-berry-spices/piperaceae-berries/piper-nigrum-white',
};

// Canonical /knowledge/... URL for each of the 11 seed pages migrated 2026-07-15 (round 13),
// computed from taxonomyEngine.ts's getTaxonomyDetails() routing for each file's folder.
export const SEED_KNOWLEDGE_URL: Record<string, string> = {
  'pumpkin-seeds': '/knowledge/seeds/pepos-pit-seeds/cucurbitaceae-seeds/cucurbita-pepo',
  'sunflower-seeds': '/knowledge/seeds/oilseeds/asteraceae-brassicaceae-oilseeds/helianthus-annuus',
  flaxseed: '/knowledge/seeds/oilseeds/linaceae-oilseeds/linum-usitatissimum',
  'chia-seeds': '/knowledge/seeds/pseudocereal-mucilaginous-seeds/mucilaginous-seeds/salvia-hispanica',
  'sesame-seeds': '/knowledge/seeds/oilseeds/pedaliaceae-fabaceae-oilseeds/sesamum-indicum',
  'psyllium-husk': '/knowledge/seeds/pseudocereal-mucilaginous-seeds/mucilaginous-seeds/plantago-ovata',
  'hemp-seeds': '/knowledge/seeds/pepos-pit-seeds/cannabaceae-seeds/cannabis-sativa-seeds',
  'watermelon-seeds': '/knowledge/seeds/pepos-pit-seeds/cucurbitaceae-seeds/citrullus-lanatus-seeds',
  buckwheat: '/knowledge/seeds/pseudocereal-mucilaginous-seeds/broadleaf-pseudocereals/fagopyrum-esculentum',
  'amaranth-seed': '/knowledge/seeds/pseudocereal-mucilaginous-seeds/broadleaf-pseudocereals/amaranthus',
  'poppy-seed': '/knowledge/seeds/spice-seeds/papaveraceae-spice-seeds/papaver-somniferum',
};

// Canonical /knowledge/... URL for each of the 10 pulse pages migrated 2026-07-15 (round 14),
// computed from taxonomyEngine.ts's getTaxonomyDetails() routing for each file's folder.
export const PULSE_KNOWLEDGE_URL: Record<string, string> = {
  chickpeas: '/knowledge/pulses-legumes/chickpeas-peas/cicer-botanicals/cicer-arietinum-desi',
  lentils: '/knowledge/pulses-legumes/lentils/split-decorticated-lentils/lens-culinaris-red-split',
  'kidney-beans': '/knowledge/pulses-legumes/common-kidney-beans/large-phaseolus-beans/phaseolus-vulgaris-red',
  'mung-beans': '/knowledge/pulses-legumes/east-asian-vigna-beans/high-protein-vigna-grams/vigna-radiata',
  'urad-dal': '/knowledge/pulses-legumes/east-asian-vigna-beans/high-protein-vigna-grams/vigna-mungo',
  'pigeon-pea': '/knowledge/pulses-legumes/specialty-broad-oil-legumes/tropical-subtropical-pulses/cajanus-cajan',
  'green-peas': '/knowledge/pulses-legumes/chickpeas-peas/pisum-botanicals/pisum-sativum-green',
  peanuts: '/knowledge/pulses-legumes/specialty-broad-oil-legumes/subterranean-oil-legumes/arachis-hypogaea',
  soybeans: '/knowledge/pulses-legumes/specialty-broad-oil-legumes/subterranean-oil-legumes/pulse-soy-1',
  'fava-beans': '/knowledge/pulses-legumes/specialty-broad-oil-legumes/cool-season-vine-legumes/vicia-faba',
};

export interface LinkableEntity {
  name: string;      // display name as it appears in prose (e.g. "Turmeric")
  url: string;        // canonical page for this entity
  kind: 'herb' | 'spice' | 'condition' | 'topic' | 'fruit' | 'grain' | 'vegetable' | 'seed' | 'pulse';
}

function buildRegistry(): LinkableEntity[] {
  const entries: LinkableEntity[] = [];

  for (const h of HERBS_SPICES_DATA) {
    if (!h.name || !h.id) continue;
    const kind = h.category === 'spice' ? 'spice' : 'herb';
    // Many entries carry a regional-name parenthetical, e.g. "Cumin (Jeera)", "Cardamom
    // (Elaichi)", "Ceylon Cinnamon" — strip it so plain prose mentions ("Cumin" in a recipe)
    // actually match, and also link the bare regional alias itself ("Jeera").
    const cleanName = h.name.replace(/\s*\([^)]*\)\s*$/, '').trim().replace(/^Ceylon\s+/, '');
    entries.push({ name: cleanName, url: `/herb/${h.id}`, kind });
    const alias = h.name.match(/\(([^)]+)\)\s*$/);
    if (alias && alias[1] && alias[1] !== cleanName) {
      entries.push({ name: alias[1].split(',')[0].trim(), url: `/herb/${h.id}`, kind });
    }
  }

  for (const c of MEDICAL_CONDITIONS_DATA) {
    if (!c.name || !c.id) continue;
    // Strip parenthetical aliases for the link label match, e.g. "MASLD (Fatty Liver)" -> "MASLD"
    const cleanName = c.name.replace(/\s*\([^)]*\)\s*$/, '').trim();
    entries.push({ name: cleanName, url: `/condition/${c.id}`, kind: 'condition' });
  }

  for (const t of TOPICS) {
    if (!t.title || !t.id) continue;
    entries.push({ name: t.title, url: `/topic/${t.id}`, kind: 'topic' });
  }

  for (const f of FRUITS_DATA) {
    if (!f.name || !f.id) continue;
    entries.push({ name: f.name, url: FRUIT_KNOWLEDGE_URL[f.id] || `/foods/fruits/${f.id}`, kind: 'fruit' });
  }

  for (const g of GRAINS_DATA) {
    if (!g.name || !g.id) continue;
    const url = GRAIN_KNOWLEDGE_URL[g.id];
    if (!url) continue;
    // "Pearl Millet (Bajra)" -> link both "Pearl Millet" and the regional name "Bajra".
    const baseName = g.name.replace(/\s*\([^)]*\)\s*$/, '').trim();
    const aliasMatch = g.name.match(/\(([^)]+)\)\s*$/);
    entries.push({ name: baseName, url, kind: 'grain' });
    if (aliasMatch && aliasMatch[1] && aliasMatch[1] !== baseName) {
      entries.push({ name: aliasMatch[1].split(',')[0].trim(), url, kind: 'grain' });
    }
  }

  for (const v of VEGETABLES_DATA) {
    if (!v.name || !v.id) continue;
    const url = VEGETABLE_KNOWLEDGE_URL[v.id];
    if (!url) continue;
    entries.push({ name: v.name, url, kind: 'vegetable' });
    // Regional/romanized alias in the Hindi field, e.g. "पालक (Palak)" -> also link "Palak",
    // since recipe ingredient lists sometimes use the regional name.
    const hiAlias = v.regionalNames?.hi?.match(/\(([^)]+)\)/);
    if (hiAlias && hiAlias[1]) {
      entries.push({ name: hiAlias[1].trim(), url, kind: 'vegetable' });
    }
  }

  for (const s of SPICES_DATA) {
    if (!s.name || !s.id) continue;
    const url = SPICE_KNOWLEDGE_URL[s.id];
    if (!url) continue;
    entries.push({ name: s.name, url, kind: 'spice' });
    const hiAlias = s.regionalNames?.hi?.match(/\(([^)]+)\)/);
    if (hiAlias && hiAlias[1]) {
      entries.push({ name: hiAlias[1].trim(), url, kind: 'spice' });
    }
  }

  for (const sd of SEEDS_DATA) {
    if (!sd.name || !sd.id) continue;
    const url = SEED_KNOWLEDGE_URL[sd.id];
    if (!url) continue;
    entries.push({ name: sd.name, url, kind: 'seed' });
    const hiAlias = sd.regionalNames?.hi?.match(/\(([^)]+)\)/);
    if (hiAlias && hiAlias[1]) {
      entries.push({ name: hiAlias[1].trim(), url, kind: 'seed' });
    }
  }

  for (const p of PULSES_DATA) {
    if (!p.name || !p.id) continue;
    const url = PULSE_KNOWLEDGE_URL[p.id];
    if (!url) continue;
    // "Pigeon Pea (Toor Dal)" -> link both "Pigeon Pea" and the regional alias "Toor Dal".
    const baseName = p.name.replace(/\s*\([^)]*\)\s*$/, '').trim();
    const parenAlias = p.name.match(/\(([^)]+)\)\s*$/);
    entries.push({ name: baseName, url, kind: 'pulse' });
    if (parenAlias && parenAlias[1] && parenAlias[1] !== baseName) {
      entries.push({ name: parenAlias[1].split('/')[0].trim(), url, kind: 'pulse' });
    }
    const hiAlias = p.regionalNames?.hi?.match(/\(([^)]+)\)/);
    if (hiAlias && hiAlias[1]) {
      entries.push({ name: hiAlias[1].split('/')[0].trim(), url, kind: 'pulse' });
    }
  }

  // Longest name first so multi-word entities (e.g. "Black Pepper") are matched before
  // a shorter overlapping one (e.g. "Pepper") could steal the match.
  entries.sort((a, b) => b.name.length - a.name.length);

  // De-dupe by lowercase name, keeping the first (longest-sorted) occurrence.
  const seen = new Set<string>();
  return entries.filter((e) => {
    const key = e.name.toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

let _registry: LinkableEntity[] | null = null;
export function getEntityRegistry(): LinkableEntity[] {
  if (!_registry) _registry = buildRegistry();
  return _registry;
}

// Exact/near lookup for a single short label — e.g. a recipe ingredient ("Turmeric", "1 tsp
// ground" stripped separately by the caller) or a location's local-produce chip ("Pomegranate").
// Strips a leading "fresh"/"ground"/"dried" qualifier and trailing plural 's' before matching.
export function findEntityUrl(rawName: string): string | null {
  if (!rawName) return null;
  const registry = getEntityRegistry();
  const cleaned = rawName
    .trim()
    .replace(/^(fresh|dried|ground|raw|organic|cooked)\s+/i, '')
    .replace(/\s+(powder|extract|oil)$/i, '')
    .toLowerCase();
  const singular = cleaned.endsWith('s') ? cleaned.slice(0, -1) : cleaned;

  for (const e of registry) {
    const n = e.name.toLowerCase();
    if (n === cleaned || n === singular) return e.url;
  }
  return null;
}

// Scans prose text and wraps the first mention of each known entity name in a link.
// Returns an HTML string (safe to pass to `set:html` on plain, non-user-authored copy —
// callers must not run this on unescaped user input).
export function linkifyText(text: string, opts: { exclude?: string[]; maxLinks?: number; linkClass?: string } = {}): string {
  if (!text) return text;
  const registry = getEntityRegistry();
  const excludeSet = new Set((opts.exclude || []).map((s) => s.toLowerCase()));
  const maxLinks = opts.maxLinks ?? 6;
  const linkClass = opts.linkClass ?? 'text-emerald-700 font-semibold hover:underline';

  let result = text;
  let linksInserted = 0;

  for (const entity of registry) {
    if (linksInserted >= maxLinks) break;
    if (excludeSet.has(entity.name.toLowerCase())) continue;

    // Whole-word, case-sensitive-ish match on the first occurrence only; skip if already
    // inside an existing <a> tag (naive check: no unclosed <a ...> before this point).
    const escaped = entity.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`\\b(${escaped})\\b`);
    const match = re.exec(result);
    if (!match) continue;

    const before = result.slice(0, match.index);
    // Don't link inside an existing anchor tag.
    const openTags = (before.match(/<a\b/gi) || []).length;
    const closeTags = (before.match(/<\/a>/gi) || []).length;
    if (openTags > closeTags) continue;

    const replacement = `<a href="${entity.url}" class="${linkClass}">${match[1]}</a>`;
    result = before + replacement + result.slice(match.index + match[1].length);
    linksInserted++;
  }

  return result;
}

export interface LocationMention { city: string; url: string; }

// Reverse lookup: "vice-versa" linking — given a food/fruit/vegetable name, find which city
// pages list it as a local specialty (loc.localFruits / loc.localVegetables) so a food page
// can link out to "featured in these locations" and a location page can link in from there.
export function getLocationsForFood(foodName: string): LocationMention[] {
  if (!foodName) return [];
  const target = foodName.trim().toLowerCase();
  const matches: LocationMention[] = [];

  const allLocs = [...LOCATIONS_DATA, ...INTERNATIONAL_COUNTRIES];
  for (const loc of allLocs) {
    const fruits = (loc as any).localFruits || [];
    const veg = (loc as any).localVegetables || [];
    const hit = [...fruits, ...veg].some((f: string) => f.toLowerCase() === target || f.toLowerCase().replace(/s$/, '') === target.replace(/s$/, ''));
    if (hit) {
      const slug = loc.city.toLowerCase().replace(/\s+/g, '-');
      matches.push({ city: loc.city, url: `/clinic/${slug}` });
    }
  }
  // De-dupe by URL, cap to a reasonable number for a page section.
  const seen = new Set<string>();
  return matches.filter((m) => (seen.has(m.url) ? false : (seen.add(m.url), true))).slice(0, 8);
}

export interface RecipeMention { id: string; title: string; url: string; image?: string; }

// Normalize an ingredient/food name for loose comparison: lowercase, strip a leading
// qualifier, strip trailing plural 's'.
function normalizeFoodName(name: string): string {
  return name
    .trim()
    .toLowerCase()
    .replace(/^(fresh|dried|ground|raw|organic|cooked)\s+/i, '')
    .replace(/\s+(powder|extract|oil)$/i, '')
    .replace(/s$/, '');
}

// "Wise-versa" linking: given a food/fruit/grain name (e.g. "Mango"), find every recipe
// that lists it as an ingredient, so a food page can show a "Recipes featuring X" section.
export function getRecipesForFood(foodName: string): RecipeMention[] {
  if (!foodName) return [];
  const target = normalizeFoodName(foodName);
  const matches: RecipeMention[] = [];

  for (const r of RECIPES) {
    const hit = (r.ingredients || []).some((ing) => normalizeFoodName(ing.name) === target);
    if (hit) matches.push({ id: r.id, title: r.title, url: `/recipe/${r.id}`, image: r.image });
  }
  return matches.slice(0, 8);
}

// Given a location's local produce (fruits/vegetables), find recipes built around any of
// those foods — surfaced on location pages as "Local Recipes" / "Favourite Dishes",
// grounded strictly in real ingredient matches (no invented per-city "famous dish" claims).
export function getRecipesForLocation(loc: { localFruits?: string[]; localVegetables?: string[] }): RecipeMention[] {
  const produce = [...(loc.localFruits || []), ...(loc.localVegetables || [])];
  if (produce.length === 0) return [];
  const targets = new Set(produce.map(normalizeFoodName));
  const matches: RecipeMention[] = [];

  for (const r of RECIPES) {
    const hit = (r.ingredients || []).some((ing) => targets.has(normalizeFoodName(ing.name)));
    if (hit) matches.push({ id: r.id, title: r.title, url: `/recipe/${r.id}`, image: r.image });
  }
  // De-dupe (shouldn't be needed given RECIPES ids are unique, but safe) and cap.
  const seen = new Set<string>();
  return matches.filter((m) => (seen.has(m.id) ? false : (seen.add(m.id), true))).slice(0, 8);
}
