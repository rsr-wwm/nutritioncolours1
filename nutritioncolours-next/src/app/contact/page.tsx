'use client';
import { useState } from 'react';
import { CONTACT_FAQS } from '@/lib/constants';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FAQSection } from '@/components/SharedSections';
import { IconPhone, IconMail, IconInstagram, IconFacebook, IconLinkedIn, IconCheck } from '@/components/ui/Icons';

export default function ContactPage() {
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSuccess, setContactSuccess] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    await new Promise(r => setTimeout(r, 1500));
    setContactSubmitting(false);
    setContactSuccess(true);
  };

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <SectionHeading subtitle="Get in Touch" title="Contact Us" isMain={true} />
      <div className="grid md:grid-cols-2 gap-12">
        <div className="bg-emerald-950 text-white p-10 rounded-3xl relative overflow-hidden">
          <div className="relative z-10 space-y-8">
            <div><h2 className="text-2xl font-bold mb-2">Clinic Location</h2><p className="text-emerald-100 leading-relaxed font-medium">Chandigarh, Punjab, India</p></div>
            <div><h2 className="text-2xl font-bold mb-2">Contact Info</h2><p className="text-emerald-100 flex items-center gap-2 font-mono"><IconPhone size={16}/> +91-76961-60133</p><p className="text-emerald-100 flex items-center gap-2 font-mono"><IconMail size={16}/> drthakurshilpa@gmail.com</p></div>
            <div><h2 className="text-2xl font-bold mb-2">Clinic Hours</h2><p className="text-emerald-100">Mon - Sat: 10:00 AM - 6:00 PM<br/>Sunday: Closed</p></div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram"><IconInstagram size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook"><IconFacebook size={20} /></a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn"><IconLinkedIn size={20} /></a>
            </div>
            <div className="pt-6 border-t border-white/10"><p className="text-xs text-emerald-300 font-bold uppercase tracking-widest">All queries are directly reviewed by Dr. Shilpa Thakur.</p></div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-800 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50" aria-hidden="true"></div>
        </div>
        <div className="bg-white p-10 rounded-3xl shadow-2xl border border-stone-100 relative min-h-[400px] flex flex-col justify-center">
          {contactSuccess ? (
            <div className="text-center animate-in fade-in zoom-in-95">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600"><IconCheck size={32} /></div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-3">Message Sent!</h3>
              <p className="text-stone-600 mb-8 max-w-sm mx-auto leading-relaxed">Thank you! Your query has been successfully routed. Dr. Shilpa Thakur&apos;s clinical team will get back to you within 24 hours.</p>
              <button onClick={() => setContactSuccess(false)} className="bg-emerald-600 text-white px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">Send Another Message</button>
            </div>
          ) : (
            <>
              <h3 className="text-2xl font-bold text-emerald-950 mb-6">Send a Message</h3>
              <form className="space-y-4 relative" onSubmit={handleContactSubmit}>
                {contactSubmitting && (<div className="absolute inset-0 bg-white/85 backdrop-blur-sm z-20 flex flex-col items-center justify-center rounded-xl"><div className="w-10 h-10 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mb-3"></div><p className="text-emerald-800 font-bold text-xs uppercase tracking-widest animate-pulse">Sending Message...</p></div>)}
                <div className="grid md:grid-cols-2 gap-4">
                  <input type="text" name="firstName" required placeholder="First Name" className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors" />
                  <input type="text" name="lastName" required placeholder="Last Name" className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors" />
                </div>
                <input type="email" name="email" required placeholder="Email Address" className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors" />
                <select name="interest" required className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors text-stone-500">
                  <option value="">Select Interest</option><option value="Diabetes Reversal">Diabetes Reversal</option><option value="Weight Loss">Weight Loss</option><option value="PCOD/PCOS">PCOD/PCOS</option><option value="General Inquiry">General Inquiry</option>
                </select>
                <textarea name="message" required placeholder="How can we help you?" rows={4} className="w-full p-4 bg-stone-50 rounded-xl border border-stone-100 focus:outline-none focus:border-emerald-500 transition-colors"></textarea>
                <button type="submit" className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200">Send Message</button>
              </form>
            </>
          )}
        </div>
      </div>
      <FAQSection data={CONTACT_FAQS} title="Contact FAQs" />
    </div>
  );
}
