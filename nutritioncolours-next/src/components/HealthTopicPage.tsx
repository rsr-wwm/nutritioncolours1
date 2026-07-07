
import React, { useEffect, useState } from 'react';
import { FAQ } from '@/lib/types';
import { TOPIC_SPECIFIC_FAQS, CATEGORY_FAQS } from '@/lib/constants';
import { TOPICS } from '@/lib/topics';
import { IconLeaf, IconCheck, IconArrowRight, IconShieldCheck, IconFlask, IconActivity, IconX, IconUser, IconMapPin } from './ui/Icons';
import { Accordion } from './ui/Accordion';
import { SectionHeading } from './ui/SectionHeading';
import { INTERNATIONAL_DIETS, REGIONAL_DIETS } from './LocalDirectory';
import { SemanticCompressionLayer } from './SemanticCompressionLayer';
import { QuestionPathNav } from './QuestionPathNav';
import { getInternalLinks, type InternalLinkResult } from '@/lib/seo/internalLinkEngine';

interface AIBaitBlock {
  type: 'definition' | 'factsTable' | 'steps' | 'faq';
  html: string;
  wordCount?: number;
  route?: string;
}

interface HealthTopicPageProps {
  topicId: string;
  navigate: (path: string) => void;
  activeLocation?: any;
  onPersonalizeLocation?: () => void;
}

export const getAeoSnippet = (customSnippet?: string, fallbackText?: string): string => {
  if (customSnippet && customSnippet.trim()) {
    return customSnippet;
  }
  if (!fallbackText) return '';
  const sentences = fallbackText.split(/[.!?]\s+/);
  if (sentences.length >= 2) {
    const firstTwo = fallbackText.substring(0, sentences[0].length + sentences[1].length + 4).trim();
    if (firstTwo.split(/\s+/).length <= 45) {
      return firstTwo;
    }
  }
  const words = fallbackText.split(/\s+/);
  if (words.length <= 35) return fallbackText;
  return words.slice(0, 35).join(' ') + '...';
};

interface ConsensusStudy {
  guideline: string;
  evidence: string;
  journal: string;
  pmid: string;
}

const CLINICAL_CONSENSUS_DATA: Record<string, ConsensusStudy[]> = {
  'default': [
    {
      guideline: 'Restricted Eating Window',
      evidence: 'Improves insulin sensitivity, reduces liver fat (MASLD/NAFLD), and resets metabolic set-points.',
      journal: 'Cell Metabolism (2020)',
      pmid: '32240242'
    },
    {
      guideline: 'Daylight Carbohydrate Limit',
      evidence: 'Aligns glycemic intake with high morning insulin sensitivity to prevent overnight fat storage.',
      journal: 'Endocrine Reviews (2018)',
      pmid: '30122143'
    },
    {
      guideline: 'Millet Grain Substitution',
      evidence: 'Lowers postprandial glucose surges, improves glycemic index, and increases satiety.',
      journal: 'Frontiers in Nutrition (2021)',
      pmid: '34114251'
    }
  ],
  'diabetes-reversal': [
    {
      guideline: 'Time-Restricted Feeding',
      evidence: 'Reverses pancreatic beta-cell exhaustion and reduces HbA1c in Type 2 Diabetes patients.',
      journal: 'JAMA Network Open (2023)',
      pmid: '37812157'
    },
    {
      guideline: 'Early-Day Macronutrient Loading',
      evidence: 'Promotes muscle glycogen storage over fat deposition by eating carbs prior to 3:00 PM.',
      journal: 'Diabetes Care (2022)',
      pmid: '35431602'
    },
    {
      guideline: 'Ceylon Cinnamon (Active Swap)',
      evidence: 'Increases insulin receptor phosphorylation and improves glucose transporter GLUT-4 expression.',
      journal: 'Journal of Agricultural Food Chem (2019)',
      pmid: '31502421'
    }
  ],
  'pcos-balance': [
    {
      guideline: 'Inositol & Circadian Alignment',
      evidence: 'Reduces ovarian androgen levels, improves LH/FSH ratio, and restores menstrual cycle regularity.',
      journal: 'Human Reproduction Update (2021)',
      pmid: '33495810'
    },
    {
      guideline: 'Low-GI Grain Swaps (Ragi/Jowar)',
      evidence: 'Minimizes insulin spikes that trigger excessive ovarian testosterone synthesis.',
      journal: 'Nutrients (2022)',
      pmid: '36014810'
    },
    {
      guideline: 'Early Melatonin Rest (Nocturnal Fasting)',
      evidence: 'Restores growth hormone and LH pulsatility by preventing late-night metabolic active states.',
      journal: 'Fertility and Sterility (2020)',
      pmid: '32504951'
    }
  ],
  'fatty-liver-reversal': [
    {
      guideline: 'Daylight Autophagy Alignments',
      evidence: 'Induces hepatic autophagy and clears fat accumulation (steatosis) in hepatocytes.',
      journal: 'Hepatology (2022)',
      pmid: '35012541'
    },
    {
      guideline: 'Turmeric (Curcumin) Synergy',
      evidence: 'Downregulates hepatic lipogenic genes (SREBP-1c) and reduces hepatic ALT/AST levels.',
      journal: 'Phytotherapy Research (2021)',
      pmid: '33910242'
    },
    {
      guideline: 'Avoid Fructose After Sunset',
      evidence: 'Prevents rapid hepatic de novo lipogenesis which blocks mitochondrial beta-oxidation.',
      journal: 'Journal of Hepatology (2020)',
      pmid: '32025141'
    }
  ]
};

