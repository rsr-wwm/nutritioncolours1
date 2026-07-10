
import React, { useState } from 'react';
import { IconSun, IconMoon, IconLeaf, IconCoffee } from './Icons';

export const CircadianClock = () => {
  const [activePhase, setActivePhase] = useState<string | null>('digest');

  const phases = [
    { id: 'wakeup', label: 'Elimination', time: '06:00 - 10:00', icon: <IconCoffee size={20} />, desc: 'Hydrate & Move. The body actively flushes toxins. Light fruit only.', color: '#F59E0B', bg: 'bg-amber-50', border: 'border-amber-200' },
    { id: 'digest', label: 'Digestion', time: '10:00 - 14:00', icon: <IconSun size={24} />, desc: 'Peak Agni (Fire). Eat your largest, most nutrient-dense meal now.', color: '#EA580C', bg: 'bg-orange-50', border: 'border-orange-200' },
    { id: 'absorb', label: 'Absorption', time: '14:00 - 18:00', icon: <IconLeaf size={20} />, desc: 'Energy stabilizes. Ideal for deep work. Avoid heavy snacking.', color: '#10B981', bg: 'bg-emerald-50', border: 'border-emerald-200' },
    { id: 'repair', label: 'Repair', time: '18:00 - 06:00', icon: <IconMoon size={20} />, desc: 'Fasting Window. Growth hormone spikes for cellular repair. Sleep.', color: '#6366F1', bg: 'bg-indigo-50', border: 'border-indigo-200' },
  ];

  const activeData = phases.find(p => p.id === activePhase) || phases[1];

  return (
    <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
        {/* SVG Clock */}
        <svg role="img" aria-label="Interactive circadian rhythm daily cycle clock" viewBox="0 0 400 400" className="w-full h-full drop-shadow-xl transform transition-transform duration-700 hover:scale-105">
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="4" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>
            
            {/* Outer Ring */}
            <circle cx="200" cy="200" r="190" fill="white" className="stroke-stone-100" strokeWidth="1" />
            
            {/* SECTORS 
                The layout assumes: 
                Top (12 PM) = -90 deg.
                Right (6 PM) = 0 deg.
                Bottom (12 AM) = 90 deg.
                Left (6 AM) = 180 deg.
            */}
            
            {/* Sector 1: Elimination (06:00 - 10:00) */}
            {/* Starts Left (180deg). Ends Top-Left (240deg). */}
            <path 
                d="M200,200 L390,200 A190,190 0 0,1 295,364.5 Z" 
                fill="#FFFBEB" 
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                transform="rotate(180, 200, 200)"
                onClick={() => setActivePhase('wakeup')}
                onMouseEnter={() => setActivePhase('wakeup')}
                stroke={activePhase === 'wakeup' ? '#F59E0B' : 'none'}
                strokeWidth="4"
            />

            {/* Sector 2: Digestion (10:00 - 14:00) */}
            {/* Starts Top-Left (240deg). Ends Top-Right (300deg). */}
            <path 
                d="M200,200 L390,200 A190,190 0 0,1 295,364.5 Z" 
                fill="#FFF7ED" 
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                transform="rotate(240, 200, 200)"
                onClick={() => setActivePhase('digest')}
                onMouseEnter={() => setActivePhase('digest')}
                stroke={activePhase === 'digest' ? '#EA580C' : 'none'}
                strokeWidth="4"
            />

            {/* Sector 3: Absorption (14:00 - 18:00) */}
            {/* Starts Top-Right (300deg). Ends Right (360/0deg). */}
            <path 
                d="M200,200 L390,200 A190,190 0 0,1 295,364.5 Z" 
                fill="#ECFDF5" 
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                transform="rotate(300, 200, 200)"
                onClick={() => setActivePhase('absorb')}
                onMouseEnter={() => setActivePhase('absorb')}
                stroke={activePhase === 'absorb' ? '#10B981' : 'none'}
                strokeWidth="4"
            />

            {/* Sector 4: Repair (18:00 - 06:00) - The big night chunk */}
            {/* Starts Right (0deg). Ends Left (180deg). Bottom half. */}
            <path 
                d="M200,200 L390,200 A190,190 0 0,1 10,200 Z" 
                fill="#EEF2FF" 
                className="cursor-pointer transition-all duration-300 hover:opacity-80"
                onClick={() => setActivePhase('repair')}
                onMouseEnter={() => setActivePhase('repair')}
                stroke={activePhase === 'repair' ? '#6366F1' : 'none'}
                strokeWidth="4"
            />

            {/* Decorative Dashed Lines for Hours */}
            {[...Array(12)].map((_, i) => (
                <line 
                    key={i} 
                    x1="200" y1="20" x2="200" y2="30" 
                    transform={`rotate(${i * 30}, 200, 200)`} 
                    stroke="#CBD5E1" 
                    strokeWidth="2" 
                />
            ))}

            {/* Labels */}
            {/* 12 PM Top */}
            <text x="200" y="55" textAnchor="middle" fontSize="10" fill="#94A3B8" fontWeight="bold">12:00 (Noon)</text>
            {/* 12 AM Bottom */}
            <text x="200" y="355" textAnchor="middle" fontSize="10" fill="#94A3B8" fontWeight="bold">00:00 (Midnight)</text>
            {/* 6 AM Left */}
            <text x="45" y="205" textAnchor="middle" fontSize="10" fill="#94A3B8" fontWeight="bold">06:00</text>
            {/* 6 PM Right */}
            <text x="355" y="205" textAnchor="middle" fontSize="10" fill="#94A3B8" fontWeight="bold">18:00</text>
        </svg>

        {/* Central Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className={`w-[52%] h-[52%] rounded-full bg-white shadow-2xl flex flex-col items-center justify-center p-5 text-center border-4 transition-all duration-300 ${activeData.border} z-10`}>
                <div className="mb-2" style={{ color: activeData.color }}>{activeData.icon}</div>
                <h4 className="text-base md:text-lg font-black text-stone-800 leading-none mb-1">{activeData.label}</h4>
                <span className="text-[10px] md:text-xs font-bold text-stone-400 uppercase tracking-widest mb-1 md:mb-2">{activeData.time}</span>
                <p className="text-[8px] md:text-[10px] text-stone-500 leading-tight">{activeData.desc}</p>
            </div>
        </div>
    </div>
  );
};
