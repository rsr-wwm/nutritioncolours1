import json

report_path = '/Users/apple/Downloads/nutritioncolours/local-lighthouse-report.json'

with open(report_path, 'r') as f:
    data = json.load(f)

audit = data['audits'].get('unused-javascript', {})
print(json.dumps(audit, indent=2))
