import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BANNERS } from '@/lib/constants';

interface HeroSliderProps {
  banners: typeof BANNERS;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ banners }) => {
  const [current, setCurrent] = useState(0);
  const slideRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (current + 1) % banners.length;
      transitionToSlide(nextIndex);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, banners.length]);

  const transitionToSlide = (index: number) => {
    const currentSlide = slideRefs.current[current];
    const nextSlide = slideRefs.current[index];

    if (!currentSlide || !nextSlide) {
      setCurrent(index);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrent(index);
      }
    });

    // Fade out current slide
    tl.to(currentSlide, { opacity: 0, duration: 0.6, ease: 'power2.inOut' });
    
    // Position next slide and fade in
    tl.set(nextSlide, { display: 'block', opacity: 0 });
    tl.to(nextSlide, { opacity: 1, duration: 0.8, ease: 'power2.inOut' });
  };

  const handleDotClick = (index: number) => {
    if (index === current) return;
    transitionToSlide(index);
  };

  return (
    <div className="relative w-full min-h-[680px] md:min-h-[550px] md:h-[65vh] lg:h-[75vh] bg-emerald-950 overflow-hidden">
      {banners.map((banner: any, i: number) => {
        const isCurrent = i === current;
        return (
          <div
            key={banner.id}
            ref={(el) => { slideRefs.current[i] = el; }}
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              display: isCurrent ? 'block' : 'none',
              opacity: isCurrent ? 1 : 0,
              zIndex: isCurrent ? 10 : 0
            }}
          >
            {/* Visual background wrapper */}
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-emerald-950"></div>
              <div className="absolute inset-0 opacity-10">
                <svg aria-hidden="true" width="100%" height="100%" className="w-full h-full text-emerald-500">
                  <pattern id={`grid-${banner.id}`} width="100" height="100" patternUnits="userSpaceOnUse">
                    <path d="M 100 0 L 0 0 0 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#grid-${banner.id})`} />
                </svg>
              </div>
            </div>

            <div className="absolute inset-0 z-20 bg-gradient-to-r from-emerald-950 via-emerald-950/70 to-transparent"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/2 z-20 bg-gradient-to-t from-emerald-950/90 via-emerald-950/20 to-transparent"></div>
            
            <div className="relative z-30 h-full w-full max-w-7xl mx-auto px-6 flex flex-col justify-center md:grid md:grid-cols-12 md:items-center gap-6 md:gap-12 pt-24 pb-16 md:py-0">
              <div className="col-span-12 md:col-span-7 lg:col-span-8 space-y-6 md:space-y-10">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-[2px] bg-lime-400"></div>
                    <span className="text-lime-400 text-[10px] font-black uppercase tracking-[0.6em] block drop-shadow-md">Clinical Metabolic Protocol</span>
                  </div>
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black brand-font leading-[0.9] md:leading-[0.85] tracking-tighter text-white">
                    {banner.title.split(' ').map((word: string, index: number) => (
                      <span key={index} className={index % 2 === 1 ? 'text-lime-400' : ''}>
                        {word}{' '}
                      </span>
                    ))}
                  </h1>
                  <div className="max-w-xl">
                    <p className="text-lg md:text-2xl text-emerald-50/80 leading-relaxed font-black border-l-4 border-lime-400 pl-8 italic">{banner.subtitle}</p>
                  </div>
                </div>
              </div>
              <div className="col-span-12 md:col-span-5 lg:col-span-4 flex justify-start">
                <div className="flex flex-col gap-4 w-full max-w-[320px]">
                  <a href="/plans" className="w-full bg-lime-400 text-emerald-950 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all shadow-2xl shadow-lime-400/20 transform hover:translate-x-2 active:scale-95 group flex items-center justify-between">
                    <span>Reclaim Biological Freedom</span>
                    <svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </a>
                  <a href="/about" className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/20 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:translate-x-2 active:scale-95 group flex items-center justify-between">
                    <span>Stop Calorie Counting</span>
                    <svg aria-hidden="true" className="text-lime-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </a>
                  <a href="/connect" className="w-full bg-white/5 backdrop-blur-xl text-white border border-white/10 py-4 px-6 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-emerald-950 transition-all transform hover:translate-x-2 active:scale-95 group flex items-center justify-between">
                    <span>Join Medicine-Free Hub</span>
                    <svg aria-hidden="true" className="text-lime-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 2h6"/><path d="M12 2v14"/><path d="M12 22a7 7 0 1 0 0-14 7 7 0 0 0 0 14z"/><path d="M15.5 13.5l1.5-1.5"/><path d="M8.5 13.5l-1.5-1.5"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <div className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-30 items-center">
        {banners.map((_: any, i: number) => (
          <button key={i} onClick={() => handleDotClick(i)} className="h-12 w-12 transition-all focus:outline-none flex items-center justify-center rounded-full" aria-label={`Go to slide ${i + 1}`}>
            <span className={`h-1.5 rounded-full transition-colors duration-500 ${i === current ? 'w-10 bg-lime-400' : 'w-3 bg-white/30 hover:bg-white/50'}`} style={{ transformOrigin: 'left center' }} />
          </button>
        ))}
      </div>
    </div>
  );
};
