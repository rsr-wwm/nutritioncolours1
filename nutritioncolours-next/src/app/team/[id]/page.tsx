import { TEAM } from '@/lib/constants';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;
import { TeamClientPage } from './TeamClientPage';

export async function generateStaticParams() {
  return TEAM.map(m => ({ id: m.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = TEAM.find(m => m.id === id);
  if (!member) return { title: 'Not Found' };
  return { title: `${member.name} - Team`, description: member.role };
}

export default async function TeamMemberPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const member = TEAM.find(m => m.id === id);
  if (!member) /* notFound removed for Astro */
  return <TeamClientPage memberId={id} />;
}
