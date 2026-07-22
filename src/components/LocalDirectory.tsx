import React, { useState, useMemo, useEffect } from 'react';
import type { LocationNode } from '../lib/locationsData';
import type { InternationalCountryNode } from '../lib/internationalData';
import { useViewerTracker } from './ViewerTracker';
import { TOPICS } from '@/lib/topics';
import { IconSearch, IconMapPin, IconPhone, IconMail, IconArrowRight, IconLeaf, IconCheck, IconBot, IconX } from './ui/Icons';
import { GeospatialMap } from './GeospatialMap';
import { slugify } from '../lib/directoryUtils';
import { Accordion } from './ui/Accordion';
import { BookingForm } from './BookingForm';
import { logger } from '@/lib/logger';
import { safeJsonParse } from '@/lib/safeUtils';

const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    hubType: "Clinical Outreach Hub",
    centerType: "Outreach Center",
    metabolicIssues: "Predominant Metabolic Issues",
    dietaryStaples: "GEO Baseline Dietary Staples",
    circadianContext: "Circadian & Environmental Context",
    timezone: "Timezone",
    dialingCode: "Dialing Prefix",
    currency: "Local Currency",
    climate: "Climate & Weather",
    localProduce: "Circadian Whole Foods (Local Produce)",
    localFruits: "Local Fruits",
    localVegetables: "Local Vegetables",
    famousProduce: "Famous Local Produce",
    deficiencyRisk: "Regional Nutritional Deficiency Risk",
    circadianChallenge: "Primary Circadian & Climate Impact",
    clinicalTarget: "Primary Target Blood Biomarkers",
    registerAppointment: "Register Appointment at",
    registerButton: "Register Appointment",
    genomicMatch: "Genomic Match Analysis",
    stapleAlternative: "Recommended Grain Swap",
    noIssues: "No issues reported",
    baselineStaple: "Baseline Staple",
    recommendedProgram: "Recommended Program",
    synergyTitle: "Local Spice & Produce Synergy",
    synergyRecipe: "Synergy Recipe Recommendation"
  },
  mr: {
    hubType: "क्लिनिकल आउटरीच हब",
    centerType: "आउटरीच केंद्र",
    metabolicIssues: "प्रमुख चयापचय (Metabolic) समस्या",
    dietaryStaples: "भौगोलिक मूळ अन्न घटक",
    circadianContext: "सर्कॅडियन आणि पर्यावरणीय संदर्भ",
    timezone: "वेळ क्षेत्र",
    dialingCode: "डायल कोड",
    currency: "स्थानिक चलन",
    climate: "हवामान आणि वातावरण",
    localProduce: "सर्कॅडियन संपूर्ण अन्न (स्थानिक उत्पादने)",
    localFruits: "स्थानिक फळे",
    localVegetables: "स्थानिक भाज्या",
    famousProduce: "प्रसिद्ध स्थानिक उत्पादने",
    deficiencyRisk: "प्रादेशिक पोषण कमतरता जोखीम",
    circadianChallenge: "मुख्य सर्कॅडियन आणि हवामान प्रभाव",
    clinicalTarget: "मुख्य लक्ष्य रक्त बायोमार्कर",
    registerAppointment: "येथे अपॉइंटमेंट नोंदवा:",
    registerButton: "अपॉइंटमेंट बुक करा",
    genomicMatch: "जीनोमिक मॅच विश्लेषण",
    stapleAlternative: "शिफारस केलेले पर्यायी धान्य बदल",
    noIssues: "कोणतीही समस्या नोंदवली नाही",
    baselineStaple: "आधारभूत मुख्य अन्न",
    recommendedProgram: "शिफारस केलेले कार्यक्रम",
    synergyTitle: "स्थानिक मसाला आणि उत्पादन परस्पर पूरकता",
    synergyRecipe: "परस्पर पूरक रेसिपी शिफारस"
  },
  ta: {
    hubType: "மருத்துவ அவுட்ரீச் மையம்",
    centerType: "அவுட்ரீச் மையம்",
    metabolicIssues: "முக்கிய வளர்சிதை மாற்ற சிக்கல்கள்",
    dietaryStaples: "வட்டார அடிப்படை உணவுகள்",
    circadianContext: "சர்காடியன் & சுற்றுச்சூழல் சூழல்",
    timezone: "நேர மண்டலம்",
    dialingCode: "தொலைபேசி குறியீடு",
    currency: "உள்ளூர் நாணயம்",
    climate: "காலநிலை & வானிலை",
    localProduce: "சர்காடியன் இயற்கை உணவுகள் (உள்ளூர் விளைச்சல்)",
    localFruits: "உள்ளூர் பழங்கள்",
    localVegetables: "உள்ளூர் காய்கறிகள்",
    famousProduce: "பிரபலமான உள்ளூர் விளைச்சல்",
    deficiencyRisk: "பிராந்திய ஊட்டச்சத்து குறைபாடு ஆபத்து",
    circadianChallenge: "சர்காடியன் & காலநிலையின் தாக்கம்",
    clinicalTarget: "மருத்துவ இலக்கு பயோமார்க்கர்",
    registerAppointment: "இங்கே சந்திப்பை பதிவு செய்க:",
    registerButton: "சந்திப்பை பதிவு செய்க",
    genomicMatch: "ஜெனோமிக் பொருத்த பகுப்பாய்வு",
    stapleAlternative: "பரிந்துரைக்கப்பட்ட மாற்று தானிய மாற்றம்",
    noIssues: "சிக்கல்கள் எதுவும் இல்லை",
    baselineStaple: "அடிப்படை உணவு",
    recommendedProgram: "பரிந்துரைக்கப்பட்ட திட்டம்",
    synergyTitle: "உள்ளூர் மசாலா & விளைச்சல் கூட்டாளியமைப்பு",
    synergyRecipe: "கூட்டு செய்முறை பரிந்துரை"
  },
  bn: {
    hubType: "ক্লিনিক্যাল আউটরিচ হাব",
    centerType: "আউটরিচ সেন্টার",
    metabolicIssues: "প্রধান বিপাকীয় সমস্যাসমূহ",
    dietaryStaples: "ভৌগোলिक প্রধান খাদ্য উপাদান",
    circadianContext: "সার্কাডিয়ান এবং পরিবেশগত প্রসঙ্গ",
    timezone: "সময় অঞ্চল",
    dialingCode: "ডায়াল কোড",
    currency: "স্থানীয় মুদ্রা",
    climate: "জলবায়ু এবং আবহাওয়া",
    localProduce: "সার্কাডিয়ান প্রাকৃতিক খাদ্য (স্থানীয় পণ্য)",
    localFruits: "স্থানীয় ফল",
    localVegetables: "স্থানীয় শাকসবজি",
    famousProduce: "বিখ্যাত স্থানীয় পণ্য",
    deficiencyRisk: "আঞ্চলিক পুষ্টির ঘাটতির ঝুঁকি",
    circadianChallenge: "সার্কাডিয়ান ও জলবায়ু প্রভাব",
    clinicalTarget: "ক্লিনিক্যাল বায়োমার্কার লক্ষ্য",
    registerAppointment: "এখানে অ্যাপয়েন্টমেন্ট বুক করুন:",
    registerButton: "অ্যাপয়েন্টমেন্ট বুক করুন",
    genomicMatch: "জিনোমিক ম্যাচ বিশ্লেষণ",
    stapleAlternative: "বিকল্প প্রধান খাদ্য পরিবর্তন",
    noIssues: "কোনো সমস্যা নথিভুক্ত নেই",
    baselineStaple: "মূল খাদ্যতালিকা",
    recommendedProgram: "সুপারিশকৃত প্রোগ্রাম",
    synergyTitle: "স্থানীয় মশলা ও ফলন সংমিশ্রণ",
    synergyRecipe: "সংমিশ্রণ রেসিপি সুপারিশ"
  },
  hi: {
    hubType: "क्लिनिकल आउटरीच हब",
    centerType: "आउटरीच सेंटर",
    metabolicIssues: "प्रमुख चयापचय (Metabolic) समस्याएं",
    dietaryStaples: "भौगोलिक मुख्य खाद्य पदार्थ",
    circadianContext: "सर्कैडियन और पर्यावरणीय संदर्भ",
    timezone: "समय क्षेत्र",
    dialingCode: "डायल कोड",
    currency: "स्थानीय मुद्रा",
    climate: "जलवायु और मौसम",
    localProduce: "सर्कैडियन संपूर्ण आहार (स्थानीय उत्पाद)",
    localFruits: "स्थानीय फल",
    localVegetables: "स्थानीय सब्जियां",
    famousProduce: "प्रसिद्ध स्थानीय उत्पाद",
    deficiencyRisk: "क्षेत्रीय पोषण कमी का जोखिम",
    circadianChallenge: "मुख्य सर्कैडियन और जलवायु प्रभाव",
    clinicalTarget: "क्लिनिकल बायोमार्कर लक्ष्य",
    registerAppointment: "यहाँ अपॉइंटमेंट दर्ज करें:",
    registerButton: "अपॉइंटमेंट बुक करें",
    genomicMatch: "जीनोमिक मैच विश्लेषण",
    stapleAlternative: "वैकल्पिक अनाज प्रतिस्थापन",
    noIssues: "कोई समस्या दर्ज नहीं",
    baselineStaple: "आधारभूत मुख्य आहार",
    recommendedProgram: "अनुशंसित कार्यक्रम",
    synergyTitle: "स्थानीय मसाला और उपज पूरकता",
    synergyRecipe: "पूरक रेसिपी अनुशंसा"
  },
  ja: {
    hubType: "臨床アウトリーチハブ",
    centerType: "アウトリーチセンター",
    metabolicIssues: "主な代謝の健康課題",
    dietaryStaples: "地域の主食",
    circadianContext: "サーカディアンと環境情報",
    timezone: "タイムゾーン",
    dialingCode: "国番号",
    currency: "現地通貨",
    climate: "気候と天気",
    localProduce: "サーカディアン・ホールフード（地元野菜・果物）",
    localFruits: "地元の果物",
    localVegetables: "地元の野菜",
    famousProduce: "有名な特産品",
    deficiencyRisk: "地域的な栄養欠乏リスク",
    circadianChallenge: "サーカディアン体内時計の課題",
    clinicalTarget: "臨床標的バイオマーカー",
    registerAppointment: "ここで予約を登録する:",
    registerButton: "予約登録",
    genomicMatch: "ゲノム適合分析",
    stapleAlternative: "推奨される代替主食",
    noIssues: "報告された問題はありません",
    baselineStaple: "地域の基準主食",
    recommendedProgram: "推奨プログラム",
    synergyTitle: "地元のスパイスと農作物の相乗効果",
    synergyRecipe: "相乗効果レシピの推奨"
  },
  de: {
    hubType: "Klinisches Outreach-Zentrum",
    centerType: "Outreach-Zentrum",
    metabolicIssues: "Hauptsächliche metabolische Probleme",
    dietaryStaples: "Lokale Grundnahrungsmittel",
    circadianContext: "Zirkadianer & Umweltkontext",
    timezone: "Zeitzone",
    dialingCode: "Ländervorwahl",
    currency: "Lokale Währung",
    climate: "Klima & Wetter",
    localProduce: "Zirkadiane Vollwertkost (Lokale Produkte)",
    localFruits: "Lokales Obst",
    localVegetables: "Lokales Gemüse",
    famousProduce: "Bekannte lokale Produkte",
    deficiencyRisk: "Regionales Mangelrisiko",
    circadianChallenge: "Zirkadiane Herausforderung",
    clinicalTarget: "Klinischer Ziel-Biomarker",
    registerAppointment: "Termin registrieren in:",
    registerButton: "Termin buchen",
    genomicMatch: "Genomische Match-Analyse",
    stapleAlternative: "Alternative Grundnahrungsmittel",
    noIssues: "Keine Probleme gemeldet",
    baselineStaple: "Lokales Basis-Nahrungsmittel",
    recommendedProgram: "Empfohlenes Programm",
    synergyTitle: "Synergie aus lokalen Gewürzen & Produkten",
    synergyRecipe: "Synergetische Rezeptempfehlung"
  },
  es: {
    hubType: "Centro de Alcance Clínico",
    centerType: "Centro de Alcance",
    metabolicIssues: "Problemas Metabólicos Predominantes",
    dietaryStaples: "Alimentos Básicos Locales",
    circadianContext: "Contexto Circadiano y Ambiental",
    timezone: "Zona horaria",
    dialingCode: "Prefijo de marcado",
    currency: "Moneda local",
    climate: "Clima y tiempo",
    localProduce: "Alimentos Circadianos (Productos Locales)",
    localFruits: "Frutas locales",
    localVegetables: "Verduras locales",
    famousProduce: "Productos locales famosos",
    deficiencyRisk: "Riesgo de deficiencia regional",
    circadianChallenge: "Desafío circadiano y climático",
    clinicalTarget: "Biomarcador clínico objetivo",
    registerAppointment: "Registrar cita en:",
    registerButton: "Registrar cita",
    genomicMatch: "Análisis de coincidencia genómica",
    stapleAlternative: "Alternativa de grano recomendada",
    noIssues: "No se reportaron problemas",
    baselineStaple: "Alimento básico de referencia",
    recommendedProgram: "Programa recomendado",
    synergyTitle: "Sinergia de especias y cultivos locales",
    synergyRecipe: "Recomendación de receta sinérgica"
  },
  ar: {
    hubType: "مركز الدعم السريري المحلي",
    centerType: "مركز الدعم الخارجي",
    metabolicIssues: "المشاكل الأيضية الشائعة",
    dietaryStaples: "الأغذية الأساسية الإقليمية",
    circadianContext: "السياق اليومي والبيئي",
    timezone: "المنطقة الزمنية",
    dialingCode: "رمز الاتصال",
    currency: "العملة المحلية",
    climate: "المناخ والطقس",
    localProduce: "الأغذية الكاملة الإقليمية (المحاصيل المحلية)",
    localFruits: "الفواكه المحلية",
    localVegetables: "الخضروات المحلية",
    famousProduce: "المنتجات المحلية الشهيرة",
    deficiencyRisk: "مخاطر النقص الغذائي الإقليمي",
    circadianChallenge: "التحدي اليومي الحيوي والمناخي",
    clinicalTarget: "المؤشر الحيوي السريري المستهدف",
    registerAppointment: "حجز موعد في:",
    registerButton: "حجز موعد",
    genomicMatch: "تحليل المطابقة الجينية",
    stapleAlternative: "تبديل الحبوب الموصى بها",
    noIssues: "لم يتم الإبلاغ عن أي مشاكل",
    baselineStaple: "الغذاء الأساسي المرجعي",
    recommendedProgram: "البرنامج الموصى به",
    synergyTitle: "التآزر بين التوابل والمحاصيل المحلية",
    synergyRecipe: "توصية الوصفة التآزرية"
  }
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
  activeClinicProp?: any;
}

