// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { MEDICAL_CONDITIONS_DATA } from '@/lib/clinical_databases';
import { IconFlask, IconArrowRight } from '@/components/ui/Icons';

export default function HealthConditionsPage() {
  return (
    <div className="bg-stone-50/30 min-h-screen pt-12 pb-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2"><div className="w-8 h-1 bg-emerald-500 rounded-full"></div><span className="text-xs font-black uppercase tracking-[0.4em] text-emerald-800">Therapeutic Reversal Protocols</span></div>
            <h1 className="text-4xl md:text-8xl font-black text-emerald-950 brand-font leading-[0.85] tracking-tighter">Health Conditions</h1>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MEDICAL_CONDITIONS_DATA.map(cond => (
            <CompatLink key={cond.id} href={`/condition/${cond.id}`} className="group bg-white rounded-3xl p-6 border border-stone-100 hover:border-emerald-200 shadow-sm transition-all duration-300 flex flex-col h-full text-left block">
              <div className="flex justify-between items-start mb-6"><span className="text-[10px] font-black uppercase tracking-[0.1em] px-3 py-1 bg-emerald-50 text-emerald-700 rounded-lg border border-emerald-100">Protocol</span><IconFlask size={14} className="text-stone-300 group-hover:text-emerald-500 transition-colors" /></div>
              <h3 className="text-lg font-black text-emerald-950 mb-3 group-hover:text-emerald-700 transition-colors brand-font uppercase tracking-tight line-clamp-1">{cond.name}</h3>
              <p className="text-stone-500 text-[11px] leading-relaxed mb-6 flex-grow line-clamp-2 italic">{cond.rootCause}</p>
              <div className="flex flex-wrap gap-1 mb-6">{cond.therapeuticSpices.slice(0, 3).map((spice, i) => (<span key={i} className="text-[7px] font-black uppercase tracking-widest text-emerald-800 bg-emerald-50 px-1 border border-emerald-200">{spice}</span>))}</div>
              <div className="mt-auto pt-4 border-t border-stone-50 opacity-60 flex items-center justify-between"><span className="text-[10px] font-black font-mono text-emerald-800 tracking-widest">CLINICAL GUIDE</span><IconArrowRight size={14} className="text-emerald-600 group-hover:translate-x-1 transition-transform" /></div>
            </CompatLink>
          ))}
        </div>
      </div>
    </div>
  );
}
