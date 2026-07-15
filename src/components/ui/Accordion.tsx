
import React, { useState, useId } from 'react';
import DOMPurify from 'dompurify';
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

  const renderContent = (text: string) => {
    if (!text) return null;

    const hasHtml = /<\/?[a-z][\s\S]*>/i.test(text);
    const hasMarkdown = /(\*\*|__|\*|_|`|\[.+\]\(.+\))/.test(text) || /^\s*[-*+]\s+/m.test(text) || /^\s*\d+\.\s+/m.test(text);

    if (hasHtml || hasMarkdown) {
      let html = text;
      if (hasMarkdown && !hasHtml) {
        // Convert simple markdown to HTML
        html = html
          .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          .replace(/__(.*?)__/g, '<strong>$1</strong>')
          .replace(/\*(.*?)\*/g, '<em>$1</em>')
          .replace(/_(.*?)_/g, '<em>$1</em>')
          .replace(/`(.*?)`/g, '<code>$1</code>')
          .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">$1</a>');

        // Process lines for paragraphs / lists
        const lines = html.split('\n');
        let inList = false;
        const processed = [];

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed) {
            if (inList) {
              processed.push('</ul>');
              inList = false;
            }
            continue;
          }

          const listMatch = line.match(/^(\s*)[-*+]\s+(.*)/);
          if (listMatch) {
            if (!inList) {
              processed.push('<ul class="list-disc pl-5 my-2">');
              inList = true;
            }
            processed.push(`<li>${listMatch[2]}</li>`);
          } else {
            if (inList) {
              processed.push('</ul>');
              inList = false;
            }
            processed.push(`<p class="mb-2">${line}</p>`);
          }
        }
        if (inList) {
          processed.push('</ul>');
        }
        html = processed.join('');
      }

      return (
        <div 
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }} 
        />
      );
    }

    // Plain text: wrap first sentence in <strong>
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
    <div 
      itemScope 
      itemProp="mainEntity" 
      itemType="https://schema.org/Question"
      className={`border rounded-2xl bg-surface mb-4 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'border-brand-primary shadow-md' : 'border-default hover:border-brand-primary hover:shadow-sm'}`}
    >
      <button 
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={contentId}
        id={headerId}
        className="w-full p-5 flex items-start justify-between text-left group bg-surface relative z-10 focus:outline-none"
      >
        <div className="pr-6 flex-1">
            {category && (
                <span className={`text-[10px] font-black uppercase tracking-widest mb-2 block transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-stone-500 dark:text-stone-400 group-hover:text-brand-primary'}`}>
                    {category}
                </span>
            )}
            <span itemProp="name" className={`font-bold text-lg speakable-q transition-colors duration-300 ${isOpen ? 'text-brand-primary' : 'text-stone-700 dark:text-stone-200 group-hover:text-stone-900 dark:group-hover:text-white'}`}>
                {title}
            </span>
        </div>
        <span className={`p-3 rounded-full transition-transform duration-300 ease-in-out flex-shrink-0 ${isOpen ? 'rotate-180 bg-brand-50 text-brand-800 dark:bg-emerald-950/50 dark:text-brand-200' : 'bg-stone-50 dark:bg-stone-800 text-stone-400 dark:text-stone-500 group-hover:bg-brand-50 dark:group-hover:bg-emerald-950/30 group-hover:text-brand-600 dark:group-hover:text-brand-400'}`}>
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
          <div className={`p-5 pt-0 text-stone-600 dark:text-stone-300 leading-relaxed transition-opacity duration-300 delay-100 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            <div 
              itemScope 
              itemProp="acceptedAnswer" 
              itemType="https://schema.org/Answer"
              className="pt-4 border-t border-divider"
            >
              <div itemProp="text" className="speakable-a">
                {renderContent(content)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
