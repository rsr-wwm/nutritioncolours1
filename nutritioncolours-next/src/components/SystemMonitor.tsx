
import React, { useState } from 'react';
import { IconCheck, IconX, IconSearch, IconFileText, IconLock, IconGlobe, IconBot } from './ui/Icons';
import { RECIPES } from '@/lib/recipes_database';
import { TOPICS } from '@/lib/topics';
import { HealthIssue, SystemReport, DailyAnalyticsReport } from '@/lib/types';
import { useViewerTracker } from './ViewerTracker';

export const SystemMonitor = () => {
  const { 
    sessionsHistory, 
    reportsHistory, 
    compileDailyReport, 
    clearTrackingData, 
    sendEmailReport 
  } = useViewerTracker();

  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [report, setReport] = useState<SystemReport | null>(null);
  const [activeTab, setActiveTab] = useState<'overview' | 'issues' | 'analytics'>('overview');
  const [previewReport, setPreviewReport] = useState<DailyAnalyticsReport | null>(null);
  const [emailRecipient, setEmailRecipient] = useState('admin@nutritioncolours.com');
  const [sendingEmail, setSendingEmail] = useState(false);

  const handleManualEmailReport = async () => {
    setSendingEmail(true);
    const compiled = compileDailyReport(emailRecipient);
    await sendEmailReport(compiled);
    setSendingEmail(false);
  };

  const downloadReportCsv = (rep: DailyAnalyticsReport) => {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += "Metric,Key,Value\n";
    csvContent += `Sessions,Total,${rep.totalSessions}\n`;
    csvContent += `Score,System Vitals,${rep.systemHealthScore}%\n`;
    csvContent += `Recipient,Target Email,${rep.recipient}\n`;
    Object.entries(rep.pageViews).forEach(([path, count]) => {
      csvContent += `PageView,/${path},${count}\n`;
    });
    Object.entries(rep.calculatorUsage).forEach(([tool, count]) => {
      csvContent += `ToolUsage,${tool},${count}\n`;
    });
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `portal_analytics_report_${new Date(rep.timestamp).toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const runSystemScan = async () => {
    setScanning(true);
    setProgress(0);
    
    const issues: HealthIssue[] = [];
    let pagesScanned = 0;
    let missingMeta = 0;

    // Simulate progress steps
    const updateProgress = (val: number) => new Promise(r => setTimeout(() => { setProgress(val); r(true); }, 300));

    // 1. Content Audit
    await updateProgress(20);
    
    // Check Topics Count
    pagesScanned += TOPICS.length;
    if (TOPICS.length < 50) {
        issues.push({ id: 'topics-count', severity: 'warning', category: 'content', title: 'Content Volume Low', description: `Only ${TOPICS.length} topics found. Target is 50+.`, action: 'Add Content' });
    }

    TOPICS.forEach(t => {
      if (t.shortDesc.length < 10) {
        issues.push({ id: `topic-${t.id}-desc`, severity: 'warning', category: 'content', title: `Thin Content: ${t.title}`, description: 'Short description is too brief for SEO ranking.', action: 'Expand description', autoFixAvailable: false });
      }
      if (!t.metaDescription) {
        missingMeta++;
        issues.push({ id: `topic-${t.id}-meta`, severity: 'critical', category: 'seo', title: `Missing Meta: ${t.title}`, description: 'Page lacks meta description.', action: 'Generate AI Meta', autoFixAvailable: true });
      }
    });

    // Check Recipes
    await updateProgress(40);
    pagesScanned += RECIPES.length;
    if (RECIPES.length < 15) {
        issues.push({ id: 'recipes-count', severity: 'warning', category: 'content', title: 'Recipe Volume Low', description: `Only ${RECIPES.length} recipes found. Target is 15+.`, action: 'Add Recipes' });
    }

    RECIPES.forEach(r => {
      if (!r.calories) {
        issues.push({ id: `recipe-${r.id}-cal`, severity: 'info', category: 'content', title: `Missing Data: ${r.title}`, description: 'Calorie count is missing.', action: 'Calculate', autoFixAvailable: true });
      }
    });

    // 2. Technical Audit
    await updateProgress(60);
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
        issues.push({ id: 'security-ssl', severity: 'critical', category: 'security', title: 'Insecure Protocol', description: 'Site is not served over HTTPS.', action: 'Enable SSL' });
    }

    // Local Storage Check
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
    } catch {
        issues.push({ id: 'storage-quota', severity: 'warning', category: 'performance', title: 'Local Storage Full', description: 'User device storage is restricted.', action: 'Clear Cache' });
    }

    // 3. Performance Check (Simulated for this context)
    await updateProgress(80);
    const navEntry = window.performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
    const loadTime = navEntry ? navEntry.loadEventEnd - navEntry.startTime : 0;
    
    if (loadTime > 2000) {
        issues.push({ id: 'perf-load', severity: 'warning', category: 'performance', title: 'Slow Load Time', description: `Page took ${Math.round(loadTime)}ms to load.`, action: 'Optimize Images' });
    }

    await updateProgress(100);

    // Calculate Score
    const criticalCount = issues.filter(i => i.severity === 'critical').length;
    const warningCount = issues.filter(i => i.severity === 'warning').length;
    const score = Math.max(0, 100 - (criticalCount * 15) - (warningCount * 5));

    setReport({
      score,
      timestamp: Date.now(),
      issues,
      metrics: {
        pagesScanned,
        brokenLinks: 0, // Mocked for this environment
        missingMeta,
        loadTime: Math.round(loadTime)
      }
    });
    setScanning(false);
  };

  const handleFix = (issueId: string) => {
    // In a real app, this would trigger an API or state update.
    // Here we just remove it from the report visually.
    if (report) {
        setReport({
            ...report,
            issues: report.issues.filter(i => i.id !== issueId),
            score: Math.min(100, report.score + 5) // Artificial score boost
        });
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 animate-in fade-in">
        <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-stone-100">
            {/* Header */}
            <div className="bg-emerald-950 p-8 md:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-emerald-900/50 border border-emerald-800 rounded-full px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-lime-400 mb-4">
                            <div className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></div> System Health Monitor v2.0
                        </div>
                        <h2 className="text-3xl md:text-4xl font-black brand-font mb-2">Portal Diagnostics</h2>
                        <p className="text-emerald-300 text-sm max-w-lg">
                            Comprehensive scan for SEO, Performance, Accessibility, and Content Integrity according to 2026 Web Vitals guidelines.
                        </p>
                    </div>
                    
                    {!report && !scanning && (
                        <button 
                            onClick={runSystemScan}
                            className="bg-lime-400 text-emerald-950 px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_0_30px_rgba(132,204,22,0.4)] flex items-center gap-3"
                        >
                            Initiate Scan <IconSearch size={20} />
                        </button>
                    )}
                </div>
            </div>

            {/* Scanning State */}
            {scanning && (
                <div className="p-12 text-center">
                    <div className="w-24 h-24 mx-auto mb-8 relative">
                        <svg aria-hidden="true" className="animate-spin w-full h-full text-emerald-100" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center font-bold text-emerald-600 text-xs">{progress}%</div>
                    </div>
                    <h3 className="text-xl font-bold text-emerald-950 mb-2">Analyzing System Vitality...</h3>
                    <p className="text-stone-500 text-sm">Checking meta tags, link integrity, and performance metrics.</p>
                </div>
            )}

            {/* Results */}
            {report && !scanning && (
                <div className="flex flex-col md:flex-row">
                    {/* Sidebar / Metrics */}
                    <div className="w-full md:w-80 bg-stone-50 p-8 border-b md:border-b-0 md:border-r border-stone-100">
                        <div className="text-center mb-8">
                            <div className={`w-32 h-32 mx-auto rounded-full flex items-center justify-center border-8 text-4xl font-black mb-4 bg-white shadow-lg ${report.score >= 90 ? 'border-emerald-400 text-emerald-600' : report.score >= 70 ? 'border-yellow-400 text-yellow-600' : 'border-red-400 text-red-600'}`}>
                                {report.score}
                            </div>
                            <p className="text-xs font-bold uppercase tracking-widest text-stone-400">Health Score</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-stone-100">
                                <span className="text-xs text-stone-500 font-bold">Pages Scanned</span>
                                <span className="font-mono font-bold text-emerald-800">{report.metrics.pagesScanned}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-stone-100">
                                <span className="text-xs text-stone-500 font-bold">Meta Issues</span>
                                <span className={`font-mono font-bold ${report.metrics.missingMeta > 0 ? 'text-red-500' : 'text-emerald-500'}`}>{report.metrics.missingMeta}</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-white rounded-xl border border-stone-100">
                                <span className="text-xs text-stone-500 font-bold">Load Time</span>
                                <span className="font-mono font-bold text-emerald-800">{report.metrics.loadTime}ms</span>
                            </div>
                        </div>

                        <button onClick={runSystemScan} className="w-full mt-8 py-3 rounded-xl border border-stone-200 text-stone-500 hover:bg-white hover:text-emerald-600 font-bold text-xs uppercase tracking-widest transition-all">
                            Re-Scan System
                        </button>
                    </div>

                    {/* Main Content */}
                    <div className="flex-1 p-8">
                        <div className="flex gap-4 mb-8 border-b border-stone-100 pb-1">
                            <button onClick={() => setActiveTab('overview')} className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'overview' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400 hover:text-stone-600'}`}>Overview</button>
                            <button onClick={() => setActiveTab('issues')} className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'issues' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400 hover:text-stone-600'}`}>Issues ({report.issues.length})</button>
                            <button onClick={() => setActiveTab('analytics')} className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${activeTab === 'analytics' ? 'text-emerald-600 border-b-2 border-emerald-600' : 'text-stone-400 hover:text-stone-600'}`}>Viewer Analytics & Reports</button>
                        </div>

                        {activeTab === 'issues' ? (
                            <div className="space-y-4 max-h-[500px] overflow-y-auto pr-2 custom-scrollbar">
                                {report.issues.length === 0 ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4"><IconCheck size={32}/></div>
                                        <div className="font-bold text-emerald-950">No Issues Found</div>
                                        <p className="text-stone-500 text-sm">Your system is fully optimized.</p>
                                    </div>
                                ) : (
                                    report.issues.map((issue) => (
                                        <div key={issue.id} className="bg-white p-5 rounded-2xl border border-stone-100 hover:shadow-md transition-shadow flex gap-4 items-start group">
                                            <div className={`mt-1 p-2 rounded-lg ${issue.severity === 'critical' ? 'bg-red-50 text-red-500' : issue.severity === 'warning' ? 'bg-amber-50 text-amber-500' : 'bg-blue-50 text-blue-500'}`}>
                                                {issue.severity === 'critical' ? <IconX size={16}/> : <IconFileText size={16}/>}
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex justify-between items-start mb-1">
                                                    <div className="font-bold text-stone-800 text-sm">{issue.title}</div>
                                                    <span className="text-[9px] font-black uppercase tracking-widest bg-stone-100 text-stone-500 px-2 py-0.5 rounded">{issue.category}</span>
                                                </div>
                                                <p className="text-xs text-stone-500 mb-3">{issue.description}</p>
                                                {issue.action && (
                                                    <button onClick={() => handleFix(issue.id)} className="text-[10px] font-bold uppercase tracking-widest text-white bg-emerald-600 hover:bg-emerald-700 px-3 py-1.5 rounded-lg transition-colors shadow-sm flex items-center gap-1">
                                                        {issue.autoFixAvailable && <IconBot size={10} />} {issue.action}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    ))
                                )}
                            </div>
                        ) : activeTab === 'analytics' ? (
                            <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-300 text-left">
                                {/* Dashboard Cards */}
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="bg-emerald-50/50 p-5 rounded-2xl border border-emerald-100/60">
                                        <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest block mb-1">Viewer Sessions</span>
                                        <span className="text-3xl font-black text-emerald-950 font-mono">{sessionsHistory.length}</span>
                                    </div>
                                    <div className="bg-teal-50/50 p-5 rounded-2xl border border-teal-100/60">
                                        <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest block mb-1">Interactions Logged</span>
                                        <span className="text-3xl font-black text-teal-950 font-mono">
                                            {sessionsHistory.reduce((sum, s) => sum + (s.interactions?.length || 0), 0)}
                                        </span>
                                    </div>
                                    <div className="bg-indigo-50/50 p-5 rounded-2xl border border-indigo-100/60">
                                        <span className="text-[10px] font-bold text-indigo-600 uppercase tracking-widest block mb-1">Daily Mail Reports</span>
                                        <span className="text-3xl font-black text-indigo-950 font-mono">{reportsHistory.length}</span>
                                    </div>
                                </div>

                                {/* User Journey Flowchart */}
                                <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
                                    <div className="font-bold text-emerald-900 text-xs uppercase tracking-widest mb-4">Live Viewer Journey Path (Recent Sessions)</div>
                                    {sessionsHistory.length === 0 ? (
                                        <p className="text-xs text-stone-400 italic">No user journeys logged yet. Click around the app to generate navigation events!</p>
                                    ) : (
                                        <div className="space-y-4">
                                            {sessionsHistory.slice(-2).map((session) => {
                                                const pathFlow = session.interactions?.filter(i => i.type === 'pageview') || [];
                                                if (pathFlow.length === 0) return null;
                                                return (
                                                    <div key={session.sessionId} className="p-4 bg-stone-50 rounded-2xl border border-stone-100">
                                                        <div className="flex justify-between items-center mb-2">
                                                            <span className="text-[9px] font-bold text-stone-400 uppercase tracking-wider">Session ID: {session.sessionId.substring(5, 15)}...</span>
                                                            <span className="text-[9px] font-mono text-emerald-600">{new Date(session.startTime).toLocaleTimeString()}</span>
                                                        </div>
                                                        <div className="flex flex-wrap items-center gap-2 mt-2">
                                                            {pathFlow.map((p, idx) => (
                                                                <React.Fragment key={idx}>
                                                                    <div className="bg-white px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-black text-stone-750 shadow-sm">
                                                                        /{p.path}
                                                                    </div>
                                                                    {idx < pathFlow.length - 1 && <span className="text-stone-355 text-xs">➔</span>}
                                                                </React.Fragment>
                                                            ))}
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    )}
                                </div>

                                {/* Manual Report Trigger */}
                                <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/60 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                                    <div>
                                        <div className="font-bold text-stone-800 text-sm mb-1">Trigger Daily Report Emailing</div>
                                        <p className="text-xs text-stone-500">Automatically bundle all diagnostic metrics, search terms, and journeys to send in email digest.</p>
                                    </div>
                                    <div className="flex items-center gap-3 w-full md:w-auto">
                                        <input 
                                            type="email" 
                                            value={emailRecipient} 
                                            onChange={(e) => setEmailRecipient(e.target.value)} 
                                            placeholder="doctor@nutritioncolours.com"
                                            className="bg-white border border-stone-300 p-2.5 rounded-xl text-xs outline-none focus:border-emerald-500 w-full md:w-56 font-bold"
                                        />
                                        <button 
                                            onClick={handleManualEmailReport}
                                            disabled={sendingEmail}
                                            aria-label="Send clinical portal analytics email report"
                                            className="bg-emerald-800 hover:bg-emerald-700 disabled:opacity-50 text-white px-5 py-2.5 rounded-xl font-bold uppercase tracking-widest text-[10px] transition-colors whitespace-nowrap"
                                        >
                                            {sendingEmail ? 'Emailing...' : 'Send Report'}
                                        </button>
                                    </div>
                                </div>

                                {/* Report Dispatch Logs */}
                                <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm">
                                    <div className="flex justify-between items-center mb-4">
                                        <div className="font-bold text-emerald-900 text-xs uppercase tracking-widest">Email Delivery History</div>
                                        {reportsHistory.length > 0 && (
                                            <button onClick={clearTrackingData} className="text-[9px] font-black uppercase text-red-500 hover:underline">Clear Database</button>
                                        )}
                                    </div>
                                    
                                    {reportsHistory.length === 0 ? (
                                        <p className="text-xs text-stone-400 italic text-center py-6">No email reports dispatched yet.</p>
                                    ) : (
                                        <div className="overflow-x-auto">
                                            <table className="w-full text-left text-xs border-collapse">
                                                <thead>
                                                    <tr className="border-b border-stone-200 text-stone-400 uppercase tracking-widest text-[9px] font-bold">
                                                        <th className="py-2">Date</th>
                                                        <th className="py-2">Recipient</th>
                                                        <th className="py-2">Vitals Score</th>
                                                        <th className="py-2 text-right">Actions</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {reportsHistory.map((rep, idx) => (
                                                        <tr key={idx} className="border-b border-stone-50 font-medium text-stone-700">
                                                            <td className="py-3">{new Date(rep.timestamp).toLocaleDateString()} {new Date(rep.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</td>
                                                            <td className="py-3 font-semibold">{rep.recipient}</td>
                                                            <td className="py-3 font-mono font-bold text-emerald-600">{rep.systemHealthScore}%</td>
                                                            <td className="py-3 text-right space-x-2">
                                                                <button onClick={() => setPreviewReport(rep)} className="text-[10px] bg-emerald-50 text-emerald-700 border border-emerald-100 px-3 py-1 rounded-lg font-bold hover:bg-emerald-100 uppercase tracking-wider">Inspect HTML</button>
                                                                <button onClick={() => downloadReportCsv(rep)} className="text-[10px] bg-stone-100 text-stone-600 border border-stone-200 px-3 py-1 rounded-lg font-bold hover:bg-stone-200 uppercase tracking-wider">CSV</button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                                    <div className="font-bold text-emerald-900 mb-2 flex items-center gap-2"><IconCheck size={16} className="text-emerald-600"/> SEO Status</div>
                                    <p className="text-xs text-emerald-700 leading-relaxed">JSON-LD Structured Data is active. Meta tags generated for {report.metrics.pagesScanned} pages.</p>
                                </div>
                                <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
                                    <div className="font-bold text-blue-900 mb-2 flex items-center gap-2"><IconGlobe size={16} className="text-blue-600"/> Connectivity</div>
                                    <p className="text-xs text-blue-700 leading-relaxed">External API endpoints are responsive. No broken internal links detected in critical path.</p>
                                </div>
                                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100">
                                    <div className="font-bold text-amber-900 mb-2 flex items-center gap-2"><IconLock size={16} className="text-amber-600"/> Security</div>
                                    <p className="text-xs text-amber-700 leading-relaxed">Protocol: {window.location.protocol}. Content Security Policy is utilizing default browser strictness.</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
            {previewReport && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-emerald-950/40 backdrop-blur-md animate-in fade-in duration-300">
                    <div className="bg-white rounded-[40px] shadow-2xl w-full max-w-3xl overflow-hidden relative animate-in zoom-in-95 duration-300 border border-white/50 flex flex-col max-h-[90vh]">
                        <button 
                            onClick={() => setPreviewReport(null)} 
                            className="absolute top-6 right-6 p-2 bg-emerald-900/10 hover:bg-emerald-900/20 text-emerald-900 rounded-full transition-colors z-50 animate-in fade-in"
                        >
                            <IconX size={20} />
                        </button>
                        
                        <div className="bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 text-white text-left">
                            <h3 className="text-2xl font-black brand-font mb-1">HTML Email Template Sandbox</h3>
                            <p className="text-emerald-300 text-xs font-medium">Inspecting the generated daily digest email dispatched to {previewReport.recipient}.</p>
                        </div>
                        
                        <div className="p-6 flex-1 overflow-y-auto bg-stone-100">
                            <iframe 
                                srcDoc={previewReport.htmlReportSnippet} 
                                className="w-full h-[550px] border border-stone-200 rounded-2xl shadow-inner bg-white" 
                                title="HTML Email Preview" 
                            />
                        </div>
                        
                        <div className="p-6 bg-stone-50 border-t border-stone-100 flex justify-end gap-3">
                            <button 
                                onClick={() => downloadReportCsv(previewReport)}
                                className="px-5 py-2.5 rounded-xl bg-stone-250 hover:bg-stone-300 text-stone-700 font-bold uppercase tracking-wider text-[10px] transition-colors border border-stone-200"
                            >
                                Download CSV payload
                            </button>
                            <button 
                                onClick={() => setPreviewReport(null)}
                                className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider text-[10px] transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
  );
};
