import { TOPICS } from '../src/lib/topics';

let failures = 0, checked = 0, short = 0;
for (const topic of TOPICS.slice(0, 260)) {
  const relatedTopics: typeof TOPICS = [];
  const seenRelated = new Set<string>([topic.id]);
  for (const t of TOPICS) { if (relatedTopics.length >= 6) break; if (seenRelated.has(t.id)) continue; if (t.category === topic.category) { relatedTopics.push(t); seenRelated.add(t.id); } }
  for (const t of TOPICS) { if (relatedTopics.length >= 6) break; if (seenRelated.has(t.id)) continue; relatedTopics.push(t); seenRelated.add(t.id); }
  checked++;
  const ids = relatedTopics.map((t) => t.id);
  if (ids.includes(topic.id)) failures++;
  if (new Set(ids).size !== ids.length) failures++;
  if (relatedTopics.some((t) => !t.id || !t.title)) failures++;
  if (relatedTopics.length !== 6) short++;
}
console.log(`checked ${checked} topics, ${failures} assertion failures, ${short} with <6 related`);
const first = TOPICS[0];
const r: typeof TOPICS = []; const s = new Set<string>([first.id]);
for (const t of TOPICS) { if (r.length >= 6) break; if (s.has(t.id)) continue; if (t.category === first.category) { r.push(t); s.add(t.id); } }
console.log(`sample: ${first.id} (${first.category}) -> ${r.map((t) => t.id).join(', ')}`);
