import { HerbalEntity, MedicalConditionEntity, GenomicVariantEntity, DrugInteractionEntity } from './types';

export const HERBS_SPICES_DATA: HerbalEntity[] = [
{
    id: 'turmeric',
    name: 'Turmeric',
    scientificName: 'Curcuma longa',
    category: 'spice',
    activeCompounds: ['Curcuminoids (Curcumin)', 'Ar-turmerone', 'Zingiberene'],
    primaryMechanism: 'Downregulates inflammatory transcription factors (NF-kB) and suppresses pro-inflammatory enzymes (COX-2, 5-LOX).',
    dosage: { range: '500 mg - 2,000 mg daily', instruction: 'Must be consumed alongside black pepper (piperine) and healthy fats (e.g., cold-pressed coconut oil, A2 ghee) to increase absorption by up to 2,000%.' },
    contraindications: ['Active bile duct obstruction', 'Gallstones', 'Concomitant use of antiplatelet or anticoagulant medications (acts as a natural blood thinner)', 'Pregnancy (in therapeutic high-dose supplement form)'],
    synergies: ['Black Pepper (Piperine)', 'Ginger', 'Healthy Fats (lipophilic activation)'],
    faqs: [
      {
          question: "How do I absorb turmeric better?",
          answer: "Always pair turmeric with a pinch of black pepper (piperine) and healthy fats like virgin coconut oil or grass-fed ghee to boost absorption by up to 2,000%.",
          category: "Bioavailability"
      },
      {
          question: "Should I take turmeric raw or cooked?",
          answer: "Light cooking with healthy fats activates its key polyphenol, curcumin, enhancing solubility and cellular uptake.",
          category: "Preparation"
      },
      {
          question: "What is Turmeric and how does it work?",
          answer: "Downregulates inflammatory transcription factors (NF-kB) and suppresses pro-inflammatory enzymes (COX-2, 5-LOX).",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Turmeric?",
          answer: "Turmeric's scientific name is Curcuma longa.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Turmeric?",
          answer: "500 mg - 2,000 mg daily Must be consumed alongside black pepper (piperine) and healthy fats (e.g., cold-pressed coconut oil, A2 ghee) to increase absorption by up to 2,000%.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Turmeric?",
          answer: "The key active compounds in Turmeric include Curcuminoids (Curcumin), Ar-turmerone, Zingiberene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Turmeric?",
          answer: "Active bile duct obstruction Gallstones Concomitant use of antiplatelet or anticoagulant medications (acts as a natural blood thinner) Pregnancy (in therapeutic high-dose supplement form)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Turmeric?",
          answer: "Curcumin: A Review of Its Effects on Human Health (PMID: 29065496) Curcuminoids Clinical Review & Efficacy (PMC5664031)",
          category: "Evidence"
      },
      {
          question: "Does Turmeric combine well with Black Pepper?",
          answer: "Yes \u2014 Turmeric pairs well with Black Pepper (Piperine).",
          category: "Synergies"
      },
      {
          question: "Does Turmeric combine well with Ginger?",
          answer: "Yes \u2014 Turmeric pairs well with Ginger.",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Curcumin: A Review of Its Effects on Human Health (PMID: 29065496)", url: "https://pubmed.ncbi.nlm.nih.gov/29065496/" },
      { text: "Curcuminoids Clinical Review & Efficacy (PMC5664031)", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5664031/" }
    ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Clinical Turmeric (Curcuma longa) Guide – Dosage, Science & Synergies',
    metaDescription: 'Discover the therapeutic benefits of Turmeric. Learn the clinical dosages, bio-active compounds, safety contraindications, and synergies like piperine.',
    primaryKeyword: 'Turmeric clinical benefits',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '5ce299544a6a05e16f22f0aa3176d0edecba9722fcf77ea5a1571f96fcccca32'
    },
    seoKeywords: [
        'turmeric benefits',
        'growing turmeric',
        'curcumin supplements'
      ],
    aeoQuickAnswer: 'Turmeric is a flowering plant of the ginger family. Its rhizomes (roots) are boiled, dried, and ground into a bright yellow spice. It contains curcumin, a powerful anti-inflammatory compound.',
    geoEntities: 'Curcuma longa, Zingiberaceae, Curcumin, Rhizome, Tropical India.',
    growingConditions: {
        sun: 'Indirect/Partial',
        water: 'High',
        soil: 'Loose, wet',
        harvest: '8-10 months'
      },
    culinaryUses: 'Curries, golden milk, spice blends.',
    medicinalUses: 'Joint pain relief, systemic anti-inflammatory, immunity boost.',
    faqTargets: [
        'How much black pepper do I need with turmeric?',
        'Can you grow turmeric indoors?'
      ],
    plantFamily: 'Zingiberaceae',
    origin: 'Tropical India',
    alsoKnownAs: [
        'Haldi',
        'Haridra',
        'Yellow Root'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata, Pitta, and Kapha (Tridoshic, but can increase Pitta in excess)',
        karma: [
          'Dipana (Digestive)',
          'Kusthagna (Skin healing)',
          'Varnya (Complexion enhancing)'
        ]
      },
    tadkaInstructions: [
        'Heat oil or ghee to a moderate temperature.',
        'Add turmeric powder at the very end of cooking, off the flame if possible, to prevent burning.',
        'Combine directly with black pepper and fats for bioavailability.'
      ],
    comparisonTable: {
        headers: ['Type', 'Curcumin Content', 'Best Use'],
        rows: [
          ['Fresh Rhizome', '2-5%', 'Curries, golden milk, teas'],
          ['Dried Powder', '3-7%', 'Spice blends, supplements, lattes']
        ]
      },
    nutritionData: {
        servingSize: '1 tsp ground turmeric (approx. 3g)',
        nutrients: [
          { name: 'Manganese', value: '26% of DV' },
          { name: 'Iron', value: '9% of DV' },
          { name: 'Vitamin B6', value: '7% of DV' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '500-2,000 mg of standardized extract (95% curcuminoids) daily with meals.',
        whoShouldAvoid: ['Individuals with bile duct obstruction or gallstones', 'Those on anticoagulant therapy', 'Pregnant women (high-dose supplement form)'],
        drugInteractions: ['Blood thinners (warfarin, aspirin)', 'Diabetes medications (may enhance hypoglycemic effect)', 'Chemotherapy drugs (consult oncologist)']
      },
    howToHarvest: [
        'Dig up the entire plant 8-10 months after planting when leaves turn yellow and dry.',
        'Break off the rhizome fingers from the main root. Wash thoroughly.',
        'Boil rhizomes for 45 minutes, then sun-dry for 10-15 days until hard.',
        'Grind into powder or store whole rhizomes in a cool, dark place.'
      ],
  },
{
    id: 'ashwagandha',
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    category: 'herb',
    activeCompounds: ['Withanolides (Withaferin A)', 'Sitoindosides', 'Alkaloids'],
    primaryMechanism: 'Modulates the Hypothalamic-Pituitary-Adrenal (HPA) axis, lowering serum cortisol levels and stabilizing the nervous system response to chronic stress.',
    dosage: { range: '300 mg - 600 mg daily', instruction: 'Preferably taken in the evening or 1 hour before sleep. Standardized root extract with at least 5% withanolides.' },
    contraindications: ['Autoimmune disorders (lupus, MS, RA) as it stimulates immune response', 'Thyroid hyperfunction (hyperthyroidism)', 'Upcoming major surgery (interacts with anesthesia)'],
    synergies: ['Warm A2 milk / Almond milk', 'Nutmeg (for enhanced sleep induction)', 'Ghee'],
    faqs: [
      {
          question: "When is the best time to take Ashwagandha?",
          answer: "Take it in the evening or 1 hour before bed to support natural cortisol decline and sleep cycles.",
          category: "Timing"
      },
      {
          question: "Does Ashwagandha affect thyroid levels?",
          answer: "Yes, it can increase thyroid hormone output (T4/T3), making it ideal for hypothyroid but contraindicated for hyperthyroid patients.",
          category: "Thyroid"
      },
      {
          question: "What is Ashwagandha and how does it work?",
          answer: "Modulates the Hypothalamic-Pituitary-Adrenal (HPA) axis, lowering serum cortisol levels and stabilizing the nervous system response to chronic stress.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Ashwagandha?",
          answer: "Ashwagandha's scientific name is Withania somnifera.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Ashwagandha?",
          answer: "300 mg - 600 mg daily Preferably taken in the evening or 1 hour before sleep. Standardized root extract with at least 5% withanolides.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Ashwagandha?",
          answer: "The key active compounds in Ashwagandha include Withanolides (Withaferin A), Sitoindosides, Alkaloids.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Ashwagandha?",
          answer: "Autoimmune disorders (lupus, MS, RA) as it stimulates immune response Thyroid hyperfunction (hyperthyroidism) Upcoming major surgery (interacts with anesthesia)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Ashwagandha?",
          answer: "A randomized double-blind placebo-controlled study of Ashwagandha root extract (PMID: 31517876)",
          category: "Evidence"
      },
      {
          question: "Does Ashwagandha combine well with Warm A2 milk / Almond milk?",
          answer: "Yes \u2014 Ashwagandha pairs well with Warm A2 milk / Almond milk.",
          category: "Synergies"
      },
      {
          question: "Does Ashwagandha combine well with Nutmeg?",
          answer: "Yes \u2014 Ashwagandha pairs well with Nutmeg (for enhanced sleep induction).",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "A randomized double-blind placebo-controlled study of Ashwagandha root extract (PMID: 31517876)", url: "https://pubmed.ncbi.nlm.nih.gov/31517876/" }
    ],
    image: 'https://images.unsplash.com/photo-1628559253457-3bf71239c0dc?q=80&w=800',
    pageTitle: 'Ashwagandha (Withania somnifera) Clinical Guide – Cortisol & HPA Axis',
    metaDescription: 'Examine the clinical evidence for Ashwagandha root extract. Explore cortisol regulation, thyroid impacts, safety alerts, and ideal circadian timing.',
    primaryKeyword: 'Ashwagandha dosage cortisol',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '79847fad0a293e9d934b29c942403603580b14a67e536f9666dc215b4aa1779e'
    },
    seoKeywords: [
        'ashwagandha benefits',
        'ashwagandha dosage',
        'adaptogenic herbs'
      ],
    aeoQuickAnswer: 'Ashwagandha is an evergreen shrub found in India, the Middle East, and parts of Africa. Classified as an adaptogen, its roots are used to help the body manage stress and improve cognitive function.',
    geoEntities: 'Withania somnifera, Solanaceae, Withanolides, Adaptogen, India.',
    growingConditions: {
        sun: 'Full',
        water: 'Low (drought tolerant)',
        soil: 'Sandy, well-draining',
        harvest: '150-180 days (roots)'
      },
    culinaryUses: 'Minimal due to bitter taste; mixed in moon milks or warm tonic drinks.',
    medicinalUses: 'Stress relief, testosterone support, sleep aid, adrenal modulation.',
    faqTargets: [
        'Should I take ashwagandha in the morning or at night?',
        'Does ashwagandha make you sleepy?'
      ],
    plantFamily: 'Solanaceae',
    origin: 'India',
    alsoKnownAs: [
        'Indian Ginseng',
        'Winter Cherry'
      ],
    ayurvedicProfile: {
        rasa: [
          'Bitter',
          'Pungent',
          'Sweet'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata and Kapha, can slightly elevate Pitta',
        karma: [
          'Rasayana (Rejuvenative)',
          'Balya (Strength promoter)',
          'Vajikara (Aphrodisiac)'
        ]
      },
    comparisonTable: {
        headers: ['Form', 'Withanolide Content', 'Best Use'],
        rows: [
          ['Root Powder', '1-2.5%', 'Moon milk, capsules, tonic drinks'],
          ['Standardized Extract (KSM-66)', '5%+', 'Clinical supplementation, sleep support']
        ]
      },
    nutritionData: {
        servingSize: '1 tsp root powder (approx. 3g)',
        nutrients: [
          { name: 'Iron', value: '3% of DV' },
          { name: 'Calcium', value: '2% of DV' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '300-600 mg of standardized root extract (5%+ withanolides) daily, preferably evening.',
        whoShouldAvoid: ['Individuals with autoimmune disorders (lupus, MS, RA)', 'Those with hyperthyroidism', 'Patients scheduled for major surgery within 2 weeks'],
        drugInteractions: ['Thyroid medications (may increase T3/T4 output)', 'Immunosuppressants', 'Sedatives and benzodiazepines']
      },
    howToHarvest: [
        'Harvest roots after 150-180 days when berries turn orange-red.',
        'Dig carefully around the base to extract the full taproot without breaking.',
        'Wash roots thoroughly and slice into thin pieces.',
        'Sun-dry for 7-10 days or dehydrate at low temperature until completely brittle.'
      ],
  },
{
    id: 'cinnamon',
    name: 'Ceylon Cinnamon',
    scientificName: 'Cinnamomum verum',
    category: 'spice',
    activeCompounds: ['Cinnamaldehyde', 'Proanthocyanidins', 'Eugenol'],
    primaryMechanism: 'Acts as an insulin mimetic, activating insulin receptor autophosphorylation and mobilizing glucose transporters (GLUT-4) to cell membranes.',
    dosage: { range: '1,000 mg - 3,000 mg daily', instruction: 'Consume raw ground bark powder mixed with warm water, apple cider vinegar, or sprinkled over morning oats/chia puddings.' },
    contraindications: ['Severe hepatic insufficiency (always choose true Ceylon cinnamon over Cassia to avoid coumarin-induced hepatotoxicity)'],
    synergies: ['Fenugreek seeds', 'Apple Cider Vinegar (ACV)', 'Chromium'],
    faqs: [
      {
          question: "Why is Ceylon Cinnamon preferred over Cassia?",
          answer: "Ceylon cinnamon contains negligible coumarin (a liver-toxic compound), making it safe for daily therapeutic use compared to Cassia.",
          category: "Safety"
      },
      {
          question: "How does cinnamon affect blood sugar?",
          answer: "It improves insulin sensitivity and stimulates GLUT-4 transporters, aiding glucose clearance from the bloodstream.",
          category: "Blood Sugar"
      },
      {
          question: "What is Ceylon Cinnamon and how does it work?",
          answer: "Acts as an insulin mimetic, activating insulin receptor autophosphorylation and mobilizing glucose transporters (GLUT-4) to cell membranes.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Ceylon Cinnamon?",
          answer: "Ceylon Cinnamon's scientific name is Cinnamomum verum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Ceylon Cinnamon?",
          answer: "1,000 mg - 3,000 mg daily Consume raw ground bark powder mixed with warm water, apple cider vinegar, or sprinkled over morning oats/chia puddings.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Ceylon Cinnamon?",
          answer: "The key active compounds in Ceylon Cinnamon include Cinnamaldehyde, Proanthocyanidins, Eugenol.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Ceylon Cinnamon?",
          answer: "Severe hepatic insufficiency (always choose true Ceylon cinnamon over Cassia to avoid coumarin-induced hepatotoxicity)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Ceylon Cinnamon?",
          answer: "Cinnamon Use in Type 2 Diabetes: An Updated Systematic Review (PMID: 24019277)",
          category: "Evidence"
      },
      {
          question: "Does Ceylon Cinnamon combine well with Fenugreek seeds?",
          answer: "Yes \u2014 Ceylon Cinnamon pairs well with Fenugreek seeds.",
          category: "Synergies"
      },
      {
          question: "Does Ceylon Cinnamon combine well with Apple Cider Vinegar?",
          answer: "Yes \u2014 Ceylon Cinnamon pairs well with Apple Cider Vinegar (ACV).",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Cinnamon Use in Type 2 Diabetes: An Updated Systematic Review (PMID: 24019277)", url: "https://pubmed.ncbi.nlm.nih.gov/24019277/" }
    ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
    pageTitle: 'Ceylon Cinnamon for Diabetes Reversal – Clinical Guide',
    metaDescription: 'Learn how Ceylon Cinnamon mimics insulin to improve HbA1c levels. Find recommended therapeutic dosages and safety considerations.',
    primaryKeyword: 'Ceylon Cinnamon insulin resistance',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '82adaa5d8d14627e4c2fd4670460d434b3ff1b2dca0145c2a62b91b91da99b1e'
    },
    seoKeywords: [
        'ceylon cinnamon benefits',
        'cinnamon for diabetes',
        'ceylon vs cassia cinnamon'
      ],
    aeoQuickAnswer: 'Ceylon Cinnamon (true cinnamon) is a high-grade spice harvested from the inner bark of Cinnamomum verum trees. Unlike Cassia, it has extremely low levels of coumarin, making it safe for therapeutic liver support and insulin sensitivity.',
    geoEntities: 'Cinnamomum verum, Lauraceae, Cinnamaldehyde, Perennial tree, Sri Lanka/India.',
    growingConditions: {
        sun: 'Full/Partial',
        water: 'Moderate',
        soil: 'Sandy, organic-rich',
        harvest: '2-3 years (bark)'
      },
    culinaryUses: 'Baking, curries, masala chai, garam masala.',
    medicinalUses: 'Insulin sensitivity, antioxidant support, circulation promoter.',
    faqTargets: [
        'Is Ceylon cinnamon safe for liver?',
        'How does cinnamon lower blood sugar?'
      ],
    plantFamily: 'Lauraceae',
    origin: 'Sri Lanka / Southern India',
    alsoKnownAs: [
        'True Cinnamon',
        'Dalchini'
      ],
    ayurvedicProfile: {
        rasa: [
          'Sweet',
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata and Kapha, increases Pitta in large doses',
        karma: [
          'Dipana (Digestive)',
          'Pacifies digestive gas'
        ]
      },
    comparisonTable: {
        headers: ['Variety', 'Coumarin Level', 'Best Use'],
        rows: [
          ['Ceylon (True) Cinnamon', 'Negligible (0.004%)', 'Daily therapeutic use, baking, teas'],
          ['Cassia Cinnamon', 'High (1-4%)', 'Occasional culinary use only']
        ]
      },
    nutritionData: {
        servingSize: '1 tsp ground cinnamon (approx. 2.6g)',
        nutrients: [
          { name: 'Manganese', value: '29% of DV' },
          { name: 'Calcium', value: '3% of DV' },
          { name: 'Iron', value: '2% of DV' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '1,000-3,000 mg daily of Ceylon cinnamon powder or equivalent extract.',
        whoShouldAvoid: ['Individuals with severe hepatic insufficiency (if using Cassia)', 'Those on blood sugar-lowering medications (monitor closely)'],
        drugInteractions: ['Diabetes medications (additive hypoglycemic effect)', 'Anticoagulants (cinnamon may slow blood clotting)', 'Liver-metabolized drugs']
      },
    howToHarvest: [
        'Peel the outer bark from branches of 2-3 year old Cinnamomum verum trees during the wet season.',
        'Scrape away the inner bark to reveal the cinnamon layer.',
        'Roll the bark into quills and sun-dry for 4-6 hours.',
        'Cut into uniform sticks or grind into powder once fully dried.'
      ],
  },
{
    id: 'ginger',
    name: 'Ginger',
    scientificName: 'Zingiber officinale',
    category: 'spice',
    activeCompounds: ['Gingerols', 'Shogaols', 'Zingerone'],
    primaryMechanism: 'Antagonizes serotonin 5-HT3 receptors in the gut to prevent nausea; inhibits inflammatory cytokines (TNF-alpha, IL-6) and prostaglandin synthesis.',
    dosage: { range: '1,000 mg - 2,000 mg daily', instruction: 'Consume fresh ginger juice or grated raw ginger root infused in hot water (ginger tea) after meals.' },
    contraindications: ['Active gallstone disease (ginger stimulates bile secretion)', 'Concomitant high-dose anticoagulant therapy'],
    synergies: ['Lemon juice', 'Raw Honey (adds enzymatic support)', 'Turmeric'],
    faqs: [
      {
          question: "How does ginger help with nausea and digestion?",
          answer: "Yes, ginger accelerates gastric emptying and blocks 5-HT3 receptors in the gut, making it highly effective for nausea and bloating.",
          category: "Digestion"
      },
      {
          question: "Is ginger safe for pregnant women?",
          answer: "Yes, in standard dietary amounts (under 1g daily) it is safe and widely used for morning sickness.",
          category: "Safety"
      },
      {
          question: "What is Ginger and how does it work?",
          answer: "Antagonizes serotonin 5-HT3 receptors in the gut to prevent nausea; inhibits inflammatory cytokines (TNF-alpha, IL-6) and prostaglandin synthesis.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Ginger?",
          answer: "Ginger's scientific name is Zingiber officinale.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Ginger?",
          answer: "1,000 mg - 2,000 mg daily Consume fresh ginger juice or grated raw ginger root infused in hot water (ginger tea) after meals.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Ginger?",
          answer: "The key active compounds in Ginger include Gingerols, Shogaols, Zingerone.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Ginger?",
          answer: "Active gallstone disease (ginger stimulates bile secretion) Concomitant high-dose anticoagulant therapy",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Ginger?",
          answer: "Effects of Ginger on Gastrointestinal Disorders (PMID: 32675085)",
          category: "Evidence"
      },
      {
          question: "Does Ginger combine well with Lemon juice?",
          answer: "Yes \u2014 Ginger pairs well with Lemon juice.",
          category: "Synergies"
      },
      {
          question: "Does Ginger combine well with Raw Honey?",
          answer: "Yes \u2014 Ginger pairs well with Raw Honey (adds enzymatic support).",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Effects of Ginger on Gastrointestinal Disorders (PMID: 32675085)", url: "https://pubmed.ncbi.nlm.nih.gov/32675085/" }
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Ginger (Zingiber officinale) Clinical Guide – Gut Health & Inflammation',
    metaDescription: 'Read the scientific profiles of gingerols and shogaols in ginger. Discover standard clinical dosage for digestive support and systemic inflammation.',
    primaryKeyword: 'Ginger gastric emptying dosage',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: 'c298d0fb359c87226283b71d638baf0988315fd5e95a62b98e2c800a22b0cd92'
    },
    seoKeywords: [
        'growing ginger root',
        'ginger tea benefits',
        'ginger for nausea'
      ],
    aeoQuickAnswer: 'Ginger is a flowering plant whose rhizome (root) is widely used as a spice and medicine. It belongs to the same family as turmeric and is renowned for its potent anti-nausea and anti-inflammatory properties.',
    geoEntities: 'Zingiber officinale, Zingiberaceae, Gingerol, Rhizome, Tropical Southeast Asia.',
    growingConditions: {
        sun: 'Partial shade',
        water: 'High',
        soil: 'Rich, loamy',
        harvest: '8-10 months'
      },
    culinaryUses: 'Stir-fries, baking, ginger tea, curries.',
    medicinalUses: 'Anti-nausea, digestive stimulation, joint pain relief.',
    faqTargets: [
        'Can you grow ginger from store-bought root?',
        'How much ginger should I eat daily?'
      ],
    plantFamily: 'Zingiberaceae',
    origin: 'Southeast Asia / India',
    alsoKnownAs: [
        'Adrak',
        'Sunthi (dried ginger)'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Sweet (post-digestive)'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, can increase Pitta if consumed raw in high doses',
        karma: [
          'Tarpana (Satiating)',
          'Dipana (Digestive)',
          'Vrishya (Aphrodisiac)'
        ]
      },
    comparisonTable: {
        headers: ['Form', 'Gingerol Content', 'Best Use'],
        rows: [
          ['Fresh Root', 'High (fresh gingerols)', 'Teas, stir-fries, juicing'],
          ['Dried Powder', 'Converted to shogaols', 'Spice blends, baking, capsules']
        ]
      },
    nutritionData: {
        servingSize: '1 tbsp fresh ginger, grated (approx. 6g)',
        nutrients: [
          { name: 'Vitamin C', value: '1% of DV' },
          { name: 'Potassium', value: '1% of DV' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '1,000-2,000 mg of fresh ginger root or equivalent daily, divided into 2-3 doses.',
        whoShouldAvoid: ['Individuals with active gallstone disease', 'Those on high-dose anticoagulant therapy', 'Patients with bleeding disorders'],
        drugInteractions: ['Blood thinners (warfarin, aspirin)', 'Diabetes medications (may enhance hypoglycemic effect)', 'Blood pressure medications']
      },
    howToHarvest: [
        'Harvest ginger 8-10 months after planting when the plant\'s leaves start yellowing and drying.',
        'Dig carefully around the base and lift the entire rhizome cluster.',
        'Break off the needed portion, leaving some for regrowth if desired.',
        'Store fresh rhizomes in a cool, dark place or refrigerate for up to 3 weeks.'
      ],
  },
{
    id: 'ragi',
    name: 'Ragi (Finger Millet)',
    scientificName: 'Eleusine coracana',
    category: 'food',
    activeCompounds: ['Polyphenols', 'Dietary Fiber', 'Calcium', 'L-Lysine'],
    primaryMechanism: 'Slows down digestion rates due to high dietary fiber and polyphenol content, yielding a low glycemic response that prevents rapid postprandial glucose spikes.',
    dosage: { range: '50g - 100g raw weight', instruction: 'Consume as a sourdough flatbread, porridge, or steamed dumplings during daylight breakfast or lunch hours.' },
    contraindications: ['Severe kidney stones (high in calcium/oxalates, restrict intake)'],
    synergies: ['Buttermilk (improves probiotic fermentation)', 'Curry leaves (improves iron absorption)'],
    faqs: [
      {
          question: "Why is Ragi beneficial for bone health?",
          answer: "Ragi is exceptionally high in calcium (about 344mg per 100g, which is higher than milk), making it vital for bone density and joint repair.",
          category: "Bones"
      },
      {
          question: "Is Ragi gluten-free?",
          answer: "Yes, Ragi is a 100% gluten-free grain, making it ideal for patients with celiac disease or gluten sensitivity.",
          category: "Gluten"
      },
      {
          question: "What is Ragi (Finger Millet) and how does it work?",
          answer: "Slows down digestion rates due to high dietary fiber and polyphenol content, yielding a low glycemic response that prevents rapid postprandial glucose spikes.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Ragi (Finger Millet)?",
          answer: "Ragi (Finger Millet)'s scientific name is Eleusine coracana.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Ragi (Finger Millet)?",
          answer: "50g - 100g raw weight Consume as a sourdough flatbread, porridge, or steamed dumplings during daylight breakfast or lunch hours.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Ragi (Finger Millet)?",
          answer: "The key active compounds in Ragi (Finger Millet) include Polyphenols, Dietary Fiber, Calcium, L-Lysine.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Ragi (Finger Millet)?",
          answer: "Severe kidney stones (high in calcium/oxalates, restrict intake)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Ragi (Finger Millet)?",
          answer: "Nutritional and Health Benefits of Finger Millet (PMID: 29876543)",
          category: "Evidence"
      },
      {
          question: "Does Ragi (Finger Millet) combine well with Buttermilk?",
          answer: "Yes \u2014 Ragi (Finger Millet) pairs well with Buttermilk (improves probiotic fermentation).",
          category: "Synergies"
      },
      {
          question: "Does Ragi (Finger Millet) combine well with Curry leaves?",
          answer: "Yes \u2014 Ragi (Finger Millet) pairs well with Curry leaves (improves iron absorption).",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Nutritional and Health Benefits of Finger Millet (PMID: 29876543)", url: "https://pubmed.ncbi.nlm.nih.gov/29876543/" }
    ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Clinical Ragi (Finger Millet) Nutrition – Glucose & Bone Health',
    metaDescription: 'Explore the therapeutic value of Ragi. Read about its high calcium content, slow-release dietary fibers, and benefits for insulin resistance.',
    primaryKeyword: 'Ragi millet health benefits',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: 'a1a841a08604dda8bc98095f834232b1adbbc191a5d31a169198928ca77ffc11'
    },
    ayurvedicProfile: {
        rasa: [
          'Sweet',
          'Astringent'
        ],
        virya: 'Cooling',
        doshaEffect: 'Pacifies Pitta and Kapha, can increase Vata in excess',
        karma: [
          'Balya (Strength promoter)',
          'Asthi samhara (Bone strengthening)',
          'Pittashamana (Pitta pacifying)'
        ]
      },
  },
{
    id: 'spirulina',
    name: 'Spirulina',
    scientificName: 'Arthrospira platensis',
    category: 'food',
    activeCompounds: ['Phycocyanin', 'Gamma-Linolenic Acid (GLA)', 'Chlorophyll', 'Complete Protein'],
    primaryMechanism: 'Acts as a potent antioxidant (via phycocyanin scavengers) and immune-modulator; helps lower LDL cholesterol and increase HDL.',
    dosage: { range: '2,000 mg - 5,000 mg daily', instruction: 'Consume as powder mixed in water or smoothies, preferably in the morning to support daytime cellular energy.' },
    contraindications: ['Phenylketonuria (contains phenylalanine)', 'Autoimmune conditions (increases immune markers, use caution)', 'Gout (high purine content)'],
    synergies: ['Vitamin C rich foods (increases iron absorption from spirulina)', 'Chlorella'],
    faqs: [
      {
          question: "Is spirulina a complete protein source?",
          answer: "Yes, spirulina contains about 60-70% protein by weight and contains all essential amino acids, making it a perfect plant source.",
          category: "Protein"
      },
      {
          question: "Can spirulina help with heavy metal detox?",
          answer: "Yes, studies indicate that spirulina binds to heavy metals in the gut, supporting their excretion from the body.",
          category: "Detox"
      },
      {
          question: "What is Spirulina and how does it work?",
          answer: "Acts as a potent antioxidant (via phycocyanin scavengers) and immune-modulator; helps lower LDL cholesterol and increase HDL.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Spirulina?",
          answer: "Spirulina's scientific name is Arthrospira platensis.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Spirulina?",
          answer: "2,000 mg - 5,000 mg daily Consume as powder mixed in water or smoothies, preferably in the morning to support daytime cellular energy.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Spirulina?",
          answer: "The key active compounds in Spirulina include Phycocyanin, Gamma-Linolenic Acid (GLA), Chlorophyll, Complete Protein.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Spirulina?",
          answer: "Phenylketonuria (contains phenylalanine) Autoimmune conditions (increases immune markers, use caution) Gout (high purine content)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Spirulina?",
          answer: "Spirulina in Clinical Practice: Efficacy and Safety (PMID: 21234253)",
          category: "Evidence"
      },
      {
          question: "Does Spirulina combine well with Vitamin C rich foods?",
          answer: "Yes \u2014 Spirulina pairs well with Vitamin C rich foods (increases iron absorption from spirulina).",
          category: "Synergies"
      },
      {
          question: "Does Spirulina combine well with Chlorella?",
          answer: "Yes \u2014 Spirulina pairs well with Chlorella.",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Spirulina in Clinical Practice: Efficacy and Safety (PMID: 21234253)", url: "https://pubmed.ncbi.nlm.nih.gov/21234253/" }
    ],
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caa9a?q=80&w=800',
    pageTitle: 'Spirulina Clinical Nutrition Guide – Phycocyanin & Immunity',
    metaDescription: 'Read about the clinical dosage of Spirulina. Discover how phycocyanin targets oxidative stress and boosts cellular immunity.',
    primaryKeyword: 'Spirulina phycocyanin dosage',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '455fc99449498901db1bdc6f680d98391737e65bf9eb3d2dcb4cfb6b65384fd5'
    },
    ayurvedicProfile: {
        rasa: [
          'Sweet',
          'Bitter'
        ],
        virya: 'Cooling',
        doshaEffect: 'Pacifies Pitta and Kapha, can increase Vata in excess',
        karma: [
          'Rasayana (Rejuvenative)',
          'Pitta shamana (Cooling)',
          'Krimighna (Anti-parasitic)'
        ]
      },
  },
{
    id: 'fenugreek',
    name: 'Fenugreek',
    scientificName: 'Trigonella foenum-graecum',
    category: 'spice',
    activeCompounds: ['4-hydroxyisoleucine', 'Trigonelline', 'Galactomannan'],
    primaryMechanism: 'Stimulates glucose-dependent insulin secretion from pancreatic beta cells, delays gastric emptying, and inhibits glucose absorption in the small intestine.',
    dosage: { range: '5g - 10g daily', instruction: 'Soak seeds overnight in warm water. Consume seeds and water first thing in the morning before meals.' },
    contraindications: ['Pregnancy (potential uterine stimulant)', 'Severe peanut/legume allergies (potential cross-reactivity)'],
    synergies: ['Ceylon Cinnamon', 'Ginger'],
    faqs: [
      {
          question: "How does Fenugreek help with diabetes?",
          answer: "The active compound 4-hydroxyisoleucine directly stimulates insulin release when glucose levels are elevated, helping lower blood sugar naturally.",
          category: "Glucose Control"
      },
      {
          question: "Should I consume the seeds raw or soaked?",
          answer: "Soaking the seeds overnight softens the mucilaginous fiber galactomannan, making it much easier on the digestive tract and maximizing active extraction.",
          category: "Usage"
      },
      {
          question: "What is Fenugreek and how does it work?",
          answer: "Stimulates glucose-dependent insulin secretion from pancreatic beta cells, delays gastric emptying, and inhibits glucose absorption in the small intestine.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Fenugreek?",
          answer: "Fenugreek's scientific name is Trigonella foenum-graecum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Fenugreek?",
          answer: "5g - 10g daily Soak seeds overnight in warm water. Consume seeds and water first thing in the morning before meals.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Fenugreek?",
          answer: "The key active compounds in Fenugreek include 4-hydroxyisoleucine, Trigonelline, Galactomannan.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Fenugreek?",
          answer: "Pregnancy (potential uterine stimulant) Severe peanut/legume allergies (potential cross-reactivity)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Fenugreek?",
          answer: "Antidiabetic and Hypocholesterolemic Effects of Fenugreek (PMID: 28291884)",
          category: "Evidence"
      },
      {
          question: "Does Fenugreek combine well with Ceylon Cinnamon?",
          answer: "Yes \u2014 Fenugreek pairs well with Ceylon Cinnamon.",
          category: "Synergies"
      },
      {
          question: "Does Fenugreek combine well with Ginger?",
          answer: "Yes \u2014 Fenugreek pairs well with Ginger.",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Antidiabetic and Hypocholesterolemic Effects of Fenugreek (PMID: 28291884)", url: "https://pubmed.ncbi.nlm.nih.gov/28191884/" }
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Clinical Fenugreek (Methi) Guide – Diabetes & Glycemic Reversal',
    metaDescription: 'Discover the clinical mechanism of Fenugreek seeds. Learn standard dosages, synergies with cinnamon, and blood sugar regulating compounds.',
    primaryKeyword: 'Fenugreek seeds diabetes',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '0c13422a0b037b4f1eef7edf25bd85bb293f4f2c0e791384527c1e530483201f'
    },
    seoKeywords: [
        'methi leaves benefits',
        'fenugreek water',
        'growing methi'
      ],
    aeoQuickAnswer: 'Fenugreek is an annual plant where both the leaves (Methi) and seeds (Dana Methi) are used. The leaves offer a slightly bitter, aromatic taste in breads and curries, while the seeds aid blood sugar control.',
    geoEntities: 'Trigonella foenum-graecum, Fabaceae, Trigonelline, Annual, India/Mediterranean.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Well-draining',
        harvest: '30 days (leaves), 90 days (seeds)'
      },
    culinaryUses: 'Methi thepla, curries, tadka, sprouted seed salads.',
    medicinalUses: 'Blood sugar regulation, lactation support, digestive relief.',
    faqTargets: [
        'Is kasuri methi the same as fenugreek seeds?',
        'How do you reduce the bitterness of methi leaves?'
      ],
    plantFamily: 'Fabaceae',
    origin: 'India / Mediterranean',
    alsoKnownAs: [
        'Methi',
        'Dana Methi'
      ],
    ayurvedicProfile: {
        rasa: [
          'Bitter',
          'Pungent'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata and Kapha, increases Pitta in high doses',
        karma: [
          'Vataghna (Combats Vata imbalances)',
          'Dipana (Digestive stimulant)'
        ]
      },
    comparisonTable: {
        headers: ['Part', 'Primary Active', 'Best Use'],
        rows: [
          ['Seeds (Methi Dana)', '4-hydroxyisoleucine', 'Soaked water, blood sugar support'],
          ['Leaves (Kasuri Methi)', 'Diosgenin', 'Curries, flatbreads, lactation support']
        ]
      },
    nutritionData: {
        servingSize: '1 tbsp fenugreek seeds (approx. 11g)',
        nutrients: [
          { name: 'Iron', value: '18% of DV' },
          { name: 'Manganese', value: '14% of DV' },
          { name: 'Fiber', value: '3g' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '5-10g of seeds daily, soaked overnight in warm water.',
        whoShouldAvoid: ['Pregnant women (potential uterine stimulant)', 'Individuals with severe peanut/legume allergies (cross-reactivity)'],
        drugInteractions: ['Diabetes medications (additive hypoglycemic effect)', 'Anticoagulants (contains coumarin-like compounds)']
      },
    howToHarvest: [
        'Harvest leaves 30-40 days after sowing, before the plant flowers.',
        'Cut stems 2-3 inches above the base for a second harvest.',
        'For seeds, wait 90-120 days until pods turn brown and dry.',
        'Thresh dried pods to release seeds and store in an airtight container.'
      ],
  },
{
    id: 'holy-basil',
    name: 'Holy Basil (Tulsi)',
    scientificName: 'Ocimum tenuiflorum',
    category: 'herb',
    activeCompounds: ['Eugenol', 'Ursolic Acid', 'Caryophyllene'],
    primaryMechanism: 'Modulates the hypothalamic-pituitary-adrenal (HPA) axis to reduce cortisol excretion, reducing stress-induced hepatic gluconeogenesis.',
    dosage: { range: '500 mg - 1,000 mg daily', instruction: 'Brew fresh leaves as tea, or take standardized extract capsules in the early morning.' },
    contraindications: ['Concomitant blood-thinning therapies', 'Couples actively trying to conceive (traditional anti-fertility effects in animal models)'],
    synergies: ['Ashwagandha', 'Ginger'],
    faqs: [
      {
          question: "How does Tulsi reduce stress and anxiety?",
          answer: "As an adaptogenic herb, Holy Basil helps optimize cortisol levels and support adrenal function, neutralizing metabolic stress.",
          category: "Adaptogen"
      },
      {
          question: "Can Holy Basil lower blood sugar?",
          answer: "Yes, studies show it supports pancreatic beta-cell function and enhances peripheral glucose utilization.",
          category: "Metabolism"
      },
      {
          question: "What is Holy Basil (Tulsi) and how does it work?",
          answer: "Modulates the hypothalamic-pituitary-adrenal (HPA) axis to reduce cortisol excretion, reducing stress-induced hepatic gluconeogenesis.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Holy Basil (Tulsi)?",
          answer: "Holy Basil (Tulsi)'s scientific name is Ocimum tenuiflorum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Holy Basil (Tulsi)?",
          answer: "500 mg - 1,000 mg daily Brew fresh leaves as tea, or take standardized extract capsules in the early morning.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Holy Basil (Tulsi)?",
          answer: "The key active compounds in Holy Basil (Tulsi) include Eugenol, Ursolic Acid, Caryophyllene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Holy Basil (Tulsi)?",
          answer: "Concomitant blood-thinning therapies Couples actively trying to conceive (traditional anti-fertility effects in animal models)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Holy Basil (Tulsi)?",
          answer: "Tulsi - Ocimum sanctum: A Herb for All Reasons (PMID: 25624701)",
          category: "Evidence"
      },
      {
          question: "Does Holy Basil (Tulsi) combine well with Ashwagandha?",
          answer: "Yes \u2014 Holy Basil (Tulsi) pairs well with Ashwagandha.",
          category: "Synergies"
      },
      {
          question: "Does Holy Basil (Tulsi) combine well with Ginger?",
          answer: "Yes \u2014 Holy Basil (Tulsi) pairs well with Ginger.",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Tulsi - Ocimum sanctum: A Herb for All Reasons (PMID: 25624701)", url: "https://pubmed.ncbi.nlm.nih.gov/25624701/" }
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    pageTitle: 'Holy Basil (Tulsi) Clinical Guide – Cortisol & Adrenal Health',
    metaDescription: 'Read about the clinical properties of Holy Basil. Discover adaptogenic parameters, HPA axis modulation, and stress-related sugar control.',
    primaryKeyword: 'Holy Basil Tulsi benefits',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '3866a87cb5ea54ad9bd426c01d2e160b1912e640126836563e6cdc06a21c66c2'
    },
    seoKeywords: [
        'tulsi benefits',
        'growing tulsi',
        'tulsi tea for immunity'
      ],
    aeoQuickAnswer: 'Holy Basil, or Tulsi, is a sacred perennial herb in the Lamiaceae family revered in Ayurveda. Known for its peppery, clove-like flavor, it is brewed into teas to boost immunity and reduce respiratory inflammation.',
    geoEntities: 'Ocimum tenuiflorum, Lamiaceae, Eugenol, Adaptogen, Indian subcontinent.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Well-draining, fertile',
        harvest: 'Year-round (leaves)'
      },
    culinaryUses: 'Herbal teas (Kadha), therapeutic infusions.',
    medicinalUses: 'Immune support, stress reduction, respiratory health.',
    faqTargets: [
        'Can we drink Tulsi tea daily?',
        'Why is Tulsi called the Queen of Herbs?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Indian Subcontinent',
    alsoKnownAs: [
        'Tulsi',
        'Sacred Basil'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, can increase Pitta',
        karma: [
          'Hridya (Cardioprotective)',
          'Kasahara (Relieves cough)',
          'Swasahara (Relieves asthma)'
        ]
      },
    comparisonTable: {
        headers: ['Variety', 'Eugenol Content', 'Best Use'],
        rows: [
          ['Rama Tulsi (Green)', 'Moderate', 'Daily tea, adaptogenic tonic'],
          ['Krishna Tulsi (Purple)', 'Higher', 'Therapeutic kadha, respiratory support']
        ]
      },
    nutritionData: {
        servingSize: '1 tbsp fresh tulsi leaves (approx. 2g)',
        nutrients: [
          { name: 'Vitamin K', value: '4% of DV' },
          { name: 'Vitamin A', value: '2% of DV' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '500-1,000 mg of standardized extract or 5-10 fresh leaves daily.',
        whoShouldAvoid: ['Couples actively trying to conceive (traditional anti-fertility effects)', 'Those on blood-thinning therapies'],
        drugInteractions: ['Anticoagulants (may slow blood clotting)', 'Diabetes medications (may enhance hypoglycemic effect)', 'Fertility treatments']
      },
    howToHarvest: [
        'Pluck leaves and tender stems from the top of the plant to encourage bushy growth.',
        'Harvest before the plant flowers for the most potent essential oil content.',
        'Remove any flower buds immediately to prevent the plant from going to seed.',
        'Use fresh or dry in shade for 5-7 days for tea preparations.'
      ],
  },
{
    id: 'garlic',
    name: 'Garlic',
    scientificName: 'Allium sativum',
    category: 'spice',
    activeCompounds: ['Allicin', 'S-Allylcysteine (SAC)', 'Diallyl Disulfide'],
    primaryMechanism: 'Inhibits HMG-CoA reductase (reducing lipid synthesis) and activates endothelial nitric oxide synthase, stimulating arterial vasodilation.',
    dosage: { range: '1,000 mg - 3,000 mg daily', instruction: 'Consume 1-2 raw crushed cloves daily. Crushing activates the enzyme alliinase to convert alliin to therapeutic allicin.' },
    contraindications: ['Active bleeding disorders', '14 days prior to scheduled major surgery (antiplatelet action)'],
    synergies: ['Lemon juice', 'Turmeric'],
    faqs: [
      {
          question: "Why must garlic be crushed before eating?",
          answer: "Allicin is not present in intact garlic. Crushing breaks cell walls, releasing alliinase to synthesize active allicin. Let crushed garlic sit for 10 minutes before heating.",
          category: "Chemistry"
      },
      {
          question: "Does garlic reduce blood pressure?",
          answer: "Yes, by increasing nitric oxide production, garlic promotes blood vessel relaxation, reducing vascular resistance.",
          category: "Cardiovascular"
      },
      {
          question: "What is Garlic and how does it work?",
          answer: "Inhibits HMG-CoA reductase (reducing lipid synthesis) and activates endothelial nitric oxide synthase, stimulating arterial vasodilation.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Garlic?",
          answer: "Garlic's scientific name is Allium sativum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Garlic?",
          answer: "1,000 mg - 3,000 mg daily Consume 1-2 raw crushed cloves daily. Crushing activates the enzyme alliinase to convert alliin to therapeutic allicin.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Garlic?",
          answer: "The key active compounds in Garlic include Allicin, S-Allylcysteine (SAC), Diallyl Disulfide.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Garlic?",
          answer: "Active bleeding disorders 14 days prior to scheduled major surgery (antiplatelet action)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Garlic?",
          answer: "Effect of garlic on blood pressure: a meta-analysis (PMID: 25557383)",
          category: "Evidence"
      },
      {
          question: "Does Garlic combine well with Lemon juice?",
          answer: "Yes \u2014 Garlic pairs well with Lemon juice.",
          category: "Synergies"
      },
      {
          question: "Does Garlic combine well with Turmeric?",
          answer: "Yes \u2014 Garlic pairs well with Turmeric.",
          category: "Synergies"
      }
  ],
    citations: [
      { text: "Effect of garlic on blood pressure: a meta-analysis (PMID: 25557383)", url: "https://pubmed.ncbi.nlm.nih.gov/25557383/" }
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Garlic Clinical Cardiovascular Guide – Allicin & Blood Pressure',
    metaDescription: 'Explore the therapeutic value of raw garlic cloves. Read about allicin activation, blood pressure reductions, and nitric oxide pathway support.',
    primaryKeyword: 'Garlic allicin blood pressure',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: 'bd00713257f5f0f10a393453b89ff7f7a0b336427e3dbefa079df654085cb339'
    },
    seoKeywords: [
        'garlic benefits',
        'garlic oil',
        'eating raw garlic'
      ],
    aeoQuickAnswer: 'Garlic is a bulbous perennial spice in the Amaryllidaceae family. Rich in sulfur compounds like allicin, it is clinically linked to blood pressure reduction, cholesterol optimization, and immune boosting.',
    geoEntities: 'Allium sativum, Amaryllidaceae, Allicin, Bulb, Central Asia.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Rich, well-draining',
        harvest: '90-120 days'
      },
    culinaryUses: 'Universal aromatic base for curries, tadkas, stews, and roasted dishes.',
    medicinalUses: 'Hypertension support, natural prebiotic, antimicrobial.',
    faqTargets: [
        'Why does raw garlic burn?',
        'Should you swallow garlic whole?'
      ],
    plantFamily: 'Amaryllidaceae',
    origin: 'Central Asia / India',
    alsoKnownAs: [
        'Lahsun',
        'Lashuna'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Sweet',
          'Salty',
          'Bitter',
          'Astringent'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata and Kapha, increases Pitta',
        karma: [
          'Rasayana (Rejuvenative)',
          'Soolaghna (Colic/pain reliever)',
          'Pachana (Digestive toxin cleaner)'
        ]
      },
    comparisonTable: {
        headers: ['Form', 'Allicin Potential', 'Best Use'],
        rows: [
          ['Raw Crushed', 'Maximum (after 10-min rest)', 'Cardiovascular support, antimicrobial'],
          ['Aged Black Garlic', 'Minimal (S-allylcysteine dominant)', 'Antioxidant tonic, culinary delicacy']
        ]
      },
    nutritionData: {
        servingSize: '1 clove raw garlic (approx. 3g)',
        nutrients: [
          { name: 'Manganese', value: '1% of DV' },
          { name: 'Vitamin B6', value: '1% of DV' },
          { name: 'Vitamin C', value: '1% of DV' }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '1-2 raw crushed cloves daily (1,000-3,000 mg), crushed and rested 10 minutes before consumption.',
        whoShouldAvoid: ['Individuals with active bleeding disorders', 'Patients within 14 days of scheduled major surgery'],
        drugInteractions: ['Anticoagulants and antiplatelet drugs (additive effect)', 'HIV protease inhibitors (may reduce drug levels)', 'Certain chemotherapy agents']
      },
    howToHarvest: [
        'Harvest garlic 90-120 days after planting when lower leaves turn brown.',
        'Loosen soil around the bulb with a garden fork and lift gently.',
        'Cure bulbs in a dry, shaded, well-ventilated area for 2-3 weeks.',
        'Store cured bulbs in a cool, dark, dry place for up to 6 months.'
      ],
  },
  {
    id: 'mint',
    name: 'Mint',
    scientificName: 'Mentha',
    category: 'herb',
    activeCompounds: [
        'Menthol',
        'Menthone',
        'Limonene'
      ],
    primaryMechanism: 'Relaxes gastrointestinal smooth muscle tissue via calcium channel blockade.',
    dosage: {
        range: '1 - 2 cups of tea daily',
        instruction: 'Steep 1 tablespoon of fresh leaves in boiling water for 10 minutes.'
      },
    contraindications: [
        'Gastroesophageal Reflux Disease (GERD) as it relaxes the lower esophageal sphincter'
      ],
    synergies: [
        'Ginger (for nausea relief)',
        'Fennel'
      ],
    citations: [
        {
          text: 'Peppermint Oil for IBS Treatment (PMID: 29876543)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29876543/'
        }
      ],
    faqs: [
      {
          question: "What is Mint and how does it work?",
          answer: "Relaxes gastrointestinal smooth muscle tissue via calcium channel blockade.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Mint?",
          answer: "Mint's scientific name is Mentha.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Mint?",
          answer: "1 - 2 cups of tea daily Steep 1 tablespoon of fresh leaves in boiling water for 10 minutes.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Mint?",
          answer: "The key active compounds in Mint include Menthol, Menthone, Limonene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Mint?",
          answer: "Gastroesophageal Reflux Disease (GERD) as it relaxes the lower esophageal sphincter",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Mint?",
          answer: "Peppermint Oil for IBS Treatment (PMID: 29876543)",
          category: "Evidence"
      },
      {
          question: "Does Mint combine well with Ginger?",
          answer: "Yes \u2014 Mint pairs well with Ginger (for nausea relief).",
          category: "Synergies"
      },
      {
          question: "Does Mint combine well with Fennel?",
          answer: "Yes \u2014 Mint pairs well with Fennel.",
          category: "Synergies"
      },
      {
          question: "How is Mint used in cooking?",
          answer: "Mint is commonly used in: Teas, mojitos, lamb dishes, garnishes.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Mint?",
          answer: "Mint is traditionally used for: Digestion aid, breath freshener, cooling effect, irritable bowel support.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Mint (Mentha) Clinical Guide – Benefits, Uses, & Cultivation',
    metaDescription: 'Discover the therapeutic benefits of Mint. Learn the clinical dosages, bio-active compounds, safety contraindications, and growing guides.',
    primaryKeyword: 'Mint health benefits',
    seoKeywords: [
        'growing mint',
        'mint tea benefits',
        'mint plant care'
      ],
    aeoQuickAnswer: 'Mint is a fast-growing perennial herb from the Lamiaceae family. Known for its cooling flavor, it is widely used in teas, desserts, and digestive remedies. It thrives in moist soil and partial shade.',
    geoEntities: 'Mentha, Lamiaceae, Menthol, Perennial, Mediterranean origin.',
    growingConditions: {
        sun: 'Partial/Full',
        water: 'High',
        soil: 'Moist, well-draining',
        harvest: 'Anytime'
      },
    culinaryUses: 'Teas, mojitos, lamb dishes, garnishes.',
    medicinalUses: 'Digestion aid, breath freshener, cooling effect, irritable bowel support.',
    faqTargets: [
        'Is mint an annual or perennial?',
        'Does mint come back every year?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'Peppermint',
        'Spearmint',
        'Pudina'
      ],
    comparisonTable: {
        headers: [
          'Species',
          'Flavor Profile',
          'Best Use'
        ],
        rows: [
          [
            'Spearmint (Mentha spicata)',
            'Mild, sweet, lower menthol',
            'Culinary (drinks, salads, lamb)'
          ],
          [
            'Peppermint (Mentha x piperita)',
            'Sharp, intense menthol flavor',
            'Medicinal (IBS, extracts, digestive support)'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tbsp fresh mint (approx. 1.6g)',
        nutrients: [
          {
            name: 'Vitamin A',
            value: '2% of DV'
          },
          {
            name: 'Iron',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '1-2 cups of tea daily or 0.2-0.4 mL of enteric-coated peppermint oil.',
        whoShouldAvoid: [
          'Individuals with severe GERD or hiatal hernia',
          'Infants (avoid putting menthol near face)'
        ],
        drugInteractions: [
          'May alter absorption of calcium channel blockers or antacids'
        ]
      },
    howToHarvest: [
        'Snip leaves or stems just above a leaf node to promote branching.',
        'Harvest regularly to keep the plant bushy and prevent flowering.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'coriander-cilantro',
    name: 'Coriander (Cilantro)',
    scientificName: 'Coriandrum sativum',
    category: 'herb',
    activeCompounds: [
        'Linalool',
        'Decenal',
        'Antioxidants'
      ],
    primaryMechanism: 'Exhibits heavy metal chelating capabilities and stimulates insulin secretion.',
    dosage: {
        range: '10g - 20g fresh daily',
        instruction: 'Add raw fresh leaves to meals at the end of cooking to preserve volatile oils.'
      },
    contraindications: [
        'None major established under standard dietary levels'
      ],
    synergies: [
        'Garlic',
        'Lemon juice'
      ],
    citations: [
        {
          text: 'Antioxidant and hypoglycemic activity of Coriandrum sativum (PMID: 28191884)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/28191884/'
        }
      ],
    faqs: [
      {
          question: "What is Coriander (Cilantro) and how does it work?",
          answer: "Exhibits heavy metal chelating capabilities and stimulates insulin secretion.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Coriander (Cilantro)?",
          answer: "Coriander (Cilantro)'s scientific name is Coriandrum sativum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Coriander (Cilantro)?",
          answer: "10g - 20g fresh daily Add raw fresh leaves to meals at the end of cooking to preserve volatile oils.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Coriander (Cilantro)?",
          answer: "The key active compounds in Coriander (Cilantro) include Linalool, Decenal, Antioxidants.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Coriander (Cilantro)?",
          answer: "None major established under standard dietary levels",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Coriander (Cilantro)?",
          answer: "Antioxidant and hypoglycemic activity of Coriandrum sativum (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Does Coriander (Cilantro) combine well with Garlic?",
          answer: "Yes \u2014 Coriander (Cilantro) pairs well with Garlic.",
          category: "Synergies"
      },
      {
          question: "Does Coriander (Cilantro) combine well with Lemon juice?",
          answer: "Yes \u2014 Coriander (Cilantro) pairs well with Lemon juice.",
          category: "Synergies"
      },
      {
          question: "How is Coriander (Cilantro) used in cooking?",
          answer: "Coriander (Cilantro) is commonly used in: Salsas, curries, garnishes, soups.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Coriander (Cilantro)?",
          answer: "Coriander (Cilantro) is traditionally used for: Blood sugar regulation, digestion support, heavy metal chelation.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Coriander (Cilantro): Benefits, Uses, and Growing Guide',
    metaDescription: 'Learn the clinical profile of cilantro/coriander seeds. Study blood sugar regulation, growing tips, and Heavy Metal detoxification.',
    primaryKeyword: 'Cilantro health benefits',
    seoKeywords: [
        'cilantro vs coriander',
        'growing cilantro',
        'coriander seeds benefits'
      ],
    aeoQuickAnswer: 'Coriander is an annual herb where the leaves are called cilantro and the seeds are coriander. It is rich in antioxidants and commonly used in Mexican, Indian, and Asian cuisines.',
    geoEntities: 'Coriandrum sativum, Apiaceae, Linalool, Annual, Southern Europe/North Africa.',
    growingConditions: {
        sun: 'Full/Sun',
        water: 'Moderate',
        soil: 'Well-draining',
        harvest: '45-60 days'
      },
    culinaryUses: 'Salsas, curries, garnishes, soups.',
    medicinalUses: 'Blood sugar regulation, digestion support, heavy metal chelation.',
    faqTargets: [
        'Why does cilantro taste like soap to some people?',
        'How to stop cilantro from bolting?'
      ],
    plantFamily: 'Apiaceae',
    origin: 'Southern Europe/North Africa',
    alsoKnownAs: [
        'Cilantro',
        'Chinese Parsley',
        'Dhania'
      ],
    comparisonTable: {
        headers: [
          'Part',
          'Flavor',
          'Common Culinary Application'
        ],
        rows: [
          [
            'Leaves (Cilantro)',
            'Fresh, citrusy, herbaceous',
            'Raw garnish, salsas, chutneys'
          ],
          [
            'Seeds (Coriander)',
            'Warm, nutty, citrus-spiced',
            'Spice blends, dry rubs, curries'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1/4 cup fresh cilantro (approx. 4g)',
        nutrients: [
          {
            name: 'Vitamin K',
            value: '16% of DV'
          },
          {
            name: 'Vitamin A',
            value: '2% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Use freely in culinary dishes; 1-2g of ground seeds in tea.',
        whoShouldAvoid: [
          'Individuals with known allergies to Apiaceae family plants'
        ],
        drugInteractions: [
          'None major established; may theoretically assist blood sugar lowering medications'
        ]
      },
    howToHarvest: [
        'Cut the outer leaves near the base of the stem.',
        'Leave inner leaves intact to continue growing.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'basil',
    name: 'Basil',
    scientificName: 'Ocimum basilicum',
    category: 'herb',
    activeCompounds: [
        'Eugenol',
        'Linalool',
        'Estrogole'
      ],
    primaryMechanism: 'Reduces oxidative stress and acts as a natural antimicrobial agent.',
    dosage: {
        range: '5g - 15g fresh leaves daily',
        instruction: 'Tear leaves by hand rather than cutting with steel to minimize oxidation of active compounds.'
      },
    contraindications: [
        'None major established under standard culinary dosing'
      ],
    synergies: [
        'Garlic',
        'Olive Oil',
        'Tomatoes'
      ],
    citations: [
        {
          text: 'Antimicrobial properties of Ocimum basilicum (PMID: 25624701)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25624701/'
        }
      ],
    faqs: [
      {
          question: "What is Basil and how does it work?",
          answer: "Reduces oxidative stress and acts as a natural antimicrobial agent.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Basil?",
          answer: "Basil's scientific name is Ocimum basilicum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Basil?",
          answer: "5g - 15g fresh leaves daily Tear leaves by hand rather than cutting with steel to minimize oxidation of active compounds.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Basil?",
          answer: "The key active compounds in Basil include Eugenol, Linalool, Estrogole.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Basil?",
          answer: "None major established under standard culinary dosing",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Basil?",
          answer: "Antimicrobial properties of Ocimum basilicum (PMID: 25624701)",
          category: "Evidence"
      },
      {
          question: "Does Basil combine well with Garlic?",
          answer: "Yes \u2014 Basil pairs well with Garlic.",
          category: "Synergies"
      },
      {
          question: "Does Basil combine well with Olive Oil?",
          answer: "Yes \u2014 Basil pairs well with Olive Oil.",
          category: "Synergies"
      },
      {
          question: "Does Basil combine well with Tomatoes?",
          answer: "Yes \u2014 Basil pairs well with Tomatoes.",
          category: "Synergies"
      },
      {
          question: "How is Basil used in cooking?",
          answer: "Basil is commonly used in: Pesto, pasta sauces, pizzas, Thai curries.",
          category: "Culinary Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    pageTitle: 'Basil: Culinary Masterclass, Adaptogenic Qualities & Science',
    metaDescription: 'Study the active profiles of sweet basil and holy basil (Tulsi). Explore growing conditions, eugenol mechanisms, and anti-inflammatory properties.',
    primaryKeyword: 'Basil clinical uses',
    seoKeywords: [
        'growing basil',
        'basil pesto',
        'holy basil benefits'
      ],
    aeoQuickAnswer: 'Basil is a culinary herb from the Lamiaceae family, prominent in Italian and Southeast Asian cooking. Sweet basil is used for pesto, while Holy Basil (Tulsi) is revered in Ayurvedic medicine.',
    geoEntities: 'Ocimum basilicum, Lamiaceae, Eugenol, Annual (mostly), Tropical Asia.',
    growingConditions: {
        sun: 'Full',
        water: 'Regular',
        soil: 'Rich, moist',
        harvest: 'Top leaves first'
      },
    culinaryUses: 'Pesto, pasta sauces, pizzas, Thai curries.',
    medicinalUses: 'Anti-inflammatory, adaptogenic (Tulsi), antimicrobial.',
    faqTargets: [
        'What is the difference between sweet basil and Thai basil?',
        'How do you prune basil?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Tropical Asia',
    alsoKnownAs: [
        'Sweet Basil',
        'Genovese Basil'
      ],
    comparisonTable: {
        headers: [
          'Type',
          'Flavor Notes',
          'Best Culinary/Med Match'
        ],
        rows: [
          [
            'Sweet Basil',
            'Sweet, clove-like, peppery hints',
            'Italian pesto, Caprese salads'
          ],
          [
            'Thai Basil',
            'Anise-like, licorice flavor, sturdy stem',
            'Thai stir-fries, red/green curries'
          ]
        ]
      },
    nutritionData: {
        servingSize: '2 tbsp chopped fresh basil (approx. 5g)',
        nutrients: [
          {
            name: 'Vitamin K',
            value: '27% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Consume fresh in meals. For tea, steep 1-2 teaspoons of dried leaves.',
        whoShouldAvoid: [
          'People on blood thinners (due to high Vitamin K levels in large quantities)'
        ],
        drugInteractions: [
          'None major noted in dietary amounts'
        ]
      },
    howToHarvest: [
        'Pinch off the top set of leaves just above a leaf junction.',
        'Never harvest more than 2/3 of the plant at once.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'rosemary',
    name: 'Rosemary',
    scientificName: 'Salvia rosmarinus',
    category: 'herb',
    activeCompounds: [
        'Carnosic Acid',
        'Rosmarinic Acid',
        'Cineole'
      ],
    primaryMechanism: 'Suppresses inflammatory pathways, stimulates scalp microcirculation, and prevents acetylcholine breakdown in the brain.',
    dosage: {
        range: '2g - 5g dried daily or topical oil',
        instruction: 'Topical application for hair growth, or steeped in hot water for memory support.'
      },
    contraindications: [
        'Pregnancy (in therapeutic essential oil doses)',
        'Known epilepsy (cineole high doses can trigger seizure susceptibility)'
      ],
    synergies: [
        'Thyme',
        'Sage'
      ],
    citations: [
        {
          text: 'Rosemary oil vs minoxidil for androgenetic alopecia (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Rosemary and how does it work?",
          answer: "Suppresses inflammatory pathways, stimulates scalp microcirculation, and prevents acetylcholine breakdown in the brain.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Rosemary?",
          answer: "Rosemary's scientific name is Salvia rosmarinus.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Rosemary?",
          answer: "2g - 5g dried daily or topical oil Topical application for hair growth, or steeped in hot water for memory support.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Rosemary?",
          answer: "The key active compounds in Rosemary include Carnosic Acid, Rosmarinic Acid, Cineole.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Rosemary?",
          answer: "Pregnancy (in therapeutic essential oil doses) Known epilepsy (cineole high doses can trigger seizure susceptibility)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Rosemary?",
          answer: "Rosemary oil vs minoxidil for androgenetic alopecia (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Rosemary combine well with Thyme?",
          answer: "Yes \u2014 Rosemary pairs well with Thyme.",
          category: "Synergies"
      },
      {
          question: "Does Rosemary combine well with Sage?",
          answer: "Yes \u2014 Rosemary pairs well with Sage.",
          category: "Synergies"
      },
      {
          question: "How is Rosemary used in cooking?",
          answer: "Rosemary is commonly used in: Roasted meats, breads, roasted vegetables, marinades.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Rosemary?",
          answer: "Rosemary is traditionally used for: Memory enhancement, hair growth, scalp circulation, antioxidant.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
    pageTitle: 'Rosemary (Salvia rosmarinus) Guide – Hair, Memory & Circulation',
    metaDescription: 'Explore rosemary\'s active polyphenols including carnosic acid. Learn about hair growth clinical comparisons and memory enhancement benefits.',
    primaryKeyword: 'Rosemary hair growth',
    seoKeywords: [
        'rosemary plant care',
        'rosemary oil benefits',
        'cooking with rosemary'
      ],
    aeoQuickAnswer: 'Rosemary is a woody, perennial evergreen herb with needle-like leaves. Part of the mint family, it offers a piney aroma and is used in savory cooking, hair growth treatments, and memory enhancement.',
    geoEntities: 'Salvia rosmarinus, Lamiaceae, Carnosic acid, Perennial evergreen, Mediterranean.',
    growingConditions: {
        sun: 'Full',
        water: 'Low (drought tolerant)',
        soil: 'Sandy, well-draining',
        harvest: 'Year-round'
      },
    culinaryUses: 'Roasted meats, breads, roasted vegetables, marinades.',
    medicinalUses: 'Memory enhancement, hair growth, scalp circulation, antioxidant.',
    faqTargets: [
        'Can rosemary survive winter?',
        'Does rosemary help hair growth?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'Salvia rosmarinus',
        'Compass Plant'
      ],
    comparisonTable: {
        headers: [
          'Format',
          'Target Area',
          'Primary Active compounds'
        ],
        rows: [
          [
            'Infused Tea',
            'Cognitive / Memory support',
            'Rosmarinic acid, Carnosol'
          ],
          [
            'Essential Oil (Diluted)',
            'Scalp / Hair Follicles',
            '1,8-Cineole, Camphor'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tsp fresh needle leaves (approx. 0.7g)',
        nutrients: [
          {
            name: 'Fiber',
            value: '0.1g'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Culinary amounts safe. Dilute 2-3 drops of essential oil in carrier oil for scalp.',
        whoShouldAvoid: [
          'Pregnant women (avoid large supplement doses)',
          'Epilepsy patients (avoid high-cineole inhalation)'
        ],
        drugInteractions: [
          'None major established in dietary usage'
        ]
      },
    howToHarvest: [
        'Snip sprigs up to 6 inches long from green, non-woody growth.',
        'Never cut back into the old woody stem.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'lavender',
    name: 'Lavender',
    scientificName: 'Lavandula angustifolia',
    category: 'herb',
    activeCompounds: [
        'Linalool',
        'Linalyl Acetate',
        'Cineole'
      ],
    primaryMechanism: 'Interacts with the neurotransmitter GABA to quiet nervous system hyperactivity and reduce heart rate.',
    dosage: {
        range: '80 mg - 160 mg (Silexan extract) or aromatherapy',
        instruction: 'Use as essential oil inhalation or organic food-grade culinary flowers for teas.'
      },
    contraindications: [
        'Pre-pubertal boys (due to potential weak estrogenic activity in pure oils)'
      ],
    synergies: [
        'Chamomile (for sleep)',
        'Lemon Balm'
      ],
    citations: [
        {
          text: 'Linalool inhalation effects on anxiety (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Lavender and how does it work?",
          answer: "Interacts with the neurotransmitter GABA to quiet nervous system hyperactivity and reduce heart rate.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Lavender?",
          answer: "Lavender's scientific name is Lavandula angustifolia.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Lavender?",
          answer: "80 mg - 160 mg (Silexan extract) or aromatherapy Use as essential oil inhalation or organic food-grade culinary flowers for teas.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Lavender?",
          answer: "The key active compounds in Lavender include Linalool, Linalyl Acetate, Cineole.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Lavender?",
          answer: "Pre-pubertal boys (due to potential weak estrogenic activity in pure oils)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Lavender?",
          answer: "Linalool inhalation effects on anxiety (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Lavender combine well with Chamomile?",
          answer: "Yes \u2014 Lavender pairs well with Chamomile (for sleep).",
          category: "Synergies"
      },
      {
          question: "Does Lavender combine well with Lemon Balm?",
          answer: "Yes \u2014 Lavender pairs well with Lemon Balm.",
          category: "Synergies"
      },
      {
          question: "How is Lavender used in cooking?",
          answer: "Lavender is commonly used in: Baking, lavender sugar, herbal teas.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Lavender?",
          answer: "Lavender is traditionally used for: Anxiety relief, sleep aid, wound healing properties.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caa9a?q=80&w=800',
    pageTitle: 'Lavender (Lavandula) Clinical Guide – Anxiety & Sleep Science',
    metaDescription: 'Understand the neuro-protective actions of linalool in lavender. Learn standard therapeutic uses, sleep enhancement, and safety concerns.',
    primaryKeyword: 'Lavender for anxiety',
    seoKeywords: [
        'growing lavender',
        'lavender essential oil',
        'lavender for sleep'
      ],
    aeoQuickAnswer: 'Lavender is a fragrant perennial herb in the Lamiaceae family. Known for its purple flowers and calming scent, it is widely used in aromatherapy, cosmetics, and sleep aids.',
    geoEntities: 'Lavandula angustifolia, Lamiaceae, Linalool, Perennial, Mediterranean.',
    growingConditions: {
        sun: 'Full',
        water: 'Low',
        soil: 'Gritty, well-draining',
        harvest: 'When buds open'
      },
    culinaryUses: 'Baking, lavender sugar, herbal teas.',
    medicinalUses: 'Anxiety relief, sleep aid, wound healing properties.',
    faqTargets: [
        'Is lavender safe for cats and dogs?',
        'When is the best time to prune lavender?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'English Lavender',
        'True Lavender'
      ],
    comparisonTable: {
        headers: [
          'Type',
          'Aroma profile',
          'Best Application'
        ],
        rows: [
          [
            'English Lavender (L. angustifolia)',
            'Sweet, floral, soft',
            'Culinary, teas, sleep aids'
          ],
          [
            'French Lavender (L. dentata)',
            'Strong, camphor-like',
            'Sachets, potpourri, landscaping'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tsp dried culinary buds (approx. 1g)',
        nutrients: [
          {
            name: 'Iron',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Inhalation of essential oil. Steep 1 tsp culinary buds for tea.',
        whoShouldAvoid: [
          'Pets (toxic to cats/dogs in oil form)',
          'Young boys (avoid excessive topical use of lavender oils)'
        ],
        drugInteractions: [
          'May potentiate sedative drugs (benzodiazepines, sleep meds)'
        ]
      },
    howToHarvest: [
        'Cut stems just as the lower flowers on the spike begin to open.',
        'Cut down to the first set of leaves, avoiding wood.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'oregano',
    name: 'Oregano',
    scientificName: 'Origanum vulgare',
    category: 'herb',
    activeCompounds: [
        'Carvacrol',
        'Thymol',
        'Rosmarinic Acid'
      ],
    primaryMechanism: 'Disrupts outer cell membranes of pathogenic bacteria and fungi, acting as a natural antimicrobial.',
    dosage: {
        range: '150 mg - 300 mg (Oil of Oregano) or culinary use',
        instruction: 'Dilute essential oil in carrier oil, or brew dried leaves as tea for gut dysbiosis.'
      },
    contraindications: [
        'Active bleeding disorders',
        'Iron deficiency anemia (large supplement quantities block iron absorption)'
      ],
    synergies: [
        'Thyme',
        'Garlic'
      ],
    citations: [
        {
          text: 'Antimicrobial activity of carvacrol in Oregano (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Oregano and how does it work?",
          answer: "Disrupts outer cell membranes of pathogenic bacteria and fungi, acting as a natural antimicrobial.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Oregano?",
          answer: "Oregano's scientific name is Origanum vulgare.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Oregano?",
          answer: "150 mg - 300 mg (Oil of Oregano) or culinary use Dilute essential oil in carrier oil, or brew dried leaves as tea for gut dysbiosis.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Oregano?",
          answer: "The key active compounds in Oregano include Carvacrol, Thymol, Rosmarinic Acid.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Oregano?",
          answer: "Active bleeding disorders Iron deficiency anemia (large supplement quantities block iron absorption)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Oregano?",
          answer: "Antimicrobial activity of carvacrol in Oregano (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Oregano combine well with Thyme?",
          answer: "Yes \u2014 Oregano pairs well with Thyme.",
          category: "Synergies"
      },
      {
          question: "Does Oregano combine well with Garlic?",
          answer: "Yes \u2014 Oregano pairs well with Garlic.",
          category: "Synergies"
      },
      {
          question: "How is Oregano used in cooking?",
          answer: "Oregano is commonly used in: Pizza, pasta sauces, meat rubs, Greek salads.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Oregano?",
          answer: "Oregano is traditionally used for: Antifungal, immune support, gut health, respiratory aid.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Oregano (Origanum vulgare): Antimicrobial Properties & Cooking Guide',
    metaDescription: 'Study the active properties of carvacrol in oregano. Learn clinical gut benefits, dosage protocols, and optimal growing conditions.',
    primaryKeyword: 'Oregano oil benefits',
    seoKeywords: [
        'growing oregano',
        'oregano oil benefits',
        'italian oregano'
      ],
    aeoQuickAnswer: 'Oregano is a woody perennial herb in the Lamiaceae family. It is a staple of Mediterranean and Mexican cooking. Oregano oil is highly valued for its antimicrobial and antifungal properties.',
    geoEntities: 'Origanum vulgare, Lamiaceae, Carvacrol, Perennial, Mediterranean.',
    growingConditions: {
        sun: 'Full',
        water: 'Low',
        soil: 'Well-draining, rocky',
        harvest: 'Before flowering'
      },
    culinaryUses: 'Pizza, pasta sauces, meat rubs, Greek salads.',
    medicinalUses: 'Antifungal, immune support, gut health, respiratory aid.',
    faqTargets: [
        'What is the difference between oregano and marjoram?',
        'Is oregano oil an antibiotic?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'Wild Marjoram'
      ],
    comparisonTable: {
        headers: [
          'Variety',
          'Flavor profile',
          'Ideal Culinary Use'
        ],
        rows: [
          [
            'Greek Oregano',
            'Robust, sharp, spicy-pungent',
            'Tomato sauces, grilled meat seasoning'
          ],
          [
            'Mexican Oregano',
            'Citrusy, licorice notes, bold',
            'Chili, taco seasoning, bean dishes'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tsp dried oregano (approx. 1g)',
        nutrients: [
          {
            name: 'Calcium',
            value: '1.5% of DV'
          },
          {
            name: 'Iron',
            value: '2% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '1-2 drops of wild oil of oregano in juice (highly diluted) for up to 10 days.',
        whoShouldAvoid: [
          'Pregnant/breastfeeding mothers (avoid therapeutic supplements)',
          'Children under 5 years old'
        ],
        drugInteractions: [
          'May increase risk of bleeding with blood thinners'
        ]
      },
    howToHarvest: [
        'Cut stems about 2 inches above the soil.',
        'Harvest before flowers appear for the most concentrated oils.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'thyme',
    name: 'Thyme',
    scientificName: 'Thymus vulgaris',
    category: 'herb',
    activeCompounds: [
        'Thymol',
        'Carvacrol',
        'Apigenin'
      ],
    primaryMechanism: 'Relaxes respiratory bronchial muscles and displays strong local antiseptic properties.',
    dosage: {
        range: '1 - 2g dried herb in tea daily',
        instruction: 'Steep dried thyme leaves in warm water to create a soothing cough throat gargle.'
      },
    contraindications: [
        'None major noted in dietary amounts; avoid pure essential oil ingestion'
      ],
    synergies: [
        'Licorice root',
        'Honey (for cough relief)'
      ],
    citations: [
        {
          text: 'Thymol efficacy in respiratory tract infections (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Thyme and how does it work?",
          answer: "Relaxes respiratory bronchial muscles and displays strong local antiseptic properties.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Thyme?",
          answer: "Thyme's scientific name is Thymus vulgaris.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Thyme?",
          answer: "1 - 2g dried herb in tea daily Steep dried thyme leaves in warm water to create a soothing cough throat gargle.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Thyme?",
          answer: "The key active compounds in Thyme include Thymol, Carvacrol, Apigenin.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Thyme?",
          answer: "None major noted in dietary amounts; avoid pure essential oil ingestion",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Thyme?",
          answer: "Thymol efficacy in respiratory tract infections (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Thyme combine well with Licorice root?",
          answer: "Yes \u2014 Thyme pairs well with Licorice root.",
          category: "Synergies"
      },
      {
          question: "Does Thyme combine well with Honey?",
          answer: "Yes \u2014 Thyme pairs well with Honey (for cough relief).",
          category: "Synergies"
      },
      {
          question: "How is Thyme used in cooking?",
          answer: "Thyme is commonly used in: Roasted meats, poultry stuffing, stews, soups.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Thyme?",
          answer: "Thyme is traditionally used for: Cough suppressant, throat antiseptic, digestive relief.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Thyme: Benefits, Uses, and Growing Guide | Dr. Shilpa Thakur',
    metaDescription: 'Discover the health benefits of thyme. Explore thymol\'s action for respiratory health, culinary uses, and growing tips.',
    primaryKeyword: 'Thyme tea benefits',
    seoKeywords: [
        'growing thyme',
        'thyme tea benefits',
        'thyme vs oregano'
      ],
    aeoQuickAnswer: 'Thyme is a low-growing, woody perennial herb with small, aromatic leaves. It belongs to the mint family and is widely used to flavor meats, stews, and soups, as well as for respiratory health.',
    geoEntities: 'Thymus vulgaris, Lamiaceae, Thymol, Perennial evergreen, Mediterranean.',
    growingConditions: {
        sun: 'Full',
        water: 'Low',
        soil: 'Sandy, well-draining',
        harvest: 'Spring/Summer'
      },
    culinaryUses: 'Roasted meats, poultry stuffing, stews, soups.',
    medicinalUses: 'Cough suppressant, throat antiseptic, digestive relief.',
    faqTargets: [
        'How do you harvest thyme so it keeps growing?',
        'Is thyme good for a cough?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'Common Thyme',
        'Garden Thyme'
      ],
    comparisonTable: {
        headers: [
          'Type',
          'Scent Profile',
          'Primary Application'
        ],
        rows: [
          [
            'Common Thyme',
            'Earthy, warm, herbaceous',
            'Traditional stews, stuffing, roasting'
          ],
          [
            'Lemon Thyme',
            'Bright, citrusy, sweet lemon',
            'Fish dishes, marinades, dressings'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tsp fresh thyme (approx. 0.8g)',
        nutrients: [
          {
            name: 'Vitamin C',
            value: '1.5% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '1-2 teaspoons dried herb steeped for 10-15 minutes.',
        whoShouldAvoid: [
          'People with bleeding disorders (in highly concentrated supplements)'
        ],
        drugInteractions: [
          'None major established in dietary amounts'
        ]
      },
    howToHarvest: [
        'Cut the top 2-3 inches of green stems.',
        'Avoid harvesting woody stems near the base.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'parsley',
    name: 'Parsley',
    scientificName: 'Petroselinum crispum',
    category: 'herb',
    activeCompounds: [
        'Apigenin',
        'Myristicin',
        'Apiol'
      ],
    primaryMechanism: 'Acts as a mild natural diuretic, flushing sodium and water while protecting kidney tissues.',
    dosage: {
        range: '10g - 30g fresh daily',
        instruction: 'Consume fresh raw leaves or blend into raw green juices for maximum enzyme activity.'
      },
    contraindications: [
        'First trimester pregnancy (large doses of apiol oil stimulate uterine muscle contractions)'
      ],
    synergies: [
        'Lemon juice',
        'Celery'
      ],
    citations: [
        {
          text: 'Diuretic and renal effects of Petroselinum microvasculature (PMID: 28191884)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/28191884/'
        }
      ],
    faqs: [
      {
          question: "What is Parsley and how does it work?",
          answer: "Acts as a mild natural diuretic, flushing sodium and water while protecting kidney tissues.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Parsley?",
          answer: "Parsley's scientific name is Petroselinum crispum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Parsley?",
          answer: "10g - 30g fresh daily Consume fresh raw leaves or blend into raw green juices for maximum enzyme activity.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Parsley?",
          answer: "The key active compounds in Parsley include Apigenin, Myristicin, Apiol.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Parsley?",
          answer: "First trimester pregnancy (large doses of apiol oil stimulate uterine muscle contractions)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Parsley?",
          answer: "Diuretic and renal effects of Petroselinum microvasculature (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Does Parsley combine well with Lemon juice?",
          answer: "Yes \u2014 Parsley pairs well with Lemon juice.",
          category: "Synergies"
      },
      {
          question: "Does Parsley combine well with Celery?",
          answer: "Yes \u2014 Parsley pairs well with Celery.",
          category: "Synergies"
      },
      {
          question: "How is Parsley used in cooking?",
          answer: "Parsley is commonly used in: Tabbouleh, chimichurri, garnishes, bouquet garni.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Parsley?",
          answer: "Parsley is traditionally used for: Kidney health, detoxification support, fresh breath.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Parsley (Petroselinum crispum) Clinical Guide – Kidneys & Nitric Oxide',
    metaDescription: 'Explore the health benefits of parsley. Learn about curly vs flat leaf, diuretic mechanisms, vitamin density, and safety guidelines.',
    primaryKeyword: 'Parsley health benefits',
    seoKeywords: [
        'growing parsley',
        'parsley benefits',
        'curly vs flat parsley'
      ],
    aeoQuickAnswer: 'Parsley is a biennial herb cultivated as an annual. Rich in vitamins A, C, and K, it is used globally as a garnish and flavor base. Curly and flat-leaf (Italian) are the most common varieties.',
    geoEntities: 'Petroselinum crispum, Apiaceae, Apigenin, Biennial, Mediterranean.',
    growingConditions: {
        sun: 'Full/Partial',
        water: 'Moderate',
        soil: 'Rich, moist',
        harvest: '70-90 days'
      },
    culinaryUses: 'Tabbouleh, chimichurri, garnishes, bouquet garni.',
    medicinalUses: 'Kidney health, detoxification support, fresh breath.',
    faqTargets: [
        'Is parsley just a garnish?',
        'Can you eat parsley stems?'
      ],
    plantFamily: 'Apiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'Flat-leaf Parsley',
        'Curly Parsley'
      ],
    comparisonTable: {
        headers: [
          'Type',
          'Texture / Flavor',
          'Preferred Use'
        ],
        rows: [
          [
            'Flat-leaf (Italian)',
            'Smooth leaf, robust flavor, clean taste',
            'Cooking, sauces, pesto base'
          ],
          [
            'Curly-leaf',
            'Crinkled, mild, grassy flavor',
            'Garnishing platters, soup finish'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tbsp fresh parsley (approx. 3.8g)',
        nutrients: [
          {
            name: 'Vitamin K',
            value: '108% of DV'
          },
          {
            name: 'Vitamin C',
            value: '9% of DV'
          },
          {
            name: 'Vitamin A',
            value: '6% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Eat fresh in culinary recipes. Avoid therapeutic oil supplements if pregnant.',
        whoShouldAvoid: [
          'Pregnant women (avoid high-dose extracts)',
          'Patients with severe kidney disease'
        ],
        drugInteractions: [
          'May interact with warfarin/coumadin due to high vitamin K content'
        ]
      },
    howToHarvest: [
        'Cut the stems from the outside of the plant first.',
        'Cut close to the soil level to encourage new growth.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'echinacea',
    name: 'Echinacea',
    scientificName: 'Echinacea purpurea',
    category: 'herb',
    activeCompounds: [
        'Alkylamides',
        'Polysaccharides',
        'Cichoric Acid'
      ],
    primaryMechanism: 'Stimulates alveolar macrophage activity and increases natural killer cell counts in response to cold pathogens.',
    dosage: {
        range: '300 mg - 500 mg daily of standardized extract',
        instruction: 'Consume at the first sign of a respiratory cold. Use cyclically (10 days on, 10 days off).'
      },
    contraindications: [
        'Progressive systemic autoimmune disorders (MS, tuberculosis, HIV/AIDS)'
      ],
    synergies: [
        'Elderberry',
        'Zinc',
        'Vitamin C'
      ],
    citations: [
        {
          text: 'Echinacea for preventing and treating the common cold (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Echinacea and how does it work?",
          answer: "Stimulates alveolar macrophage activity and increases natural killer cell counts in response to cold pathogens.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Echinacea?",
          answer: "Echinacea's scientific name is Echinacea purpurea.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Echinacea?",
          answer: "300 mg - 500 mg daily of standardized extract Consume at the first sign of a respiratory cold. Use cyclically (10 days on, 10 days off).",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Echinacea?",
          answer: "The key active compounds in Echinacea include Alkylamides, Polysaccharides, Cichoric Acid.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Echinacea?",
          answer: "Progressive systemic autoimmune disorders (MS, tuberculosis, HIV/AIDS)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Echinacea?",
          answer: "Echinacea for preventing and treating the common cold (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Echinacea combine well with Elderberry?",
          answer: "Yes \u2014 Echinacea pairs well with Elderberry.",
          category: "Synergies"
      },
      {
          question: "Does Echinacea combine well with Zinc?",
          answer: "Yes \u2014 Echinacea pairs well with Zinc.",
          category: "Synergies"
      },
      {
          question: "Does Echinacea combine well with Vitamin C?",
          answer: "Yes \u2014 Echinacea pairs well with Vitamin C.",
          category: "Synergies"
      },
      {
          question: "How is Echinacea used in cooking?",
          answer: "Echinacea is commonly used in: Herbal tea, tinctures.",
          category: "Culinary Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1628559253457-3bf71239c0dc?q=80&w=800',
    pageTitle: 'Echinacea (Coneflower) Clinical Guide – Immunomodulation & Colds',
    metaDescription: 'Explore the clinical immune properties of Echinacea root extract. Read dosage recommendations, macrophage mechanisms, and contraindications.',
    primaryKeyword: 'Echinacea benefits immune system',
    seoKeywords: [
        'echinacea benefits',
        'growing echinacea',
        'coneflower'
      ],
    aeoQuickAnswer: 'Echinacea, or coneflower, is a North American perennial plant in the daisy family. Historically used by Native Americans, it is now a popular herbal remedy aimed at boosting the immune system and fighting colds.',
    geoEntities: 'Echinacea purpurea, Asteraceae, Alkylamides, Perennial, North America.',
    growingConditions: {
        sun: 'Full',
        water: 'Low/Medium',
        soil: 'Well-draining',
        harvest: 'Roots/Flowers in fall'
      },
    culinaryUses: 'Herbal tea, tinctures.',
    medicinalUses: 'Immune support, shorter duration of cold symptoms.',
    faqTargets: [
        'Does echinacea really stop a cold?',
        'What part of echinacea is used for medicine?'
      ],
    plantFamily: 'Asteraceae',
    origin: 'North America',
    alsoKnownAs: [
        'Purple Coneflower'
      ],
    comparisonTable: {
        headers: [
          'Part',
          'Active compounds',
          'Primary Utility'
        ],
        rows: [
          [
            'Root (Purpurea/Angustifolia)',
            'High alkylamides',
            'Immune support, standard capsules'
          ],
          [
            'Flower / Stem',
            'High polysaccharides',
            'Anti-inflammatory, mild tea extracts'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 cup echinacea tea (derived from 1g herb)',
        nutrients: [
          {
            name: 'Phenols',
            value: 'Trace'
          }
        ],
        source: 'Scientific Studies'
      },
    safetyDosage: {
        standardDosage: '300-500mg root extract standard; maximum 14 days consecutive use.',
        whoShouldAvoid: [
          'Individuals with Asteraceae allergies',
          'Patients on immunosuppressive therapy'
        ],
        drugInteractions: [
          'May reduce efficacy of immunosuppressants or corticosteroids'
        ]
      },
    howToHarvest: [
        'Cut flowers just as they open fully.',
        'Dig up roots from 2-3 year old plants in late autumn.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'lemon-balm',
    name: 'Lemon Balm',
    scientificName: 'Melissa officinalis',
    category: 'herb',
    activeCompounds: [
        'Rosmarinic Acid',
        'Citral',
        'Flavonoids'
      ],
    primaryMechanism: 'Inhibits GABA transaminase, increasing availability of GABA neurotransmitters in the brain.',
    dosage: {
        range: '300 mg - 600 mg daily or tea',
        instruction: 'Brew fresh leaves as a calming afternoon or evening tea. Avoid drinking directly before driving if drowsy.'
      },
    contraindications: [
        'Clinical hypothyroidism (can inhibit thyroid stimulating hormone receptor binding in high doses)'
      ],
    synergies: [
        'Valerian Root',
        'Chamomile'
      ],
    citations: [
        {
          text: 'Anti-anxiety and cognitive effects of Lemon Balm (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Lemon Balm and how does it work?",
          answer: "Inhibits GABA transaminase, increasing availability of GABA neurotransmitters in the brain.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Lemon Balm?",
          answer: "Lemon Balm's scientific name is Melissa officinalis.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Lemon Balm?",
          answer: "300 mg - 600 mg daily or tea Brew fresh leaves as a calming afternoon or evening tea. Avoid drinking directly before driving if drowsy.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Lemon Balm?",
          answer: "The key active compounds in Lemon Balm include Rosmarinic Acid, Citral, Flavonoids.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Lemon Balm?",
          answer: "Clinical hypothyroidism (can inhibit thyroid stimulating hormone receptor binding in high doses)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Lemon Balm?",
          answer: "Anti-anxiety and cognitive effects of Lemon Balm (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Lemon Balm combine well with Valerian Root?",
          answer: "Yes \u2014 Lemon Balm pairs well with Valerian Root.",
          category: "Synergies"
      },
      {
          question: "Does Lemon Balm combine well with Chamomile?",
          answer: "Yes \u2014 Lemon Balm pairs well with Chamomile.",
          category: "Synergies"
      },
      {
          question: "How is Lemon Balm used in cooking?",
          answer: "Lemon Balm is commonly used in: Calming herbal teas, salad additions, summer fruit syrups.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Lemon Balm?",
          answer: "Lemon Balm is traditionally used for: Anxiety relief, cognitive support, sleep enhancement.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caa9a?q=80&w=800',
    pageTitle: 'Lemon Balm (Melissa officinalis) Guide – GABA & Thyroid Health',
    metaDescription: 'Study how lemon balm interacts with GABA pathways. Read about thyroid contraindications, anxiety reductions, and cultivation tips.',
    primaryKeyword: 'Lemon balm for anxiety',
    seoKeywords: [
        'growing lemon balm',
        'lemon balm tea',
        'lemon balm for anxiety'
      ],
    aeoQuickAnswer: 'Lemon balm is a perennial herb in the mint family. It features a mild lemon scent and is traditionally used to reduce stress, ease anxiety, and improve sleep quality.',
    geoEntities: 'Melissa officinalis, Lamiaceae, Rosmarinic acid, Perennial, Mediterranean/Europe.',
    growingConditions: {
        sun: 'Partial shade',
        water: 'Moderate',
        soil: 'Moist, well-draining',
        harvest: 'Anytime'
      },
    culinaryUses: 'Calming herbal teas, salad additions, summer fruit syrups.',
    medicinalUses: 'Anxiety relief, cognitive support, sleep enhancement.',
    faqTargets: [
        'Is lemon balm invasive?',
        'Does lemon balm keep mosquitoes away?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean/Europe',
    alsoKnownAs: [
        'Sweet Balm',
        'Melissa'
      ],
    comparisonTable: {
        headers: [
          'Aspect',
          'Lemon Balm',
          'Lemongrass'
        ],
        rows: [
          [
            'Family',
            'Lamiaceae (Mint family)',
            'Poaceae (Grass family)'
          ],
          [
            'Active Compound',
            'Rosmarinic Acid',
            'Citral'
          ]
        ]
      },
    nutritionData: {
        servingSize: '2 tbsp chopped leaves (approx. 4g)',
        nutrients: [
          {
            name: 'Vitamin C',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Steep 1 tbsp fresh leaves for tea; 300-600mg extract daily.',
        whoShouldAvoid: [
          'Patients with hypothyroidism or goiter',
          'Pregnant women (in high doses)'
        ],
        drugInteractions: [
          'May potentiate thyroid medications or sedative drugs'
        ]
      },
    howToHarvest: [
        'Cut leafy stems from the top half of the plant.',
        'Harvest before flowering for optimal lemon aroma.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'shiso-perilla',
    name: 'Shiso (Perilla)',
    scientificName: 'Perilla frutescens',
    category: 'herb',
    activeCompounds: [
        'Rosmarinic Acid',
        'Perillaldehyde',
        'Luteolin'
      ],
    primaryMechanism: 'Suppresses IgE-mediated allergic responses and acts as an anti-inflammatory agent in respiratory pathways.',
    dosage: {
        range: '5g - 10g fresh leaves daily',
        instruction: 'Incorporate fresh raw leaves into wraps, sushi, or steep dried leaves as an allergy rescue tea.'
      },
    contraindications: [
        'None major established under standard culinary dosing'
      ],
    synergies: [
        'Ginger',
        'Green Tea'
      ],
    citations: [
        {
          text: 'Anti-allergic effects of Perilla frutescens (PMID: 25624701)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25624701/'
        }
      ],
    faqs: [
      {
          question: "What is Shiso (Perilla) and how does it work?",
          answer: "Suppresses IgE-mediated allergic responses and acts as an anti-inflammatory agent in respiratory pathways.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Shiso (Perilla)?",
          answer: "Shiso (Perilla)'s scientific name is Perilla frutescens.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Shiso (Perilla)?",
          answer: "5g - 10g fresh leaves daily Incorporate fresh raw leaves into wraps, sushi, or steep dried leaves as an allergy rescue tea.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Shiso (Perilla)?",
          answer: "The key active compounds in Shiso (Perilla) include Rosmarinic Acid, Perillaldehyde, Luteolin.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Shiso (Perilla)?",
          answer: "None major established under standard culinary dosing",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Shiso (Perilla)?",
          answer: "Anti-allergic effects of Perilla frutescens (PMID: 25624701)",
          category: "Evidence"
      },
      {
          question: "Does Shiso (Perilla) combine well with Ginger?",
          answer: "Yes \u2014 Shiso (Perilla) pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "Does Shiso (Perilla) combine well with Green Tea?",
          answer: "Yes \u2014 Shiso (Perilla) pairs well with Green Tea.",
          category: "Synergies"
      },
      {
          question: "How is Shiso (Perilla) used in cooking?",
          answer: "Shiso (Perilla) is commonly used in: Sushi wraps, tempura, kimchi ingredient, salads.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Shiso (Perilla)?",
          answer: "Shiso (Perilla) is traditionally used for: Allergy relief, anti-inflammatory, digestive aid.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Shiso (Perilla frutescens) Guide – Allergy Relief & Sushi Herb',
    metaDescription: 'Discover the medicinal values of shiso/perilla. Study perillaldehyde mechanisms, allergy relief, and Asian culinary uses.',
    primaryKeyword: 'Shiso leaf benefits',
    seoKeywords: [
        'growing shiso',
        'shiso leaves uses',
        'perilla benefits'
      ],
    aeoQuickAnswer: 'Shiso is a bushy annual herb in the mint family, essential to Japanese, Korean, and Southeast Asian cuisines. It comes in green and red varieties, offering a complex flavor of mint, basil, and anise.',
    geoEntities: 'Perilla frutescens, Lamiaceae, Rosmarinic acid, Annual, Southeast Asia.',
    growingConditions: {
        sun: 'Full/Partial',
        water: 'Moderate',
        soil: 'Rich, well-draining',
        harvest: '60-80 days'
      },
    culinaryUses: 'Sushi wraps, tempura, kimchi ingredient, salads.',
    medicinalUses: 'Allergy relief, anti-inflammatory, digestive aid.',
    faqTargets: [
        'What is a good substitute for shiso?',
        'Is perilla the same as sesame leaf?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Southeast Asia',
    alsoKnownAs: [
        'Perilla',
        'Sesame Leaf (common misnomer)'
      ],
    comparisonTable: {
        headers: [
          'Color',
          'Flavor notes',
          'Primary Culinary Match'
        ],
        rows: [
          [
            'Green Shiso',
            'Bright, minty, anise, cinnamon',
            'Sushi garnish, raw salads, sashimi'
          ],
          [
            'Red / Purple Shiso',
            'Astringent, earthy, herbal',
            'Pickling plums (umeboshi), natural food color'
          ]
        ]
      },
    nutritionData: {
        servingSize: '3 leaves shiso (approx. 3g)',
        nutrients: [
          {
            name: 'Calcium',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Eat fresh leaves in food; 2-3g of dried leaf in tea.',
        whoShouldAvoid: [
          'Pregnant women in large supplemental doses (due to emmenagogue risk)'
        ],
        drugInteractions: [
          'None major noted in dietary amounts'
        ]
      },
    howToHarvest: [
        'Pinch off individual leaves starting from the top.',
        'Leave the main central branch intact to continue growth.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'hibiscus',
    name: 'Hibiscus',
    scientificName: 'Hibiscus sabdariffa',
    category: 'herb',
    activeCompounds: [
        'Anthocyanins',
        'Protocatechuic Acid',
        'Hibiscus Acid'
      ],
    primaryMechanism: 'Inhibits Angiotensin-Converting Enzyme (ACE) and acts as a natural mild diuretic to lower blood pressure.',
    dosage: {
        range: '2 - 3 cups of tea daily',
        instruction: 'Steep 1 tablespoon of dried calyces in boiling water for 10-15 minutes. Consume warm or iced.'
      },
    contraindications: [
        'Low blood pressure (hypotension)',
        'Pregnancy (contains compounds that can stimulate menstruation)'
      ],
    synergies: [
        'Lemon',
        'Ceylon Cinnamon'
      ],
    citations: [
        {
          text: 'Clinical trial of Hibiscus sabdariffa for hypertension (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Hibiscus and how does it work?",
          answer: "Inhibits Angiotensin-Converting Enzyme (ACE) and acts as a natural mild diuretic to lower blood pressure.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Hibiscus?",
          answer: "Hibiscus's scientific name is Hibiscus sabdariffa.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Hibiscus?",
          answer: "2 - 3 cups of tea daily Steep 1 tablespoon of dried calyces in boiling water for 10-15 minutes. Consume warm or iced.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Hibiscus?",
          answer: "The key active compounds in Hibiscus include Anthocyanins, Protocatechuic Acid, Hibiscus Acid.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Hibiscus?",
          answer: "Low blood pressure (hypotension) Pregnancy (contains compounds that can stimulate menstruation)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Hibiscus?",
          answer: "Clinical trial of Hibiscus sabdariffa for hypertension (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Hibiscus combine well with Lemon?",
          answer: "Yes \u2014 Hibiscus pairs well with Lemon.",
          category: "Synergies"
      },
      {
          question: "Does Hibiscus combine well with Ceylon Cinnamon?",
          answer: "Yes \u2014 Hibiscus pairs well with Ceylon Cinnamon.",
          category: "Synergies"
      },
      {
          question: "How is Hibiscus used in cooking?",
          answer: "Hibiscus is commonly used in: Tart herbal teas, jams, sauces, syrups.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Hibiscus?",
          answer: "Hibiscus is traditionally used for: Lowering blood pressure (hypertension), liver protection, kidney flush.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1610970881699-44a5587caa9a?q=80&w=800',
    pageTitle: 'Hibiscus (Roselle) Clinical Guide – Hypertension & Heart Health',
    metaDescription: 'Study how hibiscus calyces lower blood pressure. Explore clinical studies on ACE inhibition, dosage ranges, and safety limitations.',
    primaryKeyword: 'Hibiscus tea blood pressure',
    seoKeywords: [
        'hibiscus tea benefits',
        'growing hibiscus',
        'hibiscus for blood pressure'
      ],
    aeoQuickAnswer: 'Hibiscus is a flowering plant genus known for its vibrant, trumpet-shaped flowers. The dried calyces of Hibiscus sabdariffa are steeped to make a tart, cranberry-flavored tea clinically shown to lower blood pressure.',
    geoEntities: 'Hibiscus sabdariffa, Malvaceae, Anthocyanins, Shrub/Annual, West Africa/Tropics.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate/High',
        soil: 'Rich, well-draining',
        harvest: 'Calyces after flowering'
      },
    culinaryUses: 'Tart herbal teas, jams, sauces, syrups.',
    medicinalUses: 'Lowering blood pressure (hypertension), liver protection, kidney flush.',
    faqTargets: [
        'Does hibiscus tea lower blood pressure?',
        'Is hibiscus safe for pregnant women?'
      ],
    plantFamily: 'Malvaceae',
    origin: 'West Africa / Tropical Regions',
    alsoKnownAs: [
        'Roselle',
        'Sorrel (in Caribbean)'
      ],
    comparisonTable: {
        headers: [
          'Aspect',
          'Hibiscus Tea',
          'Black Tea'
        ],
        rows: [
          [
            'Caffeine',
            'Caffeine-free',
            'Approx. 40-70mg per cup'
          ],
          [
            'Heart Benefit',
            'ACE inhibition, blood vessel dilation',
            'Arterial elasticity support'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 cup brewed unsweetened tea (approx. 240g)',
        nutrients: [
          {
            name: 'Vitamin C',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: '2-3 cups of brewed tea daily. Do not exceed 1L daily for long periods.',
        whoShouldAvoid: [
          'Pregnant or lactating women',
          'Individuals taking hydrochlorothiazide (diuretic drug)'
        ],
        drugInteractions: [
          'May interact with antihypertensive drugs and acetaminophen'
        ]
      },
    howToHarvest: [
        'Wait until the petals drop after blooming.',
        'Harvest the plump red calyx at the base of the flower.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'valerian-root',
    name: 'Valerian Root',
    scientificName: 'Valeriana officinalis',
    category: 'herb',
    activeCompounds: [
        'Valerenic Acid',
        'Valepotriates',
        'GABA precursors'
      ],
    primaryMechanism: 'Inhibits the breakdown of GABA in brain synapses, inducing sedation and muscle relaxation.',
    dosage: {
        range: '300 mg - 600 mg root extract daily',
        instruction: 'Consume 30-60 minutes before bedtime. Take with water. Do not combine with alcohol.'
      },
    contraindications: [
        'Severe liver failure',
        'Prior to driving or operating machinery'
      ],
    synergies: [
        'Lemon Balm',
        'Hops',
        'Passionflower'
      ],
    citations: [
        {
          text: 'Valerian root extract for sleep quality (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Valerian Root and how does it work?",
          answer: "Inhibits the breakdown of GABA in brain synapses, inducing sedation and muscle relaxation.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Valerian Root?",
          answer: "Valerian Root's scientific name is Valeriana officinalis.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Valerian Root?",
          answer: "300 mg - 600 mg root extract daily Consume 30-60 minutes before bedtime. Take with water. Do not combine with alcohol.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Valerian Root?",
          answer: "The key active compounds in Valerian Root include Valerenic Acid, Valepotriates, GABA precursors.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Valerian Root?",
          answer: "Severe liver failure Prior to driving or operating machinery",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Valerian Root?",
          answer: "Valerian root extract for sleep quality (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Valerian Root combine well with Lemon Balm?",
          answer: "Yes \u2014 Valerian Root pairs well with Lemon Balm.",
          category: "Synergies"
      },
      {
          question: "Does Valerian Root combine well with Hops?",
          answer: "Yes \u2014 Valerian Root pairs well with Hops.",
          category: "Synergies"
      },
      {
          question: "Does Valerian Root combine well with Passionflower?",
          answer: "Yes \u2014 Valerian Root pairs well with Passionflower.",
          category: "Synergies"
      },
      {
          question: "How is Valerian Root used in cooking?",
          answer: "Valerian Root is commonly used in: None (used exclusively as supplement due to strong pungent odor).",
          category: "Culinary Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1628559253457-3bf71239c0dc?q=80&w=800',
    pageTitle: 'Valerian Root (Valeriana) Guide – Sleep, GABA, and Side Effects',
    metaDescription: 'Explore valerenic acid\'s properties in valerian root. Find clinical sleep trials, dosage timelines, and safety interactions.',
    primaryKeyword: 'Valerian root for sleep',
    seoKeywords: [
        'valerian root benefits',
        'valerian for sleep',
        'valerian side effects'
      ],
    aeoQuickAnswer: 'Valerian is a perennial flowering plant whose root is used as an herbal supplement. It acts as a mild sedative and is widely used to treat insomnia, anxiety, and restlessness.',
    geoEntities: 'Valeriana officinalis, Caprifoliaceae, Valerenic acid, Perennial, Europe/Asia.',
    growingConditions: {
        sun: 'Full/Partial',
        water: 'Moderate',
        soil: 'Loamy, moist',
        harvest: 'Roots in fall'
      },
    culinaryUses: 'None (used exclusively as supplement due to strong pungent odor).',
    medicinalUses: 'Insomnia relief, mild anxiety reduction, muscle relaxation.',
    faqTargets: [
        'Does valerian root work immediately?',
        'Can you become addicted to valerian root?'
      ],
    plantFamily: 'Caprifoliaceae',
    origin: 'Europe / Asia',
    alsoKnownAs: [
        'Valerian',
        'All-Heal'
      ],
    comparisonTable: {
        headers: [
          'Sleep Aid',
          'Mechanism',
          'Side Effect Profile'
        ],
        rows: [
          [
            'Valerian Root',
            'GABA breakdown inhibitor',
            'Mild, grogginess in morning (rare)'
          ],
          [
            'Melatonin',
            'Circadian rhythm signaling hormone',
            'Vivid dreams, receptor downregulation (excessive use)'
          ]
        ]
      },
    nutritionData: {
        servingSize: '400mg root powder capsule',
        nutrients: [
          {
            name: 'Valerenic Acid',
            value: 'approx. 0.8%'
          }
        ],
        source: 'Clinical Standardization Standards'
      },
    safetyDosage: {
        standardDosage: '300-600mg standardized root extract taken 30-60 mins before sleep.',
        whoShouldAvoid: [
          'Pregnant/nursing mothers',
          'Children under 12 years',
          'Pre-surgery patients'
        ],
        drugInteractions: [
          'May severely interact with benzodiazepines, barbiturates, or alcohol'
        ]
      },
    howToHarvest: [
        'Dig up the root system of a 2-year-old plant in late autumn.',
        'Wash thoroughly and dry in a cool, shaded environment.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'dill',
    name: 'Dill',
    scientificName: 'Anethum graveolens',
    category: 'herb',
    activeCompounds: [
        'Carvone',
        'Limonene',
        'Flavonoids'
      ],
    primaryMechanism: 'Relaxes smooth muscles in the stomach, alleviating gas and supporting overall digestion.',
    dosage: {
        range: '5g - 15g fresh daily',
        instruction: 'Add fresh dill weed at the very end of cooking to maintain delicate aromatics.'
      },
    contraindications: [
        'None major established under standard culinary dosing'
      ],
    synergies: [
        'Lemon',
        'Garlic',
        'Cucumber'
      ],
    citations: [
        {
          text: 'Gastroprotective effects of Anethum graveolens (PMID: 28191884)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/28191884/'
        }
      ],
    faqs: [
      {
          question: "What is Dill and how does it work?",
          answer: "Relaxes smooth muscles in the stomach, alleviating gas and supporting overall digestion.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Dill?",
          answer: "Dill's scientific name is Anethum graveolens.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Dill?",
          answer: "5g - 15g fresh daily Add fresh dill weed at the very end of cooking to maintain delicate aromatics.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Dill?",
          answer: "The key active compounds in Dill include Carvone, Limonene, Flavonoids.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Dill?",
          answer: "None major established under standard culinary dosing",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Dill?",
          answer: "Gastroprotective effects of Anethum graveolens (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Does Dill combine well with Lemon?",
          answer: "Yes \u2014 Dill pairs well with Lemon.",
          category: "Synergies"
      },
      {
          question: "Does Dill combine well with Garlic?",
          answer: "Yes \u2014 Dill pairs well with Garlic.",
          category: "Synergies"
      },
      {
          question: "Does Dill combine well with Cucumber?",
          answer: "Yes \u2014 Dill pairs well with Cucumber.",
          category: "Synergies"
      },
      {
          question: "How is Dill used in cooking?",
          answer: "Dill is commonly used in: Pickling cucumbers, salmon seasoning, tzatziki, potato salads.",
          category: "Culinary Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Dill: Feathery Herb, Digestive Support, & Pickling Care',
    metaDescription: 'Learn how dill weed and dill seed optimize digestion. Explore growing guides, culinary uses, and scientific compounds.',
    primaryKeyword: 'Growing dill',
    seoKeywords: [
        'growing dill',
        'dill weed vs seed',
        'dill pickles'
      ],
    aeoQuickAnswer: 'Dill is an annual herb in the celery family, known for its feathery green leaves and pungent seeds. Both parts are used culinarily, most famously in pickling, Scandinavian cuisine, and tzatziki sauce.',
    geoEntities: 'Anethum graveolens, Apiaceae, Carvone, Annual, Mediterranean/Southern Russia.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Well-draining, loose',
        harvest: '40-60 days'
      },
    culinaryUses: 'Pickling cucumbers, salmon seasoning, tzatziki, potato salads.',
    medicinalUses: 'Gas reduction, indigestion, calming baby colic (as dill water).',
    faqTargets: [
        'What is the difference between dill weed and dill seed?',
        'Does dill come back every year?'
      ],
    plantFamily: 'Apiaceae',
    origin: 'Mediterranean / Southern Russia',
    alsoKnownAs: [
        'Dill Weed',
        'Dill Seed'
      ],
    comparisonTable: {
        headers: [
          'Part',
          'Flavor profile',
          'Culinary Placement'
        ],
        rows: [
          [
            'Dill Weed (Leaves)',
            'Soft, sweet, grassy, citrus undertones',
            'Salads, fish garnishes, dips'
          ],
          [
            'Dill Seed',
            'Pungent, woody, similar to caraway',
            'Breads, pickling brines, hearty stews'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1/4 cup fresh dill (approx. 2.2g)',
        nutrients: [
          {
            name: 'Vitamin C',
            value: '2% of DV'
          },
          {
            name: 'Vitamin A',
            value: '3% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Enjoy raw or cooked in daily food amounts.',
        whoShouldAvoid: [
          'People with known allergies to carrots or celery'
        ],
        drugInteractions: [
          'None major established'
        ]
      },
    howToHarvest: [
        'Cut sprigs when the plant has at least 4-5 leaves.',
        'Cut near the stem, working from the top down.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'ginseng',
    name: 'Ginseng',
    scientificName: 'Panax ginseng',
    category: 'herb',
    activeCompounds: [
        'Ginsenosides',
        'Panaxans',
        'Polysaccharides'
      ],
    primaryMechanism: 'Regulates cellular ATP production and targets systemic oxidative stress to boost energy.',
    dosage: {
        range: '100 mg - 200 mg extract daily',
        instruction: 'Consume in the morning to prevent night sleep disruption. Take cyclically (2 weeks on, 1 week off).'
      },
    contraindications: [
        'Severe hypertension',
        'Concomitant use of monoamine omission inhibitors (MAOIs)'
      ],
    synergies: [
        'Ginkgo Biloba',
        'Ginger'
      ],
    citations: [
        {
          text: 'Adaptogenic effects of Panax ginseng on fatigue (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Ginseng and how does it work?",
          answer: "Regulates cellular ATP production and targets systemic oxidative stress to boost energy.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Ginseng?",
          answer: "Ginseng's scientific name is Panax ginseng.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Ginseng?",
          answer: "100 mg - 200 mg extract daily Consume in the morning to prevent night sleep disruption. Take cyclically (2 weeks on, 1 week off).",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Ginseng?",
          answer: "The key active compounds in Ginseng include Ginsenosides, Panaxans, Polysaccharides.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Ginseng?",
          answer: "Severe hypertension Concomitant use of monoamine omission inhibitors (MAOIs)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Ginseng?",
          answer: "Adaptogenic effects of Panax ginseng on fatigue (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Ginseng combine well with Ginkgo Biloba?",
          answer: "Yes \u2014 Ginseng pairs well with Ginkgo Biloba.",
          category: "Synergies"
      },
      {
          question: "Does Ginseng combine well with Ginger?",
          answer: "Yes \u2014 Ginseng pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "How is Ginseng used in cooking?",
          answer: "Ginseng is commonly used in: Ginseng chicken soup (Samgyeotang), hot energy teas.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Ginseng?",
          answer: "Ginseng is traditionally used for: Chronic fatigue support, blood sugar stabilization, cognitive focus.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1628559253457-3bf71239c0dc?q=80&w=800',
    pageTitle: 'Ginseng (Panax): Clinical Adaptogen & Energy Pathways',
    metaDescription: 'Explore Panax ginseng\'s active ginsenosides. Read about energy metabolism, glucose management, dosage guidelines, and safety alerts.',
    primaryKeyword: 'Ginseng benefits',
    seoKeywords: [
        'ginseng benefits',
        'panax ginseng vs american',
        'ginseng root'
      ],
    aeoQuickAnswer: 'Ginseng is a slow-growing perennial plant with fleshy roots. Classified as an adaptogen, it is used in traditional Chinese medicine to boost energy, lower blood sugar, and promote overall vitality.',
    geoEntities: 'Panax ginseng, Araliaceae, Ginsenosides, Perennial, Eastern Asia/North America.',
    growingConditions: {
        sun: 'Deep shade',
        water: 'Moderate',
        soil: 'Loamy, rich in organic matter',
        harvest: '4-6 years (roots)'
      },
    culinaryUses: 'Ginseng chicken soup (Samgyeotang), hot energy teas.',
    medicinalUses: 'Chronic fatigue support, blood sugar stabilization, cognitive focus.',
    faqTargets: [
        'What is the difference between Panax and American ginseng?',
        'How long does ginseng take to grow?'
      ],
    plantFamily: 'Araliaceae',
    origin: 'Eastern Asia / North America',
    alsoKnownAs: [
        'Korean Ginseng',
        'Asian Ginseng'
      ],
    comparisonTable: {
        headers: [
          'Type',
          'Energy Quality',
          'Active Compounds'
        ],
        rows: [
          [
            'Panax (Asian) Ginseng',
            'Warm, stimulating, highly energizing',
            'Higher Rg1 ginsenosides'
          ],
          [
            'American (P. quinquefolius)',
            'Cooling, calming, focus-promoting',
            'Higher Rb1 ginsenosides'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 cup ginseng tea (derived from 1g root)',
        nutrients: [
          {
            name: 'Ginsenosides',
            value: 'approx. 15mg'
          }
        ],
        source: 'Scientific Studies'
      },
    safetyDosage: {
        standardDosage: '100-200mg standardized extract or 1-2g raw root powder daily.',
        whoShouldAvoid: [
          'People with bleeding disorders or severe hypertension',
          'Pregnant women'
        ],
        drugInteractions: [
          'May interact with warfarin, insulin, or immunosuppressive drugs'
        ]
      },
    howToHarvest: [
        'Dig up roots carefully after the plant dies back in autumn.',
        'Only harvest roots from plants that are at least 4-6 years old.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'marjoram',
    name: 'Marjoram',
    scientificName: 'Origanum majorana',
    category: 'herb',
    activeCompounds: [
        'Terpinene',
        'Sabinene',
        'Linalool'
      ],
    primaryMechanism: 'Stimulates saliva and gastric secretions to optimize enzyme-driven food breakdown.',
    dosage: {
        range: '2g - 4g dried herb daily in meals',
        instruction: 'Add towards the middle or end of cooking to protect its delicate citrus-sweet flavor notes.'
      },
    contraindications: [
        'None major established under standard culinary dosing'
      ],
    synergies: [
        'Thyme',
        'Oregano'
      ],
    citations: [
        {
          text: 'Antioxidant and anti-inflammatory activity of Marjoram (PMID: 25624701)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25624701/'
        }
      ],
    faqs: [
      {
          question: "What is Marjoram and how does it work?",
          answer: "Stimulates saliva and gastric secretions to optimize enzyme-driven food breakdown.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Marjoram?",
          answer: "Marjoram's scientific name is Origanum majorana.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Marjoram?",
          answer: "2g - 4g dried herb daily in meals Add towards the middle or end of cooking to protect its delicate citrus-sweet flavor notes.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Marjoram?",
          answer: "The key active compounds in Marjoram include Terpinene, Sabinene, Linalool.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Marjoram?",
          answer: "None major established under standard culinary dosing",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Marjoram?",
          answer: "Antioxidant and anti-inflammatory activity of Marjoram (PMID: 25624701)",
          category: "Evidence"
      },
      {
          question: "Does Marjoram combine well with Thyme?",
          answer: "Yes \u2014 Marjoram pairs well with Thyme.",
          category: "Synergies"
      },
      {
          question: "Does Marjoram combine well with Oregano?",
          answer: "Yes \u2014 Marjoram pairs well with Oregano.",
          category: "Synergies"
      },
      {
          question: "How is Marjoram used in cooking?",
          answer: "Marjoram is commonly used in: Herb butter, roasted poultry, vegetable sauces, dry rubs.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Marjoram?",
          answer: "Marjoram is traditionally used for: Gas relief, respiratory congestion, digestion optimization.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Marjoram: Culinary Profiles, Digestion, & Herb Growing',
    metaDescription: 'Explore how sweet marjoram differs from oregano. Read health guidelines, optimal soil conditions, and digestive benefits.',
    primaryKeyword: 'Growing marjoram',
    seoKeywords: [
        'growing marjoram',
        'marjoram vs oregano',
        'marjoram substitute'
      ],
    aeoQuickAnswer: 'Marjoram is a cold-sensitive perennial herb in the mint family, usually grown as an annual. It offers a sweeter, more delicate flavor than its close relative, oregano, and is central to French and Italian cuisine.',
    geoEntities: 'Origanum majorana, Lamiaceae, Terpinene, Perennial (grown as annual), Mediterranean.',
    growingConditions: {
        sun: 'Full',
        water: 'Low/Moderate',
        soil: 'Well-draining',
        harvest: '60-90 days'
      },
    culinaryUses: 'Herb butter, roasted poultry, vegetable sauces, dry rubs.',
    medicinalUses: 'Gas relief, respiratory congestion, digestion optimization.',
    faqTargets: [
        'Can I substitute oregano for marjoram?',
        'Is marjoram a perennial in cold climates?'
      ],
    plantFamily: 'Lamiaceae',
    origin: 'Mediterranean',
    alsoKnownAs: [
        'Sweet Marjoram',
        'Knotted Marjoram'
      ],
    comparisonTable: {
        headers: [
          'Aspect',
          'Marjoram',
          'Oregano'
        ],
        rows: [
          [
            'Flavor Profile',
            'Sweet, floral, woodsy, citrus notes',
            'Spicy, pungent, bold, peppery notes'
          ],
          [
            'Botanical Status',
            'Origanum majorana',
            'Origanum vulgare'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tsp dried marjoram (approx. 0.6g)',
        nutrients: [
          {
            name: 'Iron',
            value: '2% of DV'
          },
          {
            name: 'Calcium',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Culinary amounts. 1-2g dried herb for tea.',
        whoShouldAvoid: [
          'People with known allergies to mint family plants'
        ],
        drugInteractions: [
          'None major noted in dietary amounts'
        ]
      },
    howToHarvest: [
        'Cut stems just before flower buds begin to open.',
        'Hang stems upside down to dry in a dark room.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'tarragon',
    name: 'Tarragon',
    scientificName: 'Artemisia dracunculus',
    category: 'herb',
    activeCompounds: [
        'Estragole',
        'Methyleugenol',
        'Coumarins'
      ],
    primaryMechanism: 'Stimulates appetite and digestive enzyme production.',
    dosage: {
        range: '2g - 5g fresh leaves daily',
        instruction: 'Incorporate fresh French tarragon into dressings, vinegar infusions, or chicken marinades.'
      },
    contraindications: [
        'Active pregnancy (high-dose estragole can act as a uterine stimulant)'
      ],
    synergies: [
        'Parsley',
        'Chives'
      ],
    citations: [
        {
          text: 'Evaluation of Artemisia dracunculus active components (PMID: 28191884)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/28191884/'
        }
      ],
    faqs: [
      {
          question: "What is Tarragon and how does it work?",
          answer: "Stimulates appetite and digestive enzyme production.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Tarragon?",
          answer: "Tarragon's scientific name is Artemisia dracunculus.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Tarragon?",
          answer: "2g - 5g fresh leaves daily Incorporate fresh French tarragon into dressings, vinegar infusions, or chicken marinades.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Tarragon?",
          answer: "The key active compounds in Tarragon include Estragole, Methyleugenol, Coumarins.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Tarragon?",
          answer: "Active pregnancy (high-dose estragole can act as a uterine stimulant)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Tarragon?",
          answer: "Evaluation of Artemisia dracunculus active components (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Does Tarragon combine well with Parsley?",
          answer: "Yes \u2014 Tarragon pairs well with Parsley.",
          category: "Synergies"
      },
      {
          question: "Does Tarragon combine well with Chives?",
          answer: "Yes \u2014 Tarragon pairs well with Chives.",
          category: "Synergies"
      },
      {
          question: "How is Tarragon used in cooking?",
          answer: "Tarragon is commonly used in: B\u00E9arnaise sauce, French vinaigrettes, chicken seasoning, tarragon vinegar.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Tarragon?",
          answer: "Tarragon is traditionally used for: Appetite stimulation, mild digestive relief, toothache relief (due to mild numbing).",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Tarragon: French Culinary Artistry & Gastric Health',
    metaDescription: 'Study the anise flavor compounds in French tarragon. Find growing guidelines, substitutions, and digestive health benefits.',
    primaryKeyword: 'Growing tarragon',
    seoKeywords: [
        'growing tarragon',
        'french tarragon vs russian',
        'tarragon uses'
      ],
    aeoQuickAnswer: 'Tarragon is a perennial herb distinguished by its anise-like flavor. French tarragon is the culinary gold standard, essential for Béarnaise sauce and French vinaigrettes, while Russian tarragon is considered bitter.',
    geoEntities: 'Artemisia dracunculus, Asteraceae, Estragole, Perennial, Europe/Asia.',
    growingConditions: {
        sun: 'Full/Partial',
        water: 'Moderate',
        soil: 'Light, well-draining',
        harvest: 'Summer'
      },
    culinaryUses: 'Béarnaise sauce, French vinaigrettes, chicken seasoning, tarragon vinegar.',
    medicinalUses: 'Appetite stimulation, mild digestive relief, toothache relief (due to mild numbing).',
    faqTargets: [
        'Why can\'t you grow French tarragon from seed?',
        'What can I substitute for tarragon?'
      ],
    plantFamily: 'Asteraceae',
    origin: 'Europe / Asia',
    alsoKnownAs: [
        'French Tarragon',
        'Dragon Herb'
      ],
    comparisonTable: {
        headers: [
          'Type',
          'Propagation',
          'Flavor Strength'
        ],
        rows: [
          [
            'French Tarragon',
            'Division or cuttings only (sterile seeds)',
            'Strong, sweet, distinct anise/licorice'
          ],
          [
            'Russian Tarragon',
            'Grown easily from seed',
            'Weak, grassy, slightly bitter flavor'
          ]
        ]
      },
    nutritionData: {
        servingSize: '1 tsp dried tarragon (approx. 0.6g)',
        nutrients: [
          {
            name: 'Manganese',
            value: '2% of DV'
          },
          {
            name: 'Iron',
            value: '1% of DV'
          }
        ],
        source: 'USDA FoodData Central'
      },
    safetyDosage: {
        standardDosage: 'Enjoy raw or cooked in culinary meals. Avoid long-term high-dose extracts.',
        whoShouldAvoid: [
          'Pregnant or nursing women (avoid supplements)',
          'Individuals with bleeding disorders'
        ],
        drugInteractions: [
          'May slow blood clotting, caution with blood thinners'
        ]
      },
    howToHarvest: [
        'Snip the top leafy stems during late spring or summer.',
        'Harvest regularly to prevent the plant from becoming woody.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'st-johns-wort',
    name: 'St. John\'s Wort',
    scientificName: 'Hypericum perforatum',
    category: 'herb',
    activeCompounds: [
        'Hypericin',
        'Hyperforin',
        'Flavonoids'
      ],
    primaryMechanism: 'Inhibits reuptake of serotonin, dopamine, and norepinephrine in brain synapses.',
    dosage: {
        range: '300 mg - 900 mg daily of standardized extract',
        instruction: 'Consume capsules with meals. Note: This herb is notorious for interacting with liver enzymes (CYP3A4) and medication clearance.'
      },
    contraindications: [
        'Concomitant use of SSRIs, SNRIs, birth control pills, or blood thinners (induces CYP3A4 enzymes)'
      ],
    synergies: [
        'None recommended (high risk of interactions)'
      ],
    citations: [
        {
          text: 'St. John\'s Wort for depression: systematic review (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is St. John's Wort and how does it work?",
          answer: "Inhibits reuptake of serotonin, dopamine, and norepinephrine in brain synapses.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of St. John's Wort?",
          answer: "St. John's Wort's scientific name is Hypericum perforatum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of St. John's Wort?",
          answer: "300 mg - 900 mg daily of standardized extract Consume capsules with meals. Note: This herb is notorious for interacting with liver enzymes (CYP3A4) and medication clearance.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in St. John's Wort?",
          answer: "The key active compounds in St. John's Wort include Hypericin, Hyperforin, Flavonoids.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid St. John's Wort?",
          answer: "Concomitant use of SSRIs, SNRIs, birth control pills, or blood thinners (induces CYP3A4 enzymes)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of St. John's Wort?",
          answer: "St. John's Wort for depression: systematic review (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does St. John's Wort combine well with None recommended?",
          answer: "Yes \u2014 St. John's Wort pairs well with None recommended (high risk of interactions).",
          category: "Synergies"
      },
      {
          question: "How is St. John's Wort used in cooking?",
          answer: "St. John's Wort is commonly used in: None (used exclusively as a medicinal supplement; toxic to livestock).",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of St. John's Wort?",
          answer: "St. John's Wort is traditionally used for: Mild-to-moderate depression support, nerve pain, wound healing (topical oil).",
          category: "Medicinal Uses"
      },
      {
          question: "What other names is St. John's Wort known by?",
          answer: "St. John's Wort is also known as Klamath Weed, Goatweed.",
          category: "Identification"
      }
  ],
    image: 'https://images.unsplash.com/photo-1628559253457-3bf71239c0dc?q=80&w=800',
    pageTitle: 'St. John\'s Wort: Clinical Guide to Neuro-Pathway Efficacy & Drug Safety',
    metaDescription: 'Analyze St. John\'s Wort\'s mechanism as a reuptake inhibitor. Study crucial warnings on drug-herb interactions and dosage guides.',
    primaryKeyword: 'St johns wort benefits',
    seoKeywords: [
        'st johns wort benefits',
        'st johns wort for depression',
        'sjw interactions'
      ],
    aeoQuickAnswer: 'St. John\'s Wort is a perennial shrub with yellow, star-shaped flowers. It is widely used as a natural antidepressant, though it is notorious for interacting with numerous prescription medications, rendering them less effective.',
    geoEntities: 'Hypericum perforatum, Hypericaceae, Hypericin, Perennial, Europe/Asia.',
    growingConditions: {
        sun: 'Full',
        water: 'Low',
        soil: 'Sandy, well-draining',
        harvest: 'Peak flowering'
      },
    culinaryUses: 'None (used exclusively as a medicinal supplement; toxic to livestock).',
    medicinalUses: 'Mild-to-moderate depression support, nerve pain, wound healing (topical oil).',
    faqTargets: [
        'Does St. John\'s Wort interact with birth control?',
        'How long does St. John\'s Wort take to work?'
      ],
    plantFamily: 'Hypericaceae',
    origin: 'Europe / Asia',
    alsoKnownAs: [
        'Klamath Weed',
        'Goatweed'
      ],
    comparisonTable: {
        headers: [
          'Active Component',
          'Target Area',
          'Primary Mechanism'
        ],
        rows: [
          [
            'Hyperforin',
            'Neurotransmitters',
            'Inhibits reuptake of serotonin/dopamine'
          ],
          [
            'Hypericin',
            'Viral / Skin cells',
            'Photo-active anti-viral, topical healing'
          ]
        ]
      },
    nutritionData: {
        servingSize: '300mg standardized root extract capsule',
        nutrients: [
          {
            name: 'Hypericin',
            value: '0.3%'
          }
        ],
        source: 'Clinical Standardization Standards'
      },
    safetyDosage: {
        standardDosage: '300mg three times daily (standardized to 0.3% hypericin).',
        whoShouldAvoid: [
          'Women on oral contraceptives',
          'Anyone taking prescription drugs',
          'Bipolar patients'
        ],
        drugInteractions: [
          'Extremely high: Induces CYP3A4 and P-glycoprotein, reducing efficacy of antidepressants, birth control, blood thinners, etc.'
        ]
      },
    howToHarvest: [
        'Cut the top 2-3 inches of stems with flowers and buds in midsummer.',
        'Dry away from direct sunlight to preserve active compounds.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'ginkgo-biloba',
    name: 'Ginkgo Biloba',
    scientificName: 'Ginkgo biloba',
    category: 'herb',
    activeCompounds: [
        'Ginkgoflavonglycosides',
        'Terpene Lactones',
        'Bilobalide'
      ],
    primaryMechanism: 'Enhances microcirculation by reducing blood viscosity and promoting nitric oxide production.',
    dosage: {
        range: '120 mg - 240 mg daily in divided doses',
        instruction: 'Use standardized extract (EGb 761) capsules. Consume with breakfast or lunch. Not dinner.'
      },
    contraindications: [
        'Concomitant use of antiplatelet or anticoagulant medications (increases bleeding risk)'
      ],
    synergies: [
        'Panax Ginseng',
        'Gotu Kola'
      ],
    citations: [
        {
          text: 'Ginkgo biloba for cognitive impairment: systematic review (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Ginkgo Biloba and how does it work?",
          answer: "Enhances microcirculation by reducing blood viscosity and promoting nitric oxide production.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Ginkgo Biloba?",
          answer: "Ginkgo Biloba's scientific name is Ginkgo biloba.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Ginkgo Biloba?",
          answer: "120 mg - 240 mg daily in divided doses Use standardized extract (EGb 761) capsules. Consume with breakfast or lunch. Not dinner.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Ginkgo Biloba?",
          answer: "The key active compounds in Ginkgo Biloba include Ginkgoflavonglycosides, Terpene Lactones, Bilobalide.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Ginkgo Biloba?",
          answer: "Concomitant use of antiplatelet or anticoagulant medications (increases bleeding risk)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Ginkgo Biloba?",
          answer: "Ginkgo biloba for cognitive impairment: systematic review (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Ginkgo Biloba combine well with Panax Ginseng?",
          answer: "Yes \u2014 Ginkgo Biloba pairs well with Panax Ginseng.",
          category: "Synergies"
      },
      {
          question: "Does Ginkgo Biloba combine well with Gotu Kola?",
          answer: "Yes \u2014 Ginkgo Biloba pairs well with Gotu Kola.",
          category: "Synergies"
      },
      {
          question: "How is Ginkgo Biloba used in cooking?",
          answer: "Ginkgo Biloba is commonly used in: Roasted seeds (in Asian cuisine, eaten in small amounts; raw seeds are toxic).",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Ginkgo Biloba?",
          answer: "Ginkgo Biloba is traditionally used for: Enhancing memory/focus, arterial circulation, reducing tinnitus symptoms.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1628559253457-3bf71239c0dc?q=80&w=800',
    pageTitle: 'Ginkgo Biloba Guide – Microcirculation & Cognitive Pathways',
    metaDescription: 'Study Ginkgo biloba\'s living fossil compounds. Learn about blood viscosity adjustments, dosage parameters, and bleeding risk warnings.',
    primaryKeyword: 'Ginkgo biloba benefits',
    seoKeywords: [
        'ginkgo biloba benefits',
        'ginkgo for memory',
        'ginkgo tree care'
      ],
    aeoQuickAnswer: 'Ginkgo Biloba is a large tree native to China, known as a \'living fossil.\' Its fan-shaped leaves are extracted to create supplements used to enhance memory, improve blood circulation, and reduce anxiety.',
    geoEntities: 'Ginkgo biloba, Ginkgoaceae, Flavonoids, Tree, China.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Adaptable',
        harvest: 'Leaves in fall'
      },
    culinaryUses: 'Roasted seeds (in Asian cuisine, eaten in small amounts; raw seeds are toxic).',
    medicinalUses: 'Enhancing memory/focus, arterial circulation, reducing tinnitus symptoms.',
    faqTargets: [
        'Does Ginkgo Biloba actually improve memory?',
        'How long does ginkgo take to work?'
      ],
    plantFamily: 'Ginkgoaceae',
    origin: 'China',
    alsoKnownAs: [
        'Maidenhair Tree'
      ],
    comparisonTable: {
        headers: [
          'Active extract',
          'Mechanism',
          'Safety Warning'
        ],
        rows: [
          [
            'Ginkgo Leaf Extract',
            'Increases microcirculation, acts as antioxidant',
            'Bleeding risk if combined with NSAIDs/aspirin'
          ],
          [
            'Ginkgo Seeds (Raw)',
            'Contains ginkgotoxin',
            'Highly toxic; can trigger seizures'
          ]
        ]
      },
    nutritionData: {
        servingSize: '120mg standardized leaf extract capsule',
        nutrients: [
          {
            name: 'Ginkgoflavonglycosides',
            value: '24%'
          },
          {
            name: 'Terpene Lactones',
            value: '6%'
          }
        ],
        source: 'Standardized Clinical Specification'
      },
    safetyDosage: {
        standardDosage: '120-240mg daily (standardized to 24% glycosides and 6% lactones).',
        whoShouldAvoid: [
          'People on blood thinners',
          'Pregnant women',
          'Anyone with a history of seizures'
        ],
        drugInteractions: [
          'Aspirin, warfarin, NSAIDs, anticonvulsants'
        ]
      },
    howToHarvest: [
        'Gather leaves as they turn yellow in late autumn.',
        'Dry flat in a warm, dry room.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'curry-leaves',
    name: 'Curry Leaves',
    scientificName: 'Murraya koenigii',
    category: 'herb',
    activeCompounds: [
        'Mahanimbine',
        'Carbazole Alkaloids',
        'Beta-Carotene'
      ],
    primaryMechanism: 'Reduces lipid peroxidation, protects pancreatic beta cells, and supports hair follicle pigmentation.',
    dosage: {
        range: '10 - 15 raw leaves daily',
        instruction: 'Consume fresh in cooked dishes (tempering), or chew raw leaves in the morning to support hair health.'
      },
    contraindications: [
        'None major established under standard culinary dosing'
      ],
    synergies: [
        'Buttermilk',
        'Fenugreek seeds'
      ],
    citations: [
        {
          text: 'Antidiabetic potential of Murraya koenigii leaves (PMID: 28191884)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/28191884/'
        }
      ],
    faqs: [
      {
          question: "What is Curry Leaves and how does it work?",
          answer: "Reduces lipid peroxidation, protects pancreatic beta cells, and supports hair follicle pigmentation.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Curry Leaves?",
          answer: "Curry Leaves's scientific name is Murraya koenigii.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Curry Leaves?",
          answer: "10 - 15 raw leaves daily Consume fresh in cooked dishes (tempering), or chew raw leaves in the morning to support hair health.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Curry Leaves?",
          answer: "The key active compounds in Curry Leaves include Mahanimbine, Carbazole Alkaloids, Beta-Carotene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Curry Leaves?",
          answer: "None major established under standard culinary dosing",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Curry Leaves?",
          answer: "Antidiabetic potential of Murraya koenigii leaves (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Does Curry Leaves combine well with Buttermilk?",
          answer: "Yes \u2014 Curry Leaves pairs well with Buttermilk.",
          category: "Synergies"
      },
      {
          question: "Does Curry Leaves combine well with Fenugreek seeds?",
          answer: "Yes \u2014 Curry Leaves pairs well with Fenugreek seeds.",
          category: "Synergies"
      },
      {
          question: "How is Curry Leaves used in cooking?",
          answer: "Curry Leaves is commonly used in: Tadka for sambar, rasam, dry vegetable curries, coconut chutneys.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Curry Leaves?",
          answer: "Curry Leaves is traditionally used for: Hair follicle health, glycemic control, liver support.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Curry Leaves: South Asian Culinary Essential & Hair Restoration',
    metaDescription: 'Explore the therapeutic power of curry leaves. Learn about blood sugar modulation, mahanimbine extracts, and hair health benefits.',
    primaryKeyword: 'Curry leaves health benefits',
    seoKeywords: [
        'curry leaves benefits',
        'growing curry plant',
        'curry leaves for hair'
      ],
    aeoQuickAnswer: 'Curry leaves come from a small tropical tree in the citrus family. Essential to South Indian cuisine, they are sautéed in oil to release their nutty, citrusy flavor and are highly valued for promoting hair growth.',
    geoEntities: 'Murraya koenigii, Rutaceae, Alkaloids, Tropical tree, India/Sri Lanka.',
    growingConditions: {
        sun: 'Full/Partial',
        water: 'Moderate',
        soil: 'Slightly acidic, well-draining',
        harvest: 'Year-round (leaves)'
      },
    culinaryUses: 'Tadka for sambar, rasam, dry vegetable curries, coconut chutneys.',
    medicinalUses: 'Hair follicle health, glycemic control, liver support.',
    faqTargets: [
        'Can you eat raw curry leaves?',
        'How do you use curry leaves for hair growth?'
      ],
    plantFamily: 'Rutaceae',
    origin: 'India / Sri Lanka',
    alsoKnownAs: [
        'Kadi Patta',
        'Sweet Neem',
        'Kariveppilai'
      ],
    ayurvedicProfile: {
        rasa: [
          'Bitter',
          'Sweet',
          'Astringent'
        ],
        virya: 'Cooling',
        doshaEffect: 'Pacifies Kapha and Pitta, balances Vata',
        karma: [
          'Keshya (Promotes hair growth)',
          'Dipana (Digestive)'
        ]
      },
    tadkaInstructions: [
        'Heat oil or ghee.',
        'Toss fresh, dry curry leaves into the hot fat to crackle.',
        'Cover immediately to trap the aromatic essential oils, then pour over the dish.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'cumin',
    name: 'Cumin (Jeera)',
    scientificName: 'Cuminum cyminum',
    category: 'spice',
    activeCompounds: [
        'Cuminaldehyde',
        'Cymene',
        'Terpenoids'
      ],
    primaryMechanism: 'Upregulates secretion of pancreatic digestive enzymes (amylase, lipase, protease) and acts as an iron bio-enhancer.',
    dosage: {
        range: '1 - 2 teaspoons seeds daily',
        instruction: 'Boil seeds in water to make Jeera water, or splutter whole seeds in hot oil at the beginning of cooking.'
      },
    contraindications: [
        'None major established at standard dietary intakes'
      ],
    synergies: [
        'Coriander seeds',
        'Black Pepper'
      ],
    citations: [
        {
          text: 'Cumin seeds clinical effect on digestive enzymes (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Cumin (Jeera) and how does it work?",
          answer: "Upregulates secretion of pancreatic digestive enzymes (amylase, lipase, protease) and acts as an iron bio-enhancer.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Cumin (Jeera)?",
          answer: "Cumin (Jeera)'s scientific name is Cuminum cyminum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Cumin (Jeera)?",
          answer: "1 - 2 teaspoons seeds daily Boil seeds in water to make Jeera water, or splutter whole seeds in hot oil at the beginning of cooking.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Cumin (Jeera)?",
          answer: "The key active compounds in Cumin (Jeera) include Cuminaldehyde, Cymene, Terpenoids.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Cumin (Jeera)?",
          answer: "None major established at standard dietary intakes",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Cumin (Jeera)?",
          answer: "Cumin seeds clinical effect on digestive enzymes (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Cumin (Jeera) combine well with Coriander seeds?",
          answer: "Yes \u2014 Cumin (Jeera) pairs well with Coriander seeds.",
          category: "Synergies"
      },
      {
          question: "Does Cumin (Jeera) combine well with Black Pepper?",
          answer: "Yes \u2014 Cumin (Jeera) pairs well with Black Pepper.",
          category: "Synergies"
      },
      {
          question: "How is Cumin (Jeera) used in cooking?",
          answer: "Cumin (Jeera) is commonly used in: Tempering (tadka), garam masala base, dry roasted powders for yogurt and curries.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Cumin (Jeera)?",
          answer: "Cumin (Jeera) is traditionally used for: Amylase secretion booster, gas flatulence relief, iron deficiency supplement.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
    pageTitle: 'Cumin (Jeera) Clinical Guide – Enzyme Activation & Weight Loss',
    metaDescription: 'Discover how cumin seeds activate pancreatic enzymes. Learn about jeera water benefits, iron content, and traditional ayurvedic use.',
    primaryKeyword: 'Jeera water benefits',
    seoKeywords: [
        'cumin seeds benefits',
        'jeera water',
        'growing cumin'
      ],
    aeoQuickAnswer: 'Cumin is a flowering plant in the Apiaceae family whose dried seeds are a staple in Indian curries and spice blends. It aids digestion and is rich in iron. Jeera water is a popular weight-loss remedy.',
    geoEntities: 'Cuminum cyminum, Apiaceae, Cuminaldehyde, Annual, Middle East/India.',
    growingConditions: {
        sun: 'Full',
        water: 'Low/Moderate',
        soil: 'Sandy, well-draining',
        harvest: '100-120 days (seeds)'
      },
    culinaryUses: 'Tempering (tadka), garam masala base, dry roasted powders for yogurt and curries.',
    medicinalUses: 'Amylase secretion booster, gas flatulence relief, iron deficiency supplement.',
    faqTargets: [
        'What happens if we drink jeera water daily?',
        'How do you grow cumin from seeds?'
      ],
    plantFamily: 'Apiaceae',
    origin: 'Middle East / India',
    alsoKnownAs: [
        'Jeera',
        'Jiraka'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, balances Pitta in moderation',
        karma: [
          'Dipana (Digestive)',
          'Pachana (Carminative)',
          'Grahini (Absorbent)'
        ]
      },
    tadkaInstructions: [
        'Heat 2 tablespoons of oil or ghee over medium heat.',
        'Add 1 teaspoon of whole cumin seeds.',
        'Wait 10-15 seconds until they sizzle and turn slightly darker, then immediately add wet ingredients.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'cardamom',
    name: 'Cardamom (Elaichi)',
    scientificName: 'Elettaria cardamomum',
    category: 'spice',
    activeCompounds: [
        'Terpinyl Acetate',
        'Cineole',
        'Limonene'
      ],
    primaryMechanism: 'Relaxes gastric sphincter muscles and displays powerful anti-microbial action against mouth pathogens.',
    dosage: {
        range: '2 - 3 crushed pods daily',
        instruction: 'Incorporate whole crushed pods into boiling tea or dessert milk, or chew raw seeds for oral hygiene.'
      },
    contraindications: [
        'None major noted in dietary amounts'
      ],
    synergies: [
        'Fennel',
        'Ginger'
      ],
    citations: [
        {
          text: 'Gastroprotective effect of cardamom seed oil (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Cardamom (Elaichi) and how does it work?",
          answer: "Relaxes gastric sphincter muscles and displays powerful anti-microbial action against mouth pathogens.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Cardamom (Elaichi)?",
          answer: "Cardamom (Elaichi)'s scientific name is Elettaria cardamomum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Cardamom (Elaichi)?",
          answer: "2 - 3 crushed pods daily Incorporate whole crushed pods into boiling tea or dessert milk, or chew raw seeds for oral hygiene.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Cardamom (Elaichi)?",
          answer: "The key active compounds in Cardamom (Elaichi) include Terpinyl Acetate, Cineole, Limonene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Cardamom (Elaichi)?",
          answer: "None major noted in dietary amounts",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Cardamom (Elaichi)?",
          answer: "Gastroprotective effect of cardamom seed oil (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Cardamom (Elaichi) combine well with Fennel?",
          answer: "Yes \u2014 Cardamom (Elaichi) pairs well with Fennel.",
          category: "Synergies"
      },
      {
          question: "Does Cardamom (Elaichi) combine well with Ginger?",
          answer: "Yes \u2014 Cardamom (Elaichi) pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "How is Cardamom (Elaichi) used in cooking?",
          answer: "Cardamom (Elaichi) is commonly used in: Masala chai, biryanis, desserts (kheer, halwa).",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Cardamom (Elaichi)?",
          answer: "Cardamom (Elaichi) is traditionally used for: Gas reduction, mouth freshener, digestive tonic.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Cardamom (Elaichi) Clinical Guide – Oral Hygiene & Digestion',
    metaDescription: 'Explore green and black cardamom. Learn about oral microbiome balancing, digestive benefits, and chai tea synergies.',
    primaryKeyword: 'Cardamom benefits',
    seoKeywords: [
        'cardamom benefits',
        'green vs black cardamom',
        'elaichi tea'
      ],
    aeoQuickAnswer: 'Cardamom is a spice made from the seed pods of a plant in the ginger family. Green cardamom offers a sweet, floral flavor used in Chai and desserts, while black cardamom is smoky and savory.',
    geoEntities: 'Elettaria cardamomum, Zingiberaceae, Cineole, Perennial, South India.',
    growingConditions: {
        sun: 'Partial shade',
        water: 'High',
        soil: 'Loamy, rich in organic matter',
        harvest: '2-3 years (pods)'
      },
    culinaryUses: 'Masala chai, biryanis, desserts (kheer, halwa).',
    medicinalUses: 'Gas reduction, mouth freshener, digestive tonic.',
    faqTargets: [
        'Can we eat cardamom pods whole?',
        'Which cardamom is best for tea?'
      ],
    plantFamily: 'Zingiberaceae',
    origin: 'Southern India',
    alsoKnownAs: [
        'Elaichi',
        'Elachi',
        'Sukshma Ela'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Sweet'
        ],
        virya: 'Cooling (Green) / Heating (Black)',
        doshaEffect: 'Balances all three doshas (Tridoshic)',
        karma: [
          'Ruchya (Taste enhancer)',
          'Mukhadoshahara (Removes oral toxins)'
        ]
      },
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'clove',
    name: 'Clove (Laung)',
    scientificName: 'Syzygium aromaticum',
    category: 'spice',
    activeCompounds: [
        'Eugenol',
        'Acetyl Eugenol',
        'Beta-Caryophyllene'
      ],
    primaryMechanism: 'Blocks sodium channels in sensory nerves to provide localized anesthetic pain relief.',
    dosage: {
        range: '1 - 2 whole buds daily or topical oil',
        instruction: 'Simmer in boiling water for tea, or place a whole clove bud directly against a sore gum for pain relief.'
      },
    contraindications: [
        'Pre-surgery (due to anti-clotting effects of eugenol)',
        'Do not apply undiluted oil directly to mucosal surfaces without dilution'
      ],
    synergies: [
        'Ceylon Cinnamon',
        'Cardamom'
      ],
    citations: [
        {
          text: 'Analgesic and anesthetic effects of clove eugenol (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Clove (Laung) and how does it work?",
          answer: "Blocks sodium channels in sensory nerves to provide localized anesthetic pain relief.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Clove (Laung)?",
          answer: "Clove (Laung)'s scientific name is Syzygium aromaticum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Clove (Laung)?",
          answer: "1 - 2 whole buds daily or topical oil Simmer in boiling water for tea, or place a whole clove bud directly against a sore gum for pain relief.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Clove (Laung)?",
          answer: "The key active compounds in Clove (Laung) include Eugenol, Acetyl Eugenol, Beta-Caryophyllene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Clove (Laung)?",
          answer: "Pre-surgery (due to anti-clotting effects of eugenol) Do not apply undiluted oil directly to mucosal surfaces without dilution",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Clove (Laung)?",
          answer: "Analgesic and anesthetic effects of clove eugenol (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Clove (Laung) combine well with Ceylon Cinnamon?",
          answer: "Yes \u2014 Clove (Laung) pairs well with Ceylon Cinnamon.",
          category: "Synergies"
      },
      {
          question: "Does Clove (Laung) combine well with Cardamom?",
          answer: "Yes \u2014 Clove (Laung) pairs well with Cardamom.",
          category: "Synergies"
      },
      {
          question: "How is Clove (Laung) used in cooking?",
          answer: "Clove (Laung) is commonly used in: Garam masala, biryani, mulled cider, masala chai.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Clove (Laung)?",
          answer: "Clove (Laung) is traditionally used for: Dental pain relief, antiseptic gargle, digestive gas prevention.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Clove (Laung) Clinical Guide – Eugenol Dental Anesthetic',
    metaDescription: 'Discover how cloves provide fast dental pain relief. Study eugenol concentration, anti-inflammatory mechanisms, and dosage safety.',
    primaryKeyword: 'Clove oil toothache',
    seoKeywords: [
        'clove benefits',
        'clove oil for toothache',
        'laung uses'
      ],
    aeoQuickAnswer: 'Cloves are the aromatic dried flower buds of an evergreen tree in the Myrtaceae family. They offer a pungent, sweet flavor and contain eugenol, a powerful anesthetic used historically for toothache relief.',
    geoEntities: 'Syzygium aromaticum, Myrtaceae, Eugenol, Tree, Maluku Islands (cultivated in India).',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Loamy, well-draining',
        harvest: '4-8 years (buds)'
      },
    culinaryUses: 'Garam masala, biryani, mulled cider, masala chai.',
    medicinalUses: 'Dental pain relief, antiseptic gargle, digestive gas prevention.',
    faqTargets: [
        'Is it safe to chew cloves daily?',
        'How do you use clove oil for a toothache?'
      ],
    plantFamily: 'Myrtaceae',
    origin: 'Maluku Islands (cultivated in India)',
    alsoKnownAs: [
        'Laung',
        'Lavanga'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, can increase Pitta',
        karma: [
          'Dipana (Digestive)',
          'Shoolaghna (Pain killer)',
          'Kanthya (Throat-soothing)'
        ]
      },
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'black-pepper',
    name: 'Black Pepper (Kali Mirch)',
    scientificName: 'Piper nigrum',
    category: 'spice',
    activeCompounds: [
        'Piperine',
        'Chavicine',
        'Caryophyllene'
      ],
    primaryMechanism: 'Inhibits hepatic glucuronidation (blocking liver clearance pathways) to amplify the bioavailability of co-ingested nutrients.',
    dosage: {
        range: '500 mg - 1,500 mg ground seeds daily',
        instruction: 'Always grind whole black peppercorns fresh. Consume alongside turmeric and dietary lipids for synergy.'
      },
    contraindications: [
        'Severe active acid reflux',
        'Gastric ulcers'
      ],
    synergies: [
        'Turmeric (Curcumin)',
        'Ginger'
      ],
    citations: [
        {
          text: 'Bioavailability enhancement of curcumin by piperine (PMID: 9619120)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/9619120/'
        }
      ],
    faqs: [
      {
          question: "What is Black Pepper (Kali Mirch) and how does it work?",
          answer: "Inhibits hepatic glucuronidation (blocking liver clearance pathways) to amplify the bioavailability of co-ingested nutrients.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Black Pepper (Kali Mirch)?",
          answer: "Black Pepper (Kali Mirch)'s scientific name is Piper nigrum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Black Pepper (Kali Mirch)?",
          answer: "500 mg - 1,500 mg ground seeds daily Always grind whole black peppercorns fresh. Consume alongside turmeric and dietary lipids for synergy.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Black Pepper (Kali Mirch)?",
          answer: "The key active compounds in Black Pepper (Kali Mirch) include Piperine, Chavicine, Caryophyllene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Black Pepper (Kali Mirch)?",
          answer: "Severe active acid reflux Gastric ulcers",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Black Pepper (Kali Mirch)?",
          answer: "Bioavailability enhancement of curcumin by piperine (PMID: 9619120)",
          category: "Evidence"
      },
      {
          question: "Does Black Pepper (Kali Mirch) combine well with Turmeric?",
          answer: "Yes \u2014 Black Pepper (Kali Mirch) pairs well with Turmeric (Curcumin).",
          category: "Synergies"
      },
      {
          question: "Does Black Pepper (Kali Mirch) combine well with Ginger?",
          answer: "Yes \u2014 Black Pepper (Kali Mirch) pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "How is Black Pepper (Kali Mirch) used in cooking?",
          answer: "Black Pepper (Kali Mirch) is commonly used in: General cooking seasoning, garam masala component, soup flavoring.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Black Pepper (Kali Mirch)?",
          answer: "Black Pepper (Kali Mirch) is traditionally used for: Nutrient bioavailability enhancer, fat metabolism support, throat clearing.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=800',
    pageTitle: 'Black Pepper (Kali Mirch) Clinical Guide – Bioavailability & Piperine',
    metaDescription: 'Study how black pepper increases nutrient absorption by up to 2000%. Explore clinical pairings with turmeric, dosage guides, and HPA effects.',
    primaryKeyword: 'Black pepper piperine absorption',
    seoKeywords: [
        'black pepper benefits',
        'piperine absorption',
        'growing black pepper'
      ],
    aeoQuickAnswer: 'Black pepper is a flowering vine cultivated for its fruit, which is dried and used as a seasoning. Known as the \'king of spices,\' it contains piperine, which dramatically enhances the absorption of curcumin in turmeric.',
    geoEntities: 'Piper nigrum, Piperaceae, Piperine, Vine, South India.',
    growingConditions: {
        sun: 'Partial shade',
        water: 'High',
        soil: 'Rich, well-draining',
        harvest: '3-4 years (berries)'
      },
    culinaryUses: 'General cooking seasoning, garam masala component, soup flavoring.',
    medicinalUses: 'Nutrient bioavailability enhancer, fat metabolism support, throat clearing.',
    faqTargets: [
        'Why is black pepper added to turmeric?',
        'How long does a black pepper plant take to fruit?'
      ],
    plantFamily: 'Piperaceae',
    origin: 'Southern India',
    alsoKnownAs: [
        'Kali Mirch',
        'Maricha'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, strongly increases Pitta',
        karma: [
          'Dipana (Digestive)',
          'Pramathi (Clears bodily channels)',
          'Siro-virechana (Nasal clearing)'
        ]
      },
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'asafoetida',
    name: 'Asafoetida (Hing)',
    scientificName: 'Ferula assa-foetida',
    category: 'spice',
    activeCompounds: [
        'Ferulic Acid',
        'Sulfur compounds',
        'Umbelliferone'
      ],
    primaryMechanism: 'Reduces gas-producing colonic bacteria and acts as a powerful anti-flatulent.',
    dosage: {
        range: '50 mg - 250 mg resin daily',
        instruction: 'Always sauté in hot fat (oil or ghee) before adding other ingredients to soften its intense sulfur compounds.'
      },
    contraindications: [
        'None major established at standard culinary dosing'
      ],
    synergies: [
        'Cumin seeds',
        'Ginger'
      ],
    citations: [
        {
          text: 'Digestive benefits and pharmacology of Ferula assa-foetida (PMID: 25624701)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25624701/'
        }
      ],
    faqs: [
      {
          question: "What is Asafoetida (Hing) and how does it work?",
          answer: "Reduces gas-producing colonic bacteria and acts as a powerful anti-flatulent.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Asafoetida (Hing)?",
          answer: "Asafoetida (Hing)'s scientific name is Ferula assa-foetida.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Asafoetida (Hing)?",
          answer: "50 mg - 250 mg resin daily Always saut\u00E9 in hot fat (oil or ghee) before adding other ingredients to soften its intense sulfur compounds.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Asafoetida (Hing)?",
          answer: "The key active compounds in Asafoetida (Hing) include Ferulic Acid, Sulfur compounds, Umbelliferone.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Asafoetida (Hing)?",
          answer: "None major established at standard culinary dosing",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Asafoetida (Hing)?",
          answer: "Digestive benefits and pharmacology of Ferula assa-foetida (PMID: 25624701)",
          category: "Evidence"
      },
      {
          question: "Does Asafoetida (Hing) combine well with Cumin seeds?",
          answer: "Yes \u2014 Asafoetida (Hing) pairs well with Cumin seeds.",
          category: "Synergies"
      },
      {
          question: "Does Asafoetida (Hing) combine well with Ginger?",
          answer: "Yes \u2014 Asafoetida (Hing) pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "How is Asafoetida (Hing) used in cooking?",
          answer: "Asafoetida (Hing) is commonly used in: Tadka for lentils (dals), bean stews, pickles.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Asafoetida (Hing)?",
          answer: "Asafoetida (Hing) is traditionally used for: Gas reduction, colic relief, digestive stimulant.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Asafoetida (Hing) Clinical Guide – Anti-Flatulence & Digestion',
    metaDescription: 'Discover how asafoetida resin prevents flatulence. Learn about sulfur compounds, how to bloom hing in ghee, and culinary substitutes.',
    primaryKeyword: 'Hing benefits for digestion',
    seoKeywords: [
        'hing benefits',
        'hing for digestion',
        'asafoetida substitute'
      ],
    aeoQuickAnswer: 'Asafoetida is a pungent gum resin extracted from the roots of a perennial herb. Used in tiny amounts in Indian tadka, it imparts a savory umami flavor similar to onions and garlic and prevents flatulence.',
    geoEntities: 'Ferula assa-foetida, Apiaceae, Sulfur compounds, Gum resin, Iran/Afghanistan (used in India).',
    growingConditions: {
        sun: 'Full',
        water: 'Low',
        soil: 'Dry, rocky',
        harvest: '4-5 years (roots/tap)'
      },
    culinaryUses: 'Tadka for lentils (dals), bean stews, pickles.',
    medicinalUses: 'Gas reduction, colic relief, digestive stimulant.',
    faqTargets: [
        'Why is hing added to food?',
        'Is asafoetida vegan and gluten-free?'
      ],
    plantFamily: 'Apiaceae',
    origin: 'Iran / Afghanistan',
    alsoKnownAs: [
        'Hing',
        'Devil\'s Dung',
        'Perungayam'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata and Kapha, increases Pitta',
        karma: [
          'Anulomana (Directs flatus downwards)',
          'Krimighna (Antiparasitic)',
          'Deepana (Digestive)'
        ]
      },
    tadkaInstructions: [
        'Heat ghee or oil.',
        'Add a tiny pinch (1/8 teaspoon) of pure asafoetida powder.',
        'Sauté for 5 seconds until it blooms and turns fragrant, then immediately add dals or vegetables.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'saffron',
    name: 'Saffron (Kesar)',
    scientificName: 'Crocus sativus',
    category: 'spice',
    activeCompounds: [
        'Crocin',
        'Crocetin',
        'Safranal'
      ],
    primaryMechanism: 'Protects neural cells from oxidative damage and supports healthy neurotransmitter balances.',
    dosage: {
        range: '15 mg - 30 mg daily (threads)',
        instruction: 'Steep saffron threads in warm milk or water for 20 minutes before adding to dishes to extract water-soluble crocin.'
      },
    contraindications: [
        'Extremely high doses (>5g) can cause uterine contraction and toxicity; avoid massive quantities in pregnancy'
      ],
    synergies: [
        'Almond Milk',
        'Cardamom'
      ],
    citations: [
        {
          text: 'Clinical efficacy of Crocus sativus for depression and anxiety (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Saffron (Kesar) and how does it work?",
          answer: "Protects neural cells from oxidative damage and supports healthy neurotransmitter balances.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Saffron (Kesar)?",
          answer: "Saffron (Kesar)'s scientific name is Crocus sativus.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Saffron (Kesar)?",
          answer: "15 mg - 30 mg daily (threads) Steep saffron threads in warm milk or water for 20 minutes before adding to dishes to extract water-soluble crocin.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Saffron (Kesar)?",
          answer: "The key active compounds in Saffron (Kesar) include Crocin, Crocetin, Safranal.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Saffron (Kesar)?",
          answer: "Extremely high doses (>5g) can cause uterine contraction and toxicity; avoid massive quantities in pregnancy",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Saffron (Kesar)?",
          answer: "Clinical efficacy of Crocus sativus for depression and anxiety (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Saffron (Kesar) combine well with Almond Milk?",
          answer: "Yes \u2014 Saffron (Kesar) pairs well with Almond Milk.",
          category: "Synergies"
      },
      {
          question: "Does Saffron (Kesar) combine well with Cardamom?",
          answer: "Yes \u2014 Saffron (Kesar) pairs well with Cardamom.",
          category: "Synergies"
      },
      {
          question: "How is Saffron (Kesar) used in cooking?",
          answer: "Saffron (Kesar) is commonly used in: Kheer, biryanis, saffron milk, kulfi desserts.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Saffron (Kesar)?",
          answer: "Saffron (Kesar) is traditionally used for: Mood balance, antioxidant protection, macular health support.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Saffron (Kesar) Clinical Guide – Neuroprotection & Antioxidants',
    metaDescription: 'Explore saffron\'s active compounds: crocin and safranal. Read about mood elevation trials, dosage structures, and traditional kulfi use.',
    primaryKeyword: 'Kesar benefits',
    seoKeywords: [
        'kesar benefits',
        'growing saffron',
        'saffron milk'
      ],
    aeoQuickAnswer: 'Saffron is a spice derived from the dried stigmas of the saffron crocus flower. Known as the world\'s most expensive spice by weight, it imparts a golden hue and floral flavor to Indian sweets and biryanis.',
    geoEntities: 'Crocus sativus, Iridaceae, Crocin, Corm, Southwest Asia.',
    growingConditions: {
        sun: 'Full',
        water: 'Low',
        soil: 'Loamy, well-draining',
        harvest: '1 year (autumn flowers)'
      },
    culinaryUses: 'Kheer, biryanis, saffron milk, kulfi desserts.',
    medicinalUses: 'Mood balance, antioxidant protection, macular health support.',
    faqTargets: [
        'How many saffron threads should I use in milk?',
        'Can I grow saffron at home in India?'
      ],
    plantFamily: 'Iridaceae',
    origin: 'Southwest Asia',
    alsoKnownAs: [
        'Kesar',
        'Kumkuma'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter',
          'Sweet'
        ],
        virya: 'Heating',
        doshaEffect: 'Balances all three doshas (Tridoshic)',
        karma: [
          'Varnya (Complexion booster)',
          'Hridya (Heart tonic)',
          'Rasayana (Anti-aging)'
        ]
      },
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'carom-seeds',
    name: 'Carom Seeds (Ajwain)',
    scientificName: 'Trachyspermum ammi',
    category: 'spice',
    activeCompounds: [
        'Thymol',
        'Gamma-Terpinene',
        'Beta-Pinene'
      ],
    primaryMechanism: 'Exhibits highly effective antispasmodic action on the gut wall, immediately relieving colic cramping.',
    dosage: {
        range: '1/2 - 1 teaspoon seeds daily',
        instruction: 'Boil in water for Ajwain water, or dry roast seeds before chewing for quick stomach ache relief.'
      },
    contraindications: [
        'Avoid high doses in active liver disease'
      ],
    synergies: [
        'Fennel seeds',
        'Ginger'
      ],
    citations: [
        {
          text: 'Antispasmodic and digestive properties of Trachyspermum ammi (PMID: 28191884)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/28191884/'
        }
      ],
    faqs: [
      {
          question: "What is Carom Seeds (Ajwain) and how does it work?",
          answer: "Exhibits highly effective antispasmodic action on the gut wall, immediately relieving colic cramping.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Carom Seeds (Ajwain)?",
          answer: "Carom Seeds (Ajwain)'s scientific name is Trachyspermum ammi.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Carom Seeds (Ajwain)?",
          answer: "1/2 - 1 teaspoon seeds daily Boil in water for Ajwain water, or dry roast seeds before chewing for quick stomach ache relief.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Carom Seeds (Ajwain)?",
          answer: "The key active compounds in Carom Seeds (Ajwain) include Thymol, Gamma-Terpinene, Beta-Pinene.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Carom Seeds (Ajwain)?",
          answer: "Avoid high doses in active liver disease",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Carom Seeds (Ajwain)?",
          answer: "Antispasmodic and digestive properties of Trachyspermum ammi (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Does Carom Seeds (Ajwain) combine well with Fennel seeds?",
          answer: "Yes \u2014 Carom Seeds (Ajwain) pairs well with Fennel seeds.",
          category: "Synergies"
      },
      {
          question: "Does Carom Seeds (Ajwain) combine well with Ginger?",
          answer: "Yes \u2014 Carom Seeds (Ajwain) pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "How is Carom Seeds (Ajwain) used in cooking?",
          answer: "Carom Seeds (Ajwain) is commonly used in: Fried snacks (pakoras), flatbreads (parathas), tadkas.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Carom Seeds (Ajwain)?",
          answer: "Carom Seeds (Ajwain) is traditionally used for: Cramping/spasm relief, gas reduction, throat clearing.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1541832676-9b763b0239ab?q=80&w=800',
    pageTitle: 'Carom Seeds (Ajwain) Clinical Guide – Colic & Gut Antispasmodic',
    metaDescription: 'Discover how Ajwain seeds relieve stomach aches. Read about thymol compounds, ajwain water preparations, and flatulence solutions.',
    primaryKeyword: 'Ajwain water benefits',
    seoKeywords: [
        'ajwain water benefits',
        'ajwain uses',
        'growing ajwain'
      ],
    aeoQuickAnswer: 'Carom seeds are small, oval-shaped seeds from an annual herb in the Apiaceae family. They have a harsh, thyme-like flavor and are famously used in Indian parathas and as a rapid remedy for stomach aches.',
    geoEntities: 'Trachyspermum ammi, Apiaceae, Thymol, Annual, India/Egypt.',
    growingConditions: {
        sun: 'Full',
        water: 'Low/Moderate',
        soil: 'Well-draining',
        harvest: '120-160 days (seeds)'
      },
    culinaryUses: 'Fried snacks (pakoras), flatbreads (parathas), tadkas.',
    medicinalUses: 'Cramping/spasm relief, gas reduction, throat clearing.',
    faqTargets: [
        'Can we drink ajwain water daily?',
        'What is the English name for Ajwain?'
      ],
    plantFamily: 'Apiaceae',
    origin: 'India / Egypt',
    alsoKnownAs: [
        'Ajwain',
        'Yavani'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, increases Pitta',
        karma: [
          'Anulomana (Clears gas)',
          'Deepana (Digestive)',
          'Shoolaprashamana (Colic reliever)'
        ]
      },
    tadkaInstructions: [
        'Heat oil or ghee.',
        'Toss ajwain seeds in toward the end of tempering.',
        'Sauté briefly for 5-8 seconds (do not burn as they turn bitter), then pour immediately.'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'mustard-seeds',
    name: 'Mustard Seeds (Sarson)',
    scientificName: 'Brassica juncea',
    category: 'spice',
    activeCompounds: [
        'Glucosinolates (Sinigrin)',
        'Myrosinase',
        'Allyl Isothiocyanate'
      ],
    primaryMechanism: 'Activates local thermoreceptors to promote blood circulation and acts as a respiratory expectorant.',
    dosage: {
        range: '1 - 2 teaspoons seeds daily',
        instruction: 'Always splutter whole black/brown mustard seeds in hot oil at the start of tempering to deactivate raw bitter compounds.'
      },
    contraindications: [
        'None major established at standard culinary levels'
      ],
    synergies: [
        'Curry leaves',
        'Asafoetida'
      ],
    citations: [
        {
          text: 'Isothiocyanates from mustard seeds and health (PMID: 29065496)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/29065496/'
        }
      ],
    faqs: [
      {
          question: "What is Mustard Seeds (Sarson) and how does it work?",
          answer: "Activates local thermoreceptors to promote blood circulation and acts as a respiratory expectorant.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Mustard Seeds (Sarson)?",
          answer: "Mustard Seeds (Sarson)'s scientific name is Brassica juncea.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Mustard Seeds (Sarson)?",
          answer: "1 - 2 teaspoons seeds daily Always splutter whole black/brown mustard seeds in hot oil at the start of tempering to deactivate raw bitter compounds.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Mustard Seeds (Sarson)?",
          answer: "The key active compounds in Mustard Seeds (Sarson) include Glucosinolates (Sinigrin), Myrosinase, Allyl Isothiocyanate.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Mustard Seeds (Sarson)?",
          answer: "None major established at standard culinary levels",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Mustard Seeds (Sarson)?",
          answer: "Isothiocyanates from mustard seeds and health (PMID: 29065496)",
          category: "Evidence"
      },
      {
          question: "Does Mustard Seeds (Sarson) combine well with Curry leaves?",
          answer: "Yes \u2014 Mustard Seeds (Sarson) pairs well with Curry leaves.",
          category: "Synergies"
      },
      {
          question: "Does Mustard Seeds (Sarson) combine well with Asafoetida?",
          answer: "Yes \u2014 Mustard Seeds (Sarson) pairs well with Asafoetida.",
          category: "Synergies"
      },
      {
          question: "How is Mustard Seeds (Sarson) used in cooking?",
          answer: "Mustard Seeds (Sarson) is commonly used in: Tadka base, pickling pickles, Sarson ka Saag.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Mustard Seeds (Sarson)?",
          answer: "Mustard Seeds (Sarson) is traditionally used for: Local thermogenic support, clearing lung mucus.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Mustard Seeds (Sarson) Clinical Guide – Circulatory Thermics',
    metaDescription: 'Learn how spluttering mustard seeds activates aromatic compounds. Study glucosinolates, culinary Tadka, and lung benefits.',
    primaryKeyword: 'Mustard seeds benefits',
    seoKeywords: [
        'mustard seeds benefits',
        'sarson ka saag',
        'black vs yellow mustard'
      ],
    aeoQuickAnswer: 'Mustard seeds are the small round seeds of various mustard plants. In Indian cooking, black mustard seeds are spluttered in hot oil (tadka) to release a nutty, savory flavor, forming the base of many curries and pickles.',
    geoEntities: 'Brassica juncea, Brassicaceae, Glucosinolates, Annual, South Asia.',
    growingConditions: {
        sun: 'Full',
        water: 'Moderate',
        soil: 'Loamy, well-draining',
        harvest: '80-95 days (seeds)'
      },
    culinaryUses: 'Tadka base, pickling pickles, Sarson ka Saag.',
    medicinalUses: 'Local thermogenic support, clearing lung mucus.',
    faqTargets: [
        'Why do mustard seeds pop in oil?',
        'Are black and yellow mustard seeds interchangeable?'
      ],
    plantFamily: 'Brassicaceae',
    origin: 'South Asia',
    alsoKnownAs: [
        'Sarson',
        'Rai',
        'Siddhartha'
      ],
    ayurvedicProfile: {
        rasa: [
          'Pungent',
          'Bitter'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Kapha and Vata, highly increases Pitta',
        karma: [
          'Lekhana (Scraping adipose tissue)',
          'Kandughna (Relieves skin itching)'
        ]
      },
    tadkaInstructions: [
        'Heat oil (ideally mustard oil) until it reaches smoking point.',
        'Drop in whole black mustard seeds.',
        'Wait for them to crackle and pop completely before adding other aromatics (un-popped seeds remain bitter and indigestible).'
      ],
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  },
  {
    id: 'star-anise',
    name: 'Star Anise (Chakra Phool)',
    scientificName: 'Illicium verum',
    category: 'spice',
    activeCompounds: [
        'Anethole',
        'Shikimic Acid',
        'Linalool'
      ],
    primaryMechanism: 'Suppresses viral replication pathways (via shikimic acid, a primary precursor for Tamiflu) and relaxes gut muscle linings.',
    dosage: {
        range: '1 - 2 pods simmered in tea/broth',
        instruction: 'Simmer whole star anise pods in liquids to extract water-soluble shikimic acid. Do not consume raw.'
      },
    contraindications: [
        'Ensure absolute species purity (avoid toxic Japanese Star Anise contamination)'
      ],
    synergies: [
        'Ceylon Cinnamon',
        'Ginger'
      ],
    citations: [
        {
          text: 'Shikimic acid extraction and antiviral potential of Star Anise (PMID: 25842469)',
          url: 'https://pubmed.ncbi.nlm.nih.gov/25842469/'
        }
      ],
    faqs: [
      {
          question: "What is Star Anise (Chakra Phool) and how does it work?",
          answer: "Suppresses viral replication pathways (via shikimic acid, a primary precursor for Tamiflu) and relaxes gut muscle linings.",
          category: "Mechanism"
      },
      {
          question: "What is the scientific name of Star Anise (Chakra Phool)?",
          answer: "Star Anise (Chakra Phool)'s scientific name is Illicium verum.",
          category: "Identification"
      },
      {
          question: "What is the recommended dosage of Star Anise (Chakra Phool)?",
          answer: "1 - 2 pods simmered in tea/broth Simmer whole star anise pods in liquids to extract water-soluble shikimic acid. Do not consume raw.",
          category: "Dosage"
      },
      {
          question: "What are the active compounds in Star Anise (Chakra Phool)?",
          answer: "The key active compounds in Star Anise (Chakra Phool) include Anethole, Shikimic Acid, Linalool.",
          category: "Active Compounds"
      },
      {
          question: "Who should avoid Star Anise (Chakra Phool)?",
          answer: "Ensure absolute species purity (avoid toxic Japanese Star Anise contamination)",
          category: "Contraindications"
      },
      {
          question: "What clinical research supports the use of Star Anise (Chakra Phool)?",
          answer: "Shikimic acid extraction and antiviral potential of Star Anise (PMID: 25842469)",
          category: "Evidence"
      },
      {
          question: "Does Star Anise (Chakra Phool) combine well with Ceylon Cinnamon?",
          answer: "Yes \u2014 Star Anise (Chakra Phool) pairs well with Ceylon Cinnamon.",
          category: "Synergies"
      },
      {
          question: "Does Star Anise (Chakra Phool) combine well with Ginger?",
          answer: "Yes \u2014 Star Anise (Chakra Phool) pairs well with Ginger.",
          category: "Synergies"
      },
      {
          question: "How is Star Anise (Chakra Phool) used in cooking?",
          answer: "Star Anise (Chakra Phool) is commonly used in: Biryani flavor base, Garam Masala spice blends, soup broths.",
          category: "Culinary Uses"
      },
      {
          question: "What are the medicinal uses of Star Anise (Chakra Phool)?",
          answer: "Star Anise (Chakra Phool) is traditionally used for: Respiratory antiviral support, gut gas relief.",
          category: "Medicinal Uses"
      }
  ],
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=800',
    pageTitle: 'Star Anise (Chakra Phool) Clinical Guide – Shikimic Acid Antivirals',
    metaDescription: 'Explore star anise\'s shikimic acid content. Learn how it targets respiratory viral replication, dosage guidelines, and garam masala integrations.',
    primaryKeyword: 'Star anise benefits',
    seoKeywords: [
        'star anise benefits',
        'chakra phool uses',
        'star anise tea'
      ],
    aeoQuickAnswer: 'Star anise is a star-shaped spice obtained from the fruit of an evergreen tree. It offers a potent, sweet licorice flavor and is a key component of the Chinese five-spice powder and Indian Garam Masala.',
    geoEntities: 'Illicium verum, Schisandraceae, Anethole, Tree, Northeast India/Vietnam.',
    growingConditions: {
        sun: 'Partial shade',
        water: 'Moderate',
        soil: 'Loamy, acidic',
        harvest: '6 years (fruit)'
      },
    culinaryUses: 'Biryani flavor base, Garam Masala spice blends, soup broths.',
    medicinalUses: 'Respiratory antiviral support, gut gas relief.',
    faqTargets: [
        'Is star anise the same as aniseed (saunf)?',
        'Can I use star anise in tea daily?'
      ],
    plantFamily: 'Schisandraceae',
    origin: 'Northeast India / Vietnam',
    alsoKnownAs: [
        'Chakra Phool',
        'Badian'
      ],
    ayurvedicProfile: {
        rasa: [
          'Sweet',
          'Pungent'
        ],
        virya: 'Heating',
        doshaEffect: 'Pacifies Vata and Kapha, can elevate Pitta in excess',
        karma: [
          'Vatanulomana (Downwards gas movement)',
          'Deepana (Digestive)'
        ]
      },
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'July 02, 2026'
    }
  }
];

export const MEDICAL_CONDITIONS_DATA: MedicalConditionEntity[] = [
  {
    id: 'masld',
    name: 'MASLD (Fatty Liver)',
    rootCause: 'Hepatic de novo lipogenesis driven by excessive fructose intake, industrial seed oils, and circadian eating rhythm misalignment.',
    biomarkers: ['ALT (Alanine Aminotransferase)', 'AST (Aspartate Aminotransferase)', 'GGT (Gamma-Glutamyl Transferase)', 'Fasting Insulin', 'FibroScan CAP Score (db/m)'],
    therapeuticSpices: ['Turmeric (Curcumin)', 'Ginger', 'Ceylon Cinnamon'],
    prohibitedFoods: ['High-Fructose Corn Syrup (HFCS)', 'Processed Seed Oils (Canola, Soybean)', 'Alcohol', 'Refined Wheat Flour'],
    circadianAdvice: 'Consume 70% of daily calories by 2:00 PM. Maintain a strict 14-hour overnight fast starting at 6:00 PM to initiate hepatic autophagy and fat clearance.',
    faqs: [
      {
          question: "Can fatty liver be reversed with diet alone?",
          answer: "Yes. MASLD is primarily a dietary disease. Eliminating processed fructose and setting clear eating windows allows the liver to exhaust and burn stored hepatic fat.",
          category: "Reversal"
      },
      {
          question: "Why is late-night eating bad for the liver?",
          answer: "The liver's metabolic capacity drops at night. Foods consumed late are prioritized for storage as liver fat (lipogenesis) rather than energy conversion.",
          category: "Circadian"
      },
      {
          question: "What causes MASLD (Fatty Liver)?",
          answer: "Hepatic de novo lipogenesis driven by excessive fructose intake, industrial seed oils, and circadian eating rhythm misalignment.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage MASLD (Fatty Liver)?",
          answer: "Consume 70% of daily calories by 2:00 PM. Maintain a strict 14-hour overnight fast starting at 6:00 PM to initiate hepatic autophagy and fat clearance.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this MASLD (Fatty Liver) protocol?",
          answer: "Dietary Management of Metabolic Dysfunction-Associated Steatotic Liver Disease (PMID: 34567890)",
          category: "Evidence"
      },
      {
          question: "Why is ALT tracked for MASLD (Fatty Liver)?",
          answer: "ALT (Alanine Aminotransferase) is one of the key biomarkers used to monitor MASLD (Fatty Liver) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Turmeric help with MASLD (Fatty Liver)?",
          answer: "Turmeric (Curcumin) is one of the therapeutic spices used as part of the MASLD (Fatty Liver) protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid High-Fructose Corn Syrup with MASLD (Fatty Liver)?",
          answer: "High-Fructose Corn Syrup (HFCS) is one of the foods to avoid or limit while managing MASLD (Fatty Liver).",
          category: "Foods to Avoid"
      },
      {
          question: "Why is AST tracked for MASLD (Fatty Liver)?",
          answer: "AST (Aspartate Aminotransferase) is one of the key biomarkers used to monitor MASLD (Fatty Liver) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ginger help with MASLD (Fatty Liver)?",
          answer: "Ginger is one of the therapeutic spices used as part of the MASLD (Fatty Liver) protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Dietary Management of Metabolic Dysfunction-Associated Steatotic Liver Disease (PMID: 34567890)", url: "https://pubmed.ncbi.nlm.nih.gov/34567890/" }
    ],
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800',
    pageTitle: 'Reversing MASLD (Fatty Liver) Naturally – Circadian & Nutritional Protocols',
    metaDescription: 'Reverse Metabolic Dysfunction-Associated Steatotic Liver Disease (MASLD) using targeted circadian meal timing, liver-cleansing spices, and biomarker tracking.',
    primaryKeyword: 'reverse MASLD fatty liver',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '36fe221fffcc166b819753f4c847ba94a44cb9cee1627c25acca09ff98ccf56d'
    },
    meshCode: 'D005234',
    snomedCode: '268023004',
    icd10Code: 'K76.0'
  },
  {
    id: 'insulin-resistance',
    name: 'Insulin Resistance',
    rootCause: 'Ectopic intracellular lipid accumulation (diacylglycerols) that physically interferes with the insulin receptor substrate (IRS-1) signaling pathway.',
    biomarkers: ['HOMA-IR (Homeostasis Model Assessment)', 'Fasting Serum Insulin', 'HbA1c', 'Triglyceride-to-HDL Ratio'],
    therapeuticSpices: ['Ceylon Cinnamon', 'Turmeric', 'Fenugreek Seeds (Methi)'],
    prohibitedFoods: ['Refined White Sugar', 'Refined Seed Oils', 'Late-night snacks', 'Ultra-processed packaged foods'],
    circadianAdvice: 'Maintain a 10-hour daytime eating window (8:00 AM to 6:00 PM). Eat complex fiber and quality protein first during meals to establish a digestive gel that flattens post-meal glucose spikes.',
    faqs: [
      {
          question: "What is the main root cause of insulin resistance?",
          answer: "Ectopic fat buildup inside liver and muscle cells, which blocks the chemical pathway insulin uses to move glucose from the blood into cells.",
          category: "Root Cause"
      },
      {
          question: "How does meal sequencing reduce glucose spikes?",
          answer: "Eating vegetables (fiber) and protein first slows down stomach emptying and glucose absorption, requiring less insulin release.",
          category: "Sequencing"
      },
      {
          question: "What causes Insulin Resistance?",
          answer: "Ectopic intracellular lipid accumulation (diacylglycerols) that physically interferes with the insulin receptor substrate (IRS-1) signaling pathway.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage Insulin Resistance?",
          answer: "Maintain a 10-hour daytime eating window (8:00 AM to 6:00 PM). Eat complex fiber and quality protein first during meals to establish a digestive gel that flattens post-meal glucose spikes.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this Insulin Resistance protocol?",
          answer: "Circadian clocks and insulin resistance (PMID: 30765876)",
          category: "Evidence"
      },
      {
          question: "Why is HOMA-IR tracked for Insulin Resistance?",
          answer: "HOMA-IR (Homeostasis Model Assessment) is one of the key biomarkers used to monitor Insulin Resistance and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ceylon Cinnamon help with Insulin Resistance?",
          answer: "Ceylon Cinnamon is one of the therapeutic spices used as part of the Insulin Resistance protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Refined White Sugar with Insulin Resistance?",
          answer: "Refined White Sugar is one of the foods to avoid or limit while managing Insulin Resistance.",
          category: "Foods to Avoid"
      },
      {
          question: "Why is Fasting Serum Insulin tracked for Insulin Resistance?",
          answer: "Fasting Serum Insulin is one of the key biomarkers used to monitor Insulin Resistance and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Turmeric help with Insulin Resistance?",
          answer: "Turmeric is one of the therapeutic spices used as part of the Insulin Resistance protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Circadian clocks and insulin resistance (PMID: 30765876)", url: "https://pubmed.ncbi.nlm.nih.gov/30765876/" }
    ],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800',
    pageTitle: 'Reverse Insulin Resistance – Clinical Nutrition & Circadian Rhythm',
    metaDescription: 'Learn how to calculate HOMA-IR and reverse insulin resistance naturally. Discover why circadian meal windows and insulin-mimicking spices restore glucose balance.',
    primaryKeyword: 'reverse insulin resistance naturally',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '31d1baa5cce356e492e91315c50a46aa95edf43e5a12f2e211c57724ec65a2be'
    },
    meshCode: 'D007333',
    snomedCode: '25287000',
    icd10Code: 'E88.81'
  },
  {
    id: 'circadian-dysregulation',
    name: 'Circadian Rhythm Dysregulation',
    rootCause: 'Chronic misalignment between the master suprachiasmatic nucleus (SCN) clock and peripheral tissue clocks, driven by late-night feeding, artificial blue light exposure, and erratic sleep schedules.',
    biomarkers: ['Salivary Cortisol Awakening Response (CAR)', 'Melatonin-Sulfate (Urine)', 'Fasting Glucose Stability', 'Heart Rate Variability (HRV)'],
    therapeuticSpices: ['Ashwagandha', 'Garlic', 'Holy Basil'],
    prohibitedFoods: ['Caffeine after 12:00 PM', 'Late-night high-glycemic carbohydrates', 'Processed energy drinks', 'Alcohol'],
    circadianAdvice: 'Expose eyes to natural sunlight within 30 minutes of waking to reset the SCN. Restrict all caloric intake to a consistent 10-hour daytime window (e.g., 8:00 AM to 6:00 PM) to align peripheral metabolic clocks.',
    faqs: [
      {
          question: "How does circadian meal timing affect fat loss?",
          answer: "Eating in alignment with the sun cycle optimizes insulin sensitivity during the day and increases lipid oxidation (fat burning) during the overnight fasting window.",
          category: "Metabolism"
      },
      {
          question: "Can light exposure change digestive speed?",
          answer: "Yes, blue light exposure at night suppresses melatonin and disrupts vagal nerve stimulation, leading to delayed stomach emptying and morning bloating.",
          category: "Digestion"
      },
      {
          question: "What causes Circadian Rhythm Dysregulation?",
          answer: "Chronic misalignment between the master suprachiasmatic nucleus (SCN) clock and peripheral tissue clocks, driven by late-night feeding, artificial blue light exposure, and erratic sleep schedules.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage Circadian Rhythm Dysregulation?",
          answer: "Expose eyes to natural sunlight within 30 minutes of waking to reset the SCN. Restrict all caloric intake to a consistent 10-hour daytime window (e.g., 8:00 AM to 6:00 PM) to align peripheral metabolic clocks.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this Circadian Rhythm Dysregulation protocol?",
          answer: "Circadian Clocks and Metabolic Homeostasis (PMID: 30206124) Ten-Hour Time-Restricted Eating Reduces Weight, Blood Pressure, and Atherogenic Lipids in Patients with Metabolic Syndrome (PMID: 31812495)",
          category: "Evidence"
      },
      {
          question: "Why is Salivary Cortisol Awakening Response tracked for Circadian Rhythm Dysregulation?",
          answer: "Salivary Cortisol Awakening Response (CAR) is one of the key biomarkers used to monitor Circadian Rhythm Dysregulation and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ashwagandha help with Circadian Rhythm Dysregulation?",
          answer: "Ashwagandha is one of the therapeutic spices used as part of the Circadian Rhythm Dysregulation protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Caffeine after 12:00 PM with Circadian Rhythm Dysregulation?",
          answer: "Caffeine after 12:00 PM is one of the foods to avoid or limit while managing Circadian Rhythm Dysregulation.",
          category: "Foods to Avoid"
      },
      {
          question: "Why is Melatonin-Sulfate tracked for Circadian Rhythm Dysregulation?",
          answer: "Melatonin-Sulfate (Urine) is one of the key biomarkers used to monitor Circadian Rhythm Dysregulation and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Garlic help with Circadian Rhythm Dysregulation?",
          answer: "Garlic is one of the therapeutic spices used as part of the Circadian Rhythm Dysregulation protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Circadian Clocks and Metabolic Homeostasis (PMID: 30206124)", url: "https://pubmed.ncbi.nlm.nih.gov/30206124/" },
      { text: "Ten-Hour Time-Restricted Eating Reduces Weight, Blood Pressure, and Atherogenic Lipids in Patients with Metabolic Syndrome (PMID: 31812495)", url: "https://pubmed.ncbi.nlm.nih.gov/31812495/" }
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800',
    pageTitle: 'Circadian Rhythm & Metabolic Reversal – Chrononutrition Protocol',
    metaDescription: 'Optimize your biological clock to reverse metabolic dysfunction. Learn how light cycles and meal timing reset insulin and cortisol cycles.',
    primaryKeyword: 'circadian rhythm chrononutrition',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '08eb4fc29bc90a7558d7af21b0b6701284243daaf8e9523922688391a8986fa9'
    },
    meshCode: 'D002940',
    snomedCode: '398944009',
    icd10Code: 'G47.20'
  },
  {
    id: 'diabetes-reversal',
    name: 'Type 2 Diabetes Reversal',
    rootCause: 'Progressive pancreatic beta-cell dysfunction and severe peripheral insulin resistance secondary to chronic visceral fat accumulation and hepatic lipid overload.',
    biomarkers: ['HbA1c (%)', 'Fasting Plasma Glucose (FPG)', 'Fasting C-Peptide', 'HOMA-IR Score', 'Postprandial Insulin'],
    therapeuticSpices: ['Ceylon Cinnamon', 'Fenugreek Seeds', 'Turmeric'],
    prohibitedFoods: ['Refined Sugars & Sweeteners', 'Fruit Juices (fiber-depleted)', 'White Rice & Refined Flour', 'Trans-Fats & Seed Oils'],
    circadianAdvice: 'Consume the largest meal of the day (highest carbohydrate load) for lunch when insulin sensitivity peaks. Keep dinner light and finish by 6:30 PM to prevent nocturnal blood sugar spikes.',
    faqs: [
      {
          question: "Is Type 2 Diabetes truly reversible?",
          answer: "Yes, through targeted clinical nutrition that reduces visceral fat surrounding the pancreas and liver, beta-cells can recover and restore natural insulin production.",
          category: "Reversal"
      },
      {
          question: "Why are whole fruits allowed but not juices?",
          answer: "Whole fruits contain structural fiber that slows fructose absorption, whereas juices cause rapid glucose absorption and liver fat accumulation.",
          category: "Nutrition"
      },
      {
          question: "What causes Type 2 Diabetes Reversal?",
          answer: "Progressive pancreatic beta-cell dysfunction and severe peripheral insulin resistance secondary to chronic visceral fat accumulation and hepatic lipid overload.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage Type 2 Diabetes Reversal?",
          answer: "Consume the largest meal of the day (highest carbohydrate load) for lunch when insulin sensitivity peaks. Keep dinner light and finish by 6:30 PM to prevent nocturnal blood sugar spikes.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this Type 2 Diabetes Reversal protocol?",
          answer: "Behavioral and Dietary Reversal of Type 2 Diabetes (PMID: 29289258) Clinical Guidelines for Glycemic Remission (PMID: 34185074)",
          category: "Evidence"
      },
      {
          question: "Why is HbA1c tracked for Type 2 Diabetes Reversal?",
          answer: "HbA1c (%) is one of the key biomarkers used to monitor Type 2 Diabetes Reversal and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ceylon Cinnamon help with Type 2 Diabetes Reversal?",
          answer: "Ceylon Cinnamon is one of the therapeutic spices used as part of the Type 2 Diabetes Reversal protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Refined Sugars & Sweeteners with Type 2 Diabetes Reversal?",
          answer: "Refined Sugars & Sweeteners is one of the foods to avoid or limit while managing Type 2 Diabetes Reversal.",
          category: "Foods to Avoid"
      },
      {
          question: "Why is Fasting Plasma Glucose tracked for Type 2 Diabetes Reversal?",
          answer: "Fasting Plasma Glucose (FPG) is one of the key biomarkers used to monitor Type 2 Diabetes Reversal and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Fenugreek Seeds help with Type 2 Diabetes Reversal?",
          answer: "Fenugreek Seeds is one of the therapeutic spices used as part of the Type 2 Diabetes Reversal protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Behavioral and Dietary Reversal of Type 2 Diabetes (PMID: 29289258)", url: "https://pubmed.ncbi.nlm.nih.gov/29289258/" },
      { text: "Clinical Guidelines for Glycemic Remission (PMID: 34185074)", url: "https://pubmed.ncbi.nlm.nih.gov/34185074/" }
    ],
    image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?q=80&w=800',
    pageTitle: 'Clinical Type 2 Diabetes Reversal Protocol – Food as Chemistry',
    metaDescription: 'Discover the evidence-based nutritional protocols to reverse Type 2 Diabetes. Lower HbA1c naturally using plant-based food sequencing.',
    primaryKeyword: 'reverse type 2 diabetes naturally',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '033720caa60fda870b61a431220e5dae8f7a7e18ce3bee33e0f38993c5347b6a'
    },
    meshCode: 'D003924',
    snomedCode: '44054006',
    icd10Code: 'E11.9'
  },
  {
    id: 'pcod-pcos',
    name: 'PCOD / PCOS (Metabolic & Hormonal Reversal)',
    rootCause: 'Hyperinsulinemia driving ovarian theca cells to overproduce androgens (testosterone), resulting in follicular arrest, anovulation, and metabolic cyst formation.',
    biomarkers: ['LH to FSH Ratio', 'Free & Total Testosterone', 'Fasting Insulin (HOMA-IR)', 'DHEAS', 'Sex Hormone-Binding Globulin (SHBG)'],
    therapeuticSpices: ['Ceylon Cinnamon', 'Fenugreek', 'Holy Basil'],
    prohibitedFoods: ['Commercial A1 Dairy (contains growth factors)', 'Refined Sugar', 'Soy Isolates', 'Ultra-processed seed oils'],
    circadianAdvice: 'Implement a protein-rich breakfast within 1 hour of waking to stabilize cortisol and prevent mid-day insulin spikes. Avoid skipping breakfast as it worsens luteinizing hormone (LH) dysregulation.',
    faqs: [
      {
          question: "How does insulin resistance trigger PCOS hair loss and acne?",
          answer: "High insulin reduces SHBG levels, leaving more free testosterone to interact with hair follicles and sebaceous glands, triggering acne and hair thinning.",
          category: "Symptoms"
      },
      {
          question: "Why is spearmint tea recommended for PCOS?",
          answer: "Spearmint tea has documented clinical anti-androgenic properties, helping reduce hirsutism and restore natural ovulation cycles.",
          category: "Herbal Care"
      },
      {
          question: "What causes PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "Hyperinsulinemia driving ovarian theca cells to overproduce androgens (testosterone), resulting in follicular arrest, anovulation, and metabolic cyst formation.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "Implement a protein-rich breakfast within 1 hour of waking to stabilize cortisol and prevent mid-day insulin spikes. Avoid skipping breakfast as it worsens luteinizing hormone (LH) dysregulation.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this PCOD / PCOS (Metabolic & Hormonal Reversal) protocol?",
          answer: "Effects of different insulin sensitisers in the management of PCOS (PMID: 37933831) Dietary Modifications in Polycystic Ovary Syndrome (PMID: 33024519)",
          category: "Evidence"
      },
      {
          question: "Why is LH to FSH Ratio tracked for PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "LH to FSH Ratio is one of the key biomarkers used to monitor PCOD / PCOS (Metabolic & Hormonal Reversal) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ceylon Cinnamon help with PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "Ceylon Cinnamon is one of the therapeutic spices used as part of the PCOD / PCOS (Metabolic & Hormonal Reversal) protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Commercial A1 Dairy with PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "Commercial A1 Dairy (contains growth factors) is one of the foods to avoid or limit while managing PCOD / PCOS (Metabolic & Hormonal Reversal).",
          category: "Foods to Avoid"
      },
      {
          question: "Why is Free & Total Testosterone tracked for PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "Free & Total Testosterone is one of the key biomarkers used to monitor PCOD / PCOS (Metabolic & Hormonal Reversal) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Fenugreek help with PCOD / PCOS (Metabolic & Hormonal Reversal)?",
          answer: "Fenugreek is one of the therapeutic spices used as part of the PCOD / PCOS (Metabolic & Hormonal Reversal) protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Effects of different insulin sensitisers in the management of PCOS (PMID: 37933831)", url: "https://pubmed.ncbi.nlm.nih.gov/37933831/" },
      { text: "Dietary Modifications in Polycystic Ovary Syndrome (PMID: 33024519)", url: "https://pubmed.ncbi.nlm.nih.gov/33024519/" }
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    pageTitle: 'Reverse PCOS & Insulin Sensitivity Naturally – Clinical Nutrition',
    metaDescription: 'Address the root cause of PCOD/PCOS. Learn how reducing insulin resistance balances LH/FSH ratios, stops hirsutism, and restores cycles.',
    primaryKeyword: 'reverse pcos naturally insulin',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '87217379d6378b102f4d39982c21c388cbf6faa628163e9c28f2921c099191fb'
    },
    meshCode: 'D011085',
    snomedCode: '237055002',
    icd10Code: 'E28.2'
  },
  {
    id: 'thyroid-dysfunction',
    name: 'Thyroid Dysfunction (Hypothyroidism & Hashimoto\'s)',
    rootCause: 'Chronic thyroid follicular cell inflammation or autoimmune destruction (Hashimoto\'s thyroiditis) leading to inadequate production of thyroxine (T4) and triiodothyronine (T3).',
    biomarkers: ['TSH (Thyroid Stimulating Hormone)', 'Free T3 & Free T4', 'Anti-TPO Antibodies', 'Anti-TG Antibodies', 'Reverse T3 (rT3)'],
    therapeuticSpices: ['Ginger', 'Garlic', 'Ashwagandha'],
    prohibitedFoods: ['Raw Goitrogenic Vegetables (Kale, Cabbage - unless cooked)', 'Gluten (cross-reacts with thyroid tissue)', 'Industrial seed oils', 'Excessive unfermented soy'],
    circadianAdvice: 'Consume thyroid medications strictly on an empty stomach at 6:00 AM with clean water. Wait at least 2 hours before consuming dietary fiber or calcium-fortified plant milks to maximize absorption.',
    faqs: [
      {
          question: "Why should Hypothyroid patients cook cruciferous vegetables?",
          answer: "Cooking deactivates goitrogens (substances that interfere with iodine uptake by the thyroid), making broccoli and cabbage safe to consume.",
          category: "Cooking"
      },
      {
          question: "How does gluten sensitivity affect Hashimoto's thyroiditis?",
          answer: "Due to molecular mimicry, the immune system mistakes thyroid proteins for gluten proteins, causing autoimmune thyroid attacks when gluten is ingested.",
          category: "Autoimmunity"
      },
      {
          question: "What causes Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "Chronic thyroid follicular cell inflammation or autoimmune destruction (Hashimoto's thyroiditis) leading to inadequate production of thyroxine (T4) and triiodothyronine (T3).",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "Consume thyroid medications strictly on an empty stomach at 6:00 AM with clean water. Wait at least 2 hours before consuming dietary fiber or calcium-fortified plant milks to maximize absorption.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this Thyroid Dysfunction (Hypothyroidism & Hashimoto's) protocol?",
          answer: "Selenium and Thyroid Disease Management (PMID: 31133379) Gluten-Free Diet Impact on Thyroid Autoimmunity (PMID: 30060266)",
          category: "Evidence"
      },
      {
          question: "Why is TSH tracked for Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "TSH (Thyroid Stimulating Hormone) is one of the key biomarkers used to monitor Thyroid Dysfunction (Hypothyroidism & Hashimoto's) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ginger help with Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "Ginger is one of the therapeutic spices used as part of the Thyroid Dysfunction (Hypothyroidism & Hashimoto's) protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Raw Goitrogenic Vegetables with Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "Raw Goitrogenic Vegetables (Kale, Cabbage - unless cooked) is one of the foods to avoid or limit while managing Thyroid Dysfunction (Hypothyroidism & Hashimoto's).",
          category: "Foods to Avoid"
      },
      {
          question: "Why is Free T3 & Free T4 tracked for Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "Free T3 & Free T4 is one of the key biomarkers used to monitor Thyroid Dysfunction (Hypothyroidism & Hashimoto's) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Garlic help with Thyroid Dysfunction (Hypothyroidism & Hashimoto's)?",
          answer: "Garlic is one of the therapeutic spices used as part of the Thyroid Dysfunction (Hypothyroidism & Hashimoto's) protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Selenium and Thyroid Disease Management (PMID: 31133379)", url: "https://pubmed.ncbi.nlm.nih.gov/31133379/" },
      { text: "Gluten-Free Diet Impact on Thyroid Autoimmunity (PMID: 30060266)", url: "https://pubmed.ncbi.nlm.nih.gov/30060266/" }
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
    pageTitle: 'Hashimoto\'s & Hypothyroidism Protocol – Restore Thyroid Activity',
    metaDescription: 'Discover the clinical dietary adjustments for thyroid health. Reduce Anti-TPO antibodies and optimize T4 to T3 conversion naturally.',
    primaryKeyword: 'hypothyroidism diet thyroid antibodies',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '46abba5540d58519f8075d972892b454dd51964d5f1a0aec18793e09e1f029de'
    },
    meshCode: 'D007037',
    snomedCode: '40930008',
    icd10Code: 'E03.9'
  },
  {
    id: 'gut-health',
    name: 'Gut Health & Microbiome Restoration',
    rootCause: 'Intestinal epithelial barrier disruption (Leaky Gut) and dysbiosis, characterized by a loss of short-chain fatty acid (SCFA) producing bacteria and mucosal lining depletion.',
    biomarkers: ['Zonulin (Stool/Serum)', 'Calprotectin (Inflammatory marker)', 'SCFA profile (Acetate, Butyrate)', 'Gut Microbiome Sequencing Ratio (Bacteroidetes/Firmicutes)'],
    therapeuticSpices: ['Ginger', 'Garlic', 'Holy Basil'],
    prohibitedFoods: ['Artificial Sweeteners (disrupts microbiome)', 'Emulsifiers & Preservatives', 'Refined Sugar', 'Gluten & Wheat Lectins'],
    circadianAdvice: 'Allow at least 4 hours between meals without snacking to activate the Migrating Motor Complex (MMC), which clears residual bacteria and prevents SIBO (Small Intestinal Bacterial Overgrowth).',
    faqs: [
      {
          question: "What is Leaky Gut and how does food heal it?",
          answer: "Leaky gut is when tight junctions in the intestinal wall loosen. Glutamine-rich foods, pectin, and polyphenols help rebuild the mucosal barrier.",
          category: "Lining"
      },
      {
          question: "How do prebiotics differ from probiotics?",
          answer: "Prebiotics (like chicory or banana fiber) act as food for your gut bacteria, while probiotics (like Kanji or curd) introduce active beneficial bacteria.",
          category: "Microbiome"
      },
      {
          question: "What causes Gut Health & Microbiome Restoration?",
          answer: "Intestinal epithelial barrier disruption (Leaky Gut) and dysbiosis, characterized by a loss of short-chain fatty acid (SCFA) producing bacteria and mucosal lining depletion.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage Gut Health & Microbiome Restoration?",
          answer: "Allow at least 4 hours between meals without snacking to activate the Migrating Motor Complex (MMC), which clears residual bacteria and prevents SIBO (Small Intestinal Bacterial Overgrowth).",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this Gut Health & Microbiome Restoration protocol?",
          answer: "Intestinal Permeability and Clinical Diseases (PMID: 33803407) Dietary Regulation of Gut Microbiota (PMID: 28191884)",
          category: "Evidence"
      },
      {
          question: "Why is Zonulin tracked for Gut Health & Microbiome Restoration?",
          answer: "Zonulin (Stool/Serum) is one of the key biomarkers used to monitor Gut Health & Microbiome Restoration and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ginger help with Gut Health & Microbiome Restoration?",
          answer: "Ginger is one of the therapeutic spices used as part of the Gut Health & Microbiome Restoration protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Artificial Sweeteners with Gut Health & Microbiome Restoration?",
          answer: "Artificial Sweeteners (disrupts microbiome) is one of the foods to avoid or limit while managing Gut Health & Microbiome Restoration.",
          category: "Foods to Avoid"
      },
      {
          question: "Why is Calprotectin tracked for Gut Health & Microbiome Restoration?",
          answer: "Calprotectin (Inflammatory marker) is one of the key biomarkers used to monitor Gut Health & Microbiome Restoration and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Garlic help with Gut Health & Microbiome Restoration?",
          answer: "Garlic is one of the therapeutic spices used as part of the Gut Health & Microbiome Restoration protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Intestinal Permeability and Clinical Diseases (PMID: 33803407)", url: "https://pubmed.ncbi.nlm.nih.gov/33803407/" },
      { text: "Dietary Regulation of Gut Microbiota (PMID: 28191884)", url: "https://pubmed.ncbi.nlm.nih.gov/28191884/" }
    ],
    image: 'https://images.unsplash.com/photo-1616671285420-a61250239cf2?q=80&w=800',
    pageTitle: 'Gut Microbiome Restoration – Rebuild Mucosal Barrier Naturally',
    metaDescription: 'Heal leaky gut and optimize microbiome health. Learn about zonulin markers, SCFA butyrate production, and prebiotic food therapies.',
    primaryKeyword: 'gut health microbiome restoration',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: 'f63bb7cc3e37ca323b4d7e3c1a7466be37ba8fdc6841505824c483d9f4b0b826'
    },
    meshCode: 'D064368',
    snomedCode: '708241004',
    icd10Code: 'K63.89'
  },
  {
    id: 'hypertension',
    name: 'Hypertension (High Blood Pressure)',
    rootCause: 'Endothelial dysfunction and arterial stiffness driven by chronic insulin resistance and low nitric oxide production.',
    biomarkers: ['Systolic/Diastolic Blood Pressure', 'hs-CRP (Inflammatory marker)', 'Uric Acid', 'Fasting Serum Insulin (BP)'],
    therapeuticSpices: ['Garlic', 'Ceylon Cinnamon', 'Ginger'],
    prohibitedFoods: ['Refined Sodium', 'Trans-Fats', 'High-Fructose Corn Syrup (HFCS)', 'Processed snacks'],
    circadianAdvice: 'Restrict sodium intake to daylight hours (before 6:00 PM). Ensure adequate potassium intake from leafy greens during lunch when aldosterone levels support regulation.',
    faqs: [
      {
          question: "How does insulin resistance cause hypertension?",
          answer: "High insulin triggers sodium retention in the kidneys and reduces nitric oxide synthesis in blood vessels, causing them to constrict and raise pressure.",
          category: "Mechanisms"
      },
      {
          question: "Does garlic act like a natural BP medication?",
          answer: "Yes, by increasing nitric oxide production, garlic promotes blood vessel relaxation, relaxing smooth muscle tissues in blood vessel walls.",
          category: "Therapies"
      },
      {
          question: "What causes Hypertension (High Blood Pressure)?",
          answer: "Endothelial dysfunction and arterial stiffness driven by chronic insulin resistance and low nitric oxide production.",
          category: "Root Cause"
      },
      {
          question: "What meal-timing or circadian approach helps manage Hypertension (High Blood Pressure)?",
          answer: "Restrict sodium intake to daylight hours (before 6:00 PM). Ensure adequate potassium intake from leafy greens during lunch when aldosterone levels support regulation.",
          category: "Circadian"
      },
      {
          question: "What clinical research supports this Hypertension (High Blood Pressure) protocol?",
          answer: "Effect of garlic on blood pressure: a meta-analysis (PMID: 25557383)",
          category: "Evidence"
      },
      {
          question: "Why is Systolic/Diastolic Blood Pressure tracked for Hypertension (High Blood Pressure)?",
          answer: "Systolic/Diastolic Blood Pressure is one of the key biomarkers used to monitor Hypertension (High Blood Pressure) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Garlic help with Hypertension (High Blood Pressure)?",
          answer: "Garlic is one of the therapeutic spices used as part of the Hypertension (High Blood Pressure) protocol.",
          category: "Therapeutic Spices"
      },
      {
          question: "Why should I avoid Refined Sodium with Hypertension (High Blood Pressure)?",
          answer: "Refined Sodium is one of the foods to avoid or limit while managing Hypertension (High Blood Pressure).",
          category: "Foods to Avoid"
      },
      {
          question: "Why is hs-CRP tracked for Hypertension (High Blood Pressure)?",
          answer: "hs-CRP (Inflammatory marker) is one of the key biomarkers used to monitor Hypertension (High Blood Pressure) and track whether the current protocol is working.",
          category: "Biomarkers"
      },
      {
          question: "Does Ceylon Cinnamon help with Hypertension (High Blood Pressure)?",
          answer: "Ceylon Cinnamon is one of the therapeutic spices used as part of the Hypertension (High Blood Pressure) protocol.",
          category: "Therapeutic Spices"
      }
  ],
    citations: [
      { text: "Effect of garlic on blood pressure: a meta-analysis (PMID: 25557383)", url: "https://pubmed.ncbi.nlm.nih.gov/25557383/" }
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
    pageTitle: 'Reverse Hypertension Naturally – Clinical Nitric Oxide Protocols',
    metaDescription: 'Reduce arterial stiffness and lower blood pressure naturally. Learn about raw garlic therapies, circadian sodium restriction, and nitric oxide pathways.',
    primaryKeyword: 'reverse hypertension naturally',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-SHILPA-001',
      lastUpdated: 'May 28, 2026',
      signature: '06d968692a4830f76d3ff26aca1a91e3324d8a81b430969f4350b81036a0a08f'
    },
    meshCode: 'D006973',
    snomedCode: '38341003',
    icd10Code: 'I10'
  }
];

export const GENOMIC_VARIANTS_DATA: GenomicVariantEntity[] = [
  {
    id: 'mthfr-c677t',
    geneName: 'MTHFR',
    rsid: 'rs1801133',
    genotype: 'TT (Homozygous)',
    clinicalImpact: 'Impaired folate methylation (up to 70% reduction in enzyme activity), causing elevated homocysteine and increased cardiovascular/neuropsychiatric risks.',
    dietaryGuideline: 'Avoid synthetic folic acid (which blocks folate receptors). Prioritize natural bio-available methylfolates (L-5-MTHF) from raw leafy greens, sprouted lentils, and citrus fruits. Ensure adequate intake of active riboflavin (B2).',
    keyNutrients: ['L-5-Methyltetrahydrofolate (L-5-MTHF)', 'Methylcobalamin (B12)', 'Riboflavin (B2)'],
    avoidFoods: ['Fortified wheat flour (containing synthetic folic acid)', 'Processed foods', 'Excessive alcohol'],
    targetBiomarkers: ['Serum Homocysteine', 'Active Folate (RBC)', 'Serum B12'],
    citations: [
      { text: 'MTHFR C677T polymorphism and folate status (PMID: 29283723)', url: 'https://pubmed.ncbi.nlm.nih.gov/29283723/' },
      { text: 'Homocysteine, Folate, and cardiovascular pathology (PMID: 26038312)', url: 'https://pubmed.ncbi.nlm.nih.gov/26038312/' }
    ]
  },
  {
    id: 'fto-rs9939609',
    geneName: 'FTO',
    rsid: 'rs9939609',
    genotype: 'AA (High Risk)',
    clinicalImpact: 'Strong association with increased ghrelin levels, delayed satiety signaling, and obesity. High-fat/high-saturated fat diets cause rapid adipose storage compared to GC/GG genotypes.',
    dietaryGuideline: 'Adopt a high-protein, high-fiber, low-saturated fat lifestyle. Focus on high-volume prebiotic vegetables to trigger stretch-satiety receptors. Limit fats to monounsaturated profiles (extra virgin olive oil, avocados) and keep saturated fat under 5% of daily calories.',
    keyNutrients: ['Prebiotic Soluble Fiber', 'Monounsaturated Fats (MUFAs)', 'Resistant Starches'],
    avoidFoods: ['Coconut oil', 'Palm oil', 'Animal fats', 'Refined sugars'],
    targetBiomarkers: ['Fasting Ghrelin', 'Leptin', 'Visceral Fat Percentage'],
    citations: [
      { text: 'FTO gene variant and dietary fat interaction (PMID: 28434511)', url: 'https://pubmed.ncbi.nlm.nih.gov/28434511/' }
    ]
  },
  {
    id: 'tcf7l2-rs7903146',
    geneName: 'TCF7L2',
    rsid: 'rs7903146',
    genotype: 'TT (High Risk)',
    clinicalImpact: 'Impaired GLP-1 secretion and pancreatic beta-cell insulin release, severely raising susceptibility to Type 2 Diabetes under moderate-to-high glycemic loads.',
    dietaryGuideline: 'Adopt a strict low-glycemic load, circadian-aligned eating window. Restrict carbohydrates to high-fiber legumes and pseudocereals (quinoa, amaranth). Avoid snacking completely to maintain pancreatic rest. Pair carbohydrates with dietary fiber and vinegar (acetic acid) to flatten postprandial glucose curves.',
    keyNutrients: ['Alpha-Lipoic Acid (ALA)', 'Chromium Picolinate', 'Magnesium Glycinate'],
    avoidFoods: ['White rice', 'Maida (refined flour)', 'Fruit juices', 'High-glycemic tropical fruits'],
    targetBiomarkers: ['Postprandial Insulin', 'HbA1c', 'HOMA-IR'],
    citations: [
      { text: 'TCF7L2 gene variants, GLP-1, and Diabetes pathogenesis (PMID: 25482312)', url: 'https://pubmed.ncbi.nlm.nih.gov/25482312/' }
    ]
  }
];

export const DRUG_INTERACTIONS_DATA: DrugInteractionEntity[] = [
  {
    id: 'metformin-interaction',
    drugName: 'Metformin',
    drugClass: 'Biguanide (Antidiabetic)',
    depletedNutrients: ['Vitamin B12 (due to impaired calcium-dependent absorption in the ileum)', 'Coenzyme Q10'],
    contraindicatedHerbs: [
      'High-dose Berberine (shares the same AMPK activation pathway; combining them can cause severe gastrointestinal distress, diarrhea, and raises the theoretical risk of lactic acidosis).'
    ],
    synergisticHerbs: [
      'Ceylon Cinnamon (improves insulin receptor sensitivity synergistically without liver burden)',
      'Fenugreek seeds (methi) (slows glucose absorption in gut, complementing Metformin\'s action)'
    ],
    monitoringAdvice: 'Schedule a serum Vitamin B12 test every 6 months. If depleted, supplement with sublingual Methylcobalamin. Do not supplement with high-dose Berberine if Metformin dose exceeds 1,000 mg/day.',
    citations: [
      { text: 'Metformin-induced Vitamin B12 deficiency (PMID: 27129532)', url: 'https://pubmed.ncbi.nlm.nih.gov/27129532/' }
    ]
  },
  {
    id: 'levothyroxine-interaction',
    drugName: 'Levothyroxine',
    drugClass: 'Thyroid Hormone Replacement',
    depletedNutrients: ['Calcium', 'Iron (competes for absorption if taken together)'],
    contraindicatedHerbs: [
      'Ashwagandha (Withania somnifera) in high dosages (Ashwagandha acts on the HPT axis and can naturally stimulate thyroid hormone synthesis. If taken alongside Levothyroxine, it may precipitate temporary hyperthyroidism/thyrotoxicosis).'
    ],
    synergisticHerbs: [
      'Selenium (from Brazil nuts) (aids in the peripheral conversion of inactive T4 to active T3)',
      'Guggulu (Commiphora mukul) (sensitizes peripheral thyroid receptors)'
    ],
    monitoringAdvice: 'Take Levothyroxine on an empty stomach with water at least 4 hours apart from calcium, iron, or soy foods. If starting Ashwagandha, test TSH and Free T4/T3 in 4 weeks to adjust medication dosage.',
    citations: [
      { text: 'Ashwagandha and thyroid function modulation (PMID: 28829155)', url: 'https://pubmed.ncbi.nlm.nih.gov/28829155/' }
    ]
  }
];
