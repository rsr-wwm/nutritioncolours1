
import { CategoryType, TeamMember, Topic, BlogArticle, Recipe, Testimonial, FAQ, SitemapNode, HerbalEntity, MedicalConditionEntity, GenomicVariantEntity, DrugInteractionEntity, Plan } from './types';


// --- BLOG ARTICLES (Optimized Titles for SEO) ---
export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'circadian-meal-timing-weight-loss',
    title: 'Circadian Eating for Metabolic Health',
    category: CategoryType.METABOLIC,
    type: 'blog',
    status: 'published',
    excerpt: 'Waking up lighter is possible. Discover how timing your meals with the sunrise can support metabolic improvement and burn fat naturally.',
    content: `<!-- INTENT: Target primary keyword "circadian eating metabolic health" to explain circadian rhythm alignments -->
## The Body is a Clock, Not a Furnace

Most dietary advice treats your body like a simple combustion engine. Calories in vs. calories out. But your biology is governed by a master clock—the Suprachiasmatic Nucleus—nested inside your brain. It dictates when you produce insulin, digest starch, or clear fat. Eating late at night fights this master clock, driving insulin resistance and liver fat build-up.

### Aligning Meals with Daylight
When sun rays trigger your photoreceptors in the morning, cortisol rises to initiate metabolic activity. This is your body's optimal window for handling glucose. Eating after sundown disrupts insulin sensitivity, causing your blood sugars to spike higher for the exact same meal.

<!-- INTENT: Targets secondary keyword "circadian food swaps for diabetes" with an entity-rich structured list -->
## Circadian Swaps: Changing What and When You Eat

We don't count calories here. Instead, we swap modern processed starches for ancient grains that digest in sync with your clock. 

*   **Ragi & Jowar (Sorghum):** Rich in complex starches that digest slowly, preventing mid-day insulin spikes.
*   **Barley & Oats:** Loaded with beta-glucan fibers to soothe your gut lining and support GLP-1 release.
*   **Early Sundown Window:** Confine food consumption to a 10-hour window ending by 7 PM.

**Pro Tip: To ease your pancreas, consume 70% of your daily carbohydrates before 2 PM. Sunset signals the body to prepare for cellular cleanup, not digestion.**

<!-- INTENT: Address common user queries directly to optimize search engine featured snippets -->
## Common Circadian Clock Questions

### Can I drink black coffee during the fasting window?
Yes. Black coffee will not disrupt your master clock cycles or cause an insulin response. However, avoid caffeine after 2 PM to preserve sleep depth and melatonin production.

### How long does metabolic improvement take?
Most patients observe stabilization in fasting glucose levels within 14 to 21 days of circadian alignment. Full HbA1c normalization occurs across 3 to 6 months.

### What if my work shift requires late nights?
Shift eating windows to focus meals during your active awake phase. Ensure you maintain a strict 12-hour fasting cycle before sleep to support metabolic recovery.`,
    image: '/images/nutritioncolours-default.svg',
    tags: ['Circadian Eating', 'Metabolism', 'Metabolic Health', 'Diabetes Management'],
    date: 'Oct 12, 2023',
    author: 'Dr. Shilpa Thakur',
    pageTitle: 'Circadian Eating for Metabolic Health | Dr. Shilpa Thakur',
    metaDescription: 'Learn how to master your metabolic clock with circadian eating. Discover timing swaps and chrononutrition protocols to support insulin sensitivity.',
    primaryKeyword: 'circadian eating metabolic health'
  },
  {
    id: 'reversing-insulin-resistance-plant-based',
    title: 'Support Mental Clarity by Nourishing Your Gut',
    category: CategoryType.COGNITIVE,
    type: 'blog',
    status: 'published',
    excerpt: 'Your gut creates 90% of your "happy hormone," Serotonin. Learn which foods clear brain fog and reduce anxiety instantly.',
    content: `Did you know your stomach is your "Second Brain"? It makes most of your serotonin, the chemical that keeps you happy. When your gut is inflamed from processed food, it sends stress signals to your brain. This causes brain fog and anxiety. The solution isn't just meditation—it's eating fermented foods and fiber to calm your system from the inside out.`,
    image: '/images/nutritioncolours-default.svg',
    tags: ['Anxiety Relief', 'Gut Health', 'Mental Focus'],
    date: 'Dec 05, 2023',
    author: 'Dr. Anjali Sharma',
    pageTitle: 'Nourishing the Gut for Mental Clarity | NutritionColours',
    metaDescription: 'Discover the power of the gut-brain axis. Learn which fermented foods and dietary fiber choices support neurotransmitter production and clear brain fog.',
    primaryKeyword: 'gut brain axis mental clarity'
  },
  {
    id: 'plant-protein-myth',
    title: 'Plant Protein Mastery: Building Strength Naturally',
    category: CategoryType.VEGAN,
    type: 'blog',
    status: 'published',
    excerpt: 'Stop believing the protein myth. See how athletes are building lean muscle and recovering faster using plant-based nutrition.',
    content: `Many people think you need chicken or eggs to build muscle. This is a myth. Plants like lentils, chickpeas, and quinoa pack powerful protein without the inflammation of animal products. Plant protein is cleaner, digests faster, and gives you sustained energy for workouts without the heavy "crash" afterwards.`,
    image: '/images/nutritioncolours-default.svg',
    tags: ['Vegan Fitness', 'Plant Protein', 'Muscle Building'],
    date: 'Oct 15, 2023',
    author: 'Dr. Vikram Singh',
    pageTitle: 'Plant Protein Mastery & Muscle Recovery | NutritionColours',
    metaDescription: 'Master your protein intake with clean, plant-based nutrition. Learn how amino acid stacking builds lean muscle efficiently without systemic inflammation.',
    primaryKeyword: 'plant protein muscle building'
  },
  {
    id: 'clinic-opening-mumbai',
    title: 'New Clinic Opening: NutritionColours Mumbai',
    category: CategoryType.NEWS,
    type: 'news',
    status: 'published',
    excerpt: 'Our advanced metabolic lab is now open in Bandra West. Visit us for body composition analysis and consultations.',
    content: `We are excited to bring our "Food as Medicine" approach to Mumbai. Our new center in Bandra West features a metabolic testing lab to check your body's true age and health. Come visit us for a personalized diet plan that fits your busy city lifestyle.`,
    image: '/images/nutritioncolours-default.svg',
    tags: ['Clinic News', 'Mumbai Nutritionist', 'Opening'],
    date: 'Nov 01, 2023',
    author: 'Admin',
    pageTitle: 'NutritionColours Metabolic Clinic Opening in Mumbai',
    metaDescription: 'NutritionColours opens its advanced metabolic testing lab and clinical consultation center in Bandra West, Mumbai. Plan your metabolic checkup today.',
    primaryKeyword: 'mumbai clinical nutritionist'
  },
  {
    id: 'award-2023',
    title: 'Dr. Shilpa Thakur Wins "Best Holistic Nutritionist 2023"',
    category: CategoryType.NEWS,
    type: 'news',
    status: 'published',
    excerpt: 'Recognized for supporting metabolic health improvement in clinical practice since 2015. Read about the award-winning protocol.',
    content: `Dr. Shilpa Thakur has been honored as the "Holistic Nutritionist of the Year." This award celebrates her unique protocol, which has supported many patients in improving metabolic markers under clinical supervision. It demonstrates that with the right nutritional approach, the body can support its own regulatory systems.`,
    image: '/images/nutritioncolours-default.svg',
    tags: ['Awards', 'Press Release', 'Diabetes Support'],
    date: 'Nov 10, 2023',
    author: 'Press Team',
    pageTitle: 'Dr. Shilpa Thakur Awarded Best Holistic Nutritionist 2023',
    metaDescription: 'Dr. Shilpa Thakur receives the Best Holistic Nutritionist of 2023 award for her pioneering clinical work with circadian nutrition and metabolic disease reversal.',
    primaryKeyword: 'best holistic nutritionist 2023'
  }
];

