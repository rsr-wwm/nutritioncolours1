import React, { useState, useRef, useEffect } from 'react';
import { useLocalization, SUPPORTED_REGIONS } from '@/lib/useLocalization';

interface LocalizationHubProps {
  currentPath: string;
  navigate: (path: string) => void;
  localization: ReturnType<typeof useLocalization> | null;
  onRegionChange?: (regionObj: any) => void;
  isTopBar?: boolean;
}

export const LocalizationHub: React.FC<LocalizationHubProps> = ({
  currentPath,
  navigate,
  localization,
  onRegionChange,
  isTopBar = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { region, language, updateLocalization } = localization || { region: 'in', language: 'en', updateLocalization: () => {} };

  const currentRegionData = SUPPORTED_REGIONS.find(r => r.code === region) || SUPPORTED_REGIONS[0];

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRegionSelect = (regionCode: string) => {
    const regObj = SUPPORTED_REGIONS.find(r => r.code === regionCode)!;
    
    // Choose first language as default when switching regions
    const newLang = regObj.languages[0].code;

    updateLocalization({
      region: regionCode,
      language: newLang
    });

    if (onRegionChange) {
      onRegionChange(regObj);
    }

    // Dynamic routing path handling
    updateRoutingPath(newLang);
  };

  const handleLanguageSelect = (langCode: string) => {
    updateLocalization({ language: langCode });
    updateRoutingPath(langCode);
  };

  const updateRoutingPath = (targetLang: string) => {
    // If routing has locale prefixes, rebuild pathname
    // E.g., strip existing locale prefixes, then prepend targetLang
    let cleanPath = currentPath;
    const pathParts = currentPath.split('/');
    const firstPart = pathParts[0];

    // If first part matches any supported language code, strip it
    const allLangCodes = Array.from(
      new Set(SUPPORTED_REGIONS.flatMap(r => r.languages.map(l => l.code)))
    );
    
    if (allLangCodes.includes(firstPart)) {
      pathParts.shift();
      cleanPath = pathParts.join('/');
    }

    // Default route prepending
    if (targetLang === 'en') {
      navigate(cleanPath || 'home');
    } else {
      navigate(`${targetLang}/${cleanPath || 'home'}`);
    }
  };

  return (
    <div className="relative inline-block text-left" ref={containerRef}>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider transition-colors cursor-pointer rounded-lg px-2 py-1 ${
          isTopBar 
            ? 'text-lime-400 hover:text-white bg-white/5 border border-white/10' 
            : 'text-emerald-800 dark:text-lime-400 hover:text-emerald-950 dark:hover:text-white bg-stone-100/80 dark:bg-white/5 border border-stone-200/80 dark:border-white/10'
        }`}
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <span>{currentRegionData.flag}</span>
        <span className="hidden sm:inline">{currentRegionData.name} ({language.toUpperCase()})</span>
        <span className="inline sm:hidden">{language.toUpperCase()}</span>
        <span className="text-[8px] opacity-60">▼</span>
      </button>

      {/* Popover / Overlay Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-white dark:bg-stone-900 border border-stone-100 dark:border-stone-850 shadow-2xl p-5 z-[100] animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="text-xs font-black uppercase tracking-widest text-emerald-950 dark:text-emerald-400 mb-4 border-b border-stone-100 dark:border-stone-800 pb-2">
            Personalize Experience
          </div>

          <div className="space-y-4">
            {/* Region Selection */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                Outreach Region / Clinic Hub
              </label>
              <select
                value={region}
                onChange={(e) => handleRegionSelect(e.target.value)}
                className="w-full bg-stone-50 dark:bg-stone-850 border border-stone-200/50 dark:border-stone-800 text-xs font-bold text-stone-800 dark:text-stone-200 rounded-xl p-2.5 outline-none focus:border-emerald-500"
              >
                {SUPPORTED_REGIONS.map((r) => (
                  <option key={r.code} value={r.code}>
                    {r.flag} {r.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Language Selection */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-stone-400 dark:text-stone-500 mb-1">
                Preferred Language
              </label>
              <select
                value={language}
                onChange={(e) => handleLanguageSelect(e.target.value)}
                className="w-full bg-stone-50 dark:bg-stone-850 border border-stone-200/50 dark:border-stone-800 text-xs font-bold text-stone-800 dark:text-stone-200 rounded-xl p-2.5 outline-none focus:border-emerald-500"
              >
                {currentRegionData.languages.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-stone-100 dark:border-stone-800 text-[9px] text-stone-400 leading-normal">
            * Selected preferences are saved locally and respect SEO crawling structure.
          </div>
        </div>
      )}
    </div>
  );
};
