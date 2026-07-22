import { getTaxonomyDetails } from './src/lib/seo/taxonomyEngine.js';

const entry = {
  id: "Nutrient Database/nutrient-database.md",
  data: {
    category: "Nutrient Database",
    subCategory: "Nutrient Database",
    title: "Nutrient Database"
  }
};

console.log(getTaxonomyDetails(entry));
