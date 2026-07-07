'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { BLOG_ARTICLES } from '@/lib/constants';
import { IconLeaf, IconFlask, IconFacebook, IconLinkedIn } from '@/components/Icons';

export function ArticleClientPage({ articleId }: { articleId: string }) {
  const article = BLOG_ARTICLES.find(a => a.id === articleId);
  if (!article) return <div className="p-20 text-center">Article not found</div>;

  return (
    <div className="animate-in fade-in duration-1000 bg-white">
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-20">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-8 flex flex-col space-y-8">
            <div className="flex items-center gap-4"><span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-800">Research Publication</span><div className="h-px flex-grow bg-stone-100"></div><span className="text-[10px] font-mono text-stone-500 uppercase">{article.date}</span></div>
            <h1 className="text-5xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">{article.title}</h1>
            <div className="flex items-center gap-6 pt-4">
              <div className="w-12 h-12 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center text-stone-500"><IconLeaf size={24} /></div>
              <div><p className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Lead Researcher</p><p className="text-lg font-bold text-emerald-950">{article.author}</p></div>
            </div>
          </div>
          <div className="lg:col-span-4 block">
            <div className="p-8 bg-stone-50 rounded-[40px] border border-stone-100 space-y-6">
              <h2 className="text-xs font-black uppercase tracking-widest text-stone-500">Article Metadata</h2>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-stone-100"><span className="text-[10px] font-black uppercase text-emerald-800">Reading Time</span><span className="text-xs font-bold text-stone-600">6 min read</span></div>
                <div className="flex justify-between items-center pb-4 border-b border-stone-100"><span className="text-[10px] font-black uppercase text-emerald-800">Peer Reviewed</span><span className="text-xs font-bold text-emerald-800">Verified</span></div>
                <div className="pt-2"><span className="text-[10px] font-black uppercase text-stone-500 mb-3 block">Categories</span><div className="flex flex-wrap gap-2">{article.tags.map(tag => (<span key={tag} className="px-3 py-1 bg-white border border-stone-200 text-stone-500 text-[9px] font-black uppercase tracking-widest rounded-full">{tag}</span>))}</div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 mb-24">
        <div className="lg:col-span-8">
          <div className="rounded-[48px] overflow-hidden shadow-2xl mb-16 relative bg-emerald-950 h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true"><div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:48px_48px]"></div></div>
            <div className="relative z-10 w-64 h-64 border border-white/5 rounded-[64px] flex items-center justify-center rotate-6"><div className="w-56 h-56 border border-white/10 rounded-[48px] flex items-center justify-center -rotate-12 bg-white/5"><IconFlask size={96} className="text-lime-400/50" /></div></div>
          </div>
          <div className="prose prose-xl prose-stone max-w-none px-4 text-stone-600 leading-[1.8]">
            <div className="first-letter:text-7xl first-letter:font-black first-letter:text-emerald-900 first-letter:mr-3 first-letter:float-left first-letter:leading-[1] whitespace-pre-wrap">{article.content}</div>
          </div>
          <div className="mt-20 p-12 bg-emerald-950 rounded-[48px] text-white flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-lime-400 opacity-10 rounded-full blur-[80px] -translate-x-1/2 -translate-y-1/2" aria-hidden="true"></div>
            <div className="relative z-10"><h3 className="text-2xl font-black brand-font mb-2">Apply this Research</h3><p className="text-emerald-100/70 text-sm italic font-medium">Join our clinical food-as-medicine program.</p></div>
            <CompatLink href="/plans" className="relative z-10 px-10 py-5 bg-lime-400 text-emerald-950 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-lime-300 transition-all shadow-xl shadow-lime-400/20">Get Your Protocol</CompatLink>
          </div>
        </div>
        <aside className="lg:col-span-4">
          <div className="sticky top-28 space-y-12">
            <div className="p-8 bg-stone-50 rounded-[40px] border border-stone-100">
              <div className="text-xs font-black uppercase tracking-[0.3em] text-emerald-800 mb-8 pb-4 border-b border-emerald-100">Share Insights</div>
              <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 p-4 bg-white border border-stone-200 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all text-[10px] font-black uppercase"><IconFacebook size={16} /> Facebook</button>
                <button className="flex items-center justify-center gap-2 p-4 bg-white border border-stone-200 rounded-2xl hover:bg-emerald-50 hover:text-emerald-600 transition-all text-[10px] font-black uppercase"><IconLinkedIn size={16} /> LinkedIn</button>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-xs font-black uppercase tracking-[0.3em] text-stone-400 pl-4">Latest Research</h2>
              <div className="space-y-4">
                {BLOG_ARTICLES.filter(a => a.id !== articleId).slice(0, 3).map(other => (
                  <CompatLink key={other.id} href={`/article/${other.id}`} className="group cursor-pointer p-4 hover:bg-stone-50 rounded-3xl transition-all border border-transparent hover:border-stone-100 block">
                    <p className="text-xs font-black text-emerald-700 uppercase tracking-[0.1em] mb-2">{other.date}</p>
                    <h3 className="font-bold text-emerald-950 leading-tight group-hover:text-emerald-700 transition-colors">{other.title}</h3>
                  </CompatLink>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
