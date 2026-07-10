
import React from 'react';
import { TeamMember } from '@/lib/types';
import { IconArrowLeft, IconLinkedIn, IconTwitter, IconInstagram, IconMapPin, IconCheck, IconFacebook, IconQuora } from './ui/Icons';
import { Accordion } from './ui/Accordion';
import { MEMBER_SPECIFIC_FAQS } from '@/lib/constants';

interface TeamMemberProfileProps {
  member: TeamMember;
  navigate: (path: string) => void;
}

export const TeamMemberProfile: React.FC<TeamMemberProfileProps> = ({ member, navigate }) => {
  const specificFaqs = MEMBER_SPECIFIC_FAQS[member.id] || [];

  return (
    <div className="py-24 max-w-7xl mx-auto px-6 animate-in fade-in relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl -z-10 opacity-60 pointer-events-none"></div>

      <button 
        onClick={() => navigate('team')} 
        className="mb-8 flex items-center gap-2 text-stone-500 hover:text-emerald-700 font-bold uppercase tracking-widest text-xs transition-colors"
        aria-label="Back to Clinical Team page"
      >
        <IconArrowLeft size={16} /> Back to Team
      </button>

      <div className="grid lg:grid-cols-12 gap-12 items-start mb-16">
        {/* Left Column: Image & Quick Stats */}
        <div className="lg:col-span-4 sticky top-24">
          <div className="bg-white p-3 rounded-[32px] shadow-lg border border-stone-100 relative group">
            <div className="aspect-square rounded-[24px] overflow-hidden relative mb-4 bg-emerald-950">
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                style={{ objectPosition: member.id === 'shilpa' ? '60% 15%' : 'center' }}
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/40 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 text-white">
                 <div className="flex items-center gap-2 mb-1 text-emerald-200 text-[10px] font-bold uppercase tracking-widest">
                    <IconMapPin size={12} /> {member.location}
                 </div>
                 <h1 className="text-2xl font-black brand-font leading-tight">{member.name}</h1>
              </div>
            </div>

            <div className="flex justify-center gap-3 mb-1">
                {member.socials?.linkedin && (
                    <a 
                      href={member.socials.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Visit ${member.name}'s LinkedIn profile (opens in a new window)`} 
                      className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all shadow-sm"
                    >
                        <IconLinkedIn size={18} />
                        <span className="sr-only">(opens in a new window)</span>
                    </a>
                )}
                {member.socials?.twitter && (
                    <a 
                      href={member.socials.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Visit ${member.name}'s Twitter profile (opens in a new window)`} 
                      className="w-10 h-10 rounded-full bg-sky-50 text-sky-500 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all shadow-sm"
                    >
                        <IconTwitter size={18} />
                        <span className="sr-only">(opens in a new window)</span>
                    </a>
                )}
                {member.socials?.instagram && (
                    <a 
                      href={member.socials.instagram} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      aria-label={`Visit ${member.name}'s Instagram profile (opens in a new window)`} 
                      className="w-10 h-10 rounded-full bg-pink-50 text-pink-600 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-all shadow-sm"
                    >
                        <IconInstagram size={18} />
                        <span className="sr-only">(opens in a new window)</span>
                    </a>
                )}
            </div>
          </div>
        </div>

        {/* Right Column: Bio & Details */}
        <div className="lg:col-span-7 space-y-8">
           <div>
              <span className="text-emerald-600 font-bold uppercase tracking-widest text-sm mb-2 block">{member.role}</span>
              <h2 className="text-3xl font-black text-emerald-950 brand-font mb-6">About {member.name.split(' ')[0]}</h2>
            <div className="prose prose-lg prose-emerald text-stone-600 leading-relaxed mb-8">
                <p>{member.fullBio}</p>
            </div>

            {member.id === 'shilpa' && (
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex flex-col items-center justify-center text-center">
                      <IconLinkedIn size={24} className="text-blue-600 mb-2" />
                      <span className="text-2xl font-black text-blue-900 leading-none">30K+</span>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">LinkedIn</span>
                  </div>
                  <div className="bg-emerald-50 p-6 rounded-3xl border border-emerald-100 flex flex-col items-center justify-center text-center">
                      <IconInstagram size={24} className="text-emerald-600 mb-2" />
                      <span className="text-2xl font-black text-emerald-900 leading-none">30K+</span>
                      <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-1">Instagram</span>
                  </div>
                  <div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex flex-col items-center justify-center text-center">
                      <IconFacebook size={24} className="text-blue-600 mb-2" />
                      <span className="text-2xl font-black text-blue-900 leading-none">40K+</span>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest mt-1">Facebook</span>
                  </div>
                  <div className="bg-red-50 p-6 rounded-3xl border border-red-100 flex flex-col items-center justify-center text-center">
                      <IconQuora size={24} className="text-red-600 mb-2" />
                      <span className="text-2xl font-black text-red-900 leading-none">20K+</span>
                      <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest mt-1">Quora</span>
                  </div>
               </div>
            )}
           </div>

           <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-stone-100 shadow-sm hover:shadow-md transition-shadow">
                 <h3 className="font-bold text-emerald-900 mb-4 text-sm uppercase tracking-widest">Specialties</h3>
                 <div className="flex flex-wrap gap-2">
                    {member.specialties.map((s, i) => (
                       <span key={i} className="bg-emerald-50 text-emerald-700 px-3 py-1.5 rounded-lg text-xs font-bold border border-emerald-100 shadow-sm flex items-center gap-2">
                          <IconCheck size={12} className="text-emerald-500" /> {s}
                       </span>
                    ))}
                 </div>
              </div>
              <div className="bg-emerald-900 p-6 rounded-3xl border border-emerald-800 text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-24 h-24 bg-lime-400/20 rounded-full blur-xl"></div>
                 <h3 className="font-bold text-lime-400 mb-4 text-sm uppercase tracking-widest">Credentials</h3>
                 <p className="text-sm text-emerald-100 font-medium leading-relaxed">{member.details}</p>
              </div>
           </div>

           <div className="hidden md:block bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-8 rounded-3xl relative overflow-hidden shadow-xl">
              <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                 <div>
                    <h3 className="text-xl font-bold mb-1">Ready to work with {member.name.split(' ')[0]}?</h3>
                    <p className="text-emerald-100 text-sm">Book a personalized consultation today.</p>
                 </div>
                 <button 
                   onClick={() => navigate('contact')} 
                   className="bg-white text-emerald-700 px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-lime-50 transition-colors shadow-lg whitespace-nowrap"
                   aria-label={`Book a consultation with ${member.name}`}
                 >
                    Book Now
                 </button>
              </div>
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
           </div>
        </div>
      </div>

      {specificFaqs.length > 0 && (
        <div className="max-w-3xl mx-auto border-t border-stone-200 pt-16">
           <h3 className="text-2xl font-black text-emerald-950 mb-8 text-center brand-font">Common Questions for {member.name.split(' ')[0]}</h3>
           <div className="grid gap-4">
              {specificFaqs.map((faq, i) => (
                 <Accordion key={i} title={faq.question} content={faq.answer} category={faq.category} />
              ))}
           </div>
        </div>
      )}

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-200 p-4 md:hidden z-40 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
          <button 
            onClick={() => navigate('contact')} 
            className="w-full bg-emerald-600 text-white py-4 rounded-xl font-bold uppercase tracking-widest shadow-lg"
            aria-label={`Book a consultation with ${member.name}`}
          >
              Book with {member.name.split(' ')[0]}
          </button>
      </div>
    </div>
  );
};
