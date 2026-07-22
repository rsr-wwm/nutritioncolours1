const fs = require('fs');

// Fix LocalDirectory.tsx
let localDir = fs.readFileSync('src/components/LocalDirectory.tsx', 'utf-8');

// Put back LocalDirectoryProps
const propsDef = `
export interface LocalDirectoryProps {
  navigate: (path: string) => void;
  currentPath: string;
  activeClinicProp?: any;
}
`;

localDir = localDir.replace('export const LocalDirectory:', propsDef + '\nexport const LocalDirectory:');

// Fix the exports for HealthTopicPage
localDir = localDir.replace(/import \{([\s\S]*?)INTERNATIONAL_DIETS,(\s*?)REGIONAL_DIETS,([\s\S]*?)\} from '\.\.\/lib\/directoryUtils';/, (match, p1, p2, p3) => {
    return `import {\n${p1}${p3}} from '../lib/directoryUtils';\nexport { INTERNATIONAL_DIETS, REGIONAL_DIETS } from '../lib/directoryUtils';`;
});

fs.writeFileSync('src/components/LocalDirectory.tsx', localDir);

// Fix HealthTopicPage.tsx typings
let healthTopic = fs.readFileSync('src/components/HealthTopicPage.tsx', 'utf-8');
healthTopic = healthTopic.replace(/\(sub, i\)/g, '(sub: string, i: number)');
healthTopic = healthTopic.replace(/\(spice, i\)/g, '(spice: string, i: number)');
fs.writeFileSync('src/components/HealthTopicPage.tsx', healthTopic);

console.log('Fixed typings');
