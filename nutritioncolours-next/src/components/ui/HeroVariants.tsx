// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility

interface HeroProps {
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  image?: string;
}

export function EditorialHero({ title, subtitle, cta }: HeroProps) {
  return (
    <section className="section-breath bg-gradient-to-br from-stone-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-black text-emerald-950 leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-stone-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {cta && (
            <CompatLink href={cta.href} className="cta-primary inline-block">
              {cta.label}
            </CompatLink>
          )}
        </div>
      </div>
    </section>
  );
}

export function SplitContentHero({ title, subtitle, cta, image }: HeroProps) {
  return (
    <section className="section-breath bg-gradient-to-br from-emerald-50 to-teal-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-black text-emerald-950 leading-tight mb-6">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
            {cta && (
              <CompatLink href={cta.href} className="cta-primary inline-block">
                {cta.label}
              </CompatLink>
            )}
          </div>
          {image && (
            <div className="relative">
              <img
                src={image}
                alt=""
                className="rounded-3xl shadow-2xl"
                loading="eager"
                fetchPriority="high"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function AuthorityHero({ title, subtitle, credentials }: HeroProps & { credentials?: string[] }) {
  return (
    <section className="section-breath bg-gradient-to-br from-stone-100 to-stone-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-5xl font-black text-emerald-950 leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-stone-600 mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}
          {credentials && credentials.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {credentials.map((cred, i) => (
                <span key={i} className="px-4 py-2 bg-emerald-100 text-emerald-900 rounded-full text-sm font-bold">
                  {cred}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function SearchFirstHero({ title, subtitle, placeholder }: HeroProps & { placeholder?: string }) {
  return (
    <section className="section-breath bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-black text-emerald-950 leading-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl text-stone-600 mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          <div className="relative">
            <input
              type="search"
              placeholder={placeholder || 'Search...'}
              className="w-full px-6 py-4 text-lg rounded-2xl border-2 border-stone-200 focus:border-emerald-500 focus:outline-none shadow-lg"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CalculatorHero({ title, subtitle, children }: HeroProps & { children?: React.ReactNode }) {
  return (
    <section className="section-intense bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-black text-emerald-950 leading-tight mb-4">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-stone-600 mb-6 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
        {children && <div className="max-w-5xl mx-auto">{children}</div>}
      </div>
    </section>
  );
}
