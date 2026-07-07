'use client';
import { Accordion } from './ui/Accordion';
import { m, AnimatePresence } from 'framer-motion';

// FAQSection - Reusable FAQ accordion component
export const FAQSection = ({ data, title = "Frequently Asked Questions" }: { data: { question: string; answer: string; category: string }[]; title?: string }) => (
  <div itemScope itemType="https://schema.org/FAQPage" className="max-w-4xl mx-auto px-6 py-16 animate-in fade-in slide-in-from-bottom-4 optimize-render">
    <h2 className="text-2xl font-black text-emerald-950 mb-8 text-center brand-font">{title}</h2>
    <div className="grid gap-4">
      {data.map((faq, i) => (
        <Accordion key={i} title={faq.question} content={faq.answer} category={faq.category} />
      ))}
    </div>
  </div>
);

// MedicalDisclaimerBanner
export const MedicalDisclaimerBanner = () => (
  <div className="bg-amber-50/50 backdrop-blur-sm border border-amber-200/50 rounded-3xl p-6 md:p-8 text-stone-700 max-w-7xl mx-auto mt-8 animate-in fade-in duration-500">
    <div className="flex flex-col md:flex-row gap-6 items-start">
      <div className="p-3 bg-amber-100/80 rounded-2xl text-amber-800 shrink-0">
        <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <path d="m12 8-4 4"/><path d="m8 8 4 4"/>
        </svg>
      </div>
      <div className="space-y-2 text-left">
        <h4 className="text-sm font-black uppercase tracking-widest text-amber-900 flex items-center gap-2">
          Regulatory Compliance & Non-Medical Practitioner Disclosure
        </h4>
        <p className="text-xs text-stone-600 leading-relaxed">
          Dr. Shilpa Thakur holds a Ph.D. in Clinical Nutrition and operates as a world-class Metabolic Researcher and Clinical Nutrition Specialist (Non-Medical Practitioner). 
          She is not a licensed medical doctor (MD/MBBS) and does not practice medical diagnostics, medicine, or write drug prescriptions. 
          The circadian nutritional programs (including Metabolic Mastery, Therapeutic Reversal, and Cellular Resurrection) and clinical insights offered on this platform are designed for educational, dietary support, and metabolic wellness optimization.
        </p>
        <p className="text-xs text-stone-500 font-bold leading-relaxed">
          ⚠️ IMPORTANT SAFETY ADVICE: Do not alter, taper, or discontinue any prescription medications without the direct supervision of your prescribing medical physician.
        </p>
      </div>
    </div>
  </div>
);

// ClinicalCategorySign
export const ClinicalCategorySign = ({ type, className = "" }: { type: 'medical' | 'nutrition' | 'protocol' | 'team'; className?: string }) => {
  const configs: Record<string, { label: string; icon: string }> = {
    medical: { icon: '🧪', label: 'Medical' },
    nutrition: { icon: '🌿', label: 'Nutrition' },
    protocol: { icon: '📄', label: 'Protocol' },
    team: { icon: '✓', label: 'Team' }
  };
  const config = configs[type];
  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-stone-100 bg-white shadow-sm ${className}`}>
      <span>{config.icon}</span>
      <span className="text-xs font-black uppercase tracking-widest text-stone-600">{config.label}</span>
    </div>
  );
};

// OrganicBlobs - Background decorative blobs
export const OrganicBlobs = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-lime-200/30 rounded-full blur-[100px] animate-pulse"></div>
    <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] bg-emerald-200/30 rounded-full blur-[100px] animate-pulse delay-700"></div>
    <div className="absolute bottom-[-10%] left-[20%] w-[45%] h-[45%] bg-teal-100/30 rounded-full blur-[100px] animate-pulse delay-1000"></div>
  </div>
);

// getAeoSnippet utility
export const getAeoSnippet = (customSnippet?: string, fallbackText?: string): string => {
  if (customSnippet && customSnippet.trim()) return customSnippet;
  if (!fallbackText) return '';
  const sentences = fallbackText.split(/[.!?]\s+/);
  if (sentences.length >= 2) {
    const firstTwo = fallbackText.substring(0, sentences[0].length + sentences[1].length + 4).trim();
    if (firstTwo.split(/\s+/).length <= 45) return firstTwo;
  }
  const words = fallbackText.split(/\s+/);
  if (words.length <= 35) return fallbackText;
  return words.slice(0, 35).join(' ') + '...';
};

// AnimatedVisual - used by plans pages and hero slider
export const AnimatedVisual = ({ type }: { type: string }) => {
  const isPlan1 = type === 'plan-1';
  const isPlan2 = type === 'plan-2';
  const isPlan3 = type === 'plan-3';
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-emerald-950"></div>
      <div className="absolute inset-0 opacity-10">
        <svg aria-hidden="true" width="100%" height="100%" className="w-full h-full text-emerald-500">
          <pattern id="gridLarge" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#gridLarge)" />
        </svg>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(163,230,53,0.05)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:flex items-center justify-center opacity-30">
        <AnimatePresence>
          {isPlan1 && (
            <m.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 1.2, opacity: 0 }} className="relative w-[500px] h-[500px]">
              <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full text-lime-400">
                <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '30s' }} />
                <circle cx="100" cy="100" r="65" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />
                <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 8" className="animate-spin" style={{ animationDuration: '60s' }} />
                <path d="M100 20 L100 180 M20 100 L180 100" stroke="currentColor" strokeWidth="0.2" className="opacity-50" />
              </svg>
            </m.div>
          )}
          {isPlan2 && (
            <m.div initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: -100, opacity: 0 }} className="relative w-[450px] h-[450px]">
              <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full text-emerald-400">
                <path d="M40 100 Q100 20 160 100 T280 100" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-50" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.2" strokeDasharray="1 4" className="animate-spin" style={{ animationDuration: '60s' }} />
              </svg>
            </m.div>
          )}
          {isPlan3 && (
            <m.div initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -200, opacity: 0 }} className="relative w-[400px] h-[400px]">
              <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full text-teal-400">
                <line x1="40" y1="40" x2="40" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
                <line x1="80" y1="40" x2="80" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '2s' }} />
                <line x1="120" y1="40" x2="120" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '4s' }} />
                <line x1="160" y1="40" x2="160" y2="160" stroke="currentColor" strokeWidth="2" className="animate-pulse" />
              </svg>
            </m.div>
          )}
        </AnimatePresence>
      </div>
      <div className="absolute inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-lime-400/40 to-transparent blur-sm z-30 animate-pulse"></div>
      <div className="absolute w-[1000px] h-[1000px] bg-emerald-500/10 rounded-full blur-[160px] -top-1/2 -left-1/4"></div>
      <div className="absolute w-[800px] h-[800px] bg-lime-500/5 rounded-full blur-[140px] -bottom-1/2 -right-1/4"></div>
    </div>
  );
};
