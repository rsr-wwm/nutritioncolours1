'use client';
import { useState } from 'react';
import { SitemapStats, MindMapVisualizer, DetailedListView, GridMapView, AdminAuditList, NodeDetailModal } from '@/components/SitemapVisuals';
import { SITE_STRUCTURE } from '@/lib/constants';
import type { SitemapNode } from '@/lib/types';

export default function SitemapPage() {
  const [view, setView] = useState<'list' | 'grid' | 'mindmap'>('list');
  const [selectedNode, setSelectedNode] = useState<SitemapNode | null>(null);

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 brand-font tracking-tighter">Visual Sitemap</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">Explore the complete architecture of NutritionColours</p>
        </div>
        <SitemapStats data={SITE_STRUCTURE} />
        <div className="flex justify-center gap-4">
          {(['list', 'grid', 'mindmap'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === v ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-stone-500 hover:bg-stone-50 border border-stone-200'}`}>
              {v === 'mindmap' ? 'Mind Map' : v === 'list' ? 'Detailed List' : 'Grid View'}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-stone-100 shadow-sm">
          {view === 'list' && <DetailedListView data={SITE_STRUCTURE} onNavigate={(path: string) => window.location.href = path} />}
          {view === 'grid' && <GridMapView data={SITE_STRUCTURE} onNavigate={(path: string) => window.location.href = path} />}
          {view === 'mindmap' && <MindMapVisualizer data={SITE_STRUCTURE} onNodeClick={(node: SitemapNode) => setSelectedNode(node)} />}
        </div>
        <AdminAuditList data={SITE_STRUCTURE} />
        {selectedNode && <NodeDetailModal node={selectedNode} onClose={() => setSelectedNode(null)} onNavigate={(path: string) => { setSelectedNode(null); window.location.href = path; }} />}
      </div>
    </div>
  );
}
