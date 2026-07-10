import { Recipe } from './types';

export const RECIPES: Recipe[] = [
  {
    id: 'golden-turmeric-quinoa',
    title: 'Golden Turmeric Quinoa Nourish Bowl',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339cf?q=80&w=800',
    tags: ['Anti-inflammatory', 'Metabolic', 'Vegan'],
    prepTime: '25 mins',
    calories: '420',
    description: 'The Anti-Inflammatory Powerhouse for Mindful Eating.',
    healingDescription: 'This warm, sun-colored bowl is a grounding ritual, perfect for nourishing the body during mindful lunches or light dinners. It masterfully blends the nutty texture of quinoa with the vibrant, earthy warmth of turmeric and a medley of nourishing vegetables.',
    ingredients: [
      { name: 'Quinoa', detail: '1 cup cooked' },
      { name: 'Turmeric', detail: '1 tsp ground' },
      { name: 'Cauliflower', detail: '1 cup roasted' },
      { name: 'Chickpeas', detail: '1/2 cup cooked' },
      { name: 'Tahini', detail: '2 tbsp' },
      { name: 'Lemon', detail: '1/2 juiced' }
    ],
    primaryBenefit: 'Anti-inflammatory Support',
    fullHealingContent: `Quinoa (The Complete Grain): A gluten-free pseudo-cereal, quinoa is a complete protein, offering all nine essential amino acids. Its high fiber content supports sustained energy and digestive regularity.

Turmeric (Golden Spice): The star of this bowl is curcumin, the active compound in turmeric, celebrated for powerful anti-inflammatory properties. Combining it with healthy fat (like tahini) enhances absorption.

Roasted Cauliflower & Chickpeas: These provide essential dietary fiber and a wealth of vitamins and minerals. Chickpeas boost plant protein, while cauliflower adds natural sweetness.

Lemon & Tahini Drizzle: Provides necessary healthy fats and a burst of Vitamin C, crucial for immune and skin health.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Golden Turmeric Quinoa Bowl | Anti-Inflammatory Recipe',
    metaDescription: 'Dr. Shilpa Thakur\'s clinical turmeric quinoa nourish bowl recipe. Optimized for anti-inflammatory support, complete amino acids, and high digestibility.',
    primaryKeyword: 'Anti-Inflammatory Quinoa Bowl'
  },
  {
    id: 'avocado-lentil-tartare',
    title: 'Avocado & Sprouted Lentil Herb Tartare',
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1511688858341-a1ca5d89851a?q=80&w=800',
    tags: ['Heart Health', 'Metabolic', 'Gourmet'],
    prepTime: '20 mins',
    calories: '350',
    description: 'Gourmet Wellness: A Gentle Dish for Heart and Metabolic Wellness.',
    healingDescription: 'Elevate your clean eating with this sophisticated tartare. The buttery, creamy texture of fresh avocado is perfectly contrasted with the tender bite of sprouted lentils.',
    ingredients: [
      { name: 'Avocado', detail: '1 ripe, diced' },
      { name: 'Sprouted Lentils', detail: '1/2 cup' },
      { name: 'Parsley', detail: '2 tbsp fresh' },
      { name: 'Capers', detail: '1 tsp' },
      { name: 'Olive Oil', detail: '1 tbsp cold-pressed' }
    ],
    primaryBenefit: 'Heart and Metabolic Wellness',
    fullHealingContent: `Avocado (Healthy Fat Foundation): Rich in monounsaturated fats (like oleic acid), avocados promote heart health and provide essential vitamins (K, C, E).

Sprouted Lentils (Enhanced Digestion): Sprouting increases bioavailability, making nutrients easier to absorb. They are a powerhouse of plant protein and iron.

Parsley & Capers: Fresh parsley contributes Vitamin K and antioxidants, while capers add briny depth and polyphenols.

Cold-Pressed Olive Oil: Provides anti-inflammatory monounsaturated fats and acts as a medium for absorbing fat-soluble vitamins.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Avocado & Sprouted Lentil Tartare | Heart Health Recipe',
    metaDescription: 'Gourmet sprouted lentil and avocado herb tartare clinical recipe. Optimized for heart health, glycemic stability, and high enzyme activity.',
    primaryKeyword: 'Heart Healthy Lentil Tartare'
  },
  {
    id: 'green-vitality-soup',
    title: 'Moringa & Spinach Green Vitality Soup',
    category: 'Soup',
    image: 'https://images.unsplash.com/photo-1547592166-83ac45744acd?q=80&w=800',
    tags: ['Immunity', 'Cellular Health', 'Chlorophyll'],
    prepTime: '20 mins',
    calories: '180',
    description: 'The Chlorophyll-Rich Elixir for Immunity and Cellular Nourishment.',
    healingDescription: 'This silky, emerald-green soup is a powerful infusion of plant chlorophyll, traditionally valued for its deeply nourishing and renewal properties.',
    ingredients: [
      { name: 'Spinach', detail: '2 cups fresh' },
      { name: 'Moringa Powder', detail: '1 tsp' },
      { name: 'Leek', detail: '1 medium' },
      { name: 'Garlic', detail: '2 cloves' },
      { name: 'Almond Milk', detail: '1/2 cup' }
    ],
    primaryBenefit: 'Immunity and Cellular Nourishment',
    fullHealingContent: `Spinach (Nutrient Density): A classic superfood providing high levels of Vitamin A, C, and Folate. It supports red blood cell production and general vitality.

Moringa Powder (The Miracle Tree): One of the most nutrient-dense plants on earth. Supports the body’s natural defense systems and cellular health.

Leek & Garlic (Aromatic Base): Alliums contain sulfur compounds important for detoxification and immune function.

Almond Milk (Creamy & Light): A dairy-free base that adds delicate creaminess while keeping the soup light and easy to digest.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Moringa & Spinach Vitality Soup | Immunity Recipe',
    metaDescription: 'Clinical moringa powder and chlorophyll-rich spinach soup recipe. Designed for cellular nourishment, natural defense support, and gut ease.',
    primaryKeyword: 'Immune Boosting Spinach Soup'
  },
  {
    id: 'beetroot-walnut-carpaccio',
    title: 'Roasted Beetroot & Walnut Carpaccio',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1543326162-81788c09d57a?q=80&w=800',
    tags: ['Circulatory', 'Heart Health', 'Gourmet'],
    prepTime: '20 mins',
    calories: '280',
    description: 'The Earthy Gem for Circulatory & Heart Health.',
    healingDescription: 'Thinly sliced, roasted beets offer grounding energy, balanced by peppery arugula and rich walnuts. Designed to support a strong circulatory system.',
    ingredients: [
      { name: 'Beetroot', detail: '2 roasted, sliced' },
      { name: 'Walnuts', detail: '1/4 cup toasted' },
      { name: 'Arugula', detail: '1 cup fresh' },
      { name: 'Balsamic Reduction', detail: '1 tbsp' }
    ],
    primaryBenefit: 'Circulatory and Heart Support',
    fullHealingContent: `Beetroot (Nitrate Power): Famous for high concentration of dietary nitrates, which convert to nitric oxide to relax blood vessels and support healthy blood pressure.

Walnuts (Brain and Heart Fuel): Richest nut source of plant-based omega-3 fatty acids (ALA), critical for reducing inflammation and promoting cardiovascular health.

Arugula (Cleansing Greens): Peppery green rich in Vitamin K with compounds that support natural detoxification.

Balsamic Reduction: Provides a sophisticated tang and is traditionally valued for digestive properties.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'ayurvedic-millet-stew',
    title: 'Ayurvedic Kitchari-Style Millet Stew',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1631296531952-52643a60a720?q=80&w=800',
    tags: ['Gut Health', 'Digestion', 'Ayurveda'],
    prepTime: '30 mins',
    calories: '300',
    description: 'The Comforting One-Pot Meal for Gut Balance and Digestive Ease.',
    healingDescription: 'Inspired by ancient Ayurvedic tradition, this restorative meal promote lightness and digestive harmony, helping rebalance the digestive fire (Agni).',
    ingredients: [
      { name: 'Millet', detail: '1/2 cup' },
      { name: 'Mung Dal', detail: '1/2 cup' },
      { name: 'Ginger', detail: '1 inch fresh' },
      { name: 'Cumin', detail: '1 tsp' },
      { name: 'Coriander', detail: '1 tsp' }
    ],
    primaryBenefit: 'Gut Balance and Digestive Ease',
    fullHealingContent: `Millet (Alkalizing Grain): Naturally gluten-free and alkaline-forming, helping balance pH. Rich in magnesium and phosphorus.

Mung Dal (Protein & Fiber): Highly prized in Ayurveda for being easy to digest while providing plant protein and soluble fiber.

Ginger, Cumin, & Coriander (The Tri-Spice Blend): Ginger stimulates digestion, cumin reduces bloating, and coriander has cooling properties for a harmonizing effect.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'kimchi-rice-bowl',
    title: 'Fermented Kimchi Brown Rice Bowl',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800',
    tags: ['Gut Health', 'Probiotics', 'Metabolic'],
    prepTime: '15 mins',
    calories: '320',
    description: 'A Modern Gut-as-Medicine Bowl for Microbiome Support.',
    healingDescription: 'Combines fermented foods and whole grains to support gut microbiome diversity and daily vitality.',
    ingredients: [
      { name: 'Brown Rice', detail: '1 cup cooked' },
      { name: 'Vegan Kimchi', detail: '1/2 cup' },
      { name: 'Cucumber', detail: '1/2 sliced' },
      { name: 'Sesame Seeds', detail: '1 tsp' }
    ],
    primaryBenefit: 'Gut Microbiome Support',
    fullHealingContent: `Vegan Kimchi (Live Probiotics): A fermentation powerhouse providing prebiotics and live probiotics vital for gut flora, mood, and immunity.

Brown Rice (Complex Carbohydrate): Provides slow-releasing energy and fiber that acts as a prebiotic, feeding beneficial bacteria.

Cucumber & Sesame Seeds: Cucumber adds cooling hydration, while sesame seeds provide healthy fats and essential minerals.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'ashwagandha-sweet-potato',
    title: 'Sweet Potato & Ashwagandha Coconut Mash',
    category: 'Side',
    image: 'https://images.unsplash.com/photo-1594911771144-ec406a454227?q=80&w=800',
    tags: ['Nervous System', 'Stress Relief', 'Adaptogen'],
    prepTime: '20 mins',
    calories: '240',
    description: 'The Grounding Comfort Dish for Nervous System Balance.',
    healingDescription: 'Naturally sweet and grounding, this vibrant mash incorporates ashwagandha to support stress resilience and calm the nervous system.',
    ingredients: [
      { name: 'Sweet Potato', detail: '2 large, mashed' },
      { name: 'Coconut Milk', detail: '1/4 cup' },
      { name: 'Ashwagandha Powder', detail: '1/2 tsp' },
      { name: 'Nutmeg', detail: 'pinch' }
    ],
    primaryBenefit: 'Nervous System Balance',
    fullHealingContent: `Sweet Potato (Beta-Carotene & Fiber): Excellent complex carbs and fiber. Rich in beta-carotene for skin and immune support.

Ashwagandha Powder (Adaptogen): Celebrated herb that helps the body manage stress and supports nervous system balance.

Coconut Milk: Adds creamy texture and provides MCTs, fats easily utilized for energy.

Nutmeg: A warming spice traditionally used to support sleep and calm the mind.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'papaya-detox-salad',
    title: 'Rainbow Raw Papaya & Lime Detox Salad',
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800',
    tags: ['Detox', 'Digestion', 'Enzymes'],
    prepTime: '15 mins',
    calories: '120',
    description: 'Light, Crisp, and Refreshing: The Ultimate Digestive Freshness Ritual.',
    healingDescription: 'Celebrates raw plant foods and the enzymes found in green papaya. Associated with cleansing rituals and digestive ease.',
    ingredients: [
      { name: 'Green Papaya', detail: '2 cups shredded' },
      { name: 'Carrot', detail: '1 shredded' },
      { name: 'Lime Juice', detail: '2 tbsp' },
      { name: 'Mint', detail: '1/4 cup fresh' },
      { name: 'Peanuts', detail: '1 tbsp crushed' }
    ],
    primaryBenefit: 'Digestive Freshness',
    fullHealingContent: `Green Papaya (Digestive Enzymes): Contains papain, a powerful enzyme that aids in breaking down proteins, supporting digestive efficiency.

Carrot (Antioxidant Crunch): Rich in beta-carotene and fiber for satisfying crunch and cellular health.

Lime Juice & Mint: Refreshing, alkalizing base that stimulates bile flow and supports liver function.

Peanuts: Source of plant protein and healthy fats for texture and satiety.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'hemp-basil-zoodles',
    title: 'Hemp Seed & Basil Cream Zoodles',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?q=80&w=800',
    tags: ['Protein', 'Skin Health', 'Low Carb'],
    prepTime: '15 mins',
    calories: '280',
    description: 'A Dairy-Free Gourmet Pasta Alternative for Plant-Based Protein & Skin Nourishment.',
    healingDescription: 'Low-carb and exceptionally hydrating pasta alternative. The hemp sauce is rich in essential fatty acids for radiant skin.',
    ingredients: [
      { name: 'Zucchini Noodles', detail: '2 medium zucchini' },
      { name: 'Hemp Seeds', detail: '1/2 cup' },
      { name: 'Basil', detail: '1 cup fresh' },
      { name: 'Garlic', detail: '2 cloves' }
    ],
    primaryBenefit: 'Plant-based Protein & Skin Nourishment',
    fullHealingContent: `Zucchini Noodles (Hydration & Minerals): Incredibly hydrating and rich in antioxidants like Vitamin C and lutein.

Hemp Seeds (Complete Protein & Omegas): Complete plant protein with ideal Omega-6 to Omega-3 ratio for reducing inflammation and skin health.

Fresh Basil: Aromatic flavor high in Vitamin K and antioxidants.

Garlic: Contains allicin, a compound with traditional immune-supportive properties.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'mushroom-thyme-broth',
    title: 'Mushroom & Thyme Healing Broth',
    category: 'Soup',
    image: 'https://images.unsplash.com/photo-1511144583984-38118201f0c8?q=80&w=800',
    tags: ['Immunity', 'Immune Resilience', 'Umami'],
    prepTime: '40 mins',
    calories: '150',
    description: 'An Umami-Rich Elixir for Immune Resilience.',
    healingDescription: 'An earthy, savory broth designed for grounding evenings. Focuses on immune-supportive power of mushrooms and aromatic thyme.',
    ingredients: [
      { name: 'Shiitake Mushrooms', detail: '2 cups' },
      { name: 'Thyme', detail: '4 sprigs' },
      { name: 'Onion', detail: '1 large' },
      { name: 'Sea Vegetables', detail: '1/2 sheet' }
    ],
    primaryBenefit: 'Immune Resilience',
    fullHealingContent: `Shiitake Mushrooms (Beta-Glucans): A functional food known to modulate the immune system and enhance natural defense mechanisms.

Thyme: Aromatic herb rich in volatile oils like thymol, used for respiratory and immune support.

Onion & Garlic: Alliums release powerful sulfur compounds during cooking, enhancing flavor and wellness.

Sea Vegetables (Minerals): Introduces essential trace minerals, particularly iodine, for systemic health.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'charred-broccoli-almonds',
    title: 'Charred Broccoli with Lemon Almond Drizzle',
    category: 'Side',
    image: 'https://images.unsplash.com/photo-1432457990754-c8b5f21448de?q=80&w=800',
    tags: ['Detox', 'Liver Health', 'Sulfur'],
    prepTime: '20 mins',
    calories: '190',
    description: 'Simple Yet Refined: Detox-Friendly Nourishment.',
    healingDescription: 'Showcases cruciferous vegetables in a detox-friendly form, focusing on nutrient density and healthy fats to support liver detoxification.',
    ingredients: [
      { name: 'Broccoli', detail: '1 large head' },
      { name: 'Almonds', detail: '1/4 cup' },
      { name: 'Lemon', detail: '1 juiced' },
      { name: 'Olive Oil', detail: '2 tbsp' }
    ],
    primaryBenefit: 'Detox-Friendly Nourishment',
    fullHealingContent: `Broccoli (Glucosinolates): Packed with glucosinolates that convert to sulforaphane, supporting the liver's Phase II detoxification pathways.

Almonds (Vitamin E & Magnesium): Provides Vitamin E antioxidant and magnesium essential for 300+ biochemical reactions.

Lemon Zest & Juice: Bright, alkalizing element with high Vitamin C for detoxification co-factors.

Olive Oil: Heat-stable monounsaturated fats necessary for efficient absorption of fat-soluble vitamins.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'chia-berry-parfait',
    title: 'Chia & Berry Antioxidant Parfait',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1510629954389-c1e0da47d414?q=80&w=800',
    tags: ['Antioxidant', 'Brain Health', 'Dessert'],
    prepTime: '10 mins',
    calories: '250',
    description: 'Elegant and Naturally Sweet: The Morning Antioxidant Support.',
    healingDescription: 'Mindful breakfast or light dessert leveraging chia and mixed berries for steady energy and high antioxidant capacity.',
    ingredients: [
      { name: 'Chia Seeds', detail: '1/4 cup' },
      { name: 'Berries', detail: '1/2 cup fresh' },
      { name: 'Almond Milk', detail: '1 cup' },
      { name: 'Vanilla Extract', detail: '1/2 tsp' }
    ],
    primaryBenefit: 'Antioxidant Support',
    fullHealingContent: `Chia Seeds (Fiber & Omega-3s): Hydrophilic seeds that promote satiety and digestive regularity. Excellent source of plant-based Omega-3s (ALA).

Blueberries & Strawberries (Anthocyanins): Renowned for high antioxidant concentration linked to cognitive and cardiovascular health.

Almond Milk: Creamy, dairy-free liquidated base that keeps focus on seeds and berries.

Steady Energy: Provides a slow release of energy without refined sugar spikes.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'jackfruit-turmeric-wraps',
    title: 'Jackfruit & Turmeric Leaf Wraps',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1589147118279-335d18d53085?q=80&w=800',
    tags: ['Anti-inflammatory', 'Vegan', 'Fiber'],
    prepTime: '30 mins',
    calories: '310',
    description: 'Slow-Cooked, Warming Wraps for Anti-inflammatory Nourishment.',
    healingDescription: 'Gourmet, satisfying bite featuring slow-cooked jackfruit with warming spices that deliver potent anti-inflammatory compounds.',
    ingredients: [
      { name: 'Young Jackfruit', detail: '2 cups shredded' },
      { name: 'Turmeric', detail: '1 tbsp' },
      { name: 'Ginger', detail: '1 tbsp' },
      { name: 'Leafy Greens', detail: 'Large leaves for wrapping' }
    ],
    primaryBenefit: 'Anti-inflammatory Nourishment',
    fullHealingContent: `Jackfruit (Textured Fiber): Exceptional source of dietary fiber, supporting gut health and adding substantial texture.

Turmeric (The Anti-Inflammatory Star): Infusing jackfruit with turmeric ensure presence of curcumin for inflammation response.

Ginger: Adds fresh heat that aids digestion and enhances the therapeutic effect of turmeric.

Leafy Greens: Provides final layer of hydration, chlorophyll, and essential micronutrients.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'matcha-coconut-truffles',
    title: 'Matcha & Coconut Energy Truffles',
    category: 'Snack',
    image: 'https://images.unsplash.com/photo-1515516089376-88db1e26e9c0?q=80&w=800',
    tags: ['Mental Clarity', 'Energy', 'No-Bake'],
    prepTime: '20 mins',
    calories: '120',
    description: 'The Refined No-Bake Treat for Mental Clarity & Sustained Energy.',
    healingDescription: 'Refined, no-bake energy truffles designed to support calm focus and provide clean, sustained energy.',
    ingredients: [
      { name: 'Matcha Powder', detail: '2 tbsp' },
      { name: 'Shredded Coconut', detail: '1 cup' },
      { name: 'Dates', detail: '1/2 cup' },
      { name: 'Almonds', detail: '1/4 cup' }
    ],
    primaryBenefit: 'Mental Clarity & Sustained Energy',
    fullHealingContent: `Matcha Powder (L-Theanine & Catechins): High concentration of antioxidants and L-Theanine for "calm alertness" and mental clarity.

Coconut (MCTs): Rich in Medium-Chain Triglycerides (MCTs) used directly for energy and brain function.

Dates: Whole-food sweetener and binder providing fiber and potassium for steady energy release.

Almonds: Healthy monounsaturated fats and protein to balance the energy profile.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'baked-pears-cinnamon',
    title: 'Baked Pears with Cinnamon & Cacao Nibs',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=800',
    tags: ['Digestion', 'Comfort', 'Sweet'],
    prepTime: '25 mins',
    calories: '210',
    description: 'A Gently Sweet Dessert for Comforting Digestive Support.',
    healingDescription: 'Mindful indulgence celebrating whole foods. Baked pears are easy to digest and aid in systemic comfort.',
    ingredients: [
      { name: 'Pears', detail: '2 large' },
      { name: 'Cinnamon', detail: '1 tsp' },
      { name: 'Cacao Nibs', detail: '1 tbsp' },
      { name: 'Maple Syrup', detail: '1 tsp' }
    ],
    primaryBenefit: 'Comforting Digestive Support',
    fullHealingContent: `Pears (Soluble Fiber): Rich in soluble fiber (pectin) which is gentle on the digestive system. Baking enhances digestibility.

Cinnamon (Blood Sugar Support): Aids in improving insulin sensitivity and stabilizing blood sugar levels.

Cacao Nibs (Antioxidants & Crunch): Sophisticated dark flavor with flavanols and no added sugar, plus satisfying crunch.

Minimal Sweetener: Maple syrup used sparingly to enhance natural sweetness mindfully.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'spirulina-lemon-shots',
    title: 'Spirulina & Lemon Vitality Shots',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1?q=80&w=800',
    tags: ['Detox', 'Energy', 'Chlorophyll'],
    prepTime: '5 mins',
    calories: '45',
    description: 'The Micro-Nutrient Boost for Heavy Metal Detox & Cellular Energy.',
    healingDescription: 'Concentrated elixir designed to flood the body with micronutrients. Leverages spirulina for cleansing and lemon for alkalizing.',
    ingredients: [
      { name: 'Spirulina Powder', detail: '1 tsp' },
      { name: 'Lemon Juice', detail: '1/2 lemon' },
      { name: 'Ginger', detail: '1/2 inch' },
      { name: 'Filtered Water', detail: '1/4 cup' }
    ],
    primaryBenefit: 'Heavy Metal Detox & Cellular Energy',
    fullHealingContent: `Spirulina Powder (Chlorophyll & Protein): Powerhouse of complete protein and bioavailable nutrients. Aids in oxygenating blood and removing heavy metals.

Lemon Juice (Alkalizing & Vitamin C): Helps alkalize the body and provides a necessary boost for immune function.

Ginger Root (Digestive Stimulant): Stimulates circulation and digestive enzymes, enhancing nutrient absorption.

Water: Essential delivery vehicle for concentrated ingredients.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'grilled-artichoke-rosemary',
    title: 'Grilled Artichoke with Rosemary Salt',
    category: 'Side',
    image: 'https://images.unsplash.com/photo-1543326162-81788c09d57a?q=80&w=800',
    tags: ['Digestion', 'Liver Health', 'Gallbladder'],
    prepTime: '25 mins',
    calories: '160',
    description: 'The Gallbladder & Digestive Stimulant for Mindful Fat Digestion.',
    healingDescription: 'Transforms artichoke into a centerpiece of wellness. Specifically valued for supporting bile flow and fat metabolism.',
    ingredients: [
      { name: 'Artichoke', detail: '2 whole' },
      { name: 'Rosemary', detail: '1 sprig fresh' },
      { name: 'Olive Oil', detail: '1 tbsp' },
      { name: 'Sea Salt', detail: 'pinch' }
    ],
    primaryBenefit: 'Gallbladder & Digestive Stimulant',
    fullHealingContent: `Artichoke (Cynarin & Bile Flow): Contains cynarin which stimulates bile production, crucial for efficient fat digestion and absorption.

Rosemary (Carminative): Potent herb that helps relieve flatulence and soothe the digestive tract.

Olive Oil: Provides healthy fats that signal the body to activate bile release.

Sea Salt: Enhances flavor while providing trace minerals.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'lentil-kale-curry',
    title: 'Lentil & Kale Iron-Rich Curry',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=800',
    tags: ['Blood Building', 'Iron Rich', 'Vitality'],
    prepTime: '30 mins',
    calories: '340',
    description: 'The Grounding, Warming Meal for Blood Building & Sustained Vitality.',
    healingDescription: 'Warming curry designed to build blood and restore vitality. Pairs iron-rich lentils with Vitamin C for maximum absorption.',
    ingredients: [
      { name: 'Lentils', detail: '1 cup' },
      { name: 'Kale', detail: '2 cups' },
      { name: 'Tomato', detail: '1 large' },
      { name: 'Coconut Milk', detail: '1/2 cup' }
    ],
    primaryBenefit: 'Blood Building & Sustained Vitality',
    fullHealingContent: `Lentils (Non-Heme Iron): Superior plant iron source for red blood cell production and combating fatigue.

Kale (Vitamin K & Fiber): Abundant Vitamin K for bone health and fiber for steady energy.

Tomatoes (Vitamin C): Significantly increases ability to absorb non-heme iron from lentils.

Coconut Milk: Adds richness and provides MCTs for healthy energy.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'collard-wraps-chili',
    title: 'Chili-Spiced Collard Wraps',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339cf?q=80&w=800',
    tags: ['Metabolism', 'Weight Loss', 'Thermogenic'],
    prepTime: '20 mins',
    calories: '220',
    description: 'The Thermogenic Bite for Metabolism & Cellular Renewal.',
    healingDescription: 'Vibrant raw wrap that delivers a thermogenic boost through chili and warming spices. Stimulates internal heat.',
    ingredients: [
      { name: 'Collard Greens', detail: '4 large leaves' },
      { name: 'Cayenne Pepper', detail: 'pinch' },
      { name: 'Carrot', detail: '1 shredded' },
      { name: 'Tahini', detail: '2 tbsp' }
    ],
    primaryBenefit: 'Metabolism & Cellular Renewal',
    fullHealingContent: `Collard Greens (Sulfur): Powerhouse cruciferous vegetable supporting liver detoxification and Vitamin A.

Capsaicin (Thermogenic): Gently increases core temperature to support metabolic rate.

Raw Vegetables: High water and enzyme content to aid digestion.

Tahini: Adds healthy fats and calcium for a complete nutrient profile.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'reishi-cocoa-elixir',
    title: 'Red Reishi & Cocoa Elixir',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1505252585461-04e157eb543b?q=80&w=800',
    tags: ['Immunity', 'Sleep', 'Adaptogen'],
    prepTime: '10 mins',
    calories: '90',
    description: 'The Grounding Nightcap for Deep Immune Support & Adaptation.',
    healingDescription: 'Velvety beverage designed as a mindful nightcap. Blends Red Reishi for calm and cocoa for magnesium.',
    ingredients: [
      { name: 'Reishi Powder', detail: '1/2 tsp' },
      { name: 'Raw Cocoa', detail: '1 tbsp' },
      { name: 'Cinnamon', detail: '1/2 tsp' },
      { name: 'Plant Milk', detail: '1 cup' }
    ],
    primaryBenefit: 'Deep Immune Support & Adaptation',
    fullHealingContent: `Red Reishi (Mushroom of Immortality): Adaptogen that supports nervous system calm and modulates immunity.

Raw Cocoa (Magnesium): Rich in magnesium to relax muscles and promote quality sleep.

Cinnamon: Helps stabilize blood sugar to prevent nighttime energy dips.

Plant Milk Base: Soothing and grounding experience for winding down.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Red Reishi & Cocoa Elixir – Sleep Support Recipe',
    metaDescription: 'A calming and immune-boosting nightcap recipe using Red Reishi mushroom and raw cocoa for better sleep.',
    primaryKeyword: 'Red Reishi Cocoa Elixir'
  },
  {
    id: 'black-bean-mole',
    title: 'Black Bean & Cacao Mole Bowl',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1582284906010-9118c7fd52cc?q=80&w=800',
    tags: ['Mood', 'Antioxidant', 'Savory'],
    prepTime: '30 mins',
    calories: '450',
    description: 'The Mood-Boosting Powerhouse for Deep Antioxidant Support.',
    healingDescription: 'Leverages the complex flavors of mole with black beans and raw cacao for mood elevation and antioxidant support.',
    ingredients: [
      { name: 'Black Beans', detail: '1 cup cooked' },
      { name: 'Raw Cacao', detail: '1 tbsp' },
      { name: 'Chili Pepper', detail: '1 fresh' },
      { name: 'Sweet Potato', detail: '1 medium' }
    ],
    primaryBenefit: 'Mood & Antioxidant Support',
    fullHealingContent: `Black Beans (Molybdenum): Foundational legume supporting gut health and enzyme function.

Raw Cacao (Flavanols): Antioxidants linked to heart health and mood elevation via magnesium.

Chili Peppers (Capsaicin): Provides metabolic lift and comforts with warmth.

Sweet Potato: Complex carbs that balance cacao's bitterness for sustained energy.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Black Bean & Cacao Mole Bowl – Mood Boosting Recipe',
    metaDescription: 'A delicious mood-boosting recipe featuring black beans and raw cacao for high antioxidant support and energy.',
    primaryKeyword: 'Black Bean Mole'
  },
  {
    id: 'golden-milk-elixir',
    title: 'Turmeric & Black Pepper Golden Milk',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1605612573210-953b006c4b2b?q=80&w=800',
    tags: ['Joint Health', 'Cognitive', 'Anti-inflammatory'],
    prepTime: '10 mins',
    calories: '110',
    description: 'The Classic Adaptogenic Tonic for Joint & Cognitive Health.',
    healingDescription: 'Ancient Ayurvedic tonic modernized to maximize curcumin absorption for physical comfort and brain function.',
    ingredients: [
      { name: 'Turmeric', detail: '1 tsp' },
      { name: 'Black Pepper', detail: 'pinch' },
      { name: 'Coconut Milk', detail: '1 cup' },
      { name: 'Ginger', detail: '1/2 inch' }
    ],
    primaryBenefit: 'Joint & Cognitive Health',
    fullHealingContent: `Turmeric (Curcumin): Potent anti-inflammatory effect, maximized when prepared as a paste.

Black Pepper (Piperine): Dramatically increases curcumin bioavailability by up to 2,000%.

Healthy Fats: Coconut milk/oil is necessary for fat-soluble curcumin absorption.

Ginger & Cinnamon: Traditional carminatives that aid digestion and circulation.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Turmeric Golden Milk Elixir – Anti-Inflammatory Recipe',
    metaDescription: 'Boost joint health and cognitive function with this classic Turmeric Golden Milk recipe, optimized for absorption.',
    primaryKeyword: 'Golden Milk Elixir'
  },
  {
    id: 'fennel-citrus-salad',
    title: 'Fennel & Citrus Digestive Salad',
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?q=80&w=800',
    tags: ['Bloating', 'Digestion', 'Fresh'],
    prepTime: '15 mins',
    calories: '140',
    description: 'The Crisp, Anise-Flavored Dish for Bloating & Gut Motility.',
    healingDescription: 'Crisp salad designed as a potent digestive aid. Focuses on fennel to soothe the digestive tract and reduce gas.',
    ingredients: [
      { name: 'Fennel Bulb', detail: '1 large' },
      { name: 'Orange', detail: '1 segmented' },
      { name: 'Mint', detail: '2 tbsp' },
      { name: 'Apple Cider Vinegar', detail: '1 tbsp' }
    ],
    primaryBenefit: 'Bloating & Gut Motility',
    fullHealingContent: `Fennel (Anethole): Antispasmodic compound that relaxes digestive muscles to relieve gas.

Citrus (Enzymes): Provides Vitamin C and acidity to stimulate digestive juices.

Digestive Herbs: Mint and parsley freshen breath and stimulate bile flow.

Vinaigrette Base: Apple cider vinegar supports gut-friendly environment.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Fennel & Citrus Digestive Salad – Bloating Relief',
    metaDescription: 'Soothe your digestion and reduce bloating with this fresh fennel and citrus salad recipe. A natural digestive aid.',
    primaryKeyword: 'Fennel Digestive Salad'
  },
  {
    id: 'buckwheat-seaweed-soup',
    title: 'Buckwheat Noodle & Seaweed Soup',
    category: 'Soup',
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=800',
    tags: ['Thyroid', 'Hormonal Balance', 'Mineral Rich'],
    prepTime: '25 mins',
    calories: '290',
    description: 'The Mineral-Dense Broth for Thyroid & Hormone Balance.',
    healingDescription: 'Warming savory soup focusing on often-overlooked thyroid health using mineral-dense sea vegetables.',
    ingredients: [
      { name: 'Seaweed', detail: '1 sheet nori/kombu' },
      { name: 'Buckwheat Noodle', detail: '100g' },
      { name: 'Shiitake', detail: '1/2 cup' },
      { name: 'Vegetable Broth', detail: '2 cups' }
    ],
    primaryBenefit: 'Thyroid & Mineral Balance',
    fullHealingContent: `Seaweed (Iodine): Nature's richest source of bioavailable iodine for thyroid hormone production.

Buckwheat (Rutin): Gluten-free pseudo-cereal supporting cardiovascular health.

Functional Mushrooms: Provides umami depth and immune-modulating beta-glucans.

Electrolyte Base: Homemade broth provides hydration and trace minerals.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Buckwheat Noodle & Seaweed Soup – Thyroid Support',
    metaDescription: 'Support thyroid health with this mineral-dense buckwheat noodle and seaweed soup. A comforting and healing recipe.',
    primaryKeyword: 'Buckwheat Seaweed Soup'
  },
  {
    id: 'sleep-smoothie-valerian',
    title: 'Cherry & Valerian Sleep Smoothie',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800',
    tags: ['Sleep', 'Recovery', 'Melatonin'],
    prepTime: '5 mins',
    calories: '180',
    description: 'The Restorative Elixir for Restful Sleep & Muscle Recovery.',
    healingDescription: 'Formulated to support the transition into deep sleep. Combines natural melatonin from cherries and calming valerian.',
    ingredients: [
      { name: 'Tart Cherries', detail: '1 cup frozen' },
      { name: 'Valerian Root', detail: '1/4 tsp powder' },
      { name: 'Almond Butter', detail: '1 tbsp' },
      { name: 'Cashew Milk', detail: '1 cup' }
    ],
    primaryBenefit: 'Restful Sleep & Muscle Recovery',
    fullHealingContent: `Tart Cherries (Melatonin): Rare food source of natural melatonin to regulate sleep-wake cycles.

Valerian Root: Traditional sedative herb that improves sleep quality and GABA levels.

Almond Butter (Magnesium): Naturally relaxes the nervous system.

Tryptophan: Cashew milk provides precursors to serotonin and melatonin.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Cherry & Valerian Sleep Smoothie – Resting Recipe',
    metaDescription: 'Improve your sleep quality and muscle recovery with this cherry and valerian sleep smoothie recipe. Natural melatonin source.',
    primaryKeyword: 'Cherry Sleep Smoothie'
  },
  {
    id: 'purple-sweet-potato-pudding',
    title: 'Purple Sweet Potato & Ginger Pudding',
    category: 'Dessert',
    image: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=800',
    tags: ['Antioxidant', 'Gut Health', 'Eye Health'],
    prepTime: '15 mins',
    calories: '220',
    description: 'The Vibrant Dessert for Antioxidant Power & Gut Soothing.',
    healingDescription: 'Naturally vibrant creamy pudding transforming purple sweet potatoes into an elegant, comforting dessert.',
    ingredients: [
      { name: 'Purple Sweet Potato', detail: '2 medium' },
      { name: 'Fresh Ginger', detail: '1 tsp' },
      { name: 'Almond Butter', detail: '1 tbsp' },
      { name: 'Maple Syrup', detail: '1 tsp' }
    ],
    primaryBenefit: 'Antioxidant Power & Gut Soothing',
    fullHealingContent: `Anthocyanins: Deep purple pigment linked to reduced oxidative stress and cognitive benefits.

Ginger: Potent anti-nausea and anti-inflammatory properties for digestive comfort.

Nut Butter: Healthy fats and fiber for steady energy release.

Minimal Sweetener: Uses whole-food sweeteners to enhance natural potato sugars.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Purple Sweet Potato & Ginger Pudding – Antioxidant Dessert',
    metaDescription: 'A vibrant and healthy dessert recipe featuring purple sweet potatoes and ginger for high antioxidant power.',
    primaryKeyword: 'Purple Sweet Potato Pudding'
  },
  {
    id: 'adzuki-bean-stew',
    title: 'Adzuki Bean & Shiitake Umami Stew',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1631296531952-52643a60a720?q=80&w=800',
    tags: ['Kidney Health', 'Metabolic', 'Adrenal Support'],
    prepTime: '40 mins',
    calories: '310',
    description: 'The Warming, Blood-Sugar-Friendly Bowl for Kidney & Adrenal Support.',
    healingDescription: 'Deeply grounding stew focused on kidney and adrenal vitality using nutrient-dense adzuki beans.',
    ingredients: [
      { name: 'Adzuki Beans', detail: '1 cup cooked' },
      { name: 'Shiitake', detail: '1 cup' },
      { name: 'Kombu', detail: '1 small strip' },
      { name: 'Onion', detail: '1 chopped' }
    ],
    primaryBenefit: 'Kidney & Adrenal Support',
    fullHealingContent: `Adzuki Beans: Highly digestible plant protein that helps stabilize blood sugar. Valued for kidney function.

Functional Mushrooms: Umami depth and immune fortifying beta-glucans.

Seaweed (Mineral Density): Infuses stew with trace minerals like iodine.

Root Vegetables: Grounding base providing spectrum of vitamins.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Adzuki Bean & Shiitake Umami Stew – Kidney Support',
    metaDescription: 'Support your kidney and adrenal health with this warming adzuki bean and shiitake stew recipe. Blood-sugar friendly.',
    primaryKeyword: 'Adzuki Bean Stew'
  },
  {
    id: 'pomegranate-beauty-water',
    title: 'Pomegranate & Rosehip Beauty Water',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800',
    tags: ['Skin Health', 'Beauty', 'Collagen'],
    prepTime: '5 mins',
    calories: '20',
    description: 'The Collagen-Boosting Elixir for Skin Radiance & Deep Hydration.',
    healingDescription: 'Elegant daily hydration ritual with targeted benefits for skin elasticity and radiance.',
    ingredients: [
      { name: 'Pomegranate Seeds', detail: '1/4 cup' },
      { name: 'Rosehip Tea', detail: '1 cup' },
      { name: 'Filtered Water', detail: '1 liter' },
      { name: 'Mint', detail: '3 sprigs' }
    ],
    primaryBenefit: 'Skin Radiance & Deep Hydration',
    fullHealingContent: `Polyphenols: Pomegranate antioxidants suggested to reduce skin inflammation.

Rosehip (Vitamin C): Essential cofactor required for collagen synthesis and wound healing.

Deep Hydration: Water base ensures efficient transport of nutrients and detoxification.

Aromatic Cleansing: Mint adds chlorophyll and breath freshness.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Pomegranate & Rosehip Beauty Water – Skin Glow Recipe',
    metaDescription: 'Boost your skin radiance and hydration with this elegant pomegranate and rosehip beauty water recipe.',
    primaryKeyword: 'Pomegranate Beauty Water'
  },
  {
    id: 'quinoa-sesame-cereal',
    title: 'Sprouted Quinoa & Black Sesame Cereal',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1463740839922-2d3b7e426a56?q=80&w=800',
    tags: ['Bone Health', 'Brain Health', 'Protein'],
    prepTime: '15 mins',
    calories: '320',
    description: 'The Protein-Dense Morning Meal for Bone Health & Cognitive Function.',
    healingDescription: 'Elevated morning alternative focusing on bone density and cognitive clarity at the start of the day.',
    ingredients: [
      { name: 'Sprouted Quinoa', detail: '1 cup cooked' },
      { name: 'Black Sesame', detail: '2 tbsp' },
      { name: 'Cinnamon', detail: '1 tsp' },
      { name: 'Date Paste', detail: '1 tbsp' }
    ],
    primaryBenefit: 'Bone Health & Cognitive Function',
    fullHealingContent: `Enhanced Bioavailability: Sprouting reduces anti-nutrients for better iron and zinc absorption.

Black Sesame (Calcium): Superior dairy-free source of calcium and zinc for bone integrity.

Cognitive Cinnamon: Improves insulin sensitivity and lends comforting flavor.

Fiber-Rich Sweetener: Date paste provides potassium and steady energy.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur',
    pageTitle: 'Sprouted Quinoa & Black Sesame Cereal – Bone Health',
    metaDescription: 'A protein-dense breakfast recipe featuring sprouted quinoa and black sesame for bone health and cognitive clarity.',
    primaryKeyword: 'Quinoa Sesame Cereal'
  },
  {
    id: 'brussels-sprouts-mustard',
    title: 'Roasted Brussels Sprouts with Mustard & Tamari',
    category: 'Side',
    image: 'https://images.unsplash.com/photo-1432457990754-c8b5f21448de?q=80&w=800',
    tags: ['Detox', 'Liver Health', 'Digestive'],
    prepTime: '20 mins',
    calories: '180',
    description: 'The Cruciferous Powerhouse for Liver Detoxification.',
    healingDescription: 'Flavorful dish maximizing beneficial compounds found in cruciferous vegetables for liver support.',
    ingredients: [
      { name: 'Brussels Sprouts', detail: '2 cups' },
      { name: 'Mustard Seeds', detail: '1 tsp' },
      { name: 'Tamari', detail: '1 tbsp' },
      { name: 'Olive Oil', detail: '1 tbsp' }
    ],
    primaryBenefit: 'Liver Detoxification',
    fullHealingContent: `Sulforaphane: Essential compound for supporting liver's ability to process and eliminate toxins.

Digestive Stimulation: Mustard stimulates digestive juices for efficient nutrient absorption.

B-Vitamins: Tamari provides umami depth and cofactors for detoxification phases.

Healthy Fats: Olive oil aiding in absorption of fat-soluble vitamins.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'cauliflower-tabbouleh-hemp',
    title: 'Cauliflower Rice Tabbouleh with Hemp Oil',
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?q=80&w=800',
    tags: ['Gut Health', 'Omega Balance', 'Low Carb'],
    prepTime: '20 mins',
    calories: '210',
    description: 'The Grain-Free Classic for Gut Barrier Integrity & Omega Balance.',
    healingDescription: 'Grain-free take on Tabbouleh enriched with hemp seed oil to support gut lining integrity.',
    ingredients: [
      { name: 'Cauliflower Rice', detail: '2 cups' },
      { name: 'Hemp Seed Oil', detail: '1 tbsp' },
      { name: 'Parsley', detail: '1 cup' },
      { name: 'Lemon Juice', detail: '2 tbsp' }
    ],
    primaryBenefit: 'Gut Barrier Integrity & Omega Balance',
    fullHealingContent: `Omega balance: Hemp oil provides near-perfect 3:1 ratio of Omega-6 to Omega-3.

Low-carb detox: Cauliflower base supporting liver without heavy grains.

Chlorophyll cleansing: High concentration of herbs for cellular refreshment.

Mineral absorption: Lemon aids in alkaline balance and nutrient uptake.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'black-garlic-drizzle',
    title: 'Black Garlic & Fermented Hot Sauce Drizzle',
    category: 'Sauce',
    image: 'https://images.unsplash.com/photo-1547928500-477b10905470?q=80&w=800',
    tags: ['Heart Health', 'Probiotics', 'Prebiotic'],
    prepTime: '5 mins',
    calories: '60',
    description: 'The Savory Probiotic Topper for Cardiovascular & Prebiotic Support.',
    healingDescription: 'Savory topper combining fermented ingredients for heart-healthy compounds and gut-nourishing prebiotics.',
    ingredients: [
      { name: 'Black Garlic', detail: '3 cloves' },
      { name: 'Fermented Chili Sauce', detail: '1 tbsp' },
      { name: 'Olive Oil', detail: '1 tbsp' },
      { name: 'Coconut Aminos', detail: '1 tsp' }
    ],
    primaryBenefit: 'Cardiovascular Support & Prebiotics',
    fullHealingContent: `Cardiovascular protection: SAC compound multiplied during garlic fermentation.

Live cultures: Fermented chili sauce contributing to microbiome diversity.

MCT Absorption: Olive oil aiding in fat-soluble compound uptake.

Electrolyte depth: Coconut aminos providing sodium-balanced trace minerals.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'mango-cardamom-lassi',
    title: 'Mango & Cardamom Lassi (Vegan)',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800',
    tags: ['Metabolic Ease', 'Cooling', 'Ayurveda'],
    prepTime: '5 mins',
    calories: '190',
    description: 'The Cooling Digestive Tonic for Metabolic Ease.',
    healingDescription: 'Vegan interpretation of Lassi designed to cool the digestive fire and promote metabolic ease.',
    ingredients: [
      { name: 'Mango', detail: '1 ripe' },
      { name: 'Cardamom', detail: '1/2 tsp' },
      { name: 'Cashew Yogurt', detail: '1/2 cup' },
      { name: 'Almond Milk', detail: '1 cup' }
    ],
    primaryBenefit: 'Cooling Digestive Tonic & Metabolic Ease',
    fullHealingContent: `Metabolic rest: Ripe mango providing beta-carotene and Vitamin C base.

Digestive ease: Cardamom acts as carminative to reduce gas and bloating.

Probiotic support: Plant-based yogurt providing live beneficial cultures.

Light hydration: Achieving drinkable consistency for refreshing experience.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'watercress-alfalfa-sandwich',
    title: 'Watercress & Alfalfa Sprout Sandwich',
    category: 'Snack',
    image: 'https://images.unsplash.com/photo-1509722747041-031f09802528?q=80&w=800',
    tags: ['Detox', 'Oxygenation', 'Blood Health'],
    prepTime: '10 mins',
    calories: '280',
    description: 'The Micro-Green Power-Up for Detox & Cellular Oxygenation.',
    healingDescription: 'Vibrant meal designed to maximize intake of micro-greens for blood health and cellular oxygenation.',
    ingredients: [
      { name: 'Watercress', detail: '1 cup' },
      { name: 'Alfalfa Sprouts', detail: '1/2 cup' },
      { name: 'Whole Grain Bread', detail: '2 slices' },
      { name: 'Avocado', detail: '1/2 mashed' }
    ],
    primaryBenefit: 'Detox & Cellular Oxygenation',
    fullHealingContent: `Cellular shielding: Watercress contains PEITC to block environmental toxins.

Mineral transport: Iron-Vitamin C pairing inside fresh greens.

Enzyme flooding: Alfalfa sprouts packed with living enzymes for digestion.

Healthy delivery: Avocado providing heart-healthy fats and folate.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'rooibos-cinnamon-tea',
    title: 'Rooibos & Cinnamon Antioxidant Tea',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1605612573210-953b006c4b2b?q=80&w=800',
    tags: ['Blood Sugar', 'Stress Relief', 'Anti-Aging'],
    prepTime: '10 mins',
    calories: '15',
    description: 'The Caffeine-Free Brew for Blood Sugar Regulation & Stress Reduction.',
    healingDescription: 'Daily ritual supporting balanced blood sugar and promoting stress reduction using rooibos and cinnamon.',
    ingredients: [
      { name: 'Rooibos Tea', detail: '1 bag' },
      { name: 'Cinnamon Stick', detail: '1 whole' },
      { name: 'Ginger', detail: '2 slices' },
      { name: 'Lemon', detail: '1 slice' }
    ],
    primaryBenefit: 'Blood Sugar Regulation & Stress Reduction',
    fullHealingContent: `Aspalathin power: Unique rooibos flavonoid linked to glucose uptake improvement.

Insulin sensitivity: Cinnamon active compounds used to stabilize blood sugar.

Circulation warm-up: Ginger slices supporting carminative stomach soothing.

Antioxidant richness: Quercetin content for cellular anti-aging.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'chickpea-cauliflower-tagine',
    title: 'Spiced Chickpea & Cauliflower Tagine',
    category: 'Main',
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=800',
    tags: ['Blood Sugar', 'Steady Energy', 'High Fiber'],
    prepTime: '35 mins',
    calories: '380',
    description: 'The Warm, Grounding Stew for Blood Sugar Stabilization & Steady Energy.',
    healingDescription: 'One-pot meal providing deep warmth and grounding energy while stabilizing blood sugar levels.',
    ingredients: [
      { name: 'Chickpeas', detail: '1.5 cups cooked' },
      { name: 'Cauliflower', detail: '3 cups florets' },
      { name: 'Cinnamon', detail: '1 tsp' },
      { name: 'Apricots', detail: '4 chopped' }
    ],
    primaryBenefit: 'Blood Sugar Stabilization & Steady Energy',
    fullHealingContent: `Low-glycemic fiber: Soluble fiber slowing sugar absorption for steady energy.

Detox bulk: Cauliflower glucosinolates supporting liver pathways.

Warming metabolism: Spice trio aiding insulin sensitivity.

Mineral balance: Potassium from apricots and absorption aid from lemon.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'hemp-saffron-drink',
    title: 'Hemp Milk & Saffron Calming Drink',
    category: 'Drink',
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?q=80&w=800',
    tags: ['Anxiety', 'Nervous System', 'Hormonal'],
    prepTime: '10 mins',
    calories: '150',
    description: 'The Hormonal Elixir for Anti-Anxiety & Nervous System Soothing.',
    healingDescription: 'Gentle warm beverage designed to soothe the nervous system and promote emotional balance.',
    ingredients: [
      { name: 'Hemp Milk', detail: '1.5 cups' },
      { name: 'Saffron', detail: '5 threads' },
      { name: 'Dates', detail: '2 whole' },
      { name: 'Nutmeg', detail: 'pinch' }
    ],
    primaryBenefit: 'Hormonal Balance & Anti-Anxiety',
    fullHealingContent: `Balanced relaxation: Magnesium from hemp milk relaxing muscles and mind.

Mood elevation: Saffron crocins valued for emotional support.

Serotonin precursor: Tryptophan from dates and healthy fat base.

Ayurvedic rest: Nutmeg traditionally used for deep nighttime restoration.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'cucumber-jicama-salad',
    title: 'Cucumber & Jicama Hydration Salad',
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=800',
    tags: ['Hydration', 'Electrolytes', 'Prebiotic'],
    prepTime: '15 mins',
    calories: '110',
    description: 'The Crisp, Cooling Dish for Electrolyte Balance & Cellular Hydration.',
    healingDescription: 'Ultra-crisp salad designed for maximum cooling and hydration, replenishing electrolytes naturally.',
    ingredients: [
      { name: 'Cucumber', detail: '1 large' },
      { name: 'Jicama', detail: '1 cup diced' },
      { name: 'Lime', detail: '1 juiced' },
      { name: 'Sea Salt', detail: 'pinch' }
    ],
    primaryBenefit: 'Electrolyte Balance & Cellular Hydration',
    fullHealingContent: `Cellular hydration: Cucumber water and silica supporting connective tissue.

Gut balance: Jicama inulin feeding beneficial microbiome.

Natural balance: Potassium/Sodium pairing from lime and sea salt.

Antioxidant cooling: Mint and cilantro aiding cellular protection.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'lentil-walnut-pate',
    title: 'Black Lentil & Walnut Paté',
    category: 'Snack',
    image: 'https://images.unsplash.com/photo-1544510205-919d73c8f7cd?q=80&w=800',
    tags: ['Iron Rich', 'Brain Health', 'Cognitive'],
    prepTime: '20 mins',
    calories: '280',
    description: 'The Nutrient-Dense Spread for Sustained Iron & Cognitive Function.',
    healingDescription: 'Savory paté combining iron from lentils and healthy fats from walnuts for cognitive performance.',
    ingredients: [
      { name: 'Black Lentils', detail: '1 cup cooked' },
      { name: 'Walnuts', detail: '1/2 cup' },
      { name: 'Nutritional Yeast', detail: '1 tbsp' },
      { name: 'Thyme', detail: '1 tsp' }
    ],
    primaryBenefit: 'Sustained Iron & Cognitive Function',
    fullHealingContent: `Blood building: Heme-free iron for oxygen transport and fatigue reduction.

Brain fuel: ALA Omega-3s from walnuts reducing neural inflammation.

Metabolic B-vitamins: Nutritional yeast providing nervous system support.

Immune foundation: Allicin from garlic contributing to systemic health.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  },
  {
    id: 'pear-ginger-slaw',
    title: 'Pear & Ginger Probiotic Slaw',
    category: 'Salad',
    image: 'https://images.unsplash.com/photo-1518512335140-5178dca8fbfb?q=80&w=800',
    tags: ['Probiotics', 'Digestion', 'Enzymes'],
    prepTime: '15 mins',
    calories: '130',
    description: 'The Fermented, Crunchy Side for Digestive Enzymes & Gut Flora Renewal.',
    healingDescription: 'Unique slaw marrying soft pear with sharp ginger and digestive power of brief fermentation.',
    ingredients: [
      { name: 'Napa Cabbage', detail: '2 cups' },
      { name: 'Pear', detail: '1 sliced' },
      { name: 'Ginger Juice', detail: '1 tbsp' },
      { name: 'Raw ACV', detail: '1 tbsp' }
    ],
    primaryBenefit: 'Digestive Enzymes & Gut Flora Renewal',
    fullHealingContent: `Microbiome renewal: Cabbage fiber acting as prebiotic for live cultures.

Intestinal lining: Pear pectin supporting digestive speed regulation.

Enzyme stimulation: Raw ginger juice encouraging body's own enzymes.

Probiotic acidity: Raw ACV mother introducing beneficial bacteria.`,
    preparedBy: 'Nutrition Colours Dr. Shilpa Thakur'
  }
];
