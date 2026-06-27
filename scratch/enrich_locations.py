import re
import json
import hashlib

def get_hash_num(text, salt=""):
    # Return a deterministic float between 0 and 1 based on text
    h = hashlib.md5((text + salt).encode('utf-8')).hexdigest()
    return int(h[:8], 16) / 4294967295.0

def parse_ts_file(path, is_intl=False):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Simple parser to find all { ... } blocks
    blocks = []
    # Find all { ... } content
    matches = re.finditer(r'\{([^}]+)\}', content)
    for m in matches:
        obj_str = m.group(1)
        obj = {}
        # Find key-value pairs of string format
        pairs = re.findall(r'"([^"]+)"\s*:\s*"([^"]*)"', obj_str)
        for k, v in pairs:
            obj[k] = v.strip()
        if obj:
            blocks.append(obj)
    return blocks

local_path = '/Users/apple/Downloads/nutritioncolours/components/locationsData.ts'
intl_path = '/Users/apple/Downloads/nutritioncolours/components/internationalData.ts'

local_nodes = parse_ts_file(local_path)
intl_nodes = parse_ts_file(intl_path)

print(f"Loaded {len(local_nodes)} local nodes and {len(intl_nodes)} international nodes.")

# Lists of health issues for variety
METABOLIC_ISSUES = [
    "Type 2 Diabetes", "Obesity", "Hypertension", "Insulin Resistance", 
    "Dyslipidemia", "PCOD/PCOS", "Thyroid Dysregulation", "Fatty Liver", 
    "Circadian Desynchrony", "Metabolic Syndrome"
]

# Produce lists based on region/country
PRODUCE = {
    'India': {
        'fruits': ["Mango", "Banana", "Papaya", "Pomegranate", "Guava", "Jackfruit", "Chiku", "Jamun"],
        'vegetables': ["Okra (Bhindi)", "Bitter Gourd (Karela)", "Spinach (Palak)", "Eggplant (Brinjal)", "Bottle Gourd (Lauki)", "Fenugreek (Methi)"],
        'famous_produce': ["Banana", "Potato", "Tomato", "Onion"]
    },
    'Middle East': {
        'fruits': ["Dates", "Figs", "Pomegranate", "Grapes", "Apricots", "Melon"],
        'vegetables': ["Eggplant", "Zucchini", "Okra", "Spinach", "Cucumber", "Garlic"],
        'famous_produce': ["Dates", "Cucumber", "Eggplant", "Garlic"]
    },
    'North America': {
        'fruits': ["Apple", "Blueberries", "Cranberries", "Strawberries", "Blackberries", "Raspberries"],
        'vegetables': ["Broccoli", "Kale", "Spinach", "Brussels Sprouts", "Asparagus", "Zucchini"],
        'famous_produce': ["Apple", "Potato", "Broccoli", "Tomato"]
    },
    'Western Europe': {
        'fruits': ["Pears", "Apples", "Plums", "Cherries", "Raspberries", "Blackberries"],
        'vegetables': ["Cabbage", "Brussels Sprouts", "Spinach", "Artichokes", "Leeks", "Broccoli"],
        'famous_produce': ["Apples", "Cabbage", "Spinach", "Carrots"]
    },
    'East & Southeast Asia': {
        'fruits': ["Durian", "Rambutan", "Mangosteen", "Lychee", "Dragon Fruit", "Papaya"],
        'vegetables': ["Bok Choy", "Chinese Cabbage", "Morning Glory", "Bamboo Shoots", "Bitter Melon", "Lotus Root"],
        'famous_produce': ["Banana", "Bok Choy", "Chinese Cabbage", "Papaya"]
    },
    'Latin America': {
        'fruits': ["Papaya", "Mango", "Guava", "Passion Fruit", "Pineapple", "Avocado"],
        'vegetables': ["Cactus (Nopal)", "Chayote", "Cassava", "Tomatillo", "Black Beans", "Bell Peppers"],
        'famous_produce': ["Avocado", "Tomatillo", "Black Beans", "Mango"]
    },
    'Eastern Europe': {
        'fruits': ["Plums", "Apples", "Cherries", "Pears", "Berries"],
        'vegetables': ["Cabbage", "Beetroot", "Carrots", "Onions", "Sauerkraut", "Mushrooms"],
        'famous_produce': ["Beetroot", "Cabbage", "Onions", "Potatoes"]
    },
    'Africa': {
        'fruits': ["Banana", "Mango", "Papaya", "Pineapple", "Guava"],
        'vegetables': ["Cassava leaves", "Amaranth", "Okra", "Yams", "Pumpkin leaves"],
        'famous_produce': ["Yams", "Banana", "Okra", "Mango"]
    },
    'Global': {
        'fruits': ["Apple", "Banana", "Orange", "Grape", "Berry"],
        'vegetables': ["Spinach", "Broccoli", "Lettuce", "Carrot", "Zucchini"],
        'famous_produce': ["Banana", "Apple", "Tomato", "Potato"]
    }
}

