
import React from 'react';
import { 
  IconWhatsApp, IconFacebook, IconTwitter, IconYouTube,
  IconInstagram, IconLinkedIn, IconPinterest, IconQuora, IconTikTok, IconMail, IconUser 
} from './Icons';
import { SectionHeading } from './SectionHeading';
import { TESTIMONIALS } from '../constants';

// Shared SectionHeading is now used

export const ConnectPage = () => {
  const handleSubscribe = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email') as string;
    
    if (!email) return;

    const resultMsg = `Success! Registered "${email}" for the NutritionColours weekly health dosage.`;
    
    // Check if invoked by an AI agent helper (WebMCP support)
    const nativeEvent = event.nativeEvent as any;
    if (nativeEvent && nativeEvent.agentInvoked && typeof nativeEvent.respondWith === 'function') {
      nativeEvent.respondWith(Promise.resolve(resultMsg));
    } else {
      alert(resultMsg);
    }
  };

  // Colors unified to brand emerald palette
  const socialLinks = [
    { name: 'WhatsApp', url: 'https://wa.me/917696160133', icon: <IconWhatsApp size={32} />, stats: 'Private Group', desc: 'Direct support & clinical health hacks.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Facebook', url: 'https://facebook.com/NutritionColours', icon: <IconFacebook size={32} />, stats: '40,000+', desc: 'Community discussions & daily healing tips.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Instagram', url: 'https://instagram.com/drthakurshilpa', icon: <IconInstagram size={32} />, stats: '30,000+', desc: 'Quick health tips & patient success stories.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'LinkedIn', url: 'https://linkedin.com/in/drthakurshilpa', icon: <IconLinkedIn size={32} />, stats: '30,000+', desc: 'Professional insights on medical nutrition.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'YouTube', url: 'https://youtube.com/@NutritionColours', icon: <IconYouTube size={32} />, stats: '15,000+', desc: 'In-depth clinical deep dives & lectures.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Twitter', url: 'https://twitter.com/shilpathakur', icon: <IconTwitter size={32} />, stats: '5,000+', desc: 'Breaking health news & metabolic research.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Quora', url: 'https://quora.com/profile/Shilpa-Thakur', icon: <IconQuora size={32} />, stats: '20,000+', desc: 'Q&A on complex metabolic reversals.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'Pinterest', url: 'https://pinterest.com/NutritionColours', icon: <IconPinterest size={32} />, stats: 'Monthly Pins', desc: 'Visual diet charts & recipe infographics.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
    { name: 'TikTok', url: 'https://tiktok.com/@drshilpathakur', icon: <IconTikTok size={32} />, stats: 'Trending Health', desc: 'Short-form metabolic recovery tips.', color: 'hover:border-emerald-300 hover:bg-emerald-50' },
  ];

  return (
    <div className="py-24 animate-in fade-in">
      <SectionHeading title="Join The Tribe" subtitle="Community" isMain={true} />
      
      <div className="max-w-4xl mx-auto px-6 text-center mb-16">
         <p className="text-2xl text-stone-600 mb-12 leading-relaxed">
            Healing is easier when we do it together. Join our global community of patients who are reversing chronic disease through food. Share recipes, celebrate wins, and find support.
         </p>
         <div className="flex justify-center gap-6 flex-wrap mb-20">
            <a href="https://wa.me/917696160133" className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
               <IconWhatsApp size={24} /> Join WhatsApp Group
            </a>
            <a href="#" className="flex items-center gap-3 bg-[#1877F2] text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all">
               <IconFacebook size={24} /> Facebook Community
            </a>
         </div>
      </div>

      {/* Social Media Grid */}
      <section className="max-w-7xl mx-auto px-6 relative z-10 mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {socialLinks.map((link, idx) => (
            <a 
              key={idx} 
              href={link.url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex flex-col items-center text-center p-8 bg-white rounded-[40px] border border-stone-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${link.color}`}
            >
              <div className="w-20 h-20 rounded-3xl flex items-center justify-center text-stone-400 mb-6 transition-all duration-300 bg-stone-50 group-hover:bg-transparent group-hover:scale-110 group-hover:text-emerald-600">
                {link.icon}
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-black text-emerald-950 text-base brand-font group-hover:text-emerald-700 transition-colors uppercase tracking-tight">{link.name}</span>
                <span className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em]">{link.stats}</span>
              </div>
              <p className="mt-4 text-sm text-stone-500 leading-relaxed font-medium">
                {link.desc}
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="bg-stone-50 py-24 border-y border-stone-100 relative overflow-hidden">
         <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
               <span className="text-emerald-600 font-black uppercase tracking-widest text-xs">Real Stories</span>
               <h2 className="text-3xl font-black text-emerald-950 brand-font mt-2">Voices of Healing</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {TESTIMONIALS.slice(0, 3).map((t, i) => (
                  <div key={i} className="bg-white p-8 rounded-[32px] shadow-lg border border-white hover:border-emerald-100 transition-colors">
                     <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-emerald-100 bg-emerald-50 flex items-center justify-center text-emerald-600">
                           <IconUser size={20} />
                        </div>
                        <div>
                           <p className="font-bold text-emerald-950">{t.name}</p>
                           <p className="text-xs text-emerald-600 uppercase tracking-widest">{t.condition}</p>
                        </div>
                     </div>
                     <p className="text-stone-600 italic text-base leading-relaxed">&quot;{t.text}&quot;</p>
                  </div>
               ))}
            </div>
         </div>
         {/* Background decoration */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-10 w-64 h-64 bg-lime-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
            <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/40 rounded-full blur-3xl mix-blend-multiply"></div>
         </div>
      </section>

      {/* Newsletter / CTA - Enhanced with vibrant border */}
      <div className="max-w-7xl mx-auto px-6 mt-24">
         <div className="relative rounded-[40px] p-1 bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-600 shadow-2xl shadow-emerald-900/20">
             <div className="grid md:grid-cols-2 gap-12 bg-emerald-950 rounded-[38px] p-12 text-white overflow-hidden relative texture-dark">
                <div className="relative z-10 flex flex-col justify-center">
                   <div className="inline-block px-3 py-1 rounded-md bg-lime-400/20 text-lime-400 text-xs font-black uppercase tracking-widest w-fit mb-4 border border-lime-400/30">
                      Newsletter
                   </div>
                   <h2 className="text-4xl font-black brand-font mb-4 text-white">The Weekly Dose</h2>
                   <p className="text-emerald-200 mb-8 text-xl font-bold leading-relaxed italic">Get Dr. Shilpa&apos;s latest clinical insights, therapeutic recipes, and community success stories delivered to your inbox every Friday.</p>
                   <form 
                      data-toolname="subscribe-newsletter"
                      data-tooldescription="Subscribe to the NutritionColours newsletter for weekly metabolic health insights, recipes, and success stories."
                      data-toolautosubmit
                      onSubmit={handleSubscribe}
                      className="flex gap-4 flex-col sm:flex-row w-full"
                   >
                      <input 
                         type="email" 
                         name="email"
                         required
                         data-toolparamdescription="The subscriber email address."
                         placeholder="Enter your email address" 
                         className="flex-1 bg-emerald-900/50 border border-emerald-800 rounded-xl px-6 py-4 text-white placeholder:text-emerald-600 focus:outline-none focus:border-lime-400 focus:bg-emerald-900/80 transition-all" 
                      />
                      <button type="submit" className="bg-lime-400 text-emerald-950 font-black uppercase tracking-widest px-8 py-4 rounded-xl hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(163,230,53,0.3)]">Subscribe</button>
                   </form>
                   <p className="mt-4 text-xs text-emerald-600 uppercase tracking-wide">No spam. Unsubscribe anytime.</p>
                </div>
                <div className="relative z-10 flex items-center justify-center">
                   <div className="grid grid-cols-2 gap-4 opacity-30 animate-pulse" style={{animationDuration: '4s'}}>
                      <div className="w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                      <div className="w-40 h-40 bg-lime-400/20 rounded-full blur-xl"></div>
                   </div>
                   <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-48 h-48 bg-emerald-800/30 rounded-full flex items-center justify-center border border-emerald-700/50 backdrop-blur-sm">
                            <IconMail size={80} className="text-lime-400 drop-shadow-[0_0_15px_rgba(163,230,53,0.5)]" />
                        </div>
                   </div>
                </div>
             </div>
         </div>
      </div>
    </div>
  );
};
