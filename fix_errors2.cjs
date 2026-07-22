const fs = require('fs');

let localDir = fs.readFileSync('src/components/LocalDirectory.tsx', 'utf-8');

// Put back the imports for INTERNATIONAL_DIETS and REGIONAL_DIETS
localDir = localDir.replace(/export \{ INTERNATIONAL_DIETS, REGIONAL_DIETS \} from '\.\.\/lib\/directoryUtils';/, 
  `import { INTERNATIONAL_DIETS, REGIONAL_DIETS } from '../lib/directoryUtils';\nexport { INTERNATIONAL_DIETS, REGIONAL_DIETS } from '../lib/directoryUtils';`
);

// Fix typings in LocalDirectory
localDir = localDir.replace(/\(sub, idx\)/g, '(sub: string, idx: number)');
localDir = localDir.replace(/\(spice, idx\)/g, '(spice: string, idx: number)');

fs.writeFileSync('src/components/LocalDirectory.tsx', localDir);

console.log('Fixed typings again');