// --- BANNERS ---
export const BANNERS = [
  {
    id: '1',
    title: 'We Believe in Supporting Your Metabolic Health',
    subtitle: 'We question lifetime medication dependency. Our circadian-aligned biological food patterns coordinate with your natural biological clock to support cellular metabolic function.',
    image: '/images/precision_metabolic_nutrition_dr_shilpa.webp',
    name: 'Our Core Purpose',
    credentials: 'The Thakur Protocol'
  },
  {
    id: '2',
    title: 'The Body Is A Chemical Clock',
    subtitle: 'We reject the frustration of calorie-counting and generic diet plans. We treat food as biological information, aligning your metabolism with the sun for metabolic improvement.',
    image: '/images/nutritioncolours-default.svg',
    name: 'Our Methodology',
    credentials: 'Circadian Biology'
  },
  {
    id: '3',
    title: 'Reclaim Your True Biological Freedom',
    subtitle: 'True health is the absence of daily health-management anxiety. We guide you toward meaningful improvement in Type 2 Diabetes, PCOD, and Fatty Liver markers under licensed clinician supervision.',
    image: '/images/nutritioncolours-default.svg',
    name: 'The Human Impact',
    credentials: 'Stop Symptom Management'
  }
];

// --- CLINICAL PLANS ---
export const PLANS: Plan[] = [
  {
    id: 'plan-1',
    name: 'Metabolic Mastery',
    idealFor: 'Weight Loss, Pre-Diabetes, Skin Health',
    image: '/images/nutritioncolours-default.svg',
    icon: 'IconLeaf',
    color: 'emerald',
    description: 'Metabolic Mastery is a clinical nutrition program designed to reset your metabolic set-point by aligning food intake with circadian rhythms. This protocol targets stubborn fat and insulin resistance by utilizing food as biological information to reignite your natural mitochondrial energy production.',
    features: [
      'The "Thakur Protocol": A Personalized Diet Plan tailored to your metabolic type.',
      'Advanced Body Composition Analysis to monitor visceral fat reduction.',
      'Direct WhatsApp Clinical Support for real-time nutritional corrections.',
      'Kitchen Laboratory Access: 500+ therapeutic recipes for disease reversal.',
      'Metabolic Travel Guide: Strategies to maintain progress during social events.'
    ],
    tiers: [
      { label: '3 Months', price: '₹50,000' },
      { label: '6 Months', price: '₹90,000' }
    ]
  },
  {
    id: 'plan-2',
    name: 'Therapeutic Reversal',
    idealFor: 'PCOD, Thyroid, Fatty Liver, Hypertension',
    image: '/images/nutritioncolours-default.svg',
    icon: 'IconWand',
    color: 'lime',
    description: 'Therapeutic Reversal is a specialized clinical protocol for reversing hormonal and metabolic disorders without life-long dependency on medication. By applying Circadian Medicine, we optimize liver and thyroid function at the root cause level.',
    features: [
      'Monthly Senior Clinical Review of comprehensive blood biomarkers.',
      'Root-Cause Diagnosis: Identification of specific micronutrient voids.',
      'Adaptive Nutrition: Weekly diet modifications to prevent metabolic plateaus.',
      'Herbal Chemistry: Utilizing kitchen spices as targeted medicinal support.',
      'Gut Microbiome Blueprint: A protocol to resolve dysbiosis and inflammation.'
    ],
    tiers: [
      { label: '6 Months', price: '₹1,20,000' },
      { label: '12 Months', price: '₹2,00,000' }
    ]
  },
  {
    id: 'plan-3',
    name: 'Cellular Resurrection',
    idealFor: 'Type 2 Diabetes Reversal & Chronic Autoimmunity',
    image: '/images/precision_metabolic_nutrition_dr_shilpa.webp',
    icon: 'IconLock',
    color: 'teal',
    description: 'Cellular Resurrection is our most intensive clinical nutrition program focused on achieving clinical remission of Type 2 Diabetes. This "Medicine-Free Life" protocol aggressively targets insulin sensitivity at the cellular level to restore pancreatic health.',
    features: [
      'Direct Clinical Oversight from Dr. Shilpa Thakur for high-stakes health.',
      'Continuous Glucose Monitoring (CGM): 24/7 data-driven sugar management.',
      'Precision Intake Tracking: Instant corrections for glucose spikes.',
      'Neuro-Metabolic Support: Stress and sleep coaching to lower cortisol.',
      'Environmental Healing: Family diet integration for sustainable success.'
    ],
    tiers: [
      { label: '6 Months', price: '₹2,00,000' },
      { label: '12 Months', price: '₹3,50,000' }
    ]
  }
];

// --- TESTIMONIALS ---
export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Rajesh Kumar', role: 'IT Professional', condition: 'Reversed Diabetes', text: 'I was on insulin for 5 years. In just 4 months with Dr. Shilpa, my sugar levels are normal without shots. I feel 10 years younger.', image: '/images/nutritioncolours-default.svg', date: 'Sep 2023' },
  { id: '2', name: 'Priya Sharma', role: 'Teacher', condition: 'Cured PCOD Infertility', text: 'I tried everything to get pregnant. This diet fixed my hormones naturally. I lost 18kg and am finally a mother. Forever grateful.', image: '/images/nutritioncolours-default.svg', date: 'Aug 2023' },
  { id: '3', name: 'Anita Desai', role: 'Homemaker', condition: 'No More BP Medicine', text: 'My BP was always 160/100. Doctors said I need pills forever. Now it is 120/80 just by changing my food. Food really is medicine.', image: '/images/nutritioncolours-default.svg', date: 'Oct 2023' }
];

// --- TEAM ---
export const TEAM: TeamMember[] = [
  {
    id: 'shilpa',
    slug: 'drshilpathakurphd',
    name: 'Dr. Shilpa Thakur, Ph.D. (Clinical Nutrition) - Non-Medical Practitioner',
    role: 'Co-Founder, Medical Nutritionist & Metabolic Researcher (Non-Medical Practitioner)', 
    bio: 'Co-Founder of NutritionColours and Pioneer of Circadian Nutritional Support systems with 10+ years of clinical research.', 
    fullBio: 'Dr. Shilpa Thakur, Ph.D. is the Co-Founder of NutritionColours, a world-class Medical Nutritionist (Non-Medical Practitioner), and the pioneer of the Circadian Nutrition Protocol. With over a decade of clinical research, she has helped 5,000+ clients optimize metabolic health using food as biological information. Her approach integrates the rigorous science of clinical nutrition with ancient Ayurvedic wisdom to deliver deep, evidence-based metabolic support for chronic conditions.', 
    details: 'PhD. Clinical Nutrition (Non-Medical Practitioner), Certified Medical Nutritionist, Co-Founder of NutritionColours, Pioneer of Circadian Metabolic Support', 
    image: '/images/precision_metabolic_nutrition_dr_shilpa.webp', 
    specialties: ['Blood Sugar Optimization', 'Hormonal Balance', 'Circadian Nutrition', 'Autoimmune Support'],  
    location: 'Chandigarh, Punjab, India', 
    asl: 'F/42/Chandigarh', 
    socials: { 
      linkedin: 'https://www.linkedin.com/in/dr-shilpa-phd/', 
      instagram: 'https://www.instagram.com/drshilpa_nutritioncolours', 
      facebook: 'https://www.facebook.com/shiputh',
      quora: 'https://www.quora.com/profile/Dr-Shilpa-Thakur-Phd',
      youtube: 'https://www.youtube.com/@nutritioncolours_drshilpa',
      whatsapp: 'https://wa.me/917696160133'
    } 
  },
  { 
    id: 'kelive', 
    name: 'Kelive D\'Souza', 
    role: 'Food Recipe Expert', 
    bio: 'Celebrity Caterer specializing in medicinal and therapeutic recipes.', 
    fullBio: 'Kelive D\'Souza is a Food Recipe Expert and Celebrity Caterer with 7 years of specialized experience in creating delicious, healing meals. He ensures that therapeutic nutrition is not just effective but also a joy to eat, proving that medicine can indeed come from the kitchen.', 
    details: 'Food Recipe Expert, Celebrity Caterer (7 Years Exp.)', 
    image: '/images/nutritioncolours-default.svg', 
    specialties: ['Therapeutic Recipes', 'Gourmet Health Food', 'Meal Design'], 
    location: 'Goa', 
    asl: 'M/32/Goa'
  },
  { 
    id: 'karan', 
    name: 'Karan Singh', 
    role: 'Physical Recovery Specialist', 
    bio: 'Movement expert focused on physical rehabilitation and strength.', 
    fullBio: 'Karan Singh is a Physical Recovery Specialist and Gym Trainer with 10 years of clinical experience. He specializes in movement and rehabilitation, helping patients reclaim their physical strength and mobility alongside their nutritional healing.', 
    details: 'Certified Gym Trainer (10 Years Exp.), Rehab Specialist', 
    image: '/images/nutritioncolours-default.svg', 
    specialties: ['Physical Rehab', 'Movement Therapy', 'Strength Training'], 
    location: 'Chandigarh, Punjab, India', 
    asl: 'M/28/Chandigarh'
  },
  { 
    id: 'sagar', 
    name: 'Sagar Thapa', 
    role: 'Online Influencer & Trainer', 
    bio: 'Expert in transformation and lifestyle motivation.', 
    fullBio: 'Sagar Thapa is an Online Influencer and Fitness Trainer with 5 years of experience. He focuses on motivating and guiding clients through their lifestyle transformations, bridging the gap between clinical nutrition and daily fitness habits.', 
    details: 'Fitness Trainer (5 Years Exp.), Lifestyle Coach', 
    image: '/images/nutritioncolours-default.svg', 
    specialties: ['Lifestyle Transformation', 'Motivation', 'Online Coaching'], 
    location: 'Chandigarh, Punjab, India', 
    asl: 'M/28/Chandigarh'
  },
  { 
    id: 'nanz', 
    name: 'Nanzin Dolma', 
    role: 'Yoga Specialist', 
    bio: 'Therapeutic yoga expert connecting mind and body.', 
    fullBio: 'Nanzin Dolma is a Yoga Specialist with 2 years of experience in therapeutic movement and mindfulness. Her sessions are designed to complement nutritional therapy by managing stress and improving the mind-body connection through traditional and modern yoga practices.', 
    details: 'Yoga Trainer (2 Years Exp.), Mindfulness Coach', 
    image: '/images/nutritioncolours-default.svg', 
    specialties: ['Therapeutic Yoga', 'Mindfulness', 'Stress Management'], 
    location: 'Panchkula', 
    asl: 'F/41/Panchkula'
  },
  { 
    id: 'rana', 
    name: 'R.S. Rana', 
    role: 'Strategic Business Consultant', 
    bio: 'Strategic lead overseeing global patient care operations.', 
    fullBio: 'Mr. R.S. Rana is a Strategic Business Consultant for NutritionColours. He provides the operational and growth vision for the company, ensuring that Dr. Thakur\'s clinical protocols reach and help as many people as possible worldwide.', 
    details: 'Strategic Business Consultant', 
    image: '/images/nutritioncolours-default.svg', 
    specialties: ['Strategy', 'Operations', 'Global Health Growth'], 
    location: 'Goa', 
    asl: 'M/39/Goa'
  }
];

