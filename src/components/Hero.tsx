'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header id="home" className="relative h-[100dvh] flex flex-col justify-center items-center overflow-hidden">
      
      {/* 1. FIXED PARALLAX BACKGROUND */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-58f216f29631?auto=format&fit=crop&q=80')",
          backgroundAttachment: 'fixed' 
        }} 
      />

      {/* 2. ATMOSPHERE */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021c16]/80 via-[#021c16]/60 to-[#021c16]" />
      <div className="bg-noise" />

      {/* 3. MAIN CONTENT (Lifted) */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center pb-32">
        
        {/* Ancient Seal */}
        <div className="border border-[#C5A059]/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm mb-6 md:mb-8">
          <span className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.3em] uppercase font-serif">
            Est. 2020 • Karnataka
          </span>
        </div>

        {/* Title - PROFESSIONAL SIZING 
            - md:text-7xl: Reduced from 8xl to prevent "overpowering" look.
            - max-w-4xl: Forces a clean, centered text block.
            - leading-tight: Keeps lines closer together for a premium feel.
        */}
        <h1 className="text-4xl md:text-7xl font-bold text-[#E2E8F0] mb-6 font-serif tracking-tight leading-tight drop-shadow-2xl max-w-4xl mx-auto">
          {t.hero.title}
        </h1>

        {/* Gold Divider */}
        <div className="w-24 h-1 bg-[#C5A059] rounded-full mb-8 opacity-80" />
        
        {/* Subtitle */}
        <p className="text-[#94A3B8] text-base md:text-xl max-w-xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4">
          {t.hero.subtitle}
        </p>

        <div className="flex gap-6">
          <a href="#products" className="bg-[#C5A059] text-[#021c16] px-8 py-3 md:px-10 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white transition-colors duration-500 rounded-sm shadow-lg">
            {t.hero.cta_primary}
          </a>
        </div>
      </div>
      
      {/* 4. SCROLL INDICATOR (Lifted Position) */}
      <div className="absolute bottom-48 md:bottom-24 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <div className="w-[26px] h-[42px] border-2 border-[#C5A059]/40 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-[#C5A059] rounded-full animate-scroll-down" />
        </div>
      </div>

    </header>
  );
}