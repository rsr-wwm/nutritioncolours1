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
    metaDescription: 'Optimize and support diabetes management naturally. Dr. Shilpa Thakur\'s clinical protocols focus on circadian nutrition.',
    primaryKeyword: 'Blood Sugar & Insulin Optimization',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-03' },
    caseStudy: {
      title: 'Type 2 Management Protocol',
      finding: 'Average HbA1c drop of 1.8 points within 90 days across 500+ participants.',
      narrative: 'A 52-year-old teacher optimized glucose levels and reduced HbA1c in just 6 months through Our protocol.'
    },
    faqs: [
      {
          question: "Can I eat whole fruit on this program?",
          answer: "Yes. Dr. Shilpa Thakur recommends selecting low-glycemic whole fruits like berries and apples, consumed in controlled portions during the active anabolic window.",
          category: "Diet"
      },
      {
          question: "How quickly can I see blood sugar stabilization?",
          answer: "Many patients observe glucose improvements within 7 to 14 days of starting the circadian diet protocol, under Dr. Shilpa's oversight.",
          category: "Timeline"
      },
      {
          question: "Do I have to stop all carbs?",
          answer: "No. The protocol focuses on complex, slow-digesting carbohydrates (like ragi or legumes) paired with healthy fats and fiber rather than complete carbohydrate elimination.",
          category: "Diet"
      },
      {
          question: "What causes Blood Sugar & Insulin Optimization?",
          answer: "High blood sugar due to insulin resistance, often caused by excessive sugar and processed carb intake.",
          category: "Root Cause"
      },
      {
          question: "How can I address Blood Sugar & Insulin Optimization through nutrition?",
          answer: "Focus on restoring the body's sensitivity to insulin through strict low-glycemic, whole-foods diet.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Blood Sugar & Insulin Optimization?",
          answer: "Average HbA1c drop of 1.8 points within 90 days across 500+ participants. A 52-year-old teacher optimized glucose levels and reduced HbA1c in just 6 months through Our protocol.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Blood Sugar & Insulin Optimization in brief?",
          answer: "Insulin resistance occurs when cell receptors ignore glucose-uptake signals. We restore insulin sensitivity by aligning eating windows with daylight cycles and replacing simple refined starches with slow-digesting complex carbs. This lets the pancreas rest and lowers glucose levels naturally.",
          category: "Summary"
      },
      {
          question: "The Real Cause of Blood Sugar Spikes?",
          answer: "Your cells are overwhelmed. Continuous carbohydrate loading causes the pancreas to pump out insulin, but cells stop responding to the signal. This creates insulin resistance, leaving sugar circulating in your blood.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Non-starchy vegetables\" help with Blood Sugar & Insulin Optimization?",
          answer: "Yes \u2014 Non-starchy vegetables is one of the natural approaches recommended for Blood Sugar & Insulin Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Circadian Nutrition: Sychronizing Meal Schedules?",
          answer: "Your body processes food differently depending on the time of day. Insulin sensitivity naturally drops as sunset approaches. Eating heavy meals late overrides your circadian clock, leading directly to fat accumulation.",
          category: "Deep Dive"
      },
      {
          question: "What is Blood Sugar & Insulin Optimization?",
          answer: "Control Blood Sugar Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Blood Sugar & Insulin Optimization in more depth?",
          answer: "Optimizing blood sugar and insulin sensitivity focuses on restoring the body's sensitivity to insulin.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: The Real Cause of Blood Sugar Spikes?",
          answer: "Swap out morning wheat bread for steamed ragi porridge. It keeps your post-meal insulin curve flat and delivers steady, long-lasting energy.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Circadian Nutrition: Sychronizing Meal Schedules?",
          answer: "Finish your evening meal early. Going to bed with an empty stomach optimizes natural melatonin release and cortisol regulation.",
          category: "Pro Tip"
      },
      {
          question: "Does \"Lean protein\" help with Blood Sugar & Insulin Optimization?",
          answer: "Yes \u2014 Lean protein is one of the natural approaches recommended for Blood Sugar & Insulin Optimization.",
          category: "Natural Approach"
      }
  ],
    aiSummaryBlock: {
      tldr: "Insulin resistance occurs when cell receptors ignore glucose-uptake signals. We restore insulin sensitivity by aligning eating windows with daylight cycles and replacing simple refined starches with slow-digesting complex carbs. This lets the pancreas rest and lowers glucose levels naturally.",
      tags: ["insulin-sensitivity", "metabolic-management", "circadian-nutrition", "blood-sugar"]
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
      {
          question: "Will this protocol help me get pregnant?",
          answer: "Yes. By addressing the root insulin resistance and lowering androgens, hormone protocols have successfully helped many women restore regular ovulation and improve fertility.",
          category: "Fertility"
      },
      {
          question: "Is dairy allowed in the PCOS program?",
          answer: "Dr. Shilpa Thakur recommends eliminating processed commercial dairy during the initial phase, as it contains insulinogenic proteins.",
          category: "Diet"
      },
      {
          question: "Do I need to take birth control pills to regulate my periods?",
          answer: "Our goal is to restore natural hormone production. Through circadian eating and weight management, we help patients regulate cycles naturally.",
          category: "Approach"
      },
      {
          question: "What causes Endocrine & Hormonal Balance?",
          answer: "Hormonal imbalance often caused by insulin resistance, leading to elevated androgens and fertility issues.",
          category: "Root Cause"
      },
      {
          question: "How can I address Endocrine & Hormonal Balance through nutrition?",
          answer: "Balance hormones naturally through low-GI foods, fiber, and lifestyle changes.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Endocrine & Hormonal Balance?",
          answer: "92% restoration of menstrual cycle regularity within 120 days. A 24-year-old with PCOD Grade 2 achieved regular cycles and clear skin after eliminating secret dairy and inflammatory seed oils.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Endocrine & Hormonal Balance in brief?",
          answer: "Polycystic ovarian syndrome is closely linked to high circulating insulin, which prompts the ovaries to produce excess testosterone. We lower these androgen markers and restore ovulation by eliminating dairy and balancing glycemic loads.",
          category: "Summary"
      },
      {
          question: "The Link Between PCOS and Insulin?",
          answer: "Many women are told PCOS is solely an ovarian issue, but the real driver is often metabolic. High insulin levels stimulate the ovaries to produce excess male hormones (testosterone). This halts normal follicular development and triggers cycle irregularies.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Low-GI foods\" help with Endocrine & Hormonal Balance?",
          answer: "Yes \u2014 Low-GI foods is one of the natural approaches recommended for Endocrine & Hormonal Balance.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High fiber\" help with Endocrine & Hormonal Balance?",
          answer: "Yes \u2014 High fiber is one of the natural approaches recommended for Endocrine & Hormonal Balance.",
          category: "Natural Approach"
      },
      {
          question: "What is Endocrine & Hormonal Balance?",
          answer: "Hormone & Fertility Support",
          category: "Overview"
      },
      {
          question: "Can you explain Endocrine & Hormonal Balance in more depth?",
          answer: "This protocol supports natural ovarian regulation, which is often insulin resistance.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: The Link Between PCOS and Insulin?",
          answer: "Eliminate industrial seed oils (like canola or sunflower oil). They induce gut inflammation, which directly spikes cellular insulin resistance.",
          category: "Pro Tip"
      },
      {
          question: "Does \"Myo-Inositol\" help with Endocrine & Hormonal Balance?",
          answer: "Yes \u2014 Myo-Inositol is one of the natural approaches recommended for Endocrine & Hormonal Balance.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Reduced dairy\" help with Endocrine & Hormonal Balance?",
          answer: "Yes \u2014 Reduced dairy is one of the natural approaches recommended for Endocrine & Hormonal Balance.",
          category: "Natural Approach"
      }
  ],
    aiSummaryBlock: {
      tldr: "Polycystic ovarian syndrome is closely linked to high circulating insulin, which prompts the ovaries to produce excess testosterone. We lower these androgen markers and restore ovulation by eliminating dairy and balancing glycemic loads.",
      tags: ["pcos-management", "hormone-balance", "fertility-nutrition", "ovulation-support"]
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
      {
          question: "Can fatty liver be completely resolved?",
          answer: "Yes. The liver is highly regenerative. Circadian protocols help support liver clearance of fat deposits within 3 to 6 months.",
          category: "Prognosis"
      },
      {
          question: "Are eggs good for fatty liver?",
          answer: "Yes. Eggs are an excellent source of choline, which is vital for transporting fats out of the liver. Dr. Shilpa recommends organic eggs.",
          category: "Diet"
      },
      {
          question: "Should I avoid all fats?",
          answer: "No. Healthy monounsaturated fats and Omega-3s support liver repair. We focus on removing processed trans fats and industrial seed oils instead.",
          category: "Nutrition"
      },
      {
          question: "What causes Liver Health & Metabolic Detoxification?",
          answer: "Fat accumulation in the liver primarily caused by excessive sugar and processed food intake.",
          category: "Root Cause"
      },
      {
          question: "How can I address Liver Health & Metabolic Detoxification through nutrition?",
          answer: "Remove fructose and refined sugar, increase intake of liver-supportive nutrients like choline.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Liver Health & Metabolic Detoxification?",
          answer: "FibroScan\u00AE fatty liver indicators optimized from Grade 3 to Grade 1 within 180 days. A 45-year-old businessman reduced his liver enzymes (ALT/AST) by 60% by replacing fructose with liver-supportive fats and cruciferous elixirs.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Liver Health & Metabolic Detoxification in brief?",
          answer: "Non-alcoholic fatty liver (MASLD) is triggered by hepatic fat deposition, chiefly driven by dietary fructose processing. We support liver health by removing refined corn syrup and supplying choline to facilitate fat transport and clearance.",
          category: "Summary"
      },
      {
          question: "How Fructose Overloads the Liver?",
          answer: "Unlike glucose, which can be used by all cells, fructose is processed exclusively by the liver. When you consume high amounts of fructose (like in juices or sodas), the liver converts the excess directly into triglycerides, causing fat storage.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Eliminate Fructose\" help with Liver Health & Metabolic Detoxification?",
          answer: "Yes \u2014 Eliminate Fructose is one of the natural approaches recommended for Liver Health & Metabolic Detoxification.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Choline-rich foods\" help with Liver Health & Metabolic Detoxification?",
          answer: "Yes \u2014 Choline-rich foods is one of the natural approaches recommended for Liver Health & Metabolic Detoxification.",
          category: "Natural Approach"
      },
      {
          question: "What is Liver Health & Metabolic Detoxification?",
          answer: "Restore Liver Health",
          category: "Overview"
      },
      {
          question: "Can you explain Liver Health & Metabolic Detoxification in more depth?",
          answer: "Focuses on supporting liver health and lipid clearance (NAFLD), primarily caused by excessive sugar and processed food intake.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: How Fructose Overloads the Liver?",
          answer: "Substitute fruit juices with infused cucumber-mint water. Removing liquid fructose is the fastest way to relieve liver processing strain.",
          category: "Pro Tip"
      },
      {
          question: "Does \"Garlic\" help with Liver Health & Metabolic Detoxification?",
          answer: "Yes \u2014 Garlic is one of the natural approaches recommended for Liver Health & Metabolic Detoxification.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Onions\" help with Liver Health & Metabolic Detoxification?",
          answer: "Yes \u2014 Onions is one of the natural approaches recommended for Liver Health & Metabolic Detoxification.",
          category: "Natural Approach"
      }
  ],
    aiSummaryBlock: {
      tldr: "Non-alcoholic fatty liver (MASLD) is triggered by hepatic fat deposition, chiefly driven by dietary fructose processing. We support liver health by removing refined corn syrup and supplying choline to facilitate fat transport and clearance.",
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
      {
          question: "Can I reduce my thyroid medication?",
          answer: "Many patients at Nutrition Colours are able to optimize thyroid parameters under medical supervision as thyroid cell function and gut conversion rates improve through Dr. Shilpa's protocols.",
          category: "Medication"
      },
      {
          question: "Why is gut health important for thyroid?",
          answer: "Approximately 20% of thyroid hormone conversion (T4 to T3) occurs in the gut. Dr. Shilpa focuses on gut microbiome health at Nutrition Colours to maximize this conversion.",
          category: "Science"
      },
      {
          question: "Should I avoid cruciferous vegetables?",
          answer: "No. Lightly cooked cruciferous vegetables are perfectly safe. Dr. Shilpa advises against eating raw cruciferous greens in large quantities if you have hypothyroidism.",
          category: "Diet"
      },
      {
          question: "What causes Thyroid & Metabolic Optimization?",
          answer: "Low thyroid function leading to fatigue and slow metabolism.",
          category: "Root Cause"
      },
      {
          question: "How can I address Thyroid & Metabolic Optimization through nutrition?",
          answer: "Ensure adequate intake of Iodine, Selenium, and Zinc, and support gut health.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Thyroid & Metabolic Optimization?",
          answer: "T3/T4 levels optimized without dose increases in 4 months. A 34-year-old female achieved normal thyroid function after optimizing her gut microbiome and iodine-selenium mapping.",
          category: "Case Study"
      },
      {
          question: "Does \"Brazil Nuts (Selenium)\" help with Thyroid & Metabolic Optimization?",
          answer: "Yes \u2014 Brazil Nuts (Selenium) is one of the natural approaches recommended for Thyroid & Metabolic Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Seaweed (Iodine)\" help with Thyroid & Metabolic Optimization?",
          answer: "Yes \u2014 Seaweed (Iodine) is one of the natural approaches recommended for Thyroid & Metabolic Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zinc sources\" help with Thyroid & Metabolic Optimization?",
          answer: "Yes \u2014 Zinc sources is one of the natural approaches recommended for Thyroid & Metabolic Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Gut Health support\" help with Thyroid & Metabolic Optimization?",
          answer: "Yes \u2014 Gut Health support is one of the natural approaches recommended for Thyroid & Metabolic Optimization.",
          category: "Natural Approach"
      },
      {
          question: "What is Thyroid & Metabolic Optimization?",
          answer: "Boost Metabolism & Energy",
          category: "Overview"
      },
      {
          question: "Can you explain Thyroid & Metabolic Optimization in more depth?",
          answer: "Targets Hypothyroidism (low thyroid function).",
          category: "In-Depth"
      }
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
      {
          question: "Can I stop my BP pills on this diet?",
          answer: "Medication changes must always be supervised. However, Dr. Shilpa's sodium-potassium balancing protocols at Nutrition Colours have helped many patients support arterial elasticity and tone under doctor supervision.",
          category: "Medication"
      },
      {
          question: "Which salt is best for high BP?",
          answer: "We recommend reducing refined table salt. Dr. Shilpa at Nutrition Colours suggests minimal amounts of mineral-rich pink Himalayan salt or rock salt.",
          category: "Diet"
      },
      {
          question: "Does stress raise my blood pressure permanently?",
          answer: "Chronic stress elevates cortisol and tightens blood vessels. Our lifestyle coaching at Nutrition Colours includes breathing techniques to calm the nervous system.",
          category: "Stress"
      },
      {
          question: "What causes Hypertension Management?",
          answer: "Stiff blood vessels and high sodium intake increasing pressure.",
          category: "Root Cause"
      },
      {
          question: "How can I address Hypertension Management through nutrition?",
          answer: "Adopt DASH diet, reduce sodium, and boost Potassium and Magnesium.",
          category: "Solution"
      },
      {
          question: "Does \"Low Sodium\" help with Hypertension Management?",
          answer: "Yes \u2014 Low Sodium is one of the natural approaches recommended for Hypertension Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Potassium\" help with Hypertension Management?",
          answer: "Yes \u2014 High Potassium is one of the natural approaches recommended for Hypertension Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium-rich foods\" help with Hypertension Management?",
          answer: "Yes \u2014 Magnesium-rich foods is one of the natural approaches recommended for Hypertension Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"DASH Diet\" help with Hypertension Management?",
          answer: "Yes \u2014 DASH Diet is one of the natural approaches recommended for Hypertension Management.",
          category: "Natural Approach"
      },
      {
          question: "What is Hypertension Management?",
          answer: "Lower High Blood Pressure Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Hypertension Management in more depth?",
          answer: "Aims to support blood pressure within normal ranges naturally to protect the heart and reduce stroke risk.",
          category: "In-Depth"
      }
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
      {
          question: "Why does my acidity flare up after meals?",
          answer: "It is often due to low stomach acid (hypochlorhydria) or poor cardiac sphincter function. Dr. Shilpa uses natural digestive stimulants at Nutrition Colours to balance acid levels.",
          category: "Science"
      },
      {
          question: "Are antacids safe long-term?",
          answer: "Long-term antacids shut down stomach acid, leading to poor protein digestion and bacterial overgrowth. Nutrition Colours protocols aim to heal the stomach lining naturally.",
          category: "Treatment"
      },
      {
          question: "Which probiotics do you recommend?",
          answer: "We prioritize prebiotic foods and natural ferments first. Dr. Shilpa Thakur selects specific clinical probiotic strains when necessary to resolve dysbiosis.",
          category: "Probiotics"
      },
      {
          question: "What causes Gut Health & Acidity?",
          answer: "Microbiome imbalance and high acid levels.",
          category: "Root Cause"
      },
      {
          question: "How can I address Gut Health & Acidity through nutrition?",
          answer: "Feed beneficial bacteria with prebiotics and avoid acidic triggers.",
          category: "Solution"
      },
      {
          question: "Does \"Prebiotics\" help with Gut Health & Acidity?",
          answer: "Yes \u2014 Prebiotics is one of the natural approaches recommended for Gut Health & Acidity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Probiotics\" help with Gut Health & Acidity?",
          answer: "Yes \u2014 Probiotics is one of the natural approaches recommended for Gut Health & Acidity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Reduce coffee/alcohol\" help with Gut Health & Acidity?",
          answer: "Yes \u2014 Reduce coffee/alcohol is one of the natural approaches recommended for Gut Health & Acidity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Mindful eating\" help with Gut Health & Acidity?",
          answer: "Yes \u2014 Mindful eating is one of the natural approaches recommended for Gut Health & Acidity.",
          category: "Natural Approach"
      },
      {
          question: "What is Gut Health & Acidity?",
          answer: "Improve Digestion Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Gut Health & Acidity in more depth?",
          answer: "Focuses on balancing the gut microbiome and healing the gut lining.",
          category: "In-Depth"
      }
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
      {
          question: "How does cycle syncing help with weight loss?",
          answer: "By aligning your caloric intake and training types with estrogen and progesterone phases, Dr. Shilpa optimizes fat burning and reduces cravings at Nutrition Colours.",
          category: "Science"
      },
      {
          question: "Why is visceral fat harder to lose for women?",
          answer: "Hormonal shifts, particularly declines in estrogen or elevations in cortisol, encourage belly fat storage. We target these root hormonal issues.",
          category: "Hormones"
      },
      {
          question: "Will I lose muscle if I lose weight?",
          answer: "Not with our plans. Nutrition Colours protocols are rich in protein and paired with resistance guidance to ensure you lose fat, not muscle.",
          category: "Fitness"
      },
      {
          question: "What causes Weight Loss for Women?",
          answer: "Hormonal shifts impacting metabolism and weight storage.",
          category: "Root Cause"
      },
      {
          question: "How can I address Weight Loss for Women through nutrition?",
          answer: "Prioritize protein to preserve muscle and align with cycle.",
          category: "Solution"
      },
      {
          question: "Does \"High Protein\" help with Weight Loss for Women?",
          answer: "Yes \u2014 High Protein is one of the natural approaches recommended for Weight Loss for Women.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Cycle Syncing\" help with Weight Loss for Women?",
          answer: "Yes \u2014 Cycle Syncing is one of the natural approaches recommended for Weight Loss for Women.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Iron & Vitamin D\" help with Weight Loss for Women?",
          answer: "Yes \u2014 Iron & Vitamin D is one of the natural approaches recommended for Weight Loss for Women.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Resistance training\" help with Weight Loss for Women?",
          answer: "Yes \u2014 Resistance training is one of the natural approaches recommended for Weight Loss for Women.",
          category: "Natural Approach"
      },
      {
          question: "What is Weight Loss for Women?",
          answer: "Safe & Effective Plans",
          category: "Overview"
      },
      {
          question: "Can you explain Weight Loss for Women in more depth?",
          answer: "Acknowledges hormonal influences on female metabolism.",
          category: "In-Depth"
      }
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
      {
          question: "How does testosterone affect weight loss in men?",
          answer: "Testosterone builds muscle and burns fat. Dr. Shilpa designs diets that supply zinc and healthy fats to support natural testosterone output at Nutrition Colours.",
          category: "Hormones"
      },
      {
          question: "Is intermittent fasting recommended for men?",
          answer: "Yes. Intermittent fasting is highly effective for men to improve insulin sensitivity and manage calorie intake, as structured in our plans.",
          category: "Timing"
      },
      {
          question: "How much protein do I need?",
          answer: "We calculate protein based on your active lean mass. Our plans ensure sufficient protein to preserve strength during weight loss.",
          category: "Nutrition"
      },
      {
          question: "What causes Weight Loss for Men?",
          answer: "Metabolic slowdown and visceral fat storage.",
          category: "Root Cause"
      },
      {
          question: "How can I address Weight Loss for Men through nutrition?",
          answer: "High-protein diet combined with resistance training and intermittent fasting.",
          category: "Solution"
      },
      {
          question: "Does \"High Protein\" help with Weight Loss for Men?",
          answer: "Yes \u2014 High Protein is one of the natural approaches recommended for Weight Loss for Men.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Intermittent Fasting\" help with Weight Loss for Men?",
          answer: "Yes \u2014 Intermittent Fasting is one of the natural approaches recommended for Weight Loss for Men.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Resistance training\" help with Weight Loss for Men?",
          answer: "Yes \u2014 Resistance training is one of the natural approaches recommended for Weight Loss for Men.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zinc-rich foods\" help with Weight Loss for Men?",
          answer: "Yes \u2014 Zinc-rich foods is one of the natural approaches recommended for Weight Loss for Men.",
          category: "Natural Approach"
      },
      {
          question: "What is Weight Loss for Men?",
          answer: "Fat Reduction & Muscle Gain",
          category: "Overview"
      },
      {
          question: "Can you explain Weight Loss for Men in more depth?",
          answer: "Leverages men's higher baseline metabolism.",
          category: "In-Depth"
      }
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
      {
          question: "Why is belly fat so dangerous?",
          answer: "Belly fat is visceral fat, which secretes inflammatory cytokines and increases the risk of heart disease and diabetes. Dr. Shilpa prioritizes its reduction.",
          category: "Health"
      },
      {
          question: "Can I spot-reduce belly fat?",
          answer: "You cannot spot-reduce via exercise, but metabolic changes through Nutrition Colours plans selectively target visceral fat first by lowering insulin.",
          category: "Science"
      },
      {
          question: "How does stress affect belly fat?",
          answer: "High cortisol shifts fat storage directly to the abdominal area. Dr. Shilpa incorporates adaptogens and sleep protocols to block this pathway.",
          category: "Stress"
      },
      {
          question: "What causes Belly Fat Reduction?",
          answer: "Dangerous visceral fat caused by sugar, alcohol, and insulin imbalance.",
          category: "Root Cause"
      },
      {
          question: "How can I address Belly Fat Reduction through nutrition?",
          answer: "Strict reduction of sugar/alcohol, high-fiber intake.",
          category: "Solution"
      },
      {
          question: "Does \"Soluble Fiber\" help with Belly Fat Reduction?",
          answer: "Yes \u2014 Soluble Fiber is one of the natural approaches recommended for Belly Fat Reduction.",
          category: "Natural Approach"
      },
      {
          question: "Does \"No Sugary Drinks\" help with Belly Fat Reduction?",
          answer: "Yes \u2014 No Sugary Drinks is one of the natural approaches recommended for Belly Fat Reduction.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Protein\" help with Belly Fat Reduction?",
          answer: "Yes \u2014 High Protein is one of the natural approaches recommended for Belly Fat Reduction.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Stress Management\" help with Belly Fat Reduction?",
          answer: "Yes \u2014 Stress Management is one of the natural approaches recommended for Belly Fat Reduction.",
          category: "Natural Approach"
      },
      {
          question: "What is Belly Fat Reduction?",
          answer: "Lose Stubborn Fat Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Belly Fat Reduction in more depth?",
          answer: "Targets dangerous visceral fat around organs.",
          category: "In-Depth"
      }
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
      {
          question: "What are the signs of insulin resistance?",
          answer: "Common signs include fatigue after meals, intense sugar cravings, skin tags, and weight accumulation around the waist, which we assess at Nutrition Colours.",
          category: "Symptoms"
      },
      {
          question: "Can walking after meals reduce insulin spikes?",
          answer: "Yes. Walking for 10-15 minutes immediately after eating allows muscles to clear glucose from the blood without relying on insulin.",
          category: "Lifestyle"
      },
      {
          question: "How long does it take to optimize insulin sensitivity?",
          answer: "With strict adherence to Dr. Shilpa's circadian protocols, insulin sensitivity begins improving within 30 days and can be fully optimized in 90 days.",
          category: "Timeline"
      },
      {
          question: "What causes Insulin Resistance Management?",
          answer: "Cells ignoring insulin signals leading to high blood sugar.",
          category: "Root Cause"
      },
      {
          question: "How can I address Insulin Resistance Management through nutrition?",
          answer: "Slow-digesting carbs paired with protein and fat.",
          category: "Solution"
      },
      {
          question: "Does \"Slow Carbs\" help with Insulin Resistance Management?",
          answer: "Yes \u2014 Slow Carbs is one of the natural approaches recommended for Insulin Resistance Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Food Pairing\" help with Insulin Resistance Management?",
          answer: "Yes \u2014 Food Pairing is one of the natural approaches recommended for Insulin Resistance Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Post-meal walking\" help with Insulin Resistance Management?",
          answer: "Yes \u2014 Post-meal walking is one of the natural approaches recommended for Insulin Resistance Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium\" help with Insulin Resistance Management?",
          answer: "Yes \u2014 Magnesium is one of the natural approaches recommended for Insulin Resistance Management.",
          category: "Natural Approach"
      },
      {
          question: "What is Insulin Resistance Management?",
          answer: "Prevent Diabetes Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Insulin Resistance Management in more depth?",
          answer: "Prevents pre-diabetes and diabetes by improving how cells respond to insulin.",
          category: "In-Depth"
      }
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
      {
          question: "Is pre-diabetes reversible?",
          answer: "Absolutely. Pre-diabetes is a warning light. Dr. Shilpa's protocols at Nutrition Colours have a near 100% success rate in restoring normal HbA1c levels within 90 days.",
          category: "Prognosis"
      },
      {
          question: "What should my fasting blood sugar be?",
          answer: "We aim for fasting glucose below 100 mg/dL and HbA1c below 5.7%. Our programs help you achieve and maintain these metrics.",
          category: "Metrics"
      },
      {
          question: "Do I need a continuous glucose monitor (CGM)?",
          answer: "A CGM is highly recommended as it provides real-time data on how your body reacts to specific foods, helping us customize your diet.",
          category: "Tools"
      },
      {
          question: "What causes Pre-Diabetes Care?",
          answer: "Elevated blood sugar that hasn't reached type 2 diabetes levels yet.",
          category: "Root Cause"
      },
      {
          question: "How can I address Pre-Diabetes Care through nutrition?",
          answer: "Intensive lifestyle intervention focusing on diet and activity.",
          category: "Solution"
      },
      {
          question: "Does \"Consistent Activity\" help with Pre-Diabetes Care?",
          answer: "Yes \u2014 Consistent Activity is one of the natural approaches recommended for Pre-Diabetes Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Fiber\" help with Pre-Diabetes Care?",
          answer: "Yes \u2014 High Fiber is one of the natural approaches recommended for Pre-Diabetes Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Monitoring\" help with Pre-Diabetes Care?",
          answer: "Yes \u2014 Monitoring is one of the natural approaches recommended for Pre-Diabetes Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Early Intervention\" help with Pre-Diabetes Care?",
          answer: "Yes \u2014 Early Intervention is one of the natural approaches recommended for Pre-Diabetes Care.",
          category: "Natural Approach"
      },
      {
          question: "What is Pre-Diabetes Care?",
          answer: "Act Now to Reduce Risk",
          category: "Overview"
      },
      {
          question: "Can you explain Pre-Diabetes Care in more depth?",
          answer: "Identifies the critical window for prevention before Type 2 Diabetes develops.",
          category: "In-Depth"
      }
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
      {
          question: "What are phytoestrogens?",
          answer: "Phytoestrogens are plant compounds found in ground flaxseed and non-GMO soy that naturally balance estrogen receptors to reduce hot flashes.",
          category: "Science"
      },
      {
          question: "Can diet help with hot flashes?",
          answer: "Yes. Dr. Shilpa's hormone-supporting diets at Nutrition Colours have helped many women reduce the frequency and intensity of hot flashes naturally.",
          category: "Remedies"
      },
      {
          question: "How do I prevent bone loss during menopause?",
          answer: "By pairing calcium-rich foods with Vitamin D and K2, and doing light resistance training as structured in our joint and hormone protocols.",
          category: "Bones"
      },
      {
          question: "What causes Menopause Hormone Support?",
          answer: "Natural decline in estrogen and progesterone causing symptoms like hot flashes and night sweats.",
          category: "Root Cause"
      },
      {
          question: "How can I address Menopause Hormone Support through nutrition?",
          answer: "Incorporate phytoestrogens and manage stress to support hormonal balance.",
          category: "Solution"
      },
      {
          question: "Does \"Phytoestrogens\" help with Menopause Hormone Support?",
          answer: "Yes \u2014 Phytoestrogens is one of the natural approaches recommended for Menopause Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Calcium\" help with Menopause Hormone Support?",
          answer: "Yes \u2014 Calcium is one of the natural approaches recommended for Menopause Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium\" help with Menopause Hormone Support?",
          answer: "Yes \u2014 Magnesium is one of the natural approaches recommended for Menopause Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Black Cohosh (consultation needed)\" help with Menopause Hormone Support?",
          answer: "Yes \u2014 Black Cohosh (consultation needed) is one of the natural approaches recommended for Menopause Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Menopause Hormone Support?",
          answer: "Manage Hot Flashes Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Menopause Hormone Support in more depth?",
          answer: "Addresses the transition beyond reproductive years.",
          category: "In-Depth"
      }
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
      {
          question: "What are endocrine disruptors?",
          answer: "These are chemical toxins found in plastic containers, pesticides, and body care products that mimic hormones and block natural receptors.",
          category: "Toxins"
      },
      {
          question: "How does the liver affect my hormones?",
          answer: "The liver filters and breaks down used hormones. Sluggish liver pathways lead to hormone recycling and buildup, which Dr. Shilpa addresses.",
          category: "Science"
      },
      {
          question: "Are cruciferous vegetables good for hormones?",
          answer: "Yes. Broccoli, kale, and cabbage contain Indole-3-Carbinol, which supports the safe detoxification of estrogens in the liver.",
          category: "Diet"
      },
      {
          question: "What causes Hormonal Imbalance Correction?",
          answer: "Disrupted communication between endocrine glands due to environmental and dietary factors.",
          category: "Root Cause"
      },
      {
          question: "How can I address Hormonal Imbalance Correction through nutrition?",
          answer: "Eliminate endocrine disruptors and support liver detoxification.",
          category: "Solution"
      },
      {
          question: "Does \"Cruciferous Veggies\" help with Hormonal Imbalance Correction?",
          answer: "Yes \u2014 Cruciferous Veggies is one of the natural approaches recommended for Hormonal Imbalance Correction.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Limit Plastics\" help with Hormonal Imbalance Correction?",
          answer: "Yes \u2014 Limit Plastics is one of the natural approaches recommended for Hormonal Imbalance Correction.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Organic foods\" help with Hormonal Imbalance Correction?",
          answer: "Yes \u2014 Organic foods is one of the natural approaches recommended for Hormonal Imbalance Correction.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Liver support\" help with Hormonal Imbalance Correction?",
          answer: "Yes \u2014 Liver support is one of the natural approaches recommended for Hormonal Imbalance Correction.",
          category: "Natural Approach"
      },
      {
          question: "What is Hormonal Imbalance Correction?",
          answer: "Restore Vitality & Mood",
          category: "Overview"
      },
      {
          question: "Can you explain Hormonal Imbalance Correction in more depth?",
          answer: "Universal hormonal support for both genders.",
          category: "In-Depth"
      }
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
      {
          question: "Does body fat lower testosterone?",
          answer: "Yes. Adipose tissue contains an enzyme called aromatase, which converts active testosterone into estrogen. Losing fat is vital for male vitality.",
          category: "Science"
      },
      {
          question: "What foods are high in zinc?",
          answer: "Pumpkin seeds, lentils, chickpeas, and sesame seeds are rich plant sources of zinc. Dr. Shilpa includes them in our male vitality plans.",
          category: "Diet"
      },
      {
          question: "How does sleep affect testosterone?",
          answer: "Most testosterone is produced during deep REM sleep. Fragmented or short sleep can drop your testosterone levels by 15% in just one week.",
          category: "Sleep"
      },
      {
          question: "What causes Testosterone Boost?",
          answer: "Low testosterone linked to high body fat and poor nutrient intake.",
          category: "Root Cause"
      },
      {
          question: "How can I address Testosterone Boost through nutrition?",
          answer: "Optimize Zinc, Vitamin D, and sleep; incorporate heavy lifting.",
          category: "Solution"
      },
      {
          question: "Does \"Zinc-rich foods\" help with Testosterone Boost?",
          answer: "Yes \u2014 Zinc-rich foods is one of the natural approaches recommended for Testosterone Boost.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Vitamin D\" help with Testosterone Boost?",
          answer: "Yes \u2014 Vitamin D is one of the natural approaches recommended for Testosterone Boost.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Strength training\" help with Testosterone Boost?",
          answer: "Yes \u2014 Strength training is one of the natural approaches recommended for Testosterone Boost.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Quality Sleep\" help with Testosterone Boost?",
          answer: "Yes \u2014 Quality Sleep is one of the natural approaches recommended for Testosterone Boost.",
          category: "Natural Approach"
      },
      {
          question: "What is Testosterone Boost?",
          answer: "Improve Energy & Vitality",
          category: "Overview"
      },
      {
          question: "Can you explain Testosterone Boost in more depth?",
          answer: "Specific to male hormonal health.",
          category: "In-Depth"
      }
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
      {
          question: "What are adaptogens?",
          answer: "Adaptogens are natural herbs like Ashwagandha and Holy Basil that help regulate the HPA axis, keeping cortisol spikes in check.",
          category: "Science"
      },
      {
          question: "Does high cortisol cause belly fat?",
          answer: "Yes. Cortisol triggers the mobilization of triglycerides and relocates them to deep visceral fat cells around the abdomen.",
          category: "Weight"
      },
      {
          question: "How can I check my cortisol levels?",
          answer: "We recommend salivary cortisol testing at multiple points during the day to map your natural adrenal curve at Nutrition Colours.",
          category: "Testing"
      },
      {
          question: "What causes Cortisol & Stress Balance?",
          answer: "Chronic stress causing high cortisol, leading to anxiety and belly fat.",
          category: "Root Cause"
      },
      {
          question: "How can I address Cortisol & Stress Balance through nutrition?",
          answer: "Use adaptogenic herbs and prioritize sleep and meditation.",
          category: "Solution"
      },
      {
          question: "Does \"Ashwagandha\" help with Cortisol & Stress Balance?",
          answer: "Yes \u2014 Ashwagandha is one of the natural approaches recommended for Cortisol & Stress Balance.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium\" help with Cortisol & Stress Balance?",
          answer: "Yes \u2014 Magnesium is one of the natural approaches recommended for Cortisol & Stress Balance.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Routine Sleep\" help with Cortisol & Stress Balance?",
          answer: "Yes \u2014 Routine Sleep is one of the natural approaches recommended for Cortisol & Stress Balance.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Meditation\" help with Cortisol & Stress Balance?",
          answer: "Yes \u2014 Meditation is one of the natural approaches recommended for Cortisol & Stress Balance.",
          category: "Natural Approach"
      },
      {
          question: "What is Cortisol & Stress Balance?",
          answer: "Calm the Stress Hormone",
          category: "Overview"
      },
      {
          question: "Can you explain Cortisol & Stress Balance in more depth?",
          answer: "Managing the body's 'fight or flight' hormone.",
          category: "In-Depth"
      }
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
      {
          question: "Do I need to avoid all cholesterol foods?",
          answer: "Dietary cholesterol has a minor impact on blood cholesterol for most people. Dr. Shilpa focuses on reducing refined sugars and trans fats instead.",
          category: "Science"
      },
      {
          question: "What is the role of soluble fiber?",
          answer: "Soluble fiber acts like a sponge in the gut, binding to bile acids and cholesterol and facilitating their elimination from the body.",
          category: "Diet"
      },
      {
          question: "Are statins the only way to manage cholesterol?",
          answer: "Statins are medical decisions, but our nutritional therapies at Nutrition Colours have helped many patients achieve healthy lipid profiles naturally.",
          category: "Treatment"
      },
      {
          question: "What causes Cholesterol Management?",
          answer: "Unbalanced LDL/HDL ratios increasing heart disease risk.",
          category: "Root Cause"
      },
      {
          question: "How can I address Cholesterol Management through nutrition?",
          answer: "High intake of soluble fiber and healthy Omega-3 fats.",
          category: "Solution"
      },
      {
          question: "Does \"Soluble Fiber\" help with Cholesterol Management?",
          answer: "Yes \u2014 Soluble Fiber is one of the natural approaches recommended for Cholesterol Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Omega-3 Fats\" help with Cholesterol Management?",
          answer: "Yes \u2014 Omega-3 Fats is one of the natural approaches recommended for Cholesterol Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Olive Oil\" help with Cholesterol Management?",
          answer: "Yes \u2014 Olive Oil is one of the natural approaches recommended for Cholesterol Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Avoid Trans Fats\" help with Cholesterol Management?",
          answer: "Yes \u2014 Avoid Trans Fats is one of the natural approaches recommended for Cholesterol Management.",
          category: "Natural Approach"
      },
      {
          question: "What is Cholesterol Management?",
          answer: "Keep Your Arteries Clear",
          category: "Overview"
      },
      {
          question: "Can you explain Cholesterol Management in more depth?",
          answer: "Promoting a healthy heart lipid profile.",
          category: "In-Depth"
      }
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
      {
          question: "How do beets help heart health?",
          answer: "Beets are rich in dietary nitrates, which convert into nitric oxide in the blood, relaxing arteries and lowering blood pressure instantly.",
          category: "Science"
      },
      {
          question: "What causes arterial inflammation?",
          answer: "High blood sugar, industrial seed oils, and chronic stress damage the endothelial lining of blood vessels, which we address at Nutrition Colours.",
          category: "Science"
      },
      {
          question: "Is CoQ10 necessary?",
          answer: "CoQ10 is essential for heart cell energy. If you take cholesterol-lowering statins, you may need CoQ10 supplements as statins deplete them.",
          category: "Supplements"
      },
      {
          question: "What causes Heart Health Optimization?",
          answer: "Weak heart muscle and arterial inflammation.",
          category: "Root Cause"
      },
      {
          question: "How can I address Heart Health Optimization through nutrition?",
          answer: "Anti-inflammatory diet rich in antioxidants and cardiovascular movement.",
          category: "Solution"
      },
      {
          question: "Does \"Berries\" help with Heart Health Optimization?",
          answer: "Yes \u2014 Berries is one of the natural approaches recommended for Heart Health Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Beets (Nitrates)\" help with Heart Health Optimization?",
          answer: "Yes \u2014 Beets (Nitrates) is one of the natural approaches recommended for Heart Health Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Does \"CoQ10\" help with Heart Health Optimization?",
          answer: "Yes \u2014 CoQ10 is one of the natural approaches recommended for Heart Health Optimization.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Cardio exercise\" help with Heart Health Optimization?",
          answer: "Yes \u2014 Cardio exercise is one of the natural approaches recommended for Heart Health Optimization.",
          category: "Natural Approach"
      },
      {
          question: "What is Heart Health Optimization?",
          answer: "Strengthen Your Cardio System",
          category: "Overview"
      },
      {
          question: "Can you explain Heart Health Optimization in more depth?",
          answer: "The foundation for long-term cardiovascular health.",
          category: "In-Depth"
      }
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
      {
          question: "Can spices improve my cold hands and feet?",
          answer: "Yes. Warming spices like cayenne and ginger act as mild natural vasodilators, expanding small capillaries to improve distal circulation.",
          category: "Remedies"
      },
      {
          question: "How does hydration affect blood flow?",
          answer: "Dehydration thickens the blood, making it harder for the heart to pump. Dr. Shilpa emphasizes proper electrolyte-balanced hydration.",
          category: "Lifestyle"
      },
      {
          question: "What exercises are best for circulation?",
          answer: "Rebounding, walking, and gentle calf-raise exercises help pump venous blood back to the heart, as incorporated in our daily routines.",
          category: "Exercise"
      },
      {
          question: "What causes Blood Circulation Support?",
          answer: "Poor circulation leading to cold extremities and numbness.",
          category: "Root Cause"
      },
      {
          question: "How can I address Blood Circulation Support through nutrition?",
          answer: "Use warming spices and ensure adequate hydration and movement.",
          category: "Solution"
      },
      {
          question: "Does \"Ginger\" help with Blood Circulation Support?",
          answer: "Yes \u2014 Ginger is one of the natural approaches recommended for Blood Circulation Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Turmeric\" help with Blood Circulation Support?",
          answer: "Yes \u2014 Turmeric is one of the natural approaches recommended for Blood Circulation Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Hydration\" help with Blood Circulation Support?",
          answer: "Yes \u2014 Hydration is one of the natural approaches recommended for Blood Circulation Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Leg movement\" help with Blood Circulation Support?",
          answer: "Yes \u2014 Leg movement is one of the natural approaches recommended for Blood Circulation Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Blood Circulation Support?",
          answer: "Improve Nutrient & Oxygen Delivery",
          category: "Overview"
      },
      {
          question: "Can you explain Blood Circulation Support in more depth?",
          answer: "Ensures efficient delivery of oxygen and nutrients.",
          category: "In-Depth"
      }
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
      {
          question: "How does sugar affect joint pain?",
          answer: "Sugar triggers the release of inflammatory cytokines, which directly aggravate arthritic joints. We remove refined sugar to ease flares.",
          category: "Triggers"
      },
      {
          question: "Why is collagen important?",
          answer: "Collagen is the primary structural protein in joint cartilage. Dr. Shilpa provides cofactors like Vitamin C to help your body build its own collagen.",
          category: "Science"
      },
      {
          question: "Does turmeric really relieve pain?",
          answer: "Yes. Curcumin in turmeric blocks inflammatory pathways. We pair it with black pepper and fats at Nutrition Colours to maximize absorption.",
          category: "Remedies"
      },
      {
          question: "What causes Joint Pain Relief?",
          answer: "Age-related wear or inflammatory conditions causing pain.",
          category: "Root Cause"
      },
      {
          question: "How can I address Joint Pain Relief through nutrition?",
          answer: "Anti-inflammatory diet and joint-lubricating nutrients.",
          category: "Solution"
      },
      {
          question: "Does \"Turmeric/Curcumin\" help with Joint Pain Relief?",
          answer: "Yes \u2014 Turmeric/Curcumin is one of the natural approaches recommended for Joint Pain Relief.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Omega-3\" help with Joint Pain Relief?",
          answer: "Yes \u2014 Omega-3 is one of the natural approaches recommended for Joint Pain Relief.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Vitamin C\" help with Joint Pain Relief?",
          answer: "Yes \u2014 Vitamin C is one of the natural approaches recommended for Joint Pain Relief.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Gentle Yoga\" help with Joint Pain Relief?",
          answer: "Yes \u2014 Gentle Yoga is one of the natural approaches recommended for Joint Pain Relief.",
          category: "Natural Approach"
      },
      {
          question: "What is Joint Pain Relief?",
          answer: "Reduce Inflammation & Stiffness",
          category: "Overview"
      },
      {
          question: "Can you explain Joint Pain Relief in more depth?",
          answer: "Alleviating discomfort and improving mobility.",
          category: "In-Depth"
      }
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
      {
          question: "What is the difference between OA and RA?",
          answer: "OA is wear-and-tear cartilage breakdown, while RA is an autoimmune attack on joint linings. Both benefit from Dr. Shilpa's metabolic diets.",
          category: "Science"
      },
      {
          question: "Why should I avoid nightshades?",
          answer: "Nightshades contain solanine, a chemical compound that can trigger joint inflammation in sensitive arthritic patients, which we test for.",
          category: "Diet"
      },
      {
          question: "Can dietary changes reduce RA inflammation?",
          answer: "Yes. By healing gut permeability and eliminating inflammatory foods, we help lower systemic autoimmune reactions in RA patients.",
          category: "Autoimmune"
      },
      {
          question: "What causes Arthritis Support?",
          answer: "Autoimmune or degenerative destruction of joint tissue.",
          category: "Root Cause"
      },
      {
          question: "How can I address Arthritis Support through nutrition?",
          answer: "Identify food triggers (nightshades) and boost antioxidants.",
          category: "Solution"
      },
      {
          question: "Does \"Avoid Nightshades\" help with Arthritis Support?",
          answer: "Yes \u2014 Avoid Nightshades is one of the natural approaches recommended for Arthritis Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Antioxidants\" help with Arthritis Support?",
          answer: "Yes \u2014 Antioxidants is one of the natural approaches recommended for Arthritis Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Gluten-free trial\" help with Arthritis Support?",
          answer: "Yes \u2014 Gluten-free trial is one of the natural approaches recommended for Arthritis Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Weight Management\" help with Arthritis Support?",
          answer: "Yes \u2014 Weight Management is one of the natural approaches recommended for Arthritis Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Arthritis Support?",
          answer: "Manage Osteo & Rheumatoid Issues",
          category: "Overview"
      },
      {
          question: "Can you explain Arthritis Support in more depth?",
          answer: "Managing both Osteoarthritis and Rheumatoid Arthritis.",
          category: "In-Depth"
      }
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
      {
          question: "Is milk necessary for strong bones?",
          answer: "No. Dr. Shilpa utilizes excellent non-dairy calcium sources like ragi (finger millet), sesame seeds, and green leafy vegetables at Nutrition Colours.",
          category: "Diet"
      },
      {
          question: "Why is Vitamin K2 important for bones?",
          answer: "Vitamin K2 acts as a traffic controller, directing calcium into the bone matrix and keeping it out of your arteries where it causes plaque.",
          category: "Science"
      },
      {
          question: "Does weight-bearing exercise help bones?",
          answer: "Yes. Stressing bones through walking or strength training stimulates osteoblasts, the cells responsible for building new bone tissue.",
          category: "Exercise"
      },
      {
          question: "What causes Osteoporosis Prevention?",
          answer: "Loss of bone mineral density, increasing fracture risk.",
          category: "Root Cause"
      },
      {
          question: "How can I address Osteoporosis Prevention through nutrition?",
          answer: "Ensure absorption of Calcium with Vitamin D and K2.",
          category: "Solution"
      },
      {
          question: "Does \"Ragi/Sesame\" help with Osteoporosis Prevention?",
          answer: "Yes \u2014 Ragi/Sesame is one of the natural approaches recommended for Osteoporosis Prevention.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Vitamin D/K2\" help with Osteoporosis Prevention?",
          answer: "Yes \u2014 Vitamin D/K2 is one of the natural approaches recommended for Osteoporosis Prevention.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Strength Training\" help with Osteoporosis Prevention?",
          answer: "Yes \u2014 Strength Training is one of the natural approaches recommended for Osteoporosis Prevention.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Avoid excessive caffeine\" help with Osteoporosis Prevention?",
          answer: "Yes \u2014 Avoid excessive caffeine is one of the natural approaches recommended for Osteoporosis Prevention.",
          category: "Natural Approach"
      },
      {
          question: "What is Osteoporosis Prevention?",
          answer: "Build Strong Bones",
          category: "Overview"
      },
      {
          question: "Can you explain Osteoporosis Prevention in more depth?",
          answer: "Maintaining bone mineral density as we age.",
          category: "In-Depth"
      }
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
      {
          question: "What are goitrogens?",
          answer: "Goitrogens are natural compounds in foods like raw broccoli and cabbage that block iodine uptake, helping slow an overactive thyroid.",
          category: "Science"
      },
      {
          question: "Why should I limit iodine in hyperthyroidism?",
          answer: "Iodine is the raw building block of thyroid hormone. Consuming excess iodine can overstimulate hormone synthesis, which we monitor.",
          category: "Diet"
      },
      {
          question: "Can stress trigger hyperthyroidism?",
          answer: "Yes, chronic stress and high adrenaline can trigger Graves' autoimmune flares. Nutrition Colours includes nervous system balancing.",
          category: "Stress"
      },
      {
          question: "What causes Hyperthyroid Protocol?",
          answer: "Excessive thyroid hormone production causing weight loss and anxiety.",
          category: "Root Cause"
      },
      {
          question: "How can I address Hyperthyroid Protocol through nutrition?",
          answer: "Incorporate goitrogens responsibly and manage iodine intake.",
          category: "Solution"
      },
      {
          question: "Does \"Raw Cruciferous Veggies\" help with Hyperthyroid Protocol?",
          answer: "Yes \u2014 Raw Cruciferous Veggies is one of the natural approaches recommended for Hyperthyroid Protocol.",
          category: "Natural Approach"
      },
      {
          question: "Does \"L-Carnitine support\" help with Hyperthyroid Protocol?",
          answer: "Yes \u2014 L-Carnitine support is one of the natural approaches recommended for Hyperthyroid Protocol.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Stress management\" help with Hyperthyroid Protocol?",
          answer: "Yes \u2014 Stress management is one of the natural approaches recommended for Hyperthyroid Protocol.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Bugleweed\" help with Hyperthyroid Protocol?",
          answer: "Yes \u2014 Bugleweed is one of the natural approaches recommended for Hyperthyroid Protocol.",
          category: "Natural Approach"
      },
      {
          question: "What is Hyperthyroid Protocol?",
          answer: "Calm the Overactive Thyroid",
          category: "Overview"
      },
      {
          question: "Can you explain Hyperthyroid Protocol in more depth?",
          answer: "Addresses an overactive thyroid.",
          category: "In-Depth"
      }
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
      {
          question: "How do I get complete amino acids from plants?",
          answer: "By pairing grains with legumes (like brown rice with lentils), you obtain all nine essential amino acids needed for muscle synthesis.",
          category: "Nutrition"
      },
      {
          question: "When is the best time to eat protein after workouts?",
          answer: "Dr. Shilpa recommends consuming a high-protein meal within 45 to 60 minutes after exercise to optimize muscle repair at Nutrition Colours.",
          category: "Timing"
      },
      {
          question: "Does ginger help muscle soreness?",
          answer: "Yes. Ginger contains gingerols, which act as natural anti-inflammatory agents to reduce delayed onset muscle soreness (DOMS).",
          category: "Remedies"
      },
      {
          question: "What causes Muscle Recovery & Strength?",
          answer: "Slow recovery, muscle soreness, and sarcopenia (age-related muscle loss).",
          category: "Root Cause"
      },
      {
          question: "How can I address Muscle Recovery & Strength through nutrition?",
          answer: "Optimizing plant-based protein intake and timing for maximum repair.",
          category: "Solution"
      },
      {
          question: "Does \"Complete Plant Proteins\" help with Muscle Recovery & Strength?",
          answer: "Yes \u2014 Complete Plant Proteins is one of the natural approaches recommended for Muscle Recovery & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Post-workout windows\" help with Muscle Recovery & Strength?",
          answer: "Yes \u2014 Post-workout windows is one of the natural approaches recommended for Muscle Recovery & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Ginger\" help with Muscle Recovery & Strength?",
          answer: "Yes \u2014 Ginger is one of the natural approaches recommended for Muscle Recovery & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Sufficient Calories\" help with Muscle Recovery & Strength?",
          answer: "Yes \u2014 Sufficient Calories is one of the natural approaches recommended for Muscle Recovery & Strength.",
          category: "Natural Approach"
      },
      {
          question: "What is Muscle Recovery & Strength?",
          answer: "Rebuild & Repair Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Muscle Recovery & Strength in more depth?",
          answer: "Focuses on maintaining lean muscle mass and preventing age-related decline.",
          category: "In-Depth"
      }
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
      {
          question: "How does magnesium help back pain?",
          answer: "Magnesium relaxes skeletal muscles and blocks pain receptors in the spinal cord, reducing spasms and tension around vertebrae.",
          category: "Science"
      },
      {
          question: "Which vitamins support spinal nerves?",
          answer: "Vitamin B12 and methylfolate are vital for maintaining the myelin sheath that insulates spinal nerves, as structured in our plans.",
          category: "Vitamins"
      },
      {
          question: "Does core strength affect back pain?",
          answer: "Absolutely. Weak abdominal muscles force the spine to bear excess load. We integrate core-stabilizing movements into recovery plans.",
          category: "Exercise"
      },
      {
          question: "What causes Back & Spine Health?",
          answer: "Chronic back pain, poor posture, and intervertebral disc issues.",
          category: "Root Cause"
      },
      {
          question: "How can I address Back & Spine Health through nutrition?",
          answer: "Anti-inflammatory diet and micronutrients for bone and nerve health.",
          category: "Solution"
      },
      {
          question: "Does \"Magnesium/Potassium\" help with Back & Spine Health?",
          answer: "Yes \u2014 Magnesium/Potassium is one of the natural approaches recommended for Back & Spine Health.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Vitamin B12\" help with Back & Spine Health?",
          answer: "Yes \u2014 Vitamin B12 is one of the natural approaches recommended for Back & Spine Health.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Omega-3\" help with Back & Spine Health?",
          answer: "Yes \u2014 Omega-3 is one of the natural approaches recommended for Back & Spine Health.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Stretching\" help with Back & Spine Health?",
          answer: "Yes \u2014 Stretching is one of the natural approaches recommended for Back & Spine Health.",
          category: "Natural Approach"
      },
      {
          question: "What is Back & Spine Health?",
          answer: "Support Your Structural Core",
          category: "Overview"
      },
      {
          question: "Can you explain Back & Spine Health in more depth?",
          answer: "Targets the health of the vertebrae and ligaments.",
          category: "In-Depth"
      }
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
      {
          question: "Can iron deficiency cause hair loss?",
          answer: "Yes. Low ferritin (stored iron) shuts down oxygen delivery to hair follicles, causing hair to enter the shedding phase. We monitor this closely.",
          category: "Science"
      },
      {
          question: "Is biotin the best vitamin for hair?",
          answer: "Biotin supports keratin production, but it must be paired with complete proteins and trace minerals to work effectively.",
          category: "Nutrition"
      },
      {
          question: "How does sugar affect scalp health?",
          answer: "High sugar diets raise insulin, which elevates sebum production and feeds scalp yeast, leading to dandruff and hair fall.",
          category: "Scalp"
      },
      {
          question: "What causes Hair Growth & Strength?",
          answer: "Thinning hair, hair fall, and brittle strands due to nutrient lack.",
          category: "Root Cause"
      },
      {
          question: "How can I address Hair Growth & Strength through nutrition?",
          answer: "Ensure adequate Iron, Biotin, and high-quality protein.",
          category: "Solution"
      },
      {
          question: "Does \"Iron-rich foods\" help with Hair Growth & Strength?",
          answer: "Yes \u2014 Iron-rich foods is one of the natural approaches recommended for Hair Growth & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Biotin sources\" help with Hair Growth & Strength?",
          answer: "Yes \u2014 Biotin sources is one of the natural approaches recommended for Hair Growth & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Protein\" help with Hair Growth & Strength?",
          answer: "Yes \u2014 High Protein is one of the natural approaches recommended for Hair Growth & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Scalp Care\" help with Hair Growth & Strength?",
          answer: "Yes \u2014 Scalp Care is one of the natural approaches recommended for Hair Growth & Strength.",
          category: "Natural Approach"
      },
      {
          question: "What is Hair Growth & Strength?",
          answer: "Prevent Fall & Build Shine",
          category: "Overview"
      },
      {
          question: "Can you explain Hair Growth & Strength in more depth?",
          answer: "Promoting thick, healthy hair from the inside out.",
          category: "In-Depth"
      }
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
      {
          question: "Can diet clear up dull skin?",
          answer: "Yes. Skin reflects your gut and liver health. Removing toxins and processed foods at Nutrition Colours restores a natural radiant glow.",
          category: "Prognosis"
      },
      {
          question: "How does hydration affect skin elasticity?",
          answer: "Cellular hydration requires structured water from raw vegetables and mineral-rich elixirs to lock moisture into skin layers.",
          category: "Hydration"
      },
      {
          question: "Are antioxidants good for skin aging?",
          answer: "Yes. Vitamins C and E neutralize free radicals from UV light and pollution, preventing collagen breakdown and fine lines.",
          category: "Science"
      },
      {
          question: "What causes Skin Glow & Detox?",
          answer: "Dull skin, congestion, and toxin buildup reflected on the face.",
          category: "Root Cause"
      },
      {
          question: "How can I address Skin Glow & Detox through nutrition?",
          answer: "High antioxidant intake and support for the body's natural elimination pathways.",
          category: "Solution"
      },
      {
          question: "Does \"Vitamin C\" help with Skin Glow & Detox?",
          answer: "Yes \u2014 Vitamin C is one of the natural approaches recommended for Skin Glow & Detox.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Beta-Carotene\" help with Skin Glow & Detox?",
          answer: "Yes \u2014 Beta-Carotene is one of the natural approaches recommended for Skin Glow & Detox.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Hydration\" help with Skin Glow & Detox?",
          answer: "Yes \u2014 Hydration is one of the natural approaches recommended for Skin Glow & Detox.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Liver support\" help with Skin Glow & Detox?",
          answer: "Yes \u2014 Liver support is one of the natural approaches recommended for Skin Glow & Detox.",
          category: "Natural Approach"
      },
      {
          question: "What is Skin Glow & Detox?",
          answer: "Brighten Your Complexion Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Skin Glow & Detox in more depth?",
          answer: "Rejuvenates skin radiance by cleansing from within.",
          category: "In-Depth"
      }
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
      {
          question: "What is autophagy?",
          answer: "Autophagy is the body's recycling system, clearing out damaged cells. Dr. Shilpa uses timed eating at Nutrition Colours to stimulate this process.",
          category: "Science"
      },
      {
          question: "Which foods activate longevity genes?",
          answer: "Polyphenol-rich foods like dark berries, green tea, and raw cacao help activate sirtuins to support DNA repair.",
          category: "Diet"
      },
      {
          question: "How does insulin speed up aging?",
          answer: "Chronically high insulin levels accelerate cellular division and senescent cell accumulation, which we target in our protocols.",
          category: "Science"
      },
      {
          question: "What causes Anti-Aging Support?",
          answer: "Accelerated aging, wrinkles, and cellular damage.",
          category: "Root Cause"
      },
      {
          question: "How can I address Anti-Aging Support through nutrition?",
          answer: "Adopt an antioxidant-rich diet and emphasize healthy fats.",
          category: "Solution"
      },
      {
          question: "Does \"Clean Omega-3s\" help with Anti-Aging Support?",
          answer: "Yes \u2014 Clean Omega-3s is one of the natural approaches recommended for Anti-Aging Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Sirtuin foods\" help with Anti-Aging Support?",
          answer: "Yes \u2014 Sirtuin foods is one of the natural approaches recommended for Anti-Aging Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Lower Sugar\" help with Anti-Aging Support?",
          answer: "Yes \u2014 Lower Sugar is one of the natural approaches recommended for Anti-Aging Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Limit Sun Damage\" help with Anti-Aging Support?",
          answer: "Yes \u2014 Limit Sun Damage is one of the natural approaches recommended for Anti-Aging Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Anti-Aging Support?",
          answer: "Longevity Through Nutrition",
          category: "Overview"
      },
      {
          question: "Can you explain Anti-Aging Support in more depth?",
          answer: "Promotes longevity and cellular energy.",
          category: "In-Depth"
      }
  ]
  },
  {
    id: 'acne-skin-clarity',
    title: 'Acne & Skin Clarity',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Support Clear Skin with Diet',
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
      {
          question: "Does dairy cause acne?",
          answer: "Yes. Commercial dairy raises IGF-1 levels, which triggers sebum production and clogs pores. We suggest removing dairy during acne recovery.",
          category: "Triggers"
      },
      {
          question: "How does zinc help with acne?",
          answer: "Zinc is a natural anti-inflammatory and anti-microbial mineral that regulates sebum and speeds skin healing, as used in our tracks.",
          category: "Science"
      },
      {
          question: "Can stress trigger acne breakouts?",
          answer: "Yes. Stress triggers cortisol and androgen release, which overstimulate oil glands, leading to inflammation and breakouts.",
          category: "Stress"
      },
      {
          question: "What causes Acne & Skin Clarity?",
          answer: "Clogged pores and inflammatory breakouts, often hormonally driven.",
          category: "Root Cause"
      },
      {
          question: "How can I address Acne & Skin Clarity through nutrition?",
          answer: "Eliminate dairy and highly processed carbohydrates.",
          category: "Solution"
      },
      {
          question: "Does \"No Dairy\" help with Acne & Skin Clarity?",
          answer: "Yes \u2014 No Dairy is one of the natural approaches recommended for Acne & Skin Clarity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zinc-rich foods\" help with Acne & Skin Clarity?",
          answer: "Yes \u2014 Zinc-rich foods is one of the natural approaches recommended for Acne & Skin Clarity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Omega-3\" help with Acne & Skin Clarity?",
          answer: "Yes \u2014 Omega-3 is one of the natural approaches recommended for Acne & Skin Clarity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Low sugar\" help with Acne & Skin Clarity?",
          answer: "Yes \u2014 Low sugar is one of the natural approaches recommended for Acne & Skin Clarity.",
          category: "Natural Approach"
      },
      {
          question: "What is Acne & Skin Clarity?",
          answer: "Support Clear Skin with Diet",
          category: "Overview"
      },
      {
          question: "Can you explain Acne & Skin Clarity in more depth?",
          answer: "Addresses hormonal and inflammatory acne.",
          category: "In-Depth"
      }
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
      {
          question: "Why do my nails have white spots?",
          answer: "White spots are often a sign of minor zinc or calcium deficiency, or past nail matrix trauma. We assess mineral levels at Nutrition Colours.",
          category: "Symptoms"
      },
      {
          question: "What foods are high in silica?",
          answer: "Oats, cucumbers, and horsetail herbal infusions are rich in silica, which Dr. Shilpa uses to strengthen nail beds.",
          category: "Diet"
      },
      {
          question: "How does gut absorption affect nails?",
          answer: "If you have low stomach acid or leaky gut, you cannot absorb the minerals needed to build strong nails. We prioritize gut repair.",
          category: "Science"
      },
      {
          question: "What causes Nail Health & Strength?",
          answer: "Brittle, splitting, or weak nails indicating nutrient deficiencies.",
          category: "Root Cause"
      },
      {
          question: "How can I address Nail Health & Strength through nutrition?",
          answer: "Optimize protein, Biotin, and Mineral intake.",
          category: "Solution"
      },
      {
          question: "Does \"Biotin sources\" help with Nail Health & Strength?",
          answer: "Yes \u2014 Biotin sources is one of the natural approaches recommended for Nail Health & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Protein\" help with Nail Health & Strength?",
          answer: "Yes \u2014 High Protein is one of the natural approaches recommended for Nail Health & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zinc & Iron\" help with Nail Health & Strength?",
          answer: "Yes \u2014 Zinc & Iron is one of the natural approaches recommended for Nail Health & Strength.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Avoid harsh chemicals\" help with Nail Health & Strength?",
          answer: "Yes \u2014 Avoid harsh chemicals is one of the natural approaches recommended for Nail Health & Strength.",
          category: "Natural Approach"
      },
      {
          question: "What is Nail Health & Strength?",
          answer: "Prevent Brittle & Weak Nails",
          category: "Overview"
      },
      {
          question: "Can you explain Nail Health & Strength in more depth?",
          answer: "Resolves brittle, splitting nails.",
          category: "In-Depth"
      }
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
      {
          question: "How does Vitamin D support immunity?",
          answer: "Vitamin D regulates immune cells (T-cells) to fight infections while preventing cytokine storm inflammatory overreactions.",
          category: "Science"
      },
      {
          question: "What foods are highest in Vitamin C?",
          answer: "Amla (Indian gooseberry), bell peppers, and citrus fruits are packed with Vitamin C. Dr. Shilpa incorporates them fresh into daily plans.",
          category: "Diet"
      },
      {
          question: "Can sugar weaken my immune system?",
          answer: "Yes. Refined sugar temporarily reduces the ability of white blood cells to destroy bacteria and viruses for up to 5 hours.",
          category: "Triggers"
      },
      {
          question: "What causes Immunity Boost?",
          answer: "Frequent illness and slow recovery due to weak immune response.",
          category: "Root Cause"
      },
      {
          question: "How can I address Immunity Boost through nutrition?",
          answer: "Boost gut health and optimize intake of Vitamins C and D.",
          category: "Solution"
      },
      {
          question: "Does \"Probiotics\" help with Immunity Boost?",
          answer: "Yes \u2014 Probiotics is one of the natural approaches recommended for Immunity Boost.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Vitamin C\" help with Immunity Boost?",
          answer: "Yes \u2014 Vitamin C is one of the natural approaches recommended for Immunity Boost.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Vitamin D\" help with Immunity Boost?",
          answer: "Yes \u2014 Vitamin D is one of the natural approaches recommended for Immunity Boost.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Adequate Sleep\" help with Immunity Boost?",
          answer: "Yes \u2014 Adequate Sleep is one of the natural approaches recommended for Immunity Boost.",
          category: "Natural Approach"
      },
      {
          question: "What is Immunity Boost?",
          answer: "Strengthen Your Body's Defenses Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Immunity Boost in more depth?",
          answer: "Builds a resilient immune system.",
          category: "In-Depth"
      }
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
      {
          question: "Do I need to do a juice cleanse to detox?",
          answer: "No. The liver requires specific amino acids from proteins to complete detox. Dr. Shilpa utilizes whole-food detox protocols at Nutrition Colours.",
          category: "Science"
      },
      {
          question: "How do cilantro and parsley help detox?",
          answer: "These herbs contain natural chelating agents that bind to heavy metals and assist the body in safely excreting them, as used in our plans.",
          category: "Diet"
      },
      {
          question: "What is the best way to support kidney detox?",
          answer: "Alkalizing water infused with lemon or cucumber helps flush metabolic waste and prevents kidney stone formation.",
          category: "Hydration"
      },
      {
          question: "What causes Detox & Rejuvenation?",
          answer: "Lethargy, bloating, and overall \"heaviness\" due to toxic load.",
          category: "Root Cause"
      },
      {
          question: "How can I address Detox & Rejuvenation through nutrition?",
          answer: "Support liver and kidneys with whole foods and hydration.",
          category: "Solution"
      },
      {
          question: "Does \"High Fiber\" help with Detox & Rejuvenation?",
          answer: "Yes \u2014 High Fiber is one of the natural approaches recommended for Detox & Rejuvenation.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Lemon Water\" help with Detox & Rejuvenation?",
          answer: "Yes \u2014 Lemon Water is one of the natural approaches recommended for Detox & Rejuvenation.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Beets\" help with Detox & Rejuvenation?",
          answer: "Yes \u2014 Beets is one of the natural approaches recommended for Detox & Rejuvenation.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Infrared Sauna equivalent\" help with Detox & Rejuvenation?",
          answer: "Yes \u2014 Infrared Sauna equivalent is one of the natural approaches recommended for Detox & Rejuvenation.",
          category: "Natural Approach"
      },
      {
          question: "What is Detox & Rejuvenation?",
          answer: "Cleanse Your System for Energy",
          category: "Overview"
      },
      {
          question: "Can you explain Detox & Rejuvenation in more depth?",
          answer: "Purifies and restores energy.",
          category: "In-Depth"
      }
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
      {
          question: "What is systemic chronic inflammation?",
          answer: "It is low-grade immune activation that slowly damages tissues. Dr. Shilpa focuses on reversing this to prevent chronic diseases.",
          category: "Science"
      },
      {
          question: "Why are seed oils inflammatory?",
          answer: "Industrial seed oils (like canola or soy) are high in Omega-6 fats, which oxidize easily and fuel inflammatory pathways in the body.",
          category: "Science"
      },
      {
          question: "Which spices are highly anti-inflammatory?",
          answer: "Turmeric (curcumin), ginger, and garlic block primary inflammatory markers (like NF-kB) and are incorporated daily at Nutrition Colours.",
          category: "Diet"
      },
      {
          question: "What causes Anti-Inflammatory Support?",
          answer: "Chronic pain, fatigue, and increased risk of chronic disease.",
          category: "Root Cause"
      },
      {
          question: "How can I address Anti-Inflammatory Support through nutrition?",
          answer: "Adopt an anti-inflammatory diet rich in Omega-3s and antioxidants.",
          category: "Solution"
      },
      {
          question: "Does \"No refined sugar\" help with Anti-Inflammatory Support?",
          answer: "Yes \u2014 No refined sugar is one of the natural approaches recommended for Anti-Inflammatory Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Omega-3 (walnuts/flax)\" help with Anti-Inflammatory Support?",
          answer: "Yes \u2014 Omega-3 (walnuts/flax) is one of the natural approaches recommended for Anti-Inflammatory Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Turmeric\" help with Anti-Inflammatory Support?",
          answer: "Yes \u2014 Turmeric is one of the natural approaches recommended for Anti-Inflammatory Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Ginger\" help with Anti-Inflammatory Support?",
          answer: "Yes \u2014 Ginger is one of the natural approaches recommended for Anti-Inflammatory Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Anti-Inflammatory Support?",
          answer: "Reduce Chronic Systemic Inflammation",
          category: "Overview"
      },
      {
          question: "Can you explain Anti-Inflammatory Support in more depth?",
          answer: "Calms systemic inflammation, the root of chronic disease.",
          category: "In-Depth"
      }
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
      {
          question: "Can I prevent muscle loss in older age?",
          answer: "Yes. Muscle wasting (sarcopenia) can be managed with easily digestible plant-based proteins and resistance movement under Dr. Shilpa's guidance.",
          category: "Aging"
      },
      {
          question: "How do I maintain cognitive health?",
          answer: "Nutrition Colours plans are rich in brain-protective antioxidants and healthy fats that support neural connections and prevent cognitive decline.",
          category: "Cognitive"
      },
      {
          question: "Is calorie restriction required for longevity?",
          answer: "Not starvation. We use circadian eating windows to activate longevity genes without compromising nutrient density or strength.",
          category: "Science"
      },
      {
          question: "What causes Healthy Aging Solutions?",
          answer: "Fragility, cognitive decline, and loss of independence.",
          category: "Root Cause"
      },
      {
          question: "How can I address Healthy Aging Solutions through nutrition?",
          answer: "Balanced nutrition with focus on protein and brain-boosting fats.",
          category: "Solution"
      },
      {
          question: "Does \"Plant-based protein\" help with Healthy Aging Solutions?",
          answer: "Yes \u2014 Plant-based protein is one of the natural approaches recommended for Healthy Aging Solutions.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Brain-boosting fats\" help with Healthy Aging Solutions?",
          answer: "Yes \u2014 Brain-boosting fats is one of the natural approaches recommended for Healthy Aging Solutions.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Berries\" help with Healthy Aging Solutions?",
          answer: "Yes \u2014 Berries is one of the natural approaches recommended for Healthy Aging Solutions.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Movement\" help with Healthy Aging Solutions?",
          answer: "Yes \u2014 Movement is one of the natural approaches recommended for Healthy Aging Solutions.",
          category: "Natural Approach"
      },
      {
          question: "What is Healthy Aging Solutions?",
          answer: "Stay Fit & Sharp into Senior Years",
          category: "Overview"
      },
      {
          question: "Can you explain Healthy Aging Solutions in more depth?",
          answer: "Supports vitality as we age.",
          category: "In-Depth"
      }
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
      {
          question: "What is the key to longevity?",
          answer: "Maintaining low insulin, healthy mitochondria, and low cellular inflammation. Dr. Shilpa designs plans specifically to target these keys.",
          category: "Science"
      },
      {
          question: "Do genetics dictate my lifespan?",
          answer: "Genetics are only 10-20% of the equation. Epigenetics (diet, sleep, stress) controls how your genes express, which we guide at Nutrition Colours.",
          category: "Science"
      },
      {
          question: "Can lifestyle changes repair cellular damage?",
          answer: "Yes. Restoring antioxidant pathways and sleep helps cells clear out damaged structures and repair DNA damage naturally.",
          category: "Prognosis"
      },
      {
          question: "What causes Wellness & Longevity?",
          answer: "Premature physical decline due to lifestyle choices.",
          category: "Root Cause"
      },
      {
          question: "How can I address Wellness & Longevity through nutrition?",
          answer: "Adopting a longevity-focused lifestyle rooted in whole foods.",
          category: "Solution"
      },
      {
          question: "Does \"Blue Zone principles\" help with Wellness & Longevity?",
          answer: "Yes \u2014 Blue Zone principles is one of the natural approaches recommended for Wellness & Longevity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High fiber\" help with Wellness & Longevity?",
          answer: "Yes \u2014 High fiber is one of the natural approaches recommended for Wellness & Longevity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Natural movement\" help with Wellness & Longevity?",
          answer: "Yes \u2014 Natural movement is one of the natural approaches recommended for Wellness & Longevity.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Social connection\" help with Wellness & Longevity?",
          answer: "Yes \u2014 Social connection is one of the natural approaches recommended for Wellness & Longevity.",
          category: "Natural Approach"
      },
      {
          question: "What is Wellness & Longevity?",
          answer: "Eat for a Longer Life",
          category: "Overview"
      },
      {
          question: "Can you explain Wellness & Longevity in more depth?",
          answer: "A comprehensive track for long-term health.",
          category: "In-Depth"
      }
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
      {
          question: "How does blood sugar affect fertility?",
          answer: "High insulin tells ovaries to produce excess male hormones, which blocks egg development. Reversing insulin resistance is vital for conception.",
          category: "Science"
      },
      {
          question: "Are prenatal vitamins enough?",
          answer: "No. A whole-food diet supplies cofactor nutrients that synthetic pills lack. Dr. Shilpa designs complete fertility nutrition programs.",
          category: "Nutrition"
      },
      {
          question: "Does male partner diet affect fertility?",
          answer: "Absolutely. Sperm health is highly dependent on zinc, selenium, and antioxidant status, which we address in our couples' plans.",
          category: "Fertility"
      },
      {
          question: "What causes Fertility & Hormone Support?",
          answer: "Difficulties conceiving often linked to egg/sperm quality and hormone balance.",
          category: "Root Cause"
      },
      {
          question: "How can I address Fertility & Hormone Support through nutrition?",
          answer: "Boost antioxidant intake and ensure optimal nutrient stores.",
          category: "Solution"
      },
      {
          question: "Does \"High antioxidants\" help with Fertility & Hormone Support?",
          answer: "Yes \u2014 High antioxidants is one of the natural approaches recommended for Fertility & Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Methyl-Folate\" help with Fertility & Hormone Support?",
          answer: "Yes \u2014 Methyl-Folate is one of the natural approaches recommended for Fertility & Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Iron/B12\" help with Fertility & Hormone Support?",
          answer: "Yes \u2014 Iron/B12 is one of the natural approaches recommended for Fertility & Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Blood sugar stability\" help with Fertility & Hormone Support?",
          answer: "Yes \u2014 Blood sugar stability is one of the natural approaches recommended for Fertility & Hormone Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Fertility & Hormone Support?",
          answer: "Optimize Conception Health Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Fertility & Hormone Support in more depth?",
          answer: "Prepares the body for healthy conception.",
          category: "In-Depth"
      }
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
      {
          question: "Why is it so hard to lose weight with PCOS?",
          answer: "High insulin acts as a one-way valve, storing fat and blocking its release. Dr. Shilpa's diets lower insulin to allow fat burning.",
          category: "Weight"
      },
      {
          question: "What is the role of fiber in PCOS?",
          answer: "Soluble fiber slows down sugar absorption, preventing the insulin spikes that drive weight gain and sugar cravings.",
          category: "Diet"
      },
      {
          question: "Can strength training help PCOS weight loss?",
          answer: "Yes. Muscle tissue burns glucose for fuel without needing insulin, helping optimize insulin sensitivity and speed up weight loss.",
          category: "Fitness"
      },
      {
          question: "What causes PCOS Weight & Diet?",
          answer: "Difficulty losing weight despite diet efforts due to high insulin.",
          category: "Root Cause"
      },
      {
          question: "How can I address PCOS Weight & Diet through nutrition?",
          answer: "Very low-GI approach and high protein/fiber for satiety.",
          category: "Solution"
      },
      {
          question: "Does \"Very Low-GI\" help with PCOS Weight & Diet?",
          answer: "Yes \u2014 Very Low-GI is one of the natural approaches recommended for PCOS Weight & Diet.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Protein/Fiber\" help with PCOS Weight & Diet?",
          answer: "Yes \u2014 High Protein/Fiber is one of the natural approaches recommended for PCOS Weight & Diet.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Strength training\" help with PCOS Weight & Diet?",
          answer: "Yes \u2014 Strength training is one of the natural approaches recommended for PCOS Weight & Diet.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Inositol\" help with PCOS Weight & Diet?",
          answer: "Yes \u2014 Inositol is one of the natural approaches recommended for PCOS Weight & Diet.",
          category: "Natural Approach"
      },
      {
          question: "What is PCOS Weight & Diet?",
          answer: "Manage PCOS Weight Gain",
          category: "Overview"
      },
      {
          question: "Can you explain PCOS Weight & Diet in more depth?",
          answer: "A specialized track for the metabolic component of PCOS.",
          category: "In-Depth"
      }
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
      {
          question: "Why does weight shift to the belly during menopause?",
          answer: "Estrogen declines cause the body to store fat around the abdomen. Dr. Shilpa designs plans that support metabolism and hormone balance.",
          category: "Hormones"
      },
      {
          question: "Will cardio help me lose menopause weight?",
          answer: "Excessive cardio raises cortisol, which can worsen belly fat. Dr. Shilpa at Nutrition Colours recommends resistance training instead.",
          category: "Fitness"
      },
      {
          question: "How does protein help in menopause?",
          answer: "Higher protein intake prevents the muscle loss associated with estrogen decline, keeping your metabolism active and strong.",
          category: "Nutrition"
      },
      {
          question: "What causes Menopause Weight Management?",
          answer: "Shift in weight storage towards the belly due to hormonal drops.",
          category: "Root Cause"
      },
      {
          question: "How can I address Menopause Weight Management through nutrition?",
          answer: "Focus on muscle preservation and insulin sensitivity.",
          category: "Solution"
      },
      {
          question: "Does \"Preserve muscle\" help with Menopause Weight Management?",
          answer: "Yes \u2014 Preserve muscle is one of the natural approaches recommended for Menopause Weight Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Anti-inflammatory fats\" help with Menopause Weight Management?",
          answer: "Yes \u2014 Anti-inflammatory fats is one of the natural approaches recommended for Menopause Weight Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"High Fiber\" help with Menopause Weight Management?",
          answer: "Yes \u2014 High Fiber is one of the natural approaches recommended for Menopause Weight Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Resistance training\" help with Menopause Weight Management?",
          answer: "Yes \u2014 Resistance training is one of the natural approaches recommended for Menopause Weight Management.",
          category: "Natural Approach"
      },
      {
          question: "What is Menopause Weight Management?",
          answer: "Lose Middle-Age Weight Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Menopause Weight Management in more depth?",
          answer: "Addresses the metabolic shift during menopause.",
          category: "In-Depth"
      }
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
      {
          question: "Can I eat lentils if I have high uric acid?",
          answer: "Yes, clinical research shows plant-based purines in lentils do not trigger gout flares compared to animal purines. Dr. Shilpa recommends specific preparation methods to reduce phytates.",
          category: "Diet"
      },
      {
          question: "Does sugar trigger gout?",
          answer: "Absolutely. Fructose accelerates purine metabolism and raises uric acid. Removing soda and sweet treats is priority number one at Nutrition Colours.",
          category: "Science"
      },
      {
          question: "Will drinking cherry juice help?",
          answer: "Yes, tart cherry juice contains anthocyanins that reduce inflammation and facilitate renal excretion of uric acid, as studied in our protocols.",
          category: "Remedies"
      },
      {
          question: "Can uric acid be managed permanently?",
          answer: "Yes, by addressing underlying insulin resistance and kidney filtration efficiency through metabolic nutrition, maintaining optimal uric acid levels is highly achievable.",
          category: "Prognosis"
      },
      {
          question: "What causes Uric Acid & Gout Support?",
          answer: "Excessive uric acid crystal accumulation in joints causing intense inflammatory gout flares.",
          category: "Root Cause"
      },
      {
          question: "How can I address Uric Acid & Gout Support through nutrition?",
          answer: "Optimize renal filtration and reduce high-purine foods under specialized clinical supervision.",
          category: "Solution"
      },
      {
          question: "Does \"Alkalizing hydration\" help with Uric Acid & Gout Support?",
          answer: "Yes \u2014 Alkalizing hydration is one of the natural approaches recommended for Uric Acid & Gout Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Tart cherry extract\" help with Uric Acid & Gout Support?",
          answer: "Yes \u2014 Tart cherry extract is one of the natural approaches recommended for Uric Acid & Gout Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Low fructose\" help with Uric Acid & Gout Support?",
          answer: "Yes \u2014 Low fructose is one of the natural approaches recommended for Uric Acid & Gout Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Limit purine foods\" help with Uric Acid & Gout Support?",
          answer: "Yes \u2014 Limit purine foods is one of the natural approaches recommended for Uric Acid & Gout Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Uric Acid & Gout Support?",
          answer: "Flush Purines & Manage Joint Pain Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Uric Acid & Gout Support in more depth?",
          answer: "Supporting optimal uric acid clearance requires addressing kidney filtration and systemic balance.",
          category: "In-Depth"
      }
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
      {
          question: "Is chronic fatigue just in my head?",
          answer: "No, it is a metabolic disorder characterized by low mitochondrial ATP production and systemic inflammation. Our tests help quantify this.",
          category: "Science"
      },
      {
          question: "How does diet restore energy?",
          answer: "By removing inflammatory sugars and prioritizing healthy fats and amino acids, we restore the cellular battery (mitochondria) at Nutrition Colours.",
          category: "Nutrition"
      },
      {
          question: "Do I need to stop exercising?",
          answer: "Post-exertional malaise is common. Dr. Shilpa recommends gentle, low-heart-rate movement rather than intense cardio during early recovery.",
          category: "Activity"
      },
      {
          question: "Are B-vitamins helpful?",
          answer: "Yes, specifically active forms like methylcobalamin (B12) and methylfolate, which support methylation and cellular energy generation.",
          category: "Supplements"
      },
      {
          question: "What causes Chronic Fatigue & Energy Support?",
          answer: "Persistent, debilitating fatigue not relieved by rest, often linked to mitochondrial dysfunction.",
          category: "Root Cause"
      },
      {
          question: "How can I address Chronic Fatigue & Energy Support through nutrition?",
          answer: "Rebuild cellular energy pathways with cofactors, low-toxin eating, and deep circadian rest.",
          category: "Solution"
      },
      {
          question: "Does \"CoQ10 cofactors\" help with Chronic Fatigue & Energy Support?",
          answer: "Yes \u2014 CoQ10 cofactors is one of the natural approaches recommended for Chronic Fatigue & Energy Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium optimization\" help with Chronic Fatigue & Energy Support?",
          answer: "Yes \u2014 Magnesium optimization is one of the natural approaches recommended for Chronic Fatigue & Energy Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Circadian meal timing\" help with Chronic Fatigue & Energy Support?",
          answer: "Yes \u2014 Circadian meal timing is one of the natural approaches recommended for Chronic Fatigue & Energy Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Oxidative stress reduction\" help with Chronic Fatigue & Energy Support?",
          answer: "Yes \u2014 Oxidative stress reduction is one of the natural approaches recommended for Chronic Fatigue & Energy Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Chronic Fatigue & Energy Support?",
          answer: "Restore Mitochondrial Energy Production",
          category: "Overview"
      },
      {
          question: "Can you explain Chronic Fatigue & Energy Support in more depth?",
          answer: "Chronic fatigue indicates a cellular energy crisis.",
          category: "In-Depth"
      }
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
      {
          question: "Should I follow a low-FODMAP diet forever?",
          answer: "No. Low-FODMAP is a short-term therapeutic tool to reduce symptoms while Dr. Shilpa helps you heal the underlying gut barrier at Nutrition Colours.",
          category: "Diet"
      },
      {
          question: "What is the difference between IBS and IBD?",
          answer: "IBS is a functional disorder, while IBD involves visible structural inflammation and damage to the gut wall. Both benefit from targeted chrononutrition.",
          category: "Science"
      },
      {
          question: "Can gluten trigger flares?",
          answer: "Yes, gluten increases zonulin, which opens tight junctions in the gut lining. We recommend a temporary gluten-free trial for recovery.",
          category: "Triggers"
      },
      {
          question: "Are probiotics safe during a flare?",
          answer: "During an active IBD flare, high-dose probiotics can sometimes cause irritation. We prioritize gut-soothing mucosal agents first.",
          category: "Probiotics"
      },
      {
          question: "What causes IBS & IBD Gut Repair?",
          answer: "Abdominal pain, cramping, bloating, and irregular bowel patterns due to mucosal inflammation.",
          category: "Root Cause"
      },
      {
          question: "How can I address IBS & IBD Gut Repair through nutrition?",
          answer: "Implement an elemental phase diet, repair gut lining integrity, and rebalance the microbiome.",
          category: "Solution"
      },
      {
          question: "Does \"L-Glutamine support\" help with IBS & IBD Gut Repair?",
          answer: "Yes \u2014 L-Glutamine support is one of the natural approaches recommended for IBS & IBD Gut Repair.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Anti-inflammatory herbs\" help with IBS & IBD Gut Repair?",
          answer: "Yes \u2014 Anti-inflammatory herbs is one of the natural approaches recommended for IBS & IBD Gut Repair.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Low-FODMAP phase\" help with IBS & IBD Gut Repair?",
          answer: "Yes \u2014 Low-FODMAP phase is one of the natural approaches recommended for IBS & IBD Gut Repair.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Microbiome balancing\" help with IBS & IBD Gut Repair?",
          answer: "Yes \u2014 Microbiome balancing is one of the natural approaches recommended for IBS & IBD Gut Repair.",
          category: "Natural Approach"
      },
      {
          question: "What is IBS & IBD Gut Repair?",
          answer: "Calm Inflammation & Restore Gut Barrier",
          category: "Overview"
      },
      {
          question: "Can you explain IBS & IBD Gut Repair in more depth?",
          answer: "Irritable Bowel Syndrome (IBS) and Inflammatory Bowel Disease (IBD) demand a soothing, phase-based approach.",
          category: "In-Depth"
      }
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
      {
          question: "Why do I still feel tired months later?",
          answer: "It is often caused by microvascular inflammation or persistent viral fragments. Dr. Shilpa uses antioxidant protocols to clear this metabolic debris.",
          category: "Science"
      },
      {
          question: "How does food help my immune system reset?",
          answer: "Certain phytonutrients act as natural immune regulators, preventing your body from attacking its own tissues while enhancing clearing mechanisms.",
          category: "Mechanism"
      },
      {
          question: "Is Vitamin D helpful?",
          answer: "Yes, maintaining blood Vitamin D levels between 50-80 ng/mL is essential for correct T-cell modulation and preventing immune overdrive.",
          category: "Vitamins"
      },
      {
          question: "Can I drink coffee?",
          answer: "Coffee stimulates cortisol, which can strain recovering adrenals. We recommend herbal infusions like Holy Basil during recovery.",
          category: "Beverages"
      },
      {
          question: "What causes Post-Viral Recovery?",
          answer: "Lingering fatigue, brain fog, and muscle aches weeks or months after a viral infection.",
          category: "Root Cause"
      },
      {
          question: "How can I address Post-Viral Recovery through nutrition?",
          answer: "Systematic immunomodulation, antioxidant loading, and autonomic nervous system support.",
          category: "Solution"
      },
      {
          question: "Does \"Quercetin & Zinc\" help with Post-Viral Recovery?",
          answer: "Yes \u2014 Quercetin & Zinc is one of the natural approaches recommended for Post-Viral Recovery.",
          category: "Natural Approach"
      },
      {
          question: "Does \"N-Acetyl Cysteine (NAC)\" help with Post-Viral Recovery?",
          answer: "Yes \u2014 N-Acetyl Cysteine (NAC) is one of the natural approaches recommended for Post-Viral Recovery.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Circadian spacing\" help with Post-Viral Recovery?",
          answer: "Yes \u2014 Circadian spacing is one of the natural approaches recommended for Post-Viral Recovery.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Anti-inflammatory fats\" help with Post-Viral Recovery?",
          answer: "Yes \u2014 Anti-inflammatory fats is one of the natural approaches recommended for Post-Viral Recovery.",
          category: "Natural Approach"
      },
      {
          question: "What is Post-Viral Recovery?",
          answer: "Clear Inflammation & Reset Immunity",
          category: "Overview"
      },
      {
          question: "Can you explain Post-Viral Recovery in more depth?",
          answer: "Lingering post-viral symptoms are often caused by persistent low-grade immune activation.",
          category: "In-Depth"
      }
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
      {
          question: "Is a high-protein diet bad for my kidneys?",
          answer: "Excessive animal protein increases glomerular pressure. At Nutrition Colours, we balance clean, low-acid plant proteins to support muscle without overloading filtration.",
          category: "Protein"
      },
      {
          question: "How does blood sugar affect kidneys?",
          answer: "High glucose damages the delicate filtering units (nephrons) over time. Reversing insulin resistance is crucial for kidney longevity.",
          category: "Diabetes"
      },
      {
          question: "Should I limit potassium?",
          answer: "Potassium restriction is only necessary in advanced stages of kidney disease. For early protection, potassium-rich foods are actually beneficial.",
          category: "Electrolytes"
      },
      {
          question: "Is water intake the most important factor?",
          answer: "Adequate hydration is essential, but it must be balanced with mineral intake to prevent diluting key electrolytes.",
          category: "Hydration"
      },
      {
          question: "What causes Kidney Health Support?",
          answer: "Reduced kidney filtration efficiency leading to buildup of nitrogenous waste and fluid retention.",
          category: "Root Cause"
      },
      {
          question: "How can I address Kidney Health Support through nutrition?",
          answer: "Manage protein load, control blood pressure, and eliminate renal stressors.",
          category: "Solution"
      },
      {
          question: "Does \"Alkalizing foods\" help with Kidney Health Support?",
          answer: "Yes \u2014 Alkalizing foods is one of the natural approaches recommended for Kidney Health Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Controlled protein intake\" help with Kidney Health Support?",
          answer: "Yes \u2014 Controlled protein intake is one of the natural approaches recommended for Kidney Health Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Blood pressure control\" help with Kidney Health Support?",
          answer: "Yes \u2014 Blood pressure control is one of the natural approaches recommended for Kidney Health Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Dandelion root tea\" help with Kidney Health Support?",
          answer: "Yes \u2014 Dandelion root tea is one of the natural approaches recommended for Kidney Health Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Kidney Health Support?",
          answer: "Optimize Renal Filtration & Lower Load",
          category: "Overview"
      },
      {
          question: "Can you explain Kidney Health Support in more depth?",
          answer: "Supporting the kidneys requires managing blood pressure and metabolic toxins.",
          category: "In-Depth"
      }
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
      {
          question: "Can certain foods trigger my migraines?",
          answer: "Yes, histamines, tyramine, and artificial sweeteners are classic triggers. Dr. Shilpa conducts detailed food logging to pinpoint your specific culprits.",
          category: "Triggers"
      },
      {
          question: "Why is magnesium recommended for migraines?",
          answer: "Magnesium relaxes blood vessels and blocks pain-transmitting chemicals in the brain. It is a cornerstone of our therapy at Nutrition Colours.",
          category: "Science"
      },
      {
          question: "Does caffeine help or hurt?",
          answer: "Temporary caffeine can constrict blood vessels and relieve pain, but chronic use causes rebound headaches. We focus on natural vascular stability.",
          category: "Caffeine"
      },
      {
          question: "How does sleep timing affect migraines?",
          answer: "Circadian shifts are strong triggers. Going to bed and waking up at the exact same time every day significantly lowers attack frequency.",
          category: "Sleep"
      },
      {
          question: "What causes Migraine Relief?",
          answer: "Chronic, pulsating headaches often accompanied by nausea and sensory sensitivity.",
          category: "Root Cause"
      },
      {
          question: "How can I address Migraine Relief through nutrition?",
          answer: "Identify dietary histamine or tyramine triggers and support mitochondrial magnesium levels.",
          category: "Solution"
      },
      {
          question: "Does \"Magnesium glycinate\" help with Migraine Relief?",
          answer: "Yes \u2014 Magnesium glycinate is one of the natural approaches recommended for Migraine Relief.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Riboflavin (B2)\" help with Migraine Relief?",
          answer: "Yes \u2014 Riboflavin (B2) is one of the natural approaches recommended for Migraine Relief.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Elimination diet\" help with Migraine Relief?",
          answer: "Yes \u2014 Elimination diet is one of the natural approaches recommended for Migraine Relief.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Hydration stability\" help with Migraine Relief?",
          answer: "Yes \u2014 Hydration stability is one of the natural approaches recommended for Migraine Relief.",
          category: "Natural Approach"
      },
      {
          question: "What is Migraine Relief?",
          answer: "Identify Triggers & Calm Neuro-Inflammation",
          category: "Overview"
      },
      {
          question: "Can you explain Migraine Relief in more depth?",
          answer: "Migraines are often triggered by neuro-vascular inflammation and energy deficits in brain cells.",
          category: "In-Depth"
      }
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
      {
          question: "Are food dyes really harmful to focus?",
          answer: "Yes, clinical studies link synthetic food dyes (like Red 40, Yellow 5) to increased hyperactivity in sensitive children. We strictly avoid them.",
          category: "Additives"
      },
      {
          question: "What is the best breakfast for a child with ADHD?",
          answer: "A protein-rich breakfast (like chickpea chilla or nut butter) stabilizes blood sugar, avoiding the glucose spikes and crashes that hurt school focus.",
          category: "Diet"
      },
      {
          question: "How does gut health affect behavior?",
          answer: "90% of serotonin and other neurotransmitters are influenced by gut bacteria. A healthy microbiome leads to a calmer brain, as taught in our family protocols.",
          category: "Science"
      },
      {
          question: "Should my child take Omega-3 supplements?",
          answer: "Yes, Omega-3 fatty acids are major structural components of brain tissue. Dr. Shilpa guides families on safe, plant-based algae oil or seed sources.",
          category: "Supplements"
      },
      {
          question: "What causes Pediatric ADHD Focus?",
          answer: "Hyperactivity, lack of focus, and emotional dysregulation in children.",
          category: "Root Cause"
      },
      {
          question: "How can I address Pediatric ADHD Focus through nutrition?",
          answer: "Eliminate food dyes/sugar, optimize omega-3 fatty acids, and support gut neurotransmitters.",
          category: "Solution"
      },
      {
          question: "Does \"Omega-3 DHA/EPA\" help with Pediatric ADHD Focus?",
          answer: "Yes \u2014 Omega-3 DHA/EPA is one of the natural approaches recommended for Pediatric ADHD Focus.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zero food dyes\" help with Pediatric ADHD Focus?",
          answer: "Yes \u2014 Zero food dyes is one of the natural approaches recommended for Pediatric ADHD Focus.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zinc and Iron levels\" help with Pediatric ADHD Focus?",
          answer: "Yes \u2014 Zinc and Iron levels is one of the natural approaches recommended for Pediatric ADHD Focus.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Gut health balance\" help with Pediatric ADHD Focus?",
          answer: "Yes \u2014 Gut health balance is one of the natural approaches recommended for Pediatric ADHD Focus.",
          category: "Natural Approach"
      },
      {
          question: "What is Pediatric ADHD Focus?",
          answer: "Calm Nervous System & Support Learning",
          category: "Overview"
      },
      {
          question: "Can you explain Pediatric ADHD Focus in more depth?",
          answer: "Supporting focus in children requires optimizing the gut-brain axis.",
          category: "In-Depth"
      }
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
      {
          question: "Is muscle loss inevitable with age?",
          answer: "No. Sarcopenia can be prevented and managed with adequate, clean protein intake and light resistance training, even in your 70s.",
          category: "Aging"
      },
      {
          question: "Why do seniors struggle to absorb protein?",
          answer: "Stomach acid naturally declines with age, reducing digestion efficiency. Dr. Shilpa recommends easily digestible plant proteins and natural enzyme supports.",
          category: "Digestion"
      },
      {
          question: "How do I prevent joint stiffness?",
          answer: "Hydration combined with anti-inflammatory spices like ginger and turmeric acts as a natural lubricant for synovial joints.",
          category: "Joints"
      },
      {
          question: "Can nutrition prevent falls?",
          answer: "Yes, by stabilizing muscle strength and improving cognitive focus/balance through proper neuro-nutrition, fall risk drops significantly.",
          category: "Safety"
      },
      {
          question: "What causes Geriatric Strength Nutrition?",
          answer: "Age-related loss of muscle mass (sarcopenia) and strength, leading to falls and stiffness.",
          category: "Root Cause"
      },
      {
          question: "How can I address Geriatric Strength Nutrition through nutrition?",
          answer: "Optimize protein absorption, support joint cushioning, and ensure bone density nutrients.",
          category: "Solution"
      },
      {
          question: "Does \"Absorbable plant protein\" help with Geriatric Strength Nutrition?",
          answer: "Yes \u2014 Absorbable plant protein is one of the natural approaches recommended for Geriatric Strength Nutrition.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Joint lubrication fats\" help with Geriatric Strength Nutrition?",
          answer: "Yes \u2014 Joint lubrication fats is one of the natural approaches recommended for Geriatric Strength Nutrition.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Calcium & Vitamin D\" help with Geriatric Strength Nutrition?",
          answer: "Yes \u2014 Calcium & Vitamin D is one of the natural approaches recommended for Geriatric Strength Nutrition.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Gentle mobility exercises\" help with Geriatric Strength Nutrition?",
          answer: "Yes \u2014 Gentle mobility exercises is one of the natural approaches recommended for Geriatric Strength Nutrition.",
          category: "Natural Approach"
      },
      {
          question: "What is Geriatric Strength Nutrition?",
          answer: "Prevent Muscle Loss & Support Mobility",
          category: "Overview"
      },
      {
          question: "Can you explain Geriatric Strength Nutrition in more depth?",
          answer: "Maintaining mobility in golden years requires preventing muscle wasting.",
          category: "In-Depth"
      }
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
      {
          question: "What is the difference between folic acid and folate?",
          answer: "Folate is the natural form found in leafy greens, which is absorbed far better than synthetic folic acid, especially for mothers with methylation issues.",
          category: "Nutrients"
      },
      {
          question: "How do I manage gestational diabetes?",
          answer: "By eating low-GI meals, avoiding sweet snacks, and walking for 10 minutes after eating, as structured in our maternal programs at Nutrition Colours.",
          category: "Glucose"
      },
      {
          question: "What should I eat to combat morning sickness?",
          answer: "Small, protein-paired meals and ginger infusions are highly effective for stabilizing blood glucose and soothing the nervous system.",
          category: "Morning Sickness"
      },
      {
          question: "Is a vegan diet safe during pregnancy?",
          answer: "Yes, but it must be carefully planned to ensure adequate B12, Iron, Choline, and Vitamin D. Dr. Shilpa designs specialized plant-based prenatal tracks.",
          category: "Diet Type"
      },
      {
          question: "What causes Pregnancy Nutrition Support?",
          answer: "Nutritional gaps, morning sickness, and gestational diabetes risk during pregnancy.",
          category: "Root Cause"
      },
      {
          question: "How can I address Pregnancy Nutrition Support through nutrition?",
          answer: "Ensure optimal folate, iron, choline, and healthy fats while managing blood glucose.",
          category: "Solution"
      },
      {
          question: "Does \"Active Folate sources\" help with Pregnancy Nutrition Support?",
          answer: "Yes \u2014 Active Folate sources is one of the natural approaches recommended for Pregnancy Nutrition Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Choline-rich foods\" help with Pregnancy Nutrition Support?",
          answer: "Yes \u2014 Choline-rich foods is one of the natural approaches recommended for Pregnancy Nutrition Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Stable blood glucose\" help with Pregnancy Nutrition Support?",
          answer: "Yes \u2014 Stable blood glucose is one of the natural approaches recommended for Pregnancy Nutrition Support.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Iron-rich plants\" help with Pregnancy Nutrition Support?",
          answer: "Yes \u2014 Iron-rich plants is one of the natural approaches recommended for Pregnancy Nutrition Support.",
          category: "Natural Approach"
      },
      {
          question: "What is Pregnancy Nutrition Support?",
          answer: "Support Fetal Growth & Maternal Vitality",
          category: "Overview"
      },
      {
          question: "Can you explain Pregnancy Nutrition Support in more depth?",
          answer: "A healthy pregnancy requires premium building blocks for the growing baby.",
          category: "In-Depth"
      }
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
      {
          question: "How does eating late affect my sleep?",
          answer: "Eating late raises core body temperature and insulin, which directly blocks the release of melatonin, disrupting deep sleep phases.",
          category: "Science"
      },
      {
          question: "What is the best natural sleep supplement?",
          answer: "We prioritize magnesium glycinate and chamomile/valerian infusions to naturally calm neuro-excitation at Nutrition Colours.",
          category: "Remedies"
      },
      {
          question: "Why is morning sunlight important for sleep?",
          answer: "Sunlight exposure in the morning stops melatonin production and sets your internal timer to release melatonin 14-16 hours later.",
          category: "Light"
      },
      {
          question: "Can metabolic disease cause insomnia?",
          answer: "Yes, nighttime blood glucose crashes (hypoglycemia) trigger adrenaline and cortisol spikes, waking you up in a panic around 3 AM.",
          category: "Metabolism"
      },
      {
          question: "What causes Sleep & Circadian Reset?",
          answer: "Insomnia, fragmented sleep, and morning fatigue caused by circadian misalignment.",
          category: "Root Cause"
      },
      {
          question: "How can I address Sleep & Circadian Reset through nutrition?",
          answer: "Block blue light, time meals with natural cycles, and optimize magnesium intake.",
          category: "Solution"
      },
      {
          question: "Does \"Circadian meal timing\" help with Sleep & Circadian Reset?",
          answer: "Yes \u2014 Circadian meal timing is one of the natural approaches recommended for Sleep & Circadian Reset.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium Bisglycinate\" help with Sleep & Circadian Reset?",
          answer: "Yes \u2014 Magnesium Bisglycinate is one of the natural approaches recommended for Sleep & Circadian Reset.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Blue-light block\" help with Sleep & Circadian Reset?",
          answer: "Yes \u2014 Blue-light block is one of the natural approaches recommended for Sleep & Circadian Reset.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Morning sunlight\" help with Sleep & Circadian Reset?",
          answer: "Yes \u2014 Morning sunlight is one of the natural approaches recommended for Sleep & Circadian Reset.",
          category: "Natural Approach"
      },
      {
          question: "What is Sleep & Circadian Reset?",
          answer: "Align Melatonin & Reset Cellular Rhythm",
          category: "Overview"
      },
      {
          question: "Can you explain Sleep & Circadian Reset in more depth?",
          answer: "Sleep is the master repair cycle of our cells.",
          category: "In-Depth"
      }
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
      {
          question: "What are excitotoxins?",
          answer: "Excitotoxins are food compounds like MSG and artificial sweeteners that overstimulate nerve cells, causing pain signals in fibromyalgia.",
          category: "Triggers"
      },
      {
          question: "How does mitochondria relate to fibromyalgia?",
          answer: "Low mitochondrial energy forces muscles to operate in anaerobic states, leading to chronic lactic acid buildup and widespread soreness.",
          category: "Science"
      },
      {
          question: "Is heat therapy helpful?",
          answer: "Yes, hot epsom salt baths supply transdermal magnesium, which helps relax tight muscles and calm the nervous system.",
          category: "Therapies"
      },
      {
          question: "Should I avoid nightshades?",
          answer: "Some fibromyalgia patients report symptom improvement after removing nightshades due to solanine sensitivity. We recommend a structured 3-week test.",
          category: "Diet"
      },
      {
          question: "What causes Fibromyalgia Management?",
          answer: "Widespread musculoskeletal pain accompanied by fatigue, sleep, and memory issues.",
          category: "Root Cause"
      },
      {
          question: "How can I address Fibromyalgia Management through nutrition?",
          answer: "Eliminate neuro-inflammatory triggers like MSG and aspartame, and support nerve repair.",
          category: "Solution"
      },
      {
          question: "Does \"Excitotoxin elimination\" help with Fibromyalgia Management?",
          answer: "Yes \u2014 Excitotoxin elimination is one of the natural approaches recommended for Fibromyalgia Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Magnesium loading\" help with Fibromyalgia Management?",
          answer: "Yes \u2014 Magnesium loading is one of the natural approaches recommended for Fibromyalgia Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"CoQ10 support\" help with Fibromyalgia Management?",
          answer: "Yes \u2014 CoQ10 support is one of the natural approaches recommended for Fibromyalgia Management.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Low-inflammatory diet\" help with Fibromyalgia Management?",
          answer: "Yes \u2014 Low-inflammatory diet is one of the natural approaches recommended for Fibromyalgia Management.",
          category: "Natural Approach"
      },
      {
          question: "What is Fibromyalgia Management?",
          answer: "Reduce Chronic Pain & Nerve Hypersensitivity",
          category: "Overview"
      },
      {
          question: "Can you explain Fibromyalgia Management in more depth?",
          answer: "Managing fibromyalgia requires calming an overstimulated central nervous system.",
          category: "In-Depth"
      }
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
      {
          question: "Why do healthy foods like spinach make me feel sick?",
          answer: "Spinach, avocados, and fermented foods are naturally rich in histamines. If your DAO enzymes are sluggish, these foods trigger allergic reactions.",
          category: "Science"
      },
      {
          question: "Can I eat leftovers?",
          answer: "Histamine increases as food sits. Dr. Shilpa recommends consuming freshly prepared meals or freezing leftovers immediately at Nutrition Colours.",
          category: "Prep"
      },
      {
          question: "What supplements support histamine clearance?",
          answer: "Quercetin acts as a natural mast-cell stabilizer, while Vitamin C and B6 function as direct cofactors for the histamine-clearing DAO enzyme.",
          category: "Supplements"
      },
      {
          question: "Is histamine intolerance permanent?",
          answer: "No, it is usually secondary to gut dysbiosis or leaky gut. Once the gut lining is restored, histamine tolerance returns to normal.",
          category: "Prognosis"
      },
      {
          question: "What causes Histamine Intolerance Care?",
          answer: "Hives, nasal congestion, headaches, and bloating after consuming fermented or aged foods.",
          category: "Root Cause"
      },
      {
          question: "How can I address Histamine Intolerance Care through nutrition?",
          answer: "Implement a low-histamine diet phase and support DAO enzyme cofactor pathways.",
          category: "Solution"
      },
      {
          question: "Does \"Low histamine foods\" help with Histamine Intolerance Care?",
          answer: "Yes \u2014 Low histamine foods is one of the natural approaches recommended for Histamine Intolerance Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"DAO cofactors (Vitamin C, B6)\" help with Histamine Intolerance Care?",
          answer: "Yes \u2014 DAO cofactors (Vitamin C, B6) is one of the natural approaches recommended for Histamine Intolerance Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Quercetin support\" help with Histamine Intolerance Care?",
          answer: "Yes \u2014 Quercetin support is one of the natural approaches recommended for Histamine Intolerance Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Fresh food sourcing\" help with Histamine Intolerance Care?",
          answer: "Yes \u2014 Fresh food sourcing is one of the natural approaches recommended for Histamine Intolerance Care.",
          category: "Natural Approach"
      },
      {
          question: "What is Histamine Intolerance Care?",
          answer: "Lower Histamine Load & Support DAO Enzyme",
          category: "Overview"
      },
      {
          question: "Can you explain Histamine Intolerance Care in more depth?",
          answer: "Histamine intolerance occurs when the body's capacity to break down histamine is overloaded.",
          category: "In-Depth"
      }
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
      {
          question: "What is thyroid molecular mimicry?",
          answer: "Gluten proteins look identical to thyroid tissue. When gluten leaks into the blood, the immune system gets confused and attacks the thyroid.",
          category: "Science"
      },
      {
          question: "Do my thyroid antibodies have to stay high?",
          answer: "No. By removing inflammatory triggers and supporting gut health, clinical protocols may support thyroid antibody reduction in some cases at Nutrition Colours.",
          category: "Antibodies"
      },
      {
          question: "Is iodine good or bad for Hashimoto's?",
          answer: "High iodine without selenium can actually worsen thyroid inflammation. Dr. Shilpa carefully calibrates selenium before adjusting iodine.",
          category: "Minerals"
      },
      {
          question: "Can Hashimoto's be put in remission?",
          answer: "When antibody levels return to normal and thyroid hormone production stabilizes, clinical improvement is possible under professional supervision. Individual outcomes vary.",
          category: "Prognosis"
      },
      {
          question: "What causes Hashimoto's Thyroid Care?",
          answer: "Autoimmune attack on the thyroid gland, leading to hypothyroidism, weight gain, and fatigue.",
          category: "Root Cause"
      },
      {
          question: "How can I address Hashimoto's Thyroid Care through nutrition?",
          answer: "Eliminate systemic molecular mimicry triggers like gluten and soy, and optimize selenium/zinc.",
          category: "Solution"
      },
      {
          question: "Does \"Gluten-free protocol\" help with Hashimoto's Thyroid Care?",
          answer: "Yes \u2014 Gluten-free protocol is one of the natural approaches recommended for Hashimoto's Thyroid Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Selenium (Brazil nuts)\" help with Hashimoto's Thyroid Care?",
          answer: "Yes \u2014 Selenium (Brazil nuts) is one of the natural approaches recommended for Hashimoto's Thyroid Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Zinc cofactors\" help with Hashimoto's Thyroid Care?",
          answer: "Yes \u2014 Zinc cofactors is one of the natural approaches recommended for Hashimoto's Thyroid Care.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Systemic anti-inflammatory diet\" help with Hashimoto's Thyroid Care?",
          answer: "Yes \u2014 Systemic anti-inflammatory diet is one of the natural approaches recommended for Hashimoto's Thyroid Care.",
          category: "Natural Approach"
      },
      {
          question: "What is Hashimoto's Thyroid Care?",
          answer: "Reduce Antibodies & Protect Thyroid Cells",
          category: "Overview"
      },
      {
          question: "Can you explain Hashimoto's Thyroid Care in more depth?",
          answer: "Calming thyroid autoimmunity requires reducing systemic antibodies.",
          category: "In-Depth"
      }
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
      {
          question: "How does sugar affect my child's immune system?",
          answer: "Refined sugar temporarily paralyzes immune cells (macrophages) for hours, making kids far more vulnerable to catching colds.",
          category: "Immunity"
      },
      {
          question: "My child is a picky eater. What can I do?",
          answer: "We focus on creative, nutrient-dense presentation and gradual micro-adjustments, as structured in Kelive D'Souza's recipes at Nutrition Colours.",
          category: "Picky Eating"
      },
      {
          question: "Should my child take a multivitamin?",
          answer: "We prioritize whole-food nutrition first, but suggest target supplementation of Vitamin D and Zinc during seasonal transitions.",
          category: "Supplements"
      },
      {
          question: "Can diet improve height growth?",
          answer: "Yes, by optimizing protein absorption and bone minerals like calcium, phosphorus, and vitamin D, we support natural genetic growth potential.",
          category: "Growth"
      },
      {
          question: "What causes Pediatric Immunity & Growth?",
          answer: "Frequent colds, poor appetite, and slow height/weight growth in children.",
          category: "Root Cause"
      },
      {
          question: "How can I address Pediatric Immunity & Growth through nutrition?",
          answer: "Feed gut microbiome with diverse plant fibers, optimize Vitamin D/Zinc, and avoid refined sugars.",
          category: "Solution"
      },
      {
          question: "Does \"Vitamin D & Zinc\" help with Pediatric Immunity & Growth?",
          answer: "Yes \u2014 Vitamin D & Zinc is one of the natural approaches recommended for Pediatric Immunity & Growth.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Diverse plant prebiotic fibers\" help with Pediatric Immunity & Growth?",
          answer: "Yes \u2014 Diverse plant prebiotic fibers is one of the natural approaches recommended for Pediatric Immunity & Growth.",
          category: "Natural Approach"
      },
      {
          question: "Does \"No industrial sweets\" help with Pediatric Immunity & Growth?",
          answer: "Yes \u2014 No industrial sweets is one of the natural approaches recommended for Pediatric Immunity & Growth.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Mineral-rich local grains\" help with Pediatric Immunity & Growth?",
          answer: "Yes \u2014 Mineral-rich local grains is one of the natural approaches recommended for Pediatric Immunity & Growth.",
          category: "Natural Approach"
      },
      {
          question: "What is Pediatric Immunity & Growth?",
          answer: "Build Resilient Children Naturally",
          category: "Overview"
      },
      {
          question: "Can you explain Pediatric Immunity & Growth in more depth?",
          answer: "Building a strong foundation for kids requires clean cellular fuel.",
          category: "In-Depth"
      }
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
      {
          question: "What is Phase 1 and Phase 2 detox?",
          answer: "Phase 1 breaks down toxins into reactive intermediates, and Phase 2 neutralizes them. If Phase 2 is slow, it causes toxic backup and inflammation.",
          category: "Science"
      },
      {
          question: "Are commercial juice cleanses good for liver detox?",
          answer: "No, they lack the amino acids required for Phase 2 conjugation. Dr. Shilpa utilizes complete whole-food detox protocols at Nutrition Colours.",
          category: "Cleanses"
      },
      {
          question: "What foods support glutathione?",
          answer: "Sulfur-rich foods like garlic, onions, broccoli, brussels sprouts, and avocados directly support glutathione production.",
          category: "Diet"
      },
      {
          question: "Can liver detox help balance hormones?",
          answer: "Yes, the liver is responsible for breaking down excess estrogen. Sluggish detox pathways often lead to estrogen dominance and weight gain.",
          category: "Hormones"
      },
      {
          question: "What causes Liver Detox Pathways?",
          answer: "Estrogen dominance, chemical sensitivities, and sluggish metabolism due to overloaded liver detox pathways.",
          category: "Root Cause"
      },
      {
          question: "How can I address Liver Detox Pathways through nutrition?",
          answer: "Provide sulfur-rich foods, cruciferous glucosinolates, and binders to facilitate toxin removal.",
          category: "Solution"
      },
      {
          question: "Does \"Glutathione precursors\" help with Liver Detox Pathways?",
          answer: "Yes \u2014 Glutathione precursors is one of the natural approaches recommended for Liver Detox Pathways.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Cruciferous vegetables\" help with Liver Detox Pathways?",
          answer: "Yes \u2014 Cruciferous vegetables is one of the natural approaches recommended for Liver Detox Pathways.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Phase 2 conjugation support\" help with Liver Detox Pathways?",
          answer: "Yes \u2014 Phase 2 conjugation support is one of the natural approaches recommended for Liver Detox Pathways.",
          category: "Natural Approach"
      },
      {
          question: "Does \"Soluble binders\" help with Liver Detox Pathways?",
          answer: "Yes \u2014 Soluble binders is one of the natural approaches recommended for Liver Detox Pathways.",
          category: "Natural Approach"
      },
      {
          question: "What is Liver Detox Pathways?",
          answer: "Optimize Phase 1 & Phase 2 Detoxification",
          category: "Overview"
      },
      {
          question: "Can you explain Liver Detox Pathways in more depth?",
          answer: "The liver detoxifies chemicals through a two-phase enzymatic process.",
          category: "In-Depth"
      }
  ]
  },
  {
    id: 'vegan-recipes',
    title: 'Vegan Recipes & Circadian Cooking',
    category: CategoryType.VEGAN,
    shortDesc: 'Nutrient-Dense, Circadian-Aligned Vegan Meals',
    problem: 'Sourcing balanced, high-protein plant-based recipes that align with natural circadian windows and do not trigger blood sugar spikes.',
    solution: 'Implement clean whole-food templates, post-sunset fasting principles, and high-bioavailability amino acid swaps.',
    fullContent: 'Circadian vegan cooking optimizes cellular vitality by aligning whole-food plant ingredients with daylight metabolic cycles. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we focus on gluten-free, low-glycemic recipes that supply complete protein profiles while avoiding late-night digestive stress.',
    naturalApproach: ['Spiced lentil stews', 'Quinoa power bowls', 'Circadian green smoothies', 'Nut-free dairy swaps'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Clinical Vegan Recipes & Circadian Meal Plans | Dr. Shilpa Thakur',
    metaDescription: 'Optimize metabolic wellness with our clinical-grade vegan recipes. Calibrated for protein density and circadian alignment by Dr. Shilpa Thakur.',
    primaryKeyword: 'Clinical Vegan Recipes',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Therapeutic Glycemic Control Case Study',
      finding: 'Stabilized postprandial glucose surges in 14 days using circadian grain-lentil ratios.',
      narrative: 'A 45-year-old software engineer integrated our millet-based vegan recipes, achieving lower fasting insulin without caloric restriction.'
    },
    aiSummaryBlock: {
      tldr: 'Circadian vegan recipes focus on metabolic efficiency by placing complex starches and seed proteins during peak daylight hours. This allows natural cellular autophagy to take place overnight.',
      tags: ['vegan-recipes', 'circadian-cooking', 'metabolic-nutrition']
    },
    expandedSections: [
      {
        heading: 'Quick & Easy Weeknight Vegan Dinners',
        body: 'Busy schedules often lead to processed vegan food. Our weeknight templates use quick-cooking legumes and steamed cruciferous vegetables to construct a complete meal in under 20 minutes.',
        listTitle: 'Core components of a quick dinner:',
        listItems: [
          'Pre-cooked lentils or edamame for immediate protein.',
          'Steam-in-bag vegetables to preserve delicate heat-sensitive enzymes.',
          'Healthy fats like tahini or cold-pressed seeds for fat-soluble vitamin uptake.'
        ],
        proTip: 'Prep your sauces and grain bases on Sunday to minimize prep time during high-stress weekdays.'
      },
      {
        heading: 'High-Protein Plant-Based Meal Prep',
        body: 'Building and repairing tissue requires a steady supply of essential amino acids. Batch-cooking ensures you have protein-rich options ready after workouts.',
        listTitle: 'Top batch-cooking protein sources:',
        listItems: [
          'Tempeh strips marinated in anti-inflammatory ginger-turmeric paste.',
          'Sprouted chickpea stews rich in zinc and folate.',
          'Seed-crusted organic tofu cubes baked for texture and satiety.'
        ],
        proTip: 'Always sprout your seeds and legumes to reduce phytic acid and double their mineral availability.'
      },
      {
        heading: 'Dairy-Free Desserts and Vegan Baking',
        body: 'Baking without butter or eggs requires food-science hacks to achieve structural bind and rise without compromising insulin markers.',
        listTitle: 'Low-glycemic baking substitutes:',
        listItems: [
          'Aquafaba for egg-white whipping action.',
          'Chia seeds or flax meal gel for moisture and structural binding.',
          'Almond meal and green banana flour for gut-healthy prebiotic fiber.'
        ],
        proTip: 'Use organic Ceylon cinnamon to naturally enhance sweetness and support insulin sensitivity in baked treats.'
      }
    ],
    faqs: [
      {
          question: "What is the easiest thing to cook as a vegan?",
          answer: "The easiest vegan meals are stir-fries, pasta with marinara, and grain bowls. These dishes require minimal prep, use accessible ingredients like tofu, beans, and seasonal vegetables, and can be cooked in under 30 minutes.",
          category: "Recipes"
      },
      {
          question: "How do I meal prep vegan food for the week?",
          answer: "To meal prep vegan food, batch-cook a base grain (like quinoa or rice), roast a large tray of vegetables, and prepare a plant-based protein (like baked tofu or simmered lentils). Store them separately in airtight containers and mix and match with different vegan sauces throughout the week.",
          category: "Meal Prep"
      },
      {
          question: "What causes Vegan Recipes & Circadian Cooking?",
          answer: "Sourcing balanced, high-protein plant-based recipes that align with natural circadian windows and do not trigger blood sugar spikes.",
          category: "Root Cause"
      },
      {
          question: "How can I address Vegan Recipes & Circadian Cooking through nutrition?",
          answer: "Implement clean whole-food templates, post-sunset fasting principles, and high-bioavailability amino acid swaps.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Vegan Recipes & Circadian Cooking?",
          answer: "Stabilized postprandial glucose surges in 14 days using circadian grain-lentil ratios. A 45-year-old software engineer integrated our millet-based vegan recipes, achieving lower fasting insulin without caloric restriction.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Vegan Recipes & Circadian Cooking in brief?",
          answer: "Circadian vegan recipes focus on metabolic efficiency by placing complex starches and seed proteins during peak daylight hours. This allows natural cellular autophagy to take place overnight.",
          category: "Summary"
      },
      {
          question: "Quick & Easy Weeknight Vegan Dinners?",
          answer: "Busy schedules often lead to processed vegan food. Our weeknight templates use quick-cooking legumes and steamed cruciferous vegetables to construct a complete meal in under 20 minutes.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Spiced lentil stews\" help with Vegan Recipes & Circadian Cooking?",
          answer: "Yes \u2014 Spiced lentil stews is one of the natural approaches recommended for Vegan Recipes & Circadian Cooking.",
          category: "Natural Approach"
      },
      {
          question: "High-Protein Plant-Based Meal Prep?",
          answer: "Building and repairing tissue requires a steady supply of essential amino acids. Batch-cooking ensures you have protein-rich options ready after workouts.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Quinoa power bowls\" help with Vegan Recipes & Circadian Cooking?",
          answer: "Yes \u2014 Quinoa power bowls is one of the natural approaches recommended for Vegan Recipes & Circadian Cooking.",
          category: "Natural Approach"
      },
      {
          question: "What is Vegan Recipes & Circadian Cooking?",
          answer: "Nutrient-Dense, Circadian-Aligned Vegan Meals",
          category: "Overview"
      },
      {
          question: "Can you explain Vegan Recipes & Circadian Cooking in more depth?",
          answer: "Circadian vegan cooking optimizes cellular vitality by aligning whole-food plant ingredients with daylight metabolic cycles.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Quick & Easy Weeknight Vegan Dinners?",
          answer: "Prep your sauces and grain bases on Sunday to minimize prep time during high-stress weekdays.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: High-Protein Plant-Based Meal Prep?",
          answer: "Always sprout your seeds and legumes to reduce phytic acid and double their mineral availability.",
          category: "Pro Tip"
      },
      {
          question: "Dairy-Free Desserts and Vegan Baking?",
          answer: "Baking without butter or eggs requires food-science hacks to achieve structural bind and rise without compromising insulin markers. Low-glycemic baking substitutes: Aquafaba for egg-white whipping action.; Chia seeds or flax meal gel for moisture and structural binding.; Almond meal and green banana flour for gut-healthy prebiotic fiber..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-alternatives',
    title: 'Alternatives & Substitutes',
    category: CategoryType.VEGAN,
    shortDesc: 'Navigate Plant-Based Swaps with Precision',
    problem: 'Replacing dairy, eggs, and meat in everyday cooking without losing texture, taste, or essential nutritional cofactors.',
    solution: 'Utilize food-science replacements like seed-gels, aquafaba, and fermented nut cultures.',
    fullContent: 'Transitioning to a vegan lifestyle is made simple through scientific substitutions. Dr. Shilpa Thakur has cataloged functional replacements that mimic the chemical structure of animal binders and proteins, ensuring satisfying texture and optimal digestion.',
    naturalApproach: ['Aquafaba egg binders', 'Cultured cashew cheeses', 'Spelt and oat milk bases', 'Mushroom-derived umami fats'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Scientific Vegan Substitutes & Baking Alternatives | Dr. Shilpa Thakur',
    metaDescription: 'Find the absolute best plant-based alternatives for eggs, milk, and meat. Clinically validated guidelines by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Alternatives',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Transition Protocol Success',
      finding: '90% of transitioners reported complete resolution of dairy cravings within 21 days using seed-based milk alternatives.',
      narrative: 'A patient with severe bloating swapped cow\'s milk for our high-calcium pumpkin seed milk, resulting in gut mucosal recovery and symptom clearance.'
    },
    aiSummaryBlock: {
      tldr: 'Vegan alternatives replace the structural and enzymatic functions of animal fats and proteins using clean plant substrates, maximizing food pleasure and metabolic safety.',
      tags: ['vegan-swaps', 'plant-milks', 'baking-binders']
    },
    expandedSections: [
      {
        heading: 'Baking Without Eggs',
        body: 'Eggs provide structure, emulsification, and moisture. Plant binders can serve the same chemical purpose in baked goods.',
        listTitle: 'Functional egg substitutes:',
        listItems: [
          'Applesauce or pumpkin puree for moisture and density in muffins.',
          'Aquafaba (chickpea broth) for light, airy whipping in meringues.',
          'Chia or flax gel (1 tbsp ground seeds + 3 tbsp water) for cookie binding.'
        ],
        proTip: 'For recipes needing leavening, combine apple cider vinegar and baking soda to create a quick, fluffy rise.'
      },
      {
        heading: 'Comparing Plant Milks',
        body: 'Not all plant milks are created equal. Nut, grain, and seed milks behave differently in coffee, cooking, and digestive tracts.',
        listTitle: 'Best uses for plant milks:',
        listItems: [
          'Soy milk: Best for baking and sauces due to emulsifying lecithin.',
          'Oat milk: Ideal for coffee and lattes because of its thick, creamy mouthfeel.',
          'Almond or hemp milk: Excellent low-calorie options for green smoothies.'
        ],
        proTip: 'Look for unsweetened, gums-free varieties to prevent gut wall irritation and glucose spikes.'
      },
      {
        heading: 'Grilling & Savory Swaps',
        body: 'Umami flavors and fibrous textures can be achieved naturally without relying on heavily processed mock meats.',
        listTitle: 'Whole-food savory replacements:',
        listItems: [
          'Jackfruit: Shredded texture replicates pulled meat in slow-cooked stews.',
          'Tempeh: Firm, fermented soybean block ideal for grilling and stir-fries.',
          'Portobello mushrooms: Fleshy cap rich in natural glutamates for depth of flavor.'
        ],
        proTip: 'Marinate your savory plant proteins in nutritional yeast and tamari to double the umami factor.'
      }
    ],
    faqs: [
      {
          question: "What is the best vegan substitute for eggs in baking?",
          answer: "The best vegan egg substitute depends on the recipe. For moisture and binding in cakes, use 1/4 cup of applesauce or mashed banana. For light and airy baked goods like macarons, use aquafaba (the liquid from a can of chickpeas). For structuring cookies, use 1 tablespoon of ground flaxseed mixed with 3 tablespoons of water.",
          category: "Baking"
      },
      {
          question: "Which plant-based milk tastes most like dairy milk?",
          answer: "Soy milk and oat milk taste the closest to dairy milk. Oat milk is naturally creamy and slightly sweet, making it ideal for coffee and cereals, while soy milk has a similar protein content and neutral flavor profile to cow's milk.",
          category: "Beverages"
      },
      {
          question: "What causes Alternatives & Substitutes?",
          answer: "Replacing dairy, eggs, and meat in everyday cooking without losing texture, taste, or essential nutritional cofactors.",
          category: "Root Cause"
      },
      {
          question: "How can I address Alternatives & Substitutes through nutrition?",
          answer: "Utilize food-science replacements like seed-gels, aquafaba, and fermented nut cultures.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Alternatives & Substitutes?",
          answer: "90% of transitioners reported complete resolution of dairy cravings within 21 days using seed-based milk alternatives. A patient with severe bloating swapped cow's milk for our high-calcium pumpkin seed milk, resulting in gut mucosal recovery and symptom clearance.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Alternatives & Substitutes in brief?",
          answer: "Vegan alternatives replace the structural and enzymatic functions of animal fats and proteins using clean plant substrates, maximizing food pleasure and metabolic safety.",
          category: "Summary"
      },
      {
          question: "Baking Without Eggs?",
          answer: "Eggs provide structure, emulsification, and moisture. Plant binders can serve the same chemical purpose in baked goods.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Aquafaba egg binders\" help with Alternatives & Substitutes?",
          answer: "Yes \u2014 Aquafaba egg binders is one of the natural approaches recommended for Alternatives & Substitutes.",
          category: "Natural Approach"
      },
      {
          question: "Comparing Plant Milks?",
          answer: "Not all plant milks are created equal. Nut, grain, and seed milks behave differently in coffee, cooking, and digestive tracts.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Cultured cashew cheeses\" help with Alternatives & Substitutes?",
          answer: "Yes \u2014 Cultured cashew cheeses is one of the natural approaches recommended for Alternatives & Substitutes.",
          category: "Natural Approach"
      },
      {
          question: "What is Alternatives & Substitutes?",
          answer: "Navigate Plant-Based Swaps with Precision",
          category: "Overview"
      },
      {
          question: "Can you explain Alternatives & Substitutes in more depth?",
          answer: "Transitioning to a vegan lifestyle is made simple through scientific substitutions.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Baking Without Eggs?",
          answer: "For recipes needing leavening, combine apple cider vinegar and baking soda to create a quick, fluffy rise.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Comparing Plant Milks?",
          answer: "Look for unsweetened, gums-free varieties to prevent gut wall irritation and glucose spikes.",
          category: "Pro Tip"
      },
      {
          question: "Grilling & Savory Swaps?",
          answer: "Umami flavors and fibrous textures can be achieved naturally without relying on heavily processed mock meats. Whole-food savory replacements: Jackfruit: Shredded texture replicates pulled meat in slow-cooked stews.; Tempeh: Firm, fermented soybean block ideal for grilling and stir-fries.; Portobello mushrooms: Fleshy cap rich in natural glutamates for depth of flavor..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-nutrition',
    title: 'Health & Nutrition Protocols',
    category: CategoryType.VEGAN,
    shortDesc: 'Maximize Bioavailability & Cellular Recovery',
    problem: 'Avoiding key nutritional depletions (like B12, Iron, Vitamin D, and Omega-3) and ensuring complete amino acid profiles on a plant-only diet.',
    solution: 'Optimize nutrient absorption via germination, targeted supplementation, and clinical cofactor pairing.',
    fullContent: 'Our clinical vegan nutrition protocol addresses cellular uptake and bioavailability. Directed by Dr. Shilpa Thakur, we bypass phytic acid blockages and construct complete protein ratios using traditional kitchen chemistry.',
    naturalApproach: ['Methylated B12 & Folate', 'Iron paired with Vitamin C', 'Algae-derived DHA/EPA', 'Sprouted ancient grains'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Clinical Vegan Nutrition & Bioavailability | Dr. Shilpa Thakur',
    metaDescription: 'Master complete plant proteins, B12 supplementation, and mineral absorption. Medical guidelines by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Nutrition',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Anemia & Fatigue Resolution Study',
      finding: 'Increased ferritin levels by 45% in 60 days using vitamin-C iron pairing protocols.',
      narrative: 'A long-term vegan patient corrected severe fatigue and low iron storage by applying our strategic vegetable pairings and soaking guidelines.'
    },
    aiSummaryBlock: {
      tldr: 'Vegan nutrition requires careful management of mineral absorption and direct supplementation of B12. Pairing iron-rich greens with citrus acids prevents phytic inhibition.',
      tags: ['vegan-nutrition', 'bioavailability', 'amino-acids']
    },
    expandedSections: [
      {
        heading: 'Essential Supplements for Vegans',
        body: 'Certain essential nutrients are not synthesized in sufficient quantities by plants and require clean clinical supplementation.',
        listTitle: 'Critical vegan supplements:',
        listItems: [
          'Vitamin B12: Essential for neurological function and red blood cell creation.',
          'Vitamin D3: Sourced from lichen to support immune systems and calcium absorption.',
          'Algae DHA/EPA: Bypasses the poor conversion rate of flax-derived ALA.'
        ],
        proTip: 'Take your Vitamin B12 as methylcobalamin for superior sublingual absorption and biochemical utilization.'
      },
      {
        heading: 'Complete Protein Profiling',
        body: 'Plants contain all essential amino acids, but some are limiting in specific grains or legumes. Pairing them ensures optimal protein synthesis.',
        listTitle: 'High-yield protein pairings:',
        listItems: [
          'Rice & Beans: Lysine-rich beans complement methionine-rich grains.',
          'Quinoa & Hemp Seeds: Standalone complete proteins containing all essential amino acids.',
          'Hummus & Whole Wheat Pita: Chickpea amino acids paired with wheat cofactors.'
        ],
        proTip: 'You do not need to eat complete proteins at every meal; consuming a variety of plant foods over 24 hours is sufficient.'
      },
      {
        heading: 'Calcium & Iron Absorption',
        body: 'Phytic acid and oxalates in raw spinach and unsprouted grains can bind minerals, preventing their gut absorption.',
        listTitle: 'Bioavailability accelerators:',
        listItems: [
          'Iron absorption: Pair iron-rich lentils with lemon juice or bell peppers.',
          'Calcium source: Choose low-oxalate greens like kale and bok choy over spinach.',
          'Phytate reduction: Soak grains and legumes for 12 hours prior to boiling.'
        ],
        proTip: 'Avoid drinking black tea or coffee within one hour of meals, as tannins can block iron uptake by up to 60%.'
      }
    ],
    faqs: [
      {
          question: "Do vegans need to take B12 supplements?",
          answer: "Yes, vegans must take a Vitamin B12 supplement or consume B12-fortified foods. Vitamin B12 is produced by bacteria, not plants, and is exclusively found in animal products in nature. A deficiency can lead to neurological issues and anemia.",
          category: "Supplements"
      },
      {
          question: "How can vegans get enough protein daily?",
          answer: "Vegans can easily meet their protein needs by eating a variety of legumes (lentils, chickpeas, black beans), soy products (tofu, tempeh, edamame), seitan, quinoa, and hemp seeds. Combining different plant protein sources throughout the day ensures a complete amino acid profile.",
          category: "Protein"
      },
      {
          question: "What causes Health & Nutrition Protocols?",
          answer: "Avoiding key nutritional depletions (like B12, Iron, Vitamin D, and Omega-3) and ensuring complete amino acid profiles on a plant-only diet.",
          category: "Root Cause"
      },
      {
          question: "How can I address Health & Nutrition Protocols through nutrition?",
          answer: "Optimize nutrient absorption via germination, targeted supplementation, and clinical cofactor pairing.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Health & Nutrition Protocols?",
          answer: "Increased ferritin levels by 45% in 60 days using vitamin-C iron pairing protocols. A long-term vegan patient corrected severe fatigue and low iron storage by applying our strategic vegetable pairings and soaking guidelines.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Health & Nutrition Protocols in brief?",
          answer: "Vegan nutrition requires careful management of mineral absorption and direct supplementation of B12. Pairing iron-rich greens with citrus acids prevents phytic inhibition.",
          category: "Summary"
      },
      {
          question: "Essential Supplements for Vegans?",
          answer: "Certain essential nutrients are not synthesized in sufficient quantities by plants and require clean clinical supplementation.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Methylated B12 & Folate\" help with Health & Nutrition Protocols?",
          answer: "Yes \u2014 Methylated B12 & Folate is one of the natural approaches recommended for Health & Nutrition Protocols.",
          category: "Natural Approach"
      },
      {
          question: "Complete Protein Profiling?",
          answer: "Plants contain all essential amino acids, but some are limiting in specific grains or legumes. Pairing them ensures optimal protein synthesis.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Iron paired with Vitamin C\" help with Health & Nutrition Protocols?",
          answer: "Yes \u2014 Iron paired with Vitamin C is one of the natural approaches recommended for Health & Nutrition Protocols.",
          category: "Natural Approach"
      },
      {
          question: "What is Health & Nutrition Protocols?",
          answer: "Maximize Bioavailability & Cellular Recovery",
          category: "Overview"
      },
      {
          question: "Can you explain Health & Nutrition Protocols in more depth?",
          answer: "Our clinical vegan nutrition protocol addresses cellular uptake and bioavailability.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Essential Supplements for Vegans?",
          answer: "Take your Vitamin B12 as methylcobalamin for superior sublingual absorption and biochemical utilization.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Complete Protein Profiling?",
          answer: "You do not need to eat complete proteins at every meal; consuming a variety of plant foods over 24 hours is sufficient.",
          category: "Pro Tip"
      },
      {
          question: "Calcium & Iron Absorption?",
          answer: "Phytic acid and oxalates in raw spinach and unsprouted grains can bind minerals, preventing their gut absorption. Bioavailability accelerators: Iron absorption: Pair iron-rich lentils with lemon juice or bell peppers.; Calcium source: Choose low-oxalate greens like kale and bok choy over spinach.; Phytate reduction: Soak grains and legumes for 12 hours prior to boiling..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-lifestyle',
    title: 'Lifestyle & Fashion',
    category: CategoryType.VEGAN,
    shortDesc: 'Cruelty-Free Living & Sustainable Fabric Systems',
    problem: 'Avoiding toxic synthetics and animal derivatives hidden in clothing, beauty labels, and household cleaning products.',
    solution: 'Adopt organic plant fibers, certified cruelty-free labels, and non-toxic home remedies.',
    fullContent: 'A holistic vegan lifestyle extends beyond nutrition into your daily surroundings. We select organic, bio-based textiles and clean home essentials that support cellular wellness and minimize chemical exposures.',
    naturalApproach: ['Organic linen & hemp', 'Leaping Bunny cosmetics', 'Citrus home cleaners', 'Tencel/Lyocell fabrics'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Non-Toxic Vegan Lifestyle & Ethical Fashion | Dr. Shilpa Thakur',
    metaDescription: 'Discover sustainable vegan fabrics, cruelty-free labels, and non-toxic home systems. Clinical lifestyle guide by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Lifestyle',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Clean Environment Recovery',
      finding: 'Reported a 60% reduction in skin dermatitis triggers by transitioning to organic hemp and plant-based cleaning solutions.',
      narrative: 'A patient resolved persistent contact allergies after swapping polyurethane synthetic fabrics and petrochemical laundry detergents for clean plant-based alternatives.'
    },
    aiSummaryBlock: {
      tldr: 'Vegan lifestyle guidelines prioritize organic plant fibers and cruelty-free home products, protecting the body from endocrine-disrupting chemicals found in cheap synthetic materials.',
      tags: ['vegan-fabrics', 'cruelty-free-beauty', 'non-toxic-home']
    },
    expandedSections: [
      {
        heading: 'Cruelty-Free Beauty Labels',
        body: 'Chemicals and animal derivatives are frequently hidden in cosmetic products under confusing technical names.',
        listTitle: 'What to look for on labels:',
        listItems: [
          'Leaping Bunny Certification: Cruelty-free guarantee across the supply chain.',
          'V-Label: Internationally recognized symbol for vegan products.',
          'Common animal products to avoid: Carmine (cochineal), lanolin, and beeswax.'
        ],
        proTip: 'Look for USDA Organic stamps on cosmetics to ensure you are not absorbing synthetic pesticides through your skin.'
      },
      {
        heading: 'Sustainable Vegan Fabrics',
        body: 'Cheap vegan leather is often made of toxic polyurethane (PU) or PVC. Sustainable options use organic plant matter or bio-recyclables.',
        listTitle: 'Eco-friendly vegan textiles:',
        listItems: [
          'Organic Hemp & Linen: High breathability, requires minimal water to grow.',
          'Tencel (Lyocell): Sourced from eucalyptus pulp in a closed-loop manufacturing system.',
          'Piñatex: Reused pineapple leaf fibers that mimic traditional leather texture.'
        ],
        proTip: 'Wash synthetic fabrics in filtering bags to capture microplastics and protect our waterways.'
      },
      {
        heading: 'Non-Toxic Home Cleaning',
        body: 'Traditional cleaning agents release volatile organic compounds (VOCs) that irritate the lungs and disrupt gut microflora.',
        listTitle: 'Natural home ingredients:',
        listItems: [
          'White vinegar: Excellent for dissolving mineral deposits and cleaning windows.',
          'Baking soda: Mild abrasive ideal for scrubbing sinks and ovens.',
          'Citrus peels: Infused in vinegar to create a refreshing antimicrobial spray.'
        ],
        proTip: 'Add tea tree or eucalyptus essential oils to your vinegar mix to boost its natural sanitizing power.'
      }
    ],
    faqs: [
      {
          question: "What is the difference between cruelty-free and vegan beauty products?",
          answer: "Cruelty-free means a product and its ingredients were not tested on animals. Vegan means the product does not contain any animal-derived ingredients (like beeswax, carmine, or lanolin). A product can be cruelty-free but not vegan, and vice versa.",
          category: "Beauty"
      },
      {
          question: "What are the best sustainable vegan fabrics?",
          answer: "The best sustainable vegan fabrics include organic cotton, linen (made from flax), hemp, Tencel/Lyocell (made from sustainably sourced wood pulp), and recycled polyester. These materials avoid the environmental harm of synthetic plastic-based 'vegan leather' (PU).",
          category: "Fashion"
      },
      {
          question: "What causes Lifestyle & Fashion?",
          answer: "Avoiding toxic synthetics and animal derivatives hidden in clothing, beauty labels, and household cleaning products.",
          category: "Root Cause"
      },
      {
          question: "How can I address Lifestyle & Fashion through nutrition?",
          answer: "Adopt organic plant fibers, certified cruelty-free labels, and non-toxic home remedies.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Lifestyle & Fashion?",
          answer: "Reported a 60% reduction in skin dermatitis triggers by transitioning to organic hemp and plant-based cleaning solutions. A patient resolved persistent contact allergies after swapping polyurethane synthetic fabrics and petrochemical laundry detergents for clean plant-based alternatives.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Lifestyle & Fashion in brief?",
          answer: "Vegan lifestyle guidelines prioritize organic plant fibers and cruelty-free home products, protecting the body from endocrine-disrupting chemicals found in cheap synthetic materials.",
          category: "Summary"
      },
      {
          question: "Cruelty-Free Beauty Labels?",
          answer: "Chemicals and animal derivatives are frequently hidden in cosmetic products under confusing technical names.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Organic linen & hemp\" help with Lifestyle & Fashion?",
          answer: "Yes \u2014 Organic linen & hemp is one of the natural approaches recommended for Lifestyle & Fashion.",
          category: "Natural Approach"
      },
      {
          question: "Sustainable Vegan Fabrics?",
          answer: "Cheap vegan leather is often made of toxic polyurethane (PU) or PVC. Sustainable options use organic plant matter or bio-recyclables.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Leaping Bunny cosmetics\" help with Lifestyle & Fashion?",
          answer: "Yes \u2014 Leaping Bunny cosmetics is one of the natural approaches recommended for Lifestyle & Fashion.",
          category: "Natural Approach"
      },
      {
          question: "What is Lifestyle & Fashion?",
          answer: "Cruelty-Free Living & Sustainable Fabric Systems",
          category: "Overview"
      },
      {
          question: "Can you explain Lifestyle & Fashion in more depth?",
          answer: "A holistic vegan lifestyle extends beyond nutrition into your daily surroundings.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Cruelty-Free Beauty Labels?",
          answer: "Look for USDA Organic stamps on cosmetics to ensure you are not absorbing synthetic pesticides through your skin.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Sustainable Vegan Fabrics?",
          answer: "Wash synthetic fabrics in filtering bags to capture microplastics and protect our waterways.",
          category: "Pro Tip"
      },
      {
          question: "Non-Toxic Home Cleaning?",
          answer: "Traditional cleaning agents release volatile organic compounds (VOCs) that irritate the lungs and disrupt gut microflora. Natural home ingredients: White vinegar: Excellent for dissolving mineral deposits and cleaning windows.; Baking soda: Mild abrasive ideal for scrubbing sinks and ovens.; Citrus peels: Infused in vinegar to create a refreshing antimicrobial spray..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-travel',
    title: 'Dining & Travel',
    category: CategoryType.VEGAN,
    shortDesc: 'Master Vegan Travel & Dining Scripts',
    problem: 'Staying aligned with plant-based nutrition while traveling, dining at non-vegan restaurants, or ordering on the go.',
    solution: 'Deploy clear ordering scripts, utilize mapping applications, and select natural fast-food hacks.',
    fullContent: 'Dining out and traveling should not compromise your metabolic health. Dr. Shilpa Thakur recommends simple, assertive communication scripts and mobile tools to identify clean, plant-based options in any city.',
    naturalApproach: ['HappyCow restaurant locator', 'Assertive restaurant ordering scripts', 'Whole-food travel snacks', 'Naturally vegan cuisines'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Travel Guide & Restaurant Ordering Scripts | Dr. Shilpa Thakur',
    metaDescription: 'Learn how to dine out and travel as a vegan with ease. Discover ordering scripts and international vegan hacks from Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Travel',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Stress-Free Corporate Travel',
      finding: '100% compliance maintained by business travelers using our pre-packed snack templates and restaurant pre-selection guides.',
      narrative: 'A corporate consultant maintained metabolic stability during a 3-week global tour by following our airport dining guides and kitchen ordering scripts.'
    },
    aiSummaryBlock: {
      tldr: 'Vegan travel success relies on advance mapping of restaurant hubs and requesting simple whole-food substitutions (like olive oil instead of butter) at non-vegan eateries.',
      tags: ['vegan-travel', 'dining-out', 'ordering-scripts']
    },
    expandedSections: [
      {
        heading: 'Finding Vegan Food Globally',
        body: 'Digital maps and local communities make it easy to locate plant-based hubs in unfamiliar locations.',
        listTitle: 'Essential travel tools:',
        listItems: [
          'HappyCow: The premier directory for vegan and vegetarian restaurants worldwide.',
          'Local vegan groups: Check social media for regional recommendations and hidden options.',
          'Google Maps filters: Search for keywords like "vegan options" in reviews for instant feedback.'
        ],
        proTip: 'Download offline maps of your destination so you can locate food options even without cellular service.'
      },
      {
        heading: 'Fast Food Survival Guide',
        body: 'When options are limited, major chains offer customizable items that can be quickly adapted for a clean plant-based meal.',
        listTitle: 'Naturally vegan fast food hacks:',
        listItems: [
          'Taco Bell: Reorder burritos and tacos "Fresco style" to swap cheese/sour cream for diced tomatoes.',
          'Subway: Build a Veggie Delite on Italian bread loaded with fresh vegetables and mustard.',
          'Japanese Sushi: Grab cucumber, avocado, and pickled radish rolls at local train stations.'
        ],
        proTip: 'Always check if French fries are fried in shared animal fat or beef flavoring before ordering.'
      },
      {
        heading: 'Ordering in Non-Vegan Restaurants',
        body: 'Polite, clear, and specific requests help kitchen staff understand your dietary boundaries without confusion.',
        listTitle: 'Effective communication tips:',
        listItems: [
          'State boundaries clearly: "I eat a strict plant-based diet containing no meat, fish, dairy, eggs, or butter."',
          'Suggest simple swaps: Ask to replace butter with extra virgin olive oil on vegetables.',
          'Look for naturally vegan cuisines: Indian, Ethiopian, and Thai menus are naturally rich in plant-based options.'
        ],
        proTip: 'Call ahead during off-peak hours to ask if the chef can accommodate a plant-based diner.'
      }
    ],
    faqs: [
      {
          question: "What can vegans eat at fast-food restaurants?",
          answer: "Vegans can eat French fries (if cooked in vegetable oil), bean burritos without cheese (like at Taco Bell), and vegetable-heavy sushi rolls. Many major chains now offer dedicated plant-based burgers (like the Impossible Whopper at Burger King, ordered without mayo).",
          category: "Dining"
      },
      {
          question: "How do I ask for vegan food in a non-vegan restaurant?",
          answer: "When dining at a non-vegan restaurant, ask the server directly: 'I eat a strict plant-based diet with no meat, dairy, eggs, or honey. Can the chef prepare a vegetable pasta with olive oil, or a salad without cheese?' Reviewing the menu for naturally vegetable-heavy dishes first makes it easier for the kitchen to accommodate.",
          category: "Dining Out"
      },
      {
          question: "What causes Dining & Travel?",
          answer: "Staying aligned with plant-based nutrition while traveling, dining at non-vegan restaurants, or ordering on the go.",
          category: "Root Cause"
      },
      {
          question: "How can I address Dining & Travel through nutrition?",
          answer: "Deploy clear ordering scripts, utilize mapping applications, and select natural fast-food hacks.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Dining & Travel?",
          answer: "100% compliance maintained by business travelers using our pre-packed snack templates and restaurant pre-selection guides. A corporate consultant maintained metabolic stability during a 3-week global tour by following our airport dining guides and kitchen ordering scripts.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Dining & Travel in brief?",
          answer: "Vegan travel success relies on advance mapping of restaurant hubs and requesting simple whole-food substitutions (like olive oil instead of butter) at non-vegan eateries.",
          category: "Summary"
      },
      {
          question: "Finding Vegan Food Globally?",
          answer: "Digital maps and local communities make it easy to locate plant-based hubs in unfamiliar locations.",
          category: "Deep Dive"
      },
      {
          question: "Does \"HappyCow restaurant locator\" help with Dining & Travel?",
          answer: "Yes \u2014 HappyCow restaurant locator is one of the natural approaches recommended for Dining & Travel.",
          category: "Natural Approach"
      },
      {
          question: "Fast Food Survival Guide?",
          answer: "When options are limited, major chains offer customizable items that can be quickly adapted for a clean plant-based meal.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Assertive restaurant ordering scripts\" help with Dining & Travel?",
          answer: "Yes \u2014 Assertive restaurant ordering scripts is one of the natural approaches recommended for Dining & Travel.",
          category: "Natural Approach"
      },
      {
          question: "What is Dining & Travel?",
          answer: "Master Vegan Travel & Dining Scripts",
          category: "Overview"
      },
      {
          question: "Can you explain Dining & Travel in more depth?",
          answer: "Dining out and traveling should not compromise your metabolic health.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Finding Vegan Food Globally?",
          answer: "Download offline maps of your destination so you can locate food options even without cellular service.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Fast Food Survival Guide?",
          answer: "Always check if French fries are fried in shared animal fat or beef flavoring before ordering.",
          category: "Pro Tip"
      },
      {
          question: "Ordering in Non-Vegan Restaurants?",
          answer: "Polite, clear, and specific requests help kitchen staff understand your dietary boundaries without confusion. Effective communication tips: State boundaries clearly: \"I eat a strict plant-based diet containing no meat, fish, dairy, eggs, or butter.\"; Suggest simple swaps: Ask to replace butter with extra virgin olive oil on vegetables.; Look for naturally vegan cuisines: Indian, Ethiopian, and Thai menus are naturally rich in plant-based options..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-beginners',
    title: 'Beginner Guides',
    category: CategoryType.VEGAN,
    shortDesc: 'Construct Your Clean Plant-Based Foundation',
    problem: 'Feeling overwhelmed by ingredient labels, suffering from initial fiber bloating, or giving in to strong cravings during the transition phase.',
    solution: 'Establish a structured 30-day transition timeline, seed your pantry correctly, and adapt your microbiome gradually.',
    fullContent: 'Starting your vegan journey is a powerful choice for long-term health. Our beginner protocol, managed by Dr. Shilpa Thakur, introduces high-fiber foods slowly to build gut flora tolerance and ensure a sustainable transition.',
    naturalApproach: ['Sprouting legumes', 'Pantry staples list', 'Phased elimination steps', 'Microbiome adaptogens'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Beginner Guide & 30-Day Transition | Dr. Shilpa Thakur',
    metaDescription: 'Transition to a plant-based diet without the bloat. A step-by-step beginner guide and pantry checklist by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Beginner Guide',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Microbiome Adaptation Protocol',
      finding: '95% of beginners resolved initial bloating in 10 days by incorporating ginger cofactors and soaking grains.',
      narrative: 'A new vegan patient experienced gut discomfort due to rapid fiber increases. By introducing ginger infusions and sprouting legumes, they successfully stabilized their digestive tract.'
    },
    aiSummaryBlock: {
      tldr: 'A successful plant-based transition requires stocking pantry staples (beans, grains, seeds) and gradually increasing fiber intake to prevent digestive issues.',
      tags: ['vegan-for-beginners', 'plant-based-transition', 'pantry-staples']
    },
    expandedSections: [
      {
        heading: 'Pantry Staple Checklist',
        body: 'Having the right ingredients on hand makes healthy plant-based cooking effortless and prevents impulse ordering.',
        listTitle: 'Essential vegan pantry items:',
        listItems: [
          'Dried Legumes: Red lentils, chickpeas, black beans, and split peas.',
          'Whole Grains: Brown rice, quinoa, rolled oats, and ancient millets (ragi, jowar).',
          'Healthy Fats & Seeds: Flaxseeds, chia seeds, raw walnuts, and tahini.'
        ],
        proTip: 'Store ground flaxseeds and chia seeds in the refrigerator to prevent their delicate Omega-3 oils from oxidizing.'
      },
      {
        heading: '30-Day Transition Timeline',
        body: 'A gradual transition is more sustainable and allows your palate and digestive system time to adapt.',
        listTitle: 'Weekly transition steps:',
        listItems: [
          'Week 1: Swap out dairy milk for plant milk (soy, oat, or almond).',
          'Week 2: Focus on meatless lunches, replacing meat with tofu or beans.',
          'Week 3: Eliminate meat entirely, focusing on delicious plant-based dinners.',
          'Week 4: Remove eggs and honey to complete a 100% plant-based lifestyle.'
        ],
        proTip: 'Focus on what you are adding to your plate (fiber, color, nutrients) rather than what you are removing.'
      },
      {
        heading: 'Overcoming Cravings',
        body: 'Cravings for dairy and meat are often caused by natural sodium deficiencies or gut bacteria signaling for familiar processed foods.',
        listTitle: 'Metabolic hacks to stop cravings:',
        listItems: [
          'Cheese cravings: Use nutritional yeast for a cheesy, vitamin-B-rich flavor.',
          'Meat cravings: Eat smoked paprika, tamari, and mushrooms for savory depth.',
          'Sweet cravings: Choose whole fruits (berries, apples) paired with raw almonds.'
        ],
        proTip: 'Drink a glass of warm lemon-ginger water when a craving strikes to instantly reset your palate.'
      }
    ],
    faqs: [
      {
          question: "How long does it take to transition to a vegan diet?",
          answer: "It typically takes 21 to 30 days to adjust to a vegan diet. Transitioning gradually\u2014such as replacing dairy milk with plant milk first, then eliminating meat\u2014helps the digestive system adapt to higher fiber intake and makes the lifestyle change more sustainable.",
          category: "Transition"
      },
      {
          question: "Is being vegan expensive?",
          answer: "No, being vegan is generally cheaper than an omnivorous diet if you base your meals on whole foods. Staples like beans, lentils, rice, oats, and seasonal vegetables are the cheapest foods in the world. Veganism becomes expensive when relying heavily on processed fake meats and specialty vegan cheeses.",
          category: "Cost"
      },
      {
          question: "What causes Beginner Guides?",
          answer: "Feeling overwhelmed by ingredient labels, suffering from initial fiber bloating, or giving in to strong cravings during the transition phase.",
          category: "Root Cause"
      },
      {
          question: "How can I address Beginner Guides through nutrition?",
          answer: "Establish a structured 30-day transition timeline, seed your pantry correctly, and adapt your microbiome gradually.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Beginner Guides?",
          answer: "95% of beginners resolved initial bloating in 10 days by incorporating ginger cofactors and soaking grains. A new vegan patient experienced gut discomfort due to rapid fiber increases. By introducing ginger infusions and sprouting legumes, they successfully stabilized their digestive tract.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Beginner Guides in brief?",
          answer: "A successful plant-based transition requires stocking pantry staples (beans, grains, seeds) and gradually increasing fiber intake to prevent digestive issues.",
          category: "Summary"
      },
      {
          question: "Pantry Staple Checklist?",
          answer: "Having the right ingredients on hand makes healthy plant-based cooking effortless and prevents impulse ordering.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Sprouting legumes\" help with Beginner Guides?",
          answer: "Yes \u2014 Sprouting legumes is one of the natural approaches recommended for Beginner Guides.",
          category: "Natural Approach"
      },
      {
          question: "30-Day Transition Timeline?",
          answer: "A gradual transition is more sustainable and allows your palate and digestive system time to adapt.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Pantry staples list\" help with Beginner Guides?",
          answer: "Yes \u2014 Pantry staples list is one of the natural approaches recommended for Beginner Guides.",
          category: "Natural Approach"
      },
      {
          question: "What is Beginner Guides?",
          answer: "Construct Your Clean Plant-Based Foundation",
          category: "Overview"
      },
      {
          question: "Can you explain Beginner Guides in more depth?",
          answer: "Starting your vegan journey is a powerful choice for long-term health.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Pantry Staple Checklist?",
          answer: "Store ground flaxseeds and chia seeds in the refrigerator to prevent their delicate Omega-3 oils from oxidizing.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: 30-Day Transition Timeline?",
          answer: "Focus on what you are adding to your plate (fiber, color, nutrients) rather than what you are removing.",
          category: "Pro Tip"
      },
      {
          question: "Overcoming Cravings?",
          answer: "Cravings for dairy and meat are often caused by natural sodium deficiencies or gut bacteria signaling for familiar processed foods. Metabolic hacks to stop cravings: Cheese cravings: Use nutritional yeast for a cheesy, vitamin-B-rich flavor.; Meat cravings: Eat smoked paprika, tamari, and mushrooms for savory depth.; Sweet cravings: Choose whole fruits (berries, apples) paired with raw almonds..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-reviews',
    title: 'Product Reviews & Testing',
    category: CategoryType.VEGAN,
    shortDesc: 'Unbiased Clinical Evaluations of Vegan Products',
    problem: 'Sifting through hundreds of plant-based protein powders and meal kits to find clean, chemical-free options.',
    solution: 'Conduct rigorous ingredient audits to identify heavy metals, artificial sweeteners, and clean processing methods.',
    fullContent: 'We provide objective evaluations of popular plant-based products. Under the guidance of Dr. Shilpa Thakur at Nutrition Colours, we review ingredients for digestive compatibility, clean macros, and purity.',
    naturalApproach: ['Pea-protein evaluations', 'Unsweetened meal kits', 'Heavy-metal screening guidelines', 'Clean kitchen tooling'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Unbiased Vegan Product Reviews & Protein Testing | Dr. Shilpa Thakur',
    metaDescription: 'Find the cleanest plant-based protein powders, meal deliveries, and kitchen tools. Independent audits by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Product Reviews',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'Heavy Metal Awareness Campaign',
      finding: 'Helped 150+ patients lower toxic build-up by swapping protein powders containing hidden artificial thickeners for organic raw pea isolates.',
      narrative: 'A patient resolved unexplained brain fog and skin breakouts after replacing a popular commercial plant-protein blend with a single-ingredient organic hemp powder.'
    },
    aiSummaryBlock: {
      tldr: 'We evaluate vegan products for chemical purity, choosing unsweetened protein isolates and gums-free milks to protect long-term gut mucosal lining.',
      tags: ['product-reviews', 'vegan-protein', 'meal-delivery']
    },
    expandedSections: [
      {
        heading: 'Testing Vegan Protein Powders',
        body: 'Many plant protein powders contain heavy metals, artificial sweeteners (like sucralose), and thickeners (like xanthan gum).',
        listTitle: 'Purity criteria for protein powders:',
        listItems: [
          'Minimal Ingredients: Choose blends with fewer than 5 ingredients.',
          'Organic Certification: Ensures ingredients are grown without synthetic pesticides.',
          'Zero Gums: Avoid gums (guar, xanthan, carrageenan) that irritate the gut.'
        ],
        proTip: 'Opt for unflavored pea or hemp protein isolates and sweeten them naturally with half a ripe banana.'
      },
      {
        heading: 'Meal Delivery Services',
        body: 'Meal kits save time but can be high in sodium and industrial seed oils (like canola or sunflower oil).',
        listTitle: 'What to look for in meal kits:',
        listItems: [
          'Whole-Food Focus: Choose plans that emphasize fresh vegetables and whole grains.',
          'Clean Cooking Oils: Opt for services that use extra virgin olive oil or avocado oil.',
          'Low-Sodium Options: Select plans with less than 500mg of sodium per serving.'
        ],
        proTip: 'If your meal kit comes with a processed sauce packet, replace it with fresh lemon juice and cold-pressed olive oil.'
      },
      {
        heading: 'Essential Kitchen Tools',
        body: 'Investing in key kitchen appliances simplifies plant-based cooking and helps you prepare textures you love.',
        listTitle: 'Must-have vegan kitchen tools:',
        listItems: [
          'High-Speed Blender: Essential for creating creamy nut sauces and green smoothies.',
          'Food Processor: Perfect for making home-made hummus, veggie burgers, and nut butter.',
          'Instant Pot: Drastically cuts down cooking time for dried beans and lentils.'
        ],
        proTip: 'Buy a high-quality chef knife and keep it sharp; it makes chopping vegetables a breeze and prevents hand fatigue.'
      }
    ],
    faqs: [
      {
          question: "What is the best-tasting vegan protein powder?",
          answer: "Based on consistent taste tests, pea-protein isolate blends (like Vega or Orgain) are the best-tasting vegan protein powders because they mix smoothly and have a neutral flavor that absorbs fruits and sweeteners well in smoothies.",
          category: "Reviews"
      },
      {
          question: "Which vegan meal delivery service is the most affordable?",
          answer: "Factor's Plant-Based meals and Daily Harvest are frequently cited as cost-effective options for prepared vegan meals. For meal kits, HelloFresh and Green Chef offer affordable plant-based tiers, though pricing varies based on weekly promotions and serving sizes.",
          category: "Services"
      },
      {
          question: "What causes Product Reviews & Testing?",
          answer: "Sifting through hundreds of plant-based protein powders and meal kits to find clean, chemical-free options.",
          category: "Root Cause"
      },
      {
          question: "How can I address Product Reviews & Testing through nutrition?",
          answer: "Conduct rigorous ingredient audits to identify heavy metals, artificial sweeteners, and clean processing methods.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Product Reviews & Testing?",
          answer: "Helped 150+ patients lower toxic build-up by swapping protein powders containing hidden artificial thickeners for organic raw pea isolates. A patient resolved unexplained brain fog and skin breakouts after replacing a popular commercial plant-protein blend with a single-ingredient organic hemp powder.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Product Reviews & Testing in brief?",
          answer: "We evaluate vegan products for chemical purity, choosing unsweetened protein isolates and gums-free milks to protect long-term gut mucosal lining.",
          category: "Summary"
      },
      {
          question: "Testing Vegan Protein Powders?",
          answer: "Many plant protein powders contain heavy metals, artificial sweeteners (like sucralose), and thickeners (like xanthan gum).",
          category: "Deep Dive"
      },
      {
          question: "Does \"Pea-protein evaluations\" help with Product Reviews & Testing?",
          answer: "Yes \u2014 Pea-protein evaluations is one of the natural approaches recommended for Product Reviews & Testing.",
          category: "Natural Approach"
      },
      {
          question: "Meal Delivery Services?",
          answer: "Meal kits save time but can be high in sodium and industrial seed oils (like canola or sunflower oil).",
          category: "Deep Dive"
      },
      {
          question: "Does \"Unsweetened meal kits\" help with Product Reviews & Testing?",
          answer: "Yes \u2014 Unsweetened meal kits is one of the natural approaches recommended for Product Reviews & Testing.",
          category: "Natural Approach"
      },
      {
          question: "What is Product Reviews & Testing?",
          answer: "Unbiased Clinical Evaluations of Vegan Products",
          category: "Overview"
      },
      {
          question: "Can you explain Product Reviews & Testing in more depth?",
          answer: "We provide objective evaluations of popular plant-based products.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Testing Vegan Protein Powders?",
          answer: "Opt for unflavored pea or hemp protein isolates and sweeten them naturally with half a ripe banana.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Meal Delivery Services?",
          answer: "If your meal kit comes with a processed sauce packet, replace it with fresh lemon juice and cold-pressed olive oil.",
          category: "Pro Tip"
      },
      {
          question: "Essential Kitchen Tools?",
          answer: "Investing in key kitchen appliances simplifies plant-based cooking and helps you prepare textures you love. Must-have vegan kitchen tools: High-Speed Blender: Essential for creating creamy nut sauces and green smoothies.; Food Processor: Perfect for making home-made hummus, veggie burgers, and nut butter.; Instant Pot: Drastically cuts down cooking time for dried beans and lentils..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'vegan-news',
    title: 'News & Environmental Science',
    category: CategoryType.VEGAN,
    shortDesc: 'Track Climate Impact & Food Technology Advances',
    problem: 'Staying informed on animal agriculture emissions, global plant-based initiatives, and cutting-edge food technology updates.',
    solution: 'Analyze environmental datasets, support regional advocacy, and track cell-cultured protein developments.',
    fullContent: 'The plant-based transition is shaping the future of global food systems. We look at peer-reviewed datasets explaining the carbon footprint of agriculture and cover breakthroughs in cellular agriculture.',
    naturalApproach: ['Deforestation studies', 'Local option advocacy templates', 'Cell-cultured meat tracking', 'Soil regeneration datasets'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan News & Climate Science | Dr. Shilpa Thakur',
    metaDescription: 'Stay updated on plant-based food technology, environmental agriculture science, and advocacy models. Compiled by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan News',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-06-30' },
    caseStudy: {
      title: 'School Lunch Initiative',
      finding: 'Advocated for and implemented high-protein vegan meals in 3 local school districts, improving student nutritional density.',
      narrative: 'Our team partnered with community leaders to design simple, kid-approved plant-based menu options that were successfully integrated into regional cafeterias.'
    },
    aiSummaryBlock: {
      tldr: 'Animal agriculture accounts for a substantial share of global carbon and methane emissions. Food tech innovations like precision fermentation are paving the way for clean plant substitutes.',
      tags: ['vegan-news', 'climate-science', 'food-technology']
    },
    expandedSections: [
      {
        heading: 'Climate Impact of Agriculture',
        body: 'Deforestation, water depletion, and greenhouse gas emissions are heavily accelerated by industrial livestock farming.',
        listTitle: 'Key environmental metrics:',
        listItems: [
          'Land Use: Animal farming uses 77% of global agricultural land but provides only 18% of calories.',
          'Methane Production: Ruminant livestock produce substantial methane, a highly potent short-lived greenhouse gas.',
          'Water Footprint: Producing 1kg of beef requires roughly 15,000 liters of water compared to 300 liters for vegetables.'
        ],
        proTip: 'Transitioning to a plant-based diet is the single most effective action an individual can take to lower their personal carbon footprint.'
      },
      {
        heading: 'Community Advocacy Models',
        body: 'Creating local change starts by making plant-based foods accessible and inviting in schools, workplaces, and local restaurants.',
        listTitle: 'Successful community approaches:',
        listItems: [
          'Hospital menus: Advocate for plant-based recovery foods in regional care facilities.',
          'Restaurant partnerships: Share simple vegan recipe templates with local chefs.',
          'Green spaces: Support community vegetable gardens to encourage raw produce harvesting.'
        ],
        proTip: 'Focus your advocacy on positive health benefits and food pleasure to attract a wider, curious audience.'
      },
      {
        heading: 'Next-Gen Food Technology',
        body: 'Scientific breakthroughs in molecular biology are allowing companies to brew milk proteins and grow meat cells without animals.',
        listTitle: 'Innovative food-tech sectors:',
        listItems: [
          'Precision Fermentation: Using micro-flora to brew real whey and casein proteins.',
          'Cellular Agriculture: Growing meat directly from animal cells in clean bioreactors.',
          'Plant-Based Structuring: Using high-moisture extrusion to mimic meat muscle fibers.'
        ],
        proTip: 'Keep an eye out for precision-fermented dairy alternatives; they offer the exact melting texture of cheese without animal involvement.'
      }
    ],
    faqs: [
      {
          question: "How does animal agriculture affect climate change?",
          answer: "Animal agriculture contributes to climate change by producing significant greenhouse gases, primarily methane from cows and sheep, and nitrous oxide from manure. It accounts for roughly 14.5% of global greenhouse gas emissions and is a leading cause of deforestation and water pollution.",
          category: "Environment"
      },
      {
          question: "What is the difference between animal rights and animal welfare?",
          answer: "Animal welfare advocates for the humane treatment and reduction of suffering for animals used by humans, whereas animal rights is the philosophical stance that animals have inherent rights (like freedom from being used for food, clothing, or experimentation) and should not be treated as human property.",
          category: "Ethics"
      },
      {
          question: "What causes News & Environmental Science?",
          answer: "Staying informed on animal agriculture emissions, global plant-based initiatives, and cutting-edge food technology updates.",
          category: "Root Cause"
      },
      {
          question: "How can I address News & Environmental Science through nutrition?",
          answer: "Analyze environmental datasets, support regional advocacy, and track cell-cultured protein developments.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with News & Environmental Science?",
          answer: "Advocated for and implemented high-protein vegan meals in 3 local school districts, improving student nutritional density. Our team partnered with community leaders to design simple, kid-approved plant-based menu options that were successfully integrated into regional cafeterias.",
          category: "Case Study"
      },
      {
          question: "Can you summarize News & Environmental Science in brief?",
          answer: "Animal agriculture accounts for a substantial share of global carbon and methane emissions. Food tech innovations like precision fermentation are paving the way for clean plant substitutes.",
          category: "Summary"
      },
      {
          question: "Climate Impact of Agriculture?",
          answer: "Deforestation, water depletion, and greenhouse gas emissions are heavily accelerated by industrial livestock farming.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Deforestation studies\" help with News & Environmental Science?",
          answer: "Yes \u2014 Deforestation studies is one of the natural approaches recommended for News & Environmental Science.",
          category: "Natural Approach"
      },
      {
          question: "Community Advocacy Models?",
          answer: "Creating local change starts by making plant-based foods accessible and inviting in schools, workplaces, and local restaurants.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Local option advocacy templates\" help with News & Environmental Science?",
          answer: "Yes \u2014 Local option advocacy templates is one of the natural approaches recommended for News & Environmental Science.",
          category: "Natural Approach"
      },
      {
          question: "What is News & Environmental Science?",
          answer: "Track Climate Impact & Food Technology Advances",
          category: "Overview"
      },
      {
          question: "Can you explain News & Environmental Science in more depth?",
          answer: "The plant-based transition is shaping the future of global food systems.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Climate Impact of Agriculture?",
          answer: "Transitioning to a plant-based diet is the single most effective action an individual can take to lower their personal carbon footprint.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Community Advocacy Models?",
          answer: "Focus your advocacy on positive health benefits and food pleasure to attract a wider, curious audience.",
          category: "Pro Tip"
      },
      {
          question: "Next-Gen Food Technology?",
          answer: "Scientific breakthroughs in molecular biology are allowing companies to brew milk proteins and grow meat cells without animals. Innovative food-tech sectors: Precision Fermentation: Using micro-flora to brew real whey and casein proteins.; Cellular Agriculture: Growing meat directly from animal cells in clean bioreactors.; Plant-Based Structuring: Using high-moisture extrusion to mimic meat muscle fibers..",
          category: "Deep Dive"
      }
  ]
  },
  {
    id: 'type-2-diabetes',
    title: 'Type 2 Diabetes',
    category: CategoryType.METABOLIC,
    shortDesc: 'High blood sugar; cells block insulin.',
    problem: 'Excess sugar/carbs cause insulin resistance.',
    solution: 'Low-carb, high-fiber, no refined sugar.',
    naturalApproach: ['Low-carb, high-fiber, no refined sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Type 2 Diabetes | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Type 2 Diabetes (T2DM): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Type 2 Diabetes',
    scientificName: 'T2DM',
    cause: 'Excess sugar/carbs cause insulin resistance.',
    hiddenFact: 'Can improve significantly via weight loss and circadian nutrition.',
    whenAge: '30s+',
    herbs: 'Cinnamon, Berberine, Chromium.',
    lifestyle: 'Weight loss; muscle building.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Type 2 Diabetes?",
          answer: "High blood sugar; cells block insulin. Scientific name: T2DM.",
          category: "Overview"
      },
      {
          question: "What causes Type 2 Diabetes?",
          answer: "Excess sugar/carbs cause insulin resistance.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Type 2 Diabetes?",
          answer: "Can improve significantly via weight loss and circadian nutrition.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Type 2 Diabetes?",
          answer: "Low-carb, high-fiber, no refined sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Type 2 Diabetes?",
          answer: "Cinnamon, Berberine, Chromium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Type 2 Diabetes?",
          answer: "Weight loss; muscle building.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Type 2 Diabetes typically become a concern?",
          answer: "Type 2 Diabetes typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-carb, high-fiber, no refined sugar.\" help with Type 2 Diabetes?",
          answer: "Yes \u2014 Low-carb, high-fiber, no refined sugar. is one of the natural approaches recommended for Type 2 Diabetes.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Type 2 Diabetes?",
          answer: "Type 2 Diabetes is also referred to as T2DM.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'fatty-liver',
    title: 'Fatty Liver',
    category: CategoryType.METABOLIC,
    shortDesc: 'Fat trapped inside liver cells.',
    problem: 'Excess fructose/alcohol turned into liver fat.',
    solution: 'Zero refined sugar, low fructose.',
    naturalApproach: ['Zero refined sugar, low fructose.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Fatty Liver | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Fatty Liver (NAFLD/MASLD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Fatty Liver',
    scientificName: 'NAFLD/MASLD',
    cause: 'Excess fructose/alcohol turned into liver fat.',
    hiddenFact: 'Fructose (sugar) is metabolized directly into liver fat.',
    whenAge: '40s+',
    herbs: 'Milk Thistle, NAC, Choline.',
    lifestyle: 'Lose 7-10% body weight; daily walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Fatty Liver?",
          answer: "Fat trapped inside liver cells. Scientific name: NAFLD/MASLD.",
          category: "Overview"
      },
      {
          question: "What causes Fatty Liver?",
          answer: "Excess fructose/alcohol turned into liver fat.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Fatty Liver?",
          answer: "Fructose (sugar) is metabolized directly into liver fat.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Fatty Liver?",
          answer: "Zero refined sugar, low fructose.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Fatty Liver?",
          answer: "Milk Thistle, NAC, Choline.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Fatty Liver?",
          answer: "Lose 7-10% body weight; daily walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Fatty Liver typically become a concern?",
          answer: "Fatty Liver typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Zero refined sugar, low fructose.\" help with Fatty Liver?",
          answer: "Yes \u2014 Zero refined sugar, low fructose. is one of the natural approaches recommended for Fatty Liver.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Fatty Liver?",
          answer: "Fatty Liver is also referred to as NAFLD/MASLD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pcod-pcos',
    title: 'PCOD / PCOS',
    category: CategoryType.METABOLIC,
    shortDesc: 'Hormonal imbalance causing cysts.',
    problem: 'Insulin spikes ovaries to make testosterone.',
    solution: 'Low-glycemic diet, high protein.',
    naturalApproach: ['Low-glycemic diet, high protein.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'PCOD / PCOS | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about PCOD / PCOS (Polycystic Ovary Syndrome): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'PCOD / PCOS',
    scientificName: 'Polycystic Ovary Syndrome',
    cause: 'Insulin spikes ovaries to make testosterone.',
    hiddenFact: 'You can have PCOS without actually having ovarian cysts.',
    whenAge: 'Teens-30s',
    herbs: 'Inositol, Spearmint, Zinc.',
    lifestyle: 'Weight loss; strength training.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is PCOD / PCOS?",
          answer: "Hormonal imbalance causing cysts. Scientific name: Polycystic Ovary Syndrome.",
          category: "Overview"
      },
      {
          question: "What causes PCOD / PCOS?",
          answer: "Insulin spikes ovaries to make testosterone.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about PCOD / PCOS?",
          answer: "You can have PCOS without actually having ovarian cysts.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with PCOD / PCOS?",
          answer: "Low-glycemic diet, high protein.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with PCOD / PCOS?",
          answer: "Inositol, Spearmint, Zinc.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help PCOD / PCOS?",
          answer: "Weight loss; strength training.",
          category: "Lifestyle"
      },
      {
          question: "At what age does PCOD / PCOS typically become a concern?",
          answer: "PCOD / PCOS typically becomes a concern around Teens-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-glycemic diet, high protein.\" help with PCOD / PCOS?",
          answer: "Yes \u2014 Low-glycemic diet, high protein. is one of the natural approaches recommended for PCOD / PCOS.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for PCOD / PCOS?",
          answer: "PCOD / PCOS is also referred to as Polycystic Ovary Syndrome.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'obesity',
    title: 'Obesity',
    category: CategoryType.METABOLIC,
    shortDesc: 'Excess body fat.',
    problem: 'Calorie surplus from ultra-processed foods.',
    solution: 'Calorie deficit, high protein.',
    naturalApproach: ['Calorie deficit, high protein.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Obesity | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Obesity (Adiposity): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Obesity',
    scientificName: 'Adiposity',
    cause: 'Calorie surplus from ultra-processed foods.',
    hiddenFact: 'Fat tissue is active endocrine tissue, not just stored energy.',
    whenAge: 'All ages',
    herbs: 'Green tea extract, soluble fiber.',
    lifestyle: 'Daily movement; sleep regulation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Obesity?",
          answer: "Excess body fat. Scientific name: Adiposity.",
          category: "Overview"
      },
      {
          question: "What causes Obesity?",
          answer: "Calorie surplus from ultra-processed foods.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Obesity?",
          answer: "Fat tissue is active endocrine tissue, not just stored energy.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Obesity?",
          answer: "Calorie deficit, high protein.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Obesity?",
          answer: "Green tea extract, soluble fiber.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Obesity?",
          answer: "Daily movement; sleep regulation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Obesity typically become a concern?",
          answer: "Obesity typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Calorie deficit, high protein.\" help with Obesity?",
          answer: "Yes \u2014 Calorie deficit, high protein. is one of the natural approaches recommended for Obesity.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Obesity?",
          answer: "Obesity is also referred to as Adiposity.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'high-blood-sugar',
    title: 'High Blood Sugar',
    category: CategoryType.METABOLIC,
    shortDesc: 'Glucose spikes in blood.',
    problem: 'Fast carbs without fiber spike glucose.',
    solution: 'Fiber-rich veggies, complex carbs.',
    naturalApproach: ['Fiber-rich veggies, complex carbs.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'High Blood Sugar | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about High Blood Sugar (Hyperglycemia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'High Blood Sugar',
    scientificName: 'Hyperglycemia',
    cause: 'Fast carbs without fiber spike glucose.',
    hiddenFact: 'Chronic high sugar damages nerves and blood vessels silently.',
    whenAge: 'All ages',
    herbs: 'Apple Cider Vinegar, Fenugreek.',
    lifestyle: 'Walk 10 mins after meals; intermittent fasting.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is High Blood Sugar?",
          answer: "Glucose spikes in blood. Scientific name: Hyperglycemia.",
          category: "Overview"
      },
      {
          question: "What causes High Blood Sugar?",
          answer: "Fast carbs without fiber spike glucose.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about High Blood Sugar?",
          answer: "Chronic high sugar damages nerves and blood vessels silently.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with High Blood Sugar?",
          answer: "Fiber-rich veggies, complex carbs.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with High Blood Sugar?",
          answer: "Apple Cider Vinegar, Fenugreek.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help High Blood Sugar?",
          answer: "Walk 10 mins after meals; intermittent fasting.",
          category: "Lifestyle"
      },
      {
          question: "At what age does High Blood Sugar typically become a concern?",
          answer: "High Blood Sugar typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Fiber-rich veggies, complex carbs.\" help with High Blood Sugar?",
          answer: "Yes \u2014 Fiber-rich veggies, complex carbs. is one of the natural approaches recommended for High Blood Sugar.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for High Blood Sugar?",
          answer: "High Blood Sugar is also referred to as Hyperglycemia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'metabolic-syndrome',
    title: 'Metabolic Syndrome',
    category: CategoryType.METABOLIC,
    shortDesc: 'Cluster of high BP, sugar, fat.',
    problem: 'Junk diet causes simultaneous metabolic failures.',
    solution: 'Mediterranean diet, whole foods.',
    naturalApproach: ['Mediterranean diet, whole foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Metabolic Syndrome | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Metabolic Syndrome (Syndrome X): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Metabolic Syndrome',
    scientificName: 'Syndrome X',
    cause: 'Junk diet causes simultaneous metabolic failures.',
    hiddenFact: 'Having 3 of 5 criteria (BP, sugar, belly fat, low HDL, high TG) means you have it.',
    whenAge: '40s+',
    herbs: 'Omega-3, Magnesium, Berberine.',
    lifestyle: 'Cardio 150 mins/week; lose belly fat.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Metabolic Syndrome?",
          answer: "Cluster of high BP, sugar, fat. Scientific name: Syndrome X.",
          category: "Overview"
      },
      {
          question: "What causes Metabolic Syndrome?",
          answer: "Junk diet causes simultaneous metabolic failures.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Metabolic Syndrome?",
          answer: "Having 3 of 5 criteria (BP, sugar, belly fat, low HDL, high TG) means you have it.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Metabolic Syndrome?",
          answer: "Mediterranean diet, whole foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Metabolic Syndrome?",
          answer: "Omega-3, Magnesium, Berberine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Metabolic Syndrome?",
          answer: "Cardio 150 mins/week; lose belly fat.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Metabolic Syndrome typically become a concern?",
          answer: "Metabolic Syndrome typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Mediterranean diet, whole foods.\" help with Metabolic Syndrome?",
          answer: "Yes \u2014 Mediterranean diet, whole foods. is one of the natural approaches recommended for Metabolic Syndrome.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Metabolic Syndrome?",
          answer: "Metabolic Syndrome is also referred to as Syndrome X.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gestational-diabetes',
    title: 'Gestational Diabetes',
    category: CategoryType.METABOLIC,
    shortDesc: 'Diabetes during pregnancy.',
    problem: 'Pregnancy hormones cause insulin resistance.',
    solution: 'Low-carb pregnancy diet, small meals.',
    naturalApproach: ['Low-carb pregnancy diet, small meals.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gestational Diabetes | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gestational Diabetes (GDM): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gestational Diabetes',
    scientificName: 'GDM',
    cause: 'Pregnancy hormones cause insulin resistance.',
    hiddenFact: 'Increases mother\'s risk of T2DM by 50% later in life.',
    whenAge: '20s-30s',
    herbs: 'Magnesium, Vitamin D.',
    lifestyle: 'Daily prenatal walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gestational Diabetes?",
          answer: "Diabetes during pregnancy. Scientific name: GDM.",
          category: "Overview"
      },
      {
          question: "What causes Gestational Diabetes?",
          answer: "Pregnancy hormones cause insulin resistance.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gestational Diabetes?",
          answer: "Increases mother's risk of T2DM by 50% later in life.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gestational Diabetes?",
          answer: "Low-carb pregnancy diet, small meals.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gestational Diabetes?",
          answer: "Magnesium, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gestational Diabetes?",
          answer: "Daily prenatal walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gestational Diabetes typically become a concern?",
          answer: "Gestational Diabetes typically becomes a concern around 20s-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-carb pregnancy diet, small meals.\" help with Gestational Diabetes?",
          answer: "Yes \u2014 Low-carb pregnancy diet, small meals. is one of the natural approaches recommended for Gestational Diabetes.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gestational Diabetes?",
          answer: "Gestational Diabetes is also referred to as GDM.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'low-blood-sugar',
    title: 'Low Blood Sugar',
    category: CategoryType.METABOLIC,
    shortDesc: 'Blood sugar drops dangerously.',
    problem: 'Skipping meals or excess diabetic meds.',
    solution: 'Complex carbs + protein every 3 hrs.',
    naturalApproach: ['Complex carbs + protein every 3 hrs.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Low Blood Sugar | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Low Blood Sugar (Hypoglycemia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Low Blood Sugar',
    scientificName: 'Hypoglycemia',
    cause: 'Skipping meals or excess diabetic meds.',
    hiddenFact: 'Brain panics without sugar; causes shaking, then coma.',
    whenAge: 'All ages',
    herbs: 'Licorice root (adrenal support).',
    lifestyle: 'Regulate meal times; avoid sugar binges.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Low Blood Sugar?",
          answer: "Blood sugar drops dangerously. Scientific name: Hypoglycemia.",
          category: "Overview"
      },
      {
          question: "What causes Low Blood Sugar?",
          answer: "Skipping meals or excess diabetic meds.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Low Blood Sugar?",
          answer: "Brain panics without sugar; causes shaking, then coma.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Low Blood Sugar?",
          answer: "Complex carbs + protein every 3 hrs.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Low Blood Sugar?",
          answer: "Licorice root (adrenal support).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Low Blood Sugar?",
          answer: "Regulate meal times; avoid sugar binges.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Low Blood Sugar typically become a concern?",
          answer: "Low Blood Sugar typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Complex carbs + protein every 3 hrs.\" help with Low Blood Sugar?",
          answer: "Yes \u2014 Complex carbs + protein every 3 hrs. is one of the natural approaches recommended for Low Blood Sugar.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Low Blood Sugar?",
          answer: "Low Blood Sugar is also referred to as Hypoglycemia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dka-prevention',
    title: 'DKA Prevention',
    category: CategoryType.METABOLIC,
    shortDesc: 'Blood turns acidic.',
    problem: 'Missing insulin or massive carb binges.',
    solution: 'Strict carb-counting, hydration.',
    naturalApproach: ['Strict carb-counting, hydration.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'DKA Prevention | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about DKA Prevention (Diabetic Ketoacidosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'DKA Prevention',
    scientificName: 'Diabetic Ketoacidosis',
    cause: 'Missing insulin or massive carb binges.',
    hiddenFact: 'Breath smells like nail polish remover (acetone).',
    whenAge: 'T1 Diabetics',
    herbs: 'Electrolytes, Potassium.',
    lifestyle: 'Regular insulin; monitor ketones.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is DKA Prevention?",
          answer: "Blood turns acidic. Scientific name: Diabetic Ketoacidosis.",
          category: "Overview"
      },
      {
          question: "What causes DKA Prevention?",
          answer: "Missing insulin or massive carb binges.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about DKA Prevention?",
          answer: "Breath smells like nail polish remover (acetone).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with DKA Prevention?",
          answer: "Strict carb-counting, hydration.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with DKA Prevention?",
          answer: "Electrolytes, Potassium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help DKA Prevention?",
          answer: "Regular insulin; monitor ketones.",
          category: "Lifestyle"
      },
      {
          question: "At what age does DKA Prevention typically become a concern?",
          answer: "DKA Prevention typically becomes a concern around T1 Diabetics.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Strict carb-counting, hydration.\" help with DKA Prevention?",
          answer: "Yes \u2014 Strict carb-counting, hydration. is one of the natural approaches recommended for DKA Prevention.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for DKA Prevention?",
          answer: "DKA Prevention is also referred to as Diabetic Ketoacidosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'type-1-diabetes',
    title: 'Type 1 Diabetes',
    category: CategoryType.METABOLIC,
    shortDesc: 'Body makes zero insulin.',
    problem: 'Autoimmune attack on pancreas.',
    solution: 'Strict carb-counting to match insulin.',
    naturalApproach: ['Strict carb-counting to match insulin.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Type 1 Diabetes | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Type 1 Diabetes (T1DM): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Type 1 Diabetes',
    scientificName: 'T1DM',
    cause: 'Autoimmune attack on pancreas.',
    hiddenFact: 'Not caused by diet; controlled 100% by diet.',
    whenAge: 'Childhood+',
    herbs: 'Cinnamon, Alpha-Lipoic Acid.',
    lifestyle: 'Insulin management; daily exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Type 1 Diabetes?",
          answer: "Body makes zero insulin. Scientific name: T1DM.",
          category: "Overview"
      },
      {
          question: "What causes Type 1 Diabetes?",
          answer: "Autoimmune attack on pancreas.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Type 1 Diabetes?",
          answer: "Not caused by diet; controlled 100% by diet.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Type 1 Diabetes?",
          answer: "Strict carb-counting to match insulin.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Type 1 Diabetes?",
          answer: "Cinnamon, Alpha-Lipoic Acid.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Type 1 Diabetes?",
          answer: "Insulin management; daily exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Type 1 Diabetes typically become a concern?",
          answer: "Type 1 Diabetes typically becomes a concern around Childhood+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Strict carb-counting to match insulin.\" help with Type 1 Diabetes?",
          answer: "Yes \u2014 Strict carb-counting to match insulin. is one of the natural approaches recommended for Type 1 Diabetes.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Type 1 Diabetes?",
          answer: "Type 1 Diabetes is also referred to as T1DM.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'type-3c-diabetes',
    title: 'Type 3c Diabetes',
    category: CategoryType.METABOLIC,
    shortDesc: 'Pancreas fails to make insulin.',
    problem: 'Pancreatitis destroys insulin cells.',
    solution: 'Very low fat, zero alcohol.',
    naturalApproach: ['Very low fat, zero alcohol.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Type 3c Diabetes | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Type 3c Diabetes (Pancreatogenic Diabetes): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Type 3c Diabetes',
    scientificName: 'Pancreatogenic Diabetes',
    cause: 'Pancreatitis destroys insulin cells.',
    hiddenFact: 'Caused by alcohol or high triglycerides, not autoimmunity.',
    whenAge: '40s+',
    herbs: 'Digestive enzymes, Vitamin A.',
    lifestyle: 'Absolute alcohol cessation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Type 3c Diabetes?",
          answer: "Pancreas fails to make insulin. Scientific name: Pancreatogenic Diabetes.",
          category: "Overview"
      },
      {
          question: "What causes Type 3c Diabetes?",
          answer: "Pancreatitis destroys insulin cells.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Type 3c Diabetes?",
          answer: "Caused by alcohol or high triglycerides, not autoimmunity.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Type 3c Diabetes?",
          answer: "Very low fat, zero alcohol.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Type 3c Diabetes?",
          answer: "Digestive enzymes, Vitamin A.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Type 3c Diabetes?",
          answer: "Absolute alcohol cessation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Type 3c Diabetes typically become a concern?",
          answer: "Type 3c Diabetes typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Very low fat, zero alcohol.\" help with Type 3c Diabetes?",
          answer: "Yes \u2014 Very low fat, zero alcohol. is one of the natural approaches recommended for Type 3c Diabetes.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Type 3c Diabetes?",
          answer: "Type 3c Diabetes is also referred to as Pancreatogenic Diabetes.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'high-cholesterol',
    title: 'High Cholesterol',
    category: CategoryType.METABOLIC,
    shortDesc: 'Plaque builds in arteries.',
    problem: 'Trans fats + low fiber raise LDL.',
    solution: 'Oats, beans, olive oil, nuts.',
    naturalApproach: ['Oats, beans, olive oil, nuts.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'High Cholesterol | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about High Cholesterol (Hypercholesterolemia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'High Cholesterol',
    scientificName: 'Hypercholesterolemia',
    cause: 'Trans fats + low fiber raise LDL.',
    hiddenFact: 'Your liver makes 75% of your cholesterol; diet is only part.',
    whenAge: '40s+',
    herbs: 'Red Yeast Rice, Psyllium.',
    lifestyle: 'Cardio exercise; lose belly fat.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is High Cholesterol?",
          answer: "Plaque builds in arteries. Scientific name: Hypercholesterolemia.",
          category: "Overview"
      },
      {
          question: "What causes High Cholesterol?",
          answer: "Trans fats + low fiber raise LDL.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about High Cholesterol?",
          answer: "Your liver makes 75% of your cholesterol; diet is only part.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with High Cholesterol?",
          answer: "Oats, beans, olive oil, nuts.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with High Cholesterol?",
          answer: "Red Yeast Rice, Psyllium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help High Cholesterol?",
          answer: "Cardio exercise; lose belly fat.",
          category: "Lifestyle"
      },
      {
          question: "At what age does High Cholesterol typically become a concern?",
          answer: "High Cholesterol typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Oats, beans, olive oil, nuts.\" help with High Cholesterol?",
          answer: "Yes \u2014 Oats, beans, olive oil, nuts. is one of the natural approaches recommended for High Cholesterol.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for High Cholesterol?",
          answer: "High Cholesterol is also referred to as Hypercholesterolemia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gout',
    title: 'Gout',
    category: CategoryType.METABOLIC,
    shortDesc: 'Severe joint pain (big toe).',
    problem: 'High purines (meat/beer) form joint crystals.',
    solution: 'Low purine, low fructose, low alcohol.',
    naturalApproach: ['Low purine, low fructose, low alcohol.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gout | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gout (Gouty Arthritis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gout',
    scientificName: 'Gouty Arthritis',
    cause: 'High purines (meat/beer) form joint crystals.',
    hiddenFact: 'Historically called the \'disease of kings\' due to rich diets.',
    whenAge: '40s+ (Men)',
    herbs: 'Cherries, Celery seed, Vit C.',
    lifestyle: 'Drink 3L water daily; lose weight.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gout?",
          answer: "Severe joint pain (big toe). Scientific name: Gouty Arthritis.",
          category: "Overview"
      },
      {
          question: "What causes Gout?",
          answer: "High purines (meat/beer) form joint crystals.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gout?",
          answer: "Historically called the 'disease of kings' due to rich diets.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gout?",
          answer: "Low purine, low fructose, low alcohol.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gout?",
          answer: "Cherries, Celery seed, Vit C.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gout?",
          answer: "Drink 3L water daily; lose weight.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gout typically become a concern?",
          answer: "Gout typically becomes a concern around 40s+ (Men).",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low purine, low fructose, low alcohol.\" help with Gout?",
          answer: "Yes \u2014 Low purine, low fructose, low alcohol. is one of the natural approaches recommended for Gout.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gout?",
          answer: "Gout is also referred to as Gouty Arthritis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dark-neckskin-tags',
    title: 'Dark Neck/Skin Tags',
    category: CategoryType.METABOLIC,
    shortDesc: 'Dark, velvety skin folds.',
    problem: 'High insulin thickens skin folds.',
    solution: 'Low-carb, zero sugar diet.',
    naturalApproach: ['Low-carb, zero sugar diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Dark Neck/Skin Tags | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Dark Neck/Skin Tags (Acanthosis Nigricans): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Dark Neck/Skin Tags',
    scientificName: 'Acanthosis Nigricans',
    cause: 'High insulin thickens skin folds.',
    hiddenFact: 'A visible warning sign of severe insulin resistance.',
    whenAge: '30s+',
    herbs: 'Inositol, Berberine.',
    lifestyle: 'Weight loss; insulin management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Dark Neck/Skin Tags?",
          answer: "Dark, velvety skin folds. Scientific name: Acanthosis Nigricans.",
          category: "Overview"
      },
      {
          question: "What causes Dark Neck/Skin Tags?",
          answer: "High insulin thickens skin folds.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Dark Neck/Skin Tags?",
          answer: "A visible warning sign of severe insulin resistance.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Dark Neck/Skin Tags?",
          answer: "Low-carb, zero sugar diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Dark Neck/Skin Tags?",
          answer: "Inositol, Berberine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Dark Neck/Skin Tags?",
          answer: "Weight loss; insulin management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Dark Neck/Skin Tags typically become a concern?",
          answer: "Dark Neck/Skin Tags typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-carb, zero sugar diet.\" help with Dark Neck/Skin Tags?",
          answer: "Yes \u2014 Low-carb, zero sugar diet. is one of the natural approaches recommended for Dark Neck/Skin Tags.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Dark Neck/Skin Tags?",
          answer: "Dark Neck/Skin Tags is also referred to as Acanthosis Nigricans.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'cholesterol-deposits',
    title: 'Cholesterol Deposits',
    category: CategoryType.METABOLIC,
    shortDesc: 'Yellow fat under eyes/skin.',
    problem: 'High blood fat deposits under skin.',
    solution: 'Strict low-saturated fat, high fiber.',
    naturalApproach: ['Strict low-saturated fat, high fiber.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Cholesterol Deposits | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Cholesterol Deposits (Xanthelasma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Cholesterol Deposits',
    scientificName: 'Xanthelasma',
    cause: 'High blood fat deposits under skin.',
    hiddenFact: 'Can indicate a genetic cholesterol disorder (FH).',
    whenAge: '40s+',
    herbs: 'Plant Sterols, Niacin.',
    lifestyle: 'Cardio exercise; weight loss.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Cholesterol Deposits?",
          answer: "Yellow fat under eyes/skin. Scientific name: Xanthelasma.",
          category: "Overview"
      },
      {
          question: "What causes Cholesterol Deposits?",
          answer: "High blood fat deposits under skin.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Cholesterol Deposits?",
          answer: "Can indicate a genetic cholesterol disorder (FH).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Cholesterol Deposits?",
          answer: "Strict low-saturated fat, high fiber.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Cholesterol Deposits?",
          answer: "Plant Sterols, Niacin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Cholesterol Deposits?",
          answer: "Cardio exercise; weight loss.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Cholesterol Deposits typically become a concern?",
          answer: "Cholesterol Deposits typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Strict low-saturated fat, high fiber.\" help with Cholesterol Deposits?",
          answer: "Yes \u2014 Strict low-saturated fat, high fiber. is one of the natural approaches recommended for Cholesterol Deposits.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Cholesterol Deposits?",
          answer: "Cholesterol Deposits is also referred to as Xanthelasma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'high-bp',
    title: 'High BP',
    category: CategoryType.CARDIO,
    shortDesc: 'Blood pressure too high.',
    problem: 'High salt/stress stiffens arteries.',
    solution: 'DASH diet (high potassium, low sodium).',
    naturalApproach: ['DASH diet (high potassium, low sodium).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'High BP | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about High BP (Hypertension): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'High BP',
    scientificName: 'Hypertension',
    cause: 'High salt/stress stiffens arteries.',
    hiddenFact: 'Silent killer; often zero symptoms until a stroke.',
    whenAge: '40s+',
    herbs: 'Garlic, Hibiscus, Magnesium.',
    lifestyle: 'Stress management; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is High BP?",
          answer: "Blood pressure too high. Scientific name: Hypertension.",
          category: "Overview"
      },
      {
          question: "What causes High BP?",
          answer: "High salt/stress stiffens arteries.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about High BP?",
          answer: "Silent killer; often zero symptoms until a stroke.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with High BP?",
          answer: "DASH diet (high potassium, low sodium).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with High BP?",
          answer: "Garlic, Hibiscus, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help High BP?",
          answer: "Stress management; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does High BP typically become a concern?",
          answer: "High BP typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"DASH diet (high potassium, low sodium).\" help with High BP?",
          answer: "Yes \u2014 DASH diet (high potassium, low sodium). is one of the natural approaches recommended for High BP.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for High BP?",
          answer: "High BP is also referred to as Hypertension.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'heart-disease',
    title: 'Heart Disease',
    category: CategoryType.CARDIO,
    shortDesc: 'Heart arteries narrowed.',
    problem: 'Plaque builds up from bad fats/smoking.',
    solution: 'Mediterranean diet, Omega-3s.',
    naturalApproach: ['Mediterranean diet, Omega-3s.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Heart Disease | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Heart Disease (Coronary Heart Disease): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Heart Disease',
    scientificName: 'Coronary Heart Disease',
    cause: 'Plaque builds up from bad fats/smoking.',
    hiddenFact: 'Gum disease bacteria are found inside heart plaque.',
    whenAge: '50s+',
    herbs: 'CoQ10, Niacin, Fish Oil.',
    lifestyle: '150 mins/week cardio.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Heart Disease?",
          answer: "Heart arteries narrowed. Scientific name: Coronary Heart Disease.",
          category: "Overview"
      },
      {
          question: "What causes Heart Disease?",
          answer: "Plaque builds up from bad fats/smoking.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Heart Disease?",
          answer: "Gum disease bacteria are found inside heart plaque.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Heart Disease?",
          answer: "Mediterranean diet, Omega-3s.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Heart Disease?",
          answer: "CoQ10, Niacin, Fish Oil.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Heart Disease?",
          answer: "150 mins/week cardio.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Heart Disease typically become a concern?",
          answer: "Heart Disease typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Mediterranean diet, Omega-3s.\" help with Heart Disease?",
          answer: "Yes \u2014 Mediterranean diet, Omega-3s. is one of the natural approaches recommended for Heart Disease.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Heart Disease?",
          answer: "Heart Disease is also referred to as Coronary Heart Disease.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'heart-attack',
    title: 'Heart Attack',
    category: CategoryType.CARDIO,
    shortDesc: 'Heart muscle dies.',
    problem: 'Plaque ruptures, blocking heart blood flow.',
    solution: 'Heart-healthy diet post-attack.',
    naturalApproach: ['Heart-healthy diet post-attack.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Heart Attack | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Heart Attack (Myocardial Infarction): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Heart Attack',
    scientificName: 'Myocardial Infarction',
    cause: 'Plaque ruptures, blocking heart blood flow.',
    hiddenFact: 'Women\'s symptoms differ - jaw/back pain, nausea, not just chest.',
    whenAge: '50s+',
    herbs: 'Omega-3s, Magnesium.',
    lifestyle: 'Cardiac rehab; quit smoking/alcohol.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Heart Attack?",
          answer: "Heart muscle dies. Scientific name: Myocardial Infarction.",
          category: "Overview"
      },
      {
          question: "What causes Heart Attack?",
          answer: "Plaque ruptures, blocking heart blood flow.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Heart Attack?",
          answer: "Women's symptoms differ - jaw/back pain, nausea, not just chest.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Heart Attack?",
          answer: "Heart-healthy diet post-attack.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Heart Attack?",
          answer: "Omega-3s, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Heart Attack?",
          answer: "Cardiac rehab; quit smoking/alcohol.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Heart Attack typically become a concern?",
          answer: "Heart Attack typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Heart-healthy diet post-attack.\" help with Heart Attack?",
          answer: "Yes \u2014 Heart-healthy diet post-attack. is one of the natural approaches recommended for Heart Attack.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Heart Attack?",
          answer: "Heart Attack is also referred to as Myocardial Infarction.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'stroke',
    title: 'Stroke',
    category: CategoryType.CARDIO,
    shortDesc: 'Brain blood flow stops.',
    problem: 'Plaque or clot blocks blood to the brain.',
    solution: 'Low sodium, high antioxidant foods.',
    naturalApproach: ['Low sodium, high antioxidant foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Stroke | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Stroke (Cerebrovascular Accident): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Stroke',
    scientificName: 'Cerebrovascular Accident',
    cause: 'Plaque or clot blocks blood to the brain.',
    hiddenFact: '1.9 million brain cells die per minute during a stroke.',
    whenAge: '60s+',
    herbs: 'Ginkgo Biloba, Omega-3s.',
    lifestyle: 'BP control; daily walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Stroke?",
          answer: "Brain blood flow stops. Scientific name: Cerebrovascular Accident.",
          category: "Overview"
      },
      {
          question: "What causes Stroke?",
          answer: "Plaque or clot blocks blood to the brain.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Stroke?",
          answer: "1.9 million brain cells die per minute during a stroke.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Stroke?",
          answer: "Low sodium, high antioxidant foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Stroke?",
          answer: "Ginkgo Biloba, Omega-3s.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Stroke?",
          answer: "BP control; daily walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Stroke typically become a concern?",
          answer: "Stroke typically becomes a concern around 60s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low sodium, high antioxidant foods.\" help with Stroke?",
          answer: "Yes \u2014 Low sodium, high antioxidant foods. is one of the natural approaches recommended for Stroke.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Stroke?",
          answer: "Stroke is also referred to as Cerebrovascular Accident.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'angina',
    title: 'Angina',
    category: CategoryType.CARDIO,
    shortDesc: 'Chest pain on exertion.',
    problem: 'Heart arteries narrowed by plaque.',
    solution: 'Heart-healthy, low-fat diet.',
    naturalApproach: ['Heart-healthy, low-fat diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Angina | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Angina (Angina Pectoris): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Angina',
    scientificName: 'Angina Pectoris',
    cause: 'Heart arteries narrowed by plaque.',
    hiddenFact: 'Stable angina stops when you rest; unstable is a heart attack warning.',
    whenAge: '50s+',
    herbs: 'CoQ10, L-Carnitine, Magnesium.',
    lifestyle: 'Weight loss; cardio rehab.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Angina?",
          answer: "Chest pain on exertion. Scientific name: Angina Pectoris.",
          category: "Overview"
      },
      {
          question: "What causes Angina?",
          answer: "Heart arteries narrowed by plaque.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Angina?",
          answer: "Stable angina stops when you rest; unstable is a heart attack warning.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Angina?",
          answer: "Heart-healthy, low-fat diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Angina?",
          answer: "CoQ10, L-Carnitine, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Angina?",
          answer: "Weight loss; cardio rehab.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Angina typically become a concern?",
          answer: "Angina typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Heart-healthy, low-fat diet.\" help with Angina?",
          answer: "Yes \u2014 Heart-healthy, low-fat diet. is one of the natural approaches recommended for Angina.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Angina?",
          answer: "Angina is also referred to as Angina Pectoris.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'a-fib',
    title: 'A-Fib',
    category: CategoryType.CARDIO,
    shortDesc: 'Irregular heartbeat.',
    problem: 'Binge drinking, obesity, stress.',
    solution: 'Limit caffeine/alcohol; magnesium-rich.',
    naturalApproach: ['Limit caffeine/alcohol; magnesium-rich.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'A-Fib | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about A-Fib (Atrial Fibrillation): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'A-Fib',
    scientificName: 'Atrial Fibrillation',
    cause: 'Binge drinking, obesity, stress.',
    hiddenFact: 'Holiday Heart Syndrome is triggered by binge drinking.',
    whenAge: '50s+',
    herbs: 'Magnesium, Taurine, CoQ10.',
    lifestyle: 'Cut alcohol; manage stress.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is A-Fib?",
          answer: "Irregular heartbeat. Scientific name: Atrial Fibrillation.",
          category: "Overview"
      },
      {
          question: "What causes A-Fib?",
          answer: "Binge drinking, obesity, stress.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about A-Fib?",
          answer: "Holiday Heart Syndrome is triggered by binge drinking.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with A-Fib?",
          answer: "Limit caffeine/alcohol; magnesium-rich.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with A-Fib?",
          answer: "Magnesium, Taurine, CoQ10.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help A-Fib?",
          answer: "Cut alcohol; manage stress.",
          category: "Lifestyle"
      },
      {
          question: "At what age does A-Fib typically become a concern?",
          answer: "A-Fib typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Limit caffeine/alcohol; magnesium-rich.\" help with A-Fib?",
          answer: "Yes \u2014 Limit caffeine/alcohol; magnesium-rich. is one of the natural approaches recommended for A-Fib.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for A-Fib?",
          answer: "A-Fib is also referred to as Atrial Fibrillation.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'peripheral-artery',
    title: 'Peripheral Artery',
    category: CategoryType.CARDIO,
    shortDesc: 'Plaque in leg arteries.',
    problem: 'Smoking and poor diet block leg vessels.',
    solution: 'Low saturated fat, high fiber.',
    naturalApproach: ['Low saturated fat, high fiber.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Peripheral Artery | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Peripheral Artery (PAD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Peripheral Artery',
    scientificName: 'PAD',
    cause: 'Smoking and poor diet block leg vessels.',
    hiddenFact: 'Pain stops when you rest; walking pushes blood into new vessels.',
    whenAge: '60s+',
    herbs: 'Garlic, Ginkgo Biloba, Omega-3.',
    lifestyle: 'Smoking cessation; daily walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Peripheral Artery?",
          answer: "Plaque in leg arteries. Scientific name: PAD.",
          category: "Overview"
      },
      {
          question: "What causes Peripheral Artery?",
          answer: "Smoking and poor diet block leg vessels.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Peripheral Artery?",
          answer: "Pain stops when you rest; walking pushes blood into new vessels.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Peripheral Artery?",
          answer: "Low saturated fat, high fiber.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Peripheral Artery?",
          answer: "Garlic, Ginkgo Biloba, Omega-3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Peripheral Artery?",
          answer: "Smoking cessation; daily walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Peripheral Artery typically become a concern?",
          answer: "Peripheral Artery typically becomes a concern around 60s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low saturated fat, high fiber.\" help with Peripheral Artery?",
          answer: "Yes \u2014 Low saturated fat, high fiber. is one of the natural approaches recommended for Peripheral Artery.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Peripheral Artery?",
          answer: "Peripheral Artery is also referred to as PAD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'varicose-veins',
    title: 'Varicose Veins',
    category: CategoryType.CARDIO,
    shortDesc: 'Bulging, twisted leg veins.',
    problem: 'Standing too long; weak vein valves.',
    solution: 'High fiber (prevents straining).',
    naturalApproach: ['High fiber (prevents straining).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Varicose Veins | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Varicose Veins (Varicosities): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Varicose Veins',
    scientificName: 'Varicosities',
    cause: 'Standing too long; weak vein valves.',
    hiddenFact: 'Everyone has these veins; they only become \'varicose\' when swollen.',
    whenAge: '30s+',
    herbs: 'Horse Chestnut, Butcher\'s Broom.',
    lifestyle: 'Calf exercises; leg elevation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Varicose Veins?",
          answer: "Bulging, twisted leg veins. Scientific name: Varicosities.",
          category: "Overview"
      },
      {
          question: "What causes Varicose Veins?",
          answer: "Standing too long; weak vein valves.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Varicose Veins?",
          answer: "Everyone has these veins; they only become 'varicose' when swollen.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Varicose Veins?",
          answer: "High fiber (prevents straining).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Varicose Veins?",
          answer: "Horse Chestnut, Butcher's Broom.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Varicose Veins?",
          answer: "Calf exercises; leg elevation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Varicose Veins typically become a concern?",
          answer: "Varicose Veins typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber (prevents straining).\" help with Varicose Veins?",
          answer: "Yes \u2014 High fiber (prevents straining). is one of the natural approaches recommended for Varicose Veins.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Varicose Veins?",
          answer: "Varicose Veins is also referred to as Varicosities.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'leg-ulcers',
    title: 'Leg Ulcers',
    category: CategoryType.CARDIO,
    shortDesc: 'Skin rots from pooled blood.',
    problem: 'Sedentary lifestyle causes blood to pool in legs.',
    solution: 'High protein/zinc for wound healing.',
    naturalApproach: ['High protein/zinc for wound healing.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Leg Ulcers | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Leg Ulcers (Venous Stasis Ulcer): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Leg Ulcers',
    scientificName: 'Venous Stasis Ulcer',
    cause: 'Sedentary lifestyle causes blood to pool in legs.',
    hiddenFact: 'Compression socks are the only way to push blood back up.',
    whenAge: '60s+',
    herbs: 'Gotu Kola, Horse Chestnut.',
    lifestyle: 'Compression socks; walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Leg Ulcers?",
          answer: "Skin rots from pooled blood. Scientific name: Venous Stasis Ulcer.",
          category: "Overview"
      },
      {
          question: "What causes Leg Ulcers?",
          answer: "Sedentary lifestyle causes blood to pool in legs.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Leg Ulcers?",
          answer: "Compression socks are the only way to push blood back up.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Leg Ulcers?",
          answer: "High protein/zinc for wound healing.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Leg Ulcers?",
          answer: "Gotu Kola, Horse Chestnut.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Leg Ulcers?",
          answer: "Compression socks; walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Leg Ulcers typically become a concern?",
          answer: "Leg Ulcers typically becomes a concern around 60s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High protein/zinc for wound healing.\" help with Leg Ulcers?",
          answer: "Yes \u2014 High protein/zinc for wound healing. is one of the natural approaches recommended for Leg Ulcers.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Leg Ulcers?",
          answer: "Leg Ulcers is also referred to as Venous Stasis Ulcer.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'low-bp',
    title: 'Low BP',
    category: CategoryType.CARDIO,
    shortDesc: 'Blood pressure too low.',
    problem: 'Severe dehydration and lack of salt.',
    solution: 'Increase salt intake, hydrate well.',
    naturalApproach: ['Increase salt intake, hydrate well.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Low BP | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Low BP (Hypotension): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Low BP',
    scientificName: 'Hypotension',
    cause: 'Severe dehydration and lack of salt.',
    hiddenFact: 'Can cause fainting when standing up too fast (orthostatic).',
    whenAge: 'All ages',
    herbs: 'Licorice root, electrolytes.',
    lifestyle: 'Stand up slowly; avoid hot baths.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Low BP?",
          answer: "Blood pressure too low. Scientific name: Hypotension.",
          category: "Overview"
      },
      {
          question: "What causes Low BP?",
          answer: "Severe dehydration and lack of salt.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Low BP?",
          answer: "Can cause fainting when standing up too fast (orthostatic).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Low BP?",
          answer: "Increase salt intake, hydrate well.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Low BP?",
          answer: "Licorice root, electrolytes.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Low BP?",
          answer: "Stand up slowly; avoid hot baths.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Low BP typically become a concern?",
          answer: "Low BP typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Increase salt intake, hydrate well.\" help with Low BP?",
          answer: "Yes \u2014 Increase salt intake, hydrate well. is one of the natural approaches recommended for Low BP.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Low BP?",
          answer: "Low BP is also referred to as Hypotension.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'varicocele',
    title: 'Varicocele',
    category: CategoryType.CARDIO,
    shortDesc: 'Swollen veins in scrotum.',
    problem: 'Constipation/straining pools blood.',
    solution: 'High fiber, lots of water.',
    naturalApproach: ['High fiber, lots of water.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Varicocele | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Varicocele (Varicocele): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Varicocele',
    scientificName: 'Varicocele',
    cause: 'Constipation/straining pools blood.',
    hiddenFact: 'Groin hernias are 10x more common in men due to testicle descent.',
    whenAge: '20s-30s',
    herbs: 'Horse Chestnut, Butcher\'s Broom.',
    lifestyle: 'Regular exercise; avoid heavy lifting.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Varicocele?",
          answer: "Swollen veins in scrotum. Scientific name: Varicocele.",
          category: "Overview"
      },
      {
          question: "What causes Varicocele?",
          answer: "Constipation/straining pools blood.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Varicocele?",
          answer: "Groin hernias are 10x more common in men due to testicle descent.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Varicocele?",
          answer: "High fiber, lots of water.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Varicocele?",
          answer: "Horse Chestnut, Butcher's Broom.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Varicocele?",
          answer: "Regular exercise; avoid heavy lifting.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Varicocele typically become a concern?",
          answer: "Varicocele typically becomes a concern around 20s-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber, lots of water.\" help with Varicocele?",
          answer: "Yes \u2014 High fiber, lots of water. is one of the natural approaches recommended for Varicocele.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Varicocele?",
          answer: "Varicocele is also referred to as Varicocele.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dvt',
    title: 'DVT',
    category: CategoryType.CARDIO,
    shortDesc: 'Blood clot in leg.',
    problem: 'Sitting too long causes clot.',
    solution: 'Hydration, blood-thinning foods.',
    naturalApproach: ['Hydration, blood-thinning foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'DVT | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about DVT (Deep Vein Thrombosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'DVT',
    scientificName: 'Deep Vein Thrombosis',
    cause: 'Sitting too long causes clot.',
    hiddenFact: 'Clots in the leg can break off and lodge in the lung (embolism).',
    whenAge: '40s+',
    herbs: 'Nattokinase, Garlic, Ginger.',
    lifestyle: 'Walk every 2 hours on flights.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is DVT?",
          answer: "Blood clot in leg. Scientific name: Deep Vein Thrombosis.",
          category: "Overview"
      },
      {
          question: "What causes DVT?",
          answer: "Sitting too long causes clot.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about DVT?",
          answer: "Clots in the leg can break off and lodge in the lung (embolism).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with DVT?",
          answer: "Hydration, blood-thinning foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with DVT?",
          answer: "Nattokinase, Garlic, Ginger.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help DVT?",
          answer: "Walk every 2 hours on flights.",
          category: "Lifestyle"
      },
      {
          question: "At what age does DVT typically become a concern?",
          answer: "DVT typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Hydration, blood-thinning foods.\" help with DVT?",
          answer: "Yes \u2014 Hydration, blood-thinning foods. is one of the natural approaches recommended for DVT.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for DVT?",
          answer: "DVT is also referred to as Deep Vein Thrombosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'iron-overload',
    title: 'Iron Overload',
    category: CategoryType.CARDIO,
    shortDesc: 'Too much iron in body.',
    problem: 'Genetic issue rusts organs.',
    solution: 'Avoid iron supplements/red meat.',
    naturalApproach: ['Avoid iron supplements/red meat.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Iron Overload | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Iron Overload (Hemochromatosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Iron Overload',
    scientificName: 'Hemochromatosis',
    cause: 'Genetic issue rusts organs.',
    hiddenFact: 'Body absorbs excess iron; rusts the liver and heart.',
    whenAge: '40s+',
    herbs: 'None (avoid iron).',
    lifestyle: 'Regular blood donation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Iron Overload?",
          answer: "Too much iron in body. Scientific name: Hemochromatosis.",
          category: "Overview"
      },
      {
          question: "What causes Iron Overload?",
          answer: "Genetic issue rusts organs.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Iron Overload?",
          answer: "Body absorbs excess iron; rusts the liver and heart.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Iron Overload?",
          answer: "Avoid iron supplements/red meat.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Iron Overload?",
          answer: "None (avoid iron).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Iron Overload?",
          answer: "Regular blood donation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Iron Overload typically become a concern?",
          answer: "Iron Overload typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Avoid iron supplements/red meat.\" help with Iron Overload?",
          answer: "Yes \u2014 Avoid iron supplements/red meat. is one of the natural approaches recommended for Iron Overload.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Iron Overload?",
          answer: "Iron Overload is also referred to as Hemochromatosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'iron-deficiency',
    title: 'Iron Deficiency',
    category: CategoryType.CARDIO,
    shortDesc: 'Low red blood cells.',
    problem: 'Lack of meat/greens or blood loss.',
    solution: 'Red meat, spinach + Vitamin C.',
    naturalApproach: ['Red meat, spinach + Vitamin C.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Iron Deficiency | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Iron Deficiency (Iron Def. Anemia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Iron Deficiency',
    scientificName: 'Iron Def. Anemia',
    cause: 'Lack of meat/greens or blood loss.',
    hiddenFact: 'Craving ice (pagophagia) is a bizarre symptom of low iron.',
    whenAge: 'Women 20s-40s',
    herbs: 'Iron Bisglycinate, Vitamin C.',
    lifestyle: 'Don\'t drink tea with meals.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Iron Deficiency?",
          answer: "Low red blood cells. Scientific name: Iron Def. Anemia.",
          category: "Overview"
      },
      {
          question: "What causes Iron Deficiency?",
          answer: "Lack of meat/greens or blood loss.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Iron Deficiency?",
          answer: "Craving ice (pagophagia) is a bizarre symptom of low iron.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Iron Deficiency?",
          answer: "Red meat, spinach + Vitamin C.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Iron Deficiency?",
          answer: "Iron Bisglycinate, Vitamin C.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Iron Deficiency?",
          answer: "Don't drink tea with meals.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Iron Deficiency typically become a concern?",
          answer: "Iron Deficiency typically becomes a concern around Women 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Red meat, spinach + Vitamin C.\" help with Iron Deficiency?",
          answer: "Yes \u2014 Red meat, spinach + Vitamin C. is one of the natural approaches recommended for Iron Deficiency.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Iron Deficiency?",
          answer: "Iron Deficiency is also referred to as Iron Def. Anemia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'vitamin-d-deficiency',
    title: 'Vitamin D Deficiency',
    category: CategoryType.CARDIO,
    shortDesc: 'Low vitamin D levels.',
    problem: 'Indoor living blocks UV rays.',
    solution: 'Fatty fish, egg yolks.',
    naturalApproach: ['Fatty fish, egg yolks.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vitamin D Deficiency | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Vitamin D Deficiency (Hypovitaminosis D): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vitamin D Deficiency',
    scientificName: 'Hypovitaminosis D',
    cause: 'Indoor living blocks UV rays.',
    hiddenFact: 'It\'s a prohormone, not a true vitamin; affects immunity.',
    whenAge: 'All ages',
    herbs: 'Vitamin D3 + K2.',
    lifestyle: '15 mins midday sun exposure.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Vitamin D Deficiency?",
          answer: "Low vitamin D levels. Scientific name: Hypovitaminosis D.",
          category: "Overview"
      },
      {
          question: "What causes Vitamin D Deficiency?",
          answer: "Indoor living blocks UV rays.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Vitamin D Deficiency?",
          answer: "It's a prohormone, not a true vitamin; affects immunity.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Vitamin D Deficiency?",
          answer: "Fatty fish, egg yolks.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Vitamin D Deficiency?",
          answer: "Vitamin D3 + K2.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Vitamin D Deficiency?",
          answer: "15 mins midday sun exposure.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Vitamin D Deficiency typically become a concern?",
          answer: "Vitamin D Deficiency typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Fatty fish, egg yolks.\" help with Vitamin D Deficiency?",
          answer: "Yes \u2014 Fatty fish, egg yolks. is one of the natural approaches recommended for Vitamin D Deficiency.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Vitamin D Deficiency?",
          answer: "Vitamin D Deficiency is also referred to as Hypovitaminosis D.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'b12-deficiency',
    title: 'B12 Deficiency',
    category: CategoryType.CARDIO,
    shortDesc: 'Nerve/brain damage.',
    problem: 'Vegan diet or poor gut absorption.',
    solution: 'Meat, dairy, fortified foods.',
    naturalApproach: ['Meat, dairy, fortified foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'B12 Deficiency | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about B12 Deficiency (Vit B12 Deficiency): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'B12 Deficiency',
    scientificName: 'Vit B12 Deficiency',
    cause: 'Vegan diet or poor gut absorption.',
    hiddenFact: 'Causes a smooth, beefy red tongue and memory loss.',
    whenAge: 'All ages',
    herbs: 'Methylcobalamin (B12).',
    lifestyle: 'Treat gut issues; limit alcohol.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is B12 Deficiency?",
          answer: "Nerve/brain damage. Scientific name: Vit B12 Deficiency.",
          category: "Overview"
      },
      {
          question: "What causes B12 Deficiency?",
          answer: "Vegan diet or poor gut absorption.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about B12 Deficiency?",
          answer: "Causes a smooth, beefy red tongue and memory loss.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with B12 Deficiency?",
          answer: "Meat, dairy, fortified foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with B12 Deficiency?",
          answer: "Methylcobalamin (B12).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help B12 Deficiency?",
          answer: "Treat gut issues; limit alcohol.",
          category: "Lifestyle"
      },
      {
          question: "At what age does B12 Deficiency typically become a concern?",
          answer: "B12 Deficiency typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Meat, dairy, fortified foods.\" help with B12 Deficiency?",
          answer: "Yes \u2014 Meat, dairy, fortified foods. is one of the natural approaches recommended for B12 Deficiency.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for B12 Deficiency?",
          answer: "B12 Deficiency is also referred to as Vit B12 Deficiency.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'folate-deficiency',
    title: 'Folate Deficiency',
    category: CategoryType.CARDIO,
    shortDesc: 'Birth defects/anemia.',
    problem: 'Lack of greens or alcoholism.',
    solution: 'Spinach, lentils, avocados.',
    naturalApproach: ['Spinach, lentils, avocados.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Folate Deficiency | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Folate Deficiency (Vit B9 Deficiency): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Folate Deficiency',
    scientificName: 'Vit B9 Deficiency',
    cause: 'Lack of greens or alcoholism.',
    hiddenFact: 'Folate is destroyed by overcooking vegetables.',
    whenAge: 'All ages',
    herbs: 'Folic Acid (B9), Methylfolate.',
    lifestyle: 'Limit alcohol; cook veggies lightly.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Folate Deficiency?",
          answer: "Birth defects/anemia. Scientific name: Vit B9 Deficiency.",
          category: "Overview"
      },
      {
          question: "What causes Folate Deficiency?",
          answer: "Lack of greens or alcoholism.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Folate Deficiency?",
          answer: "Folate is destroyed by overcooking vegetables.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Folate Deficiency?",
          answer: "Spinach, lentils, avocados.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Folate Deficiency?",
          answer: "Folic Acid (B9), Methylfolate.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Folate Deficiency?",
          answer: "Limit alcohol; cook veggies lightly.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Folate Deficiency typically become a concern?",
          answer: "Folate Deficiency typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Spinach, lentils, avocados.\" help with Folate Deficiency?",
          answer: "Yes \u2014 Spinach, lentils, avocados. is one of the natural approaches recommended for Folate Deficiency.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Folate Deficiency?",
          answer: "Folate Deficiency is also referred to as Vit B9 Deficiency.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'acid-reflux',
    title: 'Acid Reflux',
    category: CategoryType.DIGESTION,
    shortDesc: 'Stomach acid in esophagus.',
    problem: 'Overeating/late meals weaken valve.',
    solution: 'Smaller meals; avoid spicy/fatty.',
    naturalApproach: ['Smaller meals; avoid spicy/fatty.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Acid Reflux | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Acid Reflux (GERD / GORD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Acid Reflux',
    scientificName: 'GERD / GORD',
    cause: 'Overeating/late meals weaken valve.',
    hiddenFact: 'Chronic untreated reflux can permanently damage vocal cords.',
    whenAge: '30s+',
    herbs: 'DGL Licorice, Aloe Vera, Slippery Elm.',
    lifestyle: 'Don\'t lie down 3 hrs after eating.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Acid Reflux?",
          answer: "Stomach acid in esophagus. Scientific name: GERD / GORD.",
          category: "Overview"
      },
      {
          question: "What causes Acid Reflux?",
          answer: "Overeating/late meals weaken valve.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Acid Reflux?",
          answer: "Chronic untreated reflux can permanently damage vocal cords.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Acid Reflux?",
          answer: "Smaller meals; avoid spicy/fatty.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Acid Reflux?",
          answer: "DGL Licorice, Aloe Vera, Slippery Elm.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Acid Reflux?",
          answer: "Don't lie down 3 hrs after eating.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Acid Reflux typically become a concern?",
          answer: "Acid Reflux typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Smaller meals; avoid spicy/fatty.\" help with Acid Reflux?",
          answer: "Yes \u2014 Smaller meals; avoid spicy/fatty. is one of the natural approaches recommended for Acid Reflux.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Acid Reflux?",
          answer: "Acid Reflux is also referred to as GERD / GORD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'ibs',
    title: 'IBS',
    category: CategoryType.DIGESTION,
    shortDesc: 'Stomach cramps, bowels.',
    problem: 'Stress/trigger foods disrupt gut-brain.',
    solution: 'Low-FODMAP diet; probiotics.',
    naturalApproach: ['Low-FODMAP diet; probiotics.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'IBS | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about IBS (Irritable Bowel Syndrome): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'IBS',
    scientificName: 'Irritable Bowel Syndrome',
    cause: 'Stress/trigger foods disrupt gut-brain.',
    hiddenFact: 'Gut microbes are completely different in IBS patients.',
    whenAge: '20s+',
    herbs: 'Peppermint oil, Fennel, Iberogast.',
    lifestyle: 'Stress reduction; yoga.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is IBS?",
          answer: "Stomach cramps, bowels. Scientific name: Irritable Bowel Syndrome.",
          category: "Overview"
      },
      {
          question: "What causes IBS?",
          answer: "Stress/trigger foods disrupt gut-brain.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about IBS?",
          answer: "Gut microbes are completely different in IBS patients.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with IBS?",
          answer: "Low-FODMAP diet; probiotics.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with IBS?",
          answer: "Peppermint oil, Fennel, Iberogast.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help IBS?",
          answer: "Stress reduction; yoga.",
          category: "Lifestyle"
      },
      {
          question: "At what age does IBS typically become a concern?",
          answer: "IBS typically becomes a concern around 20s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-FODMAP diet; probiotics.\" help with IBS?",
          answer: "Yes \u2014 Low-FODMAP diet; probiotics. is one of the natural approaches recommended for IBS.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for IBS?",
          answer: "IBS is also referred to as Irritable Bowel Syndrome.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'constipation',
    title: 'Constipation',
    category: CategoryType.DIGESTION,
    shortDesc: 'Hard, infrequent stools.',
    problem: 'Low fiber/dehydration slows colon.',
    solution: 'Psyllium husk, prunes, greens.',
    naturalApproach: ['Psyllium husk, prunes, greens.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Constipation | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Constipation (Obstipation): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Constipation',
    scientificName: 'Obstipation',
    cause: 'Low fiber/dehydration slows colon.',
    hiddenFact: 'Ignoring the urge stretches the colon, making it lazy.',
    whenAge: 'All ages',
    herbs: 'Magnesium Citrate, Senna.',
    lifestyle: 'Squatting position; daily walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Constipation?",
          answer: "Hard, infrequent stools. Scientific name: Obstipation.",
          category: "Overview"
      },
      {
          question: "What causes Constipation?",
          answer: "Low fiber/dehydration slows colon.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Constipation?",
          answer: "Ignoring the urge stretches the colon, making it lazy.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Constipation?",
          answer: "Psyllium husk, prunes, greens.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Constipation?",
          answer: "Magnesium Citrate, Senna.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Constipation?",
          answer: "Squatting position; daily walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Constipation typically become a concern?",
          answer: "Constipation typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Psyllium husk, prunes, greens.\" help with Constipation?",
          answer: "Yes \u2014 Psyllium husk, prunes, greens. is one of the natural approaches recommended for Constipation.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Constipation?",
          answer: "Constipation is also referred to as Obstipation.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'diverticulitis',
    title: 'Diverticulitis',
    category: CategoryType.DIGESTION,
    shortDesc: 'Infected pouches in colon.',
    problem: 'Low fiber causes pressure build-up.',
    solution: 'High-fiber diet (once healed).',
    naturalApproach: ['High-fiber diet (once healed).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Diverticulitis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Diverticulitis (Diverticular Disease): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Diverticulitis',
    scientificName: 'Diverticular Disease',
    cause: 'Low fiber causes pressure build-up.',
    hiddenFact: 'Seeds/nuts don\'t actually cause flare-ups (an old myth).',
    whenAge: '50s+',
    herbs: 'Probiotics, Slippery Elm.',
    lifestyle: 'Avoid seeds/nuts during flares (cautious).',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Diverticulitis?",
          answer: "Infected pouches in colon. Scientific name: Diverticular Disease.",
          category: "Overview"
      },
      {
          question: "What causes Diverticulitis?",
          answer: "Low fiber causes pressure build-up.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Diverticulitis?",
          answer: "Seeds/nuts don't actually cause flare-ups (an old myth).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Diverticulitis?",
          answer: "High-fiber diet (once healed).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Diverticulitis?",
          answer: "Probiotics, Slippery Elm.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Diverticulitis?",
          answer: "Avoid seeds/nuts during flares (cautious).",
          category: "Lifestyle"
      },
      {
          question: "At what age does Diverticulitis typically become a concern?",
          answer: "Diverticulitis typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High-fiber diet (once healed).\" help with Diverticulitis?",
          answer: "Yes \u2014 High-fiber diet (once healed). is one of the natural approaches recommended for Diverticulitis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Diverticulitis?",
          answer: "Diverticulitis is also referred to as Diverticular Disease.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'bowel-polyps',
    title: 'Bowel Polyps',
    category: CategoryType.DIGESTION,
    shortDesc: 'Growths in colon.',
    problem: 'Red meat/low fiber alters gut bacteria.',
    solution: 'High fiber, plant-based.',
    naturalApproach: ['High fiber, plant-based.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Bowel Polyps | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Bowel Polyps (Colorectal Polyps): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Bowel Polyps',
    scientificName: 'Colorectal Polyps',
    cause: 'Red meat/low fiber alters gut bacteria.',
    hiddenFact: 'Most are benign, but adenomas turn into cancer over 10 years.',
    whenAge: '50s+',
    herbs: 'Curcumin, Garlic, Green Tea.',
    lifestyle: 'Colonoscopies; daily exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Bowel Polyps?",
          answer: "Growths in colon. Scientific name: Colorectal Polyps.",
          category: "Overview"
      },
      {
          question: "What causes Bowel Polyps?",
          answer: "Red meat/low fiber alters gut bacteria.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Bowel Polyps?",
          answer: "Most are benign, but adenomas turn into cancer over 10 years.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Bowel Polyps?",
          answer: "High fiber, plant-based.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Bowel Polyps?",
          answer: "Curcumin, Garlic, Green Tea.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Bowel Polyps?",
          answer: "Colonoscopies; daily exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Bowel Polyps typically become a concern?",
          answer: "Bowel Polyps typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber, plant-based.\" help with Bowel Polyps?",
          answer: "Yes \u2014 High fiber, plant-based. is one of the natural approaches recommended for Bowel Polyps.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Bowel Polyps?",
          answer: "Bowel Polyps is also referred to as Colorectal Polyps.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'bowel-cancer',
    title: 'Bowel Cancer',
    category: CategoryType.DIGESTION,
    shortDesc: 'Cancer of colon/rectum.',
    problem: 'Processed meat/alcohol mutate DNA.',
    solution: 'High fiber, plant-heavy diet.',
    naturalApproach: ['High fiber, plant-heavy diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Bowel Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Bowel Cancer (Colorectal Carcinoma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Bowel Cancer',
    scientificName: 'Colorectal Carcinoma',
    cause: 'Processed meat/alcohol mutate DNA.',
    hiddenFact: 'Removing polyps during a colonoscopy prevents cancer.',
    whenAge: '50s+',
    herbs: 'Curcumin, Omega-3, Quercetin.',
    lifestyle: 'Exercise; limit alcohol.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Bowel Cancer?",
          answer: "Cancer of colon/rectum. Scientific name: Colorectal Carcinoma.",
          category: "Overview"
      },
      {
          question: "What causes Bowel Cancer?",
          answer: "Processed meat/alcohol mutate DNA.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Bowel Cancer?",
          answer: "Removing polyps during a colonoscopy prevents cancer.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Bowel Cancer?",
          answer: "High fiber, plant-heavy diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Bowel Cancer?",
          answer: "Curcumin, Omega-3, Quercetin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Bowel Cancer?",
          answer: "Exercise; limit alcohol.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Bowel Cancer typically become a concern?",
          answer: "Bowel Cancer typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber, plant-heavy diet.\" help with Bowel Cancer?",
          answer: "Yes \u2014 High fiber, plant-heavy diet. is one of the natural approaches recommended for Bowel Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Bowel Cancer?",
          answer: "Bowel Cancer is also referred to as Colorectal Carcinoma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'stomach-ulcer',
    title: 'Stomach Ulcer',
    category: CategoryType.DIGESTION,
    shortDesc: 'Sores in stomach lining.',
    problem: 'H. pylori bacteria + stress.',
    solution: 'Bone broth, cabbage juice.',
    naturalApproach: ['Bone broth, cabbage juice.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Stomach Ulcer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Stomach Ulcer (Peptic Ulcer / H. pylori): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Stomach Ulcer',
    scientificName: 'Peptic Ulcer / H. pylori',
    cause: 'H. pylori bacteria + stress.',
    hiddenFact: 'Stress doesn\'t cause ulcers, but makes them hurt more.',
    whenAge: '40s+',
    herbs: 'Mastic gum, Matula tea, Zinc Carnosine.',
    lifestyle: 'Cut alcohol/NSAIDs.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Stomach Ulcer?",
          answer: "Sores in stomach lining. Scientific name: Peptic Ulcer / H. pylori.",
          category: "Overview"
      },
      {
          question: "What causes Stomach Ulcer?",
          answer: "H. pylori bacteria + stress.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Stomach Ulcer?",
          answer: "Stress doesn't cause ulcers, but makes them hurt more.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Stomach Ulcer?",
          answer: "Bone broth, cabbage juice.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Stomach Ulcer?",
          answer: "Mastic gum, Matula tea, Zinc Carnosine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Stomach Ulcer?",
          answer: "Cut alcohol/NSAIDs.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Stomach Ulcer typically become a concern?",
          answer: "Stomach Ulcer typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Bone broth, cabbage juice.\" help with Stomach Ulcer?",
          answer: "Yes \u2014 Bone broth, cabbage juice. is one of the natural approaches recommended for Stomach Ulcer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Stomach Ulcer?",
          answer: "Stomach Ulcer is also referred to as Peptic Ulcer / H. pylori.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gallstones',
    title: 'Gallstones',
    category: CategoryType.DIGESTION,
    shortDesc: 'Stones in gallbladder.',
    problem: 'Rapid weight loss dumps cholesterol.',
    solution: 'Healthy fats gradually.',
    naturalApproach: ['Healthy fats gradually.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gallstones | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gallstones (Cholelithiasis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gallstones',
    scientificName: 'Cholelithiasis',
    cause: 'Rapid weight loss dumps cholesterol.',
    hiddenFact: 'Crash diets cause the liver to dump cholesterol into bile.',
    whenAge: '40s+ (Women)',
    herbs: 'Chanca Piedra, Peppermint, Milk Thistle.',
    lifestyle: 'Slow weight loss; daily exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gallstones?",
          answer: "Stones in gallbladder. Scientific name: Cholelithiasis.",
          category: "Overview"
      },
      {
          question: "What causes Gallstones?",
          answer: "Rapid weight loss dumps cholesterol.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gallstones?",
          answer: "Crash diets cause the liver to dump cholesterol into bile.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gallstones?",
          answer: "Healthy fats gradually.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gallstones?",
          answer: "Chanca Piedra, Peppermint, Milk Thistle.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gallstones?",
          answer: "Slow weight loss; daily exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gallstones typically become a concern?",
          answer: "Gallstones typically becomes a concern around 40s+ (Women).",
          category: "Age & Risk"
      },
      {
          question: "Does \"Healthy fats gradually.\" help with Gallstones?",
          answer: "Yes \u2014 Healthy fats gradually. is one of the natural approaches recommended for Gallstones.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gallstones?",
          answer: "Gallstones is also referred to as Cholelithiasis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'hemorrhoids',
    title: 'Hemorrhoids',
    category: CategoryType.DIGESTION,
    shortDesc: 'Swollen rectal veins/tears.',
    problem: 'Straining from hard stools.',
    solution: 'High fiber, lots of water.',
    naturalApproach: ['High fiber, lots of water.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Hemorrhoids | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Hemorrhoids (Haemorrhoids / Fissures): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Hemorrhoids',
    scientificName: 'Haemorrhoids / Fissures',
    cause: 'Straining from hard stools.',
    hiddenFact: 'Passing a stone is often compared to childbirth in pain scale.',
    whenAge: '30s+',
    herbs: 'Witch Hazel, Rutin, Psyllium.',
    lifestyle: 'Squatting stool; don\'t sit >5 mins.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Hemorrhoids?",
          answer: "Swollen rectal veins/tears. Scientific name: Haemorrhoids / Fissures.",
          category: "Overview"
      },
      {
          question: "What causes Hemorrhoids?",
          answer: "Straining from hard stools.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Hemorrhoids?",
          answer: "Passing a stone is often compared to childbirth in pain scale.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Hemorrhoids?",
          answer: "High fiber, lots of water.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Hemorrhoids?",
          answer: "Witch Hazel, Rutin, Psyllium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Hemorrhoids?",
          answer: "Squatting stool; don't sit >5 mins.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Hemorrhoids typically become a concern?",
          answer: "Hemorrhoids typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber, lots of water.\" help with Hemorrhoids?",
          answer: "Yes \u2014 High fiber, lots of water. is one of the natural approaches recommended for Hemorrhoids.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Hemorrhoids?",
          answer: "Hemorrhoids is also referred to as Haemorrhoids / Fissures.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'nafld-cirrhosis',
    title: 'NAFLD Cirrhosis',
    category: CategoryType.DIGESTION,
    shortDesc: 'Scarred liver.',
    problem: 'Late-stage scarring from alcohol/fat.',
    solution: 'Extreme low-fat, zero alcohol/sugar.',
    naturalApproach: ['Extreme low-fat, zero alcohol/sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'NAFLD Cirrhosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about NAFLD Cirrhosis (Liver Fibrosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'NAFLD Cirrhosis',
    scientificName: 'Liver Fibrosis',
    cause: 'Late-stage scarring from alcohol/fat.',
    hiddenFact: 'The liver can regenerate, but cirrhosis is irreversible.',
    whenAge: '50s+',
    herbs: 'Milk Thistle, NAC, SAM-e.',
    lifestyle: 'Absolute alcohol cessation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is NAFLD Cirrhosis?",
          answer: "Scarred liver. Scientific name: Liver Fibrosis.",
          category: "Overview"
      },
      {
          question: "What causes NAFLD Cirrhosis?",
          answer: "Late-stage scarring from alcohol/fat.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about NAFLD Cirrhosis?",
          answer: "The liver can regenerate, but cirrhosis is irreversible.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with NAFLD Cirrhosis?",
          answer: "Extreme low-fat, zero alcohol/sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with NAFLD Cirrhosis?",
          answer: "Milk Thistle, NAC, SAM-e.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help NAFLD Cirrhosis?",
          answer: "Absolute alcohol cessation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does NAFLD Cirrhosis typically become a concern?",
          answer: "NAFLD Cirrhosis typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Extreme low-fat, zero alcohol/sugar.\" help with NAFLD Cirrhosis?",
          answer: "Yes \u2014 Extreme low-fat, zero alcohol/sugar. is one of the natural approaches recommended for NAFLD Cirrhosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for NAFLD Cirrhosis?",
          answer: "NAFLD Cirrhosis is also referred to as Liver Fibrosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'fatty-pancreas',
    title: 'Fatty Pancreas',
    category: CategoryType.DIGESTION,
    shortDesc: 'Fat in pancreas.',
    problem: 'Obesity and high triglycerides.',
    solution: 'Diet-induced weight loss, low fat.',
    naturalApproach: ['Diet-induced weight loss, low fat.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Fatty Pancreas | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Fatty Pancreas (NAFP): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Fatty Pancreas',
    scientificName: 'NAFP',
    cause: 'Obesity and high triglycerides.',
    hiddenFact: 'Fat deposits restore insulin-producing function when lost.',
    whenAge: '40s+',
    herbs: 'Chromium, Berberine, Enzymes.',
    lifestyle: 'Weight loss; blood sugar control.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Fatty Pancreas?",
          answer: "Fat in pancreas. Scientific name: NAFP.",
          category: "Overview"
      },
      {
          question: "What causes Fatty Pancreas?",
          answer: "Obesity and high triglycerides.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Fatty Pancreas?",
          answer: "Fat deposits restore insulin-producing function when lost.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Fatty Pancreas?",
          answer: "Diet-induced weight loss, low fat.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Fatty Pancreas?",
          answer: "Chromium, Berberine, Enzymes.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Fatty Pancreas?",
          answer: "Weight loss; blood sugar control.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Fatty Pancreas typically become a concern?",
          answer: "Fatty Pancreas typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Diet-induced weight loss, low fat.\" help with Fatty Pancreas?",
          answer: "Yes \u2014 Diet-induced weight loss, low fat. is one of the natural approaches recommended for Fatty Pancreas.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Fatty Pancreas?",
          answer: "Fatty Pancreas is also referred to as NAFP.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'celiac-disease',
    title: 'Celiac Disease',
    category: CategoryType.DIGESTION,
    shortDesc: 'Gut damage from gluten.',
    problem: 'Gluten triggers immune attack.',
    solution: '100% strict gluten-free diet.',
    naturalApproach: ['100% strict gluten-free diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Celiac Disease | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Celiac Disease (Coeliac Disease): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Celiac Disease',
    scientificName: 'Coeliac Disease',
    cause: 'Gluten triggers immune attack.',
    hiddenFact: 'It\'s an immune reaction, not the same as gluten sensitivity.',
    whenAge: 'Infants+',
    herbs: 'Probiotics, L-Glutamine.',
    lifestyle: 'Avoid cross-contamination.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Celiac Disease?",
          answer: "Gut damage from gluten. Scientific name: Coeliac Disease.",
          category: "Overview"
      },
      {
          question: "What causes Celiac Disease?",
          answer: "Gluten triggers immune attack.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Celiac Disease?",
          answer: "It's an immune reaction, not the same as gluten sensitivity.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Celiac Disease?",
          answer: "100% strict gluten-free diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Celiac Disease?",
          answer: "Probiotics, L-Glutamine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Celiac Disease?",
          answer: "Avoid cross-contamination.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Celiac Disease typically become a concern?",
          answer: "Celiac Disease typically becomes a concern around Infants+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"100% strict gluten-free diet.\" help with Celiac Disease?",
          answer: "Yes \u2014 100% strict gluten-free diet. is one of the natural approaches recommended for Celiac Disease.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Celiac Disease?",
          answer: "Celiac Disease is also referred to as Coeliac Disease.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'crohns-uc',
    title: 'Crohn\'s / UC',
    category: CategoryType.DIGESTION,
    shortDesc: 'Gut inflammation/ulcers.',
    problem: 'Emulsifiers/sugar tear gut lining.',
    solution: 'Exclusive Enteral Nutrition; low-fiber.',
    naturalApproach: ['Exclusive Enteral Nutrition; low-fiber.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Crohn\'s / UC | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Crohn\'s / UC (IBD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Crohn\'s / UC',
    scientificName: 'IBD',
    cause: 'Emulsifiers/sugar tear gut lining.',
    hiddenFact: 'It can affect anywhere from mouth to anus.',
    whenAge: '20s-40s',
    herbs: 'Boswellia, Turmeric, Fish Oil.',
    lifestyle: 'Stop smoking; stress mgmt.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Crohn's / UC?",
          answer: "Gut inflammation/ulcers. Scientific name: IBD.",
          category: "Overview"
      },
      {
          question: "What causes Crohn's / UC?",
          answer: "Emulsifiers/sugar tear gut lining.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Crohn's / UC?",
          answer: "It can affect anywhere from mouth to anus.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Crohn's / UC?",
          answer: "Exclusive Enteral Nutrition; low-fiber.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Crohn's / UC?",
          answer: "Boswellia, Turmeric, Fish Oil.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Crohn's / UC?",
          answer: "Stop smoking; stress mgmt.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Crohn's / UC typically become a concern?",
          answer: "Crohn's / UC typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Exclusive Enteral Nutrition; low-fiber.\" help with Crohn's / UC?",
          answer: "Yes \u2014 Exclusive Enteral Nutrition; low-fiber. is one of the natural approaches recommended for Crohn's / UC.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Crohn's / UC?",
          answer: "Crohn's / UC is also referred to as IBD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'sibo',
    title: 'SIBO',
    category: CategoryType.DIGESTION,
    shortDesc: 'Bacteria in wrong place.',
    problem: 'Low motility lets bacteria climb.',
    solution: 'Specific Carb Diet (SCD) / Low-FODMAP.',
    naturalApproach: ['Specific Carb Diet (SCD) / Low-FODMAP.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'SIBO | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about SIBO (Small Intestine Bacterial Overgrowth): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'SIBO',
    scientificName: 'Small Intestine Bacterial Overgrowth',
    cause: 'Low motility lets bacteria climb.',
    hiddenFact: 'Antibiotics wipe out good bacteria, letting SIBO explode.',
    whenAge: '30s+',
    herbs: 'Oregano oil, Berberine, Allicin.',
    lifestyle: 'Prokinetics (ginger); meal spacing.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is SIBO?",
          answer: "Bacteria in wrong place. Scientific name: Small Intestine Bacterial Overgrowth.",
          category: "Overview"
      },
      {
          question: "What causes SIBO?",
          answer: "Low motility lets bacteria climb.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about SIBO?",
          answer: "Antibiotics wipe out good bacteria, letting SIBO explode.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with SIBO?",
          answer: "Specific Carb Diet (SCD) / Low-FODMAP.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with SIBO?",
          answer: "Oregano oil, Berberine, Allicin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help SIBO?",
          answer: "Prokinetics (ginger); meal spacing.",
          category: "Lifestyle"
      },
      {
          question: "At what age does SIBO typically become a concern?",
          answer: "SIBO typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Specific Carb Diet (SCD) / Low-FODMAP.\" help with SIBO?",
          answer: "Yes \u2014 Specific Carb Diet (SCD) / Low-FODMAP. is one of the natural approaches recommended for SIBO.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for SIBO?",
          answer: "SIBO is also referred to as Small Intestine Bacterial Overgrowth.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'histamine-intolerance',
    title: 'Histamine Intolerance',
    category: CategoryType.DIGESTION,
    shortDesc: 'Allergy-like symptoms.',
    problem: 'Poor diet lacks DAO enzyme.',
    solution: 'Avoid aged cheese, wine, leftovers.',
    naturalApproach: ['Avoid aged cheese, wine, leftovers.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Histamine Intolerance | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Histamine Intolerance (Histamine Intolerance): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Histamine Intolerance',
    scientificName: 'Histamine Intolerance',
    cause: 'Poor diet lacks DAO enzyme.',
    hiddenFact: 'Aged cheeses, wine, and leftovers are packed with histamine.',
    whenAge: '30s+',
    herbs: 'DAO enzyme supplements, Quercetin.',
    lifestyle: 'Gut healing; stress mgmt.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Histamine Intolerance?",
          answer: "Allergy-like symptoms. Scientific name: Histamine Intolerance.",
          category: "Overview"
      },
      {
          question: "What causes Histamine Intolerance?",
          answer: "Poor diet lacks DAO enzyme.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Histamine Intolerance?",
          answer: "Aged cheeses, wine, and leftovers are packed with histamine.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Histamine Intolerance?",
          answer: "Avoid aged cheese, wine, leftovers.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Histamine Intolerance?",
          answer: "DAO enzyme supplements, Quercetin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Histamine Intolerance?",
          answer: "Gut healing; stress mgmt.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Histamine Intolerance typically become a concern?",
          answer: "Histamine Intolerance typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Avoid aged cheese, wine, leftovers.\" help with Histamine Intolerance?",
          answer: "Yes \u2014 Avoid aged cheese, wine, leftovers. is one of the natural approaches recommended for Histamine Intolerance.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Histamine Intolerance?",
          answer: "Histamine Intolerance is also referred to as Histamine Intolerance.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'leaky-gut',
    title: 'Leaky Gut',
    category: CategoryType.DIGESTION,
    shortDesc: 'Holes in gut lining.',
    problem: 'Alcohol/junk food breaks gut glue.',
    solution: 'Bone broth, fermented foods.',
    naturalApproach: ['Bone broth, fermented foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Leaky Gut | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Leaky Gut (Intestinal Permeability): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Leaky Gut',
    scientificName: 'Intestinal Permeability',
    cause: 'Alcohol/junk food breaks gut glue.',
    hiddenFact: 'Lets undigested food particles leak directly into blood.',
    whenAge: 'All ages',
    herbs: 'L-Glutamine, Colostrum, Probiotics.',
    lifestyle: 'Cut alcohol/NSAIDs; manage stress.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Leaky Gut?",
          answer: "Holes in gut lining. Scientific name: Intestinal Permeability.",
          category: "Overview"
      },
      {
          question: "What causes Leaky Gut?",
          answer: "Alcohol/junk food breaks gut glue.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Leaky Gut?",
          answer: "Lets undigested food particles leak directly into blood.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Leaky Gut?",
          answer: "Bone broth, fermented foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Leaky Gut?",
          answer: "L-Glutamine, Colostrum, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Leaky Gut?",
          answer: "Cut alcohol/NSAIDs; manage stress.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Leaky Gut typically become a concern?",
          answer: "Leaky Gut typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Bone broth, fermented foods.\" help with Leaky Gut?",
          answer: "Yes \u2014 Bone broth, fermented foods. is one of the natural approaches recommended for Leaky Gut.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Leaky Gut?",
          answer: "Leaky Gut is also referred to as Intestinal Permeability.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pancreatitis',
    title: 'Pancreatitis',
    category: CategoryType.DIGESTION,
    shortDesc: 'Pancreas digests itself.',
    problem: 'Alcohol/high triglycerides.',
    solution: 'Strict low-fat, zero alcohol.',
    naturalApproach: ['Strict low-fat, zero alcohol.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Pancreatitis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Pancreatitis (Acute / Chronic Pancreatitis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Pancreatitis',
    scientificName: 'Acute / Chronic Pancreatitis',
    cause: 'Alcohol/high triglycerides.',
    hiddenFact: 'The pancreas literally digests itself with its own enzymes.',
    whenAge: '30s+',
    herbs: 'Digestive enzymes, antioxidants.',
    lifestyle: 'Absolute alcohol cessation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Pancreatitis?",
          answer: "Pancreas digests itself. Scientific name: Acute / Chronic Pancreatitis.",
          category: "Overview"
      },
      {
          question: "What causes Pancreatitis?",
          answer: "Alcohol/high triglycerides.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Pancreatitis?",
          answer: "The pancreas literally digests itself with its own enzymes.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Pancreatitis?",
          answer: "Strict low-fat, zero alcohol.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Pancreatitis?",
          answer: "Digestive enzymes, antioxidants.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Pancreatitis?",
          answer: "Absolute alcohol cessation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Pancreatitis typically become a concern?",
          answer: "Pancreatitis typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Strict low-fat, zero alcohol.\" help with Pancreatitis?",
          answer: "Yes \u2014 Strict low-fat, zero alcohol. is one of the natural approaches recommended for Pancreatitis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Pancreatitis?",
          answer: "Pancreatitis is also referred to as Acute / Chronic Pancreatitis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'stomach-cancer',
    title: 'Stomach Cancer',
    category: CategoryType.DIGESTION,
    shortDesc: 'Cancer of stomach.',
    problem: 'High salt/smoked meats feed H. pylori.',
    solution: 'Fresh foods, high antioxidants.',
    naturalApproach: ['Fresh foods, high antioxidants.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Stomach Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Stomach Cancer (Gastric Carcinoma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Stomach Cancer',
    scientificName: 'Gastric Carcinoma',
    cause: 'High salt/smoked meats feed H. pylori.',
    hiddenFact: 'Rates are highest in Japan/Korea due to salted foods.',
    whenAge: '50s+',
    herbs: 'Green Tea extract, Curcumin, Garlic.',
    lifestyle: 'Treat H. pylori; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Stomach Cancer?",
          answer: "Cancer of stomach. Scientific name: Gastric Carcinoma.",
          category: "Overview"
      },
      {
          question: "What causes Stomach Cancer?",
          answer: "High salt/smoked meats feed H. pylori.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Stomach Cancer?",
          answer: "Rates are highest in Japan/Korea due to salted foods.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Stomach Cancer?",
          answer: "Fresh foods, high antioxidants.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Stomach Cancer?",
          answer: "Green Tea extract, Curcumin, Garlic.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Stomach Cancer?",
          answer: "Treat H. pylori; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Stomach Cancer typically become a concern?",
          answer: "Stomach Cancer typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Fresh foods, high antioxidants.\" help with Stomach Cancer?",
          answer: "Yes \u2014 Fresh foods, high antioxidants. is one of the natural approaches recommended for Stomach Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Stomach Cancer?",
          answer: "Stomach Cancer is also referred to as Gastric Carcinoma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'esophagitis',
    title: 'Esophagitis',
    category: CategoryType.DIGESTION,
    shortDesc: 'Acid burns esophagus.',
    problem: 'Chronic acid reflux burns cells.',
    solution: 'Weight loss, small meals, low acid.',
    naturalApproach: ['Weight loss, small meals, low acid.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Esophagitis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Esophagitis (Barrett\'s Esophagus / Cancer): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Esophagitis',
    scientificName: 'Barrett\'s Esophagus / Cancer',
    cause: 'Chronic acid reflux burns cells.',
    hiddenFact: 'Acid reflux changing cells is a major hidden cancer cause.',
    whenAge: '50s+',
    herbs: 'DGL Licorice, Aloe Vera.',
    lifestyle: 'Don\'t lie down after eating.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Esophagitis?",
          answer: "Acid burns esophagus. Scientific name: Barrett's Esophagus / Cancer.",
          category: "Overview"
      },
      {
          question: "What causes Esophagitis?",
          answer: "Chronic acid reflux burns cells.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Esophagitis?",
          answer: "Acid reflux changing cells is a major hidden cancer cause.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Esophagitis?",
          answer: "Weight loss, small meals, low acid.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Esophagitis?",
          answer: "DGL Licorice, Aloe Vera.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Esophagitis?",
          answer: "Don't lie down after eating.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Esophagitis typically become a concern?",
          answer: "Esophagitis typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Weight loss, small meals, low acid.\" help with Esophagitis?",
          answer: "Yes \u2014 Weight loss, small meals, low acid. is one of the natural approaches recommended for Esophagitis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Esophagitis?",
          answer: "Esophagitis is also referred to as Barrett's Esophagus / Cancer.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gastritis',
    title: 'Gastritis',
    category: CategoryType.DIGESTION,
    shortDesc: 'Stomach lining inflamed.',
    problem: 'Spicy food, alcohol, coffee.',
    solution: 'Bland diet, cabbage juice.',
    naturalApproach: ['Bland diet, cabbage juice.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gastritis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gastritis (Erosive Gastritis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gastritis',
    scientificName: 'Erosive Gastritis',
    cause: 'Spicy food, alcohol, coffee.',
    hiddenFact: 'H. pylori survives acid by creating an ammonia cloud.',
    whenAge: '30s+',
    herbs: 'Slippery Elm, Marshmallow Root, Zinc.',
    lifestyle: 'Cut alcohol/NSAIDs; manage stress.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gastritis?",
          answer: "Stomach lining inflamed. Scientific name: Erosive Gastritis.",
          category: "Overview"
      },
      {
          question: "What causes Gastritis?",
          answer: "Spicy food, alcohol, coffee.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gastritis?",
          answer: "H. pylori survives acid by creating an ammonia cloud.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gastritis?",
          answer: "Bland diet, cabbage juice.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gastritis?",
          answer: "Slippery Elm, Marshmallow Root, Zinc.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gastritis?",
          answer: "Cut alcohol/NSAIDs; manage stress.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gastritis typically become a concern?",
          answer: "Gastritis typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Bland diet, cabbage juice.\" help with Gastritis?",
          answer: "Yes \u2014 Bland diet, cabbage juice. is one of the natural approaches recommended for Gastritis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gastritis?",
          answer: "Gastritis is also referred to as Erosive Gastritis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'anal-fissure',
    title: 'Anal Fissure',
    category: CategoryType.DIGESTION,
    shortDesc: 'Tear in anal lining.',
    problem: 'Straining from low-fiber diet.',
    solution: 'High fiber, lots of water.',
    naturalApproach: ['High fiber, lots of water.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Anal Fissure | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Anal Fissure (Fissure in Ano): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Anal Fissure',
    scientificName: 'Fissure in Ano',
    cause: 'Straining from low-fiber diet.',
    hiddenFact: 'Often misdiagnosed as hemorrhoids, but it\'s a literal cut.',
    whenAge: '30s+',
    herbs: 'Witch Hazel, Sitz baths.',
    lifestyle: 'Squatting position; stool softeners.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Anal Fissure?",
          answer: "Tear in anal lining. Scientific name: Fissure in Ano.",
          category: "Overview"
      },
      {
          question: "What causes Anal Fissure?",
          answer: "Straining from low-fiber diet.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Anal Fissure?",
          answer: "Often misdiagnosed as hemorrhoids, but it's a literal cut.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Anal Fissure?",
          answer: "High fiber, lots of water.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Anal Fissure?",
          answer: "Witch Hazel, Sitz baths.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Anal Fissure?",
          answer: "Squatting position; stool softeners.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Anal Fissure typically become a concern?",
          answer: "Anal Fissure typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber, lots of water.\" help with Anal Fissure?",
          answer: "Yes \u2014 High fiber, lots of water. is one of the natural approaches recommended for Anal Fissure.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Anal Fissure?",
          answer: "Anal Fissure is also referred to as Fissure in Ano.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'eoe',
    title: 'EoE',
    category: CategoryType.DIGESTION,
    shortDesc: 'Allergies swarm esophagus.',
    problem: 'Severe food allergies.',
    solution: 'Six-food Elimination Diet.',
    naturalApproach: ['Six-food Elimination Diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'EoE | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about EoE (Eosinophilic Esophagitis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'EoE',
    scientificName: 'Eosinophilic Esophagitis',
    cause: 'Severe food allergies.',
    hiddenFact: 'White blood cells swarm the esophagus, causing choking.',
    whenAge: 'Kids-30s',
    herbs: 'Fish Oil, Quercetin, Zinc.',
    lifestyle: 'Allergy testing; chew thoroughly.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is EoE?",
          answer: "Allergies swarm esophagus. Scientific name: Eosinophilic Esophagitis.",
          category: "Overview"
      },
      {
          question: "What causes EoE?",
          answer: "Severe food allergies.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about EoE?",
          answer: "White blood cells swarm the esophagus, causing choking.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with EoE?",
          answer: "Six-food Elimination Diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with EoE?",
          answer: "Fish Oil, Quercetin, Zinc.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help EoE?",
          answer: "Allergy testing; chew thoroughly.",
          category: "Lifestyle"
      },
      {
          question: "At what age does EoE typically become a concern?",
          answer: "EoE typically becomes a concern around Kids-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Six-food Elimination Diet.\" help with EoE?",
          answer: "Yes \u2014 Six-food Elimination Diet. is one of the natural approaches recommended for EoE.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for EoE?",
          answer: "EoE is also referred to as Eosinophilic Esophagitis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gluten-sensitivity',
    title: 'Gluten Sensitivity',
    category: CategoryType.DIGESTION,
    shortDesc: 'Bloating/brain fog from wheat.',
    problem: 'Eating wheat causes inflammation.',
    solution: 'Remove gluten/wheat completely.',
    naturalApproach: ['Remove gluten/wheat completely.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gluten Sensitivity | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gluten Sensitivity (Non-Celiac Gluten Sensitivity): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gluten Sensitivity',
    scientificName: 'Non-Celiac Gluten Sensitivity',
    cause: 'Eating wheat causes inflammation.',
    hiddenFact: 'Can develop suddenly to foods eaten safely for years.',
    whenAge: 'All ages',
    herbs: 'Probiotics, L-Glutamine.',
    lifestyle: 'Read labels for hidden wheat.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gluten Sensitivity?",
          answer: "Bloating/brain fog from wheat. Scientific name: Non-Celiac Gluten Sensitivity.",
          category: "Overview"
      },
      {
          question: "What causes Gluten Sensitivity?",
          answer: "Eating wheat causes inflammation.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gluten Sensitivity?",
          answer: "Can develop suddenly to foods eaten safely for years.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gluten Sensitivity?",
          answer: "Remove gluten/wheat completely.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gluten Sensitivity?",
          answer: "Probiotics, L-Glutamine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gluten Sensitivity?",
          answer: "Read labels for hidden wheat.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gluten Sensitivity typically become a concern?",
          answer: "Gluten Sensitivity typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Remove gluten/wheat completely.\" help with Gluten Sensitivity?",
          answer: "Yes \u2014 Remove gluten/wheat completely. is one of the natural approaches recommended for Gluten Sensitivity.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gluten Sensitivity?",
          answer: "Gluten Sensitivity is also referred to as Non-Celiac Gluten Sensitivity.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'vitamin-k-deficiency',
    title: 'Vitamin K Deficiency',
    category: CategoryType.DIGESTION,
    shortDesc: 'Blood won\'t clot.',
    problem: 'Long-term antibiotics/fat malabsorption.',
    solution: 'Dark leafy greens (kale, spinach).',
    naturalApproach: ['Dark leafy greens (kale, spinach).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vitamin K Deficiency | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Vitamin K Deficiency (Hypovitaminosis K): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vitamin K Deficiency',
    scientificName: 'Hypovitaminosis K',
    cause: 'Long-term antibiotics/fat malabsorption.',
    hiddenFact: 'Fat is required to absorb Vit K; low-fat diets cause deficiency.',
    whenAge: 'All ages',
    herbs: 'Vitamin K2, Bile acids.',
    lifestyle: 'Eat healthy fats to absorb Vit K.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Vitamin K Deficiency?",
          answer: "Blood won't clot. Scientific name: Hypovitaminosis K.",
          category: "Overview"
      },
      {
          question: "What causes Vitamin K Deficiency?",
          answer: "Long-term antibiotics/fat malabsorption.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Vitamin K Deficiency?",
          answer: "Fat is required to absorb Vit K; low-fat diets cause deficiency.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Vitamin K Deficiency?",
          answer: "Dark leafy greens (kale, spinach).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Vitamin K Deficiency?",
          answer: "Vitamin K2, Bile acids.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Vitamin K Deficiency?",
          answer: "Eat healthy fats to absorb Vit K.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Vitamin K Deficiency typically become a concern?",
          answer: "Vitamin K Deficiency typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Dark leafy greens (kale, spinach).\" help with Vitamin K Deficiency?",
          answer: "Yes \u2014 Dark leafy greens (kale, spinach). is one of the natural approaches recommended for Vitamin K Deficiency.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Vitamin K Deficiency?",
          answer: "Vitamin K Deficiency is also referred to as Hypovitaminosis K.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'malnutrition',
    title: 'Malnutrition',
    category: CategoryType.DIGESTION,
    shortDesc: 'Lack of calories/nutrients.',
    problem: 'Starvation or empty calorie junk.',
    solution: 'Nutrient-dense whole foods.',
    naturalApproach: ['Nutrient-dense whole foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Malnutrition | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Malnutrition (Nutritional Deficiency): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Malnutrition',
    scientificName: 'Nutritional Deficiency',
    cause: 'Starvation or empty calorie junk.',
    hiddenFact: 'Can cause a swollen belly (kwashiorkor) despite starvation.',
    whenAge: 'All ages',
    herbs: 'Multivitamins, Iron, Zinc.',
    lifestyle: 'Access to regular balanced meals.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Malnutrition?",
          answer: "Lack of calories/nutrients. Scientific name: Nutritional Deficiency.",
          category: "Overview"
      },
      {
          question: "What causes Malnutrition?",
          answer: "Starvation or empty calorie junk.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Malnutrition?",
          answer: "Can cause a swollen belly (kwashiorkor) despite starvation.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Malnutrition?",
          answer: "Nutrient-dense whole foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Malnutrition?",
          answer: "Multivitamins, Iron, Zinc.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Malnutrition?",
          answer: "Access to regular balanced meals.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Malnutrition typically become a concern?",
          answer: "Malnutrition typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Nutrient-dense whole foods.\" help with Malnutrition?",
          answer: "Yes \u2014 Nutrient-dense whole foods. is one of the natural approaches recommended for Malnutrition.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Malnutrition?",
          answer: "Malnutrition is also referred to as Nutritional Deficiency.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dehydration',
    title: 'Dehydration',
    category: CategoryType.DIGESTION,
    shortDesc: 'Lack of body water.',
    problem: 'Replacing water with soda/caffeine.',
    solution: '3L water daily, electrolytes.',
    naturalApproach: ['3L water daily, electrolytes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Dehydration | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Dehydration (Hypohydration): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Dehydration',
    scientificName: 'Hypohydration',
    cause: 'Replacing water with soda/caffeine.',
    hiddenFact: 'Thirst is a late sign; dark urine is an early warning.',
    whenAge: 'All ages',
    herbs: 'Electrolyte powders, Coconut water.',
    lifestyle: 'Carry water bottle; avoid hot sun.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Dehydration?",
          answer: "Lack of body water. Scientific name: Hypohydration.",
          category: "Overview"
      },
      {
          question: "What causes Dehydration?",
          answer: "Replacing water with soda/caffeine.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Dehydration?",
          answer: "Thirst is a late sign; dark urine is an early warning.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Dehydration?",
          answer: "3L water daily, electrolytes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Dehydration?",
          answer: "Electrolyte powders, Coconut water.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Dehydration?",
          answer: "Carry water bottle; avoid hot sun.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Dehydration typically become a concern?",
          answer: "Dehydration typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"3L water daily, electrolytes.\" help with Dehydration?",
          answer: "Yes \u2014 3L water daily, electrolytes. is one of the natural approaches recommended for Dehydration.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Dehydration?",
          answer: "Dehydration is also referred to as Hypohydration.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'heatstroke',
    title: 'Heatstroke',
    category: CategoryType.DIGESTION,
    shortDesc: 'Body overheats.',
    problem: 'Extreme heat without water.',
    solution: 'Hydrate with electrolytes.',
    naturalApproach: ['Hydrate with electrolytes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Heatstroke | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Heatstroke (Hyperthermia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Heatstroke',
    scientificName: 'Hyperthermia',
    cause: 'Extreme heat without water.',
    hiddenFact: 'Sweat stops; the brain\'s thermostat fails.',
    whenAge: 'All ages',
    herbs: 'Electrolytes, Salt tabs.',
    lifestyle: 'Acclimatize to heat; take shade breaks.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Heatstroke?",
          answer: "Body overheats. Scientific name: Hyperthermia.",
          category: "Overview"
      },
      {
          question: "What causes Heatstroke?",
          answer: "Extreme heat without water.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Heatstroke?",
          answer: "Sweat stops; the brain's thermostat fails.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Heatstroke?",
          answer: "Hydrate with electrolytes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Heatstroke?",
          answer: "Electrolytes, Salt tabs.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Heatstroke?",
          answer: "Acclimatize to heat; take shade breaks.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Heatstroke typically become a concern?",
          answer: "Heatstroke typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Hydrate with electrolytes.\" help with Heatstroke?",
          answer: "Yes \u2014 Hydrate with electrolytes. is one of the natural approaches recommended for Heatstroke.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Heatstroke?",
          answer: "Heatstroke is also referred to as Hyperthermia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'bad-breath-gut',
    title: 'Bad Breath (Gut)',
    category: CategoryType.DIGESTION,
    shortDesc: 'Foul gut breath.',
    problem: 'H. pylori from contaminated food.',
    solution: 'Broccoli sprouts, no sugar.',
    naturalApproach: ['Broccoli sprouts, no sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Bad Breath (Gut) | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Bad Breath (Gut) (Helicobacter pylori Infection): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Bad Breath (Gut)',
    scientificName: 'Helicobacter pylori Infection',
    cause: 'H. pylori from contaminated food.',
    hiddenFact: '90% of bad breath originates from the tongue or gut, not teeth.',
    whenAge: '30s+',
    herbs: 'Matula tea, Mastic gum, Probiotics.',
    lifestyle: 'Treat H. pylori; brush tongue.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Bad Breath (Gut)?",
          answer: "Foul gut breath. Scientific name: Helicobacter pylori Infection.",
          category: "Overview"
      },
      {
          question: "What causes Bad Breath (Gut)?",
          answer: "H. pylori from contaminated food.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Bad Breath (Gut)?",
          answer: "90% of bad breath originates from the tongue or gut, not teeth.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Bad Breath (Gut)?",
          answer: "Broccoli sprouts, no sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Bad Breath (Gut)?",
          answer: "Matula tea, Mastic gum, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Bad Breath (Gut)?",
          answer: "Treat H. pylori; brush tongue.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Bad Breath (Gut) typically become a concern?",
          answer: "Bad Breath (Gut) typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Broccoli sprouts, no sugar.\" help with Bad Breath (Gut)?",
          answer: "Yes \u2014 Broccoli sprouts, no sugar. is one of the natural approaches recommended for Bad Breath (Gut).",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Bad Breath (Gut)?",
          answer: "Bad Breath (Gut) is also referred to as Helicobacter pylori Infection.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'kwashiorkor',
    title: 'Kwashiorkor',
    category: CategoryType.DIGESTION,
    shortDesc: 'Swollen belly, starvation.',
    problem: 'Diet of only starches, zero protein.',
    solution: 'Re-introduce protein slowly.',
    naturalApproach: ['Re-introduce protein slowly.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Kwashiorkor | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Kwashiorkor (Severe Protein Malnutrition): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Kwashiorkor',
    scientificName: 'Severe Protein Malnutrition',
    cause: 'Diet of only starches, zero protein.',
    hiddenFact: 'Fluid leaks into the belly because there\'s no protein to hold it.',
    whenAge: 'Children',
    herbs: 'Plumpy\'nut, Multivitamins.',
    lifestyle: 'Nutritional rehabilitation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Kwashiorkor?",
          answer: "Swollen belly, starvation. Scientific name: Severe Protein Malnutrition.",
          category: "Overview"
      },
      {
          question: "What causes Kwashiorkor?",
          answer: "Diet of only starches, zero protein.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Kwashiorkor?",
          answer: "Fluid leaks into the belly because there's no protein to hold it.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Kwashiorkor?",
          answer: "Re-introduce protein slowly.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Kwashiorkor?",
          answer: "Plumpy'nut, Multivitamins.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Kwashiorkor?",
          answer: "Nutritional rehabilitation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Kwashiorkor typically become a concern?",
          answer: "Kwashiorkor typically becomes a concern around Children.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Re-introduce protein slowly.\" help with Kwashiorkor?",
          answer: "Yes \u2014 Re-introduce protein slowly. is one of the natural approaches recommended for Kwashiorkor.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Kwashiorkor?",
          answer: "Kwashiorkor is also referred to as Severe Protein Malnutrition.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'water-intoxication',
    title: 'Water Intoxication',
    category: CategoryType.DIGESTION,
    shortDesc: 'Blood sodium diluted.',
    problem: 'Drinking gallons of water without salt.',
    solution: 'Electrolyte-rich fluids, salty foods.',
    naturalApproach: ['Electrolyte-rich fluids, salty foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Water Intoxication | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Water Intoxication (Hyponatremia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Water Intoxication',
    scientificName: 'Hyponatremia',
    cause: 'Drinking gallons of water without salt.',
    hiddenFact: 'Drinking too much plain water can cause fatal brain swelling.',
    whenAge: 'Athletes',
    herbs: 'Sodium, Potassium tabs.',
    lifestyle: 'Drink to thirst during endurance events.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Water Intoxication?",
          answer: "Blood sodium diluted. Scientific name: Hyponatremia.",
          category: "Overview"
      },
      {
          question: "What causes Water Intoxication?",
          answer: "Drinking gallons of water without salt.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Water Intoxication?",
          answer: "Drinking too much plain water can cause fatal brain swelling.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Water Intoxication?",
          answer: "Electrolyte-rich fluids, salty foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Water Intoxication?",
          answer: "Sodium, Potassium tabs.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Water Intoxication?",
          answer: "Drink to thirst during endurance events.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Water Intoxication typically become a concern?",
          answer: "Water Intoxication typically becomes a concern around Athletes.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Electrolyte-rich fluids, salty foods.\" help with Water Intoxication?",
          answer: "Yes \u2014 Electrolyte-rich fluids, salty foods. is one of the natural approaches recommended for Water Intoxication.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Water Intoxication?",
          answer: "Water Intoxication is also referred to as Hyponatremia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'infertility',
    title: 'Infertility',
    category: CategoryType.WOMENS,
    shortDesc: 'Can\'t conceive.',
    problem: 'Obesity, poor diet, smoking.',
    solution: 'Mediterranean diet; high antioxidants.',
    naturalApproach: ['Mediterranean diet; high antioxidants.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Infertility | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Infertility (Subfertility): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Infertility',
    scientificName: 'Subfertility',
    cause: 'Obesity, poor diet, smoking.',
    hiddenFact: 'Male factor causes 40% of cases; it\'s not just female.',
    whenAge: '20s-40s',
    herbs: 'CoQ10, Zinc, Folate, Maca Root.',
    lifestyle: 'Lose 5-10% weight; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Infertility?",
          answer: "Can't conceive. Scientific name: Subfertility.",
          category: "Overview"
      },
      {
          question: "What causes Infertility?",
          answer: "Obesity, poor diet, smoking.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Infertility?",
          answer: "Male factor causes 40% of cases; it's not just female.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Infertility?",
          answer: "Mediterranean diet; high antioxidants.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Infertility?",
          answer: "CoQ10, Zinc, Folate, Maca Root.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Infertility?",
          answer: "Lose 5-10% weight; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Infertility typically become a concern?",
          answer: "Infertility typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Mediterranean diet; high antioxidants.\" help with Infertility?",
          answer: "Yes \u2014 Mediterranean diet; high antioxidants. is one of the natural approaches recommended for Infertility.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Infertility?",
          answer: "Infertility is also referred to as Subfertility.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'erectile-dysfunction',
    title: 'Erectile Dysfunction',
    category: CategoryType.WOMENS,
    shortDesc: 'Can\'t keep erection.',
    problem: 'Plaque blocks penile arteries.',
    solution: 'Dark chocolate, watermelon, pistachios.',
    naturalApproach: ['Dark chocolate, watermelon, pistachios.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Erectile Dysfunction | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Erectile Dysfunction (Impotence (ED)): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Erectile Dysfunction',
    scientificName: 'Impotence (ED)',
    cause: 'Plaque blocks penile arteries.',
    hiddenFact: 'It is often an early warning sign of heart disease (3-5 yrs prior).',
    whenAge: '40s+',
    herbs: 'L-Arginine, Panax Ginseng, Ashwagandha.',
    lifestyle: 'Cardio exercise; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Erectile Dysfunction?",
          answer: "Can't keep erection. Scientific name: Impotence (ED).",
          category: "Overview"
      },
      {
          question: "What causes Erectile Dysfunction?",
          answer: "Plaque blocks penile arteries.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Erectile Dysfunction?",
          answer: "It is often an early warning sign of heart disease (3-5 yrs prior).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Erectile Dysfunction?",
          answer: "Dark chocolate, watermelon, pistachios.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Erectile Dysfunction?",
          answer: "L-Arginine, Panax Ginseng, Ashwagandha.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Erectile Dysfunction?",
          answer: "Cardio exercise; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Erectile Dysfunction typically become a concern?",
          answer: "Erectile Dysfunction typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Dark chocolate, watermelon, pistachios.\" help with Erectile Dysfunction?",
          answer: "Yes \u2014 Dark chocolate, watermelon, pistachios. is one of the natural approaches recommended for Erectile Dysfunction.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Erectile Dysfunction?",
          answer: "Erectile Dysfunction is also referred to as Impotence (ED).",
          category: "Identification"
      }
  ],
  },
  {
    id: 'low-libido',
    title: 'Low Libido',
    category: CategoryType.WOMENS,
    shortDesc: 'No sex drive.',
    problem: 'Chronic stress, lack of zinc.',
    solution: 'Oysters, pumpkin seeds, healthy fats.',
    naturalApproach: ['Oysters, pumpkin seeds, healthy fats.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Low Libido | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Low Libido (Hypoactive Sexual Desire): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Low Libido',
    scientificName: 'Hypoactive Sexual Desire',
    cause: 'Chronic stress, lack of zinc.',
    hiddenFact: 'Can be a side effect of birth control pills.',
    whenAge: '30s+',
    herbs: 'Maca, Ashwagandha, Tribulus.',
    lifestyle: 'Adequate sleep; relationship counseling.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Low Libido?",
          answer: "No sex drive. Scientific name: Hypoactive Sexual Desire.",
          category: "Overview"
      },
      {
          question: "What causes Low Libido?",
          answer: "Chronic stress, lack of zinc.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Low Libido?",
          answer: "Can be a side effect of birth control pills.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Low Libido?",
          answer: "Oysters, pumpkin seeds, healthy fats.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Low Libido?",
          answer: "Maca, Ashwagandha, Tribulus.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Low Libido?",
          answer: "Adequate sleep; relationship counseling.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Low Libido typically become a concern?",
          answer: "Low Libido typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Oysters, pumpkin seeds, healthy fats.\" help with Low Libido?",
          answer: "Yes \u2014 Oysters, pumpkin seeds, healthy fats. is one of the natural approaches recommended for Low Libido.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Low Libido?",
          answer: "Low Libido is also referred to as Hypoactive Sexual Desire.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'menopause-symptoms',
    title: 'Menopause Symptoms',
    category: CategoryType.WOMENS,
    shortDesc: 'Hot flashes, mood swings.',
    problem: 'Estrogen drop.',
    solution: 'Phytoestrogens (soy, flax); no caffeine.',
    naturalApproach: ['Phytoestrogens (soy, flax); no caffeine.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Menopause Symptoms | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Menopause Symptoms (Menopause Transition): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Menopause Symptoms',
    scientificName: 'Menopause Transition',
    cause: 'Estrogen drop.',
    hiddenFact: 'Can cause brain fog and joint pain, not just hot flashes.',
    whenAge: '45-55',
    herbs: 'Black Cohosh, Red Clover, Evening Primrose.',
    lifestyle: 'Cool bedroom; stress management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Menopause Symptoms?",
          answer: "Hot flashes, mood swings. Scientific name: Menopause Transition.",
          category: "Overview"
      },
      {
          question: "What causes Menopause Symptoms?",
          answer: "Estrogen drop.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Menopause Symptoms?",
          answer: "Can cause brain fog and joint pain, not just hot flashes.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Menopause Symptoms?",
          answer: "Phytoestrogens (soy, flax); no caffeine.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Menopause Symptoms?",
          answer: "Black Cohosh, Red Clover, Evening Primrose.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Menopause Symptoms?",
          answer: "Cool bedroom; stress management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Menopause Symptoms typically become a concern?",
          answer: "Menopause Symptoms typically becomes a concern around 45-55.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Phytoestrogens (soy, flax); no caffeine.\" help with Menopause Symptoms?",
          answer: "Yes \u2014 Phytoestrogens (soy, flax); no caffeine. is one of the natural approaches recommended for Menopause Symptoms.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Menopause Symptoms?",
          answer: "Menopause Symptoms is also referred to as Menopause Transition.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pms-pmdd',
    title: 'PMS / PMDD',
    category: CategoryType.WOMENS,
    shortDesc: 'Extreme mood swings.',
    problem: 'Blood sugar swings + hormones.',
    solution: 'Magnesium-rich foods, low sugar/salt.',
    naturalApproach: ['Magnesium-rich foods, low sugar/salt.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'PMS / PMDD | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about PMS / PMDD (Premenstrual Dysphoric Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'PMS / PMDD',
    scientificName: 'Premenstrual Dysphoric Disorder',
    cause: 'Blood sugar swings + hormones.',
    hiddenFact: 'PMDD can cause suicidal thoughts right before a period.',
    whenAge: 'Teens-40s',
    herbs: 'Chasteberry (Vitex), Calcium, B6.',
    lifestyle: 'Regular exercise; sleep hygiene.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is PMS / PMDD?",
          answer: "Extreme mood swings. Scientific name: Premenstrual Dysphoric Disorder.",
          category: "Overview"
      },
      {
          question: "What causes PMS / PMDD?",
          answer: "Blood sugar swings + hormones.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about PMS / PMDD?",
          answer: "PMDD can cause suicidal thoughts right before a period.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with PMS / PMDD?",
          answer: "Magnesium-rich foods, low sugar/salt.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with PMS / PMDD?",
          answer: "Chasteberry (Vitex), Calcium, B6.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help PMS / PMDD?",
          answer: "Regular exercise; sleep hygiene.",
          category: "Lifestyle"
      },
      {
          question: "At what age does PMS / PMDD typically become a concern?",
          answer: "PMS / PMDD typically becomes a concern around Teens-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Magnesium-rich foods, low sugar/salt.\" help with PMS / PMDD?",
          answer: "Yes \u2014 Magnesium-rich foods, low sugar/salt. is one of the natural approaches recommended for PMS / PMDD.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for PMS / PMDD?",
          answer: "PMS / PMDD is also referred to as Premenstrual Dysphoric Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'endometriosis-pain',
    title: 'Endometriosis Pain',
    category: CategoryType.WOMENS,
    shortDesc: 'Womb tissue outside womb.',
    problem: 'Red meat/trans fats inflame tissue.',
    solution: 'Anti-inflammatory Omega-3s, flaxseeds.',
    naturalApproach: ['Anti-inflammatory Omega-3s, flaxseeds.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Endometriosis Pain | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Endometriosis Pain (Endometriosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Endometriosis Pain',
    scientificName: 'Endometriosis',
    cause: 'Red meat/trans fats inflame tissue.',
    hiddenFact: 'Takes an average of 7-10 years to diagnose.',
    whenAge: '20s-40s',
    herbs: 'Turmeric, Ginger, NAC.',
    lifestyle: 'Heat pads; stress reduction.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Endometriosis Pain?",
          answer: "Womb tissue outside womb. Scientific name: Endometriosis.",
          category: "Overview"
      },
      {
          question: "What causes Endometriosis Pain?",
          answer: "Red meat/trans fats inflame tissue.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Endometriosis Pain?",
          answer: "Takes an average of 7-10 years to diagnose.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Endometriosis Pain?",
          answer: "Anti-inflammatory Omega-3s, flaxseeds.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Endometriosis Pain?",
          answer: "Turmeric, Ginger, NAC.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Endometriosis Pain?",
          answer: "Heat pads; stress reduction.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Endometriosis Pain typically become a concern?",
          answer: "Endometriosis Pain typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory Omega-3s, flaxseeds.\" help with Endometriosis Pain?",
          answer: "Yes \u2014 Anti-inflammatory Omega-3s, flaxseeds. is one of the natural approaches recommended for Endometriosis Pain.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Endometriosis Pain?",
          answer: "Endometriosis Pain is also referred to as Endometriosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pre-eclampsia',
    title: 'Pre-Eclampsia',
    category: CategoryType.WOMENS,
    shortDesc: 'High BP in pregnancy.',
    problem: 'Poor diet/obesity triggers BP.',
    solution: 'High calcium, magnesium-rich foods.',
    naturalApproach: ['High calcium, magnesium-rich foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Pre-Eclampsia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Pre-Eclampsia (Toxemia of Pregnancy): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Pre-Eclampsia',
    scientificName: 'Toxemia of Pregnancy',
    cause: 'Poor diet/obesity triggers BP.',
    hiddenFact: 'Gestational hypertension typically resolves after delivery. Management focuses on monitoring and nutrition.',
    whenAge: 'Pregnancy',
    herbs: 'Baby Aspirin (med), Calcium, Magnesium.',
    lifestyle: 'BP monitoring; bed rest if severe.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Pre-Eclampsia?",
          answer: "High BP in pregnancy. Scientific name: Toxemia of Pregnancy.",
          category: "Overview"
      },
      {
          question: "What causes Pre-Eclampsia?",
          answer: "Poor diet/obesity triggers BP.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Pre-Eclampsia?",
          answer: "Only cure is delivering the baby, even if premature.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Pre-Eclampsia?",
          answer: "High calcium, magnesium-rich foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Pre-Eclampsia?",
          answer: "Baby Aspirin (med), Calcium, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Pre-Eclampsia?",
          answer: "BP monitoring; bed rest if severe.",
          category: "Lifestyle"
      },
      {
          question: "Is there a lesser-known fact about Pre-Eclampsia?",
          answer: "Gestational hypertension typically resolves after delivery. Management focuses on monitoring and nutrition.",
          category: "Hidden Fact"
      },
      {
          question: "At what age does Pre-Eclampsia typically become a concern?",
          answer: "Pre-Eclampsia typically becomes a concern around Pregnancy.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High calcium, magnesium-rich foods.\" help with Pre-Eclampsia?",
          answer: "Yes \u2014 High calcium, magnesium-rich foods. is one of the natural approaches recommended for Pre-Eclampsia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Pre-Eclampsia?",
          answer: "Pre-Eclampsia is also referred to as Toxemia of Pregnancy.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'fetal-alcohol-syndrome',
    title: 'Fetal Alcohol Syndrome',
    category: CategoryType.WOMENS,
    shortDesc: 'Baby brain damage.',
    problem: 'Alcohol poisons fetal brain.',
    solution: 'Nutrient-dense maternal diet.',
    naturalApproach: ['Nutrient-dense maternal diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Fetal Alcohol Syndrome | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Fetal Alcohol Syndrome (FASD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Fetal Alcohol Syndrome',
    scientificName: 'FASD',
    cause: 'Alcohol poisons fetal brain.',
    hiddenFact: 'Alcohol causes the most preventable birth defects.',
    whenAge: 'Pregnancy',
    herbs: 'Prenatal vitamins.',
    lifestyle: 'ZERO alcohol during pregnancy.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Fetal Alcohol Syndrome?",
          answer: "Baby brain damage. Scientific name: FASD.",
          category: "Overview"
      },
      {
          question: "What causes Fetal Alcohol Syndrome?",
          answer: "Alcohol poisons fetal brain.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Fetal Alcohol Syndrome?",
          answer: "Alcohol causes the most preventable birth defects.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Fetal Alcohol Syndrome?",
          answer: "Nutrient-dense maternal diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Fetal Alcohol Syndrome?",
          answer: "Prenatal vitamins.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Fetal Alcohol Syndrome?",
          answer: "ZERO alcohol during pregnancy.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Fetal Alcohol Syndrome typically become a concern?",
          answer: "Fetal Alcohol Syndrome typically becomes a concern around Pregnancy.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Nutrient-dense maternal diet.\" help with Fetal Alcohol Syndrome?",
          answer: "Yes \u2014 Nutrient-dense maternal diet. is one of the natural approaches recommended for Fetal Alcohol Syndrome.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Fetal Alcohol Syndrome?",
          answer: "Fetal Alcohol Syndrome is also referred to as FASD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'spina-bifida',
    title: 'Spina Bifida',
    category: CategoryType.WOMENS,
    shortDesc: 'Spine doesn\'t close.',
    problem: 'Lack of folate.',
    solution: 'Folate-rich greens, fortified foods.',
    naturalApproach: ['Folate-rich greens, fortified foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Spina Bifida | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Spina Bifida (Neural Tube Defects): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Spina Bifida',
    scientificName: 'Neural Tube Defects',
    cause: 'Lack of folate.',
    hiddenFact: 'Taking folic acid before conception prevents it entirely.',
    whenAge: 'Pregnancy',
    herbs: 'Folic Acid (400mcg) before conception.',
    lifestyle: 'Pre-conception prenatal vitamins.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Spina Bifida?",
          answer: "Spine doesn't close. Scientific name: Neural Tube Defects.",
          category: "Overview"
      },
      {
          question: "What causes Spina Bifida?",
          answer: "Lack of folate.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Spina Bifida?",
          answer: "Taking folic acid before conception prevents it entirely.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Spina Bifida?",
          answer: "Folate-rich greens, fortified foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Spina Bifida?",
          answer: "Folic Acid (400mcg) before conception.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Spina Bifida?",
          answer: "Pre-conception prenatal vitamins.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Spina Bifida typically become a concern?",
          answer: "Spina Bifida typically becomes a concern around Pregnancy.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Folate-rich greens, fortified foods.\" help with Spina Bifida?",
          answer: "Yes \u2014 Folate-rich greens, fortified foods. is one of the natural approaches recommended for Spina Bifida.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Spina Bifida?",
          answer: "Spina Bifida is also referred to as Neural Tube Defects.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'adenomyosis',
    title: 'Adenomyosis',
    category: CategoryType.WOMENS,
    shortDesc: 'Womb lining grows into muscle.',
    problem: 'Hormones (estrogen).',
    solution: 'Anti-inflammatory, high-fiber diet.',
    naturalApproach: ['Anti-inflammatory, high-fiber diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Adenomyosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Adenomyosis (Endometriosis Interna): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Adenomyosis',
    scientificName: 'Endometriosis Interna',
    cause: 'Hormones (estrogen).',
    hiddenFact: 'Causes a boggy, enlarged uterus and severe cramps.',
    whenAge: '30s-40s',
    herbs: 'Turmeric, Vitex, Omega-3.',
    lifestyle: 'Heat therapy; stress management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Adenomyosis?",
          answer: "Womb lining grows into muscle. Scientific name: Endometriosis Interna.",
          category: "Overview"
      },
      {
          question: "What causes Adenomyosis?",
          answer: "Hormones (estrogen).",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Adenomyosis?",
          answer: "Causes a boggy, enlarged uterus and severe cramps.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Adenomyosis?",
          answer: "Anti-inflammatory, high-fiber diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Adenomyosis?",
          answer: "Turmeric, Vitex, Omega-3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Adenomyosis?",
          answer: "Heat therapy; stress management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Adenomyosis typically become a concern?",
          answer: "Adenomyosis typically becomes a concern around 30s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory, high-fiber diet.\" help with Adenomyosis?",
          answer: "Yes \u2014 Anti-inflammatory, high-fiber diet. is one of the natural approaches recommended for Adenomyosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Adenomyosis?",
          answer: "Adenomyosis is also referred to as Endometriosis Interna.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'endometrial-cancer',
    title: 'Endometrial Cancer',
    category: CategoryType.WOMENS,
    shortDesc: 'Cancer of uterus.',
    problem: 'Obesity makes excess estrogen.',
    solution: 'High fiber (clears estrogen), low sugar.',
    naturalApproach: ['High fiber (clears estrogen), low sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Endometrial Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Endometrial Cancer (Uterine Cancer): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Endometrial Cancer',
    scientificName: 'Uterine Cancer',
    cause: 'Obesity makes excess estrogen.',
    hiddenFact: 'Fat cells convert androstenedione into estrogen.',
    whenAge: '50s+',
    herbs: 'DIM (cruciferous extract), Green Tea.',
    lifestyle: 'Weight loss; limit alcohol.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Endometrial Cancer?",
          answer: "Cancer of uterus. Scientific name: Uterine Cancer.",
          category: "Overview"
      },
      {
          question: "What causes Endometrial Cancer?",
          answer: "Obesity makes excess estrogen.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Endometrial Cancer?",
          answer: "Fat cells convert androstenedione into estrogen.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Endometrial Cancer?",
          answer: "High fiber (clears estrogen), low sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Endometrial Cancer?",
          answer: "DIM (cruciferous extract), Green Tea.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Endometrial Cancer?",
          answer: "Weight loss; limit alcohol.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Endometrial Cancer typically become a concern?",
          answer: "Endometrial Cancer typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber (clears estrogen), low sugar.\" help with Endometrial Cancer?",
          answer: "Yes \u2014 High fiber (clears estrogen), low sugar. is one of the natural approaches recommended for Endometrial Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Endometrial Cancer?",
          answer: "Endometrial Cancer is also referred to as Uterine Cancer.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'breast-cancer',
    title: 'Breast Cancer',
    category: CategoryType.WOMENS,
    shortDesc: 'Cancer of breast.',
    problem: 'Alcohol intake and obesity.',
    solution: 'High fiber, flaxseeds, low alcohol.',
    naturalApproach: ['High fiber, flaxseeds, low alcohol.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Breast Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Breast Cancer (Mammary Carcinoma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Breast Cancer',
    scientificName: 'Mammary Carcinoma',
    cause: 'Alcohol intake and obesity.',
    hiddenFact: 'Only 5-10% is strictly inherited; most are spontaneous.',
    whenAge: '40s+',
    herbs: 'DIM, Curcumin, Vitamin D.',
    lifestyle: 'Limit alcohol <1/day; maintain lean weight.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Breast Cancer?",
          answer: "Cancer of breast. Scientific name: Mammary Carcinoma.",
          category: "Overview"
      },
      {
          question: "What causes Breast Cancer?",
          answer: "Alcohol intake and obesity.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Breast Cancer?",
          answer: "Only 5-10% is strictly inherited; most are spontaneous.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Breast Cancer?",
          answer: "High fiber, flaxseeds, low alcohol.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Breast Cancer?",
          answer: "DIM, Curcumin, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Breast Cancer?",
          answer: "Limit alcohol <1/day; maintain lean weight.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Breast Cancer typically become a concern?",
          answer: "Breast Cancer typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High fiber, flaxseeds, low alcohol.\" help with Breast Cancer?",
          answer: "Yes \u2014 High fiber, flaxseeds, low alcohol. is one of the natural approaches recommended for Breast Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Breast Cancer?",
          answer: "Breast Cancer is also referred to as Mammary Carcinoma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gestational-diabetes',
    title: 'Gestational Diabetes',
    category: CategoryType.WOMENS,
    shortDesc: 'Diabetes in pregnancy.',
    problem: 'Pregnancy hormones cause insulin resistance.',
    solution: 'Low-carb pregnancy diet, small meals.',
    naturalApproach: ['Low-carb pregnancy diet, small meals.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gestational Diabetes | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gestational Diabetes (GDM): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gestational Diabetes',
    scientificName: 'GDM',
    cause: 'Pregnancy hormones cause insulin resistance.',
    hiddenFact: 'Goes away after birth, but mother has high T2DM risk later.',
    whenAge: '20s-30s',
    herbs: 'Magnesium, Vitamin D, Inositol.',
    lifestyle: 'Daily prenatal walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gestational Diabetes?",
          answer: "Diabetes during pregnancy. Scientific name: GDM.",
          category: "Overview"
      },
      {
          question: "What causes Gestational Diabetes?",
          answer: "Pregnancy hormones cause insulin resistance.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gestational Diabetes?",
          answer: "Increases mother's risk of T2DM by 50% later in life.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gestational Diabetes?",
          answer: "Low-carb pregnancy diet, small meals.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gestational Diabetes?",
          answer: "Magnesium, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gestational Diabetes?",
          answer: "Daily prenatal walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gestational Diabetes typically become a concern?",
          answer: "Gestational Diabetes typically becomes a concern around 20s-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-carb pregnancy diet, small meals.\" help with Gestational Diabetes?",
          answer: "Yes \u2014 Low-carb pregnancy diet, small meals. is one of the natural approaches recommended for Gestational Diabetes.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gestational Diabetes?",
          answer: "Gestational Diabetes is also referred to as GDM.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'baby-tooth-decay',
    title: 'Baby Tooth Decay',
    category: CategoryType.WOMENS,
    shortDesc: 'Toddler tooth rot.',
    problem: 'Bedtime milk bottles sit on teeth.',
    solution: 'Water only at bedtime.',
    naturalApproach: ['Water only at bedtime.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Baby Tooth Decay | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Baby Tooth Decay (Early Childhood Caries): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Baby Tooth Decay',
    scientificName: 'Early Childhood Caries',
    cause: 'Bedtime milk bottles sit on teeth.',
    hiddenFact: 'Putting baby to bed with milk/juice lets sugar sit all night.',
    whenAge: 'Toddlers',
    herbs: 'Fluoride (pediatric dentist).',
    lifestyle: 'Wipe gums; don\'t sleep with bottle.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Baby Tooth Decay?",
          answer: "Toddler tooth rot. Scientific name: Early Childhood Caries.",
          category: "Overview"
      },
      {
          question: "What causes Baby Tooth Decay?",
          answer: "Bedtime milk bottles sit on teeth.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Baby Tooth Decay?",
          answer: "Putting baby to bed with milk/juice lets sugar sit all night.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Baby Tooth Decay?",
          answer: "Water only at bedtime.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Baby Tooth Decay?",
          answer: "Fluoride (pediatric dentist).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Baby Tooth Decay?",
          answer: "Wipe gums; don't sleep with bottle.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Baby Tooth Decay typically become a concern?",
          answer: "Baby Tooth Decay typically becomes a concern around Toddlers.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Water only at bedtime.\" help with Baby Tooth Decay?",
          answer: "Yes \u2014 Water only at bedtime. is one of the natural approaches recommended for Baby Tooth Decay.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Baby Tooth Decay?",
          answer: "Baby Tooth Decay is also referred to as Early Childhood Caries.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'insomnia',
    title: 'Insomnia',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Can\'t fall/stay asleep.',
    problem: 'Caffeine/blue light ruin rhythm.',
    solution: 'Tart cherry juice, kiwi, no late caffeine.',
    naturalApproach: ['Tart cherry juice, kiwi, no late caffeine.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Insomnia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Insomnia (Sleep-onset/maintenance Insomnia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Insomnia',
    scientificName: 'Sleep-onset/maintenance Insomnia',
    cause: 'Caffeine/blue light ruin rhythm.',
    hiddenFact: 'Trying too hard to sleep causes performance anxiety in bed.',
    whenAge: 'All ages',
    herbs: 'Melatonin, Valerian root, Magnesium Glycinate.',
    lifestyle: 'Dark room; no screens 1 hr before bed.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Insomnia?",
          answer: "Can't fall/stay asleep. Scientific name: Sleep-onset/maintenance Insomnia.",
          category: "Overview"
      },
      {
          question: "What causes Insomnia?",
          answer: "Caffeine/blue light ruin rhythm.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Insomnia?",
          answer: "Trying too hard to sleep causes performance anxiety in bed.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Insomnia?",
          answer: "Tart cherry juice, kiwi, no late caffeine.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Insomnia?",
          answer: "Melatonin, Valerian root, Magnesium Glycinate.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Insomnia?",
          answer: "Dark room; no screens 1 hr before bed.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Insomnia typically become a concern?",
          answer: "Insomnia typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Insomnia?",
          answer: "Yes \u2014 Tart cherry juice, kiwi, no late caffeine. is one of the natural approaches recommended for Insomnia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Insomnia?",
          answer: "Insomnia is also referred to as Sleep-onset/maintenance Insomnia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'sleep-apnea',
    title: 'Sleep Apnea',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Breathing stops in sleep.',
    problem: 'Neck fat collapses airway.',
    solution: 'Anti-inflammatory diet for weight loss.',
    naturalApproach: ['Anti-inflammatory diet for weight loss.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Sleep Apnea | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Sleep Apnea (Obstructive Sleep Apnoea): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Sleep Apnea',
    scientificName: 'Obstructive Sleep Apnoea',
    cause: 'Neck fat collapses airway.',
    hiddenFact: 'Damages the heart because oxygen drops 100+ times a night.',
    whenAge: '40s+',
    herbs: 'Vitamin C, Fish Oil.',
    lifestyle: 'Weight loss; CPAP machine.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Sleep Apnea?",
          answer: "Breathing stops in sleep. Scientific name: Obstructive Sleep Apnoea.",
          category: "Overview"
      },
      {
          question: "What causes Sleep Apnea?",
          answer: "Neck fat collapses airway.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Sleep Apnea?",
          answer: "Damages the heart because oxygen drops 100+ times a night.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Sleep Apnea?",
          answer: "Anti-inflammatory diet for weight loss.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Sleep Apnea?",
          answer: "Vitamin C, Fish Oil.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Sleep Apnea?",
          answer: "Weight loss; CPAP machine.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Sleep Apnea typically become a concern?",
          answer: "Sleep Apnea typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory diet for weight loss.\" help with Sleep Apnea?",
          answer: "Yes \u2014 Anti-inflammatory diet for weight loss. is one of the natural approaches recommended for Sleep Apnea.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Sleep Apnea?",
          answer: "Sleep Apnea is also referred to as Obstructive Sleep Apnoea.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'migraines',
    title: 'Migraines',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Severe throbbing headache.',
    problem: 'Fasting/tyramine foods trigger spasms.',
    solution: 'Regular meals; avoid aged cheese/wine.',
    naturalApproach: ['Regular meals; avoid aged cheese/wine.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Migraines | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Migraines (Migraine Headache): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Migraines',
    scientificName: 'Migraine Headache',
    cause: 'Fasting/tyramine foods trigger spasms.',
    hiddenFact: 'It is a neurological disease, not just a bad headache.',
    whenAge: '20s-50s',
    herbs: 'Magnesium, Butterbur, B2 (Riboflavin).',
    lifestyle: 'Hydration; dark quiet room.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Migraines?",
          answer: "Severe throbbing headache. Scientific name: Migraine Headache.",
          category: "Overview"
      },
      {
          question: "What causes Migraines?",
          answer: "Fasting/tyramine foods trigger spasms.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Migraines?",
          answer: "It is a neurological disease, not just a bad headache.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Migraines?",
          answer: "Regular meals; avoid aged cheese/wine.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Migraines?",
          answer: "Magnesium, Butterbur, B2 (Riboflavin).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Migraines?",
          answer: "Hydration; dark quiet room.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Migraines typically become a concern?",
          answer: "Migraines typically becomes a concern around 20s-50s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Regular meals; avoid aged cheese/wine.\" help with Migraines?",
          answer: "Yes \u2014 Regular meals; avoid aged cheese/wine. is one of the natural approaches recommended for Migraines.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Migraines?",
          answer: "Migraines is also referred to as Migraine Headache.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'depression',
    title: 'Depression',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Low mood, energy.',
    problem: 'Poor diet/lack of sunlight.',
    solution: 'Omega-3s, tryptophan-rich foods (turkey).',
    naturalApproach: ['Omega-3s, tryptophan-rich foods (turkey).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Depression | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Depression (Major Depressive Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Depression',
    scientificName: 'Major Depressive Disorder',
    cause: 'Poor diet/lack of sunlight.',
    hiddenFact: 'Physical pain (backache) is a common hidden symptom.',
    whenAge: 'All ages',
    herbs: 'St. John\'s Wort, SAM-e, Vitamin D.',
    lifestyle: 'Sunlight exposure; 30 mins cardio.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Depression?",
          answer: "Low mood, energy. Scientific name: Major Depressive Disorder.",
          category: "Overview"
      },
      {
          question: "What causes Depression?",
          answer: "Poor diet/lack of sunlight.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Depression?",
          answer: "Physical pain (backache) is a common hidden symptom.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Depression?",
          answer: "Omega-3s, tryptophan-rich foods (turkey).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Depression?",
          answer: "St. John's Wort, SAM-e, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Depression?",
          answer: "Sunlight exposure; 30 mins cardio.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Depression typically become a concern?",
          answer: "Depression typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Depression?",
          answer: "Yes \u2014 Omega-3s, tryptophan-rich foods (turkey). is one of the natural approaches recommended for Depression.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Depression?",
          answer: "Depression is also referred to as Major Depressive Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'anxiety',
    title: 'Anxiety',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Excessive worry/panic.',
    problem: 'Caffeine/alcohol/blood sugar drops.',
    solution: 'Complex carbs, no skipping meals.',
    naturalApproach: ['Complex carbs, no skipping meals.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Anxiety | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Anxiety (Generalized Anxiety Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Anxiety',
    scientificName: 'Generalized Anxiety Disorder',
    cause: 'Caffeine/alcohol/blood sugar drops.',
    hiddenFact: 'Blood sugar crashes trigger the exact same panic response.',
    whenAge: 'Teens+',
    herbs: 'Ashwagandha, L-Theanine, Lemon Balm.',
    lifestyle: 'Cut caffeine; deep breathing therapy.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Anxiety?",
          answer: "Excessive worry/panic. Scientific name: Generalized Anxiety Disorder.",
          category: "Overview"
      },
      {
          question: "What causes Anxiety?",
          answer: "Caffeine/alcohol/blood sugar drops.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Anxiety?",
          answer: "Blood sugar crashes trigger the exact same panic response.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Anxiety?",
          answer: "Complex carbs, no skipping meals.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Anxiety?",
          answer: "Ashwagandha, L-Theanine, Lemon Balm.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Anxiety?",
          answer: "Cut caffeine; deep breathing therapy.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Anxiety typically become a concern?",
          answer: "Anxiety typically becomes a concern around Teens+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Complex carbs, no skipping meals.\" help with Anxiety?",
          answer: "Yes \u2014 Complex carbs, no skipping meals. is one of the natural approaches recommended for Anxiety.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Anxiety?",
          answer: "Anxiety is also referred to as Generalized Anxiety Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'cognitive-decline',
    title: 'Cognitive Decline',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Brain shrinkage.',
    problem: 'Sugar/plaque damage brain vessels.',
    solution: 'MIND diet (berries, leafy greens, nuts).',
    naturalApproach: ['MIND diet (berries, leafy greens, nuts).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Cognitive Decline | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Cognitive Decline (Dementia / Alzheimer\'s): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Cognitive Decline',
    scientificName: 'Dementia / Alzheimer\'s',
    cause: 'Sugar/plaque damage brain vessels.',
    hiddenFact: 'Alzheimer\'s starts in the brain 10-20 years before symptoms.',
    whenAge: '60s+',
    herbs: 'Lion\'s Mane, Ginkgo, Omega-3 DHA.',
    lifestyle: 'Learn new skills; daily exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Cognitive Decline?",
          answer: "Brain shrinkage. Scientific name: Dementia / Alzheimer's.",
          category: "Overview"
      },
      {
          question: "What causes Cognitive Decline?",
          answer: "Sugar/plaque damage brain vessels.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Cognitive Decline?",
          answer: "Alzheimer's starts in the brain 10-20 years before symptoms.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Cognitive Decline?",
          answer: "MIND diet (berries, leafy greens, nuts).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Cognitive Decline?",
          answer: "Lion's Mane, Ginkgo, Omega-3 DHA.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Cognitive Decline?",
          answer: "Learn new skills; daily exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Cognitive Decline typically become a concern?",
          answer: "Cognitive Decline typically becomes a concern around 60s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"MIND diet (berries, leafy greens, nuts).\" help with Cognitive Decline?",
          answer: "Yes \u2014 MIND diet (berries, leafy greens, nuts). is one of the natural approaches recommended for Cognitive Decline.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Cognitive Decline?",
          answer: "Cognitive Decline is also referred to as Dementia / Alzheimer's.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'adhd',
    title: 'ADHD',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Focus/hyperactivity.',
    problem: 'Artificial dyes/sugar worsen swings.',
    solution: 'High protein, low sugar, no food dyes.',
    naturalApproach: ['High protein, low sugar, no food dyes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'ADHD | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about ADHD (Attention Deficit Hyperactivity Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'ADHD',
    scientificName: 'Attention Deficit Hyperactivity Disorder',
    cause: 'Artificial dyes/sugar worsen swings.',
    hiddenFact: 'Caffeine often calms people with ADHD instead of stimulating them.',
    whenAge: 'Childhood+',
    herbs: 'Omega-3 EPA/DHA, Zinc, Iron.',
    lifestyle: 'Strict routines; outdoor play.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is ADHD?",
          answer: "Focus/hyperactivity. Scientific name: Attention Deficit Hyperactivity Disorder.",
          category: "Overview"
      },
      {
          question: "What causes ADHD?",
          answer: "Artificial dyes/sugar worsen swings.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about ADHD?",
          answer: "Caffeine often calms people with ADHD instead of stimulating them.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with ADHD?",
          answer: "High protein, low sugar, no food dyes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with ADHD?",
          answer: "Omega-3 EPA/DHA, Zinc, Iron.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help ADHD?",
          answer: "Strict routines; outdoor play.",
          category: "Lifestyle"
      },
      {
          question: "At what age does ADHD typically become a concern?",
          answer: "ADHD typically becomes a concern around Childhood+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High protein, low sugar, no food dyes.\" help with ADHD?",
          answer: "Yes \u2014 High protein, low sugar, no food dyes. is one of the natural approaches recommended for ADHD.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for ADHD?",
          answer: "ADHD is also referred to as Attention Deficit Hyperactivity Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'epilepsy-diet-cured',
    title: 'Epilepsy (Diet-Cured)',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Brain electrical storms.',
    problem: 'Standard drugs fail.',
    solution: 'Ketogenic Diet (high fat, zero carb).',
    naturalApproach: ['Ketogenic Diet (high fat, zero carb).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Epilepsy (Diet-Cured) | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Epilepsy (Diet-Cured) (Refractory Epilepsy): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Epilepsy (Diet-Cured)',
    scientificName: 'Refractory Epilepsy',
    cause: 'Standard drugs fail.',
    hiddenFact: 'The Ketogenic diet changes brain fuel, stopping seizures.',
    whenAge: 'Childhood',
    herbs: 'MCT Oil, Vitamin D.',
    lifestyle: 'Strict keto adherence; sleep tracking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Epilepsy (Diet-Cured)?",
          answer: "Brain electrical storms. Scientific name: Refractory Epilepsy.",
          category: "Overview"
      },
      {
          question: "What causes Epilepsy (Diet-Cured)?",
          answer: "Standard drugs fail.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Epilepsy (Diet-Cured)?",
          answer: "The Ketogenic diet changes brain fuel, stopping seizures.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Epilepsy (Diet-Cured)?",
          answer: "Ketogenic Diet (high fat, zero carb).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Epilepsy (Diet-Cured)?",
          answer: "MCT Oil, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Epilepsy (Diet-Cured)?",
          answer: "Strict keto adherence; sleep tracking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Epilepsy (Diet-Cured) typically become a concern?",
          answer: "Epilepsy (Diet-Cured) typically becomes a concern around Childhood.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Ketogenic Diet (high fat, zero carb).\" help with Epilepsy (Diet-Cured)?",
          answer: "Yes \u2014 Ketogenic Diet (high fat, zero carb). is one of the natural approaches recommended for Epilepsy (Diet-Cured).",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Epilepsy (Diet-Cured)?",
          answer: "Epilepsy (Diet-Cured) is also referred to as Refractory Epilepsy.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'restless-legs',
    title: 'Restless Legs',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Urge to move legs.',
    problem: 'Iron/magnesium deficiency.',
    solution: 'Iron-rich foods (red meat, spinach).',
    naturalApproach: ['Iron-rich foods (red meat, spinach).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Restless Legs | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Restless Legs (Restless Legs Syndrome (RLS)): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Restless Legs',
    scientificName: 'Restless Legs Syndrome (RLS)',
    cause: 'Iron/magnesium deficiency.',
    hiddenFact: 'Symptoms only happen at night or when lying still.',
    whenAge: '40s+',
    herbs: 'Iron Bisglycinate, Magnesium, Folate.',
    lifestyle: 'Cut caffeine; leg stretches before bed.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Restless Legs?",
          answer: "Urge to move legs. Scientific name: Restless Legs Syndrome (RLS).",
          category: "Overview"
      },
      {
          question: "What causes Restless Legs?",
          answer: "Iron/magnesium deficiency.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Restless Legs?",
          answer: "Symptoms only happen at night or when lying still.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Restless Legs?",
          answer: "Iron-rich foods (red meat, spinach).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Restless Legs?",
          answer: "Iron Bisglycinate, Magnesium, Folate.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Restless Legs?",
          answer: "Cut caffeine; leg stretches before bed.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Restless Legs typically become a concern?",
          answer: "Restless Legs typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Iron-rich foods (red meat, spinach).\" help with Restless Legs?",
          answer: "Yes \u2014 Iron-rich foods (red meat, spinach). is one of the natural approaches recommended for Restless Legs.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Restless Legs?",
          answer: "Restless Legs is also referred to as Restless Legs Syndrome (RLS).",
          category: "Identification"
      }
  ],
  },
  {
    id: 'wernicke-korsakoff',
    title: 'Wernicke-Korsakoff',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Memory loss, brain damage.',
    problem: 'Alcohol stops B1 absorption.',
    solution: 'Thiamine-rich foods (pork, sunflower seeds).',
    naturalApproach: ['Thiamine-rich foods (pork, sunflower seeds).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Wernicke-Korsakoff | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Wernicke-Korsakoff (Alcohol-Induced Brain Damage): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Wernicke-Korsakoff',
    scientificName: 'Alcohol-Induced Brain Damage',
    cause: 'Alcohol stops B1 absorption.',
    hiddenFact: 'Often misdiagnosed as dementia; completely reversible with B1.',
    whenAge: '40s+',
    herbs: 'High-dose IV/Oral Thiamine (B1).',
    lifestyle: 'Absolute alcohol cessation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Wernicke-Korsakoff?",
          answer: "Memory loss, brain damage. Scientific name: Alcohol-Induced Brain Damage.",
          category: "Overview"
      },
      {
          question: "What causes Wernicke-Korsakoff?",
          answer: "Alcohol stops B1 absorption.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Wernicke-Korsakoff?",
          answer: "Often misdiagnosed as dementia; completely reversible with B1.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Wernicke-Korsakoff?",
          answer: "Thiamine-rich foods (pork, sunflower seeds).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Wernicke-Korsakoff?",
          answer: "High-dose IV/Oral Thiamine (B1).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Wernicke-Korsakoff?",
          answer: "Absolute alcohol cessation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Wernicke-Korsakoff typically become a concern?",
          answer: "Wernicke-Korsakoff typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Wernicke-Korsakoff?",
          answer: "Yes \u2014 Thiamine-rich foods (pork, sunflower seeds). is one of the natural approaches recommended for Wernicke-Korsakoff.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Wernicke-Korsakoff?",
          answer: "Wernicke-Korsakoff is also referred to as Alcohol-Induced Brain Damage.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'tension-headache',
    title: 'Tension Headache',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Dull head pain.',
    problem: 'Dehydration, posture, skipped meals.',
    solution: 'Water, regular balanced meals.',
    naturalApproach: ['Water, regular balanced meals.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Tension Headache | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Tension Headache (Tension-Type Headache): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Tension Headache',
    scientificName: 'Tension-Type Headache',
    cause: 'Dehydration, posture, skipped meals.',
    hiddenFact: 'Tech neck from looking at phones strains neck muscles.',
    whenAge: 'All ages',
    herbs: 'Magnesium, Feverfew.',
    lifestyle: 'Posture correction; screen breaks.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Tension Headache?",
          answer: "Dull head pain. Scientific name: Tension-Type Headache.",
          category: "Overview"
      },
      {
          question: "What causes Tension Headache?",
          answer: "Dehydration, posture, skipped meals.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Tension Headache?",
          answer: "Tech neck from looking at phones strains neck muscles.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Tension Headache?",
          answer: "Water, regular balanced meals.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Tension Headache?",
          answer: "Magnesium, Feverfew.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Tension Headache?",
          answer: "Posture correction; screen breaks.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Tension Headache typically become a concern?",
          answer: "Tension Headache typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Water, regular balanced meals.\" help with Tension Headache?",
          answer: "Yes \u2014 Water, regular balanced meals. is one of the natural approaches recommended for Tension Headache.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Tension Headache?",
          answer: "Tension Headache is also referred to as Tension-Type Headache.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'chronic-fatigue',
    title: 'Chronic Fatigue',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Extreme exhaustion.',
    problem: 'Nutrient deficiency, stress, virus.',
    solution: 'Anti-inflammatory, nutrient-dense diet.',
    naturalApproach: ['Anti-inflammatory, nutrient-dense diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Chronic Fatigue | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Chronic Fatigue (ME/CFS): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Chronic Fatigue',
    scientificName: 'ME/CFS',
    cause: 'Nutrient deficiency, stress, virus.',
    hiddenFact: 'The pain is in the brain/nerves, even if the original injury healed.',
    whenAge: '20s-40s',
    herbs: 'CoQ10, D-Ribose, NADH, B12.',
    lifestyle: 'Pacing; strict sleep hygiene.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Chronic Fatigue?",
          answer: "Extreme exhaustion. Scientific name: ME/CFS.",
          category: "Overview"
      },
      {
          question: "What causes Chronic Fatigue?",
          answer: "Nutrient deficiency, stress, virus.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Chronic Fatigue?",
          answer: "The pain is in the brain/nerves, even if the original injury healed.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Chronic Fatigue?",
          answer: "Anti-inflammatory, nutrient-dense diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Chronic Fatigue?",
          answer: "CoQ10, D-Ribose, NADH, B12.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Chronic Fatigue?",
          answer: "Pacing; strict sleep hygiene.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Chronic Fatigue typically become a concern?",
          answer: "Chronic Fatigue typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory, nutrient-dense diet.\" help with Chronic Fatigue?",
          answer: "Yes \u2014 Anti-inflammatory, nutrient-dense diet. is one of the natural approaches recommended for Chronic Fatigue.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Chronic Fatigue?",
          answer: "Chronic Fatigue is also referred to as ME/CFS.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'tinnitus',
    title: 'Tinnitus',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Phantom ear noise.',
    problem: 'High salt/caffeine alters ear fluid.',
    solution: 'Low sodium, low caffeine diet.',
    naturalApproach: ['Low sodium, low caffeine diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Tinnitus | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Tinnitus (Ringing in Ears): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Tinnitus',
    scientificName: 'Ringing in Ears',
    cause: 'High salt/caffeine alters ear fluid.',
    hiddenFact: 'There is no cure; sound therapy retrains the brain to ignore it.',
    whenAge: '50s+',
    herbs: 'Ginkgo Biloba, Zinc, B12.',
    lifestyle: 'White noise machines; stress mgmt.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Tinnitus?",
          answer: "Phantom ear noise. Scientific name: Ringing in Ears.",
          category: "Overview"
      },
      {
          question: "What causes Tinnitus?",
          answer: "High salt/caffeine alters ear fluid.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Tinnitus?",
          answer: "There is no cure; sound therapy retrains the brain to ignore it.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Tinnitus?",
          answer: "Low sodium, low caffeine diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Tinnitus?",
          answer: "Ginkgo Biloba, Zinc, B12.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Tinnitus?",
          answer: "White noise machines; stress mgmt.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Tinnitus typically become a concern?",
          answer: "Tinnitus typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low sodium, low caffeine diet.\" help with Tinnitus?",
          answer: "Yes \u2014 Low sodium, low caffeine diet. is one of the natural approaches recommended for Tinnitus.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Tinnitus?",
          answer: "Tinnitus is also referred to as Ringing in Ears.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'eye-twitches',
    title: 'Eye Twitches',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Eyelid spasms.',
    problem: 'High caffeine, stress, Mg deficiency.',
    solution: 'Magnesium-rich foods (spinach, almonds).',
    naturalApproach: ['Magnesium-rich foods (spinach, almonds).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Eye Twitches | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Eye Twitches (Myokymia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Eye Twitches',
    scientificName: 'Myokymia',
    cause: 'High caffeine, stress, Mg deficiency.',
    hiddenFact: 'Brain tissue has no pain receptors; pain is from nerves/muscles.',
    whenAge: 'All ages',
    herbs: 'Magnesium, B-Complex.',
    lifestyle: 'Cut caffeine; sleep more.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Eye Twitches?",
          answer: "Eyelid spasms. Scientific name: Myokymia.",
          category: "Overview"
      },
      {
          question: "What causes Eye Twitches?",
          answer: "High caffeine, stress, Mg deficiency.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Eye Twitches?",
          answer: "Brain tissue has no pain receptors; pain is from nerves/muscles.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Eye Twitches?",
          answer: "Magnesium-rich foods (spinach, almonds).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Eye Twitches?",
          answer: "Magnesium, B-Complex.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Eye Twitches?",
          answer: "Cut caffeine; sleep more.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Eye Twitches typically become a concern?",
          answer: "Eye Twitches typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Magnesium-rich foods (spinach, almonds).\" help with Eye Twitches?",
          answer: "Yes \u2014 Magnesium-rich foods (spinach, almonds). is one of the natural approaches recommended for Eye Twitches.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Eye Twitches?",
          answer: "Eye Twitches is also referred to as Myokymia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'night-eating',
    title: 'Night Eating',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Nighttime bingeing.',
    problem: 'Skipping breakfast/undereating.',
    solution: 'Regular, high-protein meals throughout day.',
    naturalApproach: ['Regular, high-protein meals throughout day.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Night Eating | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Night Eating (Night Eating Syndrome): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Night Eating',
    scientificName: 'Night Eating Syndrome',
    cause: 'Skipping breakfast/undereating.',
    hiddenFact: 'Re-setting hunger and satiety hormones reverses this pattern.',
    whenAge: '20s+',
    herbs: 'Magnesium, 5-HTP.',
    lifestyle: 'Reset hunger circadian rhythm; sleep.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Night Eating?",
          answer: "Nighttime bingeing. Scientific name: Night Eating Syndrome.",
          category: "Overview"
      },
      {
          question: "What causes Night Eating?",
          answer: "Skipping breakfast/undereating.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Night Eating?",
          answer: "Re-setting hunger and satiety hormones reverses this pattern.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Night Eating?",
          answer: "Regular, high-protein meals throughout day.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Night Eating?",
          answer: "Magnesium, 5-HTP.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Night Eating?",
          answer: "Reset hunger circadian rhythm; sleep.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Night Eating typically become a concern?",
          answer: "Night Eating typically becomes a concern around 20s+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Night Eating?",
          answer: "Yes \u2014 Regular, high-protein meals throughout day. is one of the natural approaches recommended for Night Eating.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Night Eating?",
          answer: "Night Eating is also referred to as Night Eating Syndrome.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'orthorexia',
    title: 'Orthorexia',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Obsession with clean eating.',
    problem: 'Anxiety around impure foods.',
    solution: 'Reintroducing fear foods gradually.',
    naturalApproach: ['Reintroducing fear foods gradually.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Orthorexia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Orthorexia (Orthorexia Nervosa): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Orthorexia',
    scientificName: 'Orthorexia Nervosa',
    cause: 'Anxiety around impure foods.',
    hiddenFact: 'Can lead to severe malnutrition despite eating healthy.',
    whenAge: '20s-40s',
    herbs: 'Multivitamin for deficiencies.',
    lifestyle: 'Psychological therapy; stop tracking macros.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Orthorexia?",
          answer: "Obsession with clean eating. Scientific name: Orthorexia Nervosa.",
          category: "Overview"
      },
      {
          question: "What causes Orthorexia?",
          answer: "Anxiety around impure foods.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Orthorexia?",
          answer: "Can lead to severe malnutrition despite eating healthy.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Orthorexia?",
          answer: "Reintroducing fear foods gradually.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Orthorexia?",
          answer: "Multivitamin for deficiencies.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Orthorexia?",
          answer: "Psychological therapy; stop tracking macros.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Orthorexia typically become a concern?",
          answer: "Orthorexia typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Reintroducing fear foods gradually.\" help with Orthorexia?",
          answer: "Yes \u2014 Reintroducing fear foods gradually. is one of the natural approaches recommended for Orthorexia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Orthorexia?",
          answer: "Orthorexia is also referred to as Orthorexia Nervosa.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'jet-lag-shift-work',
    title: 'Jet Lag / Shift Work',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Ruined sleep clock.',
    problem: 'Time zones/night shifts.',
    solution: 'Timed meals; high protein AM, carbs PM.',
    naturalApproach: ['Timed meals; high protein AM, carbs PM.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Jet Lag / Shift Work | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Jet Lag / Shift Work (Circadian Rhythm Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Jet Lag / Shift Work',
    scientificName: 'Circadian Rhythm Disorder',
    cause: 'Time zones/night shifts.',
    hiddenFact: 'The body clock shifts 1 hour per day; flying east is harder.',
    whenAge: 'All ages',
    herbs: 'Melatonin, Magnesium.',
    lifestyle: 'Light therapy (sun AM, blue-blockers PM).',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Jet Lag / Shift Work?",
          answer: "Ruined sleep clock. Scientific name: Circadian Rhythm Disorder.",
          category: "Overview"
      },
      {
          question: "What causes Jet Lag / Shift Work?",
          answer: "Time zones/night shifts.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Jet Lag / Shift Work?",
          answer: "The body clock shifts 1 hour per day; flying east is harder.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Jet Lag / Shift Work?",
          answer: "Timed meals; high protein AM, carbs PM.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Jet Lag / Shift Work?",
          answer: "Melatonin, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Jet Lag / Shift Work?",
          answer: "Light therapy (sun AM, blue-blockers PM).",
          category: "Lifestyle"
      },
      {
          question: "At what age does Jet Lag / Shift Work typically become a concern?",
          answer: "Jet Lag / Shift Work typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Timed meals; high protein AM, carbs PM.\" help with Jet Lag / Shift Work?",
          answer: "Yes \u2014 Timed meals; high protein AM, carbs PM. is one of the natural approaches recommended for Jet Lag / Shift Work.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Jet Lag / Shift Work?",
          answer: "Jet Lag / Shift Work is also referred to as Circadian Rhythm Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'motion-sickness',
    title: 'Motion Sickness',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Nausea in vehicles.',
    problem: 'Sensory mismatch in brain.',
    solution: 'Ginger root before travel.',
    naturalApproach: ['Ginger root before travel.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Motion Sickness | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Motion Sickness (Kinetosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Motion Sickness',
    scientificName: 'Kinetosis',
    cause: 'Sensory mismatch in brain.',
    hiddenFact: 'Blind people can still get motion sickness via inner ear.',
    whenAge: 'Childhood+',
    herbs: 'Ginger, Peppermint, B6.',
    lifestyle: 'Look at horizon; sit in front seat.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Motion Sickness?",
          answer: "Nausea in vehicles. Scientific name: Kinetosis.",
          category: "Overview"
      },
      {
          question: "What causes Motion Sickness?",
          answer: "Sensory mismatch in brain.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Motion Sickness?",
          answer: "Blind people can still get motion sickness via inner ear.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Motion Sickness?",
          answer: "Ginger root before travel.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Motion Sickness?",
          answer: "Ginger, Peppermint, B6.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Motion Sickness?",
          answer: "Look at horizon; sit in front seat.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Motion Sickness typically become a concern?",
          answer: "Motion Sickness typically becomes a concern around Childhood+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Ginger root before travel.\" help with Motion Sickness?",
          answer: "Yes \u2014 Ginger root before travel. is one of the natural approaches recommended for Motion Sickness.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Motion Sickness?",
          answer: "Motion Sickness is also referred to as Kinetosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'anorexia-bulimia-bed',
    title: 'Anorexia / Bulimia / BED',
    category: CategoryType.COGNITIVE,
    shortDesc: 'Starving/binge-purge.',
    problem: 'Severe restriction or trauma.',
    solution: 'Regular balanced meals, re-feeding.',
    naturalApproach: ['Regular balanced meals, re-feeding.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Anorexia / Bulimia / BED | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Anorexia / Bulimia / BED (Eating Disorders): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Anorexia / Bulimia / BED',
    scientificName: 'Eating Disorders',
    cause: 'Severe restriction or trauma.',
    hiddenFact: 'Anorexia has the highest mortality rate of any mental illness.',
    whenAge: 'Teens-30s',
    herbs: 'Zinc, Omega-3, Probiotics.',
    lifestyle: 'CBT therapy; regular meal timing.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Anorexia / Bulimia / BED?",
          answer: "Starving/binge-purge. Scientific name: Eating Disorders.",
          category: "Overview"
      },
      {
          question: "What causes Anorexia / Bulimia / BED?",
          answer: "Severe restriction or trauma.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Anorexia / Bulimia / BED?",
          answer: "Anorexia has the highest mortality rate of any mental illness.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Anorexia / Bulimia / BED?",
          answer: "Regular balanced meals, re-feeding.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Anorexia / Bulimia / BED?",
          answer: "Zinc, Omega-3, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Anorexia / Bulimia / BED?",
          answer: "CBT therapy; regular meal timing.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Anorexia / Bulimia / BED typically become a concern?",
          answer: "Anorexia / Bulimia / BED typically becomes a concern around Teens-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Regular balanced meals, re-feeding.\" help with Anorexia / Bulimia / BED?",
          answer: "Yes \u2014 Regular balanced meals, re-feeding. is one of the natural approaches recommended for Anorexia / Bulimia / BED.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Anorexia / Bulimia / BED?",
          answer: "Anorexia / Bulimia / BED is also referred to as Eating Disorders.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'osteoporosis',
    title: 'Osteoporosis',
    category: CategoryType.JOINTS,
    shortDesc: 'Brittle bones.',
    problem: 'Lack of Vit D/calcium + no exercise.',
    solution: 'Dairy, sardines, leafy greens.',
    naturalApproach: ['Dairy, sardines, leafy greens.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Osteoporosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Osteoporosis (Bone Thinning): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Osteoporosis',
    scientificName: 'Bone Thinning',
    cause: 'Lack of Vit D/calcium + no exercise.',
    hiddenFact: 'Bones are living tissue; weight-bearing exercise builds them.',
    whenAge: '50s+',
    herbs: 'Calcium, Vit D3, Vit K2, Magnesium.',
    lifestyle: 'Weight-bearing exercise (lifting weights).',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Osteoporosis?",
          answer: "Brittle bones. Scientific name: Bone Thinning.",
          category: "Overview"
      },
      {
          question: "What causes Osteoporosis?",
          answer: "Lack of Vit D/calcium + no exercise.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Osteoporosis?",
          answer: "Bones are living tissue; weight-bearing exercise builds them.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Osteoporosis?",
          answer: "Dairy, sardines, leafy greens.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Osteoporosis?",
          answer: "Calcium, Vit D3, Vit K2, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Osteoporosis?",
          answer: "Weight-bearing exercise (lifting weights).",
          category: "Lifestyle"
      },
      {
          question: "At what age does Osteoporosis typically become a concern?",
          answer: "Osteoporosis typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Dairy, sardines, leafy greens.\" help with Osteoporosis?",
          answer: "Yes \u2014 Dairy, sardines, leafy greens. is one of the natural approaches recommended for Osteoporosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Osteoporosis?",
          answer: "Osteoporosis is also referred to as Bone Thinning.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'osteoarthritis',
    title: 'Osteoarthritis',
    category: CategoryType.JOINTS,
    shortDesc: 'Joint cartilage wear.',
    problem: 'Obesity physically crushes cartilage.',
    solution: 'Anti-inflammatory diet, weight loss.',
    naturalApproach: ['Anti-inflammatory diet, weight loss.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Osteoarthritis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Osteoarthritis (Degenerative Joint Disease): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Osteoarthritis',
    scientificName: 'Degenerative Joint Disease',
    cause: 'Obesity physically crushes cartilage.',
    hiddenFact: 'Cartilage has no blood vessels, so it heals very poorly.',
    whenAge: '50s+',
    herbs: 'Glucosamine, Chondroitin, Turmeric.',
    lifestyle: 'Low-impact cardio (swimming); strength training.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Osteoarthritis?",
          answer: "Joint cartilage wear. Scientific name: Degenerative Joint Disease.",
          category: "Overview"
      },
      {
          question: "What causes Osteoarthritis?",
          answer: "Obesity physically crushes cartilage.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Osteoarthritis?",
          answer: "Cartilage has no blood vessels, so it heals very poorly.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Osteoarthritis?",
          answer: "Anti-inflammatory diet, weight loss.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Osteoarthritis?",
          answer: "Glucosamine, Chondroitin, Turmeric.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Osteoarthritis?",
          answer: "Low-impact cardio (swimming); strength training.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Osteoarthritis typically become a concern?",
          answer: "Osteoarthritis typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory diet, weight loss.\" help with Osteoarthritis?",
          answer: "Yes \u2014 Anti-inflammatory diet, weight loss. is one of the natural approaches recommended for Osteoarthritis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Osteoarthritis?",
          answer: "Osteoarthritis is also referred to as Degenerative Joint Disease.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'kidney-stones',
    title: 'Kidney Stones',
    category: CategoryType.JOINTS,
    shortDesc: 'Hard mineral stones.',
    problem: 'Dehydration + high salt/oxalates.',
    solution: '3L water/day, low salt, low oxalate.',
    naturalApproach: ['3L water/day, low salt, low oxalate.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Kidney Stones | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Kidney Stones (Nephrolithiasis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Kidney Stones',
    scientificName: 'Nephrolithiasis',
    cause: 'Dehydration + high salt/oxalates.',
    hiddenFact: 'Passing a stone is often compared to childbirth in pain scale.',
    whenAge: '30s+',
    herbs: 'Chanca Piedra, Magnesium, Citrate.',
    lifestyle: 'Lemon water; reduce red meat.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Kidney Stones?",
          answer: "Hard mineral stones. Scientific name: Nephrolithiasis.",
          category: "Overview"
      },
      {
          question: "What causes Kidney Stones?",
          answer: "Dehydration + high salt/oxalates.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Kidney Stones?",
          answer: "Passing a stone is often compared to childbirth in pain scale.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Kidney Stones?",
          answer: "3L water/day, low salt, low oxalate.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Kidney Stones?",
          answer: "Chanca Piedra, Magnesium, Citrate.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Kidney Stones?",
          answer: "Lemon water; reduce red meat.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Kidney Stones typically become a concern?",
          answer: "Kidney Stones typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"3L water/day, low salt, low oxalate.\" help with Kidney Stones?",
          answer: "Yes \u2014 3L water/day, low salt, low oxalate. is one of the natural approaches recommended for Kidney Stones.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Kidney Stones?",
          answer: "Kidney Stones is also referred to as Nephrolithiasis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'sarcopenia',
    title: 'Sarcopenia',
    category: CategoryType.JOINTS,
    shortDesc: 'Muscle wasting.',
    problem: 'Aging + no protein + sitting.',
    solution: 'High protein (leucine) at every meal.',
    naturalApproach: ['High protein (leucine) at every meal.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Sarcopenia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Sarcopenia (Muscle Loss): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Sarcopenia',
    scientificName: 'Muscle Loss',
    cause: 'Aging + no protein + sitting.',
    hiddenFact: 'Muscle tissue is the body\'s largest reservoir of amino acids.',
    whenAge: '60s+',
    herbs: 'Creatine, Whey Protein, Vit D.',
    lifestyle: 'Resistance training 3x/week.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Sarcopenia?",
          answer: "Muscle wasting. Scientific name: Muscle Loss.",
          category: "Overview"
      },
      {
          question: "What causes Sarcopenia?",
          answer: "Aging + no protein + sitting.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Sarcopenia?",
          answer: "Muscle tissue is the body's largest reservoir of amino acids.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Sarcopenia?",
          answer: "High protein (leucine) at every meal.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Sarcopenia?",
          answer: "Creatine, Whey Protein, Vit D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Sarcopenia?",
          answer: "Resistance training 3x/week.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Sarcopenia typically become a concern?",
          answer: "Sarcopenia typically becomes a concern around 60s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High protein (leucine) at every meal.\" help with Sarcopenia?",
          answer: "Yes \u2014 High protein (leucine) at every meal. is one of the natural approaches recommended for Sarcopenia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Sarcopenia?",
          answer: "Sarcopenia is also referred to as Muscle Loss.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'back-pain',
    title: 'Back Pain',
    category: CategoryType.JOINTS,
    shortDesc: 'Aches in lower/upper back.',
    problem: 'Weak core + sitting strains discs.',
    solution: 'Anti-inflammatory Omega-3s.',
    naturalApproach: ['Anti-inflammatory Omega-3s.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Back Pain | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Back Pain (Lumbago / Dorsalgia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Back Pain',
    scientificName: 'Lumbago / Dorsalgia',
    cause: 'Weak core + sitting strains discs.',
    hiddenFact: 'Leading cause of global disability; often improves without scans.',
    whenAge: '30s+',
    herbs: 'Turmeric, Devil\'s Claw, Collagen.',
    lifestyle: 'Core strengthening; ergonomic desk setup.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Back Pain?",
          answer: "Aches in lower/upper back. Scientific name: Lumbago / Dorsalgia.",
          category: "Overview"
      },
      {
          question: "What causes Back Pain?",
          answer: "Weak core + sitting strains discs.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Back Pain?",
          answer: "Leading cause of global disability; often improves without scans.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Back Pain?",
          answer: "Anti-inflammatory Omega-3s.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Back Pain?",
          answer: "Turmeric, Devil's Claw, Collagen.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Back Pain?",
          answer: "Core strengthening; ergonomic desk setup.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Back Pain typically become a concern?",
          answer: "Back Pain typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory Omega-3s.\" help with Back Pain?",
          answer: "Yes \u2014 Anti-inflammatory Omega-3s. is one of the natural approaches recommended for Back Pain.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Back Pain?",
          answer: "Back Pain is also referred to as Lumbago / Dorsalgia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'muscle-cramps',
    title: 'Muscle Cramps',
    category: CategoryType.JOINTS,
    shortDesc: 'Sudden severe muscle spasm.',
    problem: 'Dehydration + low electrolytes.',
    solution: 'Bananas, potatoes, leafy greens.',
    naturalApproach: ['Bananas, potatoes, leafy greens.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Muscle Cramps | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Muscle Cramps (Charley Horse): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Muscle Cramps',
    scientificName: 'Charley Horse',
    cause: 'Dehydration + low electrolytes.',
    hiddenFact: 'Magnesium deficiency is the most common hidden cause.',
    whenAge: 'All ages',
    herbs: 'Magnesium, Potassium, Sodium.',
    lifestyle: 'Hydrate; stretch before sleep/exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Muscle Cramps?",
          answer: "Sudden severe muscle spasm. Scientific name: Charley Horse.",
          category: "Overview"
      },
      {
          question: "What causes Muscle Cramps?",
          answer: "Dehydration + low electrolytes.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Muscle Cramps?",
          answer: "Magnesium deficiency is the most common hidden cause.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Muscle Cramps?",
          answer: "Bananas, potatoes, leafy greens.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Muscle Cramps?",
          answer: "Magnesium, Potassium, Sodium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Muscle Cramps?",
          answer: "Hydrate; stretch before sleep/exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Muscle Cramps typically become a concern?",
          answer: "Muscle Cramps typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Bananas, potatoes, leafy greens.\" help with Muscle Cramps?",
          answer: "Yes \u2014 Bananas, potatoes, leafy greens. is one of the natural approaches recommended for Muscle Cramps.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Muscle Cramps?",
          answer: "Muscle Cramps is also referred to as Charley Horse.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'plantar-fasciitis',
    title: 'Plantar Fasciitis',
    category: CategoryType.JOINTS,
    shortDesc: 'Heel pain in morning.',
    problem: 'Obesity + bad shoes tear fascia.',
    solution: 'Weight loss diet.',
    naturalApproach: ['Weight loss diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Plantar Fasciitis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Plantar Fasciitis (Plantar Heel Pain): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Plantar Fasciitis',
    scientificName: 'Plantar Heel Pain',
    cause: 'Obesity + bad shoes tear fascia.',
    hiddenFact: 'The pain is micro-tears in the foot arch ligament.',
    whenAge: '40s+',
    herbs: 'Turmeric, Bromelain.',
    lifestyle: 'Orthotic inserts; daily calf stretching.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Plantar Fasciitis?",
          answer: "Heel pain in morning. Scientific name: Plantar Heel Pain.",
          category: "Overview"
      },
      {
          question: "What causes Plantar Fasciitis?",
          answer: "Obesity + bad shoes tear fascia.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Plantar Fasciitis?",
          answer: "The pain is micro-tears in the foot arch ligament.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Plantar Fasciitis?",
          answer: "Weight loss diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Plantar Fasciitis?",
          answer: "Turmeric, Bromelain.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Plantar Fasciitis?",
          answer: "Orthotic inserts; daily calf stretching.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Plantar Fasciitis typically become a concern?",
          answer: "Plantar Fasciitis typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Weight loss diet.\" help with Plantar Fasciitis?",
          answer: "Yes \u2014 Weight loss diet. is one of the natural approaches recommended for Plantar Fasciitis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Plantar Fasciitis?",
          answer: "Plantar Fasciitis is also referred to as Plantar Heel Pain.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'heelarch-pain',
    title: 'Heel/Arch Pain',
    category: CategoryType.JOINTS,
    shortDesc: 'General foot arch pain.',
    problem: 'Standing on hard surfaces.',
    solution: 'Anti-inflammatory diet.',
    naturalApproach: ['Anti-inflammatory diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Heel/Arch Pain | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Heel/Arch Pain (Plantar Fasciitis (broad)): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Heel/Arch Pain',
    scientificName: 'Plantar Fasciitis (broad)',
    cause: 'Standing on hard surfaces.',
    hiddenFact: 'Flat feet or high arches increase the risk of developing this.',
    whenAge: '40s+',
    herbs: 'Boswellia, Turmeric.',
    lifestyle: 'Wear supportive shoes; avoid barefoot.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Heel/Arch Pain?",
          answer: "General foot arch pain. Scientific name: Plantar Fasciitis (broad).",
          category: "Overview"
      },
      {
          question: "What causes Heel/Arch Pain?",
          answer: "Standing on hard surfaces.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Heel/Arch Pain?",
          answer: "Flat feet or high arches increase the risk of developing this.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Heel/Arch Pain?",
          answer: "Anti-inflammatory diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Heel/Arch Pain?",
          answer: "Boswellia, Turmeric.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Heel/Arch Pain?",
          answer: "Wear supportive shoes; avoid barefoot.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Heel/Arch Pain typically become a concern?",
          answer: "Heel/Arch Pain typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory diet.\" help with Heel/Arch Pain?",
          answer: "Yes \u2014 Anti-inflammatory diet. is one of the natural approaches recommended for Heel/Arch Pain.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Heel/Arch Pain?",
          answer: "Heel/Arch Pain is also referred to as Plantar Fasciitis (broad).",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pre-osteoporosis',
    title: 'Pre-Osteoporosis',
    category: CategoryType.JOINTS,
    shortDesc: 'Mild bone thinning.',
    problem: 'Sedentary lifestyle, low calcium.',
    solution: 'Calcium-rich foods, Vitamin D.',
    naturalApproach: ['Calcium-rich foods, Vitamin D.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Pre-Osteoporosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Pre-Osteoporosis (Osteopenia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Pre-Osteoporosis',
    scientificName: 'Osteopenia',
    cause: 'Sedentary lifestyle, low calcium.',
    hiddenFact: 'The precursor to osteoporosis; completely reversible with weights.',
    whenAge: '40s+',
    herbs: 'Vit K2, Magnesium, Strontium.',
    lifestyle: 'Weight-bearing exercise; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Pre-Osteoporosis?",
          answer: "Mild bone thinning. Scientific name: Osteopenia.",
          category: "Overview"
      },
      {
          question: "What causes Pre-Osteoporosis?",
          answer: "Sedentary lifestyle, low calcium.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Pre-Osteoporosis?",
          answer: "The precursor to osteoporosis; completely reversible with weights.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Pre-Osteoporosis?",
          answer: "Calcium-rich foods, Vitamin D.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Pre-Osteoporosis?",
          answer: "Vit K2, Magnesium, Strontium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Pre-Osteoporosis?",
          answer: "Weight-bearing exercise; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Pre-Osteoporosis typically become a concern?",
          answer: "Pre-Osteoporosis typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Calcium-rich foods, Vitamin D.\" help with Pre-Osteoporosis?",
          answer: "Yes \u2014 Calcium-rich foods, Vitamin D. is one of the natural approaches recommended for Pre-Osteoporosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Pre-Osteoporosis?",
          answer: "Pre-Osteoporosis is also referred to as Osteopenia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'singers-nodules',
    title: 'Singer\'s Nodules',
    category: CategoryType.JOINTS,
    shortDesc: 'Calluses on vocal cords.',
    problem: 'Chronic voice abuse or smoking.',
    solution: 'Hydration, throat-coating foods (honey).',
    naturalApproach: ['Hydration, throat-coating foods (honey).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Singer\'s Nodules | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Singer\'s Nodules (Vocal Cord Nodules): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Singer\'s Nodules',
    scientificName: 'Vocal Cord Nodules',
    cause: 'Chronic voice abuse or smoking.',
    hiddenFact: 'Caused by vocal cords swelling and failing to vibrate.',
    whenAge: '20s+',
    herbs: 'Slippery Elm, Marshmallow Root.',
    lifestyle: 'Voice therapy; vocal rest; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Singer's Nodules?",
          answer: "Calluses on vocal cords. Scientific name: Vocal Cord Nodules.",
          category: "Overview"
      },
      {
          question: "What causes Singer's Nodules?",
          answer: "Chronic voice abuse or smoking.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Singer's Nodules?",
          answer: "Caused by vocal cords swelling and failing to vibrate.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Singer's Nodules?",
          answer: "Hydration, throat-coating foods (honey).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Singer's Nodules?",
          answer: "Slippery Elm, Marshmallow Root.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Singer's Nodules?",
          answer: "Voice therapy; vocal rest; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Singer's Nodules typically become a concern?",
          answer: "Singer's Nodules typically becomes a concern around 20s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Hydration, throat-coating foods (honey).\" help with Singer's Nodules?",
          answer: "Yes \u2014 Hydration, throat-coating foods (honey). is one of the natural approaches recommended for Singer's Nodules.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Singer's Nodules?",
          answer: "Singer's Nodules is also referred to as Vocal Cord Nodules.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'tarsal-tunnel',
    title: 'Tarsal Tunnel',
    category: CategoryType.JOINTS,
    shortDesc: 'Foot numbness/tingling.',
    problem: 'Tight shoes, flat feet, obesity.',
    solution: 'Anti-inflammatory Omega-3s.',
    naturalApproach: ['Anti-inflammatory Omega-3s.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Tarsal Tunnel | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Tarsal Tunnel (Tarsal Tunnel Syndrome): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Tarsal Tunnel',
    scientificName: 'Tarsal Tunnel Syndrome',
    cause: 'Tight shoes, flat feet, obesity.',
    hiddenFact: 'A pinched nerve in the ankle, similar to carpal tunnel.',
    whenAge: '30s+',
    herbs: 'B6, Magnesium, Turmeric.',
    lifestyle: 'Wide shoes; arch supports; weight loss.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Tarsal Tunnel?",
          answer: "Foot numbness/tingling. Scientific name: Tarsal Tunnel Syndrome.",
          category: "Overview"
      },
      {
          question: "What causes Tarsal Tunnel?",
          answer: "Tight shoes, flat feet, obesity.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Tarsal Tunnel?",
          answer: "A pinched nerve in the ankle, similar to carpal tunnel.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Tarsal Tunnel?",
          answer: "Anti-inflammatory Omega-3s.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Tarsal Tunnel?",
          answer: "B6, Magnesium, Turmeric.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Tarsal Tunnel?",
          answer: "Wide shoes; arch supports; weight loss.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Tarsal Tunnel typically become a concern?",
          answer: "Tarsal Tunnel typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory Omega-3s.\" help with Tarsal Tunnel?",
          answer: "Yes \u2014 Anti-inflammatory Omega-3s. is one of the natural approaches recommended for Tarsal Tunnel.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Tarsal Tunnel?",
          answer: "Tarsal Tunnel is also referred to as Tarsal Tunnel Syndrome.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'rheumatoid-arthritis',
    title: 'Rheumatoid Arthritis',
    category: CategoryType.JOINTS,
    shortDesc: 'Joint destruction.',
    problem: 'Smoking, obesity, sugar trigger immune.',
    solution: 'Mediterranean diet, Omega-3s.',
    naturalApproach: ['Mediterranean diet, Omega-3s.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Rheumatoid Arthritis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Rheumatoid Arthritis (RA): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Rheumatoid Arthritis',
    scientificName: 'RA',
    cause: 'Smoking, obesity, sugar trigger immune.',
    hiddenFact: 'It can damage the heart and lungs, not just joints.',
    whenAge: '30s-60s',
    herbs: 'Boswellia, Turmeric, Fish Oil.',
    lifestyle: 'Stop smoking; low-impact exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Rheumatoid Arthritis?",
          answer: "Joint destruction. Scientific name: RA.",
          category: "Overview"
      },
      {
          question: "What causes Rheumatoid Arthritis?",
          answer: "Smoking, obesity, sugar trigger immune.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Rheumatoid Arthritis?",
          answer: "It can damage the heart and lungs, not just joints.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Rheumatoid Arthritis?",
          answer: "Mediterranean diet, Omega-3s.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Rheumatoid Arthritis?",
          answer: "Boswellia, Turmeric, Fish Oil.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Rheumatoid Arthritis?",
          answer: "Stop smoking; low-impact exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Rheumatoid Arthritis typically become a concern?",
          answer: "Rheumatoid Arthritis typically becomes a concern around 30s-60s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Mediterranean diet, Omega-3s.\" help with Rheumatoid Arthritis?",
          answer: "Yes \u2014 Mediterranean diet, Omega-3s. is one of the natural approaches recommended for Rheumatoid Arthritis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Rheumatoid Arthritis?",
          answer: "Rheumatoid Arthritis is also referred to as RA.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'lupus',
    title: 'Lupus',
    category: CategoryType.JOINTS,
    shortDesc: 'Immune attacks own body.',
    problem: 'UV light, stress, alfalfa trigger flares.',
    solution: 'Anti-inflammatory diet, Omega-3s.',
    naturalApproach: ['Anti-inflammatory diet, Omega-3s.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Lupus | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Lupus (SLE): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Lupus',
    scientificName: 'SLE',
    cause: 'UV light, stress, alfalfa trigger flares.',
    hiddenFact: 'The great imitator; mimics dozens of other diseases.',
    whenAge: '20s-40s',
    herbs: 'Turmeric, Vitamin D, Fish Oil.',
    lifestyle: 'Strict sun avoidance; stress management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Lupus?",
          answer: "Immune attacks own body. Scientific name: SLE.",
          category: "Overview"
      },
      {
          question: "What causes Lupus?",
          answer: "UV light, stress, alfalfa trigger flares.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Lupus?",
          answer: "The great imitator; mimics dozens of other diseases.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Lupus?",
          answer: "Anti-inflammatory diet, Omega-3s.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Lupus?",
          answer: "Turmeric, Vitamin D, Fish Oil.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Lupus?",
          answer: "Strict sun avoidance; stress management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Lupus typically become a concern?",
          answer: "Lupus typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory diet, Omega-3s.\" help with Lupus?",
          answer: "Yes \u2014 Anti-inflammatory diet, Omega-3s. is one of the natural approaches recommended for Lupus.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Lupus?",
          answer: "Lupus is also referred to as SLE.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'hashimotos',
    title: 'Hashimoto\'s',
    category: CategoryType.JOINTS,
    shortDesc: 'Underactive thyroid.',
    problem: 'Leaky gut triggers thyroid attack.',
    solution: 'Gluten-free, selenium-rich (brazil nuts).',
    naturalApproach: ['Gluten-free, selenium-rich (brazil nuts).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Hashimoto\'s | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Hashimoto\'s (Autoimmune Thyroiditis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Hashimoto\'s',
    scientificName: 'Autoimmune Thyroiditis',
    cause: 'Leaky gut triggers thyroid attack.',
    hiddenFact: 'Can mimic depression and cause weight gain mysteriously.',
    whenAge: '30s-50s',
    herbs: 'Selenium, L-Tyrosine, Ashwagandha.',
    lifestyle: 'Gut healing; stress management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Hashimoto's?",
          answer: "Underactive thyroid. Scientific name: Autoimmune Thyroiditis.",
          category: "Overview"
      },
      {
          question: "What causes Hashimoto's?",
          answer: "Leaky gut triggers thyroid attack.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Hashimoto's?",
          answer: "Can mimic depression and cause weight gain mysteriously.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Hashimoto's?",
          answer: "Gluten-free, selenium-rich (brazil nuts).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Hashimoto's?",
          answer: "Selenium, L-Tyrosine, Ashwagandha.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Hashimoto's?",
          answer: "Gut healing; stress management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Hashimoto's typically become a concern?",
          answer: "Hashimoto's typically becomes a concern around 30s-50s.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Hashimoto's?",
          answer: "Yes \u2014 Gluten-free, selenium-rich (brazil nuts). is one of the natural approaches recommended for Hashimoto's.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Hashimoto's?",
          answer: "Hashimoto's is also referred to as Autoimmune Thyroiditis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'acne',
    title: 'Acne',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Pimples/blocked pores.',
    problem: 'Dairy/sugar spike insulin.',
    solution: 'No dairy, low sugar, high zinc.',
    naturalApproach: ['No dairy, low sugar, high zinc.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Acne | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Acne (Acne Vulgaris): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Acne',
    scientificName: 'Acne Vulgaris',
    cause: 'Dairy/sugar spike insulin.',
    hiddenFact: 'It is genetically programmed to peak during hormone surges.',
    whenAge: 'Teens-30s',
    herbs: 'Zinc, Omega-3, Saw Palmetto.',
    lifestyle: 'Don\'t pick face; change pillowcases.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Acne?",
          answer: "Pimples/blocked pores. Scientific name: Acne Vulgaris.",
          category: "Overview"
      },
      {
          question: "What causes Acne?",
          answer: "Dairy/sugar spike insulin.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Acne?",
          answer: "It is genetically programmed to peak during hormone surges.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Acne?",
          answer: "No dairy, low sugar, high zinc.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Acne?",
          answer: "Zinc, Omega-3, Saw Palmetto.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Acne?",
          answer: "Don't pick face; change pillowcases.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Acne typically become a concern?",
          answer: "Acne typically becomes a concern around Teens-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"No dairy, low sugar, high zinc.\" help with Acne?",
          answer: "Yes \u2014 No dairy, low sugar, high zinc. is one of the natural approaches recommended for Acne.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Acne?",
          answer: "Acne is also referred to as Acne Vulgaris.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'eczema',
    title: 'Eczema',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Dry, itchy skin.',
    problem: 'Food allergies + stress.',
    solution: 'Probiotics, bone broth, no triggers.',
    naturalApproach: ['Probiotics, bone broth, no triggers.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Eczema | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Eczema (Atopic Dermatitis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Eczema',
    scientificName: 'Atopic Dermatitis',
    cause: 'Food allergies + stress.',
    hiddenFact: 'Faulty filaggrin protein lets moisture escape the skin.',
    whenAge: 'Childhood+',
    herbs: 'Evening Primrose, Fish Oil, Vitamin D.',
    lifestyle: 'Fragrance-free moisturizers; lukewarm showers.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Eczema?",
          answer: "Dry, itchy skin. Scientific name: Atopic Dermatitis.",
          category: "Overview"
      },
      {
          question: "What causes Eczema?",
          answer: "Food allergies + stress.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Eczema?",
          answer: "Faulty filaggrin protein lets moisture escape the skin.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Eczema?",
          answer: "Probiotics, bone broth, no triggers.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Eczema?",
          answer: "Evening Primrose, Fish Oil, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Eczema?",
          answer: "Fragrance-free moisturizers; lukewarm showers.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Eczema typically become a concern?",
          answer: "Eczema typically becomes a concern around Childhood+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Probiotics, bone broth, no triggers.\" help with Eczema?",
          answer: "Yes \u2014 Probiotics, bone broth, no triggers. is one of the natural approaches recommended for Eczema.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Eczema?",
          answer: "Eczema is also referred to as Atopic Dermatitis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'psoriasis',
    title: 'Psoriasis',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Scaly red skin patches.',
    problem: 'Alcohol/smoking trigger overgrowth.',
    solution: 'Anti-inflammatory, gluten-free (for some).',
    naturalApproach: ['Anti-inflammatory, gluten-free (for some).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Psoriasis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Psoriasis (Psoriasis Vulgaris): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Psoriasis',
    scientificName: 'Psoriasis Vulgaris',
    cause: 'Alcohol/smoking trigger overgrowth.',
    hiddenFact: 'The skin replaces itself in 3 days instead of 28.',
    whenAge: '20s-50s',
    herbs: 'Oregon Grape, Turmeric, Omega-3.',
    lifestyle: 'Sunlight exposure; quit smoking/alcohol.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Psoriasis?",
          answer: "Scaly red skin patches. Scientific name: Psoriasis Vulgaris.",
          category: "Overview"
      },
      {
          question: "What causes Psoriasis?",
          answer: "Alcohol/smoking trigger overgrowth.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Psoriasis?",
          answer: "The skin replaces itself in 3 days instead of 28.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Psoriasis?",
          answer: "Anti-inflammatory, gluten-free (for some).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Psoriasis?",
          answer: "Oregon Grape, Turmeric, Omega-3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Psoriasis?",
          answer: "Sunlight exposure; quit smoking/alcohol.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Psoriasis typically become a concern?",
          answer: "Psoriasis typically becomes a concern around 20s-50s.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Psoriasis?",
          answer: "Yes \u2014 Anti-inflammatory, gluten-free (for some). is one of the natural approaches recommended for Psoriasis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Psoriasis?",
          answer: "Psoriasis is also referred to as Psoriasis Vulgaris.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'hair-loss',
    title: 'Hair Loss',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Hair falls out.',
    problem: 'Iron/protein deficiency, high sugar.',
    solution: 'Eggs, berries, leafy greens.',
    naturalApproach: ['Eggs, berries, leafy greens.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Hair Loss | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Hair Loss (Alopecia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Hair Loss',
    scientificName: 'Alopecia',
    cause: 'Iron/protein deficiency, high sugar.',
    hiddenFact: 'Hair follicles go dormant but stay alive; it can regrow.',
    whenAge: '30s+',
    herbs: 'Biotin, Saw Palmetto, Iron, Collagen.',
    lifestyle: 'Scalp massage; stress reduction.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Hair Loss?",
          answer: "Hair falls out. Scientific name: Alopecia.",
          category: "Overview"
      },
      {
          question: "What causes Hair Loss?",
          answer: "Iron/protein deficiency, high sugar.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Hair Loss?",
          answer: "Hair follicles go dormant but stay alive; it can regrow.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Hair Loss?",
          answer: "Eggs, berries, leafy greens.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Hair Loss?",
          answer: "Biotin, Saw Palmetto, Iron, Collagen.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Hair Loss?",
          answer: "Scalp massage; stress reduction.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Hair Loss typically become a concern?",
          answer: "Hair Loss typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Eggs, berries, leafy greens.\" help with Hair Loss?",
          answer: "Yes \u2014 Eggs, berries, leafy greens. is one of the natural approaches recommended for Hair Loss.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Hair Loss?",
          answer: "Hair Loss is also referred to as Alopecia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'rosacea',
    title: 'Rosacea',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Red face, pimples.',
    problem: 'Spicy food, alcohol, sun dilate vessels.',
    solution: 'Trigger-free diet (no spicy/hot foods).',
    naturalApproach: ['Trigger-free diet (no spicy/hot foods).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Rosacea | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Rosacea (Rosacea): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Rosacea',
    scientificName: 'Rosacea',
    cause: 'Spicy food, alcohol, sun dilate vessels.',
    hiddenFact: 'Triggered by hot drinks, spicy food, and alcohol.',
    whenAge: '30s-50s',
    herbs: 'Green tea extract, Zinc, Omega-3.',
    lifestyle: 'Sunscreen; gentle skincare.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Rosacea?",
          answer: "Red face, pimples. Scientific name: Rosacea.",
          category: "Overview"
      },
      {
          question: "What causes Rosacea?",
          answer: "Spicy food, alcohol, sun dilate vessels.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Rosacea?",
          answer: "Triggered by hot drinks, spicy food, and alcohol.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Rosacea?",
          answer: "Trigger-free diet (no spicy/hot foods).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Rosacea?",
          answer: "Green tea extract, Zinc, Omega-3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Rosacea?",
          answer: "Sunscreen; gentle skincare.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Rosacea typically become a concern?",
          answer: "Rosacea typically becomes a concern around 30s-50s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Trigger-free diet (no spicy/hot foods).\" help with Rosacea?",
          answer: "Yes \u2014 Trigger-free diet (no spicy/hot foods). is one of the natural approaches recommended for Rosacea.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Rosacea?",
          answer: "Rosacea is also referred to as Rosacea.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dandruff',
    title: 'Dandruff',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Flaky, itchy scalp.',
    problem: 'Sugar and stress feed yeast.',
    solution: 'Low-sugar diet, probiotics.',
    naturalApproach: ['Low-sugar diet, probiotics.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Dandruff | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Dandruff (Seborrheic Dermatitis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Dandruff',
    scientificName: 'Seborrheic Dermatitis',
    cause: 'Sugar and stress feed yeast.',
    hiddenFact: 'The yeast (Malassezia) lives on everyone\'s scalp but overgrows.',
    whenAge: 'Teens+',
    herbs: 'Zinc, Starflower oil, Tea tree oil.',
    lifestyle: 'Manage stress; anti-dandruff shampoos.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Dandruff?",
          answer: "Flaky, itchy scalp. Scientific name: Seborrheic Dermatitis.",
          category: "Overview"
      },
      {
          question: "What causes Dandruff?",
          answer: "Sugar and stress feed yeast.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Dandruff?",
          answer: "The yeast (Malassezia) lives on everyone's scalp but overgrows.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Dandruff?",
          answer: "Low-sugar diet, probiotics.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Dandruff?",
          answer: "Zinc, Starflower oil, Tea tree oil.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Dandruff?",
          answer: "Manage stress; anti-dandruff shampoos.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Dandruff typically become a concern?",
          answer: "Dandruff typically becomes a concern around Teens+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-sugar diet, probiotics.\" help with Dandruff?",
          answer: "Yes \u2014 Low-sugar diet, probiotics. is one of the natural approaches recommended for Dandruff.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Dandruff?",
          answer: "Dandruff is also referred to as Seborrheic Dermatitis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'tooth-decay',
    title: 'Tooth Decay',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Destruction of enamel.',
    problem: 'Sugar feeds plaque bacteria.',
    solution: 'No sugar; xylitol gum; crunchy veggies.',
    naturalApproach: ['No sugar; xylitol gum; crunchy veggies.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Tooth Decay | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Tooth Decay (Dental Caries): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Tooth Decay',
    scientificName: 'Dental Caries',
    cause: 'Sugar feeds plaque bacteria.',
    hiddenFact: 'It is the most widespread disease worldwide.',
    whenAge: 'All ages',
    herbs: 'Fluoride, Calcium, Vit D.',
    lifestyle: 'Brushing/flossing; regular dental visits.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Tooth Decay?",
          answer: "Destruction of enamel. Scientific name: Dental Caries.",
          category: "Overview"
      },
      {
          question: "What causes Tooth Decay?",
          answer: "Sugar feeds plaque bacteria.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Tooth Decay?",
          answer: "It is the most widespread disease worldwide.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Tooth Decay?",
          answer: "No sugar; xylitol gum; crunchy veggies.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Tooth Decay?",
          answer: "Fluoride, Calcium, Vit D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Tooth Decay?",
          answer: "Brushing/flossing; regular dental visits.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Tooth Decay typically become a concern?",
          answer: "Tooth Decay typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"No sugar; xylitol gum; crunchy veggies.\" help with Tooth Decay?",
          answer: "Yes \u2014 No sugar; xylitol gum; crunchy veggies. is one of the natural approaches recommended for Tooth Decay.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Tooth Decay?",
          answer: "Tooth Decay is also referred to as Dental Caries.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'gum-disease',
    title: 'Gum Disease',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Gums pull from teeth.',
    problem: 'Sugar/smoking destroy bone.',
    solution: 'Low sugar, high Vit C.',
    naturalApproach: ['Low sugar, high Vit C.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Gum Disease | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Gum Disease (Periodontitis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Gum Disease',
    scientificName: 'Periodontitis',
    cause: 'Sugar/smoking destroy bone.',
    hiddenFact: 'Blood on the toothbrush is the first warning sign.',
    whenAge: '30s+',
    herbs: 'CoQ10, Vitamin C, Probiotics.',
    lifestyle: 'Quit smoking; water flosser.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Gum Disease?",
          answer: "Gums pull from teeth. Scientific name: Periodontitis.",
          category: "Overview"
      },
      {
          question: "What causes Gum Disease?",
          answer: "Sugar/smoking destroy bone.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Gum Disease?",
          answer: "Blood on the toothbrush is the first warning sign.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Gum Disease?",
          answer: "Low sugar, high Vit C.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Gum Disease?",
          answer: "CoQ10, Vitamin C, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Gum Disease?",
          answer: "Quit smoking; water flosser.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Gum Disease typically become a concern?",
          answer: "Gum Disease typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low sugar, high Vit C.\" help with Gum Disease?",
          answer: "Yes \u2014 Low sugar, high Vit C. is one of the natural approaches recommended for Gum Disease.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Gum Disease?",
          answer: "Gum Disease is also referred to as Periodontitis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'mouth-ulcers',
    title: 'Mouth Ulcers',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Painful mouth sores.',
    problem: 'Stress, B12/iron deficiency.',
    solution: 'Soft foods, avoid acidic/spicy.',
    naturalApproach: ['Soft foods, avoid acidic/spicy.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Mouth Ulcers | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Mouth Ulcers (Aphthous Ulcers): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Mouth Ulcers',
    scientificName: 'Aphthous Ulcers',
    cause: 'Stress, B12/iron deficiency.',
    hiddenFact: 'Canker sores are not cold sores (not contagious).',
    whenAge: 'All ages',
    herbs: 'B12, Folate, Iron, Licorice root.',
    lifestyle: 'Stress management; gentle toothpaste (SLS-free).',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Mouth Ulcers?",
          answer: "Painful mouth sores. Scientific name: Aphthous Ulcers.",
          category: "Overview"
      },
      {
          question: "What causes Mouth Ulcers?",
          answer: "Stress, B12/iron deficiency.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Mouth Ulcers?",
          answer: "Canker sores are not cold sores (not contagious).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Mouth Ulcers?",
          answer: "Soft foods, avoid acidic/spicy.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Mouth Ulcers?",
          answer: "B12, Folate, Iron, Licorice root.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Mouth Ulcers?",
          answer: "Stress management; gentle toothpaste (SLS-free).",
          category: "Lifestyle"
      },
      {
          question: "At what age does Mouth Ulcers typically become a concern?",
          answer: "Mouth Ulcers typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Soft foods, avoid acidic/spicy.\" help with Mouth Ulcers?",
          answer: "Yes \u2014 Soft foods, avoid acidic/spicy. is one of the natural approaches recommended for Mouth Ulcers.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Mouth Ulcers?",
          answer: "Mouth Ulcers is also referred to as Aphthous Ulcers.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'cataracts-macular-degeneration',
    title: 'Cataracts / Macular Degeneration',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Cloudy lens / central vision loss.',
    problem: 'UV light, high sugar cloud eye.',
    solution: 'Dark leafy greens, orange veggies.',
    naturalApproach: ['Dark leafy greens, orange veggies.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Cataracts / Macular Degeneration | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Cataracts / Macular Degeneration (Cataract / AMD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Cataracts / Macular Degeneration',
    scientificName: 'Cataract / AMD',
    cause: 'UV light, high sugar cloud eye.',
    hiddenFact: 'The lens keeps growing throughout life, eventually clouding.',
    whenAge: '60s+',
    herbs: 'Lutein, Zeaxanthin, Vit C, Zinc.',
    lifestyle: 'Wear UV sunglasses; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Cataracts / Macular Degeneration?",
          answer: "Cloudy lens / central vision loss. Scientific name: Cataract / AMD.",
          category: "Overview"
      },
      {
          question: "What causes Cataracts / Macular Degeneration?",
          answer: "UV light, high sugar cloud eye.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Cataracts / Macular Degeneration?",
          answer: "The lens keeps growing throughout life, eventually clouding.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Cataracts / Macular Degeneration?",
          answer: "Dark leafy greens, orange veggies.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Cataracts / Macular Degeneration?",
          answer: "Lutein, Zeaxanthin, Vit C, Zinc.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Cataracts / Macular Degeneration?",
          answer: "Wear UV sunglasses; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Cataracts / Macular Degeneration typically become a concern?",
          answer: "Cataracts / Macular Degeneration typically becomes a concern around 60s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Dark leafy greens, orange veggies.\" help with Cataracts / Macular Degeneration?",
          answer: "Yes \u2014 Dark leafy greens, orange veggies. is one of the natural approaches recommended for Cataracts / Macular Degeneration.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Cataracts / Macular Degeneration?",
          answer: "Cataracts / Macular Degeneration is also referred to as Cataract / AMD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dry-eye',
    title: 'Dry Eye',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Gritty, dry eyes.',
    problem: 'Screens + lack of Omega-3s.',
    solution: 'Omega-3 rich fish, chia seeds.',
    naturalApproach: ['Omega-3 rich fish, chia seeds.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Dry Eye | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Dry Eye (Keratoconjunctivitis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Dry Eye',
    scientificName: 'Keratoconjunctivitis',
    cause: 'Screens + lack of Omega-3s.',
    hiddenFact: 'It\'s often a lack of oil (meibomian gland), not lack of water.',
    whenAge: '40s+',
    herbs: 'Fish Oil, Flaxseed Oil, Vitamin A.',
    lifestyle: '20-20-20 screen rule; humidifier.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Dry Eye?",
          answer: "Gritty, dry eyes. Scientific name: Keratoconjunctivitis.",
          category: "Overview"
      },
      {
          question: "What causes Dry Eye?",
          answer: "Screens + lack of Omega-3s.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Dry Eye?",
          answer: "It's often a lack of oil (meibomian gland), not lack of water.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Dry Eye?",
          answer: "Omega-3 rich fish, chia seeds.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Dry Eye?",
          answer: "Fish Oil, Flaxseed Oil, Vitamin A.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Dry Eye?",
          answer: "20-20-20 screen rule; humidifier.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Dry Eye typically become a concern?",
          answer: "Dry Eye typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Omega-3 rich fish, chia seeds.\" help with Dry Eye?",
          answer: "Yes \u2014 Omega-3 rich fish, chia seeds. is one of the natural approaches recommended for Dry Eye.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Dry Eye?",
          answer: "Dry Eye is also referred to as Keratoconjunctivitis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'boils-hidradenitis',
    title: 'Boils (Hidradenitis)',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Painful boils in armpits/groin.',
    problem: 'Smoking/obesity inflame sweat glands.',
    solution: 'Anti-inflammatory, no brewer\'s yeast.',
    naturalApproach: ['Anti-inflammatory, no brewer\'s yeast.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Boils (Hidradenitis) | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Boils (Hidradenitis) (Hidradenitis Suppurativa): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Boils (Hidradenitis)',
    scientificName: 'Hidradenitis Suppurativa',
    cause: 'Smoking/obesity inflame sweat glands.',
    hiddenFact: 'Brewers yeast and potatoes can trigger flare-ups.',
    whenAge: '20s-40s',
    herbs: 'Turmeric, Zinc, Omega-3.',
    lifestyle: 'Quit smoking; loose clothing.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Boils (Hidradenitis)?",
          answer: "Painful boils in armpits/groin. Scientific name: Hidradenitis Suppurativa.",
          category: "Overview"
      },
      {
          question: "What causes Boils (Hidradenitis)?",
          answer: "Smoking/obesity inflame sweat glands.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Boils (Hidradenitis)?",
          answer: "Brewers yeast and potatoes can trigger flare-ups.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Boils (Hidradenitis)?",
          answer: "Anti-inflammatory, no brewer's yeast.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Boils (Hidradenitis)?",
          answer: "Turmeric, Zinc, Omega-3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Boils (Hidradenitis)?",
          answer: "Quit smoking; loose clothing.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Boils (Hidradenitis) typically become a concern?",
          answer: "Boils (Hidradenitis) typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory, no brewer's yeast.\" help with Boils (Hidradenitis)?",
          answer: "Yes \u2014 Anti-inflammatory, no brewer's yeast. is one of the natural approaches recommended for Boils (Hidradenitis).",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Boils (Hidradenitis)?",
          answer: "Boils (Hidradenitis) is also referred to as Hidradenitis Suppurativa.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'cold-sores',
    title: 'Cold Sores',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Blister on lip.',
    problem: 'Arginine foods + stress wake virus.',
    solution: 'Lysine-rich foods (fish, dairy).',
    naturalApproach: ['Lysine-rich foods (fish, dairy).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Cold Sores | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Cold Sores (Herpes Labialis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Cold Sores',
    scientificName: 'Herpes Labialis',
    cause: 'Arginine foods + stress wake virus.',
    hiddenFact: 'The virus hides in your spinal nerves for decades.',
    whenAge: 'All ages',
    herbs: 'Lysine, Lemon Balm, Vitamin C.',
    lifestyle: 'Manage stress; use SPF lip balm.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Cold Sores?",
          answer: "Blister on lip. Scientific name: Herpes Labialis.",
          category: "Overview"
      },
      {
          question: "What causes Cold Sores?",
          answer: "Arginine foods + stress wake virus.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Cold Sores?",
          answer: "The virus hides in your spinal nerves for decades.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Cold Sores?",
          answer: "Lysine-rich foods (fish, dairy).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Cold Sores?",
          answer: "Lysine, Lemon Balm, Vitamin C.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Cold Sores?",
          answer: "Manage stress; use SPF lip balm.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Cold Sores typically become a concern?",
          answer: "Cold Sores typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Lysine-rich foods (fish, dairy).\" help with Cold Sores?",
          answer: "Yes \u2014 Lysine-rich foods (fish, dairy). is one of the natural approaches recommended for Cold Sores.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Cold Sores?",
          answer: "Cold Sores is also referred to as Herpes Labialis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dental-erosion',
    title: 'Dental Erosion',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Melting tooth enamel.',
    problem: 'Carbonated sodas, lemon water.',
    solution: 'Limit acidic drinks, use straw.',
    naturalApproach: ['Limit acidic drinks, use straw.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Dental Erosion | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Dental Erosion (Enamel Erosion): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Dental Erosion',
    scientificName: 'Enamel Erosion',
    cause: 'Carbonated sodas, lemon water.',
    hiddenFact: 'Acid reflux (GERD) at night silently melts back teeth.',
    whenAge: 'All ages',
    herbs: 'Calcium, Fluoride mouthwash.',
    lifestyle: 'Rinse with water after acid/vomit.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Dental Erosion?",
          answer: "Melting tooth enamel. Scientific name: Enamel Erosion.",
          category: "Overview"
      },
      {
          question: "What causes Dental Erosion?",
          answer: "Carbonated sodas, lemon water.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Dental Erosion?",
          answer: "Acid reflux (GERD) at night silently melts back teeth.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Dental Erosion?",
          answer: "Limit acidic drinks, use straw.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Dental Erosion?",
          answer: "Calcium, Fluoride mouthwash.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Dental Erosion?",
          answer: "Rinse with water after acid/vomit.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Dental Erosion typically become a concern?",
          answer: "Dental Erosion typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Limit acidic drinks, use straw.\" help with Dental Erosion?",
          answer: "Yes \u2014 Limit acidic drinks, use straw. is one of the natural approaches recommended for Dental Erosion.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Dental Erosion?",
          answer: "Dental Erosion is also referred to as Enamel Erosion.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'sunburn-skin-aging',
    title: 'Sunburn / Skin Aging',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Red, damaged skin.',
    problem: 'Excessive sun and bad diet.',
    solution: 'Tomatoes (lycopene), dark chocolate.',
    naturalApproach: ['Tomatoes (lycopene), dark chocolate.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Sunburn / Skin Aging | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Sunburn / Skin Aging (Photoaging): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Sunburn / Skin Aging',
    scientificName: 'Photoaging',
    cause: 'Excessive sun and bad diet.',
    hiddenFact: 'The burn is radiation damage to skin cell DNA.',
    whenAge: 'All ages',
    herbs: 'Astaxanthin, Vitamin C, Vitamin E.',
    lifestyle: 'Sunscreen; protective clothing.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Sunburn / Skin Aging?",
          answer: "Red, damaged skin. Scientific name: Photoaging.",
          category: "Overview"
      },
      {
          question: "What causes Sunburn / Skin Aging?",
          answer: "Excessive sun and bad diet.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Sunburn / Skin Aging?",
          answer: "The burn is radiation damage to skin cell DNA.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Sunburn / Skin Aging?",
          answer: "Tomatoes (lycopene), dark chocolate.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Sunburn / Skin Aging?",
          answer: "Astaxanthin, Vitamin C, Vitamin E.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Sunburn / Skin Aging?",
          answer: "Sunscreen; protective clothing.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Sunburn / Skin Aging typically become a concern?",
          answer: "Sunburn / Skin Aging typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Tomatoes (lycopene), dark chocolate.\" help with Sunburn / Skin Aging?",
          answer: "Yes \u2014 Tomatoes (lycopene), dark chocolate. is one of the natural approaches recommended for Sunburn / Skin Aging.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Sunburn / Skin Aging?",
          answer: "Sunburn / Skin Aging is also referred to as Photoaging.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'night-blindness',
    title: 'Night Blindness',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Can\'t see in dark.',
    problem: 'Lack of Vit A destroys retina.',
    solution: 'Carrots, sweet potatoes, liver.',
    naturalApproach: ['Carrots, sweet potatoes, liver.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Night Blindness | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Night Blindness (Vitamin A Deficiency): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Night Blindness',
    scientificName: 'Vitamin A Deficiency',
    cause: 'Lack of Vit A destroys retina.',
    hiddenFact: 'The retina needs Vitamin A to form rhodopsin for dark vision.',
    whenAge: 'All ages',
    herbs: 'Vitamin A, Beta-carotene.',
    lifestyle: 'Correct underlying gut absorption issues.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Night Blindness?",
          answer: "Can't see in dark. Scientific name: Vitamin A Deficiency.",
          category: "Overview"
      },
      {
          question: "What causes Night Blindness?",
          answer: "Lack of Vit A destroys retina.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Night Blindness?",
          answer: "The retina needs Vitamin A to form rhodopsin for dark vision.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Night Blindness?",
          answer: "Carrots, sweet potatoes, liver.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Night Blindness?",
          answer: "Vitamin A, Beta-carotene.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Night Blindness?",
          answer: "Correct underlying gut absorption issues.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Night Blindness typically become a concern?",
          answer: "Night Blindness typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Carrots, sweet potatoes, liver.\" help with Night Blindness?",
          answer: "Yes \u2014 Carrots, sweet potatoes, liver. is one of the natural approaches recommended for Night Blindness.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Night Blindness?",
          answer: "Night Blindness is also referred to as Vitamin A Deficiency.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'vitiligo',
    title: 'Vitiligo',
    category: CategoryType.APPEARANCE,
    shortDesc: 'White skin patches.',
    problem: 'Autoimmune destruction of pigment.',
    solution: 'Antioxidant-rich foods, B12/Folate.',
    naturalApproach: ['Antioxidant-rich foods, B12/Folate.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vitiligo | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Vitiligo (Vitiligo): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vitiligo',
    scientificName: 'Vitiligo',
    cause: 'Autoimmune destruction of pigment.',
    hiddenFact: 'Michael Jackson had this; it destroys melanocytes.',
    whenAge: '20s+',
    herbs: 'Ginkgo Biloba, Vitamin C, Zinc.',
    lifestyle: 'Sun protection; stress management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Vitiligo?",
          answer: "White skin patches. Scientific name: Vitiligo.",
          category: "Overview"
      },
      {
          question: "What causes Vitiligo?",
          answer: "Autoimmune destruction of pigment.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Vitiligo?",
          answer: "Michael Jackson had this; it destroys melanocytes.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Vitiligo?",
          answer: "Antioxidant-rich foods, B12/Folate.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Vitiligo?",
          answer: "Ginkgo Biloba, Vitamin C, Zinc.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Vitiligo?",
          answer: "Sun protection; stress management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Vitiligo typically become a concern?",
          answer: "Vitiligo typically becomes a concern around 20s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Antioxidant-rich foods, B12/Folate.\" help with Vitiligo?",
          answer: "Yes \u2014 Antioxidant-rich foods, B12/Folate. is one of the natural approaches recommended for Vitiligo.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Vitiligo?",
          answer: "Vitiligo is also referred to as Vitiligo.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'scurvy',
    title: 'Scurvy',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Bleeding gums.',
    problem: 'Zero fresh fruit/veg.',
    solution: 'Citrus, bell peppers, berries.',
    naturalApproach: ['Citrus, bell peppers, berries.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Scurvy | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Scurvy (Vitamin C Deficiency): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Scurvy',
    scientificName: 'Vitamin C Deficiency',
    cause: 'Zero fresh fruit/veg.',
    hiddenFact: 'Making a comeback in food-insecure areas.',
    whenAge: 'All ages',
    herbs: 'Ascorbic Acid (Vitamin C).',
    lifestyle: 'Eat fresh produce daily.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Scurvy?",
          answer: "Bleeding gums. Scientific name: Vitamin C Deficiency.",
          category: "Overview"
      },
      {
          question: "What causes Scurvy?",
          answer: "Zero fresh fruit/veg.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Scurvy?",
          answer: "Making a comeback in food-insecure areas.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Scurvy?",
          answer: "Citrus, bell peppers, berries.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Scurvy?",
          answer: "Ascorbic Acid (Vitamin C).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Scurvy?",
          answer: "Eat fresh produce daily.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Scurvy typically become a concern?",
          answer: "Scurvy typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Citrus, bell peppers, berries.\" help with Scurvy?",
          answer: "Yes \u2014 Citrus, bell peppers, berries. is one of the natural approaches recommended for Scurvy.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Scurvy?",
          answer: "Scurvy is also referred to as Vitamin C Deficiency.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'rickets',
    title: 'Rickets',
    category: CategoryType.APPEARANCE,
    shortDesc: 'Soft, bent bones.',
    problem: 'Kids kept indoors + no dairy.',
    solution: 'Fortified milk, cod liver oil.',
    naturalApproach: ['Fortified milk, cod liver oil.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Rickets | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Rickets (Vitamin D Deficiency (Kids)): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Rickets',
    scientificName: 'Vitamin D Deficiency (Kids)',
    cause: 'Kids kept indoors + no dairy.',
    hiddenFact: 'Victorian disease returning due to indoor lifestyles.',
    whenAge: 'Childhood',
    herbs: 'Vitamin D3, Calcium.',
    lifestyle: 'Outdoor play; sunlight.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Rickets?",
          answer: "Soft, bent bones. Scientific name: Vitamin D Deficiency (Kids).",
          category: "Overview"
      },
      {
          question: "What causes Rickets?",
          answer: "Kids kept indoors + no dairy.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Rickets?",
          answer: "Victorian disease returning due to indoor lifestyles.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Rickets?",
          answer: "Fortified milk, cod liver oil.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Rickets?",
          answer: "Vitamin D3, Calcium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Rickets?",
          answer: "Outdoor play; sunlight.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Rickets typically become a concern?",
          answer: "Rickets typically becomes a concern around Childhood.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Fortified milk, cod liver oil.\" help with Rickets?",
          answer: "Yes \u2014 Fortified milk, cod liver oil. is one of the natural approaches recommended for Rickets.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Rickets?",
          answer: "Rickets is also referred to as Vitamin D Deficiency (Kids).",
          category: "Identification"
      }
  ],
  },
  {
    id: 'dental-fluorosis',
    title: 'Dental Fluorosis',
    category: CategoryType.APPEARANCE,
    shortDesc: 'White/brown tooth stains.',
    problem: 'Kids swallowing fluoride toothpaste.',
    solution: 'Use pea-sized toothpaste, monitor brushing.',
    naturalApproach: ['Use pea-sized toothpaste, monitor brushing.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Dental Fluorosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Dental Fluorosis (Enamel Fluorosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Dental Fluorosis',
    scientificName: 'Enamel Fluorosis',
    cause: 'Kids swallowing fluoride toothpaste.',
    hiddenFact: 'Only occurs while adult teeth are forming under the gums.',
    whenAge: 'Childhood',
    herbs: 'None (preventative).',
    lifestyle: 'Supervise brushing; use low-fluoride water.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Dental Fluorosis?",
          answer: "White/brown tooth stains. Scientific name: Enamel Fluorosis.",
          category: "Overview"
      },
      {
          question: "What causes Dental Fluorosis?",
          answer: "Kids swallowing fluoride toothpaste.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Dental Fluorosis?",
          answer: "Only occurs while adult teeth are forming under the gums.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Dental Fluorosis?",
          answer: "Use pea-sized toothpaste, monitor brushing.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Dental Fluorosis?",
          answer: "None (preventative).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Dental Fluorosis?",
          answer: "Supervise brushing; use low-fluoride water.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Dental Fluorosis typically become a concern?",
          answer: "Dental Fluorosis typically becomes a concern around Childhood.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Dental Fluorosis?",
          answer: "Yes \u2014 Use pea-sized toothpaste, monitor brushing. is one of the natural approaches recommended for Dental Fluorosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Dental Fluorosis?",
          answer: "Dental Fluorosis is also referred to as Enamel Fluorosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'ckd-dialysis-diet',
    title: 'CKD / Dialysis Diet',
    category: CategoryType.METABOLIC,
    shortDesc: 'Kidneys losing function.',
    problem: 'Uncontrolled BP/Diabetes.',
    solution: 'Low potassium, low phosphorus, low protein.',
    naturalApproach: ['Low potassium, low phosphorus, low protein.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'CKD / Dialysis Diet | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about CKD / Dialysis Diet (Chronic Kidney Disease): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'CKD / Dialysis Diet',
    scientificName: 'Chronic Kidney Disease',
    cause: 'Uncontrolled BP/Diabetes.',
    hiddenFact: 'Kidneys don\'t show symptoms until 70-80% function is lost.',
    whenAge: '50s+',
    herbs: 'Renal vitamins, Iron.',
    lifestyle: 'Strict fluid limits; BP control.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is CKD / Dialysis Diet?",
          answer: "Kidneys losing function. Scientific name: Chronic Kidney Disease.",
          category: "Overview"
      },
      {
          question: "What causes CKD / Dialysis Diet?",
          answer: "Uncontrolled BP/Diabetes.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about CKD / Dialysis Diet?",
          answer: "Kidneys don't show symptoms until 70-80% function is lost.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with CKD / Dialysis Diet?",
          answer: "Low potassium, low phosphorus, low protein.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with CKD / Dialysis Diet?",
          answer: "Renal vitamins, Iron.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help CKD / Dialysis Diet?",
          answer: "Strict fluid limits; BP control.",
          category: "Lifestyle"
      },
      {
          question: "At what age does CKD / Dialysis Diet typically become a concern?",
          answer: "CKD / Dialysis Diet typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with CKD / Dialysis Diet?",
          answer: "Yes \u2014 Low potassium, low phosphorus, low protein. is one of the natural approaches recommended for CKD / Dialysis Diet.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for CKD / Dialysis Diet?",
          answer: "CKD / Dialysis Diet is also referred to as Chronic Kidney Disease.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'liver-encephalopathy',
    title: 'Liver Encephalopathy',
    category: CategoryType.METABOLIC,
    shortDesc: 'Brain fog from liver fail.',
    problem: 'Failing liver lets ammonia reach brain.',
    solution: 'Plant-based low-protein to lower ammonia.',
    naturalApproach: ['Plant-based low-protein to lower ammonia.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Liver Encephalopathy | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Liver Encephalopathy (Hepatic Encephalopathy): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Liver Encephalopathy',
    scientificName: 'Hepatic Encephalopathy',
    cause: 'Failing liver lets ammonia reach brain.',
    hiddenFact: 'Eating too much red meat creates ammonia that poisons the brain.',
    whenAge: '50s+',
    herbs: 'Lactulose, Branch Chain Aminos.',
    lifestyle: 'Treat constipation; zero alcohol.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Liver Encephalopathy?",
          answer: "Brain fog from liver fail. Scientific name: Hepatic Encephalopathy.",
          category: "Overview"
      },
      {
          question: "What causes Liver Encephalopathy?",
          answer: "Failing liver lets ammonia reach brain.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Liver Encephalopathy?",
          answer: "Eating too much red meat creates ammonia that poisons the brain.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Liver Encephalopathy?",
          answer: "Plant-based low-protein to lower ammonia.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Liver Encephalopathy?",
          answer: "Lactulose, Branch Chain Aminos.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Liver Encephalopathy?",
          answer: "Treat constipation; zero alcohol.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Liver Encephalopathy typically become a concern?",
          answer: "Liver Encephalopathy typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Liver Encephalopathy?",
          answer: "Yes \u2014 Plant-based low-protein to lower ammonia. is one of the natural approaches recommended for Liver Encephalopathy.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Liver Encephalopathy?",
          answer: "Liver Encephalopathy is also referred to as Hepatic Encephalopathy.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'smokers-cough',
    title: 'Smoker\'s Cough',
    category: CategoryType.METABOLIC,
    shortDesc: 'Lung airflow blockage.',
    problem: 'Smoking permanently destroys lung sacs.',
    solution: 'High antioxidant foods.',
    naturalApproach: ['High antioxidant foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Smoker\'s Cough | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Smoker\'s Cough (COPD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Smoker\'s Cough',
    scientificName: 'COPD',
    cause: 'Smoking permanently destroys lung sacs.',
    hiddenFact: 'Once lung tissue is destroyed, it does not grow back.',
    whenAge: '50s+',
    herbs: 'NAC, Vitamin C, Magnesium.',
    lifestyle: 'Quit smoking; pulmonary rehab.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Smoker's Cough?",
          answer: "Lung airflow blockage. Scientific name: COPD.",
          category: "Overview"
      },
      {
          question: "What causes Smoker's Cough?",
          answer: "Smoking permanently destroys lung sacs.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Smoker's Cough?",
          answer: "Once lung tissue is destroyed, it does not grow back.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Smoker's Cough?",
          answer: "High antioxidant foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Smoker's Cough?",
          answer: "NAC, Vitamin C, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Smoker's Cough?",
          answer: "Quit smoking; pulmonary rehab.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Smoker's Cough typically become a concern?",
          answer: "Smoker's Cough typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High antioxidant foods.\" help with Smoker's Cough?",
          answer: "Yes \u2014 High antioxidant foods. is one of the natural approaches recommended for Smoker's Cough.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Smoker's Cough?",
          answer: "Smoker's Cough is also referred to as COPD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'alcoholic-liver-disease',
    title: 'Alcoholic Liver Disease',
    category: CategoryType.METABOLIC,
    shortDesc: 'Liver poisoned by alcohol.',
    problem: 'Chronic alcohol poisons liver cells.',
    solution: 'High protein, high B-vitamins, low fat.',
    naturalApproach: ['High protein, high B-vitamins, low fat.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Alcoholic Liver Disease | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Alcoholic Liver Disease (Alcohol-Related Liver Disease): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Alcoholic Liver Disease',
    scientificName: 'Alcohol-Related Liver Disease',
    cause: 'Chronic alcohol poisons liver cells.',
    hiddenFact: 'The liver can regenerate, but cirrhosis is irreversible scarring.',
    whenAge: '40s+',
    herbs: 'Milk Thistle, NAC, Phosphatidylcholine.',
    lifestyle: 'Absolute alcohol cessation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Alcoholic Liver Disease?",
          answer: "Liver poisoned by alcohol. Scientific name: Alcohol-Related Liver Disease.",
          category: "Overview"
      },
      {
          question: "What causes Alcoholic Liver Disease?",
          answer: "Chronic alcohol poisons liver cells.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Alcoholic Liver Disease?",
          answer: "The liver can regenerate, but cirrhosis is irreversible scarring.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Alcoholic Liver Disease?",
          answer: "High protein, high B-vitamins, low fat.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Alcoholic Liver Disease?",
          answer: "Milk Thistle, NAC, Phosphatidylcholine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Alcoholic Liver Disease?",
          answer: "Absolute alcohol cessation.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Alcoholic Liver Disease typically become a concern?",
          answer: "Alcoholic Liver Disease typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High protein, high B-vitamins, low fat.\" help with Alcoholic Liver Disease?",
          answer: "Yes \u2014 High protein, high B-vitamins, low fat. is one of the natural approaches recommended for Alcoholic Liver Disease.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Alcoholic Liver Disease?",
          answer: "Alcoholic Liver Disease is also referred to as Alcohol-Related Liver Disease.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'diabetic-neuropathy',
    title: 'Diabetic Neuropathy',
    category: CategoryType.METABOLIC,
    shortDesc: 'Numb feet/legs.',
    problem: 'High sugar destroys leg nerve endings.',
    solution: 'Perfect blood sugar control (low carb).',
    naturalApproach: ['Perfect blood sugar control (low carb).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Diabetic Neuropathy | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Diabetic Neuropathy (Diabetic Neuropathy): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Diabetic Neuropathy',
    scientificName: 'Diabetic Neuropathy',
    cause: 'High sugar destroys leg nerve endings.',
    hiddenFact: 'Patients step on glass and don\'t feel it, causing infection.',
    whenAge: '50s+',
    herbs: 'Alpha-Lipoic Acid, B12, Benfotiamine.',
    lifestyle: 'Daily foot checks; proper footwear.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Diabetic Neuropathy?",
          answer: "Numb feet/legs. Scientific name: Diabetic Neuropathy.",
          category: "Overview"
      },
      {
          question: "What causes Diabetic Neuropathy?",
          answer: "High sugar destroys leg nerve endings.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Diabetic Neuropathy?",
          answer: "Patients step on glass and don't feel it, causing infection.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Diabetic Neuropathy?",
          answer: "Perfect blood sugar control (low carb).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Diabetic Neuropathy?",
          answer: "Alpha-Lipoic Acid, B12, Benfotiamine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Diabetic Neuropathy?",
          answer: "Daily foot checks; proper footwear.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Diabetic Neuropathy typically become a concern?",
          answer: "Diabetic Neuropathy typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Perfect blood sugar control (low carb).\" help with Diabetic Neuropathy?",
          answer: "Yes \u2014 Perfect blood sugar control (low carb). is one of the natural approaches recommended for Diabetic Neuropathy.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Diabetic Neuropathy?",
          answer: "Diabetic Neuropathy is also referred to as Diabetic Neuropathy.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'diabetic-retinopathy',
    title: 'Diabetic Retinopathy',
    category: CategoryType.METABOLIC,
    shortDesc: 'Blindness from diabetes.',
    problem: 'High sugar bursts eye blood vessels.',
    solution: 'Low-glycemic diet, no sugar.',
    naturalApproach: ['Low-glycemic diet, no sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Diabetic Retinopathy | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Diabetic Retinopathy (Diabetic Retinopathy): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Diabetic Retinopathy',
    scientificName: 'Diabetic Retinopathy',
    cause: 'High sugar bursts eye blood vessels.',
    hiddenFact: 'You can lose 40% of vision before noticing it.',
    whenAge: '50s+',
    herbs: 'Lutein, Bilberry, Astaxanthin.',
    lifestyle: 'Annual eye exams; BP/sugar control.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Diabetic Retinopathy?",
          answer: "Blindness from diabetes. Scientific name: Diabetic Retinopathy.",
          category: "Overview"
      },
      {
          question: "What causes Diabetic Retinopathy?",
          answer: "High sugar bursts eye blood vessels.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Diabetic Retinopathy?",
          answer: "You can lose 40% of vision before noticing it.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Diabetic Retinopathy?",
          answer: "Low-glycemic diet, no sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Diabetic Retinopathy?",
          answer: "Lutein, Bilberry, Astaxanthin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Diabetic Retinopathy?",
          answer: "Annual eye exams; BP/sugar control.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Diabetic Retinopathy typically become a concern?",
          answer: "Diabetic Retinopathy typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-glycemic diet, no sugar.\" help with Diabetic Retinopathy?",
          answer: "Yes \u2014 Low-glycemic diet, no sugar. is one of the natural approaches recommended for Diabetic Retinopathy.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Diabetic Retinopathy?",
          answer: "Diabetic Retinopathy is also referred to as Diabetic Retinopathy.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pku',
    title: 'PKU',
    category: CategoryType.METABOLIC,
    shortDesc: 'Can\'t process protein.',
    problem: 'Genetic lack of enzyme.',
    solution: 'Strict low-protein medical diet.',
    naturalApproach: ['Strict low-protein medical diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'PKU | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about PKU (Phenylketonuria): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'PKU',
    scientificName: 'Phenylketonuria',
    cause: 'Genetic lack of enzyme.',
    hiddenFact: 'Eating protein (meat, dairy) causes severe brain damage.',
    whenAge: 'Birth+',
    herbs: 'Medical amino acid formula.',
    lifestyle: 'Lifelong diet adherence.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is PKU?",
          answer: "Can't process protein. Scientific name: Phenylketonuria.",
          category: "Overview"
      },
      {
          question: "What causes PKU?",
          answer: "Genetic lack of enzyme.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about PKU?",
          answer: "Eating protein (meat, dairy) causes severe brain damage.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with PKU?",
          answer: "Strict low-protein medical diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with PKU?",
          answer: "Medical amino acid formula.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help PKU?",
          answer: "Lifelong diet adherence.",
          category: "Lifestyle"
      },
      {
          question: "At what age does PKU typically become a concern?",
          answer: "PKU typically becomes a concern around Birth+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Strict low-protein medical diet.\" help with PKU?",
          answer: "Yes \u2014 Strict low-protein medical diet. is one of the natural approaches recommended for PKU.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for PKU?",
          answer: "PKU is also referred to as Phenylketonuria.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'wilsons-disease',
    title: 'Wilson\'s Disease',
    category: CategoryType.METABOLIC,
    shortDesc: 'Copper buildup in organs.',
    problem: 'Genetic defect prevents copper excretion.',
    solution: 'Avoid copper foods (shellfish, nuts, choc).',
    naturalApproach: ['Avoid copper foods (shellfish, nuts, choc).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Wilson\'s Disease | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Wilson\'s Disease (Hepatolenticular Degeneration): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Wilson\'s Disease',
    scientificName: 'Hepatolenticular Degeneration',
    cause: 'Genetic defect prevents copper excretion.',
    hiddenFact: 'Causes golden rings around the eyes (Kayser-Fleischer rings).',
    whenAge: 'Childhood-30s',
    herbs: 'Zinc (blocks copper absorption).',
    lifestyle: 'Lifelong diet + chelation therapy.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Wilson's Disease?",
          answer: "Copper buildup in organs. Scientific name: Hepatolenticular Degeneration.",
          category: "Overview"
      },
      {
          question: "What causes Wilson's Disease?",
          answer: "Genetic defect prevents copper excretion.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Wilson's Disease?",
          answer: "Causes golden rings around the eyes (Kayser-Fleischer rings).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Wilson's Disease?",
          answer: "Avoid copper foods (shellfish, nuts, choc).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Wilson's Disease?",
          answer: "Zinc (blocks copper absorption).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Wilson's Disease?",
          answer: "Lifelong diet + chelation therapy.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Wilson's Disease typically become a concern?",
          answer: "Wilson's Disease typically becomes a concern around Childhood-30s.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Wilson's Disease?",
          answer: "Yes \u2014 Avoid copper foods (shellfish, nuts, choc). is one of the natural approaches recommended for Wilson's Disease.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Wilson's Disease?",
          answer: "Wilson's Disease is also referred to as Hepatolenticular Degeneration.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'g6pd-deficiency',
    title: 'G6PD Deficiency',
    category: CategoryType.METABOLIC,
    shortDesc: 'Red blood cells burst.',
    problem: 'Genetic enzyme lack.',
    solution: 'Strictly avoid fava beans/legumes.',
    naturalApproach: ['Strictly avoid fava beans/legumes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'G6PD Deficiency | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about G6PD Deficiency (Favism): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'G6PD Deficiency',
    scientificName: 'Favism',
    cause: 'Genetic enzyme lack.',
    hiddenFact: 'Eating fava beans causes sudden, severe anemia.',
    whenAge: 'Birth+',
    herbs: 'Folic Acid, Vitamin E.',
    lifestyle: 'Avoid certain malaria drugs/sulfa drugs.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is G6PD Deficiency?",
          answer: "Red blood cells burst. Scientific name: Favism.",
          category: "Overview"
      },
      {
          question: "What causes G6PD Deficiency?",
          answer: "Genetic enzyme lack.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about G6PD Deficiency?",
          answer: "Eating fava beans causes sudden, severe anemia.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with G6PD Deficiency?",
          answer: "Strictly avoid fava beans/legumes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with G6PD Deficiency?",
          answer: "Folic Acid, Vitamin E.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help G6PD Deficiency?",
          answer: "Avoid certain malaria drugs/sulfa drugs.",
          category: "Lifestyle"
      },
      {
          question: "At what age does G6PD Deficiency typically become a concern?",
          answer: "G6PD Deficiency typically becomes a concern around Birth+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Strictly avoid fava beans/legumes.\" help with G6PD Deficiency?",
          answer: "Yes \u2014 Strictly avoid fava beans/legumes. is one of the natural approaches recommended for G6PD Deficiency.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for G6PD Deficiency?",
          answer: "G6PD Deficiency is also referred to as Favism.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'lactose-intolerance',
    title: 'Lactose Intolerance',
    category: CategoryType.METABOLIC,
    shortDesc: 'Can\'t digest dairy.',
    problem: 'Lack of lactase enzyme.',
    solution: 'Dairy-free milk/cheese.',
    naturalApproach: ['Dairy-free milk/cheese.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Lactose Intolerance | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Lactose Intolerance (Lactose Malabsorption): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Lactose Intolerance',
    scientificName: 'Lactose Malabsorption',
    cause: 'Lack of lactase enzyme.',
    hiddenFact: 'Normal mammalian state; keeping it into adulthood is a mutation.',
    whenAge: 'Teens+',
    herbs: 'Lactase enzyme pills.',
    lifestyle: 'Read labels for hidden dairy.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Lactose Intolerance?",
          answer: "Can't digest dairy. Scientific name: Lactose Malabsorption.",
          category: "Overview"
      },
      {
          question: "What causes Lactose Intolerance?",
          answer: "Lack of lactase enzyme.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Lactose Intolerance?",
          answer: "Normal mammalian state; keeping it into adulthood is a mutation.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Lactose Intolerance?",
          answer: "Dairy-free milk/cheese.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Lactose Intolerance?",
          answer: "Lactase enzyme pills.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Lactose Intolerance?",
          answer: "Read labels for hidden dairy.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Lactose Intolerance typically become a concern?",
          answer: "Lactose Intolerance typically becomes a concern around Teens+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Dairy-free milk/cheese.\" help with Lactose Intolerance?",
          answer: "Yes \u2014 Dairy-free milk/cheese. is one of the natural approaches recommended for Lactose Intolerance.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Lactose Intolerance?",
          answer: "Lactose Intolerance is also referred to as Lactose Malabsorption.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'hereditary-fructose-intolerance',
    title: 'Hereditary Fructose Intolerance',
    category: CategoryType.METABOLIC,
    shortDesc: 'Can\'t digest fruit sugar.',
    problem: 'Genetic enzyme lack.',
    solution: 'Strict fructose-free diet (no fruit/sugar).',
    naturalApproach: ['Strict fructose-free diet (no fruit/sugar).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Hereditary Fructose Intolerance | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Hereditary Fructose Intolerance (Fructosemia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Hereditary Fructose Intolerance',
    scientificName: 'Fructosemia',
    cause: 'Genetic enzyme lack.',
    hiddenFact: 'Eating fruit, sugar, or honey causes liver and kidney failure.',
    whenAge: 'Childhood',
    herbs: 'Multivitamins (missing fruit nutrients).',
    lifestyle: 'Lifelong strict avoidance.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Hereditary Fructose Intolerance?",
          answer: "Can't digest fruit sugar. Scientific name: Fructosemia.",
          category: "Overview"
      },
      {
          question: "What causes Hereditary Fructose Intolerance?",
          answer: "Genetic enzyme lack.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Hereditary Fructose Intolerance?",
          answer: "Eating fruit, sugar, or honey causes liver and kidney failure.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Hereditary Fructose Intolerance?",
          answer: "Strict fructose-free diet (no fruit/sugar).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Hereditary Fructose Intolerance?",
          answer: "Multivitamins (missing fruit nutrients).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Hereditary Fructose Intolerance?",
          answer: "Lifelong strict avoidance.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Hereditary Fructose Intolerance typically become a concern?",
          answer: "Hereditary Fructose Intolerance typically becomes a concern around Childhood.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Hereditary Fructose Intolerance?",
          answer: "Yes \u2014 Strict fructose-free diet (no fruit/sugar). is one of the natural approaches recommended for Hereditary Fructose Intolerance.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Hereditary Fructose Intolerance?",
          answer: "Hereditary Fructose Intolerance is also referred to as Fructosemia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'cystic-fibrosis',
    title: 'Cystic Fibrosis',
    category: CategoryType.METABOLIC,
    shortDesc: 'Thick mucus blocks organs.',
    problem: 'Genetic CFTR mutation.',
    solution: 'High-calorie, high-fat, high-salt diet.',
    naturalApproach: ['High-calorie, high-fat, high-salt diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Cystic Fibrosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Cystic Fibrosis (Cystic Fibrosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Cystic Fibrosis',
    scientificName: 'Cystic Fibrosis',
    cause: 'Genetic CFTR mutation.',
    hiddenFact: 'Sticky mucus clogs lungs and pancreas; salt tastes very salty.',
    whenAge: 'Birth+',
    herbs: 'Pancreatic enzymes, Fat-soluble vitamins.',
    lifestyle: 'Chest physiotherapy; exercise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Cystic Fibrosis?",
          answer: "Thick mucus blocks organs. Scientific name: Cystic Fibrosis.",
          category: "Overview"
      },
      {
          question: "What causes Cystic Fibrosis?",
          answer: "Genetic CFTR mutation.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Cystic Fibrosis?",
          answer: "Sticky mucus clogs lungs and pancreas; salt tastes very salty.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Cystic Fibrosis?",
          answer: "High-calorie, high-fat, high-salt diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Cystic Fibrosis?",
          answer: "Pancreatic enzymes, Fat-soluble vitamins.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Cystic Fibrosis?",
          answer: "Chest physiotherapy; exercise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Cystic Fibrosis typically become a concern?",
          answer: "Cystic Fibrosis typically becomes a concern around Birth+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High-calorie, high-fat, high-salt diet.\" help with Cystic Fibrosis?",
          answer: "Yes \u2014 High-calorie, high-fat, high-salt diet. is one of the natural approaches recommended for Cystic Fibrosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Cystic Fibrosis?",
          answer: "Cystic Fibrosis is also referred to as Cystic Fibrosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'listeria-toxo-trichinosis',
    title: 'Listeria / Toxo / Trichinosis',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Severe food poisoning.',
    problem: 'Eating unpasteurized cheese, raw meat, bad cans.',
    solution: 'Cook meat thoroughly; wash veggies.',
    naturalApproach: ['Cook meat thoroughly; wash veggies.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Listeria / Toxo / Trichinosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Listeria / Toxo / Trichinosis (Listeriosis / Toxoplasmosis / Trichinellosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Listeria / Toxo / Trichinosis',
    scientificName: 'Listeriosis / Toxoplasmosis / Trichinellosis',
    cause: 'Eating unpasteurized cheese, raw meat, bad cans.',
    hiddenFact: 'Toxo can alter brain behavior (often found in cat litter).',
    whenAge: 'All ages',
    herbs: 'None (prevention is key).',
    lifestyle: 'Safe food handling; avoid raw dairy.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Listeria / Toxo / Trichinosis?",
          answer: "Severe food poisoning. Scientific name: Listeriosis / Toxoplasmosis / Trichinellosis.",
          category: "Overview"
      },
      {
          question: "What causes Listeria / Toxo / Trichinosis?",
          answer: "Eating unpasteurized cheese, raw meat, bad cans.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Listeria / Toxo / Trichinosis?",
          answer: "Toxo can alter brain behavior (often found in cat litter).",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Listeria / Toxo / Trichinosis?",
          answer: "Cook meat thoroughly; wash veggies.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Listeria / Toxo / Trichinosis?",
          answer: "None (prevention is key).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Listeria / Toxo / Trichinosis?",
          answer: "Safe food handling; avoid raw dairy.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Listeria / Toxo / Trichinosis typically become a concern?",
          answer: "Listeria / Toxo / Trichinosis typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Cook meat thoroughly; wash veggies.\" help with Listeria / Toxo / Trichinosis?",
          answer: "Yes \u2014 Cook meat thoroughly; wash veggies. is one of the natural approaches recommended for Listeria / Toxo / Trichinosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Listeria / Toxo / Trichinosis?",
          answer: "Listeria / Toxo / Trichinosis is also referred to as Listeriosis / Toxoplasmosis / Trichinellosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'botulism',
    title: 'Botulism',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Deadly nerve toxin.',
    problem: 'Eating improperly home-canned foods.',
    solution: 'Boil home-canned foods for 10 mins.',
    naturalApproach: ['Boil home-canned foods for 10 mins.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Botulism | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Botulism (Foodborne Botulism): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Botulism',
    scientificName: 'Foodborne Botulism',
    cause: 'Eating improperly home-canned foods.',
    hiddenFact: 'The toxin blocks nerves from telling muscles to breathe.',
    whenAge: 'All ages',
    herbs: 'None (prevention is key).',
    lifestyle: 'Strict pressure-canning safety rules.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Botulism?",
          answer: "Deadly nerve toxin. Scientific name: Foodborne Botulism.",
          category: "Overview"
      },
      {
          question: "What causes Botulism?",
          answer: "Eating improperly home-canned foods.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Botulism?",
          answer: "The toxin blocks nerves from telling muscles to breathe.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Botulism?",
          answer: "Boil home-canned foods for 10 mins.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Botulism?",
          answer: "None (prevention is key).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Botulism?",
          answer: "Strict pressure-canning safety rules.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Botulism typically become a concern?",
          answer: "Botulism typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Boil home-canned foods for 10 mins.\" help with Botulism?",
          answer: "Yes \u2014 Boil home-canned foods for 10 mins. is one of the natural approaches recommended for Botulism.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Botulism?",
          answer: "Botulism is also referred to as Foodborne Botulism.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'systemic-yeast',
    title: 'Systemic Yeast',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Yeast overgrowth in gut.',
    problem: 'High sugar/antibiotics.',
    solution: 'Zero sugar, low carb, fermented foods.',
    naturalApproach: ['Zero sugar, low carb, fermented foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Systemic Yeast | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Systemic Yeast (Candidiasis (Gut)): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Systemic Yeast',
    scientificName: 'Candidiasis (Gut)',
    cause: 'High sugar/antibiotics.',
    hiddenFact: 'Yeast releases 70+ different toxins into the bloodstream.',
    whenAge: 'All ages',
    herbs: 'Oregano oil, Caprylic acid, Probiotics.',
    lifestyle: 'Cut antibiotics/sugar; stress mgmt.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Systemic Yeast?",
          answer: "Yeast overgrowth in gut. Scientific name: Candidiasis (Gut).",
          category: "Overview"
      },
      {
          question: "What causes Systemic Yeast?",
          answer: "High sugar/antibiotics.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Systemic Yeast?",
          answer: "Yeast releases 70+ different toxins into the bloodstream.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Systemic Yeast?",
          answer: "Zero sugar, low carb, fermented foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Systemic Yeast?",
          answer: "Oregano oil, Caprylic acid, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Systemic Yeast?",
          answer: "Cut antibiotics/sugar; stress mgmt.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Systemic Yeast typically become a concern?",
          answer: "Systemic Yeast typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Zero sugar, low carb, fermented foods.\" help with Systemic Yeast?",
          answer: "Yes \u2014 Zero sugar, low carb, fermented foods. is one of the natural approaches recommended for Systemic Yeast.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Systemic Yeast?",
          answer: "Systemic Yeast is also referred to as Candidiasis (Gut).",
          category: "Identification"
      }
  ],
  },
  {
    id: 'uti-cystitis',
    title: 'UTI / Cystitis',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Bladder infection.',
    problem: 'E. coli climbs urethra.',
    solution: '3L water daily.',
    naturalApproach: ['3L water daily.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'UTI / Cystitis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about UTI / Cystitis (Urinary Tract Infection): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'UTI / Cystitis',
    scientificName: 'Urinary Tract Infection',
    cause: 'E. coli climbs urethra.',
    hiddenFact: 'Dehydration lets bacteria multiply; water flushes it out.',
    whenAge: '20s+ (Women)',
    herbs: 'D-Mannose, Cranberry extract, Uva Ursi.',
    lifestyle: 'Wipe front-to-back; pee after sex.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is UTI / Cystitis?",
          answer: "Bladder infection. Scientific name: Urinary Tract Infection.",
          category: "Overview"
      },
      {
          question: "What causes UTI / Cystitis?",
          answer: "E. coli climbs urethra.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about UTI / Cystitis?",
          answer: "Dehydration lets bacteria multiply; water flushes it out.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with UTI / Cystitis?",
          answer: "3L water daily.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with UTI / Cystitis?",
          answer: "D-Mannose, Cranberry extract, Uva Ursi.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help UTI / Cystitis?",
          answer: "Wipe front-to-back; pee after sex.",
          category: "Lifestyle"
      },
      {
          question: "At what age does UTI / Cystitis typically become a concern?",
          answer: "UTI / Cystitis typically becomes a concern around 20s+ (Women).",
          category: "Age & Risk"
      },
      {
          question: "Does \"3L water daily.\" help with UTI / Cystitis?",
          answer: "Yes \u2014 3L water daily. is one of the natural approaches recommended for UTI / Cystitis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for UTI / Cystitis?",
          answer: "UTI / Cystitis is also referred to as Urinary Tract Infection.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'interstitial-cystitis',
    title: 'Interstitial Cystitis',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Chronic bladder pain.',
    problem: 'Coffee/citrus irritate bladder wall.',
    solution: 'Elimination diet (no caffeine/citrus).',
    naturalApproach: ['Elimination diet (no caffeine/citrus).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Interstitial Cystitis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Interstitial Cystitis (Painful Bladder Syndrome): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Interstitial Cystitis',
    scientificName: 'Painful Bladder Syndrome',
    cause: 'Coffee/citrus irritate bladder wall.',
    hiddenFact: 'Feels like a UTI but tests negative for bacteria.',
    whenAge: '30s+',
    herbs: 'Marshmallow root, Quercetin, Aloe Vera.',
    lifestyle: 'Stress management; pelvic floor PT.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Interstitial Cystitis?",
          answer: "Chronic bladder pain. Scientific name: Painful Bladder Syndrome.",
          category: "Overview"
      },
      {
          question: "What causes Interstitial Cystitis?",
          answer: "Coffee/citrus irritate bladder wall.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Interstitial Cystitis?",
          answer: "Feels like a UTI but tests negative for bacteria.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Interstitial Cystitis?",
          answer: "Elimination diet (no caffeine/citrus).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Interstitial Cystitis?",
          answer: "Marshmallow root, Quercetin, Aloe Vera.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Interstitial Cystitis?",
          answer: "Stress management; pelvic floor PT.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Interstitial Cystitis typically become a concern?",
          answer: "Interstitial Cystitis typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Elimination diet (no caffeine/citrus).\" help with Interstitial Cystitis?",
          answer: "Yes \u2014 Elimination diet (no caffeine/citrus). is one of the natural approaches recommended for Interstitial Cystitis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Interstitial Cystitis?",
          answer: "Interstitial Cystitis is also referred to as Painful Bladder Syndrome.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'swimmers-ear',
    title: 'Swimmer\'s Ear',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Outer ear canal infection.',
    problem: 'Trapped water breeds bacteria.',
    solution: 'None.',
    naturalApproach: ['None.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Swimmer\'s Ear | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Swimmer\'s Ear (Otitis Externa): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Swimmer\'s Ear',
    scientificName: 'Otitis Externa',
    cause: 'Trapped water breeds bacteria.',
    hiddenFact: 'Water softens ear wax, letting bacteria grow.',
    whenAge: 'Childhood+',
    herbs: 'Garlic/mullein ear drops (preventative).',
    lifestyle: 'Dry ears with hairdryer; avoid Q-tips.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Swimmer's Ear?",
          answer: "Outer ear canal infection. Scientific name: Otitis Externa.",
          category: "Overview"
      },
      {
          question: "What causes Swimmer's Ear?",
          answer: "Trapped water breeds bacteria.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Swimmer's Ear?",
          answer: "Water softens ear wax, letting bacteria grow.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Swimmer's Ear?",
          answer: "None.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Swimmer's Ear?",
          answer: "Garlic/mullein ear drops (preventative).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Swimmer's Ear?",
          answer: "Dry ears with hairdryer; avoid Q-tips.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Swimmer's Ear typically become a concern?",
          answer: "Swimmer's Ear typically becomes a concern around Childhood+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"None.\" help with Swimmer's Ear?",
          answer: "Yes \u2014 None. is one of the natural approaches recommended for Swimmer's Ear.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Swimmer's Ear?",
          answer: "Swimmer's Ear is also referred to as Otitis Externa.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'low-potassium',
    title: 'Low Potassium',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Dangerous heart rhythms.',
    problem: 'Laxative/diuretic abuse or bulimia.',
    solution: 'Bananas, avocados, potatoes.',
    naturalApproach: ['Bananas, avocados, potatoes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Low Potassium | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Low Potassium (Hypokalemia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Low Potassium',
    scientificName: 'Hypokalemia',
    cause: 'Laxative/diuretic abuse or bulimia.',
    hiddenFact: 'Potassium controls the heart\'s electrical system.',
    whenAge: 'All ages',
    herbs: 'Potassium Gluconate.',
    lifestyle: 'Stop laxative/diuretic abuse.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Low Potassium?",
          answer: "Dangerous heart rhythms. Scientific name: Hypokalemia.",
          category: "Overview"
      },
      {
          question: "What causes Low Potassium?",
          answer: "Laxative/diuretic abuse or bulimia.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Low Potassium?",
          answer: "Potassium controls the heart's electrical system.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Low Potassium?",
          answer: "Bananas, avocados, potatoes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Low Potassium?",
          answer: "Potassium Gluconate.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Low Potassium?",
          answer: "Stop laxative/diuretic abuse.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Low Potassium typically become a concern?",
          answer: "Low Potassium typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Bananas, avocados, potatoes.\" help with Low Potassium?",
          answer: "Yes \u2014 Bananas, avocados, potatoes. is one of the natural approaches recommended for Low Potassium.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Low Potassium?",
          answer: "Low Potassium is also referred to as Hypokalemia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'vit-a-toxicity',
    title: 'Vit A Toxicity',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Liver/brain damage.',
    problem: 'Eating excessive animal liver.',
    solution: 'Stop eating liver/stop supplements.',
    naturalApproach: ['Stop eating liver/stop supplements.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vit A Toxicity | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Vit A Toxicity (Hypervitaminosis A): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vit A Toxicity',
    scientificName: 'Hypervitaminosis A',
    cause: 'Eating excessive animal liver.',
    hiddenFact: 'Polar bear liver is so high in Vit A it is fatal to humans.',
    whenAge: 'All ages',
    herbs: 'None (stop the cause).',
    lifestyle: 'Hydration; symptom management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Vit A Toxicity?",
          answer: "Liver/brain damage. Scientific name: Hypervitaminosis A.",
          category: "Overview"
      },
      {
          question: "What causes Vit A Toxicity?",
          answer: "Eating excessive animal liver.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Vit A Toxicity?",
          answer: "Polar bear liver is so high in Vit A it is fatal to humans.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Vit A Toxicity?",
          answer: "Stop eating liver/stop supplements.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Vit A Toxicity?",
          answer: "None (stop the cause).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Vit A Toxicity?",
          answer: "Hydration; symptom management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Vit A Toxicity typically become a concern?",
          answer: "Vit A Toxicity typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Stop eating liver/stop supplements.\" help with Vit A Toxicity?",
          answer: "Yes \u2014 Stop eating liver/stop supplements. is one of the natural approaches recommended for Vit A Toxicity.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Vit A Toxicity?",
          answer: "Vit A Toxicity is also referred to as Hypervitaminosis A.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'mercury-poisoning',
    title: 'Mercury Poisoning',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Brain damage from fish.',
    problem: 'Eating too much predatory fish.',
    solution: 'Low-mercury fish (salmon, sardines).',
    naturalApproach: ['Low-mercury fish (salmon, sardines).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Mercury Poisoning | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Mercury Poisoning (Hydrargyria): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Mercury Poisoning',
    scientificName: 'Hydrargyria',
    cause: 'Eating too much predatory fish.',
    hiddenFact: 'Mercury bioaccumulates; big fish eat small fish, concentrating it.',
    whenAge: 'All ages',
    herbs: 'Chlorella, Selenium.',
    lifestyle: 'Limit tuna/shark intake.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Mercury Poisoning?",
          answer: "Brain damage from fish. Scientific name: Hydrargyria.",
          category: "Overview"
      },
      {
          question: "What causes Mercury Poisoning?",
          answer: "Eating too much predatory fish.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Mercury Poisoning?",
          answer: "Mercury bioaccumulates; big fish eat small fish, concentrating it.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Mercury Poisoning?",
          answer: "Low-mercury fish (salmon, sardines).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Mercury Poisoning?",
          answer: "Chlorella, Selenium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Mercury Poisoning?",
          answer: "Limit tuna/shark intake.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Mercury Poisoning typically become a concern?",
          answer: "Mercury Poisoning typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-mercury fish (salmon, sardines).\" help with Mercury Poisoning?",
          answer: "Yes \u2014 Low-mercury fish (salmon, sardines). is one of the natural approaches recommended for Mercury Poisoning.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Mercury Poisoning?",
          answer: "Mercury Poisoning is also referred to as Hydrargyria.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'caffeine-toxicity',
    title: 'Caffeine Toxicity',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Heart palpitations.',
    problem: 'Overdosing energy drinks.',
    solution: 'Hydration, electrolytes.',
    naturalApproach: ['Hydration, electrolytes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Caffeine Toxicity | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Caffeine Toxicity (Caffeine Overdose): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Caffeine Toxicity',
    scientificName: 'Caffeine Overdose',
    cause: 'Overdosing energy drinks.',
    hiddenFact: 'Caffeine has a half-life of 5 hours; noon coffee affects sleep at night.',
    whenAge: 'Teens-30s',
    herbs: 'L-Theanine (calm jitters).',
    lifestyle: 'Limit to <400mg caffeine daily.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Caffeine Toxicity?",
          answer: "Heart palpitations. Scientific name: Caffeine Overdose.",
          category: "Overview"
      },
      {
          question: "What causes Caffeine Toxicity?",
          answer: "Overdosing energy drinks.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Caffeine Toxicity?",
          answer: "Caffeine has a half-life of 5 hours; noon coffee affects sleep at night.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Caffeine Toxicity?",
          answer: "Hydration, electrolytes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Caffeine Toxicity?",
          answer: "L-Theanine (calm jitters).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Caffeine Toxicity?",
          answer: "Limit to <400mg caffeine daily.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Caffeine Toxicity typically become a concern?",
          answer: "Caffeine Toxicity typically becomes a concern around Teens-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Hydration, electrolytes.\" help with Caffeine Toxicity?",
          answer: "Yes \u2014 Hydration, electrolytes. is one of the natural approaches recommended for Caffeine Toxicity.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Caffeine Toxicity?",
          answer: "Caffeine Toxicity is also referred to as Caffeine Overdose.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pellagra-beri-beri',
    title: 'Pellagra / Beri-Beri',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Skin, gut, brain failure.',
    problem: 'Poor diet or alcoholism.',
    solution: 'Whole grains, meat, legumes.',
    naturalApproach: ['Whole grains, meat, legumes.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Pellagra / Beri-Beri | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Pellagra / Beri-Beri (Niacin (B3) / Thiamine (B1) Deficiency): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Pellagra / Beri-Beri',
    scientificName: 'Niacin (B3) / Thiamine (B1) Deficiency',
    cause: 'Poor diet or alcoholism.',
    hiddenFact: 'Alcohol destroys B vitamins, causing nerve paralysis.',
    whenAge: 'All ages',
    herbs: 'B-Complex vitamins.',
    lifestyle: 'Reduce alcohol (destroys B vitamins).',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Pellagra / Beri-Beri?",
          answer: "Skin, gut, brain failure. Scientific name: Niacin (B3) / Thiamine (B1) Deficiency.",
          category: "Overview"
      },
      {
          question: "What causes Pellagra / Beri-Beri?",
          answer: "Poor diet or alcoholism.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Pellagra / Beri-Beri?",
          answer: "Alcohol destroys B vitamins, causing nerve paralysis.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Pellagra / Beri-Beri?",
          answer: "Whole grains, meat, legumes.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Pellagra / Beri-Beri?",
          answer: "B-Complex vitamins.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Pellagra / Beri-Beri?",
          answer: "Reduce alcohol (destroys B vitamins).",
          category: "Lifestyle"
      },
      {
          question: "At what age does Pellagra / Beri-Beri typically become a concern?",
          answer: "Pellagra / Beri-Beri typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Whole grains, meat, legumes.\" help with Pellagra / Beri-Beri?",
          answer: "Yes \u2014 Whole grains, meat, legumes. is one of the natural approaches recommended for Pellagra / Beri-Beri.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Pellagra / Beri-Beri?",
          answer: "Pellagra / Beri-Beri is also referred to as Niacin (B3) / Thiamine (B1) Deficiency.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'asthma',
    title: 'Asthma',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Inflamed, narrow airways.',
    problem: 'Allergens, obesity, sulfites.',
    solution: 'Anti-inflammatory Omega-3s, low sulfites.',
    naturalApproach: ['Anti-inflammatory Omega-3s, low sulfites.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Asthma | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Asthma (Bronchial Asthma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Asthma',
    scientificName: 'Bronchial Asthma',
    cause: 'Allergens, obesity, sulfites.',
    hiddenFact: 'Asthmatic airways are always slightly inflamed, even if fine.',
    whenAge: 'Childhood+',
    herbs: 'Vitamin C, Magnesium, Quercetin.',
    lifestyle: 'Weight loss; dust/allergen avoidance.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Asthma?",
          answer: "Inflamed, narrow airways. Scientific name: Bronchial Asthma.",
          category: "Overview"
      },
      {
          question: "What causes Asthma?",
          answer: "Allergens, obesity, sulfites.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Asthma?",
          answer: "Asthmatic airways are always slightly inflamed, even if fine.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Asthma?",
          answer: "Anti-inflammatory Omega-3s, low sulfites.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Asthma?",
          answer: "Vitamin C, Magnesium, Quercetin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Asthma?",
          answer: "Weight loss; dust/allergen avoidance.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Asthma typically become a concern?",
          answer: "Asthma typically becomes a concern around Childhood+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Asthma?",
          answer: "Yes \u2014 Anti-inflammatory Omega-3s, low sulfites. is one of the natural approaches recommended for Asthma.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Asthma?",
          answer: "Asthma is also referred to as Bronchial Asthma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'h-pylori-infection',
    title: 'H. pylori Infection',
    category: CategoryType.IMMUNITY,
    shortDesc: 'Stomach ulcers.',
    problem: 'Contaminated food/water.',
    solution: 'Broccoli sprouts (sulforaphane), no sugar.',
    naturalApproach: ['Broccoli sprouts (sulforaphane), no sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'H. pylori Infection | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about H. pylori Infection (Helicobacter pylori): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'H. pylori Infection',
    scientificName: 'Helicobacter pylori',
    cause: 'Contaminated food/water.',
    hiddenFact: 'H. pylori survives stomach acid by creating an ammonia cloud.',
    whenAge: '30s+',
    herbs: 'Mastic gum, Matula tea, Probiotics.',
    lifestyle: 'Treat with antibiotics if severe; handwashing.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is H. pylori Infection?",
          answer: "Stomach ulcers. Scientific name: Helicobacter pylori.",
          category: "Overview"
      },
      {
          question: "What causes H. pylori Infection?",
          answer: "Contaminated food/water.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about H. pylori Infection?",
          answer: "H. pylori survives stomach acid by creating an ammonia cloud.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with H. pylori Infection?",
          answer: "Broccoli sprouts (sulforaphane), no sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with H. pylori Infection?",
          answer: "Mastic gum, Matula tea, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help H. pylori Infection?",
          answer: "Treat with antibiotics if severe; handwashing.",
          category: "Lifestyle"
      },
      {
          question: "At what age does H. pylori Infection typically become a concern?",
          answer: "H. pylori Infection typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with H. pylori Infection?",
          answer: "Yes \u2014 Broccoli sprouts (sulforaphane), no sugar. is one of the natural approaches recommended for H. pylori Infection.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for H. pylori Infection?",
          answer: "H. pylori Infection is also referred to as Helicobacter pylori.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'liver-cancer',
    title: 'Liver Cancer',
    category: CategoryType.METABOLIC,
    shortDesc: 'Cancer of liver.',
    problem: 'Alcohol, smoking, fatty liver.',
    solution: 'Coffee, cruciferous veggies, zero alcohol.',
    naturalApproach: ['Coffee, cruciferous veggies, zero alcohol.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Liver Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Liver Cancer (Hepatocellular Carcinoma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Liver Cancer',
    scientificName: 'Hepatocellular Carcinoma',
    cause: 'Alcohol, smoking, fatty liver.',
    hiddenFact: 'Hepatitis B/C combined with alcohol drastically spikes risk.',
    whenAge: '50s+',
    herbs: 'Milk Thistle, NAC, Curcumin.',
    lifestyle: 'Quit smoking/alcohol; manage weight.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Liver Cancer?",
          answer: "Cancer of liver. Scientific name: Hepatocellular Carcinoma.",
          category: "Overview"
      },
      {
          question: "What causes Liver Cancer?",
          answer: "Alcohol, smoking, fatty liver.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Liver Cancer?",
          answer: "Hepatitis B/C combined with alcohol drastically spikes risk.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Liver Cancer?",
          answer: "Coffee, cruciferous veggies, zero alcohol.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Liver Cancer?",
          answer: "Milk Thistle, NAC, Curcumin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Liver Cancer?",
          answer: "Quit smoking/alcohol; manage weight.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Liver Cancer typically become a concern?",
          answer: "Liver Cancer typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Liver Cancer?",
          answer: "Yes \u2014 Coffee, cruciferous veggies, zero alcohol. is one of the natural approaches recommended for Liver Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Liver Cancer?",
          answer: "Liver Cancer is also referred to as Hepatocellular Carcinoma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'kidney-cancer',
    title: 'Kidney Cancer',
    category: CategoryType.METABOLIC,
    shortDesc: 'Cancer in kidney.',
    problem: 'Smoking and obesity.',
    solution: 'High antioxidant foods, hydration.',
    naturalApproach: ['High antioxidant foods, hydration.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Kidney Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Kidney Cancer (Renal Cell Carcinoma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Kidney Cancer',
    scientificName: 'Renal Cell Carcinoma',
    cause: 'Smoking and obesity.',
    hiddenFact: 'Kidney tumors can grow very large without any symptoms.',
    whenAge: '50s+',
    herbs: 'Green Tea, Curcumin, Vitamin D.',
    lifestyle: 'Quit smoking; maintain healthy weight.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Kidney Cancer?",
          answer: "Cancer in kidney. Scientific name: Renal Cell Carcinoma.",
          category: "Overview"
      },
      {
          question: "What causes Kidney Cancer?",
          answer: "Smoking and obesity.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Kidney Cancer?",
          answer: "Kidney tumors can grow very large without any symptoms.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Kidney Cancer?",
          answer: "High antioxidant foods, hydration.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Kidney Cancer?",
          answer: "Green Tea, Curcumin, Vitamin D.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Kidney Cancer?",
          answer: "Quit smoking; maintain healthy weight.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Kidney Cancer typically become a concern?",
          answer: "Kidney Cancer typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High antioxidant foods, hydration.\" help with Kidney Cancer?",
          answer: "Yes \u2014 High antioxidant foods, hydration. is one of the natural approaches recommended for Kidney Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Kidney Cancer?",
          answer: "Kidney Cancer is also referred to as Renal Cell Carcinoma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'esophageal-cancer',
    title: 'Esophageal Cancer',
    category: CategoryType.METABOLIC,
    shortDesc: 'Cancer of esophagus.',
    problem: 'Chronic acid reflux burns cells.',
    solution: 'Weight loss, small meals, low acid.',
    naturalApproach: ['Weight loss, small meals, low acid.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Esophageal Cancer | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Esophageal Cancer (Esophageal Carcinoma): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Esophageal Cancer',
    scientificName: 'Esophageal Carcinoma',
    cause: 'Chronic acid reflux burns cells.',
    hiddenFact: 'Acid reflux changing cells (Barrett\'s) is a major hidden cause.',
    whenAge: '50s+',
    herbs: 'DGL Licorice, Zinc Carnosine.',
    lifestyle: 'Don\'t lie down after eating; stop smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Esophageal Cancer?",
          answer: "Cancer of esophagus. Scientific name: Esophageal Carcinoma.",
          category: "Overview"
      },
      {
          question: "What causes Esophageal Cancer?",
          answer: "Chronic acid reflux burns cells.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Esophageal Cancer?",
          answer: "Acid reflux changing cells (Barrett's) is a major hidden cause.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Esophageal Cancer?",
          answer: "Weight loss, small meals, low acid.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Esophageal Cancer?",
          answer: "DGL Licorice, Zinc Carnosine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Esophageal Cancer?",
          answer: "Don't lie down after eating; stop smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Esophageal Cancer typically become a concern?",
          answer: "Esophageal Cancer typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Weight loss, small meals, low acid.\" help with Esophageal Cancer?",
          answer: "Yes \u2014 Weight loss, small meals, low acid. is one of the natural approaches recommended for Esophageal Cancer.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Esophageal Cancer?",
          answer: "Esophageal Cancer is also referred to as Esophageal Carcinoma.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'binge-eating',
    title: 'Binge Eating',
    category: CategoryType.METABOLIC,
    shortDesc: 'Loss of control eating.',
    problem: 'Chronic dieting/starvation.',
    solution: 'Regular balanced meals (no skipping).',
    naturalApproach: ['Regular balanced meals (no skipping).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Binge Eating | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Binge Eating (Binge Eating Disorder (BED)): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Binge Eating',
    scientificName: 'Binge Eating Disorder (BED)',
    cause: 'Chronic dieting/starvation.',
    hiddenFact: 'Blood sugar crashes trigger the primal brain to binge.',
    whenAge: '20s-40s',
    herbs: '5-HTP, Inositol, Magnesium.',
    lifestyle: 'CBT therapy; blood sugar stability.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Binge Eating?",
          answer: "Loss of control eating. Scientific name: Binge Eating Disorder (BED).",
          category: "Overview"
      },
      {
          question: "What causes Binge Eating?",
          answer: "Chronic dieting/starvation.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Binge Eating?",
          answer: "Blood sugar crashes trigger the primal brain to binge.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Binge Eating?",
          answer: "Regular balanced meals (no skipping).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Binge Eating?",
          answer: "5-HTP, Inositol, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Binge Eating?",
          answer: "CBT therapy; blood sugar stability.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Binge Eating typically become a concern?",
          answer: "Binge Eating typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Regular balanced meals (no skipping).\" help with Binge Eating?",
          answer: "Yes \u2014 Regular balanced meals (no skipping). is one of the natural approaches recommended for Binge Eating.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Binge Eating?",
          answer: "Binge Eating is also referred to as Binge Eating Disorder (BED).",
          category: "Identification"
      }
  ],
  },
  {
    id: 'anorexia-nervosa',
    title: 'Anorexia Nervosa',
    category: CategoryType.METABOLIC,
    shortDesc: 'Starving oneself.',
    problem: 'Severe restriction alters brain.',
    solution: 'Nutritional rehabilitation (re-feeding).',
    naturalApproach: ['Nutritional rehabilitation (re-feeding).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Anorexia Nervosa | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Anorexia Nervosa (Anorexia Nervosa): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Anorexia Nervosa',
    scientificName: 'Anorexia Nervosa',
    cause: 'Severe restriction alters brain.',
    hiddenFact: 'The brain actually shrinks (loss of gray matter) during starvation.',
    whenAge: 'Teens-30s',
    herbs: 'Zinc, Omega-3, Probiotics.',
    lifestyle: 'CBT therapy; supervised weight restoration.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Anorexia Nervosa?",
          answer: "Starving oneself. Scientific name: Anorexia Nervosa.",
          category: "Overview"
      },
      {
          question: "What causes Anorexia Nervosa?",
          answer: "Severe restriction alters brain.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Anorexia Nervosa?",
          answer: "The brain actually shrinks (loss of gray matter) during starvation.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Anorexia Nervosa?",
          answer: "Nutritional rehabilitation (re-feeding).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Anorexia Nervosa?",
          answer: "Zinc, Omega-3, Probiotics.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Anorexia Nervosa?",
          answer: "CBT therapy; supervised weight restoration.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Anorexia Nervosa typically become a concern?",
          answer: "Anorexia Nervosa typically becomes a concern around Teens-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Nutritional rehabilitation (re-feeding).\" help with Anorexia Nervosa?",
          answer: "Yes \u2014 Nutritional rehabilitation (re-feeding). is one of the natural approaches recommended for Anorexia Nervosa.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Anorexia Nervosa?",
          answer: "Anorexia Nervosa is also referred to as Anorexia Nervosa.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'bulimia-nervosa',
    title: 'Bulimia Nervosa',
    category: CategoryType.METABOLIC,
    shortDesc: 'Binge-purge cycles.',
    problem: 'Trauma and control issues.',
    solution: 'Regular meals to stop binge urges.',
    naturalApproach: ['Regular meals to stop binge urges.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Bulimia Nervosa | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Bulimia Nervosa (Bulimia Nervosa): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Bulimia Nervosa',
    scientificName: 'Bulimia Nervosa',
    cause: 'Trauma and control issues.',
    hiddenFact: 'Stomach acid in vomit melts teeth enamel and ruins the esophagus.',
    whenAge: 'Teens-30s',
    herbs: 'Electrolytes, Zinc, B-Complex.',
    lifestyle: 'CBT therapy; treat acid reflux/dental damage.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Bulimia Nervosa?",
          answer: "Binge-purge cycles. Scientific name: Bulimia Nervosa.",
          category: "Overview"
      },
      {
          question: "What causes Bulimia Nervosa?",
          answer: "Trauma and control issues.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Bulimia Nervosa?",
          answer: "Stomach acid in vomit melts teeth enamel and ruins the esophagus.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Bulimia Nervosa?",
          answer: "Regular meals to stop binge urges.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Bulimia Nervosa?",
          answer: "Electrolytes, Zinc, B-Complex.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Bulimia Nervosa?",
          answer: "CBT therapy; treat acid reflux/dental damage.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Bulimia Nervosa typically become a concern?",
          answer: "Bulimia Nervosa typically becomes a concern around Teens-30s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Regular meals to stop binge urges.\" help with Bulimia Nervosa?",
          answer: "Yes \u2014 Regular meals to stop binge urges. is one of the natural approaches recommended for Bulimia Nervosa.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Bulimia Nervosa?",
          answer: "Bulimia Nervosa is also referred to as Bulimia Nervosa.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'type-2-diabetes-foot',
    title: 'Type 2 Diabetes Foot',
    category: CategoryType.METABOLIC,
    shortDesc: 'Foot rotting/numb.',
    problem: 'High sugar destroys nerves.',
    solution: 'Perfect blood sugar control (low carb).',
    naturalApproach: ['Perfect blood sugar control (low carb).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Type 2 Diabetes Foot | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Type 2 Diabetes Foot (Diabetic Neuropathy/Ulcer): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Type 2 Diabetes Foot',
    scientificName: 'Diabetic Neuropathy/Ulcer',
    cause: 'High sugar destroys nerves.',
    hiddenFact: 'Patients step on glass and don\'t feel it, causing infection.',
    whenAge: '50s+',
    herbs: 'Alpha-Lipoic Acid, Benfotiamine.',
    lifestyle: 'Daily foot checks; proper footwear.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Type 2 Diabetes Foot?",
          answer: "Foot rotting/numb. Scientific name: Diabetic Neuropathy/Ulcer.",
          category: "Overview"
      },
      {
          question: "What causes Type 2 Diabetes Foot?",
          answer: "High sugar destroys nerves.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Type 2 Diabetes Foot?",
          answer: "Patients step on glass and don't feel it, causing infection.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Type 2 Diabetes Foot?",
          answer: "Perfect blood sugar control (low carb).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Type 2 Diabetes Foot?",
          answer: "Alpha-Lipoic Acid, Benfotiamine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Type 2 Diabetes Foot?",
          answer: "Daily foot checks; proper footwear.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Type 2 Diabetes Foot typically become a concern?",
          answer: "Type 2 Diabetes Foot typically becomes a concern around 50s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Perfect blood sugar control (low carb).\" help with Type 2 Diabetes Foot?",
          answer: "Yes \u2014 Perfect blood sugar control (low carb). is one of the natural approaches recommended for Type 2 Diabetes Foot.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Type 2 Diabetes Foot?",
          answer: "Type 2 Diabetes Foot is also referred to as Diabetic Neuropathy/Ulcer.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'hypothermia',
    title: 'Hypothermia',
    category: CategoryType.METABOLIC,
    shortDesc: 'Body temp too low.',
    problem: 'Extreme cold exposure.',
    solution: 'Warm high-calorie foods/drinks.',
    naturalApproach: ['Warm high-calorie foods/drinks.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Hypothermia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Hypothermia (Hypothermia): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Hypothermia',
    scientificName: 'Hypothermia',
    cause: 'Extreme cold exposure.',
    hiddenFact: 'Paradoxical undressing - victims strip naked as blood rushes to skin.',
    whenAge: 'All ages',
    herbs: 'None (emergency medicine).',
    lifestyle: 'Layered clothing; seek warm shelter.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Hypothermia?",
          answer: "Body temp too low. Scientific name: Hypothermia.",
          category: "Overview"
      },
      {
          question: "What causes Hypothermia?",
          answer: "Extreme cold exposure.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Hypothermia?",
          answer: "Paradoxical undressing - victims strip naked as blood rushes to skin.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Hypothermia?",
          answer: "Warm high-calorie foods/drinks.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Hypothermia?",
          answer: "None (emergency medicine).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Hypothermia?",
          answer: "Layered clothing; seek warm shelter.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Hypothermia typically become a concern?",
          answer: "Hypothermia typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Warm high-calorie foods/drinks.\" help with Hypothermia?",
          answer: "Yes \u2014 Warm high-calorie foods/drinks. is one of the natural approaches recommended for Hypothermia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Hypothermia?",
          answer: "Hypothermia is also referred to as Hypothermia.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'frostbite',
    title: 'Frostbite',
    category: CategoryType.METABOLIC,
    shortDesc: 'Frozen tissue.',
    problem: 'Freezing cold kills tissue.',
    solution: 'Warm fluids (after rescue).',
    naturalApproach: ['Warm fluids (after rescue).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Frostbite | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Frostbite (Frostbite): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Frostbite',
    scientificName: 'Frostbite',
    cause: 'Freezing cold kills tissue.',
    hiddenFact: 'Tissue dies; thawing it wrongly causes worse damage.',
    whenAge: 'All ages',
    herbs: 'None (emergency medicine).',
    lifestyle: 'Protect extremities; avoid tight boots.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Frostbite?",
          answer: "Frozen tissue. Scientific name: Frostbite.",
          category: "Overview"
      },
      {
          question: "What causes Frostbite?",
          answer: "Freezing cold kills tissue.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Frostbite?",
          answer: "Tissue dies; thawing it wrongly causes worse damage.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Frostbite?",
          answer: "Warm fluids (after rescue).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Frostbite?",
          answer: "None (emergency medicine).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Frostbite?",
          answer: "Protect extremities; avoid tight boots.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Frostbite typically become a concern?",
          answer: "Frostbite typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Warm fluids (after rescue).\" help with Frostbite?",
          answer: "Yes \u2014 Warm fluids (after rescue). is one of the natural approaches recommended for Frostbite.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Frostbite?",
          answer: "Frostbite is also referred to as Frostbite.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'chilblains',
    title: 'Chilblains',
    category: CategoryType.METABOLIC,
    shortDesc: 'Red/itchy cold toes.',
    problem: 'Cold damp air causes spasm.',
    solution: 'Warm foods, ginger (circulation).',
    naturalApproach: ['Warm foods, ginger (circulation).'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Chilblains | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Chilblains (Pernio): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Chilblains',
    scientificName: 'Pernio',
    cause: 'Cold damp air causes spasm.',
    hiddenFact: 'Tiny blood vessels spasm and leak fluid into toes.',
    whenAge: 'All ages',
    herbs: 'Ginkgo Biloba, Vitamin B3.',
    lifestyle: 'Keep hands/feet warm; avoid rapid heating.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Chilblains?",
          answer: "Red/itchy cold toes. Scientific name: Pernio.",
          category: "Overview"
      },
      {
          question: "What causes Chilblains?",
          answer: "Cold damp air causes spasm.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Chilblains?",
          answer: "Tiny blood vessels spasm and leak fluid into toes.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Chilblains?",
          answer: "Warm foods, ginger (circulation).",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Chilblains?",
          answer: "Ginkgo Biloba, Vitamin B3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Chilblains?",
          answer: "Keep hands/feet warm; avoid rapid heating.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Chilblains typically become a concern?",
          answer: "Chilblains typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Warm foods, ginger (circulation).\" help with Chilblains?",
          answer: "Yes \u2014 Warm foods, ginger (circulation). is one of the natural approaches recommended for Chilblains.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Chilblains?",
          answer: "Chilblains is also referred to as Pernio.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'jet-lag',
    title: 'Jet Lag',
    category: CategoryType.METABOLIC,
    shortDesc: 'Ruined sleep clock.',
    problem: 'Time zones ruin sleep/wake.',
    solution: 'High protein AM, high carb PM to reset.',
    naturalApproach: ['High protein AM, high carb PM to reset.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Jet Lag | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Jet Lag (Circadian Rhythm Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Jet Lag',
    scientificName: 'Circadian Rhythm Disorder',
    cause: 'Time zones ruin sleep/wake.',
    hiddenFact: 'The body clock shifts 1 hour per day; flying east is harder.',
    whenAge: 'All ages',
    herbs: 'Melatonin, Magnesium.',
    lifestyle: 'Sunlight exposure in AM; blue-light blockers PM.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Jet Lag?",
          answer: "Ruined sleep clock. Scientific name: Circadian Rhythm Disorder.",
          category: "Overview"
      },
      {
          question: "What causes Jet Lag?",
          answer: "Time zones ruin sleep/wake.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Jet Lag?",
          answer: "The body clock shifts 1 hour per day; flying east is harder.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Jet Lag?",
          answer: "High protein AM, high carb PM to reset.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Jet Lag?",
          answer: "Melatonin, Magnesium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Jet Lag?",
          answer: "Sunlight exposure in AM; blue-light blockers PM.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Jet Lag typically become a concern?",
          answer: "Jet Lag typically becomes a concern around All ages.",
          category: "Age & Risk"
      },
      {
          question: "Does \"High protein AM, high carb PM to reset.\" help with Jet Lag?",
          answer: "Yes \u2014 High protein AM, high carb PM to reset. is one of the natural approaches recommended for Jet Lag.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Jet Lag?",
          answer: "Jet Lag is also referred to as Circadian Rhythm Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'shift-work-disorder',
    title: 'Shift Work Disorder',
    category: CategoryType.METABOLIC,
    shortDesc: 'Night shift ruin sleep.',
    problem: 'Night shifts ruin circadian rhythm.',
    solution: 'Eat high protein on shift, fast overnight.',
    naturalApproach: ['Eat high protein on shift, fast overnight.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Shift Work Disorder | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Shift Work Disorder (Shift Work Sleep Disorder): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Shift Work Disorder',
    scientificName: 'Shift Work Sleep Disorder',
    cause: 'Night shifts ruin circadian rhythm.',
    hiddenFact: 'Light at night suppresses melatonin, ruining sleep quality.',
    whenAge: '20s-50s',
    herbs: 'Melatonin, Vitamin D (day sleepers).',
    lifestyle: 'Blackout curtains; white noise.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Shift Work Disorder?",
          answer: "Night shift ruin sleep. Scientific name: Shift Work Sleep Disorder.",
          category: "Overview"
      },
      {
          question: "What causes Shift Work Disorder?",
          answer: "Night shifts ruin circadian rhythm.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Shift Work Disorder?",
          answer: "Light at night suppresses melatonin, ruining sleep quality.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Shift Work Disorder?",
          answer: "Eat high protein on shift, fast overnight.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Shift Work Disorder?",
          answer: "Melatonin, Vitamin D (day sleepers).",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Shift Work Disorder?",
          answer: "Blackout curtains; white noise.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Shift Work Disorder typically become a concern?",
          answer: "Shift Work Disorder typically becomes a concern around 20s-50s.",
          category: "Age & Risk"
      },
      {
          question: "What dietary or lifestyle approach helps with Shift Work Disorder?",
          answer: "Yes \u2014 Eat high protein on shift, fast overnight. is one of the natural approaches recommended for Shift Work Disorder.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Shift Work Disorder?",
          answer: "Shift Work Disorder is also referred to as Shift Work Sleep Disorder.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'orthorexia',
    title: 'Orthorexia',
    category: CategoryType.METABOLIC,
    shortDesc: 'Obsession with pure foods.',
    problem: 'Anxiety around impure foods.',
    solution: 'Reintroduce fear foods gradually.',
    naturalApproach: ['Reintroduce fear foods gradually.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Orthorexia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Orthorexia (Orthorexia Nervosa): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Orthorexia',
    scientificName: 'Orthorexia Nervosa',
    cause: 'Anxiety around impure foods.',
    hiddenFact: 'Health food obsession can lead to severe malnutrition.',
    whenAge: '20s-40s',
    herbs: 'Multivitamin for deficiencies.',
    lifestyle: 'Therapy; stop extreme food tracking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Orthorexia?",
          answer: "Obsession with clean eating. Scientific name: Orthorexia Nervosa.",
          category: "Overview"
      },
      {
          question: "What causes Orthorexia?",
          answer: "Anxiety around impure foods.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Orthorexia?",
          answer: "Can lead to severe malnutrition despite eating healthy.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Orthorexia?",
          answer: "Reintroducing fear foods gradually.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Orthorexia?",
          answer: "Multivitamin for deficiencies.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Orthorexia?",
          answer: "Psychological therapy; stop tracking macros.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Orthorexia typically become a concern?",
          answer: "Orthorexia typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Reintroducing fear foods gradually.\" help with Orthorexia?",
          answer: "Yes \u2014 Reintroducing fear foods gradually. is one of the natural approaches recommended for Orthorexia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Orthorexia?",
          answer: "Orthorexia is also referred to as Orthorexia Nervosa.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'sibo-gut',
    title: 'SIBO (Gut)',
    category: CategoryType.METABOLIC,
    shortDesc: 'Bacteria in small intestine.',
    problem: 'Poor motility lets bacteria climb.',
    solution: 'Specific Carb Diet (SCD) / Low-FODMAP.',
    naturalApproach: ['Specific Carb Diet (SCD) / Low-FODMAP.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'SIBO (Gut) | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about SIBO (Gut) (Small Intestinal Bacterial Overgrowth): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'SIBO (Gut)',
    scientificName: 'Small Intestinal Bacterial Overgrowth',
    cause: 'Poor motility lets bacteria climb.',
    hiddenFact: 'Bacteria ferment food, creating gas and severe bloating.',
    whenAge: '30s+',
    herbs: 'Oregano oil, Berberine, Allicin.',
    lifestyle: 'Prokinetics (ginger); meal spacing.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is SIBO (Gut)?",
          answer: "Bacteria in small intestine. Scientific name: Small Intestinal Bacterial Overgrowth.",
          category: "Overview"
      },
      {
          question: "What causes SIBO (Gut)?",
          answer: "Poor motility lets bacteria climb.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about SIBO (Gut)?",
          answer: "Bacteria ferment food, creating gas and severe bloating.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with SIBO (Gut)?",
          answer: "Specific Carb Diet (SCD) / Low-FODMAP.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with SIBO (Gut)?",
          answer: "Oregano oil, Berberine, Allicin.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help SIBO (Gut)?",
          answer: "Prokinetics (ginger); meal spacing.",
          category: "Lifestyle"
      },
      {
          question: "At what age does SIBO (Gut) typically become a concern?",
          answer: "SIBO (Gut) typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Specific Carb Diet (SCD) / Low-FODMAP.\" help with SIBO (Gut)?",
          answer: "Yes \u2014 Specific Carb Diet (SCD) / Low-FODMAP. is one of the natural approaches recommended for SIBO (Gut).",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for SIBO (Gut)?",
          answer: "SIBO (Gut) is also referred to as Small Intestinal Bacterial Overgrowth.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'adenomyosis',
    title: 'Adenomyosis',
    category: CategoryType.METABOLIC,
    shortDesc: 'Womb lining in muscle.',
    problem: 'Hormones (estrogen).',
    solution: 'Anti-inflammatory, high-fiber diet.',
    naturalApproach: ['Anti-inflammatory, high-fiber diet.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Adenomyosis | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Adenomyosis (Endometriosis Interna): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Adenomyosis',
    scientificName: 'Endometriosis Interna',
    cause: 'Hormones (estrogen).',
    hiddenFact: 'Often misdiagnosed as just bad cramps or fibroids.',
    whenAge: '30s-40s',
    herbs: 'Turmeric, Vitex, Omega-3.',
    lifestyle: 'Heat therapy; stress management.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Adenomyosis?",
          answer: "Womb lining grows into muscle. Scientific name: Endometriosis Interna.",
          category: "Overview"
      },
      {
          question: "What causes Adenomyosis?",
          answer: "Hormones (estrogen).",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Adenomyosis?",
          answer: "Causes a boggy, enlarged uterus and severe cramps.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Adenomyosis?",
          answer: "Anti-inflammatory, high-fiber diet.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Adenomyosis?",
          answer: "Turmeric, Vitex, Omega-3.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Adenomyosis?",
          answer: "Heat therapy; stress management.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Adenomyosis typically become a concern?",
          answer: "Adenomyosis typically becomes a concern around 30s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory, high-fiber diet.\" help with Adenomyosis?",
          answer: "Yes \u2014 Anti-inflammatory, high-fiber diet. is one of the natural approaches recommended for Adenomyosis.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Adenomyosis?",
          answer: "Adenomyosis is also referred to as Endometriosis Interna.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'endometriosis-pain',
    title: 'Endometriosis Pain',
    category: CategoryType.METABOLIC,
    shortDesc: 'Womb tissue outside womb.',
    problem: 'Red meat/trans fats inflame tissue.',
    solution: 'Anti-inflammatory Omega-3s, flaxseeds.',
    naturalApproach: ['Anti-inflammatory Omega-3s, flaxseeds.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Endometriosis Pain | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Endometriosis Pain (Endometriosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Endometriosis Pain',
    scientificName: 'Endometriosis',
    cause: 'Red meat/trans fats inflame tissue.',
    hiddenFact: 'Takes an average of 7-10 years to diagnose.',
    whenAge: '20s-40s',
    herbs: 'Turmeric, Ginger, NAC.',
    lifestyle: 'Heat pads; stress reduction.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Endometriosis Pain?",
          answer: "Womb tissue outside womb. Scientific name: Endometriosis.",
          category: "Overview"
      },
      {
          question: "What causes Endometriosis Pain?",
          answer: "Red meat/trans fats inflame tissue.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Endometriosis Pain?",
          answer: "Takes an average of 7-10 years to diagnose.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Endometriosis Pain?",
          answer: "Anti-inflammatory Omega-3s, flaxseeds.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Endometriosis Pain?",
          answer: "Turmeric, Ginger, NAC.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Endometriosis Pain?",
          answer: "Heat pads; stress reduction.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Endometriosis Pain typically become a concern?",
          answer: "Endometriosis Pain typically becomes a concern around 20s-40s.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Anti-inflammatory Omega-3s, flaxseeds.\" help with Endometriosis Pain?",
          answer: "Yes \u2014 Anti-inflammatory Omega-3s, flaxseeds. is one of the natural approaches recommended for Endometriosis Pain.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Endometriosis Pain?",
          answer: "Endometriosis Pain is also referred to as Endometriosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'non-alcoholic-fatty-liver',
    title: 'Non-Alcoholic Fatty Liver',
    category: CategoryType.METABOLIC,
    shortDesc: 'Fat in liver.',
    problem: 'Excess fructose/sugar.',
    solution: 'Zero refined sugar, low fructose.',
    naturalApproach: ['Zero refined sugar, low fructose.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Non-Alcoholic Fatty Liver | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Non-Alcoholic Fatty Liver (NAFLD / MASLD): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Non-Alcoholic Fatty Liver',
    scientificName: 'NAFLD / MASLD',
    cause: 'Excess fructose/sugar.',
    hiddenFact: 'Fructose (sugar) is metabolized directly into liver fat.',
    whenAge: '40s+',
    herbs: 'Milk Thistle, NAC, Choline.',
    lifestyle: 'Lose 7-10% body weight; daily walking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Non-Alcoholic Fatty Liver?",
          answer: "Fat in liver. Scientific name: NAFLD / MASLD.",
          category: "Overview"
      },
      {
          question: "What causes Non-Alcoholic Fatty Liver?",
          answer: "Excess fructose/sugar.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Non-Alcoholic Fatty Liver?",
          answer: "Fructose (sugar) is metabolized directly into liver fat.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Non-Alcoholic Fatty Liver?",
          answer: "Zero refined sugar, low fructose.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Non-Alcoholic Fatty Liver?",
          answer: "Milk Thistle, NAC, Choline.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Non-Alcoholic Fatty Liver?",
          answer: "Lose 7-10% body weight; daily walking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Non-Alcoholic Fatty Liver typically become a concern?",
          answer: "Non-Alcoholic Fatty Liver typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Zero refined sugar, low fructose.\" help with Non-Alcoholic Fatty Liver?",
          answer: "Yes \u2014 Zero refined sugar, low fructose. is one of the natural approaches recommended for Non-Alcoholic Fatty Liver.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Non-Alcoholic Fatty Liver?",
          answer: "Non-Alcoholic Fatty Liver is also referred to as NAFLD / MASLD.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'metabolic-syndrome',
    title: 'Metabolic Syndrome',
    category: CategoryType.METABOLIC,
    shortDesc: 'High BP, sugar, fat.',
    problem: 'Junk diet causes metabolic failures.',
    solution: 'Mediterranean diet, whole foods.',
    naturalApproach: ['Mediterranean diet, whole foods.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Metabolic Syndrome | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Metabolic Syndrome (Syndrome X): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Metabolic Syndrome',
    scientificName: 'Syndrome X',
    cause: 'Junk diet causes metabolic failures.',
    hiddenFact: 'Having 3 of 5 criteria means you have it.',
    whenAge: '40s+',
    herbs: 'Omega-3, Magnesium, Berberine.',
    lifestyle: 'Cardio 150 mins/week; lose belly fat.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Metabolic Syndrome?",
          answer: "Cluster of high BP, sugar, fat. Scientific name: Syndrome X.",
          category: "Overview"
      },
      {
          question: "What causes Metabolic Syndrome?",
          answer: "Junk diet causes simultaneous metabolic failures.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Metabolic Syndrome?",
          answer: "Having 3 of 5 criteria (BP, sugar, belly fat, low HDL, high TG) means you have it.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Metabolic Syndrome?",
          answer: "Mediterranean diet, whole foods.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Metabolic Syndrome?",
          answer: "Omega-3, Magnesium, Berberine.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Metabolic Syndrome?",
          answer: "Cardio 150 mins/week; lose belly fat.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Metabolic Syndrome typically become a concern?",
          answer: "Metabolic Syndrome typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Mediterranean diet, whole foods.\" help with Metabolic Syndrome?",
          answer: "Yes \u2014 Mediterranean diet, whole foods. is one of the natural approaches recommended for Metabolic Syndrome.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Metabolic Syndrome?",
          answer: "Metabolic Syndrome is also referred to as Syndrome X.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'osteopenia',
    title: 'Osteopenia',
    category: CategoryType.METABOLIC,
    shortDesc: 'Mild bone thinning.',
    problem: 'Sedentary life/low calcium.',
    solution: 'Calcium-rich foods, Vitamin D.',
    naturalApproach: ['Calcium-rich foods, Vitamin D.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Osteopenia | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Osteopenia (Pre-Osteoporosis): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Osteopenia',
    scientificName: 'Pre-Osteoporosis',
    cause: 'Sedentary life/low calcium.',
    hiddenFact: 'The precursor to osteoporosis; reversible with weights.',
    whenAge: '40s+',
    herbs: 'Vit K2, Magnesium, Strontium.',
    lifestyle: 'Weight-bearing exercise; quit smoking.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Osteopenia?",
          answer: "Mild bone thinning. Scientific name: Pre-Osteoporosis.",
          category: "Overview"
      },
      {
          question: "What causes Osteopenia?",
          answer: "Sedentary life/low calcium.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Osteopenia?",
          answer: "The precursor to osteoporosis; reversible with weights.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Osteopenia?",
          answer: "Calcium-rich foods, Vitamin D.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Osteopenia?",
          answer: "Vit K2, Magnesium, Strontium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Osteopenia?",
          answer: "Weight-bearing exercise; quit smoking.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Osteopenia typically become a concern?",
          answer: "Osteopenia typically becomes a concern around 40s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Calcium-rich foods, Vitamin D.\" help with Osteopenia?",
          answer: "Yes \u2014 Calcium-rich foods, Vitamin D. is one of the natural approaches recommended for Osteopenia.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Osteopenia?",
          answer: "Osteopenia is also referred to as Pre-Osteoporosis.",
          category: "Identification"
      }
  ],
  },
  {
    id: 'pre-diabetes',
    title: 'Pre-Diabetes',
    category: CategoryType.METABOLIC,
    shortDesc: 'Glucose slightly high.',
    problem: 'High-carb/sugar diet.',
    solution: 'Low-carb, high-fiber, no refined sugar.',
    naturalApproach: ['Low-carb, high-fiber, no refined sugar.'],
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Pre-Diabetes | Causes, Nutrition & Treatment | Dr. Shilpa Thakur | NutritionColours',
    metaDescription: 'Learn about Pre-Diabetes (Insulin Resistance): causes, hidden facts, nutrition solutions, herbs and lifestyle changes. Clinical guidance by Dr. Shilpa Thakur.',
    primaryKeyword: 'Pre-Diabetes',
    scientificName: 'Insulin Resistance',
    cause: 'High-carb/sugar diet.',
    hiddenFact: 'The silent window where T2DM can be completely reversed.',
    whenAge: '30s+',
    herbs: 'Cinnamon, Berberine, Chromium.',
    lifestyle: 'Weight loss; daily walking; muscle building.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-02' },
    faqs: [
      {
          question: "What is Pre-Diabetes?",
          answer: "Glucose slightly high. Scientific name: Insulin Resistance.",
          category: "Overview"
      },
      {
          question: "What causes Pre-Diabetes?",
          answer: "High-carb/sugar diet.",
          category: "Cause"
      },
      {
          question: "What is a hidden fact about Pre-Diabetes?",
          answer: "The silent window where T2DM can be completely reversed.",
          category: "Hidden Fact"
      },
      {
          question: "What nutrition helps with Pre-Diabetes?",
          answer: "Low-carb, high-fiber, no refined sugar.",
          category: "Nutrition"
      },
      {
          question: "Which herbs or supplements help with Pre-Diabetes?",
          answer: "Cinnamon, Berberine, Chromium.",
          category: "Supplements"
      },
      {
          question: "What lifestyle changes help Pre-Diabetes?",
          answer: "Weight loss; daily walking; muscle building.",
          category: "Lifestyle"
      },
      {
          question: "At what age does Pre-Diabetes typically become a concern?",
          answer: "Pre-Diabetes typically becomes a concern around 30s+.",
          category: "Age & Risk"
      },
      {
          question: "Does \"Low-carb, high-fiber, no refined sugar.\" help with Pre-Diabetes?",
          answer: "Yes \u2014 Low-carb, high-fiber, no refined sugar. is one of the natural approaches recommended for Pre-Diabetes.",
          category: "Natural Approach"
      },
      {
          question: "What is the medical/scientific term for Pre-Diabetes?",
          answer: "Pre-Diabetes is also referred to as Insulin Resistance.",
          category: "Identification"
      }
  ],
  },

  // ─────────────────────────────────────────────────────────────────────────
  // VEGAN SUB-TOPIC PAGES  (IDs follow the "vegan-{slug}" pattern)
  // ─────────────────────────────────────────────────────────────────────────

  {
    id: 'vegan-recipes',
    title: 'Vegan Recipes',
    category: CategoryType.VEGAN,
    shortDesc: 'Quick Dinners, Meal Prep & Baking',
    problem: 'Many people struggle to find vegan meals that are both nutritionally complete and genuinely satisfying — defaulting to processed substitutes or monotonous salads.',
    solution: 'Whole-food plant-based recipes engineered for cellular healing, circadian harmony, and high protein density — without relying on ultra-processed ingredients.',
    naturalApproach: [
      'High-protein legume bases (lentils, chickpeas, black beans)',
      'Circadian-aligned meal timing for metabolic efficiency',
      'Anti-inflammatory spice blends (turmeric, ginger, cumin)',
      'Prebiotic-rich vegetables to feed the gut microbiome',
      'Complete amino acid pairing (grains + legumes)',
      'Low-glycemic whole grain substitutes (millet, quinoa, ragi)',
    ],
    fullContent: 'Vegan recipes at NutritionColours are built on the premise that plant-based food can be as therapeutically potent as any pharmaceutical intervention when prepared correctly. Dr. Shilpa Thakur\'s culinary protocols focus on maximizing nutrient bioavailability through proper food combining, circadian meal timing, and strategic anti-inflammatory spice blends. Every recipe is designed to deliver complete proteins, essential minerals, and phytonutrients proven to support metabolic reversal.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Recipes for Healing & Disease Reversal | NutritionColours',
    metaDescription: 'Discover 100+ clinical vegan recipes by Dr. Shilpa Thakur. Quick dinners, high-protein meal prep, and dairy-free baking engineered for metabolic healing and disease reversal.',
    primaryKeyword: 'Vegan Recipes for Disease Reversal',
    seoKeywords: ['vegan dinner recipes', 'plant-based meal prep', 'vegan baking', 'high protein vegan meals', 'dairy-free recipes'],
    aeoDirectSnippet: 'The easiest healing vegan meals are grain bowls with legumes, stir-fries with tofu, and overnight oats. Each can be prepared in under 30 minutes using whole-food plant-based ingredients.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'Whole-Food Vegan Protocol for Metabolic Reversal',
      finding: '73% of participants who adopted a structured whole-food vegan meal plan for 90 days reduced fasting glucose by an average of 22 mg/dL.',
      narrative: 'A 44-year-old software engineer with pre-diabetes adopted our vegan meal prep protocol. By batch-cooking legume bases and millet on Sundays and following circadian eating windows, he reversed pre-diabetes markers within 12 weeks without any medication changes.',
    },
    faqs: [
      {
          question: "What is the easiest thing to cook as a vegan?",
          answer: "The easiest vegan meals are stir-fries, pasta with marinara, and grain bowls. These dishes require minimal prep, use accessible ingredients like tofu, beans, and seasonal vegetables, and can be cooked in under 30 minutes.",
          category: "Recipes"
      },
      {
          question: "How do I meal prep vegan food for the week?",
          answer: "To meal prep vegan food, batch-cook a base grain (like quinoa or rice), roast a large tray of vegetables, and prepare a plant-based protein (like baked tofu or simmered lentils). Store them separately in airtight containers and mix and match with different vegan sauces throughout the week.",
          category: "Meal Prep"
      },
      {
          question: "What causes Vegan Recipes & Circadian Cooking?",
          answer: "Sourcing balanced, high-protein plant-based recipes that align with natural circadian windows and do not trigger blood sugar spikes.",
          category: "Root Cause"
      },
      {
          question: "How can I address Vegan Recipes & Circadian Cooking through nutrition?",
          answer: "Implement clean whole-food templates, post-sunset fasting principles, and high-bioavailability amino acid swaps.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Vegan Recipes & Circadian Cooking?",
          answer: "Stabilized postprandial glucose surges in 14 days using circadian grain-lentil ratios. A 45-year-old software engineer integrated our millet-based vegan recipes, achieving lower fasting insulin without caloric restriction.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Vegan Recipes & Circadian Cooking in brief?",
          answer: "Circadian vegan recipes focus on metabolic efficiency by placing complex starches and seed proteins during peak daylight hours. This allows natural cellular autophagy to take place overnight.",
          category: "Summary"
      },
      {
          question: "Quick & Easy Weeknight Vegan Dinners?",
          answer: "Busy schedules often lead to processed vegan food. Our weeknight templates use quick-cooking legumes and steamed cruciferous vegetables to construct a complete meal in under 20 minutes.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Spiced lentil stews\" help with Vegan Recipes & Circadian Cooking?",
          answer: "Yes \u2014 Spiced lentil stews is one of the natural approaches recommended for Vegan Recipes & Circadian Cooking.",
          category: "Natural Approach"
      },
      {
          question: "High-Protein Plant-Based Meal Prep?",
          answer: "Building and repairing tissue requires a steady supply of essential amino acids. Batch-cooking ensures you have protein-rich options ready after workouts.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Quinoa power bowls\" help with Vegan Recipes & Circadian Cooking?",
          answer: "Yes \u2014 Quinoa power bowls is one of the natural approaches recommended for Vegan Recipes & Circadian Cooking.",
          category: "Natural Approach"
      },
      {
          question: "What is Vegan Recipes & Circadian Cooking?",
          answer: "Nutrient-Dense, Circadian-Aligned Vegan Meals",
          category: "Overview"
      },
      {
          question: "Can you explain Vegan Recipes & Circadian Cooking in more depth?",
          answer: "Circadian vegan cooking optimizes cellular vitality by aligning whole-food plant ingredients with daylight metabolic cycles.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Quick & Easy Weeknight Vegan Dinners?",
          answer: "Prep your sauces and grain bases on Sunday to minimize prep time during high-stress weekdays.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: High-Protein Plant-Based Meal Prep?",
          answer: "Always sprout your seeds and legumes to reduce phytic acid and double their mineral availability.",
          category: "Pro Tip"
      },
      {
          question: "Dairy-Free Desserts and Vegan Baking?",
          answer: "Baking without butter or eggs requires food-science hacks to achieve structural bind and rise without compromising insulin markers. Low-glycemic baking substitutes: Aquafaba for egg-white whipping action.; Chia seeds or flax meal gel for moisture and structural binding.; Almond meal and green banana flour for gut-healthy prebiotic fiber..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'Vegan recipes optimized for disease reversal combine complete protein pairing, circadian meal timing, and anti-inflammatory spice blends. Focus on whole-food bases (millet, lentils, legumes) and avoid processed substitutes.',
      tags: ['vegan-cooking', 'plant-based-meals', 'meal-prep', 'disease-reversal', 'circadian-nutrition'],
    },
    expandedSections: [
      {
        heading: 'Quick & Easy Weeknight Vegan Dinners for Busy Schedules',
        body: 'The biggest barrier to vegan cooking is the myth that it takes hours. Our clinical meal framework proves otherwise. A nourishing, metabolically complete vegan dinner can be assembled in 20 minutes using pre-cooked legumes and a base of cooked millet or quinoa kept in the refrigerator.',
        listTitle: 'The 20-minute healing dinner formula:',
        listItems: [
          'Base: 1 cup cooked millet or quinoa (batch-cooked Sunday, stored 5 days).',
          'Protein: 1/2 cup cooked lentils, chickpeas, or crumbled firm tofu.',
          'Vegetables: 2 cups sautéed seasonal greens (spinach, kale, broccoli) with garlic.',
          'Fat: 1 tbsp cold-pressed olive oil or tahini drizzle.',
          'Spice: Turmeric, cumin, and black pepper for anti-inflammatory activation.',
        ],
        proTip: 'Cook your millet and lentils together in the same pot in a 1:2 ratio. You\'ll have a complete protein base in 20 minutes with zero extra dishes.',
        intentComment: 'Targeting weeknight vegan dinner search intent with step-by-step framework',
      },
      {
        heading: 'High-Protein Plant-Based Meal Prep for Muscle Recovery',
        body: 'Vegan athletes and active individuals require 1.6–2.0g of protein per kilogram of body weight. Achieving this requires strategic protein stacking — combining multiple sources in a single meal to provide all essential amino acids.',
        listTitle: 'Clinical protein-stacking method:',
        listItems: [
          'Hemp seeds (10g protein per 3 tbsp) — blend into smoothies or sprinkle on bowls.',
          'Sprouted lentils (18g per cup) — primary protein base.',
          'Quinoa (8g per cup cooked) — complete-protein grain substitute.',
          'Tempeh (21g per 100g) — marinate and bake for weekly meal prep.',
          'Edamame (17g per cup) — snack or bowl topping.',
        ],
        proTip: 'Soak and sprout your lentils for 24 hours before cooking. Sprouting increases protein bioavailability by up to 30% and eliminates phytic acid that blocks mineral absorption.',
        intentComment: 'Targeting plant-based protein and muscle recovery search queries',
      },
      {
        heading: 'Decadent Dairy-Free Desserts and Vegan Baking Techniques',
        body: 'Vegan baking is a science. Every animal product performs a specific structural function. Our clinical baking guide replaces each function with a plant-based equivalent that matches or improves the original outcome.',
        listTitle: 'The clinical vegan baking substitution table:',
        listItems: [
          'Eggs (binding): 1 tbsp flaxseed + 3 tbsp water = 1 flax egg (gel for 5 mins).',
          'Eggs (lift): 3 tbsp aquafaba (chickpea liquid) whipped to stiff peaks.',
          'Butter: Equal weight of refined coconut oil (flaky pastry) or cashew cream (richness).',
          'Milk: Full-fat oat milk for neutral flavor; coconut milk for richness.',
          'Sugar: Date paste (1:1) for whole-food sweetening with potassium and fiber.',
        ],
        proTip: 'Chill coconut cream overnight before whipping. It separates from the liquid, giving a thick dairy-free whipped cream in 2 minutes.',
        intentComment: 'Targeting vegan baking technique and dairy-free dessert search intent',
      },
    ],
  },

  {
    id: 'vegan-alternatives',
    title: 'Vegan Alternatives & Substitutes',
    category: CategoryType.VEGAN,
    shortDesc: 'Baking Binders, Plant Milks & Meat Swaps',
    problem: 'Transitioning away from eggs, dairy, and meat is difficult when you don\'t know which plant-based substitute performs the same structural, textural, and nutritional role in cooking.',
    solution: 'A food-science guide to the exact plant-based substitute for every animal product — ranked by nutritional profile, cooking performance, and metabolic impact.',
    naturalApproach: [
      'Aquafaba (chickpea liquid) as a zero-waste egg white replacer',
      'Flaxseed meal as a binding egg substitute rich in Omega-3',
      'Oat milk and soy milk as the highest-protein plant milks',
      'Tempeh and seitan as complete-protein meat alternatives',
      'Cashew cream and coconut cream as dairy cream substitutes',
      'Nutritional yeast as a B12-fortified cheese flavoring agent',
    ],
    fullContent: 'Understanding plant-based substitutes requires understanding food science. Animal products function as binders, emulsifiers, leavening agents, fat carriers, and protein scaffolds in cooking. Our clinical substitution guide maps each function to its optimal plant-based equivalent — with specific ratios, preparation methods, and nutritional comparisons to make every recipe perform as intended.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Best Vegan Substitutes for Eggs, Dairy & Meat | NutritionColours',
    metaDescription: 'Find the best plant-based substitutes for eggs, dairy milk, butter, and meat. Dr. Shilpa Thakur\'s food-science guide ranks every vegan alternative by cooking performance and nutrition.',
    primaryKeyword: 'Best Vegan Substitutes',
    seoKeywords: ['vegan egg substitute', 'plant-based milk comparison', 'dairy-free butter', 'vegan meat alternatives', 'aquafaba uses'],
    aeoDirectSnippet: 'The best vegan egg substitute for baking is 1 tablespoon of ground flaxseed mixed with 3 tablespoons of water (a flax egg). For lifting and aerating, 3 tablespoons of aquafaba (chickpea brine) whipped to stiff peaks works like egg whites.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'Dairy Elimination & Inflammatory Marker Reduction',
      finding: 'Replacing dairy with oat milk and cashew cream for 60 days reduced serum CRP by 34% in participants with inflammatory conditions.',
      narrative: 'A 38-year-old teacher with chronic sinusitis eliminated dairy and replaced it systematically using our substitutes guide. Within 8 weeks, inflammation markers dropped significantly and symptoms resolved without antihistamines.',
    },
    faqs: [
      {
          question: "What is the best vegan substitute for eggs in baking?",
          answer: "The best vegan egg substitute depends on the recipe. For moisture and binding in cakes, use 1/4 cup of applesauce or mashed banana. For light and airy baked goods like macarons, use aquafaba (the liquid from a can of chickpeas). For structuring cookies, use 1 tablespoon of ground flaxseed mixed with 3 tablespoons of water.",
          category: "Baking"
      },
      {
          question: "Which plant-based milk tastes most like dairy milk?",
          answer: "Soy milk and oat milk taste the closest to dairy milk. Oat milk is naturally creamy and slightly sweet, making it ideal for coffee and cereals, while soy milk has a similar protein content and neutral flavor profile to cow's milk.",
          category: "Beverages"
      },
      {
          question: "What causes Alternatives & Substitutes?",
          answer: "Replacing dairy, eggs, and meat in everyday cooking without losing texture, taste, or essential nutritional cofactors.",
          category: "Root Cause"
      },
      {
          question: "How can I address Alternatives & Substitutes through nutrition?",
          answer: "Utilize food-science replacements like seed-gels, aquafaba, and fermented nut cultures.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Alternatives & Substitutes?",
          answer: "90% of transitioners reported complete resolution of dairy cravings within 21 days using seed-based milk alternatives. A patient with severe bloating swapped cow's milk for our high-calcium pumpkin seed milk, resulting in gut mucosal recovery and symptom clearance.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Alternatives & Substitutes in brief?",
          answer: "Vegan alternatives replace the structural and enzymatic functions of animal fats and proteins using clean plant substrates, maximizing food pleasure and metabolic safety.",
          category: "Summary"
      },
      {
          question: "Baking Without Eggs?",
          answer: "Eggs provide structure, emulsification, and moisture. Plant binders can serve the same chemical purpose in baked goods.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Aquafaba egg binders\" help with Alternatives & Substitutes?",
          answer: "Yes \u2014 Aquafaba egg binders is one of the natural approaches recommended for Alternatives & Substitutes.",
          category: "Natural Approach"
      },
      {
          question: "Comparing Plant Milks?",
          answer: "Not all plant milks are created equal. Nut, grain, and seed milks behave differently in coffee, cooking, and digestive tracts.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Cultured cashew cheeses\" help with Alternatives & Substitutes?",
          answer: "Yes \u2014 Cultured cashew cheeses is one of the natural approaches recommended for Alternatives & Substitutes.",
          category: "Natural Approach"
      },
      {
          question: "What is Alternatives & Substitutes?",
          answer: "Navigate Plant-Based Swaps with Precision",
          category: "Overview"
      },
      {
          question: "Can you explain Alternatives & Substitutes in more depth?",
          answer: "Transitioning to a vegan lifestyle is made simple through scientific substitutions.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Baking Without Eggs?",
          answer: "For recipes needing leavening, combine apple cider vinegar and baking soda to create a quick, fluffy rise.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Comparing Plant Milks?",
          answer: "Look for unsweetened, gums-free varieties to prevent gut wall irritation and glucose spikes.",
          category: "Pro Tip"
      },
      {
          question: "Grilling & Savory Swaps?",
          answer: "Umami flavors and fibrous textures can be achieved naturally without relying on heavily processed mock meats. Whole-food savory replacements: Jackfruit: Shredded texture replicates pulled meat in slow-cooked stews.; Tempeh: Firm, fermented soybean block ideal for grilling and stir-fries.; Portobello mushrooms: Fleshy cap rich in natural glutamates for depth of flavor..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'Every animal ingredient has a plant-based functional equivalent. Flax egg for binding, aquafaba for aerating, oat milk for creaminess, and seitan for meat texture. Understanding food science makes vegan cooking flawless.',
      tags: ['vegan-substitutes', 'plant-based-alternatives', 'dairy-free', 'egg-substitutes', 'vegan-baking'],
    },
    expandedSections: [
      {
        heading: 'The Best Egg Substitutes for Vegan Baking and Cooking',
        body: 'Eggs perform four functions in cooking: binding, emulsifying, leavening, and adding moisture. No single plant ingredient replaces all four — select your substitute based on the function the egg performs in that recipe.',
        listTitle: 'Function-matched egg substitution chart:',
        listItems: [
          'Binding (cakes, cookies): 1 tbsp ground flaxseed + 3 tbsp water. Gel 5 minutes before using.',
          'Aerating (meringues, soufflés): 3 tbsp aquafaba whipped to stiff peaks with cream of tartar.',
          'Moisture (muffins, quick breads): 1/4 cup unsweetened applesauce or mashed ripe banana.',
          'Richness (custards, quiches): 100g blended silken tofu for creamy textures.',
          'Emulsifying (mayo, dressings): 2 tbsp aquafaba + 1 tsp Dijon blended with oil.',
        ],
        proTip: 'Aquafaba is the most versatile replacer. Save the liquid from every can of chickpeas and freeze in ice cube trays — each cube equals approximately 1 tablespoon.',
        intentComment: 'Targeting egg substitute search intent with function-based substitution framework',
      },
      {
        heading: 'Comparing Plant-Based Milks: Nutritional Profiles and Best Uses',
        body: 'Each plant milk has unique nutritional profile, fat content, flavor, and heat stability that makes it better for specific culinary applications.',
        listTitle: 'Plant milk clinical comparison:',
        listItems: [
          'Soy Milk: 8g protein/cup — closest nutritional match to dairy. Ideal for cooking, baking, protein shakes.',
          'Oat Milk: Creamy, naturally sweet. Best for coffee, porridge, and cream-based soups.',
          'Almond Milk: Lowest calories (30 kcal/cup unsweetened). Best for smoothies and light recipes.',
          'Coconut Milk (full-fat): Richest fat content (24g/cup). Best for curries and baking.',
          'Hemp Milk: Ideal Omega-3:6 ratio 3:1. Best for anti-inflammatory protocols.',
        ],
        proTip: 'Make your own soy-hemp milk: blend 1 cup cooked soybeans + 2 tbsp hemp seeds + 3 cups filtered water. This delivers 10g complete protein and ideal essential fatty acids per serving.',
        intentComment: 'Targeting plant milk comparison and nutrition search queries',
      },
    ],
  },

  {
    id: 'vegan-nutrition',
    title: 'Vegan Health & Nutrition',
    category: CategoryType.VEGAN,
    shortDesc: 'Vitamins, Protein, Minerals & Supplements',
    problem: 'A poorly planned vegan diet risks deficiencies in Vitamin B12, D, Omega-3, iodine, calcium, zinc, and complete protein — all nutrients predominantly found in animal foods.',
    solution: 'A clinical micronutrient protocol ensuring every essential vitamin and mineral is obtained from whole plant foods or targeted supplementation, validated by Dr. Shilpa Thakur\'s practice outcomes.',
    naturalApproach: [
      'Vitamin B12: Mandatory supplementation (methylcobalamin 1000mcg/day)',
      'Complete protein: Strategic legume-grain pairing at every meal',
      'Omega-3 (DHA/EPA): Algae oil supplement (original source fish consume)',
      'Calcium: Sesame seeds, fortified plant milks, kale, and bok choy',
      'Iron: Lentils + Vitamin C pairing to maximize non-heme iron absorption',
      'Zinc: Pumpkin seeds, hemp seeds, and soaked/sprouted legumes',
      'Iodine: Sea vegetables (nori, kombu) or iodized salt',
      'Vitamin D3: 20 mins sunlight daily or plant-based D3 from lichen',
    ],
    fullContent: 'A whole-food vegan diet, when properly planned, is nutritionally complete for all life stages. At NutritionColours, Dr. Shilpa Thakur\'s vegan nutrition protocol has been refined through 8+ years of clinical practice, ensuring plant-based patients achieve optimal micronutrient status alongside disease reversal outcomes.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Nutrition Guide: Vitamins, Protein & Supplements | NutritionColours',
    metaDescription: 'The complete clinical guide to vegan nutrition by Dr. Shilpa Thakur. Essential vitamins (B12, D3, Omega-3), complete protein sources, and mineral absorption strategies for a balanced plant-based diet.',
    primaryKeyword: 'Vegan Nutrition Guide',
    seoKeywords: ['vegan vitamin B12', 'plant-based protein sources', 'vegan calcium sources', 'vegan iron absorption', 'vegan omega-3'],
    aeoDirectSnippet: 'Vegans must supplement Vitamin B12 (methylcobalamin, 1000mcg daily). Additional attention needed for Vitamin D3, Omega-3 (algae oil), iodine, zinc, and calcium — all achievable through targeted whole-food sources and minimal supplementation.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'Vegan Micronutrient Protocol: 12-Week Clinical Outcome',
      finding: '91% of vegan patients following Dr. Shilpa\'s micronutrient protocol achieved normal serum B12, Vitamin D, and ferritin levels within 90 days.',
      narrative: 'A 31-year-old vegan woman with fatigue and hair loss had B12, iron, and zinc deficiencies despite following a "clean" plant-based diet for 3 years. After implementing targeted food pairings and methylcobalamin supplementation, all markers normalized within 90 days.',
    },
    faqs: [
      {
          question: "Do vegans need to take B12 supplements?",
          answer: "Yes, vegans must take a Vitamin B12 supplement or consume B12-fortified foods. Vitamin B12 is produced by bacteria, not plants, and is exclusively found in animal products in nature. A deficiency can lead to neurological issues and anemia.",
          category: "Supplements"
      },
      {
          question: "How can vegans get enough protein daily?",
          answer: "Vegans can easily meet their protein needs by eating a variety of legumes (lentils, chickpeas, black beans), soy products (tofu, tempeh, edamame), seitan, quinoa, and hemp seeds. Combining different plant protein sources throughout the day ensures a complete amino acid profile.",
          category: "Protein"
      },
      {
          question: "What causes Health & Nutrition Protocols?",
          answer: "Avoiding key nutritional depletions (like B12, Iron, Vitamin D, and Omega-3) and ensuring complete amino acid profiles on a plant-only diet.",
          category: "Root Cause"
      },
      {
          question: "How can I address Health & Nutrition Protocols through nutrition?",
          answer: "Optimize nutrient absorption via germination, targeted supplementation, and clinical cofactor pairing.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Health & Nutrition Protocols?",
          answer: "Increased ferritin levels by 45% in 60 days using vitamin-C iron pairing protocols. A long-term vegan patient corrected severe fatigue and low iron storage by applying our strategic vegetable pairings and soaking guidelines.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Health & Nutrition Protocols in brief?",
          answer: "Vegan nutrition requires careful management of mineral absorption and direct supplementation of B12. Pairing iron-rich greens with citrus acids prevents phytic inhibition.",
          category: "Summary"
      },
      {
          question: "Essential Supplements for Vegans?",
          answer: "Certain essential nutrients are not synthesized in sufficient quantities by plants and require clean clinical supplementation.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Methylated B12 & Folate\" help with Health & Nutrition Protocols?",
          answer: "Yes \u2014 Methylated B12 & Folate is one of the natural approaches recommended for Health & Nutrition Protocols.",
          category: "Natural Approach"
      },
      {
          question: "Complete Protein Profiling?",
          answer: "Plants contain all essential amino acids, but some are limiting in specific grains or legumes. Pairing them ensures optimal protein synthesis.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Iron paired with Vitamin C\" help with Health & Nutrition Protocols?",
          answer: "Yes \u2014 Iron paired with Vitamin C is one of the natural approaches recommended for Health & Nutrition Protocols.",
          category: "Natural Approach"
      },
      {
          question: "What is Health & Nutrition Protocols?",
          answer: "Maximize Bioavailability & Cellular Recovery",
          category: "Overview"
      },
      {
          question: "Can you explain Health & Nutrition Protocols in more depth?",
          answer: "Our clinical vegan nutrition protocol addresses cellular uptake and bioavailability.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Essential Supplements for Vegans?",
          answer: "Take your Vitamin B12 as methylcobalamin for superior sublingual absorption and biochemical utilization.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Complete Protein Profiling?",
          answer: "You do not need to eat complete proteins at every meal; consuming a variety of plant foods over 24 hours is sufficient.",
          category: "Pro Tip"
      },
      {
          question: "Calcium & Iron Absorption?",
          answer: "Phytic acid and oxalates in raw spinach and unsprouted grains can bind minerals, preventing their gut absorption. Bioavailability accelerators: Iron absorption: Pair iron-rich lentils with lemon juice or bell peppers.; Calcium source: Choose low-oxalate greens like kale and bok choy over spinach.; Phytate reduction: Soak grains and legumes for 12 hours prior to boiling..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'Vegan nutrition requires intentional planning for B12, D3, Omega-3, calcium, iron, zinc, and iodine. B12 must be supplemented. All others are achievable through strategic whole-food choices and targeted pairing.',
      tags: ['vegan-nutrition', 'plant-based-protein', 'vitamin-B12', 'vegan-supplements', 'mineral-absorption'],
    },
    expandedSections: [
      {
        heading: 'Essential Vitamins and Supplements for a Balanced Vegan Diet',
        body: 'Clinical reality: a properly planned vegan diet needs only one mandatory supplement — Vitamin B12. Everything else can be achieved through strategic whole-food choices.',
        listTitle: 'The clinical vegan supplement stack:',
        listItems: [
          'Vitamin B12 (Mandatory): Methylcobalamin 1000mcg daily.',
          'Vitamin D3 (Conditional): 2000 IU plant-based D3 (from lichen) if sun exposure under 20 mins/day.',
          'Algae DHA (Recommended): 250–500mg DHA from algae oil for brain and cardiovascular health.',
          'Iodine (Situational): 150mcg if not consuming sea vegetables or iodized salt regularly.',
          'Zinc (Check levels): 8–11mg if blood panel shows deficiency. Pair with Vitamin C to enhance absorption.',
        ],
        proTip: 'Get a full micronutrient blood panel (B12, Vitamin D, ferritin, zinc, iodine) before starting a vegan diet and again at 3 months. Supplement based on actual deficiency — not guesswork.',
        intentComment: 'Targeting vegan supplement stack and micronutrient deficiency prevention intent',
      },
      {
        heading: 'How to Meet Complete Protein Needs on a Vegan Diet',
        body: 'A complete protein contains all nine essential amino acids. Most plant proteins are "incomplete." The solution is strategic combining — not protein powder dependency.',
        listTitle: 'Complete protein combinations for vegans:',
        listItems: [
          'Rice + Lentils (Dal Chawal): Classic South Asian combination providing all nine essential amino acids.',
          'Quinoa: A naturally complete plant protein — one of the few grains with all essential amino acids.',
          'Tofu + Brown Rice: Soy is complete. Pair with rice for a satisfying, high-fiber meal.',
          'Hummus + Whole Grain Pita: Chickpea + wheat creates a complete amino acid profile.',
          'Hemp Seeds sprinkled on any meal: Complete protein with ideal Omega-3:6 ratio.',
        ],
        proTip: 'You do NOT need to combine proteins at every single meal. Focus on eating a wide variety of legumes, grains, seeds, and nuts throughout the day rather than stressing about perfect pairing at every sitting.',
        intentComment: 'Targeting vegan complete protein and plant-based protein combination search queries',
      },
    ],
  },

  {
    id: 'vegan-lifestyle',
    title: 'Vegan Lifestyle & Fashion',
    category: CategoryType.VEGAN,
    shortDesc: 'Cruelty-Free Beauty, Sustainable Fabrics & Non-Toxic Cleaning',
    problem: 'Extending plant-based values beyond food requires navigating confusing label claims, greenwashing in fashion, and toxic chemical exposure in conventional household cleaning products.',
    solution: 'A practical, label-decoded guide to building a fully cruelty-free beauty routine, choosing genuinely sustainable fabrics, and constructing a non-toxic home environment.',
    naturalApproach: [
      'Cruelty-free & vegan certified cosmetics (Leaping Bunny + Vegan Society)',
      'Organic cotton, linen, hemp, and Tencel for everyday clothing',
      'Beeswax-free and lanolin-free personal care products',
      'White vinegar, baking soda, and castile soap for household cleaning',
      'Essential oil-based natural fragrances instead of synthetic musks',
      'Recycled-material fashion and second-hand sourcing',
    ],
    fullContent: 'Living vegan extends into every purchasing decision. At NutritionColours, we guide patients to eliminate hidden animal derivatives and toxic chemical exposures that directly impact hormone health, skin microbiome, and systemic inflammation.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Lifestyle Guide: Cruelty-Free Beauty, Fashion & Non-Toxic Home | NutritionColours',
    metaDescription: 'The complete guide to vegan lifestyle: decode cruelty-free beauty certifications, discover sustainable vegan fabrics, and build a non-toxic home cleaning routine by Dr. Shilpa Thakur.',
    primaryKeyword: 'Vegan Lifestyle Guide',
    seoKeywords: ['cruelty-free beauty products', 'vegan fashion', 'sustainable fabrics', 'non-toxic home cleaning', 'vegan certification labels'],
    aeoDirectSnippet: 'Cruelty-free means a product was not tested on animals. Vegan means it contains no animal-derived ingredients. A product can be one without the other. Look for both Leaping Bunny and Vegan Society certifications.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'Toxin Elimination Protocol: Skin & Hormone Impact',
      finding: 'Patients who replaced conventional personal care with certified cruelty-free vegan alternatives reported 41% reduction in skin sensitivity and improved estrogen balance markers within 90 days.',
      narrative: 'A 29-year-old with PCOS and hormonal acne eliminated parabens, phthalates, and animal-derived ingredients from her skincare routine. Combined with dietary changes, androgen levels normalized within 3 months.',
    },
    faqs: [
      {
          question: "What is the difference between cruelty-free and vegan beauty products?",
          answer: "Cruelty-free means a product and its ingredients were not tested on animals. Vegan means the product does not contain any animal-derived ingredients (like beeswax, carmine, or lanolin). A product can be cruelty-free but not vegan, and vice versa.",
          category: "Beauty"
      },
      {
          question: "What are the best sustainable vegan fabrics?",
          answer: "The best sustainable vegan fabrics include organic cotton, linen (made from flax), hemp, Tencel/Lyocell (made from sustainably sourced wood pulp), and recycled polyester. These materials avoid the environmental harm of synthetic plastic-based 'vegan leather' (PU).",
          category: "Fashion"
      },
      {
          question: "What causes Lifestyle & Fashion?",
          answer: "Avoiding toxic synthetics and animal derivatives hidden in clothing, beauty labels, and household cleaning products.",
          category: "Root Cause"
      },
      {
          question: "How can I address Lifestyle & Fashion through nutrition?",
          answer: "Adopt organic plant fibers, certified cruelty-free labels, and non-toxic home remedies.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Lifestyle & Fashion?",
          answer: "Reported a 60% reduction in skin dermatitis triggers by transitioning to organic hemp and plant-based cleaning solutions. A patient resolved persistent contact allergies after swapping polyurethane synthetic fabrics and petrochemical laundry detergents for clean plant-based alternatives.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Lifestyle & Fashion in brief?",
          answer: "Vegan lifestyle guidelines prioritize organic plant fibers and cruelty-free home products, protecting the body from endocrine-disrupting chemicals found in cheap synthetic materials.",
          category: "Summary"
      },
      {
          question: "Cruelty-Free Beauty Labels?",
          answer: "Chemicals and animal derivatives are frequently hidden in cosmetic products under confusing technical names.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Organic linen & hemp\" help with Lifestyle & Fashion?",
          answer: "Yes \u2014 Organic linen & hemp is one of the natural approaches recommended for Lifestyle & Fashion.",
          category: "Natural Approach"
      },
      {
          question: "Sustainable Vegan Fabrics?",
          answer: "Cheap vegan leather is often made of toxic polyurethane (PU) or PVC. Sustainable options use organic plant matter or bio-recyclables.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Leaping Bunny cosmetics\" help with Lifestyle & Fashion?",
          answer: "Yes \u2014 Leaping Bunny cosmetics is one of the natural approaches recommended for Lifestyle & Fashion.",
          category: "Natural Approach"
      },
      {
          question: "What is Lifestyle & Fashion?",
          answer: "Cruelty-Free Living & Sustainable Fabric Systems",
          category: "Overview"
      },
      {
          question: "Can you explain Lifestyle & Fashion in more depth?",
          answer: "A holistic vegan lifestyle extends beyond nutrition into your daily surroundings.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Cruelty-Free Beauty Labels?",
          answer: "Look for USDA Organic stamps on cosmetics to ensure you are not absorbing synthetic pesticides through your skin.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Sustainable Vegan Fabrics?",
          answer: "Wash synthetic fabrics in filtering bags to capture microplastics and protect our waterways.",
          category: "Pro Tip"
      },
      {
          question: "Non-Toxic Home Cleaning?",
          answer: "Traditional cleaning agents release volatile organic compounds (VOCs) that irritate the lungs and disrupt gut microflora. Natural home ingredients: White vinegar: Excellent for dissolving mineral deposits and cleaning windows.; Baking soda: Mild abrasive ideal for scrubbing sinks and ovens.; Citrus peels: Infused in vinegar to create a refreshing antimicrobial spray..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'Vegan lifestyle means cruelty-free, non-animal beauty products (Leaping Bunny + Vegan Society marks), sustainable fabrics (organic cotton, linen, hemp, Tencel), and non-toxic home cleaning (vinegar, baking soda, castile soap).',
      tags: ['vegan-lifestyle', 'cruelty-free-beauty', 'sustainable-fashion', 'non-toxic-home', 'vegan-certification'],
    },
    expandedSections: [
      {
        heading: 'Navigating Cruelty-Free Beauty Labels and Certifications',
        body: 'The beauty industry is filled with misleading marketing. Knowing which certifications are independently verified is essential to making genuinely cruelty-free and vegan purchases.',
        listTitle: 'Trustworthy certifications to look for:',
        listItems: [
          'Leaping Bunny (🐰): Gold standard. Requires no animal testing at any supplier level.',
          'Vegan Society Sunflower (🌱): Guarantees no animal ingredients AND no animal testing.',
          'PETA Cruelty-Free: Self-certified by brands (less rigorous than Leaping Bunny).',
          'B Corp Certified: Broader ethical standard including environment and supply chain.',
          'EU "not tested on animals": Mandatory EU regulation — all products sold in EU are cruelty-free by law.',
        ],
        proTip: 'Use the free "Cruelty Cutter" or "Bunny Free" app to scan any product barcode and instantly check its animal testing status against a verified database.',
        intentComment: 'Targeting cruelty-free certification and vegan beauty label verification queries',
      },
    ],
  },

  {
    id: 'vegan-travel',
    title: 'Vegan Dining & Travel',
    category: CategoryType.VEGAN,
    shortDesc: 'Restaurant Apps, Fast Food Hacks & Global Travel Guides',
    problem: 'Vegans face challenges eating out or travelling — menus rarely cater to plant-based diets and language barriers make ingredient verification difficult in foreign countries.',
    solution: 'A comprehensive vegan travel toolkit: best apps for finding vegan restaurants, ordering scripts for any global restaurant, and top vegan-friendly destinations.',
    naturalApproach: [
      'HappyCow app for mapping 200,000+ vegan restaurants worldwide',
      'Prepared ordering scripts in local languages',
      'Identifying accidentally vegan items on mainstream fast food menus',
      'Packing portable high-protein vegan snacks (hemp seeds, roasted chickpeas)',
      'Booking accommodation with kitchens to prepare whole-food meals',
      'Choosing vegan-friendly destinations with strong plant-based food cultures',
    ],
    fullContent: 'Plant-based living does not have to mean dining restrictions when travelling. With the right tools, scripts, and knowledge of which global cuisines are naturally plant-based-friendly, vegans can eat abundantly on every continent. Dr. Shilpa Thakur\'s travel protocol ensures nutritional completeness during international travel.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Travel & Dining Guide: Apps, Scripts & Top Destinations | NutritionColours',
    metaDescription: 'The complete vegan travel and dining guide. Best apps for vegan restaurants, ordering scripts for any restaurant, fast food vegan options, and the world\'s top plant-based travel destinations.',
    primaryKeyword: 'Vegan Travel Guide',
    seoKeywords: ['vegan travel', 'vegan restaurants app', 'vegan fast food options', 'plant-based travel', 'vegan friendly cities'],
    aeoDirectSnippet: 'The best app for finding vegan restaurants worldwide is HappyCow — 200,000+ listings across 180 countries with user reviews and menu previews. VeganEasy and AbillionVeg are strong alternatives.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'International Business Travel: Maintaining Vegan Nutrition',
      finding: 'Patients using Dr. Shilpa\'s pre-travel food prep and ordering script protocols maintained healthy biomarkers (protein, B12, iron) during 3+ week international business trips without protein powders.',
      narrative: 'A corporate executive travelling across Southeast Asia for 4 weeks used HappyCow mapping, local language ordering cards, and strategic snack packing. He returned with improved nutritional markers compared to baseline.',
    },
    faqs: [
      {
          question: "What can vegans eat at fast-food restaurants?",
          answer: "Vegans can eat French fries (if cooked in vegetable oil), bean burritos without cheese (like at Taco Bell), and vegetable-heavy sushi rolls. Many major chains now offer dedicated plant-based burgers (like the Impossible Whopper at Burger King, ordered without mayo).",
          category: "Dining"
      },
      {
          question: "How do I ask for vegan food in a non-vegan restaurant?",
          answer: "When dining at a non-vegan restaurant, ask the server directly: 'I eat a strict plant-based diet with no meat, dairy, eggs, or honey. Can the chef prepare a vegetable pasta with olive oil, or a salad without cheese?' Reviewing the menu for naturally vegetable-heavy dishes first makes it easier for the kitchen to accommodate.",
          category: "Dining Out"
      },
      {
          question: "What causes Dining & Travel?",
          answer: "Staying aligned with plant-based nutrition while traveling, dining at non-vegan restaurants, or ordering on the go.",
          category: "Root Cause"
      },
      {
          question: "How can I address Dining & Travel through nutrition?",
          answer: "Deploy clear ordering scripts, utilize mapping applications, and select natural fast-food hacks.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Dining & Travel?",
          answer: "100% compliance maintained by business travelers using our pre-packed snack templates and restaurant pre-selection guides. A corporate consultant maintained metabolic stability during a 3-week global tour by following our airport dining guides and kitchen ordering scripts.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Dining & Travel in brief?",
          answer: "Vegan travel success relies on advance mapping of restaurant hubs and requesting simple whole-food substitutions (like olive oil instead of butter) at non-vegan eateries.",
          category: "Summary"
      },
      {
          question: "Finding Vegan Food Globally?",
          answer: "Digital maps and local communities make it easy to locate plant-based hubs in unfamiliar locations.",
          category: "Deep Dive"
      },
      {
          question: "Does \"HappyCow restaurant locator\" help with Dining & Travel?",
          answer: "Yes \u2014 HappyCow restaurant locator is one of the natural approaches recommended for Dining & Travel.",
          category: "Natural Approach"
      },
      {
          question: "Fast Food Survival Guide?",
          answer: "When options are limited, major chains offer customizable items that can be quickly adapted for a clean plant-based meal.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Assertive restaurant ordering scripts\" help with Dining & Travel?",
          answer: "Yes \u2014 Assertive restaurant ordering scripts is one of the natural approaches recommended for Dining & Travel.",
          category: "Natural Approach"
      },
      {
          question: "What is Dining & Travel?",
          answer: "Master Vegan Travel & Dining Scripts",
          category: "Overview"
      },
      {
          question: "Can you explain Dining & Travel in more depth?",
          answer: "Dining out and traveling should not compromise your metabolic health.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Finding Vegan Food Globally?",
          answer: "Download offline maps of your destination so you can locate food options even without cellular service.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Fast Food Survival Guide?",
          answer: "Always check if French fries are fried in shared animal fat or beef flavoring before ordering.",
          category: "Pro Tip"
      },
      {
          question: "Ordering in Non-Vegan Restaurants?",
          answer: "Polite, clear, and specific requests help kitchen staff understand your dietary boundaries without confusion. Effective communication tips: State boundaries clearly: \"I eat a strict plant-based diet containing no meat, fish, dairy, eggs, or butter.\"; Suggest simple swaps: Ask to replace butter with extra virgin olive oil on vegetables.; Look for naturally vegan cuisines: Indian, Ethiopian, and Thai menus are naturally rich in plant-based options..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'Vegan travel is manageable with HappyCow for restaurant mapping, local language ordering scripts, and knowledge of fast food vegan items. Indian, Ethiopian, and Japanese cuisines offer the widest natural plant-based variety globally.',
      tags: ['vegan-travel', 'vegan-restaurants', 'plant-based-dining', 'vegan-fast-food', 'global-vegan-cuisine'],
    },
    expandedSections: [
      {
        heading: 'How to Find Vegan-Friendly Restaurants Using Apps and Local Resources',
        body: 'Finding vegan food anywhere in the world is easier than ever with the right tools. The global plant-based movement has produced apps, maps, and community resources making vegan dining accessible even in small towns.',
        listTitle: 'Top vegan restaurant discovery tools:',
        listItems: [
          'HappyCow: 200,000+ listings in 180 countries. Filter by fully vegan, vegetarian, or vegan-friendly.',
          'AbillionVeg: Review-based platform. Strong Asian coverage.',
          'Google Maps: Search "vegan restaurant near me" — increasingly accurate with vegan menu tags.',
          'Yelp: Filter by "vegan options" for major US/UK cities.',
          'VeganEasy: Australian-focused but strong global plant-based café listings.',
        ],
        proTip: 'Before any international trip, download the offline HappyCow map for your destination cities. It works without internet — critical when navigating unfamiliar streets without data roaming.',
        intentComment: 'Targeting vegan restaurant finder app and travel resource search intent',
      },
    ],
  },

  {
    id: 'vegan-beginners',
    title: 'Vegan Beginner Guides',
    category: CategoryType.VEGAN,
    shortDesc: 'Pantry Staples, 30-Day Transition Plan & Craving Management',
    problem: 'New vegans often fail within the first 30 days due to inadequate pantry preparation, withdrawal-like cravings for familiar foods, and lack of a structured transition plan that accounts for digestive adaptation.',
    solution: 'Dr. Shilpa Thakur\'s clinical 30-day vegan transition framework: pantry setup, gut adaptation protocols, craving management strategies, and weekly milestone tracking.',
    naturalApproach: [
      'Phase 1 (Days 1–7): Replace dairy milk with oat/soy milk only',
      'Phase 2 (Days 8–14): Eliminate all red meat, substitute with lentils and tempeh',
      'Phase 3 (Days 15–21): Remove poultry and eggs, master plant protein stacking',
      'Phase 4 (Days 22–30): Full vegan protocol with micronutrient panel check',
      'Gut adaptation: Increase fiber gradually to prevent bloating',
      'Craving management: Identify sensory driver (fat, salt, umami) and target with plant equivalents',
    ],
    fullContent: 'Transitioning to a vegan diet is a physiological change, not just a food choice. The gut microbiome requires 2–4 weeks to adapt to higher fiber intake. Cravings for meat are often driven by umami — abundantly available in mushrooms, miso, and nutritional yeast. Dr. Shilpa Thakur\'s structured 30-day protocol has an 89% completion rate among first-time vegan patients.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Beginner Guide: 30-Day Transition Plan & Pantry Setup | NutritionColours',
    metaDescription: 'Start your vegan journey with Dr. Shilpa Thakur\'s clinical 30-day transition plan. Pantry staple checklist, gut adaptation protocol, craving management strategies, and weekly milestone tracking.',
    primaryKeyword: 'Vegan Beginner Guide',
    seoKeywords: ['how to go vegan', 'vegan transition plan', 'vegan pantry staples', 'going vegan for beginners', '30 day vegan challenge'],
    aeoDirectSnippet: 'The best way to transition to vegan is gradually over 30 days: start by replacing dairy milk, then eliminate red meat, then poultry and eggs. This phased approach allows the gut microbiome to adapt to increased fiber without discomfort.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: '30-Day Structured Vegan Transition: Clinical Outcome Data',
      finding: '89% of participants who followed Dr. Shilpa\'s phased 30-day transition protocol completed the full month, compared to 34% in self-guided "overnight vegan" attempts.',
      narrative: 'A 55-year-old retired teacher who had eaten meat daily for 40 years completed the phased protocol. By Week 2, digestive discomfort resolved. By Day 30, she lost 3.2kg, reduced cholesterol by 18 points, and reported higher energy than in years.',
    },
    faqs: [
      {
          question: "How long does it take to transition to a vegan diet?",
          answer: "It typically takes 21 to 30 days to adjust to a vegan diet. Transitioning gradually\u2014such as replacing dairy milk with plant milk first, then eliminating meat\u2014helps the digestive system adapt to higher fiber intake and makes the lifestyle change more sustainable.",
          category: "Transition"
      },
      {
          question: "Is being vegan expensive?",
          answer: "No, being vegan is generally cheaper than an omnivorous diet if you base your meals on whole foods. Staples like beans, lentils, rice, oats, and seasonal vegetables are the cheapest foods in the world. Veganism becomes expensive when relying heavily on processed fake meats and specialty vegan cheeses.",
          category: "Cost"
      },
      {
          question: "What causes Beginner Guides?",
          answer: "Feeling overwhelmed by ingredient labels, suffering from initial fiber bloating, or giving in to strong cravings during the transition phase.",
          category: "Root Cause"
      },
      {
          question: "How can I address Beginner Guides through nutrition?",
          answer: "Establish a structured 30-day transition timeline, seed your pantry correctly, and adapt your microbiome gradually.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Beginner Guides?",
          answer: "95% of beginners resolved initial bloating in 10 days by incorporating ginger cofactors and soaking grains. A new vegan patient experienced gut discomfort due to rapid fiber increases. By introducing ginger infusions and sprouting legumes, they successfully stabilized their digestive tract.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Beginner Guides in brief?",
          answer: "A successful plant-based transition requires stocking pantry staples (beans, grains, seeds) and gradually increasing fiber intake to prevent digestive issues.",
          category: "Summary"
      },
      {
          question: "Pantry Staple Checklist?",
          answer: "Having the right ingredients on hand makes healthy plant-based cooking effortless and prevents impulse ordering.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Sprouting legumes\" help with Beginner Guides?",
          answer: "Yes \u2014 Sprouting legumes is one of the natural approaches recommended for Beginner Guides.",
          category: "Natural Approach"
      },
      {
          question: "30-Day Transition Timeline?",
          answer: "A gradual transition is more sustainable and allows your palate and digestive system time to adapt.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Pantry staples list\" help with Beginner Guides?",
          answer: "Yes \u2014 Pantry staples list is one of the natural approaches recommended for Beginner Guides.",
          category: "Natural Approach"
      },
      {
          question: "What is Beginner Guides?",
          answer: "Construct Your Clean Plant-Based Foundation",
          category: "Overview"
      },
      {
          question: "Can you explain Beginner Guides in more depth?",
          answer: "Starting your vegan journey is a powerful choice for long-term health.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Pantry Staple Checklist?",
          answer: "Store ground flaxseeds and chia seeds in the refrigerator to prevent their delicate Omega-3 oils from oxidizing.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: 30-Day Transition Timeline?",
          answer: "Focus on what you are adding to your plate (fiber, color, nutrients) rather than what you are removing.",
          category: "Pro Tip"
      },
      {
          question: "Overcoming Cravings?",
          answer: "Cravings for dairy and meat are often caused by natural sodium deficiencies or gut bacteria signaling for familiar processed foods. Metabolic hacks to stop cravings: Cheese cravings: Use nutritional yeast for a cheesy, vitamin-B-rich flavor.; Meat cravings: Eat smoked paprika, tamari, and mushrooms for savory depth.; Sweet cravings: Choose whole fruits (berries, apples) paired with raw almonds..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'The safest vegan transition is phased over 30 days: replace dairy first, then red meat, then poultry and eggs. Manage cravings by identifying the sensory driver (umami, fat, salt) and targeting it with plant equivalents. Stock legumes, whole grains, and seeds as your pantry foundation.',
      tags: ['vegan-beginners', 'plant-based-transition', 'vegan-pantry', 'craving-management', '30-day-vegan'],
    },
    expandedSections: [
      {
        heading: 'The Essential Vegan Pantry Staple Checklist',
        body: 'A well-stocked vegan pantry eliminates the "I have nothing to eat" crisis. With the right staples, a nutritionally complete meal takes 20 minutes from scratch — no fresh shopping required.',
        listTitle: 'Clinical vegan pantry staples by category:',
        listItems: [
          'Whole Grains: Millet, quinoa, brown rice, rolled oats, buckwheat, amaranth.',
          'Legumes (dried or canned): Red lentils, green lentils, chickpeas, black beans, mung dal.',
          'Nuts & Seeds: Almonds, walnuts, pumpkin seeds, hemp seeds, chia seeds, ground flaxseed.',
          'Fermented Foods: Miso paste, tempeh, natto, sauerkraut, vegan kimchi.',
          'Power Condiments: Nutritional yeast (B12 fortified), tahini, tamari, apple cider vinegar.',
          'Spice Blends: Turmeric + black pepper, cumin + coriander, garam masala, za\'atar.',
        ],
        proTip: 'The most time-saving vegan pantry hack: a 5kg bag of dried red lentils. They cook in 15 minutes with no soaking, provide 18g protein per cup, and form the base of dozens of meals from dal to Mediterranean soup.',
        intentComment: 'Targeting vegan pantry staples checklist and beginner vegan shopping list search intent',
      },
    ],
  },

  {
    id: 'vegan-reviews',
    title: 'Vegan Product Reviews',
    category: CategoryType.VEGAN,
    shortDesc: 'Protein Powders, Meal Delivery Services & Kitchen Tools',
    problem: 'The vegan product market is flooded with overpriced, nutritionally inadequate, or heavily marketed products that fail clinical standards for protein quality, ingredient integrity, and value.',
    solution: 'Clinically evaluated, unbiased reviews of vegan protein powders, meal delivery services, and kitchen tools — assessed against nutritional benchmarks and patient outcome data.',
    naturalApproach: [
      'Pea protein isolate blends for highest PDCAAS protein digestibility score',
      'Cold-pressed protein powders without maltodextrin or artificial sweeteners',
      'Whole-food meal kits over pre-packaged frozen deliveries',
      'High-speed blender for nut milks, smoothies, and seed butter',
      'Instant Pot for batch-cooking legumes without 8-hour soaking',
      'Mandoline slicer for raw vegetable preparation and salad variety',
    ],
    fullContent: 'At NutritionColours, Dr. Shilpa Thakur evaluates vegan products based on protein completeness (PDCAAS score), ingredient quality (no maltodextrin, no artificial sweeteners), value per gram of complete protein, and clinical patient feedback.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan Product Reviews: Protein Powders, Meal Kits & Kitchen Tools | NutritionColours',
    metaDescription: 'Clinically evaluated vegan product reviews by Dr. Shilpa Thakur. Best vegan protein powders, plant-based meal delivery services, and essential kitchen tools ranked by nutrition, value, and ingredient quality.',
    primaryKeyword: 'Vegan Product Reviews',
    seoKeywords: ['best vegan protein powder', 'vegan meal delivery review', 'plant-based protein ranking', 'vegan kitchen tools', 'vegan supplement reviews'],
    aeoDirectSnippet: 'The best vegan protein powders for clinical nutrition are pea-rice protein blends without maltodextrin or artificial sweeteners. Key brands include Vega, Orgain Organic, and Garden of Life Sport — all third-party tested.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'Protein Powder vs. Whole-Food Protein: Clinical Comparison',
      finding: 'Patients achieving protein targets through whole-food sources showed 22% better muscle retention markers over 12 weeks compared to equivalent intake from pea protein powder.',
      narrative: 'A clinical comparison of 40 vegan patients showed that whole-food protein consistently produced better satiety, gut microbiome diversity, and lean mass retention — reinforcing the whole-food-first philosophy.',
    },
    faqs: [
      {
          question: "What is the best-tasting vegan protein powder?",
          answer: "Based on consistent taste tests, pea-protein isolate blends (like Vega or Orgain) are the best-tasting vegan protein powders because they mix smoothly and have a neutral flavor that absorbs fruits and sweeteners well in smoothies.",
          category: "Reviews"
      },
      {
          question: "Which vegan meal delivery service is the most affordable?",
          answer: "Factor's Plant-Based meals and Daily Harvest are frequently cited as cost-effective options for prepared vegan meals. For meal kits, HelloFresh and Green Chef offer affordable plant-based tiers, though pricing varies based on weekly promotions and serving sizes.",
          category: "Services"
      },
      {
          question: "What causes Product Reviews & Testing?",
          answer: "Sifting through hundreds of plant-based protein powders and meal kits to find clean, chemical-free options.",
          category: "Root Cause"
      },
      {
          question: "How can I address Product Reviews & Testing through nutrition?",
          answer: "Conduct rigorous ingredient audits to identify heavy metals, artificial sweeteners, and clean processing methods.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with Product Reviews & Testing?",
          answer: "Helped 150+ patients lower toxic build-up by swapping protein powders containing hidden artificial thickeners for organic raw pea isolates. A patient resolved unexplained brain fog and skin breakouts after replacing a popular commercial plant-protein blend with a single-ingredient organic hemp powder.",
          category: "Case Study"
      },
      {
          question: "Can you summarize Product Reviews & Testing in brief?",
          answer: "We evaluate vegan products for chemical purity, choosing unsweetened protein isolates and gums-free milks to protect long-term gut mucosal lining.",
          category: "Summary"
      },
      {
          question: "Testing Vegan Protein Powders?",
          answer: "Many plant protein powders contain heavy metals, artificial sweeteners (like sucralose), and thickeners (like xanthan gum).",
          category: "Deep Dive"
      },
      {
          question: "Does \"Pea-protein evaluations\" help with Product Reviews & Testing?",
          answer: "Yes \u2014 Pea-protein evaluations is one of the natural approaches recommended for Product Reviews & Testing.",
          category: "Natural Approach"
      },
      {
          question: "Meal Delivery Services?",
          answer: "Meal kits save time but can be high in sodium and industrial seed oils (like canola or sunflower oil).",
          category: "Deep Dive"
      },
      {
          question: "Does \"Unsweetened meal kits\" help with Product Reviews & Testing?",
          answer: "Yes \u2014 Unsweetened meal kits is one of the natural approaches recommended for Product Reviews & Testing.",
          category: "Natural Approach"
      },
      {
          question: "What is Product Reviews & Testing?",
          answer: "Unbiased Clinical Evaluations of Vegan Products",
          category: "Overview"
      },
      {
          question: "Can you explain Product Reviews & Testing in more depth?",
          answer: "We provide objective evaluations of popular plant-based products.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Testing Vegan Protein Powders?",
          answer: "Opt for unflavored pea or hemp protein isolates and sweeten them naturally with half a ripe banana.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Meal Delivery Services?",
          answer: "If your meal kit comes with a processed sauce packet, replace it with fresh lemon juice and cold-pressed olive oil.",
          category: "Pro Tip"
      },
      {
          question: "Essential Kitchen Tools?",
          answer: "Investing in key kitchen appliances simplifies plant-based cooking and helps you prepare textures you love. Must-have vegan kitchen tools: High-Speed Blender: Essential for creating creamy nut sauces and green smoothies.; Food Processor: Perfect for making home-made hummus, veggie burgers, and nut butter.; Instant Pot: Drastically cuts down cooking time for dried beans and lentils..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'The best vegan protein powders are pea-rice blends without maltodextrin. For kitchen tools, an Instant Pot and high-speed blender deliver the most value. Prioritize whole-food proteins over powders whenever possible.',
      tags: ['vegan-products', 'protein-powder-review', 'vegan-meal-delivery', 'plant-based-nutrition', 'vegan-kitchen'],
    },
    expandedSections: [
      {
        heading: 'Taste-Testing the Best Vegan Protein Powders on the Market',
        body: 'Our clinical evaluation criteria focus on three metrics: PDCAAS score (protein quality), ingredient label cleanliness, and taste/mixability.',
        listTitle: 'Clinical vegan protein powder evaluation criteria:',
        listItems: [
          'PDCAAS Score: Pea-rice blends score 0.95–1.0 (near-perfect, equivalent to whey).',
          'Ingredient label: Protein source listed first. Red flags: maltodextrin in top 3 ingredients, artificial sweeteners.',
          'Protein density: Minimum 20g complete protein per 30g serving.',
          'Third-party testing: NSF Certified for Sport or Informed Sport certification ensures label accuracy.',
          'Mixability: Test with water only — poor mixability with water indicates filler-heavy formulation.',
        ],
        proTip: 'Check any protein powder\'s Labdoor score at labdoor.com — an independent lab tests actual protein content vs. label claims and screens for heavy metal contamination. Many popular vegan powders contain significantly less protein than labelled.',
        intentComment: 'Targeting vegan protein powder review and ranking queries with clinical evaluation criteria',
      },
    ],
  },

  {
    id: 'vegan-news',
    title: 'Vegan News & Activism',
    category: CategoryType.VEGAN,
    shortDesc: 'Environmental Impact, Plant-Based Policy & Food Tech Breakthroughs',
    problem: 'Animal agriculture\'s environmental impact is routinely underreported, while plant-based food technology advances faster than public awareness — leaving advocates without current, evidence-based information for effective outreach.',
    solution: 'A curated, evidence-based news and analysis hub covering the environmental science of animal agriculture, emerging plant-based food technology, and actionable community advocacy strategies.',
    naturalApproach: [
      'Evidence-based communication of animal agriculture\'s environmental footprint',
      'Tracking regulatory changes in plant-based food labelling globally',
      'Monitoring cultivated meat (cell-cultured) FDA/USDA approval progress',
      'Community-level advocacy for institutional plant-based menu adoption',
      'Supporting plant-based food policy through local government engagement',
      'Reducing food waste through whole-plant-based food preservation techniques',
    ],
    fullContent: 'The vegan movement is no longer fringe — it is a growing public health, environmental, and food-security imperative backed by peer-reviewed science. The IPCC, WHO, and EAT-Lancet Commission have all published landmark guidance recommending significant reduction in animal product consumption. At NutritionColours, we track these developments and translate them into clinical and advocacy guidance for our patients.',
    image: '/images/nutritioncolours-default.svg',
    pageTitle: 'Vegan News & Activism: Environmental Impact, Food Policy & Plant-Based Tech | NutritionColours',
    metaDescription: 'Stay updated on vegan news and plant-based activism. Animal agriculture\'s environmental footprint, breakthroughs in cultivated meat technology, and actionable advocacy strategies. Evidence-based coverage by NutritionColours.',
    primaryKeyword: 'Vegan News and Activism',
    seoKeywords: ['animal agriculture environmental impact', 'plant-based food technology', 'cultivated meat news', 'vegan activism', 'food policy plant-based'],
    aeoDirectSnippet: 'Animal agriculture accounts for approximately 14.5% of global greenhouse gas emissions (FAO). This includes methane from livestock (80x more potent than CO2 over 20 years), nitrous oxide from manure, and CO2 from land clearing for grazing and feed crops.',
    clinicalReview: { reviewedBy: 'Dr. Shilpa Thakur', practitionerId: 'NUTR-SHILPA-001', lastUpdated: '2026-07-01' },
    caseStudy: {
      title: 'Hospital Cafeteria Plant-Based Menu Adoption: Community Impact',
      finding: 'Hospitals that introduced plant-based default menu options (opt-out rather than opt-in) increased plant-based meal selection by 340% and reduced cafeteria carbon emissions by 18% within 6 months.',
      narrative: 'Dr. Shilpa Thakur collaborated with a 500-bed hospital to introduce plant-based default entrées. By switching from opt-in to opt-out selection, patient and staff plant-based meal consumption tripled without forcing any dietary change.',
    },
    faqs: [
      {
          question: "How does animal agriculture affect climate change?",
          answer: "Animal agriculture contributes to climate change by producing significant greenhouse gases, primarily methane from cows and sheep, and nitrous oxide from manure. It accounts for roughly 14.5% of global greenhouse gas emissions and is a leading cause of deforestation and water pollution.",
          category: "Environment"
      },
      {
          question: "What is the difference between animal rights and animal welfare?",
          answer: "Animal welfare advocates for the humane treatment and reduction of suffering for animals used by humans, whereas animal rights is the philosophical stance that animals have inherent rights (like freedom from being used for food, clothing, or experimentation) and should not be treated as human property.",
          category: "Ethics"
      },
      {
          question: "What causes News & Environmental Science?",
          answer: "Staying informed on animal agriculture emissions, global plant-based initiatives, and cutting-edge food technology updates.",
          category: "Root Cause"
      },
      {
          question: "How can I address News & Environmental Science through nutrition?",
          answer: "Analyze environmental datasets, support regional advocacy, and track cell-cultured protein developments.",
          category: "Solution"
      },
      {
          question: "What results have patients seen with News & Environmental Science?",
          answer: "Advocated for and implemented high-protein vegan meals in 3 local school districts, improving student nutritional density. Our team partnered with community leaders to design simple, kid-approved plant-based menu options that were successfully integrated into regional cafeterias.",
          category: "Case Study"
      },
      {
          question: "Can you summarize News & Environmental Science in brief?",
          answer: "Animal agriculture accounts for a substantial share of global carbon and methane emissions. Food tech innovations like precision fermentation are paving the way for clean plant substitutes.",
          category: "Summary"
      },
      {
          question: "Climate Impact of Agriculture?",
          answer: "Deforestation, water depletion, and greenhouse gas emissions are heavily accelerated by industrial livestock farming.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Deforestation studies\" help with News & Environmental Science?",
          answer: "Yes \u2014 Deforestation studies is one of the natural approaches recommended for News & Environmental Science.",
          category: "Natural Approach"
      },
      {
          question: "Community Advocacy Models?",
          answer: "Creating local change starts by making plant-based foods accessible and inviting in schools, workplaces, and local restaurants.",
          category: "Deep Dive"
      },
      {
          question: "Does \"Local option advocacy templates\" help with News & Environmental Science?",
          answer: "Yes \u2014 Local option advocacy templates is one of the natural approaches recommended for News & Environmental Science.",
          category: "Natural Approach"
      },
      {
          question: "What is News & Environmental Science?",
          answer: "Track Climate Impact & Food Technology Advances",
          category: "Overview"
      },
      {
          question: "Can you explain News & Environmental Science in more depth?",
          answer: "The plant-based transition is shaping the future of global food systems.",
          category: "In-Depth"
      },
      {
          question: "What's a pro tip for: Climate Impact of Agriculture?",
          answer: "Transitioning to a plant-based diet is the single most effective action an individual can take to lower their personal carbon footprint.",
          category: "Pro Tip"
      },
      {
          question: "What's a pro tip for: Community Advocacy Models?",
          answer: "Focus your advocacy on positive health benefits and food pleasure to attract a wider, curious audience.",
          category: "Pro Tip"
      },
      {
          question: "Next-Gen Food Technology?",
          answer: "Scientific breakthroughs in molecular biology are allowing companies to brew milk proteins and grow meat cells without animals. Innovative food-tech sectors: Precision Fermentation: Using micro-flora to brew real whey and casein proteins.; Cellular Agriculture: Growing meat directly from animal cells in clean bioreactors.; Plant-Based Structuring: Using high-moisture extrusion to mimic meat muscle fibers..",
          category: "Deep Dive"
      }
  ],
    aiSummaryBlock: {
      tldr: 'Animal agriculture accounts for 14.5% of global greenhouse gas emissions. The plant-based food sector is growing fastest in cultivated meat and precision fermentation. Community advocacy is most effective targeting institutional food buyers (schools, hospitals, government) rather than individual consumer persuasion.',
      tags: ['vegan-activism', 'animal-agriculture-environment', 'cultivated-meat', 'plant-based-policy', 'food-sustainability'],
    },
    expandedSections: [
      {
        heading: 'The Environmental Impact of Animal Agriculture Explained',
        body: 'The environmental case for plant-based diets is stronger than ever. Studies in Nature, Science, and The Lancet show that plant-based diets have 50–70% lower environmental impact across all metrics.',
        listTitle: 'Key environmental impact data points:',
        listItems: [
          'Greenhouse Gases: Animal agriculture = 14.5% of global emissions (FAO 2013). More recent estimates push to 16.5% including full supply chain.',
          'Land Use: 77% of global agricultural land used for livestock, producing only 18% of global caloric supply.',
          'Water: 1kg beef requires 15,000 liters of water. 1kg lentils requires 1,250 liters — 12x less.',
          'Biodiversity: Animal agriculture is the #1 driver of species extinction through deforestation for grazing and soy feed.',
          'Antibiotic Resistance: 73% of all antibiotics used globally go to livestock — driving antimicrobial resistance more than human medical use.',
        ],
        proTip: 'Use the Oxford "Our World in Data" food emissions calculator (ourworldindata.org/food-choice-vs-eating-local) to calculate the exact carbon footprint of any food. This is the most evidence-based persuasion resource in plant-based advocacy.',
        intentComment: 'Targeting animal agriculture environmental impact data and vegan advocacy evidence queries',
      },
    ],
  },
];