// --- MEMBER SPECIFIC FAQS ---
export const MEMBER_SPECIFIC_FAQS: Record<string, FAQ[]> = {
  'shilpa': [
    { question: "Do you personally check my diet?", answer: "Yes, for the Therapeutic and Cellular Resurrection plans, I review your progress and blood reports personally.", category: "Consultation" },
    { question: "Can I stop insulin?", answer: "Some patients have worked with their prescribing doctor to adjust medication as metabolic markers improve. Never change medication without your doctor.", category: "Medical" },
    { question: "Is this diet strict?", answer: "We focus on discipline because we are fighting a disease. But we ensure you are never hungry. It's about eating right, not eating less.", category: "Approach" },
    { question: "How does chronobiology affect my meals?", answer: "We time your meals with your circadian rhythm to optimize insulin sensitivity, which is highest in the morning.", category: "Science" },
    { question: "Do you offer family consultations?", answer: "Yes, we often work with the whole family to ensure a supportive environment for metabolic improvement.", category: "Support" },
    { question: "What is your success rate?", answer: "Many patients who adhere to the protocol for 90 days report improvements in metabolic markers. Individual results vary. No outcome is guaranteed.", category: "Results" }
  ],
  'kelive': [
    { question: "Are ingredients easy to find?", answer: "Yes, I use local, seasonal Indian ingredients. No fancy or expensive imports needed.", category: "Ingredients" },
    { question: "I don't have time to cook.", answer: "My recipes are designed for busy people. Most take less than 30 minutes to prepare.", category: "Cooking" },
    { question: "What if I have allergies?", answer: "Every recipe can be adjusted. We provide swaps for gluten, dairy, nuts, and soy.", category: "Dietary" }
  ],
};

// --- HEALTH TOPICS (Expanded to 50+) ---


// --- RECIPES (Expanded to 15+) ---

