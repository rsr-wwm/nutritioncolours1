import { DRUG_INTERACTIONS_DATA } from '@/lib/clinical_databases';
import { ClinicalInteractionDetail } from '@/components/ClinicalDetails';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;

export async function generateStaticParams() {
  return DRUG_INTERACTIONS_DATA.map(i => ({ id: i.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const interaction = DRUG_INTERACTIONS_DATA.find(i => i.id === id);
  if (!interaction) return { title: 'Not Found' };
  return { title: `${interaction.drugName} - Drug-Nutrient Interaction`, description: interaction.monitoringAdvice };
}

export default async function InteractionPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const interaction = DRUG_INTERACTIONS_DATA.find(i => i.id === id);
  if (!interaction) /* notFound removed for Astro */
  return <ClinicalInteractionDetail interaction={interaction} />;
}
