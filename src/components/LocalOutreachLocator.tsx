import React, { useState, useEffect } from 'react';
import { IconMapPin, IconArrowRight, IconX } from './ui/Icons';

interface LocalOutreachLocatorProps {
  navigate?: (path: string) => void;
}

export const LocalOutreachLocator: React.FC<LocalOutreachLocatorProps> = ({ navigate }) => {
  const [suggestion, setSuggestion] = useState<{ city: string; slug: string } | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check if dismissed previously in this session
    const isDismissed = sessionStorage.getItem('NC_outreach_suggest_dismissed');
    if (isDismissed) return;

    try {
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      
      // Dynamic suggestion based on timezone mappings
      if (userTimeZone.includes('Kolkata') || userTimeZone.includes('India')) {
        setSuggestion({ city: 'Mumbai', slug: 'mumbai' });
      } else if (userTimeZone.includes('London')) {
        setSuggestion({ city: 'London', slug: 'london' });
      } else if (userTimeZone.includes('Dubai') || userTimeZone.includes('Asia/Dubai')) {
        setSuggestion({ city: 'Dubai', slug: 'dubai' });
      } else if (userTimeZone.includes('New_York') || userTimeZone.includes('Eastern')) {
        setSuggestion({ city: 'New York City', slug: 'new-york-city' });
      } else if (userTimeZone.includes('Chicago') || userTimeZone.includes('Central')) {
        setSuggestion({ city: 'Chicago', slug: 'chicago' });
      } else if (userTimeZone.includes('Los_Angeles') || userTimeZone.includes('Pacific')) {
        setSuggestion({ city: 'Los Angeles', slug: 'los-angeles' });
      } else if (userTimeZone.includes('Sydney') || userTimeZone.includes('Melbourne')) {
        setSuggestion({ city: 'Sydney', slug: 'sydney' });
      } else if (userTimeZone.includes('Singapore')) {
        setSuggestion({ city: 'Singapore', slug: 'singapore' });
      }
    } catch (e) {
      // Quiet fail to maintain privacy & prevent console noise
    }
  }, []);

  const handleDismiss = () => {
    sessionStorage.setItem('NC_outreach_suggest_dismissed', 'true');
    setDismissed(true);
  };

  const handleRedirect = () => {
    if (!suggestion) return;
    if (navigate) {
      navigate(`clinic/${suggestion.slug}`);
    } else {
      window.location.href = `/clinic/${suggestion.slug}`;
    }
  };

  if (dismissed || !suggestion) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-500 max-w-sm w-full">
      <div className="rounded-3xl border border-stone-100 bg-emerald-950 text-white p-5 shadow-2xl space-y-3 backdrop-blur-md relative overflow-hidden">
        {/* Subtle glowing background aura */}
        <div className="absolute -top-12 -left-12 w-24 h-24 bg-emerald-600/30 rounded-full blur-2xl" />
        
        <button 
          onClick={handleDismiss}
          className="absolute top-4 right-4 text-emerald-200/60 hover:text-white transition-colors"
          aria-label="Dismiss location suggestion"
        >
          <IconX size={16} />
        </button>

        <div className="flex gap-3 items-start pr-6">
          <div className="p-2 bg-emerald-800 text-emerald-300 rounded-2xl shadow-inner mt-0.5">
            <IconMapPin size={18} />
          </div>
          <div className="space-y-1">
            <h4 className="text-xs uppercase tracking-widest font-black text-emerald-400">Nearest Outreach Hub</h4>
            <p className="text-xs text-stone-200 font-semibold leading-relaxed">
              We detected you are near <strong className="text-white">{suggestion.city}</strong>. View custom metabolic programs for your region.
            </p>
          </div>
        </div>

        <button
          onClick={handleRedirect}
          className="w-full btn-primary flex items-center justify-between group"
        >
          Explore Local Hub 
          <IconArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  );
};
