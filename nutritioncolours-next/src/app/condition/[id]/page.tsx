import { MEDICAL_CONDITIONS_DATA, HERBS_SPICES_DATA } from '@/lib/clinical_databases';
import { ClinicalConditionDetail } from '@/components/ClinicalDetails';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;

export async function generateStaticParams() {
  return MEDICAL_CONDITIONS_DATA.map(c => ({ id: c.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cond = MEDICAL_CONDITIONS_DATA.find(c => c.id === id);
  if (!cond) return { title: 'Not Found' };
  return {
    title: `${cond.name} - Reversal Protocol`,
    description: cond.rootCause,
    keywords: [cond.name, ...(cond.seoKeywords || [])],
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const cond = MEDICAL_CONDITIONS_DATA.find(c => c.id === id);
  if (!cond) return <div>Not Found</div>;
  return <ClinicalConditionDetail cond={cond} herbsData={HERBS_SPICES_DATA} />;
}
