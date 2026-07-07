'use client';
// // import dynamic from 'next/dynamic'; // Replaced for Astro compatibility // Replaced for Astro compatibility

const EditorialPolicy = dynamic(() => import('@/components/EditorialPolicy').then(m => ({ default: m.default })), { ssr: false, loading: () => <div className="py-20 text-center text-stone-400 text-sm font-bold uppercase tracking-widest">Loading...</div> });

export default function EditorialPolicyPage() {
  return <EditorialPolicy navigate={() => {}} />;
}
