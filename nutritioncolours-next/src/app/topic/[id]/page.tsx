// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;
import { TOPICS } from '@/lib/topics';
import { TopicClientPage } from './TopicClientPage';

export function generateStaticParams() {
  return TOPICS.map(t => ({ id: t.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) return { title: 'Not Found' };
  return { title: `${topic.title} - Clinical Guide`, description: topic.shortDesc };
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const topic = TOPICS.find(t => t.id === id);
  if (!topic) /* notFound removed for Astro */
  return <TopicClientPage topicId={id} />;
}
