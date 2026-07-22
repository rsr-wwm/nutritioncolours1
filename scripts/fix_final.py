import os
import re

def rep(filepath, target, replacement):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    content = content.replace(target, replacement)
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# 1. Seo.astro
rep('src/components/Seo.astro', 'const keywords =', '// const keywords =')

# 2. SharedSections.astro
rep('src/components/SharedSections.astro', '\xa0', ' ')
rep('src/components/SharedSections.astro', '\u2028', ' ')

# 3. BaseLayout.astro
with open('src/layouts/BaseLayout.astro', 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r"import Icons from '[^']+';\n?", '', content)
content = re.sub(r"^\s*geo\s*,?\n?", '', content, flags=re.MULTILINE)
with open('src/layouts/BaseLayout.astro', 'w', encoding='utf-8') as f:
    f.write(content)

# 4. clinic/[city]/[disease].astro
with open('src/pages/clinic/[city]/[disease].astro', 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r'^.*localReviews.*$\n', '', content, flags=re.MULTILINE)
content = re.sub(r'^.*faqData.*$\n', '', content, flags=re.MULTILINE)
content = re.sub(r'^.*LOCAL_REVIEWS.*$\n', '', content, flags=re.MULTILINE)
content = re.sub(r'^.*CLINIC_FAQS.*$\n', '', content, flags=re.MULTILINE)
with open('src/pages/clinic/[city]/[disease].astro', 'w', encoding='utf-8') as f:
    f.write(content)

# 5. topic/[topic_id].astro
with open('src/pages/topic/[topic_id].astro', 'r', encoding='utf-8') as f:
    content = f.read()
content = re.sub(r"import \{ getTopArticlesForTopic \} from '[^']+';\n?", '', content)
with open('src/pages/topic/[topic_id].astro', 'w', encoding='utf-8') as f:
    f.write(content)
