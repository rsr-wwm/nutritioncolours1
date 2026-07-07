'use client';
import { HealthTopicPage } from '@/components/HealthTopicPage';
import { MedicalDisclaimerBanner } from '@/components/SharedSections';

export function TopicClientPage({ topicId }: { topicId: string }) {
  return (
    <>
      <HealthTopicPage topicId={topicId} navigate={() => {}} />
      <div className="max-w-7xl mx-auto px-6 pb-20"><MedicalDisclaimerBanner /></div>
    </>
  );
}
