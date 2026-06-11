import re
import json

# Read locationsData.ts
with open('/Users/apple/Downloads/nutritioncolours/components/locationsData.ts', 'r') as f:
    content = f.read()

# Extract the LOCATIONS_DATA array
# Find index of export const LOCATIONS_DATA
start_idx = content.find('export const LOCATIONS_DATA')
arr_start = content.find('[', start_idx)

# Simple custom JSON array parser since it might have trailing commas or non-strict format
# But since it was generated, let's parse it using a regex or js-like parser.
# Let's extract the text inside [ ]
# We can find matching brackets.
bracket_count = 0
arr_end = -1
for i in range(arr_start, len(content)):
    if content[i] == '[':
        bracket_count += 1
    elif content[i] == ']':
        bracket_count -= 1
        if bracket_count == 0:
            arr_end = i
            break

json_text = content[arr_start:arr_end+1]

# Convert it to valid JSON by cleaning up single quotes, trailing commas, etc.
# Actually, let's just use demjson or a regex based parser, or write a simple parser in python using json.loads
# Standardize the JS object to JSON
# Remove trailing commas before closing braces/brackets
json_text = re.sub(r',\s*([\]}])', r'\1', json_text)
# Remove comments if any
json_text = re.sub(r'//.*', '', json_text)

try:
    locations = json.loads(json_text)
except Exception as e:
    # Fallback to eval-like parser or regex extraction of each object
    print("Standard JSON load failed:", e)
    # Let's find all objects matching { ... }
    objects_text = re.findall(r'\{[^{}]*\}', json_text)
    locations = []
    for obj_txt in objects_text:
        try:
            # Clean up object keys and values
            # Replace single quotes with double quotes, ensure keys are double-quoted
            cleaned = obj_txt.replace("'", '"')
            locations.append(json.loads(cleaned))
        except:
            pass

print(f"Total Local Locations parsed: {len(locations)}")

# Let's inspect populations to see distribution of tiers.
# Indian tier definitions generally:
# Tier 1: Population > 100,000 (or > 5,000,000 / 1,000,000 depending on definition)
# Tier 2: Population 50,000 to 99,999
# Tier 3: Population 20,000 to 49,999
# Tier 4: Population 10,000 to 19,999
# Tier 5: Population 5,000 to 9,999
# Tier 6: Population < 5,000 (Rural)
#
# Let's see if there is any standard classification we used in compliance report or sitemaps.
# Let's search for "Tier 3" or "Rural" in the codebase or sitemaps to see if there is a classification.
