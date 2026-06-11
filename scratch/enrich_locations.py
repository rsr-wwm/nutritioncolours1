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

# Let's map some Indian towns to their primary city/district if applicable.
# If a town is small, we can keep its city as the district and town as the town.
# For India, state is already given. Let's set country to "India" for all local nodes.
# Let's clean and merge duplication.
# We will deduplicate by (country, state, city, town, pincode) case-insensitive.

unified_nodes = []
seen = set()

# Lists of health issues for variety
METABOLIC_ISSUES = [
    "Type 2 Diabetes", "Obesity", "Hypertension", "Insulin Resistance", 
    "Dyslipidemia", "PCOD/PCOS", "Thyroid Dysregulation", "Fatty Liver", 
    "Circadian Desynchrony", "Metabolic Syndrome"
]

def generate_demographics(country, state, city, town, pincode):
    # Deterministic generation based on city/town name
    seed_text = f"{country}-{state}-{city}-{town}-{pincode}"
    
    # 1. Population range based on city status
    h_pop = get_hash_num(seed_text, "pop")
    city_lower = city.lower()
    
    # Identify tier 1/2 cities
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
    
    return {
        "population": population,
        "mobileUsers": mobile_users,
        "internetUsers": internet_users,
        "genderCounts": {"male": male, "female": female},
        "healthIssues": health_issues,
        "commonStaples": staple
    }

# Process local India nodes
for node in local_nodes:
    state = node.get('state', '').strip()
    city = node.get('city', '').strip()
    pincode = node.get('pincode', '').strip()
    id_val = node.get('id', '').strip()
    
    if not city or not state:
        continue
        
    # Standardize names
    country = "India"
    
    # Deduplicate key
    dup_key = (country.lower(), state.lower(), city.lower(), pincode.lower())
    if dup_key in seen:
        continue
    seen.add(dup_key)
    
    # Let's check if the city represents a town under a main city or district.
    # In locationsData, city names are often town-like. Let's make "town" the city name,
    # and "city" the primary district. If they are the same, city is the city.
    # For simplicity, we can set town = city, and if we can group them under larger districts,
    # we can do that or keep them as State -> City -> Town.
    # Let's say: if the pincode corresponds to a sub-district, we can designate it.
    # We can default town to city, and state to state.
    town = city
    # Let's clean up town/city name
    city_clean = re.sub(r'\s*\([^)]*\)', '', city).strip()
    town_clean = city_clean
    
    demo = generate_demographics(country, state, city_clean, town_clean, pincode)
    
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
        
    # Deduplicate key
    dup_key = (country.lower(), country.lower(), city.lower(), pincode.lower())
    if dup_key in seen:
        continue
    seen.add(dup_key)
    
    # For international, we can set state to country or zone, and city to city, town to city.
    state = country
    town = city
    city_clean = re.sub(r'\s*\([^)]*\)', '', city).strip()
    town_clean = city_clean
    
    demo = generate_demographics(country, state, city_clean, town_clean, pincode)
    
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

# Let's split them back into the two arrays to preserve backward compatibility, 
# but writing them with the new fields!
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
            "commonStaples": node["commonStaples"]
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
            "commonStaples": node["commonStaples"]
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
    f.write('}\n\n')
    f.write('export const INTERNATIONAL_COUNTRIES: InternationalCountryNode[] = ')
    f.write(json.dumps(intl_out, indent=2))
    f.write(';\n')

print("Enrichment and deduplication completed successfully!")