// --- SITE STRUCTURE ---
export const SITE_STRUCTURE: SitemapNode = {
  id: 'root',
  path: 'home',
  label: 'Home',
  type: 'page',
  status: 'optimized',
  meta: { title: 'NutritionColours Home', description: 'Reverse Diabetes Naturally', keywords: ['diabetes', 'nutrition'] },
  children: [
    {
      id: 'plans-section',
      path: 'plans',
      label: 'Programs',
      type: 'category',
      status: 'optimized',
      children: [
          { 
            id: 'plan-metabolic', 
            path: 'plans/metabolic-mastery', 
            label: 'Metabolic Mastery', 
            type: 'page', 
            status: 'optimized',
            meta: { title: 'Metabolic Mastery | NutritionColours', description: 'Comprehensive program to master your metabolism through targeted clinical nutrition and holistic habits.', keywords: ['metabolic mastery', 'metabolism boost', 'nutrition program'] },
            content: { benefits: ['Customized Meal Plans', '1-on-1 Consults', 'Habit Tracking'], features: ['Weekly Check-ins', 'Recipe Library', 'Progress Tracking'] }
          },
          { 
            id: 'plan-therapeutic', 
            path: 'plans/therapeutic-reversal', 
            label: 'Therapeutic Reversal', 
            type: 'page', 
            status: 'optimized',
            meta: { title: 'Therapeutic Reversal | NutritionColours', description: 'Intensive clinical nutrition protocols designed for the natural reversal of chronic metabolic dysfunctions.', keywords: ['disease reversal', 'therapeutic diets', 'clinical nutrition', 'chronic illness'] },
            content: { benefits: ['Medical Oversight', 'Advanced Testing', 'Supplement Protocols'], features: ['Daily Tracking', 'Direct Doctor Access', 'Custom Remedies'] }
          },
          { 
            id: 'plan-cellular', 
            path: 'plans/cellular-resurrection', 
            label: 'Cellular Resurrection', 
            type: 'page', 
            status: 'optimized',
            meta: { title: 'Cellular Resurrection | NutritionColours', description: 'Deep healing at a cellular level focusing on longevity, anti-aging and total microbiome restoration.', keywords: ['cellular health', 'anti-aging nutrition', 'microbiome', 'longevity'] },
            content: { benefits: ['Anti-aging Focus', 'Gut Flora Restoration', 'Deep Detox'], features: ['Advanced Biomarker Tracking', 'Epigenetic Profiling', 'Longevity Workshops'] }
          }
      ]
    },
    {
        id: 'knowledge-section',
        path: 'knowledge/health-topics',
        label: 'Knowledge',
        type: 'category',
        status: 'optimized',
        children: [
            { 
              id: 'topics-page', 
              path: 'knowledge/health-topics', 
              label: 'Health Topics', 
              type: 'category', 
              status: 'optimized',
              children: [
                { id: 'diabetes-reversal-topic', path: 'topic/diabetes-reversal', label: 'Diabetes Reversal Protocol', type: 'resource', status: 'optimized' },
                { id: 'pcos-reversal-topic', path: 'topic/pcod-reversal', label: 'PCOS Reversal Protocol', type: 'resource', status: 'optimized' },
                { id: 'fatty-liver-topic', path: 'topic/fatty-liver-masld', label: 'Fatty Liver Reversal Protocol', type: 'resource', status: 'optimized' },
                { id: 'thyroid-topic', path: 'topic/thyroid-remission', label: 'Thyroid Remission Protocol', type: 'resource', status: 'optimized' },
                { id: 'hypertension-topic', path: 'topic/hypertension-reversal', label: 'Hypertension Reversal Protocol', type: 'resource', status: 'optimized' },
                { id: 'gut-repair-topic', path: 'topic/gut-dysbiosis-leaky-gut', label: 'Gut Microbiome Repair Protocol', type: 'resource', status: 'optimized' }
              ]
            },
            { 
              id: 'blogs-page', 
              path: 'knowledge/blogs', 
              label: 'Articles', 
              type: 'category', 
              status: 'optimized',
              children: [
                { id: 'blog-1', path: 'article/circadian-meal-timing-weight-loss', label: 'Circadian Meal Timing Study', type: 'resource', status: 'optimized' },
                { id: 'blog-2', path: 'article/reversing-insulin-resistance-plant-based', label: 'Reversing Insulin Resistance', type: 'resource', status: 'optimized' },
                { id: 'blog-3', path: 'article/mthfr-gene-methylation-b12', label: 'MTHFR Methylation & B12', type: 'resource', status: 'optimized' },
                { id: 'blog-4', path: 'article/fatty-liver-reversal-diet-plan', label: 'Fatty Liver Reversal Plan', type: 'resource', status: 'optimized' }
              ]
            },
            { 
              id: 'vegan-page', 
              path: 'knowledge/vegan', 
              label: 'Vegan Guide', 
              type: 'category', 
              status: 'optimized',
              children: [
                { id: 'vegan-recipes', path: 'vegan/recipes', label: 'Vegan Recipes', type: 'resource', status: 'optimized' },
                { id: 'vegan-alternatives', path: 'vegan/alternatives', label: 'Alternatives & Substitutes', type: 'resource', status: 'optimized' },
                { id: 'vegan-nutrition', path: 'vegan/nutrition', label: 'Health & Nutrition', type: 'resource', status: 'optimized' },
                { id: 'vegan-lifestyle', path: 'vegan/lifestyle', label: 'Lifestyle & Fashion', type: 'resource', status: 'optimized' },
                { id: 'vegan-travel', path: 'vegan/travel', label: 'Dining & Travel', type: 'resource', status: 'optimized' },
                { id: 'vegan-beginners', path: 'vegan/beginners', label: 'Beginner Guides', type: 'resource', status: 'optimized' },
                { id: 'vegan-reviews', path: 'vegan/reviews', label: 'Product Reviews', type: 'resource', status: 'optimized' },
                { id: 'vegan-news', path: 'vegan/news', label: 'News & Activism', type: 'resource', status: 'optimized' }
              ]
            },
            { 
              id: 'herbs-spices-category', 
              path: 'knowledge/herbs-spices', 
              label: 'Herbs & Spices', 
              type: 'category', 
              status: 'optimized',
              children: [
                { id: 'turmeric-page', path: 'herb/turmeric', label: 'Turmeric (Curcuma longa)', type: 'resource', status: 'optimized', meta: { title: 'Turmeric (Curcuma longa) | NutritionColours', description: 'Clinical guidelines and standard dosages for turmeric curcumin.', keywords: ['turmeric', 'curcumin'] } },
                { id: 'ashwagandha-page', path: 'herb/ashwagandha', label: 'Ashwagandha (Withania somnifera)', type: 'resource', status: 'optimized', meta: { title: 'Ashwagandha (Withania somnifera) | NutritionColours', description: 'Clinical guide for Ashwagandha stress and cortisol regulation.', keywords: ['ashwagandha', 'cortisol'] } },
                { id: 'cinnamon-page', path: 'herb/cinnamon', label: 'Ceylon Cinnamon (Cinnamomum verum)', type: 'resource', status: 'optimized', meta: { title: 'Ceylon Cinnamon | NutritionColours', description: 'Clinical guide for Ceylon Cinnamon in diabetes reversal.', keywords: ['cinnamon', 'insulin'] } },
                { id: 'ginger-page', path: 'herb/ginger', label: 'Ginger (Zingiber officinale)', type: 'resource', status: 'optimized', meta: { title: 'Ginger (Zingiber officinale) | NutritionColours', description: 'Clinical guide for ginger in gut health and inflammation.', keywords: ['ginger', 'digestive'] } },
                { id: 'ragi-page', path: 'herb/ragi', label: 'Ragi (Finger Millet)', type: 'resource', status: 'optimized', meta: { title: 'Ragi (Finger Millet) | NutritionColours', description: 'Nutritional profile and benefits of Finger Millet.', keywords: ['ragi', 'millet'] } },
                { id: 'spirulina-page', path: 'herb/spirulina', label: 'Spirulina', type: 'resource', status: 'optimized', meta: { title: 'Spirulina | NutritionColours', description: 'Nutritional profile and clinical benefit of Spirulina.', keywords: ['spirulina', 'antioxidant'] } },
                { id: 'fenugreek-page', path: 'herb/fenugreek', label: 'Fenugreek (Methi)', type: 'resource', status: 'optimized', meta: { title: 'Fenugreek (Methi) Clinical Guide | NutritionColours', description: 'Clinical guidelines and blood sugar regulating dosages for Fenugreek.', keywords: ['fenugreek', 'methi', 'diabetes'] } },
                { id: 'holy-basil-page', path: 'herb/holy-basil', label: 'Holy Basil (Tulsi)', type: 'resource', status: 'optimized', meta: { title: 'Holy Basil (Tulsi) Clinical Guide | NutritionColours', description: 'Clinical guidelines and adaptogenic properties of Tulsi.', keywords: ['tulsi', 'holy basil', 'cortisol'] } },
                { id: 'garlic-page', path: 'herb/garlic', label: 'Garlic (Allium sativum)', type: 'resource', status: 'optimized', meta: { title: 'Garlic (Allium sativum) Clinical Guide | NutritionColours', description: 'Clinical guidelines, allicin activation, and BP control for raw garlic.', keywords: ['garlic', 'allicin', 'blood pressure'] } }
              ]
            },
            {
              id: 'conditions-category',
              path: 'knowledge/health-conditions',
              label: 'Health Conditions',
              type: 'category',
              status: 'optimized',
              children: [
                { id: 'masld-page', path: 'condition/masld', label: 'MASLD (Fatty Liver)', type: 'resource', status: 'optimized', meta: { title: 'Reversing MASLD (Fatty Liver) | NutritionColours', description: 'Circadian and nutritional reversal protocols for MASLD.', keywords: ['masld', 'fatty liver'] } },
                { id: 'insulin-resistance-page', path: 'condition/insulin-resistance', label: 'Insulin Resistance', type: 'resource', status: 'optimized', meta: { title: 'Reverse Insulin Resistance | NutritionColours', description: 'Restore insulin sensitivity naturally.', keywords: ['insulin resistance', 'homa-ir'] } },
                { id: 'circadian-page', path: 'condition/circadian-dysregulation', label: 'Circadian Dysregulation', type: 'resource', status: 'optimized', meta: { title: 'Chrononutrition & Circadian Alignment | NutritionColours', description: 'Circadian meal timing and sleep-wake cycle protocols for metabolic healing.', keywords: ['circadian rhythm', 'chrononutrition', 'meal timing'] } },
                { id: 'diabetes-reversal-page', path: 'condition/diabetes-reversal', label: 'T2 Diabetes Reversal', type: 'resource', status: 'optimized', meta: { title: 'Reversing Type 2 Diabetes Naturally | NutritionColours', description: 'Evidence-based clinical guidelines for pancreatic beta-cell recovery and HbA1c reduction.', keywords: ['type 2 diabetes', 'diabetes reversal', 'hba1c'] } },
                { id: 'pcos-page', path: 'condition/pcod-pcos', label: 'PCOD / PCOS Reversal', type: 'resource', status: 'optimized', meta: { title: 'PCOS & Hormonal Reversal Protocol | NutritionColours', description: 'Reverse PCOS naturally by targeting underlying insulin resistance and excess androgen production.', keywords: ['pcos', 'pcod', 'androgens', 'hirsutism'] } },
                { id: 'thyroid-page', path: 'condition/thyroid-dysfunction', label: 'Thyroid & Hashimoto\'s', type: 'resource', status: 'optimized', meta: { title: 'Restore Thyroid Activity & Hashimoto\'s Care | NutritionColours', description: 'Clinical nutrition guidelines to lower anti-TPO antibodies and optimize T4/T3 conversion.', keywords: ['hypothyroidism', 'hashimotos', 'tsh', 'thyroid antibodies'] } },
                { id: 'gut-health-page', path: 'condition/gut-health', label: 'Gut Microbiome Rest', type: 'resource', status: 'optimized', meta: { title: 'Gut Microbiome & Mucosal Repair | NutritionColours', description: 'Heal leaky gut, reduce serum zonulin, and optimize short-chain fatty acids (SCFA) naturally.', keywords: ['gut health', 'microbiome', 'leaky gut', 'zonulin'] } },
                { id: 'hypertension-page', path: 'condition/hypertension', label: 'Hypertension', type: 'resource', status: 'optimized', meta: { title: 'Reverse Hypertension Naturally | NutritionColours', description: 'Nitric oxide protocols and circadian sodium adjustments for high blood pressure.', keywords: ['hypertension', 'blood pressure', 'nitric oxide'] } }
              ]
            },
            {
              id: 'genomics-category',
              path: 'knowledge/nutrigenomics',
              label: 'Nutrigenomics (SNPs)',
              type: 'category',
              status: 'optimized',
              children: [
                { id: 'mthfr-page', path: 'genomics/mthfr-c677t', label: 'MTHFR (rs1801133)', type: 'resource', status: 'optimized', meta: { title: 'MTHFR (rs1801133) Polymorphism Guide | NutritionColours', description: 'Clinical folate methylation guidelines for rs1801133 variant.', keywords: ['mthfr', 'rs1801133', 'folate'] } },
                { id: 'fto-page', path: 'genomics/fto-rs9939609', label: 'FTO (rs9939609)', type: 'resource', status: 'optimized', meta: { title: 'FTO (rs9939609) Satiety SNP Guide | NutritionColours', description: 'Protein, fiber, and saturated fat guidelines for FTO variant.', keywords: ['fto', 'rs9939609', 'satiety'] } },
                { id: 'tcf7l2-page', path: 'genomics/tcf7l2-rs7903146', label: 'TCF7L2 (rs7903146)', type: 'resource', status: 'optimized', meta: { title: 'TCF7L2 (rs7903146) Diabetes Risk Guide | NutritionColours', description: 'GLP-1 secretion and low glycemic protocol for TCF7L2 variant.', keywords: ['tcf7l2', 'rs7903146', 'diabetes risk'] } }
              ]
            },
            {
              id: 'interactions-category',
              path: 'knowledge/drug-interactions',
              label: 'Drug-Nutrient Interactions',
              type: 'category',
              status: 'optimized',
              children: [
                { id: 'metformin-interaction-page', path: 'interactions/metformin-interaction', label: 'Metformin Interactions', type: 'resource', status: 'optimized', meta: { title: 'Metformin Drug-Nutrient Interaction Guide | NutritionColours', description: 'Vitamin B12 depletion and berberine contraindication details.', keywords: ['metformin', 'berberine', 'vitamin b12'] } },
                { id: 'levothyroxine-interaction-page', path: 'interactions/levothyroxine-interaction', label: 'Levothyroxine Interactions', type: 'resource', status: 'optimized', meta: { title: 'Levothyroxine Drug-Nutrient Interaction Guide | NutritionColours', description: 'Ashwagandha contraindication and conversion cofactor co-therapies.', keywords: ['levothyroxine', 'ashwagandha', 'thyroid'] } }
              ]
            }
        ]
    },
    {
        id: 'lifestyle-section',
        path: 'recipes',
        label: 'Lifestyle',
        type: 'category',
        status: 'optimized',
        children: [
            { 
              id: 'recipes-page', 
              path: 'recipes', 
              label: 'Recipes', 
              type: 'page', 
              status: 'optimized',
              meta: { title: 'Therapeutic Healing Recipes | NutritionColours', description: 'Hundreds of clinical-grade recipes categorized for reversing specific metabolic conditions naturally.', keywords: ['healthy recipes', 'disease reversal recipes', 'metabolic diet recipes'] },
              content: { benefits: ['Easy to Make', 'Clinically Designed', 'Family Friendly'], features: ['Macro Breakdowns', 'Ingredient Alternatives', 'Video Instructions'] }
            },
            { 
              id: 'tools-page', 
              path: 'tools', 
              label: 'Tools', 
              type: 'page', 
              status: 'optimized',
              meta: { title: 'Free Health Calculators, Chrono-Farming & AI Tools | NutritionColours', description: 'Calculate your BMI, estimate biological age, track HRV, simulate biomarkers, and find localized crop swaps for clinical circadian nutrition.', keywords: ['health calculators', 'biological age estimator', 'chrono-farming swaps', 'HRV tracker', 'metabolic simulation'] },
              content: { benefits: ['Geographic Crop Swaps (North/South/West India)', 'Interactive HRV and Biomarker Auditing', 'Clinical Circadian Clock Tracking'], features: ['Farming & Market Guides', 'Biological Age Estimator', 'Therapeutic Meal Planner'] }
            },
            { 
              id: 'connect-page', 
              path: 'connect', 
              label: 'Community', 
              type: 'page', 
              status: 'optimized',
              meta: { title: 'Join The Healing Community | NutritionColours', description: 'Connect with thousands of patients who have successfully reversed their chronic illnesses.', keywords: ['health community', 'nutrition forum', 'disease reversal group'] },
              content: { benefits: ['Peer Support', 'Live Q&A Sessions', 'Motivation'], features: ['Private Forums', 'Weekly Webinars', 'Buddy System'] }
            },
            {
              id: 'clinics-page',
              path: 'clinics',
              label: 'Outreach Locations',
              type: 'page',
              status: 'optimized',
              meta: { title: 'Remote Consultation & Service Outreach Locations | NutritionColours', description: 'Check if your city is covered by NutritionColours remote metabolic services. Get personalized, circadian diets optimized for local staples by Dr. Shilpa Thakur.', keywords: ['remote consultation', 'outreach locations', 'virtual nutritionists', 'diet reversal online'] },
              content: { benefits: ['1,040+ Cities Covered Remotely', 'Local Staple Diet Calibrations', 'Dr. Shilpa Thakur Consultation Support'], features: ['Pincode Search Engine', 'Interactive SVG Coverage Map', 'Wikidata & PubMed Triple-Linked Data'] }
            }
        ]
    },
    {
        id: 'about-section',
        path: 'about',
        label: 'About',
        type: 'category',
        status: 'optimized',
        children: [
            { 
              id: 'about-page', 
              path: 'about', 
              label: 'Our Philosophy', 
              type: 'page', 
              status: 'optimized',
              meta: { title: 'Our Clinical Philosophy | NutritionColours', description: 'Understanding the fundamentals of food as medicine and the circadian nutritional protocols used in our clinics.', keywords: ['nutrition philosophy', 'food as medicine', 'circadian nutrition'] },
              content: { benefits: ['Root-cause Approach', 'Holistic Principles', 'Scientific Backing'], features: ['Core Values', 'Methodology Explained', 'Treatment Framework'] }
            },
            { 
              id: 'team-page', 
              path: 'team', 
              label: 'Team', 
              type: 'category', 
              status: 'optimized',
              children: [
                { id: 'team-shilpa', path: 'team/drshilpathakurphd', label: 'Dr. Shilpa Thakur', type: 'resource', status: 'optimized' },
                { id: 'team-kelive', path: 'team/kelive', label: 'Kelive D\'Souza', type: 'resource', status: 'optimized' },
                { id: 'team-karan', path: 'team/karan', label: 'Karan Singh', type: 'resource', status: 'optimized' },
                { id: 'team-sagar', path: 'team/sagar', label: 'Sagar Thapa', type: 'resource', status: 'optimized' },
                { id: 'team-nanz', path: 'team/nanz', label: 'Nanzin Dolma', type: 'resource', status: 'optimized' },
                { id: 'team-rana', path: 'team/rana', label: 'R.S. Rana', type: 'resource', status: 'optimized' }
              ]
            },
            { 
              id: 'history-page', 
              path: 'history', 
              label: 'History', 
              type: 'page', 
              status: 'optimized',
              meta: { title: 'Our History & Success | NutritionColours', description: 'From a single clinic to a global clinical nutrition platform helping thousands reverse chronic illness.', keywords: ['clinic history', 'company background', 'our journey'] },
              content: { benefits: ['Proven Track Record', 'Global Reach', 'Years of Experience'], features: ['Timeline', 'Milestones', 'Press Features'] }
            }
        ]
    }
  ]
};

