
import React, { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { GoogleGenAI } from "@google/genai";
import { SitemapNode } from '@/lib/types';
import { IconChevronDown, IconX, IconSearch, IconFileText, IconLeaf, IconArrowRight, IconBot, IconPlus } from './ui/Icons';
import { getStoredGeminiApiKey } from '@/lib/apiKey';
import { logger } from '@/lib/logger';
import { safeJsonParse } from '@/lib/safeUtils';

// --- Sitemap Stats ---
export const SitemapStats = ({ data }: { data: SitemapNode }) => {
  const stats = React.useMemo(() => {
    let pages = 0;
    let sections = 0;
    let active = 0;
    let inactive = 0;

    const traverse = (node: SitemapNode) => {
      if (node.type === 'page' || node.type === 'resource') {
        pages++;
        if (node.status === 'optimized') active++;
        else inactive++;
      } else if (node.type === 'category') {
        sections++;
      }
      
      if (node.children) {
        node.children.forEach(traverse);
      }
    };

    traverse(data);
    return { pages, sections, active, inactive };
  }, [data]);

  const total = stats.pages + stats.sections;
  const health = stats.pages > 0 ? Math.round((stats.active / stats.pages) * 100) : 100;

  return (
    <div className="mb-12 animate-in fade-in slide-in-from-bottom-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-emerald-950 mb-4 brand-font">Sitemap</h1>
        <p className="text-stone-500 text-sm md:text-base max-w-lg mx-auto">Navigate NutritionColours using your preferred visualization style.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
        <div className="bg-indigo-50/50 p-6 md:p-8 rounded-[24px] flex flex-col items-center justify-center border border-indigo-100 hover:border-indigo-200 transition-colors shadow-sm">
           <span className="text-4xl md:text-5xl font-black text-indigo-600 mb-2">{total}</span>
           <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest">Total Links</span>
        </div>
        <div className="bg-emerald-50/50 p-6 md:p-8 rounded-[24px] flex flex-col items-center justify-center border border-emerald-100 hover:border-emerald-200 transition-colors shadow-sm">
           <span className="text-4xl md:text-5xl font-black text-emerald-600 mb-2">{stats.active}</span>
           <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest">Active Pages</span>
        </div>
        <div className="bg-stone-50/80 p-6 md:p-8 rounded-[24px] flex flex-col items-center justify-center border border-stone-100 hover:border-stone-200 transition-colors shadow-sm">
           <span className="text-4xl md:text-5xl font-black text-stone-400 mb-2">{stats.inactive}</span>
           <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest">Inactive</span>
        </div>
        <div className="bg-blue-50/50 p-6 md:p-8 rounded-[24px] flex flex-col items-center justify-center border border-blue-100 hover:border-blue-200 transition-colors shadow-sm">
           <span className="text-4xl md:text-5xl font-black text-blue-600 mb-2">{health}%</span>
           <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">System Health</span>
        </div>
      </div>
    </div>
  );
};

// --- Mind Map Visualizer ---
export const MindMapVisualizer = ({ data, onNodeClick }: { data: SitemapNode, onNodeClick: (node: SitemapNode) => void }) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 800, height: 600 });

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: Math.max(600, entry.contentRect.height || 600)
        });
      }
    });
    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!svgRef.current) return;

    const { width, height } = dimensions;
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    svg.append("title").text("Visual Mind Map and Navigation Sitemap Chart");

    const root = d3.hierarchy(data);
    const treeWidth = Math.max(800, width);
    const treeLayout = d3.tree<SitemapNode>().size([height - 100, treeWidth - 200]);
    treeLayout(root);

    const g = svg.append("g").attr("transform", "translate(100, 50)");

    // Links
    g.selectAll(".link")
      .data(root.links())
      .enter().append("path")
      .attr("class", "link")
      .attr("fill", "none")
      .attr("stroke", "#cbd5e1")
      .attr("stroke-width", 2)
      .attr("d", d3.linkHorizontal<any, any>()
        .x(d => d.y)
        .y(d => d.x)
      );

    // Nodes
    const node = g.selectAll(".node")
      .data(root.descendants())
      .enter().append("g")
      .attr("class", d => `node ${d.children ? "node--internal" : "node--leaf"}`)
      .attr("transform", d => `translate(${d.y},${d.x})`)
      .style("cursor", "pointer")
      .on("click", (event, d) => onNodeClick(d.data));

    // Node Circles
    node.append("circle")
      .attr("r", 6)
      .attr("fill", d => d.data.type === 'category' ? "#059669" : "#fff")
      .attr("stroke", "#059669")
      .attr("stroke-width", 2)
      .transition().duration(500)
      .attr("r", 8);

    // Node Labels
    node.append("text")
      .attr("dy", 3)
      .attr("x", d => d.children ? -12 : 12)
      .style("text-anchor", d => d.children ? "end" : "start")
      .text(d => d.data.label)
      .style("font-family", "sans-serif")
      .style("font-size", "12px")
      .style("fill", "#334155")
      .style("font-weight", d => d.children ? "bold" : "normal")
      .style("opacity", 0)
      .transition().duration(500).style("opacity", 1);

  }, [data, dimensions, onNodeClick]);

  return (
    <div ref={containerRef} className="w-full h-[600px] bg-stone-50 rounded-3xl border border-stone-200 overflow-auto shadow-inner relative group">
      <svg ref={svgRef} width={Math.max(800, dimensions.width)} height={dimensions.height} role="img" aria-label="Visual Mind Map and Navigation Sitemap Chart"></svg>
      <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] text-stone-400 border border-stone-100">
        Click nodes to view details
      </div>
    </div>
  );
};

