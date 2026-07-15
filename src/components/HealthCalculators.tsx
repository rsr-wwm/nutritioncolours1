
import React, { useState, useEffect, useRef } from 'react';
import { IconUtensils, IconCoffee, IconArrowRight, IconLeaf, IconCheck } from './ui/Icons';
import { useInterval } from '@/lib/useTimer';

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
                    aria-label="Height in centimeters"
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
                    aria-label="Weight in kilograms"
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
               aria-label={`Select gender: ${g}`}
               className={`flex-1 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${gender === g ? 'bg-white text-orange-700 shadow-sm transform scale-105' : 'text-orange-400 hover:text-orange-600'}`}
             >
               {g}
             </button>
           ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
           <input type="number" placeholder="Age" value={age} onChange={e => setAge(e.target.value)} aria-label="Age in years" className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none focus:border-orange-400 text-center font-bold text-orange-900" />
           <input type="number" placeholder="W (kg)" value={weight} onChange={e => setWeight(e.target.value)} aria-label="Weight in kilograms" className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none focus:border-orange-400 text-center font-bold text-orange-900" />
           <input type="number" placeholder="H (cm)" value={height} onChange={e => setHeight(e.target.value)} aria-label="Height in centimeters" className="bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none focus:border-orange-400 text-center font-bold text-orange-900" />
        </div>
        
        <div className="relative">
            <select value={activity} onChange={e => setActivity(e.target.value)} aria-label="Select activity level" className="w-full bg-orange-50/50 border border-orange-100 p-3 rounded-xl outline-none text-stone-700 text-sm font-bold focus:border-orange-400 appearance-none">
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
                <input type="number" placeholder="70" value={weight} onChange={e => setWeight(e.target.value)} aria-label="Body weight in kilograms" className="w-full bg-cyan-50/50 border border-cyan-100 p-3 rounded-xl outline-none focus:border-cyan-400 font-bold text-cyan-900" />
                <span className="absolute right-4 top-3.5 text-xs text-cyan-400 font-bold">kg</span>
            </div>
        </div>
        <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-cyan-700 ml-1">Daily Exercise</label>
            <div className="relative">
                <input type="number" placeholder="30" value={activityMins} onChange={e => setActivityMins(e.target.value)} aria-label="Daily exercise duration in minutes" className="w-full bg-cyan-50/50 border border-cyan-100 p-3 rounded-xl outline-none focus:border-cyan-400 font-bold text-cyan-900" />
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
                <input type="number" placeholder="70" value={weight} onChange={e => setWeight(e.target.value)} aria-label="Body weight in kilograms" className="w-full bg-purple-50/50 border border-purple-100 p-3 rounded-xl outline-none focus:border-purple-400 font-bold text-purple-900" />
                <span className="absolute right-4 top-3.5 text-xs text-purple-400 font-bold">kg</span>
            </div>
        </div>
        
        <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-purple-700 ml-1">Goal</label>
            <div className="relative">
                <select value={goal} onChange={e => setGoal(e.target.value)} aria-label="Select protein goal" className="w-full bg-purple-50/50 border border-purple-100 p-3 rounded-xl outline-none text-stone-700 text-sm font-bold focus:border-purple-400 appearance-none">
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

