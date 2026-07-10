
import React from 'react';

interface SectionHeadingProps {
  subtitle: string;
  title: React.ReactNode;
  light?: boolean;
  isMain?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ subtitle, title, light = false, isMain = false }) => {
  const HeadingTag = isMain ? 'h1' : 'h2';
  return (
    <div className="relative z-10 text-center mb-10 space-y-4 px-4">
      <span className={light ? "text-lime-400 text-sm font-black uppercase tracking-[0.3em]" : "badge-clinical"}>
        {subtitle}
      </span>
      <HeadingTag className={`text-4xl md:text-6xl lg:text-7xl font-black brand-font leading-tight ${light ? 'text-white' : 'text-emerald-950'}`}>
        {title}
      </HeadingTag>
      <div className="flex justify-center mt-4">
        <div className={`w-16 md:w-24 h-1.5 rounded-full ${light ? 'bg-lime-400' : 'bg-gradient-to-r from-emerald-500 to-lime-500'}`}></div>
        <div className={`w-3 md:w-4 h-1.5 rounded-full ml-2 ${light ? 'bg-white/50' : 'bg-teal-400'}`}></div>
      </div>
    </div>
  );
};

