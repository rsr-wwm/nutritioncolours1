import React, { useState } from 'react';
import { GENOMIC_VARIANTS_DATA } from '../clinical_databases';
import { GoogleGenAI } from '@google/genai';
import { getStoredGeminiApiKey } from './apiKey';

export const GenomicMatcher = ({ activeLocation }: { activeLocation?: any }) => {
  const [selectedVariant, setSelectedVariant] = useState(GENOMIC_VARIANTS_DATA[0]);
  const [rawText, setRawText] = useState('');
  const [parsing, setParsing] = useState(false);

  const handleParse = async () => {
    if (!rawText) return;
    setParsing(true);
    try {
      const apiKey = getStoredGeminiApiKey();
      if (!apiKey) {
        alert("Please set your Gemini API Key in the Dr. AI Assistant settings to use the genomic uploader.");
        setParsing(false);
        return;
      }
      
      const ai = new GoogleGenAI({ apiKey });
      const prompt = `
        You are a genetic scientist parsing raw DNA genetic reports (23andMe style).
        Extract any of these relevant nutrition SNPs if present in the text: MTHFR (rs1801133), FTO (rs9939609), TCF7L2 (rs7903146).
        Text:
        ${rawText}

        Return strictly in valid JSON format:
        {
          "detected": true,
          "variantId": "mthfr-c677t", // or 'fto-rs9939609', 'tcf7l2-rs7903146'
          "genotype": "TT",
          "shortExplanation": "Summarize what this genotype means for their nutrition."
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: 'application/json' }
      });

      if (response.text) {
        const data = JSON.parse(response.text.replace(/```json\n?|\n?```/g, '').trim());
        if (data.detected) {
          const matched = GENOMIC_VARIANTS_DATA.find(v => v.id === data.variantId);
          if (matched) {
            setSelectedVariant({ ...matched, genotype: matched.genotype + ` - Extracted: ${data.genotype}` });
            alert(`Successfully parsed and mapped variant: ${matched.geneName}`);
          }
        } else {
          alert("No clinical nutrition-related SNPs (MTHFR, FTO, TCF7L2) were identified in the raw log.");
        }
      }
    } catch (e) {
      console.error(e);
      alert("Error parsing DNA data.");
    } finally {
      setParsing(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-emerald-950/80 rounded-[32px] shadow-xl border border-purple-50 dark:border-purple-900/20 p-6 md:p-8 my-6">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-3 bg-purple-100 dark:bg-purple-900/40 text-purple-750 dark:text-purple-300 rounded-full text-xl">
          🔬
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">Nutrigenomic Matcher</h3>
          <p className="text-xs text-stone-500 dark:text-emerald-350/60 uppercase tracking-wider font-bold">Align your genes with your nutrition</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 ml-1 mb-1 block">Select Genetic Variant</label>
            <div className="flex flex-col gap-2">
              {GENOMIC_VARIANTS_DATA.map(v => (
                <button
                  key={v.id}
                  onClick={() => setSelectedVariant(v)}
                  className={`w-full text-left p-3.5 rounded-xl border text-xs font-bold transition-all flex items-center justify-between cursor-pointer ${selectedVariant.id === v.id ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-900 dark:text-purple-350 border-purple-300 dark:border-purple-800' : 'bg-stone-50 dark:bg-emerald-900/20 text-stone-600 dark:text-emerald-300 border-stone-200 dark:border-emerald-800/40 hover:bg-stone-100 dark:hover:bg-emerald-900/40'}`}
                >
                  <span>{v.geneName} ({v.rsid})</span>
                  <span className="opacity-75">{v.genotype}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="border-t border-stone-150 dark:border-emerald-800/20 pt-4">
            <label className="text-[10px] font-black uppercase tracking-widest text-purple-700 dark:text-purple-300 ml-1 mb-1 block">OR Upload DNA raw snippet (e.g. rs1801133 C T...)</label>
            <textarea
              value={rawText}
              onChange={(e) => setRawText(e.target.value)}
              placeholder="Paste raw genetic lines from 23andMe file here..."
              aria-label="DNA raw snippet input"
              className="w-full bg-stone-50 dark:bg-emerald-900/20 border border-stone-200 dark:border-emerald-800/40 p-3 rounded-xl focus:border-purple-500 outline-none text-xs min-h-[80px] text-stone-850 dark:text-emerald-100 resize-none"
            />
            <button
              onClick={handleParse}
              disabled={parsing || !rawText}
              aria-label="Parse DNA raw snippet and match target gene protocols"
              className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold uppercase tracking-widest py-2.5 rounded-xl transition-all shadow-md cursor-pointer"
            >
              {parsing ? 'Parsing raw DNA...' : 'Parse DNA Data'}
            </button>
          </div>
        </div>

        <div className="bg-stone-50/50 dark:bg-emerald-900/10 rounded-2xl border border-stone-150 dark:border-emerald-800/40 p-6 space-y-4">
          <div className="flex justify-between items-center pb-2 border-b border-stone-200 dark:border-emerald-800/20">
            <h4 className="text-lg font-black text-purple-950 dark:text-purple-300">{selectedVariant.geneName} Protocol</h4>
            <span className="px-2 py-0.5 rounded text-[9px] font-black bg-purple-100 dark:bg-purple-900/40 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-800 uppercase tracking-widest">
              {selectedVariant.rsid}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <strong className="block text-stone-400 dark:text-emerald-450 uppercase tracking-wider text-[9px] mb-0.5">Clinical Pathology</strong>
              <p className="text-stone-700 dark:text-emerald-200 leading-relaxed font-sans">{selectedVariant.clinicalImpact}</p>
            </div>
            <div>
              <strong className="block text-purple-700 dark:text-purple-300 uppercase tracking-wider text-[9px] mb-0.5">Nutritional Guideline</strong>
              <p className="text-stone-700 dark:text-emerald-100 leading-relaxed font-bold font-sans bg-white dark:bg-emerald-900/40 border border-purple-100 dark:border-purple-900/20 p-3 rounded-xl shadow-sm">{selectedVariant.dietaryGuideline}</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <strong className="block text-emerald-700 dark:text-emerald-450 uppercase tracking-wider text-[9px] mb-1">Key Nutrients</strong>
                <div className="flex flex-wrap gap-1">
                  {selectedVariant.keyNutrients.map((n, i) => <span key={i} className="bg-emerald-50 dark:bg-emerald-900/60 text-emerald-850 dark:text-emerald-200 px-2 py-0.5 rounded font-black text-[9px] border border-emerald-100 dark:border-emerald-800/40">{n}</span>)}
                </div>
              </div>
              <div>
                <strong className="block text-red-650 dark:text-red-400 uppercase tracking-wider text-[9px] mb-1">Avoid Foods</strong>
                <div className="flex flex-wrap gap-1">
                  {selectedVariant.avoidFoods.map((f, i) => <span key={i} className="bg-red-50 dark:bg-red-950/40 text-red-800 dark:text-red-300 px-2 py-0.5 rounded font-black text-[9px] border border-red-100 dark:border-red-900/40">{f}</span>)}
                </div>
              </div>
            </div>
            
            {activeLocation && (
              <div className="p-3.5 bg-purple-50 dark:bg-purple-950/30 border border-purple-100 dark:border-purple-900/30 rounded-2xl">
                <span className="block text-[9px] font-black text-purple-750 dark:text-purple-300 uppercase tracking-widest mb-1">
                  🧬 Regional Genomic Synergy ({activeLocation.city})
                </span>
                <p className="text-[10px] text-stone-550 dark:text-stone-300 font-medium leading-relaxed">
                  {selectedVariant.id === 'mthfr-c677t' 
                    ? `MTHFR variants restrict folate methylation. In the ${activeLocation.zone} culinary zone, avoid folic-acid fortified commercial flour staples. Prefer natural green leaf infusions and non-fortified local grains.`
                    : selectedVariant.id === 'fto-rs9939609'
                    ? `FTO triggers elevated fat-storage and satiety delays. Under the ${activeLocation.zone} food culture, avoid high-saturated-fat regional cooking mediums. Shift to monounsaturated local oils and high-fiber legumes.`
                    : `TCF7L2 increases susceptibility to insulin resistance from simple carbohydrates. In the ${activeLocation.zone} region, eliminate high-glycemic staple grains and switch to low-glycemic ancestral substitutes.`}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
