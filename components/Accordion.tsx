
import React, { useState, useId } from 'react';
import { IconChevronDown } from './Icons';

interface AccordionProps {
  title: string;
  content: string;
  category?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ title, content, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = useId();
  const headerId = useId();

  const formatBoldFirstSentence = (text: string) => {
    if (!text) return text;
    const sentenceEndRegex = /([.!?])(\s+|$)/;
    const match = text.match(sentenceEndRegex);
    if (match && match.index !== undefined) {
      const endPos = match.index + match[1].length;
      const firstSentence = text.substring(0, endPos);
      const restOfText = text.substring(endPos);
      return (
        <>
          <strong>{firstSentence}</strong>
          {restOfText}
        </>
      );
    }
    return <strong>{text}</strong>;
  };

  return (
    <div className={`border rounded-2xl bg-white mb-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'border-emerald-200 shadow-lg ring-1 ring-emerald-100' : 'border-stone-100 hover:border-emerald-200 hover:shadow-md'}`}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={headerId}
        className="w-full p-5 flex items-start justify-between text-left group bg-white relative z-10 focus:outline-none"
      >
        <div className="pr-6 flex-1">
            {category && (
                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 block transition-colors duration-300 ${isOpen ? 'text-emerald-700' : 'text-stone-500 group-hover:text-emerald-700'}`}>
                    {category}
                </span>
            )}
            <span className={`font-bold text-lg transition-colors duration-300 ${isOpen ? 'text-emerald-950' : 'text-stone-700 group-hover:text-emerald-900'}`}>
                {title}
            </span>
        </div>
        <span className={`p-3 rounded-full transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-180 bg-emerald-100 text-emerald-700' : 'bg-stone-50 text-stone-400 group-hover:bg-emerald-50 group-hover:text-emerald-600'}`}>
          <IconChevronDown size={20} />
        </span>
      </button>
      
      <div 
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
      >
        <div className="overflow-hidden">
          <div className={`p-5 pt-0 text-stone-600 leading-relaxed transition-opacity duration-300 delay-100 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div className="pt-4 border-t border-stone-100/50">
                {formatBoldFirstSentence(content)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
