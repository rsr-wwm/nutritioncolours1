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
import { useIntentAwareNavigation } from '@/lib/intentNavigation';
import {
  IconPhone, IconMail,
  IconInstagram, IconLinkedIn, IconTwitter, IconFacebook,
  IconMenu, IconX, IconSun, IconMoon, IconChevronDown
} from './Icons';

const NAV_CONFIG = [
  { id: 'home', label: 'Home' },
  { id: 'search', label: 'Search' },
  { id: 'plans', label: 'Programs' },
  {
    id: 'knowledge-group', label: 'Knowledge',
    children: [
      { id: 'knowledge/health-topics', label: 'Diseases' },
      { id: 'foods', label: 'Foods' },
      { id: 'knowledge/fruits', label: 'Fruits' },
      { id: 'knowledge/herbs', label: 'Herbs' },
      { id: 'knowledge/spices', label: 'Spices' },
      { id: 'knowledge/health-conditions', label: 'Health Conditions' },
      { id: 'knowledge/glossary', label: 'Glossary' },
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

  useEffect(() => {
    const saved = localStorage.getItem('nutrition_dark_mode');
    if (saved === 'true') setDarkMode(true);
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

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 glass-panel-premium rounded-[28px]" data-nav-context={navContext}>
        {/* Top Info Bar */}
        <div className="bg-emerald-950/95 text-white py-1.5 border-b border-emerald-900/30 rounded-t-[28px]">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-full text-[10px] font-black uppercase tracking-wider">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 group cursor-pointer">
                <IconPhone size={12} className="text-lime-400 group-hover:scale-110 transition-transform" />
                <span className="text-emerald-100 group-hover:text-white transition-colors">+91-76961-60133</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 group cursor-pointer">
                <IconMail size={12} className="text-lime-400 group-hover:scale-110 transition-transform" />
                <span className="text-emerald-100 group-hover:text-white transition-colors">care@nutritioncolours.com</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden md:inline text-emerald-300 font-bold">CIRCADIAN NUTRITION PLATFORM</span>
              <div className="flex items-center gap-3">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors" aria-label="Instagram"><IconInstagram size={12} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors" aria-label="LinkedIn"><IconLinkedIn size={12} /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors" aria-label="Twitter"><IconTwitter size={12} /></a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition-colors" aria-label="Facebook"><IconFacebook size={12} /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="px-6 py-4 flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">
            {NAV_CONFIG.map(item => (
              <div key={item.id} className="relative group">
                {item.children ? (
                  <div>
                    <button
                      className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                        isActive(item.id, item.children)
                          ? 'bg-emerald-900 text-white shadow-sm'
                          : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/50'
                      }`}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <IconChevronDown size={12} className="group-hover:rotate-180 transition-transform" />
                    </button>
                    {/* Dropdown menu */}
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-stone-100 p-3 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 z-50">
                      {item.children.map(child => (
                        <CompatLink
                          key={child.id}
                          href={`/${child.id}`}
                          className={`block px-4 py-2.5 rounded-xl text-xs font-black uppercase tracking-wider transition-colors ${
                            currentPath.startsWith(child.id)
                              ? 'bg-emerald-50 text-emerald-950'
                              : 'text-stone-600 hover:bg-stone-50 hover:text-emerald-950'
                          }`}
                        >
                          {child.label}
                        </CompatLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <CompatLink
                    href={`/${item.id === 'home' ? '' : item.id}`}
                    className={`px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider transition-all block ${
                      isActive(item.id)
                        ? 'bg-emerald-900 text-white shadow-sm'
                        : 'text-stone-700 hover:text-emerald-950 hover:bg-stone-100/50'
                    }`}
                  >
                    {item.label}
                  </CompatLink>
                )}
              </div>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-700 transition-colors"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <IconSun size={14} className="text-amber-500" /> : <IconMoon size={14} className="text-emerald-950" />}
            </button>
            <CompatLink
              href="/plans"
              className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-black uppercase tracking-wider transition-all shadow-md hover:shadow-emerald-600/20 hover:scale-105 active:scale-95"
            >
              Book Consult
            </CompatLink>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 bg-stone-50 dark:bg-stone-800 rounded-xl min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <IconSun size={16} className="text-amber-500" /> : <IconMoon size={16} className="text-emerald-950 dark:text-emerald-300" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-emerald-950 dark:text-emerald-100 p-3 bg-stone-50 dark:bg-stone-800 rounded-xl min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {mobileMenuOpen ? <IconX size={24} /> : <IconMenu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site Navigation Menu"
          className="fixed inset-0 z-[60] bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-100 flex flex-col p-6 overflow-hidden"
        >
          <div className="flex justify-between items-center mb-8">
            <Logo />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-3 bg-stone-100 dark:bg-stone-800 rounded-full min-w-[48px] min-h-[48px] flex items-center justify-center"
              aria-label="Close navigation menu"
            >
              <IconX size={20} />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto space-y-6 pb-12">
            {NAV_CONFIG.map(item => (
              <div key={item.id}>
                {item.children ? (
                  <div className="space-y-4">
                    <div className="text-base font-black text-emerald-950 dark:text-emerald-300 border-b border-stone-100 dark:border-stone-800 pb-2 uppercase tracking-wide">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-3 border-l-2 border-stone-100 dark:border-stone-800">
                      {item.children.map(child => (
                        <CompatLink
                          key={child.id}
                          href={`/${child.id}`}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-stone-600 dark:text-stone-300 font-bold uppercase tracking-wider text-xs py-1.5 text-left hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                        >
                          {child.label}
                        </CompatLink>
                      ))}
                    </div>
                  </div>
                ) : (
                  <CompatLink
                    href={`/${item.id === 'home' ? '' : item.id}`}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-black text-emerald-950 dark:text-emerald-300 block border-b border-stone-100 dark:border-stone-800 pb-2 w-full text-left uppercase tracking-wide"
                  >
                    {item.label}
                  </CompatLink>
                )}
              </div>
            ))}
            <div className="pt-4">
              <CompatLink
                href="/plans"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-sm font-black uppercase tracking-wider shadow-md"
              >
                Book Consultation
              </CompatLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
