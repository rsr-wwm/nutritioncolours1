
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { IconSearch, IconBot, IconCheck, IconShare, IconFileText } from './ui/Icons';
import { getStoredGeminiApiKey } from '@/lib/apiKey';
import { logger } from '@/lib/logger';
import { safeJsonParse } from '@/lib/safeUtils';

export const SeoAnalyzer = () => {
  const [topic, setTopic] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!topic) return;
    setLoading(true);
    try {
        const apiKey = getStoredGeminiApiKey();
        
        if (!apiKey) {
            alert("Please set your Gemini API Key in the Dr. AI Assistant settings (FAB button in the bottom right corner) to analyze SEO content.");
            setLoading(false);
            return;
        }
        const ai = new GoogleGenAI({ apiKey });
        const prompt = `Act as an SEO expert specializing in health and wellness content. For the topic "${topic}", provide the following in strictly valid JSON format (do not use markdown blocks):
        {
          "titles": ["3 catchy, SEO-friendly meta titles under 60 characters"],
          "metaDescription": "A compelling meta description under 160 characters",
          "keywords": ["10 high-potential, long-tail keywords relevant to the topic"],
          "outline": ["A 5-point blog post outline"]
        }`;
        
        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: 'application/json' }
        });
        
        if (response.text) {
            // Strip markdown code blocks if present
            const jsonStr = response.text.replace(/```json\n?|\n?```/g, '').trim();
            const parsed = safeJsonParse<any>(jsonStr, null);
            if (parsed) setResult(parsed);
        }
    } catch (e) {
        logger.error('SeoAnalyzer', 'SEO analysis failed', e);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="w-full bg-white rounded-[32px] shadow-xl border border-emerald-50 p-6 md:p-8 my-8 animate-in fade-in slide-in-from-bottom-8">
       <div className="flex items-center gap-4 mb-8">
        <div className="p-3 bg-blue-100 text-blue-700 rounded-full">
          <IconSearch size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-emerald-950">SEO Content Intelligence</h3>
          <p className="text-xs text-stone-500 font-medium uppercase tracking-wider">Powered by Gemini AI</p>
        </div>
      </div>

      <div className="flex gap-4 mb-8">
        <input 
            type="text" 
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g., 'Plant-based diet for PCOS')"
            className="flex-1 bg-stone-50 border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all"
            onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
        />
        <button 
            onClick={handleAnalyze} 
            disabled={loading || !topic}
            aria-label="Analyze topic search potential and suggest SEO tags"
            className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg flex items-center gap-2"
        >
            {loading ? 'Analyzing...' : 'Analyze'} <IconBot size={18} />
        </button>
      </div>

      {result && (
        <div className="grid md:grid-cols-2 gap-8 animate-in fade-in">
            <div className="space-y-6">
                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <IconFileText size={18} /> Suggested Meta Titles
                    </h4>
                    <ul className="space-y-3">
                        {result.titles?.map((t: string, i: number) => (
                            <li key={i} className="bg-white p-3 rounded-lg border border-stone-200 text-sm text-stone-700 shadow-sm flex justify-between items-center group">
                                {t}
                                <button onClick={() => navigator.clipboard.writeText(t)} className="text-stone-300 hover:text-emerald-600 opacity-0 group-hover:opacity-100 transition-all" title="Copy">
                                    <IconCheck size={14} />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100">
                    <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <IconShare size={18} /> Meta Description
                    </h4>
                    <p className="bg-white p-4 rounded-lg border border-stone-200 text-sm text-stone-600 leading-relaxed shadow-sm">
                        {result.metaDescription}
                    </p>
                </div>
            </div>

            <div className="space-y-6">
                 <div className="bg-stone-50 p-6 rounded-2xl border border-stone-100 h-full">
                    <h4 className="font-bold text-emerald-900 mb-4 flex items-center gap-2">
                        <IconSearch size={18} /> Target Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                        {result.keywords?.map((k: string, i: number) => (
                            <span key={i} className="px-3 py-1.5 bg-white text-emerald-700 text-xs font-bold rounded-full border border-emerald-100 shadow-sm">
                                {k}
                            </span>
                        ))}
                    </div>

                    <h4 className="font-bold text-emerald-900 mt-8 mb-4 flex items-center gap-2">
                        <IconFileText size={18} /> Suggested Outline
                    </h4>
                    <ul className="list-decimal list-inside space-y-2 text-sm text-stone-600">
                         {result.outline?.map((point: string, i: number) => (
                            <li key={i} className="pl-2 marker:text-emerald-500 marker:font-bold">{point}</li>
                         ))}
                    </ul>
                 </div>
            </div>
        </div>
      )}
    </div>
  );
};
