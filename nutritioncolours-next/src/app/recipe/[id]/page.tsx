import { RECIPES } from '@/lib/recipes_database';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;
import { RecipeClientPage } from './RecipeClientPage';

export async function generateStaticParams() {
  return RECIPES.map(r => ({ id: r.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) return { title: 'Not Found' };
  return { title: `${recipe.title} - Circadian Recipe`, description: recipe.description };
}

export default async function RecipePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const recipe = RECIPES.find(r => r.id === id);
  if (!recipe) /* notFound removed for Astro */
  return <RecipeClientPage recipeId={id} />;
}
