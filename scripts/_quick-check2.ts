import { findEntityUrl, getEntityRegistry } from '../src/lib/seo/autoLinker';
console.log('Registry size:', getEntityRegistry().length);
console.log('Quinoa ->', findEntityUrl('Quinoa'));
console.log('Bajra ->', findEntityUrl('Bajra'));
console.log('Ragi ->', findEntityUrl('Ragi'));
console.log('Rice ->', findEntityUrl('Rice'));
console.log('Wheat ->', findEntityUrl('Wheat'));
