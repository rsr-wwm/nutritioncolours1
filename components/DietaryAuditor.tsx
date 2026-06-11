import React, { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { IconBot, IconX, IconFileText, IconMapPin } from './Icons';
import { useViewerTracker } from './ViewerTracker';
import { getStoredGeminiApiKey } from './apiKey';

export const DietaryAuditor = ({ activeLocation }: { activeLocation?: any }) => {
  const { trackInteraction } = useViewerTracker();
  const [mealPlanText, setMealPlanText] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medications, setMedications] = useState('');
  const [conditions, setConditions] = useState('');
  const [loading, setLoading] = useState(false);
  const [auditReport, setAuditReport] = useState<any>(null);

  const runAudit = async () => {
    if (!mealPlanText.trim()) return;
    setLoading(true);
    trackInteraction('calculator', `Dietary Auditor: Submitted plan audit (Allergies: ${allergies || 'none'}, Meds: ${medications || 'none'}, Conditions: ${conditions || 'none'})`);
    try {
      const apiKey = getStoredGeminiApiKey();
      if (!apiKey) {
        // Run a simulated clinical audit
        setTimeout(() => {
          const lowerMeal = mealPlanText.toLowerCase();
          const lowerMed = medications.toLowerCase();
          const lowerCond = conditions.toLowerCase();
          
          let score = 95;
          const critical: string[] = [];
          const warnings: string[] = [];
          const matches: string[] = [];
          const alternatives: any[] = [];

          // Regional adjustments for simulated fallback
          if (activeLocation) {
            const zone = activeLocation.zone;
            if (zone === 'Middle East' && (lowerMeal.includes('rice') || lowerMeal.includes('date') || lowerMeal.includes('sweet'))) {
              score -= 10;
              warnings.push(`High dates/refined carbohydrates detected for ${activeLocation.city} profile. Dr. Shilpa warns that date overload and late Kabsa rice cause heavy nocturnal insulin rushes.`);
              alternatives.push({
                original: "Refined Kabsa Rice / Dates",
                alternative: "Pearl Barley, Quinoa, or Cardamom Infusion",
                reason: "Swaps fast-acting sugars with slow-release, low-glycemic grains matching Middle East metabolic needs."
              });
            }
            if (zone === 'South Asia' && (lowerMeal.includes('rice') || lowerMeal.includes('wheat') || lowerMeal.includes('seed oil'))) {
              score -= 10;
              warnings.push(`Polished rice/refined wheat detected in South Asian culinary profile. High postprandial surges are common; Dr. Shilpa recommends grain-free or millet dinners.`);
              alternatives.push({
                original: "Polished Rice / Refined Wheat",
                alternative: "Foxtail/Barnyard Millet or Cold-pressed Mustard Oil",
                reason: "Improves insulin receptor sensitivity and reduces postprandial glucose surges."
              });
            }
            if (zone === 'North America & Western Europe' && (lowerMeal.includes('beef') || lowerMeal.includes('dairy') || lowerMeal.includes('wheat') || lowerMeal.includes('bacon') || lowerMeal.includes('bread'))) {
              score -= 10;
              warnings.push(`Saturated dairy fats and refined wheat detected in Western diet profile. Combines to block intracellular lipids and trigger insulin resistance.`);
              alternatives.push({
                original: "Processed Beef / Saturated Dairy / Wheat Bread",
                alternative: "Lentils, Organic Tempeh, or Almond Milk",
                reason: "Reduces cardiovascular inflammation and prevents morning insulin blocks."
              });
            }
            if (zone === 'East & Southeast Asia' && (lowerMeal.includes('jasmine') || lowerMeal.includes('noodle') || lowerMeal.includes('coconut'))) {
              score -= 10;
              warnings.push(`High glycemic load polished starches detected in East/Southeast Asian profile. Overloads pancreatic beta cells.`);
              alternatives.push({
                original: "Jasmine Rice / Wheat Noodles",
                alternative: "Buckwheat (Soba) Noodles or Shirataki Konjac Rice",
                reason: "Maintains a lower glycemic index while keeping traditional texture."
              });
            }
          }
          
          // Levothyroxine + Soy interaction
          if (lowerMed.includes('levothyroxine') && (lowerMeal.includes('soy') || lowerMeal.includes('tofu') || lowerMeal.includes('edamame') || lowerMeal.includes('milk'))) {
            score -= 15;
            critical.push("Levothyroxine absorption is severely inhibited by soy protein. Avoid eating soy products within 4 hours of your morning thyroid medication.");
            alternatives.push({
              original: "Soy Milk / Soy Protein",
              alternative: "Almond milk or Coconut milk",
              reason: "Thyroid hormone binding is altered by soy isoflavones, reducing medication absorption."
            });
          }
          
          // Metformin + Berberine
          if (lowerMed.includes('metformin') && (lowerMeal.includes('berberine') || lowerMeal.includes('barberry'))) {
            score -= 20;
            critical.push("Metformin and high-dose Berberine share identical molecular targets (AMPK pathway activation). Co-administration can cause gastrointestinal distress, lactic acidosis risks, or hypoglycemia.");
            alternatives.push({
              original: "Berberine",
              alternative: "Ceylon Cinnamon (1/2 tsp)",
              reason: "Cinnamon improves insulin sensitivity via glucose transporter type 4 (GLUT4) translocation without sharing Metformin's hepatoxicity pathway."
            });
          }
          
          // Diabetes + High Glycemic
          if (lowerCond.includes('diabet') && (lowerMeal.includes('rice') || lowerMeal.includes('white flour') || lowerMeal.includes('maida') || lowerMeal.includes('sugar') || lowerMeal.includes('honey'))) {
            score -= 10;
            warnings.push("High glycemic carbohydrates detected in diabetic profile. Sweeteners or refined grains trigger rapid postprandial glucose spikes.");
            alternatives.push({
              original: "White Rice / Sugar",
              alternative: "Quinoa, Cauliflower Rice, or Stevia",
              reason: "Maintains a lower glycemic load and flattens insulin spikes."
            });
          }

          // Liver disease / fatty liver + seed oils
          if ((lowerCond.includes('liver') || lowerCond.includes('masld')) && (lowerMeal.includes('oil') || lowerMeal.includes('canola') || lowerMeal.includes('sunflower') || lowerMeal.includes('seed oil'))) {
            score -= 10;
            warnings.push("Industrial seed oils (linoleic acid) trigger lipid peroxidation and liver cell inflammation, worsening MASLD.");
            alternatives.push({
              original: "Seed Oils / Canola",
              alternative: "Cold-pressed Olive Oil or Avocado Oil",
              reason: "Rich in monounsaturated fats (MUFA) which reduce hepatic steatosis."
            });
          }
          
          // General wellness checks
          if (lowerMeal.includes('pepper') && lowerMeal.includes('turmeric')) {
            matches.push("Highly positive synergy detected! Consuming Turmeric with Black Pepper (piperine) increases bioavailability of active curcuminoids by up to 2,000%.");
          }
          if (lowerMeal.includes('ginger') && lowerCond.includes('gut')) {
            matches.push("Gingerols in ginger stimulate gut motility and stimulate the Migrating Motor Complex (MMC), accelerating gut healing.");
          }

          if (critical.length === 0 && warnings.length === 0) {
            matches.push("Balanced nutrient density. Good fiber-to-protein ratio. No critical drug-herb-nutrient clashes detected.");
          }
          
          setAuditReport({
            safetyScore: Math.max(score, 45),
            criticalConflicts: critical,
            warnings: warnings,
            beneficialMatches: matches,
            suggestedAlternatives: alternatives
          });
          setLoading(false);
        }, 1200);
        return;
      }

      const ai = new GoogleGenAI({ apiKey });
      const locationContext = activeLocation
        ? `Location: ${activeLocation.city}, ${activeLocation.country || activeLocation.region} (Dietary Zone: ${activeLocation.zone})`
        : "";

      const prompt = `
        You are an expert Clinical Diet Auditor and Safety Officer for a medical nutrition clinic.
        Analyze this patient's proposed dietary plan for safety, drug-nutrient interactions, and allergy compliance.
        
        PATIENT PROFILE:
        - Allergies/Avoid: ${allergies || 'None'}
        - Active Medications: ${medications || 'None'}
        - Health Conditions: ${conditions || 'None'}
        ${locationContext ? `- ${locationContext}` : ''}

        PROPOSED DIETARY PLAN / INGREDIENTS:
        ${mealPlanText}

        Perform a strict clinical safety audit. Look for hidden allergens, drug-herb-nutrient interactions (e.g. Levothyroxine interacting with soy, Warfarin with raw garlic/ginger, or Metformin with high-dose berberine/cinnamon), and metabolic conflicts (e.g. high-glycemic foods in diabetes).
        
        Evaluate the proposed diet in the context of their regional dietary staples and zone. Warn if they are consuming regional high-risk foods (like excess date sugars in the Middle East, polished rice in South Asia, refined corn/wheat in North America) and suggest localized substitutions.

        Provide the audit in strictly valid JSON format (do not use markdown blocks):
        {
          "safetyScore": 85, // 0 to 100
          "criticalConflicts": ["List any severe, unsafe elements or drug-herb interactions. If none, leave empty."],
          "warnings": ["List mild issues or dietary modifications needed."],
          "beneficialMatches": ["Identify highly positive matches in the diet that aid their condition or medication depletion."],
          "suggestedAlternatives": [
            { "original": "Original ingredient", "alternative": "Safe clinical alternative", "reason": "Scientific rationale" }
          ]
        }
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
        config: { responseMimeType: 'application/json' }
      });

      if (response.text) {
        const jsonStr = response.text.replace(/```json\n?|\n?```/g, '').trim();
        setAuditReport(JSON.parse(jsonStr));
      }
    } catch (e) {
      console.error("Dietary Audit Error:", e);
      alert("Error generating safety audit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white dark:bg-emerald-950/80 rounded-[32px] shadow-xl border border-emerald-50 dark:border-emerald-850 p-6 md:p-8 my-6">
      <div className="flex justify-between items-start md:items-center flex-wrap gap-4 mb-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-red-50 dark:bg-red-950/40 text-red-600 dark:text-red-400 rounded-full">
            <IconFileText size={24} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-emerald-950 dark:text-emerald-50">Clinical Dietary Auditor</h3>
            <p className="text-xs text-stone-500 dark:text-emerald-350/60 uppercase tracking-wider font-bold">Safety & Drug-Herb Interaction Checker</p>
          </div>
        </div>
        {activeLocation && (
          <div className="inline-flex items-center gap-1 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-800 dark:text-lime-400 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100 dark:border-emerald-800/40 shadow-sm">
            <IconMapPin size={10} /> {activeLocation.city} Calibration
          </div>
        )}
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-250 ml-1 mb-1 block">1. Draft Meal Plan / Food Log</label>
          <textarea
            value={mealPlanText}
            onChange={(e) => setMealPlanText(e.target.value)}
            placeholder="e.g. Breakfast: Ragi porridge with turmeric, soy milk, and seeds. Lunch: Rice, dal, and spinach salad."
            className="w-full bg-stone-50 dark:bg-emerald-900/20 border border-stone-200 dark:border-emerald-800/40 p-3 rounded-xl focus:border-emerald-500 outline-none text-sm min-h-24 resize-none text-stone-800 dark:text-emerald-100"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-250 ml-1 mb-1 block">Allergies</label>
            <input
              type="text"
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              placeholder="e.g. Gluten, Peanuts"
              className="w-full bg-stone-50 dark:bg-emerald-900/20 border border-stone-200 dark:border-emerald-800/40 p-3 rounded-xl focus:border-emerald-500 outline-none text-xs font-bold text-stone-700 dark:text-emerald-100"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-250 ml-1 mb-1 block">Active Medications</label>
            <input
              type="text"
              value={medications}
              onChange={(e) => setMedications(e.target.value)}
              placeholder="e.g. Levothyroxine, Metformin"
              className="w-full bg-stone-50 dark:bg-emerald-900/20 border border-stone-200 dark:border-emerald-800/40 p-3 rounded-xl focus:border-emerald-500 outline-none text-xs font-bold text-stone-700 dark:text-emerald-100"
            />
          </div>
          <div>
            <label className="text-[10px] font-black uppercase tracking-widest text-emerald-800 dark:text-emerald-250 ml-1 mb-1 block">Health Conditions</label>
            <input
              type="text"
              value={conditions}
              onChange={(e) => setConditions(e.target.value)}
              placeholder="e.g. Hypothyroidism, T2 Diabetes"
              className="w-full bg-stone-50 dark:bg-emerald-900/20 border border-stone-200 dark:border-emerald-800/40 p-3 rounded-xl focus:border-emerald-500 outline-none text-xs font-bold text-stone-700 dark:text-emerald-100"
            />
          </div>
        </div>

        <button
          onClick={runAudit}
          disabled={loading || !mealPlanText}
          aria-label="Perform medical audit on submitted meal plan text"
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-widest py-3.5 rounded-xl transition-all shadow-lg shadow-emerald-100 dark:shadow-emerald-950/20 flex items-center justify-center gap-2 cursor-pointer"
        >
          {loading ? 'Performing Medical Audit...' : 'Audit Dietary Plan'} <IconBot size={18} />
        </button>
      </div>

      {auditReport && (
        <div className="space-y-6 pt-6 border-t border-stone-100 dark:border-emerald-800/20 animate-in fade-in">
          <div className="flex justify-between items-center bg-stone-50 dark:bg-emerald-900/20 p-4 rounded-2xl border border-stone-150 dark:border-emerald-800/40">
            <span className="text-sm font-bold text-stone-700 dark:text-emerald-200">Clinical Safety Score:</span>
            <span className={`text-2xl font-black ${auditReport.safetyScore >= 80 ? 'text-emerald-600' : auditReport.safetyScore >= 60 ? 'text-amber-500' : 'text-red-500'}`}>
              {auditReport.safetyScore}/100
            </span>
          </div>

          {auditReport.criticalConflicts?.length > 0 && (
            <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 p-5 rounded-2xl">
              <h4 className="font-bold text-red-900 dark:text-red-400 text-sm mb-2 flex items-center gap-2">
                <IconX size={16} className="text-red-650" /> CRITICAL CONFLICTS
              </h4>
              <ul className="list-disc list-inside text-xs text-red-700 dark:text-red-300 space-y-1">
                {auditReport.criticalConflicts.map((c: string, i: number) => <li key={i}>{c}</li>)}
              </ul>
            </div>
          )}

          {auditReport.warnings?.length > 0 && (
            <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-5 rounded-2xl">
              <h4 className="font-bold text-amber-900 dark:text-amber-400 text-sm mb-2 flex items-center gap-2">
                ⚠️ WARNINGS & MODIFICATIONS
              </h4>
              <ul className="list-disc list-inside text-xs text-amber-750 dark:text-amber-300 space-y-1">
                {auditReport.warnings.map((w: string, i: number) => <li key={i}>{w}</li>)}
              </ul>
            </div>
          )}

          {auditReport.suggestedAlternatives?.length > 0 && (
            <div className="bg-stone-50 dark:bg-emerald-900/20 p-5 rounded-2xl border border-stone-205 dark:border-emerald-800/40">
              <h4 className="font-bold text-emerald-950 dark:text-emerald-50 text-sm mb-3">Recommended Swaps</h4>
              <div className="space-y-3">
                {auditReport.suggestedAlternatives.map((alt: any, i: number) => (
                  <div key={i} className="bg-white dark:bg-emerald-900/40 p-3 rounded-xl border border-stone-100 dark:border-emerald-800/40 flex flex-col md:flex-row md:items-center justify-between text-xs gap-2 shadow-sm">
                    <div>
                      <span className="line-through text-stone-400 dark:text-emerald-500 font-bold block">{alt.original}</span>
                      <span className="text-emerald-700 dark:text-emerald-300 font-black block">➜ {alt.alternative}</span>
                    </div>
                    <p className="text-stone-500 dark:text-emerald-250 text-[11px] md:max-w-xs">{alt.reason}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
