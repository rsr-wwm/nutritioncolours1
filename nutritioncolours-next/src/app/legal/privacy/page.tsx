'use client';
import { LEGAL_CONTENT } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';

export default function PrivacyPage() {
  const content = LEGAL_CONTENT.privacy;
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto py-20">
      <SectionHeading subtitle="Legal" title="Privacy Policy" isMain={true} />
      <div className="bg-white p-12 rounded-[40px] shadow-sm border border-stone-100 prose prose-emerald max-w-none">
        {content ? (
          <div className="space-y-8">{content.map((section: any, idx: number) => (<div key={idx}><h2 className="text-xl font-bold text-emerald-950 mb-4">{section.heading}</h2><p className="text-stone-600 leading-relaxed whitespace-pre-line">{section.text}</p></div>))}</div>
        ) : (<p className="text-stone-500 font-bold uppercase tracking-widest text-xs">Legal documents are being updated. Please contact support.</p>)}
      </div>
    </div>
  );
}
