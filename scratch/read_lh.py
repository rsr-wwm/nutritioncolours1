import json
import os

report_path = '/Users/apple/Downloads/nutritioncolours/live-lighthouse-report.json'

if not os.path.exists(report_path):
    print("Report file not found!")
    exit(1)

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

# Diagnostics
print("\n=================== DIAGNOSTICS ===================")
diagnostics = [
    'render-blocking-resources',
    'unused-javascript',
    'unused-css-rules',
    'uses-responsive-images',
    'offscreen-images',
    'modern-image-formats',
    'uses-text-compression',
    'uses-optimized-images'
]
for d_id in diagnostics:
    audit = data['audits'].get(d_id)
    if audit and audit.get('score', 1.0) < 0.9:
        print(f"- {audit['title']}: Score {audit['score']*100:.0f}/100")
        if 'displayValue' in audit:
            print(f"  Value: {audit['displayValue']}")
        # Print table headers or items if applicable
        details = audit.get('details', {})
        if details.get('type') == 'table':
            items = details.get('items', [])
            for item in items[:3]: # show top 3
                url = item.get('url', '')
                if url:
                    # truncate url
                    url_short = url.split('/')[-1] if '/' in url else url
                    url_short = url_short.split('?')[0]
                    wasted = item.get('wastedBytes', 0) / 1024
                    total = item.get('totalBytes', 0) / 1024
                    print(f"    * {url_short} (Wasted: {wasted:.1f} KB / Total: {total:.1f} KB)")
