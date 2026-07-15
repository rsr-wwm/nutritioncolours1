import React from 'react';

interface ReviewProps {
  name: string;
  role: string;
  condition: string;
  text: string;
  date: string;
  ratingValue?: number;
}

export const ReviewCard = ({ name, role, condition, text, date, ratingValue = 5 }: ReviewProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "Service",
      "name": "Circadian Nutrition Optimization Service",
      "provider": {
        "@type": "Organization",
        "name": "NutritionColours",
        "url": "https://nutritioncolours.com"
      }
    },
    "author": {
      "@type": "Person",
      "name": name
    },
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": ratingValue.toString(),
      "bestRating": "5"
    },
    "reviewBody": text,
    "datePublished": date
  };

  return (
    <div className="card-premium flex flex-col justify-between group">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <span className="badge-clinical">
            🏆 {condition}
          </span>
          <div className="flex text-amber-400">
            {Array.from({ length: ratingValue }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>

        <p className="text-stone-700 dark:text-stone-300 text-sm leading-relaxed italic font-semibold relative">
          "{text}"
        </p>
      </div>

      <div className="pt-8 mt-8 border-t border-divider flex items-center gap-4">
        <div>
          <h3 className="text-sm font-black text-emerald-950 dark:text-white brand-font leading-tight">
            {name}
          </h3>
          <p className="text-[10px] text-stone-400 dark:text-stone-500 font-bold uppercase tracking-wider mt-0.5">
            {role} • {date}
          </p>
        </div>
      </div>
    </div>
  );
};
