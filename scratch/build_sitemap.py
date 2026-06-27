import re
import json
import hashlib

# Deterministic hash helper to simulate Content Entropy shifts
def get_content_entropy_date(text_seed):
    h = hashlib.sha256(text_seed.encode('utf-8')).hexdigest()
    # Determine a modification day based on content hash (e.g., June 10 to June 24, 2026)
    day = 10 + (int(h[:8], 16) % 15)
    return f"2026-06-{day:02d}"

# Calculate crawl priority based on population density (crawling optimization)
def get_crawl_priority(node):
    try:
        pop = int(node.get('population', 0))
    except ValueError:
        pop = 0
        
    if pop > 500000:
        return "0.85"
    elif pop > 100000:
        return "0.75"
    else:
        return "0.55"

# Helper to match JS slugify
def slugify(text):
    text_lower = text.lower().replace('&', 'and')
    text_slug = re.sub(r'[^a-z0-9]+', '-', text_lower)
    return text_slug.strip('-')

# Parse TS file for objects
def parse_ts_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    blocks = []
    matches = re.finditer(r'\{([^}]+)\}', content)
    for m in matches:
        obj_str = m.group(1)
        obj = {}
        pairs = re.findall(r'"([^"]+)"\s*:\s*("[^"]*"|\d+|\[[^\]]*\]|\{[^\}]*\})', obj_str)
        for k, v in pairs:
            v_str = v.strip()
            if v_str.startswith('"') and v_str.endswith('"'):
                v_str = v_str[1:-1]
            obj[k] = v_str
        if obj:
            blocks.append(obj)
    return blocks

local_path = '/Users/apple/Downloads/nutritioncolours/components/locationsData.ts'
intl_path = '/Users/apple/Downloads/nutritioncolours/components/internationalData.ts'

local_nodes = parse_ts_file(local_path)
intl_nodes = parse_ts_file(intl_path)

print(f"Loaded {len(local_nodes)} local and {len(intl_nodes)} international nodes.")

# We will recreate public/sitemap.xml by reading the original and retaining the header + core pages, 
# then writing the dynamic clinic locations section.
with open('/Users/apple/Downloads/nutritioncolours/public/sitemap.xml', 'r', encoding='utf-8') as f:
    sitemap_orig = f.read()

# Locate the dynamic hubs insertion point
cutoff_index = len(sitemap_orig)
for comment in ["<!-- Indian Clinic", "<!-- International Clinic", "<!-- Outreach Locations", "<!-- Clinics"]:
    idx = sitemap_orig.find(comment)
    if idx != -1 and idx < cutoff_index:
        cutoff_index = idx

header_content = sitemap_orig[:cutoff_index].strip()

# Map paths to their target text fragment hashes for direct AEO indexing
fragments = {
    "topic/diabetes-reversal": "#:~:text=Reversing%20diabetes%20focuses%20on%20restoring",
    "topic/pcos-balance": "#:~:text=This%20protocol%20addresses%20the%20root",
    "topic/fatty-liver-reversal": "#:~:text=Fatty%20liver%20reversal%20revolves%20around",
    "topic/thyroid-optimization": "#:~:text=Supporting%20thyroid%20function%20requires",
    "topic/hypertension-management": "#:~:text=Reversing%20hypertension%20focuses%20on",
    "topic/gut-health-acidity": "#:~:text=Reversing%20gut%20acidity%20requires",
}

for path, frag in fragments.items():
    header_content = header_content.replace(
        f"https://nutritioncolours.com/{path}</loc>",
        f"https://nutritioncolours.com/{path}{frag}</loc>"
    )

# Now build the new sitemap sections
new_sitemap = []
new_sitemap.append(header_content)

new_sitemap.append("\n  <!-- Indian Clinic Outreach Hubs (Remote Service zones) -->")
for node in local_nodes:
    id_val = node.get('id')
    if not id_val:
        continue
    loc = f"https://nutritioncolours.com/clinic/{id_val}"
    
    # Calculate dynamic lastmod and priority
    entropy_seed = f"{node.get('city')}-{node.get('pincode')}-{node.get('commonStaples')}"
    lastmod = get_content_entropy_date(entropy_seed)
    priority = get_crawl_priority(node)
    
    url_block = f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>"""
    new_sitemap.append(url_block)

new_sitemap.append("\n  <!-- International Clinic Outreach Hubs (Remote Service zones) -->")
for node in intl_nodes:
    country_slug = node.get('id')
    city_slug = slugify(node.get('city', ''))
    if not country_slug or not city_slug:
        continue
    loc = f"https://nutritioncolours.com/clinic/{country_slug}/{city_slug}"
    
    entropy_seed = f"{node.get('city')}-{node.get('pincode')}-{node.get('commonStaples')}"
    lastmod = get_content_entropy_date(entropy_seed)
    priority = get_crawl_priority(node)
    
    url_block = f"""  <url>
    <loc>{loc}</loc>
    <lastmod>{lastmod}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>{priority}</priority>
  </url>"""
    new_sitemap.append(url_block)

new_sitemap.append("</urlset>")

updated_sitemap = "\n".join(new_sitemap) + "\n"

with open('/Users/apple/Downloads/nutritioncolours/public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(updated_sitemap)

print("Successfully regenerated public/sitemap.xml with dynamic content entropy priorities!")
