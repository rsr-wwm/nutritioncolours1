import { GENOMIC_VARIANTS_DATA } from '@/lib/clinical_databases';
import { ClinicalGenomicsDetail } from '@/components/ClinicalDetails';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;

export async function generateStaticParams() {
  return GENOMIC_VARIANTS_DATA.map(g => ({ id: g.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const variant = GENOMIC_VARIANTS_DATA.find(g => g.id === id);
  if (!variant) return { title: 'Not Found' };
  return { title: `${variant.rsid} (${variant.genotype}) - Nutrigenomics`, description: variant.clinicalImpact };
}

export default async function GenomicsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const variant = GENOMIC_VARIANTS_DATA.find(g => g.id === id);
  if (!variant) /* notFound removed for Astro */
  return <ClinicalGenomicsDetail variant={variant} />;
}
