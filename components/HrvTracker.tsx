import React, { useState } from 'react';
import { m } from 'framer-motion';

export const HrvTracker = () => {
  const [dinnerTime, setDinnerTime] = useState(19); // 7:00 PM (19:00)
  
  // Late dinner decreases overnight HRV (RMSSD) and delays peak recovery
  const isLate = dinnerTime > 20; 
  const targetHrv = isLate ? 32 : 68;

  // Path data points representing typical overnight curves (10 PM to 6 AM)
  const pathEarly = "M10 120 C 50 110, 100 80, 150 40 C 200 10, 250 20, 300 20";
  const pathLate = "M10 120 C 50 125, 100 125, 150 115 C 200 95, 250 85, 300 80";

  return (
    <div className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl p-8 rounded-[40px] shadow-lg border border-emerald-100/60 dark:border-emerald-800/40 h-full flex flex-col hover:shadow-xl transition-all duration-300">
      <div className="mb-4">
        <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50 brand-font flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-500 dark:text-indigo-300">❤️</span>
          HRV & Stress Correlator
        </h3>
        <p className="text-stone-500 dark:text-emerald-300/60 text-sm">See how dinner timing suppresses parasympathetic autonomic tone.</p>
      </div>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-250">
          <span>Dinner Logged Time</span>
          <span className={`font-mono px-2 py-0.5 rounded-lg border ${isLate ? 'bg-red-50 text-red-650 border-red-100 dark:bg-red-950/40 dark:border-red-900/40 animate-pulse' : 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/40 dark:border-emerald-800/40'}`}>
            {dinnerTime > 12 ? `${dinnerTime - 12}:00 PM` : `${dinnerTime}:00 AM`}
          </span>
        </div>
        <input 
          type="range" 
          min="17" 
          max="23" 
          value={dinnerTime} 
          onChange={(e) => setDinnerTime(Number(e.target.value))} 
          className="w-full accent-indigo-500 h-2 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* SVG Canvas for Curves */}
      <div className="relative bg-stone-900 rounded-2xl p-4 flex-grow border border-stone-850 min-h-[160px] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] bg-[size:16px_16px]"></div>
        
        <svg viewBox="0 0 320 150" className="w-full h-full relative z-10" role="img" aria-label="Heart Rate Variability Trend Chart">
          {/* Grid lines */}
          <line x1="0" y1="120" x2="320" y2="120" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="75" x2="320" y2="75" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />
          <line x1="0" y1="30" x2="320" y2="30" stroke="#334155" strokeWidth="0.5" strokeDasharray="4 4" />

          {/* Guidelines */}
          <text x="5" y="15" fill="#64748b" className="text-[8px] font-bold">100ms (High Vagal Tone)</text>
          <text x="5" y="140" fill="#64748b" className="text-[8px] font-bold">10ms (Slight Stress)</text>

          {/* Reference Early Path (Static Dash) */}
          <path d={pathEarly} fill="none" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />

          {/* Animated Active Overnight HRV Path */}
          <path 
            d={isLate ? pathLate : pathEarly}
            fill="none" 
            stroke={isLate ? '#ef4444' : '#10b981'} 
            strokeWidth="3.5"
            className="transition-all duration-1000 ease-in-out"
          />
        </svg>
      </div>

      {/* Real-time Bio-Feedback Cards */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="p-4 rounded-2xl border border-stone-150 dark:border-emerald-800/40 bg-stone-50/50 dark:bg-emerald-900/10">
          <span className="block text-[9px] text-stone-400 dark:text-emerald-350/80 font-bold uppercase mb-1">Overnight HRV Peak</span>
          <div className={`text-2xl font-black leading-none ${isLate ? 'text-red-500' : 'text-emerald-600 dark:text-emerald-400'}`}>{targetHrv} ms</div>
          <span className="text-[8px] text-stone-400 dark:text-emerald-400/60 font-medium">Goal: &gt; 50 ms</span>
        </div>
        <div className="p-4 rounded-2xl border border-stone-150 dark:border-emerald-800/40 bg-stone-50/50 dark:bg-emerald-900/10">
          <span className="block text-[9px] text-stone-400 dark:text-emerald-350/80 font-bold uppercase mb-1">Autonomic State</span>
          <div className="text-base font-bold text-stone-750 dark:text-emerald-100 leading-tight">
            {isLate ? '⚠️ Sympathetic Locked' : '🌿 Rest & Recover'}
          </div>
          <span className="text-[8px] text-stone-400 dark:text-emerald-400/60 leading-none block mt-1">
            {isLate ? 'Digestion stalls sleep autophagy.' : 'Clean system reset.'}
          </span>
        </div>
      </div>
    </div>
  );
};
