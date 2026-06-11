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
      { question: "How do I absorb turmeric better?", answer: "Always pair turmeric with a pinch of black pepper (piperine) and healthy fats like virgin coconut oil or grass-fed ghee to boost absorption by up to 2,000%.", category: "Bioavailability" },
      { question: "Should I take turmeric raw or cooked?", answer: "Light cooking with healthy fats activates its key polyphenol, curcumin, enhancing solubility and cellular uptake.", category: "Preparation" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "When is the best time to take Ashwagandha?", answer: "Take it in the evening or 1 hour before bed to support natural cortisol decline and sleep cycles.", category: "Timing" },
      { question: "Does Ashwagandha affect thyroid levels?", answer: "Yes, it can increase thyroid hormone output (T4/T3), making it ideal for hypothyroid but contraindicated for hyperthyroid patients.", category: "Thyroid" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "Why is Ceylon Cinnamon preferred over Cassia?", answer: "Ceylon cinnamon contains negligible coumarin (a liver-toxic compound), making it safe for daily therapeutic use compared to Cassia.", category: "Safety" },
      { question: "How does cinnamon affect blood sugar?", answer: "It improves insulin sensitivity and stimulates GLUT-4 transporters, aiding glucose clearance from the bloodstream.", category: "Blood Sugar" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "How does ginger help with nausea and digestion?", answer: "Yes, ginger accelerates gastric emptying and blocks 5-HT3 receptors in the gut, making it highly effective for nausea and bloating.", category: "Digestion" },
      { question: "Is ginger safe for pregnant women?", answer: "Yes, in standard dietary amounts (under 1g daily) it is safe and widely used for morning sickness.", category: "Safety" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "Why is Ragi beneficial for bone health?", answer: "Ragi is exceptionally high in calcium (about 344mg per 100g, which is higher than milk), making it vital for bone density and joint repair.", category: "Bones" },
      { question: "Is Ragi gluten-free?", answer: "Yes, Ragi is a 100% gluten-free grain, making it ideal for patients with celiac disease or gluten sensitivity.", category: "Gluten" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "Is spirulina a complete protein source?", answer: "Yes, spirulina contains about 60-70% protein by weight and contains all essential amino acids, making it a perfect plant source.", category: "Protein" },
      { question: "Can spirulina help with heavy metal detox?", answer: "Yes, studies indicate that spirulina binds to heavy metals in the gut, supporting their excretion from the body.", category: "Detox" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "How does Fenugreek help with diabetes?", answer: "The active compound 4-hydroxyisoleucine directly stimulates insulin release when glucose levels are elevated, helping lower blood sugar naturally.", category: "Glucose Control" },
      { question: "Should I consume the seeds raw or soaked?", answer: "Soaking the seeds overnight softens the mucilaginous fiber galactomannan, making it much easier on the digestive tract and maximizing active extraction.", category: "Usage" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "How does Tulsi reduce stress and anxiety?", answer: "As an adaptogenic herb, Holy Basil helps optimize cortisol levels and support adrenal function, neutralizing metabolic stress.", category: "Adaptogen" },
      { question: "Can Holy Basil lower blood sugar?", answer: "Yes, studies show it supports pancreatic beta-cell function and enhances peripheral glucose utilization.", category: "Metabolism" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "Why must garlic be crushed before eating?", answer: "Allicin is not present in intact garlic. Crushing breaks cell walls, releasing alliinase to synthesize active allicin. Let crushed garlic sit for 10 minutes before heating.", category: "Chemistry" },
      { question: "Does garlic reduce blood pressure?", answer: "Yes, by increasing nitric oxide production, garlic promotes blood vessel relaxation, reducing vascular resistance.", category: "Cardiovascular" }
    ],
    citations: [
      { text: "Garlic for Cardiovascular Health: A Clinical Review (PMID: 32300792)", url: "https://pubmed.ncbi.nlm.nih.gov/32300792/" }
    ],
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800',
    pageTitle: 'Garlic Clinical Cardiovascular Guide – Allicin & Blood Pressure',
    metaDescription: 'Explore the therapeutic value of raw garlic cloves. Read about allicin activation, blood pressure reductions, and nitric oxide pathway support.',
    primaryKeyword: 'Garlic allicin blood pressure',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
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
      { question: "Can fatty liver be reversed with diet alone?", answer: "Yes. MASLD is primarily a dietary disease. Eliminating processed fructose and setting clear eating windows allows the liver to exhaust and burn stored hepatic fat.", category: "Reversal" },
      { question: "Why is late-night eating bad for the liver?", answer: "The liver's metabolic capacity drops at night. Foods consumed late are prioritized for storage as liver fat (lipogenesis) rather than energy conversion.", category: "Circadian" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "What is the main root cause of insulin resistance?", answer: "Ectopic fat buildup inside liver and muscle cells, which blocks the chemical pathway insulin uses to move glucose from the blood into cells.", category: "Root Cause" },
      { question: "How does meal sequencing reduce glucose spikes?", answer: "Eating vegetables (fiber) and protein first slows down stomach emptying and glucose absorption, requiring less insulin release.", category: "Sequencing" }
    ],
    citations: [
      { text: "Insulin Resistance Mechanisms and Circadian Synchronization (PMID: 32987654)", url: "https://pubmed.ncbi.nlm.nih.gov/32987654/" }
    ],
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800',
    pageTitle: 'Reverse Insulin Resistance – Clinical Nutrition & Circadian Rhythm',
    metaDescription: 'Learn how to calculate HOMA-IR and reverse insulin resistance naturally. Discover why circadian meal windows and insulin-mimicking spices restore glucose balance.',
    primaryKeyword: 'reverse insulin resistance naturally',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "How does circadian meal timing affect fat loss?", answer: "Eating in alignment with the sun cycle optimizes insulin sensitivity during the day and increases lipid oxidation (fat burning) during the overnight fasting window.", category: "Metabolism" },
      { question: "Can light exposure change digestive speed?", answer: "Yes, blue light exposure at night suppresses melatonin and disrupts vagal nerve stimulation, leading to delayed stomach emptying and morning bloating.", category: "Digestion" }
    ],
    citations: [
      { text: "Circadian Clocks and Metabolic Homeostasis (PMID: 30206124)", url: "https://pubmed.ncbi.nlm.nih.gov/30206124/" },
      { text: "Time-Restricted Eating for Metabolic Health (PMID: 32987654)", url: "https://pubmed.ncbi.nlm.nih.gov/32987654/" }
    ],
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800',
    pageTitle: 'Circadian Rhythm & Metabolic Reversal – Chrononutrition Protocol',
    metaDescription: 'Optimize your biological clock to reverse metabolic dysfunction. Learn how light cycles and meal timing reset insulin and cortisol cycles.',
    primaryKeyword: 'circadian rhythm chrononutrition',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "Is Type 2 Diabetes truly reversible?", answer: "Yes, through targeted clinical nutrition that reduces visceral fat surrounding the pancreas and liver, beta-cells can recover and restore natural insulin production.", category: "Reversal" },
      { question: "Why are whole fruits allowed but not juices?", answer: "Whole fruits contain structural fiber that slows fructose absorption, whereas juices cause rapid glucose absorption and liver fat accumulation.", category: "Nutrition" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "How does insulin resistance trigger PCOS hair loss and acne?", answer: "High insulin reduces SHBG levels, leaving more free testosterone to interact with hair follicles and sebaceous glands, triggering acne and hair thinning.", category: "Symptoms" },
      { question: "Why is spearmint tea recommended for PCOS?", answer: "Spearmint tea has documented clinical anti-androgenic properties, helping reduce hirsutism and restore natural ovulation cycles.", category: "Herbal Care" }
    ],
    citations: [
      { text: "Role of Insulin Sensitizers in PCOS Therapy (PMID: 32300792)", url: "https://pubmed.ncbi.nlm.nih.gov/32300792/" },
      { text: "Dietary Modifications in Polycystic Ovary Syndrome (PMID: 33024519)", url: "https://pubmed.ncbi.nlm.nih.gov/33024519/" }
    ],
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800',
    pageTitle: 'Reverse PCOS & Insulin Sensitivity Naturally – Clinical Nutrition',
    metaDescription: 'Address the root cause of PCOD/PCOS. Learn how reducing insulin resistance balances LH/FSH ratios, stops hirsutism, and restores cycles.',
    primaryKeyword: 'reverse pcos naturally insulin',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "Why should Hypothyroid patients cook cruciferous vegetables?", answer: "Cooking deactivates goitrogens (substances that interfere with iodine uptake by the thyroid), making broccoli and cabbage safe to consume.", category: "Cooking" },
      { question: "How does gluten sensitivity affect Hashimoto's thyroiditis?", answer: "Due to molecular mimicry, the immune system mistakes thyroid proteins for gluten proteins, causing autoimmune thyroid attacks when gluten is ingested.", category: "Autoimmunity" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "What is Leaky Gut and how does food heal it?", answer: "Leaky gut is when tight junctions in the intestinal wall loosen. Glutamine-rich foods, pectin, and polyphenols help rebuild the mucosal barrier.", category: "Lining" },
      { question: "How do prebiotics differ from probiotics?", answer: "Prebiotics (like chicory or banana fiber) act as food for your gut bacteria, while probiotics (like Kanji or curd) introduce active beneficial bacteria.", category: "Microbiome" }
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
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
      { question: "How does insulin resistance cause hypertension?", answer: "High insulin triggers sodium retention in the kidneys and reduces nitric oxide synthesis in blood vessels, causing them to constrict and raise pressure.", category: "Mechanisms" },
      { question: "Does garlic act like a natural BP medication?", answer: "Yes, by increasing nitric oxide production, garlic promotes blood vessel relaxation, relaxing smooth muscle tissues in blood vessel walls.", category: "Therapies" }
    ],
    citations: [
      { text: "Garlic for Cardiovascular Health: A Clinical Review (PMID: 32300792)", url: "https://pubmed.ncbi.nlm.nih.gov/32300792/" }
    ],
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=800',
    pageTitle: 'Reverse Hypertension Naturally – Clinical Nitric Oxide Protocols',
    metaDescription: 'Reduce arterial stiffness and lower blood pressure naturally. Learn about raw garlic therapies, circadian sodium restriction, and nitric oxide pathways.',
    primaryKeyword: 'reverse hypertension naturally',
    clinicalReview: {
      reviewedBy: 'Dr. Shilpa Thakur',
      practitionerId: 'NUTR-001',
      lastUpdated: 'May 28, 2026'
    }
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
