'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { RECIPES } from '@/lib/recipes_database';
import { RECIPE_SPECIFIC_FAQS } from '@/lib/constants';
import { ClinicalCategorySign, getAeoSnippet } from '@/components/SharedSections';
import { Accordion } from '@/components/Accordion';
import { IconFlask, IconCheck, IconArrowRight, IconUtensils } from '@/components/Icons';

export function RecipeClientPage({ recipeId }: { recipeId: string }) {
  const recipe = RECIPES.find(r => r.id === recipeId);
  if (!recipe) return <div className="p-20 text-center font-black text-emerald-950 brand-font text-4xl">Recipe Not Found</div>;

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-24">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 space-y-12">
          <div className="bg-white rounded-[48px] p-10 md:p-16 border border-stone-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full opacity-50" aria-hidden="true"></div>
            <div className="space-y-8 relative z-10">
              <div className="flex flex-wrap gap-4 items-center"><ClinicalCategorySign type="protocol" />{recipe.tags.map(tag => (<span key={tag} className="text-[9px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">{tag}</span>))}</div>
              <h1 className="text-4xl md:text-7xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">{recipe.title}</h1>
              <p className="text-xl text-stone-500 leading-relaxed font-medium italic border-l-4 border-lime-400 pl-8 max-w-2xl">{recipe.description}</p>
              <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100/50 space-y-2 mt-4"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">Direct Answer Summary</span><dfn className="not-italic text-sm text-stone-600 block leading-relaxed font-semibold">{getAeoSnippet(recipe.aeoDirectSnippet, recipe.healingDescription)}</dfn></div>
              <div className="grid md:grid-cols-3 gap-6 pt-10 border-t border-stone-50">
                <div className="space-y-1"><span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Metabolic Load</span><p className="text-xl font-black text-emerald-900 brand-font">{recipe.calories} KCAL</p></div>
                <div className="space-y-1"><span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Protocol Timing</span><p className="text-xl font-black text-emerald-900 brand-font">{recipe.prepTime}</p></div>
                <div className="space-y-1"><span className="text-[10px] font-black text-stone-500 uppercase tracking-widest">Primary Objective</span><p className="text-xs font-black text-emerald-700 uppercase tracking-tight leading-tight pt-1">{recipe.primaryBenefit}</p></div>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <section className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm space-y-8 h-fit">
              <div className="flex items-center justify-between"><h3 className="text-xl font-black text-emerald-950 brand-font uppercase">Chemical Components</h3><ClinicalCategorySign type="nutrition" /></div>
              <div className="space-y-3">{recipe.ingredients.map((ing, i) => (<div key={i} className="flex justify-between items-center py-3 border-b border-stone-50 last:border-0"><span className="font-bold text-stone-700 text-sm">{ing.name}</span><span className="text-xs font-mono font-black text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">{ing.detail}</span></div>))}</div>
            </section>
            <section className="bg-emerald-950 rounded-[40px] p-10 text-white relative overflow-hidden flex flex-col h-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-lime-400/20 rounded-full blur-3xl opacity-50" aria-hidden="true"></div>
              <div className="relative z-10 space-y-8 flex-grow">
                <h3 className="text-xl font-black brand-font uppercase text-lime-400">Metabolic Mechanism</h3>
                <p className="text-emerald-100/70 text-lg leading-relaxed italic">{recipe.healingDescription}</p>
                <div className="space-y-6 pt-6 border-t border-white/10">{(recipe.fullHealingContent || '').split('\n\n').map((chunk, idx) => { const [title, ...rest] = chunk.split(':'); return (<div key={idx} className="space-y-1"><div className="text-[10px] font-black uppercase tracking-widest text-lime-400">{title}</div><p className="text-xs text-white/70 leading-relaxed">{rest.join(':').trim()}</p></div>); })}</div>
              </div>
            </section>
          </div>
          {RECIPE_SPECIFIC_FAQS[recipeId] && (
            <section className="bg-white rounded-[40px] p-10 border border-stone-100 shadow-sm space-y-8">
              <div className="flex items-center justify-between border-b border-stone-50 pb-6"><h3 className="text-xl font-black text-emerald-950 brand-font uppercase">Optimization Protocol</h3><ClinicalCategorySign type="medical" /></div>
              <div className="grid gap-4">{RECIPE_SPECIFIC_FAQS[recipeId].map((faq, i) => (<Accordion key={i} title={faq.question} content={faq.answer} category="Recipe Specific" />))}</div>
            </section>
          )}
        </div>
        <aside className="lg:col-span-4 space-y-8">
          <div className="bg-white rounded-[40px] p-8 border border-stone-100 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12" aria-hidden="true"><IconFlask size={160} /></div>
            <div className="relative z-10 space-y-8">
              <div className="space-y-2"><span className="text-[9px] font-black text-emerald-800 uppercase tracking-[0.3em]">Validation Status</span><h3 className="text-2xl font-black text-emerald-950 brand-font tracking-tight">Active Protocol</h3></div>
              <div className="flex items-center gap-4 p-6 bg-emerald-50 rounded-2xl border border-emerald-100"><div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600"><IconCheck size={20} /></div><div><p className="text-[10px] font-black text-stone-600 uppercase tracking-widest">Protocol Architect</p><p className="text-sm font-black text-emerald-950 uppercase tracking-tight leading-tight">{recipe.preparedBy}</p></div></div>
              <div className="p-6 bg-stone-50 rounded-2xl border border-stone-100 space-y-4">
                <div className="text-xs font-black uppercase tracking-widest text-emerald-800 border-b border-stone-200 pb-2">Clinical Parameters</div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider"><span className="text-stone-500">Glycemic Load</span><span className="text-emerald-700">Low</span></div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider"><span className="text-stone-500">Inflammation Index</span><span className="text-emerald-700">Anti-Inflammatory</span></div>
                  <div className="flex justify-between text-xs font-bold uppercase tracking-wider"><span className="text-stone-400">Mineral Density</span><span className="text-emerald-700">High</span></div>
                </div>
              </div>
              <CompatLink href="/plans" className="w-full bg-emerald-900 text-white font-bold uppercase tracking-widest text-[10px] py-4 rounded-xl hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 text-center block">Clinical Enrollment <IconArrowRight size={14} /></CompatLink>
            </div>
          </div>
          <div className="space-y-6">
            <div className="text-xs font-black uppercase tracking-[0.3em] text-stone-600 pl-4 border-l-2 border-lime-400">Complementary Protocols</div>
            <div className="space-y-4">
              {RECIPES.filter(r => r.id !== recipeId).slice(0, 3).map(related => (
                <CompatLink key={related.id} href={`/recipe/${related.id}`} className="bg-white p-6 rounded-3xl border border-stone-100 hover:border-emerald-200 transition-all cursor-pointer group flex items-center gap-4 block">
                  <div className="w-12 h-12 rounded-xl bg-stone-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm"><IconUtensils size={18} /></div>
                  <div><h5 className="text-[11px] font-black text-emerald-950 uppercase group-hover:text-emerald-700 transition-colors leading-tight line-clamp-1">{related.title}</h5><div className="flex items-center gap-2 mt-1"><span className="text-[9px] font-bold text-stone-600 uppercase tracking-widest">{related.category}</span><div className="w-1 h-1 rounded-full bg-stone-200"></div><span className="text-[9px] font-bold text-emerald-800 tracking-widest uppercase">{related.calories} KCAL</span></div></div>
                </CompatLink>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
