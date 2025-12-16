'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Leaf, Sprout, Bug, ArrowRight } from 'lucide-react';

export default function ProductGrid() {
  const { t } = useLanguage();

  const products = [
    { id: 1, name: { en: "Urea 46%", kn: "ಯೂರಿಯಾ 46%" }, type: t.products.cat_fert, icon: <Leaf className="w-6 h-6" />, desc: { en: "High nitrogen content for rapid growth.", kn: "ತ್ವರಿತ ಬೆಳವಣಿಗೆಗೆ ಹೆಚ್ಚಿನ ಸಾರಜನಕ." } },
    { id: 2, name: { en: "Hybrid Maize Seeds", kn: "ಹೈಬ್ರಿಡ್ ಮೆಕ್ಕೆಜೋಳ" }, type: t.products.cat_seeds, icon: <Sprout className="w-6 h-6" />, desc: { en: "Drought resistant, high yield variety.", kn: "ಬರ ನಿರೋಧಕ, ಅಧಿಕ ಇಳುವರಿ ನೀಡುವ ತಳಿ." } },
    { id: 3, name: { en: "Neem Pesticide", kn: "ಬೇವು ಕೀಟನಾಶಕ" }, type: t.products.cat_pest, icon: <Bug className="w-6 h-6" />, desc: { en: "Organic protection against pests.", kn: "ಕೀಟಗಳ ವಿರುದ್ಧ ಸಾವಯವ ರಕ್ಷಣೆ." } }
  ];

  return (
    // Transparent Background
    <section id="products" className="relative py-24 border-t border-white/5">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#C5A059] font-serif text-xs tracking-[0.2em] uppercase block mb-3">
            Our Collection
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white font-serif mb-6">
            {t.products.title}
          </h2>
          <div className="w-24 h-1 bg-[#C5A059] rounded-full mb-8 opacity-80" />
          <a href="#contact" className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-white transition text-xs font-bold tracking-[0.15em] uppercase border-b border-transparent hover:border-[#C5A059] pb-1">
            View Full Catalog <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
        {/* Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#C5A059]/20 border border-[#C5A059]/20">
          {products.map((item) => (
            // Card Background: bg-black/40 (Semi-transparent dark)
            <div key={item.id} className="bg-black/40 backdrop-blur-md p-10 group hover:bg-[#C5A059]/10 transition duration-500">
              <div className="mb-6 text-[#C5A059] opacity-50 group-hover:opacity-100 transition">
                {item.icon}
              </div>
              <h3 className="text-xl text-white font-serif mb-3">
                {useLanguage().lang === 'en' ? item.name.en : item.name.kn}
              </h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-8 opacity-60 group-hover:opacity-100 transition">
                {useLanguage().lang === 'en' ? item.desc.en : item.desc.kn}
              </p>
              <div className="w-8 h-px bg-[#C5A059] group-hover:w-full transition-all duration-500 ease-out" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}