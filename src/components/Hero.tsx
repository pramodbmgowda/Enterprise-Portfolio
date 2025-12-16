'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header id="home" className="relative h-[100svh] flex flex-col items-center overflow-hidden">
      
      {/* NO IMAGE HERE - It uses the Body Background now */}

      {/* Top Spacer */}
      <div className="flex-1 w-full" />

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center shrink-0">
        
        <div className="border border-[#C5A059]/40 px-4 py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-md mb-6 md:mb-8 shadow-lg bg-black/20">
          <span className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.3em] uppercase font-serif font-bold">
            Est. 2020 • Karnataka
          </span>
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold md:font-bold text-[#E2E8F0] mb-6 font-serif tracking-tight leading-[1.1] drop-shadow-xl md:drop-shadow-2xl max-w-5xl">
          {t.hero.title}
        </h1>

        <div className="w-24 h-1 bg-[#C5A059] rounded-full mb-8 opacity-90 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
        
        <p className="text-[#94A3B8] text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4 drop-shadow-md">
          {t.hero.subtitle}
        </p>

        <div className="flex gap-6 mb-12">
          <a href="#products" className="bg-[#C5A059] text-[#021c16] px-8 py-3 md:px-10 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white transition-colors duration-500 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            {t.hero.cta_primary}
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="w-[26px] h-[42px] border-2 border-[#C5A059]/40 rounded-full flex justify-center p-2 backdrop-blur-sm bg-black/10">
          <div className="w-1 h-2 bg-[#C5A059] rounded-full animate-scroll-down" />
        </div>

      </div>

      {/* Bottom Spacer (Lift) */}
      <div className="flex-[1.5] w-full min-h-[50px]" />

    </header>
  );
}