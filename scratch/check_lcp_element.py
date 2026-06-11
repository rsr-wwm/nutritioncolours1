import json

report_path = '/Users/apple/Downloads/nutritioncolours/local-lighthouse-report-5.json'

with open(report_path, 'r') as f:
    data = json.load(f)

for k in ['lcp-breakdown-insight', 'lcp-discovery-insight']:
    audit = data['audits'].get(k, {})
    print(f"\n=================== {k} ===================")
    print(json.dumps(audit, indent=2))
