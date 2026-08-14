import React, { createContext, useContext } from 'react';
import { UserInteraction, ViewerSession, DailyAnalyticsReport } from '@/lib/types';

interface ViewerTrackerContextType {
  trackInteraction: (type: UserInteraction['type'], description: string, pathOverride?: string) => void;
  sessionsHistory: ViewerSession[];
  reportsHistory: DailyAnalyticsReport[];
  compileDailyReport: (forceRecipient?: string) => DailyAnalyticsReport;
  clearTrackingData: () => void;
  sendEmailReport: (report: DailyAnalyticsReport) => Promise<boolean>;
}

const ViewerTrackerContext = createContext<ViewerTrackerContextType>({
  trackInteraction: () => {},
  sessionsHistory: [],
  reportsHistory: [],
  compileDailyReport: () => ({}) as any,
  clearTrackingData: () => {},
  sendEmailReport: async () => false,
});

export const ViewerTrackerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ViewerTrackerContext.Provider
      value={{
        trackInteraction: () => {},
        sessionsHistory: [],
        reportsHistory: [],
        compileDailyReport: () => ({}) as any,
        clearTrackingData: () => {},
        sendEmailReport: async () => false,
      }}
    >
      {children}
    </ViewerTrackerContext.Provider>
  );
};

export const useViewerTracker = () => {
  return useContext(ViewerTrackerContext);
};
