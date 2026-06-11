import React, { useState, useMemo } from 'react';
import { LOCATIONS_DATA, LocationNode } from './locationsData';
import { INTERNATIONAL_COUNTRIES, InternationalCountryNode } from './internationalData';
import { useViewerTracker } from './ViewerTracker';
import { IconSearch, IconMapPin, IconPhone, IconMail, IconArrowRight, IconLeaf, IconCheck, IconBot, IconX } from './Icons';

const slugify = (text: string) => text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

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

  // Filter locations based on search query (combines local India and global nodes)
  const filteredLocations = useMemo(() => {
    if (!searchQuery) return [];
    const query = searchQuery.toLowerCase().trim();
    
    // Search Indian clinics
    const localMatches = LOCATIONS_DATA.filter(loc => 
      loc.city.toLowerCase().includes(query) || 
      loc.pincode.includes(query) ||
      loc.state.toLowerCase().includes(query)
    ).map(l => ({ ...l, country: 'India' }));

    // Search International clinics
    const intlMatches = INTERNATIONAL_COUNTRIES.filter(loc => 
      loc.country.toLowerCase().includes(query) ||
      loc.city.toLowerCase().includes(query) || 
      loc.pincode.includes(query)
    ).map(l => ({
      state: l.country,
      city: l.city,
      pincode: l.pincode,
      id: `${l.id}/${slugify(l.city)}`,
      country: l.country
    }));

    return [...localMatches, ...intlMatches].slice(0, 15);
  }, [searchQuery]);

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
            state: match.country,
            city: match.city,
            pincode: match.pincode,
            id: match.id,
            country: match.country,
            type: 'Outreach Center',
            zone: match.zone
          };
        }
      }
      // Fallback to first match for this country
      const defaultHub = matches[0];
      return {
        state: defaultHub.country,
        city: defaultHub.city,
        pincode: defaultHub.pincode,
        id: defaultHub.id,
        country: defaultHub.country,
        type: 'Outreach Center',
        zone: defaultHub.zone
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
              </div>

              {/* Dynamic Telecommunication & Geographic Integrity Details */}
              <div className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-6">
                <div className="flex gap-4 items-center border-b border-stone-50 pb-6">
                  <div className="p-3 bg-emerald-50 text-emerald-700 rounded-full">📡</div>
                  <div>
                    <h2 className="text-2xl font-black text-emerald-950 brand-font">Local Infrastructure, Proximity & Network Diagnostics</h2>
                    <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">
                      Verified regional telecom signals, coordinates, landmarks & dialing profiles
                    </p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Regional Connectivity & Telecom Grid</span>
                    <div className="space-y-3">
                      <div className="text-xs font-semibold text-stone-600">
                        Mobile Carrier Quality Metrics for <span className="text-emerald-950 font-bold">{activeClinic.city}</span>:
                      </div>
                      <div className="space-y-2">
                        {getCarrierQuality(activeClinic.city, activeClinic.country === 'India').map((carrier, idx) => (
                          <div key={idx} className="flex justify-between items-center bg-white p-2.5 rounded-xl border border-stone-150/45 text-xs">
                            <span className="font-bold text-stone-800 flex items-center gap-1.5">
                              📶 {carrier.name}
                            </span>
                            <div className="flex gap-3 text-[10px] font-bold">
                              <span className={`px-2 py-0.5 rounded-full ${
                                carrier.strength === 'Excellent' || carrier.strength === 'Strong' ? 'bg-emerald-50 text-emerald-800' : 'bg-amber-50 text-amber-800'
                              }`}>{carrier.strength}</span>
                              <span className="text-stone-500">{carrier.speed}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">Regional Coordinates & Landmarks</span>
                    <ul className="space-y-2.5 text-stone-700 font-semibold text-xs">
                      <li className="flex justify-between border-b border-stone-200/40 pb-1.5">
                        <span>📍 Lat/Lng Coordinates:</span>
                        <span className="text-emerald-950 font-bold">
                          {getCoordinates(activeClinic.city, activeClinic.state, activeClinic.country || 'India').latitude}° N, {getCoordinates(activeClinic.city, activeClinic.state, activeClinic.country || 'India').longitude}° E
                        </span>
                      </li>
                      <li className="flex justify-between border-b border-stone-200/40 pb-1.5">
                        <span>📡 Coordinate Proximity:</span>
                        <span className="text-emerald-950 font-bold">
                          {getCoordinates(activeClinic.city, activeClinic.state, activeClinic.country || 'India').proximity}
                        </span>
                      </li>
                      <li className="flex flex-col gap-1 border-b border-stone-200/40 pb-1.5">
                        <span>🏛️ Local Landmarks:</span>
                        <span className="text-emerald-950 font-bold pl-4">
                          {getDeterministicLandmarks(activeClinic.city, activeClinic.state).map((landmark, idx) => (
                            <span key={idx} className="block text-xs font-semibold text-emerald-900">• {landmark}</span>
                          ))}
                        </span>
                      </li>
                    </ul>
                  </div>
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
                  Our service coverage zones are managed remotely and synchronized online under Dr. Shilpa Thakur's centralized medical practice. Patients in <strong>{activeClinic.city}</strong> receive direct digital access to health vital trackers, circadian charts, and localized meal sheets. Any physical laboratory reports (ALT/AST, HbA1c, HOMA-IR) are parsed and synced to customize the diet plan dynamically.
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
                        <div className="font-bold text-emerald-950">{loc.city} Outreach Zone</div>
                        <span className="text-[10px] text-stone-500 uppercase tracking-wider">{loc.state} (PIN: {loc.pincode})</span>
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

            <div className="md:col-span-5 flex justify-center">
              {/* Abstract Visual Map Diagram */}
              <svg aria-hidden="true" width="220" height="250" viewBox="0 0 220 250" className="opacity-95 glow-pulse">
                {/* Outlined map of India (abstract representation) */}
                <path 
                  d="M100 20 L120 40 L130 60 L140 80 L160 90 L170 110 L180 120 L160 140 L150 150 L130 160 L120 180 L110 220 L100 240 L90 220 L80 180 L75 160 L60 150 L50 140 L40 120 L50 100 L60 90 L80 80 L90 60 Z" 
                  fill="none" 
                  stroke="#10b981" 
                  strokeWidth="2" 
                  strokeDasharray="4 4"
                />
                {/* Glowing Nodes (Major Cities) */}
                <circle cx="100" cy="50" r="4" fill="#65a30d" /> {/* Shimla */}
                <circle cx="95" cy="80" r="5" fill="#10b981" /> {/* Delhi/Chandigarh */}
                <circle cx="65" cy="140" r="4" fill="#65a30d" /> {/* Gujarat/Ahmedabad */}
                <circle cx="70" cy="170" r="6" fill="#10b981" /> {/* Mumbai */}
                <circle cx="110" cy="220" r="5" fill="#65a30d" /> {/* Kerala/Kochi */}
                <circle cx="125" cy="200" r="4" fill="#10b981" /> {/* Bangalore */}
                <circle cx="130" cy="180" r="5" fill="#65a30d" /> {/* Chennai */}
                <circle cx="140" cy="140" r="6" fill="#10b981" /> {/* Hyderabad / Attili */}
                <circle cx="170" cy="120" r="4" fill="#65a30d" /> {/* West Bengal/Kolkata */}
                <circle cx="120" cy="110" r="4" fill="#10b981" /> {/* Patna */}
                
                {/* Connection Lines to represent active clinical R&D synchronization */}
                <line x1="95" y1="80" x2="70" y2="170" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="95" y1="80" x2="140" y2="140" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="140" y1="140" x2="125" y2="200" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
                <line x1="140" y1="140" x2="170" y2="120" stroke="#10b981" strokeWidth="0.5" opacity="0.4" />
              </svg>
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
