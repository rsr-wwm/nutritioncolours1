import json
import os

report_path = "/Users/apple/Downloads/nutritioncolours/lighthouse-report-mobile.json"

if not os.path.exists(report_path):
    print(f"Report not found at {report_path}")
    exit(1)

with open(report_path, "r", encoding="utf-8") as f:
    data = json.load(f)

audits = data.get("audits", {})
perf_category = data.get("categories", {}).get("performance", {})
audit_refs = perf_category.get("auditRefs", [])

print("=== ALL PERFORMANCE AUDITS WITH SCORE < 1.0 ===")
for ref in audit_refs:
    audit_id = ref.get("id")
    weight = ref.get("weight", 0)
    audit = audits.get(audit_id, {})
    score = audit.get("score")
    
    # We want to check audits with score < 1.0
    if score is not None and score < 1.0:
        title = audit.get("title")
        display_val = audit.get("displayValue", "")
        print(f"\n- {title} (ID: {audit_id}) | Score: {score} | Weight: {weight}")
        if display_val:
            print(f"  Display Value: {display_val}")
        
        # Details / items
        details = audit.get("details", {})
        items = details.get("items", [])
        if items:
            print("  Items:")
            for item in items[:5]:
                print(f"    * {item}")
