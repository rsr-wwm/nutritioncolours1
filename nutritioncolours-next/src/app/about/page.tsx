'use client';
// // // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { ABOUT_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconLeaf, IconFileText, IconCheck, IconSearch, IconArrowRight } from '@/components/ui/Icons';

export default function AboutPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-24">
      <div className="space-y-16">
        <SectionHeading subtitle="Philosophy" title="Our Approach" isMain={true} />
        <div className="max-w-4xl space-y-6">
          <div className="space-y-6 text-lg text-stone-600 leading-relaxed font-medium">
            <div className="p-10 bg-emerald-50 rounded-[40px] border border-emerald-100 shadow-sm">
              <h2 className="text-3xl font-black text-emerald-950 brand-font mb-4">The Modern Health Crisis</h2>
              <p className="text-lg text-stone-600 leading-relaxed">In a world where lifestyle disorders like obesity, thyroid dysfunction, diabetes, and PCOD are normalized, conventional medicine often focuses on symptom management. At NutritionColours, we assert that true healing requires a root-cause approach that addresses the foundational triggers of disease.</p>
            </div>
            <p className="px-4">Our bedrock belief is that most diseases begin in the kitchen, and therefore, the first and most effective medicine should be sourced from the kitchen. We blend ancient Ayurvedic wisdom with modern nutritional science to help you heal naturally.</p>
          </div>
        </div>
      </div>
      <div className="space-y-16">
        <SectionHeading subtitle="Service Excellence" title="The Four Pillars of Healing" isMain={false} />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: 'Root-Cause Focused Healing', desc: 'We go beyond symptom management to reverse diseases from their roots using whole plant-based foods.', icon: <IconLeaf size={32} /> },
            { title: 'Personalised Medical Nutrition', desc: 'Exhaustively customized protocols based on your specific medical diagnosis, lifestyle, and biochemical imbalances.', icon: <IconFileText size={32} /> },
            { title: 'Lifestyle Disorders Reversal', desc: 'Directly addressing systemic issues like insulin resistance and chronic inflammation through functional nutrition.', icon: <IconCheck size={32} /> },
            { title: 'Education & Empowerment', desc: 'Providing the tools to understand your body, moving far beyond simply handed-out diet charts.', icon: <IconSearch size={32} /> }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white p-10 rounded-[40px] border border-stone-100 shadow-lg hover:shadow-2xl transition-all group flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">{pillar.icon}</div>
              <h3 className="text-xl font-black text-emerald-950 mb-4 brand-font leading-tight">{pillar.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-emerald-950 rounded-[64px] p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px]" aria-hidden="true"></div>
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <span className="text-lime-400 font-black uppercase tracking-[0.4em] text-[10px]">Our Vision</span>
          <h2 className="text-4xl md:text-6xl font-black text-white brand-font leading-tight">Sparking a Food-as-Medicine Revolution</h2>
          <p className="text-emerald-100/70 text-lg md:text-xl leading-relaxed">To educate the world that food is chemistry, therapy, and pure biological energy. We aim to reduce dependency on long-term medications and make natural, sustainable healing accessible to every home.</p>
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            <CompatLink href="/plans"><button className="bg-lime-400 text-emerald-950 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-lime-300 transition-all">Start Your Journey</button></CompatLink>
            <CompatLink href="/contact"><button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all">Speak to an Expert</button></CompatLink>
          </div>
        </div>
      </div>
      <FAQSection data={ABOUT_FAQS} title="Philosophy FAQs" />
    </div>
  );
}
