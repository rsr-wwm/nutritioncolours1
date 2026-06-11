import json
import os

report_path = '/Users/apple/Downloads/nutritioncolours/local-lighthouse-report-3.json'

with open(report_path, 'r') as f:
    data = json.load(f)

# Scores
print("=================== SCORES ===================")
for cat_id, cat in data['categories'].items():
    print(f"{cat['title']}: {cat['score'] * 100:.0f}/100")

# Metrics
print("\n=================== METRICS ===================")
metrics = [
    'first-contentful-paint',
    'largest-contentful-paint',
    'speed-index',
    'total-blocking-time',
    'cumulative-layout-shift'
]

for m_id in metrics:
    audit = data['audits'].get(m_id)
    if audit:
        print(f"{audit['title']}: {audit['displayValue']} ({audit.get('numericValue', 0):.1f} ms)")

# Key Opportunities / Diagnostics
print("\n=================== OPPORTUNITIES ===================")
opportunities = []
for audit_id, audit in data['audits'].items():
    if audit.get('details', {}).get('type') == 'opportunity':
        overall_savings = audit.get('details', {}).get('overallSavingsMs', 0)
        if overall_savings > 0:
            opportunities.append((audit['title'], overall_savings, audit.get('description')))

opportunities.sort(key=lambda x: x[1], reverse=True)
for title, savings, desc in opportunities:
    print(f"- {title}: ~{savings:.0f} ms potential savings")
