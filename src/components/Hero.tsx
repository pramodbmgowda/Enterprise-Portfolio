'use client';
import { useLanguage } from '@/context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    // id="home" is here. 
    // We added 'scroll-mt-32' as a backup utility class for extra safety on some browsers
    <header id="home" className="relative bg-emerald-900 py-24 lg:py-36 scroll-mt-40">
      <div 
        className="absolute inset-0 opacity-20 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1625246333195-58f216f29631?auto=format&fit=crop&q=80')" }} 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/80 to-emerald-900/90" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-xl max-w-4xl mx-auto">
          {t.hero.title}
        </h1>
        <p className="text-emerald-100 text-lg md:text-2xl max-w-2xl mx-auto mb-10 drop-shadow-md leading-relaxed">
          {t.hero.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#products" className="bg-amber-500 hover:bg-amber-400 text-emerald-950 px-8 py-4 rounded-full font-bold text-lg transition shadow-xl transform hover:-translate-y-1">
            {t.hero.cta_primary}
          </a>
          <a href="https://wa.me/919876543210" className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-full font-bold text-lg transition shadow-xl transform hover:-translate-y-1">
            {t.hero.cta_secondary}
          </a>
        </div>
      </div>
    </header>
  );
}