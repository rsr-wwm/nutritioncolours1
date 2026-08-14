import React from 'react';
import { 
  IconWhatsApp, IconYouTube,
  IconInstagram, IconLinkedIn, IconQuora, IconMail, IconPhone,
  IconCheck, IconShieldCheck, IconFileText, IconLock
} from './ui/Icons';
import { SectionHeading } from './ui/SectionHeading';

export const ConnectPage: React.FC = () => {
  return (
    <div className="bg-stone-50 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Header Hero */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-emerald-800 bg-emerald-100/60 px-4 py-1.5 rounded-full inline-block">
            Direct Telehealth Gateway
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-emerald-950 brand-font tracking-tight">
            Connect with NutritionColours
          </h1>
          <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
            Direct, secure, and confidential consultation channels for prospective and enrolled clients. Supervised by Dr. Shilpa Thakur.
          </p>
        </div>

        {/* Primary Contact Channels Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Channel 1: WhatsApp Consultation Desk */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:border-emerald-500 transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <IconWhatsApp size={28} />
              </div>
              <h2 className="text-xl font-bold text-emerald-950">WhatsApp Consultation</h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Connect directly with our clinical onboarding coordinator to ask questions, verify program suitability, and schedule your video consultation.
              </p>
              <div className="space-y-1 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-2"><IconLock size={14} className="text-emerald-600" /> Mon – Sat: 9:00 AM – 7:00 PM IST</div>
                <div className="flex items-center gap-2"><IconCheck size={14} className="text-emerald-600" /> Response within 2 business hours</div>
              </div>
            </div>
            <a
              href="https://wa.me/917696160133?text=Hi%20Dr.%20Shilpa%2C%20I%20would%20like%20to%20learn%20more%20about%20NutritionColours%20clinical%20telehealth%20programs."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-800 hover:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <IconWhatsApp size={16} /> Open WhatsApp Chat
            </a>
          </div>

          {/* Channel 2: Clinical Support Email */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:border-emerald-500 transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <IconMail size={28} />
              </div>
              <h2 className="text-xl font-bold text-emerald-950">Diagnostic & Case Review</h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Submit comprehensive lab panels, medical histories, and metabolic queries for review prior to your initial consultation.
              </p>
              <div className="space-y-1 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-2"><IconFileText size={14} className="text-emerald-600" /> Secure medical document intake</div>
                <div className="flex items-center gap-2"><IconShieldCheck size={14} className="text-emerald-600" /> Encrypted clinical handling</div>
              </div>
            </div>
            <a
              href="mailto:contact@nutritioncolours.com?subject=Clinical%20Nutrition%20Inquiry"
              className="w-full bg-stone-900 hover:bg-black text-white font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <IconMail size={16} /> Email Clinical Desk
            </a>
          </div>

          {/* Channel 3: Telephone Advisory */}
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:border-emerald-500 transition-colors">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center">
                <IconPhone size={28} />
              </div>
              <h2 className="text-xl font-bold text-emerald-950">Direct Phone Advisory</h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                Speak directly with an intake coordinator to discuss enrollment, pricing, and program schedules.
              </p>
              <div className="space-y-1 text-xs text-stone-500 font-medium">
                <div className="flex items-center gap-2"><IconPhone size={14} className="text-emerald-600" /> +91 76961 60133</div>
                <div className="flex items-center gap-2"><IconLock size={14} className="text-emerald-600" /> Standard IST Business Hours</div>
              </div>
            </div>
            <a
              href="tel:+917696160133"
              className="w-full bg-stone-100 hover:bg-stone-200 text-stone-900 font-bold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl text-center transition-all flex items-center justify-center gap-2"
            >
              <IconPhone size={16} /> Call +91 76961 60133
            </a>
          </div>
        </div>

        {/* 3-Step Onboarding Process */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/80 shadow-sm space-y-8">
          <SectionHeading
            subtitle="Consultation Flow"
            title="How Remote Telehealth Consultations Work"
          />
          <div className="grid md:grid-cols-3 gap-8 pt-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-white font-black text-sm flex items-center justify-center">1</div>
              <h3 className="text-base font-bold text-emerald-950">Intake & Biomarker Review</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                You submit recent diagnostic blood panels (HbA1c, fasting insulin, lipid profile, liver function, thyroid). We evaluate your circadian schedule and dietary history.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-white font-black text-sm flex items-center justify-center">2</div>
              <h3 className="text-base font-bold text-emerald-950">1-on-1 Video Consultation</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                A 45–60 minute in-depth video session with Dr. Shilpa Thakur to analyze root metabolic factors, establish daylight meal windows, and design botanical food swaps.
              </p>
            </div>
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-emerald-900 text-white font-black text-sm flex items-center justify-center">3</div>
              <h3 className="text-base font-bold text-emerald-950">Active Protocol Delivery</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Receive your comprehensive, evidence-graded chrononutrition protocol with ongoing milestone tracking and progress check-ins.
              </p>
            </div>
          </div>
        </div>

        {/* Verified Social & Evidence Presence */}
        <div className="bg-emerald-950 rounded-3xl p-8 sm:p-12 text-white space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-lime-400">Verified Profiles</span>
            <h2 className="text-2xl sm:text-3xl font-black brand-font">Follow Dr. Shilpa Thakur's Research</h2>
            <p className="text-xs text-emerald-200/80 leading-relaxed">
              Explore evidence-based explainers, chrononutrition recipes, and metabolic health insights across our official platforms.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <a
              href="https://www.youtube.com/@nutritioncolours_drshilpa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900/60 hover:bg-emerald-900 p-4 rounded-2xl border border-emerald-800 flex items-center gap-3 transition-colors"
            >
              <IconYouTube size={20} className="text-red-400" />
              <div>
                <div className="text-xs font-bold">YouTube</div>
                <div className="text-[10px] text-emerald-300">Video Masterclasses</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/drshilpa_nutritioncolours"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900/60 hover:bg-emerald-900 p-4 rounded-2xl border border-emerald-800 flex items-center gap-3 transition-colors"
            >
              <IconInstagram size={20} className="text-pink-400" />
              <div>
                <div className="text-xs font-bold">Instagram</div>
                <div className="text-[10px] text-emerald-300">Daily Health Tips</div>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/dr-shilpa-phd/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900/60 hover:bg-emerald-900 p-4 rounded-2xl border border-emerald-800 flex items-center gap-3 transition-colors"
            >
              <IconLinkedIn size={20} className="text-blue-400" />
              <div>
                <div className="text-xs font-bold">LinkedIn</div>
                <div className="text-[10px] text-emerald-300">Research & Articles</div>
              </div>
            </a>
            <a
              href="https://www.quora.com/profile/Dr-Shilpa-Thakur-Phd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-900/60 hover:bg-emerald-900 p-4 rounded-2xl border border-emerald-800 flex items-center gap-3 transition-colors"
            >
              <IconQuora size={20} className="text-red-400" />
              <div>
                <div className="text-xs font-bold">Quora</div>
                <div className="text-[10px] text-emerald-300">Clinical Q&A</div>
              </div>
            </a>
          </div>
        </div>

        {/* Clinical Disclaimer */}
        <div className="text-center max-w-3xl mx-auto space-y-2 text-xs text-stone-500">
          <p className="font-semibold text-stone-600">Medical Disclaimer & Practice Scope</p>
          <p className="leading-relaxed">
            NutritionColours provides evidence-graded clinical nutrition and chrononutrition consulting. Our programs are designed to support metabolic health and complement your physician's medical care. We do not prescribe pharmaceuticals or provide emergency medical services. Always consult your primary physician before altering any prescription medications.
          </p>
        </div>

      </div>
    </div>
  );
};
