import { BLOG_ARTICLES } from '@/lib/constants';
// // // // // // import { notFound } from 'next/navigation'; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility; // Replaced for Astro compatibility;
import { ArticleClientPage } from './ArticleClientPage';

export async function generateStaticParams() {
  return BLOG_ARTICLES.map(a => ({ id: a.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = BLOG_ARTICLES.find(a => a.id === id);
  if (!article) return { title: 'Not Found' };
  return { title: article.title, description: article.title };
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const article = BLOG_ARTICLES.find(a => a.id === id);
  if (!article) /* notFound removed for Astro */
  return <ArticleClientPage articleId={id} />;
}
