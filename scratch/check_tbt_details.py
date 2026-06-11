import json

report_path = '/Users/apple/Downloads/nutritioncolours/local-lighthouse-report-3.json'

with open(report_path, 'r') as f:
    data = json.load(f)

# Main-thread work breakdown
main_thread = data['audits'].get('mainthread-work-breakdown', {})
print("=================== Main Thread Work Breakdown ===================")
print("Score:", main_thread.get('score'))
print("Display Value:", main_thread.get('displayValue'))
details = main_thread.get('details', {})
if details.get('type') == 'table':
    for item in details.get('items', []):
        print(f"  * {item.get('group')}: {item.get('duration', 0):.2f} ms")

# Long tasks / CPU execution
bootup = data['audits'].get('bootup-time', {})
print("\n=================== Bootup Time (JS Execution) ===================")
print("Score:", bootup.get('score'))
print("Display Value:", bootup.get('displayValue'))
details = bootup.get('details', {})
if details.get('type') == 'table':
    for item in details.get('items', []):
        print(f"  * {item.get('url').split('/')[-1] if '/' in item.get('url') else item.get('url')}: Total CPU {item.get('total', 0):.2f} ms, Script Evaluation {item.get('scriptEvaluation', 0):.2f} ms")
