'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Wheat, Sprout, CandyCane, Trees, ArrowUpRight } from 'lucide-react';

export default function CropSolutions() {
  const { t } = useLanguage();

  const crops = [
    { id: 1, name: t.crops.rice, desc: t.crops.rice_desc, icon: <Wheat className="w-6 h-6" /> },
    { id: 2, name: t.crops.maize, desc: t.crops.maize_desc, icon: <Sprout className="w-6 h-6" /> },
    { id: 3, name: t.crops.sugarcane, desc: t.crops.sugarcane_desc, icon: <CandyCane className="w-6 h-6" /> },
    { id: 4, name: t.crops.areca, desc: t.crops.areca_desc, icon: <Trees className="w-6 h-6" /> },
  ];

  return (
    <section id="crops" className="relative bg-[#021c16] py-24 border-t border-[#C5A059]/10">
      
      {/* 1. TEXTURE (Added for depth) */}
      <div className="bg-noise" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* HEADER */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#C5A059] text-xs tracking-[0.2em] uppercase block mb-3">
            Targeted Solutions
          </span>
          <h2 className="text-4xl font-bold text-[#E2E8F0] font-serif mb-6">
            {t.crops.title}
          </h2>
          {/* 2. GOLD DIVIDER (Added for consistency) */}
          <div className="w-24 h-1 bg-[#C5A059] rounded-full opacity-80" />
        </div>
        
        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {crops.map((crop) => (
            <div key={crop.id} className="bg-[#03221b] p-8 border border-[#C5A059]/10 hover:border-[#C5A059]/50 transition-all duration-500 group cursor-pointer relative overflow-hidden">
              
              {/* Hover Glow Effect */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A059]/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150" />

              {/* 3. ICON IN GOLD CIRCLE (Premium Look) */}
              <div className="w-14 h-14 rounded-full border border-[#C5A059]/30 flex items-center justify-center text-[#C5A059] mb-6 group-hover:bg-[#C5A059] group-hover:text-[#021c16] transition-colors duration-500">
                {crop.icon}
              </div>
              
              <h3 className="text-xl font-bold text-[#E2E8F0] mb-3 font-serif">
                {crop.name}
              </h3>
              
              <p className="text-[#94A3B8] text-sm leading-relaxed mb-4">
                {crop.desc}
              </p>

              {/* 4. ARROW INTERACTION (UX Cue) */}
              <div className="flex items-center gap-2 text-[#C5A059] text-xs font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                Learn More <ArrowUpRight className="w-4 h-4" />
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}