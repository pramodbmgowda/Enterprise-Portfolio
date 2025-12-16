'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header id="home" className="relative h-[100dvh] flex items-center justify-center overflow-hidden">
      
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

      {/* 3. CONTENT */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center pt-10 md:pt-0">
        
        {/* Ancient Seal */}
        <div className="border border-[#C5A059]/30 px-4 py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-sm mb-6 md:mb-8">
          <span className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.3em] uppercase font-serif">
            Est. 2020 • Karnataka
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold text-[#E2E8F0] mb-6 font-serif tracking-tight leading-[1.1] drop-shadow-2xl">
          {t.hero.title}
        </h1>

        {/* ADDED: GOLD DIVIDER LINE */}
        <div className="w-24 h-1 bg-[#C5A059] rounded-full mb-8 opacity-80" />
        
        {/* Subtitle */}
        <p className="text-[#94A3B8] text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-2">
          {t.hero.subtitle}
        </p>

        <div className="flex gap-6">
          <a href="#products" className="bg-[#C5A059] text-[#021c16] px-8 py-3 md:px-10 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white transition-colors duration-500 rounded-sm">
            {t.hero.cta_primary}
          </a>
        </div>
      </div>
      
      {/* 4. SCROLL TEXT */}
      <div className="absolute bottom-8 md:bottom-12 text-[#C5A059]/40 text-[9px] md:text-[10px] tracking-[0.4em] uppercase animate-pulse">
        Scroll to Explore
      </div>
    </header>
  );
}