'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Wheat, Sprout, CandyCane, Trees } from 'lucide-react';

export default function CropSolutions() {
  const { t } = useLanguage();

  const crops = [
    { id: 1, name: t.crops.rice, desc: t.crops.rice_desc, icon: <Wheat /> },
    { id: 2, name: t.crops.maize, desc: t.crops.maize_desc, icon: <Sprout /> },
    { id: 3, name: t.crops.sugarcane, desc: t.crops.sugarcane_desc, icon: <CandyCane /> },
    { id: 4, name: t.crops.areca, desc: t.crops.areca_desc, icon: <Trees /> },
  ];

  return (
    <section id="crops" className="relative bg-[#052e24] py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#C5A059] text-xs tracking-[0.2em] uppercase block mb-3">Targeted Solutions</span>
          <h2 className="text-4xl font-bold text-[#E2E8F0] font-serif">{t.crops.title}</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {crops.map((crop) => (
            <div key={crop.id} className="bg-[#021c16] p-8 border border-[#C5A059]/10 hover:border-[#C5A059]/50 transition duration-500 group cursor-pointer">
              <div className="text-[#C5A059] mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-10 h-10">{crop.icon}</div>
              </div>
              <h3 className="text-xl font-bold text-[#E2E8F0] mb-3 font-serif">{crop.name}</h3>
              <p className="text-[#94A3B8] text-sm leading-relaxed">{crop.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}