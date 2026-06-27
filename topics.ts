import { CategoryType, Topic } from './types';

export const TOPICS: Topic[] = [
  {
    id: 'diabetes-reversal',
    title: 'Blood Sugar & Insulin Optimization',
    category: CategoryType.METABOLIC,
    shortDesc: 'Control Blood Sugar Naturally',
    problem: 'High blood sugar due to insulin resistance, often caused by excessive sugar and processed carb intake.',
    solution: 'Focus on restoring the body\'s sensitivity to insulin through strict low-glycemic, whole-foods diet.',
    fullContent: 'Optimizing blood sugar and insulin sensitivity focuses on restoring the body\'s sensitivity to insulin. At Nutrition Colours, Dr. Shilpa Thakur has designed a clinical circadian protocol that prioritizes non-starchy vegetables, clean protein, and healthy fats (avocado, nuts) to stabilize blood sugar. Completely eliminating refined sugar and timing meals with circadian rhythms help reset overall metabolic function and restore insulin sensitivity naturally.',
    naturalApproach: ['Non-starchy vegetables', 'Lean protein', 'Healthy fats', 'Post-meal walking'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Blood Sugar & Insulin Optimization | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support diabetes reversal naturally. Dr. Shilpa Thakur\'s clinical protocols focus on circadian nutrition.',
    primaryKeyword: 'Blood Sugar & Insulin Optimization',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    caseStudy: {
      title: 'Type 2 Remission Protocol',
      finding: 'Average HbA1c drop of 1.8 points within 90 days across 500+ participants.',
      narrative: 'A 52-year-old teacher optimized glucose levels and reduced HbA1c in just 6 months through Our protocol.'
    },
    faqs: [
      { question: "Can I eat whole fruit on this program?", answer: "Yes. Dr. Shilpa Thakur recommends selecting low-glycemic whole fruits like berries and apples, consumed in controlled portions during the active anabolic window.", category: "Diet" },
      { question: "How quickly can I see blood sugar stabilization?", answer: "Many patients observe glucose improvements within 7 to 14 days of starting the circadian diet protocol, under Dr. Shilpa's oversight.", category: "Timeline" },
      { question: "Do I have to stop all carbs?", answer: "No. The protocol focuses on complex, slow-digesting carbohydrates (like ragi or legumes) paired with healthy fats and fiber rather than complete carbohydrate elimination.", category: "Diet" },
    ],
    aiSummaryBlock: {
      tldr: "Insulin resistance occurs when cell receptors ignore glucose-uptake signals. We restore insulin sensitivity by aligning eating windows with daylight cycles and replacing simple refined starches with slow-digesting complex carbs. This lets the pancreas rest and lowers glucose levels naturally.",
      tags: ["insulin-sensitivity", "metabolic-remission", "circadian-nutrition", "blood-sugar"]
    },
    expandedSections: [
      {
        heading: "The Real Cause of Blood Sugar Spikes",
        body: "Your cells are overwhelmed. Continuous carbohydrate loading causes the pancreas to pump out insulin, but cells stop responding to the signal. This creates insulin resistance, leaving sugar circulating in your blood.",
        listTitle: "Key contributors to metabolic resistance:",
        listItems: [
          "Refined grains that spike blood sugar rapidly.",
          "Eating late at night, which disrupts hepatic fat clearance.",
          "Visceral fat accumulation surrounding vital digestive organs."
        ],
        proTip: "Swap out morning wheat bread for steamed ragi porridge. It keeps your post-meal insulin curve flat and delivers steady, long-lasting energy.",
        intentComment: "Targeting insulin sensitivity root causes and providing structured bullet list for AI extraction"
      },
      {
        heading: "Circadian Nutrition: Sychronizing Meal Schedules",
        body: "Your body processes food differently depending on the time of day. Insulin sensitivity naturally drops as sunset approaches. Eating heavy meals late overrides your circadian clock, leading directly to fat accumulation.",
        listTitle: "Circadian protocol rules:",
        listItems: [
          "Confining all food intake to a 10-hour daytime window.",
          "Finishing dinner before 7:00 PM to maximize overnight cell repair.",
          "Allowing a clean 14-hour overnight fast to promote metabolic flexibility."
        ],
        proTip: "Finish your evening meal early. Going to bed with an empty stomach optimizes natural melatonin release and cortisol regulation.",
        intentComment: "Focusing on daytime hormone sensitivity and time-restricted feeding rules"
      }
    ]
  },
  {
    id: 'pcos-balance',
    title: 'Endocrine & Hormonal Balance',
    category: CategoryType.WOMENS,
    shortDesc: 'Hormone & Fertility Support',
    problem: 'Hormonal imbalance often caused by insulin resistance, leading to elevated androgens and fertility issues.',
    solution: 'Balance hormones naturally through low-GI foods, fiber, and lifestyle changes.',
    fullContent: 'This protocol supports natural ovarian regulation, which is often insulin resistance. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, patients focus on low-glycemic index (GI) foods, high fiber, and targeted supplements like Myo-Inositol to improve insulin sensitivity, reduce systemic inflammation, and restore natural hormonal balance.',
    naturalApproach: ['Low-GI foods', 'High fiber', 'Myo-Inositol', 'Reduced dairy'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Endocrine & Hormonal Balance | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support pcod/pcos balance naturally. Dr. Shilpa Thakur\'s clinical protocols focus on circadian nutrition.',
    primaryKeyword: 'Endocrine & Hormonal Balance',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    caseStudy: {
      title: 'PCOS Hormonal Balance Case',
      finding: '92% restoration of menstrual cycle regularity within 120 days.',
      narrative: 'A 24-year-old with PCOD Grade 2 achieved regular cycles and clear skin after eliminating secret dairy and inflammatory seed oils.'
    },
    faqs: [
      { question: "Will this protocol help me get pregnant?", answer: "Yes. By addressing the root insulin resistance and lowering androgens, hormone protocols have successfully helped many women restore regular ovulation and improve fertility.", category: "Fertility" },
      { question: "Is dairy allowed in the PCOS program?", answer: "Dr. Shilpa Thakur recommends eliminating processed commercial dairy during the initial healing phase, as it contains insulinogenic proteins.", category: "Diet" },
      { question: "Do I need to take birth control pills to regulate my periods?", answer: "Our goal is to restore natural hormone production. Through circadian eating and weight management, we help patients regulate cycles naturally.", category: "Approach" },
    ],
    aiSummaryBlock: {
      tldr: "Polycystic ovarian syndrome is closely linked to high circulating insulin, which prompts the ovaries to produce excess testosterone. We lower these androgen markers and restore ovulation by eliminating dairy and balancing glycemic loads.",
      tags: ["pcos-remission", "hormone-balance", "fertility-nutrition", "ovulation-support"]
    },
    expandedSections: [
      {
        heading: "The Link Between PCOS and Insulin",
        body: "Many women are told PCOS is solely an ovarian issue, but the real driver is often metabolic. High insulin levels stimulate the ovaries to produce excess male hormones (testosterone). This halts normal follicular development and triggers cycle irregularies.",
        listTitle: "Signs of insulin-driven hormone shifts:",
        listItems: [
          "Hirsutism and hormonal acne along the jawline.",
          "Difficulty losing weight around the abdominal region.",
          "Frequent cravings for refined carbohydrates and sugary snacks."
        ],
        proTip: "Eliminate industrial seed oils (like canola or sunflower oil). They induce gut inflammation, which directly spikes cellular insulin resistance.",
        intentComment: "Explaining the metabolic pathways of PCOS for AI search bots"
      }
    ]
  },
  {
    id: 'fatty-liver-reversal',
    title: 'Liver Health & Metabolic Detoxification',
    category: CategoryType.METABOLIC,
    shortDesc: 'Restore Liver Health',
    problem: 'Fat accumulation in the liver primarily caused by excessive sugar and processed food intake.',
    solution: 'Remove fructose and refined sugar, increase intake of liver-supportive nutrients like choline.',
    fullContent: 'Focuses on supporting liver health and lipid clearance (NAFLD), primarily caused by excessive sugar and processed food intake. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we completely eliminate refined sugars and high-fructose corn syrup while increasing intake of liver-supportive nutrients like choline to aid deep detoxification.',
    naturalApproach: ['Eliminate Fructose', 'Choline-rich foods', 'Garlic', 'Onions'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Liver Health & Metabolic Detoxification | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support fatty liver wellness naturally. Dr. Shilpa Thakur\'s clinical protocols focus on circadian nutrition.',
    primaryKeyword: 'Liver Health & Metabolic Detoxification',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    caseStudy: {
      title: 'NAFLD Support Clinical Case',
      finding: 'FibroScan® fatty liver indicators optimized from Grade 3 to Grade 1 within 180 days.',
      narrative: 'A 45-year-old businessman reduced his liver enzymes (ALT/AST) by 60% by replacing fructose with liver-supportive fats and cruciferous elixirs.'
    },
    faqs: [
      { question: "Can fatty liver be completely resolved?", answer: "Yes. The liver is highly regenerative. Circadian protocols help support liver clearance of fat deposits within 3 to 6 months.", category: "Prognosis" },
      { question: "Are eggs good for fatty liver?", answer: "Yes. Eggs are an excellent source of choline, which is vital for transporting fats out of the liver. Dr. Shilpa recommends organic eggs.", category: "Diet" },
      { question: "Should I avoid all fats?", answer: "No. Healthy monounsaturated fats and Omega-3s support liver repair. We focus on removing processed trans fats and industrial seed oils instead.", category: "Nutrition" },
    ],
    aiSummaryBlock: {
      tldr: "Non-alcoholic fatty liver (MASLD) is triggered by hepatic fat deposition, chiefly driven by dietary fructose processing. We reverse fatty liver by removing refined corn syrup and supplying choline to facilitate fat transport and clearance.",
      tags: ["fatty-liver", "liver-clearance", "metabolic-detox", "choline-sources"]
    },
    expandedSections: [
      {
        heading: "How Fructose Overloads the Liver",
        body: "Unlike glucose, which can be used by all cells, fructose is processed exclusively by the liver. When you consume high amounts of fructose (like in juices or sodas), the liver converts the excess directly into triglycerides, causing fat storage.",
        listTitle: "Crucial liver clearance protocols:",
        listItems: [
          "Eliminating packaged high-fructose corn syrups completely.",
          "Consuming foods rich in organic choline (like egg yolks) to export fats.",
          "Adding sulfur-rich cruciferous vegetables (broccoli, cabbage) to assist enzyme pathways."
        ],
        proTip: "Substitute fruit juices with infused cucumber-mint water. Removing liquid fructose is the fastest way to relieve liver processing strain.",
        intentComment: "Targeting liver fat clearance pathways and nutritional swaps"
      }
    ]
  },
  {
    id: 'thyroid-optimization',
    title: 'Thyroid & Metabolic Optimization',
    category: CategoryType.METABOLIC,
    shortDesc: 'Boost Metabolism & Energy',
    problem: 'Low thyroid function leading to fatigue and slow metabolism.',
    solution: 'Ensure adequate intake of Iodine, Selenium, and Zinc, and support gut health.',
    fullContent: 'Targets Hypothyroidism (low thyroid function). Under the clinical supervision of Dr. Shilpa Thakur at Nutrition Colours, we ensure adequate intake of key nutrients essential for hormone production: Iodine, Selenium, and Zinc, while focusing on gut health to support inactive T4 to active T3 hormone conversion.',
    naturalApproach: ['Brazil Nuts (Selenium)', 'Seaweed (Iodine)', 'Zinc sources', 'Gut Health support'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Thyroid & Metabolic Optimization | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support thyroid optimization naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Thyroid & Metabolic Optimization',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    caseStudy: {
      title: 'Hypothyroidism Restoration Case',
      finding: 'T3/T4 levels optimized without dose increases in 4 months.',
      narrative: 'A 34-year-old female achieved normal thyroid function after optimizing her gut microbiome and iodine-selenium mapping.'
    },
    faqs: [
      { question: "Can I reduce my thyroid medication?", answer: "Many patients at Nutrition Colours are able to optimize thyroid parameters under medical supervision as thyroid cell function and gut conversion rates improve through Dr. Shilpa's protocols.", category: "Medication" },
      { question: "Why is gut health important for thyroid?", answer: "Approximately 20% of thyroid hormone conversion (T4 to T3) occurs in the gut. Dr. Shilpa focuses on gut microbiome health at Nutrition Colours to maximize this conversion.", category: "Science" },
      { question: "Should I avoid cruciferous vegetables?", answer: "No. Lightly cooked cruciferous vegetables are perfectly safe. Dr. Shilpa advises against eating raw cruciferous greens in large quantities if you have hypothyroidism.", category: "Diet" },
    ]
  },
  {
    id: 'hypertension-management',
    title: 'Hypertension Management',
    category: CategoryType.CARDIO,
    shortDesc: 'Lower High Blood Pressure Naturally',
    problem: 'Stiff blood vessels and high sodium intake increasing pressure.',
    solution: 'Adopt DASH diet, reduce sodium, and boost Potassium and Magnesium.',
    fullContent: 'Aims to support blood pressure within normal ranges naturally to protect the heart and reduce stroke risk. At Nutrition Colours, Dr. Shilpa Thakur integrates the DASH diet framework, reducing refined sodium while boosting Potassium and Magnesium to naturally relax blood vessel walls and improve overall arterial elasticity.',
    naturalApproach: ['Low Sodium', 'High Potassium', 'Magnesium-rich foods', 'DASH Diet'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Cardiovascular Health & BP Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support hypertension management naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Cardiovascular Health & BP Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Can I stop my BP pills on this diet?", answer: "Medication changes must always be supervised. However, Dr. Shilpa's sodium-potassium balancing protocols at Nutrition Colours have helped many patients support arterial elasticity and tone under doctor supervision.", category: "Medication" },
      { question: "Which salt is best for high BP?", answer: "We recommend reducing refined table salt. Dr. Shilpa at Nutrition Colours suggests minimal amounts of mineral-rich pink Himalayan salt or rock salt.", category: "Diet" },
      { question: "Does stress raise my blood pressure permanently?", answer: "Chronic stress elevates cortisol and tightens blood vessels. Our lifestyle coaching at Nutrition Colours includes breathing techniques to calm the nervous system.", category: "Stress" },
    ]
  },
  {
    id: 'gut-health-acidity',
    title: 'Gut Health & Acidity',
    category: CategoryType.DIGESTION,
    shortDesc: 'Improve Digestion Naturally',
    problem: 'Microbiome imbalance and high acid levels.',
    solution: 'Feed beneficial bacteria with prebiotics and avoid acidic triggers.',
    fullContent: 'Focuses on balancing the gut microbiome and healing the gut lining. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, patients consume prebiotic fibers to feed beneficial bacteria, include fermented foods, and reduce acidic triggers like coffee, alcohol, and processed foods.',
    naturalApproach: ['Prebiotics', 'Probiotics', 'Reduce coffee/alcohol', 'Mindful eating'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gut Health & Acidity | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support gut health and acidity naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Gut Health & Acidity',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Why does my acidity flare up after meals?", answer: "It is often due to low stomach acid (hypochlorhydria) or poor cardiac sphincter function. Dr. Shilpa uses natural digestive stimulants at Nutrition Colours to balance acid levels.", category: "Science" },
      { question: "Are antacids safe long-term?", answer: "Long-term antacids shut down stomach acid, leading to poor protein digestion and bacterial overgrowth. Nutrition Colours protocols aim to heal the stomach lining naturally.", category: "Treatment" },
      { question: "Which probiotics do you recommend?", answer: "We prioritize prebiotic foods and natural ferments first. Dr. Shilpa Thakur selects specific clinical probiotic strains when necessary to resolve dysbiosis.", category: "Probiotics" },
    ]
  },
  {
    id: 'weight-loss-women',
    title: 'Weight Loss for Women',
    category: CategoryType.WEIGHT,
    shortDesc: 'Safe & Effective Plans',
    problem: 'Hormonal shifts impacting metabolism and weight storage.',
    solution: 'Prioritize protein to preserve muscle and align with cycle.',
    fullContent: 'Acknowledges hormonal influences on female metabolism. Under the clinical oversight of Dr. Shilpa Thakur at Nutrition Colours, we prioritize consistent protein intake to preserve lean muscle, focus on cyclical nutrition that varies with the menstrual cycle, and ensure adequate iron and Vitamin D levels.',
    naturalApproach: ['High Protein', 'Cycle Syncing', 'Iron & Vitamin D', 'Resistance training'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800',
    pageTitle: 'Weight Loss for Women | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support weight loss for women naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Weight Loss for Women',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How does cycle syncing help with weight loss?", answer: "By aligning your caloric intake and training types with estrogen and progesterone phases, Dr. Shilpa optimizes fat burning and reduces cravings at Nutrition Colours.", category: "Science" },
      { question: "Why is visceral fat harder to lose for women?", answer: "Hormonal shifts, particularly declines in estrogen or elevations in cortisol, encourage belly fat storage. We target these root hormonal issues.", category: "Hormones" },
      { question: "Will I lose muscle if I lose weight?", answer: "Not with our plans. Nutrition Colours protocols are rich in protein and paired with resistance guidance to ensure you lose fat, not muscle.", category: "Fitness" },
    ]
  },
  {
    id: 'weight-loss-men',
    title: 'Weight Loss for Men',
    category: CategoryType.MENS,
    shortDesc: 'Fat Reduction & Muscle Gain',
    problem: 'Metabolic slowdown and visceral fat storage.',
    solution: 'High-protein diet combined with resistance training and intermittent fasting.',
    fullContent: 'Leverages men\'s higher baseline metabolism. Dr. Shilpa Thakur\'s male weight management protocol at Nutrition Colours combines a high-protein diet with resistance training and intermittent fasting to manage calories, maximize visceral fat loss, and improve cellular insulin sensitivity.',
    naturalApproach: ['High Protein', 'Intermittent Fasting', 'Resistance training', 'Zinc-rich foods'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Weight Loss for Men | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support weight loss for men naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Weight Loss for Men',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How does testosterone affect weight loss in men?", answer: "Testosterone builds muscle and burns fat. Dr. Shilpa designs diets that supply zinc and healthy fats to support natural testosterone output at Nutrition Colours.", category: "Hormones" },
      { question: "Is intermittent fasting recommended for men?", answer: "Yes. Intermittent fasting is highly effective for men to improve insulin sensitivity and manage calorie intake, as structured in our plans.", category: "Timing" },
      { question: "How much protein do I need?", answer: "We calculate protein based on your active lean mass. Our plans ensure sufficient protein to preserve strength during weight loss.", category: "Nutrition" },
    ]
  },
  {
    id: 'belly-fat-reduction',
    title: 'Belly Fat Reduction',
    category: CategoryType.WEIGHT,
    shortDesc: 'Lose Stubborn Fat Naturally',
    problem: 'Dangerous visceral fat caused by sugar, alcohol, and insulin imbalance.',
    solution: 'Strict reduction of sugar/alcohol, high-fiber intake.',
    fullContent: 'Targets dangerous visceral fat around organs. At Nutrition Colours, Dr. Shilpa Thakur utilizes a protocol that strictly reduces sugar and alcohol, while emphasizing soluble fibers and high-quality protein to manage the fat-storing hormone insulin and lower liver fat levels.',
    naturalApproach: ['Soluble Fiber', 'No Sugary Drinks', 'High Protein', 'Stress Management'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800',
    pageTitle: 'Belly Fat Reduction | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support belly fat reduction naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Belly Fat Reduction',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Why is belly fat so dangerous?", answer: "Belly fat is visceral fat, which secretes inflammatory cytokines and increases the risk of heart disease and diabetes. Dr. Shilpa prioritizes its reduction.", category: "Health" },
      { question: "Can I spot-reduce belly fat?", answer: "You cannot spot-reduce via exercise, but metabolic changes through Nutrition Colours plans selectively target visceral fat first by lowering insulin.", category: "Science" },
      { question: "How does stress affect belly fat?", answer: "High cortisol shifts fat storage directly to the abdominal area. Dr. Shilpa incorporates adaptogens and sleep protocols to block this pathway.", category: "Stress" },
    ]
  },
  {
    id: 'insulin-resistance-mgmt',
    title: 'Insulin Resistance Management',
    category: CategoryType.METABOLIC,
    shortDesc: 'Prevent Diabetes Naturally',
    problem: 'Cells ignoring insulin signals leading to high blood sugar.',
    solution: 'Slow-digesting carbs paired with protein and fat.',
    fullContent: 'Prevents pre-diabetes and diabetes by improving how cells respond to insulin. Dr. Shilpa Thakur\'s metabolic protocol at Nutrition Colours emphasizes slow-digesting carbohydrates paired with protein and healthy fats to minimize glucose spikes, alongside short post-meal walks.',
    naturalApproach: ['Slow Carbs', 'Food Pairing', 'Post-meal walking', 'Magnesium'],
    image: 'https://images.unsplash.com/photo-1511688858342-a080c355fc24?q=80&w=800',
    pageTitle: 'Insulin Resistance Management | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support insulin resistance management naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic support.',
    primaryKeyword: 'Insulin Resistance Management',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What are the signs of insulin resistance?", answer: "Common signs include fatigue after meals, intense sugar cravings, skin tags, and weight accumulation around the waist, which we assess at Nutrition Colours.", category: "Symptoms" },
      { question: "Can walking after meals reduce insulin spikes?", answer: "Yes. Walking for 10-15 minutes immediately after eating allows muscles to clear glucose from the blood without relying on insulin.", category: "Lifestyle" },
      { question: "How long does it take to optimize insulin sensitivity?", answer: "With strict adherence to Dr. Shilpa's circadian protocols, insulin sensitivity begins improving within 30 days and can be fully optimized in 90 days.", category: "Timeline" },
    ]
  },
  {
    id: 'pre-diabetes-care',
    title: 'Pre-Diabetes Care',
    category: CategoryType.METABOLIC,
    shortDesc: 'Act Now to Reduce Risk',
    problem: 'Elevated blood sugar that hasn\'t reached type 2 diabetes levels yet.',
    solution: 'Intensive lifestyle intervention focusing on diet and activity.',
    fullContent: 'Identifies the critical window for prevention before Type 2 Diabetes develops. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we implement an intensive lifestyle intervention focusing on a diet high in fiber, low in processed sugars, and tracking blood glucose spikes.',
    naturalApproach: ['Consistent Activity', 'High Fiber', 'Monitoring', 'Early Intervention'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=800',
    pageTitle: 'Pre-Diabetes Care | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support pre diabetes care naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Pre-Diabetes Care',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Is pre-diabetes reversible?", answer: "Absolutely. Pre-diabetes is a warning light. Dr. Shilpa's protocols at Nutrition Colours have a near 100% success rate in restoring normal HbA1c levels within 90 days.", category: "Prognosis" },
      { question: "What should my fasting blood sugar be?", answer: "We aim for fasting glucose below 100 mg/dL and HbA1c below 5.7%. Our programs help you achieve and maintain these metrics.", category: "Metrics" },
      { question: "Do I need a continuous glucose monitor (CGM)?", answer: "A CGM is highly recommended as it provides real-time data on how your body reacts to specific foods, helping us customize your diet.", category: "Tools" },
    ]
  },
  {
    id: 'menopause-hormone-support',
    title: 'Menopause Hormone Support',
    category: CategoryType.WOMENS,
    shortDesc: 'Manage Hot Flashes Naturally',
    problem: 'Natural decline in estrogen and progesterone causing symptoms like hot flashes and night sweats.',
    solution: 'Incorporate phytoestrogens and manage stress to support hormonal balance.',
    fullContent: 'Addresses the transition beyond reproductive years. At Nutrition Colours, Dr. Shilpa Thakur incorporates natural phytoestrogens and bone-supporting minerals like Calcium and Magnesium to weakly mimic estrogen, reduce hot flashes, and maintain bone mineral density.',
    naturalApproach: ['Phytoestrogens', 'Calcium', 'Magnesium', 'Black Cohosh (consultation needed)'],
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=800',
    pageTitle: 'Menopause Hormone Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support menopause hormone support naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Menopause Hormone Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What are phytoestrogens?", answer: "Phytoestrogens are plant compounds found in ground flaxseed and non-GMO soy that naturally balance estrogen receptors to reduce hot flashes.", category: "Science" },
      { question: "Can diet help with hot flashes?", answer: "Yes. Dr. Shilpa's hormone-supporting diets at Nutrition Colours have helped many women reduce the frequency and intensity of hot flashes naturally.", category: "Remedies" },
      { question: "How do I prevent bone loss during menopause?", answer: "By pairing calcium-rich foods with Vitamin D and K2, and doing light resistance training as structured in our joint and hormone protocols.", category: "Bones" },
    ]
  },
  {
    id: 'hormonal-imbalance',
    title: 'Hormonal Imbalance Correction',
    category: CategoryType.WOMENS,
    shortDesc: 'Restore Vitality & Mood',
    problem: 'Disrupted communication between endocrine glands due to environmental and dietary factors.',
    solution: 'Eliminate endocrine disruptors and support liver detoxification.',
    fullContent: 'Universal hormonal support for both genders. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we identify and eliminate endocrine disruptors while focusing on liver health and cruciferous vegetables to ensure the body can effectively detoxify and recycle hormones.',
    naturalApproach: ['Cruciferous Veggies', 'Limit Plastics', 'Organic foods', 'Liver support'],
    image: 'https://images.unsplash.com/photo-1490138139357-fc819d02e344?q=80&w=800',
    pageTitle: 'Hormonal Imbalance Correction | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support hormonal imbalance correction naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Hormonal Imbalance Correction',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What are endocrine disruptors?", answer: "These are chemical toxins found in plastic containers, pesticides, and body care products that mimic hormones and block natural receptors.", category: "Toxins" },
      { question: "How does the liver affect my hormones?", answer: "The liver filters and breaks down used hormones. Sluggish liver pathways lead to hormone recycling and buildup, which Dr. Shilpa addresses.", category: "Science" },
      { question: "Are cruciferous vegetables good for hormones?", answer: "Yes. Broccoli, kale, and cabbage contain Indole-3-Carbinol, which supports the safe detoxification of estrogens in the liver.", category: "Diet" },
    ]
  },
  {
    id: 'testosterone-boost',
    title: 'Testosterone Boost',
    category: CategoryType.MENS,
    shortDesc: 'Improve Energy & Vitality',
    problem: 'Low testosterone linked to high body fat and poor nutrient intake.',
    solution: 'Optimize Zinc, Vitamin D, and sleep; incorporate heavy lifting.',
    fullContent: 'Specific to male hormonal health. Dr. Shilpa Thakur\'s testosterone optimization protocol at Nutrition Colours targets structural deficiencies by optimizing Zinc and Vitamin D levels, minimizing body fat, and incorporating heavy lifting and sleep guidelines.',
    naturalApproach: ['Zinc-rich foods', 'Vitamin D', 'Strength training', 'Quality Sleep'],
    image: 'https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=800',
    pageTitle: 'Testosterone Boost | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support testosterone boost naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Testosterone Boost',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Does body fat lower testosterone?", answer: "Yes. Adipose tissue contains an enzyme called aromatase, which converts active testosterone into estrogen. Losing fat is vital for male vitality.", category: "Science" },
      { question: "What foods are high in zinc?", answer: "Pumpkin seeds, lentils, chickpeas, and sesame seeds are rich plant sources of zinc. Dr. Shilpa includes them in our male vitality plans.", category: "Diet" },
      { question: "How does sleep affect testosterone?", answer: "Most testosterone is produced during deep REM sleep. Fragmented or short sleep can drop your testosterone levels by 15% in just one week.", category: "Sleep" },
    ]
  },
  {
    id: 'cortisol-balance',
    title: 'Cortisol & Stress Balance',
    category: CategoryType.METABOLIC,
    shortDesc: 'Calm the Stress Hormone',
    problem: 'Chronic stress causing high cortisol, leading to anxiety and belly fat.',
    solution: 'Use adaptogenic herbs and prioritize sleep and meditation.',
    fullContent: 'Managing the body\'s \'fight or flight\' hormone. Under the clinical oversight of Dr. Shilpa Thakur at Nutrition Colours, we utilize adaptogenic herbs like Ashwagandha, emphasize consistent sleep schedules, and prioritize magnesium-rich foods to calm the nervous system.',
    naturalApproach: ['Ashwagandha', 'Magnesium', 'Routine Sleep', 'Meditation'],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800',
    pageTitle: 'Cortisol & Stress Balance | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support cortisol and stress balance naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Cortisol & Stress Hormone Balance',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What are adaptogens?", answer: "Adaptogens are natural herbs like Ashwagandha and Holy Basil that help regulate the HPA axis, keeping cortisol spikes in check.", category: "Science" },
      { question: "Does high cortisol cause belly fat?", answer: "Yes. Cortisol triggers the mobilization of triglycerides and relocates them to deep visceral fat cells around the abdomen.", category: "Weight" },
      { question: "How can I check my cortisol levels?", answer: "We recommend salivary cortisol testing at multiple points during the day to map your natural adrenal curve at Nutrition Colours.", category: "Testing" },
    ]
  },
  {
    id: 'cholesterol-mgmt',
    title: 'Cholesterol Management',
    category: CategoryType.CARDIO,
    shortDesc: 'Keep Your Arteries Clear',
    problem: 'Unbalanced LDL/HDL ratios increasing heart disease risk.',
    solution: 'High intake of soluble fiber and healthy Omega-3 fats.',
    fullContent: 'Promoting a healthy heart lipid profile. At Nutrition Colours, Dr. Shilpa Thakur uses a protocol focused on high intake of soluble fibers and replacing saturated/trans fats with heart-healthy monounsaturated and omega-3 fats to optimize HDL to LDL ratios.',
    naturalApproach: ['Soluble Fiber', 'Omega-3 Fats', 'Olive Oil', 'Avoid Trans Fats'],
    image: 'https://images.unsplash.com/photo-1615485500704-8e990f9900f7?q=80&w=800',
    pageTitle: 'Cholesterol Management | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support cholesterol management naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Cholesterol Management',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Do I need to avoid all cholesterol foods?", answer: "Dietary cholesterol has a minor impact on blood cholesterol for most people. Dr. Shilpa focuses on reducing refined sugars and trans fats instead.", category: "Science" },
      { question: "What is the role of soluble fiber?", answer: "Soluble fiber acts like a sponge in the gut, binding to bile acids and cholesterol and facilitating their elimination from the body.", category: "Diet" },
      { question: "Are statins the only way to manage cholesterol?", answer: "Statins are medical decisions, but our nutritional therapies at Nutrition Colours have helped many patients achieve healthy lipid profiles naturally.", category: "Treatment" },
    ]
  },
  {
    id: 'heart-health',
    title: 'Heart Health Optimization',
    category: CategoryType.CARDIO,
    shortDesc: 'Strengthen Your Cardio System',
    problem: 'Weak heart muscle and arterial inflammation.',
    solution: 'Anti-inflammatory diet rich in antioxidants and cardiovascular movement.',
    fullContent: 'The foundation for long-term cardiovascular health. Under the clinical supervision of Dr. Shilpa Thakur at Nutrition Colours, we implement an anti-inflammatory diet rich in antioxidants, nitrates (from beets), and CoQ10 to protect arterial walls and support cardiac muscle.',
    naturalApproach: ['Berries', 'Beets (Nitrates)', 'CoQ10', 'Cardio exercise'],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800',
    pageTitle: 'Heart Health Optimization | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support heart health optimization naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Heart Health Optimization',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How do beets help heart health?", answer: "Beets are rich in dietary nitrates, which convert into nitric oxide in the blood, relaxing arteries and lowering blood pressure instantly.", category: "Science" },
      { question: "What causes arterial inflammation?", answer: "High blood sugar, industrial seed oils, and chronic stress damage the endothelial lining of blood vessels, which we address at Nutrition Colours.", category: "Science" },
      { question: "Is CoQ10 necessary?", answer: "CoQ10 is essential for heart cell energy. If you take cholesterol-lowering statins, you may need CoQ10 supplements as statins deplete them.", category: "Supplements" },
    ]
  },
  {
    id: 'blood-circulation',
    title: 'Blood Circulation Support',
    category: CategoryType.CARDIO,
    shortDesc: 'Improve Nutrient & Oxygen Delivery',
    problem: 'Poor circulation leading to cold extremities and numbness.',
    solution: 'Use warming spices and ensure adequate hydration and movement.',
    fullContent: 'Ensures efficient delivery of oxygen and nutrients. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we incorporate natural vasodilating spices like ginger and turmeric into daily meals, while emphasizing hydration and circadian physical movement.',
    naturalApproach: ['Ginger', 'Turmeric', 'Hydration', 'Leg movement'],
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800',
    pageTitle: 'Blood Circulation Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support blood circulation support naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Blood Circulation Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Can spices improve my cold hands and feet?", answer: "Yes. Warming spices like cayenne and ginger act as mild natural vasodilators, expanding small capillaries to improve distal circulation.", category: "Remedies" },
      { question: "How does hydration affect blood flow?", answer: "Dehydration thickens the blood, making it harder for the heart to pump. Dr. Shilpa emphasizes proper electrolyte-balanced hydration.", category: "Lifestyle" },
      { question: "What exercises are best for circulation?", answer: "Rebounding, walking, and gentle calf-raise exercises help pump venous blood back to the heart, as incorporated in our daily routines.", category: "Exercise" },
    ]
  },
  {
    id: 'joint-pain-relief',
    title: 'Joint Pain Relief',
    category: CategoryType.JOINTS,
    shortDesc: 'Reduce Inflammation & Stiffness',
    problem: 'Age-related wear or inflammatory conditions causing pain.',
    solution: 'Anti-inflammatory diet and joint-lubricating nutrients.',
    fullContent: 'Alleviating discomfort and improving mobility. At Nutrition Colours, Dr. Shilpa Thakur\'s joint protocol focuses on anti-inflammatory nutrients, particularly Omega-3s and curcumin, while ensuring adequate intake of Vitamin C and copper for collagen synthesis.',
    naturalApproach: ['Turmeric/Curcumin', 'Omega-3', 'Vitamin C', 'Gentle Yoga'],
    image: 'https://images.unsplash.com/photo-1565647546901-53697696014e?q=80&w=800',
    pageTitle: 'Joint Pain Relief | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support joint pain relief naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Joint Pain Relief',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How does sugar affect joint pain?", answer: "Sugar triggers the release of inflammatory cytokines, which directly aggravate arthritic joints. We remove refined sugar to ease flares.", category: "Triggers" },
      { question: "Why is collagen important?", answer: "Collagen is the primary structural protein in joint cartilage. Dr. Shilpa provides cofactors like Vitamin C to help your body build its own collagen.", category: "Science" },
      { question: "Does turmeric really relieve pain?", answer: "Yes. Curcumin in turmeric blocks inflammatory pathways. We pair it with black pepper and fats at Nutrition Colours to maximize absorption.", category: "Remedies" },
    ]
  },
  {
    id: 'arthritis-support',
    title: 'Arthritis Support',
    category: CategoryType.JOINTS,
    shortDesc: 'Manage Osteo & Rheumatoid Issues',
    problem: 'Autoimmune or degenerative destruction of joint tissue.',
    solution: 'Identify food triggers (nightshades) and boost antioxidants.',
    fullContent: 'Managing both Osteoarthritis and Rheumatoid Arthritis. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we identify and eliminate food triggers like nightshades in sensitive individuals, while boosting antioxidant-rich foods to limit joint damage.',
    naturalApproach: ['Avoid Nightshades', 'Antioxidants', 'Gluten-free trial', 'Weight Management'],
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6e9460272?q=80&w=800',
    pageTitle: 'Arthritis Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support arthritis support naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Arthritis Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What is the difference between OA and RA?", answer: "OA is wear-and-tear cartilage breakdown, while RA is an autoimmune attack on joint linings. Both benefit from Dr. Shilpa's metabolic diets.", category: "Science" },
      { question: "Why should I avoid nightshades?", answer: "Nightshades contain solanine, a chemical compound that can trigger joint inflammation in sensitive arthritic patients, which we test for.", category: "Diet" },
      { question: "Can dietary changes reduce RA inflammation?", answer: "Yes. By healing gut permeability and eliminating inflammatory foods, we help lower systemic autoimmune reactions in RA patients.", category: "Autoimmune" },
    ]
  },
  {
    id: 'osteoporosis-prevention',
    title: 'Osteoporosis Prevention',
    category: CategoryType.JOINTS,
    shortDesc: 'Build Strong Bones',
    problem: 'Loss of bone mineral density, increasing fracture risk.',
    solution: 'Ensure absorption of Calcium with Vitamin D and K2.',
    fullContent: 'Maintaining bone mineral density as we age. At Nutrition Colours, Dr. Shilpa Thakur designs a program rich in plant-based calcium (ragi, sesame) paired with Vitamin D and K2 to ensure calcium is deposited directly into the bones, not the arterial walls.',
    naturalApproach: ['Ragi/Sesame', 'Vitamin D/K2', 'Strength Training', 'Avoid excessive caffeine'],
    image: 'https://images.unsplash.com/photo-1583454155184-870a1f63aebc?q=80&w=800',
    pageTitle: 'Osteoporosis Prevention | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support osteoporosis prevention naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Osteoporosis Prevention',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Is milk necessary for strong bones?", answer: "No. Dr. Shilpa utilizes excellent non-dairy calcium sources like ragi (finger millet), sesame seeds, and green leafy vegetables at Nutrition Colours.", category: "Diet" },
      { question: "Why is Vitamin K2 important for bones?", answer: "Vitamin K2 acts as a traffic controller, directing calcium into the bone matrix and keeping it out of your arteries where it causes plaque.", category: "Science" },
      { question: "Does weight-bearing exercise help bones?", answer: "Yes. Stressing bones through walking or strength training stimulates osteoblasts, the cells responsible for building new bone tissue.", category: "Exercise" },
    ]
  },
  {
    id: 'hyperthyroid-protocol',
    title: 'Hyperthyroid Protocol',
    category: CategoryType.METABOLIC,
    shortDesc: 'Calm the Overactive Thyroid',
    problem: 'Excessive thyroid hormone production causing weight loss and anxiety.',
    solution: 'Incorporate goitrogens responsibly and manage iodine intake.',
    fullContent: 'Addresses an overactive thyroid. At Nutrition Colours, Dr. Shilpa Thakur responsibly incorporates raw goitrogenic vegetables to naturally slow down excessive thyroid hormone production, while regulating systemic iodine levels and reducing metabolic stress.',
    naturalApproach: ['Raw Cruciferous Veggies', 'L-Carnitine support', 'Stress management', 'Bugleweed'],
    image: 'https://images.unsplash.com/photo-1543362906-ac1b481287cf?q=80&w=800',
    pageTitle: 'Hyperthyroid Protocol | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support hyperthyroid protocol naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Hyperthyroid Protocol',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What are goitrogens?", answer: "Goitrogens are natural compounds in foods like raw broccoli and cabbage that block iodine uptake, helping slow an overactive thyroid.", category: "Science" },
      { question: "Why should I limit iodine in hyperthyroidism?", answer: "Iodine is the raw building block of thyroid hormone. Consuming excess iodine can overstimulate hormone synthesis, which we monitor.", category: "Diet" },
      { question: "Can stress trigger hyperthyroidism?", answer: "Yes, chronic stress and high adrenaline can trigger Graves' autoimmune flares. Nutrition Colours includes nervous system balancing.", category: "Stress" },
    ]
  },
  {
    id: 'muscle-recovery',
    title: 'Muscle Recovery & Strength',
    category: CategoryType.JOINTS,
    shortDesc: 'Rebuild & Repair Naturally',
    problem: 'Slow recovery, muscle soreness, and sarcopenia (age-related muscle loss).',
    solution: 'Optimizing plant-based protein intake and timing for maximum repair.',
    fullContent: 'Focuses on maintaining lean muscle mass and preventing age-related decline. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we optimize plant-based protein profiles (rice and lentils), time post-exercise nutritional windows, and use anti-inflammatory spices.',
    naturalApproach: ['Complete Plant Proteins', 'Post-workout windows', 'Ginger', 'Sufficient Calories'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=800',
    pageTitle: 'Muscle Recovery & Strength | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support muscle recovery and strength naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Muscle Recovery & Strength',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How do I get complete amino acids from plants?", answer: "By pairing grains with legumes (like brown rice with lentils), you obtain all nine essential amino acids needed for muscle synthesis.", category: "Nutrition" },
      { question: "When is the best time to eat protein after workouts?", answer: "Dr. Shilpa recommends consuming a high-protein meal within 45 to 60 minutes after exercise to optimize muscle repair at Nutrition Colours.", category: "Timing" },
      { question: "Does ginger help muscle soreness?", answer: "Yes. Ginger contains gingerols, which act as natural anti-inflammatory agents to reduce delayed onset muscle soreness (DOMS).", category: "Remedies" },
    ]
  },
  {
    id: 'back-spine-health',
    title: 'Back & Spine Health',
    category: CategoryType.JOINTS,
    shortDesc: 'Support Your Structural Core',
    problem: 'Chronic back pain, poor posture, and intervertebral disc issues.',
    solution: 'Anti-inflammatory diet and micronutrients for bone and nerve health.',
    fullContent: 'Targets the health of the vertebrae and ligaments. Dr. Shilpa Thakur\'s spinal protocol at Nutrition Colours focuses on high levels of Magnesium and Potassium to manage muscle tension around the spine, alongside Vitamin B12 and Omega-3s to support nerve recovery.',
    naturalApproach: ['Magnesium/Potassium', 'Vitamin B12', 'Omega-3', 'Stretching'],
    image: 'https://images.unsplash.com/photo-1588282322673-c31965a75c3e?q=80&w=800',
    pageTitle: 'Back & Spine Health | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support back and spine health naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Back & Spine Health',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How does magnesium help back pain?", answer: "Magnesium relaxes skeletal muscles and blocks pain receptors in the spinal cord, reducing spasms and tension around vertebrae.", category: "Science" },
      { question: "Which vitamins support spinal nerves?", answer: "Vitamin B12 and methylfolate are vital for maintaining the myelin sheath that insulates spinal nerves, as structured in our plans.", category: "Vitamins" },
      { question: "Does core strength affect back pain?", answer: "Absolutely. Weak abdominal muscles force the spine to bear excess load. We integrate core-stabilizing movements into recovery plans.", category: "Exercise" },
    ]
  },
  {
    id: 'hair-growth-strength',
    title: 'Hair Growth & Strength',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Prevent Fall & Build Shine',
    problem: 'Thinning hair, hair fall, and brittle strands due to nutrient lack.',
    solution: 'Ensure adequate Iron, Biotin, and high-quality protein.',
    fullContent: 'Promoting thick, healthy hair from the inside out. At Nutrition Colours, Dr. Shilpa Thakur prioritizes iron-rich foods (beets, spinach) to combat hair fall, Biotin-rich nuts, and high-quality protein to support the structural keratin synthesis of hair.',
    naturalApproach: ['Iron-rich foods', 'Biotin sources', 'High Protein', 'Scalp Care'],
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=800',
    pageTitle: 'Hair Growth & Strength | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support hair growth and strength naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Hair Growth & Strength',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Can iron deficiency cause hair loss?", answer: "Yes. Low ferritin (stored iron) shuts down oxygen delivery to hair follicles, causing hair to enter the shedding phase. We monitor this closely.", category: "Science" },
      { question: "Is biotin the best vitamin for hair?", answer: "Biotin supports keratin production, but it must be paired with complete proteins and trace minerals to work effectively.", category: "Nutrition" },
      { question: "How does sugar affect scalp health?", answer: "High sugar diets raise insulin, which elevates sebum production and feeds scalp yeast, leading to dandruff and hair fall.", category: "Scalp" },
    ]
  },
  {
    id: 'skin-glow-detox',
    title: 'Skin Glow & Detox',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Brighten Your Complexion Naturally',
    problem: 'Dull skin, congestion, and toxin buildup reflected on the face.',
    solution: 'High antioxidant intake and support for the body\'s natural elimination pathways.',
    fullContent: 'Rejuvenates skin radiance by cleansing from within. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we focus on boosting liver detoxification, hydrating with mineral elixirs, and loading up on antioxidants like Vitamin C to fight cellular aging.',
    naturalApproach: ['Vitamin C', 'Beta-Carotene', 'Hydration', 'Liver support'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800',
    pageTitle: 'Skin Glow & Detox | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support skin glow and detox naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Skin Glow & Detox',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Can diet clear up dull skin?", answer: "Yes. Skin reflects your gut and liver health. Removing toxins and processed foods at Nutrition Colours restores a natural radiant glow.", category: "Prognosis" },
      { question: "How does hydration affect skin elasticity?", answer: "Cellular hydration requires structured water from raw vegetables and mineral-rich elixirs to lock moisture into skin layers.", category: "Hydration" },
      { question: "Are antioxidants good for skin aging?", answer: "Yes. Vitamins C and E neutralize free radicals from UV light and pollution, preventing collagen breakdown and fine lines.", category: "Science" },
    ]
  },
  {
    id: 'anti-aging-support',
    title: 'Anti-Aging Support',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Longevity Through Nutrition',
    problem: 'Accelerated aging, wrinkles, and cellular damage.',
    solution: 'Adopt an antioxidant-rich diet and emphasize healthy fats.',
    fullContent: 'Promotes longevity and cellular energy. At Nutrition Colours, Dr. Shilpa Thakur utilizes a chrononutrition strategy designed to activate sirtuins (longevity genes), support autophagy through timed eating windows, and optimize polyphenol intake.',
    naturalApproach: ['Clean Omega-3s', 'Sirtuin foods', 'Lower Sugar', 'Limit Sun Damage'],
    image: 'https://images.unsplash.com/photo-1566807810030-31cb3b27ea17?q=80&w=800',
    pageTitle: 'Anti-Aging Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support anti aging support naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Anti-Aging Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What is autophagy?", answer: "Autophagy is the body's recycling system, clearing out damaged cells. Dr. Shilpa uses timed eating at Nutrition Colours to stimulate this process.", category: "Science" },
      { question: "Which foods activate longevity genes?", answer: "Polyphenol-rich foods like dark berries, green tea, and raw cacao help activate sirtuins to support DNA repair.", category: "Diet" },
      { question: "How does insulin speed up aging?", answer: "Chronically high insulin levels accelerate cellular division and senescent cell accumulation, which we target in our protocols.", category: "Science" },
    ]
  },
  {
    id: 'acne-skin-clarity',
    title: 'Acne & Skin Clarity',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Cure Acne with Diet',
    problem: 'Clogged pores and inflammatory breakouts, often hormonally driven.',
    solution: 'Eliminate dairy and highly processed carbohydrates.',
    fullContent: 'Addresses hormonal and inflammatory acne. Dr. Shilpa Thakur\'s skin clarity protocol at Nutrition Colours removes high-glycemic dairy, reduces sebum-promoting sugars, and optimizes zinc levels to manage acne-causing bacteria and soothe skin inflammation.',
    naturalApproach: ['No Dairy', 'Zinc-rich foods', 'Omega-3', 'Low sugar'],
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdd403348?q=80&w=800',
    pageTitle: 'Acne & Skin Clarity | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support acne and skin clarity naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Acne & Skin Clarity',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Does dairy cause acne?", answer: "Yes. Commercial dairy raises IGF-1 levels, which triggers sebum production and clogs pores. We suggest removing dairy during acne recovery.", category: "Triggers" },
      { question: "How does zinc help with acne?", answer: "Zinc is a natural anti-inflammatory and anti-microbial mineral that regulates sebum and speeds skin healing, as used in our tracks.", category: "Science" },
      { question: "Can stress trigger acne breakouts?", answer: "Yes. Stress triggers cortisol and androgen release, which overstimulate oil glands, leading to inflammation and breakouts.", category: "Stress" },
    ]
  },
  {
    id: 'nail-health-strength',
    title: 'Nail Health & Strength',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Prevent Brittle & Weak Nails',
    problem: 'Brittle, splitting, or weak nails indicating nutrient deficiencies.',
    solution: 'Optimize protein, Biotin, and Mineral intake.',
    fullContent: 'Resolves brittle, splitting nails. At Nutrition Colours, Dr. Shilpa Thakur ensures optimal absorption of key nail-building blocks, including Silica, Biotin, Iron, and complete amino acids, while addressing underlying gut absorption issues.',
    naturalApproach: ['Biotin sources', 'High Protein', 'Zinc & Iron', 'Avoid harsh chemicals'],
    image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=800',
    pageTitle: 'Nail Health & Strength | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support nail health and strength naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Nail Health & Strength',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Why do my nails have white spots?", answer: "White spots are often a sign of minor zinc or calcium deficiency, or past nail matrix trauma. We assess mineral levels at Nutrition Colours.", category: "Symptoms" },
      { question: "What foods are high in silica?", answer: "Oats, cucumbers, and horsetail herbal infusions are rich in silica, which Dr. Shilpa uses to strengthen nail beds.", category: "Diet" },
      { question: "How does gut absorption affect nails?", answer: "If you have low stomach acid or leaky gut, you cannot absorb the minerals needed to build strong nails. We prioritize gut repair.", category: "Science" },
    ]
  },
  {
    id: 'immunity-boost',
    title: 'Immunity Boost',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Strengthen Your Body\'s Defenses Naturally',
    problem: 'Frequent illness and slow recovery due to weak immune response.',
    solution: 'Boost gut health and optimize intake of Vitamins C and D.',
    fullContent: 'Builds a resilient immune system. Under the clinical oversight of Dr. Shilpa Thakur at Nutrition Colours, we focus on zinc, Vitamin C, and Vitamin D loading, while feeding the gut microbiome with diverse prebiotic fibers to support immune cell activity.',
    naturalApproach: ['Probiotics', 'Vitamin C', 'Vitamin D', 'Adequate Sleep'],
    image: 'https://images.unsplash.com/photo-1576091160550-217359f4ecf8?q=80&w=800',
    pageTitle: 'Immunity Boost | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support immunity boost naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Immunity Boost',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How does Vitamin D support immunity?", answer: "Vitamin D regulates immune cells (T-cells) to fight infections while preventing cytokine storm inflammatory overreactions.", category: "Science" },
      { question: "What foods are highest in Vitamin C?", answer: "Amla (Indian gooseberry), bell peppers, and citrus fruits are packed with Vitamin C. Dr. Shilpa incorporates them fresh into daily plans.", category: "Diet" },
      { question: "Can sugar weaken my immune system?", answer: "Yes. Refined sugar temporarily reduces the ability of white blood cells to destroy bacteria and viruses for up to 5 hours.", category: "Triggers" },
    ]
  },
  {
    id: 'detox-rejuvenation',
    title: 'Detox & Rejuvenation',
    category: CategoryType.DETOX,
    shortDesc: 'Cleanse Your System for Energy',
    problem: 'Lethargy, bloating, and overall "heaviness" due to toxic load.',
    solution: 'Support liver and kidneys with whole foods and hydration.',
    fullContent: 'Purifies and restores energy. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we support the body\'s natural detoxification pathways (liver, kidneys, skin) using sulfur-rich foods, cilantro, and alkalizing mineral hydration.',
    naturalApproach: ['High Fiber', 'Lemon Water', 'Beets', 'Infrared Sauna equivalent'],
    image: 'https://images.unsplash.com/photo-1603052875302-d376b7c0638a?q=80&w=800',
    pageTitle: 'Detox & Rejuvenation | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support detox and rejuvenation naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Detox & Rejuvenation',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Do I need to do a juice cleanse to detox?", answer: "No. The liver requires specific amino acids from proteins to complete detox. Dr. Shilpa utilizes whole-food detox protocols at Nutrition Colours.", category: "Science" },
      { question: "How do cilantro and parsley help detox?", answer: "These herbs contain natural chelating agents that bind to heavy metals and assist the body in safely excreting them, as used in our plans.", category: "Diet" },
      { question: "What is the best way to support kidney detox?", answer: "Alkalizing water infused with lemon or cucumber helps flush metabolic waste and prevents kidney stone formation.", category: "Hydration" },
    ]
  },
  {
    id: 'anti-inflammatory-support',
    title: 'Anti-Inflammatory Support',
    category: CategoryType.METABOLIC,
    shortDesc: 'Reduce Chronic Systemic Inflammation',
    problem: 'Chronic pain, fatigue, and increased risk of chronic disease.',
    solution: 'Adopt an anti-inflammatory diet rich in Omega-3s and antioxidants.',
    fullContent: 'Calms systemic inflammation, the root of chronic disease. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we implement a diet rich in Omega-3 fatty acids, curcumin, and ginger, while strictly removing inflammatory refined seed oils.',
    naturalApproach: ['No refined sugar', 'Omega-3 (walnuts/flax)', 'Turmeric', 'Ginger'],
    image: 'https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=800',
    pageTitle: 'Anti-Inflammatory Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support anti inflammatory support naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Anti-Inflammatory Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What is systemic chronic inflammation?", answer: "It is low-grade immune activation that slowly damages tissues. Dr. Shilpa focuses on reversing this to prevent chronic diseases.", category: "Science" },
      { question: "Why are seed oils inflammatory?", answer: "Industrial seed oils (like canola or soy) are high in Omega-6 fats, which oxidize easily and fuel inflammatory pathways in the body.", category: "Science" },
      { question: "Which spices are highly anti-inflammatory?", answer: "Turmeric (curcumin), ginger, and garlic block primary inflammatory markers (like NF-kB) and are incorporated daily at Nutrition Colours.", category: "Diet" },
    ]
  },
  {
    id: 'healthy-aging-solutions',
    title: 'Healthy Aging Solutions',
    category: CategoryType.METABOLIC,
    shortDesc: 'Stay Fit & Sharp into Senior Years',
    problem: 'Fragility, cognitive decline, and loss of independence.',
    solution: 'Balanced nutrition with focus on protein and brain-boosting fats.',
    fullContent: 'Supports vitality as we age. At Nutrition Colours, Dr. Shilpa Thakur structures protocols that focus on mitochondrial health, joint preservation, cognitive sharpness, and maintaining a balanced, active metabolism through chrononutrition.',
    naturalApproach: ['Plant-based protein', 'Brain-boosting fats', 'Berries', 'Movement'],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Healthy Aging Solutions | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support healthy aging solutions naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Healthy Aging Solutions',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Can I prevent muscle loss in older age?", answer: "Yes. Muscle wasting (sarcopenia) can be managed with easily digestible plant-based proteins and resistance movement under Dr. Shilpa's guidance.", category: "Aging" },
      { question: "How do I maintain cognitive health?", answer: "Nutrition Colours plans are rich in brain-protective antioxidants and healthy fats that support neural connections and prevent cognitive decline.", category: "Cognitive" },
      { question: "Is calorie restriction required for longevity?", answer: "Not starvation. We use circadian eating windows to activate longevity genes without compromising nutrient density or strength.", category: "Science" },
    ]
  },
  {
    id: 'wellness-longevity',
    title: 'Wellness & Longevity',
    category: CategoryType.DETOX,
    shortDesc: 'Eat for a Longer Life',
    problem: 'Premature physical decline due to lifestyle choices.',
    solution: 'Adopting a longevity-focused lifestyle rooted in whole foods.',
    fullContent: 'A comprehensive track for long-term health. Under the clinical oversight of Dr. Shilpa Thakur at Nutrition Colours, we focus on DNA repair, managing insulin resistance, optimizing sleep, and building strong, natural cellular defenses.',
    naturalApproach: ['Blue Zone principles', 'High fiber', 'Natural movement', 'Social connection'],
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800',
    pageTitle: 'Wellness & Longevity | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support wellness and longevity naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic support.',
    primaryKeyword: 'Wellness & Longevity',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "What is the key to longevity?", answer: "Maintaining low insulin, healthy mitochondria, and low cellular inflammation. Dr. Shilpa designs plans specifically to target these keys.", category: "Science" },
      { question: "Do genetics dictate my lifespan?", answer: "Genetics are only 10-20% of the equation. Epigenetics (diet, sleep, stress) controls how your genes express, which we guide at Nutrition Colours.", category: "Science" },
      { question: "Can lifestyle changes repair cellular damage?", answer: "Yes. Restoring antioxidant pathways and sleep helps cells clear out damaged structures and repair DNA damage naturally.", category: "Prognosis" },
    ]
  },
  {
    id: 'fertility-hormone-support',
    title: 'Fertility & Hormone Support',
    category: CategoryType.WOMENS,
    shortDesc: 'Optimize Conception Health Naturally',
    problem: 'Difficulties conceiving often linked to egg/sperm quality and hormone balance.',
    solution: 'Boost antioxidant intake and ensure optimal nutrient stores.',
    fullContent: 'Prepares the body for healthy conception. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we address hormonal imbalances, optimize nutrient stores (folate, iron, zinc), and stabilize blood sugar to support ovulation.',
    naturalApproach: ['High antioxidants', 'Methyl-Folate', 'Iron/B12', 'Blood sugar stability'],
    image: 'https://images.unsplash.com/photo-1516733968668-dbdce39c46ef?q=80&w=800',
    pageTitle: 'Fertility & Hormone Support | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support fertility and hormone support naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Fertility & Hormone Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "How does blood sugar affect fertility?", answer: "High insulin tells ovaries to produce excess male hormones, which blocks egg development. Reversing insulin resistance is vital for conception.", category: "Science" },
      { question: "Are prenatal vitamins enough?", answer: "No. A whole-food diet supplies cofactor nutrients that synthetic pills lack. Dr. Shilpa designs complete fertility nutrition programs.", category: "Nutrition" },
      { question: "Does male partner diet affect fertility?", answer: "Absolutely. Sperm health is highly dependent on zinc, selenium, and antioxidant status, which we address in our couples' plans.", category: "Fertility" },
    ]
  },
  {
    id: 'pcos-weight-diet',
    title: 'PCOS Weight & Diet',
    category: CategoryType.WOMENS,
    shortDesc: 'Manage PCOS Weight Gain',
    problem: 'Difficulty losing weight despite diet efforts due to high insulin.',
    solution: 'Very low-GI approach and high protein/fiber for satiety.',
    fullContent: 'A specialized track for the metabolic component of PCOS. At Nutrition Colours, Dr. Shilpa Thakur implements a very low-glycemic index (GI) approach to lower insulin levels, pairing protein and fiber to curb sugar cravings and manage weight gain.',
    naturalApproach: ['Very Low-GI', 'High Protein/Fiber', 'Strength training', 'Inositol'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'PCOS Weight & Diet | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support pcos weight and diet naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic support.',
    primaryKeyword: 'PCOS Weight & Diet',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Why is it so hard to lose weight with PCOS?", answer: "High insulin acts as a one-way valve, storing fat and blocking its release. Dr. Shilpa's diets lower insulin to allow fat burning.", category: "Weight" },
      { question: "What is the role of fiber in PCOS?", answer: "Soluble fiber slows down sugar absorption, preventing the insulin spikes that drive weight gain and sugar cravings.", category: "Diet" },
      { question: "Can strength training help PCOS weight loss?", answer: "Yes. Muscle tissue burns glucose for fuel without needing insulin, helping optimize insulin sensitivity and speed up weight loss.", category: "Fitness" },
    ]
  },
  {
    id: 'menopause-weight-mgmt',
    title: 'Menopause Weight Management',
    category: CategoryType.WOMENS,
    shortDesc: 'Lose Middle-Age Weight Naturally',
    problem: 'Shift in weight storage towards the belly due to hormonal drops.',
    solution: 'Focus on muscle preservation and insulin sensitivity.',
    fullContent: 'Addresses the metabolic shift during menopause. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we focus on muscle preservation through plant proteins, managing insulin sensitivity, and reducing inflammatory seed oils.',
    naturalApproach: ['Preserve muscle', 'Anti-inflammatory fats', 'High Fiber', 'Resistance training'],
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800',
    pageTitle: 'Menopause Weight Management | Dr. Shilpa Thakur | Nutrition Colours',
    metaDescription: 'Optimize and support menopause weight management naturally. Dr. Shilpa Thakur\'s clinical protocols at Nutrition Colours focus on circadian nutrition and root-cause metabolic repair.',
    primaryKeyword: 'Menopause Weight Management',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    
    faqs: [
      { question: "Why does weight shift to the belly during menopause?", answer: "Estrogen declines cause the body to store fat around the abdomen. Dr. Shilpa designs plans that support metabolism and hormone balance.", category: "Hormones" },
      { question: "Will cardio help me lose menopause weight?", answer: "Excessive cardio raises cortisol, which can worsen belly fat. Dr. Shilpa at Nutrition Colours recommends resistance training instead.", category: "Fitness" },
      { question: "How does protein help in menopause?", answer: "Higher protein intake prevents the muscle loss associated with estrogen decline, keeping your metabolism active and strong.", category: "Nutrition" },
    ]
  },
{ 
    id: 'gout-uric-acid-reversal', 
    title: 'Uric Acid & Gout Support', 
    category: CategoryType.METABOLIC, 
    shortDesc: 'Flush Purines & Manage Joint Pain Naturally', 
    problem: 'Excessive uric acid crystal accumulation in joints causing intense inflammatory gout flares.', 
    solution: 'Optimize renal filtration and reduce high-purine foods under specialized clinical supervision.', 
    fullContent: 'Supporting optimal uric acid clearance requires addressing kidney filtration and systemic balance. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we focus on supporting the body with hydration, tart cherry extract, and vitamin C-rich foods. Removing refined fructose and industrial seed oils helps manage inflammation and support joint comfort.', 
    naturalApproach: ['Alkalizing hydration', 'Tart cherry extract', 'Low fructose', 'Limit purine foods'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Uric Acid & Gout Support | Dr. Shilpa Thakur | Nutrition Colours', 
    metaDescription: 'Discover natural ways to manage gout and lower uric acid. Read Dr. Shilpa Thakur\'s clinical guide on purine-flush diets at Nutrition Colours.', 
    primaryKeyword: 'Uric Acid Gout Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Can I eat lentils if I have high uric acid?", answer: "Yes, clinical research shows plant-based purines in lentils do not trigger gout flares compared to animal purines. Dr. Shilpa recommends specific preparation methods to reduce phytates.", category: "Diet" },
      { question: "Does sugar trigger gout?", answer: "Absolutely. Fructose accelerates purine metabolism and raises uric acid. Removing soda and sweet treats is priority number one at Nutrition Colours.", category: "Science" },
      { question: "Will drinking cherry juice help?", answer: "Yes, tart cherry juice contains anthocyanins that reduce inflammation and facilitate renal excretion of uric acid, as studied in our protocols.", category: "Remedies" },
      { question: "Can uric acid be managed permanently?", answer: "Yes, by addressing underlying insulin resistance and kidney filtration efficiency through metabolic nutrition, maintaining optimal uric acid levels is highly achievable.", category: "Prognosis" }
    ]
  },
  { 
    id: 'chronic-fatigue-syndrome', 
    title: 'Chronic Fatigue & Energy Support', 
    category: CategoryType.COGNITIVE, 
    shortDesc: 'Restore Mitochondrial Energy Production', 
    problem: 'Persistent, debilitating fatigue not relieved by rest, often linked to mitochondrial dysfunction.', 
    solution: 'Rebuild cellular energy pathways with cofactors, low-toxin eating, and deep circadian rest.', 
    fullContent: 'Chronic fatigue indicates a cellular energy crisis. At Nutrition Colours, Dr. Shilpa Thakur utilizes a chrononutrition approach to support mitochondrial health. By integrating CoQ10-rich foods, magnesium, and reducing oxidative stress through an anti-inflammatory diet, we help patients support their physical and mental vitality.', 
    naturalApproach: ['CoQ10 cofactors', 'Magnesium optimization', 'Circadian meal timing', 'Oxidative stress reduction'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Chronic Fatigue & Energy Support | Dr. Shilpa Thakur | Nutrition Colours', 
    metaDescription: 'Support mitochondrial health and energy levels. Learn Dr. Shilpa Thakur\'s protocols for chronic fatigue at Nutrition Colours.', 
    primaryKeyword: 'Chronic Fatigue Energy Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Is chronic fatigue just in my head?", answer: "No, it is a metabolic disorder characterized by low mitochondrial ATP production and systemic inflammation. Our tests help quantify this.", category: "Science" },
      { question: "How does diet restore energy?", answer: "By removing inflammatory sugars and prioritizing healthy fats and amino acids, we restore the cellular battery (mitochondria) at Nutrition Colours.", category: "Nutrition" },
      { question: "Do I need to stop exercising?", answer: "Post-exertional malaise is common. Dr. Shilpa recommends gentle, low-heart-rate movement rather than intense cardio during early recovery.", category: "Activity" },
      { question: "Are B-vitamins helpful?", answer: "Yes, specifically active forms like methylcobalamin (B12) and methylfolate, which support methylation and cellular energy generation.", category: "Supplements" }
    ]
  },
  { 
    id: 'ibs-ibd-gut-repair', 
    title: 'IBS & IBD Gut Repair', 
    category: CategoryType.DIGESTION, 
    shortDesc: 'Calm Inflammation & Restore Gut Barrier', 
    problem: 'Abdominal pain, cramping, bloating, and irregular bowel patterns due to mucosal inflammation.', 
    solution: 'Implement an elemental phase diet, repair gut lining integrity, and rebalance the microbiome.', 
    fullContent: 'Irritable Bowel Syndrome (IBS) and Inflammatory Bowel Disease (IBD) demand a soothing, phase-based approach. Dr. Shilpa Thakur at Nutrition Colours has structured an anti-inflammatory gut protocol that repairs the mucosal barrier, utilizes natural anti-microbials, and introduces gentle prebiotic fibers to rebuild a robust gut microbiome.', 
    naturalApproach: ['L-Glutamine support', 'Anti-inflammatory herbs', 'Low-FODMAP phase', 'Microbiome balancing'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'IBS & IBD Gut Repair | Dr. Shilpa Thakur | Nutrition Colours', 
    metaDescription: 'Heal your gut lining. Read the clinical IBS and IBD gut repair protocols developed by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'IBS IBD Gut Repair',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Should I follow a low-FODMAP diet forever?", answer: "No. Low-FODMAP is a short-term therapeutic tool to reduce symptoms while Dr. Shilpa helps you heal the underlying gut barrier at Nutrition Colours.", category: "Diet" },
      { question: "What is the difference between IBS and IBD?", answer: "IBS is a functional disorder, while IBD involves visible structural inflammation and damage to the gut wall. Both benefit from targeted chrononutrition.", category: "Science" },
      { question: "Can gluten trigger flares?", answer: "Yes, gluten increases zonulin, which opens tight junctions in the gut lining. We recommend a temporary gluten-free trial for recovery.", category: "Triggers" },
      { question: "Are probiotics safe during a flare?", answer: "During an active IBD flare, high-dose probiotics can sometimes cause irritation. We prioritize gut-soothing mucosal agents first.", category: "Probiotics" }
    ]
  },
  { 
    id: 'post-viral-recovery', 
    title: 'Post-Viral Recovery', 
    category: CategoryType.IMMUNITY, 
    shortDesc: 'Clear Inflammation & Reset Immunity', 
    problem: 'Lingering fatigue, brain fog, and muscle aches weeks or months after a viral infection.', 
    solution: 'Systematic immunomodulation, antioxidant loading, and autonomic nervous system support.', 
    fullContent: 'Lingering post-viral symptoms are often caused by persistent low-grade immune activation. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, our post-viral protocol focuses on calming hyperactive immune cells, utilizing natural anti-viral compounds like zinc and quercetin, and restoring mitochondrial function.', 
    naturalApproach: ['Quercetin & Zinc', 'N-Acetyl Cysteine (NAC)', 'Circadian spacing', 'Anti-inflammatory fats'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Post-Viral Recovery Protocol | Dr. Shilpa Thakur | Nutrition Colours', 
    metaDescription: 'Overcome post-viral fatigue and brain fog. Read the clinical immunomodulation guide from Nutrition Colours.', 
    primaryKeyword: 'Post Viral Recovery',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Why do I still feel tired months later?", answer: "It is often caused by microvascular inflammation or persistent viral fragments. Dr. Shilpa uses antioxidant protocols to clear this metabolic debris.", category: "Science" },
      { question: "How does food help my immune system reset?", answer: "Certain phytonutrients act as natural immune regulators, preventing your body from attacking its own tissues while enhancing clearing mechanisms.", category: "Mechanism" },
      { question: "Is Vitamin D helpful?", answer: "Yes, maintaining blood Vitamin D levels between 50-80 ng/mL is essential for correct T-cell modulation and preventing immune overdrive.", category: "Vitamins" },
      { question: "Can I drink coffee?", answer: "Coffee stimulates cortisol, which can strain recovering adrenals. We recommend herbal infusions like Holy Basil during recovery.", category: "Beverages" }
    ]
  },
  { 
    id: 'kidney-health-diet', 
    title: 'Kidney Health Support', 
    category: CategoryType.DETOX, 
    shortDesc: 'Optimize Renal Filtration & Lower Load', 
    problem: 'Reduced kidney filtration efficiency leading to buildup of nitrogenous waste and fluid retention.', 
    solution: 'Manage protein load, control blood pressure, and eliminate renal stressors.', 
    fullContent: 'Supporting the kidneys requires managing blood pressure and metabolic toxins. Dr. Shilpa Thakur\'s protocol at Nutrition Colours prioritizes a clean, plant-forward diet that reduces the acid load on nephrons, maintains optimal electrolyte balance, and naturally manages blood sugar to prevent diabetic nephropathy.', 
    naturalApproach: ['Alkalizing foods', 'Controlled protein intake', 'Blood pressure control', 'Dandelion root tea'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Kidney Health Support Diet | Dr. Shilpa Thakur | Nutrition Colours', 
    metaDescription: 'Optimize kidney filtration. Learn the renal-protective nutrition protocols by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'Kidney Health Diet',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Is a high-protein diet bad for my kidneys?", answer: "Excessive animal protein increases glomerular pressure. At Nutrition Colours, we balance clean, low-acid plant proteins to support muscle without overloading filtration.", category: "Protein" },
      { question: "How does blood sugar affect kidneys?", answer: "High glucose damages the delicate filtering units (nephrons) over time. Reversing insulin resistance is crucial for kidney longevity.", category: "Diabetes" },
      { question: "Should I limit potassium?", answer: "Potassium restriction is only necessary in advanced stages of kidney disease. For early protection, potassium-rich foods are actually beneficial.", category: "Electrolytes" },
      { question: "Is water intake the most important factor?", answer: "Adequate hydration is essential, but it must be balanced with mineral intake to prevent diluting key electrolytes.", category: "Hydration" }
    ]
  },
  { 
    id: 'migraine-headache-relief', 
    title: 'Migraine Relief', 
    category: CategoryType.COGNITIVE, 
    shortDesc: 'Identify Triggers & Calm Neuro-Inflammation', 
    problem: 'Chronic, pulsating headaches often accompanied by nausea and sensory sensitivity.', 
    solution: 'Identify dietary histamine or tyramine triggers and support mitochondrial magnesium levels.', 
    fullContent: 'Migraines are often triggered by neuro-vascular inflammation and energy deficits in brain cells. At Nutrition Colours, Dr. Shilpa Thakur assists patients in identifying trigger foods (like aged cheeses, gluten, or additives) while utilizing high-dose magnesium, riboflavin, and circadian lifestyle adjustments to calm the nervous system.', 
    naturalApproach: ['Magnesium glycinate', 'Riboflavin (B2)', 'Elimination diet', 'Hydration stability'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Migraine & Chronic Headache Relief | Dr. Shilpa Thakur', 
    metaDescription: 'Stop migraine triggers. Explore Dr. Shilpa Thakur\'s clinical neuro-nutrition protocols for headache relief at Nutrition Colours.', 
    primaryKeyword: 'Migraine Relief',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Can certain foods trigger my migraines?", answer: "Yes, histamines, tyramine, and artificial sweeteners are classic triggers. Dr. Shilpa conducts detailed food logging to pinpoint your specific culprits.", category: "Triggers" },
      { question: "Why is magnesium recommended for migraines?", answer: "Magnesium relaxes blood vessels and blocks pain-transmitting chemicals in the brain. It is a cornerstone of our therapy at Nutrition Colours.", category: "Science" },
      { question: "Does caffeine help or hurt?", answer: "Temporary caffeine can constrict blood vessels and relieve pain, but chronic use causes rebound headaches. We focus on natural vascular stability.", category: "Caffeine" },
      { question: "How does sleep timing affect migraines?", answer: "Circadian shifts are strong triggers. Going to bed and waking up at the exact same time every day significantly lowers attack frequency.", category: "Sleep" }
    ]
  },
  { 
    id: 'adhd-brain-focus-kids', 
    title: 'Pediatric ADHD Focus', 
    category: CategoryType.KIDS, 
    shortDesc: 'Calm Nervous System & Support Learning', 
    problem: 'Hyperactivity, lack of focus, and emotional dysregulation in children.', 
    solution: 'Eliminate food dyes/sugar, optimize omega-3 fatty acids, and support gut neurotransmitters.', 
    fullContent: 'Supporting focus in children requires optimizing the gut-brain axis. At Nutrition Colours, Dr. Shilpa Thakur\'s pediatric protocol removes inflammatory food dyes, chemical additives, and refined sugars. We focus on feeding the brain with wild omega-3s, zinc, iron, and gut-supporting prebiotics to stabilize focus and mood naturally.', 
    naturalApproach: ['Omega-3 DHA/EPA', 'Zero food dyes', 'Zinc and Iron levels', 'Gut health balance'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Pediatric ADHD Focus & Diet | Dr. Shilpa Thakur | Nutrition Colours', 
    metaDescription: 'Improve focus in children naturally. Read the pediatric neuro-nutrition guidelines by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'Pediatric ADHD Focus',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Are food dyes really harmful to focus?", answer: "Yes, clinical studies link synthetic food dyes (like Red 40, Yellow 5) to increased hyperactivity in sensitive children. We strictly avoid them.", category: "Additives" },
      { question: "What is the best breakfast for a child with ADHD?", answer: "A protein-rich breakfast (like chickpea chilla or nut butter) stabilizes blood sugar, avoiding the glucose spikes and crashes that hurt school focus.", category: "Diet" },
      { question: "How does gut health affect behavior?", answer: "90% of serotonin and other neurotransmitters are influenced by gut bacteria. A healthy microbiome leads to a calmer brain, as taught in our family protocols.", category: "Science" },
      { question: "Should my child take Omega-3 supplements?", answer: "Yes, Omega-3 fatty acids are major structural components of brain tissue. Dr. Shilpa guides families on safe, plant-based algae oil or seed sources.", category: "Supplements" }
    ]
  },
  { 
    id: 'geriatric-strength-nutrition', 
    title: 'Geriatric Strength Nutrition', 
    category: CategoryType.JOINTS, 
    shortDesc: 'Prevent Muscle Loss & Support Mobility', 
    problem: 'Age-related loss of muscle mass (sarcopenia) and strength, leading to falls and stiffness.', 
    solution: 'Optimize protein absorption, support joint cushioning, and ensure bone density nutrients.', 
    fullContent: 'Maintaining mobility in golden years requires preventing muscle wasting. Dr. Shilpa Thakur at Nutrition Colours has designed a specialized senior strength protocol that focuses on highly absorbable proteins, joint-lubricating healthy fats, and targeted minerals like calcium and vitamin D to maintain bone and muscle integrity.', 
    naturalApproach: ['Absorbable plant protein', 'Joint lubrication fats', 'Calcium & Vitamin D', 'Gentle mobility exercises'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Geriatric Strength & Bone Nutrition | Dr. Shilpa Thakur', 
    metaDescription: 'Maintain mobility and strength in older age. Explore the geriatric clinical nutrition protocol at Nutrition Colours.', 
    primaryKeyword: 'Geriatric Strength Nutrition',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Is muscle loss inevitable with age?", answer: "No. Sarcopenia can be prevented and managed with adequate, clean protein intake and light resistance training, even in your 70s.", category: "Aging" },
      { question: "Why do seniors struggle to absorb protein?", answer: "Stomach acid naturally declines with age, reducing digestion efficiency. Dr. Shilpa recommends easily digestible plant proteins and natural enzyme supports.", category: "Digestion" },
      { question: "How do I prevent joint stiffness?", answer: "Hydration combined with anti-inflammatory spices like ginger and turmeric acts as a natural lubricant for synovial joints.", category: "Joints" },
      { question: "Can nutrition prevent falls?", answer: "Yes, by stabilizing muscle strength and improving cognitive focus/balance through proper neuro-nutrition, fall risk drops significantly.", category: "Safety" }
    ]
  },
  { 
    id: 'pregnancy-nutrition-support', 
    title: 'Pregnancy Nutrition Support', 
    category: CategoryType.WOMENS, 
    shortDesc: 'Support Fetal Growth & Maternal Vitality', 
    problem: 'Nutritional gaps, morning sickness, and gestational diabetes risk during pregnancy.', 
    solution: 'Ensure optimal folate, iron, choline, and healthy fats while managing blood glucose.', 
    fullContent: 'A healthy pregnancy requires premium building blocks for the growing baby. Under the clinical oversight of Dr. Shilpa Thakur at Nutrition Colours, our prenatal protocol focuses on natural folate sources, iron, choline, and clean omega-3s, while implementing circadian timing to prevent gestational diabetes.', 
    naturalApproach: ['Active Folate sources', 'Choline-rich foods', 'Stable blood glucose', 'Iron-rich plants'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Pregnancy & Prenatal Nutrition Support | Dr. Shilpa Thakur', 
    metaDescription: 'Optimize prenatal wellness. Read Dr. Shilpa Thakur\'s pregnancy nutrition guidelines at Nutrition Colours.', 
    primaryKeyword: 'Pregnancy Nutrition Support',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "What is the difference between folic acid and folate?", answer: "Folate is the natural form found in leafy greens, which is absorbed far better than synthetic folic acid, especially for mothers with methylation issues.", category: "Nutrients" },
      { question: "How do I manage gestational diabetes?", answer: "By eating low-GI meals, avoiding sweet snacks, and walking for 10 minutes after eating, as structured in our maternal programs at Nutrition Colours.", category: "Glucose" },
      { question: "What should I eat to combat morning sickness?", answer: "Small, protein-paired meals and ginger infusions are highly effective for stabilizing blood glucose and soothing the nervous system.", category: "Morning Sickness" },
      { question: "Is a vegan diet safe during pregnancy?", answer: "Yes, but it must be carefully planned to ensure adequate B12, Iron, Choline, and Vitamin D. Dr. Shilpa designs specialized plant-based prenatal tracks.", category: "Diet Type" }
    ]
  },
  { 
    id: 'sleep-disorder-circadian-reset', 
    title: 'Sleep & Circadian Reset', 
    category: CategoryType.COGNITIVE, 
    shortDesc: 'Align Melatonin & Reset Cellular Rhythm', 
    problem: 'Insomnia, fragmented sleep, and morning fatigue caused by circadian misalignment.', 
    solution: 'Block blue light, time meals with natural cycles, and optimize magnesium intake.', 
    fullContent: 'Sleep is the master repair cycle of our cells. At Nutrition Colours, Dr. Shilpa Thakur\'s circadian reset protocol aligns light exposure, physical activity, and nutritional timing to optimize melatonin synthesis and growth hormone production, ensuring deep, restorative sleep.', 
    naturalApproach: ['Circadian meal timing', 'Magnesium Bisglycinate', 'Blue-light block', 'Morning sunlight'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Sleep & Circadian Reset Protocol | Dr. Shilpa Thakur', 
    metaDescription: 'End insomnia naturally. Explore the circadian science of sleep repair by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'Sleep Circadian Reset',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "How does eating late affect my sleep?", answer: "Eating late raises core body temperature and insulin, which directly blocks the release of melatonin, disrupting deep sleep phases.", category: "Science" },
      { question: "What is the best natural sleep supplement?", answer: "We prioritize magnesium glycinate and chamomile/valerian infusions to naturally calm neuro-excitation at Nutrition Colours.", category: "Remedies" },
      { question: "Why is morning sunlight important for sleep?", answer: "Sunlight exposure in the morning stops melatonin production and sets your internal timer to release melatonin 14-16 hours later.", category: "Light" },
      { question: "Can metabolic disease cause insomnia?", answer: "Yes, nighttime blood glucose crashes (hypoglycemia) trigger adrenaline and cortisol spikes, waking you up in a panic around 3 AM.", category: "Metabolism" }
    ]
  },
  { 
    id: 'fibromyalgia-pain-management', 
    title: 'Fibromyalgia Management', 
    category: CategoryType.JOINTS, 
    shortDesc: 'Reduce Chronic Pain & Nerve Hypersensitivity', 
    problem: 'Widespread musculoskeletal pain accompanied by fatigue, sleep, and memory issues.', 
    solution: 'Eliminate neuro-inflammatory triggers like MSG and aspartame, and support nerve repair.', 
    fullContent: 'Managing fibromyalgia requires calming an overstimulated central nervous system. Dr. Shilpa Thakur\'s protocol at Nutrition Colours removes dietary excitotoxins, optimizes magnesium levels to block NMDA pain receptors, and utilizes anti-inflammatory chrononutrition to repair mitochondrial energy output.', 
    naturalApproach: ['Excitotoxin elimination', 'Magnesium loading', 'CoQ10 support', 'Low-inflammatory diet'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Fibromyalgia & Pain Management | Dr. Shilpa Thakur', 
    metaDescription: 'Manage chronic nerve pain naturally. Read the fibromyalgia guidelines developed by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'Fibromyalgia Pain Management',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "What are excitotoxins?", answer: "Excitotoxins are food compounds like MSG and artificial sweeteners that overstimulate nerve cells, causing pain signals in fibromyalgia.", category: "Triggers" },
      { question: "How does mitochondria relate to fibromyalgia?", answer: "Low mitochondrial energy forces muscles to operate in anaerobic states, leading to chronic lactic acid buildup and widespread soreness.", category: "Science" },
      { question: "Is heat therapy helpful?", answer: "Yes, hot epsom salt baths supply transdermal magnesium, which helps relax tight muscles and calm the nervous system.", category: "Therapies" },
      { question: "Should I avoid nightshades?", answer: "Some fibromyalgia patients report symptom improvement after removing nightshades due to solanine sensitivity. We recommend a structured 3-week test.", category: "Diet" }
    ]
  },
  { 
    id: 'histamine-intolerance-allergy', 
    title: 'Histamine Intolerance Care', 
    category: CategoryType.IMMUNITY, 
    shortDesc: 'Lower Histamine Load & Support DAO Enzyme', 
    problem: 'Hives, nasal congestion, headaches, and bloating after consuming fermented or aged foods.', 
    solution: 'Implement a low-histamine diet phase and support DAO enzyme cofactor pathways.', 
    fullContent: 'Histamine intolerance occurs when the body\'s capacity to break down histamine is overloaded. Under the clinical guidance of Dr. Shilpa Thakur at Nutrition Colours, we focus on a low-histamine diet phase, optimizing Diamine Oxidase (DAO) cofactors (Vitamin C, B6, Copper), and healing the gut barrier to reduce histamine absorption.', 
    naturalApproach: ['Low histamine foods', 'DAO cofactors (Vitamin C, B6)', 'Quercetin support', 'Fresh food sourcing'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Histamine Intolerance & Allergy Diet | Dr. Shilpa Thakur', 
    metaDescription: 'Lower histamine levels naturally. View Dr. Shilpa Thakur\'s DAO enzyme and low-histamine diet guide at Nutrition Colours.', 
    primaryKeyword: 'Histamine Intolerance Care',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "Why do healthy foods like spinach make me feel sick?", answer: "Spinach, avocados, and fermented foods are naturally rich in histamines. If your DAO enzymes are sluggish, these foods trigger allergic reactions.", category: "Science" },
      { question: "Can I eat leftovers?", answer: "Histamine increases as food sits. Dr. Shilpa recommends consuming freshly prepared meals or freezing leftovers immediately at Nutrition Colours.", category: "Prep" },
      { question: "What supplements support histamine clearance?", answer: "Quercetin acts as a natural mast-cell stabilizer, while Vitamin C and B6 function as direct cofactors for the histamine-clearing DAO enzyme.", category: "Supplements" },
      { question: "Is histamine intolerance permanent?", answer: "No, it is usually secondary to gut dysbiosis or leaky gut. Once the gut lining is restored, histamine tolerance returns to normal.", category: "Prognosis" }
    ]
  },
  { 
    id: 'autoimmune-hashimotos-protocol', 
    title: "Hashimoto's Thyroid Care", 
    category: CategoryType.METABOLIC, 
    shortDesc: 'Reduce Antibodies & Protect Thyroid Cells', 
    problem: 'Autoimmune attack on the thyroid gland, leading to hypothyroidism, weight gain, and fatigue.', 
    solution: 'Eliminate systemic molecular mimicry triggers like gluten and soy, and optimize selenium/zinc.', 
    fullContent: 'Calming thyroid autoimmunity requires reducing systemic antibodies. Dr. Shilpa Thakur\'s Hashimoto\'s protocol at Nutrition Colours focuses on resolving gut permeability, removing triggers like gluten that cause molecular mimicry, and optimizing trace minerals (Selenium, Zinc, Iodine) to support thyroid cell repair.', 
    naturalApproach: ['Gluten-free protocol', 'Selenium (Brazil nuts)', 'Zinc cofactors', 'Systemic anti-inflammatory diet'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: "Hashimoto's Autoimmune Thyroid Care | Dr. Shilpa Thakur", 
    metaDescription: 'Lower thyroid antibodies. Explore Dr. Shilpa Thakur\'s clinical Hashimoto\'s thyroiditis protocols at Nutrition Colours.', 
    primaryKeyword: 'Hashimotos Thyroid Care',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "What is thyroid molecular mimicry?", answer: "Gluten proteins look identical to thyroid tissue. When gluten leaks into the blood, the immune system gets confused and attacks the thyroid.", category: "Science" },
      { question: "Do my thyroid antibodies have to stay high?", answer: "No, by removing inflammatory triggers and healing the gut, we have helped hundreds of patients dramatically lower TPO antibodies at Nutrition Colours.", category: "Antibodies" },
      { question: "Is iodine good or bad for Hashimoto's?", answer: "High iodine without selenium can actually worsen thyroid inflammation. Dr. Shilpa carefully calibrates selenium before adjusting iodine.", category: "Minerals" },
      { question: "Can Hashimoto's be put in remission?", answer: "Yes, when antibody levels return to normal and thyroid hormone production stabilizes, clinical remission is fully achievable.", category: "Prognosis" }
    ]
  },
  { 
    id: 'kid-immunity-growth', 
    title: 'Pediatric Immunity & Growth', 
    category: CategoryType.KIDS, 
    shortDesc: 'Build Resilient Children Naturally', 
    problem: 'Frequent colds, poor appetite, and slow height/weight growth in children.', 
    solution: 'Feed gut microbiome with diverse plant fibers, optimize Vitamin D/Zinc, and avoid refined sugars.', 
    fullContent: 'Building a strong foundation for kids requires clean cellular fuel. At Nutrition Colours, Dr. Shilpa Thakur\'s pediatric immunity protocol focuses on nutrient-dense plant foods that build white blood cells, support bone development, and avoid immune-suppressing refined sugars.', 
    naturalApproach: ['Vitamin D & Zinc', 'Diverse plant prebiotic fibers', 'No industrial sweets', 'Mineral-rich local grains'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Pediatric Immunity & Growth Guide | Dr. Shilpa Thakur', 
    metaDescription: 'Boost your child\'s natural immunity. Read the pediatric growth nutrition guidelines by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'Pediatric Immunity Growth',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "How does sugar affect my child's immune system?", answer: "Refined sugar temporarily paralyzes immune cells (macrophages) for hours, making kids far more vulnerable to catching colds.", category: "Immunity" },
      { question: "My child is a picky eater. What can I do?", answer: "We focus on creative, nutrient-dense presentation and gradual micro-adjustments, as structured in Kelive's recipes at Nutrition Colours.", category: "Picky Eating" },
      { question: "Should my child take a multivitamin?", answer: "We prioritize whole-food nutrition first, but suggest target supplementation of Vitamin D and Zinc during seasonal transitions.", category: "Supplements" },
      { question: "Can diet improve height growth?", answer: "Yes, by optimizing protein absorption and bone minerals like calcium, phosphorus, and vitamin D, we support natural genetic growth potential.", category: "Growth" }
    ]
  },
  { 
    id: 'liver-detoxification-pathways', 
    title: 'Liver Detox Pathways', 
    category: CategoryType.DETOX, 
    shortDesc: 'Optimize Phase 1 & Phase 2 Detoxification', 
    problem: 'Estrogen dominance, chemical sensitivities, and sluggish metabolism due to overloaded liver detox pathways.', 
    solution: 'Provide sulfur-rich foods, cruciferous glucosinolates, and binders to facilitate toxin removal.', 
    fullContent: 'The liver detoxifies chemicals through a two-phase enzymatic process. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we supply essential cofactors like glutathione precursors, sulfur from garlic and onions, and methylation supports to keep both phases in perfect sync and prevent toxic backup.', 
    naturalApproach: ['Glutathione precursors', 'Cruciferous vegetables', 'Phase 2 conjugation support', 'Soluble binders'], 
    image: '/images/nutritioncolours-default.svg', 
    pageTitle: 'Optimize Liver Detoxification Pathways | Dr. Shilpa Thakur', 
    metaDescription: 'Support liver health naturally. View the Phase 1 & 2 liver detoxification guidelines by Dr. Shilpa Thakur at Nutrition Colours.', 
    primaryKeyword: 'Liver Detox Pathways',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    faqs: [
      { question: "What is Phase 1 and Phase 2 detox?", answer: "Phase 1 breaks down toxins into reactive intermediates, and Phase 2 neutralizes them. If Phase 2 is slow, it causes toxic backup and inflammation.", category: "Science" },
      { question: "Are commercial juice cleanses good for liver detox?", answer: "No, they lack the amino acids required for Phase 2 conjugation. Dr. Shilpa utilizes complete whole-food detox protocols at Nutrition Colours.", category: "Cleanses" },
      { question: "What foods support glutathione?", answer: "Sulfur-rich foods like garlic, onions, broccoli, brussels sprouts, and avocados directly support glutathione production.", category: "Diet" },
      { question: "Can liver detox help balance hormones?", answer: "Yes, the liver is responsible for breaking down excess estrogen. Sluggish detox pathways often lead to estrogen dominance and weight gain.", category: "Hormones" }
    ]
  }
];
