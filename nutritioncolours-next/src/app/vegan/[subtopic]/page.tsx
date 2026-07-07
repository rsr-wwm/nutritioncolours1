import { VEGAN_SUB_TOPICS } from '@/lib/constants';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;
import { VeganClientPage } from './VeganClientPage';

export async function generateStaticParams() {
  return VEGAN_SUB_TOPICS.map(s => ({ subtopic: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ subtopic: string }> }) {
  const { subtopic } = await params;
  const topic = VEGAN_SUB_TOPICS.find(s => s.id === subtopic);
  if (!topic) return { title: 'Not Found' };
  return { title: topic.title, description: topic.subtitle };
}

export default async function VeganSubtopicPage({ params }: { params: Promise<{ subtopic: string }> }) {
  const { subtopic } = await params;
  const topic = VEGAN_SUB_TOPICS.find(s => s.id === subtopic);
  if (!topic) /* notFound removed for Astro */
  return <VeganClientPage subtopic={subtopic} />;
}
