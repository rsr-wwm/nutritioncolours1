
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
    ],
    'golden-turmeric-quinoa': [
            {
                question: "What is Golden Turmeric Quinoa Nourish Bowl?",
                answer: "The Anti-Inflammatory Powerhouse for Mindful Eating.",
                category: "Overview"
            },
            {
                question: "What makes Golden Turmeric Quinoa Nourish Bowl a therapeutic recipe?",
                answer: "This warm, sun-colored bowl is a grounding ritual, perfect for nourishing the body during mindful lunches or light dinners. It masterfully blends the nutty texture of quinoa with the vibrant, earthy warmth of turmeric and a medley of nourishing vegetables.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Golden Turmeric Quinoa Nourish Bowl?",
                answer: "The primary benefit of Golden Turmeric Quinoa Nourish Bowl is Anti-inflammatory Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Golden Turmeric Quinoa Nourish Bowl take to prepare?",
                answer: "Golden Turmeric Quinoa Nourish Bowl takes 25 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Golden Turmeric Quinoa Nourish Bowl have?",
                answer: "Golden Turmeric Quinoa Nourish Bowl contains approximately 420 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Golden Turmeric Quinoa Nourish Bowl?",
                answer: "Golden Turmeric Quinoa Nourish Bowl is tagged as: Anti-inflammatory, Metabolic, Vegan.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Golden Turmeric Quinoa Nourish Bowl?",
                answer: "Quinoa (1 cup cooked), Turmeric (1 tsp ground), Cauliflower (1 cup roasted), Chickpeas (1/2 cup cooked), Tahini (2 tbsp), Lemon (1/2 juiced)",
                category: "Ingredients"
            },
            {
                question: "Who created the Golden Turmeric Quinoa Nourish Bowl recipe?",
                answer: "Golden Turmeric Quinoa Nourish Bowl was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Quinoa in Golden Turmeric Quinoa Nourish Bowl?",
                answer: "A gluten-free pseudo-cereal, quinoa is a complete protein, offering all nine essential amino acids. Its high fiber content supports sustained energy and digestive regularity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Turmeric in Golden Turmeric Quinoa Nourish Bowl?",
                answer: "The star of this bowl is curcumin, the active compound in turmeric, celebrated for powerful anti-inflammatory properties. Combining it with healthy fat (like tahini) enhances absorption.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Roasted Cauliflower & Chickpeas in Golden Turmeric Quinoa Nourish Bowl?",
                answer: "These provide essential dietary fiber and a wealth of vitamins and minerals. Chickpeas boost plant protein, while cauliflower adds natural sweetness.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Lemon & Tahini Drizzle in Golden Turmeric Quinoa Nourish Bowl?",
                answer: "Provides necessary healthy fats and a burst of Vitamin C, crucial for immune and skin health.",
                category: "Ingredient Benefits"
            }
        ],
    'avocado-lentil-tartare': [
            {
                question: "What is Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Gourmet Wellness: A Gentle Dish for Heart and Metabolic Wellness.",
                category: "Overview"
            },
            {
                question: "What makes Avocado & Sprouted Lentil Herb Tartare a therapeutic recipe?",
                answer: "Elevate your clean eating with this sophisticated tartare. The buttery, creamy texture of fresh avocado is perfectly contrasted with the tender bite of sprouted lentils.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Avocado & Sprouted Lentil Herb Tartare?",
                answer: "The primary benefit of Avocado & Sprouted Lentil Herb Tartare is Heart and Metabolic Wellness.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Avocado & Sprouted Lentil Herb Tartare take to prepare?",
                answer: "Avocado & Sprouted Lentil Herb Tartare takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Avocado & Sprouted Lentil Herb Tartare have?",
                answer: "Avocado & Sprouted Lentil Herb Tartare contains approximately 350 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Avocado & Sprouted Lentil Herb Tartare is tagged as: Heart Health, Metabolic, Gourmet.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Avocado (1 ripe, diced), Sprouted Lentils (1/2 cup), Parsley (2 tbsp fresh), Capers (1 tsp), Olive Oil (1 tbsp cold-pressed)",
                category: "Ingredients"
            },
            {
                question: "Who created the Avocado & Sprouted Lentil Herb Tartare recipe?",
                answer: "Avocado & Sprouted Lentil Herb Tartare was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Avocado in Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Rich in monounsaturated fats (like oleic acid), avocados promote heart health and provide essential vitamins (K, C, E).",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Sprouted Lentils in Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Sprouting increases bioavailability, making nutrients easier to absorb. They are a powerhouse of plant protein and iron.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Parsley & Capers in Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Fresh parsley contributes Vitamin K and antioxidants, while capers add briny depth and polyphenols.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Cold-Pressed Olive Oil in Avocado & Sprouted Lentil Herb Tartare?",
                answer: "Provides anti-inflammatory monounsaturated fats and acts as a medium for absorbing fat-soluble vitamins.",
                category: "Ingredient Benefits"
            }
        ],
    'green-vitality-soup': [
            {
                question: "What is Moringa & Spinach Green Vitality Soup?",
                answer: "The Chlorophyll-Rich Elixir for Immunity and Cellular Nourishment.",
                category: "Overview"
            },
            {
                question: "What makes Moringa & Spinach Green Vitality Soup a therapeutic recipe?",
                answer: "This silky, emerald-green soup is a powerful infusion of plant chlorophyll, traditionally valued for its deeply nourishing and renewal properties.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Moringa & Spinach Green Vitality Soup?",
                answer: "The primary benefit of Moringa & Spinach Green Vitality Soup is Immunity and Cellular Nourishment.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Moringa & Spinach Green Vitality Soup take to prepare?",
                answer: "Moringa & Spinach Green Vitality Soup takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Moringa & Spinach Green Vitality Soup have?",
                answer: "Moringa & Spinach Green Vitality Soup contains approximately 180 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Moringa & Spinach Green Vitality Soup?",
                answer: "Moringa & Spinach Green Vitality Soup is tagged as: Immunity, Cellular Health, Chlorophyll.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Moringa & Spinach Green Vitality Soup?",
                answer: "Spinach (2 cups fresh), Moringa Powder (1 tsp), Leek (1 medium), Garlic (2 cloves), Almond Milk (1/2 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Moringa & Spinach Green Vitality Soup recipe?",
                answer: "Moringa & Spinach Green Vitality Soup was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Spinach in Moringa & Spinach Green Vitality Soup?",
                answer: "A classic superfood providing high levels of Vitamin A, C, and Folate. It supports red blood cell production and general vitality.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Moringa Powder in Moringa & Spinach Green Vitality Soup?",
                answer: "One of the most nutrient-dense plants on earth. Supports the body\u2019s natural defense systems and cellular health.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Leek & Garlic in Moringa & Spinach Green Vitality Soup?",
                answer: "Alliums contain sulfur compounds important for detoxification and immune function.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Almond Milk in Moringa & Spinach Green Vitality Soup?",
                answer: "A dairy-free base that adds delicate creaminess while keeping the soup light and easy to digest.",
                category: "Ingredient Benefits"
            }
        ],
    'beetroot-walnut-carpaccio': [
            {
                question: "What is Roasted Beetroot & Walnut Carpaccio?",
                answer: "The Earthy Gem for Circulatory & Heart Health.",
                category: "Overview"
            },
            {
                question: "What makes Roasted Beetroot & Walnut Carpaccio a therapeutic recipe?",
                answer: "Thinly sliced, roasted beets offer grounding energy, balanced by peppery arugula and rich walnuts. Designed to support a strong circulatory system.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Roasted Beetroot & Walnut Carpaccio?",
                answer: "The primary benefit of Roasted Beetroot & Walnut Carpaccio is Circulatory and Heart Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Roasted Beetroot & Walnut Carpaccio take to prepare?",
                answer: "Roasted Beetroot & Walnut Carpaccio takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Roasted Beetroot & Walnut Carpaccio have?",
                answer: "Roasted Beetroot & Walnut Carpaccio contains approximately 280 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Roasted Beetroot & Walnut Carpaccio?",
                answer: "Roasted Beetroot & Walnut Carpaccio is tagged as: Circulatory, Heart Health, Gourmet.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Roasted Beetroot & Walnut Carpaccio?",
                answer: "Beetroot (2 roasted, sliced), Walnuts (1/4 cup toasted), Arugula (1 cup fresh), Balsamic Reduction (1 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Roasted Beetroot & Walnut Carpaccio recipe?",
                answer: "Roasted Beetroot & Walnut Carpaccio was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Beetroot in Roasted Beetroot & Walnut Carpaccio?",
                answer: "Famous for high concentration of dietary nitrates, which convert to nitric oxide to relax blood vessels and support healthy blood pressure.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Walnuts in Roasted Beetroot & Walnut Carpaccio?",
                answer: "Richest nut source of plant-based omega-3 fatty acids (ALA), critical for reducing inflammation and promoting cardiovascular health.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Arugula in Roasted Beetroot & Walnut Carpaccio?",
                answer: "Peppery green rich in Vitamin K with compounds that support natural detoxification.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Balsamic Reduction in Roasted Beetroot & Walnut Carpaccio?",
                answer: "Provides a sophisticated tang and is traditionally valued for digestive properties.",
                category: "Ingredient Benefits"
            }
        ],
    'ayurvedic-millet-stew': [
            {
                question: "What is Ayurvedic Kitchari-Style Millet Stew?",
                answer: "The Comforting One-Pot Meal for Gut Balance and Digestive Ease.",
                category: "Overview"
            },
            {
                question: "What makes Ayurvedic Kitchari-Style Millet Stew a therapeutic recipe?",
                answer: "Inspired by ancient Ayurvedic tradition, this restorative meal promote lightness and digestive harmony, helping rebalance the digestive fire (Agni).",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Ayurvedic Kitchari-Style Millet Stew?",
                answer: "The primary benefit of Ayurvedic Kitchari-Style Millet Stew is Gut Balance and Digestive Ease.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Ayurvedic Kitchari-Style Millet Stew take to prepare?",
                answer: "Ayurvedic Kitchari-Style Millet Stew takes 30 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Ayurvedic Kitchari-Style Millet Stew have?",
                answer: "Ayurvedic Kitchari-Style Millet Stew contains approximately 300 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Ayurvedic Kitchari-Style Millet Stew?",
                answer: "Ayurvedic Kitchari-Style Millet Stew is tagged as: Gut Health, Digestion, Ayurveda.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Ayurvedic Kitchari-Style Millet Stew?",
                answer: "Millet (1/2 cup), Mung Dal (1/2 cup), Ginger (1 inch fresh), Cumin (1 tsp), Coriander (1 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Ayurvedic Kitchari-Style Millet Stew recipe?",
                answer: "Ayurvedic Kitchari-Style Millet Stew was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Millet in Ayurvedic Kitchari-Style Millet Stew?",
                answer: "Naturally gluten-free and alkaline-forming, helping balance pH. Rich in magnesium and phosphorus.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Mung Dal in Ayurvedic Kitchari-Style Millet Stew?",
                answer: "Highly prized in Ayurveda for being easy to digest while providing plant protein and soluble fiber.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ginger, Cumin, & Coriander in Ayurvedic Kitchari-Style Millet Stew?",
                answer: "Ginger stimulates digestion, cumin reduces bloating, and coriander has cooling properties for a harmonizing effect.",
                category: "Ingredient Benefits"
            }
        ],
    'kimchi-rice-bowl': [
            {
                question: "What is Fermented Kimchi Brown Rice Bowl?",
                answer: "A Modern Gut-as-Medicine Bowl for Microbiome Support.",
                category: "Overview"
            },
            {
                question: "What makes Fermented Kimchi Brown Rice Bowl a therapeutic recipe?",
                answer: "Combines fermented foods and whole grains to support gut microbiome diversity and daily vitality.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Fermented Kimchi Brown Rice Bowl?",
                answer: "The primary benefit of Fermented Kimchi Brown Rice Bowl is Gut Microbiome Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Fermented Kimchi Brown Rice Bowl take to prepare?",
                answer: "Fermented Kimchi Brown Rice Bowl takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Fermented Kimchi Brown Rice Bowl have?",
                answer: "Fermented Kimchi Brown Rice Bowl contains approximately 320 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Fermented Kimchi Brown Rice Bowl?",
                answer: "Fermented Kimchi Brown Rice Bowl is tagged as: Gut Health, Probiotics, Metabolic.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Fermented Kimchi Brown Rice Bowl?",
                answer: "Brown Rice (1 cup cooked), Vegan Kimchi (1/2 cup), Cucumber (1/2 sliced), Sesame Seeds (1 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Fermented Kimchi Brown Rice Bowl recipe?",
                answer: "Fermented Kimchi Brown Rice Bowl was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Vegan Kimchi in Fermented Kimchi Brown Rice Bowl?",
                answer: "A fermentation powerhouse providing prebiotics and live probiotics vital for gut flora, mood, and immunity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Brown Rice in Fermented Kimchi Brown Rice Bowl?",
                answer: "Provides slow-releasing energy and fiber that acts as a prebiotic, feeding beneficial bacteria.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Cucumber & Sesame Seeds in Fermented Kimchi Brown Rice Bowl?",
                answer: "Cucumber adds cooling hydration, while sesame seeds provide healthy fats and essential minerals.",
                category: "Ingredient Benefits"
            }
        ],
    'ashwagandha-sweet-potato': [
            {
                question: "What is Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "The Grounding Comfort Dish for Nervous System Balance.",
                category: "Overview"
            },
            {
                question: "What makes Sweet Potato & Ashwagandha Coconut Mash a therapeutic recipe?",
                answer: "Naturally sweet and grounding, this vibrant mash incorporates ashwagandha to support stress resilience and calm the nervous system.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "The primary benefit of Sweet Potato & Ashwagandha Coconut Mash is Nervous System Balance.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Sweet Potato & Ashwagandha Coconut Mash take to prepare?",
                answer: "Sweet Potato & Ashwagandha Coconut Mash takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Sweet Potato & Ashwagandha Coconut Mash have?",
                answer: "Sweet Potato & Ashwagandha Coconut Mash contains approximately 240 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "Sweet Potato & Ashwagandha Coconut Mash is tagged as: Nervous System, Stress Relief, Adaptogen.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "Sweet Potato (2 large, mashed), Coconut Milk (1/4 cup), Ashwagandha Powder (1/2 tsp), Nutmeg (pinch)",
                category: "Ingredients"
            },
            {
                question: "Who created the Sweet Potato & Ashwagandha Coconut Mash recipe?",
                answer: "Sweet Potato & Ashwagandha Coconut Mash was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Sweet Potato in Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "Excellent complex carbs and fiber. Rich in beta-carotene for skin and immune support.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ashwagandha Powder in Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "Celebrated herb that helps the body manage stress and supports nervous system balance.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Coconut Milk in Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "Adds creamy texture and provides MCTs, fats easily utilized for energy.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Nutmeg in Sweet Potato & Ashwagandha Coconut Mash?",
                answer: "A warming spice traditionally used to support sleep and calm the mind.",
                category: "Ingredient Benefits"
            }
        ],
    'papaya-detox-salad': [
            {
                question: "What is Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Light, Crisp, and Refreshing: The Ultimate Digestive Freshness Ritual.",
                category: "Overview"
            },
            {
                question: "What makes Rainbow Raw Papaya & Lime Detox Salad a therapeutic recipe?",
                answer: "Celebrates raw plant foods and the enzymes found in green papaya. Associated with cleansing rituals and digestive ease.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "The primary benefit of Rainbow Raw Papaya & Lime Detox Salad is Digestive Freshness.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Rainbow Raw Papaya & Lime Detox Salad take to prepare?",
                answer: "Rainbow Raw Papaya & Lime Detox Salad takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Rainbow Raw Papaya & Lime Detox Salad have?",
                answer: "Rainbow Raw Papaya & Lime Detox Salad contains approximately 120 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Rainbow Raw Papaya & Lime Detox Salad is tagged as: Detox, Digestion, Enzymes.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Green Papaya (2 cups shredded), Carrot (1 shredded), Lime Juice (2 tbsp), Mint (1/4 cup fresh), Peanuts (1 tbsp crushed)",
                category: "Ingredients"
            },
            {
                question: "Who created the Rainbow Raw Papaya & Lime Detox Salad recipe?",
                answer: "Rainbow Raw Papaya & Lime Detox Salad was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Green Papaya in Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Contains papain, a powerful enzyme that aids in breaking down proteins, supporting digestive efficiency.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Carrot in Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Rich in beta-carotene and fiber for satisfying crunch and cellular health.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Lime Juice & Mint in Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Refreshing, alkalizing base that stimulates bile flow and supports liver function.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Peanuts in Rainbow Raw Papaya & Lime Detox Salad?",
                answer: "Source of plant protein and healthy fats for texture and satiety.",
                category: "Ingredient Benefits"
            }
        ],
    'hemp-basil-zoodles': [
            {
                question: "What is Hemp Seed & Basil Cream Zoodles?",
                answer: "A Dairy-Free Gourmet Pasta Alternative for Plant-Based Protein & Skin Nourishment.",
                category: "Overview"
            },
            {
                question: "What makes Hemp Seed & Basil Cream Zoodles a therapeutic recipe?",
                answer: "Low-carb and exceptionally hydrating pasta alternative. The hemp sauce is rich in essential fatty acids for radiant skin.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Hemp Seed & Basil Cream Zoodles?",
                answer: "The primary benefit of Hemp Seed & Basil Cream Zoodles is Plant-based Protein & Skin Nourishment.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Hemp Seed & Basil Cream Zoodles take to prepare?",
                answer: "Hemp Seed & Basil Cream Zoodles takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Hemp Seed & Basil Cream Zoodles have?",
                answer: "Hemp Seed & Basil Cream Zoodles contains approximately 280 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Hemp Seed & Basil Cream Zoodles?",
                answer: "Hemp Seed & Basil Cream Zoodles is tagged as: Protein, Skin Health, Low Carb.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Hemp Seed & Basil Cream Zoodles?",
                answer: "Zucchini Noodles (2 medium zucchini), Hemp Seeds (1/2 cup), Basil (1 cup fresh), Garlic (2 cloves)",
                category: "Ingredients"
            },
            {
                question: "Who created the Hemp Seed & Basil Cream Zoodles recipe?",
                answer: "Hemp Seed & Basil Cream Zoodles was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Zucchini Noodles in Hemp Seed & Basil Cream Zoodles?",
                answer: "Incredibly hydrating and rich in antioxidants like Vitamin C and lutein.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Hemp Seeds in Hemp Seed & Basil Cream Zoodles?",
                answer: "Complete plant protein with ideal Omega-6 to Omega-3 ratio for reducing inflammation and skin health.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Fresh Basil in Hemp Seed & Basil Cream Zoodles?",
                answer: "Aromatic flavor high in Vitamin K and antioxidants.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Garlic in Hemp Seed & Basil Cream Zoodles?",
                answer: "Contains allicin, a compound with traditional immune-supportive properties.",
                category: "Ingredient Benefits"
            }
        ],
    'mushroom-thyme-broth': [
            {
                question: "What is Mushroom & Thyme Healing Broth?",
                answer: "An Umami-Rich Elixir for Immune Resilience.",
                category: "Overview"
            },
            {
                question: "What makes Mushroom & Thyme Healing Broth a therapeutic recipe?",
                answer: "An earthy, savory broth designed for grounding evenings. Focuses on immune-supportive power of mushrooms and aromatic thyme.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Mushroom & Thyme Healing Broth?",
                answer: "The primary benefit of Mushroom & Thyme Healing Broth is Immune Resilience.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Mushroom & Thyme Healing Broth take to prepare?",
                answer: "Mushroom & Thyme Healing Broth takes 40 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Mushroom & Thyme Healing Broth have?",
                answer: "Mushroom & Thyme Healing Broth contains approximately 150 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Mushroom & Thyme Healing Broth?",
                answer: "Mushroom & Thyme Healing Broth is tagged as: Immunity, Immune Resilience, Umami.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Mushroom & Thyme Healing Broth?",
                answer: "Shiitake Mushrooms (2 cups), Thyme (4 sprigs), Onion (1 large), Sea Vegetables (1/2 sheet)",
                category: "Ingredients"
            },
            {
                question: "Who created the Mushroom & Thyme Healing Broth recipe?",
                answer: "Mushroom & Thyme Healing Broth was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Shiitake Mushrooms in Mushroom & Thyme Healing Broth?",
                answer: "A functional food known to modulate the immune system and enhance natural defense mechanisms.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Thyme in Mushroom & Thyme Healing Broth?",
                answer: "Aromatic herb rich in volatile oils like thymol, used for respiratory and immune support.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Onion & Garlic in Mushroom & Thyme Healing Broth?",
                answer: "Alliums release powerful sulfur compounds during cooking, enhancing flavor and wellness.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Sea Vegetables in Mushroom & Thyme Healing Broth?",
                answer: "Introduces essential trace minerals, particularly iodine, for systemic health.",
                category: "Ingredient Benefits"
            }
        ],
    'charred-broccoli-almonds': [
            {
                question: "What is Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Simple Yet Refined: Detox-Friendly Nourishment.",
                category: "Overview"
            },
            {
                question: "What makes Charred Broccoli with Lemon Almond Drizzle a therapeutic recipe?",
                answer: "Showcases cruciferous vegetables in a detox-friendly form, focusing on nutrient density and healthy fats to support liver detoxification.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Charred Broccoli with Lemon Almond Drizzle?",
                answer: "The primary benefit of Charred Broccoli with Lemon Almond Drizzle is Detox-Friendly Nourishment.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Charred Broccoli with Lemon Almond Drizzle take to prepare?",
                answer: "Charred Broccoli with Lemon Almond Drizzle takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Charred Broccoli with Lemon Almond Drizzle have?",
                answer: "Charred Broccoli with Lemon Almond Drizzle contains approximately 190 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Charred Broccoli with Lemon Almond Drizzle is tagged as: Detox, Liver Health, Sulfur.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Broccoli (1 large head), Almonds (1/4 cup), Lemon (1 juiced), Olive Oil (2 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Charred Broccoli with Lemon Almond Drizzle recipe?",
                answer: "Charred Broccoli with Lemon Almond Drizzle was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Broccoli in Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Packed with glucosinolates that convert to sulforaphane, supporting the liver's Phase II detoxification pathways.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Almonds in Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Provides Vitamin E antioxidant and magnesium essential for 300+ biochemical reactions.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Lemon Zest & Juice in Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Bright, alkalizing element with high Vitamin C for detoxification co-factors.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Olive Oil in Charred Broccoli with Lemon Almond Drizzle?",
                answer: "Heat-stable monounsaturated fats necessary for efficient absorption of fat-soluble vitamins.",
                category: "Ingredient Benefits"
            }
        ],
    'chia-berry-parfait': [
            {
                question: "What is Chia & Berry Antioxidant Parfait?",
                answer: "Elegant and Naturally Sweet: The Morning Antioxidant Support.",
                category: "Overview"
            },
            {
                question: "What makes Chia & Berry Antioxidant Parfait a therapeutic recipe?",
                answer: "Mindful breakfast or light dessert leveraging chia and mixed berries for steady energy and high antioxidant capacity.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Chia & Berry Antioxidant Parfait?",
                answer: "The primary benefit of Chia & Berry Antioxidant Parfait is Antioxidant Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Chia & Berry Antioxidant Parfait take to prepare?",
                answer: "Chia & Berry Antioxidant Parfait takes 10 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Chia & Berry Antioxidant Parfait have?",
                answer: "Chia & Berry Antioxidant Parfait contains approximately 250 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Chia & Berry Antioxidant Parfait?",
                answer: "Chia & Berry Antioxidant Parfait is tagged as: Antioxidant, Brain Health, Dessert.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Chia & Berry Antioxidant Parfait?",
                answer: "Chia Seeds (1/4 cup), Berries (1/2 cup fresh), Almond Milk (1 cup), Vanilla Extract (1/2 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Chia & Berry Antioxidant Parfait recipe?",
                answer: "Chia & Berry Antioxidant Parfait was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Chia Seeds in Chia & Berry Antioxidant Parfait?",
                answer: "Hydrophilic seeds that promote satiety and digestive regularity. Excellent source of plant-based Omega-3s (ALA).",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Blueberries & Strawberries in Chia & Berry Antioxidant Parfait?",
                answer: "Renowned for high antioxidant concentration linked to cognitive and cardiovascular health.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Almond Milk in Chia & Berry Antioxidant Parfait?",
                answer: "Creamy, dairy-free liquidated base that keeps focus on seeds and berries.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Steady Energy in Chia & Berry Antioxidant Parfait?",
                answer: "Provides a slow release of energy without refined sugar spikes.",
                category: "Ingredient Benefits"
            }
        ],
    'jackfruit-turmeric-wraps': [
            {
                question: "What is Jackfruit & Turmeric Leaf Wraps?",
                answer: "Slow-Cooked, Warming Wraps for Anti-inflammatory Nourishment.",
                category: "Overview"
            },
            {
                question: "What makes Jackfruit & Turmeric Leaf Wraps a therapeutic recipe?",
                answer: "Gourmet, satisfying bite featuring slow-cooked jackfruit with warming spices that deliver potent anti-inflammatory compounds.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Jackfruit & Turmeric Leaf Wraps?",
                answer: "The primary benefit of Jackfruit & Turmeric Leaf Wraps is Anti-inflammatory Nourishment.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Jackfruit & Turmeric Leaf Wraps take to prepare?",
                answer: "Jackfruit & Turmeric Leaf Wraps takes 30 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Jackfruit & Turmeric Leaf Wraps have?",
                answer: "Jackfruit & Turmeric Leaf Wraps contains approximately 310 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Jackfruit & Turmeric Leaf Wraps?",
                answer: "Jackfruit & Turmeric Leaf Wraps is tagged as: Anti-inflammatory, Vegan, Fiber.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Jackfruit & Turmeric Leaf Wraps?",
                answer: "Young Jackfruit (2 cups shredded), Turmeric (1 tbsp), Ginger (1 tbsp), Leafy Greens (Large leaves for wrapping)",
                category: "Ingredients"
            },
            {
                question: "Who created the Jackfruit & Turmeric Leaf Wraps recipe?",
                answer: "Jackfruit & Turmeric Leaf Wraps was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Jackfruit in Jackfruit & Turmeric Leaf Wraps?",
                answer: "Exceptional source of dietary fiber, supporting gut health and adding substantial texture.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Turmeric in Jackfruit & Turmeric Leaf Wraps?",
                answer: "Infusing jackfruit with turmeric ensure presence of curcumin for inflammation response.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ginger in Jackfruit & Turmeric Leaf Wraps?",
                answer: "Adds fresh heat that aids digestion and enhances the therapeutic effect of turmeric.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Leafy Greens in Jackfruit & Turmeric Leaf Wraps?",
                answer: "Provides final layer of hydration, chlorophyll, and essential micronutrients.",
                category: "Ingredient Benefits"
            }
        ],
    'matcha-coconut-truffles': [
            {
                question: "What is Matcha & Coconut Energy Truffles?",
                answer: "The Refined No-Bake Treat for Mental Clarity & Sustained Energy.",
                category: "Overview"
            },
            {
                question: "What makes Matcha & Coconut Energy Truffles a therapeutic recipe?",
                answer: "Refined, no-bake energy truffles designed to support calm focus and provide clean, sustained energy.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Matcha & Coconut Energy Truffles?",
                answer: "The primary benefit of Matcha & Coconut Energy Truffles is Mental Clarity & Sustained Energy.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Matcha & Coconut Energy Truffles take to prepare?",
                answer: "Matcha & Coconut Energy Truffles takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Matcha & Coconut Energy Truffles have?",
                answer: "Matcha & Coconut Energy Truffles contains approximately 120 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Matcha & Coconut Energy Truffles?",
                answer: "Matcha & Coconut Energy Truffles is tagged as: Mental Clarity, Energy, No-Bake.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Matcha & Coconut Energy Truffles?",
                answer: "Matcha Powder (2 tbsp), Shredded Coconut (1 cup), Dates (1/2 cup), Almonds (1/4 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Matcha & Coconut Energy Truffles recipe?",
                answer: "Matcha & Coconut Energy Truffles was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Matcha Powder in Matcha & Coconut Energy Truffles?",
                answer: "High concentration of antioxidants and L-Theanine for \"calm alertness\" and mental clarity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Coconut in Matcha & Coconut Energy Truffles?",
                answer: "Rich in Medium-Chain Triglycerides (MCTs) used directly for energy and brain function.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Dates in Matcha & Coconut Energy Truffles?",
                answer: "Whole-food sweetener and binder providing fiber and potassium for steady energy release.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Almonds in Matcha & Coconut Energy Truffles?",
                answer: "Healthy monounsaturated fats and protein to balance the energy profile.",
                category: "Ingredient Benefits"
            }
        ],
    'baked-pears-cinnamon': [
            {
                question: "What is Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "A Gently Sweet Dessert for Comforting Digestive Support.",
                category: "Overview"
            },
            {
                question: "What makes Baked Pears with Cinnamon & Cacao Nibs a therapeutic recipe?",
                answer: "Mindful indulgence celebrating whole foods. Baked pears are easy to digest and aid in systemic comfort.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "The primary benefit of Baked Pears with Cinnamon & Cacao Nibs is Comforting Digestive Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Baked Pears with Cinnamon & Cacao Nibs take to prepare?",
                answer: "Baked Pears with Cinnamon & Cacao Nibs takes 25 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Baked Pears with Cinnamon & Cacao Nibs have?",
                answer: "Baked Pears with Cinnamon & Cacao Nibs contains approximately 210 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "Baked Pears with Cinnamon & Cacao Nibs is tagged as: Digestion, Comfort, Sweet.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "Pears (2 large), Cinnamon (1 tsp), Cacao Nibs (1 tbsp), Maple Syrup (1 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Baked Pears with Cinnamon & Cacao Nibs recipe?",
                answer: "Baked Pears with Cinnamon & Cacao Nibs was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Pears in Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "Rich in soluble fiber (pectin) which is gentle on the digestive system. Baking enhances digestibility.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Cinnamon in Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "Aids in improving insulin sensitivity and stabilizing blood sugar levels.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Cacao Nibs in Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "Sophisticated dark flavor with flavanols and no added sugar, plus satisfying crunch.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Minimal Sweetener in Baked Pears with Cinnamon & Cacao Nibs?",
                answer: "Maple syrup used sparingly to enhance natural sweetness mindfully.",
                category: "Ingredient Benefits"
            }
        ],
    'spirulina-lemon-shots': [
            {
                question: "What is Spirulina & Lemon Vitality Shots?",
                answer: "The Micro-Nutrient Boost for Heavy Metal Detox & Cellular Energy.",
                category: "Overview"
            },
            {
                question: "What makes Spirulina & Lemon Vitality Shots a therapeutic recipe?",
                answer: "Concentrated elixir designed to flood the body with micronutrients. Leverages spirulina for cleansing and lemon for alkalizing.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Spirulina & Lemon Vitality Shots?",
                answer: "The primary benefit of Spirulina & Lemon Vitality Shots is Heavy Metal Detox & Cellular Energy.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Spirulina & Lemon Vitality Shots take to prepare?",
                answer: "Spirulina & Lemon Vitality Shots takes 5 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Spirulina & Lemon Vitality Shots have?",
                answer: "Spirulina & Lemon Vitality Shots contains approximately 45 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Spirulina & Lemon Vitality Shots?",
                answer: "Spirulina & Lemon Vitality Shots is tagged as: Detox, Energy, Chlorophyll.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Spirulina & Lemon Vitality Shots?",
                answer: "Spirulina Powder (1 tsp), Lemon Juice (1/2 lemon), Ginger (1/2 inch), Filtered Water (1/4 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Spirulina & Lemon Vitality Shots recipe?",
                answer: "Spirulina & Lemon Vitality Shots was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Spirulina Powder in Spirulina & Lemon Vitality Shots?",
                answer: "Powerhouse of complete protein and bioavailable nutrients. Aids in oxygenating blood and removing heavy metals.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Lemon Juice in Spirulina & Lemon Vitality Shots?",
                answer: "Helps alkalize the body and provides a necessary boost for immune function.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ginger Root in Spirulina & Lemon Vitality Shots?",
                answer: "Stimulates circulation and digestive enzymes, enhancing nutrient absorption.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Water in Spirulina & Lemon Vitality Shots?",
                answer: "Essential delivery vehicle for concentrated ingredients.",
                category: "Ingredient Benefits"
            }
        ],
    'grilled-artichoke-rosemary': [
            {
                question: "What is Grilled Artichoke with Rosemary Salt?",
                answer: "The Gallbladder & Digestive Stimulant for Mindful Fat Digestion.",
                category: "Overview"
            },
            {
                question: "What makes Grilled Artichoke with Rosemary Salt a therapeutic recipe?",
                answer: "Transforms artichoke into a centerpiece of wellness. Specifically valued for supporting bile flow and fat metabolism.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Grilled Artichoke with Rosemary Salt?",
                answer: "The primary benefit of Grilled Artichoke with Rosemary Salt is Gallbladder & Digestive Stimulant.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Grilled Artichoke with Rosemary Salt take to prepare?",
                answer: "Grilled Artichoke with Rosemary Salt takes 25 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Grilled Artichoke with Rosemary Salt have?",
                answer: "Grilled Artichoke with Rosemary Salt contains approximately 160 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Grilled Artichoke with Rosemary Salt?",
                answer: "Grilled Artichoke with Rosemary Salt is tagged as: Digestion, Liver Health, Gallbladder.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Grilled Artichoke with Rosemary Salt?",
                answer: "Artichoke (2 whole), Rosemary (1 sprig fresh), Olive Oil (1 tbsp), Sea Salt (pinch)",
                category: "Ingredients"
            },
            {
                question: "Who created the Grilled Artichoke with Rosemary Salt recipe?",
                answer: "Grilled Artichoke with Rosemary Salt was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Artichoke in Grilled Artichoke with Rosemary Salt?",
                answer: "Contains cynarin which stimulates bile production, crucial for efficient fat digestion and absorption.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Rosemary in Grilled Artichoke with Rosemary Salt?",
                answer: "Potent herb that helps relieve flatulence and soothe the digestive tract.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Olive Oil in Grilled Artichoke with Rosemary Salt?",
                answer: "Provides healthy fats that signal the body to activate bile release.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Sea Salt in Grilled Artichoke with Rosemary Salt?",
                answer: "Enhances flavor while providing trace minerals.",
                category: "Ingredient Benefits"
            }
        ],
    'lentil-kale-curry': [
            {
                question: "What is Lentil & Kale Iron-Rich Curry?",
                answer: "The Grounding, Warming Meal for Blood Building & Sustained Vitality.",
                category: "Overview"
            },
            {
                question: "What makes Lentil & Kale Iron-Rich Curry a therapeutic recipe?",
                answer: "Warming curry designed to build blood and restore vitality. Pairs iron-rich lentils with Vitamin C for maximum absorption.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Lentil & Kale Iron-Rich Curry?",
                answer: "The primary benefit of Lentil & Kale Iron-Rich Curry is Blood Building & Sustained Vitality.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Lentil & Kale Iron-Rich Curry take to prepare?",
                answer: "Lentil & Kale Iron-Rich Curry takes 30 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Lentil & Kale Iron-Rich Curry have?",
                answer: "Lentil & Kale Iron-Rich Curry contains approximately 340 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Lentil & Kale Iron-Rich Curry?",
                answer: "Lentil & Kale Iron-Rich Curry is tagged as: Blood Building, Iron Rich, Vitality.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Lentil & Kale Iron-Rich Curry?",
                answer: "Lentils (1 cup), Kale (2 cups), Tomato (1 large), Coconut Milk (1/2 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Lentil & Kale Iron-Rich Curry recipe?",
                answer: "Lentil & Kale Iron-Rich Curry was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Lentils in Lentil & Kale Iron-Rich Curry?",
                answer: "Superior plant iron source for red blood cell production and combating fatigue.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Kale in Lentil & Kale Iron-Rich Curry?",
                answer: "Abundant Vitamin K for bone health and fiber for steady energy.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Tomatoes in Lentil & Kale Iron-Rich Curry?",
                answer: "Significantly increases ability to absorb non-heme iron from lentils.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Coconut Milk in Lentil & Kale Iron-Rich Curry?",
                answer: "Adds richness and provides MCTs for healthy energy.",
                category: "Ingredient Benefits"
            }
        ],
    'collard-wraps-chili': [
            {
                question: "What is Chili-Spiced Collard Wraps?",
                answer: "The Thermogenic Bite for Metabolism & Cellular Renewal.",
                category: "Overview"
            },
            {
                question: "What makes Chili-Spiced Collard Wraps a therapeutic recipe?",
                answer: "Vibrant raw wrap that delivers a thermogenic boost through chili and warming spices. Stimulates internal heat.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Chili-Spiced Collard Wraps?",
                answer: "The primary benefit of Chili-Spiced Collard Wraps is Metabolism & Cellular Renewal.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Chili-Spiced Collard Wraps take to prepare?",
                answer: "Chili-Spiced Collard Wraps takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Chili-Spiced Collard Wraps have?",
                answer: "Chili-Spiced Collard Wraps contains approximately 220 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Chili-Spiced Collard Wraps?",
                answer: "Chili-Spiced Collard Wraps is tagged as: Metabolism, Weight Loss, Thermogenic.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Chili-Spiced Collard Wraps?",
                answer: "Collard Greens (4 large leaves), Cayenne Pepper (pinch), Carrot (1 shredded), Tahini (2 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Chili-Spiced Collard Wraps recipe?",
                answer: "Chili-Spiced Collard Wraps was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Collard Greens in Chili-Spiced Collard Wraps?",
                answer: "Powerhouse cruciferous vegetable supporting liver detoxification and Vitamin A.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Capsaicin in Chili-Spiced Collard Wraps?",
                answer: "Gently increases core temperature to support metabolic rate.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Raw Vegetables in Chili-Spiced Collard Wraps?",
                answer: "High water and enzyme content to aid digestion.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Tahini in Chili-Spiced Collard Wraps?",
                answer: "Adds healthy fats and calcium for a complete nutrient profile.",
                category: "Ingredient Benefits"
            }
        ],
    'reishi-cocoa-elixir': [
            {
                question: "What is Red Reishi & Cocoa Elixir?",
                answer: "The Grounding Nightcap for Deep Immune Support & Adaptation.",
                category: "Overview"
            },
            {
                question: "What makes Red Reishi & Cocoa Elixir a therapeutic recipe?",
                answer: "Velvety beverage designed as a mindful nightcap. Blends Red Reishi for calm and cocoa for magnesium.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Red Reishi & Cocoa Elixir?",
                answer: "The primary benefit of Red Reishi & Cocoa Elixir is Deep Immune Support & Adaptation.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Red Reishi & Cocoa Elixir take to prepare?",
                answer: "Red Reishi & Cocoa Elixir takes 10 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Red Reishi & Cocoa Elixir have?",
                answer: "Red Reishi & Cocoa Elixir contains approximately 90 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Red Reishi & Cocoa Elixir?",
                answer: "Red Reishi & Cocoa Elixir is tagged as: Immunity, Sleep, Adaptogen.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Red Reishi & Cocoa Elixir?",
                answer: "Reishi Powder (1/2 tsp), Raw Cocoa (1 tbsp), Cinnamon (1/2 tsp), Plant Milk (1 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Red Reishi & Cocoa Elixir recipe?",
                answer: "Red Reishi & Cocoa Elixir was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Red Reishi in Red Reishi & Cocoa Elixir?",
                answer: "Adaptogen that supports nervous system calm and modulates immunity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Raw Cocoa in Red Reishi & Cocoa Elixir?",
                answer: "Rich in magnesium to relax muscles and promote quality sleep.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Cinnamon in Red Reishi & Cocoa Elixir?",
                answer: "Helps stabilize blood sugar to prevent nighttime energy dips.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Plant Milk Base in Red Reishi & Cocoa Elixir?",
                answer: "Soothing and grounding experience for winding down.",
                category: "Ingredient Benefits"
            }
        ],
    'black-bean-mole': [
            {
                question: "What is Black Bean & Cacao Mole Bowl?",
                answer: "The Mood-Boosting Powerhouse for Deep Antioxidant Support.",
                category: "Overview"
            },
            {
                question: "What makes Black Bean & Cacao Mole Bowl a therapeutic recipe?",
                answer: "Leverages the complex flavors of mole with black beans and raw cacao for mood elevation and antioxidant support.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Black Bean & Cacao Mole Bowl?",
                answer: "The primary benefit of Black Bean & Cacao Mole Bowl is Mood & Antioxidant Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Black Bean & Cacao Mole Bowl take to prepare?",
                answer: "Black Bean & Cacao Mole Bowl takes 30 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Black Bean & Cacao Mole Bowl have?",
                answer: "Black Bean & Cacao Mole Bowl contains approximately 450 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Black Bean & Cacao Mole Bowl?",
                answer: "Black Bean & Cacao Mole Bowl is tagged as: Mood, Antioxidant, Savory.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Black Bean & Cacao Mole Bowl?",
                answer: "Black Beans (1 cup cooked), Raw Cacao (1 tbsp), Chili Pepper (1 fresh), Sweet Potato (1 medium)",
                category: "Ingredients"
            },
            {
                question: "Who created the Black Bean & Cacao Mole Bowl recipe?",
                answer: "Black Bean & Cacao Mole Bowl was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Black Beans in Black Bean & Cacao Mole Bowl?",
                answer: "Foundational legume supporting gut health and enzyme function.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Raw Cacao in Black Bean & Cacao Mole Bowl?",
                answer: "Antioxidants linked to heart health and mood elevation via magnesium.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Chili Peppers in Black Bean & Cacao Mole Bowl?",
                answer: "Provides metabolic lift and comforts with warmth.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Sweet Potato in Black Bean & Cacao Mole Bowl?",
                answer: "Complex carbs that balance cacao's bitterness for sustained energy.",
                category: "Ingredient Benefits"
            }
        ],
    'golden-milk-elixir': [
            {
                question: "What is Turmeric & Black Pepper Golden Milk?",
                answer: "The Classic Adaptogenic Tonic for Joint & Cognitive Health.",
                category: "Overview"
            },
            {
                question: "What makes Turmeric & Black Pepper Golden Milk a therapeutic recipe?",
                answer: "Ancient Ayurvedic tonic modernized to maximize curcumin absorption for physical comfort and brain function.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Turmeric & Black Pepper Golden Milk?",
                answer: "The primary benefit of Turmeric & Black Pepper Golden Milk is Joint & Cognitive Health.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Turmeric & Black Pepper Golden Milk take to prepare?",
                answer: "Turmeric & Black Pepper Golden Milk takes 10 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Turmeric & Black Pepper Golden Milk have?",
                answer: "Turmeric & Black Pepper Golden Milk contains approximately 110 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Turmeric & Black Pepper Golden Milk?",
                answer: "Turmeric & Black Pepper Golden Milk is tagged as: Joint Health, Cognitive, Anti-inflammatory.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Turmeric & Black Pepper Golden Milk?",
                answer: "Turmeric (1 tsp), Black Pepper (pinch), Coconut Milk (1 cup), Ginger (1/2 inch)",
                category: "Ingredients"
            },
            {
                question: "Who created the Turmeric & Black Pepper Golden Milk recipe?",
                answer: "Turmeric & Black Pepper Golden Milk was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Turmeric in Turmeric & Black Pepper Golden Milk?",
                answer: "Potent anti-inflammatory effect, maximized when prepared as a paste.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Black Pepper in Turmeric & Black Pepper Golden Milk?",
                answer: "Dramatically increases curcumin bioavailability by up to 2,000%.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Healthy Fats in Turmeric & Black Pepper Golden Milk?",
                answer: "Coconut milk/oil is necessary for fat-soluble curcumin absorption.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ginger & Cinnamon in Turmeric & Black Pepper Golden Milk?",
                answer: "Traditional carminatives that aid digestion and circulation.",
                category: "Ingredient Benefits"
            }
        ],
    'fennel-citrus-salad': [
            {
                question: "What is Fennel & Citrus Digestive Salad?",
                answer: "The Crisp, Anise-Flavored Dish for Bloating & Gut Motility.",
                category: "Overview"
            },
            {
                question: "What makes Fennel & Citrus Digestive Salad a therapeutic recipe?",
                answer: "Crisp salad designed as a potent digestive aid. Focuses on fennel to soothe the digestive tract and reduce gas.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Fennel & Citrus Digestive Salad?",
                answer: "The primary benefit of Fennel & Citrus Digestive Salad is Bloating & Gut Motility.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Fennel & Citrus Digestive Salad take to prepare?",
                answer: "Fennel & Citrus Digestive Salad takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Fennel & Citrus Digestive Salad have?",
                answer: "Fennel & Citrus Digestive Salad contains approximately 140 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Fennel & Citrus Digestive Salad?",
                answer: "Fennel & Citrus Digestive Salad is tagged as: Bloating, Digestion, Fresh.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Fennel & Citrus Digestive Salad?",
                answer: "Fennel Bulb (1 large), Orange (1 segmented), Mint (2 tbsp), Apple Cider Vinegar (1 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Fennel & Citrus Digestive Salad recipe?",
                answer: "Fennel & Citrus Digestive Salad was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Fennel in Fennel & Citrus Digestive Salad?",
                answer: "Antispasmodic compound that relaxes digestive muscles to relieve gas.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Citrus in Fennel & Citrus Digestive Salad?",
                answer: "Provides Vitamin C and acidity to stimulate digestive juices.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Digestive Herbs in Fennel & Citrus Digestive Salad?",
                answer: "Mint and parsley freshen breath and stimulate bile flow.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Vinaigrette Base in Fennel & Citrus Digestive Salad?",
                answer: "Apple cider vinegar supports gut-friendly environment.",
                category: "Ingredient Benefits"
            }
        ],
    'buckwheat-seaweed-soup': [
            {
                question: "What is Buckwheat Noodle & Seaweed Soup?",
                answer: "The Mineral-Dense Broth for Thyroid & Hormone Balance.",
                category: "Overview"
            },
            {
                question: "What makes Buckwheat Noodle & Seaweed Soup a therapeutic recipe?",
                answer: "Warming savory soup focusing on often-overlooked thyroid health using mineral-dense sea vegetables.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Buckwheat Noodle & Seaweed Soup?",
                answer: "The primary benefit of Buckwheat Noodle & Seaweed Soup is Thyroid & Mineral Balance.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Buckwheat Noodle & Seaweed Soup take to prepare?",
                answer: "Buckwheat Noodle & Seaweed Soup takes 25 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Buckwheat Noodle & Seaweed Soup have?",
                answer: "Buckwheat Noodle & Seaweed Soup contains approximately 290 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Buckwheat Noodle & Seaweed Soup?",
                answer: "Buckwheat Noodle & Seaweed Soup is tagged as: Thyroid, Hormonal Balance, Mineral Rich.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Buckwheat Noodle & Seaweed Soup?",
                answer: "Seaweed (1 sheet nori/kombu), Buckwheat Noodle (100g), Shiitake (1/2 cup), Vegetable Broth (2 cups)",
                category: "Ingredients"
            },
            {
                question: "Who created the Buckwheat Noodle & Seaweed Soup recipe?",
                answer: "Buckwheat Noodle & Seaweed Soup was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Seaweed in Buckwheat Noodle & Seaweed Soup?",
                answer: "Nature's richest source of bioavailable iodine for thyroid hormone production.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Buckwheat in Buckwheat Noodle & Seaweed Soup?",
                answer: "Gluten-free pseudo-cereal supporting cardiovascular health.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Functional Mushrooms in Buckwheat Noodle & Seaweed Soup?",
                answer: "Provides umami depth and immune-modulating beta-glucans.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Electrolyte Base in Buckwheat Noodle & Seaweed Soup?",
                answer: "Homemade broth provides hydration and trace minerals.",
                category: "Ingredient Benefits"
            }
        ],
    'sleep-smoothie-valerian': [
            {
                question: "What is Cherry & Valerian Sleep Smoothie?",
                answer: "The Restorative Elixir for Restful Sleep & Muscle Recovery.",
                category: "Overview"
            },
            {
                question: "What makes Cherry & Valerian Sleep Smoothie a therapeutic recipe?",
                answer: "Formulated to support the transition into deep sleep. Combines natural melatonin from cherries and calming valerian.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Cherry & Valerian Sleep Smoothie?",
                answer: "The primary benefit of Cherry & Valerian Sleep Smoothie is Restful Sleep & Muscle Recovery.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Cherry & Valerian Sleep Smoothie take to prepare?",
                answer: "Cherry & Valerian Sleep Smoothie takes 5 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Cherry & Valerian Sleep Smoothie have?",
                answer: "Cherry & Valerian Sleep Smoothie contains approximately 180 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Cherry & Valerian Sleep Smoothie?",
                answer: "Cherry & Valerian Sleep Smoothie is tagged as: Sleep, Recovery, Melatonin.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Cherry & Valerian Sleep Smoothie?",
                answer: "Tart Cherries (1 cup frozen), Valerian Root (1/4 tsp powder), Almond Butter (1 tbsp), Cashew Milk (1 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Cherry & Valerian Sleep Smoothie recipe?",
                answer: "Cherry & Valerian Sleep Smoothie was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Tart Cherries in Cherry & Valerian Sleep Smoothie?",
                answer: "Rare food source of natural melatonin to regulate sleep-wake cycles.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Valerian Root in Cherry & Valerian Sleep Smoothie?",
                answer: "Traditional sedative herb that improves sleep quality and GABA levels.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Almond Butter in Cherry & Valerian Sleep Smoothie?",
                answer: "Naturally relaxes the nervous system.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Tryptophan in Cherry & Valerian Sleep Smoothie?",
                answer: "Cashew milk provides precursors to serotonin and melatonin.",
                category: "Ingredient Benefits"
            }
        ],
    'purple-sweet-potato-pudding': [
            {
                question: "What is Purple Sweet Potato & Ginger Pudding?",
                answer: "The Vibrant Dessert for Antioxidant Power & Gut Soothing.",
                category: "Overview"
            },
            {
                question: "What makes Purple Sweet Potato & Ginger Pudding a therapeutic recipe?",
                answer: "Naturally vibrant creamy pudding transforming purple sweet potatoes into an elegant, comforting dessert.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Purple Sweet Potato & Ginger Pudding?",
                answer: "The primary benefit of Purple Sweet Potato & Ginger Pudding is Antioxidant Power & Gut Soothing.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Purple Sweet Potato & Ginger Pudding take to prepare?",
                answer: "Purple Sweet Potato & Ginger Pudding takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Purple Sweet Potato & Ginger Pudding have?",
                answer: "Purple Sweet Potato & Ginger Pudding contains approximately 220 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Purple Sweet Potato & Ginger Pudding?",
                answer: "Purple Sweet Potato & Ginger Pudding is tagged as: Antioxidant, Gut Health, Eye Health.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Purple Sweet Potato & Ginger Pudding?",
                answer: "Purple Sweet Potato (2 medium), Fresh Ginger (1 tsp), Almond Butter (1 tbsp), Maple Syrup (1 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Purple Sweet Potato & Ginger Pudding recipe?",
                answer: "Purple Sweet Potato & Ginger Pudding was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Anthocyanins in Purple Sweet Potato & Ginger Pudding?",
                answer: "Deep purple pigment linked to reduced oxidative stress and cognitive benefits.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ginger in Purple Sweet Potato & Ginger Pudding?",
                answer: "Potent anti-nausea and anti-inflammatory properties for digestive comfort.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Nut Butter in Purple Sweet Potato & Ginger Pudding?",
                answer: "Healthy fats and fiber for steady energy release.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Minimal Sweetener in Purple Sweet Potato & Ginger Pudding?",
                answer: "Uses whole-food sweeteners to enhance natural potato sugars.",
                category: "Ingredient Benefits"
            }
        ],
    'adzuki-bean-stew': [
            {
                question: "What is Adzuki Bean & Shiitake Umami Stew?",
                answer: "The Warming, Blood-Sugar-Friendly Bowl for Kidney & Adrenal Support.",
                category: "Overview"
            },
            {
                question: "What makes Adzuki Bean & Shiitake Umami Stew a therapeutic recipe?",
                answer: "Deeply grounding stew focused on kidney and adrenal vitality using nutrient-dense adzuki beans.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Adzuki Bean & Shiitake Umami Stew?",
                answer: "The primary benefit of Adzuki Bean & Shiitake Umami Stew is Kidney & Adrenal Support.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Adzuki Bean & Shiitake Umami Stew take to prepare?",
                answer: "Adzuki Bean & Shiitake Umami Stew takes 40 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Adzuki Bean & Shiitake Umami Stew have?",
                answer: "Adzuki Bean & Shiitake Umami Stew contains approximately 310 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Adzuki Bean & Shiitake Umami Stew?",
                answer: "Adzuki Bean & Shiitake Umami Stew is tagged as: Kidney Health, Metabolic, Adrenal Support.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Adzuki Bean & Shiitake Umami Stew?",
                answer: "Adzuki Beans (1 cup cooked), Shiitake (1 cup), Kombu (1 small strip), Onion (1 chopped)",
                category: "Ingredients"
            },
            {
                question: "Who created the Adzuki Bean & Shiitake Umami Stew recipe?",
                answer: "Adzuki Bean & Shiitake Umami Stew was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Adzuki Beans in Adzuki Bean & Shiitake Umami Stew?",
                answer: "Highly digestible plant protein that helps stabilize blood sugar. Valued for kidney function.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Functional Mushrooms in Adzuki Bean & Shiitake Umami Stew?",
                answer: "Umami depth and immune fortifying beta-glucans.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Seaweed in Adzuki Bean & Shiitake Umami Stew?",
                answer: "Infuses stew with trace minerals like iodine.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Root Vegetables in Adzuki Bean & Shiitake Umami Stew?",
                answer: "Grounding base providing spectrum of vitamins.",
                category: "Ingredient Benefits"
            }
        ],
    'pomegranate-beauty-water': [
            {
                question: "What is Pomegranate & Rosehip Beauty Water?",
                answer: "The Collagen-Boosting Elixir for Skin Radiance & Deep Hydration.",
                category: "Overview"
            },
            {
                question: "What makes Pomegranate & Rosehip Beauty Water a therapeutic recipe?",
                answer: "Elegant daily hydration ritual with targeted benefits for skin elasticity and radiance.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Pomegranate & Rosehip Beauty Water?",
                answer: "The primary benefit of Pomegranate & Rosehip Beauty Water is Skin Radiance & Deep Hydration.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Pomegranate & Rosehip Beauty Water take to prepare?",
                answer: "Pomegranate & Rosehip Beauty Water takes 5 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Pomegranate & Rosehip Beauty Water have?",
                answer: "Pomegranate & Rosehip Beauty Water contains approximately 20 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Pomegranate & Rosehip Beauty Water?",
                answer: "Pomegranate & Rosehip Beauty Water is tagged as: Skin Health, Beauty, Collagen.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Pomegranate & Rosehip Beauty Water?",
                answer: "Pomegranate Seeds (1/4 cup), Rosehip Tea (1 cup), Filtered Water (1 liter), Mint (3 sprigs)",
                category: "Ingredients"
            },
            {
                question: "Who created the Pomegranate & Rosehip Beauty Water recipe?",
                answer: "Pomegranate & Rosehip Beauty Water was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Polyphenols in Pomegranate & Rosehip Beauty Water?",
                answer: "Pomegranate antioxidants suggested to reduce skin inflammation.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Rosehip in Pomegranate & Rosehip Beauty Water?",
                answer: "Essential cofactor required for collagen synthesis and wound healing.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Deep Hydration in Pomegranate & Rosehip Beauty Water?",
                answer: "Water base ensures efficient transport of nutrients and detoxification.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Aromatic Cleansing in Pomegranate & Rosehip Beauty Water?",
                answer: "Mint adds chlorophyll and breath freshness.",
                category: "Ingredient Benefits"
            }
        ],
    'quinoa-sesame-cereal': [
            {
                question: "What is Sprouted Quinoa & Black Sesame Cereal?",
                answer: "The Protein-Dense Morning Meal for Bone Health & Cognitive Function.",
                category: "Overview"
            },
            {
                question: "What makes Sprouted Quinoa & Black Sesame Cereal a therapeutic recipe?",
                answer: "Elevated morning alternative focusing on bone density and cognitive clarity at the start of the day.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Sprouted Quinoa & Black Sesame Cereal?",
                answer: "The primary benefit of Sprouted Quinoa & Black Sesame Cereal is Bone Health & Cognitive Function.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Sprouted Quinoa & Black Sesame Cereal take to prepare?",
                answer: "Sprouted Quinoa & Black Sesame Cereal takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Sprouted Quinoa & Black Sesame Cereal have?",
                answer: "Sprouted Quinoa & Black Sesame Cereal contains approximately 320 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Sprouted Quinoa & Black Sesame Cereal?",
                answer: "Sprouted Quinoa & Black Sesame Cereal is tagged as: Bone Health, Brain Health, Protein.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Sprouted Quinoa & Black Sesame Cereal?",
                answer: "Sprouted Quinoa (1 cup cooked), Black Sesame (2 tbsp), Cinnamon (1 tsp), Date Paste (1 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Sprouted Quinoa & Black Sesame Cereal recipe?",
                answer: "Sprouted Quinoa & Black Sesame Cereal was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Enhanced Bioavailability in Sprouted Quinoa & Black Sesame Cereal?",
                answer: "Sprouting reduces anti-nutrients for better iron and zinc absorption.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Black Sesame in Sprouted Quinoa & Black Sesame Cereal?",
                answer: "Superior dairy-free source of calcium and zinc for bone integrity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Cognitive Cinnamon in Sprouted Quinoa & Black Sesame Cereal?",
                answer: "Improves insulin sensitivity and lends comforting flavor.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Fiber-Rich Sweetener in Sprouted Quinoa & Black Sesame Cereal?",
                answer: "Date paste provides potassium and steady energy.",
                category: "Ingredient Benefits"
            }
        ],
    'brussels-sprouts-mustard': [
            {
                question: "What is Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "The Cruciferous Powerhouse for Liver Detoxification.",
                category: "Overview"
            },
            {
                question: "What makes Roasted Brussels Sprouts with Mustard & Tamari a therapeutic recipe?",
                answer: "Flavorful dish maximizing beneficial compounds found in cruciferous vegetables for liver support.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "The primary benefit of Roasted Brussels Sprouts with Mustard & Tamari is Liver Detoxification.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Roasted Brussels Sprouts with Mustard & Tamari take to prepare?",
                answer: "Roasted Brussels Sprouts with Mustard & Tamari takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Roasted Brussels Sprouts with Mustard & Tamari have?",
                answer: "Roasted Brussels Sprouts with Mustard & Tamari contains approximately 180 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "Roasted Brussels Sprouts with Mustard & Tamari is tagged as: Detox, Liver Health, Digestive.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "Brussels Sprouts (2 cups), Mustard Seeds (1 tsp), Tamari (1 tbsp), Olive Oil (1 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Roasted Brussels Sprouts with Mustard & Tamari recipe?",
                answer: "Roasted Brussels Sprouts with Mustard & Tamari was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Sulforaphane in Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "Essential compound for supporting liver's ability to process and eliminate toxins.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Digestive Stimulation in Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "Mustard stimulates digestive juices for efficient nutrient absorption.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of B-Vitamins in Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "Tamari provides umami depth and cofactors for detoxification phases.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Healthy Fats in Roasted Brussels Sprouts with Mustard & Tamari?",
                answer: "Olive oil aiding in absorption of fat-soluble vitamins.",
                category: "Ingredient Benefits"
            }
        ],
    'cauliflower-tabbouleh-hemp': [
            {
                question: "What is Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "The Grain-Free Classic for Gut Barrier Integrity & Omega Balance.",
                category: "Overview"
            },
            {
                question: "What makes Cauliflower Rice Tabbouleh with Hemp Oil a therapeutic recipe?",
                answer: "Grain-free take on Tabbouleh enriched with hemp seed oil to support gut lining integrity.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "The primary benefit of Cauliflower Rice Tabbouleh with Hemp Oil is Gut Barrier Integrity & Omega Balance.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Cauliflower Rice Tabbouleh with Hemp Oil take to prepare?",
                answer: "Cauliflower Rice Tabbouleh with Hemp Oil takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Cauliflower Rice Tabbouleh with Hemp Oil have?",
                answer: "Cauliflower Rice Tabbouleh with Hemp Oil contains approximately 210 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "Cauliflower Rice Tabbouleh with Hemp Oil is tagged as: Gut Health, Omega Balance, Low Carb.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "Cauliflower Rice (2 cups), Hemp Seed Oil (1 tbsp), Parsley (1 cup), Lemon Juice (2 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Cauliflower Rice Tabbouleh with Hemp Oil recipe?",
                answer: "Cauliflower Rice Tabbouleh with Hemp Oil was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Omega balance in Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "Hemp oil provides near-perfect 3:1 ratio of Omega-6 to Omega-3.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Low-carb detox in Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "Cauliflower base supporting liver without heavy grains.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Chlorophyll cleansing in Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "High concentration of herbs for cellular refreshment.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Mineral absorption in Cauliflower Rice Tabbouleh with Hemp Oil?",
                answer: "Lemon aids in alkaline balance and nutrient uptake.",
                category: "Ingredient Benefits"
            }
        ],
    'black-garlic-drizzle': [
            {
                question: "What is Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "The Savory Probiotic Topper for Cardiovascular & Prebiotic Support.",
                category: "Overview"
            },
            {
                question: "What makes Black Garlic & Fermented Hot Sauce Drizzle a therapeutic recipe?",
                answer: "Savory topper combining fermented ingredients for heart-healthy compounds and gut-nourishing prebiotics.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "The primary benefit of Black Garlic & Fermented Hot Sauce Drizzle is Cardiovascular Support & Prebiotics.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Black Garlic & Fermented Hot Sauce Drizzle take to prepare?",
                answer: "Black Garlic & Fermented Hot Sauce Drizzle takes 5 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Black Garlic & Fermented Hot Sauce Drizzle have?",
                answer: "Black Garlic & Fermented Hot Sauce Drizzle contains approximately 60 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "Black Garlic & Fermented Hot Sauce Drizzle is tagged as: Heart Health, Probiotics, Prebiotic.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "Black Garlic (3 cloves), Fermented Chili Sauce (1 tbsp), Olive Oil (1 tbsp), Coconut Aminos (1 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Black Garlic & Fermented Hot Sauce Drizzle recipe?",
                answer: "Black Garlic & Fermented Hot Sauce Drizzle was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Cardiovascular protection in Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "SAC compound multiplied during garlic fermentation.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Live cultures in Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "Fermented chili sauce contributing to microbiome diversity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of MCT Absorption in Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "Olive oil aiding in fat-soluble compound uptake.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Electrolyte depth in Black Garlic & Fermented Hot Sauce Drizzle?",
                answer: "Coconut aminos providing sodium-balanced trace minerals.",
                category: "Ingredient Benefits"
            }
        ],
    'mango-cardamom-lassi': [
            {
                question: "What is Mango & Cardamom Lassi (Vegan)?",
                answer: "The Cooling Digestive Tonic for Metabolic Ease.",
                category: "Overview"
            },
            {
                question: "What makes Mango & Cardamom Lassi (Vegan) a therapeutic recipe?",
                answer: "Vegan interpretation of Lassi designed to cool the digestive fire and promote metabolic ease.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Mango & Cardamom Lassi (Vegan)?",
                answer: "The primary benefit of Mango & Cardamom Lassi (Vegan) is Cooling Digestive Tonic & Metabolic Ease.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Mango & Cardamom Lassi (Vegan) take to prepare?",
                answer: "Mango & Cardamom Lassi (Vegan) takes 5 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Mango & Cardamom Lassi (Vegan) have?",
                answer: "Mango & Cardamom Lassi (Vegan) contains approximately 190 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Mango & Cardamom Lassi (Vegan)?",
                answer: "Mango & Cardamom Lassi (Vegan) is tagged as: Metabolic Ease, Cooling, Ayurveda.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Mango & Cardamom Lassi (Vegan)?",
                answer: "Mango (1 ripe), Cardamom (1/2 tsp), Cashew Yogurt (1/2 cup), Almond Milk (1 cup)",
                category: "Ingredients"
            },
            {
                question: "Who created the Mango & Cardamom Lassi (Vegan) recipe?",
                answer: "Mango & Cardamom Lassi (Vegan) was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Metabolic rest in Mango & Cardamom Lassi (Vegan)?",
                answer: "Ripe mango providing beta-carotene and Vitamin C base.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Digestive ease in Mango & Cardamom Lassi (Vegan)?",
                answer: "Cardamom acts as carminative to reduce gas and bloating.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Probiotic support in Mango & Cardamom Lassi (Vegan)?",
                answer: "Plant-based yogurt providing live beneficial cultures.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Light hydration in Mango & Cardamom Lassi (Vegan)?",
                answer: "Achieving drinkable consistency for refreshing experience.",
                category: "Ingredient Benefits"
            }
        ],
    'watercress-alfalfa-sandwich': [
            {
                question: "What is Watercress & Alfalfa Sprout Sandwich?",
                answer: "The Micro-Green Power-Up for Detox & Cellular Oxygenation.",
                category: "Overview"
            },
            {
                question: "What makes Watercress & Alfalfa Sprout Sandwich a therapeutic recipe?",
                answer: "Vibrant meal designed to maximize intake of micro-greens for blood health and cellular oxygenation.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Watercress & Alfalfa Sprout Sandwich?",
                answer: "The primary benefit of Watercress & Alfalfa Sprout Sandwich is Detox & Cellular Oxygenation.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Watercress & Alfalfa Sprout Sandwich take to prepare?",
                answer: "Watercress & Alfalfa Sprout Sandwich takes 10 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Watercress & Alfalfa Sprout Sandwich have?",
                answer: "Watercress & Alfalfa Sprout Sandwich contains approximately 280 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Watercress & Alfalfa Sprout Sandwich?",
                answer: "Watercress & Alfalfa Sprout Sandwich is tagged as: Detox, Oxygenation, Blood Health.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Watercress & Alfalfa Sprout Sandwich?",
                answer: "Watercress (1 cup), Alfalfa Sprouts (1/2 cup), Whole Grain Bread (2 slices), Avocado (1/2 mashed)",
                category: "Ingredients"
            },
            {
                question: "Who created the Watercress & Alfalfa Sprout Sandwich recipe?",
                answer: "Watercress & Alfalfa Sprout Sandwich was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Cellular shielding in Watercress & Alfalfa Sprout Sandwich?",
                answer: "Watercress contains PEITC to block environmental toxins.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Mineral transport in Watercress & Alfalfa Sprout Sandwich?",
                answer: "Iron-Vitamin C pairing inside fresh greens.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Enzyme flooding in Watercress & Alfalfa Sprout Sandwich?",
                answer: "Alfalfa sprouts packed with living enzymes for digestion.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Healthy delivery in Watercress & Alfalfa Sprout Sandwich?",
                answer: "Avocado providing heart-healthy fats and folate.",
                category: "Ingredient Benefits"
            }
        ],
    'rooibos-cinnamon-tea': [
            {
                question: "What is Rooibos & Cinnamon Antioxidant Tea?",
                answer: "The Caffeine-Free Brew for Blood Sugar Regulation & Stress Reduction.",
                category: "Overview"
            },
            {
                question: "What makes Rooibos & Cinnamon Antioxidant Tea a therapeutic recipe?",
                answer: "Daily ritual supporting balanced blood sugar and promoting stress reduction using rooibos and cinnamon.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Rooibos & Cinnamon Antioxidant Tea?",
                answer: "The primary benefit of Rooibos & Cinnamon Antioxidant Tea is Blood Sugar Regulation & Stress Reduction.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Rooibos & Cinnamon Antioxidant Tea take to prepare?",
                answer: "Rooibos & Cinnamon Antioxidant Tea takes 10 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Rooibos & Cinnamon Antioxidant Tea have?",
                answer: "Rooibos & Cinnamon Antioxidant Tea contains approximately 15 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Rooibos & Cinnamon Antioxidant Tea?",
                answer: "Rooibos & Cinnamon Antioxidant Tea is tagged as: Blood Sugar, Stress Relief, Anti-Aging.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Rooibos & Cinnamon Antioxidant Tea?",
                answer: "Rooibos Tea (1 bag), Cinnamon Stick (1 whole), Ginger (2 slices), Lemon (1 slice)",
                category: "Ingredients"
            },
            {
                question: "Who created the Rooibos & Cinnamon Antioxidant Tea recipe?",
                answer: "Rooibos & Cinnamon Antioxidant Tea was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Aspalathin power in Rooibos & Cinnamon Antioxidant Tea?",
                answer: "Unique rooibos flavonoid linked to glucose uptake improvement.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Insulin sensitivity in Rooibos & Cinnamon Antioxidant Tea?",
                answer: "Cinnamon active compounds used to stabilize blood sugar.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Circulation warm-up in Rooibos & Cinnamon Antioxidant Tea?",
                answer: "Ginger slices supporting carminative stomach soothing.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Antioxidant richness in Rooibos & Cinnamon Antioxidant Tea?",
                answer: "Quercetin content for cellular anti-aging.",
                category: "Ingredient Benefits"
            }
        ],
    'chickpea-cauliflower-tagine': [
            {
                question: "What is Spiced Chickpea & Cauliflower Tagine?",
                answer: "The Warm, Grounding Stew for Blood Sugar Stabilization & Steady Energy.",
                category: "Overview"
            },
            {
                question: "What makes Spiced Chickpea & Cauliflower Tagine a therapeutic recipe?",
                answer: "One-pot meal providing deep warmth and grounding energy while stabilizing blood sugar levels.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Spiced Chickpea & Cauliflower Tagine?",
                answer: "The primary benefit of Spiced Chickpea & Cauliflower Tagine is Blood Sugar Stabilization & Steady Energy.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Spiced Chickpea & Cauliflower Tagine take to prepare?",
                answer: "Spiced Chickpea & Cauliflower Tagine takes 35 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Spiced Chickpea & Cauliflower Tagine have?",
                answer: "Spiced Chickpea & Cauliflower Tagine contains approximately 380 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Spiced Chickpea & Cauliflower Tagine?",
                answer: "Spiced Chickpea & Cauliflower Tagine is tagged as: Blood Sugar, Steady Energy, High Fiber.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Spiced Chickpea & Cauliflower Tagine?",
                answer: "Chickpeas (1.5 cups cooked), Cauliflower (3 cups florets), Cinnamon (1 tsp), Apricots (4 chopped)",
                category: "Ingredients"
            },
            {
                question: "Who created the Spiced Chickpea & Cauliflower Tagine recipe?",
                answer: "Spiced Chickpea & Cauliflower Tagine was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Low-glycemic fiber in Spiced Chickpea & Cauliflower Tagine?",
                answer: "Soluble fiber slowing sugar absorption for steady energy.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Detox bulk in Spiced Chickpea & Cauliflower Tagine?",
                answer: "Cauliflower glucosinolates supporting liver pathways.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Warming metabolism in Spiced Chickpea & Cauliflower Tagine?",
                answer: "Spice trio aiding insulin sensitivity.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Mineral balance in Spiced Chickpea & Cauliflower Tagine?",
                answer: "Potassium from apricots and absorption aid from lemon.",
                category: "Ingredient Benefits"
            }
        ],
    'hemp-saffron-drink': [
            {
                question: "What is Hemp Milk & Saffron Calming Drink?",
                answer: "The Hormonal Elixir for Anti-Anxiety & Nervous System Soothing.",
                category: "Overview"
            },
            {
                question: "What makes Hemp Milk & Saffron Calming Drink a therapeutic recipe?",
                answer: "Gentle warm beverage designed to soothe the nervous system and promote emotional balance.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Hemp Milk & Saffron Calming Drink?",
                answer: "The primary benefit of Hemp Milk & Saffron Calming Drink is Hormonal Balance & Anti-Anxiety.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Hemp Milk & Saffron Calming Drink take to prepare?",
                answer: "Hemp Milk & Saffron Calming Drink takes 10 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Hemp Milk & Saffron Calming Drink have?",
                answer: "Hemp Milk & Saffron Calming Drink contains approximately 150 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Hemp Milk & Saffron Calming Drink?",
                answer: "Hemp Milk & Saffron Calming Drink is tagged as: Anxiety, Nervous System, Hormonal.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Hemp Milk & Saffron Calming Drink?",
                answer: "Hemp Milk (1.5 cups), Saffron (5 threads), Dates (2 whole), Nutmeg (pinch)",
                category: "Ingredients"
            },
            {
                question: "Who created the Hemp Milk & Saffron Calming Drink recipe?",
                answer: "Hemp Milk & Saffron Calming Drink was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Balanced relaxation in Hemp Milk & Saffron Calming Drink?",
                answer: "Magnesium from hemp milk relaxing muscles and mind.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Mood elevation in Hemp Milk & Saffron Calming Drink?",
                answer: "Saffron crocins valued for emotional support.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Serotonin precursor in Hemp Milk & Saffron Calming Drink?",
                answer: "Tryptophan from dates and healthy fat base.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Ayurvedic rest in Hemp Milk & Saffron Calming Drink?",
                answer: "Nutmeg traditionally used for deep nighttime restoration.",
                category: "Ingredient Benefits"
            }
        ],
    'cucumber-jicama-salad': [
            {
                question: "What is Cucumber & Jicama Hydration Salad?",
                answer: "The Crisp, Cooling Dish for Electrolyte Balance & Cellular Hydration.",
                category: "Overview"
            },
            {
                question: "What makes Cucumber & Jicama Hydration Salad a therapeutic recipe?",
                answer: "Ultra-crisp salad designed for maximum cooling and hydration, replenishing electrolytes naturally.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Cucumber & Jicama Hydration Salad?",
                answer: "The primary benefit of Cucumber & Jicama Hydration Salad is Electrolyte Balance & Cellular Hydration.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Cucumber & Jicama Hydration Salad take to prepare?",
                answer: "Cucumber & Jicama Hydration Salad takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Cucumber & Jicama Hydration Salad have?",
                answer: "Cucumber & Jicama Hydration Salad contains approximately 110 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Cucumber & Jicama Hydration Salad?",
                answer: "Cucumber & Jicama Hydration Salad is tagged as: Hydration, Electrolytes, Prebiotic.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Cucumber & Jicama Hydration Salad?",
                answer: "Cucumber (1 large), Jicama (1 cup diced), Lime (1 juiced), Sea Salt (pinch)",
                category: "Ingredients"
            },
            {
                question: "Who created the Cucumber & Jicama Hydration Salad recipe?",
                answer: "Cucumber & Jicama Hydration Salad was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Cellular hydration in Cucumber & Jicama Hydration Salad?",
                answer: "Cucumber water and silica supporting connective tissue.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Gut balance in Cucumber & Jicama Hydration Salad?",
                answer: "Jicama inulin feeding beneficial microbiome.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Natural balance in Cucumber & Jicama Hydration Salad?",
                answer: "Potassium/Sodium pairing from lime and sea salt.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Antioxidant cooling in Cucumber & Jicama Hydration Salad?",
                answer: "Mint and cilantro aiding cellular protection.",
                category: "Ingredient Benefits"
            }
        ],
    'lentil-walnut-pate': [
            {
                question: "What is Black Lentil & Walnut Pat\u00E9?",
                answer: "The Nutrient-Dense Spread for Sustained Iron & Cognitive Function.",
                category: "Overview"
            },
            {
                question: "What makes Black Lentil & Walnut Pat\u00E9 a therapeutic recipe?",
                answer: "Savory pat\u00E9 combining iron from lentils and healthy fats from walnuts for cognitive performance.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Black Lentil & Walnut Pat\u00E9?",
                answer: "The primary benefit of Black Lentil & Walnut Pat\u00E9 is Sustained Iron & Cognitive Function.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Black Lentil & Walnut Pat\u00E9 take to prepare?",
                answer: "Black Lentil & Walnut Pat\u00E9 takes 20 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Black Lentil & Walnut Pat\u00E9 have?",
                answer: "Black Lentil & Walnut Pat\u00E9 contains approximately 280 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Black Lentil & Walnut Pat\u00E9?",
                answer: "Black Lentil & Walnut Pat\u00E9 is tagged as: Iron Rich, Brain Health, Cognitive.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Black Lentil & Walnut Pat\u00E9?",
                answer: "Black Lentils (1 cup cooked), Walnuts (1/2 cup), Nutritional Yeast (1 tbsp), Thyme (1 tsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Black Lentil & Walnut Pat\u00E9 recipe?",
                answer: "Black Lentil & Walnut Pat\u00E9 was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Blood building in Black Lentil & Walnut Pat\u00E9?",
                answer: "Heme-free iron for oxygen transport and fatigue reduction.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Brain fuel in Black Lentil & Walnut Pat\u00E9?",
                answer: "ALA Omega-3s from walnuts reducing neural inflammation.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Metabolic B-vitamins in Black Lentil & Walnut Pat\u00E9?",
                answer: "Nutritional yeast providing nervous system support.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Immune foundation in Black Lentil & Walnut Pat\u00E9?",
                answer: "Allicin from garlic contributing to systemic health.",
                category: "Ingredient Benefits"
            }
        ],
    'pear-ginger-slaw': [
            {
                question: "What is Pear & Ginger Probiotic Slaw?",
                answer: "The Fermented, Crunchy Side for Digestive Enzymes & Gut Flora Renewal.",
                category: "Overview"
            },
            {
                question: "What makes Pear & Ginger Probiotic Slaw a therapeutic recipe?",
                answer: "Unique slaw marrying soft pear with sharp ginger and digestive power of brief fermentation.",
                category: "Healing Benefits"
            },
            {
                question: "What is the primary health benefit of Pear & Ginger Probiotic Slaw?",
                answer: "The primary benefit of Pear & Ginger Probiotic Slaw is Digestive Enzymes & Gut Flora Renewal.",
                category: "Primary Benefit"
            },
            {
                question: "How long does Pear & Ginger Probiotic Slaw take to prepare?",
                answer: "Pear & Ginger Probiotic Slaw takes 15 mins to prepare.",
                category: "Prep Time"
            },
            {
                question: "How many calories does Pear & Ginger Probiotic Slaw have?",
                answer: "Pear & Ginger Probiotic Slaw contains approximately 130 calories.",
                category: "Nutrition"
            },
            {
                question: "What are the key attributes of Pear & Ginger Probiotic Slaw?",
                answer: "Pear & Ginger Probiotic Slaw is tagged as: Probiotics, Digestion, Enzymes.",
                category: "Attributes"
            },
            {
                question: "What ingredients do I need for Pear & Ginger Probiotic Slaw?",
                answer: "Napa Cabbage (2 cups), Pear (1 sliced), Ginger Juice (1 tbsp), Raw ACV (1 tbsp)",
                category: "Ingredients"
            },
            {
                question: "Who created the Pear & Ginger Probiotic Slaw recipe?",
                answer: "Pear & Ginger Probiotic Slaw was prepared by Nutrition Colours Dr. Shilpa Thakur.",
                category: "Attribution"
            },
            {
                question: "What are the health benefits of Microbiome renewal in Pear & Ginger Probiotic Slaw?",
                answer: "Cabbage fiber acting as prebiotic for live cultures.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Intestinal lining in Pear & Ginger Probiotic Slaw?",
                answer: "Pear pectin supporting digestive speed regulation.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Enzyme stimulation in Pear & Ginger Probiotic Slaw?",
                answer: "Raw ginger juice encouraging body's own enzymes.",
                category: "Ingredient Benefits"
            },
            {
                question: "What are the health benefits of Probiotic acidity in Pear & Ginger Probiotic Slaw?",
                answer: "Raw ACV mother introducing beneficial bacteria.",
                category: "Ingredient Benefits"
            }
        ],
};