const solvePoW = async (challenge: string, difficulty: number = 3): Promise<number> => {
  const prefix = '0'.repeat(difficulty);
  let nonce = 0;
  while (true) {
    const data = new TextEncoder().encode(challenge + nonce);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    if (hashHex.startsWith(prefix)) {
      return nonce;
    }
    nonce++;
  }
};

export const LocalDirectory: React.FC<LocalDirectoryProps> = ({ navigate, currentPath, activeClinicProp }) => {
  const [locationsDataState, setLocationsDataState] = useState<LocationNode[]>([]);
  const [intlCountriesState, setIntlCountriesState] = useState<InternationalCountryNode[]>([]);

  useEffect(() => {
    if (!activeClinicProp) {
      import('../lib/locationsData').then(m => setLocationsDataState(m.LOCATIONS_DATA));
      import('../lib/internationalData').then(m => setIntlCountriesState(m.INTERNATIONAL_COUNTRIES));
    }
  }, [activeClinicProp]);

  const LOCATIONS_DATA = activeClinicProp && !('country' in activeClinicProp) ? [activeClinicProp] : locationsDataState;
  const INTERNATIONAL_COUNTRIES = activeClinicProp && 'country' in activeClinicProp ? [activeClinicProp] : intlCountriesState;

  const { trackInteraction } = useViewerTracker();
    const [selectedState, setSelectedState] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('India');

  React.useEffect(() => {
    const syncOfflineAppointments = async () => {
      if (!navigator.onLine) return;
      const offlineAppointments = safeJsonParse<any[]>(localStorage.getItem('offline_appointments'), []);
      if (offlineAppointments.length === 0) return;
      
      logger.info('LocalDirectory', `Syncing ${offlineAppointments.length} offline appointments...`);
      const existing = localStorage.getItem('nutrition_clinic_appointments');
      let appointments = [];
      if (existing) {
        appointments = safeJsonParse<any[]>(existing, []);
      }
      
      appointments = [...offlineAppointments, ...appointments];
      localStorage.setItem('nutrition_clinic_appointments', JSON.stringify(appointments));
      localStorage.setItem('offline_appointments', '[]');
      logger.info('LocalDirectory', 'All offline appointments synchronized successfully.');
    };

    window.addEventListener('online', syncOfflineAppointments);
    syncOfflineAppointments();
    
    return () => {
      window.removeEventListener('online', syncOfflineAppointments);
    };
  }, []);

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
  

  // Handle active clinic resolution from route path e.g. "clinic/punjab-amritsar" or "clinic/united-states/new-york-city"
  const activeClinic = activeClinicProp || useMemo(() => {
    if (!currentPath.startsWith('clinic/')) return null;
    const parts = currentPath.split('/');
    const countryId = parts[1];
    const citySlug = parts[2];
    
    // Check Indian clinics first
    const localClinic = LOCATIONS_DATA.find(loc => loc.id === countryId);
    if (localClinic) return { ...localClinic, country: 'India', type: 'Clinical Hub', zone: 'South Asia' };

    // Fallback: match by the plain city slug the /clinic/[id] Astro route actually generates
    // (getStaticPaths there slugifies just the city name — e.g. "clinic/mumbai" — not the
    // compound "state-city" `id` used above, so the lookup above misses every city page).
    const cityClinic = LOCATIONS_DATA.find(loc => loc.city.toLowerCase().replace(/\s+/g, '-') === countryId);
    if (cityClinic) return { ...cityClinic, country: 'India', type: 'Clinical Hub', zone: 'South Asia' };

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

    // Fallback for flat Astro dynamic routes: check international clinics by city name
    const intlCityClinic = INTERNATIONAL_COUNTRIES.find(loc => loc.city.toLowerCase().replace(/\s+/g, '-') === countryId);
    if (intlCityClinic) {
      return {
        ...intlCityClinic,
        state: intlCityClinic.country,
        type: 'Outreach Center'
      };
    }

    return null;
  }, [currentPath]);

  const activeLanguage = useMemo(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      const langParam = params.get('lang');
      if (langParam) return langParam.toLowerCase();
    } catch (e) { /* ignore URL query check failure */ }

    if (!activeClinic) return 'en';
    
    const isIndia = !('country' in activeClinic) || (activeClinic as any).country === 'India';
    if (isIndia) {
      const state = (activeClinic as any).state?.toLowerCase() || '';
      if (state.includes('maharashtra')) return 'mr';
      if (state.includes('tamil nadu')) return 'ta';
      if (state.includes('west bengal')) return 'bn';
      if (state.includes('karnataka')) return 'kn';
      if (state.includes('kerala')) return 'ml';
      if (state.includes('andhra pradesh') || state.includes('telangana')) return 'te';
      if (state.includes('gujarat')) return 'gu';
      if (state.includes('punjab')) return 'pa';
      if (state.includes('odisha') || state.includes('orissa')) return 'or';
      
      const hindiStates = ['delhi', 'uttar pradesh', 'bihar', 'madhya pradesh', 'rajasthan', 'haryana', 'himachal pradesh', 'jharkhand', 'chhattisgarh', 'uttarakhand'];
      if (hindiStates.some(hs => state.includes(hs))) return 'hi';
      return 'en';
    } else {
      const country = (activeClinic as any).country?.toLowerCase() || '';
      if (country.includes('japan')) return 'ja';
      if (country.includes('france')) return 'fr';
      if (country.includes('germany')) return 'de';
      if (country.includes('spain') || country.includes('mexico') || country.includes('colombia') || country.includes('argentina') || country.includes('chile') || country.includes('peru')) return 'es';
      if (country.includes('saudi arabia') || country.includes('united arab em') || country.includes('bahrain') || country.includes('oman') || country.includes('kuwait') || country.includes('qatar') || country.includes('egypt')) return 'ar';
      if (country.includes('china') || country.includes('hong kong') || country.includes('taiwan')) return 'zh';
      if (country.includes('korea')) return 'ko';
      if (country.includes('brazil') || country.includes('portugal')) return 'pt';
      if (country.includes('italy')) return 'it';
      return 'en';
    }
  }, [activeClinic]);

  const t = (key: string) => {
    const dict = TRANSLATIONS[activeLanguage] || TRANSLATIONS['en'];
    return dict[key] || TRANSLATIONS['en'][key] || key;
  };

  React.useEffect(() => {
    try {
      document.documentElement.lang = activeLanguage;
    } catch (e) { /* ignore document lang modification failure */ }
  }, [activeLanguage]);

  const activeDiet = useMemo(() => {
    if (!activeClinic) return DEFAULT_DIET;
    if ('country' in activeClinic && activeClinic.country !== 'India') {
      const zone = (activeClinic as any).zone;
      return INTERNATIONAL_DIETS[zone] || DEFAULT_DIET;
    }
    return REGIONAL_DIETS[activeClinic.state] || DEFAULT_DIET;
  }, [activeClinic]);

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
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-700 block font-bold">{t('metabolicIssues')}</span>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {(activeClinic as any).healthIssues?.map((issue: string, idx: number) => (
                        <span key={idx} className="px-2 py-1 bg-red-50 text-red-800 text-[10px] font-bold rounded-full border border-red-100">
                          ⚠️ {issue}
                        </span>
                      )) || <span className="text-stone-500 italic text-xs">{t('noIssues')}</span>}
                    </div>
                  </div>
                </div>

                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">{t('dietaryStaples')}</span>
                  <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                    {(activeClinic as any).commonStaples || 'Polished white rice, wheat bread, seed oils.'}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm pt-2">
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">{t('circadianContext')}</span>
                    <ul className="space-y-1.5 text-stone-700 font-semibold text-xs">
                      <li>🕒 {t('timezone')}: <span className="text-emerald-950 font-bold">{(activeClinic as any).timezone || 'N/A'}</span></li>
                      <li>📞 {t('dialingCode')}: <span className="text-emerald-950 font-bold">{(activeClinic as any).dialingCode || 'N/A'}</span></li>
                      <li>💵 {t('currency')}: <span className="text-emerald-950 font-bold">{(activeClinic as any).currency || 'N/A'}</span></li>
                      <li>⛅ {t('climate')}: <span className="text-emerald-950 font-bold block mt-0.5 leading-relaxed font-semibold">{(activeClinic as any).weather || 'N/A'}</span></li>
                    </ul>
                  </div>

                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">{t('localProduce')}</span>
                    <div className="space-y-2">
                      <div>
                        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider block mb-1">{t('localFruits')}</span>
                        <div className="flex flex-wrap gap-1">
                          {(activeClinic as any).localFruits?.map((fruit: string, idx: number) => (
                            <span key={idx} className="px-2 py-0.5 bg-emerald-50 text-emerald-800 text-[10px] font-bold rounded-full border border-emerald-100">
                              🍎 {fruit}
                            </span>
                          )) || <span className="text-stone-500 italic text-[10px]">No local fruits listed</span>}
                        </div>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-stone-500 uppercase tracking-wider block mb-1">{t('localVegetables')}</span>
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
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">{t('recommendedProgram')}</span>
                    <div className="space-y-2">
                      <div className="text-xs font-semibold text-stone-600">
                        {t('recommendedProgram')}:
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
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold mb-2">{t('synergyTitle')}</span>
                      <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                        Primary Therapeutic Spice: <span className="text-emerald-950 font-bold">{(activeClinic as any).localTherapeuticSpice || 'Turmeric'}</span>
                      </p>
                      <div className="bg-emerald-950/5 p-4 rounded-xl border border-emerald-900/10 mt-3">
                        <span className="text-[9px] font-black uppercase tracking-widest text-emerald-900 block font-bold mb-1">{t('synergyRecipe')}</span>
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
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-800 block font-bold">{t('clinicalTarget')}</span>
                    <p className="text-xs text-stone-700 font-bold leading-relaxed">
                      🧪 {(activeClinic as any).clinicalTargetBiomarker}
                    </p>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                      Under Dr. Shilpa Thakur's oversight, local patient onboarding includes auditing these baseline markers. Periodic checks verify cellular-level metabolic recovery and guide diet adjustments.
                    </p>
                  </div>

                  {/* Card 4: Dietary Staple & Swap */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block font-bold">{t('dietaryStaples')}</span>
                    <p className="text-xs text-stone-700 leading-relaxed font-semibold">
                      {t('baselineStaple')}: <span className="text-stone-500 font-medium">{(activeClinic as any).commonStaples}</span>
                    </p>
                    <div className="bg-lime-900/5 p-3 rounded-xl border border-lime-900/10 mt-1">
                      <span className="text-[9px] font-black uppercase tracking-widest text-lime-900 block font-bold mb-0.5">{t('stapleAlternative')}</span>
                      <p className="text-[11px] text-lime-950 font-bold leading-relaxed">
                        🔄 {(activeClinic as any).regionalStapleAlternative}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  {/* Card 5: Regional Nutritional Deficiency Risk */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-red-700 block font-bold">{t('deficiencyRisk')}</span>
                    <p className="text-xs text-stone-700 font-semibold leading-relaxed">
                      ⚠️ {(activeClinic as any).regionalDeficiencyRisk}
                    </p>
                    <p className="text-[11px] text-stone-500 leading-relaxed font-medium">
                      Geographic soils and typical food-prep methods in this zone increase the risk of this deficiency. We adjust our daily chrononutrition meal maps to compensate for this baseline gap.
                    </p>
                  </div>

                  {/* Card 6: Circadian Challenge & Climate Impact */}
                  <div className="bg-stone-50 p-6 rounded-2xl border border-stone-200/50 space-y-2">
                    <span className="text-[10px] font-black uppercase tracking-widest text-amber-800 block font-bold">{t('circadianChallenge')}</span>
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
                      {activeDiet.substitutions.map((sub: string, idx: number) => (
                        <li key={idx} className="flex gap-2 items-center text-stone-600 font-semibold">
                          <span className="text-emerald-500">✔</span> {sub}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-emerald-950 uppercase tracking-wider mb-3">Therapeutic Spices to Integrate</h4>
                    <div className="flex flex-wrap gap-2">
                      {activeDiet.spices.map((spice: string, idx: number) => (
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

              {/* Localized FAQ Section */}
              <div itemScope itemType="https://schema.org/FAQPage" className="bg-white rounded-[32px] border border-stone-100 p-8 shadow-sm space-y-6">
                <h3 className="text-xl font-bold text-emerald-950 brand-font">Outreach Center FAQs</h3>
                <div className="grid gap-2 pt-2">
                  {[
                    { question: `How can patients in ${activeClinic.city} consult with the central clinical team?`, answer: `Patients in ${activeClinic.city} receive fully virtual chrononutritional consulting, direct blood marker analysis, and remote health tracking from the main center.`, category: "Outreach" },
                    { question: `Are the diet plans calibrated to local food staples in ${activeClinic.city}?`, answer: `Yes, Dr. Shilpa calibrates the ingredient swap guidelines specifically to local culinary staples and regional microclimates of ${activeClinic.city}.`, category: "Dietary Swaps" },
                    { question: "How do I ship or share my lab test reports for the initial assessment?", answer: "You can securely upload your latest CBC, HbA1c, and lipid panels directly through our secure client portal or email them to our triage team.", category: "Onboarding" }
                  ].map((faq, idx) => (
                    <Accordion key={idx} title={faq.question} content={faq.answer} category={faq.category} />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Appointment Scheduler Form */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
              
              <BookingForm activeClinic={activeClinic} t={t} />

              <div className="card-standard space-y-4">
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

    return null;
};
