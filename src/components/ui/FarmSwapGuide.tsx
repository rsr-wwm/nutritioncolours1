import React, { useState } from 'react';

interface CropDetail {
  season: string;
  staples: string[];
  swaps: { original: string; localReplacement: string; reason: string }[];
}

const REGIONAL_MARKET_DATABASE: Record<string, CropDetail> = {
  'North (Punjab, Haryana, Chandigarh)': {
    season: 'Kharif / Monsoon Staples',
    staples: ['Millet (Bajra)', 'Basmati Rice', 'Moong Dal', 'Fresh Mustard Greens'],
    swaps: [
      { original: 'Imported Quinoa', localReplacement: 'Amaranth (Chaulai) / Barnyard Millet', reason: 'Lower glycemic index, supports local ecosystem.' },
      { original: 'Avocado', localReplacement: 'Soaked Walnuts & Cold-pressed Mustard Seeds', reason: 'High monounsaturated fat profiles matching traditional food prints.' },
      { original: 'Chia Seeds', localReplacement: 'Sweet Basil Seeds (Sabja)', reason: 'Cooling profile suitable for high summer/monsoon temperatures.' }
    ]
  },
  'South (Kerala, Tamil Nadu, Karnataka)': {
    season: 'Monsoon staples',
    staples: ['Brown Rice', 'Finger Millet (Ragi)', 'Black Pepper', 'Fresh Coconut'],
    swaps: [
      { original: 'Kale', localReplacement: 'Moringa Leaves (Murungai)', reason: 'Abundant minerals, triple the antioxidant values of brassica greens.' },
      { original: 'Olive Oil', localReplacement: 'Cold-pressed Coconut Oil', reason: 'Saturated fat profile stable under sub-tropical temperatures.' },
      { original: 'Oats', localReplacement: 'Sprouted Finger Millet (Ragi)', reason: 'High calcium bioavailability, supports gut barrier mucosal structures.' }
    ]
  },
  'West (Goa, Maharashtra, Gujarat)': {
    season: 'Coastal Staples',
    staples: ['Sorghum (Jowar)', 'Amla', 'Hemp Hearts', 'Kokum'],
    swaps: [
      { original: 'Lemon Juice', localReplacement: 'Kokum Infusion', reason: 'Higher hydroxycitric acid profiles supporting liver fat metabolism.' },
      { original: 'Refined Wheat Flour', localReplacement: 'Sorghum (Jowar) flour', reason: 'Gluten-free, highly alkaline profile ideal for stomach ulcers.' }
    ]
  }
};

export const FarmSwapGuide = () => {
  const [region, setRegion] = useState<string>('North (Punjab, Haryana, Chandigarh)');
  const data = REGIONAL_MARKET_DATABASE[region];

  return (
    <div className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl p-8 rounded-[40px] shadow-lg border border-emerald-100/60 dark:border-emerald-800/40 h-full flex flex-col justify-between">
      <div className="space-y-4">
        <div>
          <span className="px-3 py-1 bg-lime-100 text-emerald-800 text-[9px] font-black uppercase tracking-widest rounded-full">GEO & AEO Optimizer</span>
          <h3 className="text-xl font-black text-emerald-950 dark:text-emerald-50 brand-font mt-2">Chrono-Farming & Swap Guide</h3>
          <p className="text-stone-500 dark:text-emerald-300/60 text-xs">Locate crop staples matching your target geographic coordinate.</p>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="region-selector" className="text-[10px] font-black uppercase tracking-widest text-stone-400">Select Outreach Zone</label>
          <select 
            id="region-selector"
            value={region} 
            onChange={(e) => setRegion(e.target.value)} 
            className="w-full p-3 bg-stone-50 dark:bg-emerald-900 border border-stone-200 dark:border-emerald-800 rounded-xl text-xs font-bold text-stone-700 dark:text-white"
          >
            {Object.keys(REGIONAL_MARKET_DATABASE).map(r => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="p-4 bg-emerald-50/50 dark:bg-emerald-900/30 rounded-2xl border border-emerald-100/30">
          <span className="text-[9px] font-black uppercase text-emerald-700 dark:text-lime-400 block mb-1">Active Harvest Cycle</span>
          <p className="text-xs font-mono font-bold text-emerald-950 dark:text-white">{data.season}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.staples.map(s => (
              <span key={s} className="px-2 py-0.5 bg-white dark:bg-emerald-900 text-stone-600 dark:text-emerald-300 border border-stone-200 dark:border-emerald-800 text-[10px] font-semibold rounded-md">{s}</span>
            ))}
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <span className="text-[10px] font-black uppercase tracking-widest text-stone-400 block">Recommended Swaps</span>
          <div className="space-y-2">
            {data.swaps.map(s => (
              <div key={s.original} className="bg-stone-50 dark:bg-emerald-900/10 p-3 rounded-xl border border-stone-100 dark:border-emerald-900/30 flex justify-between items-start gap-4">
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="text-xs line-through text-stone-400 font-bold">{s.original}</span>
                    <span className="text-xs text-stone-400">➔</span>
                    <span className="text-xs text-emerald-900 dark:text-lime-300 font-black">{s.localReplacement}</span>
                  </div>
                  <p className="text-[10px] text-stone-500 dark:text-emerald-400/60 mt-1 leading-normal">{s.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
