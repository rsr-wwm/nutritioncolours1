
import React from 'react';

interface LogoProps {
  className?: string;
  lightMode?: boolean; // If true, optimizes colors for dark backgrounds (white text/icons)
}

export const Logo: React.FC<LogoProps> = ({ className, lightMode = false }) => (
  <div className={`flex items-center gap-4 shrink-0 ${className}`}>
    <div className={`relative flex items-center justify-center transition-transform duration-300 shrink-0 ${className?.includes('w-') ? '' : 'w-12 h-12'}`}>
      <svg aria-hidden="true" viewBox="0 0 200 200" className="w-full h-full drop-shadow-sm">
        <title>NutritionColours Clinic Logo</title>
        {/* Wreath - Left Side */}
        <g fill="none" stroke={lightMode ? "#FFFFFF" : "#2D6A4F"} strokeWidth="2">
          <path d="M55,165 Q45,150 40,135 Q35,120 40,105 Q45,90 55,80" />
          <path d="M50,160 Q40,158 35,150 Q40,152 50,160" />
          <path d="M42,145 Q32,143 27,135 Q32,137 42,145" />
          <path d="M38,130 Q28,128 23,120 Q28,122 38,130" />
          <path d="M38,115 Q28,113 23,105 Q28,107 38,115" />
          <path d="M42,100 Q32,98 27,90 Q32,92 42,100" />
          <path d="M50,85 Q40,83 35,75 Q40,77 50,85" />
        </g>
        
        {/* Wreath - Right Side */}
        <g fill="none" stroke={lightMode ? "#FFFFFF" : "#2D6A4F"} strokeWidth="2">
          <path d="M145,165 Q155,150 160,135 Q165,120 160,105 Q155,90 145,80" />
          <path d="M150,160 Q160,158 165,150 Q160,152 150,160" />
          <path d="M158,145 Q168,143 173,135 Q168,137 158,145" />
          <path d="M162,130 Q172,128 177,120 Q172,122 162,130" />
          <path d="M162,115 Q172,113 177,105 Q172,107 162,115" />
          <path d="M158,100 Q168,98 173,90 Q168,92 158,100" />
          <path d="M150,85 Q160,83 165,75 Q160,77 150,85" />
        </g>

        {/* Central Circle Frame */}
        <circle cx="100" cy="100" r="65" fill="none" stroke={lightMode ? "#FFFFFF" : "#2D6A4F"} strokeWidth="4" />
        
        {/* Inner Content - Leaves */}
        <g transform="translate(75, 55)">
          <path d="M25,50 Q25,10 5,10 Q25,10 25,50" fill={lightMode ? "#D1FAE5" : "#74C365"} />
          <path d="M25,50 Q25,0 45,0 Q25,0 25,50" fill={lightMode ? "#FFFFFF" : "#2D6A4F"} />
          <path d="M25,50 Q-10,25 0,15 Q10,25 25,50" fill={lightMode ? "#6EE7B7" : "#52B788"} />
        </g>

        {/* Mortar (Bowl) */}
        <path d="M55,100 Q55,145 100,145 Q145,145 145,100 L55,100 Z" fill={lightMode ? "#064E3B" : "#1B4332"} />
        <path d="M55,100 Q55,145 100,145 L100,100 L55,100 Z" fill={lightMode ? "#34D399" : "#74C365"} fillOpacity="0.6" />
        <rect x="55" y="100" width="90" height="4" fill={lightMode ? "#065F46" : "#081C15"} />

        {/* Pestle */}
        <g transform="rotate(35, 120, 95)">
          <rect x="110" y="55" width="12" height="60" rx="6" fill={lightMode ? "#064E3B" : "#1B4332"} />
          <circle cx="116" cy="55" r="8" fill={lightMode ? "#064E3B" : "#1B4332"} />
        </g>

        {/* Small Flower at Base */}
        <g transform="translate(90, 160)">
          <circle cx="10" cy="10" r="3" fill={lightMode ? "#FFFFFF" : "#2D6A4F"} />
          <circle cx="10" cy="4" r="3" fill={lightMode ? "#6EE7B7" : "#52B788"} />
          <circle cx="10" cy="16" r="3" fill={lightMode ? "#6EE7B7" : "#52B788"} />
          <circle cx="4" cy="10" r="3" fill={lightMode ? "#6EE7B7" : "#52B788"} />
          <circle cx="16" cy="10" r="3" fill={lightMode ? "#6EE7B7" : "#52B788"} />
        </g>
      </svg>
    </div>
    <div className={`flex flex-col leading-none ${lightMode ? 'text-white' : ''}`}>
      <span className={`text-xl font-bold tracking-tight brand-font ${lightMode ? 'text-white' : 'text-emerald-950'}`}>NutritionColours</span>
      <span className={`text-xs uppercase tracking-widest font-semibold ${lightMode ? 'text-emerald-300' : 'text-emerald-700'}`}>Food as Medicine</span>
    </div>
  </div>
);
