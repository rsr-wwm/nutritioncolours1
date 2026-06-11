import json

map_path = "/Users/apple/Downloads/nutritioncolours/dist/assets/vendor-misc-CX4Anqmh.js.map"

with open(map_path, "r", encoding="utf-8") as f:
    data = json.load(f)

sources = data.get("sources", [])
print(f"Total source files in vendor-misc: {len(sources)}")
print("\nUnique package paths in vendor-misc:")

packages = set()
for s in sources:
    parts = s.split("node_modules/")
    if len(parts) > 1:
        pkg = parts[1].split("/")[0]
        packages.add(pkg)

for p in sorted(packages):
    print(f"- {p}")
