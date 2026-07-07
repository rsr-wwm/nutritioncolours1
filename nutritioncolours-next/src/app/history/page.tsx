'use client';
import { ABOUT_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconLeaf } from '@/components/Icons';

export default function HistoryPage() {
  const timeline = [
    { year: '2010', title: 'Founded', desc: 'Dr. Shilpa Thakur starts her private practice in Chandigarh with a focus on diabetic care.', active: true },
    { year: '2015', title: 'Expansion', desc: 'Opened the first dedicated metabolic lab to integrate blood work analysis with nutrition plans.', active: false },
    { year: '2020', title: 'Global Reach', desc: 'Launched the online platform, allowing patients from 15+ countries to access our protocols.', active: false },
    { year: '2024', title: 'Today', desc: 'Celebrating 5,000+ successful reversals and counting.', active: true }
  ];

  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <SectionHeading subtitle="Timeline" title="Our Journey" isMain={false} />
      <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-stone-300 before:to-transparent">
        {timeline.map((item, idx) => (
          <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${item.active ? 'is-active' : ''}`}>
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border border-white ${item.active ? 'bg-emerald-500 text-emerald-5' : 'bg-white border-emerald-500 text-emerald-500'} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2`}>
              <IconLeaf size={16} />
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-2xl shadow-sm border border-stone-100">
              <div className="flex items-center justify-between space-x-2 mb-1"><div className="font-bold text-emerald-900">{item.title}</div><time className="font-mono text-xs text-stone-500">{item.year}</time></div>
              <div className="text-stone-500 text-sm">{item.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <FAQSection data={ABOUT_FAQS} title="History & Heritage FAQs" />
    </div>
  );
}
