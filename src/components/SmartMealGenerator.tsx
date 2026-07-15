
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { IconWand, IconPlate, IconLeaf, IconCoffee, IconSun, IconMoon, IconSave, IconRefresh, IconTrash, IconCheck } from './ui/Icons';
import { useViewerTracker, ViewerTrackerProvider } from './ViewerTracker';
import { getStoredGeminiApiKey } from '@/lib/apiKey';
import { logger } from '@/lib/logger';
import { safeJsonParse } from '@/lib/safeUtils';

interface Meal {
  name: string;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
  ingredients: string[];
}

interface DailyPlan {
  breakfast: Meal;
  lunch: Meal;
  snack: Meal;
  dinner: Meal;
}

interface SavedPlan {
  id: string;
  timestamp: number;
  diet: string;
  goal: string;
  calories: number;
  plan: DailyPlan;
}

const SmartMealGeneratorInner = ({ activeLocation }: { activeLocation?: any }) => {
  const { trackInteraction } = useViewerTracker();
  const [activeTab, setActiveTab] = useState<'create' | 'saved'>('create');
  const [diet, setDiet] = useState('Vegetarian');
  const [goal, setGoal] = useState('Weight Loss');
  const [calories, setCalories] = useState(1500);
  const [allergies, setAllergies] = useState('');
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<DailyPlan | null>(null);
  const [savedPlans, setSavedPlans] = useState<SavedPlan[]>([]);
  const [appliedCalories, setAppliedCalories] = useState(false);
  const [appliedProtein, setAppliedProtein] = useState<number | null>(null);
  const [appliedBmi, setAppliedBmi] = useState<{ bmi: number; category: string } | null>(null);
  const [appliedWater, setAppliedWater] = useState<number | null>(null);
  const timersRef = React.useRef<any[]>([]);

  // Listen to custom events from calculators
  useEffect(() => {
    const handleApplyCalories = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.calories) {
        setCalories(customEvent.detail.calories);
        setAppliedCalories(true);
        const timer = setTimeout(() => setAppliedCalories(false), 8000);
        timersRef.current.push(timer);
        
        const el = document.getElementById('smart-meal-generator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const handleApplyProtein = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.protein) {
        setAppliedProtein(customEvent.detail.protein);
        const timer = setTimeout(() => setAppliedProtein(null), 8000);
        timersRef.current.push(timer);

        const el = document.getElementById('smart-meal-generator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const handleApplyBmi = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.bmi) {
        setAppliedBmi({ bmi: customEvent.detail.bmi, category: customEvent.detail.category });
        const cat = customEvent.detail.category;
        if (cat.includes('Overweight') || cat.includes('Obese')) {
          setGoal('Weight Loss');
        } else if (cat.includes('Healthy')) {
          setGoal('Gut Health');
        } else if (cat.includes('Underweight')) {
          setGoal('Muscle Gain');
        }
        const timer = setTimeout(() => setAppliedBmi(null), 8000);
        timersRef.current.push(timer);
        const el = document.getElementById('smart-meal-generator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    const handleApplyWater = (e: Event) => {
      const customEvent = e as CustomEvent;
      if (customEvent.detail && customEvent.detail.water) {
        setAppliedWater(customEvent.detail.water);
        const timer = setTimeout(() => setAppliedWater(null), 8000);
        timersRef.current.push(timer);
        const el = document.getElementById('smart-meal-generator');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('apply_calories_to_meal_planner', handleApplyCalories);
    window.addEventListener('apply_protein_to_meal_planner', handleApplyProtein);
    window.addEventListener('apply_bmi_to_meal_planner', handleApplyBmi);
    window.addEventListener('apply_water_to_meal_planner', handleApplyWater);
    return () => {
      window.removeEventListener('apply_calories_to_meal_planner', handleApplyCalories);
      window.removeEventListener('apply_protein_to_meal_planner', handleApplyProtein);
      window.removeEventListener('apply_bmi_to_meal_planner', handleApplyBmi);
      window.removeEventListener('apply_water_to_meal_planner', handleApplyWater);
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  // Load from LocalStorage
  useEffect(() => {
    const stored = localStorage.getItem('nutrition_saved_plans');
    const plans = safeJsonParse<any[]>(stored, []);
    if (plans.length > 0) setSavedPlans(plans);
  }, []);

  // Save to LocalStorage
  const handleSave = () => {
    if (!plan) return;
    trackInteraction('calculator', `Smart Meal Planner: Saved menu (${diet}, ${goal}, ${calories} kcal)`);
    const newSaved: SavedPlan = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      diet, goal, calories, plan
    };
    const updated = [newSaved, ...savedPlans];
    setSavedPlans(updated);
    localStorage.setItem('nutrition_saved_plans', JSON.stringify(updated));
    setActiveTab('saved');
  };

  const handleDelete = (id: string) => {
    const updated = savedPlans.filter(p => p.id !== id);
    setSavedPlans(updated);
    localStorage.setItem('nutrition_saved_plans', JSON.stringify(updated));
  };

  const getCircadianWindow = () => {
    if (activeLocation) {
      // Deterministic generation based on city name hash
      const cityHash = activeLocation.city.split('').reduce((acc: number, c: string) => acc + c.charCodeAt(0), 0);
      const sunriseHour = 5 + (cityHash % 2); // 5 AM or 6 AM
      const sunriseMin = (cityHash * 7) % 60;
      const sunsetHour = 17 + (cityHash % 2); // 5 PM or 6 PM
      const sunsetMin = (cityHash * 13) % 60;
      
      const formatTime = (h: number, m: number) => {
        const h12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
        const ampm = h >= 12 ? 'PM' : 'AM';
        return `${h12.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')} ${ampm}`;
      };
      
      return {
        sunrise: formatTime(sunriseHour, sunriseMin),
        sunset: formatTime(sunsetHour, sunsetMin),
        eatingStart: formatTime(sunriseHour + 1, sunriseMin), // 1 hour post sunrise
        eatingEnd: formatTime(sunriseHour + 11, sunriseMin), // 10 hour window
      };
    }
    return {
      sunrise: "06:00 AM",
      sunset: "06:30 PM",
      eatingStart: "07:30 AM",
      eatingEnd: "05:30 PM"
    };
  };

  const circadian = getCircadianWindow();

  const generatePlan = async () => {
    setLoading(true);
    trackInteraction('calculator', `Smart Meal Planner: Triggered menu generation (${diet}, ${goal}, ${calories} kcal)`);
    try {
      const apiKey = getStoredGeminiApiKey();
      
      if (!apiKey) {
        alert("Please configure your Gemini API Key in the Clinical Assistant settings (FAB button in the bottom right corner) to generate meal plans.");
        setLoading(false);
        return;
      }
      const ai = new GoogleGenAI({ apiKey });
      const locationContext = activeLocation
        ? `${activeLocation.city}, ${activeLocation.country || activeLocation.region} Context (Dietary Zone: ${activeLocation.zone})`
        : "Indian Context";

      const prompt = `
        Act as a professional Clinical Chronobiologist and Nutritionist (${locationContext}). 
        Generate a strict one-day meal plan for a patient with the following profile:
        - Diet: ${diet}
        - Goal: ${goal}
        - Target Calories: ${calories} kcal
        - BMI details: ${appliedBmi ? `${appliedBmi.bmi} (${appliedBmi.category})` : 'Normal'}
        - Target Hydration: ${appliedWater ? `${appliedWater} Liters` : 'Default 2-3 Liters'}
        - Target Protein: ${appliedProtein ? `${appliedProtein} grams` : 'Normal'}
        - Allergies/Avoid: ${allergies || 'None'}
        - Circadian Eating Window: ${circadian.eatingStart} to ${circadian.eatingEnd} (10-hour sun-aligned window)
        ${activeLocation ? `- Location/Zone: ${activeLocation.city}, ${activeLocation.country} (Zone: ${activeLocation.zone})` : ''}

        Chronobiology Rules:
        1. Breakfast and Lunch must have the highest complex carbohydrates, matching peak digestive fire (agni).
        2. Snack must be a clean, low-glycemic transition element.
        3. Dinner MUST be low-carb and high-protein/fiber to support overnight cellular autophagy and prevent blood glucose excursions.
        4. Provide an optimal time of consumption for each meal fitting within the eating window: ${circadian.eatingStart} to ${circadian.eatingEnd}.

        Return ONLY a JSON object with this exact structure (no markdown):
        {
          "breakfast": { "name": "Name of dish", "calories": 300, "protein": 10, "carbs": 40, "fats": 5, "ingredients": ["ing1", "ing2"], "optimalTime": "${circadian.eatingStart}", "circadianNote": "Note explaining chronobiology benefit" },
          "lunch": { "name": "Name of dish", "calories": 500, "protein": 20, "carbs": 60, "fats": 10, "ingredients": [...], "optimalTime": "Optimal time", "circadianNote": "Note" },
          "snack": { "name": "Name of dish", "calories": 150, "protein": 5, "carbs": 15, "fats": 2, "ingredients": [...], "optimalTime": "Optimal time", "circadianNote": "Note" },
          "dinner": { "name": "Name of dish", "calories": 350, "protein": 25, "carbs": 10, "fats": 8, "ingredients": [...], "optimalTime": "Optimal time", "circadianNote": "Note" }
        }
        Make the dishes specific, healthy, and culturally appropriate for the ${locationContext} context. Emphasize healthy local staples and avoid regional dietary risks associated with this zone. Ensure variety.
      `;

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        config: { responseMimeType: 'application/json' }
      });

      if (response.text) {
        // Strip markdown code blocks if present
        const jsonStr = response.text.replace(/```json\n?|\n?```/g, '').trim();
        const parsed = safeJsonParse<any>(jsonStr, null);
        if (parsed) setPlan(parsed);
      }
    } catch (e) {
      logger.error('SmartMealGenerator', 'Meal generation error', e);
      alert("Clinical engine is busy digesting data. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const MealCard = ({ title, icon, data, color }: { title: string, icon: any, data: any, color: string }) => (
    <div className={`bg-white rounded-3xl p-6 shadow-lg border border-stone-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group`}>
       <div className={`absolute top-0 right-0 w-24 h-24 rounded-bl-full -mr-6 -mt-6 opacity-20 ${color}`}></div>
       
       <div className="flex justify-between items-start mb-4 relative z-10">
          <div className="flex items-center gap-3">
             <div className={`p-2.5 rounded-full ${color} bg-opacity-20 text-stone-700`}>{icon}</div>
             <h4 className="font-black text-sm text-stone-800 uppercase tracking-wider">{title}</h4>
          </div>
          <span className="text-[10px] font-mono font-bold bg-stone-100 text-stone-650 px-2.5 py-1 rounded-full border border-stone-200/50">
             {data.optimalTime}
          </span>
       </div>

       <div className="relative z-10 space-y-3">
          <div>
            <h5 className="font-bold text-lg text-emerald-900 mb-1 line-clamp-2">{data.name}</h5>
            {data.circadianNote && (
              <p className="text-[10px] text-stone-500 italic leading-relaxed">{data.circadianNote}</p>
            )}
          </div>
          <div className="flex flex-wrap gap-1.5">
             {data.ingredients.slice(0, 3).map((ing: string, i: number) => (
                <span key={i} className="text-[9px] bg-stone-105/40 text-stone-600 px-2 py-0.5 rounded-md border border-stone-200 truncate max-w-[100px]">{ing}</span>
             ))}
          </div>
          
          <div className="grid grid-cols-4 gap-2 text-center bg-stone-50 p-2.5 rounded-xl border border-stone-100">
             <div>
                <span className="block text-[8px] text-stone-400 font-bold uppercase">Kcal</span>
                <span className="font-black text-emerald-600 text-xs">{data.calories}</span>
             </div>
             <div>
                <span className="block text-[8px] text-stone-400 font-bold uppercase">Prot</span>
                <span className="font-bold text-stone-700 text-xs">{data.protein}g</span>
             </div>
             <div>
                <span className="block text-[8px] text-stone-400 font-bold uppercase">Carb</span>
                <span className="font-bold text-stone-700 text-xs">{data.carbs}g</span>
             </div>
             <div>
                <span className="block text-[8px] text-stone-400 font-bold uppercase">Fat</span>
                <span className="font-bold text-stone-700 text-xs">{data.fats}g</span>
             </div>
          </div>
       </div>
    </div>
  );

  return (
    <div id="smart-meal-generator" className="w-full bg-white rounded-[40px] shadow-2xl border border-emerald-50 p-8 md:p-12 my-12 animate-in fade-in slide-in-from-bottom-8 relative overflow-hidden min-h-[600px]">
        {/* Background Decor */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-emerald-50 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none"></div>

        {/* Tab Navigation */}
        <div className="relative z-10 flex gap-6 mb-8 border-b border-stone-100 pb-1">
            <button 
                onClick={() => setActiveTab('create')} 
                className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${activeTab === 'create' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400 hover:text-stone-600'}`}
            >
                <IconWand size={16} /> Create Plan
            </button>
            <button 
                onClick={() => setActiveTab('saved')} 
                className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors flex items-center gap-2 ${activeTab === 'saved' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400 hover:text-stone-600'}`}
            >
                <IconSave size={16} /> My Plans ({savedPlans.length})
            </button>
        </div>

        {activeTab === 'create' ? (
            <form 
                data-toolname="generate_daily_meal_plan"
                data-tooldescription="Generate a daily therapeutic nutrition menu plan based on target calories, health goals, diet type, and food allergies."
                data-toolautosubmit
                onSubmit={(e) => { e.preventDefault(); generatePlan(); }}
                className="relative z-10 flex flex-col md:flex-row gap-12"
            >
                {/* Input Section */}
                <div className="w-full md:w-1/3 space-y-6">
                    <div className="mb-8">
                        <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">
                            <IconCheck size={14} /> Clinically Programmed
                        </div>
                        <h2 className="text-4xl font-black text-emerald-950 brand-font mb-2">Smart Plate</h2>
                        <p className="text-stone-500 text-sm mb-4">Generate a perfectly balanced, therapeutic meal plan in seconds.</p>

                        {/* Applied Badges */}
                        <div className="flex flex-col gap-2">
                            {activeLocation && (
                                <div className="inline-flex items-center gap-1.5 bg-emerald-50 dark:bg-emerald-900/40 text-emerald-850 dark:text-lime-400 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200/50 dark:border-emerald-800/45 w-fit">
                                    📍 {activeLocation.city} Calibration
                                </div>
                            )}
                            {appliedCalories && (
                                <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-orange-200 animate-bounce w-fit">
                                    🔥 Calories Applied
                                </div>
                            )}
                            {appliedProtein && (
                                <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-purple-200 animate-bounce w-fit">
                                    🧠 Target Protein Applied ({appliedProtein}g)
                                </div>
                            )}
                            {appliedBmi && (
                                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-200 animate-bounce w-fit">
                                    ⚖️ BMI Applied ({appliedBmi.bmi} - {appliedBmi.category})
                                </div>
                            )}
                            {appliedWater && (
                                <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-3 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-cyan-200 animate-bounce w-fit">
                                    💧 Water Target Applied ({appliedWater}L)
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="space-y-4">
                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1 mb-1 block">Diet Preference</label>
                            <div className="grid grid-cols-2 gap-2">
                                {['Vegetarian', 'Vegan'].map(d => (
                                    <button type="button" key={d} onClick={() => setDiet(d)} className={`py-2 rounded-xl text-xs font-bold transition-all ${diet === d ? 'bg-emerald-600 text-white shadow-lg' : 'bg-stone-50 text-stone-500 hover:bg-emerald-50'}`}>
                                        {d}
                                    </button>
                                ))}
                            </div>
                            <input type="hidden" name="diet" value={diet} />
                        </div>

                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1 mb-1 block">Health Goal</label>
                            <select name="goal" value={goal} onChange={(e) => setGoal(e.target.value)} className="w-full bg-stone-50 border border-stone-200 p-3 rounded-xl focus:border-emerald-500 outline-none text-stone-700 font-bold text-sm">
                                <option value="Weight Loss">Weight Loss</option>
                                <option value="Diabetes Reversal">Diabetes Reversal</option>
                                <option value="Muscle Gain">Muscle Gain</option>
                                <option value="PCOD Management">PCOD Management</option>
                                <option value="Gut Health">Gut Health</option>
                            </select>
                        </div>

                        {/* Circadian Timing Alert */}
                        <div className="bg-emerald-50/50 border border-emerald-100 p-4 rounded-2xl text-[11px] text-stone-600 space-y-1.5 relative overflow-hidden">
                          <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 opacity-5 rounded-full blur-xl"></div>
                          <span className="font-black text-emerald-800 uppercase tracking-widest block text-[9px]">Circadian Sun Cycle Calibration</span>
                          <div className="flex justify-between items-center text-xs font-bold text-emerald-950">
                            <span>☀️ Sunrise: {circadian.sunrise}</span>
                            <span>🌙 Sunset: {circadian.sunset}</span>
                          </div>
                          <p className="border-t border-emerald-100/30 pt-2 leading-relaxed">
                            Your biological clock indicates an optimal **10-hour eating window**: <strong className="text-emerald-800">{circadian.eatingStart} to {circadian.eatingEnd}</strong>.
                          </p>
                        </div>

                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1 mb-1 block">Daily Calories: <span className="text-emerald-900 text-base">{calories}</span></label>
                            <input type="range" name="calories" min="1200" max="3000" step="50" value={calories} onChange={(e) => setCalories(Number(e.target.value))} className="w-full accent-emerald-600 h-2 bg-stone-200 rounded-lg appearance-none cursor-pointer" />
                            <div className="flex justify-between text-[9px] text-stone-400 mt-1 font-bold">
                                <span>1200</span>
                                <span>3000</span>
                            </div>
                        </div>

                        <div>
                            <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1 mb-1 block">Allergies / Avoid</label>
                            <input 
                                type="text" 
                                name="allergies" 
                                value={allergies} 
                                onChange={(e) => setAllergies(e.target.value)} 
                                placeholder="e.g. Peanuts, Gluten, Dairy (optional)" 
                                data-toolparamdescription="Comma-separated food allergies or ingredients to avoid."
                                className="w-full bg-stone-50 border border-stone-200 p-3 rounded-xl focus:border-emerald-500 outline-none text-stone-700 text-sm font-semibold" 
                            />
                        </div>

                        <button 
                            type="submit"
                            disabled={loading}
                            aria-label="Generate therapeutic daily meal plan based on selected preferences"
                            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white py-4 rounded-2xl font-black uppercase tracking-widest shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 mt-4"
                        >
                            {loading ? (
                                <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div> Calculating plan...</>
                            ) : (
                                <>Generate Menu <IconPlate size={20} /></>
                            )}
                        </button>
                    </div>
                </div>

                {/* Results Section */}
                <div className="w-full md:w-2/3 bg-stone-50/50 rounded-[32px] border border-stone-100 p-6 md:p-8 relative min-h-[400px] flex flex-col justify-center">
                    {!plan && !loading && (
                        <div className="text-center text-stone-400">
                            <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-300">
                                <IconPlate size={48} />
                            </div>
                            <p className="font-bold text-sm">Your personalized menu will appear here.</p>
                        </div>
                    )}

                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white/50 backdrop-blur-sm z-20 rounded-[32px]">
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-4"></div>
                                <p className="text-emerald-800 font-bold animate-pulse text-xs uppercase tracking-widest">Designing Protocol...</p>
                            </div>
                        </div>
                    )}

                    {plan && (
                        <div className="animate-in fade-in zoom-in-95 duration-500">
                            <div className="flex justify-between items-center mb-6">
                                <div>
                                    <h3 className="font-bold text-emerald-900 text-lg">Daily Protocol</h3>
                                    <p className="text-[10px] text-stone-500 uppercase tracking-widest">{calories} kcal • {diet}</p>
                                </div>
                                <div className="flex gap-2">
                                    <button 
                                        type="button"
                                        onClick={handleSave} 
                                        className="bg-white text-emerald-700 px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-50 border border-emerald-100 shadow-sm flex items-center gap-2 transition-all"
                                    >
                                        <IconSave size={14} /> Save
                                    </button>
                                    <button 
                                        type="button"
                                        onClick={generatePlan} 
                                        className="bg-emerald-600 text-white px-4 py-2 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-emerald-700 shadow-sm flex items-center gap-2 transition-all"
                                    >
                                        <IconRefresh size={14} /> New
                                    </button>
                                </div>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <MealCard title="Breakfast" icon={<IconCoffee size={18}/>} data={plan.breakfast} color="bg-orange-400" />
                                <MealCard title="Lunch" icon={<IconSun size={18}/>} data={plan.lunch} color="bg-yellow-400" />
                                <MealCard title="Snack" icon={<IconLeaf size={18}/>} data={plan.snack} color="bg-green-400" />
                                <MealCard title="Dinner" icon={<IconMoon size={18}/>} data={plan.dinner} color="bg-indigo-400" />
                            </div>
                        </div>
                    )}
                </div>
            </form>
        ) : (
            <div className="relative z-10 animate-in fade-in slide-in-from-right-4">
                {savedPlans.length === 0 ? (
                    <div className="text-center py-20 bg-stone-50 rounded-[32px] border border-stone-100 border-dashed">
                        <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4 text-stone-300">
                            <IconSave size={32} />
                        </div>
                        <div className="font-bold text-stone-600">No Saved Plans</div>
                        <p className="text-stone-400 text-sm mb-6">Create a plan and save it to view it here.</p>
                        <button onClick={() => setActiveTab('create')} className="text-emerald-600 font-bold text-xs uppercase tracking-widest hover:underline">Create Now</button>
                    </div>
                ) : (
                    <div className="grid gap-6">
                        {savedPlans.map((savedPlan) => (
                            <div key={savedPlan.id} className="bg-white p-6 rounded-[32px] shadow-sm border border-stone-100 hover:shadow-md transition-all">
                                <div className="flex justify-between items-start mb-6 pb-6 border-b border-stone-50">
                                    <div>
                                        <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-1">
                                            {new Date(savedPlan.timestamp).toLocaleDateString()}
                                        </span>
                                        <h3 className="font-bold text-emerald-900 text-lg flex items-center gap-2">
                                            {savedPlan.goal} <span className="text-stone-300">•</span> {savedPlan.diet}
                                        </h3>
                                        <p className="text-xs text-stone-500 font-medium mt-1">{savedPlan.calories} Calories</p>
                                    </div>
                                    <button 
                                        onClick={() => handleDelete(savedPlan.id)} 
                                        className="text-stone-300 hover:text-red-500 p-2 hover:bg-red-50 rounded-xl transition-all"
                                        title="Delete Plan"
                                    >
                                        <IconTrash size={18} />
                                    </button>
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="p-3 bg-orange-50 rounded-2xl border border-orange-100">
                                        <span className="text-[9px] font-bold text-orange-400 uppercase block mb-1">Breakfast</span>
                                        <p className="text-xs font-bold text-orange-900 line-clamp-2">{savedPlan.plan.breakfast.name}</p>
                                    </div>
                                    <div className="p-3 bg-yellow-50 rounded-2xl border border-yellow-100">
                                        <span className="text-[9px] font-bold text-yellow-600 uppercase block mb-1">Lunch</span>
                                        <p className="text-xs font-bold text-yellow-900 line-clamp-2">{savedPlan.plan.lunch.name}</p>
                                    </div>
                                    <div className="p-3 bg-green-50 rounded-2xl border border-green-100">
                                        <span className="text-[9px] font-bold text-green-600 uppercase block mb-1">Snack</span>
                                        <p className="text-xs font-bold text-green-900 line-clamp-2">{savedPlan.plan.snack.name}</p>
                                    </div>
                                    <div className="p-3 bg-indigo-50 rounded-2xl border border-indigo-100">
                                        <span className="text-[9px] font-bold text-indigo-400 uppercase block mb-1">Dinner</span>
                                        <p className="text-xs font-bold text-indigo-900 line-clamp-2">{savedPlan.plan.dinner.name}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        )}
    </div>
  );
};

export const SmartMealGenerator = (props: any) => (
  <ViewerTrackerProvider>
    <SmartMealGeneratorInner {...props} />
  </ViewerTrackerProvider>
);
