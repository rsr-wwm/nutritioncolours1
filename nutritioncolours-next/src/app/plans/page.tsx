'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { PLANS, PLANS_FAQS, HOW_IT_WORKS } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection, MedicalDisclaimerBanner, AnimatedVisual } from '@/components/SharedSections';
import { IconArrowRight, IconCheck, IconFlask, IconLeaf, IconWand, IconLock, IconMapPin } from '@/components/Icons';
import { getDynamicCategoryFaqs } from '@/lib/faqHelper';

export default function PlansPage() {
  return (
    <div className="space-y-0">
      <div className="relative w-full min-h-[500px] lg:h-[70vh] bg-emerald-950 overflow-hidden flex items-center px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:48px_48px] opacity-10" aria-hidden="true"></div>
          <AnimatedVisual type="catalog" />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-emerald-950/40" aria-hidden="true"></div>
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-emerald-950 to-transparent" aria-hidden="true"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-lime-400/10 border border-lime-400/20 text-lime-400 text-xs font-black uppercase tracking-[0.5em]"><IconFlask size={16} /> Precision Protocol</div>
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white brand-font leading-[0.9] tracking-tighter">Clinical <span className="text-lime-400 italic">Healing</span> Systems</h1>
              <div className="w-24 h-1.5 bg-lime-400 rounded-full" aria-hidden="true"></div>
            </div>
            <p className="text-emerald-50/80 text-xl md:text-2xl font-bold italic leading-relaxed border-l-4 border-lime-400 pl-8">Evidence-based metabolic protocols designed to achieve clinical remission through physician-led nutritional science.</p>
            <div className="flex flex-wrap gap-6 pt-4">
              <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest"><IconCheck size={14} className="text-lime-400" /> Bio-Individual</div>
              <div className="flex items-center gap-3 text-white/40 text-[10px] font-black uppercase tracking-widest"><IconCheck size={14} className="text-lime-400" /> Evidence-Based</div>
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
                <p className="text-emerald-100/60 text-sm leading-relaxed">Admissions to our clinical protocols are limited and require a preliminary evaluation to ensure optimal candidate-program alignment.</p>
                <CompatLink href="/contact"><button className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-400 transition-all cursor-pointer">Secure Early Slot</button></CompatLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-20 animate-in fade-in duration-1000 delay-300">
        <div className="grid lg:grid-cols-3 gap-8">
          {PLANS.map(p => {
            const IconComp = p.id === 'plan-1' ? IconLeaf : p.id === 'plan-2' ? IconWand : IconLock;
            const slug = p.id === 'plan-1' ? 'metabolic-mastery' : p.id === 'plan-2' ? 'therapeutic-reversal' : 'cellular-resurrection';
            return (
              <div key={p.id} className="card-clinical flex flex-col group h-full">
                <div className="p-8 flex-grow">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-500"><IconComp size={28} /></div>
                    <span className="badge-clinical">Featured</span>
                  </div>
                  <div className="text-xs font-black text-stone-500 uppercase tracking-[0.2em] mb-2">{p.idealFor}</div>
                  <h3 className="text-2xl font-black text-emerald-950 mb-4 brand-font leading-tight">{p.name}</h3>
                  <p className="text-stone-500 mb-8 text-sm leading-relaxed line-clamp-3">{p.description}</p>
                  <div className="space-y-4 mb-8">
                    <div className="text-xs font-bold text-stone-500 uppercase tracking-widest border-b border-stone-100 pb-2">Includes</div>
                    {p.features.slice(0, 3).map((f, i) => (<div key={i} className="flex items-start gap-3 text-[13px] text-stone-600"><div className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" /><span className="line-clamp-2">{f}</span></div>))}
                  </div>
                </div>
                <div className="px-8 pb-8">
                  <CompatLink href={`/plans/${slug}`}><button className="w-full py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all bg-stone-50 text-emerald-900 border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50">View Full Protocol</button></CompatLink>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 bg-gradient-to-r from-emerald-900 to-emerald-950 rounded-[32px] text-white p-8 md:p-12 shadow-xl relative overflow-hidden border border-emerald-800 flex flex-col md:flex-row justify-between items-center gap-8 animate-in fade-in duration-700">
          <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400 opacity-5 rounded-full blur-3xl" aria-hidden="true"></div>
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-[10px] font-black text-lime-400 bg-lime-400/10 px-3 py-1 rounded-full border border-lime-400/25 tracking-widest uppercase inline-block">2026 Circadian Reset Challenge</span>
            <h3 className="text-3xl font-black brand-font leading-tight">Is your daily routine holding back your metabolic recovery?</h3>
            <p className="text-emerald-100/70 text-sm leading-relaxed">Aligning meal times, sleep hygiene, and light cycles with natural biological clocks reduces systemic insulin resistance and cellular stress.</p>
          </div>
          <CompatLink href="/tools"><button className="shrink-0 bg-lime-400 hover:bg-lime-300 text-emerald-950 font-black uppercase tracking-widest text-xs px-8 py-5 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95 duration-200 cursor-pointer">Start Rhythm Audit</button></CompatLink>
        </div>
        <MedicalDisclaimerBanner />
        <FAQSection data={PLANS_FAQS} title="Program FAQs" />
      </div>
    </div>
  );
}
