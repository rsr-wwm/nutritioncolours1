'use client';
import { useState } from 'react';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { RECIPES } from '@/lib/recipes_database';
import { RECIPES_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconSearch, IconUtensils, IconArrowRight } from '@/components/ui/Icons';

export default function RecipesPage() {
  const [recipeQuery, setRecipeQuery] = useState('');
  const [recipeCategory, setRecipeCategory] = useState('All');
  const [recipeTag, setRecipeTag] = useState('All');

  const filtered = RECIPES.filter(recipe => {
    const matchesCategory = recipeCategory === 'All' || recipe.category === recipeCategory;
    const matchesTag = recipeTag === 'All' || recipe.tags.some(t => t.toLowerCase() === recipeTag.toLowerCase() || t.toLowerCase().includes(recipeTag.toLowerCase()));
    const matchesSearch = recipe.title.toLowerCase().includes(recipeQuery.toLowerCase()) || recipe.description.toLowerCase().includes(recipeQuery.toLowerCase()) || recipe.tags.some(t => t.toLowerCase().includes(recipeQuery.toLowerCase()));
    return matchesCategory && matchesTag && matchesSearch;
  });

  return (
    <div className="animate-in fade-in duration-700 bg-stone-50/50 min-h-screen pb-24">
      <div className="bg-white border-b border-stone-200 pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" aria-hidden="true" style={{ backgroundImage: 'radial-gradient(#064e3b 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-4 mb-6"><div className="w-12 h-1.5 bg-emerald-500 rounded-full"></div><span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-800">Therapeutic Kitchen</span></div>
          <h1 className="text-5xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter mb-8 max-w-4xl">Medicinal Food <br/>Protocols</h1>
          <p className="text-2xl text-stone-600 max-w-3xl leading-relaxed font-bold italic border-l-4 border-lime-400 pl-8">Our recipes are mapped to specific metabolic outcomes. Filter by diagnosis to find your cellular reset.</p>
        </div>
      </div>
      <div className="p-6 md:p-12 max-w-7xl mx-auto">
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 mb-10 space-y-6">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:max-w-md">
              <input type="text" placeholder="Search recipes by name, tag, benefit..." value={recipeQuery} onChange={(e) => setRecipeQuery(e.target.value)} className="w-full bg-stone-50 border border-stone-100 p-4 pl-12 rounded-2xl outline-none focus:border-emerald-500 font-medium text-stone-700 placeholder:text-stone-400 transition-all" />
              <span className="absolute left-4 top-4 text-stone-400"><IconSearch size={18} /></span>
              {recipeQuery && <button onClick={() => setRecipeQuery('')} className="absolute right-4 top-4 text-xs font-bold text-stone-400 hover:text-stone-600 uppercase tracking-widest">Clear</button>}
            </div>
            <div className="flex items-center gap-2 self-start md:self-auto"><span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Protocols found:</span><span className="bg-emerald-50 text-emerald-800 text-xs font-black px-2.5 py-1 rounded-md border border-emerald-100">{filtered.length}</span></div>
          </div>
          <div className="space-y-3"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 ml-1">Meal Formats</span><div className="flex flex-wrap gap-2">{[['All','All Meals'],['Main','Healing Mains'],['Salad','Raw & Salads'],['Soup','Restorative Soups'],['Drink','Active Tonics'],['Dessert','Low-Glycemic Treats']].map(([id,label]) => (<button key={id} onClick={() => setRecipeCategory(id)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${recipeCategory === id ? 'bg-emerald-600 text-white shadow-md' : 'bg-stone-50 text-stone-500 hover:bg-emerald-50'}`}>{label}</button>))}</div></div>
          <div className="space-y-3"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 ml-1">Therapeutic Target Circles</span><div className="flex flex-wrap gap-2">{[{id:'All',label:'All Outcomes'},{id:'Metabolic',label:'Metabolic & Blood Sugar'},{id:'Anti-inflammatory',label:'Anti-inflammatory & Joints'},{id:'Gut Health',label:'Gut & Microbiome'},{id:'Detox',label:'Liver & Detoxification'},{id:'Brain Health',label:'Neuro & Cognitive'}].map(c => (<button key={c.id} onClick={() => setRecipeTag(c.id)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${recipeTag === c.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-stone-50 text-stone-500 hover:bg-emerald-50'}`}>{c.label}</button>))}</div></div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {filtered.map(recipe => (
            <CompatLink key={recipe.id} href={`/recipe/${recipe.id}`} className="group bg-white rounded-3xl p-8 border border-stone-100 hover:border-emerald-200 shadow-sm transition-all duration-300 cursor-pointer flex flex-col">
              <div className="flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6 gap-4"><span className="badge-clinical text-[11px] whitespace-nowrap">{recipe.category}</span><span className="text-sm font-black text-emerald-800 font-mono tracking-tighter shrink-0">{recipe.calories} kcal</span></div>
                <h3 className="text-2xl font-black text-emerald-950 brand-font leading-tight mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{recipe.title}</h3>
                <p className="text-stone-600 text-base leading-relaxed mb-6 italic font-medium">{recipe.description}</p>
                <div className="mt-auto pt-6 border-t border-stone-100 flex items-center justify-between text-xs font-black uppercase tracking-widest text-stone-500">
                  <div className="flex flex-wrap gap-2 max-w-[60%]">{recipe.tags.slice(0,3).map((tag,i) => (<span key={i} className="text-xs bg-stone-50 px-3 py-1 border border-stone-100 font-bold">{tag}</span>))}</div>
                  <span className="flex items-center gap-2"><IconUtensils size={14} className="text-emerald-500" /> {recipe.prepTime}</span>
                </div>
              </div>
            </CompatLink>
          ))}
        </div>
        <div className="mt-20"><FAQSection data={RECIPES_FAQS} title="Protocol Clarifications" /></div>
      </div>
    </div>
  );
}
