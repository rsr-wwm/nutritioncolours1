'use client';
import { useState } from 'react';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { BLOG_ARTICLES, BLOGS_FAQS } from '@/lib/constants';
import { CategoryType } from '@/lib/types';
import { FAQSection } from '@/components/SharedSections';
import { IconSearch, IconFlask, IconArrowRight } from '@/components/ui/Icons';

export default function BlogsPage() {
  const [blogQuery, setBlogQuery] = useState('');
  const [blogCategory, setBlogCategory] = useState('All');

  const blogCategories = [
    { id: 'All', label: 'All Articles' },
    { id: CategoryType.METABOLIC, label: 'Metabolic Health' },
    { id: CategoryType.COGNITIVE, label: 'Brain & Cognitive' },
    { id: CategoryType.VEGAN, label: 'Plant-Based' },
    { id: CategoryType.NEWS, label: 'Announcements' }
  ];

  const filteredArticles = BLOG_ARTICLES.filter(article => {
    const matchesCategory = blogCategory === 'All' || article.category === blogCategory;
    const matchesSearch = article.title.toLowerCase().includes(blogQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(blogQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(blogQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-white min-h-screen pt-12 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4 space-y-8 lg:sticky lg:top-40 h-fit">
            <div className="flex items-center gap-4"><div className="w-12 h-1.5 bg-lime-400 rounded-full"></div><span className="text-sm font-black uppercase tracking-[0.4em] text-emerald-800">Clinical Journal</span></div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">Latest <br/>Analysis</h1>
            <p className="text-2xl text-stone-600 italic leading-relaxed font-bold">Biochemical deep-dives into metabolic reversal.</p>
            <div className="h-px w-full bg-stone-200"></div>
            <div className="relative w-full">
              <input type="text" placeholder="Search articles..." value={blogQuery} onChange={(e) => setBlogQuery(e.target.value)} className="w-full bg-stone-50 border border-stone-100 p-4 pl-12 rounded-2xl outline-none focus:border-emerald-500 font-medium text-stone-700 transition-all" />
              <span className="absolute left-4 top-4 text-stone-400"><IconSearch size={18} /></span>
              {blogQuery && <button onClick={() => setBlogQuery('')} className="absolute right-4 top-4 text-xs font-bold text-stone-400 hover:text-stone-600 uppercase tracking-widest">Clear</button>}
            </div>
            <div className="flex gap-6">
              <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-100 flex-1 shadow-md"><p className="text-sm font-black text-emerald-800 uppercase tracking-widest mb-3 font-sans">Articles</p><p className="text-4xl font-black text-emerald-950">{filteredArticles.length}</p></div>
              <div className="p-8 bg-stone-50 rounded-2xl border border-stone-200 flex-1 shadow-sm"><p className="text-sm font-black text-stone-500 uppercase tracking-widest mb-3">Format</p><p className="text-4xl font-black text-emerald-950 uppercase">Analysis</p></div>
            </div>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="bg-stone-50 p-4 rounded-2xl border border-stone-100 flex flex-wrap gap-2 mb-4">
              {blogCategories.map(cat => (<button key={cat.id} onClick={() => setBlogCategory(cat.id)} className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${blogCategory === cat.id ? 'bg-emerald-600 text-white shadow-md' : 'bg-white text-stone-600 hover:bg-emerald-50 border border-stone-200/50'}`}>{cat.label}</button>))}
            </div>
            {filteredArticles.length > 0 ? (
              filteredArticles.map(article => (
                <CompatLink key={article.id} href={`/article/${article.id}`} className="group bg-white rounded-3xl p-8 border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col text-left block">
                  <div className="flex justify-between items-start mb-6"><span className="text-xs font-black text-emerald-800 uppercase tracking-[0.3em] bg-emerald-50 px-3 py-1 rounded-sm border border-emerald-100/50">{article.date}</span><div className="flex items-center gap-2"><IconFlask size={16} className="text-emerald-800/50" /><span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest border-b border-stone-100 pb-0.5">{article.category}</span></div></div>
                  <h2 className="text-2xl md:text-3xl font-black text-emerald-950 brand-font leading-tight mb-4 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{article.title}</h2>
                  <div className="flex flex-wrap gap-2 mb-4">{article.tags.map(tag => (<span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-stone-500 border border-stone-200 px-2 py-0.5 bg-stone-50 rounded-sm">{tag}</span>))}</div>
                  <p className="text-stone-600 text-base leading-relaxed mb-6 font-medium italic">{article.excerpt}</p>
                  <div className="mt-auto pt-6 border-t border-stone-50 flex items-center justify-between"><div className="flex items-center gap-2"><span className="text-xs font-black text-stone-500 uppercase tracking-widest">{article.author}</span></div><div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 group-hover:text-emerald-950 transition-colors">Read Clinical Report <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" /></div></div>
                </CompatLink>
              ))
            ) : (
              <div className="p-20 text-center bg-stone-50 rounded-3xl border border-stone-100 shadow-inner space-y-4">
                <span className="text-5xl block">📝</span>
                <h3 className="text-lg font-black text-emerald-950 brand-font uppercase tracking-wider">No articles found</h3>
                <p className="text-stone-500 max-w-sm mx-auto text-sm">Try modifying your filters or search keywords.</p>
                <button onClick={() => { setBlogCategory('All'); setBlogQuery(''); }} className="bg-emerald-600 text-white font-bold px-6 py-2.5 rounded-xl hover:bg-emerald-700 text-xs uppercase tracking-widest transition-colors shadow-md">Reset Articles</button>
              </div>
            )}
          </div>
        </div>
        <div className="mt-20"><FAQSection data={BLOGS_FAQS} title="Editorial FAQs" /></div>
      </div>
    </div>
  );
}
