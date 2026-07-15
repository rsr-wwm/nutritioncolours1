import { FRUITS_DATA, getFoodsByClass } from '../src/lib/foods_database';
import { getFoodEntityGraph } from '../src/lib/seo/entityGraph';

let fail = 0;
console.log(`FRUITS_DATA: ${FRUITS_DATA.length} entries`);
for (const f of FRUITS_DATA) {
  if (!f.id || !f.name || !f.summary) { console.log('missing core:', f.id); fail++; }
  if (!f.composition?.length) { console.log('no composition:', f.id); fail++; }
  if (!f.sources?.length) { console.log('no source:', f.id); fail++; }
  if (!f.healthNotes?.length) { console.log('no healthNotes:', f.id); fail++; }
  const s = getFoodEntityGraph(f, 'fruits');
  try {
    const parsed = JSON.parse(s);
    const types = JSON.stringify(parsed).match(/"@type":"[^"]+"/g) || [];
    if (!types.some((t) => t.includes('MedicalWebPage'))) { console.log('no MedicalWebPage:', f.id); fail++; }
    if (!types.some((t) => t.includes('Physician'))) { console.log('no reviewer:', f.id); fail++; }
  } catch (e) { console.log('BAD JSON-LD:', f.id, (e as Error).message); fail++; }
}
console.log(`getFoodsByClass('fruit') -> ${getFoodsByClass('fruit').length}`);
console.log('mango schema @types:', (JSON.stringify(JSON.parse(getFoodEntityGraph(FRUITS_DATA[0], 'fruits'))).match(/"@type":"[^"]+"/g) || []).join(' '));
console.log(fail === 0 ? 'ALL FOOD CHECKS PASS' : `${fail} FAILURES`);
