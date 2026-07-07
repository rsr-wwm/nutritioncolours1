'use client';

// // // // // import CompatLink from '@/components/CompatLink';
import CompatLink from '/src/components/CompatLink'; // Replaced for Astro compatibility
import { Logo } from './Logo';
import {
  IconPhone, IconMail, IconInstagram, IconLinkedIn, IconTwitter,
  IconFacebook, IconArrowRight, IconCheck
} from './Icons';

export function Footer() {
  return (
    <footer className="bg-stone-950 text-stone-400 py-10 mt-12 border-t border-emerald-900/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-900/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-6">
          <Logo lightMode />
          <p className="text-sm leading-relaxed text-stone-400 max-w-xs font-medium">
            Clinical Nutrition Practice led by Dr. Shilpa Thakur. We specialize in supporting metabolic health through circadian food protocols and clinical excellence.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-400 transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10" aria-label="Instagram"><IconInstagram size={20} /></a>
            <a href="#" className="hover:text-lime-400 transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10" aria-label="Facebook"><IconFacebook size={20} /></a>
            <a href="#" className="hover:text-lime-400 transition-colors bg-white/5 p-2 rounded-lg hover:bg-white/10" aria-label="LinkedIn"><IconLinkedIn size={20} /></a>
          </div>
        </div>

        <div>
          <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 text-emerald-500 border-l-4 border-lime-400 pl-4">Practice</h3>
          <ul className="space-y-0 text-xs font-bold uppercase tracking-widest">
            <li><CompatLink href="/plans" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Programs</CompatLink></li>
            <li><CompatLink href="/about" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Philosophy</CompatLink></li>
            <li><CompatLink href="/team" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Clinical Team</CompatLink></li>
            <li><CompatLink href="/testimonials" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Success Stories</CompatLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 text-emerald-500 border-l-4 border-lime-400 pl-4">Resources</h3>
          <ul className="space-y-0 text-xs font-bold uppercase tracking-widest">
            <li><CompatLink href="/knowledge/blogs" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Health Journal</CompatLink></li>
            <li><CompatLink href="/recipes" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Healing Recipes</CompatLink></li>
            <li><CompatLink href="/tools" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Health Tools</CompatLink></li>
            <li><CompatLink href="/knowledge/vegan" className="hover:text-white transition-colors min-h-[48px] py-1 flex items-center gap-2 group"><IconArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" /> Vegan Guide</CompatLink></li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-black uppercase tracking-[0.2em] text-xs mb-8 text-emerald-500 border-l-4 border-lime-400 pl-4">Contact</h3>
          <div className="space-y-4 text-sm font-medium">
            <div className="flex items-start gap-4">
              <IconPhone size={18} className="text-lime-400 shrink-0 mt-0.5" />
              <span className="text-emerald-50 font-mono tracking-tight">+91-76961-60133</span>
            </div>
            <div className="flex items-start gap-4 overflow-hidden">
              <IconMail size={18} className="text-lime-400 shrink-0 mt-0.5" />
              <a href="mailto:drthakurshilpa@gmail.com" className="hover:text-white transition-colors truncate block min-h-[48px] py-1 flex items-center">drthakurshilpa@gmail.com</a>
            </div>
            <div className="text-stone-400 text-xs uppercase font-bold tracking-widest leading-relaxed pt-2">
              Chandigarh, Punjab, India<br />
              Serving Patients Globally.
            </div>
          </div>
          <div className="mt-10 pt-8 border-t border-stone-800">
            <div className="flex items-center gap-3 mb-3">
              <IconCheck size={18} className="text-lime-400" />
              <span className="text-xs font-black uppercase tracking-widest text-white">Evidence-Based</span>
            </div>
            <p className="text-xs text-stone-400 leading-relaxed">All content is reviewed by clinical medical researchers for accuracy.</p>
          </div>
        </div>
      </div>

      {/* Footer Sitemap */}
      <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-stone-800/50 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-6">
          <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Metabolic Care</h4>
          <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
            <li><CompatLink href="/topic/diabetes-reversal" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Diabetes Protocol</CompatLink></li>
            <li><CompatLink href="/topic/fatty-liver-reversal" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Fatty Liver Protocol</CompatLink></li>
            <li><CompatLink href="/topic/blood-sugar-control" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Glucose Stability</CompatLink></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Women&apos;s Health</h4>
          <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
            <li><CompatLink href="/topic/pcos-balance" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">PCOS Balance</CompatLink></li>
            <li><CompatLink href="/topic/fertility-hormone-support" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Fertility Guidance</CompatLink></li>
            <li><CompatLink href="/topic/menopause-weight-mgmt" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Menopause Support</CompatLink></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Clinical Ethics</h4>
          <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
            <li><CompatLink href="/legal/editorial-policy" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Editorial Policy</CompatLink></li>
            <li><CompatLink href="/legal/privacy" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Privacy</CompatLink></li>
            <li><CompatLink href="/legal/terms" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Terms</CompatLink></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="text-xs font-black text-stone-200 uppercase tracking-[0.2em] border-b border-stone-800 pb-2">Quick Nav</h4>
          <ul className="space-y-0 text-xs text-stone-400 font-bold uppercase tracking-widest">
            <li><CompatLink href="/sitemap" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Visual Sitemap</CompatLink></li>
            <li><CompatLink href="/tools" className="hover:text-lime-400 transition-colors min-h-[48px] py-1 w-full text-left flex items-center">Clinical Tools</CompatLink></li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 mt-12 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs uppercase tracking-[0.2em] font-black">
        <p className="text-stone-400">&copy; 2026 NutritionColours. All Rights Reserved.</p>
        <div className="flex gap-8 items-center">
          <CompatLink href="/sitemap" className="text-stone-400 hover:text-white transition-colors">Mapping</CompatLink>
        </div>
      </div>
    </footer>
  );
}
