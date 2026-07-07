import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from '@/lib/clinical_databases';
import { ClinicalHerbDetail } from '@/components/ClinicalDetails';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;

export async function generateStaticParams() {
  return HERBS_SPICES_DATA.map(h => ({ id: h.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const herb = HERBS_SPICES_DATA.find(h => h.id === id);
  if (!herb) return { title: 'Not Found' };
  return {
    title: herb.pageTitle || `${herb.name} (Clinical Guide)`,
    description: herb.metaDescription || herb.primaryMechanism,
    keywords: [herb.name, herb.scientificName, ...(herb.seoKeywords || [])],
  };
}

export default async function HerbPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const herb = HERBS_SPICES_DATA.find(h => h.id === id);
  if (!herb) /* notFound removed for Astro */
  return <ClinicalHerbDetail herb={herb} herbsData={HERBS_SPICES_DATA} conditionsData={MEDICAL_CONDITIONS_DATA} />;
}
