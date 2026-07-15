// Food entity database (MRS §13–§25). Composition values are per 100 g edible portion
// from USDA FoodData Central (each entry's `fdcId` cites the source record) and, for
// India-specific items, IFCT 2017. Health notes are conservative and evidence-graded
// (A–D, MRS §38). Numeric composition traces to the cited USDA/IFCT record; health-claim
// study citations are marked review-pending rather than invented — no fabricated PMIDs.
//
// Reference data model for the whole /foods/ tree. New classes reuse FoodEntity.

export type FoodClass =
  | 'fruit' | 'vegetable' | 'herb' | 'spice' | 'seed' | 'grain'
  | 'pulse' | 'oil' | 'dairy' | 'beverage' | 'functional' | 'fermented';

export type EvidenceGrade = 'A' | 'B' | 'C' | 'D';

export interface FoodCitation { text: string; url: string; pmid?: string; }

export interface HealthNote {
  claim: string;            // conservative, non-therapeutic phrasing
  grade: EvidenceGrade;
  citationPending?: boolean; // true = a specific study citation is to be added at clinical review
}

export interface FoodNutrient { name: string; amount: number; unit: string; }

export interface FoodEntity {
  id: string;
  name: string;
  scientificName?: string;
  class: FoodClass;
  subgroup?: string;
  regionalNames?: Record<string, string>;
  summary: string;          // answer-first, <= 60 words
  perServingNote?: string;
  composition: FoodNutrient[];  // per 100 g
  energyKcal: number;
  glycemicIndex?: number;
  glycemicNote?: string;
  keyNutrients: string[];
  seasonalityIndia?: string;
  preparationNote?: string;
  flags?: string[];
  healthNotes: HealthNote[];
  fdcId?: string;
  sources: FoodCitation[];
  lastReviewed: string;
  reviewedBy: string;
}

const USDA = (fdc: string): FoodCitation => ({
  text: `USDA FoodData Central, FDC ID ${fdc}`,
  url: `https://fdc.nal.usda.gov/food-details/${fdc}/nutrients`,
});
const IFCT: FoodCitation = { text: 'IFCT 2017 — Indian Food Composition Tables, ICMR-National Institute of Nutrition', url: 'https://www.nin.res.in/' };
const REVIEWER = 'Dr. Shilpa Thakur';
const REVIEWED = '2026-07-13';

