'use client';
import { TESTIMONIALS, TESTIMONIALS_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconUser } from '@/components/Icons';

export default function TestimonialsPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <SectionHeading subtitle="Results" title="Success Stories" isMain={true} />
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {TESTIMONIALS.map(t => (
          <div key={t.id} className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100"><IconUser size={18} /></div>
              <div><div className="font-bold text-emerald-950 text-xs">{t.name}</div><div className="text-[8px] text-stone-500 uppercase tracking-wider">{t.role}</div></div>
            </div>
            <div className="mb-6 flex-grow">
              <span className="inline-block px-3 py-1 bg-emerald-50 text-emerald-700 text-[10px] font-bold uppercase tracking-widest rounded-full mb-3">{t.condition}</span>
              <p className="text-stone-600 italic leading-relaxed">&ldquo;{t.text}&rdquo;</p>
            </div>
            <div className="text-xs font-bold text-stone-300 uppercase tracking-widest border-t border-stone-100 pt-4">Verified Patient &bull; {t.date}</div>
          </div>
        ))}
      </div>
      <FAQSection data={TESTIMONIALS_FAQS} title="Results FAQs" />
    </div>
  );
}
