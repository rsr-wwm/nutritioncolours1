'use client';
import { LocalDirectory } from '@/components/LocalDirectory';
import { ViewerTrackerProvider } from '@/components/ViewerTracker';

export default function ClinicsPage() {
  return (
    <ViewerTrackerProvider>
      <LocalDirectory navigate={() => {}} currentPath="clinics" />
    </ViewerTrackerProvider>
  );
}
