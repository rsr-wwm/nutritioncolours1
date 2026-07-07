import React, { useState } from 'react';
import { m } from 'framer-motion';

export const CircadianPlate = ({ activeLocation }: { activeLocation?: any }) => {
  const [selectedMeal, setSelectedMeal] = useState<'breakfast' | 'lunch' | 'dinner'>('lunch');

  // Circadian plate targets (fiber, protein, carbs, fats ratios)
  const mealRatios = {
    breakfast: { fiber: 50, protein: 30, carbs: 10, fats: 10, msg: "High Fiber & Morning Activation. Light insulin response." },
    lunch: { fiber: 30, protein: 25, carbs: 35, fats: 10, msg: "Peak Agni (Metabolic Sun). Starch tolerance is highest." },
    dinner: { fiber: 45, protein: 45, carbs: 5, fats: 5, msg: "Sunset Autophagy Gate. Strict low carb to prevent insulin leakage." }
  };

  const current = mealRatios[selectedMeal];

  return (
    <div className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl p-8 rounded-[40px] shadow-lg border border-emerald-100/60 dark:border-emerald-800/40 max-w-md mx-auto flex flex-col justify-between h-full">
      <div className="mb-6 flex justify-between items-center flex-wrap gap-2">
        <div>
          <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-50 brand-font">Plate Visualizer</h3>
          <p className="text-stone-500 dark:text-emerald-300/60 text-xs">Dynamic circadian ingredient ratio guides.</p>
        </div>
        <div className="flex gap-1 p-1 bg-stone-100 dark:bg-emerald-900/40 rounded-xl border border-stone-200 dark:border-emerald-800/40">
          {(['breakfast', 'lunch', 'dinner'] as const).map(m => (
            <button 
              key={m} 
              onClick={() => setSelectedMeal(m)}
              className={`px-3 py-1.5 rounded-lg text-[9px] font-black uppercase tracking-wider transition-all ${selectedMeal === m ? 'bg-white dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300 shadow-sm' : 'text-stone-400 dark:text-emerald-400/60'}`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* SVG Plate Splitting UI */}
      <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
        <svg aria-hidden="true" viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
          <circle cx="50" cy="50" r="45" fill="#f5f5f4" className="dark:fill-emerald-900/20" stroke="#e7e5e4" strokeWidth="1" />
          
          {/* Fiber Segment */}
          <m.circle 
            cx="50" cy="50" r="40" fill="transparent" stroke="#10b981" strokeWidth="8"
            strokeDasharray="251" strokeDashoffset={251 - (current.fiber / 100) * 251}
            transition={{ type: 'spring' }}
          />

          {/* Protein Segment */}
          <m.circle 
            cx="50" cy="50" r="32" fill="transparent" stroke="#8b5cf6" strokeWidth="6"
            strokeDasharray="201" strokeDashoffset={201 - (current.protein / 100) * 201}
            transition={{ type: 'spring' }}
          />

          {/* Carbs Segment */}
          <m.circle 
            cx="50" cy="50" r="24" fill="transparent" stroke="#f59e0b" strokeWidth="4"
            strokeDasharray="150" strokeDashoffset={150 - (current.carbs / 100) * 150}
            transition={{ type: 'spring' }}
          />
        </svg>

        {/* Central visual indicator */}
        <div className="absolute text-center pointer-events-none">
          <span className="text-[10px] font-black text-stone-500 dark:text-emerald-300/60 uppercase tracking-widest block">Metabolic</span>
          <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 uppercase block">Ratios</span>
        </div>
      </div>

      {/* Legend & Advice */}
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-black">
          <div className="text-emerald-600 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-900/20 p-2 rounded-xl border border-emerald-100 dark:border-emerald-800/40">
            FIBER: {current.fiber}%
          </div>
          <div className="text-purple-600 dark:text-purple-400 bg-purple-50/50 dark:bg-purple-900/20 p-2 rounded-xl border border-purple-100 dark:border-purple-800/40">
            PROT: {current.protein}%
          </div>
          <div className="text-amber-600 dark:text-amber-400 bg-amber-50/50 dark:bg-amber-900/20 p-2 rounded-xl border border-amber-100 dark:border-amber-850/40">
            CARB: {current.carbs}%
          </div>
        </div>
        <p className="text-xs text-stone-600 dark:text-emerald-250 leading-relaxed italic text-center font-medium border-t border-stone-100 dark:border-emerald-800/20 pt-3">
          &ldquo;{current.msg}&rdquo;
        </p>
        {activeLocation && (
          <p className="text-[10px] text-stone-400 dark:text-emerald-500 font-bold uppercase tracking-widest text-center mt-2">
            📍 Calibrated for regional {activeLocation.zone} staples
          </p>
        )}
      </div>
    </div>
  );
};
