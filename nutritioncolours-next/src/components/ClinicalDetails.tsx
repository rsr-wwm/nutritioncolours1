'use client';
import { useState } from 'react';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '@/components/CompatLink'; // Replaced for Astro compatibility
import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from '@/lib/clinical_databases';
import { IconLeaf, IconFlask, IconMapPin, IconArrowRight, IconCheck } from './ui/Icons';
import { Accordion } from './ui/Accordion';
import { getAeoSnippet } from './SharedSections';
import { KnowledgeConstellation } from './KnowledgeConstellation';
import type { HerbalEntity, MedicalConditionEntity, GenomicVariantEntity, DrugInteractionEntity } from '@/lib/types';

// --- Biomarker Config ---
interface BiomarkerSpec { id: string; name: string; min: number; max: number; unit: string; optimalMax: number; borderlineMax: number; startValue: number; remedy: string; }

const BIOMARKER_METRIC_CONFIGS: Record<string, BiomarkerSpec> = {
  'alt (alanine aminotransferase)': { id: 'alt', name: 'ALT', min: 5, max: 150, unit: 'U/L', optimalMax: 30, borderlineMax: 50, startValue: 65, remedy: 'Consume Turmeric alongside healthy fats to lower liver cell swelling.' },
  'ast (aspartate aminotransferase)': { id: 'ast', name: 'AST', min: 5, max: 150, unit: 'U/L', optimalMax: 30, borderlineMax: 50, startValue: 55, remedy: 'Eliminate industrial seed oils and drink ginger-infused warm water.' },
  'ggt (gamma-glutamyl transferase)': { id: 'ggt', name: 'GGT', min: 5, max: 200, unit: 'U/L', optimalMax: 25, borderlineMax: 50, startValue: 60, remedy: 'Add raw crushed garlic to meals and complete eating windows early.' },
  'fasting insulin': { id: 'fasting-insulin', name: 'Fasting Insulin', min: 2, max: 50, unit: 'uIU/mL', optimalMax: 6, borderlineMax: 15, startValue: 18, remedy: 'Follow the 10-hour daytime eating window (8 AM to 6 PM).' },
  'homa-ir (homeostasis model assessment)': { id: 'homa-ir', name: 'HOMA-IR', min: 0.5, max: 10.0, unit: 'score', optimalMax: 1.5, borderlineMax: 2.5, startValue: 3.8, remedy: 'Use Ceylon Cinnamon and Fenugreek seeds to clear cellular fats.' },
  'hba1c': { id: 'hba1c', name: 'HbA1c', min: 4.0, max: 12.0, unit: '%', optimalMax: 5.6, borderlineMax: 6.4, startValue: 7.2, remedy: 'Prioritize eating fiber and protein first in every meal.' },
  'hba1c (%)': { id: 'hba1c-diabetes', name: 'HbA1c', min: 4.0, max: 12.0, unit: '%', optimalMax: 5.6, borderlineMax: 6.4, startValue: 7.8, remedy: 'Use Ceylon Cinnamon and Fenugreek seeds daily.' },
  'triglyceride-to-hdl ratio': { id: 'tg-hdl-ratio', name: 'TG/HDL Ratio', min: 0.5, max: 8.0, unit: 'ratio', optimalMax: 2.0, borderlineMax: 4.0, startValue: 3.9, remedy: 'Remove high-fructose corn syrups and refined sweeteners.' },
  'systolic blood pressure': { id: 'systolic-bp', name: 'Systolic BP', min: 80, max: 180, unit: 'mmHg', optimalMax: 119, borderlineMax: 139, startValue: 142, remedy: 'Utilize raw crushed garlic daily for nitric oxide vasodilation.' },
  'diastolic blood pressure': { id: 'diastolic-bp', name: 'Diastolic BP', min: 50, max: 110, unit: 'mmHg', optimalMax: 79, borderlineMax: 89, startValue: 94, remedy: 'Restrict sodium to daylight hours and consume potassium-rich greens.' },
  'tsh (thyroid stimulating hormone)': { id: 'tsh', name: 'TSH', min: 0.2, max: 20.0, unit: 'uIU/mL', optimalMax: 2.0, borderlineMax: 4.5, startValue: 6.8, remedy: 'Drink ginger tea daily to reduce follicular cell inflammation.' },
  'free t3 & free t4': { id: 'free-thyroid', name: 'Free T3/T4', min: 1.0, max: 8.0, unit: 'pg/mL', optimalMax: 4.0, borderlineMax: 2.5, startValue: 2.1, remedy: 'Consume Selenium (Brazil nuts) and Ashwagandha for T4 to T3 conversion.' },
  'anti-tpo antibodies': { id: 'anti-tpo', name: 'Anti-TPO', min: 0, max: 1000, unit: 'IU/mL', optimalMax: 34, borderlineMax: 100, startValue: 420, remedy: 'Eliminate gluten to halt immune cross-reactivity with thyroid tissue.' },
  'fasting plasma glucose (fpg)': { id: 'fpg', name: 'FPG', min: 70, max: 300, unit: 'mg/dL', optimalMax: 99, borderlineMax: 125, startValue: 158, remedy: 'Take Fenugreek seeds soaked in warm water before breakfast.' },
  'lh to fsh ratio': { id: 'lh-fsh', name: 'LH/FSH Ratio', min: 0.5, max: 5.0, unit: 'ratio', optimalMax: 1.5, borderlineMax: 2.0, startValue: 2.8, remedy: 'Consume a high-protein breakfast within 1 hour of waking.' },
  'free & total testosterone': { id: 'testosterone', name: 'Testosterone', min: 5, max: 150, unit: 'pg/mL', optimalMax: 35, borderlineMax: 55, startValue: 74, remedy: 'Utilize Spearmint and Holy Basil to inhibit theca cell androgen production.' },
  'heart rate variability (hrv)': { id: 'hrv', name: 'HRV', min: 10, max: 150, unit: 'ms', optimalMax: 80, borderlineMax: 40, startValue: 32, remedy: 'Take Ashwagandha and practice deep belly breathing daily.' },
  'zonulin (stool/serum)': { id: 'zonulin', name: 'Zonulin', min: 10, max: 150, unit: 'ng/mL', optimalMax: 45, borderlineMax: 75, startValue: 92, remedy: 'Consume prebiotic fibers to feed Akkermansia and seal tight junctions.' },
  'calprotectin (inflammatory marker)': { id: 'calprotectin', name: 'Calprotectin', min: 10, max: 300, unit: 'ug/g', optimalMax: 50, borderlineMax: 120, startValue: 145, remedy: 'Use ginger and cardamom infusions to suppress intestinal cytokine expression.' },
  'hs-crp (inflammatory marker)': { id: 'hs-crp', name: 'hs-CRP', min: 0.1, max: 10.0, unit: 'mg/L', optimalMax: 1.0, borderlineMax: 3.0, startValue: 4.8, remedy: 'Use Ceylon Cinnamon and raw ginger extract to damp vascular inflammation.' },
  'fasting glucose stability': { id: 'glucose-stability', name: 'Fasting Glucose', min: 60, max: 200, unit: 'mg/dL', optimalMax: 90, borderlineMax: 125, startValue: 115, remedy: 'Align your last meal with sunset to support glucose homeostasis.' },
};

