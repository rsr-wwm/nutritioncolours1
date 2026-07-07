'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { VEGAN_SUB_TOPICS, VEGAN_FAQS, BLOG_ARTICLES } from '@/lib/constants';
import { CategoryType } from '@/lib/types';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconLeaf, IconArrowRight } from '@/components/ui/Icons';

export default function VeganPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-12 bg-stone-50/30">
      <SectionHeading subtitle="Lifestyle" title="Vegan Guide" isMain={true} />
      <div className="bg-emerald-950 rounded-[48px] p-10 md:p-16 text-white relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none" aria-hidden="true"><div className="absolute top-0 right-0 w-96 h-96 bg-lime-400 rounded-full blur-[100px]"></div></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">Holistic Reset</span>
            <h2 className="text-4xl md:text-6xl font-black brand-font leading-none tracking-tighter">Clinical Plant Nutrition</h2>
            <p className="text-emerald-100/70 text-lg leading-relaxed max-w-xl">A well-planned vegan diet is one of the most powerful tools for reversing chronic disease. By eliminating inflammatory animal proteins and focusing on nutrient-dense plants, you can lower inflammation, improve heart health, and balance hormones naturally.</p>
            <CompatLink href="/recipes" className="inline-flex items-center gap-3 bg-lime-400 text-emerald-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-emerald-950 transition-all shadow-xl shadow-lime-400/10">Explore Vegan Recipes <IconArrowRight size={14} /></CompatLink>
          </div>
          <div className="hidden lg:block relative h-full"><div className="h-full rounded-3xl border border-white/10 bg-white/5 flex flex-col items-center justify-center p-12 text-center space-y-6"><div className="w-24 h-24 border-2 border-lime-400/20 rounded-3xl flex items-center justify-center"><IconLeaf size={48} className="text-lime-400/40" /></div><div className="space-y-2"><p className="text-xs font-black text-lime-400 uppercase tracking-[0.3em]">Plant Intelligence</p><p className="text-[10px] text-white/40 uppercase tracking-widest">Core Protocol v4.0</p></div></div></div>
        </div>
      </div>
      <div className="space-y-6">
        <h2 className="text-2xl font-black text-emerald-950 brand-font uppercase tracking-tight px-2">Essential Guidelines</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VEGAN_SUB_TOPICS.map(topic => (
            <CompatLink key={topic.id} href={`/vegan/${topic.id}`} className="text-left p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between h-56 bg-white text-emerald-950 border-stone-100 hover:border-emerald-200 hover:shadow-lg shadow-sm block">
              <div className="text-4xl">{topic.icon}</div>
              <div className="space-y-2 mt-auto"><h3 className="font-black text-sm uppercase tracking-wider leading-tight">{topic.title}</h3><p className="text-[10px] tracking-wide text-stone-500">{topic.subtitle}</p></div>
            </CompatLink>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-black text-emerald-950 brand-font uppercase tracking-tight mb-6 px-2">Related Articles</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {BLOG_ARTICLES.filter(a => a.category === CategoryType.VEGAN).map(article => (
            <CompatLink key={article.id} href={`/article/${article.id}`} className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 hover:shadow-md hover:border-emerald-100 transition-all flex flex-col justify-between min-h-[12rem] block">
              <div className="space-y-4">
                <span className="text-[9px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{article.date}</span>
                <h3 className="font-black text-lg text-emerald-950 leading-snug line-clamp-2 brand-font uppercase tracking-tight">{article.title}</h3>
                <p className="text-xs text-stone-500 line-clamp-2 italic">{article.excerpt}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-stone-50 flex items-center justify-between text-xs font-black uppercase tracking-widest text-emerald-800"><span>Read Analysis</span><IconArrowRight size={12} /></div>
            </CompatLink>
          ))}
        </div>
      </div>
      <FAQSection data={VEGAN_FAQS} title="Vegan FAQs" />
    </div>
  );
}
