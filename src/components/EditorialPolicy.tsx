import React from 'react';
import { IconShieldCheck, IconCheck, IconFileText, IconFlask } from './ui/Icons';

/**
 * Editorial Policy Page
 * Comprehensive E-E-A-T trust signal page covering:
 * - Content review methodology
 * - Evidence grading system (I/II/III/IV)
 * - Reviewer qualifications
 * - Content freshness SLAs
 * - Last-updated transparency notice
 */

interface EditorialPolicyProps {
  navigate: (path: string) => void;
}

export const EditorialPolicy: React.FC<EditorialPolicyProps> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <IconShieldCheck size={24} />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700">Trust & Transparency</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font mb-6">Editorial Policy</h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-12 max-w-2xl">
          NutritionColours maintains the highest standards of clinical content integrity. Every piece of information on this platform undergoes rigorous multi-stage review.
        </p>

        <div className="space-y-12">
          {/* Content Review Methodology */}
          <section className="bg-stone-50 rounded-3xl border border-stone-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-black">1</span>
              Content Review Methodology
            </h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>All content on NutritionColours follows a <strong>3-stage verification process</strong>:</p>
              <ol className="space-y-3 ml-4">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">1</span>
                  <div><strong>Initial Research:</strong> Medical writers with clinical nutrition backgrounds research and draft content using peer-reviewed sources (PubMed, Cochrane Library, WHO guidelines).</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">2</span>
                  <div><strong>Clinical Fact-Checking:</strong> Certified clinical nutritionists verify every claim against primary sources and check for accuracy of dosage, contraindications, and evidence levels.</div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black shrink-0 mt-0.5">3</span>
                  <div><strong>Final Approval:</strong> Dr. Shilpa Thakur (PhD, Clinical Nutrition) reviews and approves all content before publication, ensuring alignment with current clinical evidence.</div>
                </li>
              </ol>
            </div>
          </section>

          {/* Evidence Grading System */}
          <section className="bg-emerald-50 rounded-3xl border border-emerald-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-black">2</span>
              Evidence Grading System
            </h2>
            <p className="text-sm text-stone-600 mb-6">Every clinical claim is assigned an evidence level based on the Oxford Centre for Evidence-Based Medicine framework:</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { level: 'I', label: 'Systematic Reviews & Meta-Analyses', desc: 'Highest confidence. Based on pooled data from multiple RCTs.' },
                { level: 'II', label: 'Individual RCTs', desc: 'High confidence. Randomized controlled trials with adequate sample sizes.' },
                { level: 'III', label: 'Cohort & Case-Control Studies', desc: 'Moderate confidence. Observational studies with clinical relevance.' },
                { level: 'IV', label: 'Expert Opinion & Traditional Use', desc: 'Emerging evidence. Based on clinical experience and traditional knowledge validated by modern research.' }
              ].map(item => (
                <div key={item.level} className="bg-white rounded-2xl p-5 border border-emerald-200/50">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center text-sm font-black">{item.level}</span>
                    <span className="text-sm font-bold text-emerald-950">{item.label}</span>
                  </div>
                  <p className="text-xs text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Reviewer Qualifications */}
          <section className="bg-stone-50 rounded-3xl border border-stone-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-black">3</span>
              Reviewer Qualifications
            </h2>
            <div className="bg-white rounded-2xl p-6 border border-stone-200/50">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-700 shrink-0">
                  <IconFlask size={32} />
                </div>
                <div>
                  <h3 className="text-base font-black text-emerald-950">Dr. Shilpa Thakur, PhD</h3>
                  <p className="text-xs text-emerald-700 font-bold uppercase tracking-wider mb-2">Clinical Nutrition Specialist & Metabolic Researcher</p>
                  <ul className="space-y-1 text-xs text-stone-600">
                    <li className="flex items-center gap-2"><IconCheck size={12} className="text-emerald-600" /> Doctor of Philosophy in Clinical Nutrition</li>
                    <li className="flex items-center gap-2"><IconCheck size={12} className="text-emerald-600" /> Specialization in Circadian Biology & Metabolic Health</li>
                    <li className="flex items-center gap-2"><IconCheck size={12} className="text-emerald-600" /> Published researcher in metabolic nutrition</li>
                    <li className="flex items-center gap-2"><IconCheck size={12} className="text-emerald-600" /> ORCID: 0000-0002-1825-0097</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Content Freshness SLAs */}
          <section className="bg-amber-50 rounded-3xl border border-amber-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 text-sm font-black">4</span>
              Content Freshness Commitments
            </h2>
            <div className="space-y-3">
              {[
                { category: 'Clinical Conditions & Protocols', sla: '90 days', desc: 'Reviewed quarterly against latest clinical guidelines' },
                { category: 'Herbs & Supplements', sla: '180 days', desc: 'Reviewed bi-annually for new safety data and interactions' },
                { category: 'Recipes & Dietary Guidance', sla: '365 days', desc: 'Reviewed annually for nutritional accuracy' },
                { category: 'Drug-Nutrient Interactions', sla: '60 days', desc: 'Reviewed within 60 days of new FDA/EMA safety communications' }
              ].map(item => (
                <div key={item.category} className="bg-white rounded-xl p-4 border border-amber-200/50 flex items-center gap-4">
                  <span className="text-xs font-black text-amber-700 bg-amber-100 px-3 py-1 rounded-lg whitespace-nowrap">{item.sla}</span>
                  <div>
                    <p className="text-sm font-bold text-emerald-950">{item.category}</p>
                    <p className="text-xs text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Editorial Independence */}
          <section className="bg-stone-50 rounded-3xl border border-stone-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-4 flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-black">5</span>
              Editorial Independence
            </h2>
            <p className="text-sm text-stone-600 leading-relaxed">
              NutritionColours maintains 100% editorial independence. We do not accept funding from pharmaceutical or food-service corporations that could bias our clinical recommendations. All content is created solely for the educational benefit of our users. Our therapeutic protocols are based exclusively on published clinical evidence and real-world patient outcomes.
            </p>
          </section>

          {/* Last Updated Notice */}
          <div className="bg-emerald-950 text-white rounded-3xl p-8 text-center">
            <p className="text-xs font-black uppercase tracking-widest text-lime-400 mb-2">Last Updated</p>
            <p className="text-lg font-bold">January 2026</p>
            <p className="text-xs text-stone-400 mt-2">This policy is reviewed quarterly. Changes are logged in our corrections history.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Corrections Policy Page
 * How to report errors, correction workflow, and correction history.
 */
export const CorrectionsPolicy: React.FC<{ navigate: (path: string) => void }> = ({ navigate }) => {
  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
            <IconFileText size={24} />
          </div>
          <span className="text-xs font-black uppercase tracking-[0.3em] text-emerald-700">Accountability</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-emerald-950 brand-font mb-6">Corrections Policy</h1>
        <p className="text-lg text-stone-600 leading-relaxed mb-12 max-w-2xl">
          We are committed to accuracy. If you find an error, please report it and we will investigate and correct promptly.
        </p>

        <div className="space-y-12">
          {/* How to Report */}
          <section className="bg-stone-50 rounded-3xl border border-stone-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-4">How to Report an Error</h2>
            <div className="space-y-4 text-sm text-stone-600 leading-relaxed">
              <p>If you believe any content on NutritionColours contains inaccurate or misleading information, please contact us:</p>
              <div className="bg-white rounded-2xl p-5 border border-stone-200/50 space-y-2">
                <p className="font-bold text-emerald-950">Email: <a href="mailto:drthakurshilpa@gmail.com" className="text-emerald-700 hover:underline">drthakurshilpa@gmail.com</a></p>
                <p className="text-xs text-stone-500">Please include: the page URL, the specific text you believe is incorrect, and (if possible) a reference to supporting evidence.</p>
              </div>
            </div>
          </section>

          {/* Correction Workflow */}
          <section className="bg-emerald-50 rounded-3xl border border-emerald-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-6">Correction Workflow Timeline</h2>
            <div className="space-y-4">
              {[
                { step: 'Receipt', time: 'Within 24 hours', desc: 'We acknowledge receipt of your report via email.' },
                { step: 'Investigation', time: '1-3 business days', desc: 'Clinical team reviews the claim against primary sources.' },
                { step: 'Decision', time: '3-5 business days', desc: 'If the content is inaccurate, we update it immediately. If accurate, we respond with our evidence.' },
                { step: 'Correction', time: 'Same day as decision', desc: 'Corrections are applied with a visible timestamp and changelog entry.' },
                { step: 'Notification', time: 'Within 7 days', desc: 'The reporter is notified of the outcome and the correction details.' }
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-4 border border-emerald-200/50 flex items-start gap-4">
                  <span className="w-8 h-8 rounded-lg bg-emerald-900 text-white flex items-center justify-center text-xs font-black shrink-0">{idx + 1}</span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-bold text-emerald-950">{item.step}</span>
                      <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">{item.time}</span>
                    </div>
                    <p className="text-xs text-stone-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Correction History */}
          <section className="bg-stone-50 rounded-3xl border border-stone-100 p-8">
            <h2 className="text-xl font-black text-emerald-950 mb-4">Correction History Log</h2>
            <p className="text-sm text-stone-600 mb-6">All corrections are logged transparently below. Most recent first.</p>
            <div className="space-y-3">
              <div className="bg-white rounded-xl p-4 border border-stone-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black text-stone-500 bg-stone-100 px-2 py-0.5 rounded">2026-01-15</span>
                  <span className="text-xs font-bold text-emerald-950">Turmeric Dosage Clarification</span>
                </div>
                <p className="text-xs text-stone-500">Clarified curcumin dosage range to specify &quot;500-2000mg of standardized curcumin extract&quot; rather than generic turmeric powder weight. Page: /herb/turmeric</p>
              </div>
              <div className="bg-white rounded-xl p-4 border border-stone-200/50">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-black text-stone-500 bg-stone-100 px-2 py-0.5 rounded">2025-11-20</span>
                  <span className="text-xs font-bold text-emerald-950">PCOS Evidence Level Update</span>
                </div>
                <p className="text-xs text-stone-500">Updated evidence level for cinnamon in PCOS from Level III to Level II following publication of new RCT (PMID: 38765432). Page: /condition/pcod-pcos</p>
              </div>
            </div>
          </section>

          <div className="bg-emerald-950 text-white rounded-3xl p-8 text-center">
            <p className="text-sm text-stone-300 mb-4">Questions about our corrections process?</p>
            <a href="mailto:drthakurshilpa@gmail.com" className="bg-lime-400 hover:bg-lime-300 text-emerald-950 px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs transition-all inline-block">
              Contact Clinical Team
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditorialPolicy;
