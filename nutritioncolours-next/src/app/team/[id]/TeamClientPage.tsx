'use client';
import { TEAM } from '@/lib/constants';
import { TeamMemberProfile } from '@/components/TeamMemberProfile';

export function TeamClientPage({ memberId }: { memberId: string }) {
  const member = TEAM.find(m => m.id === memberId);
  if (!member) return <div className="p-20 text-center font-black text-emerald-950 brand-font text-4xl">Member not found</div>;
  return <TeamMemberProfile member={member} navigate={() => {}} />;
}
