import { useEffect, useRef, useState } from 'react';
import { Logo } from './Logo';
import CompatLink from '@/components/CompatLink';
import { IconMenu, IconX, IconChevronDown } from './Icons';

const groups = [
  {
    label: 'Explore',
    links: [['/knowledge', 'Knowledge directory'], ['/recipes', 'Recipes'], ['/search', 'Search'], ['/sitemap', 'Site index']],
  },
  {
    label: 'About',
    links: [['/about', 'About this site'], ['/legal/editorial-policy', 'Editorial policy'], ['/contact', 'Contact']],
  },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Main navigation">
          <CompatLink href="/" className="rounded-lg px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-100">Home</CompatLink>
          <CompatLink href="/health" className="rounded-lg px-4 py-2 text-sm font-black text-emerald-900 hover:bg-emerald-50">Health</CompatLink>
          <CompatLink href="/foods" className="rounded-lg px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-100">Foods</CompatLink>
          {groups.map((group) => (
            <div className="group relative" key={group.label}>
              <button className="flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-bold text-stone-700 hover:bg-stone-100 focus:bg-stone-100" aria-haspopup="true">
                {group.label}<IconChevronDown size={14} />
              </button>
              <div className="invisible absolute right-0 top-full z-50 mt-2 w-60 rounded-2xl border border-stone-200 bg-white p-2 opacity-0 shadow-xl transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                {group.links.map(([href, label]) => <CompatLink key={href} href={href} className="block rounded-xl px-4 py-3 text-sm font-semibold text-stone-700 hover:bg-emerald-50 hover:text-emerald-900">{label}</CompatLink>)}
              </div>
            </div>
          ))}
        </nav>
        <button className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-stone-200 lg:hidden" aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen(true)}><IconMenu size={22} /></button>
      </div>

      {open && (
        <div id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Site navigation" className="fixed inset-0 z-[70] overflow-y-auto bg-white p-6 lg:hidden">
          <div className="flex items-center justify-between"><Logo /><button ref={closeButton} className="flex min-h-12 min-w-12 items-center justify-center rounded-xl border border-stone-200" aria-label="Close navigation" onClick={() => setOpen(false)}><IconX size={22} /></button></div>
          <nav className="mt-8 space-y-8" aria-label="Mobile navigation">
            <CompatLink href="/" onClick={() => setOpen(false)} className="block border-b border-stone-200 pb-3 text-lg font-black text-emerald-950">Home</CompatLink>
            <CompatLink href="/health" onClick={() => setOpen(false)} className="block border-b border-stone-200 pb-3 text-lg font-black text-emerald-950">Health</CompatLink>
            <CompatLink href="/foods" onClick={() => setOpen(false)} className="block border-b border-stone-200 pb-3 text-lg font-black text-emerald-950">Foods</CompatLink>
            {groups.map((group) => (
              <section key={group.label} aria-labelledby={`mobile-${group.label.toLowerCase()}`}>
                <h2 id={`mobile-${group.label.toLowerCase()}`} className="text-xs font-black uppercase tracking-widest text-emerald-700">{group.label}</h2>
                <div className="mt-3 grid gap-2">{group.links.map(([href, label]) => <CompatLink key={href} href={href} onClick={() => setOpen(false)} className="rounded-xl bg-stone-50 px-4 py-3 font-semibold text-stone-800">{label}</CompatLink>)}</div>
              </section>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
