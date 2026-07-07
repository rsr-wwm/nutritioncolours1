'use client';
// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '@/components/CompatLink';

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-10 text-center">
      <div className="w-24 h-24 bg-stone-100 rounded-full flex items-center justify-center text-stone-500 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
      </div>
      <h2 className="text-3xl font-bold text-emerald-950 mb-4 brand-font">Page Not Found</h2>
      <p className="text-stone-500 max-w-md mb-8">The page you are looking for doesn&apos;t exist or has been moved.</p>
      <CompatLink href="/" className="bg-emerald-600 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">Back to Home</CompatLink>
    </div>
  );
}
