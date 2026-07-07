import { LOCATIONS_DATA } from '@/lib/locationsData';
import { ClinicClientPage } from './ClinicClientPage';

export async function generateStaticParams() {
  const cities = [...new Set(LOCATIONS_DATA.map(l => l.city.toLowerCase().replace(/\s+/g, '-')))];
  return cities.map(id => ({ id }));
}

export default async function ClinicDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return <ClinicClientPage clinicId={id} />;
}
