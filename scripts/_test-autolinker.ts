import { findEntityUrl, linkifyText, getLocationsForFood, getEntityRegistry } from '../src/lib/seo/autoLinker';

let fail = 0;
const registry = getEntityRegistry();
console.log(`Entity registry size: ${registry.length}`);
if (registry.length < 50) { console.log('registry looks too small'); fail++; }

const turmericUrl = findEntityUrl('Turmeric');
console.log('findEntityUrl("Turmeric") ->', turmericUrl);
if (turmericUrl !== '/herb/turmeric') { console.log('FAIL turmeric lookup'); fail++; }

const mangoUrl = findEntityUrl('Mango');
console.log('findEntityUrl("Mango") ->', mangoUrl);
if (mangoUrl !== '/foods/fruits/mango') { console.log('FAIL mango lookup'); fail++; }

const unknown = findEntityUrl('Tahini');
console.log('findEntityUrl("Tahini") ->', unknown, '(expected null, no page exists)');
if (unknown !== null) { console.log('FAIL should be null for unmapped ingredient'); fail++; }

const sample = 'Turmeric (Golden Spice): The star of this bowl is curcumin, celebrated for anti-inflammatory properties, often paired with Black Pepper for absorption.';
const linked = linkifyText(sample);
console.log('linkifyText sample ->', linked);
if (!linked.includes('<a href="/herb/turmeric"')) { console.log('FAIL turmeric not linked in text'); fail++; }

const pomegranateLocs = getLocationsForFood('Pomegranate');
console.log(`getLocationsForFood("Pomegranate") -> ${pomegranateLocs.length} matches:`, pomegranateLocs.slice(0, 5));
if (pomegranateLocs.length === 0) { console.log('FAIL expected at least one location for Pomegranate'); fail++; }

console.log(fail === 0 ? 'ALL AUTOLINKER CHECKS PASS' : `${fail} FAILURES`);
