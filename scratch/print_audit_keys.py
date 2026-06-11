import json
import os

report_path = "/Users/apple/Downloads/nutritioncolours/lighthouse-report-local-mobile.json"

with open(report_path, "r", encoding="utf-8") as f:
    data = json.load(f)

audits = data.get("audits", {})

print("Audit keys matching paint, lcp, element, or image:")
for k in sorted(audits.keys()):
    if "paint" in k or "lcp" in k or "element" in k or "image" in k:
        audit = audits[k]
        score = audit.get("score")
        print(f"- {k} | Title: {audit.get('title')} | Score: {score}")
