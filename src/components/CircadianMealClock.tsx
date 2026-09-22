import React, { useState, useEffect } from 'react';

const PHASES = [
  {
    from: 8,
    to: 14,
    name: "Peak Insulin Sensitivity & Metabolic Window",
    window: "08:00 – 14:00",
    dot: "bg-emerald-500",
    chip: "bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800",
    advice: "Diurnal peak in peripheral GLUT4 expression and beta-cell responsiveness. Optimal window for nutrient-dense complex carbohydrates."
  },
  {
    from: 14,
    to: 20,
    name: "Metabolic Maintenance & Thermogenesis",
    window: "14:00 – 20:00",
    dot: "bg-amber-500",
    chip: "bg-amber-100 dark:bg-amber-950/70 text-amber-900 dark:text-amber-300 border-amber-200 dark:border-amber-800",
    advice: "Moderate insulin sensitivity. Favor high-satiety proteins, healthy fats, and high-fiber legumes over rapidly absorbable sugars."
  },
  {
    from: 20,
    to: 8,
    name: "Nocturnal Fasting & Cellular Repair",
    window: "20:00 – 08:00",
    dot: "bg-indigo-500",
    chip: "bg-indigo-100 dark:bg-indigo-950/70 text-indigo-900 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    advice: "Peripheral insulin sensitivity is at its diurnal nadir. Skeletal muscle glucose uptake is minimal; avoid high-glycemic carbohydrates."
  },
] as const;

function phaseFor(hour: number) {
  return PHASES.find(p => p.from < p.to
    ? hour >= p.from && hour < p.to
    : hour >= p.from || hour < p.to)!;
}

/**
 * Strictly typed interactive component for MDX/Astro. 
 * Prevents XSS as all inputs are explicitly handled by React (Safe-Sink).
 */
export default function CircadianMealClock() {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    setCurrentTime(new Date());
    const timer = setInterval(() => setCurrentTime(new Date()), 1000 * 30);
    return () => clearInterval(timer);
  }, []);

  const phase = currentTime ? phaseFor(currentTime.getHours()) : null;

  const formattedTime = currentTime
    ? currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    : '--:--';

  const dotColor = phase ? phase.dot : 'bg-stone-400 dark:bg-stone-600';
  const isHydrated = phase !== null;

  return (
    <div className="rounded-3xl border border-stone-200/90 dark:border-stone-800 bg-white dark:bg-stone-900 p-6 sm:p-7 shadow-sm transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-200 dark:border-stone-800 pb-4">
        <div className="flex items-center gap-2.5">
          <span className={`h-2.5 w-2.5 rounded-full ${dotColor} ${isHydrated ? 'motion-safe:animate-pulse' : ''}`} aria-hidden="true" />
          <span className="text-xs font-black uppercase tracking-wider text-stone-700 dark:text-stone-300">
            Live Circadian Phase Monitor
          </span>
        </div>
        <div className="inline-flex items-center gap-1.5 rounded-full bg-stone-50 dark:bg-stone-800/80 px-3 py-1 text-xs font-mono font-bold text-stone-700 dark:text-stone-300 border border-stone-200 dark:border-stone-700">
          <span className="text-stone-500 dark:text-stone-400">Local Time:</span>
          <span className="text-emerald-700 dark:text-emerald-400">{formattedTime}</span>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {phase ? (
          <div className={`inline-flex flex-wrap items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold ${phase.chip}`}>
            <span>{phase.name}</span>
            <span className="opacity-75 font-mono text-[11px]">({phase.window})</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-bold bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 border-stone-200 dark:border-stone-700">
            <span>Detecting local time…</span>
            <span className="opacity-75 font-mono text-[11px]">(--:-- – --:--)</span>
          </div>
        )}

        <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          <strong className="text-stone-900 dark:text-stone-100">Physiological Rationale: </strong>
          {phase ? phase.advice : 'Synchronizing circadian clock genes with local diurnal timing coordinates postprandial glucose uptake and metabolic efficiency.'}
        </p>
      </div>

      {/* ::claim{#circadian-insulin}:: */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-stone-200 dark:border-stone-800 pt-3 text-[11px] text-stone-500 dark:text-stone-400">
        <span>Clinical Trial Anchorage: <strong className="text-stone-700 dark:text-stone-300 font-mono">PMID 30472111</strong></span>
        <span className="inline-flex items-center gap-1 font-semibold text-emerald-800 dark:text-emerald-400">Evidence Level 1 · RCT Verified</span>
      </div>
    </div>
  );
}