// --- HOW IT WORKS ---
export const HOW_IT_WORKS = [
    { icon: 'Search', title: 'Analysis', desc: 'We assess your blood work and lifestyle to find the metabolic root cause.' },
    { icon: 'FileText', title: 'Protocol', desc: 'Receive a personalized food plan aligned with your circadian rhythm.' },
    { icon: 'Leaf', title: 'Healing', desc: 'Eat real food. No starvation. Let your body repair itself naturally.' },
    { icon: 'Check', title: 'Reversal', desc: 'Reduce medication safely under doctor supervision as you heal.' }
];

// --- LEGAL CONTENT ---
export const LEGAL_CONTENT = {
    terms: [
        { heading: "Acceptance of Terms", text: "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. Any participation in this service will constitute acceptance of this agreement." },
        { heading: "Clinical Disclaimer", text: "The information provided is for educational purposes and is not a substitute for professional clinical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition." },
        { heading: "Service Usage", text: "Users agree to provide accurate information for dietary assessments. Misrepresentation of health status is at the user's own risk." },
        { heading: "Intellectual Property", text: "All content, including protocols, recipes, and text, is the property of NutritionColours and protected by copyright laws." }
    ],
    privacy: [
        { heading: "Data Collection", text: "We collect personal information such as name, email, and health data only when voluntarily submitted by our visitors. This information is used as per your request (e.g., creating a nutrition plan)." },
        { heading: "Information Usage", text: "Your personal health data is processed solely for providing clinical advice. We do not sell, trade, or otherwise transfer to outside parties your personally identifiable information." },
        { heading: "Data Security", text: "We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information." },
        { heading: "Cookie Policy", text: "We use cookies to understand and save your preferences for future visits and compile aggregate data about site traffic and site interaction." }
    ],
    'editorial-policy': [
        { heading: "Scientific Rigor", text: "Every article on NutritionColours is written by clinical researchers and reviewed by Dr. Shilpa Thakur (PhD). We cite peer-reviewed studies and clinical trials to ensure our protocols are evidence-based." },
        { heading: "Medical Review Process", text: "Our content undergo a 3-step verification process: (1) Initial research by medical writers, (2) Fact-checking by clinical nutritionists, (3) Final approval by MD/PhD staff." },
        { heading: "Independence", text: "We maintain 100% editorial independence. We do not accept funding from pharmaceutical or food-service corporations that could bias our clinical recommendations." }
    ],
    'evidence-approach': [
        { heading: "The 3 Pillars of Evidence", text: "Our approach balances: (1) Published Clinical Research, (2) Real-world Clinical Outcomes, and (3) Traditional Wisdom (Ayurvedic Foundations) validated by modern science." },
        { heading: "Outcome Data", text: "We track anonymized outcomes from our thousands of patients to refine our clinical protocols, ensuring they are optimized for Indian physiology and lifestyle." }
    ]
};

