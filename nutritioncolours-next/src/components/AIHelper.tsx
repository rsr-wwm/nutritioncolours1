
import React, { useState, useEffect } from 'react';
import { IconBot } from './ui/Icons';

interface AIHelperProps {
  active: boolean;
  language: string;
}

export const AIHelper: React.FC<AIHelperProps> = ({ active, language }) => {
  const [popover, setPopover] = useState<{ text: string; x: number; y: number } | null>(null);

  useEffect(() => {
    if (!active) {
      setPopover(null);
      return;
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.aiExplain) {
        setPopover({
          text: target.dataset.aiExplain,
          x: e.clientX,
          y: e.clientY
        });
      } else {
        setPopover(null);
      }
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, [active]);

  if (!popover) return null;

  const isHindi = language === 'hi';

  return (
    <div 
      className="fixed z-[100] bg-white rounded-xl shadow-2xl p-4 max-w-xs border border-emerald-100 animate-in fade-in zoom-in duration-200"
      style={{ left: `${Math.max(8, Math.min(popover.x - 160, window.innerWidth - 328))}px`, top: `${popover.y + 20}px` }}
    >
      <div className="flex items-center gap-2 mb-2 text-emerald-600 font-bold text-sm">
        <IconBot />
        <span>{isHindi ? 'विशेषज्ञ सारांश' : 'Clinical Explanation'}</span>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed">
        {popover.text}
      </p>
      <button 
        onClick={() => setPopover(null)}
        className="mt-3 text-xs text-slate-400 hover:text-slate-600 uppercase font-bold tracking-wider"
      >
        {isHindi ? 'बंद करें' : 'Close'}
      </button>
    </div>
  );
};
