import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { UserInteraction, ViewerSession, DailyAnalyticsReport } from '../types';

interface ViewerTrackerContextType {
  trackInteraction: (type: UserInteraction['type'], description: string, pathOverride?: string) => void;
  sessionsHistory: ViewerSession[];
  reportsHistory: DailyAnalyticsReport[];
  compileDailyReport: (forceRecipient?: string) => DailyAnalyticsReport;
  clearTrackingData: () => void;
  sendEmailReport: (report: DailyAnalyticsReport) => Promise<boolean>;
}

const ViewerTrackerContext = createContext<ViewerTrackerContextType | undefined>(undefined);

const SESSION_TIMEOUT = 30 * 60 * 1000; // 30 minutes of inactivity
const DAILY_INTERVAL = 24 * 60 * 60 * 1000; // 24 hours

const getCurrentPath = () => window.location.pathname.replace(/^\/+/, '') || 'home';

export const ViewerTrackerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentSession, setCurrentSession] = useState<ViewerSession | null>(null);
  const [sessionsHistory, setSessionsHistory] = useState<ViewerSession[]>([]);
  const [reportsHistory, setReportsHistory] = useState<DailyAnalyticsReport[]>([]);
  const currentSessionRef = useRef<ViewerSession | null>(null);

  // Initialize tracking data from localStorage
  useEffect(() => {
    // 1. Load historical sessions
    const savedHistory = localStorage.getItem('nutrition_tracker_history');
    const parsedHistory: ViewerSession[] = savedHistory ? JSON.parse(savedHistory) : [];
    setSessionsHistory(parsedHistory);

    // 2. Load historical reports
    const savedReports = localStorage.getItem('nutrition_tracker_report_history');
    const parsedReports: DailyAnalyticsReport[] = savedReports ? JSON.parse(savedReports) : [];
    setReportsHistory(parsedReports);

    // 3. Setup/Resume active session
    const savedActive = localStorage.getItem('nutrition_tracker_current_session');
    let session: ViewerSession;

    if (savedActive) {
      const parsedActive: ViewerSession = JSON.parse(savedActive);
      const isExpired = Date.now() - parsedActive.lastActive > SESSION_TIMEOUT;

      if (isExpired) {
        // Archive expired session
        const updatedHistory = [...parsedHistory, parsedActive];
        localStorage.setItem('nutrition_tracker_history', JSON.stringify(updatedHistory));
        setSessionsHistory(updatedHistory);
        
        // Start new session
        session = createNewSession();
      } else {
        // Resume session
        session = {
          ...parsedActive,
          lastActive: Date.now()
        };
      }
    } else {
      session = createNewSession();
    }

    setCurrentSession(session);
    currentSessionRef.current = session;
    localStorage.setItem('nutrition_tracker_current_session', JSON.stringify(session));

    // 4. Setup automated check for daily reports
    const lastReportTime = localStorage.getItem('nutrition_tracker_last_report_time');
    const reportTimer = setInterval(() => {
      const lastSent = lastReportTime ? parseInt(lastReportTime) : 0;
      if (Date.now() - lastSent > DAILY_INTERVAL) {
        const report = autoCompileAndSendReport();
        if (report) {
          console.log('Automated Daily Analytical Report Transmitted.', report);
        }
      }
    }, 60000); // Check every minute silently

    // 5. Global Error Listener
    const handleError = (e: ErrorEvent) => {
      trackInteraction('error', `Runtime Error: ${e.message || 'Unknown code error'}`);
    };
    window.addEventListener('error', handleError);

    // 6. Global Silent Click Interception
    const handleGlobalClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, [role="button"], details summary');
      if (clickable) {
        const id = clickable.id ? `#${clickable.id}` : '';
        const name = clickable.textContent?.trim() || clickable.getAttribute('aria-label') || 'interactive element';
        const truncatedName = name.replace(/\s+/g, ' ').substring(0, 40);
        trackInteraction('click', `Clicked element ${id} ("${truncatedName}")`);
      }
    };
    window.addEventListener('click', handleGlobalClick);

    return () => {
      clearInterval(reportTimer);
      window.removeEventListener('error', handleError);
      window.removeEventListener('click', handleGlobalClick);
    };
  }, []);

  const createNewSession = (): ViewerSession => {
    const randomId = Math.random().toString(36).substring(2, 15);
    return {
      sessionId: `sess_${Date.now()}_${randomId}`,
      startTime: Date.now(),
      lastActive: Date.now(),
      deviceProfile: {
        userAgent: navigator.userAgent,
        screenWidth: window.innerWidth,
        screenHeight: window.innerHeight,
        platform: navigator.platform || 'WebBrowser'
      },
      interactions: [
        {
          timestamp: Date.now(),
          type: 'pageview',
          path: getCurrentPath(),
          description: 'Session initiated'
        }
      ]
    };
  };

  const trackInteraction = (type: UserInteraction['type'], description: string, pathOverride?: string) => {
    const active = currentSessionRef.current;
    if (!active) return;

    const path = pathOverride || getCurrentPath();
    const newInteraction: UserInteraction = {
      timestamp: Date.now(),
      type,
      path,
      description
    };

    const updatedSession: ViewerSession = {
      ...active,
      lastActive: Date.now(),
      interactions: [...active.interactions, newInteraction]
    };

    setCurrentSession(updatedSession);
    currentSessionRef.current = updatedSession;
    localStorage.setItem('nutrition_tracker_current_session', JSON.stringify(updatedSession));
  };

  const clearTrackingData = () => {
    localStorage.removeItem('nutrition_tracker_history');
    localStorage.removeItem('nutrition_tracker_report_history');
    localStorage.removeItem('nutrition_tracker_last_report_time');
    setSessionsHistory([]);
    setReportsHistory([]);
    const freshSession = createNewSession();
    setCurrentSession(freshSession);
    currentSessionRef.current = freshSession;
    localStorage.setItem('nutrition_tracker_current_session', JSON.stringify(freshSession));
  };

  const compileDailyReport = (forceRecipient?: string): DailyAnalyticsReport => {
    const savedActive = localStorage.getItem('nutrition_tracker_current_session');
    const savedHistory = localStorage.getItem('nutrition_tracker_history');
    
    const active: ViewerSession | null = savedActive ? JSON.parse(savedActive) : null;
    const history: ViewerSession[] = savedHistory ? JSON.parse(savedHistory) : [];
    
    // Combine active session and historical sessions for compiling
    const allSessions = active ? [...history, active] : history;

    const pageViews: Record<string, number> = {};
    const clickCounts: Record<string, number> = {};
    const searches: Record<string, number> = {};
    const calculatorUsage: Record<string, number> = {};
    const errorLogs: { message: string; timestamp: number }[] = [];

    allSessions.forEach(session => {
      session.interactions.forEach(evt => {
        if (evt.type === 'pageview') {
          pageViews[evt.path] = (pageViews[evt.path] || 0) + 1;
        } else if (evt.type === 'click') {
          clickCounts[evt.description] = (clickCounts[evt.description] || 0) + 1;
        } else if (evt.type === 'search') {
          searches[evt.description] = (searches[evt.description] || 0) + 1;
        } else if (evt.type === 'calculator') {
          calculatorUsage[evt.description] = (calculatorUsage[evt.description] || 0) + 1;
        } else if (evt.type === 'error') {
          errorLogs.push({ message: evt.description, timestamp: evt.timestamp });
        }
      });
    });

    const searchKeywords = Object.entries(searches)
      .map(([k, count]) => ({ keyword: k, count }))
      .sort((a, b) => b.count - a.count)
      .slice(0, 10);

    // Compute mock system health score based on error count
    const systemHealthScore = Math.max(50, 100 - (errorLogs.length * 5));

    // Generate responsive HTML Email content snippet
    const recipient = forceRecipient || 'admin@nutritioncolours.com';
    const htmlReportSnippet = generateHtmlEmailReport(allSessions.length, pageViews, searchKeywords, calculatorUsage, errorLogs, systemHealthScore, recipient);

    return {
      timestamp: Date.now(),
      totalSessions: allSessions.length,
      pageViews,
      clickCounts,
      searchKeywords,
      calculatorUsage,
      errorLogs,
      systemHealthScore,
      emailStatus: 'pending',
      recipient,
      htmlReportSnippet
    };
  };

  const sendEmailReport = async (report: DailyAnalyticsReport): Promise<boolean> => {
    // Attempt standard delivery. We simulate the network dispatch.
    return new Promise((resolve) => {
      setTimeout(() => {
        report.emailStatus = 'sent';
        
        // Save to reports history in state & storage
        const currentReports = localStorage.getItem('nutrition_tracker_report_history');
        const parsedReports: DailyAnalyticsReport[] = currentReports ? JSON.parse(currentReports) : [];
        const updated = [report, ...parsedReports].slice(0, 30); // keep last 30 daily reports
        
        localStorage.setItem('nutrition_tracker_report_history', JSON.stringify(updated));
        localStorage.setItem('nutrition_tracker_last_report_time', Date.now().toString());
        setReportsHistory(updated);

        // Dispatches standard CustomEvent so the browser/UI displays a floating notification
        const trackerEvent = new CustomEvent('nutrition_report_sent', {
          detail: { report }
        });
        window.dispatchEvent(trackerEvent);
        
        resolve(true);
      }, 1200);
    });
  };

  const autoCompileAndSendReport = (): DailyAnalyticsReport | null => {
    try {
      const report = compileDailyReport();
      sendEmailReport(report);
      return report;
    } catch (err) {
      console.error('Failed to autocompile and send report:', err);
      return null;
    }
  };

  return (
    <ViewerTrackerContext.Provider value={{
      trackInteraction,
      sessionsHistory,
      reportsHistory,
      compileDailyReport,
      clearTrackingData,
      sendEmailReport
    }}>
      {children}
    </ViewerTrackerContext.Provider>
  );
};

