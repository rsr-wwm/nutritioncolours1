import { 
  PLANS_FAQS, RECIPES_FAQS, RECIPE_SPECIFIC_FAQS, ABOUT_FAQS, TEAM_FAQS,
  TESTIMONIALS_FAQS, BLOGS_FAQS, TOOLS_FAQS, HOME_FAQS, KNOWLEDGE_FAQS,
  VEGAN_FAQS, CONTACT_FAQS, MAINTENANCE_FAQS, TOPIC_SPECIFIC_FAQS, CATEGORY_FAQS
} from './constants';
import { RECIPES } from './recipes_database';
import { HERBS_SPICES_DATA, MEDICAL_CONDITIONS_DATA } from './clinical_databases';
import { TOPICS } from './topics';

export const getDynamicCategoryFaqs = (path: string, activeLocation: any): { question: string; answer: string; category: string }[] => {
  const parts = path.split('/');
  const base = parts[0];
  const id = parts[1];

  if (base === 'plans') {
    if (id === 'metabolic-mastery') {
      return [
        { question: "What is the clinical window to expect metabolic set-point shifts on the Metabolic Mastery program?", answer: "Most clients experience noticeable shifts in appetite and energy levels within 14 to 21 days of aligning meals with daylight circadian phases.", category: "Timeline" },
        { question: "Does the Metabolic Mastery plan require calorie-restricted fasting?", answer: "No, we reject caloric deprivation. Instead, we optimize the eating window and substitute refined wheat/rice with nutrient-dense ancient grains like Ragi and Jowar.", category: "Protocol" },
        { question: "Is the Thakur Protocol for Metabolic Mastery customized?", answer: "Yes, every plan is individually tailored to your unique metabolic profile and body composition metrics.", category: "Customization" }
      ];
    }
    if (id === 'therapeutic-reversal') {
      return [
        { question: "How does the Therapeutic Reversal plan target liver lipid accumulation and hormonal balance?", answer: "We target fatty liver (MASLD) and PCOS by optimizing liver enzymes and thyroid function through bioactive kitchen chemistry and circadian meal timing.", category: "Methodology" },
        { question: "How often are my blood markers reviewed during Therapeutic Reversal?", answer: "Our clinical team performs senior reviews of your metabolic indicators (like HbA1c, HOMA-IR, and thyroid profile) on a monthly basis.", category: "Oversight" },
        { question: "Does this program require synthetic hormone therapies?", answer: "No. The protocol relies entirely on plant-based nutrition, chronobiology, and therapeutic kitchen spices to promote self-healing.", category: "Safety" }
      ];
    }
    if (id === 'cellular-resurrection') {
      return [
        { question: "Is the Cellular Resurrection program suitable for reversing long-term Type 2 Diabetes?", answer: "Yes, this intensive program is specifically designed to restore insulin sensitivity and support pancreatic health under the direct oversight of Dr. Shilpa Thakur.", category: "Reversal" },
        { question: "How is Continuous Glucose Monitoring (CGM) utilized in Cellular Resurrection?", answer: "We use 24/7 CGM biosensors to track your real-time glucose response, allowing us to make immediate nutritional adjustments for glucose stability.", category: "Technology" },
        { question: "Can I achieve a medicine-free life through this program?", answer: "Many patients with Type 2 Diabetes successfully transition off medications under their doctor's supervision after achieving metabolic stability with our protocol.", category: "Goal" }
      ];
    }
    return PLANS_FAQS;
  }

  if (base === 'clinic' && activeLocation) {
    return [
      { question: `How can patients in ${activeLocation.city} consult with the central clinical team?`, answer: `Patients in ${activeLocation.city} receive fully virtual chrononutritional consulting, direct blood marker analysis, and remote health tracking.`, category: "Outreach" },
      { question: `Are the diet plans calibrated to local food staples in ${activeLocation.city}?`, answer: `Yes, Dr. Shilpa Thakur calibrates the ingredient swap guidelines specifically to local culinary staples and regional microclimates of ${activeLocation.city}.`, category: "Dietary Swaps" },
      { question: "How do I ship or share my lab test reports for the initial assessment?", answer: "You can securely upload your latest CBC, HbA1c, and lipid panels directly through our secure client portal or email them to our triage team.", category: "Onboarding" }
    ];
  }

  if (base === 'recipe') {
    const recipe = RECIPES.find(r => r.id === id);
    if (recipe && RECIPE_SPECIFIC_FAQS[recipe.id]) return RECIPE_SPECIFIC_FAQS[recipe.id];
    return RECIPES_FAQS;
  }

  if (base === 'herb') {
    const herb = HERBS_SPICES_DATA.find(h => h.id === id);
    if (herb) {
      return [
        { question: `What is the primary scientific mechanism of ${herb.name}?`, answer: `${herb.primaryMechanism}. This active botanical action supports cellular recovery.`, category: "Mechanism" },
        { question: `What is the recommended dosage range and instructions for ${herb.name}?`, answer: `The standard range is ${herb.dosage.range}. It should be consumed as: ${herb.dosage.instruction}.`, category: "Dosage" },
        { question: `Are there any known contraindications for ${herb.name}?`, answer: herb.contraindications && herb.contraindications.length > 0 ? `Yes, avoid use in cases of: ${herb.contraindications.join(', ')}.` : `No major contraindications are established under standard nutritional dosage.`, category: "Contraindications" }
      ];
    }
  }

  if (base === 'condition') {
    const cond = MEDICAL_CONDITIONS_DATA.find(c => c.id === id);
    if (cond) {
      const sg = cond.swapGuidelines;
      return [
        { question: `What is the underlying pathophysiology of ${cond.name}?`, answer: `${cond.pathophysiology || 'Complex metabolic dysregulation'}. Reversing this state requires correcting insulin and circadian markers.`, category: "Pathophysiology" },
        { question: `What ingredients should I eliminate to reverse ${cond.name}?`, answer: `To optimize recovery, you should eliminate: ${sg?.eliminate?.join(', ') || 'ultra-processed foods, refined sugars, and trans fats'}.`, category: "Elimination" },
        { question: `What dietary elements and timing rules should I adopt for ${cond.name}?`, answer: `Incorporate: ${sg?.incorporate?.join(', ') || 'whole foods, anti-inflammatory phytonutrients'}. Circadian Rule: ${sg?.timingRule || 'align eating windows with daylight cycles'}.`, category: "Therapeutics" }
      ];
    }
  }

  if (base === 'topic') {
    const topic = TOPICS.find(t => t.id === id);
    if (topic && TOPIC_SPECIFIC_FAQS[topic.id]) return TOPIC_SPECIFIC_FAQS[topic.id];
    return KNOWLEDGE_FAQS;
  }

  if (path === 'vegan') return VEGAN_FAQS;
  if (path === 'about' || path === 'history') return ABOUT_FAQS;
  if (path === 'team') return TEAM_FAQS;
  if (path === 'testimonials') return TESTIMONIALS_FAQS;
  if (path === 'blogs') return BLOGS_FAQS;
  if (path === 'tools') return TOOLS_FAQS;

  return HOME_FAQS;
};
