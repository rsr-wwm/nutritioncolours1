import React from 'react';

/**
 * EvidenceBadge: Displays the evidence level for clinical claims.
 * Maps evidence levels from claim-ledger.json to visual badges.
 * 
 * Usage:
 *   <EvidenceBadge level="systematic-review" />
 *   <EvidenceBadge level="rct" />
 *   <EvidenceBadge level="traditional" />
 */

type EvidenceLevel = 
  | 'systematic-review'
  | 'meta-analysis'
  | 'rct'
  | 'cohort-study'
  | 'case-control'
  | 'expert-opinion'
  | 'traditional-use'
  | 'preliminary'
  | 'moderate'
  | 'strong'
  | 'limited';

interface EvidenceBadgeProps {
  level: EvidenceLevel | string;
  className?: string;
  showIcon?: boolean;
}

const EVIDENCE_CONFIG: Record<string, { label: string; color: string; bgColor: string; icon: string; rank: number }> = {
  'systematic-review': {
    label: 'Systematic Review',
    color: 'text-emerald-800',
    bgColor: 'bg-emerald-50 border-emerald-200',
    icon: '🏆',
    rank: 1
  },
  'meta-analysis': {
    label: 'Meta-Analysis',
    color: 'text-emerald-800',
    bgColor: 'bg-emerald-50 border-emerald-200',
    icon: '🏆',
    rank: 1
  },
  'rct': {
    label: 'Randomized Controlled Trial',
    color: 'text-blue-800',
    bgColor: 'bg-blue-50 border-blue-200',
    icon: '🔬',
    rank: 2
  },
  'cohort-study': {
    label: 'Cohort Study',
    color: 'text-indigo-800',
    bgColor: 'bg-indigo-50 border-indigo-200',
    icon: '📊',
    rank: 3
  },
  'case-control': {
    label: 'Case-Control Study',
    color: 'text-violet-800',
    bgColor: 'bg-violet-50 border-violet-200',
    icon: '📋',
    rank: 4
  },
  'expert-opinion': {
    label: 'Expert Opinion',
    color: 'text-amber-800',
    bgColor: 'bg-amber-50 border-amber-200',
    icon: '👨‍⚕️',
    rank: 5
  },
  'traditional-use': {
    label: 'Traditional Use',
    color: 'text-orange-800',
    bgColor: 'bg-orange-50 border-orange-200',
    icon: '🌿',
    rank: 6
  },
  'traditional': {
    label: 'Traditional Use',
    color: 'text-orange-800',
    bgColor: 'bg-orange-50 border-orange-200',
    icon: '🌿',
    rank: 6
  },
  'preliminary': {
    label: 'Preliminary Evidence',
    color: 'text-stone-700',
    bgColor: 'bg-stone-50 border-stone-200',
    icon: '⚗️',
    rank: 7
  },
  'moderate': {
    label: 'Moderate Evidence',
    color: 'text-teal-800',
    bgColor: 'bg-teal-50 border-teal-200',
    icon: '✅',
    rank: 3
  },
  'strong': {
    label: 'Strong Evidence',
    color: 'text-emerald-800',
    bgColor: 'bg-emerald-50 border-emerald-200',
    icon: '🏆',
    rank: 1
  },
  'limited': {
    label: 'Limited Evidence',
    color: 'text-stone-600',
    bgColor: 'bg-stone-50 border-stone-200',
    icon: '⚗️',
    rank: 7
  }
};

export const EvidenceBadge: React.FC<EvidenceBadgeProps> = ({ level, className = '', showIcon = true }) => {
  const config = EVIDENCE_CONFIG[level] || EVIDENCE_CONFIG['preliminary'];
  
  return (
    <span
      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest border ${config.bgColor} ${config.color} ${className}`}
      title={`Evidence Level: ${config.label}`}
      aria-label={`Evidence level: ${config.label}`}
    >
      {showIcon && <span className="text-[10px]">{config.icon}</span>}
      {config.label}
    </span>
  );
};

/**
 * LastReviewedBadge: Shows when content was last clinically reviewed.
 */
export const LastReviewedBadge: React.FC<{ date: string; reviewer?: string; className?: string }> = ({ 
  date, 
  reviewer = 'Dr. Shilpa Thakur, Ph.D.',
  className = ''
}) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <div className={`flex items-center gap-2 text-[10px] text-stone-500 font-semibold ${className}`}>
      <span className="inline-flex items-center gap-1">
        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        Last clinically reviewed: {formattedDate}
      </span>
      {reviewer && <span className="text-stone-400">by {reviewer}</span>}
    </div>
  );
};

/**
 * ClinicalUpdateTimestamp: Real-time "last clinical update" indicator.
 */
export const ClinicalUpdateTimestamp: React.FC<{ date: string; className?: string }> = ({ date, className = '' }) => {
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
  
  return (
    <time
      dateTime={date}
      className={`text-[9px] uppercase tracking-widest text-stone-400 font-bold ${className}`}
      title={`Last updated: ${formattedDate}`}
    >
      Updated {formattedDate}
    </time>
  );
};

export default EvidenceBadge;
