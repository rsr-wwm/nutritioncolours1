import React, { useState } from 'react';
import { m } from 'framer-motion';
import { IconSun, IconMoon, IconLeaf, IconCoffee } from './Icons';

export const DynamicCircadianClock = () => {
  const [wakeTime, setWakeTime] = useState(6); // 6:00 AM (default offset reference)
  const [activePhase, setActivePhase] = useState('digest');

  // Calculate rotation offset: 6 AM is 180 degrees. Each hour = 15 degrees.
  const rotationOffset = (wakeTime - 6) * 15;

  const phases = [
    { id: 'wakeup', label: 'Elimination Gate', time: `${wakeTime}:00 - ${wakeTime + 4}:00`, icon: <IconCoffee size={20} />, desc: 'Hydration and mild motion. Body flushes digestive waste. Keep breakfast light.', color: '#F59E0B', bg: 'bg-amber-50/50', border: 'border-amber-200' },
    { id: 'digest', label: 'Peak Digestion', time: `${wakeTime + 4}:00 - ${wakeTime + 8}:00`, icon: <IconSun size={24} />, desc: 'Peak metabolic enzymes (Agni). Consume your largest, nutrient-dense meal.', color: '#EA580C', bg: 'bg-orange-50/50', border: 'border-orange-200' },
    { id: 'absorb', label: 'Absorption & Focus', time: `${wakeTime + 8}:00 - ${wakeTime + 12}:00`, icon: <IconLeaf size={20} />, desc: 'Insulin sensitivity begins declining. Finish physical activities and heavy snacks.', color: '#10B981', bg: 'bg-emerald-50/50', border: 'border-emerald-200' },
    { id: 'repair', label: 'Overnight Cell Repair', time: `${wakeTime + 12}:00 - ${wakeTime}:00`, icon: <IconMoon size={20} />, desc: 'Autophagy phase. Glycogen reserves exhaust, prompting cell cleanout and growth hormone release.', color: '#6366F1', bg: 'bg-indigo-50/50', border: 'border-indigo-200' },
  ];

  const activeData = phases.find(p => p.id === activePhase) || phases[1];

  return (
    <div className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl p-8 rounded-[40px] shadow-xl border border-emerald-100/60 dark:border-emerald-800/40 max-w-lg mx-auto relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-bl-full -mr-8 -mt-8 opacity-40"></div>
      
      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50 mb-2 brand-font flex items-center gap-2">
          <span className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-850 flex items-center justify-center text-emerald-700 dark:text-emerald-300 text-sm">🕒</span>
          Circadian Coach
        </h3>
        <p className="text-stone-500 dark:text-emerald-300/60 text-sm">Drag wake-up time to align your biological metabolic gates.</p>
      </div>

      {/* Interactive Wake Slider */}
      <div className="mb-8 space-y-2 relative z-10">
        <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-emerald-800 dark:text-emerald-200">
          <span>Wake-Up Time</span>
          <span className="font-mono text-emerald-600 dark:text-emerald-350 bg-emerald-50 dark:bg-emerald-900/40 px-2.5 py-1 rounded-lg border border-emerald-100 dark:border-emerald-800/40">{wakeTime}:00 AM</span>
        </div>
        <input 
          type="range" 
          min="4" 
          max="10" 
          value={wakeTime} 
          onChange={(e) => setWakeTime(Number(e.target.value))} 
          className="w-full accent-emerald-600 h-2 bg-stone-100 dark:bg-emerald-900/40 rounded-lg appearance-none cursor-pointer"
        />
      </div>

      {/* Animated Rotatable Dial */}
      <div className="relative w-full aspect-square flex items-center justify-center mb-6">
        <m.div 
          animate={{ rotate: rotationOffset }} 
          transition={{ type: 'spring', stiffness: 60, damping: 15 }} 
          className="w-full h-full relative"
        >
          <svg aria-hidden="true" viewBox="0 0 400 400" className="w-full h-full drop-shadow-lg">
            {/* Outer Ring */}
            <circle cx="200" cy="200" r="190" fill="white" className="stroke-stone-100/80 dark:stroke-emerald-800/30" strokeWidth="1.5" />
            
            {/* Sectors */}
            <path d="M200,200 L390,200 A190,190 0 0,1 295,364.5 Z" fill="#FFFBEB" className="cursor-pointer hover:opacity-90 transition-opacity" transform="rotate(180, 200, 200)" onClick={() => setActivePhase('wakeup')} stroke={activePhase === 'wakeup' ? '#F59E0B' : 'none'} strokeWidth="4" />
            <path d="M200,200 L390,200 A190,190 0 0,1 295,364.5 Z" fill="#FFF7ED" className="cursor-pointer hover:opacity-90 transition-opacity" transform="rotate(240, 200, 200)" onClick={() => setActivePhase('digest')} stroke={activePhase === 'digest' ? '#EA580C' : 'none'} strokeWidth="4" />
            <path d="M200,200 L390,200 A190,190 0 0,1 295,364.5 Z" fill="#ECFDF5" className="cursor-pointer hover:opacity-90 transition-opacity" transform="rotate(300, 200, 200)" onClick={() => setActivePhase('absorb')} stroke={activePhase === 'absorb' ? '#10B981' : 'none'} strokeWidth="4" />
            <path d="M200,200 L390,200 A190,190 0 0,1 10,200 Z" fill="#EEF2FF" className="cursor-pointer hover:opacity-90 transition-opacity" onClick={() => setActivePhase('repair')} stroke={activePhase === 'repair' ? '#6366F1' : 'none'} strokeWidth="4" />

            {/* Hour ticks */}
            {[...Array(12)].map((_, i) => (
              <line key={i} x1="200" y1="20" x2="200" y2="32" transform={`rotate(${i * 30}, 200, 200)`} stroke="#CBD5E1" strokeWidth="2" />
            ))}
          </svg>
        </m.div>

        {/* Static Clock Labels Overlay */}
        <svg aria-hidden="true" viewBox="0 0 400 400" className="absolute inset-0 w-full h-full pointer-events-none z-10 text-[9px] font-black text-stone-400 dark:text-emerald-300/40 select-none">
          <text x="200" y="48" textAnchor="middle">12:00 MIDNIGHT</text>
          <text x="355" y="203" textAnchor="end">6:00 AM</text>
          <text x="200" y="362" textAnchor="middle">12:00 NOON</text>
          <text x="45" y="203" textAnchor="start">6:00 PM</text>
        </svg>

        {/* Central Non-Rotating Detail Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className={`w-[52%] h-[52%] rounded-full bg-white dark:bg-emerald-900 shadow-2xl flex flex-col items-center justify-center p-5 text-center border-4 transition-all duration-300 ${activeData.border} z-20 pointer-events-auto`}>
            <div className="mb-1 animate-bounce-slow" style={{ color: activeData.color }}>{activeData.icon}</div>
            <h4 className="text-sm font-black text-stone-850 dark:text-emerald-50 leading-none mb-1">{activeData.label}</h4>
            <span className="text-[10px] font-black text-stone-400 dark:text-emerald-300/60 uppercase tracking-widest mb-1.5">{activeData.time}</span>
            <p className="text-[9px] text-stone-500 dark:text-emerald-250 leading-tight">{activeData.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
