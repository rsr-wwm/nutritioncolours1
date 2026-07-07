'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { HealthTopicPage } from '@/components/HealthTopicPage';
import { MedicalDisclaimerBanner } from '@/components/SharedSections';

export function VeganClientPage({ subtopic }: { subtopic: string }) {
  const topicId = `vegan-${subtopic}`;
  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-32 pb-4">
        <CompatLink href="/knowledge/vegan" className="inline-flex items-center gap-2 text-xs font-black text-emerald-800 uppercase tracking-widest hover:text-emerald-950 transition-colors">← Back to Vegan Guide</CompatLink>
      </div>
      <HealthTopicPage topicId={topicId} navigate={() => {}} />
      <div className="max-w-7xl mx-auto px-6 pb-20"><MedicalDisclaimerBanner /></div>
    </div>
  );
}
