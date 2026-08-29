import assert from 'node:assert/strict';
import { exactSameOrigin, FORBIDDEN_SCHEMA_TYPES, SITE_ORIGIN, unsafeHrefScheme } from './lib/output-policy.mjs';

assert.equal(exactSameOrigin(`${SITE_ORIGIN}/health/example`), true, 'same-origin canonical should pass');
assert.equal(exactSameOrigin(`${SITE_ORIGIN}.attacker.example/health/example`), false, 'look-alike host must fail');
assert.equal(exactSameOrigin('https://evil.example/health/example'), false, 'cross-origin canonical must fail');
assert.equal(exactSameOrigin('/health/example'), false, 'relative canonical must fail in generated output');
assert.equal(unsafeHrefScheme('data:text/html,alert(1)'), 'data', 'data URLs must fail');
assert.equal(unsafeHrefScheme('javascript:alert(1)'), 'javascript', 'javascript URLs must fail');
assert.equal(unsafeHrefScheme('vbscript:msgbox(1)'), 'vbscript', 'vbscript URLs must fail');
assert.equal(unsafeHrefScheme('file:///etc/passwd'), 'file', 'file URLs must fail');
assert.equal(unsafeHrefScheme('blob:https://nutritioncolours.com/id'), 'blob', 'blob URLs must fail');
assert.equal(unsafeHrefScheme('/about'), null, 'ordinary relative links should pass');
assert.equal(FORBIDDEN_SCHEMA_TYPES.has('LocalBusiness'), true, 'local business schema is forbidden without verified premises');
assert.equal(FORBIDDEN_SCHEMA_TYPES.has('Organization'), false, 'organization schema remains allowed');

console.log('Output-policy mutation suite passed: canonical origin, URL-scheme and schema-type loopholes rejected.');
