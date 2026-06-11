import re

bundle_path = "/Users/apple/Downloads/nutritioncolours/dist/assets/index-IPhdXfVn.js"

with open(bundle_path, "r", encoding="utf-8") as f:
    content = f.read()

print("Checking imports in main bundle:")

# Find all occurrences of import"..." or import ... from "..."
static_imports = re.findall(r'import\s*\(?["\']([^"\']+)["\']\)?', content)
print(f"All import references: {static_imports}")

for item in ["vendor-core", "vendor-animation", "vendor-misc"]:
    matches = [line for line in content.split(";") if item in line and "import" in line]
    if matches:
        print(f"\nImport line for {item}:")
        for m in matches[:2]:
            print(f"  * {m[:200]}...")

