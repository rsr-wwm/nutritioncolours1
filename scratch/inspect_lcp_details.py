import json

report_path = "/Users/apple/Downloads/nutritioncolours/lighthouse-report-local-mobile.json"

with open(report_path, "r", encoding="utf-8") as f:
    data = json.load(f)

audits = data.get("audits", {})

for key in ["lcp-breakdown-insight", "lcp-discovery-insight"]:
    audit = audits.get(key, {})
    if audit:
        print(f"\n=== DETAILS FOR {key} ===")
        print(f"Title: {audit.get('title')}")
        print(f"Description: {audit.get('description')}")
        details = audit.get("details", {})
        if details:
            items = details.get("items", [])
            for item in items:
                print(f"Item: {item}")
        else:
            print("No details found")