// --- Chrono Milestones ---
const CHRONO_MILESTONES = [
  { time: '06:30 AM', phase: 'Sunrise Phase (SCN Reset)', hormone: 'Cortisol Awakening / Melatonin Suppressed', action: 'Expose eyes to natural light for 15 minutes. Take thyroid meds empty stomach.', rationale: 'Direct morning light hits retinal ganglion cells, resetting the master SCN brain clock.' },
  { time: '08:30 AM', phase: 'Feeding Gateway', hormone: 'High Insulin Sensitivity', action: 'Consume complex fiber and protein first (e.g. sprouted mung or Ragi bread).', rationale: 'Early eating aligns with rising core temperatures and optimal digestive enzyme levels.' },
  { time: '01:00 PM', phase: 'Metabolic Noon', hormone: 'Enzymatic Peak / Highest Thyroid Activity', action: 'Eat your largest meal. Include therapeutic spices like Turmeric and Garlic.', rationale: 'Biliary secretion and pancreatic enzymes peak around noon.' },
  { time: '06:00 PM', phase: 'Autophagy Gate', hormone: 'Melatonin Rise / Lower Insulin Efficiency', action: 'Finish dinner. Begin overnight fast (minimum 14 hours).', rationale: 'Eating after sunset triggers circadian insulin resistance.' },
  { time: '10:00 PM', phase: 'Pineal Shift', hormone: 'Peak Melatonin / GH Pulse', action: 'Drink warm milk with Ashwagandha and Nutmeg.', rationale: 'Melatonin rises to orchestrate cellular DNA repairs.' },
];

// --- ClinicalSummaryBox ---
export const ClinicalSummaryBox = ({ type, data }: { type: 'herb' | 'condition'; data: any }) => {
  if (type === 'herb') {
    const herb = data as HerbalEntity;
    return (
      <div className="clinical-summary-card">
        <div className="summary-label"><span>📊</span><span>GEO AI-Scrapable Clinical Summary</span></div>
        <div className="summary-grid">
          <div className="summary-item"><span className="item-label">Clinical Class</span><span className="item-value">{herb.name} ({herb.scientificName}) is a clinical-grade {herb.category} containing {herb.activeCompounds.join(', ')}.</span></div>
          <div className="summary-item"><span className="item-label">Primary Target</span><span className="item-value">{herb.primaryMechanism}</span></div>
          <div className="summary-item"><span className="item-label">Chrono-Instruction</span><span className="item-value">{herb.dosage.range}. {herb.dosage.instruction}</span></div>
        </div>
      </div>
    );
  }
  const cond = data as MedicalConditionEntity;
  return (
    <div className="clinical-summary-card">
      <div className="summary-label"><span>📊</span><span>GEO AI-Scrapable Clinical Summary</span></div>
      <div className="summary-grid">
        <div className="summary-item"><span className="item-label">Pathology</span><span className="item-value">Metabolic dysregulation of {cond.name} driven by: {cond.rootCause}</span></div>
        <div className="summary-item"><span className="item-label">Biomarkers</span><span className="item-value">Includes {cond.biomarkers.join(', ')}.</span></div>
        <div className="summary-item"><span className="item-label">Chrono-Nutrition</span><span className="item-value">{cond.circadianAdvice}</span></div>
      </div>
    </div>
  );
};