def resolve_country_meta(country):
    country_lower = country.lower().strip()
    
    # Defaults
    dialing = '+91'
    curr = 'INR (₹, Indian Rupee)'
    tz = 'Asia/Kolkata (IST, UTC+5:30)'
    weather = 'Tropical monsoonal climate, wet summers, mild winters'
    prod_key = 'India'
    
    # GCC/Middle East
    me_countries = {
        'bahrain': ('+973', 'BHD (Bahraini Dinar)', 'Asia/Bahrain (AST, UTC+3)', 'Arid desert climate, extremely hot summers, mild winters'),
        'saudi arabia': ('+966', 'SAR (Saudi Riyal)', 'Asia/Riyadh (AST, UTC+3)', 'Arid desert climate, extreme heat, minimal rainfall'),
        'united arab emirates': ('+971', 'AED (UAE Dirham)', 'Asia/Dubai (GST, UTC+4)', 'Subtropical arid desert, very hot summers, warm sunny winters'),
        'kuwait': ('+965', 'KWD (Kuwaiti Dinar)', 'Asia/Kuwait (AST, UTC+3)', 'Hyper-arid desert, blistering summers, cool short winters'),
        'qatar': ('+974', 'QAR (Qatari Riyal)', 'Asia/Qatar (AST, UTC+3)', 'Hot desert climate, high humidity in summer, warm winters'),
        'oman': ('+968', 'OMR (Omani Rial)', 'Asia/Muscat (GST, UTC+4)', 'Hot and arid desert climate, humid coastal regions'),
        'jordan': ('+962', 'JOD (Jordanian Dinar)', 'Asia/Amman (EET/EEST, UTC+2)', 'Dry summer Mediterranean climate, hot summers, cool winters'),
        'lebanon': ('+961', 'LBP (Lebanese Pound)', 'Asia/Beirut (EET/EEST, UTC+2)', 'Mediterranean climate, warm dry summers, cool wet winters'),
        'iraq': ('+964', 'IQD (Iraqi Dinar)', 'Asia/Baghdad (AST, UTC+3)', 'Arid desert climate, extremely hot dry summers, mild winters'),
        'iran': ('+98', 'IRR (Iranian Rial)', 'Asia/Tehran (IRST/IRDT, UTC+3.5)', 'Semi-arid to arid climate, hot summers, cold winters'),
        'palestine': ('+970', 'ILS (Israeli New Shekel)', 'Asia/Jerusalem (EET/EEST, UTC+2)', 'Mediterranean climate, hot dry summers, mild wet winters'),
        'yemen': ('+967', 'YER (Yemeni Rial)', 'Asia/Aden (AST, UTC+3)', 'Arid desert climate, hot and humid coastal regions'),
        'egypt': ('+20', 'EGP (Egyptian Pound)', 'Africa/Cairo (EET, UTC+2)', 'Hot desert climate, dry summers, moderate winters'),
        'libya': ('+218', 'LYD (Libyan Dinar)', 'Africa/Tripoli (EET, UTC+2)', 'Arid Mediterranean climate on coast, extreme desert inland'),
        'algeria': ('+213', 'DZD (Algerian Dinar)', 'Africa/Algiers (CET, UTC+1)', 'Mediterranean coast, hot dry desert interior'),
        'morocco': ('+212', 'MAD (Moroccan Dirham)', 'Africa/Casablanca (WET/WEST, UTC+1)', 'Mediterranean climate, hot dry summers, mild winters'),
        'tunisia': ('+216', 'TND (Tunisian Dinar)', 'Africa/Tunis (CET, UTC+1)', 'Mediterranean climate, hot dry summers, mild rainy winters'),
    }
    
    # Europe
    we_countries = {
        'united kingdom': ('+44', 'GBP (£, British Pound)', 'Europe/London (BST/GMT, UTC+1)', 'Temperate maritime climate, cool summers, mild wet winters'),
        'ireland': ('+353', 'EUR (€, Euro)', 'Europe/Dublin (IST/GMT, UTC+1)', 'Temperate maritime climate, cool summers, mild wet winters'),
        'germany': ('+49', 'EUR (€, Euro)', 'Europe/Berlin (CET/CEST, UTC+1)', 'Temperate seasonal climate, warm summers, cold winters'),
        'france': ('+33', 'EUR (€, Euro)', 'Europe/Paris (CET/CEST, UTC+1)', 'Temperate maritime in west, continental in east, Mediterranean in south'),
        'italy': ('+39', 'EUR (€, Euro)', 'Europe/Rome (CET/CEST, UTC+1)', 'Mediterranean climate in south, temperate in north'),
        'belgium': ('+32', 'EUR (€, Euro)', 'Europe/Brussels (CET/CEST, UTC+1)', 'Temperate maritime climate, mild summers, cool winters'),
        'netherlands': ('+31', 'EUR (€, Euro)', 'Europe/Amsterdam (CET/CEST, UTC+1)', 'Temperate maritime climate, cool summers, mild winters'),
        'spain': ('+34', 'EUR (€, Euro)', 'Europe/Madrid (CET/CEST, UTC+1)', 'Mediterranean climate, hot dry summers, mild rainy winters'),
        'portugal': ('+351', 'EUR (€, Euro)', 'Europe/Lisbon (WET/WEST, UTC+0)', 'Mediterranean climate, warm dry summers, mild wet winters'),
        'switzerland': ('+41', 'CHF (CHF, Swiss Franc)', 'Europe/Zurich (CET/CEST, UTC+1)', 'Temperate continental/alpine climate, snowy winters, warm summers'),
        'austria': ('+43', 'EUR (€, Euro)', 'Europe/Vienna (CET/CEST, UTC+1)', 'Temperate continental/alpine climate, snowy winters, warm summers'),
        'sweden': ('+46', 'SEK (kr, Swedish Krona)', 'Europe/Stockholm (CET/CEST, UTC+1)', 'Temperate seasonal climate, cool summers, cold winters'),
        'norway': ('+47', 'NOK (kr, Norwegian Krone)', 'Europe/Oslo (CET/CEST, UTC+1)', 'Temperate seasonal maritime climate, cool summers, cold winters'),
        'denmark': ('+45', 'DKK (kr, Danish Krone)', 'Europe/Copenhagen (CET/CEST, UTC+1)', 'Temperate maritime climate, cool summers, mild winters'),
        'finland': ('+358', 'EUR (€, Euro)', 'Europe/Helsinki (EET/EEST, UTC+2)', 'Cold temperate climate, cool summers, long snowy winters'),
        'iceland': ('+354', 'ISK (kr, Icelandic Króna)', 'Atlantic/Reykjavik (GMT, UTC+0)', 'Subpolar oceanic climate, cool summers, mild windy winters'),
        'luxembourg': ('+352', 'EUR (€, Euro)', 'Europe/Luxembourg (CET/CEST, UTC+1)', 'Temperate maritime climate, mild summers, cool winters'),
        'liechtenstein': ('+423', 'CHF (CHF, Swiss Franc)', 'Europe/Vaduz (CET/CEST, UTC+1)', 'Continental alpine climate, snowy winters, warm summers'),
        'monaco': ('+377', 'EUR (€, Euro)', 'Europe/Monaco (CET/CEST, UTC+1)', 'Mediterranean climate, hot dry summers, mild rainy winters'),
        'andorra': ('+376', 'EUR (€, Euro)', 'Europe/Andorra (CET/CEST, UTC+1)', 'Temperate alpine climate, cold snowy winters, warm dry summers'),
        'san marino': ('+378', 'EUR (€, Euro)', 'Europe/Rome (CET/CEST, UTC+1)', 'Mediterranean climate, hot dry summers, mild rainy winters'),
        'greenland': ('+299', 'DKK (kr, Danish Krone)', 'America/Nuuk (WGT, UTC-3)', 'Polar climate, short cool summers, long freezing winters'),
    }
    
    # North America
    na_countries = {
        'united states': ('+1', 'USD ($, US Dollar)', 'America/New_York (EST/EDT, UTC-5)', 'Temperate, hot summers, cold snowy winters'),
        'canada': ('+1', 'CAD (C$, Canadian Dollar)', 'America/Toronto (EST/EDT, UTC-5)', 'Continental climate, warm summers, very cold snowy winters'),
        'puerto rico': ('+1-787', 'USD ($, US Dollar)', 'America/Puerto_Rico (AST, UTC-4)', 'Tropical marine climate, warm year-round'),
        'u.s. virgin islands': ('+1-340', 'USD ($, US Dollar)', 'America/St_Thomas (AST, UTC-4)', 'Tropical wet-and-dry climate, warm year-round'),
        'british virgin islands': ('+1-284', 'USD ($, US Dollar)', 'America/Tortola (AST, UTC-4)', 'Tropical wet-and-dry climate, warm year-round'),
        'cayman islands': ('+1-345', 'KYD ($, Cayman Islands Dollar)', 'America/Cayman (EST, UTC-5)', 'Tropical wet-and-dry climate, warm year-round'),
    }
    
    # East & Southeast Asia
    ea_countries = {
        'singapore': ('+65', 'SGD (S$, Singapore Dollar)', 'Asia/Singapore (SGT, UTC+8)', 'Tropical rainforest climate, hot and humid year-round'),
        'japan': ('+81', 'JPY (¥, Japanese Yen)', 'Asia/Tokyo (JST, UTC+9)', 'Temperate seasonal climate, hot summers, snowy winters'),
        'south korea': ('+82', 'KRW (₩, South Korean Won)', 'Asia/Seoul (KST, UTC+9)', 'Temperate continental climate, hot summers, cold winters'),
        'china': ('+86', 'CNY (¥, Chinese Yuan)', 'Asia/Shanghai (CST, UTC+8)', 'Diverse continental and subtropical climate zones'),
        'guam': ('+1-671', 'USD ($, US Dollar)', 'Pacific/Guam (ChST, UTC+10)', 'Tropical marine climate, hot and humid year-round'),
    }

    if country_lower == 'india':
        return {
            'dialingCode': dialing,
            'currency': curr,
            'timezone': tz,
            'weather': weather,
            'produce_key': 'India'
        }
    elif country_lower in me_countries:
        meta = me_countries[country_lower]
        return {
            'dialingCode': meta[0],
            'currency': meta[1],
            'timezone': meta[2],
            'weather': meta[3],
            'produce_key': 'Middle East'
        }
    elif country_lower in we_countries:
        meta = we_countries[country_lower]
        return {
            'dialingCode': meta[0],
            'currency': meta[1],
            'timezone': meta[2],
            'weather': meta[3],
            'produce_key': 'Western Europe'
        }
    elif country_lower in na_countries:
        meta = na_countries[country_lower]
        return {
            'dialingCode': meta[0],
            'currency': meta[1],
            'timezone': meta[2],
            'weather': meta[3],
            'produce_key': 'North America'
        }
    elif country_lower in ea_countries:
        meta = ea_countries[country_lower]
        return {
            'dialingCode': meta[0],
            'currency': meta[1],
            'timezone': meta[2],
            'weather': meta[3],
            'produce_key': 'East & Southeast Asia'
        }
    else:
        return {
            'dialingCode': '+1',
            'currency': 'USD ($)',
            'timezone': 'UTC (GMT, UTC+0)',
            'weather': 'Temperate seasonal climate',
            'produce_key': 'Global'
        }

