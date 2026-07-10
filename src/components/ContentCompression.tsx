'use client';
import { useState } from 'react';

interface ContentCompressionProps {
  quickAnswer: React.ReactNode;
  standardDetail: React.ReactNode;
  deepExpert: React.ReactNode;
}

export function ContentCompression({ quickAnswer, standardDetail, deepExpert }: ContentCompressionProps) {
  const [contentDepth, setContentDepth] = useState<'quick' | 'standard' | 'deep'>('standard');

  return (
    <div data-content-depth={contentDepth}>
      <div className="flex gap-2 mb-6 p-1 bg-stone-100 rounded-xl inline-flex">
        <button
          onClick={() => setContentDepth('quick')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            contentDepth === 'quick'
              ? 'bg-white text-emerald-700 shadow-md'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Quick Answer
        </button>
        <button
          onClick={() => setContentDepth('standard')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            contentDepth === 'standard'
              ? 'bg-white text-emerald-700 shadow-md'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Standard
        </button>
        <button
          onClick={() => setContentDepth('deep')}
          className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${
            contentDepth === 'deep'
              ? 'bg-white text-emerald-700 shadow-md'
              : 'text-stone-600 hover:text-stone-900'
          }`}
        >
          Expert Deep-Dive
        </button>
      </div>

      <div className="quick-answer" style={{ display: contentDepth === 'quick' ? 'block' : 'none' }}>
        {quickAnswer}
      </div>
      <div className="standard-detail" style={{ display: contentDepth === 'standard' ? 'block' : 'none' }}>
        {standardDetail}
      </div>
      <div className="deep-expert" style={{ display: contentDepth === 'deep' ? 'block' : 'none' }}>
        {deepExpert}
      </div>
    </div>
  );
}