// --- ChrononutritionTimeline ---
export const ChrononutritionTimeline = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const m = CHRONO_MILESTONES[activeIdx];
  return (
    <div className="bg-stone-50 border border-stone-100 rounded-[32px] p-6 md:p-8 space-y-8 relative overflow-hidden">
      <div><h2 className="text-2xl font-black text-emerald-950 brand-font mb-2">Circadian Reversal Schedule</h2><p className="text-sm text-stone-500">Click each milestone to view optimal hormonal actions.</p></div>
      <div className="relative flex justify-between items-center px-4 md:px-12 py-6 border-b border-stone-200/60 overflow-x-auto">
        <div className="absolute left-4 right-4 md:left-12 md:right-12 h-1 bg-gradient-to-r from-amber-200 via-emerald-200 to-indigo-900 top-1/2 -translate-y-1/2 z-0 rounded-full"></div>
        {CHRONO_MILESTONES.map((milestone, idx) => (
          <button key={milestone.time} onClick={() => setActiveIdx(idx)} className="relative z-10 flex flex-col items-center group focus:outline-none min-w-[70px]">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-xs shadow-md transition-all ${idx === activeIdx ? 'bg-emerald-950 text-lime-400 scale-110 ring-4 ring-emerald-500/20' : idx >= 3 ? 'bg-indigo-950 text-indigo-300' : 'bg-amber-100 text-amber-950'}`}>{idx === activeIdx ? '●' : idx + 1}</div>
            <span className="text-[10px] font-black mt-2 uppercase tracking-widest text-stone-600">{milestone.time}</span>
          </button>
        ))}
      </div>
      <div className="bg-white rounded-[24px] p-6 border border-stone-100 shadow-sm grid md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-5 space-y-3">
          <span className={`inline-block px-3 py-1 text-[9px] font-black uppercase tracking-widest rounded-full ${activeIdx >= 3 ? 'bg-indigo-50 text-indigo-800' : 'bg-amber-50 text-amber-800'}`}>{m.phase}</span>
          <h3 className="text-xl font-bold text-emerald-950 brand-font">Active Hormone Cycle</h3>
          <p className="text-xs font-mono text-emerald-800 bg-emerald-50/60 px-3 py-1.5 rounded-lg inline-block">{m.hormone}</p>
        </div>
        <div className="md:col-span-7 space-y-4 md:border-l md:border-stone-100 md:pl-6">
          <div><h4 className="text-[10px] font-black uppercase text-stone-400 tracking-wider mb-1">Clinical Action</h4><p className="text-sm font-bold text-stone-700">{m.action}</p></div>
          <div><h4 className="text-[10px] font-black uppercase text-stone-400 tracking-wider mb-1">Rationale</h4><p className="text-xs text-stone-500 leading-relaxed">{m.rationale}</p></div>
        </div>
      </div>
    </div>
  );
};

// --- BiomarkerRiskTracker ---
export const BiomarkerRiskTracker = ({ biomarkersList }: { biomarkersList: string[] }) => {
  const specs = biomarkersList.map(name => BIOMARKER_METRIC_CONFIGS[name.toLowerCase()]).filter(Boolean) as BiomarkerSpec[];
  const [values, setValues] = useState<Record<string, number>>(() => { const i: Record<string, number> = {}; specs.forEach(s => { i[s.id] = s.startValue; }); return i; });
  const getStatus = (val: number, spec: BiomarkerSpec) => { if (val <= spec.optimalMax) return { label: 'Optimal', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' }; if (val <= spec.borderlineMax) return { label: 'Borderline', color: 'text-amber-800 bg-amber-50 border-amber-200' }; return { label: 'High Risk', color: 'text-red-800 bg-red-50 border-red-200' }; };
  if (specs.length === 0) return null;
  return (
    <div className="bg-stone-50 border border-stone-100 rounded-[32px] p-6 md:p-8 space-y-8">
      <div><h2 className="text-2xl font-black text-emerald-950 brand-font mb-2">Metabolic Biomarker Audit</h2><p className="text-sm text-stone-500">Drag sliders to simulate blood panel values.</p></div>
      <div className="space-y-6">
        {specs.map(spec => { const v = values[spec.id] ?? spec.startValue; const s = getStatus(v, spec); return (
          <div key={spec.id} className="bg-white rounded-[24px] p-6 border border-stone-100 shadow-sm space-y-4">
            <div className="flex justify-between items-center"><div><h3 className="font-bold text-sm text-emerald-950">{spec.name}</h3><span className={`inline-block px-2.5 py-0.5 text-[9px] font-black uppercase border rounded-md mt-1 ${s.color}`}>{s.label}</span></div><div className="text-right"><span className="text-2xl font-black text-emerald-950 font-mono">{v}</span><span className="text-xs text-stone-500 font-bold ml-1">{spec.unit}</span></div></div>
            <input type="range" min={spec.min} max={spec.max} step={spec.unit === '%' || spec.unit === 'ratio' || spec.id === 'homa-ir' ? '0.1' : '1'} value={v} onChange={e => setValues(p => ({ ...p, [spec.id]: parseFloat(e.target.value) }))} className="clinical-slider w-full" />
            <div className="p-4 bg-stone-50 rounded-2xl text-xs flex gap-3 items-start border border-stone-100"><span className="text-emerald-700 mt-0.5">ℹ</span><p className="text-stone-600 leading-relaxed"><strong>Protocol:</strong> {spec.remedy}</p></div>
          </div>
        ); })}
      </div>
    </div>
  );
};

// --- RelatedContent ---
export const RelatedContent = ({ currentPath, navigate }: { currentPath: string; navigate: (path: string) => void }) => {
  const base = currentPath.split('/')[0];
  const id = currentPath.split('/')[1];
  let constellationNodes: { id: string; label: string; href: string; category: 'topic' | 'service' | 'faq' | 'article' | 'herb' | 'condition' }[] = [];
  let centerLabel = '';
  
  if (base === 'herb') {
    const herb = HERBS_SPICES_DATA.find(h => h.id === id);
    centerLabel = herb?.name || '';
    if (herb) {
      constellationNodes = MEDICAL_CONDITIONS_DATA
        .filter(c => c.therapeuticSpices.some(s => s.toLowerCase().includes(herb.name.toLowerCase())))
        .slice(0, 6)
        .map(c => ({ id: c.id, label: c.name, href: `/condition/${c.id}`, category: 'condition' as const }));
    }
  } else if (base === 'condition') {
    const cond = MEDICAL_CONDITIONS_DATA.find(c => c.id === id);
    centerLabel = cond?.name || '';
    if (cond) {
      constellationNodes = cond.therapeuticSpices.slice(0, 6).map(s => {
        const h = HERBS_SPICES_DATA.find(h => h.name.toLowerCase().includes(s.split(' ')[0].toLowerCase()));
        return h ? { id: h.id, label: h.name, href: `/herb/${h.id}`, category: 'herb' as const } : null;
      }).filter(Boolean) as typeof constellationNodes;
    }
  } else if (base === 'genomics') {
    centerLabel = id.toUpperCase();
    constellationNodes = [
      { id: 'tools', label: 'Health Tools', href: '/tools', category: 'service' as const },
      { id: 'knowledge', label: 'Knowledge Hub', href: '/knowledge/health-topics', category: 'topic' as const },
      { id: 'plans', label: 'Programs', href: '/plans', category: 'service' as const },
    ];
  } else if (base === 'interactions') {
    centerLabel = 'Interactions';
    constellationNodes = [
      { id: 'herbs', label: 'Herbs Database', href: '/knowledge/herbs-spices', category: 'herb' as const },
      { id: 'conditions', label: 'Conditions', href: '/knowledge/health-conditions', category: 'condition' as const },
      { id: 'tools', label: 'Health Tools', href: '/tools', category: 'service' as const },
    ];
  }
  
  if (constellationNodes.length === 0) return null;
  
  return (
    <div className="mt-16 pt-8 border-t border-stone-200">
      <KnowledgeConstellation nodes={constellationNodes} centerLabel={centerLabel} />
    </div>
  );
};

// --- ClinicalHerbDetail ---
export const ClinicalHerbDetail = ({ herb, herbsData = [], conditionsData = [] }: { herb: HerbalEntity; herbsData?: HerbalEntity[]; conditionsData?: MedicalConditionEntity[] }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'science' | 'faqs'>('overview');
  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <CompatLink href="/sitemap" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 mb-8 transition-colors">← Back to Sitemap</CompatLink>
        <div className="grid lg:grid-cols-12 gap-12 mb-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="flex items-center gap-3"><span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full">Clinical {herb.category} Profile</span><span className="text-xs font-mono text-stone-500 italic">{herb.scientificName}</span></div>
            <h1 className="text-5xl md:text-7xl font-black text-emerald-950 brand-font leading-none tracking-tight">{herb.name}</h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">{herb.primaryMechanism}</p>
            {herb.alsoKnownAs && herb.alsoKnownAs.length > 0 && (<section aria-label="Entity Disambiguation" className="mt-4 p-5 bg-stone-50 rounded-2xl border border-stone-200"><p className="text-xs font-black uppercase tracking-widest text-stone-500 mb-2">Also Known As</p><p className="text-sm text-stone-700 font-semibold">{herb.alsoKnownAs.join(', ')}</p>{herb.plantFamily && <p className="text-xs text-stone-500 mt-2"><span className="font-bold">Family:</span> {herb.plantFamily} | <span className="font-bold">Species:</span> <em>{herb.scientificName}</em> | <span className="font-bold">Origin:</span> {herb.origin}</p>}</section>)}
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100/50 space-y-2 mt-4"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">Direct Answer Summary</span><dfn className="not-italic text-sm text-stone-600 block leading-relaxed font-semibold">{getAeoSnippet(herb.aeoDirectSnippet, herb.primaryMechanism)}</dfn></div>
            <ClinicalSummaryBox type="herb" data={herb} />
          </div>
          <div className="lg:col-span-4">{herb.clinicalReview && (<div className="p-6 bg-emerald-950 rounded-3xl text-white space-y-3 relative overflow-hidden border border-emerald-800/40"><p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Medical Verification</p><div className="space-y-1"><p className="text-sm font-bold">{herb.clinicalReview.reviewedBy}</p><p className="text-[10px] opacity-60">ID: {herb.clinicalReview.practitionerId}</p></div><p className="text-[10px] font-mono opacity-50 uppercase border-t border-white/10 pt-2">Updated: {herb.clinicalReview.lastUpdated}</p></div>)}</div>
        </div>
        <div className="flex border-b border-stone-200 mb-12 overflow-x-auto">{(['overview', 'science', 'faqs'] as const).map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-emerald-950 tab-glow' : 'text-stone-500 hover:text-stone-700'}`}>{tab === 'faqs' ? 'Clinical Q&As' : tab}</button>))}</div>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {activeTab === 'overview' && (<div className="animate-in fade-in bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-black text-emerald-950 brand-font">Protocol Parameters</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Therapeutic Dosage</span><p className="text-base font-bold text-emerald-950">{herb.dosage.range}</p><p className="text-xs text-stone-500">{herb.dosage.instruction}</p></div>
                <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><span className="text-[10px] font-black uppercase tracking-widest text-stone-500">Synergy Partners</span><div className="flex flex-wrap gap-2 pt-1">{herb.synergies.map(s => <span key={s} className="px-3 py-1 bg-stone-100 text-stone-600 rounded-lg text-xs font-semibold">{s}</span>)}</div></div>
              </div>
              {herb.comparisonTable && (<section><h3 className="text-xs font-black uppercase tracking-widest text-stone-500 mb-3">Comparison Guide</h3><div className="overflow-x-auto"><table className="w-full text-sm border-collapse"><thead><tr>{herb.comparisonTable.headers.map(h => <th key={h} className="text-left p-3 bg-emerald-50 text-emerald-900 font-bold text-xs uppercase">{h}</th>)}</tr></thead><tbody>{herb.comparisonTable.rows.map((row, i) => (<tr key={i} className="border-t border-stone-100">{row.map((c, j) => <td key={j} className="p-3 text-stone-600">{c}</td>)}</tr>))}</tbody></table></div></section>)}
              <section className="p-8 bg-red-50/50 rounded-[32px] border border-red-100 space-y-4"><h3 className="text-xs font-black uppercase tracking-widest text-red-800">Safety & Dosage</h3>{herb.safetyDosage ? (<><div><span className="text-[10px] font-black uppercase text-stone-500">Standard Dosage</span><p className="text-sm font-semibold text-stone-700">{herb.safetyDosage.standardDosage}</p></div>{herb.safetyDosage.whoShouldAvoid.length > 0 && <div><span className="text-[10px] font-black uppercase text-red-700">Who Should Avoid</span><ul className="list-disc pl-5 text-sm text-stone-600 space-y-1">{herb.safetyDosage.whoShouldAvoid.map(w => <li key={w}>{w}</li>)}</ul></div>}{herb.safetyDosage.drugInteractions.length > 0 && <div><span className="text-[10px] font-black uppercase text-red-700">Drug Interactions</span><ul className="list-disc pl-5 text-sm text-stone-600 space-y-1">{herb.safetyDosage.drugInteractions.map(d => <li key={d}>{d}</li>)}</ul></div>}</>) : (<ul className="list-disc pl-5 text-sm text-stone-600 space-y-1.5">{herb.contraindications.map(c => <li key={c}>{c}</li>)}</ul>)}</section>
              {herb.ayurvedicProfile && (<section className="p-6 bg-amber-50/50 rounded-3xl border border-amber-100 space-y-3"><h3 className="text-xs font-black uppercase tracking-widest text-amber-800">Ayurvedic Profile</h3><div className="grid grid-cols-2 gap-3 text-sm"><div><span className="font-bold text-stone-700">Rasa:</span> <span className="text-stone-600">{herb.ayurvedicProfile.rasa.join(', ')}</span></div><div><span className="font-bold text-stone-700">Virya:</span> <span className="text-stone-600">{herb.ayurvedicProfile.virya}</span></div><div className="col-span-2"><span className="font-bold text-stone-700">Dosha:</span> <span className="text-stone-600">{herb.ayurvedicProfile.doshaEffect}</span></div><div className="col-span-2"><span className="font-bold text-stone-700">Karma:</span> <span className="text-stone-600">{herb.ayurvedicProfile.karma.join(', ')}</span></div></div></section>)}
            </div>)}
            {activeTab === 'science' && (<div className="animate-in fade-in bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-black text-emerald-950 brand-font">Mechanism of Action</h2>
              <div className="p-6 bg-emerald-50/60 rounded-3xl border border-emerald-100/40 text-stone-600 text-sm leading-relaxed">{herb.primaryMechanism}</div>
              <div className="space-y-4"><h3 className="text-xs font-black uppercase tracking-widest text-stone-500">Bio-Active Compounds</h3><div className="grid grid-cols-2 md:grid-cols-3 gap-4">{herb.activeCompounds.map(c => (<div key={c} className="p-4 bg-stone-50 border border-stone-100 rounded-2xl text-center"><span className="text-xs font-bold text-emerald-950">{c}</span></div>))}</div></div>
              <div className="space-y-4 border-t border-stone-100 pt-6"><h3 className="text-xs font-black uppercase tracking-widest text-stone-500">References</h3><ul className="space-y-3">{herb.citations.map((c, idx) => (<li key={c.text} className="text-xs text-stone-500 flex items-start gap-2"><span className="font-mono text-emerald-700">[{idx + 1}]</span><a href={c.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-800 underline">{c.text}</a></li>))}</ul></div>
            </div>)}
            {activeTab === 'faqs' && (<div className="animate-in fade-in space-y-6">{(herb.faqs || []).map(faq => (<div key={faq.question} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm"><div className="text-lg font-bold text-emerald-950 mb-3">{faq.question}</div><p className="text-sm text-stone-600 leading-relaxed">{faq.answer}</p></div>))}</div>)}
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[40px] shadow-md border border-stone-100 bg-white p-4"><div className="aspect-[4/3] rounded-[28px] overflow-hidden mb-6 bg-emerald-950 relative flex items-center justify-center"><IconLeaf className="w-24 h-24 text-lime-400/30" /></div><div className="p-4"><p className="text-xs text-stone-500 leading-relaxed mb-6">This therapeutic is configured inside custom patient plans.</p><CompatLink href="/plans" className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all text-center block">Get Custom Protocol</CompatLink></div></div>
            <div className="bg-white rounded-[40px] p-6 border border-stone-100 shadow-sm"><div className="text-xs font-black uppercase tracking-[0.2em] text-stone-500 mb-4 pl-2">Treats Conditions</div><div className="space-y-3">{conditionsData.filter(cond => cond.therapeuticSpices.some(s => s.toLowerCase().includes(herb.name.toLowerCase()) || herb.name.toLowerCase().includes(s.toLowerCase()))).map(cond => (<CompatLink href={`/condition/${cond.id}`} key={cond.id} className="group cursor-pointer p-4 bg-stone-50 hover:bg-emerald-50 rounded-2xl transition-all flex justify-between items-center block"><div><div className="font-bold text-emerald-950 leading-tight group-hover:text-emerald-700 transition-colors">{cond.name}</div><p className="text-[9px] font-black text-stone-500 uppercase tracking-widest mt-1">Remission Protocol</p></div><IconArrowRight size={14} className="text-stone-500 group-hover:text-emerald-700 transition-all" /></CompatLink>))}</div></div>
          </div>
        </div>
        <RelatedContent currentPath={`herb/${herb.id}`} navigate={() => {}} />
      </div>
    </div>
  );
};

// --- ClinicalConditionDetail ---
export const ClinicalConditionDetail = ({ cond, herbsData = [] }: { cond: MedicalConditionEntity; herbsData?: HerbalEntity[] }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'timeline' | 'biomarkers' | 'faqs'>('overview');
  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <CompatLink href="/sitemap" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 mb-8 transition-colors">← Back</CompatLink>
        <div className="grid lg:grid-cols-12 gap-12 mb-12 items-start">
          <div className="lg:col-span-8 space-y-6">
            <span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full inline-block">Clinical Reversal Protocol</span>
            <h1 className="text-5xl md:text-7xl font-black text-emerald-950 brand-font leading-none tracking-tight">Reversing {cond.name}</h1>
            <p className="text-lg text-stone-600 leading-relaxed max-w-2xl">{cond.rootCause}</p>
            <div className="p-6 bg-emerald-50 rounded-3xl border border-emerald-100/50 space-y-2"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-800 block">Direct Answer Summary</span><dfn className="not-italic text-sm text-stone-600 block leading-relaxed font-semibold">{getAeoSnippet(cond.aeoDirectSnippet, cond.rootCause)}</dfn></div>
            <ClinicalSummaryBox type="condition" data={cond} />
          </div>
          <div className="lg:col-span-4">{cond.clinicalReview && (<div className="p-6 bg-emerald-950 rounded-3xl text-white space-y-3 relative overflow-hidden"><p className="text-[10px] font-black uppercase tracking-widest text-emerald-300">Clinical Verification</p><p className="text-sm font-bold">{cond.clinicalReview.reviewedBy}</p><p className="text-[10px] font-mono opacity-50 uppercase border-t border-white/10 pt-2">Updated: {cond.clinicalReview.lastUpdated}</p></div>)}</div>
        </div>
        <div className="flex border-b border-stone-200 mb-12 overflow-x-auto">{(['overview', 'timeline', 'biomarkers', 'faqs'] as const).map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-8 py-4 text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab ? 'text-emerald-950 tab-glow' : 'text-stone-500'}`}>{tab === 'timeline' ? 'Circadian Clock' : tab === 'faqs' ? 'Clinical Q&As' : tab}</button>))}</div>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8">
            {activeTab === 'overview' && (<div className="animate-in fade-in bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8">
              <h2 className="text-2xl font-black text-emerald-950 brand-font">Protocol Architecture</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-3"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Target Biomarkers</span><ul className="space-y-2">{cond.biomarkers.map(b => (<li key={b} className="text-sm font-semibold text-stone-600 flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>{b}</li>))}</ul></div>
                <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-3"><span className="text-[10px] font-black uppercase tracking-widest text-emerald-800">Therapeutic Spices</span><div className="flex flex-wrap gap-2 pt-1">{cond.therapeuticSpices.map(spice => { const match = herbsData.find(h => h.name.toLowerCase().includes(spice.split(' ')[0].toLowerCase())); return match ? (<CompatLink href={`/herb/${match.id}`} key={spice} className="px-3 py-1 bg-emerald-50 hover:bg-emerald-100 border border-emerald-100/50 text-emerald-800 text-xs font-black uppercase rounded-lg transition-colors">{spice} ↗</CompatLink>) : (<span key={spice} className="px-3 py-1 bg-stone-100 text-stone-600 text-xs font-bold rounded-lg">{spice}</span>); })}</div></div>
              </div>
              <div className="p-6 bg-lime-50/50 border border-lime-100 rounded-3xl space-y-2"><div className="text-xs font-black uppercase tracking-widest text-emerald-950">Circadian Guidance</div><p className="text-sm text-stone-600 leading-relaxed">{cond.circadianAdvice}</p></div>
              <div className="space-y-3"><div className="text-xs font-black uppercase tracking-widest text-stone-500">Triggers to Avoid</div><div className="flex flex-wrap gap-2">{cond.prohibitedFoods.map(f => (<span key={f} className="px-3 py-1.5 bg-red-50 border border-red-100 text-red-800 text-[10px] font-black uppercase rounded-lg">✕ {f}</span>))}</div></div>
            </div>)}
            {activeTab === 'timeline' && <ChrononutritionTimeline />}
            {activeTab === 'biomarkers' && <BiomarkerRiskTracker biomarkersList={cond.biomarkers} />}
            {activeTab === 'faqs' && (<div className="animate-in fade-in space-y-6">{(cond.faqs || []).map(faq => (<div key={faq.question} className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm"><h4 className="text-lg font-bold text-emerald-950 mb-3">{faq.question}</h4><p className="text-sm text-stone-600 leading-relaxed">{faq.answer}</p></div>))}</div>)}
          </div>
          <div className="lg:col-span-4 space-y-6">
            <div className="rounded-[40px] shadow-md border border-stone-100 bg-white p-4"><div className="aspect-[4/3] rounded-[28px] overflow-hidden mb-6 bg-emerald-950 relative flex items-center justify-center"><IconFlask className="w-24 h-24 text-lime-400/30" /></div><div className="p-4"><p className="text-xs text-stone-500 leading-relaxed mb-6">Optimize your circadian biology. Get a personalized protocol.</p><CompatLink href="/plans" className="w-full py-4 bg-emerald-900 hover:bg-emerald-800 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all text-center block">Start Your Program</CompatLink></div></div>
            <div className="rounded-[40px] border border-emerald-100 bg-gradient-to-br from-emerald-50 to-lime-50/30 p-6 space-y-4"><div className="flex items-center gap-3"><span className="p-2 bg-emerald-600 text-white rounded-xl"><IconMapPin size={18} /></span><div><div className="text-sm font-bold text-emerald-950 brand-font">Outreach & Service Areas</div><p className="text-[9px] text-emerald-700 font-black uppercase tracking-wider">1,040+ Cities</p></div></div><CompatLink href="/clinics" className="w-full py-3.5 bg-white border border-emerald-600 text-emerald-900 hover:bg-emerald-50 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-2 text-center block">Find a Clinic <IconArrowRight size={12} /></CompatLink></div>
          </div>
        </div>
        <RelatedContent currentPath={`condition/${cond.id}`} navigate={() => {}} />
      </div>
    </div>
  );
};

// --- ClinicalGenomicsDetail ---
export const ClinicalGenomicsDetail = ({ variant }: { variant: GenomicVariantEntity }) => (
  <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
    <div className="max-w-7xl mx-auto px-6">
      <CompatLink href="/sitemap" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 mb-8">← Back</CompatLink>
      <div className="grid lg:grid-cols-12 gap-12 mb-12"><div className="lg:col-span-8 space-y-6"><div className="flex items-center gap-3"><span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full">Nutrigenomics SNP Profile</span><span className="text-xs font-mono text-stone-500 italic">Gene: {variant.geneName}</span></div><h1 className="text-5xl md:text-7xl font-black text-emerald-950 brand-font leading-none tracking-tight">{variant.rsid} ({variant.genotype})</h1><p className="text-lg text-stone-600 leading-relaxed max-w-2xl">{variant.clinicalImpact}</p></div></div>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8"><div className="bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8"><h2 className="text-2xl font-black text-emerald-950 brand-font">Dietary Swap Guidelines</h2><p className="text-stone-600 leading-relaxed">{variant.dietaryGuideline}</p>
          <div className="grid md:grid-cols-2 gap-6"><div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><h3 className="text-xs font-black uppercase tracking-widest text-emerald-800">Key Nutrients</h3><ul className="list-disc pl-4 text-sm text-stone-600 space-y-1">{variant.keyNutrients.map((n, i) => <li key={i}>{n}</li>)}</ul></div><div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><h3 className="text-xs font-black uppercase tracking-widest text-red-800">Foods to Avoid</h3><ul className="list-disc pl-4 text-sm text-stone-600 space-y-1">{variant.avoidFoods.map((f, i) => <li key={i}>{f}</li>)}</ul></div></div>
          <div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><h3 className="text-xs font-black uppercase tracking-widest text-emerald-800">Target Biomarkers</h3><div className="flex flex-wrap gap-2">{variant.targetBiomarkers.map((b, i) => (<span key={i} className="px-3 py-1 bg-emerald-50 text-emerald-800 rounded-lg text-xs font-bold border border-emerald-100">{b}</span>))}</div></div>
        </div></div>
        <div className="lg:col-span-4"><div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-6"><h2 className="text-lg font-black text-emerald-950 uppercase tracking-tight">Clinical Evidence</h2>{variant.citations.map((cite, idx) => (<div key={idx} className="text-xs space-y-1 border-l-2 border-emerald-200 pl-3"><p className="font-semibold text-stone-700">{cite.text}</p><a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline block truncate">PubMed Link →</a></div>))}</div></div>
      </div>
      <RelatedContent currentPath={`genomics/${variant.id}`} navigate={() => {}} />
    </div>
  </div>
);

// --- ClinicalInteractionDetail ---
export const ClinicalInteractionDetail = ({ interaction }: { interaction: DrugInteractionEntity }) => (
  <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-32">
    <div className="max-w-7xl mx-auto px-6">
      <CompatLink href="/sitemap" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-emerald-800 hover:text-emerald-600 mb-8">← Back</CompatLink>
      <div className="grid lg:grid-cols-12 gap-12 mb-12"><div className="lg:col-span-8 space-y-6"><div className="flex items-center gap-3"><span className="px-4 py-1.5 bg-emerald-50 text-emerald-800 text-[10px] font-black uppercase tracking-widest rounded-full">Drug-Nutrient Interaction</span><span className="text-xs font-mono text-stone-500 italic">Class: {interaction.drugClass}</span></div><h1 className="text-5xl md:text-7xl font-black text-emerald-950 brand-font leading-none tracking-tight">{interaction.drugName}</h1><p className="text-lg text-stone-600 leading-relaxed max-w-2xl">{interaction.monitoringAdvice}</p></div></div>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8"><div className="bg-white rounded-[48px] p-8 md:p-12 border border-stone-100 shadow-sm space-y-8"><h2 className="text-2xl font-black text-emerald-950 brand-font">Interaction Profile</h2>
          <div className="grid md:grid-cols-3 gap-6"><div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><h3 className="text-xs font-black uppercase tracking-widest text-red-800">Depleted Nutrients</h3><ul className="list-disc pl-4 text-sm text-stone-600 space-y-1">{interaction.depletedNutrients.map((d, i) => <li key={i}>{d}</li>)}</ul></div><div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><h3 className="text-xs font-black uppercase tracking-widest text-amber-800">Contraindicated Herbs</h3><ul className="list-disc pl-4 text-sm text-stone-600 space-y-1">{interaction.contraindicatedHerbs.map((c, i) => <li key={i}>{c}</li>)}</ul></div><div className="p-6 bg-stone-50 rounded-[24px] border border-stone-100 space-y-2"><h3 className="text-xs font-black uppercase tracking-widest text-emerald-800">Synergistic Herbs</h3><ul className="list-disc pl-4 text-sm text-stone-600 space-y-1">{interaction.synergisticHerbs.map((s, i) => <li key={i}>{s}</li>)}</ul></div></div>
        </div></div>
        <div className="lg:col-span-4"><div className="p-8 bg-emerald-50 rounded-3xl border border-emerald-100 space-y-6"><h2 className="text-lg font-black text-emerald-950 uppercase tracking-tight">Clinical Evidence</h2>{interaction.citations.map((cite, idx) => (<div key={idx} className="text-xs space-y-1 border-l-2 border-emerald-200 pl-3"><p className="font-semibold text-stone-700">{cite.text}</p><a href={cite.url} target="_blank" rel="noopener noreferrer" className="text-emerald-800 hover:underline block truncate">PubMed Link →</a></div>))}</div></div>
      </div>
      <RelatedContent currentPath={`interactions/${interaction.id}`} navigate={() => {}} />
    </div>
  </div>
);