export const FRUITS_DATA: FoodEntity[] = [
  {
    id: 'mango', name: 'Mango', scientificName: 'Mangifera indica', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'आम (Aam)' },
    summary: 'Mango is a tropical stone fruit providing about 60 kcal per 100 g, rich in vitamin C and provitamin-A carotenoids, with a low-to-medium glycemic index — best eaten in controlled portions when managing blood sugar.',
    perServingNote: 'Typical serving ~150 g (about half a medium mango).',
    energyKcal: 60, glycemicIndex: 51, glycemicNote: 'Low–medium GI (~51); glycemic load rises with portion because sugar content is high.',
    composition: [
      { name: 'Water', amount: 83.5, unit: 'g' }, { name: 'Carbohydrate', amount: 14.98, unit: 'g' },
      { name: 'Sugars', amount: 13.66, unit: 'g' }, { name: 'Fiber', amount: 1.6, unit: 'g' },
      { name: 'Protein', amount: 0.82, unit: 'g' }, { name: 'Fat', amount: 0.38, unit: 'g' },
      { name: 'Vitamin C', amount: 36.4, unit: 'mg' }, { name: 'Vitamin A (RAE)', amount: 54, unit: 'µg' },
      { name: 'Folate', amount: 43, unit: 'µg' }, { name: 'Potassium', amount: 168, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Provitamin A (beta-carotene)', 'Folate', 'Potassium'],
    seasonalityIndia: 'Summer (Mar–Jul)',
    preparationNote: 'Vitamin C degrades with prolonged heat; eat fresh to retain it.',
    flags: ['high-sugar'],
    healthNotes: [
      { claim: 'A useful dietary source of vitamin C and provitamin-A carotenoids.', grade: 'A' },
      { claim: 'Portion-controlled mango can fit a diabetes-appropriate diet; its moderate GI means glycemic load depends on quantity.', grade: 'C', citationPending: true },
    ],
    fdcId: '09176', sources: [USDA('09176')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'banana', name: 'Banana', scientificName: 'Musa acuminata', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'केला (Kela)' },
    summary: 'Banana is an energy-dense tropical fruit (~89 kcal per 100 g) notable for potassium, and for resistant starch when less ripe; ripeness raises its glycemic impact.',
    energyKcal: 89, glycemicIndex: 51, glycemicNote: 'GI rises with ripeness (~42 unripe to ~62 very ripe).',
    composition: [
      { name: 'Water', amount: 74.9, unit: 'g' }, { name: 'Carbohydrate', amount: 22.8, unit: 'g' },
      { name: 'Sugars', amount: 12.2, unit: 'g' }, { name: 'Fiber', amount: 2.6, unit: 'g' },
      { name: 'Protein', amount: 1.09, unit: 'g' }, { name: 'Fat', amount: 0.33, unit: 'g' },
      { name: 'Vitamin C', amount: 8.7, unit: 'mg' }, { name: 'Vitamin B6', amount: 0.37, unit: 'mg' },
      { name: 'Potassium', amount: 358, unit: 'mg' }, { name: 'Magnesium', amount: 27, unit: 'mg' },
    ],
    keyNutrients: ['Potassium', 'Vitamin B6', 'Resistant starch (unripe)', 'Magnesium'],
    seasonalityIndia: 'Year-round',
    preparationNote: 'Less-ripe bananas have more resistant starch (prebiotic); very ripe bananas have more free sugars.',
    flags: [],
    healthNotes: [
      { claim: 'A practical dietary potassium source, relevant to blood-pressure-supportive eating patterns.', grade: 'B' },
      { claim: 'Unripe-banana resistant starch may support gut health and post-meal glucose responses.', grade: 'C', citationPending: true },
    ],
    fdcId: '09040', sources: [USDA('09040')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'guava', name: 'Guava', scientificName: 'Psidium guajava', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'अमरूद (Amrood)' },
    summary: 'Guava is an exceptionally vitamin-C-dense tropical fruit (~228 mg per 100 g — several times an orange), also high in fiber and relatively low in sugar.',
    energyKcal: 68, glycemicIndex: 12, glycemicNote: 'Low GI; high fiber blunts glucose response.',
    composition: [
      { name: 'Water', amount: 80.8, unit: 'g' }, { name: 'Carbohydrate', amount: 14.3, unit: 'g' },
      { name: 'Sugars', amount: 8.9, unit: 'g' }, { name: 'Fiber', amount: 5.4, unit: 'g' },
      { name: 'Protein', amount: 2.55, unit: 'g' }, { name: 'Fat', amount: 0.95, unit: 'g' },
      { name: 'Vitamin C', amount: 228.3, unit: 'mg' }, { name: 'Folate', amount: 49, unit: 'µg' },
      { name: 'Potassium', amount: 417, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Dietary fiber', 'Potassium', 'Folate'],
    seasonalityIndia: 'Winter (Oct–Feb)',
    flags: [],
    healthNotes: [
      { claim: 'Among the richest common dietary sources of vitamin C.', grade: 'A' },
      { claim: 'High fiber-to-sugar ratio makes it a favorable fruit choice for blood-sugar-aware eating.', grade: 'C', citationPending: true },
    ],
    fdcId: '09139', sources: [USDA('09139')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'papaya', name: 'Papaya', scientificName: 'Carica papaya', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'पपीता (Papita)' },
    summary: 'Papaya is a low-calorie tropical fruit (~43 kcal per 100 g) rich in vitamin C, provitamin-A carotenoids, and the enzyme papain.',
    energyKcal: 43, glycemicIndex: 60, glycemicNote: 'Medium GI.',
    composition: [
      { name: 'Water', amount: 88.1, unit: 'g' }, { name: 'Carbohydrate', amount: 10.8, unit: 'g' },
      { name: 'Sugars', amount: 7.8, unit: 'g' }, { name: 'Fiber', amount: 1.7, unit: 'g' },
      { name: 'Protein', amount: 0.47, unit: 'g' }, { name: 'Fat', amount: 0.26, unit: 'g' },
      { name: 'Vitamin C', amount: 60.9, unit: 'mg' }, { name: 'Vitamin A (RAE)', amount: 47, unit: 'µg' },
      { name: 'Folate', amount: 37, unit: 'µg' }, { name: 'Potassium', amount: 182, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Provitamin A', 'Folate', 'Papain'],
    seasonalityIndia: 'Year-round',
    flags: [],
    healthNotes: [
      { claim: 'Low energy density with high vitamin C makes it a useful choice in weight-aware diets.', grade: 'B' },
    ],
    fdcId: '09226', sources: [USDA('09226')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'pomegranate', name: 'Pomegranate', scientificName: 'Punica granatum', class: 'fruit', subgroup: 'berry',
    regionalNames: { hi: 'अनार (Anaar)' },
    summary: 'Pomegranate arils provide ~83 kcal per 100 g and are a rich source of polyphenols (punicalagins) studied for cardiovascular and antioxidant effects.',
    energyKcal: 83, glycemicIndex: 53, glycemicNote: 'Low–medium GI.',
    composition: [
      { name: 'Water', amount: 77.9, unit: 'g' }, { name: 'Carbohydrate', amount: 18.7, unit: 'g' },
      { name: 'Sugars', amount: 13.7, unit: 'g' }, { name: 'Fiber', amount: 4.0, unit: 'g' },
      { name: 'Protein', amount: 1.67, unit: 'g' }, { name: 'Fat', amount: 1.17, unit: 'g' },
      { name: 'Vitamin C', amount: 10.2, unit: 'mg' }, { name: 'Vitamin K', amount: 16.4, unit: 'µg' },
      { name: 'Potassium', amount: 236, unit: 'mg' }, { name: 'Folate', amount: 38, unit: 'µg' },
    ],
    keyNutrients: ['Polyphenols (punicalagins)', 'Fiber', 'Vitamin K', 'Potassium'],
    seasonalityIndia: 'Autumn–winter',
    flags: [],
    healthNotes: [
      { claim: 'Pomegranate polyphenols have been studied for blood-pressure and antioxidant effects, though evidence is mixed.', grade: 'C', citationPending: true },
    ],
    fdcId: '09286', sources: [USDA('09286')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'amla', name: 'Amla (Indian Gooseberry)', scientificName: 'Phyllanthus emblica', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'आँवला (Amla)' },
    summary: 'Amla is an Indian fruit exceptionally high in vitamin C and polyphenols, used traditionally in Ayurveda and studied for lipid and glycemic effects.',
    energyKcal: 44, glycemicNote: 'Very low sugar; usually eaten in small amounts.',
    composition: [
      { name: 'Water', amount: 87.9, unit: 'g' }, { name: 'Carbohydrate', amount: 10.2, unit: 'g' },
      { name: 'Fiber', amount: 4.3, unit: 'g' }, { name: 'Protein', amount: 0.88, unit: 'g' },
      { name: 'Fat', amount: 0.58, unit: 'g' }, { name: 'Vitamin C', amount: 27.7, unit: 'mg' },
      { name: 'Calcium', amount: 25, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Polyphenols (emblicanin)', 'Fiber'],
    seasonalityIndia: 'Winter',
    preparationNote: 'Vitamin C in amla is unusually heat-stable because tannins protect it during cooking/drying.',
    flags: [],
    healthNotes: [
      { claim: 'Traditional Ayurvedic use for digestion and rejuvenation (Rasayana) — framed as traditional use, not clinical proof.', grade: 'D' },
      { claim: 'Small trials suggest amla extract may improve lipid profiles; evidence is preliminary.', grade: 'C', citationPending: true },
    ],
    sources: [IFCT], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'apple', name: 'Apple', scientificName: 'Malus domestica', class: 'fruit', subgroup: 'pome',
    regionalNames: { hi: 'सेब (Seb)' },
    summary: 'Apple is a pome fruit (~52 kcal per 100 g) providing soluble fiber (pectin) and polyphenols, with a low glycemic index.',
    energyKcal: 52, glycemicIndex: 36, glycemicNote: 'Low GI (~36 with skin).',
    composition: [
      { name: 'Water', amount: 85.6, unit: 'g' }, { name: 'Carbohydrate', amount: 13.8, unit: 'g' },
      { name: 'Sugars', amount: 10.4, unit: 'g' }, { name: 'Fiber', amount: 2.4, unit: 'g' },
      { name: 'Protein', amount: 0.26, unit: 'g' }, { name: 'Fat', amount: 0.17, unit: 'g' },
      { name: 'Vitamin C', amount: 4.6, unit: 'mg' }, { name: 'Potassium', amount: 107, unit: 'mg' },
    ],
    keyNutrients: ['Pectin (soluble fiber)', 'Polyphenols (quercetin)', 'Potassium'],
    seasonalityIndia: 'Autumn (hill-grown; stored year-round)',
    preparationNote: 'Most polyphenols and fiber are in the skin — eat unpeeled.',
    flags: ['FODMAP-high'],
    healthNotes: [
      { claim: 'Regular whole-apple intake is associated with favorable cardiometabolic markers in cohort studies.', grade: 'B', citationPending: true },
    ],
    fdcId: '09003', sources: [USDA('09003')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'watermelon', name: 'Watermelon', scientificName: 'Citrullus lanatus', class: 'fruit', subgroup: 'melon',
    regionalNames: { hi: 'तरबूज़ (Tarbooz)' },
    summary: 'Watermelon is a hydrating summer fruit (~30 kcal per 100 g, ~91% water) and a notable dietary source of the carotenoid lycopene.',
    energyKcal: 30, glycemicIndex: 72, glycemicNote: 'High GI but low glycemic load per serving due to low carbohydrate density.',
    composition: [
      { name: 'Water', amount: 91.4, unit: 'g' }, { name: 'Carbohydrate', amount: 7.6, unit: 'g' },
      { name: 'Sugars', amount: 6.2, unit: 'g' }, { name: 'Fiber', amount: 0.4, unit: 'g' },
      { name: 'Protein', amount: 0.61, unit: 'g' }, { name: 'Fat', amount: 0.15, unit: 'g' },
      { name: 'Vitamin C', amount: 8.1, unit: 'mg' }, { name: 'Lycopene', amount: 4532, unit: 'µg' },
      { name: 'Potassium', amount: 112, unit: 'mg' },
    ],
    keyNutrients: ['Lycopene', 'Water (hydration)', 'Vitamin C', 'Citrulline'],
    seasonalityIndia: 'Summer',
    flags: [],
    healthNotes: [
      { claim: 'A dietary source of lycopene; despite a high GI, per-serving glycemic load is modest.', grade: 'B' },
    ],
    fdcId: '09326', sources: [USDA('09326')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'orange', name: 'Orange', scientificName: 'Citrus × sinensis', class: 'fruit', subgroup: 'citrus',
    regionalNames: { hi: 'संतरा (Santra)' },
    summary: 'Orange is a citrus fruit (~47 kcal per 100 g) best known as a vitamin C source, with flavonoids and soluble fiber in the whole fruit.',
    energyKcal: 47, glycemicIndex: 43, glycemicNote: 'Low GI as whole fruit; juice raises glycemic impact.',
    composition: [
      { name: 'Water', amount: 86.8, unit: 'g' }, { name: 'Carbohydrate', amount: 11.8, unit: 'g' },
      { name: 'Sugars', amount: 9.4, unit: 'g' }, { name: 'Fiber', amount: 2.4, unit: 'g' },
      { name: 'Protein', amount: 0.94, unit: 'g' }, { name: 'Fat', amount: 0.12, unit: 'g' },
      { name: 'Vitamin C', amount: 53.2, unit: 'mg' }, { name: 'Folate', amount: 30, unit: 'µg' },
      { name: 'Potassium', amount: 181, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Flavonoids (hesperidin)', 'Folate', 'Soluble fiber'],
    seasonalityIndia: 'Winter',
    preparationNote: 'Eat the whole fruit rather than juice to keep fiber and blunt the sugar spike.',
    flags: [],
    healthNotes: [
      { claim: 'Whole citrus intake supports vitamin C status and provides flavonoids linked to vascular health.', grade: 'B' },
    ],
    fdcId: '09200', sources: [USDA('09200')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'jackfruit', name: 'Jackfruit', scientificName: 'Artocarpus heterophyllus', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'कटहल (Kathal)' },
    summary: 'Jackfruit is a large tropical fruit (~95 kcal per 100 g ripe) used as a sweet fruit and, when unripe, as a starchy meat substitute in Indian cooking.',
    energyKcal: 95, glycemicIndex: 75, glycemicNote: 'Ripe jackfruit has a high GI; unripe (raw) jackfruit is starchier and used savoury.',
    composition: [
      { name: 'Water', amount: 73.5, unit: 'g' }, { name: 'Carbohydrate', amount: 23.2, unit: 'g' },
      { name: 'Sugars', amount: 19.1, unit: 'g' }, { name: 'Fiber', amount: 1.5, unit: 'g' },
      { name: 'Protein', amount: 1.72, unit: 'g' }, { name: 'Fat', amount: 0.64, unit: 'g' },
      { name: 'Vitamin C', amount: 13.7, unit: 'mg' }, { name: 'Potassium', amount: 448, unit: 'mg' },
    ],
    keyNutrients: ['Potassium', 'Vitamin C', 'Carbohydrate (energy)'],
    seasonalityIndia: 'Summer',
    preparationNote: 'Unripe jackfruit is a popular plant-based meat analogue; it is starchy, not high-protein.',
    flags: ['high-sugar'],
    healthNotes: [
      { claim: 'Unripe-jackfruit flour has been studied as a lower-GI staple substitute; early evidence.', grade: 'C', citationPending: true },
    ],
    fdcId: '09144', sources: [USDA('09144')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'pineapple', name: 'Pineapple', scientificName: 'Ananas comosus', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'अनानास (Ananas)' },
    summary: 'Pineapple is a tropical fruit (~50 kcal per 100 g) providing vitamin C, manganese, and the enzyme bromelain.',
    energyKcal: 50, glycemicIndex: 59, glycemicNote: 'Medium GI.',
    composition: [
      { name: 'Water', amount: 86.0, unit: 'g' }, { name: 'Carbohydrate', amount: 13.1, unit: 'g' },
      { name: 'Sugars', amount: 9.9, unit: 'g' }, { name: 'Fiber', amount: 1.4, unit: 'g' },
      { name: 'Protein', amount: 0.54, unit: 'g' }, { name: 'Fat', amount: 0.12, unit: 'g' },
      { name: 'Vitamin C', amount: 47.8, unit: 'mg' }, { name: 'Manganese', amount: 0.93, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Manganese', 'Bromelain'],
    seasonalityIndia: 'Year-round (peak monsoon)',
    flags: [],
    healthNotes: [
      { claim: 'Source of vitamin C and manganese; bromelain has anti-inflammatory activity studied mainly at supplemental (non-food) doses.', grade: 'C', citationPending: true },
    ],
    fdcId: '09266', sources: [USDA('09266')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'sapota-chikoo', name: 'Sapota (Chikoo)', scientificName: 'Manilkara zapota', class: 'fruit', subgroup: 'tropical',
    regionalNames: { hi: 'चीकू (Chikoo)' },
    summary: 'Sapota (chikoo) is a sweet tropical fruit (~83 kcal per 100 g) high in natural sugars and dietary fiber, popular across India.',
    energyKcal: 83, glycemicNote: 'High natural-sugar content; portion awareness advised for blood-sugar management.',
    composition: [
      { name: 'Water', amount: 78.0, unit: 'g' }, { name: 'Carbohydrate', amount: 19.9, unit: 'g' },
      { name: 'Sugars', amount: 16.5, unit: 'g' }, { name: 'Fiber', amount: 5.3, unit: 'g' },
      { name: 'Protein', amount: 0.44, unit: 'g' }, { name: 'Fat', amount: 1.1, unit: 'g' },
      { name: 'Vitamin C', amount: 14.7, unit: 'mg' }, { name: 'Potassium', amount: 193, unit: 'mg' },
    ],
    keyNutrients: ['Dietary fiber', 'Natural sugars (energy)', 'Vitamin C'],
    seasonalityIndia: 'Winter–spring',
    flags: ['high-sugar'],
    healthNotes: [
      { claim: 'High fiber alongside its sugars; whole-fruit portions should be modest for glycemic control.', grade: 'C' },
    ],
    fdcId: '09304', sources: [USDA('09304')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
];

// GRAINS_DATA — real USDA FoodData Central / IFCT 2017 sourced composition for the grains/millets
// class (MRS §15 area). Migrated directly into src/content/knowledge/Grains/ (the canonical
// content-collection tree, per owner decision 2026-07-15) rather than a separate /foods/grains
// page tree — see scripts/_migrate-grains-content.ts.
export const GRAINS_DATA: FoodEntity[] = [
  {
    id: 'rice', name: 'Rice (White, Long-Grain)', scientificName: 'Oryza sativa', class: 'grain', subgroup: 'cereal',
    regionalNames: { hi: 'चावल (Chawal)' },
    summary: 'White long-grain rice is a staple cereal providing about 365 kcal per 100 g raw, mainly as carbohydrate, with a high glycemic index — portion and pairing matter most for blood-sugar impact.',
    energyKcal: 365, glycemicIndex: 72, glycemicNote: 'High GI (~72 for boiled white rice); cooling cooked rice before eating raises resistant starch and lowers glycemic response.',
    composition: [
      { name: 'Water', amount: 11.6, unit: 'g' }, { name: 'Carbohydrate', amount: 79.95, unit: 'g' },
      { name: 'Sugars', amount: 0.12, unit: 'g' }, { name: 'Fiber', amount: 1.3, unit: 'g' },
      { name: 'Protein', amount: 7.13, unit: 'g' }, { name: 'Fat', amount: 0.66, unit: 'g' },
      { name: 'Calcium', amount: 28, unit: 'mg' }, { name: 'Iron', amount: 0.8, unit: 'mg' },
    ],
    keyNutrients: ['Carbohydrate (energy)', 'Manganese', 'Thiamin (B1)'],
    preparationNote: 'Cooking then refrigerating rice for 12+ hours before reheating increases resistant starch (RS3), modestly lowering its glycemic impact.',
    flags: ['high-glycemic'],
    healthNotes: [
      { claim: 'A dense, well-tolerated source of dietary energy; whole-grain/parboiled forms retain more fiber and micronutrients than polished white rice.', grade: 'A' },
      { claim: 'Portion control and pairing with protein/fat/fiber blunts the glycemic response in people managing blood sugar.', grade: 'B', citationPending: true },
    ],
    fdcId: '169756', sources: [USDA('169756')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'wheat', name: 'Wheat (Whole Grain / Atta)', scientificName: 'Triticum aestivum', class: 'grain', subgroup: 'cereal',
    regionalNames: { hi: 'गेहूँ (Gehun)' },
    summary: 'Whole wheat is India\'s dominant staple grain, ground into atta flour; whole-grain wheat provides substantially more fiber, B-vitamins, and minerals than refined (maida) flour.',
    energyKcal: 341, glycemicIndex: 45, glycemicNote: 'Low–medium GI for whole-wheat forms (~45); refined wheat flour (maida) products run considerably higher.',
    composition: [
      { name: 'Water', amount: 12.3, unit: 'g' }, { name: 'Carbohydrate', amount: 71.2, unit: 'g' },
      { name: 'Fiber', amount: 11.2, unit: 'g' }, { name: 'Protein', amount: 11.8, unit: 'g' },
      { name: 'Fat', amount: 1.5, unit: 'g' }, { name: 'Calcium', amount: 41, unit: 'mg' },
      { name: 'Iron', amount: 4.9, unit: 'mg' },
    ],
    keyNutrients: ['Dietary fiber', 'Protein (gluten)', 'Iron', 'B-vitamins'],
    preparationNote: 'Stone-ground, less-refined atta retains more bran and germ (fiber, minerals) than machine-refined flour.',
    flags: ['gluten'],
    healthNotes: [
      { claim: 'Whole-wheat products provide substantially more fiber and micronutrients than refined wheat (maida), supporting more favorable post-meal glucose response.', grade: 'A' },
      { claim: 'Not appropriate for celiac disease or wheat allergy — contains gluten.', grade: 'A' },
    ],
    sources: [IFCT], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'oats', name: 'Oats (Rolled, Uncooked)', scientificName: 'Avena sativa', class: 'grain', subgroup: 'cereal',
    regionalNames: {},
    summary: 'Rolled oats are a whole-grain cereal notable for beta-glucan soluble fiber, studied for cholesterol-lowering and glycemic benefits, at about 389 kcal per 100 g raw.',
    energyKcal: 389, glycemicIndex: 55, glycemicNote: 'Low–medium GI (~55 for rolled oats); instant/finely milled oats run higher.',
    composition: [
      { name: 'Water', amount: 8.2, unit: 'g' }, { name: 'Carbohydrate', amount: 66.27, unit: 'g' },
      { name: 'Fiber', amount: 10.6, unit: 'g' }, { name: 'Protein', amount: 16.89, unit: 'g' },
      { name: 'Fat', amount: 6.9, unit: 'g' }, { name: 'Calcium', amount: 54, unit: 'mg' },
      { name: 'Iron', amount: 4.72, unit: 'mg' },
    ],
    keyNutrients: ['Beta-glucan (soluble fiber)', 'Protein', 'Iron', 'Manganese'],
    preparationNote: 'Overnight soaking or cooking increases digestibility without destroying beta-glucan content.',
    flags: [],
    healthNotes: [
      { claim: 'Oat beta-glucan is well studied for modestly lowering LDL cholesterol when eaten regularly as part of the diet.', grade: 'A' },
      { claim: 'The soluble fiber slows gastric emptying, supporting a lower post-meal glucose rise versus refined cereals.', grade: 'B' },
    ],
    fdcId: '169705', sources: [USDA('169705')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'barley', name: 'Barley (Pearled)', scientificName: 'Hordeum vulgare', class: 'grain', subgroup: 'cereal',
    regionalNames: { hi: 'जौ (Jau)' },
    summary: 'Pearled barley is a cereal grain with one of the lowest glycemic indices of common grains, driven by its unusually high beta-glucan and total fiber content.',
    energyKcal: 352, glycemicIndex: 28, glycemicNote: 'Low GI (~28) — among the lowest of common cereal grains.',
    composition: [
      { name: 'Water', amount: 10.1, unit: 'g' }, { name: 'Carbohydrate', amount: 77.72, unit: 'g' },
      { name: 'Fiber', amount: 15.6, unit: 'g' }, { name: 'Protein', amount: 9.91, unit: 'g' },
      { name: 'Fat', amount: 1.16, unit: 'g' }, { name: 'Calcium', amount: 29, unit: 'mg' },
      { name: 'Iron', amount: 2.5, unit: 'mg' },
    ],
    keyNutrients: ['Beta-glucan (soluble fiber)', 'Dietary fiber', 'Selenium'],
    flags: ['gluten'],
    healthNotes: [
      { claim: 'Barley\'s high beta-glucan content is associated with favorable post-meal glucose and cholesterol responses.', grade: 'A' },
      { claim: 'Contains gluten — not appropriate for celiac disease or wheat/barley/rye sensitivity.', grade: 'A' },
    ],
    fdcId: '170284', sources: [USDA('170284')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'bajra', name: 'Pearl Millet (Bajra)', scientificName: 'Pennisetum glaucum', class: 'grain', subgroup: 'millet',
    regionalNames: { hi: 'बाजरा (Bajra)' },
    summary: 'Pearl millet (bajra) is a drought-hardy staple millet of western and northern India, notably rich in iron and a lower-GI alternative to refined wheat and rice.',
    energyKcal: 361, glycemicIndex: 55, glycemicNote: 'Low–medium GI (~55) for whole-grain bajra.',
    composition: [
      { name: 'Water', amount: 12.4, unit: 'g' }, { name: 'Carbohydrate', amount: 67.5, unit: 'g' },
      { name: 'Fiber', amount: 11.3, unit: 'g' }, { name: 'Protein', amount: 11.6, unit: 'g' },
      { name: 'Fat', amount: 5.0, unit: 'g' }, { name: 'Calcium', amount: 42, unit: 'mg' },
      { name: 'Iron', amount: 8.0, unit: 'mg' },
    ],
    keyNutrients: ['Iron', 'Dietary fiber', 'Magnesium', 'Phosphorus'],
    seasonalityIndia: 'Winter staple (rabi/kharif regional)',
    preparationNote: 'Best consumed fresh-milled; bajra flour turns rancid faster than wheat flour due to higher fat content.',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'A notably iron-dense cereal, relevant as a dietary iron source in iron-deficiency-prone populations.', grade: 'B' },
      { claim: 'Naturally gluten-free, whole-grain millet with a lower glycemic index than refined wheat or white rice.', grade: 'B' },
    ],
    sources: [IFCT], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'ragi', name: 'Finger Millet (Ragi)', scientificName: 'Eleusine coracana', class: 'grain', subgroup: 'millet',
    regionalNames: { hi: 'रागी / मड़ुआ (Ragi)' },
    summary: 'Finger millet (ragi) is a South Indian staple millet exceptional for its calcium content — roughly 10x that of most other grains — alongside a moderate glycemic index.',
    energyKcal: 328, glycemicNote: 'Moderate GI; varies notably with processing (whole grain vs. malted flour/porridge raises glycemic response).',
    composition: [
      { name: 'Water', amount: 13.1, unit: 'g' }, { name: 'Carbohydrate', amount: 72.0, unit: 'g' },
      { name: 'Fiber', amount: 3.6, unit: 'g' }, { name: 'Protein', amount: 7.3, unit: 'g' },
      { name: 'Fat', amount: 1.3, unit: 'g' }, { name: 'Calcium', amount: 344, unit: 'mg' },
      { name: 'Iron', amount: 3.9, unit: 'mg' },
    ],
    keyNutrients: ['Calcium', 'Dietary fiber', 'Iron', 'Polyphenols'],
    seasonalityIndia: 'Staple in Karnataka, Tamil Nadu, Andhra Pradesh',
    preparationNote: 'Traditionally fermented or malted (ragi malt) before cooking, which may improve mineral bioavailability by reducing phytic acid.',
    flags: ['gluten-free', 'high-calcium'],
    healthNotes: [
      { claim: 'Among the richest plant-based dietary calcium sources of any commonly eaten grain.', grade: 'A' },
      { claim: 'Traditional fermentation/malting of ragi may reduce phytate and improve mineral absorption; evidence is preliminary.', grade: 'C', citationPending: true },
    ],
    sources: [IFCT], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'jowar', name: 'Sorghum (Jowar)', scientificName: 'Sorghum bicolor', class: 'grain', subgroup: 'millet',
    regionalNames: { hi: 'ज्वार (Jowar)' },
    summary: 'Sorghum (jowar) is a major Deccan-plateau staple grain, naturally gluten-free, with a fiber and antioxidant profile comparable to or exceeding wheat.',
    energyKcal: 329, glycemicIndex: 70, glycemicNote: 'Moderate–high GI for refined jowar flour; whole-grain and fermented (fermented jowar roti) preparations run lower.',
    composition: [
      { name: 'Water', amount: 9.2, unit: 'g' }, { name: 'Carbohydrate', amount: 72.6, unit: 'g' },
      { name: 'Fiber', amount: 6.7, unit: 'g' }, { name: 'Protein', amount: 10.4, unit: 'g' },
      { name: 'Fat', amount: 3.3, unit: 'g' }, { name: 'Calcium', amount: 25, unit: 'mg' },
      { name: 'Iron', amount: 3.4, unit: 'mg' },
    ],
    keyNutrients: ['Dietary fiber', 'Antioxidant polyphenols', 'Iron', 'Magnesium'],
    seasonalityIndia: 'Staple in Maharashtra, Karnataka, Telangana',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'A naturally gluten-free whole grain suitable as a wheat substitute for those with celiac disease or gluten sensitivity.', grade: 'A' },
      { claim: 'Sorghum bran polyphenols show antioxidant activity comparable to some berries in lab assays; clinical dietary evidence is still emerging.', grade: 'C', citationPending: true },
    ],
    sources: [IFCT], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'proso-millet', name: 'Proso Millet (Common Millet)', scientificName: 'Panicum miliaceum', class: 'grain', subgroup: 'millet',
    regionalNames: { hi: 'चेना / बरी (Cheena)' },
    summary: 'Proso millet is a small, gluten-free ancient grain providing about 378 kcal per 100 g raw, with notably high protein and fiber among millets.',
    energyKcal: 378, glycemicNote: 'Moderate GI; whole-grain millet porridge has a lower glycemic response than milled millet flour products.',
    composition: [
      { name: 'Water', amount: 8.7, unit: 'g' }, { name: 'Carbohydrate', amount: 72.85, unit: 'g' },
      { name: 'Fiber', amount: 8.5, unit: 'g' }, { name: 'Protein', amount: 11.0, unit: 'g' },
      { name: 'Fat', amount: 4.2, unit: 'g' }, { name: 'Calcium', amount: 8, unit: 'mg' },
      { name: 'Iron', amount: 3.0, unit: 'mg' }, { name: 'Magnesium', amount: 114, unit: 'mg' },
      { name: 'Phosphorus', amount: 285, unit: 'mg' },
    ],
    keyNutrients: ['Protein', 'Dietary fiber', 'Phosphorus', 'Magnesium'],
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'A gluten-free, protein- and fiber-dense grain suitable as a rotational staple alongside rice and wheat.', grade: 'B' },
    ],
    fdcId: '169702', sources: [USDA('169702')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'quinoa', name: 'Quinoa', scientificName: 'Chenopodium quinoa', class: 'grain', subgroup: 'pseudocereal',
    regionalNames: {},
    summary: 'Quinoa is a gluten-free pseudocereal and complete protein (all nine essential amino acids), providing about 368 kcal per 100 g raw with a low-medium glycemic index.',
    energyKcal: 368, glycemicIndex: 53, glycemicNote: 'Low–medium GI (~53).',
    composition: [
      { name: 'Water', amount: 13.3, unit: 'g' }, { name: 'Carbohydrate', amount: 64.16, unit: 'g' },
      { name: 'Sugars', amount: 4.57, unit: 'g' }, { name: 'Fiber', amount: 7.0, unit: 'g' },
      { name: 'Protein', amount: 14.12, unit: 'g' }, { name: 'Fat', amount: 6.07, unit: 'g' },
      { name: 'Calcium', amount: 47, unit: 'mg' }, { name: 'Iron', amount: 4.57, unit: 'mg' },
      { name: 'Magnesium', amount: 197, unit: 'mg' },
    ],
    keyNutrients: ['Complete protein', 'Magnesium', 'Iron', 'Dietary fiber'],
    preparationNote: 'Rinse before cooking to remove bitter saponins from the seed coat.',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'One of the few plant foods providing a complete essential-amino-acid profile, useful in plant-based diets.', grade: 'A' },
      { claim: 'Naturally gluten-free, suitable for celiac disease and gluten-sensitive diets when sourced free of cross-contamination.', grade: 'A' },
    ],
    fdcId: '168874', sources: [USDA('168874')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
];

export const VEGETABLES_DATA: FoodEntity[] = [
  {
    id: 'spinach', name: 'Spinach', scientificName: 'Spinacia oleracea', class: 'vegetable', subgroup: 'leafy-green',
    regionalNames: { hi: 'पालक (Palak)' },
    summary: 'Spinach is a leafy green providing about 23 kcal per 100 g, an exceptionally dense source of vitamin K, iron, and folate, with negligible impact on blood sugar.',
    energyKcal: 23, glycemicNote: 'GI not clinically meaningful — negligible digestible carbohydrate per typical serving.',
    composition: [
      { name: 'Water', amount: 91.4, unit: 'g' }, { name: 'Carbohydrate', amount: 3.63, unit: 'g' },
      { name: 'Sugars', amount: 0.42, unit: 'g' }, { name: 'Fiber', amount: 2.2, unit: 'g' },
      { name: 'Protein', amount: 2.86, unit: 'g' }, { name: 'Fat', amount: 0.39, unit: 'g' },
      { name: 'Calcium', amount: 99, unit: 'mg' }, { name: 'Iron', amount: 2.71, unit: 'mg' },
      { name: 'Vitamin C', amount: 28.1, unit: 'mg' }, { name: 'Vitamin K', amount: 483, unit: 'µg' },
    ],
    keyNutrients: ['Vitamin K', 'Iron', 'Folate', 'Provitamin A (carotenoids)'],
    seasonalityIndia: 'Winter (Nov–Feb) in most regions; year-round in cooler hill areas',
    preparationNote: 'Spinach is high in oxalates, which can bind non-heme iron and calcium and reduce their absorption; pairing with vitamin-C-rich foods or brief cooking can help.',
    flags: ['oxalate-rich'],
    healthNotes: [
      { claim: 'One of the most concentrated common dietary sources of vitamin K, relevant to normal blood clotting function.', grade: 'A' },
      { claim: 'A source of non-heme iron, though its oxalate content limits bioavailability relative to animal-source iron; pairing with vitamin C may improve absorption.', grade: 'B' },
    ],
    fdcId: '168462', sources: [USDA('168462')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'kale', name: 'Kale', scientificName: 'Brassica oleracea var. sabellica', class: 'vegetable', subgroup: 'leafy-brassica',
    regionalNames: {},
    summary: 'Kale is a cruciferous leafy green providing roughly 49 kcal per 100 g raw, carrying among the highest vitamin K and vitamin C densities of any common vegetable.',
    energyKcal: 49, glycemicNote: 'GI not typically assessed for kale — low digestible carbohydrate per serving.',
    composition: [
      { name: 'Water', amount: 84.0, unit: 'g' }, { name: 'Carbohydrate', amount: 8.75, unit: 'g' },
      { name: 'Sugars', amount: 2.26, unit: 'g' }, { name: 'Fiber', amount: 3.6, unit: 'g' },
      { name: 'Protein', amount: 4.28, unit: 'g' }, { name: 'Fat', amount: 0.93, unit: 'g' },
      { name: 'Calcium', amount: 150, unit: 'mg' }, { name: 'Iron', amount: 1.47, unit: 'mg' },
      { name: 'Vitamin C', amount: 120, unit: 'mg' }, { name: 'Vitamin K', amount: 705, unit: 'µg' },
    ],
    keyNutrients: ['Vitamin K', 'Vitamin C', 'Vitamin A (carotenoids)', 'Calcium'],
    preparationNote: 'Massaging or lightly cooking raw kale breaks down its cell walls, softening its fibrous texture for easier digestion.',
    flags: ['cruciferous'],
    healthNotes: [
      { claim: 'A very high dietary vitamin C and vitamin K source relative to its low calorie density.', grade: 'A' },
      { claim: 'As a cruciferous vegetable, kale contains glucosinolates; individuals on certain thyroid medications or with iodine-deficiency risk are sometimes advised to moderate very large raw intakes — a clinical, individualized question, not a general restriction.', grade: 'C', citationPending: true },
    ],
    fdcId: '168421', sources: [USDA('168421')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'cabbage', name: 'Cabbage', scientificName: 'Brassica oleracea var. capitata', class: 'vegetable', subgroup: 'leafy-brassica',
    regionalNames: { hi: 'पत्तागोभी (Patta Gobi)' },
    summary: 'Cabbage is a low-calorie cruciferous vegetable (about 25 kcal per 100 g) notable for vitamin K and vitamin C, with a mild, versatile flavor across cuisines.',
    energyKcal: 25, glycemicNote: 'GI not typically assessed — low digestible carbohydrate per serving.',
    composition: [
      { name: 'Water', amount: 92.2, unit: 'g' }, { name: 'Carbohydrate', amount: 5.8, unit: 'g' },
      { name: 'Sugars', amount: 3.2, unit: 'g' }, { name: 'Fiber', amount: 2.2, unit: 'g' },
      { name: 'Protein', amount: 0.96, unit: 'g' }, { name: 'Fat', amount: 0.1, unit: 'g' },
      { name: 'Calcium', amount: 40, unit: 'mg' }, { name: 'Vitamin C', amount: 40.2, unit: 'mg' },
      { name: 'Vitamin K', amount: 59.4, unit: 'µg' },
    ],
    keyNutrients: ['Vitamin K', 'Vitamin C', 'Fiber'],
    seasonalityIndia: 'Winter (Nov–Feb)',
    preparationNote: 'Fermented cabbage (sauerkraut, kimchi-style preparations) adds live cultures alongside the vegetable\'s native fiber and vitamin C.',
    flags: ['cruciferous'],
    healthNotes: [
      { claim: 'A meaningful vitamin C and vitamin K source at very low energy density, useful in volume-based, weight-aware meal planning.', grade: 'B' },
    ],
    fdcId: '169975', sources: [USDA('169975')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'broccoli', name: 'Broccoli', scientificName: 'Brassica oleracea var. italica', class: 'vegetable', subgroup: 'flowering-brassica',
    regionalNames: {},
    summary: 'Broccoli is a flowering cruciferous vegetable providing about 34 kcal per 100 g, rich in vitamin C, vitamin K, and folate, with the plant compound sulforaphane forming when it is cut or chewed.',
    energyKcal: 34, glycemicNote: 'GI not typically assessed — low digestible carbohydrate per serving.',
    composition: [
      { name: 'Water', amount: 89.3, unit: 'g' }, { name: 'Carbohydrate', amount: 6.64, unit: 'g' },
      { name: 'Sugars', amount: 1.7, unit: 'g' }, { name: 'Fiber', amount: 2.6, unit: 'g' },
      { name: 'Protein', amount: 2.82, unit: 'g' }, { name: 'Fat', amount: 0.37, unit: 'g' },
      { name: 'Calcium', amount: 47, unit: 'mg' }, { name: 'Iron', amount: 0.73, unit: 'mg' },
      { name: 'Potassium', amount: 316, unit: 'mg' }, { name: 'Vitamin C', amount: 89.2, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin C', 'Vitamin K', 'Folate', 'Sulforaphane precursor'],
    seasonalityIndia: 'Winter (Nov–Feb)',
    preparationNote: 'Steaming (rather than boiling) better preserves vitamin C and the enzyme needed to form sulforaphane; chopping and resting for a few minutes before cooking also helps.',
    flags: ['cruciferous'],
    healthNotes: [
      { claim: 'Among the richest common dietary vitamin C sources, alongside meaningful vitamin K and folate.', grade: 'A' },
      { claim: 'Cruciferous vegetables including broccoli are associated with favorable population-level health outcomes in observational nutrition research; sulforaphane\'s specific clinical effects are an active research area.', grade: 'C', citationPending: true },
    ],
    fdcId: '170379', sources: [USDA('170379')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'cauliflower', name: 'Cauliflower', scientificName: 'Brassica oleracea var. botrytis', class: 'vegetable', subgroup: 'flowering-brassica',
    regionalNames: { hi: 'फूलगोभी (Phool Gobi)' },
    summary: 'Cauliflower is a low-calorie, low-carbohydrate cruciferous vegetable (about 25 kcal per 100 g) popular as a versatile substitute for grains such as rice in portion-controlled diets.',
    energyKcal: 25, glycemicNote: 'GI not typically assessed — low digestible carbohydrate per serving.',
    composition: [
      { name: 'Water', amount: 92.1, unit: 'g' }, { name: 'Carbohydrate', amount: 4.97, unit: 'g' },
      { name: 'Sugars', amount: 1.91, unit: 'g' }, { name: 'Fiber', amount: 1.9, unit: 'g' },
      { name: 'Protein', amount: 1.92, unit: 'g' }, { name: 'Fat', amount: 0.28, unit: 'g' },
      { name: 'Vitamin C', amount: 67.1, unit: 'mg' }, { name: 'Vitamin K', amount: 16, unit: 'µg' },
      { name: 'Folate', amount: 57, unit: 'µg' },
    ],
    keyNutrients: ['Vitamin C', 'Folate', 'Fiber'],
    seasonalityIndia: 'Winter (Nov–Feb)',
    preparationNote: 'Riced or roasted cauliflower is widely used as a lower-carbohydrate substitute for rice or mashed potato in portion-managed meal plans.',
    flags: ['cruciferous', 'low-carb'],
    healthNotes: [
      { claim: 'A high vitamin C, low-calorie-density vegetable useful in volume-based and lower-carbohydrate meal planning.', grade: 'B' },
    ],
    fdcId: '169986', sources: [USDA('169986')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'carrot', name: 'Carrot', scientificName: 'Daucus carota', class: 'vegetable', subgroup: 'root',
    regionalNames: { hi: 'गाजर (Gajar)' },
    summary: 'Carrot provides about 41 kcal per 100 g raw and is one of the richest common dietary sources of provitamin-A carotenoids; despite a long-standing myth, its glycemic load is low because its carbohydrate density is modest.',
    energyKcal: 41, glycemicIndex: 39, glycemicNote: 'Raw carrot GI ≈16, cooked ≈39 (International Tables of Glycemic Index, 2008) — a long-repeated "GI 92" figure for carrots is a documented historical misclassification, not the current reference value; either way, glycemic load stays low because carrots are ~88% water with modest carbohydrate.',
    composition: [
      { name: 'Water', amount: 88.3, unit: 'g' }, { name: 'Carbohydrate', amount: 9.58, unit: 'g' },
      { name: 'Sugars', amount: 4.74, unit: 'g' }, { name: 'Fiber', amount: 2.8, unit: 'g' },
      { name: 'Protein', amount: 0.93, unit: 'g' }, { name: 'Fat', amount: 0.24, unit: 'g' },
      { name: 'Calcium', amount: 33, unit: 'mg' }, { name: 'Potassium', amount: 320, unit: 'mg' },
      { name: 'Vitamin A (RAE)', amount: 835, unit: 'µg' }, { name: 'Vitamin C', amount: 5.9, unit: 'mg' },
    ],
    keyNutrients: ['Provitamin A (beta-carotene)', 'Vitamin K', 'Potassium', 'Fiber'],
    seasonalityIndia: 'Winter (Nov–Feb)',
    preparationNote: 'Beta-carotene is fat-soluble and better absorbed when carrots are cooked and eaten with a source of dietary fat.',
    flags: [],
    healthNotes: [
      { claim: 'One of the most concentrated common dietary sources of provitamin-A carotenoids.', grade: 'A' },
      { claim: 'Despite its cooked GI being technically "medium" (~39), the glycemic load of a standard carrot serving is low due to modest total carbohydrate content — an important distinction often lost in the "carrots are high-GI" myth.', grade: 'B' },
    ],
    fdcId: '170393', sources: [USDA('170393')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'beetroot', name: 'Beetroot', scientificName: 'Beta vulgaris', class: 'vegetable', subgroup: 'root',
    regionalNames: { hi: 'चुकंदर (Chukandar)' },
    summary: 'Beetroot provides about 43 kcal per 100 g raw and is notably rich in dietary nitrates and folate; cooking raises its glycemic index from a low ~32 raw to a moderate ~64.',
    energyKcal: 43, glycemicIndex: 64, glycemicNote: 'Raw beetroot GI ≈32; boiled ≈64 (moderate) as cooking breaks down fiber structure — glycemic load of a standard serving stays modest (~7) given typical portion size.',
    composition: [
      { name: 'Water', amount: 87.6, unit: 'g' }, { name: 'Carbohydrate', amount: 9.56, unit: 'g' },
      { name: 'Sugars', amount: 6.76, unit: 'g' }, { name: 'Fiber', amount: 2.8, unit: 'g' },
      { name: 'Protein', amount: 1.61, unit: 'g' }, { name: 'Fat', amount: 0.17, unit: 'g' },
      { name: 'Folate', amount: 109, unit: 'µg' }, { name: 'Potassium', amount: 325, unit: 'mg' },
    ],
    keyNutrients: ['Dietary nitrates', 'Folate', 'Potassium', 'Betalains'],
    seasonalityIndia: 'Winter (Nov–Feb)',
    preparationNote: 'Beetroot\'s dietary nitrates are partly converted to nitric oxide in the body, a pathway studied for supporting blood pressure and exercise performance — effects are dose- and study-dependent.',
    flags: [],
    healthNotes: [
      { claim: 'A useful dietary folate source, relevant to normal cell division and particularly notable in preconception and prenatal nutrition contexts.', grade: 'B' },
      { claim: 'Dietary nitrates from beetroot have been studied for modest blood-pressure and exercise-performance effects; results vary by dose, form (juice vs. whole vegetable), and individual.', grade: 'C', citationPending: true },
    ],
    fdcId: '169145', sources: [USDA('169145')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'onion', name: 'Onion', scientificName: 'Allium cepa', class: 'vegetable', subgroup: 'bulb',
    regionalNames: { hi: 'प्याज़ (Pyaz)' },
    summary: 'Onion provides about 40 kcal per 100 g raw and is a major dietary source of the flavonoid quercetin, a compound of ongoing research interest for its antioxidant activity.',
    energyKcal: 40, glycemicNote: 'GI not typically assessed as clinically meaningful — modest carbohydrate largely as fructans, which behave differently from simple sugars.',
    composition: [
      { name: 'Water', amount: 89.1, unit: 'g' }, { name: 'Carbohydrate', amount: 9.34, unit: 'g' },
      { name: 'Sugars', amount: 4.24, unit: 'g' }, { name: 'Fiber', amount: 1.7, unit: 'g' },
      { name: 'Protein', amount: 1.1, unit: 'g' }, { name: 'Fat', amount: 0.1, unit: 'g' },
      { name: 'Vitamin C', amount: 7.4, unit: 'mg' }, { name: 'Potassium', amount: 146, unit: 'mg' },
    ],
    keyNutrients: ['Quercetin (flavonoid)', 'Prebiotic fructans', 'Vitamin C'],
    seasonalityIndia: 'Year-round, harvested chiefly Mar–May',
    preparationNote: 'Onions contain fructans (a FODMAP), which can trigger symptoms in some people with irritable bowel syndrome even in small amounts.',
    flags: ['fodmap'],
    healthNotes: [
      { claim: 'One of the most significant common dietary sources of the flavonoid quercetin, an antioxidant compound under active research.', grade: 'B' },
      { claim: 'Onion fructans can act as a prebiotic fiber supporting gut bacteria, but are also a recognized FODMAP trigger for IBS-sensitive individuals.', grade: 'B' },
    ],
    fdcId: '170000', sources: [USDA('170000')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'tomato', name: 'Tomato', scientificName: 'Solanum lycopersicum', class: 'vegetable', subgroup: 'nightshade',
    regionalNames: { hi: 'टमाटर (Tamatar)' },
    summary: 'Tomato provides about 18 kcal per 100 g raw and is the leading common dietary source of the carotenoid lycopene, which becomes more bioavailable when tomatoes are cooked with a fat source.',
    energyKcal: 18, glycemicNote: 'GI not typically assessed as clinically meaningful — very low digestible carbohydrate per serving.',
    composition: [
      { name: 'Water', amount: 94.5, unit: 'g' }, { name: 'Carbohydrate', amount: 3.89, unit: 'g' },
      { name: 'Sugars', amount: 2.63, unit: 'g' }, { name: 'Fiber', amount: 1.2, unit: 'g' },
      { name: 'Protein', amount: 0.88, unit: 'g' }, { name: 'Fat', amount: 0.2, unit: 'g' },
      { name: 'Vitamin C', amount: 13.7, unit: 'mg' }, { name: 'Potassium', amount: 237, unit: 'mg' },
    ],
    keyNutrients: ['Lycopene (carotenoid)', 'Vitamin C', 'Potassium'],
    seasonalityIndia: 'Year-round, peak Dec–Mar',
    preparationNote: 'Cooking tomatoes (e.g. into a sauce) with a small amount of oil breaks down cell walls and increases lycopene bioavailability compared with raw tomato.',
    flags: ['nightshade'],
    healthNotes: [
      { claim: 'The leading common dietary source of lycopene, a carotenoid studied for antioxidant activity.', grade: 'B' },
      { claim: 'Population-level research associates tomato and lycopene intake with cardiovascular and prostate health markers; causal, dose-specific claims remain an active research area.', grade: 'C', citationPending: true },
    ],
    fdcId: '170457', sources: [USDA('170457')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'potato', name: 'Potato', scientificName: 'Solanum tuberosum', class: 'vegetable', subgroup: 'tuber',
    regionalNames: { hi: 'आलू (Aloo)' },
    summary: 'Potato (boiled in skin) provides about 87 kcal per 100 g and is a genuinely high-glycemic-index food — unlike the carrot myth, potato\'s high GI is well-supported — meaning portion and preparation matter for blood-sugar-aware eating.',
    energyKcal: 87, glycemicIndex: 82, glycemicNote: 'Boiled potato GI is genuinely high (~78–96 depending on variety and prep, per International GI tables); cooling boiled/baked potato for 24 hours before eating forms resistant starch and measurably lowers its glycemic impact.',
    composition: [
      { name: 'Water', amount: 77.0, unit: 'g' }, { name: 'Carbohydrate', amount: 20.13, unit: 'g' },
      { name: 'Fiber', amount: 1.8, unit: 'g' }, { name: 'Protein', amount: 1.87, unit: 'g' },
      { name: 'Fat', amount: 0.1, unit: 'g' }, { name: 'Potassium', amount: 379, unit: 'mg' },
      { name: 'Vitamin C', amount: 13, unit: 'mg' }, { name: 'Vitamin B6', amount: 0.27, unit: 'mg' },
    ],
    keyNutrients: ['Potassium', 'Vitamin C', 'Vitamin B6', 'Resistant starch (when cooled)'],
    seasonalityIndia: 'Winter harvest (Jan–Mar), stored year-round',
    preparationNote: 'Boiling or steaming with skin on, then cooling before eating (or reheating), meaningfully raises resistant starch and lowers the practical glycemic impact versus fresh-hot mashed or baked potato.',
    flags: ['high-gi'],
    healthNotes: [
      { claim: 'A meaningful dietary potassium and vitamin C source, notable because potato is eaten in large quantities in many diets.', grade: 'B' },
      { claim: 'Potato\'s glycemic index is genuinely high and preparation-sensitive; cooling cooked potato before eating measurably increases resistant starch and lowers post-meal glucose response versus eating it hot.', grade: 'B' },
    ],
    fdcId: '170438', sources: [USDA('170438')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'sweet-potato', name: 'Sweet Potato', scientificName: 'Ipomoea batatas', class: 'vegetable', subgroup: 'tuber',
    regionalNames: { hi: 'शकरकंद (Shakarkand)' },
    summary: 'Sweet potato (baked in skin) provides about 90 kcal per 100 g and is exceptionally rich in provitamin-A carotenoids; its glycemic index varies sharply by cooking method — much lower boiled than baked.',
    energyKcal: 90, glycemicIndex: 94, glycemicNote: 'Baked sweet potato GI ≈94 (high) vs. boiled ≈44 (low-medium) — cooking method changes glycemic impact more than for almost any other common vegetable, per University of Sydney glycemic index research.',
    composition: [
      { name: 'Water', amount: 75.8, unit: 'g' }, { name: 'Carbohydrate', amount: 20.71, unit: 'g' },
      { name: 'Sugars', amount: 6.48, unit: 'g' }, { name: 'Fiber', amount: 3.3, unit: 'g' },
      { name: 'Protein', amount: 2.01, unit: 'g' }, { name: 'Fat', amount: 0.15, unit: 'g' },
      { name: 'Vitamin A (RAE)', amount: 961, unit: 'µg' }, { name: 'Vitamin C', amount: 19.6, unit: 'mg' },
      { name: 'Potassium', amount: 475, unit: 'mg' },
    ],
    keyNutrients: ['Provitamin A (beta-carotene)', 'Potassium', 'Vitamin C', 'Fiber'],
    seasonalityIndia: 'Winter (Oct–Feb)',
    preparationNote: 'Boiling rather than baking sweet potato substantially lowers its glycemic index (≈44 vs. ≈94) — a practical, evidence-based swap for blood-sugar-aware meal planning.',
    flags: [],
    healthNotes: [
      { claim: 'One of the richest common dietary sources of provitamin-A carotenoids, often exceeding daily requirements in a single serving.', grade: 'A' },
      { claim: 'Cooking method (boiling vs. baking) changes sweet potato\'s glycemic index more dramatically than for most vegetables — a clinically actionable preparation choice.', grade: 'B' },
    ],
    fdcId: '168483', sources: [USDA('168483')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'eggplant', name: 'Eggplant', scientificName: 'Solanum melongena', class: 'vegetable', subgroup: 'nightshade',
    regionalNames: { hi: 'बैंगन (Baingan)' },
    summary: 'Eggplant (brinjal/aubergine) provides about 25 kcal per 100 g raw, is notably high in vitamin B6 and fiber for a low-calorie vegetable, and its skin carries anthocyanin antioxidants.',
    energyKcal: 25, glycemicNote: 'GI not typically assessed as clinically meaningful — low digestible carbohydrate per serving.',
    composition: [
      { name: 'Water', amount: 92.3, unit: 'g' }, { name: 'Carbohydrate', amount: 5.88, unit: 'g' },
      { name: 'Sugars', amount: 3.53, unit: 'g' }, { name: 'Fiber', amount: 2.4, unit: 'g' },
      { name: 'Protein', amount: 1.0, unit: 'g' }, { name: 'Fat', amount: 0.18, unit: 'g' },
      { name: 'Potassium', amount: 229, unit: 'mg' }, { name: 'Vitamin B6', amount: 0.88, unit: 'mg' },
    ],
    keyNutrients: ['Fiber', 'Vitamin B6', 'Anthocyanins (skin)', 'Potassium'],
    seasonalityIndia: 'Year-round, peak Aug–Nov',
    preparationNote: 'Leaving the skin on preserves most of eggplant\'s anthocyanin antioxidant content; salting and resting slices before cooking can reduce bitterness and oil absorption.',
    flags: ['nightshade'],
    healthNotes: [
      { claim: 'A notably fiber-dense, low-calorie vegetable that can support satiety within a portion-controlled diet.', grade: 'B' },
      { claim: 'Eggplant skin anthocyanins are studied for antioxidant activity in early research; specific clinical outcome claims remain an active research area.', grade: 'C', citationPending: true },
    ],
    fdcId: '169228', sources: [USDA('169228')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
];

// Spices deliberately limited to items NOT already covered by HERBS_SPICES_DATA
// (clinical_databases.ts — turmeric, cinnamon, ginger, fenugreek, garlic, cumin, cardamom
// [green], clove, black pepper, asafoetida, saffron, mustard seeds, star anise already have
// real, cited clinical monographs at /herb/{id}; this list would create a duplicate-canonical
// conflict if repeated here, so it is not). Also deliberately excludes ajwain, black cardamom,
// long pepper, galangal, and cayenne this round — composition figures found for those traced
// only to unverified secondary/blog sources, not a confirmed USDA FDC ID or IFCT figure, which
// does not meet this project's citation bar; flagged in POINT_REGISTER for future sourcing.
export const SPICES_DATA: FoodEntity[] = [
  {
    id: 'coriander-seed', name: 'Coriander Seed', scientificName: 'Coriandrum sativum', class: 'spice', subgroup: 'seed-spice',
    regionalNames: { hi: 'धनिया (Dhania)' },
    summary: 'Coriander seed (dhania) is the dried fruit of the cilantro plant, used whole or ground; per-100g reference values are far higher in energy and minerals than a typical spice serving (0.5–2 g) would actually provide.',
    perServingNote: 'Typical culinary serving is 0.5–2 g (a pinch to a teaspoon) — composition below is a per-100g reference scale, not a realistic single serving.',
    energyKcal: 298,
    composition: [
      { name: 'Water', amount: 8.86, unit: 'g' }, { name: 'Carbohydrate', amount: 54.99, unit: 'g' },
      { name: 'Fiber', amount: 41.9, unit: 'g' }, { name: 'Protein', amount: 12.37, unit: 'g' },
      { name: 'Fat', amount: 17.77, unit: 'g' }, { name: 'Calcium', amount: 709, unit: 'mg' },
      { name: 'Iron', amount: 16.32, unit: 'mg' }, { name: 'Magnesium', amount: 330, unit: 'mg' },
      { name: 'Potassium', amount: 1267, unit: 'mg' },
    ],
    keyNutrients: ['Iron', 'Magnesium', 'Calcium', 'Fiber (by dry weight)'],
    preparationNote: 'Dry-roasting coriander seed briefly before grinding intensifies its citrusy aroma; ground coriander loses potency faster than whole seed.',
    flags: [],
    healthNotes: [
      { claim: 'A dense source of iron, magnesium, and calcium by dry weight, though realistic culinary quantities contribute only a small fraction of daily requirements.', grade: 'B' },
      { claim: 'Traditionally used to support digestion; early research explores coriander extracts for mild antimicrobial and antioxidant activity — clinical significance at culinary doses is not established.', grade: 'D', citationPending: true },
    ],
    fdcId: '170922', sources: [USDA('170922')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'fennel-seed', name: 'Fennel Seed', scientificName: 'Foeniculum vulgare', class: 'spice', subgroup: 'seed-spice',
    regionalNames: { hi: 'सौंफ (Saunf)' },
    summary: 'Fennel seed (saunf) is a sweet, aromatic seed spice traditionally chewed after meals in Indian households; per-100g reference values are far higher than a typical serving (0.5–2 g) would provide.',
    perServingNote: 'Typical culinary/traditional serving is 0.5–2 g — composition below is a per-100g reference scale.',
    energyKcal: 345,
    composition: [
      { name: 'Water', amount: 8.81, unit: 'g' }, { name: 'Carbohydrate', amount: 52.29, unit: 'g' },
      { name: 'Fiber', amount: 39.8, unit: 'g' }, { name: 'Protein', amount: 15.8, unit: 'g' },
      { name: 'Fat', amount: 14.87, unit: 'g' }, { name: 'Calcium', amount: 1196, unit: 'mg' },
      { name: 'Iron', amount: 18.54, unit: 'mg' }, { name: 'Potassium', amount: 1694, unit: 'mg' },
      { name: 'Manganese', amount: 6.5, unit: 'mg' },
    ],
    keyNutrients: ['Calcium', 'Iron', 'Potassium', 'Manganese'],
    preparationNote: 'Lightly toasting fennel seed before use brings out its anise-like aroma; it is traditionally chewed plain or with a little sugar as a post-meal digestive and breath freshener.',
    flags: [],
    healthNotes: [
      { claim: 'Traditionally used as a post-meal digestive aid in Indian households; some clinical research on fennel extract supports mild carminative (gas-relieving) effects, though at doses higher than typical chewing quantities.', grade: 'C', citationPending: true },
    ],
    fdcId: '171323', sources: [USDA('171323')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'nutmeg', name: 'Nutmeg', scientificName: 'Myristica fragrans', class: 'spice', subgroup: 'seed-spice',
    regionalNames: { hi: 'जायफल (Jaiphal)' },
    summary: 'Nutmeg (jaiphal) is the ground inner seed of the Myristica fragrans fruit, used in small pinches in both sweet and savory dishes; it contains myristicin, a compound with dose-dependent psychoactive and toxic effects at high (non-culinary) doses.',
    perServingNote: 'Typical culinary serving is well under 1 g (a pinch to 1/4 teaspoon) — composition below is a per-100g reference scale, and is not a safety guide for concentrated nutmeg doses.',
    energyKcal: 525,
    composition: [
      { name: 'Potassium', amount: 350, unit: 'mg' }, { name: 'Folate', amount: 76, unit: 'µg' },
      { name: 'Thiamin', amount: 0.346, unit: 'mg' }, { name: 'Niacin', amount: 1.299, unit: 'mg' },
      { name: 'Iron', amount: 3.04, unit: 'mg' }, { name: 'Copper', amount: 1.027, unit: 'mg' },
      { name: 'Manganese', amount: 2.9, unit: 'mg' },
    ],
    keyNutrients: ['Manganese', 'Copper', 'Iron', 'Folate'],
    preparationNote: 'Grating whole nutmeg fresh just before use preserves its volatile aromatic oils far better than pre-ground nutmeg.',
    flags: ['dose-sensitive'],
    healthNotes: [
      { claim: 'At normal culinary pinches, nutmeg poses no known safety concern; at gram-scale doses (well beyond cooking use), myristicin can cause toxic, hallucinogenic effects — a dose-response relationship, not a reason to avoid culinary use.', grade: 'B' },
    ],
    fdcId: '170932', sources: [USDA('170932')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'allspice', name: 'Allspice', scientificName: 'Pimenta dioica', class: 'spice', subgroup: 'fruit-spice',
    regionalNames: {},
    summary: 'Allspice is the dried unripe berry of the Pimenta dioica tree, named for tasting like a blend of cinnamon, clove, and nutmeg; per-100g reference values are far higher than a typical serving (0.5–2 g) would provide.',
    perServingNote: 'Typical culinary serving is 0.5–2 g — composition below is a per-100g reference scale.',
    energyKcal: 263,
    composition: [
      { name: 'Fiber', amount: 22, unit: 'g' }, { name: 'Protein', amount: 6.09, unit: 'g' },
      { name: 'Calcium', amount: 661, unit: 'mg' }, { name: 'Iron', amount: 7.06, unit: 'mg' },
      { name: 'Potassium', amount: 1044, unit: 'mg' }, { name: 'Manganese', amount: 0.99, unit: 'mg' },
    ],
    keyNutrients: ['Calcium', 'Iron', 'Potassium', 'Fiber (by dry weight)'],
    preparationNote: 'Allspice berries can be used whole (crushed just before cooking) or pre-ground; whole berries retain aroma noticeably longer in storage.',
    flags: [],
    healthNotes: [
      { claim: 'Contains eugenol, the same aromatic compound found in clove, studied in early research for antioxidant activity; not established as clinically significant at culinary doses.', grade: 'D', citationPending: true },
    ],
    fdcId: '171315', sources: [USDA('171315')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'white-pepper', name: 'White Pepper', scientificName: 'Piper nigrum', class: 'spice', subgroup: 'fruit-spice',
    regionalNames: {},
    summary: 'White pepper is the same fruit as black pepper (Piper nigrum), processed differently — the outer skin is removed after retting — giving a milder, less pungent flavor without visible dark flecks; per-100g reference values are far higher than a typical serving (0.5–2 g) would provide.',
    perServingNote: 'Typical culinary serving is 0.5–2 g — composition below is a per-100g reference scale.',
    energyKcal: 296,
    composition: [
      { name: 'Fiber', amount: 26.2, unit: 'g' }, { name: 'Protein', amount: 10.4, unit: 'g' },
      { name: 'Manganese', amount: 4, unit: 'mg' },
    ],
    keyNutrients: ['Manganese', 'Fiber (by dry weight)'],
    preparationNote: 'White pepper is preferred in light-colored dishes (white sauces, some Chinese and Southeast Asian preparations) where black pepper\'s dark flecks are visually undesirable; its retting process changes but does not eliminate piperine content.',
    flags: [],
    healthNotes: [
      { claim: 'Nutritionally similar to black pepper (same source plant), with retting/processing altering flavor compounds more than core mineral composition.', grade: 'C', citationPending: true },
    ],
    fdcId: '170933', sources: [USDA('170933')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
];

// Seeds pillar. Deliberately excludes items already covered elsewhere to avoid the same
// cross-pillar duplication flagged in round 4/10: cumin, coriander, fennel, caraway (already
// /herb/{id} or SPICES_DATA), quinoa (already GRAINS_DATA), and lentils/chickpeas/beans/peas
// (better suited to a future Pulses & Legumes round — they're legumes, not oilseeds).
export const SEEDS_DATA: FoodEntity[] = [
  {
    id: 'pumpkin-seeds', name: 'Pumpkin Seeds', scientificName: 'Cucurbita pepo', class: 'seed', subgroup: 'oilseed',
    regionalNames: { hi: 'कद्दू के बीज (Kaddu ke Beej)' },
    summary: 'Pumpkin seeds (pepitas) are a dense source of plant protein, zinc, and magnesium; typically eaten roasted as a snack or ground into a paste.',
    energyKcal: 559,
    composition: [
      { name: 'Protein', amount: 30.23, unit: 'g' }, { name: 'Fat', amount: 49, unit: 'g' },
      { name: 'Carbohydrate', amount: 10.7, unit: 'g' }, { name: 'Fiber', amount: 6, unit: 'g' },
      { name: 'Zinc', amount: 7.8, unit: 'mg' }, { name: 'Magnesium', amount: 592, unit: 'mg' },
      { name: 'Iron', amount: 8.8, unit: 'mg' }, { name: 'Phosphorus', amount: 1233, unit: 'mg' },
    ],
    keyNutrients: ['Zinc', 'Magnesium', 'Plant Protein', 'Iron'],
    preparationNote: 'Dry-roasting pumpkin seeds briefly deepens flavor; hulled kernels (pepitas) are more calorie- and nutrient-dense per gram than in-shell seeds since the indigestible hull is removed.',
    flags: [],
    healthNotes: [
      { claim: 'One of the most zinc-dense common plant foods, relevant given zinc\'s role in immune function and wound healing.', grade: 'A' },
      { claim: 'A practical plant-based magnesium source; magnesium is a commonly under-consumed mineral in typical diets.', grade: 'B' },
    ],
    fdcId: '170556', sources: [USDA('170556')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'sunflower-seeds', name: 'Sunflower Seeds', scientificName: 'Helianthus annuus', class: 'seed', subgroup: 'oilseed',
    regionalNames: {},
    summary: 'Sunflower seed kernels are an exceptionally rich dietary source of vitamin E, alongside notable magnesium and healthy unsaturated fats.',
    energyKcal: 584,
    composition: [
      { name: 'Protein', amount: 20.78, unit: 'g' }, { name: 'Fat', amount: 51.46, unit: 'g' },
      { name: 'Carbohydrate', amount: 20, unit: 'g' }, { name: 'Fiber', amount: 8.6, unit: 'g' },
      { name: 'Vitamin E', amount: 35.17, unit: 'mg' }, { name: 'Magnesium', amount: 325, unit: 'mg' },
      { name: 'Zinc', amount: 5, unit: 'mg' }, { name: 'Thiamin', amount: 1.48, unit: 'mg' },
    ],
    keyNutrients: ['Vitamin E', 'Magnesium', 'Thiamin', 'Unsaturated Fat'],
    preparationNote: 'Sunflower seed oil is predominantly linoleic acid (omega-6); balance intake against omega-3 sources like flaxseed or chia for a more even fatty-acid ratio.',
    flags: [],
    healthNotes: [
      { claim: 'One of the richest common dietary sources of vitamin E, an antioxidant nutrient many diets under-supply.', grade: 'A' },
    ],
    fdcId: '170562', sources: [USDA('170562')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'flaxseed', name: 'Flaxseed', scientificName: 'Linum usitatissimum', class: 'seed', subgroup: 'oilseed',
    regionalNames: { hi: 'अलसी (Alsi)' },
    summary: 'Flaxseed (alsi) is the richest common plant source of the omega-3 fat ALA, alongside exceptionally high fiber — but its nutrients are only well absorbed when the seed is ground.',
    energyKcal: 534,
    composition: [
      { name: 'Omega-3 ALA', amount: 22.8, unit: 'g' }, { name: 'Fiber', amount: 27.3, unit: 'g' },
      { name: 'Magnesium', amount: 392, unit: 'mg' }, { name: 'Thiamin', amount: 1.64, unit: 'mg' },
      { name: 'Potassium', amount: 813, unit: 'mg' }, { name: 'Phosphorus', amount: 642, unit: 'mg' },
    ],
    keyNutrients: ['Omega-3 ALA', 'Fiber', 'Lignans', 'Magnesium'],
    preparationNote: 'Whole flaxseed has a hard seed coat that often passes through digestion intact — grinding (or using milled/ground flaxseed) is necessary to actually absorb its omega-3, fiber, and mineral content.',
    flags: [],
    healthNotes: [
      { claim: 'The richest common plant dietary source of ALA, the essential plant-based omega-3 fatty acid.', grade: 'A' },
      { claim: 'Ground flaxseed\'s soluble fiber and lignans are studied for modest cholesterol and hormone-pathway effects; whole, unground flaxseed provides substantially less benefit since it is not digested.', grade: 'B' },
    ],
    fdcId: '169414', sources: [USDA('169414')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'chia-seeds', name: 'Chia Seeds', scientificName: 'Salvia hispanica', class: 'seed', subgroup: 'mucilaginous',
    regionalNames: {},
    summary: 'Chia seeds are a complete-fiber, omega-3-rich seed that forms a gel when soaked in liquid, owing to their mucilaginous outer coating.',
    energyKcal: 490,
    composition: [
      { name: 'Protein', amount: 17, unit: 'g' }, { name: 'Fat', amount: 32.9, unit: 'g' },
      { name: 'Carbohydrate', amount: 38.3, unit: 'g' }, { name: 'Fiber', amount: 33.2, unit: 'g' },
      { name: 'Omega-3 ALA', amount: 18.8, unit: 'g' }, { name: 'Phosphorus', amount: 860, unit: 'mg' },
      { name: 'Magnesium', amount: 335, unit: 'mg' },
    ],
    keyNutrients: ['Fiber', 'Omega-3 ALA', 'Phosphorus', 'Magnesium'],
    preparationNote: 'Unlike flaxseed, chia does not need grinding — its seed coat is soft enough to digest whole, and soaking in liquid (e.g. for chia pudding) further softens it and forms a gel from its soluble fiber.',
    flags: [],
    healthNotes: [
      { claim: 'One of the most fiber-dense common foods by weight, with roughly two-thirds of that fiber being soluble.', grade: 'A' },
      { claim: 'A strong plant source of ALA omega-3, though ALA converts to the more bioactive EPA/DHA forms only at a low, individually variable rate.', grade: 'B' },
    ],
    fdcId: '170554', sources: [USDA('170554')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'sesame-seeds', name: 'Sesame Seeds', scientificName: 'Sesamum indicum', class: 'seed', subgroup: 'oilseed',
    regionalNames: { hi: 'तिल (Til)' },
    summary: 'Sesame seeds (til) are notably rich in copper and calcium (particularly the unhulled form), and are a traditional winter staple across India (til laddoo, gajak).',
    energyKcal: 573,
    composition: [
      { name: 'Protein', amount: 17.73, unit: 'g' }, { name: 'Fat', amount: 50, unit: 'g' },
      { name: 'Carbohydrate', amount: 11.65, unit: 'g' }, { name: 'Fiber', amount: 11.8, unit: 'g' },
      { name: 'Calcium', amount: 975, unit: 'mg' }, { name: 'Copper', amount: 4, unit: 'mg' },
      { name: 'Magnesium', amount: 351, unit: 'mg' },
    ],
    keyNutrients: ['Calcium', 'Copper', 'Healthy Fat', 'Plant Protein'],
    seasonalityIndia: 'Traditionally eaten in winter (til laddoo, gajak) — culturally tied to Makar Sankranti',
    preparationNote: 'Calcium figures are highest for whole (unhulled) sesame seeds; hulled/decorticated sesame (common in tahini) has substantially less calcium since much resides in the seed coat.',
    flags: [],
    healthNotes: [
      { claim: 'Among the most calcium-dense common plant foods (whole seed form), relevant for calcium intake in plant-forward diets.', grade: 'A' },
      { claim: 'An exceptionally rich dietary copper source, a mineral involved in iron metabolism and connective tissue formation.', grade: 'B' },
    ],
    fdcId: '170150', sources: [USDA('170150')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'psyllium-husk', name: 'Psyllium Husk', scientificName: 'Plantago ovata', class: 'seed', subgroup: 'mucilaginous',
    regionalNames: { hi: 'ईसबगोल (Isabgol)' },
    summary: 'Psyllium husk (isabgol) is the fibrous seed-coat of Plantago ovata, used clinically as a bulk-forming fiber supplement — not eaten as a food in typical 100g quantities.',
    perServingNote: 'Typical clinical/dietary dose is 5–10 g (roughly 1-2 teaspoons) mixed with water, once to twice daily — composition below is a per-100g reference scale, not a dosing guide.',
    energyKcal: 350,
    composition: [
      { name: 'Fiber', amount: 78, unit: 'g' }, { name: 'Protein', amount: 1, unit: 'g' },
    ],
    keyNutrients: ['Soluble Fiber', 'Insoluble Fiber'],
    preparationNote: 'Psyllium must be taken with adequate water — its fiber absorbs many times its weight in liquid and can worsen constipation or pose a choking/blockage risk if taken too dry or without enough fluid.',
    flags: ['dose-sensitive', 'requires-adequate-fluid'],
    healthNotes: [
      { claim: 'A well-studied bulk-forming fiber (roughly 70% soluble, 30% insoluble) used clinically for both constipation and diarrhea, and for modest LDL-cholesterol reduction.', grade: 'A' },
      { claim: 'Should be taken with a full glass of water and separated from medication dosing times, since it can slow or reduce absorption of some oral medications.', grade: 'B' },
    ],
    fdcId: '1666127', sources: [USDA('1666127')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'hemp-seeds', name: 'Hemp Seeds', scientificName: 'Cannabis sativa', class: 'seed', subgroup: 'oilseed',
    regionalNames: {},
    summary: 'Hulled hemp seeds are a complete plant protein with a favorable near-1:3 omega-6-to-omega-3 fat ratio; they contain no THC and have no psychoactive effect.',
    energyKcal: 553,
    composition: [
      { name: 'Protein', amount: 31.6, unit: 'g' }, { name: 'Fat', amount: 48.8, unit: 'g' },
      { name: 'Carbohydrate', amount: 8.67, unit: 'g' }, { name: 'Magnesium', amount: 700, unit: 'mg' },
      { name: 'Phosphorus', amount: 1650, unit: 'mg' }, { name: 'Iron', amount: 7.95, unit: 'mg' },
      { name: 'Potassium', amount: 1200, unit: 'mg' },
    ],
    keyNutrients: ['Complete Plant Protein', 'Omega-3/Omega-6 Fats', 'Magnesium', 'Phosphorus'],
    flags: ['non-psychoactive'],
    preparationNote: 'Hulled hemp seed (hemp "hearts") is the food-grade product sold for eating — distinct from hemp/marijuana flower, and legal and non-intoxicating since it contains negligible THC.',
    healthNotes: [
      { claim: 'A rare complete plant protein source with all nine essential amino acids, relevant for plant-based diets.', grade: 'A' },
      { claim: 'Its omega-6-to-omega-3 ratio (roughly 3:1) is more favorable than most seed oils, which tend to be far more omega-6-dominant.', grade: 'B' },
    ],
    fdcId: '170148', sources: [USDA('170148')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'watermelon-seeds', name: 'Watermelon Seeds', scientificName: 'Citrullus lanatus', class: 'seed', subgroup: 'melon-seed',
    regionalNames: { hi: 'तरबूज के बीज (Tarbooz ke Beej)' },
    summary: 'Dried watermelon seed kernels are a dense source of plant protein and magnesium, traditionally roasted and eaten as a snack in India (magaz) rather than discarded.',
    energyKcal: 557,
    composition: [
      { name: 'Protein', amount: 28.33, unit: 'g' }, { name: 'Fat', amount: 47.4, unit: 'g' },
      { name: 'Carbohydrate', amount: 15.3, unit: 'g' }, { name: 'Magnesium', amount: 515, unit: 'mg' },
      { name: 'Calcium', amount: 54, unit: 'mg' }, { name: 'Iron', amount: 7.28, unit: 'mg' },
      { name: 'Potassium', amount: 648, unit: 'mg' },
    ],
    keyNutrients: ['Plant Protein', 'Magnesium', 'Iron'],
    seasonalityIndia: 'Sold dried/roasted year-round as "magaz" snack seeds',
    preparationNote: 'Watermelon seeds are typically dried and hulled (kernels only) before eating — the whole unhulled seed has a tough, fibrous seed coat that is not palatable raw.',
    flags: [],
    healthNotes: [
      { claim: 'A dense plant protein and magnesium source often overlooked since the seeds are usually discarded rather than eaten with the fruit.', grade: 'B' },
    ],
    fdcId: '169407', sources: [USDA('169407')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'buckwheat', name: 'Buckwheat', scientificName: 'Fagopyrum esculentum', class: 'seed', subgroup: 'pseudocereal',
    regionalNames: { hi: 'कुट्टू (Kuttu)' },
    summary: 'Buckwheat (kuttu) is a gluten-free pseudocereal seed, traditionally eaten during Hindu fasting periods (vrat/navratri) in India, with a fiber and mineral profile comparable to whole grains.',
    energyKcal: 346,
    composition: [
      { name: 'Protein', amount: 11.7, unit: 'g' }, { name: 'Fat', amount: 2.7, unit: 'g' },
      { name: 'Carbohydrate', amount: 75, unit: 'g' }, { name: 'Fiber', amount: 10.3, unit: 'g' },
      { name: 'Magnesium', amount: 203, unit: 'mg' }, { name: 'Potassium', amount: 414, unit: 'mg' },
      { name: 'Iron', amount: 2.44, unit: 'mg' }, { name: 'Zinc', amount: 2.24, unit: 'mg' },
    ],
    keyNutrients: ['Fiber', 'Magnesium', 'Rutin (flavonoid)', 'Plant Protein'],
    seasonalityIndia: 'Widely eaten during religious fasting periods (kuttu ka atta/flour)',
    preparationNote: 'Despite the name, buckwheat is not related to wheat and contains no gluten — botanically it is a seed related to rhubarb and sorrel, not a true cereal grass.',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'Naturally gluten-free with a fiber and mineral density comparable to or exceeding many true cereal grains.', grade: 'A' },
      { claim: 'Contains rutin, a flavonoid studied for vascular antioxidant activity; clinical significance at typical dietary intake is still being established.', grade: 'C', citationPending: true },
    ],
    fdcId: '170685', sources: [USDA('170685')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'amaranth-seed', name: 'Amaranth', scientificName: 'Amaranthus', class: 'seed', subgroup: 'pseudocereal',
    regionalNames: { hi: 'राजगिरा (Rajgira)' },
    summary: 'Amaranth (rajgira) is a gluten-free pseudocereal seed notably rich in iron and manganese, traditionally popped into a snack or eaten during Hindu fasting periods in India.',
    energyKcal: 371,
    composition: [
      { name: 'Protein', amount: 13.56, unit: 'g' }, { name: 'Fat', amount: 7, unit: 'g' },
      { name: 'Carbohydrate', amount: 65.25, unit: 'g' }, { name: 'Fiber', amount: 6.7, unit: 'g' },
      { name: 'Calcium', amount: 159, unit: 'mg' }, { name: 'Iron', amount: 7.6, unit: 'mg' },
      { name: 'Magnesium', amount: 248, unit: 'mg' },
    ],
    keyNutrients: ['Iron', 'Manganese', 'Calcium', 'Plant Protein'],
    seasonalityIndia: 'Popped amaranth (rajgira) widely eaten during religious fasting periods',
    preparationNote: 'Popped amaranth (like popcorn) is a common lighter-preparation snack form; the flour form is used in fasting-friendly flatbreads (rajgira roti).',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'A notably iron- and calcium-dense gluten-free pseudocereal relative to true cereal grains.', grade: 'A' },
    ],
    fdcId: '170682', sources: [USDA('170682')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'poppy-seed', name: 'Poppy Seed', scientificName: 'Papaver somniferum', class: 'seed', subgroup: 'spice-seed',
    regionalNames: { hi: 'खसखस (Khus Khus)' },
    summary: 'Culinary poppy seed (khus khus) is harvested from the dried seed pod after the plant\'s opium-bearing latex has been removed, and contains only trace, non-narcotic alkaloid residue; it is among the most calcium-dense common foods.',
    perServingNote: 'Typical culinary serving is 1–5 g — composition below is a per-100g reference scale.',
    energyKcal: 525,
    composition: [
      { name: 'Protein', amount: 18, unit: 'g' }, { name: 'Fat', amount: 41.6, unit: 'g' },
      { name: 'Carbohydrate', amount: 28.1, unit: 'g' }, { name: 'Fiber', amount: 19.5, unit: 'g' },
      { name: 'Calcium', amount: 1438, unit: 'mg' }, { name: 'Iron', amount: 9.76, unit: 'mg' },
      { name: 'Magnesium', amount: 347, unit: 'mg' }, { name: 'Zinc', amount: 7.9, unit: 'mg' },
    ],
    keyNutrients: ['Calcium', 'Iron', 'Magnesium', 'Healthy Fat'],
    preparationNote: 'Culinary/food-grade poppy seed is a legal, widely used ingredient (khus khus in Indian cuisine) distinct from opium latex; trace alkaloid residue on the seed surface can, rarely, cause a false positive on a drug test shortly after eating a large quantity.',
    flags: [],
    healthNotes: [
      { claim: 'Among the most calcium-dense common foods by weight, exceeding most dairy products per 100 g.', grade: 'A' },
      { claim: 'Trace opiate alkaloid residue on the seed coat is real but pharmacologically negligible at normal culinary quantities; food-safety washing standards further reduce it.', grade: 'B' },
    ],
    fdcId: '171330', sources: [USDA('171330')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
];

// Pulses & Legumes. Cross-referenced against the round-13 Seeds finding: chickpeas, lentils,
// common beans, and green peas also have boilerplate files scattered into Seeds/ — this
// pillar's real content below is the intended canonical home for them (Seeds/ duplicates
// left untouched, flagged for owner dedup).
export const PULSES_DATA: FoodEntity[] = [
  {
    id: 'chickpeas', name: 'Chickpeas', scientificName: 'Cicer arietinum', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'चना (Chana)' },
    summary: 'Chickpeas (chana) — cooked — provide about 164 kcal per 100 g, a strong plant protein and folate source used across Indian, Middle Eastern, and Mediterranean cuisines.',
    energyKcal: 164,
    composition: [
      { name: 'Water', amount: 60.2, unit: 'g' }, { name: 'Carbohydrate', amount: 27.4, unit: 'g' },
      { name: 'Sugars', amount: 4.8, unit: 'g' }, { name: 'Fiber', amount: 7.6, unit: 'g' },
      { name: 'Protein', amount: 8.9, unit: 'g' }, { name: 'Fat', amount: 2.6, unit: 'g' },
      { name: 'Folate', amount: 172, unit: 'µg' },
    ],
    glycemicIndex: 28, glycemicNote: 'Low GI (~28) — among the lowest of common legumes, useful for blood-sugar-aware meal planning.',
    keyNutrients: ['Plant Protein', 'Folate', 'Fiber', 'Iron'],
    preparationNote: 'Desi chana (smaller, darker, higher-fiber) and kabuli chana (larger, lighter, "garbanzo") are the same species with different cultivar profiles; desi is more common in Indian dals and chana flour (besan).',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'A strong plant protein and folate source with a low glycemic index, a favorable combination for blood-sugar and satiety management.', grade: 'A' },
      { claim: 'Combining chickpeas with a grain (e.g. rice, roti) over the course of a day provides a more complete essential amino acid profile than either eaten alone.', grade: 'B' },
    ],
    fdcId: '173757', sources: [USDA('173757')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'lentils', name: 'Lentils', scientificName: 'Lens culinaris', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'मसूर दाल (Masoor Dal)' },
    summary: 'Lentils (masoor dal) — cooked — provide about 116 kcal per 100 g and are among the fastest-cooking, most widely eaten pulses in Indian households, notably rich in folate.',
    energyKcal: 116,
    composition: [
      { name: 'Carbohydrate', amount: 20.1, unit: 'g' }, { name: 'Fiber', amount: 8, unit: 'g' },
      { name: 'Protein', amount: 9.02, unit: 'g' }, { name: 'Folate', amount: 181, unit: 'µg' },
    ],
    glycemicIndex: 32, glycemicNote: 'Low GI (~32).',
    keyNutrients: ['Folate', 'Plant Protein', 'Iron', 'Fiber'],
    preparationNote: 'Split, hulled red/yellow lentils (masoor/dhuli masoor) cook fastest and break down into a smooth dal; whole brown/green/black lentils hold their shape better and have a slightly firmer texture and marginally higher fiber from the retained seed coat.',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'One of the richest common dietary folate sources, notably relevant in preconception and prenatal nutrition.', grade: 'A' },
      { claim: 'A low-glycemic-index plant protein source that pairs well with rice or roti for a fuller amino acid profile across the day.', grade: 'B' },
    ],
    fdcId: '172421', sources: [USDA('172421')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'kidney-beans', name: 'Kidney Beans', scientificName: 'Phaseolus vulgaris', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'राजमा (Rajma)' },
    summary: 'Kidney beans (rajma) — cooked — provide about 127 kcal per 100 g and are a fiber-dense staple of North Indian cuisine (rajma-chawal); raw/undercooked kidney beans contain a natural toxin destroyed by proper boiling.',
    energyKcal: 127,
    composition: [
      { name: 'Carbohydrate', amount: 22.8, unit: 'g' }, { name: 'Fiber', amount: 6.4, unit: 'g' },
      { name: 'Fat', amount: 0.5, unit: 'g' }, { name: 'Protein', amount: 8.7, unit: 'g' },
      { name: 'Folate', amount: 130, unit: 'µg' },
    ],
    glycemicIndex: 24, glycemicNote: 'Low GI (~24), one of the lowest of common pulses.',
    keyNutrients: ['Fiber', 'Folate', 'Plant Protein', 'Iron'],
    preparationNote: 'Raw or undercooked kidney beans contain phytohaemagglutinin, a natural toxin causing gastrointestinal illness; a full rolling boil for at least 10 minutes (not just a low simmer or slow-cooker warmth) is required to destroy it — dried beans should always be boiled hard before finishing in a slow cooker.',
    flags: ['gluten-free', 'requires-thorough-cooking'],
    healthNotes: [
      { claim: 'A fiber- and folate-dense plant protein source at a low glycemic index.', grade: 'A' },
      { claim: 'Must be fully boiled (not merely simmered) to inactivate phytohaemagglutinin — a genuine, well-documented food-safety requirement, not a general caution.', grade: 'A' },
    ],
    fdcId: '173740', sources: [USDA('173740')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'mung-beans', name: 'Mung Beans', scientificName: 'Vigna radiata', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'मूंग दाल (Moong Dal)' },
    summary: 'Mung beans (moong dal) — cooked — provide about 105 kcal per 100 g and are considered one of the easiest-to-digest common dals, widely used in Indian khichdi and as sprouts.',
    energyKcal: 105,
    composition: [
      { name: 'Carbohydrate', amount: 19.15, unit: 'g' }, { name: 'Fiber', amount: 8, unit: 'g' },
      { name: 'Protein', amount: 7.02, unit: 'g' }, { name: 'Folate', amount: 159, unit: 'µg' },
    ],
    glycemicIndex: 31, glycemicNote: 'Low GI (~31).',
    keyNutrients: ['Folate', 'Plant Protein', 'Fiber', 'Magnesium'],
    preparationNote: 'Split, hulled mung (moong dal dhuli) is the gentlest on digestion and a common first solid-food dal in Indian households; sprouted whole mung beans increase vitamin C content and are eaten raw or lightly cooked.',
    flags: ['gluten-free', 'easy-to-digest'],
    healthNotes: [
      { claim: 'Widely regarded, and clinically observed, as one of the more easily digested common pulses, useful during recovery from digestive upset.', grade: 'B' },
      { claim: 'A good folate and low-glycemic-index plant protein source.', grade: 'A' },
    ],
    fdcId: '174257', sources: [USDA('174257')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'urad-dal', name: 'Urad Dal (Black Gram)', scientificName: 'Vigna mungo', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'उड़द दाल (Urad Dal)' },
    summary: 'Urad dal (black gram) — cooked — provides about 105 kcal per 100 g and is notably the most calcium-rich common Indian dal, essential to idli/dosa batter fermentation and dal makhani.',
    energyKcal: 105,
    composition: [
      { name: 'Carbohydrate', amount: 17.9, unit: 'g' }, { name: 'Fiber', amount: 5.5, unit: 'g' },
      { name: 'Protein', amount: 7, unit: 'g' }, { name: 'Calcium', amount: 40, unit: 'mg' },
      { name: 'Iron', amount: 2, unit: 'mg' },
    ],
    keyNutrients: ['Calcium', 'Plant Protein', 'Iron', 'Fiber'],
    seasonalityIndia: 'Staple year-round; central to South Indian fermented batters (idli/dosa) and Punjabi dal makhani',
    preparationNote: 'Urad dal\'s mucilaginous quality is what allows idli/dosa batter to ferment and rise — combined with rice, wild airborne and dal-surface bacteria/yeast produce natural leavening without added yeast.',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'Among the most calcium-dense common dals, a notable point for plant-based diets seeking non-dairy calcium sources.', grade: 'B' },
      { claim: 'Its role in idli/dosa batter fermentation also introduces natural probiotic activity into the finished, fermented food.', grade: 'B' },
    ],
    sources: [IFCT], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'pigeon-pea', name: 'Pigeon Pea (Toor Dal)', scientificName: 'Cajanus cajan', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'तूर दाल / अरहर दाल (Toor/Arhar Dal)' },
    summary: 'Pigeon pea (toor/arhar dal) — cooked — provides about 121 kcal per 100 g and is the most widely consumed dal in India, forming the base of sambar and most everyday household dal preparations.',
    energyKcal: 121,
    composition: [
      { name: 'Carbohydrate', amount: 23.25, unit: 'g' }, { name: 'Fiber', amount: 6.7, unit: 'g' },
      { name: 'Fat', amount: 0.4, unit: 'g' }, { name: 'Protein', amount: 6.76, unit: 'g' },
    ],
    keyNutrients: ['Plant Protein', 'Fiber', 'Folate', 'Potassium'],
    seasonalityIndia: 'India\'s most widely consumed dal by volume; central to sambar and everyday household cooking nationwide',
    preparationNote: 'Pressure-cooking substantially shortens toor dal\'s cook time versus open-pot boiling and is the near-universal household method in India.',
    flags: ['gluten-free'],
    healthNotes: [
      { claim: 'A practical everyday plant protein and fiber source given how frequently it is consumed across Indian diets.', grade: 'B' },
    ],
    fdcId: '172437', sources: [USDA('172437')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'green-peas', name: 'Green Peas', scientificName: 'Pisum sativum', class: 'pulse', subgroup: 'legume',
    regionalNames: { hi: 'मटर (Matar)' },
    summary: 'Green peas (matar) — cooked — provide about 84 kcal per 100 g, and are eaten fresh as a vegetable-like legume rather than dried, notable for vitamin K and plant protein.',
    energyKcal: 84,
    composition: [
      { name: 'Carbohydrate', amount: 12.6, unit: 'g' }, { name: 'Protein', amount: 5.36, unit: 'g' },
      { name: 'Vitamin K', amount: 26, unit: 'µg' },
    ],
    keyNutrients: ['Vitamin K', 'Plant Protein', 'Fiber', 'Vitamin C'],
    seasonalityIndia: 'Winter (Nov–Feb)',
    preparationNote: 'Fresh and frozen green peas retain nutrients comparably; frozen peas are picked and flash-frozen at peak ripeness, often preserving vitamin C better than "fresh" peas that have traveled and aged before cooking.',
    flags: [],
    healthNotes: [
      { claim: 'A notable plant protein source for a fresh vegetable-style legume, alongside a meaningful vitamin K contribution.', grade: 'B' },
    ],
    fdcId: '170420', sources: [USDA('170420')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'peanuts', name: 'Peanuts', scientificName: 'Arachis hypogaea', class: 'pulse', subgroup: 'oil-legume',
    regionalNames: { hi: 'मूंगफली (Moongphali)' },
    summary: 'Peanuts (moongphali) — dry-roasted — provide about 587 kcal per 100 g; botanically a legume (not a tree nut), and a common allergen requiring careful labeling and clinical caution.',
    energyKcal: 587,
    composition: [
      { name: 'Carbohydrate', amount: 12.86, unit: 'g' }, { name: 'Protein', amount: 24.35, unit: 'g' },
      { name: 'Monounsaturated Fat', amount: 26, unit: 'g' }, { name: 'Magnesium', amount: 178, unit: 'mg' },
    ],
    keyNutrients: ['Plant Protein', 'Monounsaturated Fat', 'Magnesium', 'Folate (raw)'],
    flags: ['common-allergen', 'legume-not-tree-nut'],
    preparationNote: 'Peanuts are botanically a legume that grows underground, not a tree nut — clinically relevant since tree-nut allergy and peanut allergy are distinct (though sometimes co-occurring) immune responses.',
    healthNotes: [
      { claim: 'A dense plant protein and monounsaturated fat source; energy-dense, so portion awareness matters in calorie-controlled diets.', grade: 'B' },
      { claim: 'One of the most common food allergens, capable of severe (anaphylactic) reactions — always confirm allergy status before recommending peanuts or peanut-derived products clinically.', grade: 'A' },
    ],
    fdcId: '173806', sources: [USDA('173806')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'soybeans', name: 'Soybeans', scientificName: 'Glycine max', class: 'pulse', subgroup: 'oil-legume',
    regionalNames: {},
    summary: 'Soybeans — cooked, mature — provide about 172 kcal per 100 g and are the only common plant food providing a complete essential amino acid profile in a single, unprocessed source.',
    energyKcal: 172,
    composition: [
      { name: 'Carbohydrate', amount: 8.4, unit: 'g' }, { name: 'Protein', amount: 18.21, unit: 'g' },
    ],
    keyNutrients: ['Complete Plant Protein', 'Isoflavones', 'Fiber', 'Iron'],
    preparationNote: 'Fresh green soybeans (edamame, steamed in the pod) and mature dried/cooked soybeans are the same species at different harvest maturity; edamame is milder and higher in moisture, mature soybeans are used for tofu, tempeh, and soy milk.',
    flags: ['gluten-free', 'complete-protein'],
    healthNotes: [
      { claim: 'One of the very few plant foods providing a complete essential-amino-acid profile comparable to animal protein sources.', grade: 'A' },
      { claim: 'Contains isoflavones (plant phytoestrogens) studied for menopausal symptom and cardiovascular research; effects are modest and dose-dependent, not equivalent to hormone therapy.', grade: 'B' },
    ],
    fdcId: '174299', sources: [USDA('174299')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
  {
    id: 'fava-beans', name: 'Fava Beans', scientificName: 'Vicia faba', class: 'pulse', subgroup: 'legume',
    regionalNames: {},
    summary: 'Fava beans (broad beans) — cooked — provide about 110 kcal per 100 g and are a Mediterranean/Middle Eastern staple; they carry a well-documented, clinically important risk of triggering favism in people with G6PD deficiency.',
    energyKcal: 110,
    composition: [
      { name: 'Water', amount: 72.1, unit: 'g' }, { name: 'Carbohydrate', amount: 19.8, unit: 'g' },
      { name: 'Fiber', amount: 5.4, unit: 'g' }, { name: 'Fat', amount: 0.4, unit: 'g' },
      { name: 'Protein', amount: 7.7, unit: 'g' },
    ],
    keyNutrients: ['Plant Protein', 'Fiber', 'Folate', 'Iron'],
    flags: ['gluten-free', 'g6pd-caution'],
    preparationNote: 'People with G6PD deficiency (an inherited enzyme condition, more common in Mediterranean, Middle Eastern, African, and South/Southeast Asian populations) can develop acute hemolytic anemia ("favism") from eating fava beans — this is a genuine, well-documented clinical contraindication, not a general food sensitivity.',
    healthNotes: [
      { claim: 'A reasonable plant protein and fiber source for the general population, but a genuine, serious contraindication exists for individuals with G6PD deficiency — screening or a known-safe history matters before recommending fava beans clinically.', grade: 'A' },
    ],
    fdcId: '173753', sources: [USDA('173753')], lastReviewed: REVIEWED, reviewedBy: REVIEWER,
  },
];

// Registry of food classes present (extended as new classes are authored).
export const FOOD_CLASSES: { class: FoodClass; label: string; hub: string; data: FoodEntity[] }[] = [
  { class: 'fruit', label: 'Fruits', hub: '/knowledge/fruits', data: FRUITS_DATA },
  { class: 'grain', label: 'Grains & Millets', hub: '/knowledge/grains', data: GRAINS_DATA },
  { class: 'vegetable', label: 'Vegetables', hub: '/knowledge/vegetables', data: VEGETABLES_DATA },
  { class: 'spice', label: 'Spices', hub: '/knowledge/spices', data: SPICES_DATA },
  { class: 'seed', label: 'Seeds', hub: '/knowledge/seeds', data: SEEDS_DATA },
  { class: 'pulse', label: 'Pulses & Legumes', hub: '/knowledge/pulses-legumes', data: PULSES_DATA },
];

export function getFoodsByClass(cls: FoodClass): FoodEntity[] {
  return (FOOD_CLASSES.find((c) => c.class === cls)?.data) || [];
}
