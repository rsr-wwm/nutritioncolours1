'use client';
import { useState } from 'react';
// // // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility
// // // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { TOPICS } from '@/lib/topics';
import { CategoryType } from '@/lib/types';
import { KNOWLEDGE_FAQS } from '@/lib/constants';
import { FAQSection } from '@/components/SharedSections';
import { IconSearch, IconFlask, IconArrowRight } from '@/components/ui/Icons';
import EditorialPolicy from '@/components/EditorialPolicy';

export default function HealthTopicsPage() {
  const [topicQuery, setTopicQuery] = useState('');
  const [topicCategory, setTopicCategory] = useState('All');

  const topicCategories = [
    { id: 'All', label: 'All Topics' },
    { id: CategoryType.METABOLIC, label: 'Metabolic Reversal' },
    { id: CategoryType.WOMENS, label: "Hormonal & Women's" },
    { id: CategoryType.MENS, label: "Men's Health" },
    { id: CategoryType.DIGESTION, label: 'Gut & Digestion' },
    { id: CategoryType.WEIGHT, label: 'Circadian & Weight' },
    { id: CategoryType.JOINTS, label: 'Musculoskeletal' }
  ];

  const filteredTopics = TOPICS.filter(topic => {
    const matchesCategory = topicCategory === 'All' || topic.category === topicCategory;
    const matchesSearch = topic.title.toLowerCase().includes(topicQuery.toLowerCase()) ||
      topic.shortDesc.toLowerCase().includes(topicQuery.toLowerCase()) ||
      topic.naturalApproach.some(item => item.toLowerCase().includes(topicQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-stone-50/50 min-h-screen pt-12 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2"><div className="w-8 h-1 bg-emerald-500 rounded-full"></div><span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-800">Metabolic Repository</span></div>
            <h1 className="text-4xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">Clinical Health <br/>Topics</h1>
          </div>
          <div className="relative w-full lg:max-w-md">
            <input type="text" placeholder="Search clinical topics..." value={topicQuery} onChange={(e) => setTopicQuery(e.target.value)} className="w-full bg-white border border-stone-200 p-4 pl-12 rounded-2xl outline-none focus:border-emerald-500 font-medium text-stone-700 shadow-sm transition-all" />
            <span className="absolute left-4 top-4 text-stone-400"><IconSearch size={18} /></span>
            {topicQuery && <button onClick={() => setTopicQuery('')} className="absolute right-4 top-4 text-xs font-bold text-stone-400 hover:text-stone-600 uppercase tracking-widest">Clear</button>}
          </div>
        </div>
        <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm mb-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block mb-3 ml-1">Filter by Category</span>
          <div className="flex flex-wrap gap-2">{topicCategories.map(cat => (<button key={cat.id} onClick={() => setTopicCategory(cat.id)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${topicCategory === cat.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-stone-50 text-stone-600 hover:bg-emerald-50'}`}>{cat.label}</button>))}</div>
        </div>
        {filteredTopics.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredTopics.map(topic => (
              <CompatLink key={topic.id} href={`/topic/${topic.id}`} className="group bg-white rounded-3xl p-6 border border-stone-100 hover:border-emerald-200 shadow-sm transition-all duration-300 flex flex-col h-full text-left block">
                <div className="flex justify-between items-start mb-6"><span className="text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">{topic.category}</span><IconFlask size={14} className="text-stone-300 group-hover:text-emerald-500 transition-colors" /></div>
                <h3 className="text-lg font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors brand-font uppercase tracking-tight line-clamp-2 min-h-[3.5rem]">{topic.title}</h3>
                <p className="text-stone-500 text-[11px] leading-relaxed mb-6 flex-grow line-clamp-2 italic">{topic.shortDesc}</p>
                <div className="flex flex-wrap gap-1 mb-6">{topic.naturalApproach.slice(0, 3).map((item, i) => (<span key={i} className="text-[7px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-1 border border-red-200/20">{item}</span>))}</div>
                <div className="mt-auto pt-4 border-t border-stone-50 opacity-60 flex items-center justify-between"><span className="text-[10px] font-black font-mono text-emerald-800 tracking-widest">CLINICAL DOC: {topic.id.toUpperCase()}</span><IconArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" /></div>
              </CompatLink>
            ))}
          </div>
        ) : (
          <div className="p-20 text-center bg-white rounded-3xl border border-stone-100 shadow-sm space-y-4">
            <span className="text-5xl block">🔍</span>
            <h3 className="text-lg font-black text-emerald-950 brand-font uppercase tracking-wider">No matching topics found</h3>
            <p className="text-stone-500 max-w-sm mx-auto text-sm">Verify your spelling or try resetting the filters.</p>
            <button onClick={() => { setTopicCategory('All'); setTopicQuery(''); }} className="bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-700 text-xs uppercase tracking-widest transition-colors shadow-md">Reset Search</button>
          </div>
        )}
        <div className="mt-20"><FAQSection data={KNOWLEDGE_FAQS} title="Knowledge Base FAQs" /></div>
      </div>
    </div>
  );
}
