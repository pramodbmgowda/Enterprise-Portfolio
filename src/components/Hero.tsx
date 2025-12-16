'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header id="home" className="relative h-[100svh] flex flex-col items-center overflow-hidden">
      
      {/* 1. BACKGROUND (The "Dark Luxury" Macro Leaf) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-scroll md:bg-fixed"
        style={{ 
          // A deep, moody macro shot of a leaf. 
          // This blends perfectly with your #021c16 background color.
          backgroundImage: "url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80')",
        }} 
      />
      
      {/* 2. ATMOSPHERE 
          We use a slightly lighter gradient here because the image itself is already dark.
          This ensures the Gold text shines brightly.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#021c16]/80 via-[#021c16]/50 to-[#021c16]" />
      <div className="bg-noise" />

      {/* 3. TOP SPRING (Spacer) */}
      <div className="flex-1 w-full" />

      {/* 4. MAIN CONTENT */}
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center shrink-0">
        
        {/* Ancient Seal */}
        <div className="border border-[#C5A059]/40 px-4 py-1.5 md:px-6 md:py-2 rounded-full backdrop-blur-md mb-6 md:mb-8 shadow-lg">
          <span className="text-[#C5A059] text-[10px] md:text-xs tracking-[0.3em] uppercase font-serif font-bold">
            Est. 2017 • Karnataka
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold md:font-bold text-[#E2E8F0] mb-6 font-serif tracking-tight leading-[1.1] drop-shadow-xl md:drop-shadow-2xl max-w-5xl">
          {t.hero.title}
        </h1>

        {/* Gold Divider */}
        <div className="w-24 h-1 bg-[#C5A059] rounded-full mb-8 opacity-90 shadow-[0_0_10px_rgba(197,160,89,0.5)]" />
        
        {/* Subtitle */}
        <p className="text-[#94A3B8] text-base md:text-xl max-w-xl md:max-w-2xl mx-auto mb-10 md:mb-12 font-light leading-relaxed px-4 drop-shadow-md">
          {t.hero.subtitle}
        </p>

        {/* Buttons */}
        <div className="flex gap-6 mb-12">
          <a href="#products" className="bg-[#C5A059] text-[#021c16] px-8 py-3 md:px-10 md:py-4 font-bold text-xs md:text-sm tracking-widest uppercase hover:bg-white transition-colors duration-500 rounded-sm shadow-[0_0_20px_rgba(197,160,89,0.3)]">
            {t.hero.cta_primary}
          </a>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="w-[26px] h-[42px] border-2 border-[#C5A059]/40 rounded-full flex justify-center p-2 backdrop-blur-sm">
          <div className="w-1 h-2 bg-[#C5A059] rounded-full animate-scroll-down" />
        </div>

      </div>

      {/* 5. BOTTOM SPRING (The Lift) */}
      <div className="flex-[1.5] w-full min-h-[50px]" />

    </header>
  );
}