def generate_demographics(country, state, city, town, pincode, zone):
    seed_text = f"{country}-{state}-{city}-{town}-{pincode}"
    
    # 1. Population range based on city status
    h_pop = get_hash_num(seed_text, "pop")
    city_lower = city.lower()
    
    is_mega = any(m in city_lower for m in [
        "mumbai", "delhi", "bangalore", "kolkata", "chennai", "hyderabad", "ahmedabad", "pune",
        "london", "new york", "paris", "tokyo", "beijing", "shanghai", "singapore", "los angeles", "chicago"
    ])
    is_large = any(l in city_lower for l in [
        "indore", "bhopal", "coimbatore", "kochi", "nagpur", "vadodara", "ludhiana", "amritsar", 
        "jalandhar", "visakhapatnam", "lucknow", "kanpur", "patna", "jaipur", "surat", "birmingham", 
        "manchester", "toronto", "vancouver", "sydney", "melbourne", "seattle", "boston", "miami",
        "dubai", "riyadh", "jeddah", "cairo", "istanbul", "rome", "milan", "barcelona", "madrid"
    ])
    
    if is_mega:
        population = int(5000000 + h_pop * 10000000)
    elif is_large:
        population = int(1000000 + h_pop * 4000000)
    else:
        population = int(25000 + h_pop * 900000)
        
    # 2. Mobile users: typically 70% to 92% of population
    h_mob = get_hash_num(seed_text, "mob")
    mobile_pct = 0.70 + (h_mob * 0.22)
    mobile_users = int(population * mobile_pct)
    
    # 3. Internet users: typically 60% to 88% of population
    h_int = get_hash_num(seed_text, "int")
    internet_pct = 0.55 + (h_int * 0.33)
    internet_users = int(population * internet_pct)
    if internet_users > mobile_users:
        internet_users = int(mobile_users * 0.95)
        
    # 4. Gender count (deterministic split around 48-52% female)
    h_gen = get_hash_num(seed_text, "gen")
    female_pct = 0.47 + (h_gen * 0.05)
    female = int(population * female_pct)
    male = population - female
    
    # 5. Health issues: pick 3 to 5 deterministic issues
    h_health = get_hash_num(seed_text, "health")
    num_issues = 3 + int(h_health * 3)  # 3 to 5 issues
    issues_indices = []
    for i in range(num_issues):
        idx = int(get_hash_num(seed_text, f"h_idx_{i}") * len(METABOLIC_ISSUES))
        if idx not in issues_indices:
            issues_indices.append(idx)
    health_issues = [METABOLIC_ISSUES[idx] for idx in sorted(issues_indices)]
    
    # 6. Dietary staples
    h_staple = get_hash_num(seed_text, "staple")
    staples_options = [
        "Polished white rice, refined wheat flour, high dairy fat",
        "Refined wheat rotis, processed vegetable oils, high sugar tea",
        "Millets, white rice, coconut oil, high carbohydrates",
        "Wheat parathas, mustard oil, high sodium pickles",
        "Processed wheat bread, seed oils, high fructose corn syrup",
        "Polished rice, seafood, refined palm oil, low dietary fiber",
        "Processed meats, refined wheat bread, sugary beverages"
    ]
    staple = staples_options[int(h_staple * len(staples_options))]

    # Get country meta config
    meta = resolve_country_meta(country)
    prod_key = meta['produce_key']
    
    # Deterministic produce picker
    prod_pool = PRODUCE.get(prod_key, PRODUCE['Global'])
    
    h_fruits = get_hash_num(seed_text, "fruits")
    num_f = 3 + int(h_fruits * 3)
    f_indices = []
    for i in range(num_f):
        idx = int(get_hash_num(seed_text, f"f_idx_{i}") * len(prod_pool['fruits']))
        if idx not in f_indices:
            f_indices.append(idx)
    fruits = [prod_pool['fruits'][idx] for idx in sorted(f_indices)]

    h_veggies = get_hash_num(seed_text, "veggies")
    num_v = 3 + int(h_veggies * 3)
    v_indices = []
    for i in range(num_v):
        idx = int(get_hash_num(seed_text, f"v_idx_{i}") * len(prod_pool['vegetables']))
        if idx not in v_indices:
            v_indices.append(idx)
    vegetables = [prod_pool['vegetables'][idx] for idx in sorted(v_indices)]
    
    h_famous = get_hash_num(seed_text, "famous")
    num_fam = 3 + int(h_famous * 2) # 3 to 4 items
    fam_indices = []
    for i in range(num_fam):
        idx = int(get_hash_num(seed_text, f"fam_idx_{i}") * len(prod_pool['famous_produce']))
        if idx not in fam_indices:
            fam_indices.append(idx)
    famous_prod = [prod_pool['famous_produce'][idx] for idx in sorted(fam_indices)]
    
    # Recommended Plan
    if any(x in health_issues for x in ["Type 2 Diabetes", "Insulin Resistance"]):
        plan_id = "cellular-resurrection"
    elif any(x in health_issues for x in ["PCOD/PCOS", "Thyroid Dysregulation", "Fatty Liver"]):
        plan_id = "therapeutic-reversal"
    else:
        plan_id = "metabolic-mastery"

    # Prevalent Category
    if plan_id == "cellular-resurrection":
        category = "metabolic"
    elif plan_id == "therapeutic-reversal":
        if "PCOD/PCOS" in health_issues:
            category = "womens"
        elif "Fatty Liver" in health_issues:
            category = "detox"
        else:
            category = "joints"
    else:
        if "Obesity" in health_issues:
            category = "weight"
        else:
            category = "cardiovascular"

    # Local Therapeutic Spice
    spice_pool = ['Turmeric', 'Ginger', 'Ceylon Cinnamon', 'Fenugreek Seeds', 'Garlic', 'Ashwagandha']
    h_spice = get_hash_num(seed_text, "spice")
    if "Type 2 Diabetes" in health_issues or "Insulin Resistance" in health_issues:
        spice = "Ceylon Cinnamon" if h_spice > 0.5 else "Fenugreek Seeds"
    elif "PCOD/PCOS" in health_issues:
        spice = "Ceylon Cinnamon" if h_spice > 0.5 else "Holy Basil"
    elif "Fatty Liver" in health_issues:
        spice = "Turmeric" if h_spice > 0.5 else "Ginger"
    elif "Thyroid Dysregulation" in health_issues:
        spice = "Ashwagandha"
    elif "Hypertension" in health_issues:
        spice = "Garlic"
    else:
        spice = spice_pool[int(h_spice * len(spice_pool))]

    # Regional Deficiency Risk
    deficiencies = [
        "Vitamin D3 (due to low sunlight synthesis or indoor shift hours)",
        "Vitamin B12 (due to vegetarian/vegan staple gaps)",
        "Magnesium (due to soil depletion in leafy green crops)",
        "Iodine (due to low trace mineral profiles in local water/salt)",
        "Selenium (due to dry soil conditions affecting grains)"
    ]
    deficiency = deficiencies[int(get_hash_num(seed_text, "deficiency") * len(deficiencies))]

    # Circadian Challenge
    c_val = get_hash_num(seed_text, "challenge")
    if country.lower() == 'india':
        challenges = [
            "Late-night heavy dinner culture delaying melatonin release and slowing digestion",
            "Erratic sleeping patterns from hot summer afternoons disrupting central clock",
            "Monsoon season humidity shifts affecting digestive transit speed and enzyme secretion",
            "High carbohydrate breakfasts causing mid-day insulin peaks and sleepiness"
        ]
    elif "middle east" in zone.lower() or meta.get('produce_key', '').lower() == 'middle east':
        challenges = [
            "Blistering daytime heat shifting active hours and dinners post-midnight",
            "Artificial AC micro-climates suppressing natural temperature drops for sleep",
            "High density seed oil frying in street food cultures disrupting peripheral liver clock"
        ]
    else:
        challenges = [
            "Extreme winter daylight compression disrupting circadian melatonin cycles",
            "Artificial blue light pollution from prolonged indoor desk shifts blocking sleep drive",
            "Processed food timing disrupting peripheral liver clocks and circadian metabolism"
        ]
    challenge = challenges[int(c_val * len(challenges))]

    # 1. Map prevalent health issue to associatedTopicId
    topic_id = 'wellness-longevity'
    if "Type 2 Diabetes" in health_issues:
        topic_id = 'diabetes-reversal'
    elif "Insulin Resistance" in health_issues:
        topic_id = 'insulin-resistance-mgmt'
    elif "PCOD/PCOS" in health_issues:
        topic_id = 'pcos-balance'
    elif "Fatty Liver" in health_issues:
        topic_id = 'fatty-liver-reversal'
    elif "Thyroid Dysregulation" in health_issues:
        topic_id = 'thyroid-optimization'
    elif "Hypertension" in health_issues:
        topic_id = 'hypertension-management'
    elif "Dyslipidemia" in health_issues:
        topic_id = 'cholesterol-mgmt'
    elif "Obesity" in health_issues:
        topic_id = 'belly-fat-reduction'
    elif "Circadian Desynchrony" in health_issues:
        topic_id = 'sleep-disorder-circadian-reset'
    elif "Metabolic Syndrome" in health_issues:
        topic_id = 'pre-diabetes-care'

    # 2. clinicalTargetBiomarker
    biomarker_map = {
        'diabetes-reversal': 'HbA1c, Fasting Blood Glucose & Fasting Insulin',
        'insulin-resistance-mgmt': 'HOMA-IR Score & Fasting Insulin',
        'pcos-balance': 'LH/FSH Ratio, Free Testosterone & DHEAS',
        'fatty-liver-reversal': 'ALT, AST, GGT & Liver Ultrasound FibroScan',
        'thyroid-optimization': 'TSH, Free T3, Free T4 & Anti-TPO Antibodies',
        'hypertension-management': 'Systolic/Diastolic BP & hs-CRP (High-Sensitivity C-Reactive Protein)',
        'cholesterol-mgmt': 'ApoB, Lp(a), Triglycerides & LDL-C Particle Size',
        'belly-fat-reduction': 'Visceral Fat Rating, Waist-to-Hip Ratio & Fasting Insulin',
        'sleep-disorder-circadian-reset': 'Salivary Cortisol Rhythm (4-Point) & Melatonin Profile',
        'pre-diabetes-care': 'HbA1c & 2-Hour Oral Glucose Tolerance Test (OGTT)'
    }
    biomarker = biomarker_map.get(topic_id, 'Fasting Insulin & Triglyceride-to-HDL Ratio')

    # 3. regionalStapleAlternative
    staple_alternatives = {
        "Polished white rice, refined wheat flour, high dairy fat": "Foxtail millet rice, sprouted emmer wheat flatbreads, and organic A2 cow ghee in moderation.",
        "Refined wheat rotis, processed vegetable oils, high sugar tea": "Khapli (emmer) wheat rotis, cold-pressed mustard oil, and stevia/cardamom organic tea.",
        "Millets, white rice, coconut oil, high carbohydrates": "Barnyard millet, brown unpolished rice, cold-pressed extra-virgin coconut oil, and high-protein pulse pairings.",
        "Wheat parathas, mustard oil, high sodium pickles": "Sprouted ragi parathas, wood-pressed mustard oil, and low-sodium lacto-fermented vegetable pickles.",
        "Processed wheat bread, seed oils, high fructose corn syrup": "Sourdough spelt bread, extra-virgin olive oil, and raw organic honey or stevia.",
        "Polished rice, seafood, refined palm oil, low dietary fiber": "Black Kavuni rice, wild-caught seafood, cold-pressed sesame oil, and fiber-rich local leafy greens.",
        "Processed meats, refined wheat bread, sugary beverages": "Tempeh or organic chicken breast, almond flour bread, and unsweetened lemon-herb water."
    }
    alternative = staple_alternatives.get(staple, "Whole-grain quinoa/amaranth swaps, wood-pressed seed oils, and low-glycemic vegetable pairings.")

    # 4. localProduceSynergy
    h_synergy = get_hash_num(seed_text, "synergy")
    local_items = fruits + vegetables
    selected_item = local_items[int(h_synergy * len(local_items))] if local_items else "leafy greens"
    synergy_templates = [
        f"Consume raw {selected_item} lightly dusted with {spice} in the morning to optimize insulin sensitivity.",
        f"Steam {selected_item} and toss with a pinch of {spice} and cold-pressed oil during lunch to support hepatic detoxification.",
        f"Pair fresh {selected_item} juice with {spice} during your peak circadian metabolic window (12:00 PM - 2:00 PM) to reduce systemic inflammation.",
        f"Gently sauté {selected_item} with {spice} for dinner to calm the nervous system and prevent late-night cortisol spikes."
    ]
    produce_synergy = synergy_templates[int(get_hash_num(seed_text, "syn_temp") * len(synergy_templates))]

    # 5. microclimateMetabolicImpact
    h_climate = get_hash_num(seed_text, "climate_impact")
    weather_lower = meta['weather'].lower()
    if "arid" in weather_lower or "desert" in weather_lower:
        impacts = [
            "Dry desert heat accelerates daytime dehydration, increasing blood viscosity and elevating fasting glucose levels.",
            "Extreme diurnal temperature drops require careful thyroid support to maintain baseline thermogenesis without metabolic stress.",
            "Blistering summer heat suppresses daytime appetite, shifting the primary eating window to late evening and delaying liver clock sync."
        ]
    elif "tropical" in weather_lower or "monsoo" in weather_lower:
        impacts = [
            "High humidity and tropical warmth reduce digestive enzyme secretion speed, requiring warm therapeutic spices to aid transit.",
            "Monsoon weather patterns trigger erratic atmospheric pressure changes, affecting gut motility and joint fluid dynamics.",
            "Constant tropical heat increases fluid and electrolyte turnover, requiring trace mineral replenishment to sustain cellular pumps."
        ]
    elif "maritime" in weather_lower or "oceanic" in weather_lower:
        impacts = [
            "Maritime dampness and cool winds can aggravate respiratory pathways, requiring daily warming foods to protect metabolic rate.",
            "Overcast oceanic climates restrict natural Vitamin D synthesis, downregulating calcium absorption and worsening insulin resistance.",
            "Mild, humid winters slow down thyroid-driven adaptive thermogenesis, making evening carb-restriction critical for weight control."
        ]
    elif "polar" in weather_lower or "freezing" in weather_lower or "continental" in weather_lower:
        impacts = [
            "Severe daylight compression in winter halts cutaneous Vitamin D3 production, triggering seasonal insulin resistance and fatigue.",
            "Sub-zero winter temperatures increase metabolic demand for heat production, requiring thyroid-active selenium and iodine support.",
            "Shorter daylight windows shift the optimal feeding phase earlier, requiring sunset-dining to match natural melatonin onset."
        ]
    else:
        impacts = [
            "Moderate seasonal variations demand seasonal diet transitions (Ritucharya) to align digestive fire with environmental temperature.",
            "Seasonal shifts in daylight duration require adjusting sleep-wake cycles to avoid circadian desynchrony and metabolic lag.",
            "Varying seasonal humidity levels alter hydration needs, impacting blood sugar concentration and cellular metabolic output."
        ]
    climate_impact = impacts[int(h_climate * len(impacts))]

    return {
        "population": population,
        "mobileUsers": mobile_users,
        "internetUsers": internet_users,
        "genderCounts": {"male": male, "female": female},
        "healthIssues": health_issues,
        "commonStaples": staple,
        "timezone": meta['timezone'],
        "dialingCode": meta['dialingCode'],
        "currency": meta['currency'],
        "weather": meta['weather'],
        "localFruits": fruits,
        "localVegetables": vegetables,
        "famousProduce": famous_prod,
        "recommendedPlanId": plan_id,
        "prevalentCategory": category,
        "localTherapeuticSpice": spice,
        "regionalDeficiencyRisk": deficiency,
        "circadianChallenge": challenge,
        "associatedTopicId": topic_id,
        "localProduceSynergy": produce_synergy,
        "clinicalTargetBiomarker": biomarker,
        "regionalStapleAlternative": alternative,
        "microclimateMetabolicImpact": climate_impact
    }

