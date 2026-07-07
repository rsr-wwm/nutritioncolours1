'use client';
import { LocalDirectory } from '@/components/LocalDirectory';
import { ViewerTrackerProvider } from '@/components/ViewerTracker';

export function ClinicClientPage({ clinicId }: { clinicId: string }) {
  return (
    <ViewerTrackerProvider>
      <LocalDirectory navigate={() => {}} currentPath={`clinic/${clinicId}`} />
    </ViewerTrackerProvider>
  );
}
