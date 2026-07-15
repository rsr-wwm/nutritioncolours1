// central slugify/cleanSlug helper
function cleanSlug(str: string): string {
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-');
}

export interface PillarInfo {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export const PILLARS: Record<string, PillarInfo> = {
  "diseases": {
    id: "diseases",
    name: "Diseases & Conditions",
    description: "Clinical protocols, root causes, and nutritional pathways for chronic diseases and metabolic conditions.",
    icon: "activity"
  },
  "foods": {
    id: "foods",
    name: "Foods & Macronutrients",
    description: "Macronutrient guides, eating patterns, and clinical allergen tracking databases.",
    icon: "utensils"
  },
  "herbs": {
    id: "herbs",
    name: "Herbs & Botanicals",
    description: "Traditional adaptogens, culinary seasonings, and phytotherapy dosing guidelines.",
    icon: "leaf"
  },
  "vegetables": {
    id: "vegetables",
    name: "Vegetables & Cole Crops",
    description: "Cruciferous brassicas, taproots, edible foliage, nightshades, and seasonal geophytes.",
    icon: "leaf"
  },
  "fruits": {
    id: "fruits",
    name: "Fruits & Berries",
    description: "Citrus hesperidia, Rosaceae stone fruits, aggregate berries, and tropical drupes.",
    icon: "heart"
  },
  "seeds": {
    id: "seeds",
    name: "Seeds & Ancient Grains",
    description: "Oleaginous oilseeds, pseudocereals, and gel-forming mucilaginous fiber sources.",
    icon: "plate"
  },
  "spices": {
    id: "spices",
    name: "Spices & Aromatic Pods",
    description: "Cortical rhizomes, pungent piperines, seminal seed spices, and precious stigmas.",
    icon: "flask"
  },
  "grains": {
    id: "grains",
    name: "Grains & Millets",
    description: "Cereal grasses, small millets, ancient farro, and wild aquatic pseudocereals.",
    icon: "plate"
  },
  "pulses-legumes": {
    id: "pulses-legumes",
    name: "Pulses & Legumes",
    description: "Whole lentils, split dals, chickpea crops, and subterranean pod oil legumes.",
    icon: "plate"
  },
  "dairy-alternatives": {
    id: "dairy-alternatives",
    name: "Dairy & Alternatives",
    description: "Lacteal emulsions, cultured ferments, casein coagulates, and plant-based substitutes.",
    icon: "plate"
  },
  "healthy-drinks-beverages": {
    id: "healthy-drinks-beverages",
    name: "Healthy Drinks & Beverages",
    description: "Camellia infusions, symbiotic cultured SCOBY tonics, and electrolyte hydration solutes.",
    icon: "coffee"
  },
  "functional-foods": {
    id: "functional-foods",
    name: "Functional Foods",
    description: "Foods studied for a specific physiological benefit beyond basic nutrition — fiber, prebiotic, antioxidant, and cardioprotective food sources.",
    icon: "flask"
  },
  "fermented-foods": {
    id: "fermented-foods",
    name: "Fermented Foods",
    description: "Microbially cultured dairy, vegetable, soy, grain, and beverage ferments and their probiotic and safety profile.",
    icon: "flask"
  },
  "oils-healthy-fats": {
    id: "oils-healthy-fats",
    name: "Oils & Healthy Fats",
    description: "Culinary and specialty plant oils, smoke points, extraction methods, and essential fatty acid sources.",
    icon: "plate"
  },
  "nutrient-database": {
    id: "nutrient-database",
    name: "Nutrient Database",
    description: "Macronutrient reference data — protein, carbohydrate, fat, and energy composition by food category.",
    icon: "activity"
  },
  "vitamins": {
    id: "vitamins",
    name: "Vitamins",
    description: "Fat-soluble and water-soluble vitamins — food sources, RDA/UL, deficiency, and toxicity reference.",
    icon: "activity"
  },
  "minerals": {
    id: "minerals",
    name: "Minerals",
    description: "Macrominerals, trace elements, and electrolytes — food sources, RDA/UL, and interactions.",
    icon: "activity"
  },
  "phytonutrients": {
    id: "phytonutrients",
    name: "Phytonutrients",
    description: "Polyphenols, carotenoids, glucosinolates, and other plant bioactives studied for health effects.",
    icon: "leaf"
  },
  "bioactive-compounds": {
    id: "bioactive-compounds",
    name: "Bioactive Compounds",
    description: "Peptides, prebiotics, phytosterols, and other non-nutrient food compounds with physiological activity.",
    icon: "flask"
  },
  "organ-wise": {
    id: "organ-wise",
    name: "Organ-Wise Knowledge",
    description: "Nutrition and physiology organized by body system — cardiovascular, digestive, nervous, endocrine, and more.",
    icon: "heart"
  },
  "life-stage": {
    id: "life-stage",
    name: "Life-Stage Nutrition",
    description: "Nutritional needs across the lifespan — pregnancy, infancy, childhood, adulthood, and aging.",
    icon: "activity"
  }
};

export interface TaxonomyDetails {
  mainCategory: {
    slug: string;
    name: string;
  };
  category: {
    slug: string;
    name: string;
    techName?: string;
  };
  subCategory: {
    slug: string;
    name: string;
    commonName?: string;
  };
  articleSlug: string;
  canonicalUrl: string;
}

// Maps subcategory folder name or frontmatter subCategory to canonical details
export function getTaxonomyDetails(entry: { id: string; data: { category: string; subCategory?: string; title: string } }): TaxonomyDetails {
  // Parts on disk path: e.g. "Kidney Diseases/Chronic Kidney Disease/ckd-stage-1"
  const parts = entry.id.split('/');
  const diskCat = parts[0] || entry.data.category;
  const diskSub = parts[1] || entry.data.subCategory || "General";
  const diskFile = parts[parts.length - 1];

  let mainCatSlug = "foods";
  let catName = diskCat;
  let catSlug = cleanSlug(diskCat);
  let catTechName = "";
  let subCatName = diskSub;
  let subCatSlug = cleanSlug(diskSub);
  let subCatCommonName = "";

  const lowercaseCat = diskCat.toLowerCase();
  const lowercaseSub = diskSub.toLowerCase();

  // --- 1. DISEASES PILLAR ---
  if (
    lowercaseCat.includes("kidney") || 
    lowercaseCat.includes("nephropath") ||
    lowercaseCat.includes("cardiovascular") ||
    lowercaseCat.includes("heart") ||
    lowercaseCat.includes("liver") ||
    lowercaseCat.includes("hepatology") ||
    lowercaseCat.includes("respiratory") ||
    lowercaseCat.includes("lung") ||
    lowercaseCat.includes("neurological") ||
    lowercaseCat.includes("brain") ||
    lowercaseCat.includes("gastro") ||
    lowercaseCat.includes("digestive") ||
    lowercaseCat.includes("endocrine") ||
    lowercaseCat.includes("thyroid") ||
    lowercaseCat.includes("blood") ||
    lowercaseCat.includes("hematolog") ||
    lowercaseCat.includes("infectious") ||
    lowercaseCat.includes("infection") ||
    lowercaseCat.includes("autoimmune") ||
    lowercaseCat.includes("rheumatolog") ||
    lowercaseCat.includes("malignant") ||
    lowercaseCat.includes("cancer") ||
    lowercaseCat.includes("diseases") ||
    lowercaseCat.includes("conditions")
  ) {
    mainCatSlug = "diseases";

    if (lowercaseCat.includes("kidney") || lowercaseCat.includes("nephropath")) {
      catName = "Kidney Diseases";
      catSlug = "kidney-diseases";
      catTechName = "Nephropathy";
      if (lowercaseSub.includes("chronic")) {
        subCatName = "Chronic Kidney Disease";
        subCatSlug = "chronic-kidney-disease";
        subCatCommonName = "CKD / Long-term Kidney Failure";
      } else if (lowercaseSub.includes("acute")) {
        subCatName = "Acute Kidney Injury";
        subCatSlug = "acute-kidney-injury";
        subCatCommonName = "AKI / Acute Renal Failure";
      } else if (lowercaseSub.includes("lithiasis") || lowercaseSub.includes("stone")) {
        subCatName = "Nephrolithiasis";
        subCatSlug = "nephrolithiasis";
        subCatCommonName = "Kidney Stones";
      } else if (lowercaseSub.includes("polycystic")) {
        subCatName = "Polycystic Kidney Disease";
        subCatSlug = "polycystic-kidney-disease";
        subCatCommonName = "ADPKD & ARPKD";
      } else if (lowercaseSub.includes("glomerular")) {
        subCatName = "Glomerular Diseases";
        subCatSlug = "glomerular-diseases";
        subCatCommonName = "Glomerulonephritis & Nephrotic/Nephritic";
      } else if (lowercaseSub.includes("diabetic")) {
        subCatName = "Diabetic Kidney Disease";
        subCatSlug = "diabetic-kidney-disease";
        subCatCommonName = "DKD / Diabetic Nephropathy";
      } else if (lowercaseSub.includes("hypertensive")) {
        subCatName = "Hypertensive Nephrosclerosis";
        subCatSlug = "hypertensive-nephrosclerosis";
        subCatCommonName = "Hypertensive Kidney Disease";
      } else if (lowercaseSub.includes("urinary") || lowercaseSub.includes("uti")) {
        subCatName = "Urinary Tract Infections";
        subCatSlug = "urinary-tract-infections";
        subCatCommonName = "UTI & Cystitis/Pyelonephritis";
      } else if (lowercaseSub.includes("tubular")) {
        subCatName = "Renal Tubular Disorders";
        subCatSlug = "renal-tubular-disorders";
        subCatCommonName = "RTA, Fanconi & Bartter";
      } else if (lowercaseSub.includes("inherited") || lowercaseSub.includes("rare")) {
        subCatName = "Inherited & Rare Kidney Diseases";
        subCatSlug = "inherited-rare-kidney-diseases";
        subCatCommonName = "Alport, Thin Basement & Fabry";
      } else if (lowercaseSub.includes("cancer")) {
        subCatName = "Kidney Cancer";
        subCatSlug = "kidney-cancer";
        subCatCommonName = "Renal Cell Carcinoma (RCC)";
      } else if (lowercaseSub.includes("end-stage") || lowercaseSub.includes("eskd") || lowercaseSub.includes("esrd")) {
        subCatName = "End-Stage Kidney Disease";
        subCatSlug = "end-stage-kidney-disease";
        subCatCommonName = "ESKD / ESRD";
      }
    } else if (lowercaseCat.includes("cardiovascular") || lowercaseCat.includes("heart")) {
      catName = "Cardiovascular Disease";
      catSlug = "cardiovascular-disease";
      catTechName = "Cardiovascular Disease";
      if (lowercaseSub.includes("coronary") || lowercaseSub.includes("cad")) {
        subCatName = "Coronary Artery Disease";
        subCatSlug = "coronary-artery-disease";
        subCatCommonName = "CAD / Ischemic Heart Disease";
      } else if (lowercaseSub.includes("arrhythmia") || lowercaseSub.includes("arr-")) {
        subCatName = "Cardiac Arrhythmias";
        subCatSlug = "cardiac-arrhythmias";
        subCatCommonName = "Irregular Heartbeats / AFib";
      } else if (lowercaseSub.includes("failure")) {
        subCatName = "Heart Failure";
        subCatSlug = "heart-failure";
        subCatCommonName = "Congestive Heart Failure (CHF)";
      } else if (lowercaseSub.includes("valvular") || lowercaseSub.includes("valve")) {
        subCatName = "Valvular Heart Disease";
        subCatSlug = "valvular-heart-disease";
        subCatCommonName = "Aortic Stenosis & Mitral Repair";
      } else if (lowercaseSub.includes("hypertension") || lowercaseSub.includes("htn")) {
        subCatName = "Hypertension";
        subCatSlug = "hypertension";
        subCatCommonName = "High Blood Pressure";
      } else if (lowercaseSub.includes("cardiomyopath") || lowercaseSub.includes("cmp")) {
        subCatName = "Cardiomyopathies";
        subCatSlug = "cardiomyopathies";
        subCatCommonName = "HCM & Dilated Cardiomyopathy";
      } else if (lowercaseSub.includes("peripheral") || lowercaseSub.includes("pad")) {
        subCatName = "Peripheral Artery Disease";
        subCatSlug = "peripheral-artery-disease";
        subCatCommonName = "Claudication & Limb Ischemia";
      } else if (lowercaseSub.includes("aortic") || lowercaseSub.includes("aorta")) {
        subCatName = "Aortic Disease";
        subCatSlug = "aortic-disease";
        subCatCommonName = "Aneurysm & Dissection";
      } else if (lowercaseSub.includes("congenital") || lowercaseSub.includes("chd")) {
        subCatName = "Congenital Heart Disease";
        subCatSlug = "congenital-heart-disease";
        subCatCommonName = "ASD, VSD & Tetralogy of Fallot";
      } else if (lowercaseSub.includes("pericardial") || lowercaseSub.includes("peri")) {
        subCatName = "Pericardial Diseases";
        subCatSlug = "pericardial-diseases";
        subCatCommonName = "Pericarditis & Cardiac Tamponade";
      }
    } else if (lowercaseCat.includes("liver") || lowercaseCat.includes("hepatology")) {
      catName = "Liver Disease";
      catSlug = "liver-disease";
      catTechName = "Hepatology";
      if (lowercaseSub.includes("viral") || lowercaseSub.includes("hep")) {
        subCatName = "Viral Hepatitis";
        subCatSlug = "viral-hepatitis";
        subCatCommonName = "Chronic HBV & HCV";
      } else if (lowercaseSub.includes("nafld") || lowercaseSub.includes("masld")) {
        subCatName = "NAFLD-MASLD";
        subCatSlug = "nafld-masld";
        subCatCommonName = "Fatty Liver & NASH";
      } else if (lowercaseSub.includes("alcohol") || lowercaseSub.includes("ald")) {
        subCatName = "Alcohol-Related Liver Disease";
        subCatSlug = "alcohol-related-liver-disease";
        subCatCommonName = "Alcoholic Cirrhosis & Withdrawal";
      } else if (lowercaseSub.includes("cirrhosis") || lowercaseSub.includes("portal") || lowercaseSub.includes("cirr")) {
        subCatName = "Cirrhosis & Portal Hypertension";
        subCatSlug = "cirrhosis-portal-hypertension";
        subCatCommonName = "Ascites & Encephalopathy";
      } else if (lowercaseSub.includes("autoimmune")) {
        subCatName = "Autoimmune Liver Disease";
        subCatSlug = "autoimmune-liver-disease";
        subCatCommonName = "Autoimmune Hepatitis & PBC/PSC";
      } else if (lowercaseSub.includes("cancer") || lowercaseSub.includes("hcc")) {
        subCatName = "Liver Cancer";
        subCatSlug = "liver-cancer";
        subCatCommonName = "Hepatocellular Carcinoma";
      } else if (lowercaseSub.includes("acute") || lowercaseSub.includes("failure") || lowercaseSub.includes("alf")) {
        subCatName = "Acute Liver Failure";
        subCatSlug = "acute-liver-failure";
        subCatCommonName = "Paracetamol Overdose";
      } else if (lowercaseSub.includes("genetic") || lowercaseSub.includes("metabolic") || lowercaseSub.includes("gen-liver")) {
        subCatName = "Genetic & Metabolic Liver Diseases";
        subCatSlug = "genetic-metabolic-liver-diseases";
        subCatCommonName = "Wilson's & Hemochromatosis";
      }
    } else if (lowercaseCat.includes("respiratory") || lowercaseCat.includes("lung")) {
      catName = "Respiratory Diseases";
      catSlug = "respiratory-diseases";
      catTechName = "Respiratory Diseases";
      if (lowercaseSub.includes("obstructive") || lowercaseSub.includes("copd")) {
        subCatName = "Chronic Obstructive Pulmonary";
        subCatSlug = "chronic-obstructive-pulmonary";
        subCatCommonName = "COPD";
      } else if (lowercaseSub.includes("reactive") || lowercaseSub.includes("asthma") || lowercaseSub.includes("asth-")) {
        subCatName = "Reactive Airway Disease";
        subCatSlug = "reactive-airway-disease";
        subCatCommonName = "Asthma";
      } else if (lowercaseSub.includes("interstitial") || lowercaseSub.includes("ild") || lowercaseSub.includes("fibrosis")) {
        subCatName = "Interstitial Lung Disease";
        subCatSlug = "interstitial-lung-disease";
        subCatCommonName = "Pulmonary Fibrosis";
      } else if (lowercaseSub.includes("cancer") || lowercaseSub.includes("lca")) {
        subCatName = "Lung Cancer";
        subCatSlug = "lung-cancer";
        subCatCommonName = "NSCLC & SCLC Cancers";
      } else if (lowercaseSub.includes("pneumonia") || lowercaseSub.includes("pneu")) {
        subCatName = "Pneumonia";
        subCatSlug = "pneumonia";
        subCatCommonName = "CAP & Hospital Pneumonia";
      } else if (lowercaseSub.includes("embolism") || lowercaseSub.includes("dvt") || lowercaseSub.includes("vte")) {
        subCatName = "Pulmonary Embolism & DVT";
        subCatSlug = "pulmonary-embolism-dvt";
        subCatCommonName = "Blood Clots & DVT";
      } else if (lowercaseSub.includes("tuberculosis") || lowercaseSub.includes("tb-")) {
        subCatName = "Tuberculosis";
        subCatSlug = "tuberculosis";
        subCatCommonName = "Active, Latent & Drug-Resistant TB";
      } else if (lowercaseSub.includes("sleep") || lowercaseSub.includes("apnea") || lowercaseSub.includes("sleep-resp")) {
        subCatName = "Sleep-Related Breathing Disorders";
        subCatSlug = "sleep-related-breathing-disorders";
        subCatCommonName = "Sleep Apnea (OSA)";
      } else if (lowercaseSub.includes("cystic") || lowercaseSub.includes("cf-")) {
        subCatName = "Cystic Fibrosis";
        subCatSlug = "cystic-fibrosis";
        subCatCommonName = "CFTR Gene Mutations";
      } else if (lowercaseSub.includes("infection")) {
        subCatName = "Respiratory Infections";
        subCatSlug = "respiratory-infections";
        subCatCommonName = "Lung Infections";
      }
    } else if (lowercaseCat.includes("neurological") || lowercaseCat.includes("brain")) {
      catName = "Neurological Disorders";
      catSlug = "neurological-disorders";
      catTechName = "Neurological Disorders";
      if (lowercaseSub.includes("degenerative") || lowercaseSub.includes("dem-") || lowercaseSub.includes("alzheimer")) {
        subCatName = "Neurodegenerative Diseases";
        subCatSlug = "neurodegenerative-diseases";
        subCatCommonName = "Alzheimer's & Dementia";
      } else if (lowercaseSub.includes("vascular") || lowercaseSub.includes("stroke")) {
        subCatName = "Cerebrovascular Diseases";
        subCatSlug = "cerebrovascular-diseases";
        subCatCommonName = "Stroke & Aneurysms";
      } else if (lowercaseSub.includes("seizure") || lowercaseSub.includes("epilepsy") || lowercaseSub.includes("epi-")) {
        subCatName = "Seizure Disorders";
        subCatSlug = "seizure-disorders";
        subCatCommonName = "Epilepsy";
      } else if (lowercaseSub.includes("parkinson") || lowercaseSub.includes("pd-")) {
        subCatName = "Parkinsons Disease";
        subCatSlug = "parkinsons-disease";
        subCatCommonName = "Parkinson's Disease";
      } else if (lowercaseSub.includes("multiple") || lowercaseSub.includes("ms-")) {
        subCatName = "Multiple Sclerosis";
        subCatSlug = "multiple-sclerosis";
        subCatCommonName = "MS & Relapsing/Progressive";
      } else if (lowercaseSub.includes("migraine") || lowercaseSub.includes("headache") || lowercaseSub.includes("mig-")) {
        subCatName = "Migraine & Headache";
        subCatSlug = "migraine-headache";
        subCatCommonName = "Migraine & Headache Disorders";
      } else if (lowercaseSub.includes("neuropath") || lowercaseSub.includes("neuro-")) {
        subCatName = "Neuropathies";
        subCatSlug = "neuropathies";
        subCatCommonName = "Peripheral & Diabetic Neuropathies";
      } else if (lowercaseSub.includes("motor") || lowercaseSub.includes("neuron") || lowercaseSub.includes("mnd-")) {
        subCatName = "Motor Neuron Disease";
        subCatSlug = "motor-neuron-disease";
        subCatCommonName = "ALS (Amyotrophic Lateral Sclerosis)";
      } else if (lowercaseSub.includes("tumor") || lowercaseSub.includes("cancer") || lowercaseSub.includes("bt-")) {
        subCatName = "Brain Tumors";
        subCatSlug = "brain-tumors";
        subCatCommonName = "Glioblastoma & Meningioma";
      }
    } else if (lowercaseCat.includes("gastro") || lowercaseCat.includes("digestive")) {
      catName = "Gastrointestinal Disease";
      catSlug = "gastrointestinal-disease";
      catTechName = "Gastroenterology";
      if (lowercaseSub.includes("inflammatory") || lowercaseSub.includes("ibd")) {
        subCatName = "Inflammatory Bowel Disease";
        subCatSlug = "inflammatory-bowel-disease";
        subCatCommonName = "Crohn's & Ulcerative Colitis";
      } else if (lowercaseSub.includes("irritable") || lowercaseSub.includes("ibs")) {
        subCatName = "Irritable Bowel Syndrome";
        subCatSlug = "irritable-bowel-syndrome";
        subCatCommonName = "IBS & Low-FODMAP Diet";
      } else if (lowercaseSub.includes("gerd") || lowercaseSub.includes("reflux")) {
        subCatName = "GERD";
        subCatSlug = "gerd";
        subCatCommonName = "Acid Reflux & Barrett's Esophagus";
      } else if (lowercaseSub.includes("peptic") || lowercaseSub.includes("ulcer") || lowercaseSub.includes("pud")) {
        subCatName = "Peptic Ulcer Disease";
        subCatSlug = "peptic-ulcer-disease";
        subCatCommonName = "H. pylori & NSAID Ulcers";
      } else if (lowercaseSub.includes("celiac") || lowercaseSub.includes("cel-")) {
        subCatName = "Celiac Disease";
        subCatSlug = "celiac-disease";
        subCatCommonName = "Gluten-Free Diet & Celiac";
      } else if (lowercaseSub.includes("pancreatic") || lowercaseSub.includes("pan-")) {
        subCatName = "Pancreatic Disease";
        subCatSlug = "pancreatic-disease";
        subCatCommonName = "Pancreatitis & Pancreatic Cancer";
      } else if (lowercaseSub.includes("colorectal") || lowercaseSub.includes("colon") || lowercaseSub.includes("crc-")) {
        subCatName = "Colorectal Cancer";
        subCatSlug = "colorectal-cancer";
        subCatCommonName = "Colon Cancer & Polyps";
      } else if (lowercaseSub.includes("gallbladder") || lowercaseSub.includes("bili-")) {
        subCatName = "Gallbladder & Biliary Disease";
        subCatSlug = "gallbladder-biliary-disease";
        subCatCommonName = "Gallstones & Cholecystitis";
      }
    } else if (lowercaseCat.includes("endocrine") || lowercaseCat.includes("hormone") || lowercaseCat.includes("topics/metabolic")) {
      catName = "Endocrine Disorders";
      catSlug = "endocrine-disorders";
      catTechName = "Endocrine Disorders";
      if (lowercaseSub.includes("diabetes") || lowercaseSub.includes("mellitus") || lowercaseSub.includes("dm-")) {
        subCatName = "Diabetes Mellitus";
        subCatSlug = "diabetes-mellitus";
        subCatCommonName = "High Blood Sugar / Diabetes";
      } else if (lowercaseSub.includes("thyroid") || lowercaseSub.includes("thy-")) {
        subCatName = "Thyroid Disorders";
        subCatSlug = "thyroid-disorders";
        subCatCommonName = "Thyroid Diseases";
      } else if (lowercaseSub.includes("adrenal") || lowercaseSub.includes("adr-")) {
        subCatName = "Adrenal Gland Disorders";
        subCatSlug = "adrenal-gland-disorders";
        subCatCommonName = "Adrenal Diseases";
      } else if (lowercaseSub.includes("pituitary") || lowercaseSub.includes("pit-")) {
        subCatName = "Pituitary Disorders";
        subCatSlug = "pituitary-disorders";
        subCatCommonName = "Pituitary Adenomas";
      } else if (lowercaseSub.includes("obesity") || lowercaseSub.includes("weight") || lowercaseSub.includes("ob-")) {
        subCatName = "Obesity & Metabolic Syndrome";
        subCatSlug = "obesity-metabolic-syndrome";
        subCatCommonName = "Obesity & Weight Loss";
      } else if (lowercaseSub.includes("osteoporosis") || lowercaseSub.includes("ost-")) {
        subCatName = "Osteoporosis";
        subCatSlug = "osteoporosis";
        subCatCommonName = "DXA Scan & Bone Health";
      }
    } else if (lowercaseCat.includes("blood") || lowercaseCat.includes("hematolog")) {
      catName = "Blood Disease";
      catSlug = "blood-disease";
      catTechName = "Hematology";
      if (lowercaseSub.includes("anemia") || lowercaseSub.includes("anem-")) {
        subCatName = "Anemia";
        subCatSlug = "anemia";
        subCatCommonName = "Iron, B12 & Hemolytic Anemia";
      } else if (lowercaseSub.includes("coagulation") || lowercaseSub.includes("coag-")) {
        subCatName = "Coagulation Disorders";
        subCatSlug = "coagulation-disorders";
        subCatCommonName = "Hemophilia & Platelet Disorders";
      } else if (lowercaseSub.includes("leukemia") || lowercaseSub.includes("leuk-")) {
        subCatName = "Leukemia";
        subCatSlug = "leukemia";
        subCatCommonName = "Acute & Chronic Leukemia (AML/ALL)";
      } else if (lowercaseSub.includes("lymphoma") || lowercaseSub.includes("lym-")) {
        subCatName = "Lymphoma";
        subCatSlug = "lymphoma";
        subCatCommonName = "Hodgkin & Non-Hodgkin Lymphoma";
      } else if (lowercaseSub.includes("myeloma") || lowercaseSub.includes("mm-")) {
        subCatName = "Multiple Myeloma";
        subCatSlug = "multiple-myeloma";
        subCatCommonName = "Multiple Myeloma";
      } else if (lowercaseSub.includes("myeloproliferative") || lowercaseSub.includes("mpn-")) {
        subCatName = "Myeloproliferative Neoplasms";
        subCatSlug = "myeloproliferative-neoplasms";
        subCatCommonName = "Polycythemia Vera & Myelofibrosis";
      }
    } else if (lowercaseCat.includes("infectious") || lowercaseCat.includes("infection")) {
      catName = "Infectious Disease";
      catSlug = "infectious-disease";
      catTechName = "Infectious Disease";
      if (lowercaseSub.includes("hiv") || lowercaseSub.includes("arts-")) {
        subCatName = "HIV-AIDS";
        subCatSlug = "hiv-aids";
        subCatCommonName = "HIV, Testing & ART Therapies";
      } else if (lowercaseSub.includes("sepsis")) {
        subCatName = "Sepsis";
        subCatSlug = "sepsis";
        subCatCommonName = "Sepsis & Septic Shock";
      } else if (lowercaseSub.includes("meningitis") || lowercaseSub.includes("men-")) {
        subCatName = "Meningitis";
        subCatSlug = "meningitis";
        subCatCommonName = "Meningitis & Encephalitis";
      } else if (lowercaseSub.includes("malaria") || lowercaseSub.includes("tropical") || lowercaseSub.includes("trop-")) {
        subCatName = "Malaria & Tropical Diseases";
        subCatSlug = "malaria-tropical-diseases";
        subCatCommonName = "Malaria, Dengue & Zika";
      } else if (lowercaseSub.includes("covid")) {
        subCatName = "COVID-19";
        subCatSlug = "covid-19";
        subCatCommonName = "COVID-19 Variants & Long COVID";
      }
    } else if (lowercaseCat.includes("autoimmune") || lowercaseCat.includes("rheumatolog")) {
      catName = "Autoimmune Disease";
      catSlug = "autoimmune-disease";
      catTechName = "Autoimmune Disease";
      if (lowercaseSub.includes("rheumatoid") || lowercaseSub.includes("ra-")) {
        subCatName = "Rheumatoid Arthritis";
        subCatSlug = "rheumatoid-arthritis";
        subCatCommonName = "Synovitis, RF, Anti-CCP & DMARDs";
      } else if (lowercaseSub.includes("lupus") || lowercaseSub.includes("sle-")) {
        subCatName = "Lupus";
        subCatSlug = "lupus";
        subCatCommonName = "Systemic Lupus Erythematosus (SLE)";
      }
    } else if (lowercaseCat.includes("malignant") || lowercaseCat.includes("cancer") || lowercaseCat.includes("neoplasm")) {
      catName = "Malignant Neoplasms";
      catSlug = "malignant-neoplasms";
      catTechName = "Cancers";
      if (lowercaseSub.includes("breast")) {
        subCatName = "Breast Cancers";
        subCatSlug = "breast-cancers";
        subCatCommonName = "Breast Tumors";
      } else if (lowercaseSub.includes("pulmonary") || lowercaseSub.includes("lung")) {
        subCatName = "Subtotal Pulmonary Neoplasms";
        subCatSlug = "pulmonary-neoplasms";
        subCatCommonName = "Lung Cancers";
      } else if (lowercaseSub.includes("hematologic") || lowercaseSub.includes("blood")) {
        subCatName = "Hematologic Malignancies";
        subCatSlug = "hematologic-malignancies";
        subCatCommonName = "Blood Cancers";
      }
    } else {
      // General fallbacks
      catName = "Health Conditions";
      catSlug = "health-conditions";
    }
  }

  // --- 2. VEGETABLES PILLAR ---
  else if (lowercaseCat.includes("vegetable") || lowercaseCat.includes("brassicaceae") || lowercaseCat.includes("edible foliage") || lowercaseCat.includes("botanical fruits")) {
    mainCatSlug = "vegetables";
    if (lowercaseSub.includes("true root") || lowercaseSub.includes("tuberous") || lowercaseSub.includes("root")) {
      catName = "Root & Tuber Vegetables";
      catSlug = "root-tuber-vegetables";
      catTechName = "Geophytes";
      subCatName = lowercaseSub.includes("tuberous") ? "Tuberous Vegetables" : "True Root Vegetables";
      subCatSlug = lowercaseSub.includes("tuberous") ? "tuberous-vegetables" : "true-root-vegetables";
      subCatCommonName = lowercaseSub.includes("tuberous") ? "Tubers" : "Taproots";
    } else if (lowercaseSub.includes("flowering") || lowercaseSub.includes("leafy & heading") || lowercaseSub.includes("cruciferous")) {
      catName = "Cruciferous Vegetables";
      catSlug = "cruciferous-vegetables";
      catTechName = "Brassicaceae";
      subCatName = lowercaseSub.includes("flowering") ? "Flowering Brassicas" : "Leafy & Heading Brassicas";
      subCatSlug = lowercaseSub.includes("flowering") ? "flowering-brassicas" : "leafy-heading-brassicas";
      subCatCommonName = lowercaseSub.includes("flowering") ? "Inflorescence Vegetables" : "Cabbages & Greens";
    } else if (lowercaseSub.includes("amaranthaceae") || lowercaseSub.includes("asteraceae") || lowercaseSub.includes("foliage") || lowercaseSub.includes("leafy")) {
      catName = "Leafy Green Vegetables";
      catSlug = "leafy-green-vegetables";
      catTechName = "Edible Foliage";
      subCatName = lowercaseSub.includes("amaranthaceae") ? "Amaranthaceae Greens" : "Asteraceae Greens";
      subCatSlug = lowercaseSub.includes("amaranthaceae") ? "amaranthaceae-greens" : "asteraceae-greens";
      subCatCommonName = lowercaseSub.includes("amaranthaceae") ? "Spinach & Chard" : "Lettuces";
    } else if (lowercaseSub.includes("solanaceae") || lowercaseSub.includes("cucurbitaceae") || lowercaseSub.includes("nightshade")) {
      catName = "Fruiting Vegetables";
      catSlug = "fruiting-vegetables";
      catTechName = "Botanical Fruits";
      subCatName = lowercaseSub.includes("solanaceae") ? "Solanaceae Crops" : "Cucurbitaceae Crops";
      subCatSlug = lowercaseSub.includes("solanaceae") ? "solanaceae-crops" : "cucurbitaceae-crops";
      subCatCommonName = lowercaseSub.includes("solanaceae") ? "Nightshades" : "Gourds & Squashes";
    } else if (lowercaseSub.includes("bulb") || lowercaseSub.includes("stem") || lowercaseSub.includes("shoots")) {
      catName = "Bulb & Stem Vegetables";
      catSlug = "bulb-stem-vegetables";
      catTechName = "Bulbs, Stems & Shoots";
      subCatName = lowercaseSub.includes("bulb") ? "Edible Bulbs" : "Edible Stems & Shoots";
      subCatSlug = lowercaseSub.includes("bulb") ? "edible-bulbs" : "edible-stems-shoots";
      subCatCommonName = lowercaseSub.includes("bulb") ? "Onion Family (Vegetative)" : "Stalk Vegetables";
    } else {
      catName = "General Vegetables";
      catSlug = "general-vegetables";
    }
  }

  // --- 3. FRUITS PILLAR ---
  else if (lowercaseCat.includes("fruit") || lowercaseCat.includes("hesperidia") || lowercaseCat.includes("soft fruits") || lowercaseCat.includes("tropical")) {
    mainCatSlug = "fruits";
    if (lowercaseSub.includes("pome") || lowercaseSub.includes("drupe") || lowercaseSub.includes("stone")) {
      catName = "Pome & Stone Fruits";
      catSlug = "pome-stone-fruits";
      catTechName = "Rosaceae Fruits";
      subCatName = lowercaseSub.includes("pomaceous") ? "Pomaceous Fruits" : "Drupes";
      subCatSlug = lowercaseSub.includes("pomaceous") ? "pomaceous-fruits" : "drupes";
      subCatCommonName = lowercaseSub.includes("pomaceous") ? "Core Fruits" : "Stone Fruits";
    } else if (lowercaseSub.includes("citrus") || lowercaseSub.includes("acidic") || lowercaseSub.includes("sweet")) {
      catName = "Citrus Fruits";
      catSlug = "citrus-fruits";
      catTechName = "Hesperidia";
      subCatName = lowercaseSub.includes("acidic") ? "Acidic Citrus" : "Sweet Citrus";
      subCatSlug = lowercaseSub.includes("acidic") ? "acidic-citrus" : "sweet-citrus";
      subCatCommonName = lowercaseSub.includes("acidic") ? "Sour Citrus" : "Table Citrus";
    } else if (lowercaseSub.includes("berry") || lowercaseSub.includes("aggregate") || lowercaseSub.includes("soft")) {
      catName = "Berries & Aggregate Fruits";
      catSlug = "berries-aggregate-fruits";
      catTechName = "Soft Fruits";
      subCatName = lowercaseSub.includes("botanical") || lowercaseSub.includes("true") ? "True Botanical Berries" : "Aggregate Fruits";
      subCatSlug = lowercaseSub.includes("botanical") || lowercaseSub.includes("true") ? "true-botanical-berries" : "aggregate-fruits";
      subCatCommonName = lowercaseSub.includes("botanical") || lowercaseSub.includes("true") ? "Simple Fleshy Fruits" : "Caneberries & Brambles";
    } else if (lowercaseSub.includes("tropical") || lowercaseSub.includes("exotic")) {
      catName = "Tropical & Exotic Fruits";
      catSlug = "tropical-exotic-fruits";
      catTechName = "Tropical Drupes & Berries";
      subCatName = lowercaseSub.includes("high-moisture") ? "High-Moisture Tropicals" : "Creamy & Dense Tropicals";
      subCatSlug = lowercaseSub.includes("high-moisture") ? "high-moisture-tropicals" : "creamy-dense-tropicals";
      subCatCommonName = lowercaseSub.includes("high-moisture") ? "Fleshy Tropical Fruits" : "Rich Tropical Fruits";
    } else if (lowercaseSub.includes("melon") || lowercaseSub.includes("pepo")) {
      catName = "Melons";
      catSlug = "melons";
      catTechName = "Pepos";
      subCatName = lowercaseSub.includes("watermelon") ? "Watermelons" : "Muskmelons";
      subCatSlug = lowercaseSub.includes("watermelon") ? "watermelons" : "muskmelons";
      subCatCommonName = lowercaseSub.includes("watermelon") ? "High-Lycopene Melons" : "Reticulated / Rind Melons";
    } else {
      catName = "General Fruits";
      catSlug = "general-fruits";
    }
  }

  // --- 4. HERBS PILLAR ---
  else if (lowercaseCat.includes("culinary herbs") || lowercaseCat.includes("medicinal herbs") || lowercaseCat.includes("adaptogen") || lowercaseCat.includes("herbs")) {
    mainCatSlug = "herbs";
    if (lowercaseCat.includes("culinary")) {
      catName = "Culinary Herbs";
      catSlug = "culinary-herbs";
      catTechName = "Gastronomy";
      if (lowercaseSub.includes("lamiaceae")) {
        subCatName = "Lamiaceae Botanicals";
        subCatSlug = "lamiaceae-botanicals";
        subCatCommonName = "Mint Family Herbs";
      } else if (lowercaseSub.includes("apiaceae")) {
        subCatName = "Apiaceae Botanicals";
        subCatSlug = "apiaceae-botanicals";
        subCatCommonName = "Parsley Family Herbs";
      } else {
        subCatName = "Amaryllidaceae Botanicals";
        subCatSlug = "amaryllidaceae-botanicals";
        subCatCommonName = "Onion Family Herbs";
      }
    } else if (lowercaseCat.includes("medicinal") || lowercaseCat.includes("herbs")) {
      catName = "Medicinal Herbs";
      catSlug = "medicinal-herbs";
      catTechName = "Phytotherapy";
      if (lowercaseSub.includes("inflammatory")) {
        subCatName = "Anti-Inflammatory Botanicals";
        subCatSlug = "anti-inflammatory-botanicals";
        subCatCommonName = "Inflammation Relievers";
      } else if (lowercaseSub.includes("nervine") || lowercaseSub.includes("sedative")) {
        subCatName = "Nervines & Sedatives";
        subCatSlug = "nervines-sedatives";
        subCatCommonName = "Calming / Sleep Herbs";
      } else {
        subCatName = "Immunomodulators";
        subCatSlug = "immunomodulators";
        subCatCommonName = "Immune-Boosting Herbs";
      }
    } else {
      catName = "Adaptogens";
      catSlug = "adaptogenic-botanicals";
      catTechName = "Stress Resistance";
      if (lowercaseSub.includes("ayurvedic")) {
        subCatName = "Ayurvedic Adaptogens";
        subCatSlug = "ayurvedic-adaptogens";
        subCatCommonName = "Traditional Indian Herbs";
      } else if (lowercaseSub.includes("tcm")) {
        subCatName = "TCM Adaptogens";
        subCatSlug = "tcm-adaptogens";
        subCatCommonName = "Traditional Chinese Medicine Herbs";
      } else {
        subCatName = "Boreal & Alpine Adaptogens";
        subCatSlug = "boreal-alpine-adaptogens";
        subCatCommonName = "Cold-Climate Botanicals";
      }
    }
  }

  // --- 5. SEEDS PILLAR ---
  else if (lowercaseCat.includes("seeds") || lowercaseCat.includes("oleaginous") || lowercaseCat.includes("pseudocereals & gels")) {
    mainCatSlug = "seeds";
    if (lowercaseSub.includes("asteraceae") || lowercaseSub.includes("pedaliaceae") || lowercaseSub.includes("linaceae") || lowercaseSub.includes("oilseeds")) {
      catName = "Oilseeds";
      catSlug = "oilseeds";
      catTechName = "Oleaginous Seeds";
      if (lowercaseSub.includes("asteraceae")) {
        subCatName = "Asteraceae & Brassicaceae Oilseeds";
        subCatSlug = "asteraceae-brassicaceae-oilseeds";
        subCatCommonName = "Flower & Crucifer Oilseeds";
      } else if (lowercaseSub.includes("pedaliaceae")) {
        subCatName = "Pedaliaceae & Fabaceae Oilseeds";
        subCatSlug = "pedaliaceae-fabaceae-oilseeds";
        subCatCommonName = "Legume & Warm-Climate Oilseeds";
      } else {
        subCatName = "Linaceae Oilseeds";
        subCatSlug = "linaceae-oilseeds";
        subCatCommonName = "Flax Seeds";
      }
    } else if (lowercaseSub.includes("broadleaf") || lowercaseSub.includes("mucilaginous") || lowercaseSub.includes("ancient")) {
      catName = "Pseudocereal & Mucilaginous Seeds";
      catSlug = "pseudocereal-mucilaginous-seeds";
      catTechName = "Pseudocereals & Gels";
      if (lowercaseSub.includes("broadleaf")) {
        subCatName = "Broadleaf Pseudocereals";
        subCatSlug = "broadleaf-pseudocereals";
        subCatCommonName = "Gluten-Free Grain Seeds";
      } else {
        subCatName = "Mucilaginous Seeds";
        subCatSlug = "mucilaginous-seeds";
        subCatCommonName = "Gel-Forming / Soluble Fiber Seeds";
      }
    } else if (lowercaseSub.includes("cucurbitaceae") || lowercaseSub.includes("cannabaceae") || lowercaseSub.includes("pepo")) {
      catName = "Pepos & Pit Seeds";
      catSlug = "pepos-pit-seeds";
      catTechName = "Pepos & Fleshy Fruit Seeds";
      subCatName = lowercaseSub.includes("cucurbitaceae") ? "Cucurbitaceae Seeds" : "Cannabaceae Seeds";
      subCatSlug = lowercaseSub.includes("cucurbitaceae") ? "cucurbitaceae-seeds" : "cannabaceae-seeds";
      subCatCommonName = lowercaseSub.includes("cucurbitaceae") ? "Gourd Seeds" : "Hemp Seeds";
    } else if (lowercaseSub.includes("lens") || lowercaseSub.includes("phaseolus") || lowercaseSub.includes("leguminous")) {
      catName = "Leguminous Seeds";
      catSlug = "leguminous-seeds";
      catTechName = "Fabaceae Seeds";
      subCatName = lowercaseSub.includes("lens") ? "Lens Botanicals" : "Phaseolus & Cicer Botanicals";
      subCatSlug = lowercaseSub.includes("lens") ? "lens-botanicals" : "phaseolus-cicer-botanicals";
      subCatCommonName = lowercaseSub.includes("lens") ? "Lentils" : "Beans & Chickpeas";
    } else {
      catName = "Spice Seeds";
      catSlug = "spice-seeds";
      catTechName = "Aromatic Umbellifers";
      subCatName = lowercaseSub.includes("apiaceae") ? "Apiaceae Spice Seeds" : "Papaveraceae Spice Seeds";
      subCatSlug = lowercaseSub.includes("apiaceae") ? "apiaceae-spice-seeds" : "papaveraceae-spice-seeds";
      subCatCommonName = lowercaseSub.includes("apiaceae") ? "Parsley Family Spices" : "Poppy Seeds";
    }
  }

  // --- 6. SPICES PILLAR ---
  else if (lowercaseCat.includes("spices") || lowercaseCat.includes("cortical") || lowercaseCat.includes("carpological") || lowercaseCat.includes("seminal") || lowercaseCat.includes("anthological")) {
    mainCatSlug = "spices";
    if (lowercaseSub.includes("lauraceae") || lowercaseSub.includes("zingiberaceae") || lowercaseSub.includes("bark")) {
      catName = "Bark & Root Spices";
      catSlug = "bark-root-spices";
      catTechName = "Cortical & Rhizomatous Spices";
      subCatName = lowercaseSub.includes("lauraceae") ? "Lauraceae Barks" : "Zingiberaceae Rhizomes";
      subCatSlug = lowercaseSub.includes("lauraceae") ? "lauraceae-barks" : "zingiberaceae-rhizomes";
      subCatCommonName = lowercaseSub.includes("lauraceae") ? "Cinnamon Spices" : "Ginger Family Spices";
    } else if (lowercaseSub.includes("piperaceae") || lowercaseSub.includes("solanaceae") || lowercaseSub.includes("schisandraceae") || lowercaseSub.includes("fruit")) {
      catName = "Fruit & Berry Spices";
      catSlug = "fruit-berry-spices";
      catTechName = "Carpological Spices";
      if (lowercaseSub.includes("piperaceae")) {
        subCatName = "Piperaceae Berries";
        subCatSlug = "piperaceae-berries";
        subCatCommonName = "Peppercorns";
      } else if (lowercaseSub.includes("solanaceae")) {
        subCatName = "Solanaceae Pods";
        subCatSlug = "solanaceae-pods";
        subCatCommonName = "Chili Peppers & Paprikas";
      } else {
        subCatName = "Schisandraceae & Myrtaceae Fruits";
        subCatSlug = "schisandraceae-myrtaceae-fruits";
        subCatCommonName = "Exotic Fruit Spices";
      }
    } else if (lowercaseSub.includes("apiaceae") || lowercaseSub.includes("myristicaceae") || lowercaseSub.includes("elettaria") || lowercaseSub.includes("seed")) {
      catName = "Seed-Derived Spices";
      catSlug = "seed-derived-spices";
      catTechName = "Seminal Spices";
      if (lowercaseSub.includes("apiaceae")) {
        subCatName = "Apiaceae Aromatic Seeds";
        subCatSlug = "apiaceae-aromatic-seeds";
        subCatCommonName = "Umbellifer Seeds";
      } else if (lowercaseSub.includes("myristicaceae")) {
        subCatName = "Myristicaceae Seeds";
        subCatSlug = "myristicaceae-seeds";
        subCatCommonName = "Nutmeg Spices";
      } else {
        subCatName = "Elettaria Pods";
        subCatSlug = "elettaria-pods";
        subCatCommonName = "Cardamoms";
      }
    } else if (lowercaseSub.includes("myrtaceae") || lowercaseSub.includes("iridaceae") || lowercaseSub.includes("flower")) {
      catName = "Flower Bud & Stigma Spices";
      catSlug = "flower-bud-stigma-spices";
      catTechName = "Anthological Spices";
      subCatName = lowercaseSub.includes("myrtaceae") ? "Myrtaceae Buds" : "Iridaceae Stigmas";
      subCatSlug = lowercaseSub.includes("myrtaceae") ? "myrtaceae-buds" : "iridaceae-stigmas";
      subCatCommonName = lowercaseSub.includes("myrtaceae") ? "Clove Spices" : "Saffron Spices";
    } else {
      catName = "Resinous & Pungent Sulfides";
      catSlug = "resinous-pungent-sulfides";
      catTechName = "Exudates & Powdered Sulfides";
      subCatName = lowercaseSub.includes("umbellifer") ? "Umbellifer Resins" : "Brassicaceae Powders";
      subCatSlug = lowercaseSub.includes("umbellifer") ? "umbellifer-resins" : "brassicaceae-powders";
      subCatCommonName = lowercaseSub.includes("umbellifer") ? "Latex Spices" : "Mustard & Horseradish";
    }
  }

  // --- 7. GRAINS PILLAR ---
  else if (lowercaseCat.includes("grains") || lowercaseCat.includes("cereal") || lowercaseCat.includes("palaeobotanical")) {
    mainCatSlug = "grains";
    if (lowercaseSub.includes("triticum") || lowercaseSub.includes("oryza") || lowercaseSub.includes("zea") || lowercaseSub.includes("cereal")) {
      catName = "Cereal Grains";
      catSlug = "cereal-grains";
      catTechName = "Cereal Crops";
      if (lowercaseSub.includes("triticum")) {
        subCatName = "Triticum Species";
        subCatSlug = "triticum-species";
        subCatCommonName = "Wheats";
      } else if (lowercaseSub.includes("oryza")) {
        subCatName = "Oryza Species";
        subCatSlug = "oryza-species";
        subCatCommonName = "Rice";
      } else {
        subCatName = "Zea Species";
        subCatSlug = "zea-species";
        subCatCommonName = "Maize";
      }
    } else if (lowercaseSub.includes("sorghum") || lowercaseSub.includes("pennisetum") || lowercaseSub.includes("millets")) {
      catName = "Coarse & Small Grains";
      catSlug = "coarse-small-grains";
      catTechName = "Forage & Small-Seed Cereals";
      subCatName = lowercaseSub.includes("sorghum") ? "Sorghum Genus" : "Pennisetum & Eleusine Genus";
      subCatSlug = lowercaseSub.includes("sorghum") ? "sorghum-genus" : "pennisetum-eleusine-genus";
      subCatCommonName = lowercaseSub.includes("sorghum") ? "Great Millet" : "Small Millets";
    } else if (lowercaseSub.includes("hulled") || lowercaseSub.includes("avena") || lowercaseSub.includes("ancient")) {
      catName = "Ancient & Heritage Cereals";
      catSlug = "ancient-heritage-cereals";
      catTechName = "Palaeobotanical Cereals";
      subCatName = lowercaseSub.includes("hulled") ? "Hulled Heritage Wheats" : "Avena & Secale Genus";
      subCatSlug = lowercaseSub.includes("hulled") ? "hulled-heritage-wheats" : "avena-secale-genus";
      subCatCommonName = lowercaseSub.includes("hulled") ? "Farro Grains" : "Northern European Heritage Grains";
    } else if (lowercaseSub.includes("amaranthaceae") || lowercaseSub.includes("polygonaceae") || lowercaseSub.includes("pseudocereals")) {
      catName = "Pseudocereals";
      catSlug = "pseudocereals";
      catTechName = "Broadleaf Pseudocereals";
      subCatName = lowercaseSub.includes("amaranthaceae") ? "Amaranthaceae Seeds" : "Polygonaceae Seeds";
      subCatSlug = lowercaseSub.includes("amaranthaceae") ? "amaranthaceae-seeds" : "polygonaceae-seeds";
      subCatCommonName = lowercaseSub.includes("amaranthaceae") ? "Andean Pseudocereals" : "Polygonum Grains";
    } else {
      catName = "Wild & Aquatic Grains";
      catSlug = "wild-aquatic-grains";
      catTechName = "Palustrine Grains";
      subCatName = lowercaseSub.includes("zizania") ? "Zizania Genus" : "Eragrostis Genus";
      subCatSlug = lowercaseSub.includes("zizania") ? "zizania-genus" : "eragrostis-genus";
      subCatCommonName = lowercaseSub.includes("zizania") ? "Marsh Grasses" : "Hyper-Small Grains";
    }
  }

  // --- 8. PULSES & LEGUMES PILLAR ---
  else if (lowercaseCat.includes("pulses") || lowercaseCat.includes("legumes") || lowercaseCat.includes("fabaceae")) {
    mainCatSlug = "pulses-legumes";
    if (lowercaseSub.includes("lentil") || lowercaseSub.includes("small-seed") || lowercaseSub.includes("decorticated")) {
      catName = "Lentils";
      catSlug = "lentils";
      catTechName = "Lens Botanicals";
      subCatName = lowercaseSub.includes("split") ? "Split & Decorticated Lentils" : "Whole Small-Seed Lentils";
      subCatSlug = lowercaseSub.includes("split") ? "split-decorticated-lentils" : "whole-small-seed-lentils";
      subCatCommonName = lowercaseSub.includes("split") ? "Skinned & Split Lentils / Dals" : "Intact Lentils";
    } else if (lowercaseSub.includes("cicer") || lowercaseSub.includes("pisum") || lowercaseSub.includes("chickpea") || lowercaseSub.includes("pea")) {
      catName = "Chickpeas & Peas";
      catSlug = "chickpeas-peas";
      catTechName = "Cicer & Pisum Crops";
      subCatName = lowercaseSub.includes("cicer") ? "Cicer Botanicals" : "Pisum Botanicals";
      subCatSlug = lowercaseSub.includes("cicer") ? "cicer-botanicals" : "pisum-botanicals";
      subCatCommonName = lowercaseSub.includes("cicer") ? "Garbanzo Beans" : "Dry Field Peas";
    } else if (lowercaseSub.includes("phaseolus") || lowercaseSub.includes("beans")) {
      catName = "Common & Kidney Beans";
      catSlug = "common-kidney-beans";
      catTechName = "Phaseolus Legumes";
      subCatName = lowercaseSub.includes("large") ? "Large Phaseolus Beans" : "Medium & Small Phaseolus Beans";
      subCatSlug = lowercaseSub.includes("large") ? "large-phaseolus-beans" : "medium-small-phaseolus-beans";
      subCatCommonName = lowercaseSub.includes("large") ? "Hearty Kidney-Shaped Beans" : "Soup & Baking Beans";
    } else if (lowercaseSub.includes("vigna") || lowercaseSub.includes("east asian") || lowercaseSub.includes("gram")) {
      catName = "East Asian & Vigna Beans";
      catSlug = "east-asian-vigna-beans";
      catTechName = "Vigna Botanicals";
      subCatName = lowercaseSub.includes("high-protein") ? "High-Protein Vigna Grams" : "Elongated Vigna Pulses";
      subCatSlug = lowercaseSub.includes("high-protein") ? "high-protein-vigna-grams" : "elongated-vigna-pulses";
      subCatCommonName = lowercaseSub.includes("high-protein") ? "Small East Asian Pulses" : "Long Pod Legumes";
    } else {
      catName = "Specialty, Broad & Oil Legumes";
      catSlug = "specialty-broad-oil-legumes";
      catTechName = "Diverse Macro-Legumes";
      if (lowercaseSub.includes("vine") || lowercaseSub.includes("broad")) {
        subCatName = "Cool-Season Vine Legumes";
        subCatSlug = "cool-season-vine-legumes";
        subCatCommonName = "Large Broad Beans";
      } else if (lowercaseSub.includes("tropical") || lowercaseSub.includes("subtropical")) {
        subCatName = "Tropical & Subtropical Pulses";
        subCatSlug = "tropical-subtropical-pulses";
        subCatCommonName = "Warm-Climate Legumes";
      } else {
        subCatName = "Subterranean Oil Legumes";
        subCatSlug = "subterranean-oil-legumes";
        subCatCommonName = "Ground Pods";
      }
    }
  }

  // --- 9. DAIRY & ALTERNATIVES PILLAR ---
  else if (lowercaseCat.includes("dairy") || lowercaseCat.includes("lacteal") || lowercaseCat.includes("cheese") || lowercaseCat.includes("butter")) {
    mainCatSlug = "dairy-alternatives";
    if (lowercaseSub.includes("ruminant") || lowercaseSub.includes("grain") || lowercaseSub.includes("legume") || lowercaseSub.includes("extract")) {
      catName = "Liquid Milks & Plant Extracts";
      catSlug = "liquid-milks-plant-extracts";
      catTechName = "Liquid Lacteal & Plant Emulsions";
      if (lowercaseSub.includes("ruminant")) {
        subCatName = "Ruminant Animal Milks";
        subCatSlug = "ruminant-animal-milks";
        subCatCommonName = "Dairy Milks";
      } else if (lowercaseSub.includes("grain")) {
        subCatName = "Grain & Seed Extracts";
        subCatSlug = "grain-seed-extracts";
        subCatCommonName = "Plant-Based Milks (Grains)";
      } else {
        subCatName = "Legume & Nut Drupe Extracts";
        subCatSlug = "legume-nut-drupe-extracts";
        subCatCommonName = "Plant-Based Milks (Nuts/Legumes)";
      }
    } else if (lowercaseSub.includes("thermophilic") || lowercaseSub.includes("cultured") || lowercaseSub.includes("fermented")) {
      catName = "Fermented & Cultured Products";
      catSlug = "fermented-cultured-products";
      catTechName = "Acidified & Cultured Dairy";
      subCatName = lowercaseSub.includes("thermophilic") ? "Strained Cultured Dairy" : "Cultured Plant Matrixes";
      subCatSlug = lowercaseSub.includes("thermophilic") ? "strained-cultured-dairy" : "cultured-plant-matrixes";
      subCatCommonName = lowercaseSub.includes("thermophilic") ? "Greek Yogurt" : "Vegan Yogurts";
    } else if (lowercaseSub.includes("moisture") || lowercaseSub.includes("aged") || lowercaseSub.includes("mimics") || lowercaseSub.includes("cheese")) {
      catName = "Cheeses";
      catSlug = "cheeses";
      catTechName = "Rennet & Acid Coagulates";
      if (lowercaseSub.includes("fresh") || lowercaseSub.includes("moisture")) {
        subCatName = "High-Moisture & Fresh Cheeses";
        subCatSlug = "high-moisture-fresh-cheeses";
        subCatCommonName = "Unaged Cheeses";
      } else if (lowercaseSub.includes("aged") || lowercaseSub.includes("low-moisture")) {
        subCatName = "Low-Moisture & Aged Cheeses";
        subCatSlug = "low-moisture-aged-cheeses";
        subCatCommonName = "Hard & Semi-Hard Cheeses";
      } else {
        subCatName = "Starch & Oil Casein Mimics";
        subCatSlug = "starch-oil-casein-mimics";
        subCatCommonName = "Plant-Based Cheeses / Vegan Cheese";
      }
    } else if (lowercaseSub.includes("churned") || lowercaseSub.includes("emulsion") || lowercaseSub.includes("spread") || lowercaseSub.includes("butter")) {
      catName = "Solidified Fats & Spreads";
      catSlug = "solidified-fats-spreads";
      catTechName = "High-Lipid Emulsions";
      subCatName = lowercaseSub.includes("churned") ? "Churned Milkfat Products" : "Water-in-Oil Plant Emulsions";
      subCatSlug = lowercaseSub.includes("churned") ? "churned-milkfat-products" : "water-in-oil-plant-emulsions";
      subCatCommonName = lowercaseSub.includes("churned") ? "Dairy Butters" : "Margarines & Plant Butters";
    } else {
      catName = "Concentrated Creams & Frozen Desserts";
      catSlug = "concentrated-creams-frozen-desserts";
      catTechName = "Aerated & Concentrated Lipids";
      subCatName = lowercaseSub.includes("fat") || lowercaseSub.includes("layer") ? "High-Fat Dairy Liquid Layers" : "Frozen Aerated Emulsions";
      subCatSlug = lowercaseSub.includes("fat") || lowercaseSub.includes("layer") ? "high-fat-dairy-liquid-layers" : "frozen-aerated-emulsions";
      subCatCommonName = lowercaseSub.includes("fat") || lowercaseSub.includes("layer") ? "Dairy Creams" : "Frozen Desserts";
    }
  }

  // --- 10. HEALTHY DRINKS & BEVERAGES PILLAR ---
  else if (lowercaseCat.includes("drinks") || lowercaseCat.includes("beverages") || lowercaseCat.includes("infusions") || lowercaseCat.includes("tea") || lowercaseCat.includes("juice") || lowercaseCat.includes("smoothie") || lowercaseCat.includes("coffee")) {
    mainCatSlug = "healthy-drinks-beverages";
    if (lowercaseSub.includes("camellia") || lowercaseSub.includes("tisanes") || lowercaseSub.includes("infusions")) {
      catName = "Unsweetened Infusions & Teas";
      catSlug = "unsweetened-infusions-teas";
      catTechName = "Camellia & Herbal Infusions";
      subCatName = lowercaseSub.includes("caffeinated") ? "Caffeinated Camellia Sinensis" : "Non-Caffeinated Herbal Tisanes";
      subCatSlug = lowercaseSub.includes("caffeinated") ? "caffeinated-camellia-sinensis" : "non-caffeinated-herbal-tisanes";
      subCatCommonName = lowercaseSub.includes("caffeinated") ? "True Teas" : "Herbal Teas";
    } else if (lowercaseSub.includes("fermented") || lowercaseSub.includes("probiotic") || lowercaseSub.includes("cultured")) {
      catName = "Fermented & Probiotic Beverages";
      catSlug = "fermented-probiotic-beverages";
      catTechName = "Symbiotic Cultured Liquids";
      subCatName = lowercaseSub.includes("tea") || lowercaseSub.includes("effervescent") ? "Effervescent Fermented Teas" : "Water & Grain Fermentations";
      subCatSlug = lowercaseSub.includes("tea") || lowercaseSub.includes("effervescent") ? "effervescent-fermented-teas" : "water-grain-fermentations";
      subCatCommonName = lowercaseSub.includes("tea") || lowercaseSub.includes("effervescent") ? "Cultured Tonics" : "Non-Dairy Probiotic Cultured Liquids";
    } else if (lowercaseSub.includes("pressed") || lowercaseSub.includes("juice") || lowercaseSub.includes("smoothie") || lowercaseSub.includes("extraction")) {
      catName = "Pressed Juices & Whole Smoothies";
      catSlug = "pressed-juices-whole-smoothies";
      catTechName = "Mechanical Plant Extractions";
      subCatName = lowercaseSub.includes("cold") || lowercaseSub.includes("vegetable") ? "Cold-Pressed Vegetable Extracts" : "High-Fiber Blended Macro-Matrixes";
      subCatSlug = lowercaseSub.includes("cold") || lowercaseSub.includes("vegetable") ? "cold-pressed-vegetable-extracts" : "high-fiber-blended-macro-matrixes";
      subCatCommonName = lowercaseSub.includes("cold") || lowercaseSub.includes("vegetable") ? "Green Juices & Low-Sugar Juices" : "Whole Fruit & Vegetable Smoothies";
    } else if (lowercaseSub.includes("electrolyte") || lowercaseSub.includes("isotonics") || lowercaseSub.includes("water") || lowercaseSub.includes("solute")) {
      catName = "Functional & Electrolyte Waters";
      catSlug = "functional-electrolyte-waters";
      catTechName = "Hydrating Solutes & Isotonics";
      subCatName = lowercaseSub.includes("natural") || lowercaseSub.includes("plant") ? "Natural Plant-Derived Isotonics" : "Micronutrient-Fortified Solutes";
      subCatSlug = lowercaseSub.includes("natural") || lowercaseSub.includes("plant") ? "natural-plant-derived-isotonics" : "micronutrient-fortified-solutes";
      subCatCommonName = lowercaseSub.includes("natural") || lowercaseSub.includes("plant") ? "Plant Waters" : "Enhanced Waters";
    } else {
      catName = "Functional Coffee & Adaptogenic Lattes";
      catSlug = "functional-coffee-adaptogenic-lattes";
      catTechName = "Ergogenic & Botanical Brews";
      subCatName = lowercaseSub.includes("polyphenol") || lowercaseSub.includes("seed") ? "Polyphenol-Rich Seed Infusions" : "Botanical Root & Rhizome Lattes";
      subCatSlug = lowercaseSub.includes("polyphenol") || lowercaseSub.includes("seed") ? "polyphenol-rich-seed-infusions" : "botanical-root-rhizome-lattes";
      subCatCommonName = lowercaseSub.includes("polyphenol") || lowercaseSub.includes("seed") ? "Clean Coffees" : "Herbal Wellness Milks";
    }
  }

  // --- 11. FUNCTIONAL FOODS PILLAR ---
  else if (lowercaseCat.includes("functional")) {
    mainCatSlug = "functional-foods";
    if (lowercaseSub.includes("fiber") || lowercaseSub.includes("beta-glucan") || lowercaseSub.includes("soluble")) {
      catName = "Fiber & Cholesterol-Binding Foods";
      catSlug = "fiber-cholesterol-binding-foods";
      catTechName = "Soluble & Insoluble Fiber Sources";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("probiotic") || lowercaseSub.includes("prebiotic") || lowercaseSub.includes("fermented")) {
      catName = "Probiotic & Prebiotic Foods";
      catSlug = "probiotic-prebiotic-foods";
      catTechName = "Gut-Supportive Functional Foods";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("polyphenol") || lowercaseSub.includes("antioxidant") || lowercaseSub.includes("berry") || lowercaseSub.includes("cognitive")) {
      catName = "Antioxidant & Cognitive-Support Foods";
      catSlug = "antioxidant-cognitive-support-foods";
      catTechName = "Polyphenolic Functional Foods";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("omega") || lowercaseSub.includes("nitric oxide") || lowercaseSub.includes("sulfur") || lowercaseSub.includes("allium") || lowercaseSub.includes("cruciferous")) {
      catName = "Cardiovascular & Circulatory Support Foods";
      catSlug = "cardiovascular-circulatory-support-foods";
      catTechName = "Nitric-Oxide & Omega-3 Pathway Foods";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else {
      catName = "Other Functional Foods";
      catSlug = "other-functional-foods";
      catTechName = "General Functional Foods";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    }
  }

  // --- 12. FERMENTED FOODS PILLAR ---
  else if (lowercaseCat.includes("fermented")) {
    mainCatSlug = "fermented-foods";
    if (lowercaseSub.includes("dairy") || lowercaseSub.includes("lacteal") || lowercaseSub.includes("cultured milk") || lowercaseSub.includes("thermophilic")) {
      catName = "Fermented Dairy";
      catSlug = "fermented-dairy";
      catTechName = "Cultured Lacteal Products";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("vegetable") || lowercaseSub.includes("cabbage") || lowercaseSub.includes("brine") || lowercaseSub.includes("lacto")) {
      catName = "Fermented Vegetables";
      catSlug = "fermented-vegetables";
      catTechName = "Lacto-Fermented Produce";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("soy") || lowercaseSub.includes("aspergillus") || lowercaseSub.includes("rhizopus") || lowercaseSub.includes("bacillus")) {
      catName = "Fermented Soy & Legumes";
      catSlug = "fermented-soy-legumes";
      catTechName = "Koji & Bacterial Legume Ferments";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("beverage") || lowercaseSub.includes("tea carbonate") || lowercaseSub.includes("symbiotic")) {
      catName = "Fermented Beverages";
      catSlug = "fermented-beverages";
      catTechName = "Cultured Non-Dairy Beverages";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("cereal") || lowercaseSub.includes("dough") || lowercaseSub.includes("batter")) {
      catName = "Fermented Grains & Batters";
      catSlug = "fermented-grains-batters";
      catTechName = "Solid-State Cereal Ferments";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("fish") || lowercaseSub.includes("meat") || lowercaseSub.includes("egg") || lowercaseSub.includes("myofibrillar")) {
      catName = "Fermented Fish, Meat & Eggs";
      catSlug = "fermented-fish-meat-eggs";
      catTechName = "Proteolytic Animal-Protein Ferments";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else {
      catName = "Fermented Condiments & Other Ferments";
      catSlug = "fermented-condiments-other";
      catTechName = "General Fermented Foods";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    }
  }

  // --- 13. OILS & HEALTHY FATS PILLAR ---
  else if (lowercaseCat.includes("oils-healthy-fats") || lowercaseCat.includes("oils & healthy fats") || (lowercaseCat.includes("oils") && !lowercaseCat.includes("dairy"))) {
    mainCatSlug = "oils-healthy-fats";
    if (lowercaseSub.includes("smoke point") || lowercaseSub.includes("cooking") || lowercaseSub.includes("consumer decision")) {
      catName = "Cooking & Smoke-Point Guidance";
      catSlug = "cooking-smoke-point-guidance";
      catTechName = "Culinary Oil Selection";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("nut") || lowercaseSub.includes("seed") || lowercaseSub.includes("tropical") || lowercaseSub.includes("cold-pressed")) {
      catName = "Nut, Seed & Tropical Oils";
      catSlug = "nut-seed-tropical-oils";
      catTechName = "Cold-Pressed & Extracted Oils";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("extraction") || lowercaseSub.includes("storage") || lowercaseSub.includes("rancidity") || lowercaseSub.includes("blend")) {
      catName = "Oil Processing & Storage";
      catSlug = "oil-processing-storage";
      catTechName = "Extraction, Blending & Stability";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else {
      catName = "Other Oils & Fats";
      catSlug = "other-oils-fats";
      catTechName = "General Oils & Healthy Fats";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    }
  }

  // --- 14. VITAMINS PILLAR (dedicated "vitamins" folder) ---
  else if (lowercaseCat === "vitamins" || lowercaseCat.includes("vitamins")) {
    mainCatSlug = "vitamins";
    if (lowercaseSub.includes("fat-soluble") || lowercaseSub.includes("calciferol") || lowercaseSub.includes("retinoid") || lowercaseSub.includes("tocopherol")) {
      catName = "Fat-Soluble Vitamins";
      catSlug = "fat-soluble-vitamins";
      catTechName = "Vitamins A, D, E, K";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("water-soluble") || lowercaseSub.includes("b-complex") || lowercaseSub.includes("ascorbate") || lowercaseSub.includes("vitamin c")) {
      catName = "Water-Soluble Vitamins";
      catSlug = "water-soluble-vitamins";
      catTechName = "B-Complex & Vitamin C";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else if (lowercaseSub.includes("deficiency") || lowercaseSub.includes("toxicity") || lowercaseSub.includes("clinical")) {
      catName = "Deficiency & Toxicity Reference";
      catSlug = "deficiency-toxicity-reference";
      catTechName = "Clinical Vitamin Guides";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    } else {
      catName = "Vitamin Food Sources";
      catSlug = "vitamin-food-sources";
      catTechName = "Dietary Vitamin Sources";
      subCatName = diskSub;
      subCatSlug = cleanSlug(diskSub);
    }
  }

  // --- 15. PHYTONUTRIENTS PILLAR ---
  else if (lowercaseCat.includes("phytonutrient")) {
    mainCatSlug = "phytonutrients";
    if (lowercaseSub.includes("phytoestrogen") || lowercaseSub.includes("soy") || lowercaseSub.includes("flax")) {
      catName = "Phytoestrogens";
      catSlug = "phytoestrogens";
      catTechName = "Plant Estrogen-Like Compounds";
    } else if (lowercaseSub.includes("carotenoid") || lowercaseSub.includes("provitamin")) {
      catName = "Carotenoids";
      catSlug = "carotenoids";
      catTechName = "Provitamin A & Non-Provitamin A Carotenoids";
    } else if (lowercaseSub.includes("flavonoid") || lowercaseSub.includes("phenolic") || lowercaseSub.includes("stilbene") || lowercaseSub.includes("lignan")) {
      catName = "Polyphenols";
      catSlug = "polyphenols";
      catTechName = "Flavonoids, Phenolic Acids, Stilbenes & Lignans";
    } else {
      catName = "Other Phytonutrients";
      catSlug = "other-phytonutrients";
      catTechName = "Glucosinolates & Terpenoids";
    }
    subCatName = diskSub;
    subCatSlug = cleanSlug(diskSub);
  }

  // --- 16. BIOACTIVE COMPOUNDS PILLAR ---
  else if (lowercaseCat.includes("bioactive")) {
    mainCatSlug = "bioactive-compounds";
    if (lowercaseSub.includes("omega") || lowercaseSub.includes("marine") || lowercaseSub.includes("algae")) {
      catName = "Omega-3 & Marine Bioactives";
      catSlug = "omega-3-marine-bioactives";
      catTechName = "Marine & Algal Fatty Acid Sources";
    } else if (lowercaseSub.includes("peptide") || lowercaseSub.includes("protein")) {
      catName = "Bioactive Peptides";
      catSlug = "bioactive-peptides";
      catTechName = "Food-Derived Peptides";
    } else if (lowercaseSub.includes("prebiotic") || lowercaseSub.includes("fiber")) {
      catName = "Prebiotic Fibers & Compounds";
      catSlug = "prebiotic-fibers-compounds";
      catTechName = "Non-Digestible Functional Fibers";
    } else {
      catName = "Other Bioactive Compounds";
      catSlug = "other-bioactive-compounds";
      catTechName = "Phytosterols & Nucleosides";
    }
    subCatName = diskSub;
    subCatSlug = cleanSlug(diskSub);
  }

  // --- 17. NUTRIENT DATABASE PILLAR (dedicated "Nutrient Database" folder) ---
  else if (lowercaseCat.includes("nutrient database")) {
    mainCatSlug = "nutrient-database";
    if (lowercaseSub.includes("vitamin") || lowercaseSub.includes("calciferol") || lowercaseSub.includes("ascorbate") || lowercaseSub.includes("retinoid") || lowercaseSub.includes("tocopherol") || lowercaseSub.includes("b-vitamin")) {
      catName = "Vitamin Reference Data";
      catSlug = "vitamin-reference-data";
      catTechName = "Vitamin Composition Data";
    } else if (lowercaseSub.includes("mineral") || lowercaseSub.includes("calcium") || lowercaseSub.includes("magnesium") || lowercaseSub.includes("phosphorus") || lowercaseSub.includes("potassium") || lowercaseSub.includes("sulfur") || lowercaseSub.includes("sodium") || lowercaseSub.includes("electrolyte") || lowercaseSub.includes("trace element") || lowercaseSub.includes("osteo-mineral")) {
      catName = "Mineral Reference Data";
      catSlug = "mineral-reference-data";
      catTechName = "Mineral Composition Data";
    } else if (lowercaseSub.includes("protein") || lowercaseSub.includes("amino acid") || lowercaseSub.includes("carbohydrate") || lowercaseSub.includes("sugar") || lowercaseSub.includes("fatty acid") || lowercaseSub.includes("lipid") || lowercaseSub.includes("fat sources") || lowercaseSub.includes("ala-rich") || lowercaseSub.includes("sda") || lowercaseSub.includes("energy")) {
      catName = "Macronutrient Reference Data";
      catSlug = "macronutrient-reference-data";
      catTechName = "Protein, Carbohydrate & Fat Data";
    } else {
      catName = "General Nutrient Data";
      catSlug = "general-nutrient-data";
      catTechName = "Absorption & Interaction Reference";
    }
    subCatName = diskSub;
    subCatSlug = cleanSlug(diskSub);
  }

  // --- 18. ORGAN-WISE KNOWLEDGE PILLAR ---
  else if (lowercaseCat.includes("organ-wise") || lowercaseCat.includes("organ wise")) {
    mainCatSlug = "organ-wise";
    if (lowercaseSub.includes("cardiovascular") || lowercaseSub.includes("heart") || lowercaseSub.includes("blood vessel") || lowercaseSub.includes("blood &") || lowercaseSub.includes("coagulation") || lowercaseSub.includes("lymphatic")) {
      catName = "Cardiovascular & Circulatory System";
      catSlug = "cardiovascular-circulatory-system";
      catTechName = "Heart, Vessels & Blood";
    } else if (lowercaseSub.includes("nervous") || lowercaseSub.includes("brain") || lowercaseSub.includes("cognitive") || lowercaseSub.includes("higher brain")) {
      catName = "Nervous System & Brain";
      catSlug = "nervous-system-brain";
      catTechName = "Central & Peripheral Nervous System";
    } else if (lowercaseSub.includes("gi tract") || lowercaseSub.includes("liver") || lowercaseSub.includes("gallbladder") || lowercaseSub.includes("pancreas") || lowercaseSub.includes("digestive")) {
      catName = "Digestive System";
      catSlug = "digestive-system";
      catTechName = "GI Tract, Liver, Gallbladder & Pancreas";
    } else if (lowercaseSub.includes("kidney") || lowercaseSub.includes("urine")) {
      catName = "Renal & Urinary System";
      catSlug = "renal-urinary-system";
      catTechName = "Kidneys & Urine Formation";
    } else if (lowercaseSub.includes("endocrine") || lowercaseSub.includes("hormonal") || lowercaseSub.includes("gland")) {
      catName = "Endocrine System";
      catSlug = "endocrine-system";
      catTechName = "Major Endocrine Glands & Hormones";
    } else if (lowercaseSub.includes("reproductive") || lowercaseSub.includes("pregnancy") || lowercaseSub.includes("conception") || lowercaseSub.includes("fetal") || lowercaseSub.includes("embryogenesis")) {
      catName = "Reproductive System";
      catSlug = "reproductive-system";
      catTechName = "Male & Female Reproductive Health";
    } else if (lowercaseSub.includes("immune") || lowercaseSub.includes("infection") || lowercaseSub.includes("sexually transmitted")) {
      catName = "Immune System";
      catSlug = "immune-system";
      catTechName = "Immunity & Host Defense";
    } else if (lowercaseSub.includes("bone") || lowercaseSub.includes("joint") || lowercaseSub.includes("muscle") || lowercaseSub.includes("connective tissue")) {
      catName = "Musculoskeletal System";
      catSlug = "musculoskeletal-system";
      catTechName = "Bone, Joint & Muscle Physiology";
    } else if (lowercaseSub.includes("skin") || lowercaseSub.includes("hair") || lowercaseSub.includes("nail") || lowercaseSub.includes("sweat") || lowercaseSub.includes("sebaceous") || lowercaseSub.includes("integumentary")) {
      catName = "Integumentary System";
      catSlug = "integumentary-system";
      catTechName = "Skin, Hair & Nails";
    } else if (lowercaseSub.includes("eye") || lowercaseSub.includes("vision") || lowercaseSub.includes("ear") || lowercaseSub.includes("hearing") || lowercaseSub.includes("balance") || lowercaseSub.includes("teeth") || lowercaseSub.includes("oral")) {
      catName = "Sensory Organs";
      catSlug = "sensory-organs";
      catTechName = "Eye, Ear & Oral Health";
    } else if (lowercaseSub.includes("longevity") || lowercaseSub.includes("aging") || lowercaseSub.includes("life transition") || lowercaseSub.includes("prime adult") || lowercaseSub.includes("midlife") || lowercaseSub.includes("puberty") || lowercaseSub.includes("newborn") || lowercaseSub.includes("infant") || lowercaseSub.includes("toddler") || lowercaseSub.includes("preschool") || lowercaseSub.includes("school-age") || lowercaseSub.includes("adulthood")) {
      catName = "Life-Transition Physiology";
      catSlug = "life-transition-physiology";
      catTechName = "Age-Related Organ Changes";
    } else if (lowercaseSub.includes("oil") || lowercaseSub.includes("smoke point") || lowercaseSub.includes("cosmetic")) {
      catName = "Lipid & Oil Physiology";
      catSlug = "lipid-oil-physiology";
      catTechName = "Fatty Acid Biochemistry";
    } else if (lowercaseSub.includes("flavonoid") || lowercaseSub.includes("phenolic") || lowercaseSub.includes("carotenoid") || lowercaseSub.includes("terpene") || lowercaseSub.includes("alkaloid") || lowercaseSub.includes("peptide") || lowercaseSub.includes("prebiotic") || lowercaseSub.includes("sulfur compound")) {
      catName = "Bioactive & Phytonutrient Physiology";
      catSlug = "bioactive-phytonutrient-physiology";
      catTechName = "Compound-Specific Organ Effects";
    } else {
      catName = "General Organ Systems";
      catSlug = "general-organ-systems";
      catTechName = "Homeostasis & Integrative Physiology";
    }
    subCatName = diskSub;
    subCatSlug = cleanSlug(diskSub);
  }

  // --- 19. LIFE-STAGE PILLAR ---
  else if (lowercaseCat.includes("life-stage") || lowercaseCat.includes("life stage")) {
    mainCatSlug = "life-stage";
    if (lowercaseSub.includes("infant") || lowercaseSub.includes("newborn") || lowercaseSub.includes("neonatal") || lowercaseSub.includes("birth")) {
      catName = "Infancy & Newborn";
      catSlug = "infancy-newborn";
      catTechName = "0–12 Months";
    } else if (lowercaseSub.includes("toddler") || lowercaseSub.includes("preschool")) {
      catName = "Toddler & Preschool";
      catSlug = "toddler-preschool";
      catTechName = "1–5 Years";
    } else if (lowercaseSub.includes("school-age") || lowercaseSub.includes("adolescen") || lowercaseSub.includes("puberty") || lowercaseSub.includes("teen")) {
      catName = "Childhood & Adolescence";
      catSlug = "childhood-adolescence";
      catTechName = "6–19 Years";
    } else if (lowercaseSub.includes("young adult") || lowercaseSub.includes("prime adult") || lowercaseSub.includes("transition to adulthood") || lowercaseSub.includes("adult health") || lowercaseSub.includes("adult mental") || lowercaseSub.includes("adult reproductive") || lowercaseSub.includes("adult chronic")) {
      catName = "Adulthood";
      catSlug = "adulthood";
      catTechName = "20–64 Years";
    } else if (lowercaseSub.includes("pregnan") || lowercaseSub.includes("postpartum") || lowercaseSub.includes("maternal")) {
      catName = "Pregnancy & Postpartum";
      catSlug = "pregnancy-postpartum";
      catTechName = "Maternal Life Stage";
    } else if (lowercaseSub.includes("geriatric") || lowercaseSub.includes("elder") || lowercaseSub.includes("aging") || lowercaseSub.includes("senior") || lowercaseSub.includes("frailty") || lowercaseSub.includes("end-of-life") || lowercaseSub.includes("cognitive decline") || lowercaseSub.includes("dementia")) {
      catName = "Older Adulthood";
      catSlug = "older-adulthood";
      catTechName = "65+ Years";
    } else {
      catName = "Cross-Cutting Life-Stage Topics";
      catSlug = "cross-cutting-life-stage-topics";
      catTechName = "Disability, LGBTQ+ Health & Special Circumstances";
    }
    subCatName = diskSub;
    subCatSlug = cleanSlug(diskSub);
  }

  // --- 20. FOODS PILLAR (FALLBACK / GENERAL FOODS) ---
  else {
    mainCatSlug = "foods";
    if (lowercaseCat.includes("macronutrients")) {
      catName = "Macronutrients";
      catSlug = "macronutrients";
      catTechName = "Core Nutrients / Macros";
      if (lowercaseSub.includes("carb")) {
        subCatName = "Carbohydrates";
        subCatSlug = "carbohydrates";
        subCatCommonName = "Carbs / Energy Foods";
      } else if (lowercaseSub.includes("protein")) {
        subCatName = "Proteins";
        subCatSlug = "proteins";
        subCatCommonName = "Amino Acids / Muscle Builders";
      } else {
        subCatName = "Lipids";
        subCatSlug = "lipids";
        subCatCommonName = "Fats & Oils";
      }
    } else if (lowercaseCat.includes("patterns") || lowercaseCat.includes("lifestyles")) {
      catName = "Dietary Patterns";
      catSlug = "dietary-patterns";
      catTechName = "Diets & Lifestyles";
      if (lowercaseSub.includes("plant") || lowercaseSub.includes("vegetarian")) {
        subCatName = "Plant-Based Diets";
        subCatSlug = "plant-based-diets";
        subCatCommonName = "Vegetarianism";
      } else if (lowercaseSub.includes("carb") || lowercaseSub.includes("low-carb")) {
        subCatName = "Carbohydrate-Restricted Diets";
        subCatSlug = "carbohydrate-restricted-diets";
        subCatCommonName = "Low-Carb Diets";
      } else {
        subCatName = "Medical Nutrition Therapy";
        subCatSlug = "medical-nutrition-therapy";
        subCatCommonName = "Therapeutic Diets";
      }
    } else if (lowercaseCat.includes("micronutrients") || lowercaseCat.includes("vitamins") || lowercaseCat.includes("minerals")) {
      catName = "Micronutrients";
      catSlug = "micronutrients";
      catTechName = "Trace Nutrients";
      if (lowercaseSub.includes("water") || lowercaseSub.includes("aqueous")) {
        subCatName = "Water-Soluble Vitamins";
        subCatSlug = "water-soluble-vitamins";
        subCatCommonName = "B & C Vitamins";
      } else if (lowercaseSub.includes("fat") || lowercaseSub.includes("lipid")) {
        subCatName = "Fat-Soluble Vitamins";
        subCatSlug = "fat-soluble-vitamins";
        subCatCommonName = "A, D, E, K Vitamins";
      } else {
        subCatName = "Essential Minerals";
        subCatSlug = "essential-minerals";
        subCatCommonName = "Dietary Minerals";
      }
    } else if (lowercaseCat.includes("adverse") || lowercaseCat.includes("reaction") || lowercaseCat.includes("allergy") || lowercaseCat.includes("intolerance")) {
      catName = "Adverse Food Reactions";
      catSlug = "adverse-food-reactions";
      catTechName = "Food Sensitivities";
      if (lowercaseSub.includes("ige-mediated") || lowercaseSub.includes("true")) {
        subCatName = "IgE-Mediated Allergies";
        subCatSlug = "ige-mediated-allergies";
        subCatCommonName = "True Food Allergies";
      } else if (lowercaseSub.includes("non-ige") || lowercaseSub.includes("deficiency") || lowercaseSub.includes("tolerance")) {
        subCatName = "Non-IgE Intolerances";
        subCatSlug = "non-ige-intolerances";
        subCatCommonName = "Digestive Sensitivities";
      } else {
        subCatName = "Autoimmune Food Disorders";
        subCatSlug = "autoimmune-food-disorders";
        subCatCommonName = "Immune Responses to Food";
      }
    } else {
      catName = "General Nutrition";
      catSlug = "general-nutrition";
      subCatName = "General Science";
      subCatSlug = "general-science";
    }
  }

  const fileSlug = cleanSlug(diskFile);

  return {
    mainCategory: {
      slug: mainCatSlug,
      name: PILLARS[mainCatSlug]?.name || mainCatSlug
    },
    category: {
      slug: catSlug,
      name: catName,
      techName: catTechName || undefined
    },
    subCategory: {
      slug: subCatSlug,
      name: subCatName,
      commonName: subCatCommonName || undefined
    },
    articleSlug: fileSlug,
    canonicalUrl: `/knowledge/${mainCatSlug}/${catSlug}/${subCatSlug}/${fileSlug}`
  };
}
