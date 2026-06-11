
import React, { useState } from 'react';
import { IconUtensils, IconCoffee } from './Icons';

// --- BMI Calculator (Green/Health/Balance) ---
export const BmiCalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState<number | null>(null);

  const calculateBMI = () => {
    const h = parseFloat(height) / 100; // cm to m
    const w = parseFloat(weight);
    if (h > 0 && w > 0) {
      setBmi(Math.round((w / (h * h)) * 10) / 10);
    }
  };

  const getStatus = (val: number) => {
    if (val < 18.5) return { label: 'Underweight', color: 'text-blue-500', rangeColor: 'bg-blue-400', width: '20%' };
    if (val < 25) return { label: 'Healthy Weight', color: 'text-emerald-600', rangeColor: 'bg-emerald-500', width: '40%' };
    if (val < 30) return { label: 'Overweight', color: 'text-orange-500', rangeColor: 'bg-orange-400', width: '60%' };
    return { label: 'Obese', color: 'text-red-500', rangeColor: 'bg-red-500', width: '85%' };
  };

  // Helper to position the marker. Range 10-40 maps to 0-100% roughly.
  const getMarkerPosition = (val: number) => {
      const min = 15;
      const max = 40;
      const clamped = Math.min(Math.max(val, min), max);
      return ((clamped - min) / (max - min)) * 100;
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-emerald-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
      
      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-emerald-950 mb-2 brand-font flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">BMI</span>
            Body Mass Index
        </h3>
        <p className="text-stone-500 text-sm">Screening tool for weight category.</p>
      </div>
      
      <div className="space-y-4 flex-grow relative z-10">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1">Height</label>
                <div className="relative">
                    <input 
                    type="number" 
                    placeholder="170" 
                    value={height} 
                    onChange={(e) => setHeight(e.target.value)}
                    className="w-full bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl focus:border-emerald-500 outline-none text-emerald-900 font-bold" 
                    />
                    <span className="absolute right-3 top-3.5 text-xs text-emerald-400 font-bold">cm</span>
                </div>
            </div>
            <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1">Weight</label>
                <div className="relative">
                    <input 
                    type="number" 
                    placeholder="70" 
                    value={weight} 
                    onChange={(e) => setWeight(e.target.value)}
                    className="w-full bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl focus:border-emerald-500 outline-none text-emerald-900 font-bold" 
                    />
                    <span className="absolute right-3 top-3.5 text-xs text-emerald-400 font-bold">kg</span>
                </div>
            </div>
        </div>
        <button 
          onClick={calculateBMI}
          className="w-full bg-emerald-600 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 mt-2"
        >
          Calculate
        </button>
      </div>

      {bmi && (
        <div className="mt-8 relative z-10 animate-in fade-in slide-in-from-bottom-4">
          <div className="text-center mb-4">
             <div className="text-5xl font-black text-emerald-900 mb-1">{bmi}</div>
             <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block bg-white shadow-sm border border-stone-100 ${getStatus(bmi).color}`}>
                {getStatus(bmi).label}
             </div>
          </div>
          
          {/* Visual Gauge */}
          <div className="relative h-4 w-full bg-stone-200 rounded-full overflow-hidden mb-2">
             {/* Gradient Background representing ranges */}
             <div className="absolute inset-0 bg-gradient-to-r from-blue-300 via-green-400 to-red-400 opacity-80"></div>
             {/* Notches for ranges approx */}
             <div className="absolute top-0 bottom-0 left-[14%] w-0.5 bg-white/50"></div> {/* 18.5 approx */}
             <div className="absolute top-0 bottom-0 left-[40%] w-0.5 bg-white/50"></div> {/* 25 approx */}
             <div className="absolute top-0 bottom-0 left-[60%] w-0.5 bg-white/50"></div> {/* 30 approx */}
          </div>
          
          {/* Marker */}
          <div className="relative h-4 w-full -mt-5 pointer-events-none">
             <div 
                className="absolute top-0 w-4 h-6 bg-emerald-900 rounded-full border-2 border-white shadow-md transform -translate-x-1/2 transition-all duration-1000 ease-out"
                style={{ left: `${getMarkerPosition(bmi)}%` }}
             ></div>
          </div>
          
          <div className="flex justify-between text-[10px] text-stone-400 font-bold uppercase mt-2">
             <span>Under</span>
             <span>Healthy</span>
             <span>Over</span>
             <span>Obese</span>
          </div>
          <button
             onClick={() => {
               window.dispatchEvent(new CustomEvent('apply_bmi_to_meal_planner', { detail: { bmi: bmi, category: getStatus(bmi).label } }));
             }}
             className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-widest py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer mt-4"
          >
             Apply BMI Target to AI Meal Planner
          </button>
        </div>
      )}
    </div>
  );
};

// --- BMR / Calorie Calculator (Orange/Energy/Vitality) ---
export const CalorieCalculator = () => {
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('female');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('1.2');
  const [result, setResult] = useState<any>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const h = parseFloat(height);
    const a = parseFloat(age);
    const act = parseFloat(activity);

    if (w && h && a) {
      // Mifflin-St Jeor Equation
      let bmr = (10 * w) + (6.25 * h) - (5 * a);
      bmr += gender === 'male' ? 5 : -161;
      
      const tdee = Math.round(bmr * act);
      
      setResult({
        bmr: Math.round(bmr),
        maintenance: tdee,
        loss: tdee - 500
      });
    }
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-orange-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>

      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-orange-950 mb-2 brand-font flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600"><IconCoffee size={16}/></span>
            Calorie Needs
        </h3>
        <p className="text-stone-500 text-sm">Calculate metabolic rate (BMR) & TDEE.</p>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div className="flex gap-2 p-1 bg-orange-50 rounded-xl border border-orange-200">
           {['female', 'male'].map(g => (
             <button 
               key={g}
               onClick={() => setGender(g)}
               className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${gender === g ? 'bg-white text-orange-700 shadow-sm transform scale-105' : 'text-orange-400 hover:text-orange-600'}`}
             >
               {g}
             </button>
           ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
           <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none focus:border-orange-400 text-center font-bold text-orange-900" />
           <input type="number" placeholder="W (kg)" value={weight} onChange={e => setWeight(e.target.value)} className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none focus:border-orange-400 text-center font-bold text-orange-900" />
           <input type="number" placeholder="H (cm)" value={height} onChange={e => setHeight(e.target.value)} className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none focus:border-orange-400 text-center font-bold text-orange-900" />
        </div>
        
        <div className="relative">
            <select value={activity} onChange={e => setActivity(e.target.value)} className="w-full bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none text-stone-700 text-sm font-bold focus:border-orange-400 appearance-none">
                <option value="1.2">Sedentary (Office job)</option>
                <option value="1.375">Light Activity (1-3 days/wk)</option>
                <option value="1.55">Moderate Activity (3-5 days/wk)</option>
                <option value="1.725">Very Active (6-7 days/wk)</option>
            </select>
            <div className="absolute right-4 top-4 pointer-events-none text-orange-400">▼</div>
        </div>

        <button 
          onClick={calculate}
          className="w-full bg-orange-500 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-200 mt-2"
        >
          Calculate
        </button>
      </div>

      {result && (
        <div className="mt-8 space-y-4 animate-in fade-in slide-in-from-bottom-4 relative z-10">
          <div className="grid grid-cols-2 gap-4">
             <div className="p-4 bg-white rounded-2xl border-2 border-orange-100 text-center shadow-sm flex flex-col justify-center">
                <span className="text-[10px] font-bold text-stone-400 uppercase mb-1">Maintenance</span>
                <div className="text-2xl font-black text-stone-800 leading-none">{result.maintenance}</div>
                <span className="text-[9px] text-stone-400 font-bold mt-1">KCAL / DAY</span>
             </div>
             <div className="p-4 bg-orange-500 rounded-2xl border-2 border-orange-600 text-center shadow-lg transform scale-105 flex flex-col justify-center text-white">
                <span className="text-[10px] font-bold text-orange-100 uppercase mb-1">Fat Loss</span>
                <div className="text-3xl font-black leading-none">{result.loss}</div>
                <span className="text-[9px] text-orange-100 font-bold mt-1">KCAL / DAY</span>
             </div>
          </div>
          <button
             onClick={() => {
               window.dispatchEvent(new CustomEvent('apply_calories_to_meal_planner', { detail: { calories: result.loss } }));
             }}
             className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-black uppercase tracking-widest py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
          >
             Apply Target to AI Meal Planner
          </button>
        </div>
      )}
    </div>
  );
};