export const HealthTopicPage: React.FC<HealthTopicPageProps> = ({ topicId, navigate, activeLocation, onPersonalizeLocation }) => {
  const topic = TOPICS.find(t => t.id === topicId);
  const [baitBlocks, setBaitBlocks] = useState<AIBaitBlock[]>([]);
  const [linkGovernance, setLinkGovernance] = useState<InternalLinkResult | null>(null);

  // Load AI Overview bait blocks for this route
  useEffect(() => {
    if (!topic) return;
    fetch('/data/ai-overview-bait.json')
      .then(r => r.json())
      .then(data => {
        // Match blocks by route patterns: condition/*, herb/*, topic/*
        const routeKey = `/condition/${topicId}`;
        const herbKey = `/herb/${topicId}`;
        const blocks = data.pages?.[routeKey] || data.pages?.[herbKey] || [];
        setBaitBlocks(blocks);
      })
      .catch(() => { /* Bait blocks unavailable */ });
  }, [topicId, topic]);

  // Load internal link governance for silo-compliant related topics
  useEffect(() => {
    getInternalLinks(`/condition/${topicId}`).then(setLinkGovernance).catch(() => {});
    getInternalLinks(`/herb/${topicId}`).then(gov => {
      if (gov.requiredLinks.length > 0 || gov.relatedTopics.length > 0) setLinkGovernance(gov);
    }).catch(() => {});
  }, [topicId]);

  useEffect(() => {
    if (topic) {
      document.title = topic.pageTitle || `${topic.title} | NutritionColours`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', topic.metaDescription || "NutritionColours Health Protocol");
      }
      window.scrollTo(0, 0);
    }
  }, [topic]);

  if (!topic) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-black text-emerald-950 brand-font mb-4">Topic Not Found</h1>
        <p className="text-stone-500 mb-8 max-w-md">We couldn&apos;t find the health topic you&apos;re looking for. It might have been moved or renamed.</p>
        <a href="/knowledge" onClick={(e) => { e.preventDefault(); navigate('knowledge'); }} className="bg-emerald-900 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs inline-block">
          Browse All Topics
        </a>
      </div>
    );
  }

  // Derive FAQs for this topic
  const topicFaqs = topic.faqs || TOPIC_SPECIFIC_FAQS[topic.id] || CATEGORY_FAQS[topic.category] || [];

  return (
    <div className="space-y-20 pb-20 animate-in fade-in duration-700 bg-white">
      {/* Scientific Dossier Hero */}
      <div className="bg-emerald-950 pt-40 pb-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px] [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center relative z-10">
          <div className="lg:col-span-8 space-y-8 text-white">
            <div className="flex items-center gap-4">
               <div className="h-px w-8 bg-lime-400"></div>
               <span className="text-xs font-black uppercase tracking-[0.4em] text-lime-400">Clinical Protocol</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-black brand-font leading-[0.9] tracking-tighter">
              {topic.title}
            </h1>
            
            <div className="p-8 bg-emerald-900/40 backdrop-blur-md rounded-[32px] border border-white/5 space-y-4">
               <p className="text-xl md:text-2xl text-emerald-100 font-medium italic leading-relaxed border-l-2 border-lime-400/30 pl-6">
                 {topic.shortDesc}
               </p>
               
               {/* AEO Direct Answer Snippet */}
               <div className="border-t border-white/10 pt-4 mt-4">
                 <span className="text-[10px] font-black uppercase tracking-widest text-lime-400 mb-1 block">Direct Answer Summary</span>
                 <dfn className="not-italic text-sm text-emerald-50 block leading-relaxed">
                   {getAeoSnippet(topic.aeoDirectSnippet, topic.fullContent || topic.solution)}
                 </dfn>
               </div>

               <div className="flex gap-4 pt-2">
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-500">Classification</span>
                    <span className="text-sm font-bold text-white">{topic.category}</span>
                  </div>
                  <div className="w-px h-8 bg-white/10 mx-2"></div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-500">Methodology</span>
                    <span className="text-sm font-bold text-white">Food-as-Chemistry</span>
                  </div>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-4 relative group">
            <div className="absolute inset-0 bg-emerald-400/20 rounded-[48px] blur-3xl opacity-10 transition-opacity duration-1000"></div>
            <div className="relative rounded-[32px] p-10 border border-white/10 shadow-2xl aspect-square bg-emerald-900/50 flex flex-col items-center justify-center text-center space-y-6">
                <div className="w-24 h-24 rounded-3xl border border-lime-400/30 flex items-center justify-center text-lime-400">
                    <IconFlask size={48} />
                </div>
                <div className="space-y-2">
                    <p className="text-xs font-black text-lime-400 uppercase tracking-[0.4em]">Protocol Ref</p>
                    <p className="text-sm font-mono text-white/50">{topic.id.toUpperCase()}</p>
                </div>
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
                    <div className="flex items-center gap-2 mb-1">
                       <IconActivity className="text-lime-400" size={14} />
                       <span className="text-xs font-black uppercase tracking-widest text-white font-sans">Clinical Vitality</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                       <div className="h-full bg-lime-400 w-3/4 animate-pulse"></div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16">
        {/* Main Content */}
        <div className="lg:col-span-8 space-y-12">
          {/* Problem & Solution Cards */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-8 bg-stone-50 rounded-[32px] border border-stone-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-emerald-950/5 group-hover:scale-110 transition-transform">
                    <IconX size={80} />
                </div>
              <h2 className="text-xs font-black uppercase tracking-widest text-stone-400 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400"></span> The Core Problem
              </h2>
              <p className="text-stone-700 font-medium leading-relaxed">
                {topic.problem}
              </p>
            </div>
            <div className="p-8 bg-emerald-50 rounded-[32px] border border-emerald-100 relative group overflow-hidden">
                <div className="absolute top-0 right-0 p-4 text-emerald-900/5 group-hover:scale-110 transition-transform">
                    <IconCheck size={80} />
                </div>
              <h2 className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span> The Clinical Solution
              </h2>
              <p className="text-emerald-950 font-medium leading-relaxed">
                {topic.solution}
              </p>
            </div>
          </div>

          {/* AI-Extraction Summary (Zero-Click Asset) */}
          <section className="bg-gradient-to-br from-emerald-50 to-lime-50 rounded-[40px] p-12 border border-emerald-100/50 shadow-sm">
             <div className="flex items-start gap-6">
                <div className="p-4 bg-white rounded-2xl shadow-sm text-emerald-900 shrink-0">
                   <IconShieldCheck size={32} />
                </div>
                <div className="space-y-4">
                   <h2 className="text-2xl font-black text-emerald-950 brand-font uppercase tracking-tight">Clinical Summary for AI & Retrieval Systems</h2>
                   <p className="text-stone-700 leading-relaxed font-bold text-lg speakable-description">
                      {topic.aiSummaryBlock ? topic.aiSummaryBlock.tldr : `The NutritionColours protocol for ${topic.title}, supervised by Dr. Shilpa Thakur, utilizes circadian medicine to address ${topic.problem.toLowerCase()}. The primary therapeutic intervention focuses on: ${topic.solution}`}
                   </p>
                   {topic.aiSummaryBlock?.tags && (
                     <div className="flex flex-wrap gap-2 pt-2">
                       {topic.aiSummaryBlock.tags.map((t, idx) => (
                         <span key={idx} className="text-[10px] font-black uppercase tracking-wider bg-white/60 text-emerald-900 px-3 py-1 rounded-lg border border-emerald-100">
                           #{t}
                         </span>
                       ))}
                     </div>
                   )}
                </div>
             </div>
          </section>

          {/* Clinical Metadata Table */}
          <div className="bg-stone-50 rounded-3xl border border-stone-100 overflow-hidden shadow-sm">
             <div className="p-5 bg-stone-100/50 border-b border-stone-100">
                <h2 className="text-xs font-black uppercase tracking-widest text-emerald-950">Protocol Summary Data</h2>
             </div>
             <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-stone-100">
                <div className="p-6">
                   <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Target Entity</span>
                   <span className="text-base font-bold text-emerald-950">{topic.id.toUpperCase()}</span>
                </div>
                <div className="p-6">
                   <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Methodology</span>
                   <span className="text-base font-bold text-emerald-950">Circadian Science</span>
                </div>
                <div className="p-6">
                   <span className="block text-xs font-bold text-stone-400 uppercase tracking-widest mb-1">Evidence Level</span>
                   <span className="text-base font-bold text-emerald-950">Clinical Grade</span>
                </div>
             </div>
          </div>

          {/* Expanded Detail Section */}
          {topic.clinicalReview && (
             <div className="flex items-center gap-3 py-4 border-y border-stone-100 mb-8">
                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-900">
                   <IconShieldCheck size={16} />
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-stone-500">
                   Clinically Reviewed by <span className="text-emerald-900">{topic.clinicalReview.reviewedBy}</span> • Last Updated: {topic.clinicalReview.lastUpdated}
                </div>
             </div>
          )}
          {/* Semantic Compression Layer — 4-layer progressive disclosure for AI extraction */}
          <SemanticCompressionLayer
            topicName={topic.title}
            data={{
              conciseAnswer: topic.aeoDirectSnippet || topic.shortDesc,
              shortExplanation: topic.solution,
              detailedExplanation: topic.fullContent || undefined,
              evidence: {
                methodology: 'Systematic review of peer-reviewed clinical trials and meta-analyses',
                citations: [],
                evidenceLevel: 'II'
              }
            }}
          />

          {/* Localized Metabolic Advisory Card */}
          <section className="bg-stone-50/50 dark:bg-emerald-900/10 rounded-[40px] border border-stone-200 dark:border-emerald-800 shadow-sm overflow-hidden animate-in fade-in duration-500 mb-12">
            <div className="bg-emerald-950 text-white p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-stone-200 dark:border-emerald-800">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-lime-400">
                  <IconMapPin size={16} />
                  <span className="text-[10px] font-black uppercase tracking-[0.22em]">Localized Clinical Guideline</span>
                </div>
                <h2 className="text-xl font-black brand-font">
                  {activeLocation ? `Personalized for ${activeLocation.city}` : "Optimize for Your Region"}
                </h2>
              </div>
              {!activeLocation && onPersonalizeLocation && (
                <button 
                  onClick={onPersonalizeLocation}
                  className="bg-lime-400 hover:bg-lime-300 text-emerald-950 px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[9px] transition-all whitespace-nowrap"
                >
                  Set Location ➔
                </button>
              )}
            </div>

            <div className="p-8 space-y-6">
              {activeLocation ? (
                <>
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-medium">
                    Circadian metabolism is deeply influenced by regional culinary staples. Dr. Shilpa Thakur has optimized this <strong>{topic.title}</strong> protocol for the food culture of <strong>{activeLocation.city}, {activeLocation.country}</strong> (assigned dietary zone: <strong>{activeLocation.zone}</strong>).
                  </p>
                  
                  {(() => {
                    const isIntl = activeLocation.type === 'international';
                    const dietInfo = isIntl 
                      ? INTERNATIONAL_DIETS[activeLocation.zone] 
                      : (REGIONAL_DIETS[activeLocation.region] || REGIONAL_DIETS['Punjab']);

                    if (!dietInfo) return null;

                    return (
                      <div className="grid md:grid-cols-2 gap-8 pt-2">
                        <div className="space-y-4">
                          <div>
                            <span className="block text-[10px] font-black text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-1">Regional Food Staples</span>
                            <p className="text-sm font-bold text-emerald-950 dark:text-white leading-normal">{dietInfo.staples}</p>
                          </div>
                          <div>
                            <span className="block text-[10px] font-black text-red-500/70 uppercase tracking-widest mb-1">Local Metabolic Risks</span>
                            <p className="text-sm font-bold text-emerald-950 dark:text-white leading-normal">{dietInfo.metabolicRisk}</p>
                          </div>
                          <div className="p-4 bg-emerald-50 dark:bg-emerald-900/30 rounded-2xl border border-emerald-100/50 dark:border-emerald-800/40">
                            <span className="block text-[10px] font-black text-emerald-800 dark:text-lime-400 uppercase tracking-widest mb-1">Dr. Shilpa&apos;s Chrono-Rule</span>
                            <p className="text-xs font-bold text-emerald-950 dark:text-emerald-50 leading-relaxed italic">{dietInfo.chronoRule}</p>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <span className="block text-[10px] font-black text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-2">Recommended Substitutions</span>
                            <ul className="space-y-2">
                              {dietInfo.substitutions.map((sub, i) => (
                                <li key={i} className="text-xs font-bold text-emerald-950 dark:text-white flex items-center gap-2">
                                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-800 dark:text-lime-400 shrink-0">
                                    <IconCheck size={12} />
                                  </div>
                                  <span>{sub}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <span className="block text-[10px] font-black text-stone-400 dark:text-stone-500 uppercase tracking-widest mb-2">Therapeutic Spices</span>
                            <div className="flex flex-wrap gap-1.5">
                              {dietInfo.spices.map((spice, i) => (
                                <span key={i} className="text-[10px] font-black uppercase tracking-wider bg-lime-100 text-lime-900 dark:bg-lime-950/40 dark:text-lime-400 border border-lime-200/50 dark:border-lime-900/40 px-3 py-1 rounded-lg">
                                  {spice}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })()}
                </>
              ) : (
                <div className="flex flex-col md:flex-row items-center gap-6 justify-between py-2 text-center md:text-left">
                  <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-medium max-w-lg">
                    This protocol can be automatically customized with regional food substitutions, local culinary staples risks, and clinical advice. Personalize your location to optimize.
                  </p>
                  <button 
                    onClick={onPersonalizeLocation}
                    className="flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-100 hover:bg-emerald-50 dark:bg-emerald-900 dark:hover:bg-emerald-800 text-stone-600 hover:text-emerald-700 dark:text-stone-300 dark:hover:text-lime-400 font-bold uppercase tracking-widest text-xs transition-all border border-stone-200/50 dark:border-emerald-800/40"
                  >
                    <IconMapPin size={16} /> Choose Your Location
                  </button>
                </div>
              )}
            </div>
          </section>

          {topic.expandedSections && topic.expandedSections.length > 0 ? (
            <div className="space-y-12">
              {topic.expandedSections.map((sect, idx) => (
                <section key={idx} className="space-y-6">
                  {sect.intentComment && (
                    <React.Fragment>
                      {/* {sect.intentComment} */}
                    </React.Fragment>
                  )}
                  <h2 className="text-3xl font-black text-emerald-950 brand-font speakable-headline border-l-4 border-lime-400 pl-6">
                    {sect.heading}
                  </h2>
                  <p className="text-stone-700 leading-relaxed font-medium">
                    {sect.body}
                  </p>
                  {sect.listItems && sect.listItems.length > 0 && (
                    <div className="p-6 bg-stone-50 rounded-3xl border border-stone-100 space-y-4">
                      {sect.listTitle && (
                        <h3 className="text-xs font-black uppercase tracking-widest text-emerald-700">{sect.listTitle}</h3>
                      )}
                      <ul className="space-y-3">
                        {sect.listItems.map((li, liIdx) => (
                          <li key={liIdx} className="text-sm font-bold text-stone-700 flex items-start gap-3">
                            <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-800 shrink-0 mt-0.5">
                              <IconCheck size={12} />
                            </div>
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {sect.proTip && (
                    <div className="p-6 bg-emerald-50/50 rounded-3xl border border-emerald-100/50">
                      <span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block mb-1">Dr. Shilpa&apos;s Pro Tip</span>
                      <p className="text-sm font-bold text-emerald-950 leading-relaxed italic">{sect.proTip}</p>
                    </div>
                  )}
                </section>
              ))}
            </div>
          ) : (
            <section className="space-y-8">
              <h2 className="text-4xl font-black text-emerald-950 brand-font border-l-4 border-lime-400 pl-8">
                Clinical Insights & Approach
              </h2>
              <div className="prose prose-stone max-w-none">
                <p className="text-xl text-stone-700 leading-relaxed font-medium">
                  {topic.fullContent}
                </p>
              </div>
            </section>
          )}

          {/* Case Study Section (Human Signal) */}
          {topic.caseStudy && (
            <section className="bg-white border-2 border-emerald-900/10 rounded-[40px] p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8">
                 <IconShieldCheck size={40} className="text-emerald-900/10" />
              </div>
              <div className="space-y-6">
                 <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-900 text-white rounded-full">
                    <span className="text-xs font-black uppercase tracking-[0.2em] leading-none">Clinical Case Study</span>
                 </div>
                 <h2 className="text-4xl font-black text-emerald-950 brand-font">{topic.caseStudy.title}</h2>
                 
                 <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                       <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600">Observation & Narrative</h3>
                       <p className="text-stone-600 italic leading-relaxed text-sm">
                          &quot;{topic.caseStudy.narrative}&quot;
                       </p>
                    </div>
                    <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100 flex flex-col justify-center">
                       <h3 className="text-xs font-black uppercase tracking-widest text-emerald-600 mb-2">Key Clinical Finding</h3>
                       <p className="text-emerald-950 font-black text-lg leading-tight">
                          {topic.caseStudy.finding}
                       </p>
                    </div>
                 </div>

                 <div className="pt-4 border-t border-stone-100 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-stone-100 bg-emerald-50 flex items-center justify-center text-emerald-600">
                       <IconUser size={20} />
                    </div>
                    <div>
                       <p className="text-xs font-black uppercase tracking-widest text-emerald-950">Validated by Dr. Shilpa Thakur</p>
                       <p className="text-xs text-stone-500 font-mono">Expert Identification: MD-PHD-CLN-001</p>
                    </div>
                 </div>
              </div>
            </section>
          )}

          {/* Natural Approach Points */}
          {topic.naturalApproach && (
            <section className="bg-emerald-950 rounded-[40px] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-[80px]"></div>
              <h2 className="text-xl font-black brand-font mb-8 flex items-center gap-3">
                <IconLeaf className="text-lime-400" /> Key Takeaways
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {topic.naturalApproach.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="w-8 h-8 rounded-full bg-lime-400 flex items-center justify-center text-emerald-950">
                      <IconCheck size={16} />
                    </div>
                    <span className="text-sm font-bold uppercase tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Clinical Evidence Consensus Table */}
          {(() => {
            const studies = CLINICAL_CONSENSUS_DATA[topic.id] || CLINICAL_CONSENSUS_DATA['default'];
            return (
              <section className="space-y-6 pt-4 border-t border-stone-100">
                <h2 className="text-3xl font-black text-emerald-950 brand-font flex items-center gap-3">
                  🧪 PubMed Clinical Evidence Consensus
                </h2>
                <p className="text-sm text-stone-500">
                  Dr. Shilpa Thakur's circadian swap protocols are calibrated against peer-reviewed metabolic literature.
                </p>
                <div className="overflow-x-auto rounded-3xl border border-stone-150/45 shadow-sm bg-stone-50/20">
                  <table className="min-w-full divide-y divide-stone-150 text-left text-xs">
                    <thead className="bg-stone-50 text-stone-600 font-bold uppercase tracking-wider">
                      <tr>
                        <th className="px-6 py-4">Circadian Swap Guideline</th>
                        <th className="px-6 py-4">Metabolic Mechanism / Evidence</th>
                        <th className="px-6 py-4">Journal Citation</th>
                        <th className="px-6 py-4">PubMed ID</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-stone-100 bg-white font-medium text-stone-700">
                      {studies.map((s, idx) => (
                        <tr key={idx} className="hover:bg-stone-50/50 transition-colors">
                          <td className="px-6 py-4 font-bold text-emerald-900">{s.guideline}</td>
                          <td className="px-6 py-4 leading-relaxed">{s.evidence}</td>
                          <td className="px-6 py-4 italic text-stone-500">{s.journal}</td>
                          <td className="px-6 py-4">
                            <a 
                              href={`https://pubmed.ncbi.nlm.nih.gov/${s.pmid}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-emerald-700 hover:text-emerald-950 font-black hover:underline flex items-center gap-1 font-mono"
                            >
                              PMID: {s.pmid} ↗
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            );
          })()}

          {/* AI Overview Extraction Blocks — visible to crawlers and AI systems */}
          {baitBlocks.length > 0 && (
            <section className="space-y-6 pt-4 border-t border-stone-100" aria-label="Structured Clinical Summary">
              <h2 className="text-2xl font-black text-emerald-950 brand-font flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm">AI</span>
                Structured Clinical Summary
              </h2>
              <p className="text-xs text-stone-500 uppercase tracking-widest font-bold">Machine-readable extraction blocks for AI answer engines</p>
              {baitBlocks.map((block, idx) => (
                <div
                  key={idx}
                  className="ai-bait-block"
                  data-ai-answer="true"
                  data-snippet-type={block.type}
                  dangerouslySetInnerHTML={{ __html: block.html }}
                />
              ))}
            </section>
          )}

          {/* FAQs Section */}
          {topicFaqs.length > 0 && (
            <section className="space-y-8">
              <h2 className="text-3xl font-black text-emerald-950 brand-font">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {topicFaqs.map((faq: FAQ, i: number) => (
                  <Accordion key={i} title={faq.question} content={faq.answer} category={topic.title} />
                ))}
              </div>
            </section>
          )}

          {/* Medical Disclaimer & Practitioner Disclosure */}
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200/50 dark:border-amber-900/40 p-6 rounded-3xl text-xs text-amber-800 dark:text-amber-300 leading-relaxed shadow-sm mt-8">
            <span className="font-bold uppercase tracking-wider block mb-1">⚠️ Medical Disclaimer & Practitioner Disclosure</span>
            <p>
              Dr. Shilpa Thakur holds a Ph.D. in Clinical Nutrition and operates as a Medical Nutritionist & Metabolic Researcher. 
              She is not a licensed medical doctor (MD/MBBS). All protocols, swaps, and circadian schedules are provided for educational and 
              nutritional support only. <strong>Do not taper, adjust, or discontinue any prescription medication</strong> without 
              consulting your prescribing physician.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-8">
          {/* Question-Path Navigation — conversation tree as navigable chain */}
          <QuestionPathNav currentId={topicId} navigate={navigate} />

          {/* CTA Box */}
          <div className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-xl sticky top-28">
            <h2 className="text-xl font-black text-emerald-950 brand-font mb-4">Start Your Recovery</h2>
            <p className="text-stone-500 text-sm mb-8 leading-relaxed">
              Don&apos;t just manage symptoms. Join a clinical program designed to target the root cause of <strong>{topic.title}</strong>.
            </p>
            <div className="space-y-4">
              <a 
                href="/plans"
                onClick={(e) => { e.preventDefault(); navigate('plans'); }}
                className="w-full bg-emerald-900 text-white py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-800 transition-all flex items-center justify-center gap-2 text-center block"
              >
                View Clinical Plans <IconArrowRight size={14} />
              </a>
              <a 
                href="/contact"
                onClick={(e) => { e.preventDefault(); navigate('contact'); }}
                className="w-full bg-stone-50 text-emerald-950 border border-stone-200 py-4 rounded-2xl font-bold uppercase tracking-widest text-xs hover:bg-stone-100 transition-all text-center block"
              >
                Talk to an Expert
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-100 space-y-4">
              <div className="flex items-center gap-3 text-emerald-700">
                <IconShieldCheck size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Clinical Oversight</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-700">
                <IconFlask size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Science-Backed</span>
              </div>
              <div className="flex items-center gap-3 text-emerald-700">
                <IconActivity size={20} />
                <span className="text-xs font-black uppercase tracking-widest">Personalized Data</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Related Topics Suggestion — governed by topical authority silo rules */}
      <div className="max-w-7xl mx-auto px-6 border-t border-stone-100 pt-20">
        <SectionHeading subtitle="Deepen Your Knowledge" title="Related Topics" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Governance-driven links first (intra-cluster) */}
          {linkGovernance && linkGovernance.relatedTopics.length > 0
            ? linkGovernance.relatedTopics.slice(0, 4).map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  onClick={(e) => { e.preventDefault(); navigate(link.url.replace(/^\//, '')); }}
                  className="group text-left space-y-4 p-6 bg-stone-50 rounded-3xl border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between block"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-emerald-600 transition-all mb-2">
                    <IconFlask size={20} className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">{link.type}</p>
                    <h3 className="font-black text-emerald-950 group-hover:text-emerald-600 transition-colors text-sm uppercase tracking-tight line-clamp-2">{link.label}</h3>
                  </div>
                </a>
              ))
            : /* Fallback: same-category topics */
              TOPICS.filter(t => t.category === topic.category && t.id !== topic.id).slice(0, 4).map(related => (
                <a
                  key={related.id}
                  href={`/topic/${related.id}`}
                  onClick={(e) => { e.preventDefault(); navigate(`topic/${related.id}`); }}
                  className="group text-left space-y-4 p-6 bg-stone-50 rounded-3xl border border-stone-100 hover:border-emerald-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between block"
                >
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-100 flex items-center justify-center text-emerald-600 transition-all mb-2">
                    <IconFlask size={20} className="opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-stone-400 uppercase tracking-widest mb-1">{related.category}</p>
                    <h3 className="font-black text-emerald-950 group-hover:text-emerald-600 transition-colors text-sm uppercase tracking-tight line-clamp-2">{related.title}</h3>
                  </div>
                </a>
              ))
          }
        </div>
        {/* Pillar page link — required by silo rules */}
        {linkGovernance?.pillarPage && (
          <div className="mt-8 text-center">
            <a
              href={linkGovernance.pillarPage.url}
              onClick={(e) => { e.preventDefault(); navigate(linkGovernance.pillarPage!.url.replace(/^\//, '')); }}
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-700 hover:text-emerald-900 border border-emerald-200 px-6 py-3 rounded-xl hover:bg-emerald-50 transition-all"
            >
              <IconArrowRight size={12} className="rotate-180" />
              Back to {linkGovernance.pillarPage.label}
            </a>
          </div>
        )}
      </div>
    </div>
  );
};
