'use client';
import { useState, useEffect } from 'react';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '@/components/CompatLink'; // Replaced for Astro compatibility

interface ConstellationNode {
  id: string;
  label: string;
  href: string;
  category: 'topic' | 'service' | 'faq' | 'article' | 'herb' | 'condition';
}

interface KnowledgeConstellationProps {
  nodes: ConstellationNode[];
  centerLabel?: string;
}

const categoryColors: Record<string, string> = {
  topic: '#059669', service: '#0284c7', faq: '#d97706',
  article: '#7c3aed', herb: '#84cc16', condition: '#14b8a6',
};

export function KnowledgeConstellation({ nodes, centerLabel = 'This Topic' }: KnowledgeConstellationProps) {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  if (isMobile) {
    return (
      <nav aria-label="Related content" className="space-y-4">
        <h3 className="text-sm font-black uppercase tracking-widest text-stone-500">Related Insights</h3>
        <div className="grid gap-3">
          {nodes.map(node => (
            <CompatLink key={node.id} href={node.href}
              className="flex items-center gap-3 p-4 bg-white rounded-2xl border border-stone-100 hover:border-emerald-200 transition-all group block"
              style={{ borderLeftColor: categoryColors[node.category], borderLeftWidth: 3 }}>
              <div className="flex-1">
                <p className="text-xs font-black uppercase tracking-widest text-stone-400">{node.category}</p>
                <p className="font-bold text-emerald-950 group-hover:text-emerald-700 transition-colors">{node.label}</p>
              </div>
            </CompatLink>
          ))}
        </div>
      </nav>
    );
  }

  const width = 600, height = 400;
  const cx = width / 2, cy = height / 2;
  const radius = 150;

  return (
    <nav aria-label="Related content" className="relative">
      <h3 className="text-sm font-black uppercase tracking-widest text-stone-500 mb-4">Knowledge Constellation</h3>
      <svg viewBox={`0 0 ${width} ${height}`} className="w-full max-w-2xl mx-auto" role="img" aria-label="Related topics visualization">
        {/* Connection lines */}
        {nodes.map((node, i) => {
          const angle = (2 * Math.PI * i) / nodes.length - Math.PI / 2;
          const nx = cx + radius * Math.cos(angle);
          const ny = cy + radius * Math.sin(angle);
          return (
            <line key={`line-${node.id}`} x1={cx} y1={cy} x2={nx} y2={ny}
              stroke={hoveredNode === node.id ? categoryColors[node.category] : '#e7e5e4'}
              strokeWidth={hoveredNode === node.id ? 2 : 1}
              strokeDasharray={hoveredNode === node.id ? 'none' : '4 4'}
              style={{ transition: 'all 0.3s ease' }} />
          );
        })}
        {/* Center node */}
        <circle cx={cx} cy={cy} r={30} fill="#064e3b" />
        <text x={cx} y={cy + 4} textAnchor="middle" fill="white" fontSize="8" fontWeight="800" style={{ textTransform: 'uppercase', letterSpacing: '0.1em' }}>
          {centerLabel.length > 12 ? centerLabel.slice(0, 12) + '...' : centerLabel}
        </text>
        {/* Outer nodes */}
        {nodes.map((node, i) => {
          const angle = (2 * Math.PI * i) / nodes.length - Math.PI / 2;
          const nx = cx + radius * Math.cos(angle);
          const ny = cy + radius * Math.sin(angle);
          const isHovered = hoveredNode === node.id;
          return (
            <g key={node.id} onMouseEnter={() => setHoveredNode(node.id)} onMouseLeave={() => setHoveredNode(null)} style={{ cursor: 'pointer' }}>
              <a href={node.href}>
                <circle cx={nx} cy={ny} r={isHovered ? 22 : 18} fill={categoryColors[node.category]} opacity={isHovered ? 1 : 0.8}
                  style={{ transition: 'all 0.3s ease' }} />
                <text x={nx} y={ny + 3} textAnchor="middle" fill="white" fontSize="7" fontWeight="700">
                  {node.label.length > 10 ? node.label.slice(0, 10) + '..' : node.label}
                </text>
              </a>
            </g>
          );
        })}
      </svg>
    </nav>
  );
}
