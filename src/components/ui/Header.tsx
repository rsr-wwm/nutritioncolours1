import { useState, useEffect } from 'react';

const usePathname = () => {
  const [pathname, setPathname] = useState('');
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);
  return pathname;
};
import { Logo } from './Logo';
import CompatLink from '@/components/CompatLink';
import { LocalizationHub } from '../LocalizationHub';
import { useIntentAwareNavigation } from '@/lib/intentNavigation';
import {
  IconPhone, IconMail, IconMapPin,
  IconInstagram, IconLinkedIn, IconTwitter, IconFacebook,
  IconMenu, IconX, IconSun, IconMoon, IconChevronDown
} from './Icons';

const NAV_CONFIG = [
  { id: 'home', label: 'Home' },
  { id: 'plans', label: 'Programs' },
  {
    id: 'knowledge-group', label: 'Knowledge',
    children: [
      { id: 'knowledge/health-topics', label: 'Health Topics' },
      { id: 'knowledge/herbs-spices', label: 'Herbs & Spices' },
      { id: 'knowledge/health-conditions', label: 'Health Conditions' },
      { id: 'knowledge/nutrigenomics', label: 'Nutrigenomics (SNPs)' },
      { id: 'knowledge/drug-interactions', label: 'Drug-Nutrient Interactions' },
      { id: 'knowledge/blogs', label: 'Latest Articles' },
      { id: 'knowledge/vegan', label: 'Vegan Guide' },
      { id: 'sitemap', label: 'Sitemap' },
    ],
  },
  {
    id: 'lifestyle-group', label: 'Lifestyle',
    children: [
      { id: 'recipes', label: 'Healing Recipes' },
      { id: 'tools', label: 'Health Tools & Portal' },
      { id: 'connect', label: 'Community' },
      { id: 'clinics', label: 'Outreach Locations' },
    ],
  },
  {
    id: 'about-group', label: 'About',
    children: [
      { id: 'about', label: 'Our Approach' },
      { id: 'team', label: 'Clinical Team' },
      { id: 'testimonials', label: 'Success Stories' },
    ],
  }
];

