'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { PLANS, PLANS_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection, MedicalDisclaimerBanner, AnimatedVisual } from '@/components/SharedSections';
import { IconArrowRight, IconCheck, IconFlask, IconLock, IconMapPin } from '@/components/Icons';
import { getDynamicCategoryFaqs } from '@/lib/faqHelper';

const PLAN_SLUG_MAP: Record<string, string> = {
  'metabolic-mastery': 'plan-1',
  'therapeutic-reversal': 'plan-2',
  'cellular-resurrection': 'plan-3'
};

export default function PlanDetailPage() {
  const planSlug = 'metabolic-mastery';
  const selectedPlan = PLANS.find(p => p.id === PLAN_SLUG_MAP[planSlug]) || null;
  if (!selectedPlan) return <div className="p-20 text-center">Plan not found</div>;

  return (
    <div className="space-y-0">
      <div className="relative w-full min-h-[500px] lg:h-[70vh] bg-emerald-950 overflow-hidden flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:48px_48px] opacity-10" aria-hidden="true"></div>
          <AnimatedVisual type={selectedPlan.id} />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/40" aria-hidden="true"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950 to-transparent" aria-hidden="true"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-black uppercase tracking-[0.5em]"><IconFlask size={16} /> Precision Protocol</div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white brand-font leading-[0.9] tracking-tighter">{selectedPlan.name}</h1>
              <div className="w-24 h-1.5 bg-lime-400 rounded-full" aria-hidden="true"></div>
            </div>
            <p className="text-emerald-50/80 text-xl md:text-2xl font-bold italic leading-relaxed border-l-4 border-lime-400 pl-8">{selectedPlan.description}</p>
            <div className="flex gap-4">
              <CompatLink href="/plans"><button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3"><IconArrowRight size={16} className="rotate-180" /> Back to Catalog</button></CompatLink>
            </div>
          </div>
          <div className="hidden lg:block relative">
            <div className="absolute -inset-4 bg-lime-400/20 blur-3xl rounded-full" aria-hidden="true"></div>
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[48px] p-12 overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-lime-400/5 to-emerald-400/5" aria-hidden="true"></div>
              <IconFlask size={120} className="text-lime-400/20 absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform duration-1000" />
              <div className="relative z-10 space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-lime-400 text-emerald-950 flex items-center justify-center shadow-lg shadow-lime-400/20"><IconLock size={32} /></div>
                <h3 className="text-3xl font-black text-white brand-font">Protocol Admission</h3>
                <p className="text-emerald-100/60 text-sm leading-relaxed">Admissions to our clinical protocols are limited and require a preliminary evaluation.</p>
                <CompatLink href="/contact"><button className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-400 transition-all cursor-pointer">Secure Early Slot</button></CompatLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-1000 delay-300">
        <div className="bg-white rounded-[40px] shadow-2xl border border-stone-100 overflow-hidden">
          <div className="grid md:grid-cols-2">
            <div className="p-10 md:p-16 border-r border-stone-100 bg-stone-50/30">
              <h3 className="text-2xl font-black text-emerald-950 mb-8 brand-font flex items-center gap-4"><div className="w-10 h-10 rounded-xl bg-emerald-900 text-white flex items-center justify-center"><IconCheck size={20} /></div>Core Protocol Benefits</h3>
              <div className="space-y-6">
                {selectedPlan.features.map((f, i) => (<div key={i} className="flex gap-4 group"><div className="w-6 h-6 rounded-full bg-white border border-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all"><IconCheck size={14} className="text-emerald-600 group-hover:text-white transition-colors" /></div><p className="text-stone-700 font-medium leading-relaxed">{f}</p></div>))}
              </div>
            </div>
            <div className="p-10 md:p-16 space-y-10">
              <div>
                <h3 className="text-2xl font-black text-emerald-950 mb-6 brand-font">Investment Tiers</h3>
                <div className="grid gap-6">
                  {selectedPlan.tiers.map((t, i) => (<div key={i} className="bg-white p-8 rounded-3xl border-2 border-stone-100 hover:border-emerald-500 transition-all group relative overflow-hidden"><div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity" aria-hidden="true"><IconFlask size={60} /></div><div className="relative z-10 flex justify-between items-center"><div><div className="text-xs font-black text-stone-500 uppercase tracking-widest mb-1">{t.label}</div><div className="text-3xl font-black text-emerald-700 brand-font">{t.price}</div></div><div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600"><IconArrowRight size={20} /></div></div></div>))}
                </div>
              </div>
              <div className="pt-6 border-t border-stone-100">
                <CompatLink href="/contact"><button className="w-full bg-emerald-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-4 group">Secure Your Consultation <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></button></CompatLink>
                <p className="text-center text-stone-500 text-[10px] font-bold uppercase tracking-widest mt-6 italic">Program admission subject to clinical evaluation and initial screening.</p>
              </div>
            </div>
          </div>
          <div className="px-10 pb-6"><MedicalDisclaimerBanner /></div>
          <div className="p-10 border-t border-stone-100"><FAQSection data={getDynamicCategoryFaqs('plans/metabolic-mastery', null)} title="Program Specific FAQs" /></div>
        </div>
        <FAQSection data={PLANS_FAQS} title="Program FAQs" />
      </div>
    </div>
  );
}
