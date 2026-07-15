import React, { useState } from 'react';
import { m } from 'framer-motion';

export const BiologicalAgeEstimator = ({ activeLocation }: { activeLocation?: any }) => {
  const [chronologicalAge, setChronologicalAge] = useState(40);
  const [hba1c, setHba1c] = useState(5.4); // Glycated Hemoglobin
  const [trigHDL, setTrigHDL] = useState(2.0); // TG/HDL ratio
  const [systolic, setSystolic] = useState(120);
  const [waistHeight, setWaistHeight] = useState(0.48); // Ratio (ideal < 0.5)

  // Clinical algorithm to compute biological offset
  const hba1cOffset = (hba1c - 5.3) * 6;
  const lipidOffset = (trigHDL - 1.8) * 2.5;
  const bpOffset = (systolic - 118) * 0.15;
  const waistOffset = (waistHeight - 0.48) * 35;
  
  const biologicalAge = Math.round(chronologicalAge + hba1cOffset + lipidOffset + bpOffset + waistOffset);
  const diff = biologicalAge - chronologicalAge;
  const isHazard = diff > 4;

  return (
    <div className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl p-8 rounded-[40px] shadow-xl border border-emerald-100/60 dark:border-emerald-800/40 max-w-xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50 brand-font flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/40 flex items-center justify-center text-emerald-700 dark:text-emerald-300 text-sm">🧬</span>
          Biological Age Diagnostics
        </h3>
        <p className="text-stone-500 dark:text-emerald-300/60 text-xs">Verify metabolic efficiency compared to cellular age.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 items-center">
        {/* Sliders Input Area */}
        <div className="space-y-4">
          <div>
            <div className="flex justify-between text-[10px] font-bold text-stone-500 dark:text-emerald-250 uppercase tracking-widest mb-1">
              <span>Chronological Age</span>
              <span className="text-emerald-700 dark:text-emerald-400">{chronologicalAge} Yrs</span>
            </div>
            <input type="range" min="18" max="85" step="1" value={chronologicalAge} onChange={(e) => setChronologicalAge(Number(e.target.value))} aria-label="Chronological Age" className="w-full accent-emerald-600 h-1 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer" />
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-bold text-stone-500 dark:text-emerald-250 uppercase tracking-widest mb-1">
              <span>HbA1c (Blood Sugar)</span>
              <span className="text-emerald-700 dark:text-emerald-400">{hba1c}%</span>
            </div>
            <input type="range" min="4.5" max="9.0" step="0.1" value={hba1c} onChange={(e) => setHba1c(Number(e.target.value))} aria-label="HbA1c percentage" className="w-full accent-emerald-600 h-1 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer" />
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-bold text-stone-500 dark:text-emerald-250 uppercase tracking-widest mb-1">
              <span>Triglyceride / HDL Ratio</span>
              <span className="text-emerald-700 dark:text-emerald-400">{trigHDL}</span>
            </div>
            <input type="range" min="0.5" max="6.0" step="0.1" value={trigHDL} onChange={(e) => setTrigHDL(Number(e.target.value))} aria-label="Triglyceride to HDL ratio" className="w-full accent-emerald-600 h-1 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer" />
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-bold text-stone-500 dark:text-emerald-250 uppercase tracking-widest mb-1">
              <span>Systolic BP (mmHg)</span>
              <span className="text-emerald-700 dark:text-emerald-400">{systolic}</span>
            </div>
            <input type="range" min="95" max="160" step="1" value={systolic} onChange={(e) => setSystolic(Number(e.target.value))} aria-label="Systolic blood pressure" className="w-full accent-emerald-600 h-1 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer" />
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-bold text-stone-500 dark:text-emerald-250 uppercase tracking-widest mb-1">
              <span>Waist-to-Height Ratio</span>
              <span className="text-emerald-700 dark:text-emerald-400">{waistHeight}</span>
            </div>
            <input type="range" min="0.40" max="0.70" step="0.01" value={waistHeight} onChange={(e) => setWaistHeight(Number(e.target.value))} aria-label="Waist-to-height ratio" className="w-full accent-emerald-600 h-1 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer" />
          </div>
        </div>

        {/* Circular SVG Gauge Visual Output */}
        <div className="flex flex-col items-center justify-center bg-stone-50/50 dark:bg-emerald-900/10 p-6 rounded-[32px] border border-stone-100/60 dark:border-emerald-800/30">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Background Circle */}
            <svg role="img" aria-label="Biological age calculator gauge" viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
              <circle cx="50" cy="50" r="42" fill="transparent" stroke="#E2E8F0" className="dark:stroke-emerald-800/20" strokeWidth="8" />
              <m.circle 
                cx="50" 
                cy="50" 
                r="42" 
                fill="transparent" 
                stroke={isHazard ? '#EA580C' : '#059669'} 
                strokeWidth="8" 
                strokeDasharray="264"
                strokeDashoffset={Math.max(264 - (biologicalAge / 100) * 264, 0)}
                transition={{ duration: 1 }}
              />
            </svg>
            <div className="absolute text-center">
              <span className="text-[10px] font-bold text-stone-400 dark:text-emerald-300/60 uppercase tracking-widest block leading-none">Bio Age</span>
              <span className="text-4xl font-black text-emerald-950 dark:text-emerald-50 brand-font">{biologicalAge}</span>
              <span className="text-[8px] font-bold text-stone-500 dark:text-emerald-250 block mt-0.5">Chron: {chronologicalAge}</span>
            </div>
          </div>

          <div className="mt-4 text-center">
            <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${isHazard ? 'bg-orange-100 text-orange-700 border border-orange-200 dark:bg-orange-950/40 dark:text-orange-350 dark:border-orange-900/40' : 'bg-emerald-100 text-emerald-700 border border-emerald-200 dark:bg-emerald-900/40 dark:text-emerald-350 dark:border-emerald-800/40'}`}>
              {diff > 0 ? `+${diff} Yr Aging Offset` : `${diff} Yr Aging Benefit`}
            </span>
          </div>
          
          {activeLocation && (
            <div className="mt-4 p-3.5 bg-stone-50 dark:bg-emerald-900/20 border border-stone-200/50 dark:border-emerald-800/40 rounded-2xl text-left w-full">
              <p className="text-[10px] font-black uppercase text-emerald-800 dark:text-lime-400 tracking-wider mb-1 flex items-center gap-1">
                📍 Regional Bio-Marker Note ({activeLocation.city})
              </p>
              <p className="text-[10px] text-stone-550 dark:text-stone-300 font-medium leading-relaxed">
                Staples in the {activeLocation.zone} zone (such as {activeLocation.zone === 'Middle East' ? 'refined wheat, dates, and heavy late rice meals' : activeLocation.zone === 'South Asia' ? 'white rice, refined flatbreads, and high-fat dairy' : 'regional high-glycemic carbohydrates'}) directly influence HbA1c and TG/HDL ratios. Adjusting these staples using localized chrono-substitution guidelines can reduce biological age by 3 to 8 years.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default BiologicalAgeEstimator;