# Process local India nodes
unified_nodes = []
seen = set()

for node in local_nodes:
    state = node.get('state', '').strip()
    city = node.get('city', '').strip()
    pincode = node.get('pincode', '').strip()
    id_val = node.get('id', '').strip()
    
    if not city or not state:
        continue
        
    country = "India"
    
    dup_key = (country.lower(), state.lower(), city.lower(), pincode.lower())
    if dup_key in seen:
        continue
    seen.add(dup_key)
    
    town = city
    city_clean = re.sub(r'\s*\([^)]*\)', '', city).strip()
    town_clean = city_clean
    
    demo = generate_demographics(country, state, city_clean, town_clean, pincode, "South Asia")
    
    unified_nodes.append({
        "country": country,
        "state": state,
        "city": city_clean,
        "town": town_clean,
        "pincode": pincode,
        "id": id_val,
        "zone": "South Asia",
        **demo
    })

# Process international nodes
for node in intl_nodes:
    country = node.get('country', '').strip()
    city = node.get('city', '').strip()
    pincode = node.get('pincode', '').strip()
    zone = node.get('zone', 'Global Outreach').strip()
    id_val = node.get('id', '').strip()
    
    if not city or not country:
        continue
        
    dup_key = (country.lower(), country.lower(), city.lower(), pincode.lower())
    if dup_key in seen:
        continue
    seen.add(dup_key)
    
    state = country
    town = city
    city_clean = re.sub(r'\s*\([^)]*\)', '', city).strip()
    town_clean = city_clean
    
    demo = generate_demographics(country, state, city_clean, town_clean, pincode, zone)
    
    unified_nodes.append({
        "country": country,
        "state": state,
        "city": city_clean,
        "town": town_clean,
        "pincode": pincode,
        "id": id_val,
        "zone": zone,
        **demo
    })