// --- Detailed List View ---

interface SitemapNodeItemProps {
  node: SitemapNode;
  depth?: number;
  onNavigate?: (path: string) => void;
}

// Extracted Component to follow React Rules of Hooks
const SitemapNodeItem: React.FC<SitemapNodeItemProps> = ({ node, depth = 0, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(depth < 1); // Auto open root

  return (
    <div className="mb-3 animate-in fade-in slide-in-from-left-2 duration-300">
      <div 
        className={`p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group 
          ${depth === 0 
            ? 'bg-emerald-900 text-white border-emerald-900 shadow-lg' 
            : 'bg-white border-stone-100 hover:border-emerald-200 hover:shadow-md hover:pl-5'
          }`}
        onClick={() => setIsOpen(!isOpen)}
        style={{ marginLeft: `${depth * 24}px` }}
      >
        <div className="flex items-center gap-3">
            {depth > 0 && (
              <div className={`w-2 h-2 rounded-full ring-2 ring-white ${node.status === 'optimized' ? 'bg-green-400' : 'bg-amber-400'}`}></div>
            )}
            <span className={`font-bold tracking-tight ${depth === 0 ? 'text-lg' : 'text-sm text-stone-800'}`}>
              {node.label}
            </span>
            {node.type === 'page' && <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-700 border border-emerald-100">Page</span>}
            {node.type === 'category' && <span className="px-2 py-0.5 rounded text-[9px] font-black uppercase tracking-widest bg-stone-100 text-stone-500 border border-stone-200">Category</span>}
        </div>
        
        <div className="flex items-center gap-4">
            {node.path !== 'home' && (
              <button 
                onClick={(e) => { e.stopPropagation(); if (onNavigate) onNavigate(node.path); }}
                className={`text-[10px] font-mono opacity-60 hover:opacity-100 hover:underline transition-all ${depth === 0 ? 'text-emerald-300 hover:text-white' : 'text-stone-400 hover:text-emerald-600'}`}
              >
                  Go to /{node.path}
              </button>
            )}
            <IconChevronDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} size={16} />
        </div>
      </div>

      {/* Expanded Details */}
      {isOpen && node.type !== 'category' && depth > 0 && (
          <div className="mt-2 mb-4 p-4 bg-stone-50/50 rounded-2xl border border-stone-100 ml-8 text-xs animate-in fade-in">
            <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <strong className="block text-emerald-700 uppercase tracking-widest text-[10px]">SEO Metadata</strong>
                  <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                      <p className="mb-1"><span className="font-bold text-stone-700">Title:</span> {node.meta?.title || 'N/A'}</p>
                      <p className="mb-1 text-stone-500 truncate"><span className="font-bold text-stone-700">Desc:</span> {node.meta?.description || 'N/A'}</p>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {node.meta?.keywords?.map((k, i) => (
                            <span key={i} className="bg-stone-100 px-2 py-0.5 rounded-md border border-stone-200">{k}</span>
                        ))}
                      </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <strong className="block text-emerald-700 uppercase tracking-widest text-[10px]">Page Content</strong>
                  <div className="bg-white p-3 rounded-xl border border-stone-200 shadow-sm">
                      <div className="mb-2">
                        <span className="font-bold text-stone-700 block mb-1">Key Benefits:</span> 
                        <div className="flex flex-wrap gap-1">
                            {node.content?.benefits?.map((b, i) => <span key={i} className="text-stone-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">{b}</span>) || '-'}
                        </div>
                      </div>
                      <p className="text-stone-500"><span className="font-bold text-stone-700">Features:</span> {node.content?.features?.length || 0} items listed</p>
                  </div>
                </div>
            </div>
          </div>
      )}

      {isOpen && node.children && (
        <div className="mt-2 border-l-2 border-stone-100 ml-4 pl-0">
          {node.children.map(child => (
            <SitemapNodeItem key={child.id} node={child} depth={depth + 1} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
};

export const DetailedListView = ({ data, onNavigate }: { data: SitemapNode, onNavigate?: (path: string) => void }) => {
  return <div className="max-w-4xl mx-auto pb-12"><SitemapNodeItem node={data} depth={0} onNavigate={onNavigate} /></div>;
};

// --- Grid View (New) ---
export const GridMapView = ({ data, onNavigate }: { data: SitemapNode, onNavigate?: (path: string) => void }) => {
  // We want to show top-level categories as cards
  // Root node is skipped in grid view usually, we show its children
  const sections = data.children || [];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12">
        {sections.map((section) => (
            <div key={section.id} className="bg-white rounded-[32px] p-6 border border-stone-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                {/* Decorative blob */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-emerald-50 rounded-full group-hover:bg-emerald-100 transition-colors"></div>
                
                <div className="relative z-10 mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${section.type === 'category' ? 'bg-stone-100 text-stone-500' : 'bg-emerald-100 text-emerald-800'}`}>
                            {section.type}
                        </span>
                        <div className={`w-2 h-2 rounded-full ${section.status === 'optimized' ? 'bg-green-400' : 'bg-amber-400'}`}></div>
                    </div>
                    <button 
                      onClick={() => onNavigate && onNavigate(section.path)}
                      className="text-left text-2xl font-black text-emerald-950 brand-font group-hover:text-emerald-700 transition-colors hover:underline"
                    >
                      {section.label}
                    </button>
                    {section.meta?.description && (
                        <p className="text-xs text-stone-500 mt-2 line-clamp-2 leading-relaxed">{section.meta.description}</p>
                    )}
                </div>

                <div className="relative z-10 mt-auto">
                    {section.children && section.children.length > 0 ? (
                        <div className="space-y-2">
                            <span className="text-[10px] font-bold text-stone-400 uppercase tracking-widest block mb-2">Pages in Section</span>
                            {section.children.slice(0, 5).map(child => (
                                <button 
                                  key={child.id} 
                                  onClick={() => onNavigate && onNavigate(child.path)}
                                  className="w-full text-left flex items-center gap-2 text-sm text-stone-600 hover:text-emerald-600 transition-colors p-2 rounded-lg hover:bg-stone-50 group/btn"
                                >
                                    <IconLeaf size={12} className="text-emerald-400" />
                                    <span className="truncate">{child.label}</span>
                                    {(child.type === 'page' || child.type === 'resource' || child.type === 'category') && <IconArrowRight size={10} className="ml-auto opacity-0 group-hover/btn:opacity-100 transition-opacity"/>}
                                </button>
                            ))}
                            {section.children.length > 5 && (
                                <div className="text-[10px] font-bold text-emerald-600 pl-2 pt-1">
                                    +{section.children.length - 5} more pages...
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="p-4 bg-stone-50 rounded-xl text-center">
                            <span className="text-xs text-stone-400 italic">Single Page Section</span>
                        </div>
                    )}
                </div>
            </div>
        ))}
    </div>
  );
};

// --- Admin Audit List with AI Suggestions ---
export const AdminAuditList = ({ data }: { data: SitemapNode }) => {
  const [showAiSuggestions, setShowAiSuggestions] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [aiSuggestions, setAiSuggestions] = useState<any[]>([]);

  const handleAiAnalysis = async () => {
    setAnalyzing(true);
    try {
        // Flatten sitemap for context to feed to AI
        const getStructure = (n: SitemapNode, d=0): string => {
            let s = `${'-'.repeat(d)} ${n.label} (${n.type})\n`;
            n.children?.forEach(c => s += getStructure(c, d+1));
            return s;
        };
        const sitemapContext = getStructure(data);

        const apiKey = getStoredGeminiApiKey();
        if (!apiKey) {
            setAiSuggestions([{
                title: 'Connect AI analysis',
                gap: 'Set a Gemini API key in the Clinical Assistant settings to generate sitemap content suggestions.',
                keywords: ['AI sitemap analysis', 'content gaps', 'clinical SEO'],
                priority: 'Medium'
            }]);
            return;
        }

        const ai = new GoogleGenAI({ apiKey });
        const prompt = `
            Analyze this sitemap for a Clinical Nutrition website:
            ${sitemapContext}

            Identify 5 critical content gaps or high-potential missing topics relevant to "Holistic Nutrition", "Metabolic Health", or "Disease Reversal".
            Return ONLY a JSON array of objects with keys: title, gap (short reason), keywords (array of 3 strings), priority (High/Medium/Low).
            Do not format with markdown blocks.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3-flash-preview',
            contents: prompt,
            config: { responseMimeType: 'application/json' }
        });

        if (response.text) {
            const cleanText = response.text.replace(/```json\n?|\n?```/g, '').trim();
            const parsed = safeJsonParse<any>(cleanText, null);
            if (parsed) {
              setAiSuggestions(parsed);
              setShowAiSuggestions(true);
            }
        }
    } catch (e) {
        logger.error('SitemapVisuals', 'AI sitemap analysis failed', e);
        // Fallback static suggestions if API fails
        setAiSuggestions([
            { title: "Menopause & Metabolism", gap: "High Search Volume", keywords: ["perimenopause diet", "hormonal weight gain", "estrogen foods"], priority: "High" },
            { title: "Autoimmune Protocol (AIP)", gap: "Missing Niche", keywords: ["leaky gut diet", "hashimotos nutrition", "anti-inflammatory meal plan"], priority: "High" },
            { title: "Kidney Health & Renals", gap: "Clinical Gap", keywords: ["low potassium diet", "ckd nutrition", "creatinine levels"], priority: "Medium" },
        ]);
        setShowAiSuggestions(true);
    } finally {
        setAnalyzing(false);
    }
  };

  const getPendingNodes = (node: SitemapNode): SitemapNode[] => {
    let pending: SitemapNode[] = [];
    if (node.status !== 'optimized') pending.push(node);
    if (node.children) {
      node.children.forEach(child => {
        pending = [...pending, ...getPendingNodes(child)];
      });
    }
    return pending;
  };

  const pendingItems = getPendingNodes(data);

  return (
    <div className="grid lg:grid-cols-2 gap-8 animate-in fade-in slide-in-from-bottom-4">
       {/* Column 1: Existing Pending Items */}
       <div className="bg-white rounded-3xl shadow-xl border border-stone-100 p-8 h-full">
           <h3 className="text-xl font-black text-stone-800 mb-6 flex items-center gap-2">
              <IconFileText className="text-orange-500" /> Admin To-Do List
              <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-bold">{pendingItems.length} Pending</span>
           </h3>
           
           <div className="space-y-3">
              {pendingItems.map((item, idx) => (
                 <div key={idx} className="flex items-center justify-between p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-orange-200 transition-colors group">
                    <div className="flex items-center gap-4">
                       <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-stone-400 border border-stone-200">
                          {idx + 1}
                       </div>
                       <div>
                          <p className="font-bold text-stone-700 text-sm group-hover:text-emerald-800 transition-colors">{item.label}</p>
                          <p className="text-stone-400 text-xs font-mono">/{item.path}</p>
                       </div>
                    </div>
                    <div className="flex items-center gap-4">
                       <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${item.status === 'pending_seo' ? 'bg-yellow-50 text-yellow-700 border-yellow-100' : 'bg-red-50 text-red-700 border-red-100'}`}>
                          {item.status.replace('_', ' ')}
                       </span>
                        <button aria-label="Audit page SEO" className="text-stone-400 hover:text-emerald-600 transition-colors p-2 hover:bg-emerald-50 rounded-lg">
                           <IconSearch size={16} />
                        </button>
                    </div>
                 </div>
              ))}
              {pendingItems.length === 0 && <p className="text-stone-400 italic text-center py-8">All pages are optimized! Great job.</p>}
           </div>
       </div>

       {/* Column 2: AI Suggestions */}
       <div className="bg-emerald-950 rounded-3xl shadow-xl border border-emerald-900 p-8 text-white relative overflow-hidden flex flex-col">
           <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl pointer-events-none"></div>
           
           <div className="relative z-10">
               <h3 className="text-xl font-black text-white mb-2 flex items-center gap-2">
                  <IconBot className="text-lime-400" /> AI Content Intelligence
               </h3>
               <p className="text-emerald-300 text-sm mb-6">Analyze site structure gaps and keyword opportunities.</p>

               {!showAiSuggestions ? (
                   <div className="flex flex-col items-center justify-center py-12 flex-grow">
                        <button 
                            onClick={handleAiAnalysis}
                            disabled={analyzing}
                            aria-label="Scan sitemap for content gaps using AI content intelligence"
                            className="bg-lime-400 text-emerald-950 px-8 py-4 rounded-full font-black uppercase tracking-widest hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)] flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {analyzing ? (
                                <><div className="w-4 h-4 border-2 border-emerald-950 border-t-transparent rounded-full animate-spin"></div> Scanning...</>
                            ) : (
                                <>Scan for Content Gaps <IconSearch size={18} /></>
                            )}
                        </button>
                        <p className="text-[10px] text-emerald-400/60 mt-4 uppercase tracking-widest">Powered by Gemini Logic</p>
                   </div>
               ) : (
                   <div className="space-y-4 animate-in fade-in slide-in-from-right-8">
                       <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest text-emerald-400 mb-2">
                           <span>Suggested Topics</span>
                           <span>Priority</span>
                       </div>
                       {aiSuggestions.map((topic, i) => (
                           <div key={i} className="bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 hover:bg-white/10 transition-colors group">
                               <div className="flex justify-between items-start mb-2">
                                   <div>
                                       <h3 className="font-bold text-white group-hover:text-lime-300 transition-colors">{topic.title}</h3>
                                       <p className="text-[10px] text-emerald-300">{topic.gap}</p>
                                   </div>
                                   <span className={`px-2 py-0.5 rounded text-[9px] font-black uppercase ${topic.priority === 'High' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : topic.priority === 'Medium' ? 'bg-yellow-500/20 text-yellow-300 border border-yellow-500/30' : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'}`}>
                                       {topic.priority}
                                   </span>
                               </div>
                               <div className="flex flex-wrap gap-1">
                                   {topic.keywords.map((k: string, idx: number) => (
                                       <span key={idx} className="text-[9px] bg-black/20 px-2 py-0.5 rounded text-emerald-200/80">{k}</span>
                                   ))}
                               </div>
                               <button className="w-full mt-3 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-[10px] font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2">
                                   <IconPlus size={12} /> Create Draft
                               </button>
                           </div>
                       ))}
                   </div>
               )}
           </div>
       </div>
    </div>
  );
};

// --- Node Detail Modal ---
export const NodeDetailModal = ({ node, onClose, onNavigate }: { node: SitemapNode | null, onClose: () => void, onNavigate?: (path: string) => void }) => {
  if (!node) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-md animate-in fade-in duration-300">
       <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-2xl overflow-hidden relative animate-in zoom-in-95 duration-300 border border-white/50">
          <button onClick={onClose} aria-label="Close details modal" className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors z-10"><IconX size={24}/></button>
          
          <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 p-10 text-white relative overflow-hidden">
             {/* Decor */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-lime-400/10 rounded-full blur-3xl"></div>
             
             <div className="relative z-10">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 inline-block backdrop-blur-md border border-white/10">{node.type}</span>
                <h3 className="text-4xl font-black brand-font mb-2">{node.label}</h3>
                <p className="text-emerald-200 text-sm mt-2 font-mono">/{node.path}</p>
             </div>
          </div>

          <div className="p-8 max-h-[60vh] overflow-y-auto custom-scrollbar bg-stone-50/50">
             <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
                   <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <IconSearch size={14} /> SEO Configuration
                   </h4>
                   <div className="space-y-4 text-sm text-stone-600">
                      <div><strong className="block text-stone-800 text-xs uppercase tracking-wide mb-1">Title Tag</strong> {node.meta?.title || '-'}</div>
                      <div><strong className="block text-stone-800 text-xs uppercase tracking-wide mb-1">Meta Description</strong> {node.meta?.description || '-'}</div>
                      <div><strong className="block text-stone-800 text-xs uppercase tracking-wide mb-2">Target Keywords</strong> 
                         <div className="flex flex-wrap gap-1">
                            {node.meta?.keywords?.map((k, i) => <span key={i} className="bg-emerald-50 text-emerald-700 px-2 py-1 rounded-md text-[10px] font-bold border border-emerald-100">{k}</span>)}
                         </div>
                      </div>
                   </div>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
                   <h4 className="font-bold text-emerald-900 text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <IconFileText size={14} /> Content Strategy
                   </h4>
                   <div className="space-y-4">
                      <div>
                         <strong className="block text-stone-800 text-xs uppercase tracking-wide mb-1">Key Benefits</strong>
                         <ul className="space-y-1">
                            {node.content?.benefits?.map((b, i) => <li key={i} className="text-xs text-stone-600 flex items-start gap-2"><span className="text-emerald-400">•</span> {b}</li>) || <li className="italic text-stone-400 text-xs">No data defined</li>}
                         </ul>
                      </div>
                      <div>
                         <strong className="block text-stone-800 text-xs uppercase tracking-wide mb-2">Feature List</strong>
                         <div className="flex flex-wrap gap-2">
                            {node.content?.features?.map((f, i) => <span key={i} className="text-[10px] font-bold bg-stone-100 text-stone-600 px-2 py-1 rounded-lg border border-stone-200">{f}</span>)}
                         </div>
                      </div>
                   </div>
                </div>
             </div>

             {node.content?.faqs && node.content.faqs.length > 0 && (
                <div className="border-t border-stone-200 pt-8">
                   <h4 className="font-bold text-stone-400 text-xs uppercase tracking-widest mb-6 text-center">Associated FAQs</h4>
                   <div className="space-y-3">
                      {node.content.faqs.map((faq, i) => (
                         <div key={i} className="bg-white p-4 rounded-2xl border border-stone-100 shadow-sm hover:border-emerald-200 transition-colors">
                            <p className="font-bold text-stone-800 text-sm mb-2">{faq.question}</p>
                            <p className="text-stone-500 text-xs leading-relaxed">{faq.answer}</p>
                         </div>
                      ))}
                   </div>
                </div>
             )}
          </div>
                    <div className="p-4 bg-white border-t border-stone-100 flex justify-end gap-3">
              <button onClick={onClose} className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest text-stone-500 hover:bg-stone-100 transition-colors">Close</button>
              {onNavigate && (
                 <button 
                     onClick={() => onNavigate(node.path)} 
                     className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-emerald-200 hover:-translate-y-0.5"
                 >
                     Go to Page
                 </button>
              )}
           </div>
        </div>
     </div>
  );
}

export const SitemapPage = ({ siteStructure }: { siteStructure: SitemapNode }) => {
  const [view, setView] = useState<'list' | 'grid' | 'mindmap'>('list');
  const [selectedNode, setSelectedNode] = useState<SitemapNode | null>(null);

  return (
    <div className="animate-in fade-in duration-700 min-h-screen bg-stone-50/30 pb-24 pt-24">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 brand-font tracking-tighter">Visual Sitemap</h1>
          <p className="text-stone-500 max-w-2xl mx-auto">Explore the complete architecture of NutritionColours</p>
        </div>
        <SitemapStats data={siteStructure} />
        <div className="flex justify-center gap-4">
          {(['list', 'grid', 'mindmap'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} className={`px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${view === v ? 'bg-emerald-600 text-white shadow-lg' : 'bg-white text-stone-500 hover:bg-stone-50 border border-stone-200'}`}>
              {v === 'mindmap' ? 'Mind Map' : v === 'list' ? 'Detailed List' : 'Grid View'}
            </button>
          ))}
        </div>
        <div className="bg-white rounded-[40px] p-8 md:p-12 border border-stone-100 shadow-sm">
          {view === 'list' && <DetailedListView data={siteStructure} onNavigate={(path: string) => window.location.href = '/' + path} />}
          {view === 'grid' && <GridMapView data={siteStructure} onNavigate={(path: string) => window.location.href = '/' + path} />}
          {view === 'mindmap' && <MindMapVisualizer data={siteStructure} onNodeClick={(node: SitemapNode) => setSelectedNode(node)} />}
        </div>
        <AdminAuditList data={siteStructure} />
        {selectedNode && <NodeDetailModal node={selectedNode} onClose={() => setSelectedNode(null)} onNavigate={(path: string) => { setSelectedNode(null); window.location.href = '/' + path; }} />}
      </div>
    </div>
  );
};
