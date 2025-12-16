'use client';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Stethoscope, ClipboardCheck, ArrowRight } from 'lucide-react';

export default function FarmVisit() {
  const { t } = useLanguage();

  const steps = [
    { id: 1, title: t.visit?.step1_title, desc: t.visit?.step1_desc, icon: <MapPin /> },
    { id: 2, title: t.visit?.step2_title, desc: t.visit?.step2_desc, icon: <Stethoscope /> },
    { id: 3, title: t.visit?.step3_title, desc: t.visit?.step3_desc, icon: <ClipboardCheck /> }
  ];

  return (
    // REMOVED: bg-[#021c16] from the section so the background image shows through
    <section className="relative py-24 border-t border-[#C5A059]/10"> 
      <div className="bg-noise" />
      <div className="container mx-auto px-4 relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase block mb-3 animate-fade-in">
            Expert Agronomy Service
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#E2E8F0] mb-6 font-serif">
            {t.visit?.title}
          </h2>

          <div className="w-24 h-1 bg-[#C5A059] mx-auto mb-8 rounded-full" />

          <p className="text-[#94A3B8] font-light text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {t.visit?.subtitle}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-[#C5A059]/30 -z-10" />

          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center text-center group cursor-default">
              {/* Icon Circle - Now set on a semi-transparent dark base for contrast */}
              <div className="w-20 h-20 bg-black/40 border border-[#C5A059] rounded-full flex items-center justify-center text-[#C5A059] mb-8 shadow-[0_0_20px_rgba(197,160,89,0.1)] group-hover:bg-[#C5A059] group-hover:text-[#021c16] group-hover:scale-110 transition-all duration-500">
                <div className="w-8 h-8">{step.icon}</div>
              </div>
              
              {/* Step Title */}
              <h3 className="text-xl font-bold text-[#E2E8F0] mb-3 font-serif tracking-wide">
                {step.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#94A3B8] text-sm leading-relaxed max-w-xs opacity-80 group-hover:opacity-100 transition">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="https://wa.me/919663170200" className="inline-flex items-center gap-3 border border-[#C5A059] text-[#C5A059] px-10 py-4 rounded-full hover:bg-[#C5A059] hover:text-[#021c16] transition duration-300 uppercase tracking-widest text-xs font-bold">
            {t.visit?.cta} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}