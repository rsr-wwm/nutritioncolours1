import React, { useEffect, useState } from 'react';
import { IconArrowRight } from './ui/Icons';

/**
 * Question-Path Architecture UI
 * Renders conversation trees as navigable question chains.
 * Shows the current question + linked follow-up questions.
 * Each follow-up links to the relevant route.
 * Data sourced from conversation-trees.json.
 */

interface ConversationFollowUp {
  q: string;
  a: string;
  linksTo: string;
}

interface ConversationTree {
  root: string;
  rootAnswer: string;
  followUps: ConversationFollowUp[];
}

interface QuestionPathNavProps {
  /** Current route topic/condition/herb ID (e.g., 'diabetes-reversal') */
  currentId: string;
  /** Navigation function */
  navigate: (path: string) => void;
}

export const QuestionPathNav: React.FC<QuestionPathNavProps> = ({ currentId, navigate }) => {
  const [tree, setTree] = useState<ConversationTree | null>(null);
  const [expandedQ, setExpandedQ] = useState<number | null>(null);

  useEffect(() => {
    fetch('/data/conversation-trees.json')
      .then(r => r.json())
      .then(data => {
        const matchedTree = data.trees?.[currentId];
        if (matchedTree) {
          setTree(matchedTree);
        }
      })
      .catch(() => { /* Conversation trees unavailable */ });
  }, [currentId]);

  if (!tree) return null;

  return (
    <section
      className="question-path-nav bg-gradient-to-br from-emerald-50 to-stone-50 border border-emerald-100 rounded-3xl p-6 space-y-5"
      aria-label="Follow-up Questions"
      data-ai-answer="true"
      data-snippet-type="conversationTree"
    >
      <div className="flex items-center gap-3">
        <span className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-black">Q</span>
        <h3 className="text-sm font-black text-emerald-950 uppercase tracking-wider">
          Natural Follow-Up Questions
        </h3>
      </div>

      {/* Root Question */}
      <div className="bg-white rounded-2xl p-4 border border-emerald-200/50 shadow-sm">
        <p className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-2">People Also Ask</p>
        <p className="text-sm font-bold text-emerald-950 leading-snug">{tree.root}</p>
        <p className="text-xs text-stone-600 mt-2 leading-relaxed" data-ai-answer="true">
          {tree.rootAnswer}
        </p>
      </div>

      {/* Follow-Up Questions */}
      <div className="space-y-2">
        <p className="text-[10px] font-black text-stone-400 uppercase tracking-widest">Then ask...</p>
        {tree.followUps.map((fu, idx) => (
          <div key={idx} className="group">
            <button
              className="w-full text-left flex items-start gap-3 p-3 rounded-xl bg-white/70 hover:bg-white border border-transparent hover:border-emerald-200 transition-all"
              onClick={() => setExpandedQ(expandedQ === idx ? null : idx)}
              aria-expanded={expandedQ === idx}
            >
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">
                {idx + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-stone-700 group-hover:text-emerald-800 transition-colors leading-snug">
                  {fu.q}
                </p>
                {expandedQ === idx && (
                  <div className="mt-2 space-y-2">
                    <p className="text-xs text-stone-600 leading-relaxed" data-ai-answer="true">
                      {fu.a}
                    </p>
                    <a
                      href={fu.linksTo}
                      onClick={(e) => { e.preventDefault(); navigate(fu.linksTo.replace(/^\//, '')); }}
                      className="inline-flex items-center gap-1 text-[10px] font-black text-emerald-700 hover:text-emerald-900 uppercase tracking-widest"
                    >
                      Read more <IconArrowRight size={10} />
                    </a>
                  </div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default QuestionPathNav;
