#!/bin/bash
# Generate all Next.js page files for NutritionColours migration
BASE="/Users/apple/Downloads/nutritioncolours/nutritioncolours-next/src/app"

# ==================== HOME PAGE ====================
cat > "$BASE/page.tsx" << 'ENDOFFILE'
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
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
                  <Link href="/plans"><button className="w-full bg-lime-400 text-emerald-950 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all shadow-2xl shadow-lime-400/20 transform hover:translate-x-2 active:scale-95 group flex items-center justify-between"><span>Reclaim Biological Freedom</span><IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></button></Link>
                  <Link href="/about"><button className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/20 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:translate-x-2 active:scale-95 group flex items-center justify-between"><span>Stop Calorie Counting</span><IconCheck size={16} className="text-lime-400" /></button></Link>
                  <Link href="/connect"><button className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/10 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:translate-x-2 active:scale-95 group flex items-center justify-between"><span>Join Medicine-Free Hub</span><IconFlask size={16} className="text-lime-400" /></button></Link>
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
                  <Link href="/team/shilpa"><button className="bg-emerald-900 text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-emerald-900/10">Meet Dr. Shilpa Thakur <IconArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></button></Link>
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
                    <Link href="/plans"><button className="w-full py-4 rounded-2xl bg-emerald-900 text-white font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-colors mt-auto flex items-center justify-center gap-3">View Protocol <IconArrowRight size={14} /></button></Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 py-12 border-t border-stone-100">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div><span className="text-xs font-black text-emerald-800 uppercase tracking-[0.4em] mb-2 block">Protocol Library</span><h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font tracking-tight">Clinical Diagnosis Hub</h2></div>
            <Link href="/knowledge/health-topics" className="bg-emerald-50 text-emerald-700 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-100 transition-all flex items-center justify-center">Explore All Clinical Health Topics</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {topicsData.slice(0, 12).map((topic) => (
              <Link key={topic.id} href={`/topic/${topic.id}`} className="bg-white border border-stone-100 p-6 rounded-3xl hover:border-emerald-200 hover:shadow-xl transition-all cursor-pointer group flex flex-col h-full">
                <div className="w-10 h-10 rounded-xl bg-stone-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-all"><IconFlask size={18} /></div>
                <h3 className="text-xs font-black text-emerald-950 uppercase tracking-tight leading-tight group-hover:text-emerald-700 transition-colors mb-2">{topic.title}</h3>
                <p className="text-xs text-stone-600 font-bold uppercase tracking-widest mt-auto">{topic.category}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
            <div><div className="flex items-center gap-2 mb-2"><div className="w-8 h-px bg-emerald-500"></div><span className="text-emerald-800 font-black uppercase tracking-widest text-xs">Proof of Concept</span></div><h2 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font mt-2">Life Transformed</h2></div>
            <Link href="/testimonials" className="px-8 py-3 bg-stone-100 text-stone-600 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-50 hover:text-emerald-700 transition-all flex items-center justify-center">Read All Patient Success Stories</Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
        </div>
        <div className="max-w-7xl mx-auto px-6 py-6 border-t border-stone-100">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
            <div><div className="flex items-center gap-2 mb-2"><div className="w-8 h-px bg-emerald-500"></div><span className="text-xs font-black uppercase tracking-widest text-emerald-800">Kitchen Laboratory</span></div><h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font tracking-tight">Clinical Recipes</h2></div>
            <Link href="/recipes" className="text-xs font-black text-emerald-800 border-b-2 border-emerald-200 pb-1 hover:border-emerald-500 transition-all">View All Healing Recipes</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {RECIPES.slice(0,4).map(recipe => (
              <Link key={recipe.id} href={`/recipe/${recipe.id}`} className="group flex flex-col bg-white rounded-2xl p-6 border border-stone-100 hover:shadow-xl transition-all duration-300 text-left block">
                <div>
                  <div className="flex justify-between items-start mb-3"><span className="text-[10px] font-black text-emerald-800 uppercase tracking-widest">{recipe.category}</span><div className="flex gap-1">{recipe.tags.slice(0, 1).map((tag, i) => (<span key={i} className="text-[10px] font-bold text-stone-600 border border-stone-200 px-2 rounded-sm">{tag}</span>))}</div></div>
                  <h3 className="text-base font-black text-emerald-950 brand-font leading-tight group-hover:text-emerald-700 transition-colors uppercase tracking-tight line-clamp-2 mb-2">{recipe.title}</h3>
                  <div className="flex items-center gap-2 text-xs font-bold text-stone-600 uppercase tracking-widest"><IconUtensils size={12} className="text-emerald-500" /><span>{recipe.prepTime}</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {BANNERS.map(banner => (
              <Link key={banner.id} href="/plans" className="group flex flex-col justify-center items-center text-center rounded-3xl bg-emerald-950 p-10 cursor-pointer shadow-sm hover:shadow-lg border border-white/5 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px]" aria-hidden="true"></div>
                <div className="relative z-10 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lime-400 mb-6 group-hover:bg-lime-400 group-hover:text-emerald-950 transition-all duration-500"><IconFlask size={24} /></div>
                <h3 className="relative z-10 text-xl font-black mb-2 text-white brand-font leading-tight">{banner.title}</h3>
                <p className="relative z-10 text-emerald-400 text-[10px] uppercase tracking-widest font-black">{banner.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 pb-24">
          <div className="text-center mb-12"><span className="text-emerald-700 font-black uppercase tracking-[0.3em] text-xs">Global Community</span><h2 className="text-3xl md:text-5xl font-black text-emerald-950 brand-font mt-2">Join Our Digital Tribe</h2><p className="text-stone-500 max-w-2xl mx-auto mt-4 text-sm leading-relaxed">Clinical wisdom for everyone. Join over <strong>100,000+</strong> wellness seekers.</p></div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[{icon: IconLinkedIn, bg: 'bg-[#005c8e]', label: 'LinkedIn'}, {icon: IconFacebook, bg: 'bg-[#165bb4]', label: 'Facebook'}, {icon: IconInstagram, bg: 'bg-gradient-to-tr from-[#96126d] via-[#b3143c] to-[#d66511]', label: 'Instagram'}, {icon: IconYouTube, bg: 'bg-[#c00000]', label: 'YouTube'}, {icon: IconTwitter, bg: 'bg-black', label: 'Twitter'}, {icon: IconQuora, bg: 'bg-[#96201c]', label: 'Quora'}].map((social, i) => (
              <Link key={i} href="/connect"><button className={`${social.bg} text-white p-8 rounded-[40px] shadow-lg group hover:scale-[1.05] transition-all duration-300 flex flex-col items-center justify-center gap-4 w-full`}><social.icon size={32} className="group-hover:scale-110 transition-transform" /><span className="text-[10px] font-black uppercase tracking-[0.2em]">{social.label}</span></button></Link>
            ))}
          </div>
        </div>
        <FAQSection data={HOME_FAQS} title="NutritionColours Basics" />
      </div>
    </LazyMotion>
  );
}
ENDOFFILE

echo "Home page created"

# ==================== ABOUT PAGE ====================
cat > "$BASE/about/page.tsx" << 'ENDOFFILE'
'use client';
import Link from 'next/link';
import { ABOUT_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconLeaf, IconFileText, IconCheck, IconSearch, IconArrowRight } from '@/components/Icons';

export default function AboutPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-24">
      <div className="space-y-16">
        <SectionHeading subtitle="Philosophy" title="Our Approach" isMain={true} />
        <div className="max-w-4xl space-y-6">
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
            <div className="p-10 bg-emerald-50 rounded-[40px] border border-emerald-100 shadow-sm">
              <h2 className="text-3xl font-black text-emerald-950 brand-font mb-4">The Modern Health Crisis</h2>
              <p className="text-lg text-stone-600 leading-relaxed">In a world where lifestyle disorders like obesity, thyroid dysfunction, diabetes, and PCOD are normalized, conventional medicine often focuses on symptom management. At NutritionColours, we assert that true healing requires a root-cause approach that addresses the foundational triggers of disease.</p>
            </div>
            <p className="px-4">Our bedrock belief is that most diseases begin in the kitchen, and therefore, the first and most effective medicine should be sourced from the kitchen. We blend ancient Ayurvedic wisdom with modern nutritional science to help you heal naturally.</p>
          </div>
        </div>
      </div>
      <div className="space-y-16">
        <SectionHeading subtitle="Service Excellence" title="The Four Pillars of Healing" isMain={false} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Root-Cause Focused Healing', desc: 'We go beyond symptom management to reverse diseases from their roots using whole plant-based foods.', icon: <IconLeaf size={32} /> },
            { title: 'Personalised Medical Nutrition', desc: 'Exhaustively customized protocols based on your specific medical diagnosis, lifestyle, and biochemical imbalances.', icon: <IconFileText size={32} /> },
            { title: 'Lifestyle Disorders Reversal', desc: 'Directly addressing systemic issues like insulin resistance and chronic inflammation through functional nutrition.', icon: <IconCheck size={32} /> },
            { title: 'Education & Empowerment', desc: 'Providing the tools to understand your body, moving far beyond simply handed-out diet charts.', icon: <IconSearch size={32} /> }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-lg hover:shadow-2xl transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">{pillar.icon}</div>
              <h3 className="text-xl font-black text-emerald-950 mb-4 brand-font leading-tight">{pillar.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-emerald-950 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px]" aria-hidden="true"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="text-lime-400 font-black uppercase tracking-[0.4em] text-[10px]">Our Vision</span>
          <h2 className="text-4xl md:text-6xl font-black text-white brand-font leading-tight">Sparking a Food-as-Medicine Revolution</h2>
          <p className="text-emerald-100/70 text-lg md:text-xl leading-relaxed">To educate the world that food is chemistry, therapy, and pure biological energy. We aim to reduce dependency on long-term medications and make natural, sustainable healing accessible to every home.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <Link href="/plans"><button className="bg-lime-400 text-emerald-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-300 transition-all">Start Your Journey</button></Link>
            <Link href="/contact"><button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Speak to an Expert</button></Link>
          </div>
        </div>
      </div>
      <FAQSection data={ABOUT_FAQS} title="Philosophy FAQs" />
    </div>
  );
}
ENDOFFILE

echo "About page created"
echo "Script part 1 complete"


# ==================== PLANS PAGES ====================
cat > "$BASE/plans/page.tsx" << 'ENDOFFILE'
'use client';
import Link from 'next/link';
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
                <Link href="/contact"><button className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-400 transition-all cursor-pointer">Secure Early Slot</button></Link>
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
                  <Link href={`/plans/${slug}`}><button className="w-full py-4 rounded-2xl font-black uppercase tracking-[0.15em] text-xs transition-all bg-stone-50 text-emerald-900 border border-stone-200 hover:border-emerald-200 hover:bg-emerald-50">View Full Protocol</button></Link>
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
          <Link href="/tools"><button className="shrink-0 bg-lime-400 hover:bg-lime-300 text-emerald-950 font-black uppercase tracking-widest text-xs px-8 py-5 rounded-2xl transition-all shadow-lg hover:scale-105 active:scale-95 duration-200 cursor-pointer">Start Rhythm Audit</button></Link>
        </div>
        <MedicalDisclaimerBanner />
        <FAQSection data={PLANS_FAQS} title="Program FAQs" />
      </div>
    </div>
  );
}
ENDOFFILE

# Plan detail pages - create a shared component approach
for slug in metabolic-mastery therapeutic-reversal cellular-resurrection; do
  cat > "$BASE/plans/$slug/page.tsx" << ENDOFFILE
'use client';
import Link from 'next/link';
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
  const planSlug = '$slug';
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
              <Link href="/plans"><button className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl border border-white/10 text-xs font-black uppercase tracking-widest transition-all flex items-center gap-3"><IconArrowRight size={16} className="rotate-180" /> Back to Catalog</button></Link>
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
                <Link href="/contact"><button className="w-full bg-white text-emerald-950 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-400 transition-all cursor-pointer">Secure Early Slot</button></Link>
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
                <Link href="/contact"><button className="w-full bg-emerald-900 text-white py-6 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-emerald-800 transition-all shadow-xl shadow-emerald-900/20 flex items-center justify-center gap-4 group">Secure Your Consultation <IconArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></button></Link>
                <p className="text-center text-stone-500 text-[10px] font-bold uppercase tracking-widest mt-6 italic">Program admission subject to clinical evaluation and initial screening.</p>
              </div>
            </div>
          </div>
          <div className="px-10 pb-6"><MedicalDisclaimerBanner /></div>
          <div className="p-10 border-t border-stone-100"><FAQSection data={getDynamicCategoryFaqs('plans/$slug', null)} title="Program Specific FAQs" /></div>
        </div>
        <FAQSection data={PLANS_FAQS} title="Program FAQs" />
      </div>
    </div>
  );
}
ENDOFFILE
  echo "Plan detail page created: $slug"
done

echo "Plans pages complete"
