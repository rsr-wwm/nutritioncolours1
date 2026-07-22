const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/pages/foods/*.astro');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace various irregular whitespaces like NBSP (0xA0) with regular space
  content = content.replace(/[\u00A0\u1680\u180E\u2000-\u200B\u2028\u2029\u202F\u205F\u3000\uFEFF]/g, ' ');

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log('Fixed irregular whitespace in', file);
  }
}