// --- Water Intake Calculator (Blue/Hydration/Flow) ---
export const WaterCalculator = () => {
  const [weight, setWeight] = useState('');
  const [activityMins, setActivityMins] = useState('');
  const [water, setWater] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    const a = parseFloat(activityMins) || 0;
    
    if (w) {
      // Basic formula: 35ml per kg + 500ml for every 30 mins exercise
      let needs = w * 0.033; 
      if (a > 0) needs += (a / 30) * 0.35;
      setWater(Math.round(needs * 10) / 10);
    }
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-cyan-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>

      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-cyan-950 mb-2 brand-font flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-cyan-100 flex items-center justify-center text-cyan-600 text-xl">💧</span>
            Hydration
        </h3>
        <p className="text-stone-500 text-sm">Optimal daily water intake.</p>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-700 ml-1">Body Weight</label>
            <div className="relative">
                <input type="number" placeholder="70" value={weight} onChange={e => setWeight(e.target.value)} className="w-full bg-cyan-50/50 border border-cyan-100 p-3 rounded-xl outline-none focus:border-cyan-400 font-bold text-cyan-900" />
                <span className="absolute right-4 top-3.5 text-xs text-cyan-400 font-bold">kg</span>
            </div>
        </div>
        <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-700 ml-1">Daily Exercise</label>
            <div className="relative">
                <input type="number" placeholder="30" value={activityMins} onChange={e => setActivityMins(e.target.value)} className="w-full bg-cyan-50/50 border border-cyan-100 p-3 rounded-xl outline-none focus:border-cyan-400 font-bold text-cyan-900" />
                <span className="absolute right-4 top-3.5 text-xs text-cyan-400 font-bold">min</span>
            </div>
        </div>
        
        <button 
          onClick={calculate}
          className="w-full bg-cyan-500 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-200 mt-2"
        >
          Calculate
        </button>
      </div>

      {water && (
        <div className="mt-8 flex items-center gap-6 animate-in fade-in slide-in-from-bottom-4 relative z-10">
           {/* Visual Bottle */}
           <div className="w-16 h-24 border-4 border-cyan-200 rounded-2xl relative overflow-hidden bg-white">
              <div className="absolute bottom-0 w-full bg-cyan-400 transition-all duration-1000 ease-out" style={{ height: `${Math.min((water / 4) * 100, 100)}%` }}>
                 <div className="absolute top-0 w-full h-full animate-pulse bg-cyan-300 opacity-50"></div>
              </div>
           </div>
           
           <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">Target</span>
              <div className="text-5xl font-black text-cyan-900 my-1 leading-none">{water}<span className="text-2xl text-cyan-300 ml-1">L</span></div>
              <p className="text-[10px] text-stone-400 leading-tight max-w-[120px] mb-3">
                 Drink 500ml upon waking up.
              </p>
              <button
                 onClick={() => {
                   window.dispatchEvent(new CustomEvent('apply_water_to_meal_planner', { detail: { water: water } }));
                 }}
                 className="w-full bg-cyan-600 hover:bg-cyan-700 text-white text-[10px] font-black uppercase tracking-widest py-2 px-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
              >
                 Apply Hydration
              </button>
           </div>
        </div>
      )}
    </div>
  );
};

