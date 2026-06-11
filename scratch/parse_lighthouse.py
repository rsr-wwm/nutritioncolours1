import json
import os

report_path = "/Users/apple/Downloads/nutritioncolours/lighthouse-report-local-mobile-3.json"

if not os.path.exists(report_path):
    print(f"Report not found at {report_path}")
    exit(1)

with open(report_path, "r", encoding="utf-8") as f:
    data = json.load(f)

print("--- LIGHTHOUSE AUDIT REPORT SUMMARY ---")
print(f"URL: {data.get('requestedUrl')}")
print(f"Fetch Time: {data.get('fetchTime')}")
print(f"Device: {data.get('configSettings', {}).get('formFactor')}")
print(f"Lighthouse Version: {data.get('lighthouseVersion')}")

# Category Scores
categories = data.get("categories", {})
print("\n--- CATEGORY SCORES ---")
for cat_id, cat_data in categories.items():
    score = cat_data.get("score")
    score_val = int(score * 100) if score is not None else "N/A"
    print(f"{cat_data.get('title')}: {score_val}/100")

# Core Performance Metrics
audits = data.get("audits", {})
metrics = [
    ("first-contentful-paint", "First Contentful Paint (FCP)"),
    ("largest-contentful-paint", "Largest Contentful Paint (LCP)"),
    ("cumulative-layout-shift", "Cumulative Layout Shift (CLS)"),
    ("total-blocking-time", "Total Blocking Time (TBT)"),
    ("speed-index", "Speed Index (SI)"),
    ("interactive", "Time to Interactive (TTI)"),
]

print("\n--- KEY PERFORMANCE METRICS ---")
for audit_id, label in metrics:
    audit = audits.get(audit_id, {})
    display_value = audit.get("displayValue", "N/A")
    score = audit.get("score", "N/A")
    print(f"{label}: {display_value} (Score: {score})")

# Savings / Opportunities (audits with positive overallSavings / wastedMs/wastedBytes)
print("\n--- TOP PERFORMANCE OPPORTUNITIES ---")
opportunities = []
for audit_id, audit in audits.items():
    if audit.get("details", {}).get("type") == "opportunity":
        wasted_ms = audit.get("details", {}).get("overallSavingsMs", 0)
        wasted_bytes = audit.get("details", {}).get("overallSavingsBytes", 0)
        if wasted_ms > 0 or wasted_bytes > 0:
            opportunities.append((audit_id, audit.get("title"), wasted_ms, wasted_bytes, audit.get("description")))

# Sort opportunities by wasted_ms descending, then wasted_bytes descending
opportunities.sort(key=lambda x: (x[2], x[3]), reverse=True)

for audit_id, title, w_ms, w_bytes, desc in opportunities:
    kb_saved = f"{w_bytes/1024:.1f} KB" if w_bytes > 0 else "N/A"
    ms_saved = f"{w_ms} ms" if w_ms > 0 else "N/A"
    print(f"- {title}: Savings of {ms_saved} / {kb_saved} (Audit ID: {audit_id})")

# Diagnostics / Render blocking details
print("\n--- DIAGNOSTICS & DETAILS ---")
diagnostic_audits = [
    "render-blocking-resources",
    "unused-javascript",
    "unused-css-rules",
    "modern-image-formats",
    "uses-responsive-images",
    "offscreen-images",
    "font-display",
    "server-response-time",
]

for audit_id in diagnostic_audits:
    audit = audits.get(audit_id, {})
    if audit:
        score = audit.get("score")
        # Print if failed or low score
        if score is not None and score < 0.9:
            print(f"- {audit.get('title')} (Score: {score}): {audit.get('displayValue', 'Failed')}")
            # print items if they exist
            details = audit.get("details", {})
            if "items" in details and details["items"]:
                print("  Details:")
                for item in details["items"][:5]:  # print first 5 items
                    url = item.get("url", item.get("label", ""))
                    wasted = item.get("wastedBytes", item.get("wastedMs", ""))
                    wasted_str = f", Wasted: {wasted/1024:.1f} KB" if isinstance(wasted, (int, float)) else f", Value: {wasted}" if wasted else ""
                    print(f"    * {url}{wasted_str}")
