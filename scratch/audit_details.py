import json

report_path = '/Users/apple/Downloads/nutritioncolours/local-lighthouse-report-2.json'

with open(report_path, 'r') as f:
    data = json.load(f)

print("=================== PERFORMANCE AUDITS < 100% ===================")
for audit_id, audit in data['audits'].items():
    score = audit.get('score')
    # we want performance audits that have a score, are not 1, and are not just informational
    if score is not None and score < 1.0:
        print(f"\nAudit: {audit['title']} ({audit_id})")
        print(f"  Score: {score*100:.0f}/100")
        if 'displayValue' in audit:
            print(f"  Display Value: {audit['displayValue']}")
        if 'numericValue' in audit:
            print(f"  Numeric Value: {audit['numericValue']:.2f} {audit.get('numericUnit', '')}")
        details = audit.get('details', {})
        if details.get('type') == 'table':
            items = details.get('items', [])
            print("  Items:")
            for item in items[:5]:
                print(f"    * {item}")
