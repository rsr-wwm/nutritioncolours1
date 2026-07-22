export interface LeafEntry {
  slug: string;
  title: string;
}

export const leafMap: Record<string, LeafEntry[]> = {
  "diabetes-reversal": [
    { slug: "insulin-resistance-diet", title: "Insulin-Resistance Diet & Glycemic Index" },
    { slug: "low-glycemic-foods", title: "Low-Glycemic Foods & Meal Sequencing" },
    { slug: "turmeric-oil-benefits", title: "Curcumin & Lipid-Soluble Botanical Protocols" },
    { slug: "keto-breakfast", title: "Circadian Low-Carb Breakfast Timing" }
  ],
  "pcos-balance": [
    { slug: "pcos-diet-plan", title: "Anti-Inflammatory PCOS Nutrition Guide" },
    { slug: "hormone-balancing-foods", title: "Hormone-Balancing Whole Foods & Lipids" },
    { slug: "spearmint-tea-pcos", title: "Botanical Teas for Androgen Regulation" },
    { slug: "myo-inositol-foods", title: "Natural Inositol Sources for Ovarian Health" }
  ],
  "fatty-liver-reversal": [
    { slug: "masld-nutrition-protocol", title: "MASLD Clinical Nutrition Protocol" },
    { slug: "hepatic-steatosis-diet", title: "Hepatic Steatosis Reversal Swaps" },
    { slug: "choline-rich-foods", title: "Lipotropic Choline & Methylation Foods" },
    { slug: "milk-thistle-silymarin", title: "Silymarin & Antioxidant Liver Protection" }
  ],
  "thyroid-optimization": [
    { slug: "hypothyroidism-diet-plan", title: "Hypothyroidism & T3 Activation Diet" },
    { slug: "selenium-rich-foods", title: "Selenium & Iodine Balance in Thyroiditis" },
    { slug: "goitrogen-guide", title: "Goitrogen Thermal Processing Guide" },
    { slug: "hashimotos-protocol", title: "Autoimmune Thyroiditis Elimination Protocol" }
  ],
  "hypertension-management": [
    { slug: "dash-diet-india", title: "Ancestral DASH Diet & Electrolyte Ratios" },
    { slug: "potassium-magnesium-foods", title: "Potassium & Magnesium Vascular Balance" },
    { slug: "nitric-oxide-beetroot", title: "Endothelial Nitric Oxide Boosters" },
    { slug: "sodium-reduction-swaps", title: "Mineral Salt & Sodium Reduction Swaps" }
  ]
};