// --- FAQS ---

export const ABOUT_FAQS: FAQ[] = [
    { question: "What is Circadian Nutrition?", answer: "Circadian Nutrition is the clinical practice of timing food intake with the sun cycle to optimize insulin sensitivity and hormone production. It is a core pillar of the NutritionColours protocol.", category: "Philosophy" },
    { question: "How does 'Food as Medicine' work?", answer: "We treat food as biological information that signals your cells to either store fat or heal. Our medical nutriton protocols focus on using nutrient density to reverse chronic diseases.", category: "Science" },
    { question: "Is NutritionColours purely plant-based?", answer: "Yes, we specialize in high-protein, whole-food plant-based nutrition as the most evidence-backed approach for reversing metabolic conditions.", category: "Diet" },
    { question: "Who is Dr. Shilpa Thakur?", answer: "Dr. Shilpa Thakur is a Ph.D. Medical Nutritionist with over a decade of clinical experience in reversing lifestyle disorders through metabolic nutrition.", category: "Leadership" },
    { question: "Is the 'Circadian Nutrition' protocol scientifically validated?", answer: "Yes, our protocols are based on peer-reviewed research in chronobiology and clinical trials conducted at our own research center.", category: "Science" },
    { question: "What kind of support do I get during the program?", answer: "Patients receive weekly progress reviews, blood work analysis, and 24/7 access to our clinical support team for protocol adjustments.", category: "Support" }
];

export const PLANS_FAQS: FAQ[] = [
    { question: "How long does it take to reverse Diabetes?", answer: "Most patients on our Cellular Resurrection plan see significant improvements in blood markers and glucose stability within 21 to 90 days, depending on their condition.", category: "Timeline" },
    { question: "Does Dr. Shilpa Thakur review every case?", answer: "Yes, Dr. Shilpa Thakur personally oversees the methodology and clinical progression of all Therapeutic and Cellular Resurrection patients.", category: "Oversight" },
    { question: "Will I need to take heavy supplements?", answer: "No. Our methodology focuses on medicinal herbs and kitchen-based superfoods like Turmeric and Ginger to minimize dependency on synthetic supplements.", category: "Protocol" },
    { question: "Can I switch between plans after starting?", answer: "Yes, if your clinical condition changes, we can transition you to a more intensive or maintenance-focused plan after a review.", category: "Enrollment" },
    { question: "What markers do you use to track progress?", answer: "We primarily monitor HbA1c, Fasting Insulin, Lipid Profile, and visceral fat updates to adjust your nutritional protocol.", category: "Clinical" },
    { question: "Is it possible to reverse chronic conditions like fatty liver?", answer: "Absolutely. Our metabolic plans are specifically designed to reduce hepatic fat and restore liver enzymes through targeted plant-based chemistry.", category: "Outcomes" }
];

export const TEAM_FAQS: FAQ[] = [
    { question: "Are the doctors qualified?", answer: "Yes, our team includes PhD nutritionists and medical doctors.", category: "Qualifications" },
    { question: "Can I choose my doctor?", answer: "You will be assigned a specialist based on your condition.", category: "Process" },
    { question: "How do I communicate with my assigned nutritionist?", answer: "Communications happen via our secure client portal and scheduled video consultations.", category: "Communication" },
    { question: "Does the team coordinate with my existing hospital doctor?", answer: "Yes, we are happy to share your nutritional protocols and progress reports with your primary care physician.", category: "Integration" },
    { question: "How often recursively does Dr. Shilpa review my case?", answer: "Dr. Shilpa conducts mid-month and month-end reviews for all intensive care patients.", category: "Oversight" }
];

export const CONTACT_FAQS: FAQ[] = [
    { question: "Where is the clinic?", answer: "Our main center is in Chandigarh, Punjab, India.", category: "Location" },
    { question: "How can I book?", answer: "You can book directly through this website or call us at +91-76961-60133. You can also email us at drthakurshilpa@gmail.com.", category: "Booking" },
    { question: "Do you offer international consultations?", answer: "Yes, we provide virtual clinical services to patients in over 15 countries via video conferencing.", category: "Accessibility" },
    { question: "What are your clinic's working hours?", answer: "We are open Monday to Saturday, 10 AM to 6 PM IST. We are closed on Sundays and National Holidays.", category: "Hours" },
    { question: "How quickly can I expect a response after booking?", answer: "Our triage team generally responds within 4-6 business hours to confirm your first assessment slot.", category: "Timeline" }
];