export function Header() {
  const pathname = usePathname();
  const navContext = useIntentAwareNavigation();
  const currentPath = pathname === '/' ? 'home' : pathname.slice(1);
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState<any>(null);

  useEffect(() => {
    const saved = localStorage.getItem('nutrition_dark_mode');
    if (saved === 'true') setDarkMode(true);
    try {
      const loc = localStorage.getItem('nutrition_selected_location');
      if (loc) setActiveLocation(JSON.parse(loc));
    } catch {}
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('nutrition_dark_mode', String(darkMode));
  }, [darkMode]);

  const isActive = (itemId: string, children?: { id: string }[]) => {
    if (itemId === 'home' && currentPath === 'home') return true;
    if (currentPath === itemId) return true;
    if (children) return children.some(child => currentPath.startsWith(child.id));
    return currentPath.startsWith(itemId);
  };

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 bg-white/70 dark:bg-stone-950/70 backdrop-blur-md border border-stone-200/40 dark:border-stone-800/40 rounded-[28px] transition-all duration-300 shadow-xl" data-nav-context={navContext}>
        {/* Top Info Bar */}
        <div className="bg-emerald-950/95 text-white py-1.5 border-b border-emerald-900/30 rounded-t-[28px]">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full text-[10px] font-black uppercase tracking-wider">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <IconPhone size={12} className="text-lime-400 group-hover:scale-110 transition-transform" />
                <span className="text-emerald-100 group-hover:text-white transition-colors">+91-76961-60133</span>
              </div>
              <div className="flex items-center gap-2 group cursor-pointer">
                <IconMail size={12} className="text-lime-400 group-hover:scale-110 transition-transform" />
                <span className="text-emerald-100 group-hover:text-white transition-colors">drthakurshilpa@gmail.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <CompatLink href="/clinics" className="flex items-center gap-1.5 text-lime-400 hover:text-white transition-colors bg-white/5 border border-white/10 rounded-full px-3 py-1">
                <IconMapPin size={10} />
                <span>{activeLocation ? `${activeLocation.city}, ${activeLocation.country}` : 'Select Region'}</span>
              </CompatLink>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <CompatLink href="/" className="hover:opacity-90 transition-opacity flex items-center shrink-0" aria-label="NutritionColours Home">
            <Logo />
          </CompatLink>
          
          <div className="hidden lg:flex items-center gap-1">
            {NAV_CONFIG.map(item => {
              const active = isActive(item.id, item.children);
              return (
                <div key={item.id} className="relative group">
                  {item.children ? (
                    <button
                      type="button"
                      aria-haspopup="true"
                      className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-1 ${active ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'text-stone-600 hover:text-emerald-900'} hover:bg-emerald-50/50 cursor-pointer`}
                    >
                      {item.label}
                      <IconChevronDown size={14} className="transition-transform duration-300 opacity-50 group-hover:opacity-100 group-hover:rotate-180" />
                    </button>
                  ) : (
                    <CompatLink
                      href={`/${item.id === 'home' ? '' : item.id}`}
                      className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-1 ${active ? 'bg-emerald-50 text-emerald-900 border border-emerald-100' : 'text-stone-600 hover:text-emerald-900'} hover:bg-emerald-50/50`}
                    >
                      {item.label}
                    </CompatLink>
                  )}
                  {item.children && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-60 bg-white dark:bg-stone-900 rounded-[24px] shadow-2xl border border-stone-100 dark:border-stone-800 p-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0 z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                      <div className="relative z-10 flex flex-col gap-1">
                        {item.children.map(child => (
                          <CompatLink
                            key={child.id}
                            href={`/${child.id}`}
                            className={`w-full text-left px-4 py-3 rounded-xl text-[11px] font-black uppercase tracking-wider transition-all flex items-center justify-between ${currentPath.startsWith(child.id) ? 'bg-emerald-50 text-emerald-900' : 'text-stone-600 dark:text-stone-300 hover:bg-stone-50 dark:hover:bg-white/5 hover:text-emerald-900 dark:hover:text-lime-300'}`}
                          >
                            <span>{child.label}</span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                          </CompatLink>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
            
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-stone-50 dark:bg-white/5 text-stone-600 dark:text-stone-300 hover:text-emerald-900 hover:bg-emerald-50 transition-all ml-2"
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <IconSun size={16} className="text-amber-500" /> : <IconMoon size={16} className="text-emerald-950" />}
            </button>
            
            <a href="/contact" className="ml-4 bg-emerald-900 text-white hover:bg-emerald-800 px-6 py-3 rounded-xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-emerald-900/10 hover:-translate-y-0.5 hover:shadow-emerald-900/20">
              Contact
            </a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-xl bg-stone-50 text-stone-600 hover:text-emerald-700 hover:bg-emerald-50 transition-all min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <IconSun size={16} className="text-amber-500" /> : <IconMoon size={16} className="text-emerald-950" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-950 p-3 bg-stone-50 rounded-xl min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col p-6">
          <div className="flex justify-between items-center mb-12">
            <Logo />
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 bg-stone-100 rounded-full" aria-label="Close navigation menu"><IconX /></button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6">
            {NAV_CONFIG.map(item => (
              <div key={item.id}>
                {item.children ? (
                  <div className="space-y-4">
                    <div className="text-lg font-black text-emerald-950 border-b border-stone-100 pb-2">{item.label}</div>
                    <div className="pl-4 space-y-4 border-l-2 border-stone-100">
                      {item.children.map(child => (
                        <CompatLink key={child.id} href={`/${child.id}`} onClick={() => setMobileMenuOpen(false)} className="block text-stone-600 font-bold uppercase tracking-widest text-sm text-left">
                          {child.label}
                        </CompatLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <CompatLink
                    href={`/${item.id === 'home' ? '' : item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-black text-emerald-950 block border-b border-stone-100 pb-2 w-full text-left"
                  >
                    {item.label}
                  </CompatLink>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
