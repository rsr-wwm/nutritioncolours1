import React from 'react';
import { IconLinkedIn, IconTwitter, IconFacebook, IconWhatsApp, IconMail, IconPhone } from './ui/Icons';

export const SocialShare = () => {
  // Use current window location and document title for sharing
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const currentTitle = typeof document !== 'undefined' ? document.title : '';

  const shareLinks = [
    { 
      name: 'LinkedIn',
      icon: <IconLinkedIn size={18} />, 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
    },
    { 
      name: 'X (Twitter)',
      icon: <IconTwitter size={18} />, 
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(currentTitle)}&url=${encodeURIComponent(currentUrl)}`
    },
    { 
      name: 'Facebook',
      icon: <IconFacebook size={18} />, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
    },
    { 
      name: 'WhatsApp',
      icon: <IconWhatsApp size={18} />, 
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(currentTitle + ' ' + currentUrl)}`
    },
    {
      name: 'Email',
      icon: <IconMail size={18} />,
      url: `mailto:?subject=${encodeURIComponent(currentTitle)}&body=${encodeURIComponent("Check this out: " + currentUrl)}`
    },
    {
      name: 'Call Us',
      icon: <IconPhone size={18} />,
      url: `tel:+917696160133`
    }
  ];

  return (
    <div className="fixed right-6 bottom-28 z-40 hidden lg:flex flex-col gap-3 animate-in slide-in-from-right-4 duration-700 delay-500 items-end">
      {shareLinks.map((link) => (
        <a 
          key={link.name}
          href={link.url}
          target={link.name === 'Call Us' || link.name === 'Email' ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={link.name === 'Call Us' || link.name === 'Email' ? link.name : `Share on ${link.name} (opens in a new window)`}
          className="bg-white/90 backdrop-blur-sm border border-emerald-100 text-emerald-800 p-2.5 rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-emerald-600 hover:text-white hover:border-emerald-600 flex items-center justify-center group relative w-10 h-10"
        >
          <span className="shrink-0">{link.icon}</span>
          {link.name !== 'Call Us' && link.name !== 'Email' && (
            <span className="sr-only">(opens in a new window)</span>
          )}
          
          {/* Tooltip appearing to the left */}
          <span className="absolute right-full mr-3 px-2 py-1 bg-emerald-900 text-white text-[10px] font-bold uppercase tracking-widest rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 whitespace-nowrap pointer-events-none shadow-md">
            {link.name}
          </span>
        </a>
      ))}
    </div>
  );
};
