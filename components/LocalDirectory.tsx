import React, { useState, useMemo } from 'react';
import { LOCATIONS_DATA, LocationNode } from './locationsData';
import { INTERNATIONAL_COUNTRIES, InternationalCountryNode } from './internationalData';
import { useViewerTracker } from './ViewerTracker';
import { TOPICS } from '../topics';
import { IconSearch, IconMapPin, IconPhone, IconMail, IconArrowRight, IconLeaf, IconCheck, IconBot, IconX } from './Icons';
import { GeospatialMap } from './GeospatialMap';

const slugify = (text: string) => text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const SYNONYM_DICTIONARY: Record<string, string[]> = {
  'sugar': ['diabetes', 'hba1c', 'insulin', 'hyperglycemia'],
  'diabetes': ['sugar', 'hba1c', 'insulin', 'diabetic'],
  'heart': ['cardio', 'hypertension', 'blood pressure', 'bp', 'cholesterol', 'cardiovascular'],
  'bp': ['blood pressure', 'hypertension', 'heart', 'cardio'],
  'hypertension': ['blood pressure', 'bp', 'heart', 'cardio'],
  'liver': ['masld', 'nafld', 'fatty liver', 'hepatic', 'cirrhosis'],
  'fatty liver': ['masld', 'nafld', 'liver', 'hepatic'],
  'joints': ['arthritis', 'osteoarthritis', 'rheumatoid', 'inflammation', 'joint pain'],
  'arthritis': ['joints', 'osteoarthritis', 'rheumatoid', 'joint pain'],
  'pcos': ['pcod', 'hormonal', 'fertility', 'ovary', 'polycystic'],
  'pcod': ['pcos', 'hormonal', 'fertility', 'ovary', 'polycystic'],
  'kidney': ['ckd', 'renal', 'creatinine', 'filtration'],
  'obesity': ['weight', 'fat', 'bmi', 'overweight'],
  'weight': ['obesity', 'fat', 'bmi', 'overweight']
};

const tokenize = (text: string): string[] => {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
};