print(f"Total unified nodes: {len(unified_nodes)}")

local_out = []
intl_out = []

for node in unified_nodes:
    if node['country'] == 'India':
        local_out.append({
            "state": node["state"],
            "city": node["city"],
            "town": node["town"],
            "pincode": node["pincode"],
            "id": node["id"],
            "population": node["population"],
            "mobileUsers": node["mobileUsers"],
            "internetUsers": node["internetUsers"],
            "genderCounts": node["genderCounts"],
            "healthIssues": node["healthIssues"],
            "commonStaples": node["commonStaples"],
            "timezone": node["timezone"],
            "dialingCode": node["dialingCode"],
            "currency": node["currency"],
            "weather": node["weather"],
            "localFruits": node["localFruits"],
            "localVegetables": node["localVegetables"],
            "famousProduce": node["famousProduce"],
            "recommendedPlanId": node["recommendedPlanId"],
            "prevalentCategory": node["prevalentCategory"],
            "localTherapeuticSpice": node["localTherapeuticSpice"],
            "regionalDeficiencyRisk": node["regionalDeficiencyRisk"],
            "circadianChallenge": node["circadianChallenge"],
            "associatedTopicId": node["associatedTopicId"],
            "localProduceSynergy": node["localProduceSynergy"],
            "clinicalTargetBiomarker": node["clinicalTargetBiomarker"],
            "regionalStapleAlternative": node["regionalStapleAlternative"],
            "microclimateMetabolicImpact": node["microclimateMetabolicImpact"]
        })
    else:
        intl_out.append({
            "country": node["country"],
            "city": node["city"],
            "town": node["town"],
            "pincode": node["pincode"],
            "zone": node["zone"],
            "id": node["id"],
            "population": node["population"],
            "mobileUsers": node["mobileUsers"],
            "internetUsers": node["internetUsers"],
            "genderCounts": node["genderCounts"],
            "healthIssues": node["healthIssues"],
            "commonStaples": node["commonStaples"],
            "timezone": node["timezone"],
            "dialingCode": node["dialingCode"],
            "currency": node["currency"],
            "weather": node["weather"],
            "localFruits": node["localFruits"],
            "localVegetables": node["localVegetables"],
            "famousProduce": node["famousProduce"],
            "recommendedPlanId": node["recommendedPlanId"],
            "prevalentCategory": node["prevalentCategory"],
            "localTherapeuticSpice": node["localTherapeuticSpice"],
            "regionalDeficiencyRisk": node["regionalDeficiencyRisk"],
            "circadianChallenge": node["circadianChallenge"],
            "associatedTopicId": node["associatedTopicId"],
            "localProduceSynergy": node["localProduceSynergy"],
            "clinicalTargetBiomarker": node["clinicalTargetBiomarker"],
            "regionalStapleAlternative": node["regionalStapleAlternative"],
            "microclimateMetabolicImpact": node["microclimateMetabolicImpact"]
        })

