'use client';
import { useState, useEffect } from 'react';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { BANNERS, PLANS, TESTIMONIALS, TEAM, HOW_IT_WORKS, HOME_FAQS, VEGAN_SUB_TOPICS } from '@/lib/constants';
import { TOPICS } from '@/lib/topics';
import { RECIPES } from '@/lib/recipes_database';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection, MedicalDisclaimerBanner, AnimatedVisual, OrganicBlobs } from '@/components/SharedSections';
import { IconArrowRight, IconCheck, IconFlask, IconLeaf, IconFileText, IconSearch, IconMapPin, IconUser, IconUtensils, IconWand, IconLock, IconInstagram, IconLinkedIn, IconTwitter, IconFacebook, IconYouTube, IconQuora } from '@/components/Icons';
import { m, AnimatePresence, LazyMotion, domAnimation } from 'framer-motion';

const HeroSlider = ({ banners, onNavigate }: { banners: typeof BANNERS; onNavigate: (path: string) => void }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent(prev => (prev + 1) % banners.length), 6000);
    return () => clearInterval(timer);
  }, [banners.length]);
  return (
    <div className="relative w-full min-h-[680px] md:min-h-[550px] md:h-[65vh] lg:h-[75vh] bg-emerald-950 overflow-hidden">
      <AnimatePresence mode="wait" initial={false}>
        {banners.map((banner, i) => i === current && (
          <m.div key={banner.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1.2 }} className="absolute inset-0 group">
            <AnimatedVisual type={banner.id} />
            <div className="absolute inset-0 z-20 bg-gradient-to-r from-emerald-950 via-emerald-950/70 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent"></div>
            <div className="relative z-30 min-h-full w-full max-w-7xl mx-auto px-6 flex flex-col justify-center md:grid md:grid-cols-12 md:items-center gap-6 md:gap-12 pt-28 pb-16 md:py-12">
              <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-6 md:space-y-10">
                <m.div initial={{ x: -60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.4, duration: 1 }} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-[2px] bg-lime-400"></div>
                    <span className="text-lime-400 text-[10px] font-black uppercase tracking-[0.6em] block drop-shadow-md">Clinical Metabolic Protocol</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black brand-font leading-[0.9] md:leading-[0.85] tracking-tighter text-white">
                    {banner.title.split(' ').map((word, index) => (<span key={index} className={index % 2 === 1 ? 'text-lime-400' : ''}>{word} </span>))}
                  </h1>
                  <div className="max-w-xl">
                    <p className="text-lg md:text-2xl text-emerald-50/80 leading-relaxed font-black border-l-4 border-lime-400 pl-8 italic">{banner.subtitle}</p>
                  </div>
                </m.div>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-start">
                <m.div initial={{ x: 60, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 1 }} className="flex flex-col gap-4 w-full max-w-[320px]">
                  <CompatLink href="/plans"><button className="w-full bg-lime-400 text-emerald-950 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all shadow-2xl shadow-lime-400/20 transform hover:translate-x-2 active:scale-95 group flex items-center justify-between"><span>Reclaim Biological Freedom</span><IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></button></CompatLink>
                  <CompatLink href="/about"><button className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/20 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:translate-x-2 active:scale-95 group flex items-center justify-between"><span>Stop Calorie Counting</span><IconCheck size={16} className="text-lime-400" /></button></CompatLink>
                  <CompatLink href="/connect"><button className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/10 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:translate-x-2 active:scale-95 group flex items-center justify-between"><span>Join Medicine-Free Hub</span><IconFlask size={16} className="text-lime-400" /></button></CompatLink>
                </m.div>
              </div>
            </div>
          </m.div>
        ))}
      </AnimatePresence>
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30 items-center">
        {banners.map((_, i) => (
          <button key={i} onClick={() => setCurrent(i)} className="h-12 w-12 transition-all focus:outline-none flex items-center justify-center rounded-full" aria-label={`Go to slide ${i + 1}`}>
            <span className={`h-1.5 rounded-full transition-colors duration-500 tabular-nums ${i === current ? 'w-10 bg-lime-400' : 'w-3 bg-white/30 hover:bg-white/50'}`} style={{ transformOrigin: 'left center' }} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default function HomePage() {
  const topicsData = TOPICS;
  return (
    <LazyMotion features={domAnimation}>
      <div className="space-y-4 pb-8">
        <div className="relative"><HeroSlider banners={BANNERS} onNavigate={(p) => window.location.href = `/${p}`} /></div>
        <div className="max-w-4xl mx-auto px-6 py-2 text-center animate-in fade-in slide-in-from-bottom-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 text-xs font-black uppercase tracking-[0.2em] border border-emerald-100 mb-6" aria-hidden="true"><IconCheck size={12} /> Science-Based &bull; Holistic &bull; Clinical</div>
          <h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font italic leading-tight">&quot;Most diseases begin in the kitchen, and the first medicine should also come from the kitchen.&quot;</h2>
          <p className="mt-8 text-stone-600 font-black uppercase tracking-widest text-sm">- Dr. Shilpa Thakur, Ph.D.</p>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-emerald-900/5 border border-stone-100 overflow-hidden relative group">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-5 relative h-[300px] md:h-auto overflow-hidden bg-stone-100">
                <div className="absolute inset-0 w-full h-full overflow-hidden transform group-hover:scale-105 transition-transform duration-[3000ms]">
                  <img src={TEAM[0].image} fetchPriority="high" width="699" height="525" className="w-full h-full object-cover object-top" alt="Dr. Shilpa Thakur" referrerPolicy="no-referrer" />
                </div>
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-stone-900/10 to-transparent" aria-hidden="true"></div>
              </div>
              <div className="md:col-span-7 p-6 md:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-stone-50/30">
                <div className="space-y-3">
                  <span className="text-emerald-700 font-black uppercase tracking-[0.3em] text-xs bg-emerald-50 px-4 py-1 rounded-full border border-emerald-100 inline-block">Medical Nutritionist | Founder</span>
                  <h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font leading-tight tracking-tighter">Root-Cause Focused Healing</h2>
                  <div className="flex items-center gap-2 px-3 py-1 bg-emerald-100/50 rounded-lg w-fit"><IconCheck size={14} className="text-emerald-600" /><span className="text-[10px] font-black text-emerald-900 uppercase tracking-widest">{TEAM[0].details}</span></div>
                </div>
                <div className="prose prose-stone max-w-none">
                  <p className="text-lg md:text-xl text-stone-700 leading-relaxed font-bold italic border-l-4 border-lime-400 pl-8 py-2">&quot;Your kitchen is the ultimate hospital. We just provide the clinical manual for metabolic recovery.&quot;</p>
                  <p className="text-stone-600 text-sm md:text-base leading-relaxed mt-6 font-medium">Dr. Shilpa Thakur holds a Ph.D. in Clinical Nutrition and operates as a world-class Metabolic Researcher and Clinical Nutrition Specialist (Non-Medical Practitioner). With over a decade of research experience, she specializes in the design of circadian food protocols and metabolic nutrition systems that optimize chronic wellness and support cellular health by blending ancient Ayurvedic principles with modern nutritional biology.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-6 pt-6 border-t border-stone-200">
                  <CompatLink href="/team/shilpa"><button className="bg-emerald-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-emerald-900/10">Meet Dr. Shilpa Thakur <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></button></CompatLink>
                  <div className="flex items-center justify-center sm:justify-start gap-6 py-2 sm:py-0 sm:px-8 text-stone-500 border-t sm:border-t-0 sm:border-l border-stone-200 sm:border-stone-300 ml-0 sm:ml-4">
                    <a href={TEAM[0].socials?.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" aria-label="LinkedIn"><IconLinkedIn size={24} /></a>
                    <a href={TEAM[0].socials?.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 transition-colors" aria-label="Instagram"><IconInstagram size={24} /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12">
          <SectionHeading subtitle="Success Path" title="The Healing Process" />
          <div className="grid md:grid-cols-4 gap-8">
            {HOW_IT_WORKS.map((item, i) => (
              <div key={i} className="relative bg-white p-10 rounded-[32px] shadow-lg shadow-emerald-900/5 border border-stone-100 hover:shadow-2xl hover:border-emerald-100 transition-all group overflow-hidden">
                <svg aria-hidden="true" className="absolute top-0 right-0 w-32 h-24 -mr-4 -mt-4 group-hover:scale-110 transition-transform select-none pointer-events-none" viewBox="0 0 100 80"><text x="100" y="70" textAnchor="end" fontSize="72" fontWeight="900" fill="none" stroke="rgba(4, 120, 87, 0.1)" strokeWidth="1.5">0{i+1}</text></svg>
                <div className="relative z-10 w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  {item.icon === 'Search' && <IconSearch size={32} />}{item.icon === 'FileText' && <IconFileText size={32} />}{item.icon === 'Leaf' && <IconLeaf size={32} />}{item.icon === 'Check' && <IconCheck size={32} />}
                </div>
                <h3 className="relative z-10 text-xl font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{item.title}</h3>
                <p className="relative z-10 text-stone-500 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-stone-50 py-24 text-emerald-950 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none" aria-hidden="true"><div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:40px_40px]"></div></div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <SectionHeading subtitle="Clinical Care" title="Our Programs" isMain={false} />
            <div className="grid md:grid-cols-3 gap-8">
              {PLANS.map(p => {
                const IconComp = p.id === 'plan-1' ? IconLeaf : p.id === 'plan-2' ? IconWand : IconLock;
                return (
                  <div key={p.id} className="bg-white rounded-[40px] shadow-xl border border-stone-100 hover:border-emerald-500 hover:shadow-2xl transition-all group p-10 flex flex-col h-full">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 font-black"><IconComp size={32} /></div>
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-800 mb-2 block">{p.idealFor}</span>
                    <h3 className="text-2xl font-black mb-4 brand-font text-emerald-950">{p.name}</h3>
                    <p className="text-stone-600 text-sm mb-8 leading-relaxed line-clamp-3 font-medium">{p.description}</p>
                    <CompatLink href="/plans"><button className="w-full py-4 rounded-2xl bg-emerald-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-colors mt-auto flex items-center justify-center gap-3">View Protocol <IconArrowRight size={14} /></button></CompatLink>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div><span className="text-xs font-black text-emerald-800 uppercase tracking-[0.4em] mb-2 block">Protocol Library</span><h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font tracking-tight">Clinical Diagnosis Hub</h2></div>
            <CompatLink href="/knowledge/health-topics" className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-100 transition-all flex items-center justify-center">Explore All Clinical Health Topics</CompatLink>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topicsData.slice(0, 12).map((topic) => (
              <CompatLink key={topic.id} href={`/topic/${topic.id}`} className="bg-white border border-stone-100 p-6 rounded-3xl hover:border-emerald-200 hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all"><IconFlask size={18} /></div>
                <h3 className="text-xs font-black text-emerald-950 uppercase tracking-tight leading-tight group-hover:text-emerald-700 transition-colors mb-2">{topic.title}</h3>
                <p className="text-xs text-stone-600 font-bold uppercase tracking-widest mt-auto">{topic.category}</p>
              </CompatLink>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div><div className="flex items-center gap-2 mb-2"><div className="w-8 h-px bg-emerald-500"></div><span className="text-emerald-800 font-black uppercase tracking-widest text-xs">Proof of Concept</span></div><h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font mt-2">Life Transformed</h2></div>
            <CompatLink href="/testimonials" className="px-8 py-3 bg-stone-100 text-stone-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-50 hover:text-emerald-700 transition-all flex items-center justify-center">Read All Patient Success Stories</CompatLink>
          </div>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-10 rounded-[32px] shadow-sm border border-stone-100 hover:shadow-xl transition-all relative">
                <div aria-hidden="true" className="text-5xl text-emerald-100 font-serif absolute top-6 left-6 -z-0 opacity-50">&quot;</div>
                <div className="relative z-10">
                  <p className="text-stone-600 italic leading-relaxed text-sm mb-8">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm"><IconUser size={20} /></div>
                    <div><div className="font-bold text-emerald-950 text-sm">{t.name}</div><span className="text-xs uppercase font-black text-emerald-800 tracking-widest">{t.condition}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Mobile: horizontal scroll gallery */}
          <div className="testimonials-scroll-gallery md:hidden">
            {TESTIMONIALS.map(t => (
              <div key={t.id} className="bg-white p-10 rounded-[32px] shadow-sm border border-stone-100 flex-shrink-0">
                <div aria-hidden="true" className="text-5xl text-emerald-100 font-serif absolute top-6 left-6 -z-0 opacity-50">&quot;</div>
                <div className="relative z-10">
                  <p className="text-stone-600 italic leading-relaxed text-sm mb-8">&quot;{t.text}&quot;</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 border border-emerald-100 shadow-sm"><IconUser size={20} /></div>
                    <div><div className="font-bold text-emerald-950 text-sm">{t.name}</div><span className="text-xs uppercase font-black text-emerald-800 tracking-widest">{t.condition}</span></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div><div className="flex items-center gap-2 mb-2"><div className="w-8 h-px bg-emerald-500"></div><span className="text-xs font-black uppercase tracking-widest text-emerald-800">Kitchen Laboratory</span></div><h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font tracking-tight">Clinical Recipes</h2></div>
            <CompatLink href="/recipes" className="text-xs font-black text-emerald-800 border-b-2 border-emerald-200 pb-1 hover:border-emerald-500 transition-all">View All Healing Recipes</CompatLink>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECIPES.slice(0,4).map(recipe => (
              <CompatLink key={recipe.id} href={`/recipe/${recipe.id}`} className="group flex flex-col bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl transition-all duration-300 text-left block">
                <div>
                  <div className="flex justify-between items-start mb-3"><span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">{recipe.category}</span><div className="flex gap-1">{recipe.tags.slice(0, 1).map((tag, i) => (<span key={i} className="text-[10px] font-bold text-stone-600 border border-stone-200 px-2 rounded-sm">{tag}</span>))}</div></div>
                  <h3 className="text-base font-black text-emerald-950 brand-font leading-tight group-hover:text-emerald-700 transition-colors uppercase tracking-tight line-clamp-2 mb-2">{recipe.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-600 uppercase tracking-widest"><IconUtensils size={12} className="text-emerald-500" /><span>{recipe.prepTime}</span></div>
                </div>
              </CompatLink>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {BANNERS.map(banner => (
              <CompatLink key={banner.id} href="/plans" className="group flex flex-col justify-center items-center text-center rounded-3xl bg-emerald-950 p-10 cursor-pointer shadow-sm hover:shadow-lg border border-white/5 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true"></div>
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-emerald-950 transition-all duration-500"><IconFlask size={24} /></div>
                <h3 className="relative z-10 text-xl font-black mb-2 text-white brand-font leading-tight">{banner.title}</h3>
                <p className="relative z-10 text-emerald-400 text-[10px] uppercase tracking-widest font-black">{banner.subtitle}</p>
              </CompatLink>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center mb-12"><span className="text-emerald-700 font-black uppercase tracking-[0.3em] text-xs">Global Community</span><h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font mt-2">Join Our Digital Tribe</h2><p className="text-stone-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">Clinical wisdom for everyone. Join over <strong>100,000+</strong> wellness seekers.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[{icon: IconLinkedIn, bg: 'bg-[#005c8e]', label: 'LinkedIn'}, {icon: IconFacebook, bg: 'bg-[#165bb4]', label: 'Facebook'}, {icon: IconInstagram, bg: 'bg-gradient-to-tr from-[#96126d] via-[#b3143c] to-[#d66511]', label: 'Instagram'}, {icon: IconYouTube, bg: 'bg-[#c00000]', label: 'YouTube'}, {icon: IconTwitter, bg: 'bg-black', label: 'Twitter'}, {icon: IconQuora, bg: 'bg-[#96201c]', label: 'Quora'}].map((social, i) => (
              <CompatLink key={i} href="/connect"><button className={`${social.bg} text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4 w-full`}><social.icon size={32} className="group-hover:scale-110 transition-transform" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">{social.label}</span></button></CompatLink>
            ))}
          </div>
        </div>
        <FAQSection data={HOME_FAQS} title="NutritionColours Basics" />
      </div>
    </LazyMotion>
  );
}
