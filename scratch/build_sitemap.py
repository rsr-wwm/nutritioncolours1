import re
import json

# Helper to match JS slugify
def slugify(text):
    return text.lower().replace('&', 'and').replace(' ', '-').replace('/', '-').replace('(', '').replace(')', '').replace('.', '').replace("'", "").replace(',', '').strip('-')

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
            # strip quotes
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

# Locate "<!-- Programs -->", "<!-- Key Health Topics -->", "<!-- Recipes -->", "<!-- Blog Articles -->"
# We can just keep the core pages up to "<!-- International Clinic Outreach Hubs -->" or similar tags.
# Let's find "<!-- Indian Clinic Outreach Hubs -->" or "<!-- International Clinic Outreach Hubs -->"
# Actually, let's keep all lines in sitemap_orig up to the first comment starting with "<!-- Indian Clinic" or "<!-- International Clinic"
cutoff_index = len(sitemap_orig)
for comment in ["<!-- Indian Clinic", "<!-- International Clinic", "<!-- Outreach Locations", "<!-- Clinics"]:
    idx = sitemap_orig.find(comment)
    if idx != -1 and idx < cutoff_index:
        cutoff_index = idx

header_content = sitemap_orig[:cutoff_index].strip()

# Now build the new sitemap sections
new_sitemap = []
new_sitemap.append(header_content)

new_sitemap.append("\n  <!-- Indian Clinic Outreach Hubs (Remote Service zones) -->")
for node in local_nodes:
    id_val = node.get('id')
    if not id_val:
        continue
    loc = f"https://nutritioncolours.com/clinic/{id_val}"
    url_block = f"""  <url>
    <loc>{loc}</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>"""
    new_sitemap.append(url_block)

new_sitemap.append("\n  <!-- International Clinic Outreach Hubs (Remote Service zones) -->")
for node in intl_nodes:
    country_slug = node.get('id')
    city_slug = slugify(node.get('city', ''))
    if not country_slug or not city_slug:
        continue
    loc = f"https://nutritioncolours.com/clinic/{country_slug}/{city_slug}"
    url_block = f"""  <url>
    <loc>{loc}</loc>
    <lastmod>2026-06-05</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.6</priority>
  </url>"""
    new_sitemap.append(url_block)

new_sitemap.append("</urlset>")

updated_sitemap = "\n".join(new_sitemap) + "\n"

with open('/Users/apple/Downloads/nutritioncolours/public/sitemap.xml', 'w', encoding='utf-8') as f:
    f.write(updated_sitemap)

print("Successfully regenerated public/sitemap.xml with 100% of Indian & International outreach location nodes!")
