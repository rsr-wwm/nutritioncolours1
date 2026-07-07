'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { TEAM, TEAM_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconArrowRight } from '@/components/ui/Icons';

export default function TeamPage() {
  const departments = [
    { name: 'Clinical & Metabolic Research', desc: 'Translating cellular biology and chrononutrition protocols into clinical disease reversal programs.', members: TEAM.filter(m => m.id === 'shilpa') },
    { name: 'Culinary Medicine & Nutrition', desc: 'Designing low-glycemic, anti-inflammatory recipe protocols that turn food into daily medical therapy.', members: TEAM.filter(m => m.id === 'kelive') },
    { name: 'Mind-Body Rehabilitation & Movement', desc: 'Restoring neuromuscular tone, active joint mobility, and autonomic balance to synergize with metabolic recovery.', members: TEAM.filter(m => m.id === 'karan' || m.id === 'nanz' || m.id === 'sagar') },
    { name: 'Operational Strategy & Governance', desc: 'Structuring healthcare delivery, patient care pipelines, and global clinic operations.', members: TEAM.filter(m => m.id === 'rana') }
  ];

  return (
    <div className="pt-12 pb-20 max-w-7xl mx-auto px-6">
      <SectionHeading subtitle="Our Experts" title="Clinical Team" isMain={true} />
      {departments.map(dept => (
        <div key={dept.name} className="mt-16 first:mt-8 space-y-6">
          <div className="border-l-4 border-emerald-600 pl-4 space-y-1">
            <h2 className="text-2xl font-black text-emerald-950 brand-font uppercase tracking-tight">{dept.name}</h2>
            <p className="text-xs text-stone-500 max-w-3xl italic">{dept.desc}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {dept.members.map(m => (
              <CompatLink key={m.id} href={`/team/${m.id}`} className="cursor-pointer card-clinical p-6 group flex flex-col justify-between h-full block">
                <div>
                  <div className="aspect-square rounded-[32px] overflow-hidden mb-6 relative transition-all duration-700 shadow-inner">
                    <img src={m.image} loading="lazy" className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" alt={`Portrait of ${m.name}`} referrerPolicy="no-referrer" />
                    <div className="absolute inset-0 bg-emerald-900/10 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="space-y-1 mt-4">
                    <h3 className="text-lg font-black text-emerald-950 brand-font group-hover:text-emerald-700 transition-colors uppercase tracking-tight leading-tight">{m.name}</h3>
                    <p className="text-[10px] font-black text-emerald-800 uppercase tracking-widest leading-relaxed">{m.role}</p>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-stone-50 flex items-center text-xs font-bold text-stone-500 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">View Bio &amp; FAQs <IconArrowRight size={12} className="ml-2" /></div>
              </CompatLink>
            ))}
          </div>
        </div>
      ))}
      <div className="mt-20 px-6"><FAQSection data={TEAM_FAQS} title="Team FAQs" /></div>
    </div>
  );
}