// --- Circadian Aligner Canvas Dial Component ---
export const CircadianPlateDial = ({ wakeTime, sunsetTime }: { wakeTime: string; sunsetTime: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentMin, setCurrentMin] = useState(() => {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes();
  });

  useInterval(() => {
    const now = new Date();
    setCurrentMin(now.getHours() * 60 + now.getMinutes());
  }, 10000);

  const parseTimeToMinutes = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const wakeMin = parseTimeToMinutes(wakeTime);
  const sunsetMin = parseTimeToMinutes(sunsetTime);

  const cortisolStart = wakeMin;
  const cortisolEnd = wakeMin + 90;

  const digestiveStart = wakeMin + 90;
  const digestiveEnd = wakeMin + 570;

  const autophagyStart = sunsetMin;
  const autophagyEnd = wakeMin;

  useEffect(() => {
    let animationFrameId: number;

    const render = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const r = Math.min(rect.width, rect.height) / 2 - 20;

      const isDark = document.documentElement.classList.contains('dark');

      ctx.clearRect(0, 0, rect.width, rect.height);

      ctx.beginPath();
      ctx.arc(cx, cy, r - 12, 0, 2 * Math.PI);
      ctx.fillStyle = isDark ? 'rgba(2, 44, 36, 0.2)' : '#fafaf9';
      ctx.fill();

      const drawCircadianSector = (
        startM: number,
        endM: number,
        strokeColor: string,
        fillColor: string
      ) => {
        let s = startM % 1440;
        let e = endM % 1440;
        if (s < 0) s += 1440;
        if (e < 0) e += 1440;

        const startAngle = (s / 1440) * 2 * Math.PI - Math.PI / 2;
        let endAngle = (e / 1440) * 2 * Math.PI - Math.PI / 2;

        if (endAngle <= startAngle) {
          endAngle += 2 * Math.PI;
        }

        ctx.beginPath();
        ctx.arc(cx, cy, r - 12, startAngle, endAngle);
        ctx.lineWidth = 24;
        ctx.strokeStyle = fillColor;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(cx, cy, r, startAngle, endAngle);
        ctx.lineWidth = 2.5;
        ctx.strokeStyle = strokeColor;
        ctx.stroke();
      };

      drawCircadianSector(
        autophagyStart,
        autophagyEnd,
        isDark ? '#818cf8' : '#4f46e5',
        isDark ? 'rgba(129, 140, 248, 0.15)' : 'rgba(79, 70, 229, 0.08)'
      );

      drawCircadianSector(
        cortisolStart,
        cortisolEnd,
        isDark ? '#fbbf24' : '#d97706',
        isDark ? 'rgba(251, 191, 36, 0.15)' : 'rgba(217, 119, 6, 0.08)'
      );

      drawCircadianSector(
        digestiveStart,
        digestiveEnd,
        isDark ? '#34d399' : '#059669',
        isDark ? 'rgba(52, 211, 153, 0.15)' : 'rgba(5, 150, 105, 0.08)'
      );

      if (sunsetMin !== digestiveEnd) {
        drawCircadianSector(
          digestiveEnd,
          sunsetMin,
          isDark ? '#a8a29e' : '#78716c',
          isDark ? 'rgba(168, 162, 158, 0.15)' : 'rgba(120, 113, 108, 0.08)'
        );
      }

      for (let h = 0; h < 24; h++) {
        const angle = (h / 24) * 2 * Math.PI - Math.PI / 2;
        const isMajor = h % 6 === 0;
        const len = isMajor ? 8 : 4;
        const x1 = cx + (r + 4) * Math.cos(angle);
        const y1 = cy + (r + 4) * Math.sin(angle);
        const x2 = cx + (r + 4 + len) * Math.cos(angle);
        const y2 = cy + (r + 4 + len) * Math.sin(angle);

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.lineWidth = isMajor ? 2 : 1;
        ctx.strokeStyle = isMajor
          ? (isDark ? '#34d399' : '#064e3b')
          : (isDark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.15)');
        ctx.stroke();

        if (isMajor) {
          ctx.fillStyle = isDark ? '#a7f3d0' : '#064e3b';
          ctx.font = 'bold 9px sans-serif';
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          const textDist = r + 16;
          const tx = cx + textDist * Math.cos(angle);
          const ty = cy + textDist * Math.sin(angle);
          ctx.fillText(h.toString().padStart(2, '0') + ':00', tx, ty);
        }
      }

      ctx.beginPath();
      ctx.arc(cx, cy, 4, 0, 2 * Math.PI);
      ctx.fillStyle = isDark ? '#f87171' : '#ef4444';
      ctx.fill();

      const currentAngle = (currentMin / 1440) * 2 * Math.PI - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + (r - 24) * Math.cos(currentAngle), cy + (r - 24) * Math.sin(currentAngle));
      ctx.lineWidth = 2.5;
      ctx.strokeStyle = isDark ? '#f87171' : '#ef4444';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx + (r - 12) * Math.cos(currentAngle), cy + (r - 12) * Math.sin(currentAngle), 6, 0, 2 * Math.PI);
      ctx.fillStyle = isDark ? '#ef4444' : '#dc2626';
      ctx.fill();
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = '#ffffff';
      ctx.stroke();

      const pulseRadius = 6 + 4 * Math.abs(Math.sin(Date.now() / 300));
      ctx.beginPath();
      ctx.arc(cx + (r - 12) * Math.cos(currentAngle), cy + (r - 12) * Math.sin(currentAngle), pulseRadius, 0, 2 * Math.PI);
      ctx.strokeStyle = isDark ? 'rgba(239, 68, 68, 0.4)' : 'rgba(220, 38, 38, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [wakeMin, sunsetMin, currentMin]);

  const formatTime = (totalMin: number) => {
    const h = Math.floor(totalMin / 60);
    const m = Math.floor(totalMin % 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${displayH}:${m.toString().padStart(2, '0')} ${ampm}`;
  };

  return (
    <div className="relative w-64 h-64 mx-auto flex items-center justify-center">
      <canvas 
        ref={canvasRef} 
        style={{ width: '256px', height: '256px' }}
        className="w-64 h-64 block"
      />
      <div className="absolute text-center pointer-events-none select-none bg-white/70 dark:bg-emerald-950/70 p-3 rounded-full backdrop-blur-sm border border-emerald-100/30 w-32 h-32 flex flex-col justify-center items-center">
        <span className="text-[9px] font-black text-stone-400 dark:text-emerald-400/60 uppercase tracking-widest block leading-none mb-1">Current</span>
        <span className="text-sm font-black text-emerald-950 dark:text-emerald-50 block leading-tight">{formatTime(currentMin)}</span>
        <span className="text-[8px] font-bold text-stone-400 dark:text-emerald-400/50 mt-1 block">Circadian Align</span>
      </div>
    </div>
  );
};

// --- Circadian Aligner (Lightweight Chrononutrition Math) ---
export const CircadianAligner = () => {
  const [wakeTime, setWakeTime] = useState('06:00');
  const [sunsetTime, setSunsetTime] = useState('18:30');

  const parseTimeToMinutes = (t: string) => {
    const [h, m] = t.split(':').map(Number);
    return h * 60 + m;
  };

  const formatMinutesToTime = (min: number) => {
    const h = Math.floor((min % 1440) / 60);
    const m = Math.floor(min % 60);
    const ampm = h >= 12 ? 'PM' : 'AM';
    const displayH = h % 12 === 0 ? 12 : h % 12;
    return `${displayH}:${m.toString().padStart(2, '0')} ${ampm}`;
  };

  const wakeMin = parseTimeToMinutes(wakeTime);
  const sunsetMin = parseTimeToMinutes(sunsetTime);

  // Cortisol Clearance: Wake to Wake + 90 mins
  const cortisolStart = wakeMin;
  const cortisolEnd = wakeMin + 90;

  // Peak Digest / Active Insulin: Wake + 90 mins to Wake + 570 mins (9.5 hours)
  const digestiveStart = wakeMin + 90;
  const digestiveEnd = wakeMin + 570;

  // Autophagy Peak: Sunset to Wake
  const autophagyStart = sunsetMin;
  const autophagyEnd = wakeMin + (wakeMin < sunsetMin ? 1440 : 0);

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-emerald-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      {/* Decorative BG */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
      
      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-emerald-950 mb-2 brand-font flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">🕒</span>
            Circadian Aligner
        </h3>
        <p className="text-stone-500 text-sm">Align eating schedules with circadian math.</p>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1">Waking Time</label>
            <input 
              type="time" 
              value={wakeTime} 
              onChange={(e) => setWakeTime(e.target.value)}
              aria-label="Wake Time"
              className="w-full bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl focus:border-emerald-500 outline-none text-emerald-900 font-bold" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1">Local Sunset</label>
            <input 
              type="time" 
              value={sunsetTime} 
              onChange={(e) => setSunsetTime(e.target.value)}
              aria-label="Sunset Time"
              className="w-full bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl focus:border-emerald-500 outline-none text-emerald-900 font-bold" 
            />
          </div>
        </div>

        <div className="py-2 flex flex-col justify-center items-center border-t border-stone-100/80 pt-4 gap-2">
          <CircadianPlateDial wakeTime={wakeTime} sunsetTime={sunsetTime} />
          <LockscreenWallpaperExporter wakeTime={wakeTime} sunsetTime={sunsetTime} />
        </div>

        <div className="mt-4 space-y-4 pt-4 border-t border-stone-100">
          <div className="flex gap-3 items-start">
            <span className="p-2 bg-amber-50 text-amber-700 rounded-xl text-xs font-bold">🌅</span>
            <div>
              <h5 className="font-bold text-xs text-stone-850 uppercase tracking-wider">Cortisol Clearance Phase</h5>
              <div className="text-emerald-950 font-black text-sm">{formatMinutesToTime(cortisolStart)} - {formatMinutesToTime(cortisolEnd)}</div>
              <p className="text-[11px] text-stone-500 mt-0.5">Hydrate with warm saline-lemon water. Avoid carbohydrates to protect morning insulin baseline.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <span className="p-2 bg-emerald-50 text-emerald-750 rounded-xl text-xs font-bold">🍽️</span>
            <div>
              <h5 className="font-bold text-xs text-stone-850 uppercase tracking-wider">Peak Digestion Window</h5>
              <div className="text-emerald-950 font-black text-sm">{formatMinutesToTime(digestiveStart)} - {formatMinutesToTime(digestiveEnd)}</div>
              <p className="text-[11px] text-stone-500 mt-0.5">Insulin sensitivity is highest. Consume your main meals during this 8-hour window.</p>
            </div>
          </div>

          <div className="flex gap-3 items-start">
            <span className="p-2 bg-indigo-50 text-indigo-700 rounded-xl text-xs font-bold">🌌</span>
            <div>
              <h5 className="font-bold text-xs text-stone-850 uppercase tracking-wider">Autophagy & Repair</h5>
              <div className="text-emerald-950 font-black text-sm">{formatMinutesToTime(autophagyStart)} - {formatMinutesToTime(autophagyEnd)}</div>
              <p className="text-[11px] text-stone-500 mt-0.5">Melatonin production active. Strictly fast to trigger cellular repair and autophagy.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Client-Side Mobile Lockscreen Wallpaper Exporter ---
export const LockscreenWallpaperExporter = ({ wakeTime, sunsetTime }: { wakeTime: string; sunsetTime: string }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleExport = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Mobile lockscreen layout size (1080 x 1920)
    canvas.width = 1080;
    canvas.height = 1920;

    // Solid dark circadian gradient background
    const grad = ctx.createLinearGradient(0, 0, 0, 1920);
    grad.addColorStop(0, '#022c22');
    grad.addColorStop(0.5, '#064e3b');
    grad.addColorStop(1, '#020617');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1080, 1920);

    // Decorative grid rings
    ctx.strokeStyle = 'rgba(16, 185, 129, 0.1)';
    ctx.lineWidth = 2;
    for (let r = 200; r <= 800; r += 150) {
      ctx.beginPath();
      ctx.arc(540, 960, r, 0, 2 * Math.PI);
      ctx.stroke();
    }

    // Texts drawing
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    ctx.font = 'bold 32px sans-serif';
    ctx.fillText('NUTRITION COLOURS', 540, 200);

    ctx.font = '900 64px sans-serif';
    ctx.fillText('DAILY CIRCADIAN METRICS', 540, 280);

    // Timeline segments cards
    const drawCard = (y: number, title: string, time: string, desc: string, color: string) => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.beginPath();
      ctx.roundRect(140, y, 800, 200, 24);
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
      ctx.stroke();

      ctx.fillStyle = color;
      ctx.font = 'bold 36px sans-serif';
      ctx.textAlign = 'left';
      ctx.fillText(title, 180, y + 50);

      ctx.fillStyle = '#ffffff';
      ctx.font = '900 48px sans-serif';
      ctx.fillText(time, 180, y + 110);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = 'bold 24px sans-serif';
      ctx.fillText(desc, 180, y + 160);
    };

    drawCard(450, '🌅 CORTISOL CLEARANCE', `${wakeTime} - ${adjustTimeString(wakeTime, 90)}`, 'Drink lemon-saline water. Avoid carbs.', '#fbbf24');
    drawCard(700, '🍽️ PEAK DIGESTION WINDOW', `${adjustTimeString(wakeTime, 90)} - ${adjustTimeString(wakeTime, 570)}`, 'Insulin sensitivity highest. Consume main meals.', '#34d399');
    drawCard(950, '🌌 AUTOPHAGY & REPAIR', `${sunsetTime} ONWARD`, 'Melatonin active. Strictly fast to repair cells.', '#818cf8');

    // Central graphic
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.font = 'bold 24px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TAILORED FOR METABOLIC RESET', 540, 1300);

    // Save as image
    const dataUrl = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = `circadian_lockscreen.png`;
    link.href = dataUrl;
    link.click();
  };

  const adjustTimeString = (t: string, mins: number) => {
    const [h, m] = t.split(':').map(Number);
    const total = (h * 60 + m + mins) % 1440;
    const adjustH = Math.floor(total / 60);
    const adjustM = Math.floor(total % 60);
    return `${adjustH.toString().padStart(2, '0')}:${adjustM.toString().padStart(2, '0')}`;
  };

  return (
    <div className="w-full mt-4">
      <canvas ref={canvasRef} className="hidden" />
      <button 
        onClick={handleExport}
        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-widest py-3 rounded-xl transition-all shadow-md active:scale-95 cursor-pointer"
      >
        📱 Export Mobile Lockscreen Wallpaper
      </button>
    </div>
  );
};

// --- Drug-Nutrient Synergy & Depletion Checker ---
export const DrugNutrientSynergyChecker = () => {
  const [selectedMed, setSelectedMed] = useState<'metformin' | 'levothyroxine' | 'atorvastatin'>('metformin');

  const database = {
    metformin: {
      name: 'Metformin (Glucophage)',
      depletions: 'Vitamin B12, Folate, Coenzyme Q10',
      synergies: 'Ceylon Cinnamon (improves insulin sensitivity), Turmeric (anti-inflammatory support)',
      contraindicated: 'High-dose Berberine (competes for absorption, raises digestive distress risk)',
      advice: 'Ensure Vitamin B12 levels are tested every 6 months. Focus on sprouted grains and complex carbs.'
    },
    levothyroxine: {
      name: 'Levothyroxine (Synthroid)',
      depletions: 'Calcium, Iron (when taken concurrently)',
      synergies: 'Ginger root (supports cellular metabolic rate), Selenium (assists conversion)',
      contraindicated: 'High-dose Ashwagandha (may overstimulate thyroid levels, check hormones)',
      advice: 'Take thyroid hormones on an empty stomach, at least 4 hours apart from calcium or iron supplements.'
    },
    atorvastatin: {
      name: 'Atorvastatin (Lipitor)',
      depletions: 'Coenzyme Q10, Vitamin D3',
      synergies: 'Garlic extract (supports healthy lipid profile), Moringa (anti-inflammatory)',
      contraindicated: 'Grapefruit juice, extremely high-dose citrus bioflavonoids (alters absorption)',
      advice: 'Consider CoQ10 supplementation to mitigate statin-induced muscle soreness (myalgia).'
    }
  };

  const active = database[selectedMed];

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-emerald-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
      
      <div className="mb-6 relative z-10">
        <h3 className="text-2xl font-black text-emerald-950 mb-2 brand-font flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">💊</span>
            Drug-Nutrient Synergy
        </h3>
        <p className="text-stone-500 text-sm">Check how clinical medications interact with metabolic nutrition.</p>
      </div>

      <div className="space-y-4 flex-grow relative z-10">
        <div>
          <label className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 ml-1">Select Medication</label>
          <select 
            value={selectedMed} 
            onChange={(e) => setSelectedMed(e.target.value as any)}
            className="w-full bg-emerald-50/50 border border-emerald-100 p-3 rounded-xl outline-none text-emerald-900 font-bold mt-1" 
          >
            <option value="metformin">Metformin (Glucophage)</option>
            <option value="levothyroxine">Levothyroxine (Synthroid)</option>
            <option value="atorvastatin">Atorvastatin (Lipitor)</option>
          </select>
        </div>

        <div className="space-y-4 pt-4 border-t border-stone-100 mt-4">
          <div>
            <h5 className="font-bold text-xs text-red-500 uppercase tracking-wider">⚠️ Nutrient Depletions</h5>
            <p className="text-stone-600 text-xs font-semibold leading-relaxed mt-0.5">{active.depletions}</p>
          </div>

          <div>
            <h5 className="font-bold text-xs text-emerald-700 uppercase tracking-wider">✨ Recommended Synergies</h5>
            <p className="text-stone-600 text-xs font-semibold leading-relaxed mt-0.5">{active.synergies}</p>
          </div>

          <div>
            <h5 className="font-bold text-xs text-amber-600 uppercase tracking-wider">🚫 Contraindicated Herbs</h5>
            <p className="text-stone-600 text-xs font-semibold leading-relaxed mt-0.5">{active.contraindicated}</p>
          </div>

          <div className="bg-emerald-50 p-4 rounded-2xl border border-emerald-100 text-[11px] text-emerald-900 leading-relaxed font-medium">
            <strong>Clinical Advice:</strong> {active.advice}
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Circadian Sync Quiz & Reset Challenge ---
export const CircadianSyncQuiz = () => {
  const [step, setStep] = useState<number>(0);
  const [wakeTime, setWakeTime] = useState<string>('06:30');
  const [firstMeal, setFirstMeal] = useState<string>('08:00');
  const [lastMeal, setLastMeal] = useState<string>('20:00');
  const [sleepTime, setSleepTime] = useState<string>('22:30');
  const [score, setScore] = useState<number | null>(null);

  const calculateScore = () => {
    // 1. Wakeup Time offset from dawn (ideal: 06:00)
    const [wakeH, wakeM] = wakeTime.split(':').map(Number);
    const wakeVal = wakeH + wakeM / 60;

    // 2. Sleep onset offset from ideal cortisol curve reset (22:30)
    const [sleepH, sleepM] = sleepTime.split(':').map(Number);
    const sleepVal = sleepH + sleepM / 60;

    // Trigonometric Cosine Fit Model representing the 24-hour biological cycle
    // Period = 24 hours. Phase shift to align peak (1.0) with ideal timings.
    const wakeRad = (2 * Math.PI * (wakeVal - 6.0)) / 24;
    const sleepRad = (2 * Math.PI * (sleepVal - 22.5)) / 24;

    const wakeCosine = Math.cos(wakeRad);   // Peak value 1.0 at 06:00
    const sleepCosine = Math.cos(sleepRad); // Peak value 1.0 at 22:30

    // Average biological phase synchrony ratio (ranges from -1.0 to 1.0)
    const phaseSynchrony = (wakeCosine + sleepCosine) / 2;
    let baseScore = 50 + 50 * phaseSynchrony; // Map to 0-100 scale

    // Apply eating window constraints
    const [firstH, firstM] = firstMeal.split(':').map(Number);
    const firstVal = firstH + firstM / 60;
    const [lastH, lastM] = lastMeal.split(':').map(Number);
    const lastVal = lastH + lastM / 60;
    let eatWindow = lastVal - firstVal;
    if (eatWindow < 0) eatWindow += 24;

    let sleepGap = sleepVal - lastVal;
    if (sleepGap < 0) sleepGap += 24;

    // Deduct for physiological window anomalies
    if (eatWindow > 10) {
      baseScore -= (eatWindow - 10) * 12; // 12% deduction per hour over 10h eating window
    } else if (eatWindow < 8) {
      baseScore -= (8 - eatWindow) * 5; // Mild deduction for highly restrictive feeding
    }

    if (sleepGap < 3.0) {
      baseScore -= (3.0 - sleepGap) * 15; // Heavy 15% deduction per hour under 3h fasting gap
    }

    const finalScore = Math.max(15, Math.min(100, Math.round(baseScore)));
    setScore(finalScore);
    setStep(4);
  };

  const getBadgeTier = (s: number) => {
    if (s >= 85) return { label: 'Circadian Master', color: 'text-emerald-700 bg-emerald-50 border-emerald-100', desc: 'Your daily routine perfectly aligns with your master metabolic clock!' };
    if (s >= 65) return { label: 'Circadian Syncing', color: 'text-lime-700 bg-lime-50 border-lime-100', desc: 'Good clock coordination. Minor window shifts will optimize your cortisol levels.' };
    return { label: 'Out of Sync', color: 'text-amber-700 bg-amber-50 border-amber-100', desc: 'Your sleep-wake and eating windows mismatch with natural biological rhythms.' };
  };

  const handleDownloadBadge = () => {
    if (score === null) return;
    const tier = getBadgeTier(score);
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" width="500" height="500">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#022c22" />
      <stop offset="100%" stop-color="#020617" />
    </linearGradient>
    <linearGradient id="gold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>
  </defs>
  <rect width="500" height="500" rx="40" fill="url(#bg)" />
  <circle cx="250" cy="230" r="140" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="20" />
  <circle cx="250" cy="230" r="140" fill="none" stroke="url(#gold)" stroke-width="12" stroke-dasharray="880" stroke-dashoffset="${880 - (880 * score / 100)}" stroke-linecap="round" />
  <text x="250" y="80" text-anchor="middle" fill="#a3e635" font-family="sans-serif" font-size="16" font-weight="bold" letter-spacing="4">CIRCADIAN RESET 2026</text>
  <text x="250" y="210" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="72" font-weight="900">${score}%</text>
  <text x="250" y="260" text-anchor="middle" fill="#94a3b8" font-family="sans-serif" font-size="14" font-weight="bold">CLOCK SYNC SCORE</text>
  <text x="250" y="340" text-anchor="middle" fill="#ffffff" font-family="sans-serif" font-size="22" font-weight="bold">${tier.label.toUpperCase()}</text>
  <text x="250" y="420" text-anchor="middle" fill="#84cc16" font-family="sans-serif" font-size="12" font-weight="bold" letter-spacing="1">NUTRITIONCOLOURS CLINICAL MANUAL</text>
</svg>`;
    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `circadian_sync_badge_${score}pct.svg`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="bg-white p-8 rounded-[32px] shadow-lg border border-emerald-100 h-full flex flex-col hover:shadow-xl transition-all duration-300 relative overflow-hidden group min-h-[480px]">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform"></div>
      
      {step < 4 && (
        <div className="mb-6 relative z-10">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-2xl font-black text-emerald-950 brand-font flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs">⏰</span>
              Circadian Sync Game
            </h3>
            <span className="text-[10px] font-black text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">STEP {step + 1} OF 4</span>
          </div>
          <p className="text-stone-500 text-sm">Align your biological clock and unlock your Circadian Reset Badge.</p>
        </div>
      )}

      {step === 0 && (
        <div className="flex-grow flex flex-col justify-between relative z-10 py-4">
          <div className="space-y-4">
            <div className="p-4 bg-stone-50 rounded-2xl border border-stone-100 text-xs text-stone-600 leading-relaxed font-semibold">
              🎯 <strong>The 2026 Reset Challenge:</strong> Your body is a biological clock. Aligning your meals, sleep, and wake times with solar cycles reduces insulin resistance, cortisol spikes, and visceral fat accumulation naturally.
            </div>
            <p className="text-xs text-stone-500 leading-relaxed">
              Answer 4 simple questions about your current routine to calculate your sync percentage and claim your custom SVG badge.
            </p>
          </div>
          <button
            onClick={() => setStep(1)}
            className="w-full bg-emerald-900 text-white font-bold uppercase tracking-widest py-4 rounded-xl hover:bg-emerald-800 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-6"
          >
            Start Audit Challenge <IconArrowRight size={14} />
          </button>
        </div>
      )}

      {step === 1 && (
        <div className="flex-grow flex flex-col justify-between relative z-10">
          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">1. What time do you wake up?</label>
              <input
                type="time"
                value={wakeTime}
                onChange={(e) => setWakeTime(e.target.value)}
                className="w-full bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl outline-none font-bold text-emerald-950 focus:border-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">2. What time do you fall asleep?</label>
              <input
                type="time"
                value={sleepTime}
                onChange={(e) => setSleepTime(e.target.value)}
                className="w-full bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl outline-none font-bold text-emerald-950 focus:border-emerald-500"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={() => setStep(0)} className="w-1/3 border border-stone-200 text-stone-600 font-bold uppercase py-4 rounded-xl text-xs tracking-wider hover:bg-stone-50 transition-all cursor-pointer">Back</button>
            <button onClick={() => setStep(2)} className="w-2/3 bg-emerald-900 text-white font-bold uppercase py-4 rounded-xl text-xs tracking-widest hover:bg-emerald-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">Next <IconArrowRight size={14} /></button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="flex-grow flex flex-col justify-between relative z-10">
          <div className="space-y-6 pt-2">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">3. When is your first tea or meal?</label>
              <input
                type="time"
                value={firstMeal}
                onChange={(e) => setFirstMeal(e.target.value)}
                className="w-full bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl outline-none font-bold text-emerald-950 focus:border-emerald-500"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-emerald-700 block">4. When is your last meal/heavy snack?</label>
              <input
                type="time"
                value={lastMeal}
                onChange={(e) => setLastMeal(e.target.value)}
                className="w-full bg-emerald-50/50 border border-emerald-100 p-4 rounded-xl outline-none font-bold text-emerald-950 focus:border-emerald-500"
              />
            </div>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={() => setStep(1)} className="w-1/3 border border-stone-200 text-stone-600 font-bold uppercase py-4 rounded-xl text-xs tracking-wider hover:bg-stone-50 transition-all cursor-pointer">Back</button>
            <button onClick={() => setStep(3)} className="w-2/3 bg-emerald-900 text-white font-bold uppercase py-4 rounded-xl text-xs tracking-widest hover:bg-emerald-800 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer">Next <IconArrowRight size={14} /></button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="flex-grow flex flex-col justify-between relative z-10">
          <div className="space-y-4 pt-2">
            <h4 className="text-xs font-black uppercase tracking-widest text-stone-500">Summary of Routine</h4>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold text-stone-700">
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">🌅 Wake: {wakeTime}</div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">🌌 Sleep: {sleepTime}</div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">🍽️ First Meal: {firstMeal}</div>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-100">🌙 Last Meal: {lastMeal}</div>
            </div>
            <p className="text-[11px] text-stone-500 leading-relaxed pt-2">
              By submitting this, the system will apply a cosine-fit metabolic model to evaluate your clock synchronization and print your alignment index.
            </p>
          </div>
          <div className="flex gap-4 mt-6">
            <button onClick={() => setStep(2)} className="w-1/3 border border-stone-200 text-stone-600 font-bold uppercase py-4 rounded-xl text-xs tracking-wider hover:bg-stone-50 transition-all cursor-pointer">Back</button>
            <button onClick={calculateScore} className="w-2/3 bg-emerald-950 text-white font-bold uppercase py-4 rounded-xl text-xs tracking-widest hover:bg-emerald-900 transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer">Run Cosine Audit <IconLeaf size={14} /></button>
          </div>
        </div>
      )}

      {step === 4 && score !== null && (
        <div className="flex-grow flex flex-col justify-between relative z-10 py-2 animate-in fade-in duration-500">
          <div className="text-center space-y-4">
            <div className="relative inline-flex items-center justify-center">
              <svg className="w-32 h-32 transform -rotate-90">
                <circle cx="64" cy="64" r="54" stroke="#f1f5f9" strokeWidth="12" fill="transparent" />
                <circle cx="64" cy="64" r="54" stroke="#059669" strokeWidth="12" fill="transparent"
                  strokeDasharray="339.3" strokeDashoffset={339.3 - (339.3 * score) / 100} strokeLinecap="round" />
              </svg>
              <span className="absolute text-3xl font-black text-emerald-950 brand-font">{score}%</span>
            </div>
            
            <div className="space-y-1">
              <div className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border inline-block ${getBadgeTier(score).color}`}>
                {getBadgeTier(score).label}
              </div>
              <p className="text-[11px] text-stone-500 max-w-sm mx-auto pt-2">{getBadgeTier(score).desc}</p>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <button
              onClick={handleDownloadBadge}
              className="w-full bg-emerald-900 hover:bg-emerald-800 text-white text-xs font-black uppercase tracking-widest py-4 rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              📥 Download Circadian SVG Badge
            </button>
            <button
              onClick={() => setStep(0)}
              className="w-full border border-stone-200 hover:bg-stone-50 text-stone-600 text-[10px] font-black uppercase tracking-wider py-3 rounded-xl transition-all cursor-pointer"
            >
              🔄 Retry Challenge
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