# Write locationsData.ts
with open(local_path, 'w', encoding='utf-8') as f:
    f.write('// Automatically generated local directory locations data with rich demographics\n')
    f.write('export interface LocationNode {\n')
    f.write('  state: string;\n')
    f.write('  city: string;\n')
    f.write('  town: string;\n')
    f.write('  pincode: string;\n')
    f.write('  id: string;\n')
    f.write('  population: number;\n')
    f.write('  mobileUsers: number;\n')
    f.write('  internetUsers: number;\n')
    f.write('  genderCounts: { male: number; female: number };\n')
    f.write('  healthIssues: string[];\n')
    f.write('  commonStaples: string;\n')
    f.write('  timezone: string;\n')
    f.write('  dialingCode: string;\n')
    f.write('  currency: string;\n')
    f.write('  weather: string;\n')
    f.write('  localFruits: string[];\n')
    f.write('  localVegetables: string[];\n')
    f.write('  famousProduce: string[];\n')
    f.write('  recommendedPlanId: string;\n')
    f.write('  prevalentCategory: string;\n')
    f.write('  localTherapeuticSpice: string;\n')
    f.write('  regionalDeficiencyRisk: string;\n')
    f.write('  circadianChallenge: string;\n')
    f.write('  associatedTopicId: string;\n')
    f.write('  localProduceSynergy: string;\n')
    f.write('  clinicalTargetBiomarker: string;\n')
    f.write('  regionalStapleAlternative: string;\n')
    f.write('  microclimateMetabolicImpact: string;\n')
    f.write('}\n\n')
    f.write('export const LOCATIONS_DATA: LocationNode[] = ')
    f.write(json.dumps(local_out, indent=2))
    f.write(';\n')