// --- Protein Calculator (Purple/Structure/Building) ---
export const ProteinCalculator = () => {
  const [weight, setWeight] = useState('');
  const [goal, setGoal] = useState('maintain');
  const [protein, setProtein] = useState<number | null>(null);

  const calculate = () => {
    const w = parseFloat(weight);
    if (w) {
      let multiplier = 0.8; // Sedentary
      if (goal === 'build') multiplier = 1.6;
      else if (goal === 'active') multiplier = 1.2;
      
      setProtein(Math.round(w * multiplier));
    }
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-purple-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-purple-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>

      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-purple-950 mb-2 brand-font flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600"><IconUtensils size={16}/></span>
            Protein Needs
        </h3>
        <p className="text-stone-500 text-sm">Daily structural requirement.</p>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-purple-700 ml-1">Body Weight</label>
            <div className="relative">
                <input type="number" placeholder="70" value={weight} onChange={e => setWeight(e.target.value)} className="w-full bg-purple-50/50 border border-purple-100 p-3 rounded-xl outline-none focus:border-purple-400 font-bold text-purple-900" />
                <span className="absolute right-4 top-3.5 text-xs text-purple-400 font-bold">kg</span>
            </div>
        </div>
        
        <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-purple-700 ml-1">Goal</label>
            <div className="relative">
                <select value={goal} onChange={e => setGoal(e.target.value)} className="w-full bg-purple-50/50 border border-purple-100 p-3 rounded-xl outline-none text-stone-700 text-sm font-bold focus:border-purple-400 appearance-none">
                    <option value="maintain">Maintenance (0.8g/kg)</option>
                    <option value="active">Active (1.2g/kg)</option>
                    <option value="build">Build Muscle (1.6g/kg)</option>
                </select>
                <div className="absolute right-4 top-4 pointer-events-none text-purple-400">▼</div>
            </div>
        </div>

        <button 
          onClick={calculate}
          className="w-full bg-purple-600 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-purple-700 transition-all shadow-lg shadow-purple-200 mt-2"
        >
          Calculate
        </button>
      </div>

      {protein && (
        <div className="mt-8 bg-purple-50 rounded-2xl border border-purple-100 p-6 flex flex-col items-center justify-center animate-in fade-in slide-in-from-bottom-4 relative z-10">
          <span className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-1">Daily Target</span>
          <div className="text-5xl font-black text-purple-900 leading-none mb-2">{protein}<span className="text-2xl text-purple-400 ml-1">g</span></div>
          
          <div className="w-full h-1.5 bg-purple-200 rounded-full overflow-hidden mt-2 mb-3">
             <div className="h-full bg-purple-500 rounded-full w-2/3 animate-pulse"></div>
          </div>
          
          <p className="text-[10px] text-purple-600 text-center font-medium mb-4">
             ~ {Math.round(protein / 25)} meals of 25g protein each.
          </p>
          <button
             onClick={() => {
               window.dispatchEvent(new CustomEvent('apply_protein_to_meal_planner', { detail: { protein: protein } }));
             }}
             className="w-full bg-purple-600 hover:bg-purple-700 text-white text-xs font-black uppercase tracking-widest py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
          >
             Apply Target to AI Meal Planner
          </button>
        </div>
      )}
    </div>
  );
};
