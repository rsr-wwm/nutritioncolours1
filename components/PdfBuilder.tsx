import React, { useState } from 'react';
import { m, AnimatePresence } from 'framer-motion';

export const PdfBuilder = () => {
  const [status, setStatus] = useState<'idle' | 'compiling' | 'ready'>('idle');
  const [progress, setProgress] = useState(0);

  const startExport = () => {
    setStatus('compiling');
    setProgress(0);
    
    // Simulate compilation steps
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setStatus('ready');
          return 100;
        }
        return prev + 20;
      });
    }, 400);
  };

  const handlePrint = () => {
    window.print();
    setStatus('idle');
  };

  return (
    <div className="bg-white/80 dark:bg-emerald-950/80 backdrop-blur-xl p-8 rounded-[40px] shadow-lg border border-emerald-100/60 dark:border-emerald-800/40 max-w-md mx-auto text-center relative overflow-hidden flex flex-col justify-between h-full min-h-[280px]">
      <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-lime-500"></div>

      <div className="mb-6">
        <span className="text-3xl block mb-2 animate-bounce-slow">📄</span>
        <h3 className="text-2xl font-black text-emerald-950 dark:text-emerald-50 brand-font">Clinical Plan Export</h3>
        <p className="text-stone-500 dark:text-emerald-300/60 text-xs mt-1">Compile your biometric metrics, circadian scheduler, and AI menus into a clean clinical handout.</p>
      </div>

      <AnimatePresence mode="wait">
        {status === 'idle' && (
          <m.button 
            key="idle-btn"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            onClick={startExport}
            className="w-full bg-emerald-950 dark:bg-emerald-900 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-emerald-900 dark:hover:bg-emerald-850 transition-all shadow-xl shadow-emerald-950/20 active:scale-95 cursor-pointer"
          >
            Compile Report
          </m.button>
        )}

        {status === 'compiling' && (
          <m.div 
            key="compiling-loader"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="space-y-4"
          >
            <div className="w-full bg-stone-100 dark:bg-emerald-900/20 rounded-full h-3 overflow-hidden border border-stone-200 dark:border-emerald-800/40">
              <m.div 
                className="bg-gradient-to-r from-emerald-500 to-lime-400 h-full"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            <p className="text-[10px] font-black text-stone-400 dark:text-emerald-300/60 uppercase tracking-widest animate-pulse">
              {progress < 40 ? 'Aggregating Biometrics...' : progress < 80 ? 'Structuring Chrono-Timeline...' : 'Encrypting PDF Container...'}
            </p>
          </m.div>
        )}

        {status === 'ready' && (
          <m.div 
            key="ready-prompt"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4 w-full"
          >
            <div className="bg-emerald-50 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center gap-3">
              <span className="text-xl">✅</span>
              <span className="text-xs font-bold uppercase tracking-wider">Report Compiled Successfully</span>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handlePrint}
                className="flex-1 bg-emerald-600 text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-emerald-700 shadow-md transition-all active:scale-95 cursor-pointer"
              >
                Print PDF
              </button>
              <button 
                onClick={() => setStatus('idle')}
                className="bg-stone-50 dark:bg-emerald-900/20 border border-stone-200 dark:border-emerald-800/40 text-stone-500 dark:text-emerald-300 px-5 py-4 rounded-xl font-bold uppercase tracking-widest text-[10px] hover:bg-stone-100 dark:hover:bg-emerald-850/40 transition-colors cursor-pointer"
              >
                Reset
              </button>
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
};
