import React from 'react';

/**
 * Semantic Compression Layer
 * Renders 4-layer content depth for AI extraction and progressive disclosure:
 *   1. One-sentence answer (visible by default)
 *   2. Short explanation (expandable)
 *   3. Detailed expert explanation (expandable)
 *   4. Evidence and methodology (expandable with citations)
 *
 * Each layer is machine-readable via data attributes for AI crawlers.
 * Uses <details> elements with CSS transitions for progressive disclosure.
 */

export interface SemanticLayerData {
  /** Layer 1: One-sentence answer (always visible) */
  conciseAnswer: string;
  /** Layer 2: Short explanation paragraph */
  shortExplanation?: string;
  /** Layer 3: Detailed expert-level explanation */
  detailedExplanation?: string;
  /** Layer 4: Evidence, methodology, and citations */
  evidence?: {
    methodology: string;
    citations: { label: string; url?: string; pmid?: string }[];
    evidenceLevel?: 'I' | 'II' | 'III' | 'IV';
  };
}

interface SemanticCompressionLayerProps {
  data: SemanticLayerData;
  topicName: string;
  /** Optional custom label overrides */
  labels?: {
    concise?: string;
    short?: string;
    detailed?: string;
    evidence?: string;
  };
}

export const SemanticCompressionLayer: React.FC<SemanticCompressionLayerProps> = ({
  data,
  topicName,
  labels
}) => {
  return (
    <section
      className="semantic-compression-layer space-y-3"
      aria-label={`Progressive disclosure: ${topicName}`}
      data-semantic-depth="4"
      data-ai-answer="true"
    >
      {/* Layer 1: Concise Answer — always visible */}
      <div
        className="semantic-layer semantic-layer--1 bg-emerald-50 border border-emerald-200/60 rounded-2xl p-5"
        data-depth="1"
        data-depth-label="concise"
      >
        <p className="text-sm font-bold text-emerald-900 leading-relaxed">
          {labels?.concise || 'Quick Answer'}: {data.conciseAnswer}
        </p>
      </div>

      {/* Layer 2: Short Explanation */}
      {data.shortExplanation && (
        <details className="semantic-layer semantic-layer--2 group">
          <summary className="cursor-pointer text-sm font-bold text-emerald-800 bg-emerald-50/50 border border-emerald-100 rounded-2xl p-4 hover:bg-emerald-50 transition-colors list-none flex items-center justify-between">
            <span>{labels?.short || 'Short Explanation'}</span>
            <svg className="w-4 h-4 text-emerald-600 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div
            className="px-5 pb-4 pt-2 text-sm text-stone-600 leading-relaxed"
            data-depth="2"
            data-depth-label="short"
          >
            {data.shortExplanation}
          </div>
        </details>
      )}

      {/* Layer 3: Detailed Expert Explanation */}
      {data.detailedExplanation && (
        <details className="semantic-layer semantic-layer--3 group">
          <summary className="cursor-pointer text-sm font-bold text-stone-700 bg-stone-50 border border-stone-200 rounded-2xl p-4 hover:bg-stone-100 transition-colors list-none flex items-center justify-between">
            <span>{labels?.detailed || 'Detailed Clinical Explanation'}</span>
            <svg className="w-4 h-4 text-stone-500 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div
            className="px-5 pb-4 pt-2 text-sm text-stone-600 leading-relaxed whitespace-pre-line"
            data-depth="3"
            data-depth-label="detailed"
          >
            {data.detailedExplanation}
          </div>
        </details>
      )}

      {/* Layer 4: Evidence & Methodology */}
      {data.evidence && (
        <details className="semantic-layer semantic-layer--4 group">
          <summary className="cursor-pointer text-sm font-bold text-amber-800 bg-amber-50 border border-amber-200/60 rounded-2xl p-4 hover:bg-amber-50/80 transition-colors list-none flex items-center justify-between">
            <span>{labels?.evidence || 'Evidence & Methodology'}</span>
            <svg className="w-4 h-4 text-amber-600 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <div
            className="px-5 pb-4 pt-2 space-y-3"
            data-depth="4"
            data-depth-label="evidence"
          >
            {data.evidence.evidenceLevel && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-700 bg-amber-100 px-2 py-0.5 rounded">
                  Evidence Level {data.evidence.evidenceLevel}
                </span>
              </div>
            )}
            <p className="text-xs text-stone-600 leading-relaxed">
              <strong>Methodology:</strong> {data.evidence.methodology}
            </p>
            {data.evidence.citations.length > 0 && (
              <div className="space-y-1">
                <p className="text-[10px] font-black uppercase tracking-widest text-stone-500">Citations</p>
                <ul className="space-y-1">
                  {data.evidence.citations.map((cite, i) => (
                    <li key={i} className="text-xs text-stone-500 flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">[{i + 1}]</span>
                      {cite.url ? (
                        <a href={cite.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-700 hover:underline">
                          {cite.label}
                        </a>
                      ) : (
                        <span>{cite.label}</span>
                      )}
                      {cite.pmid && (
                        <a
                          href={`https://pubmed.ncbi.nlm.nih.gov/${cite.pmid}/`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-emerald-600 hover:underline ml-1 shrink-0"
                        >
                          PMID:{cite.pmid}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </details>
      )}
    </section>
  );
};

export default SemanticCompressionLayer;
