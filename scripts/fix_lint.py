import os
import glob
import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    original = content

    # Replace irregular whitespaces
    content = content.replace('\xa0', ' ')

    # Replace window with globalThis.window to avoid no-undef
    content = content.replace("typeof window !== 'undefined' window.location.href", "typeof globalThis !== 'undefined' && globalThis.window ? globalThis.window.location.href")
    content = content.replace("typeof window !== 'undefined') window.location.href", "typeof globalThis !== 'undefined' && globalThis.window) globalThis.window.location.href")
    
    # Fix specific unused variables by commenting out the lines or removing them
    if 'clinic/index.astro' in filepath:
        content = re.sub(r'const title =[^;]+;\n?', '', content)
        content = re.sub(r'const description =[^;]+;\n?', '', content)
        content = re.sub(r'const category =[^;]+;\n?', '', content)
        content = re.sub(r'const lastUpdated =[^;]+;\n?', '', content)
        content = re.sub(r'const seoKeywords =[^;]+;\n?', '', content)
        content = re.sub(r'const author =[^;]+;\n?', '', content)
    
    if 'clinic/[city]/[disease].astro' in filepath:
        content = re.sub(r'const isInternational =[^;]+;\n?', '', content)
        content = re.sub(r'const regionLabel =[^;]+;\n?', '', content)
        
    if 'clinics.astro' in filepath or 'history.astro' in filepath or 'vegan/[subtopic].astro' in filepath:
        content = re.sub(r"import Icons from '[^']+';\n?", '', content)
        
    if 'knowledge/health-conditions.astro' in filepath:
        content = re.sub(r"import SeoHelper from '[^']+';\n?", '', content)

    if 'recipe/[recipe_id].astro' in filepath:
        content = re.sub(r"import SharedSections from '[^']+';\n?", '', content)

    if 'topic/[topic_id].astro' in filepath:
        content = re.sub(r"import SectionHeading from '[^']+';\n?", '', content)
        content = re.sub(r'const linkGovernance =[^;]+;\n?', '', content)
        
    if 'foods/kombucha.astro' in filepath:
        content = re.sub(r'const date =[^;]+;\n?', '', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed {filepath}")

for root, _, files in os.walk('src/pages'):
    for file in files:
        if file.endswith('.astro'):
            fix_file(os.path.join(root, file))