export const VEGAN_SUB_TOPICS = [
    {
        id: 'recipes',
        title: 'Vegan Recipes',
        subtitle: 'Quick Dinners, Meal Prep & Baking',
        icon: '🥗',
        description: 'Explore culinary creations optimized for cellular healing, biological recovery, and circadian harmony. These whole-food plant-based recipes are designed to be fast, simple, and packed with high-protein substrates.',
        headings: [
            'Quick & Easy Weeknight Vegan Dinners for Busy Schedules',
            'High-Protein Plant-Based Meal Prep Ideas for Muscle Recovery',
            'Decadent Dairy-Free Desserts and Vegan Baking Techniques'
        ],
        faqs: [
            { question: "What is the easiest thing to cook as a vegan?", answer: "The easiest vegan meals are stir-fries, pasta with marinara, and grain bowls. These dishes require minimal prep, use accessible ingredients like tofu, beans, and seasonal vegetables, and can be cooked in under 30 minutes.", category: "Recipes" },
            { question: "How do I meal prep vegan food for the week?", answer: "To meal prep vegan food, batch-cook a base grain (like quinoa or rice), roast a large tray of vegetables, and prepare a plant-based protein (like baked tofu or simmered lentils). Store them separately in airtight containers and mix and match with different vegan sauces throughout the week.", category: "Meal Prep" }
        ]
    },
    {
        id: 'alternatives',
        title: 'Alternatives & Substitutes',
        subtitle: 'Baking Bind, Plant Milks & Grilling Swaps',
        icon: '🥛',
        description: 'Navigate the transition away from animal products with precision. Compare plant milk nutrition and find the absolute best food-science hacks to replace eggs, dairy, and meat in everyday cooking.',
        headings: [
            'The Best Egg Substitutes for Vegan Baking and Cooking',
            'Comparing Plant-Based Milks: Nutritional Profiles and Best Uses',
            'Top Vegan Meat Alternatives for Grilling and Roasting'
        ],
        faqs: [
            { question: "What is the best vegan substitute for eggs in baking?", answer: "The best vegan egg substitute depends on the recipe. For moisture and binding in cakes, use 1/4 cup of applesauce or mashed banana. For light and airy baked goods like macarons, use aquafaba (the liquid from a can of chickpeas). For structuring cookies, use 1 tablespoon of ground flaxseed mixed with 3 tablespoons of water.", category: "Baking" },
            { question: "Which plant-based milk tastes most like dairy milk?", answer: "Soy milk and oat milk taste the closest to dairy milk. Oat milk is naturally creamy and slightly sweet, making it ideal for coffee and cereals, while soy milk has a similar protein content and neutral flavor profile to cow's milk.", category: "Beverages" }
        ]
    },
    {
        id: 'nutrition',
        title: 'Health & Nutrition',
        subtitle: 'Essential Vitamins, Protein & Minerals',
        icon: '🧬',
        description: 'Maximize metabolic performance and cellular uptake. Master supplementation protocols, complete protein profiling, and learn the science of mineral bioavailability.',
        headings: [
            'Essential Vitamins and Supplements for a Balanced Vegan Diet',
            'How to Meet Your Protein Needs on a Plant-Based Diet',
            'Understanding Calcium and Iron Absorption Without Dairy'
        ],
        faqs: [
            { question: "Do vegans need to take B12 supplements?", answer: "Yes, vegans must take a Vitamin B12 supplement or consume B12-fortified foods. Vitamin B12 is produced by bacteria, not plants, and is exclusively found in animal products in nature. A deficiency can lead to neurological issues and anemia.", category: "Supplements" },
            { question: "How can vegans get enough protein daily?", answer: "Vegans can easily meet their protein needs by eating a variety of legumes (lentils, chickpeas, black beans), soy products (tofu, tempeh, edamame), seitan, quinoa, and hemp seeds. Combining different plant protein sources throughout the day ensures a complete amino acid profile.", category: "Protein" }
        ]
    },
    {
        id: 'lifestyle',
        title: 'Lifestyle & Fashion',
        subtitle: 'Cruelty-Free Labels, Cleaners & Fabrics',
        icon: '👗',
        description: 'Extend plant-based principles into your daily surroundings. Decode beauty label certifications, discover next-generation bio-fabrics, and construct non-toxic cleaning routines.',
        headings: [
            'Navigating Cruelty-Free Beauty Labels and Certifications',
            'Sustainable Vegan Fabrics: Moving Beyond Pleather',
            'Building a Cruelty-Free and Non-Toxic Home Cleaning Routine'
        ],
        faqs: [
            { question: "What is the difference between cruelty-free and vegan beauty products?", answer: "Cruelty-free means a product and its ingredients were not tested on animals. Vegan means the product does not contain any animal-derived ingredients (like beeswax, carmine, or lanolin). A product can be cruelty-free but not vegan, and vice versa.", category: "Beauty" },
            { question: "What are the best sustainable vegan fabrics?", answer: "The best sustainable vegan fabrics include organic cotton, linen (made from flax), hemp, Tencel/Lyocell (made from sustainably sourced wood pulp), and recycled polyester. These materials avoid the environmental harm of synthetic plastic-based 'vegan leather' (PU).", category: "Fashion" }
        ]
    },
    {
        id: 'travel',
        title: 'Dining & Travel',
        subtitle: 'Restaurant Apps, Fast Food & Travel Guides',
        icon: '✈️',
        description: 'Travel and dine with confidence anywhere in the world. Master ordering scripts, map global vegan-friendly hubs, and discover hidden plant-based fast food menu options.',
        headings: [
            'How to Find Vegan-Friendly Restaurants Using Apps and Local Resources',
            'Navigating Fast Food Menus as a Vegan',
            'Top Global Cities Every Vegan Traveler Should Visit'
        ],
        faqs: [
            { question: "What can vegans eat at fast-food restaurants?", answer: "Vegans can eat French fries (if cooked in vegetable oil), bean burritos without cheese (like at Taco Bell), and vegetable-heavy sushi rolls. Many major chains now offer dedicated plant-based burgers (like the Impossible Whopper at Burger King, ordered without mayo).", category: "Dining" },
            { question: "How do I ask for vegan food in a non-vegan restaurant?", answer: "When dining at a non-vegan restaurant, ask the server directly: 'I eat a strict plant-based diet with no meat, dairy, eggs, or honey. Can the chef prepare a vegetable pasta with olive oil, or a salad without cheese?' Reviewing the menu for naturally vegetable-heavy dishes first makes it easier for the kitchen to accommodate.", category: "Dining Out" }
        ]
    },
    {
        id: 'beginners',
        title: 'Beginner Guides',
        subtitle: 'Pantry Staples, 30-Day Guide & Cravings',
        icon: '🌱',
        description: 'Simplify your transition to plant-based living. Set up your organic pantry, follow a structured 30-day plan, and discover metabolic hacks to shut down common cravings.',
        headings: [
            'The Essential Vegan Pantry Staple Checklist',
            'Transitioning to a Plant-Based Diet: A 30-Day Step-by-Step Guide',
            'Overcoming Common Cravings When Going Vegan'
        ],
        faqs: [
            { question: "How long does it take to transition to a vegan diet?", answer: "It typically takes 21 to 30 days to adjust to a vegan diet. Transitioning gradually—such as replacing dairy milk with plant milk first, then eliminating meat—helps the digestive system adapt to higher fiber intake and makes the lifestyle change more sustainable.", category: "Transition" },
            { question: "Is being vegan expensive?", answer: "No, being vegan is generally cheaper than an omnivorous diet if you base your meals on whole foods. Staples like beans, lentils, rice, oats, and seasonal vegetables are the cheapest foods in the world. Veganism becomes expensive when relying heavily on processed fake meats and specialty vegan cheeses.", category: "Cost" }
        ]
    },
    {
        id: 'reviews',
        title: 'Product Reviews',
        subtitle: 'Protein Powders, Meal Delivery & Gadgets',
        icon: '🛍️',
        description: 'Save time and money with clinical evaluations of vegan products. Read unbiased reviews of plant-based protein powders, meal kits, and essential kitchen tooling.',
        headings: [
            'Taste-Testing the Best Vegan Protein Powders on the Market',
            'Are Plant-Based Meal Delivery Services Worth the Cost?',
            'The Best Kitchen Gadgets to Simplify Vegan Cooking'
        ],
        faqs: [
            { question: "What is the best-tasting vegan protein powder?", answer: "Based on consistent taste tests, pea-protein isolate blends (like Vega or Orgain) are the best-tasting vegan protein powders because they mix smoothly and have a neutral flavor that absorbs fruits and sweeteners well in smoothies.", category: "Reviews" },
            { question: "Which vegan meal delivery service is the most affordable?", answer: "Factor's Plant-Based meals and Daily Harvest are frequently cited as cost-effective options for prepared vegan meals. For meal kits, HelloFresh and Green Chef offer affordable plant-based tiers, though pricing varies based on weekly promotions and serving sizes.", category: "Services" }
        ]
    },
    {
        id: 'news',
        title: 'News & Activism',
        subtitle: 'Environmental Impact, Community & Food Tech',
        icon: '📰',
        description: 'Stay updated on the plant-based transition worldwide. Understand the environmental footprint of livestock, get involved in advocacy, and track food-tech advances like cell-cultured meat.',
        headings: [
            'The Environmental Impact of Animal Agriculture Explained',
            'How to Advocate for Plant-Based Options in Your Community',
            'Breakthroughs in Cultured Meat and Plant-Based Food Tech'
        ],
        faqs: [
            { question: "How does animal agriculture affect climate change?", answer: "Animal agriculture contributes to climate change by producing significant greenhouse gases, primarily methane from cows and sheep, and nitrous oxide from manure. It accounts for roughly 14.5% of global greenhouse gas emissions and is a leading cause of deforestation and water pollution.", category: "Environment" },
            { question: "What is the difference between animal rights and animal welfare?", answer: "Animal welfare advocates for the humane treatment and reduction of suffering for animals used by humans, whereas animal rights is the philosophical stance that animals have inherent rights (like freedom from being used for food, clothing, or experimentation) and should not be treated as human property.", category: "Ethics" }
        ]
    }
];

export const VEGAN_FAQS: FAQ[] = [
    { question: "Is vegan healthy?", answer: "A planned whole-food vegan diet is excellent for disease reversal.", category: "Health" },
    { question: "What about protein?", answer: "Plants like lentils, beans, and tofu provide ample protein.", category: "Nutrition" },
    { question: "How do I transition to a vegan diet if I'm currently eating dairy?", answer: "We recommend a phased approach, starting with plant-based milks and slowly introducing more legume-based proteins.", category: "Process" },
    { question: "Are vegan diets safe for pregnant women and seniors?", answer: "Yes, when appropriately planned, plant-based diets meet the nutritional needs of all life stages, including pregnancy.", category: "Safety" },
    { question: "What are common mistakes when going plant-based?", answer: "Relying on processed 'vegan' junk food instead of whole vegetables, fruits, and grains is the most common pitfall.", category: "Tips" }
];

