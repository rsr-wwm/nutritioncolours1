import React from 'react';

export const slugify = (text: string) => text.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

export const TRANSLATIONS: Record<string, Record<string, string>> = {
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

export const SYNONYM_DICTIONARY: Record<string, string[]> = {
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

export const tokenize = (text: string): string[] => {
  return text.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
};

export const highlightText = (text: string, searchTerms: string[]) => {
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
export const getDeterministicValue = (key: string, salt: string, min: number, max: number): number => {
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
export const getDeterministicLandmarks = (city: string, state: string): string[] => {
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
export interface CarrierInfo {
  name: string;
  strength: string;
  speed: string;
  coverage: string;
}

export const getCarrierQuality = (city: string, isIndia: boolean): CarrierInfo[] => {
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
export const getCoordinates = (city: string, state: string, country: string) => {
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
export const getCountryMeta = (country: string) => {
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

export const DEFAULT_DIET = {
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

export const solvePoW = async (challenge: string, difficulty: number = 3): Promise<number> => {
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