export const useViewerTracker = () => {
  const context = useContext(ViewerTrackerContext);
  if (context === undefined) {
    throw new Error('useViewerTracker must be used within a ViewerTrackerProvider');
  }
  return context;
};

// Beautiful responsive clinical HTML Email Template
const generateHtmlEmailReport = (
  totalSessions: number,
  pageViews: Record<string, number>,
  searchKeywords: { keyword: string; count: number }[],
  calculatorUsage: Record<string, number>,
  errorLogs: { message: string; timestamp: number }[],
  systemHealthScore: number,
  recipient: string
): string => {
  const topPagesHtml = Object.entries(pageViews)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([page, count]) => `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px; font-family: monospace; font-size: 13px; color: #334155;">/${page}</td>
        <td style="padding: 12px; text-align: right; font-weight: bold; color: #059669;">${count}</td>
      </tr>
    `).join('') || `<tr><td colspan="2" style="padding: 12px; text-align: center; color: #94a3b8; font-style: italic;">No Page Views Tracked</td></tr>`;

  const topSearchesHtml = searchKeywords
    .map(s => `
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 12px; font-size: 13px; color: #334155;">${s.keyword}</td>
        <td style="padding: 12px; text-align: right; font-weight: bold; color: #0f172a;">${s.count}</td>
      </tr>
    `).join('') || `<tr><td colspan="2" style="padding: 12px; text-align: center; color: #94a3b8; font-style: italic;">No Searches Logged</td></tr>`;

  const toolsHtml = Object.entries(calculatorUsage)
    .sort((a, b) => b[1] - a[1])
    .map(([tool, count]) => `
      <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; margin-bottom: 8px;">
        <span style="font-size: 12px; font-weight: bold; color: #475569; text-transform: uppercase;">${tool}</span>
        <span style="float: right; font-weight: 900; color: #0d9488;">${count} times</span>
      </div>
    `).join('') || `<div style="text-align: center; color: #94a3b8; font-style: italic; padding: 12px;">No tools triggered</div>`;

  const diagnosticAlertsHtml = errorLogs.map(err => `
    <div style="background-color: #fef2f2; border-left: 4px solid #ef4444; border-radius: 4px; padding: 8px 12px; margin-bottom: 6px;">
      <span style="font-size: 11px; font-family: monospace; color: #991b1b; display: block;">[${new Date(err.timestamp).toLocaleTimeString()}] ${err.message}</span>
    </div>
  `).join('') || `<div style="color: #059669; font-size: 13px; font-weight: bold; padding: 6px 0;">✓ Zero diagnostic errors logged. System fully stable.</div>`;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Daily Portal Analytics Report</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f5f6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f4f5f6; padding: 24px 12px;">
    <tr>
      <td align="center">
        <!-- Main Container -->
        <table width="100%" maxWidth="600" style="max-width: 600px; background-color: #ffffff; border-radius: 24px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <!-- Header Banner -->
          <tr>
            <td style="background: linear-gradient(135deg, #064e3b 0%, #022c22 100%); padding: 32px 24px; text-align: left;">
              <span style="background-color: rgba(132,204,22,0.15); border: 1px solid rgba(132,204,22,0.3); border-radius: 99px; padding: 4px 12px; font-size: 10px; font-weight: bold; color: #a3e635; text-transform: uppercase; letter-spacing: 1px;">Clinical Analytics</span>
              <h1 style="color: #ffffff; margin: 12px 0 6px 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">NutritionColours Digest</h1>
              <p style="color: #a7f3d0; margin: 0; font-size: 12px;">Daily Analytics Summary &amp; Health Report &bull; Sent to ${recipient}</p>
            </td>
          </tr>

          <!-- Summary Badges -->
          <tr>
            <td style="padding: 24px 24px 0 24px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td width="50%" style="padding-right: 8px;">
                    <div style="background-color: #ecfdf5; border: 1px solid #d1fae5; border-radius: 16px; padding: 16px; text-align: center;">
                      <span style="font-size: 28px; font-weight: 900; color: #065f46; display: block;">${totalSessions}</span>
                      <span style="font-size: 11px; font-weight: bold; color: #047857; text-transform: uppercase; letter-spacing: 0.5px;">Active Sessions</span>
                    </div>
                  </td>
                  <td width="50%" style="padding-left: 8px;">
                    <div style="background-color: #f7fee7; border: 1px solid #ecfccb; border-radius: 16px; padding: 16px; text-align: center;">
                      <span style="font-size: 28px; font-weight: 900; color: #3f6212; display: block;">${systemHealthScore}%</span>
                      <span style="font-size: 11px; font-weight: bold; color: #4d7c0f; text-transform: uppercase; letter-spacing: 0.5px;">Vitals Score</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Primary Page views -->
          <tr>
            <td style="padding: 24px 24px 0 24px;">
              <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; border-left: 4px solid #059669; padding-left: 8px;">Top Visited Paths</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 8px 12px; text-align: left; font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase;">Path</th>
                    <th style="padding: 8px 12px; text-align: right; font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase;">Visits</th>
                  </tr>
                </thead>
                <tbody>
                  ${topPagesHtml}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Top Search Terms -->
          <tr>
            <td style="padding: 24px 24px 0 24px;">
              <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; border-left: 4px solid #0d9488; padding-left: 8px;">Top Diagnostic Searches</h2>
              <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                <thead>
                  <tr style="background-color: #f8fafc; border-bottom: 2px solid #e2e8f0;">
                    <th style="padding: 8px 12px; text-align: left; font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase;">Query</th>
                    <th style="padding: 8px 12px; text-align: right; font-size: 10px; font-weight: bold; color: #64748b; text-transform: uppercase;">Count</th>
                  </tr>
                </thead>
                <tbody>
                  ${topSearchesHtml}
                </tbody>
              </table>
            </td>
          </tr>

          <!-- Tool Triggers & Calculators -->
          <tr>
            <td style="padding: 24px 24px 0 24px;">
              <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; border-left: 4px solid #4f46e5; padding-left: 8px;">Active Tools &amp; Calculators</h2>
              <div style="margin-top: 12px;">
                ${toolsHtml}
              </div>
            </td>
          </tr>

          <!-- Diagnostic Errors logs -->
          <tr>
            <td style="padding: 24px 24px 24px 24px;">
              <h2 style="font-size: 14px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: 0.5px; margin: 0 0 12px 0; border-left: 4px solid #ef4444; padding-left: 8px;">System Health Alerts</h2>
              <div style="margin-top: 12px;">
                ${diagnosticAlertsHtml}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f8fafc; border-top: 1px solid #e2e8f0; padding: 24px; text-align: center; color: #94a3b8; font-size: 11px; line-height: 1.5;">
              <p style="margin: 0 0 6px 0;">This email report is generated automatically by the NutritionColours Viewer Tracker module.</p>
              <p style="margin: 0;">&copy; 2026 NutritionColours. All rights reserved. Dr. Shilpa Thakur Specialty Clinic.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `;
};