export const RECIPES_FAQS: FAQ[] = [
    { question: "Are ingredients easy to find?", answer: "Yes, we use common local ingredients.", category: "Cooking" },
    { question: "Are they gluten-free?", answer: "Most recipes are naturally gluten-free or offer alternatives.", category: "Dietary" },
    { question: "Do I need special kitchen equipment?", answer: "Most recipes only require basic tools like a blender and a good quality pot. We avoid complex gadgets.", category: "Kitchen" },
    { question: "Are the recipes kid-friendly?", answer: "Yes, many protocols include family-friendly versions of traditional dishes modified for health.", category: "Family" },
    { question: "How are the nutritional values calculated?", answer: "Values are based on standard clinical databases and adjusted for our specific whole-food preparation methods.", category: "Science" }
];

export const TOOLS_FAQS: FAQ[] = [
    { question: "How accurate are these tools?", answer: "They provide clinical estimates based on standard formula. For formal diagnosis, always consult our team.", category: "Accuracy" },
    { question: "Is my data saved?", answer: "No, your inputs in our health calculators are processed client-side and not stored on our servers.", category: "Privacy" },
    { question: "Which tool should I start with?", answer: "We recommend starting with the BMI and Protein calculator to understand your baseline metabolic needs.", category: "Guide" },
    { question: "Are there more advanced tools after joining?", answer: "Yes, enrolled patients get access to our CGM (Continuous Glucose Monitor) tracker and circadian log.", category: "Programs" },
    { question: "Can I share these results with my doctor?", answer: "Yes, you can screenshot or print the results to discuss with your primary healthcare provider.", category: "Medical" }
];

export const TESTIMONIALS_FAQS: FAQ[] = [
    { question: "Are these real results?", answer: "Yes, these are verified results from our clinical programs.", category: "Verification" },
    { question: "Can I speak with a former patient?", answer: "We respect patient privacy. However, we have a community group where members share their ongoing journeys.", category: "Community" },
    { question: "Are these results typical?", answer: "While results vary based on adherence, over 85% of our patients see clinical improvements within 3 months.", category: "Expectations" },
    { question: "How long do the results last?", answer: "Since we focus on metabolic fixing and education, the results are sustainable for life if you maintain the protocol.", category: "Duration" }
];

export const MAINTENANCE_FAQS: FAQ[] = [
    { question: "Why is the system slow?", answer: "We might be running maintenance. Please check back shortly.", category: "Performance" },
    { question: "Is the site accessible on mobile?", answer: "Yes, our entire clinical platform is optimized for seamless use on smartphones and tablets.", category: "Device" },
    { question: "How do I report a bug?", answer: "You can email our tech support at tech@nutritioncolours.com with a description of the issue.", category: "Support" },
    { question: "Where is my old protocol log?", answer: "If you were an offline patient before 2020, please contact us to migrate your records to the digital portal.", category: "Patient Records" }
];

export const HOME_FAQS: FAQ[] = [
    { question: "What makes NutritionColours different?", answer: "We combine clinical blood-work analysis with Circadian Nutrition to fix the metabolic root cause, not just symptoms.", category: "Uniqueness" },
    { question: "Do I need to visit the clinic in person?", answer: "While we have a center in Chandigarh, 90% of our programs are successfully delivered globally via our digital platform.", category: "Accessibility" },
    { question: "Is the program suitable for non-vegetarians?", answer: "While we advocate for high-protein plant-based diets for reversal, we provide a structured transition for everyone.", category: "Diet" }
];

export const KNOWLEDGE_FAQS: FAQ[] = [
    { question: "How is the Health Topic library curated?", answer: "Every topic is researched by clinical staff and reviewed by Dr. Shilpa Thakur to ensure scientific accuracy.", category: "Editorial" },
    { question: "Are these protocols a replacement for medicine?", answer: "They are designed to help you HEAL so that your doctor can safely reduce or stop your medication.", category: "Medical" },
    { question: "Can I suggest a new health topic?", answer: "Yes, we welcome suggestions for topics you'd like to see covered from a metabolic perspective.", category: "Community" }
];

export const BLOGS_FAQS: FAQ[] = [
    { question: "How often are new articles published?", answer: "We publish deep-dive clinical analysis twice a month focusing on new metabolic research.", category: "Frequency" },
    { question: "Are the articles peer-reviewed?", answer: "Our articles cite peer-reviewed studies and are internally reviewed for clinical validity.", category: "Rigor" },
    { question: "Can I use these articles for my own research?", answer: "Yes, you are welcome to cite our analysis with proper attribution to NutritionColours.", category: "Legal" }
];

// --- FALLBACK CATEGORY FAQS (Auto-Healing Content) ---
export const CATEGORY_FAQS: Record<string, FAQ[]> = {
  [CategoryType.METABOLIC]: [
    { question: "How fast will I see results?", answer: "Most patients see significant improvements in blood sugar within 21 days.", category: "Timeline" },
    { question: "Do I need supplements?", answer: "We prioritize food. Supplements are only used if severe deficiencies are found in blood work.", category: "Protocol" }
  ],
  [CategoryType.WOMENS]: [
    { question: "Can diet balance hormones?", answer: "Yes. Hormones are made from fats and proteins. Your diet directly impacts their production.", category: "Science" },
    { question: "Is this safe if I'm trying to conceive?", answer: "Absolutely. A nutrient-dense diet improves egg quality and fertility.", category: "Fertility" }
  ],
  [CategoryType.DIGESTION]: [
    { question: "Will this fix my bloating?", answer: "Yes. By removing inflammatory triggers and improving gut flora, bloating usually resolves in 1-2 weeks.", category: "Results" },
    { question: "Do I need probiotics?", answer: "We recommend natural probiotics like homemade curd or kanji water over pills.", category: "Diet" }
  ],
  [CategoryType.CARDIO]: [
    { question: "Can I stop BP meds?", answer: "Never stop meds without doctor supervision. As your BP naturally drops, your doctor will reduce the dose.", category: "Medical" },
    { question: "Is salt allowed?", answer: "We switch to mineral-rich salts like Pink Salt instead of refined white salt.", category: "Diet" }
  ],
  [CategoryType.APPEARANCE]: [
    { question: "Will my acne clear up?", answer: "Acne is often gut inflammation. Healing the gut clears the skin.", category: "Skin" },
    { question: "Does diet affect hair?", answer: "Yes. Protein and iron deficiencies are the top causes of hair fall.", category: "Hair" }
  ],
  [CategoryType.COGNITIVE]: [
    { question: "What foods help memory?", answer: "Omega-3 rich foods like walnuts and flaxseeds are crucial for brain health.", category: "Nutrition" },
    { question: "Does sugar cause anxiety?", answer: "Yes. Blood sugar crashes trigger cortisol (stress hormone), mimicking anxiety.", category: "Science" }
  ],
  [CategoryType.JOINTS]: [
    { question: "Can food reduce pain?", answer: "Anti-inflammatory foods like turmeric and ginger can significantly reduce joint pain.", category: "Pain Relief" }
  ],
  [CategoryType.IMMUNITY]: [
    { question: "How to boost immunity?", answer: "Gut health is 70% of immunity. We focus on prebiotics and vitamin C rich foods.", category: "Immunity" }
  ],
  [CategoryType.RESPIRATORY]: [
    { question: "Are dairy products allowed?", answer: "For respiratory issues, we often remove dairy as it can be mucus-forming.", category: "Diet" }
  ],
  [CategoryType.DETOX]: [
    { question: "Is this a juice cleanse?", answer: "No. We believe in eating whole foods. Your liver detoxes you, we just support your liver.", category: "Method" }
  ],
  [CategoryType.WEIGHT]: [
    { question: "Will I gain weight back?", answer: "No. Because we fix your metabolism, not just cut calories. You learn to eat for life.", category: "Long Term" }
  ],
  [CategoryType.KIDS]: [
    { question: "Is it safe for children?", answer: "Yes. Our plans for kids focus on whole foods and removing processed sugar, which is safe for everyone.", category: "Safety" }
  ]
};

export const TOPIC_SPECIFIC_FAQS: Record<string, FAQ[]> = {
    'diabetes-reversal': [
        { question: "Can I eat fruit?", answer: "Yes, whole fruits are allowed in moderation.", category: "Diet" }
    ],
    'thyroid': [
        { question: "Is soy bad for thyroid?", answer: "Fermented soy is usually fine, but consult your doctor.", category: "Diet" }
    ],
    'hypertension': [
        { question: "Do I need to stop salt?", answer: "Reduce refined salt, but some sodium is necessary.", category: "Diet" }
    ]
};

export const RECIPE_SPECIFIC_FAQS: Record<string, FAQ[]> = {
    'moong-dal-chilla': [
        { question: "Can I prep batter ahead?", answer: "Yes, keep it in the fridge for up to 2 days.", category: "Prep" }
    ]
};

