
const fs = require('fs');
let code = fs.readFileSync('src/pages/knowledge/[...slug].astro', 'utf-8');

// Remove existing 'const origin =' declarations
code = code.replace(/s*const origin = (Astro.site || 'https://nutritioncolours.com').toString().replace(/\\/\$/, '');/g, '');

// Add the global one at the top
code = code.replace(
  /// Schema generation logic helper
let jsonLd = '';/,
  );

// Replace Astro.url.href inside schemas
code = code.replace(/'url': Astro.url.href,/g, ''url': ,');
code = code.replace(/'item': Astro.url.href/g, ''item': ');

fs.writeFileSync('src/pages/knowledge/[...slug].astro', code);
console.log('Fixed URLs');
