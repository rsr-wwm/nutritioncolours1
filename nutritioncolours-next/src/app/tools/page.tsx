'use client';
// // // // // import dynamic from 'next/dynamic'; // Replaced for Astro compatibility // Replaced for Astro compatibility // Replaced for Astro compatibility // Replaced for Astro compatibility // Replaced for Astro compatibility
import { TOOLS_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/SectionHeading';
import { FAQSection } from '@/components/SharedSections';

import { DynamicCircadianClock } from '@/components/DynamicCircadianClock';
import { HrvTracker } from '@/components/HrvTracker';
import { BiologicalAgeEstimator } from '@/components/BiologicalAgeEstimator';
import { CircadianPlate } from '@/components/ui/CircadianPlate';
import { DietaryAuditor } from '@/components/DietaryAuditor';
import { GenomicMatcher } from '@/components/GenomicMatcher';
import { ResearchQueryAgent } from '@/components/ResearchQueryAgent';
import { HealthCalculators } from '@/components/HealthCalculators';
import { PdfBuilder } from '@/components/PdfBuilder';
import { SmartMealGenerator } from '@/components/SmartMealGenerator';
import { SeoAnalyzer } from '@/components/SeoAnalyzer';
import { SystemMonitor } from '@/components/SystemMonitor';

export default function ToolsPage() {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto space-y-24">
      <div>
        <SectionHeading subtitle="Interactive Diagnostics" title="Circadian & Metabolic Hub" isMain={true} />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          <DynamicCircadianClock />
          <HrvTracker />
          <BiologicalAgeEstimator />
          <CircadianPlate />
        </div>
      </div>
      <div>
        <SectionHeading subtitle="Advanced Science" title="Metabolic Auditing & Nutrigenomics" />
        <div className="grid grid-cols-1 gap-8 mt-12">
          <DietaryAuditor />
          <GenomicMatcher />
          <ResearchQueryAgent />
        </div>
      </div>
      <div>
        <SectionHeading subtitle="Resources" title="Standard Health Calculators" />
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          <HealthCalculators />
          <PdfBuilder />
        </div>
      </div>
      <div>
        <SectionHeading subtitle="Planning" title="Therapeutic Circadian Meal Planner" />
        <div className="mt-12"><SmartMealGenerator /></div>
      </div>
      <div>
        <SectionHeading subtitle="Analysis" title="SEO & System Metrics" />
        <div className="grid grid-cols-1 gap-8 mt-12">
          <SeoAnalyzer />
          <SystemMonitor />
        </div>
      </div>
      <div className="pt-12 border-t border-stone-200/60">
        <FAQSection data={TOOLS_FAQS} title="Tools Usage FAQs" />
      </div>
    </div>
  );
}
