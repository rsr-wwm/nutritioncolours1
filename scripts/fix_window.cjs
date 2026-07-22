const fs = require('fs');
const glob = require('glob');

const files = glob.sync('src/pages/**/*.astro');
for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  content = content.replace(
    /navigate=\{\(path(?:: string)?\) => \{ window\.location\.href = '\/' \+ path; \}\}/g,
    `navigate={(path) => { if (typeof window !== 'undefined') window.location.href = '/' + path; }}`
  );
  
  content = content.replace(
    /navigate=\{\(path\) => window\.location\.href = '\/' \+ path\}/g,
    `navigate={(path) => { if (typeof window !== 'undefined') window.location.href = '/' + path; }}`
  );

  if (content !== original) {
    fs.writeFileSync(file, content);
    console.log('Fixed window.location in', file);
  }
}