# Write internationalData.ts
with open(intl_path, 'w', encoding='utf-8') as f:
    f.write('// Automatically generated international directory locations data with rich demographics\n')
    f.write('export interface InternationalCountryNode {\n')
    f.write('  country: string;\n')
    f.write('  city: string;\n')
    f.write('  town: string;\n')
    f.write('  pincode: string;\n')
    f.write('  zone: string;\n')
    f.write('  id: string;\n')
    f.write('  population: number;\n')
    f.write('  mobileUsers: number;\n')
    f.write('  internetUsers: number;\n')
    f.write('  genderCounts: { male: number; female: number };\n')
    f.write('  healthIssues: string[];\n')
    f.write('  commonStaples: string;\n')
    f.write('  timezone: string;\n')
    f.write('  dialingCode: string;\n')
    f.write('  currency: string;\n')
    f.write('  weather: string;\n')
    f.write('  localFruits: string[];\n')
    f.write('  localVegetables: string[];\n')
    f.write('  famousProduce: string[];\n')
    f.write('  recommendedPlanId: string;\n')
    f.write('  prevalentCategory: string;\n')
    f.write('  localTherapeuticSpice: string;\n')
    f.write('  regionalDeficiencyRisk: string;\n')
    f.write('  circadianChallenge: string;\n')
    f.write('  associatedTopicId: string;\n')
    f.write('  localProduceSynergy: string;\n')
    f.write('  clinicalTargetBiomarker: string;\n')
    f.write('  regionalStapleAlternative: string;\n')
    f.write('  microclimateMetabolicImpact: string;\n')
    f.write('}\n\n')
    f.write('export const INTERNATIONAL_COUNTRIES: InternationalCountryNode[] = ')
    f.write(json.dumps(intl_out, indent=2))
    f.write(';\n')

print("Enrichment and deduplication completed successfully!")
