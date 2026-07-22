import fs from 'node:fs';

const html = fs.readFileSync('dist/knowledge/foods/general-nutrition/general-science/nutrient-database/index.html', 'utf8');
console.log(html.includes("Nutrient Database"));