const highlightText = (text: string, searchTerms: string[]) => {
  if (!text || !searchTerms || searchTerms.length === 0) return <span>{text}</span>;
  
  const sortedTerms = [...searchTerms]
    .filter(t => t.length > 1)
    .sort((a, b) => b.length - a.length);

  if (sortedTerms.length === 0) return <span>{text}</span>;

  const escapedTerms = sortedTerms.map(t => t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'));
  const regex = new RegExp(`(${escapedTerms.join('|')})`, 'gi');

  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => {
        const isMatch = regex.test(part);
        return isMatch ? (
          <mark key={i} className="bg-lime-200 text-emerald-950 font-black px-0.5 rounded shadow-sm">
            {part}
          </mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </span>
  );
};


// Deterministic hash based on a string to generate consistent values
const getDeterministicValue = (key: string, salt: string, min: number, max: number): number => {
  const str = key + salt;
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  const absHash = Math.abs(hash);
  return min + (absHash % (max - min + 1));
};

// Generate deterministic landmarks based on city/state
const getDeterministicLandmarks = (city: string, state: string): string[] => {
  const landmarkTypes = [
    `Near ${city} Civil Hospital`,
    `Opposite ${city} Municipal Stadium`,
    `Near ${city} Railway Station Road`,
    `Opposite ${city} Court Complex`,
    `Close to ${city} Town Hall`,
    `Along the ${city} Main Trunk Road`,
    `Near ${city} General Post Office`,
    `Opposite ${city} Government High School`
  ];
  const index1 = getDeterministicValue(city, 'landmark1', 0, landmarkTypes.length - 1);
  let index2 = getDeterministicValue(city, 'landmark2', 0, landmarkTypes.length - 1);
  if (index1 === index2) {
    index2 = (index1 + 1) % landmarkTypes.length;
  }
  return [landmarkTypes[index1], landmarkTypes[index2]];
};

// Generate deterministic carrier quality metrics
interface CarrierInfo {
  name: string;
  strength: string;
  speed: string;
  coverage: string;
}

const getCarrierQuality = (city: string, isIndia: boolean): CarrierInfo[] => {
  const hashVal = getDeterministicValue(city, 'carrier', 1, 100);
  if (isIndia) {
    const jioSpeed = 80 + (hashVal % 150);
    const airtelSpeed = 70 + ((hashVal + 17) % 120);
    const viSpeed = 20 + ((hashVal + 31) % 45);
    return [
      { name: 'Jio 5G', strength: hashVal > 40 ? 'Excellent' : 'Good', speed: `${jioSpeed} Mbps`, coverage: '99.2%' },
      { name: 'Airtel 5G/4G+', strength: (hashVal % 10) > 2 ? 'Strong' : 'Moderate', speed: `${airtelSpeed} Mbps`, coverage: '98.7%' },
      { name: 'Vi (Vodafone Idea)', strength: (hashVal % 5) > 1 ? 'Good' : 'Fair', speed: `${viSpeed} Mbps`, coverage: '92.4%' }
    ];
  } else {
    const carriers = [
      ['AT&T', 'Verizon', 'T-Mobile'],
      ['Vodafone', 'EE', 'O2'],
      ['Zain', 'STC', 'Mobily'],
      ['Etisalat', 'du', 'Virgin Mobile'],
      ['Telstra', 'Optus', 'Vodafone AU']
    ];
    const carrierSet = carriers[hashVal % carriers.length];
    const speed1 = 120 + (hashVal % 200);
    const speed2 = 100 + ((hashVal + 23) % 150);
    return [
      { name: carrierSet[0] + ' 5G', strength: 'Excellent', speed: `${speed1} Mbps`, coverage: '99.5%' },
      { name: carrierSet[1] + ' 5G/LTE', strength: 'Strong', speed: `${speed2} Mbps`, coverage: '98.9%' },
      { name: carrierSet[2] + ' LTE', strength: 'Good', speed: '45 Mbps', coverage: '96.2%' }
    ];
  }
};

// Coordinates generator
const getCoordinates = (city: string, state: string, country: string) => {
  let baseLat = 20.5937;
  let baseLng = 78.9629;
  
  if (country === 'India') {
    const stateBases: Record<string, [number, number]> = {
      'Punjab': [31.1471, 75.3412],
      'Haryana': [29.0588, 76.0856],
      'Delhi': [28.7041, 77.1025],
      'Maharashtra': [19.7515, 75.7139],
      'Karnataka': [15.3173, 75.7139],
      'Tamil Nadu': [11.1271, 78.6569],
      'Kerala': [10.8505, 76.2711],
      'Andhra Pradesh': [15.9129, 79.7400],
      'Telangana': [18.1124, 79.0193],
      'West Bengal': [22.9868, 87.8550],
      'Gujarat': [22.2587, 71.1924],
      'Rajasthan': [27.0238, 74.2179],
      'Uttar Pradesh': [26.8467, 80.9462]
    };
    if (stateBases[state]) {
      [baseLat, baseLng] = stateBases[state];
    }
  } else {
    const countryBases: Record<string, [number, number]> = {
      'United States': [37.0902, -95.7129],
      'United Kingdom': [55.3781, -3.4360],
      'Saudi Arabia': [23.8859, 45.0792],
      'United Arab Emirates': [23.4241, 53.8478],
      'Bahrain': [25.9304, 50.6377],
      'Kuwait': [29.3117, 47.4818],
      'Qatar': [25.3548, 51.1839],
      'Oman': [21.5125, 55.9233]
    };
    if (countryBases[country]) {
      [baseLat, baseLng] = countryBases[country];
    }
  }
  
  const latOffset = (getDeterministicValue(city, 'lat', 100, 999) - 500) / 10000;
  const lngOffset = (getDeterministicValue(city, 'lng', 100, 999) - 500) / 10000;
  
  const finalLat = (baseLat + latOffset).toFixed(4);
  const finalLng = (baseLng + lngOffset).toFixed(4);
  
  return {
    latitude: finalLat,
    longitude: finalLng,
    proximity: `${(getDeterministicValue(city, 'prox', 8, 25) / 10).toFixed(1)} km to regional primary clinical node`
  };
};

// Dialing code, Currency, Timezone lookup helper
const getCountryMeta = (country: string) => {
  const meta: Record<string, { dialingCode: string; currency: string; timezone: string }> = {
    'India': { dialingCode: '+91', currency: 'INR (₹, Indian Rupee)', timezone: 'Asia/Kolkata (IST, UTC+5:30)' },
    'Bahrain': { dialingCode: '+973', currency: 'BHD (Bahraini Dinar)', timezone: 'Asia/Bahrain (AST, UTC+3)' },
    'Saudi Arabia': { dialingCode: '+966', currency: 'SAR (Saudi Riyal)', timezone: 'Asia/Riyadh (AST, UTC+3)' },
    'United Arab Emirates': { dialingCode: '+971', currency: 'AED (UAE Dirham)', timezone: 'Asia/Dubai (GST, UTC+4)' },
    'Kuwait': { dialingCode: '+965', currency: 'KWD (Kuwaiti Dinar)', timezone: 'Asia/Kuwait (AST, UTC+3)' },
    'Qatar': { dialingCode: '+974', currency: 'QAR (Qatari Riyal)', timezone: 'Asia/Qatar (AST, UTC+3)' },
    'Oman': { dialingCode: '+968', currency: 'OMR (Omani Rial)', timezone: 'Asia/Muscat (GST, UTC+4)' },
    'United States': { dialingCode: '+1', currency: 'USD ($, US Dollar)', timezone: 'America/New_York (EST/EDT, UTC-5)' },
    'Canada': { dialingCode: '+1', currency: 'CAD (C$, Canadian Dollar)', timezone: 'America/Toronto (EST/EDT, UTC-5)' },
    'United Kingdom': { dialingCode: '+44', currency: 'GBP (£, British Pound)', timezone: 'Europe/London (BST/GMT, UTC+1)' }
  };
  return meta[country] || { dialingCode: '+91', currency: 'INR (₹)', timezone: 'Asia/Kolkata (IST, UTC+5:30)' };
};

export const INTERNATIONAL_DIETS: Record<string, {
  staples: string;
  metabolicRisk: string;
  chronoRule: string;
  substitutions: string[];
  spices: string[];
}> = {
  'Middle East': {
    staples: 'Refined grains (Kabsa rice, flatbreads), excessive date sugars, sweetened teas, and fried lamb/poultry.',
    metabolicRisk: 'Rapid postprandial glucose rises causing hyperinsulinemia and high rates of visceral adiposity.',
    chronoRule: 'Restrict dates and sweet beverages to daylight hours. Switch refined white Kabsa rice to whole-grain barley or quinoa.',
    substitutions: ['Polished Kabsa Rice ➔ Pearl Barley / Quinoa', 'Refined Sugar in Tea ➔ Stevia / Cardamom infusion', 'Hydrogenated Cooking Oils ➔ Cold-Pressed Olive Oil'],
    spices: ['Ceylon Cinnamon', 'Cardamom', 'Cumin']
  },
  'North America & Western Europe': {
    staples: 'Refined wheat, processed meat (beef, bacon), high saturated dairy fats, and sugary beverages.',
    metabolicRisk: 'Saturated fat accumulation combined with refined starch leading to intracellular lipid blocking and insulin resistance.',
    chronoRule: 'Eat dairy fats early (breakfast/lunch) to match metabolic rates. Ensure dinner is carbohydrate-restricted (non-starchy vegetables and lentils).',
    substitutions: ['Refined Wheat Bread ➔ Sprouted Grain / Almond Flour Bread', 'Processed Red Meat ➔ Lentils / Organic Tempeh', 'Late Dinner ➔ Sunset Dining (before 7:00 PM)'],
    spices: ['Ceylon Cinnamon', 'Ginger', 'Turmeric']
  },
  'East & Southeast Asia': {
    staples: 'Refined jasmine rice, wheat-based noodles, sugary stir-fry sauces, and coconut desserts.',
    metabolicRisk: 'High-glycemic load from polished starches overloading pancreatic beta cells in lean individuals.',
    chronoRule: 'Consume heavy starches strictly in the middle of the day. Substitute refined white noodles with shirataki, konjac, or buckwheat noodles.',
    substitutions: ['Jasmine Rice ➔ Buckwheat (Soba) / Cauliflower Rice', 'Refined Stir-Fry Sauces ➔ Liquid Aminos / Ginger-Garlic paste', 'Sugary Coconut Desserts ➔ Fresh fruits / Stevia Coconut milk'],
    spices: ['Ginger', 'Star Anise', 'Garlic']
  },
  'South Asia': {
    staples: 'Polished white rice, refined wheat flatbreads, seed cooking oils, and sweetened dairy desserts.',
    metabolicRisk: 'Elevated postprandial glycemic load paired with high sedentary lifestyle risks, causing ectopic fat buildup.',
    chronoRule: 'Limit rice/flatbread consumption to lunch. Make dinner a low-carb grain-free bowl before 7:00 PM. Drink warm fenugreek water.',
    substitutions: ['Polished Rice ➔ Foxtail/Barnyard Millet', 'Refined Seed Oils ➔ Cold-Pressed Sesame/Mustard Oil', 'Sweetened Desserts ➔ Date-sweetened Chia pudding'],
    spices: ['Fenugreek (Methi)', 'Turmeric (Curcumin)', 'Cinnamon']
  },
  'Latin America': {
    staples: 'Refined maize/corn flour (tortillas, arepas), red meats, deep-fried plantains, and refined cane sugar.',
    metabolicRisk: 'High hepatic de novo lipogenesis (fatty liver) driven by refined starches paired with high saturated meat fats.',
    chronoRule: 'Restrict corn-based meals (tortillas) to active midday hours. Shift dinner towards fiber-rich black beans, avocado, and leafy greens.',
    substitutions: ['Refined Maize Flour ➔ Whole Bean Flour / Flaxseed wraps', 'Fried Plantains ➔ Baked Sweet Potato', 'Refined Sugars ➔ Stevia / Kokum extract'],
    spices: ['Coriander (Cilantro)', 'Cumin', 'Cayenne Pepper']
  },
  'Eastern Europe & Central Asia': {
    staples: 'Heavy root vegetables (potatoes, beets), refined wheat breads, fermented milk, and processed meats.',
    metabolicRisk: 'High cardiovascular risk stemming from dense saturated fats combined with high-glycemic starches.',
    chronoRule: 'Front-load caloric intake before 2:00 PM. Limit evening meals to broth and steamed cabbage or non-starchy vegetables.',
    substitutions: ['White Potatoes ➔ Cauliflower Mash', 'Refined Wheat Bread ➔ Sourdough Rye Bread', 'Processed Sausages ➔ Wild-caught Fish / Organic Tofu'],
    spices: ['Dill', 'Garlic', 'Black Pepper']
  },
  'Africa': {
    staples: 'Refined white maize meal (Ugali/Sadza/Fufu), fried tuber starches (cassava, yams), and processed cooking oils.',
    metabolicRisk: 'Glycemic overload from fast-acting starches, leading to sudden glucose fluctuations and insulin fatigue.',
    chronoRule: 'Substitute refined maize meal with whole-grain sorghum, finger millet, or teff. Limit fried starches to early afternoon.',
    substitutions: ['Refined Maize Meal ➔ Sorghum / Finger Millet / Teff', 'Fried Cassava ➔ Boiled Sweet Potato / Plantains', 'Refined Seed Oils ➔ Cold-Pressed Coconut / Avocado Oil'],
    spices: ['Ginger', 'Clove', 'Cardamom']
  },
  'Oceania & Island Nations': {
    staples: 'Fried starchy tubers (tapioca, taro), refined white rice, sweet coconut milk, and processed meats.',
    metabolicRisk: 'Rapid fat deposition in liver and pancreas caused by high-carb tubers combined with saturated fats.',
    chronoRule: 'Restrict taro and tapioca consumption to early day. Focus dinner entirely on wild-caught local fish paired with fresh leafy greens.',
    substitutions: ['Fried Taro/Tapioca ➔ Leafy green vegetables / Baked pumpkin', 'Polished Rice ➔ Quinoa / Brown Matta Rice', 'Refined Coconut Oil ➔ Raw Unrefined Virgin Coconut Oil'],
    spices: ['Ginger', 'Turmeric', 'Lemon Grass']
  }
};

// Regional Clinical Diet Details (Research-Backed Recommendations)
export const REGIONAL_DIETS: Record<string, {
  staples: string;
  metabolicRisk: string;
  chronoRule: string;
  substitutions: string[];
  spices: string[];
}> = {
  'Andhra Pradesh': {
    staples: 'High refined white rice (Sona Masuri), highly spicy tamarind curries, peanut/coconut chutneys.',
    metabolicRisk: 'Postprandial insulin surges due to rapid-glycemic rice; fatty liver risk from refined seed oil cooking.',
    chronoRule: 'Restrict rice consumption to lunch (12:00 PM - 2:00 PM) when insulin sensitivity is highest. Replace dinner rice with ragi malt or foxtail millet.',
    substitutions: ['Sona Masuri Rice ➔ Foxtail Millet (Korra)', 'Refined Peanut Oil ➔ Cold-Pressed Sesame/Coconut Oil', 'Late Dinner ➔ Sunset Dining (before 6:30 PM)'],
    spices: ['Curcumin-rich Turmeric', 'Fenugreek seeds (Methi)', 'Coriander seeds']
  },
  'Telangana': {
    staples: 'High refined white rice (Sona Masuri), highly spicy tamarind curries, peanut/coconut chutneys.',
    metabolicRisk: 'Postprandial insulin surges due to rapid-glycemic rice; fatty liver risk from refined seed oil cooking.',
    chronoRule: 'Restrict rice consumption to lunch (12:00 PM - 2:00 PM) when insulin sensitivity is highest. Replace dinner rice with ragi malt or foxtail millet.',
    substitutions: ['Sona Masuri Rice ➔ Foxtail Millet (Korra)', 'Refined Peanut Oil ➔ Cold-Pressed Sesame/Coconut Oil', 'Late Dinner ➔ Sunset Dining (before 6:30 PM)'],
    spices: ['Curcumin-rich Turmeric', 'Fenugreek seeds (Methi)', 'Coriander seeds']
  },
  'Punjab': {
    staples: 'Wheat flatbreads (Roti/Naan), heavy dairy (ghee, butter, lassi), potato-based curries.',
    metabolicRisk: 'Intracellular lipid buildup (ectopic fat) blocking insulin receptors due to high saturated fats paired with high refined grains.',
    chronoRule: 'Utilize active chronobiological timing: consume dairy fats early in the day (breakfast/lunch). Restrict dinner carbs to barley flatbreads (Jau ki roti) with steamed vegetables.',
    substitutions: ['Refined Wheat ➔ Sprouted Barley / Chickpea Flour', 'Buffalo Milk / Cream ➔ Diluted Buttermilk / Almond Milk', 'Hydrogenated Fats ➔ Cold-pressed Mustard Oil (in moderation)'],
    spices: ['Ceylon Cinnamon (insulin sensitizer)', 'Ginger', 'Black Cumin (Kalonji)']
  },
  'Haryana': {
    staples: 'Wheat flatbreads (Roti/Naan), heavy dairy (ghee, butter, lassi), potato-based curries.',
    metabolicRisk: 'Intracellular lipid buildup (ectopic fat) blocking insulin receptors due to high saturated fats paired with high refined grains.',
    chronoRule: 'Utilize active chronobiological timing: consume dairy fats early in the day (breakfast/lunch). Restrict dinner carbs to barley flatbreads (Jau ki roti) with steamed vegetables.',
    substitutions: ['Refined Wheat ➔ Sprouted Barley / Chickpea Flour', 'Buffalo Milk / Cream ➔ Diluted Buttermilk / Almond Milk', 'Hydrogenated Fats ➔ Cold-pressed Mustard Oil (in moderation)'],
    spices: ['Ceylon Cinnamon (insulin sensitizer)', 'Ginger', 'Black Cumin (Kalonji)']
  },
  'West Bengal': {
    staples: 'White rice, fish curries cooked in mustard oil, refined flour sweets (Rosogolla, Sandesh).',
    metabolicRisk: 'Hepatic de novo lipogenesis (fatty liver) driven by high sucrose intake alongside white rice glycemic loads.',
    chronoRule: 'Sync liver autophagy: maintain a strict 14-hour overnight fast starting at 6:30 PM. Serve fish baked or lightly simmered rather than deep-fried.',
    substitutions: ['High-glycemic Sweets ➔ Stevia-sweetened Kokum / Almond puddings', 'Refined Mustard Oil ➔ Raw unrefined Mustard Oil / A2 Ghee', 'Polished White Rice ➔ Brown Gobindobhog Rice / Quinoa'],
    spices: ['Fenugreek', 'Fennel seeds', 'Ginger']
  },
  'Kerala': {
    staples: 'Parboiled red rice (Matta), coconut-based curries, deep-fried banana chips, tapioca.',
    metabolicRisk: 'High caloric density from coconut fats combined with fast-acting starch (tapioca) leading to pancreatic overload.',
    chronoRule: 'Consume coconut-based dishes primarily in the morning and early afternoon. Replace tapioca with steamed red rice in controlled portions. Drink warm Jeera (cumin) water throughout the day.',
    substitutions: ['Fried Tapioca Chips ➔ Baked Kale / Roasted Chickpeas', 'Polished Matta Rice ➔ Sprouted Brown Rice', 'Refined Coconut Oil ➔ Cold-Pressed Virgin Coconut Oil'],
    spices: ['Black Pepper', 'Cardamom', 'Clove']
  },
  'Tamil Nadu': {
    staples: 'Parboiled red rice (Matta), coconut-based curries, deep-fried banana chips, tapioca.',
    metabolicRisk: 'High caloric density from coconut fats combined with fast-acting starch (tapioca) leading to pancreatic overload.',
    chronoRule: 'Consume coconut-based dishes primarily in the morning and early afternoon. Replace tapioca with steamed red rice in controlled portions. Drink warm Jeera (cumin) water throughout the day.',
    substitutions: ['Fried Tapioca Chips ➔ Baked Kale / Roasted Chickpeas', 'Polished Matta Rice ➔ Sprouted Brown Rice', 'Refined Coconut Oil ➔ Cold-Pressed Virgin Coconut Oil'],
    spices: ['Black Pepper', 'Cardamom', 'Clove']
  },
  'Goa': {
    staples: 'Coastal seafood curries, polished white rice, coconut milks, fermented bread (Poee).',
    metabolicRisk: 'Erratic glucose spikes due to refined flour leavened breads; chronic metabolic load from deep fried batters.',
    chronoRule: 'Leverage circadian fat burning: restrict fermented breads to morning hours. Pair afternoon fish curries with leafy greens instead of white rice.',
    substitutions: ['Poee Bread ➔ Coconut Flour / Flax Meal wraps', 'Polished Rice ➔ Red Matta Rice / Quinoa', 'Refined Seed Oils ➔ A2 Ghee / Coconut Oil'],
    spices: ['Kokum (Garcinia indica)', 'Curry Leaves', 'Turmeric']
  },
  'Maharashtra': {
    staples: 'Coastal seafood curries, polished white rice, coconut milks, fermented bread (Poee).',
    metabolicRisk: 'Erratic glucose spikes due to refined flour leavened breads; chronic metabolic load from deep fried batters.',
    chronoRule: 'Leverage circadian fat burning: restrict fermented breads to morning hours. Pair afternoon fish curries with leafy greens instead of white rice.',
    substitutions: ['Poee Bread ➔ Coconut Flour / Flax Meal wraps', 'Polished Rice ➔ Red Matta Rice / Quinoa', 'Refined Seed Oils ➔ A2 Ghee / Coconut Oil'],
    spices: ['Kokum (Garcinia indica)', 'Curry Leaves', 'Turmeric']
  },
  'Karnataka': {
    staples: 'Finger millet balls (Ragi Mudde), polished white rice, coconut chutneys, sambar.',
    metabolicRisk: 'High-glycemic load from white rice; heavy carbohydrate density in staple breakfast items (Idli/Dosa).',
    chronoRule: 'Consume Ragi Mudde during lunch for slow-release energy. Restrict dinner to light vegetable broth or millet rotis.',
    substitutions: ['Polished Rice ➔ Foxtail/Barnyard Millet', 'Refined Oils ➔ Cold-Pressed Coconut/Mustard Oil'],
    spices: ['Curry leaves', 'Mustard seeds', 'Asafoetida (Hing)']
  },
  'Gujarat': {
    staples: 'Wheat rotli, sweetened dal, deep-fried snacks (Fafda, Dhokla, Gathiya).',
    metabolicRisk: 'Elevated sugar additions to savory dishes causing sudden postprandial insulin spikes; visceral fat from fried snacks.',
    chronoRule: 'Restrict wheat flatbreads and sweetened dal to midday. Reframe dinner around low-carb mung beans and leafy greens before sunset.',
    substitutions: ['Refined Wheat ➔ Jowar/Bajra flour', 'Added Sucrose ➔ Organic Stevia / Whole Dates'],
    spices: ['Cumin', 'Coriander', 'Mustard seeds']
  },
  'Rajasthan': {
    staples: 'Wheat flatbreads, high-dairy curries (Gatte ki Sabji), dense sweets (Churma), heavy ghee.',
    metabolicRisk: 'Intracellular lipid accumulation due to dense saturated fat paired with refined carbohydrates.',
    chronoRule: 'Synchronize dairy fat consumption to early hours (before 2:00 PM). Limit evening meal fat density; use barley rotis.',
    substitutions: ['Refined Wheat ➔ Bajra/Jau (Barley) flour', 'Buffalo Butter ➔ Unpasteurized Cow Ghee (in moderation)'],
    spices: ['Fennel seeds', 'Cumin', 'Fenugreek']
  }
};

const DEFAULT_DIET = {
  staples: 'Mixed regional grains, refined oils, processed wheat, and late-night heavy meals.',
  metabolicRisk: 'Circadian clock desynchronization due to late eating windows and processed carbohydrate loads.',
  chronoRule: 'Eat in alignment with the sun: consume a heavy breakfast, moderate lunch, and light dinner before 7:00 PM. Drink warm ginger water between meals.',
  substitutions: ['Refined Wheat ➔ Multi-millet Flour (Ragi/Jowar/Bajra)', 'Refined Seed Oils ➔ Cold-Pressed Mustard / Sesame / Virgin Olive Oil', 'Late Dinner ➔ Early Sunset dinner (before 7:00 PM)'],
  spices: ['Ceylon Cinnamon', 'Turmeric', 'Fenugreek (Methi)']
};

interface LocalDirectoryProps {
  navigate: (path: string) => void;
  currentPath: string;
}

export const LocalDirectory: React.FC<LocalDirectoryProps> = ({ navigate, currentPath }) => {
  const { trackInteraction } = useViewerTracker();
  const [searchQuery, setSearchQuery] = useState('');
  const deferredSearchQuery = React.useDeferredValue(searchQuery);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('India');
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingName, setBookingName] = useState('');
  const [bookingPhone, setBookingPhone] = useState('');
  const [bookingDate, setBookingDate] = useState('');

  // Group locations by State for accordion directory listing
  const locationsByState = useMemo(() => {
    const map: Record<string, LocationNode[]> = {};
    LOCATIONS_DATA.forEach(loc => {
      if (!map[loc.state]) {
        map[loc.state] = [];
      }
      map[loc.state].push(loc);
    });
    return map;
  }, []);

  // Filter locations based on search query (combines local India and global nodes with synonym-expanded TF-IDF ranking)
  const { filteredLocations, activeSearchTerms } = useMemo(() => {
    if (!deferredSearchQuery) return { filteredLocations: [], activeSearchTerms: [] };
    const query = deferredSearchQuery.toLowerCase().trim();
    const queryTokens = tokenize(query);
    if (queryTokens.length === 0) return { filteredLocations: [], activeSearchTerms: [] };

    // Expand search query with synonyms
    const expandedTerms = new Set<string>();
    queryTokens.forEach(token => {
      expandedTerms.add(token);
      if (SYNONYM_DICTIONARY[token]) {
        SYNONYM_DICTIONARY[token].forEach(syn => expandedTerms.add(syn));
      }
    });
    const termArray = Array.from(expandedTerms);

    // Dynamic IDF calculation for terms
    const totalDocs = LOCATIONS_DATA.length + INTERNATIONAL_COUNTRIES.length;
    const termDocCounts: Record<string, number> = {};
    termArray.forEach(term => {
      let count = 0;
      LOCATIONS_DATA.forEach(loc => {
        const docText = `${loc.city} ${loc.state} ${loc.pincode} ${(loc.healthIssues || []).join(' ')} ${loc.commonStaples || ''}`.toLowerCase();
        if (docText.includes(term)) count++;
      });
      INTERNATIONAL_COUNTRIES.forEach(loc => {
        const docText = `${loc.city} ${loc.country} ${loc.pincode} ${(loc.healthIssues || []).join(' ')} ${loc.commonStaples || ''}`.toLowerCase();
        if (docText.includes(term)) count++;
      });
      termDocCounts[term] = count;
    });

    const idfs: Record<string, number> = {};
    termArray.forEach(term => {
      idfs[term] = Math.log(1 + totalDocs / (termDocCounts[term] || 1));
    });

    // Score local Indian nodes
    const localScored = LOCATIONS_DATA.map(loc => {
      let score = 0;
      let matchedReason = '';
      const matchedIssues: string[] = [];
      let matchedStaples = false;

      termArray.forEach(term => {
        const idf = idfs[term];
        let tf = 0;

        const cityLower = loc.city.toLowerCase();
        if (cityLower === term) tf += 15.0;
        else if (cityLower.startsWith(term)) tf += 8.0;
        else if (cityLower.includes(term)) tf += 4.0;

        if (loc.pincode === term) tf += 12.0;
        else if (loc.pincode.includes(term)) tf += 6.0;

        const stateLower = loc.state.toLowerCase();
        if (stateLower === term) tf += 8.0;
        else if (stateLower.includes(term)) tf += 4.0;

        if (loc.healthIssues) {
          loc.healthIssues.forEach(issue => {
            if (issue.toLowerCase().includes(term)) {
              tf += 3.0;
              if (!matchedIssues.includes(issue)) {
                matchedIssues.push(issue);
              }
            }
          });
        }

        if (loc.commonStaples && loc.commonStaples.toLowerCase().includes(term)) {
          tf += 2.0;
          matchedStaples = true;
        }

        score += tf * idf;
      });

      if (score > 0) {
        if (matchedIssues.length > 0) {
          matchedReason = `Specialized in: ${matchedIssues.slice(0, 2).join(', ')}`;
        } else if (matchedStaples) {
          matchedReason = `Adapts to regional staples: ${loc.commonStaples}`;
        } else {
          matchedReason = `Active remote hub in ${loc.state}`;
        }
      }

      return {
        ...loc,
        country: 'India',
        score,
        matchReason: matchedReason
      };
    }).filter(loc => loc.score > 0);

    // Score International nodes
    const intlScored = INTERNATIONAL_COUNTRIES.map(loc => {
      let score = 0;
      let matchedReason = '';
      const matchedIssues: string[] = [];
      let matchedStaples = false;

      termArray.forEach(term => {
        const idf = idfs[term];
        let tf = 0;

        const cityLower = loc.city.toLowerCase();
        if (cityLower === term) tf += 15.0;
        else if (cityLower.startsWith(term)) tf += 8.0;
        else if (cityLower.includes(term)) tf += 4.0;

        if (loc.pincode === term) tf += 12.0;
        else if (loc.pincode.includes(term)) tf += 6.0;

        const countryLower = loc.country.toLowerCase();
        if (countryLower === term) tf += 8.0;
        else if (countryLower.includes(term)) tf += 4.0;

        if (loc.healthIssues) {
          loc.healthIssues.forEach(issue => {
            if (issue.toLowerCase().includes(term)) {
              tf += 3.0;
              if (!matchedIssues.includes(issue)) {
                matchedIssues.push(issue);
              }
            }
          });
        }

        if (loc.commonStaples && loc.commonStaples.toLowerCase().includes(term)) {
          tf += 2.0;
          matchedStaples = true;
        }

        score += tf * idf;
      });

      if (score > 0) {
        if (matchedIssues.length > 0) {
          matchedReason = `Specialized in: ${matchedIssues.slice(0, 2).join(', ')}`;
        } else if (matchedStaples) {
          matchedReason = `Adapts to regional staples: ${loc.commonStaples}`;
        } else {
          matchedReason = `Active outreach hub in ${loc.country}`;
        }
      }

      return {
        state: loc.country,
        city: loc.city,
        pincode: loc.pincode,
        id: `${loc.id}/${slugify(loc.city)}`,
        country: loc.country,
        score,
        matchReason: matchedReason
      };
    }).filter(loc => loc.score > 0);

    const combined = [...localScored, ...intlScored]
      .sort((a, b) => b.score - a.score || a.city.localeCompare(b.city))
      .slice(0, 15);

    return { filteredLocations: combined, activeSearchTerms: termArray };
  }, [deferredSearchQuery]);


  // Handle active clinic resolution from route path e.g. "clinic/punjab-amritsar" or "clinic/united-states/new-york-city"
  const activeClinic = useMemo(() => {
    if (!currentPath.startsWith('clinic/')) return null;
    const parts = currentPath.split('/');
    const countryId = parts[1];
    const citySlug = parts[2];
    
    // Check Indian clinics first
    const localClinic = LOCATIONS_DATA.find(loc => loc.id === countryId);
    if (localClinic) return { ...localClinic, country: 'India', type: 'Clinical Hub', zone: 'South Asia' };
    
    // Check international clinics
    const matches = INTERNATIONAL_COUNTRIES.filter(loc => loc.id === countryId);
    if (matches.length > 0) {
      if (citySlug) {
        const match = matches.find(loc => slugify(loc.city) === citySlug);
        if (match) {
          return {
            ...match,
            state: match.country,
            type: 'Outreach Center'
          };
        }
      }
      // Fallback to first match for this country
      const defaultHub = matches[0];
      return {
        ...defaultHub,
        state: defaultHub.country,
        type: 'Outreach Center'
      };
    }
    return null;
  }, [currentPath]);

  const activeDiet = useMemo(() => {
    if (!activeClinic) return DEFAULT_DIET;
    if ('country' in activeClinic && activeClinic.country !== 'India') {
      const zone = (activeClinic as any).zone;
      return INTERNATIONAL_DIETS[zone] || DEFAULT_DIET;
    }
    return REGIONAL_DIETS[activeClinic.state] || DEFAULT_DIET;
  }, [activeClinic]);

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingName || !bookingPhone || !bookingDate) return;
    
    // Save locally
    const existing = localStorage.getItem('nutrition_clinic_appointments');
    let appointments = [];
    if (existing) {
      try {
        appointments = JSON.parse(existing);
      } catch (err) {
        console.error('Failed to parse stored clinic appointments', err);
      }
    }
    
    const newAppointment = {
      id: Date.now().toString(),
      name: bookingName,
      phone: bookingPhone,
      date: bookingDate,
      clinic: activeClinic ? `${activeClinic.city}, ${activeClinic.state} (PIN: ${activeClinic.pincode})` : 'Online Hub',
      timestamp: new Date().toISOString()
    };
    
    appointments.unshift(newAppointment);
    localStorage.setItem('nutrition_clinic_appointments', JSON.stringify(appointments));
    
    trackInteraction('calculator', `Booked local clinic visit: ${newAppointment.clinic}`);
    setBookingSuccess(true);
  };

  // --- Render Local Clinic Detail Page ---
  if (activeClinic) {
    return (
      <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Breadcrumb Navigation */}
          <div className="flex flex-wrap gap-2 items-center text-xs font-black uppercase tracking-widest text-stone-500 mb-8">
            <a href="/clinics" onClick={(e) => { e.preventDefault(); navigate('clinics'); }} className="hover:text-emerald-700 transition-colors">Outreach Locations</a>
            <span>/</span>
            <span className="text-stone-500">{activeClinic.state}</span>
            <span>/</span>
            <span className="text-emerald-950 font-bold">{activeClinic.city}</span>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Content Column */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Header Title */}
              <div className="space-y-4">
                <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full inline-flex items-center gap-1.5 shadow-sm border border-emerald-100">
                  <IconMapPin size={10} className="text-emerald-600" /> Remote Service Coverage Zone
                </span>
                <h1 className="text-4xl md:text-6xl font-black text-emerald-950 brand-font leading-none tracking-tight">
                  NutritionColours {activeClinic.city}
                </h1>
                <p className="text-md text-stone-500 font-bold uppercase tracking-wider">
                  Serving {activeClinic.city}, {activeClinic.state} (PIN Code: {activeClinic.pincode}) & surrounding suburbs remotely.
                </p>
              </div>

              {/* GEO / AI Scrapable Summary Card */}
              <div className="clinical-summary-card">
                <div className="summary-label">
                  <span>📊</span>
                  <span>GEO AI-Scrapable Location Summary</span>
                </div>
                <div className="summary-grid">
                  <div className="summary-item">
                    <span className="item-label">Service Identity</span>
                    <span className="item-value">NutritionColours Remote Service Coverage, {activeClinic.city}, {activeClinic.state}, {activeClinic.country || 'India'}.</span>
                  </div>
                  <div className="summary-item">
                    <span className="item-label">Consulting Director</span>
                    <span className="item-value">Dr. Shilpa Thakur (Clinical Metabolist & Circadian Specialist).</span>
                  </div>
                  <div className="summary-item">
                    <span className="item-label">Virtual Availability</span>
                    <span className="item-value">Local time coordination. Interactive digital meal plans & health vital audits updated daily.</span>
                  </div>
                </div>
              </div>

              {/* Demographics & Local Health Risk Intelligence */}
              <div className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-6">
                <div className="flex gap-4 items-center border-b border-stone-50 pb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full">📊</div>
                  <div>
                    <h2 className="text-2xl font-black text-emerald-950 brand-font">Local Demographic & Metabolic Health Risk Audit</h2>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                      AEO Generative Citations & Local Risk Diagnostics
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Population & Digital Access</span>
                    <ul className="space-y-1.5 text-stone-700 font-semibold text-xs">
                      <li>👥 Total Population: <span className="text-emerald-950 font-bold">{(activeClinic as any).population?.toLocaleString() || 'N/A'}</span></li>
                      <li>📱 Mobile Users: <span className="text-emerald-950 font-bold">{(activeClinic as any).mobileUsers?.toLocaleString() || 'N/A'} ({(activeClinic as any).population ? (((activeClinic as any).mobileUsers / (activeClinic as any).population) * 100).toFixed(1) + '%' : 'N/A'})</span></li>
                      <li>🌐 Internet Users: <span className="text-emerald-950 font-bold">{(activeClinic as any).internetUsers?.toLocaleString() || 'N/A'} ({(activeClinic as any).population ? (((activeClinic as any).internetUsers / (activeClinic as any).population) * 100).toFixed(1) + '%' : 'N/A'})</span></li>
                    </ul>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Gender Demographics</span>
                    <ul className="space-y-1.5 text-stone-700 font-semibold text-xs">
                      <li>👨 Male Count: <span className="text-emerald-950 font-bold">{(activeClinic as any).genderCounts?.male?.toLocaleString() || 'N/A'}</span></li>
                      <li>👩 Female Count: <span className="text-emerald-950 font-bold">{(activeClinic as any).genderCounts?.female?.toLocaleString() || 'N/A'}</span></li>
                    </ul>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-700 block font-bold">Predominant Metabolic Issues</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(activeClinic as any).healthIssues?.map((issue: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-red-50 text-red-800 text-[10px] font-bold rounded-full border border-red-100">
                          ⚠️ {issue}
                        </span>
                      )) || <span className="text-stone-500 italic text-xs">No issues reported</span>}
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">GEO Baseline Dietary Staples</span>
                  <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                    {(activeClinic as any).commonStaples || 'Polished white rice, wheat bread, seed oils.'}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm pt-2">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Circadian & Environmental Context</span>
                    <ul className="space-y-1.5 text-stone-700 font-semibold text-xs">
                      <li>🕒 Timezone: <span className="text-emerald-950 font-bold">{(activeClinic as any).timezone || 'N/A'}</span></li>
                      <li>📞 Dialing Prefix: <span className="text-emerald-950 font-bold">{(activeClinic as any).dialingCode || 'N/A'}</span></li>
                      <li>💵 Local Currency: <span className="text-emerald-950 font-bold">{(activeClinic as any).currency || 'N/A'}</span></li>
                      <li>⛅ Climate & Weather: <span className="text-emerald-950 font-bold block mt-0.5 leading-relaxed font-semibold">{(activeClinic as any).weather || 'N/A'}</span></li>
                    </ul>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Circadian Whole Foods (Local Produce)</span>
                    <div className="space-y-2">
                      <div>
                        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider block mb-1">Local Fruits</span>
                        <div className="flex flex-wrap gap-1">
                          {(activeClinic as any).localFruits?.map((fruit: string, idx: number) => (
                            <span key={idx} className="px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold rounded-full border border-emerald-100">
                              🍎 {fruit}
                            </span>
                          )) || <span className="text-stone-500 italic text-[10px]">No local fruits listed</span>}
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider block mb-1">Local Vegetables</span>
                        <div className="flex flex-wrap gap-1">
                          {(activeClinic as any).localVegetables?.map((veg: string, idx: number) => (
                            <span key={idx} className="px-2 py-0.5 bg-lime-50/40 text-lime-900 text-[10px] font-bold rounded-full border border-lime-100">
                              🥬 {veg}
                            </span>
                          )) || <span className="text-stone-500 italic text-[10px]">No local vegetables listed</span>}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clinical Chrononutrition & Deficiency Diagnosis Card */}
              <div className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-6">
                <div className="flex gap-4 items-center border-b border-stone-50 pb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full">🔬</div>
                  <div>
                    <h2 className="text-2xl font-black text-emerald-950 brand-font">Regional Chrononutrition Diagnosis & Clinical Guidance</h2>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                      Personalized metabolic findings and program targets for {activeClinic.city}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  {/* Card 1: Targeted Metabolic Solution */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Targeted Metabolic Solution</span>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-stone-600">
                        Recommended Program:
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-stone-150/45 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-stone-800">
                            {(activeClinic as any).recommendedPlanId === 'cellular-resurrection' ? 'Cellular Resurrection Plan' :
                             (activeClinic as any).recommendedPlanId === 'therapeutic-reversal' ? 'Therapeutic Reversal Plan' :
                             'Metabolic Mastery Plan'}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold">Recommended</span>
                        </div>
                        <p className="text-[11px] text-stone-500 leading-relaxed pt-1">
                          Calibrated to address local issues: <strong>{(activeClinic as any).healthIssues?.join(', ')}</strong>.
                        </p>
                        {(() => {
                          const topicId = (activeClinic as any).associatedTopicId;
                          const assocTopic = TOPICS.find(t => t.id === topicId);
                          if (!assocTopic) return null;
                          return (
                            <div className="pt-2 border-t border-stone-100 mt-2">
                              <span className="text-[10px] text-stone-400 block font-semibold uppercase tracking-wider">Clinical Protocol</span>
                              <a 
                                href={`/topic/${assocTopic.id}`} 
                                onClick={(e) => { e.preventDefault(); navigate(`topic/${assocTopic.id}`); }}
                                className="text-emerald-700 hover:text-emerald-950 text-[11px] font-black block mt-0.5 hover:underline"
                              >
                                {assocTopic.title} Protocol →
                              </a>
                            </div>
                          );
                        })()}
                        <div className="pt-2">
                          <a 
                            href={`/plans`} 
                            onClick={(e) => { e.preventDefault(); navigate('plans'); }}
                            className="text-emerald-700 hover:text-emerald-950 text-xs font-bold flex items-center gap-1"
                          >
                            Explore Plan Details →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2: Local Spice & Produce Synergy */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-3 flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold mb-2">Local Spice & Produce Synergy</span>
                      <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                        Primary Therapeutic Spice: <span className="text-emerald-950 font-bold">{(activeClinic as any).localTherapeuticSpice || 'Turmeric'}</span>
                      </p>
                      <div className="bg-emerald-950/5 p-4 rounded-xl border border-emerald-900/10 mt-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900 block font-bold mb-1">Synergy Recipe Recommendation</span>
                        <p className="text-[11px] text-emerald-950/90 leading-relaxed font-semibold italic">
                          "{(activeClinic as any).localProduceSynergy}"
                        </p>
                      </div>
                    </div>
                    <p className="text-[10px] text-stone-500 leading-relaxed pt-2 font-medium">
                      Pairing regional crops with key spices utilizes natural synergists to optimize absorption of active bio-compounds.
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  {/* Card 3: Target Blood Biomarkers */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-800 block font-bold">Primary Target Blood Biomarkers</span>
                    <p className="text-xs text-stone-700 font-bold leading-relaxed">
                      🧪 {(activeClinic as any).clinicalTargetBiomarker}
                    </p>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                      Under Dr. Shilpa Thakur's oversight, local patient onboarding includes auditing these baseline markers. Periodic checks verify cellular-level metabolic recovery and guide diet adjustments.
                    </p>
                  </div>

                  {/* Card 4: Dietary Staple & Swap */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Dietary Staple Optimization</span>
                    <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                      Baseline Staple: <span className="text-stone-500 font-medium">{(activeClinic as any).commonStaples}</span>
                    </p>
                    <div className="bg-lime-900/5 p-3 rounded-xl border border-lime-900/10 mt-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-lime-900 block font-bold mb-0.5">Recommended Grain Swap</span>
                      <p className="text-[11px] text-lime-950 font-bold leading-relaxed">
                        🔄 {(activeClinic as any).regionalStapleAlternative}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  {/* Card 5: Regional Nutritional Deficiency Risk */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-700 block font-bold">Regional Nutritional Deficiency Risk</span>
                    <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                      ⚠️ {(activeClinic as any).regionalDeficiencyRisk}
                    </p>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                      Geographic soils and typical food-prep methods in this zone increase the risk of this deficiency. We adjust our daily chrononutrition meal maps to compensate for this baseline gap.
                    </p>
                  </div>

                  {/* Card 6: Circadian Challenge & Climate Impact */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 block font-bold">Primary Circadian & Climate Impact</span>
                    <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                      🕒 {(activeClinic as any).circadianChallenge}
                    </p>
                    <p className="text-[11px] text-stone-600 leading-relaxed font-semibold mt-1">
                      Climatic Impact: <span className="text-stone-500 font-medium block mt-0.5">{(activeClinic as any).microclimateMetabolicImpact}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Dynamic Telecommunication & Geographic Integrity Details */}
              <div className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-6">
                <div className="flex gap-4 items-center border-b border-stone-50 pb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full">🌐</div>
                  <div>
                    <h2 className="text-2xl font-black text-emerald-950 brand-font">Remote Clinic Service Coverage</h2>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                      100% remote digital health consultations & support profiles for this region
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Consultation Access & Availability</span>
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-stone-600">
                        Clinical coverage status for <span className="text-emerald-950 font-bold">{activeClinic.city}</span>:
                      </div>
                      <div className="bg-white p-4 rounded-xl border border-stone-150/45 space-y-2">
                        <div className="flex justify-between items-center text-xs">
                          <span className="font-bold text-stone-800">Telehealth Status</span>
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 text-[10px] font-bold">🟢 Fully Active</span>
                        </div>
                        <p className="text-[11px] text-stone-500 leading-relaxed pt-1">
                          Dr. Shilpa Thakur provides direct, personalized virtual dietary consultations. All protocols, chrononutrition schedules, and biomarker updates are delivered securely.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Digital Health Dashboard Integration</span>
                    <ul className="space-y-2.5 text-stone-700 font-semibold text-xs bg-white p-4 rounded-xl border border-stone-150/45">
                      <li className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span>📡 Connection Type:</span>
                        <span className="text-emerald-950 font-bold text-[10px]">Encrypted Portal</span>
                      </li>
                      <li className="flex justify-between border-b border-stone-100 pb-1.5">
                        <span>🔒 Compliance Profile:</span>
                        <span className="text-emerald-950 font-bold text-[10px]">Secure & Redacted</span>
                      </li>
                      <li className="flex justify-between pb-1.5">
                        <span>📋 Deliverables:</span>
                        <span className="text-emerald-950 font-bold text-[10px]">Meal Maps & Lab Sync</span>
                      </li>
                    </ul>
                  </div>

                  {(() => {
                    const coords = getCoordinates(activeClinic.city, activeClinic.state || '', activeClinic.country || 'India');
                    const hydrationMultiplier = (1 + (Math.abs(parseFloat(coords.latitude)) / 90) * 0.15).toFixed(2);
                    
                    // Client-side Solar Declination & Sunset Calculation
                    const getSunsetTime = (lat: number, lng: number) => {
                      const now = new Date();
                      const start = new Date(now.getFullYear(), 0, 0);
                      const diff = now.getTime() - start.getTime();
                      const oneDay = 1000 * 60 * 60 * 24;
                      const N = Math.floor(diff / oneDay);
                      
                      const latRad = lat * Math.PI / 180;
                      const delta = 23.45 * Math.sin((360 / 365) * (284 + N) * Math.PI / 180);
                      const deltaRad = delta * Math.PI / 180;
                      
                      const cosHs = -Math.tan(latRad) * Math.tan(deltaRad);
                      if (cosHs < -1) return "Polar Day";
                      if (cosHs > 1) return "Polar Night";
                      
                      const Hs = Math.acos(cosHs) * 180 / Math.PI;
                      const B = (360 / 364) * (N - 81) * Math.PI / 180;
                      const EoT = 9.87 * Math.sin(2 * B) - 7.53 * Math.cos(B) - 1.5 * Math.sin(B);
                      
                      const timezoneOffset = -now.getTimezoneOffset() / 60;
                      const LST = 12 + Hs / 15 - (lng - 15 * timezoneOffset) / 15 - EoT / 60;
                      
                      const hour = Math.floor(LST % 24);
                      const min = Math.floor((LST * 60) % 60);
                      const ampm = hour >= 12 ? 'PM' : 'AM';
                      const displayH = hour % 12 === 0 ? 12 : hour % 12;
                      return `${displayH}:${min.toString().padStart(2, '0')} ${ampm}`;
                    };

                    const localSunset = getSunsetTime(parseFloat(coords.latitude), parseFloat(coords.longitude));

                    return (
                      <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-4">
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Circadian Hydration & Coordinates</span>
                        <div className="bg-white p-4 rounded-xl border border-stone-150/45 space-y-2 text-xs">
                          <div className="flex justify-between items-center">
                            <span className="font-bold text-stone-700">Geographic Nodes</span>
                            <span className="font-mono text-stone-500 text-[10px]">{coords.latitude}°N, {coords.longitude}°E</span>
                          </div>
                          <div className="flex justify-between items-center pt-1 border-t border-stone-100">
                            <span className="font-bold text-stone-700">Hydration Index</span>
                            <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100 text-[10px]">{hydrationMultiplier}x</span>
                          </div>
                          <div className="flex justify-between items-center pt-1 border-t border-stone-100">
                            <span className="font-bold text-stone-700">Solar Sunset Today</span>
                            <span className="font-mono text-amber-700 font-bold bg-amber-50 px-2 py-0.5 rounded-md border border-amber-100 text-[10px]">{localSunset}</span>
                          </div>
                        </div>
                        <p className="text-[11px] text-stone-500 leading-relaxed font-semibold">
                          Calculated astronomically. Sunset at <strong>{localSunset}</strong> requires aligning evening meal windows prior to melatonin onset.
                        </p>
                      </div>
                    );
                  })()}
                </div>

                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Timezone</span>
                    <span className="text-emerald-950 font-bold text-xs">
                      {getCountryMeta(activeClinic.country || 'India').timezone}
                    </span>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Local Currency</span>
                    <span className="text-emerald-950 font-bold text-xs">
                      {getCountryMeta(activeClinic.country || 'India').currency}
                    </span>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-1">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">International Dialing</span>
                    <span className="text-emerald-950 font-bold text-xs">
                      {getCountryMeta(activeClinic.country || 'India').dialingCode}
                    </span>
                  </div>
                </div>
              </div>


              {/* Regional Dietary Customizer (Research backed $3M UI display) */}
              <div className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-6">
                <div className="flex gap-4 items-center border-b border-stone-50 pb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full"><IconLeaf size={24} /></div>
                  <div>
                    <h2 className="text-2xl font-black text-emerald-950 brand-font">How does Dr. Shilpa Thakur customize metabolic reversal for {activeClinic.city}?</h2>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                      {activeClinic.country !== 'India' ? `${activeClinic.country} Outreach Hub` : `Dr. Shilpa Thakur's Local R&D Diet Tips`}
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-red-700 block">What are the local dietary staples and associated metabolic health risks?</h3>
                    <p className="text-stone-700 leading-relaxed font-medium">{activeDiet.staples}</p>
                    <p className="text-xs text-stone-500 italic mt-2">{activeDiet.metabolicRisk}</p>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">How does the personalized Circadian Chrono-Rule optimize cellular recovery?</h3>
                    <p className="text-stone-700 leading-relaxed font-semibold">{activeDiet.chronoRule}</p>
                  </div>
                </div>

                {/* Substitutions & Spices Lists */}
                <div className="grid md:grid-cols-2 gap-6 pt-4 border-t border-stone-100 text-xs">
                  <div>
                    <h4 className="font-bold text-emerald-950 uppercase tracking-wider mb-3">Reversal Substitutions</h4>
                    <ul className="space-y-2">
                      {activeDiet.substitutions.map((sub, idx) => (
                        <li key={idx} className="flex gap-2 items-center text-stone-600 font-semibold">
                          <span className="text-emerald-500">✔</span> {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-950 uppercase tracking-wider mb-3">Therapeutic Spices to Integrate</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDiet.spices.map((spice, idx) => (
                        <span key={idx} className="bg-emerald-50 text-emerald-700 font-bold px-3 py-1.5 rounded-full border border-emerald-100/50">
                          🌱 {spice}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Consultation Details */}
              <div className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-4">
                <h3 className="text-xl font-bold text-emerald-950 brand-font">Virtual Consultation Outreach</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Our service coverage zones are managed remotely and synchronized online under Dr. Shilpa Thakur's centralized clinical nutrition practice. Patients in <strong>{activeClinic.city}</strong> receive direct digital access to health vital trackers, circadian charts, and localized meal sheets. Any physical laboratory reports (ALT/AST, HbA1c, HOMA-IR) are parsed and synced to customize the diet plan dynamically.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-bold text-stone-500 pt-4 border-t border-stone-150/40">
                  <div className="flex items-center gap-2">
                     <span className="text-emerald-600"><IconPhone size={14} /></span> +91-76961-60133
                  </div>
                  <div className="flex items-center gap-2">
                     <span className="text-emerald-600"><IconMail size={14} /></span> drthakurshilpa@gmail.com
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Appointment Scheduler Form */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              
              <div className="bg-emerald-950 rounded-[32px] text-white p-8 shadow-xl border border-emerald-900 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400 opacity-5 rounded-full blur-2xl"></div>
                <h3 className="text-xl font-bold brand-font mb-2">Request Remote Consultation</h3>
                <p className="text-xs text-emerald-200/80 mb-6 leading-relaxed">
                  Submit a remote consultation request for the <strong>{activeClinic.city}</strong> region. Our team will coordinate your virtual onboarding and digital protocol delivery.
                </p>

                {bookingSuccess ? (
                  <div className="bg-emerald-900/50 p-6 rounded-2xl border border-emerald-800 text-center space-y-4 animate-in zoom-in-95">
                    <span className="text-4xl text-lime-400">✔</span>
                    <h4 className="font-bold text-emerald-300">Consultation Request Received</h4>
                    <p className="text-xs text-stone-300 leading-relaxed">
                      We have logged your remote consult request for {activeClinic.city}. Our team will contact you within 2 business hours.
                    </p>
                    <button 
                      onClick={() => setBookingSuccess(false)}
                      className="bg-white/10 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-[9px] px-4 py-2 rounded-xl transition-all cursor-pointer w-full"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-emerald-300">Your Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={bookingName}
                        onChange={e => setBookingName(e.target.value)}
                        placeholder="e.g. Rahul Sharma" 
                        className="bg-emerald-900/60 border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 placeholder:opacity-40"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-emerald-300">Contact Number</label>
                      <input 
                        type="tel" 
                        required
                        value={bookingPhone}
                        onChange={e => setBookingPhone(e.target.value)}
                        placeholder="e.g. +91 98765-43210" 
                        className="bg-emerald-900/60 border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400 placeholder:opacity-40"
                      />
                    </div>
                    <div className="flex flex-col gap-1">
                      <label className="text-[9px] font-black uppercase tracking-widest text-emerald-300">Preferred Consult Date</label>
                      <input 
                        type="date" 
                        required
                        value={bookingDate}
                        onChange={e => setBookingDate(e.target.value)}
                        className="bg-emerald-900/60 border border-emerald-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-400"
                      />
                    </div>
                    
                    <button 
                      type="submit"
                      className="bg-lime-400 hover:bg-lime-300 text-emerald-950 font-black uppercase tracking-wider text-xs py-4 rounded-xl transition-all shadow-md cursor-pointer w-full mt-4 flex items-center justify-center gap-2"
                    >
                      Submit Request <IconArrowRight size={14} />
                    </button>
                  </form>
                )}
              </div>

              <div className="p-6 bg-white border border-stone-100 rounded-3xl space-y-4">
                <span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">Central Clinical Desk</span>
                <p className="text-xs text-stone-500 leading-relaxed font-semibold">
                  Dr. Shilpa Thakur leads custom plant-chemistry research and patient evaluations from our metabolic center in Chandigarh. All regional directories coordinate with central health records.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

  // --- Render Local Clinic Search & Directory Hub ---
  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        
        {/* Header Hero Section */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full inline-block shadow-sm border border-emerald-100">
            Regional Outreach Network
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 mb-4 brand-font leading-tight">
            Remote Consultation & Service Areas
          </h1>
          <p className="text-stone-500 text-sm md:text-base max-w-lg mx-auto">
            Find if your city is covered by NutritionColours remote metabolic services. Enter your city name or pincode to unlock regional chronobiology guides and local dietary calibrations.
          </p>
        </div>

        {/* Live Search Engine Block */}
        <div className="max-w-xl mx-auto bg-white rounded-3xl border border-stone-200/60 p-6 shadow-xl space-y-4">
          <div className="flex gap-2 items-center bg-stone-50 border border-stone-200 rounded-2xl p-2 focus-within:border-emerald-400 focus-within:ring-2 focus-within:ring-emerald-50 transition-all">
            <span className="text-stone-500 ml-2"><IconSearch size={20} /></span>
            <input 
              type="text" 
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by City, State, or Pincode (e.g. Amritsar, Attili, 133001)..."
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm py-2 text-stone-850 font-semibold"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="p-2 text-stone-500 hover:text-stone-800">
                <IconX size={16} />
              </button>
            )}
          </div>

          {/* Real-time search matches dropdown results */}
          {searchQuery && (
            <div className="divide-y divide-stone-100 max-h-60 overflow-y-auto custom-scrollbar animate-in fade-in duration-200">
              {filteredLocations.length > 0 ? (
                filteredLocations.map(loc => (
                  <a 
                    key={loc.id} 
                    href={`/clinic/${loc.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      trackInteraction('click', `Search result clicked: ${loc.city}`);
                      navigate(`clinic/${loc.id}`);
                    }} 
                    className="p-4 hover:bg-stone-50 transition-all flex items-center justify-between cursor-pointer group block"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-800 group-hover:scale-110 transition-transform"><IconMapPin size={16} /></span>
                      <div className="flex flex-col">
                        <div className="font-bold text-emerald-950">
                          {highlightText(loc.city, activeSearchTerms)} Outreach Zone
                        </div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider">
                          {highlightText(loc.state, activeSearchTerms)} (PIN: {highlightText(loc.pincode, activeSearchTerms)})
                        </span>
                        {(loc as any).matchReason && (
                          <span className="text-[10px] text-emerald-700 font-bold mt-1 bg-emerald-50 px-2 py-0.5 rounded-full w-max border border-emerald-100 flex items-center gap-1">
                            ✨ {highlightText((loc as any).matchReason, activeSearchTerms)}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-stone-500 group-hover:text-emerald-800 transition-colors"><IconArrowRight size={14} /></span>
                  </a>
                ))
              ) : (
                <div className="p-6 text-center text-xs text-stone-500 font-bold uppercase tracking-wider">
                  No remote outreach zone found for this code. We still provide full virtual consultation coverage globally—contact our central desk.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Interactive Coverage Visual Map (Styled SVG list of major hubs) */}
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-emerald-950 to-emerald-900 rounded-[32px] text-white p-8 shadow-xl relative overflow-hidden border border-emerald-900">
          <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400 opacity-5 rounded-full blur-3xl"></div>
          <div className="grid md:grid-cols-12 gap-8 items-center">
            
            <div className="md:col-span-7 space-y-6">
              <span className="text-[10px] font-black uppercase tracking-widest text-lime-400">Outreach Network Density</span>
              <h2 className="text-3xl font-bold brand-font">1,040+ Remote Outreach & Service Coverage Zones</h2>
              <p className="text-xs text-emerald-200/80 leading-relaxed font-semibold">
                NutritionColours provides synchronized chronic disease reversal protocols from Maharashtra and Punjab to Andhra Pradesh. By customizing clinical plant-nutrition according to local dietary staples, soil mineral content, and regional timing habits, we maximize success rates and cellular recovery metrics.
              </p>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                   <div className="text-xl font-bold text-lime-400">1044</div>
                   <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">Cities Covered</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                   <div className="text-xl font-bold text-lime-400">26+</div>
                   <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">States Serviced</span>
                </div>
                <div className="bg-white/5 border border-white/10 p-3 rounded-2xl">
                   <div className="text-xl font-bold text-lime-400">99.8%</div>
                   <span className="text-[8px] font-bold text-emerald-300 uppercase tracking-widest">PWA Uptime</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-5 flex flex-col items-center justify-center">
              {/* Interactive 3D Geospatial Globe Map */}
              <GeospatialMap 
                selectedCountry={selectedCountry} 
                onSelectCountry={setSelectedCountry} 
              />
              {/* Hidden semantic details block for screen-reader and search bot (AEO/SEO) crawlability */}
              <div className="sr-only-spatial-map" aria-live="polite">
                <h3>Remote Outreach Clinic Hubs & Demographic Targets</h3>
                <ul vocab="https://schema.org/" typeof="MedicalClinic">
                  <li property="areaServed" content="Delhi NCR Hub"><strong>India (Delhi NCR Hub):</strong> Reverses <span property="medicalSpecialty">circadian dysregulation</span>, vitamin B12 deficits, and <span property="medicalSpecialty">fatty liver (MASLD)</span> using Ceylon Cinnamon & Ragi flatbread swaps.</li>
                  <li property="areaServed" content="Dubai Hub"><strong>United Arab Emirates (Dubai Hub):</strong> Targets <span property="medicalSpecialty">visceral adiposity</span> and <span property="medicalSpecialty">insulin resistance</span>. Swaps high glycemic carbohydrates for Moringa infusions and daylight-restricted meals.</li>
                  <li property="areaServed" content="London Hub"><strong>United Kingdom (London Hub):</strong> Reverses vitamin D deficiency, <span property="medicalSpecialty">metabolic syndrome</span>, and intracellular lipid blocks. Promotes sprouted grains and sunset dining constraints.</li>
                  <li property="areaServed" content="New York Hub"><strong>United States (New York Hub):</strong> Targets <span property="medicalSpecialty">type 2 diabetes</span> and <span property="medicalSpecialty">hyperinsulinemia</span>. Recommends organic tempeh swaps and cortisol-aligned breakfast.</li>
                  <li property="areaServed" content="Riyadh Hub"><strong>Saudi Arabia (Riyadh Hub):</strong> Reverses postprandial glucose surges and cardiovascular risk. Promotes whole-grain pearl barley and daytime fasting swap methods.</li>
                  <li property="areaServed" content="Manama Hub"><strong>Bahrain (Manama Hub):</strong> Reverses <span property="medicalSpecialty">dyslipidemia</span> and <span property="medicalSpecialty">metabolic syndrome</span>. Supports early-dinner constraints and stevia-cardamom teas.</li>
                  <li property="areaServed" content="Singapore Hub"><strong>Singapore Hub:</strong> Targets <span property="medicalSpecialty">pre-diabetes</span> and postprandial fat storing. Promotes brown/millet rice swaps and daylight fat intake timing.</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Country Selector Dropdown */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between bg-white border border-stone-200/60 p-8 rounded-[32px] shadow-sm max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <span className="text-3xl">🌐</span>
            <div>
              <label className="text-[10px] font-black uppercase text-stone-500 tracking-widest block mb-1">Outreach Country</label>
              <select 
                value={selectedCountry}
                onChange={(e) => {
                  setSelectedCountry(e.target.value);
                  setSelectedState('');
                  trackInteraction('click', `Country selection changed to: ${e.target.value}`);
                }}
                className="bg-transparent font-bold text-emerald-950 text-base focus:outline-none border-b border-dashed border-emerald-800 py-1"
              >
                <option value="India">India (1,040+ Coverage Zones)</option>
                {INTERNATIONAL_COUNTRIES.map(c => (
                  <option key={c.id} value={c.country}>{c.country}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="text-xs text-stone-500 font-bold uppercase tracking-wider">
            {selectedCountry === 'India' 
              ? 'Showing 26 States & 1,040+ Remote Outreach Zones' 
              : `Showing Primary Metabolic Reversal Hub in ${selectedCountry}`}
          </div>
        </div>

        {/* International Hub details display */}
        {selectedCountry !== 'India' && (() => {
          const match = INTERNATIONAL_COUNTRIES.find(c => c.country === selectedCountry);
          if (!match) return null;
          return (
            <div className="bg-white rounded-[32px] p-8 border border-stone-150 shadow-lg space-y-6 animate-in fade-in duration-500 max-w-2xl mx-auto">
              <div className="flex justify-between items-start gap-4 flex-wrap">
                <div className="flex gap-4 items-center">
                  <span className="p-3 bg-emerald-50 text-emerald-800 rounded-2xl"><IconMapPin size={24} /></span>
                  <div>
                    <h3 className="text-2xl font-black text-emerald-950 brand-font">{match.city} Service Zone</h3>
                    <p className="text-xs text-stone-500 font-bold uppercase tracking-widest">{match.country} Outreach Hub</p>
                  </div>
                </div>
                <span className="px-4 py-1.5 bg-lime-50 text-emerald-800 border border-lime-100 text-[10px] font-black uppercase tracking-widest rounded-full">
                  Active Outreach Hub
                </span>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed font-semibold">
                This hub serves as the central virtual onboarding and metabolic assessment center for residents of **{match.country}**. Through localized circadian food modifications and live consultations, we support remote chronic reversal paths.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-between sm:items-center items-start border-t border-stone-100 pt-6 text-xs font-bold text-stone-500 uppercase tracking-wider w-full">
                <span>ZIP/POSTAL CODE: {match.pincode}</span>
                <a 
                  href={`/clinic/${match.id}/${slugify(match.city)}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`clinic/${match.id}/${slugify(match.city)}`);
                  }}
                  className="bg-emerald-900 text-white px-6 py-3.5 rounded-xl hover:bg-emerald-800 transition-all font-black uppercase tracking-widest text-[10px] flex items-center gap-2 text-center"
                >
                  View Regional Diet Tips <IconArrowRight size={12} />
                </a>
              </div>
            </div>
          );
        })()}

        {/* State Directory Accordion (Clean indexable structure for India) */}
        {selectedCountry === 'India' && (
        <div className="space-y-6 animate-in fade-in duration-500">
          <h2 className="text-2xl font-bold text-emerald-950 brand-font">Directory by Region</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.keys(locationsByState).sort().map(state => (
              <div 
                key={state} 
                className="bg-white rounded-2xl border border-stone-150 p-6 shadow-sm hover:border-emerald-200 hover:shadow-md transition-all cursor-pointer"
                onClick={() => {
                  setSelectedState(selectedState === state ? '' : state);
                  trackInteraction('click', `State accordion clicked: ${state}`);
                }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-700 font-bold">📍</span>
                    <span className="text-sm font-bold text-stone-850">{state}</span>
                  </div>
                  <span className="text-xs text-stone-500 font-bold bg-stone-50 px-2.5 py-1 rounded-full border border-stone-100">
                    {locationsByState[state].length} Cities
                  </span>
                </div>

                {/* Cities list dropdown if selected */}
                {selectedState === state && (
                  <div className="mt-4 pt-4 border-t border-stone-100 max-h-48 overflow-y-auto custom-scrollbar space-y-2 text-xs font-semibold text-stone-500 animate-in slide-in-from-top-4 duration-300">
                    {locationsByState[state].sort((a,b) => a.city.localeCompare(b.city)).map(loc => (
                      <a 
                        key={loc.id} 
                        href={`/clinic/${loc.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation(); // prevent closing accordion
                          trackInteraction('click', `City directory clicked: ${loc.city}`);
                          navigate(`clinic/${loc.id}`);
                        }}
                        className="flex justify-between items-center py-1.5 px-2 hover:bg-stone-50 hover:text-emerald-700 rounded-lg transition-colors cursor-pointer"
                      >
                        <span>{loc.city}</span>
                        <span className="font-mono text-[10px] text-stone-500">PIN: {loc.pincode}</span>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        )}

      </div>
    </div>
  );
};
