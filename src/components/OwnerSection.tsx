'use client';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';
import { Quote } from 'lucide-react';

export default function OwnerSection() {
  const { t } = useLanguage();

  return (
    <section className="relative bg-[#021c16] py-24 border-t border-[#C5A059]/10">
      {/* Background Noise Texture */}
      <div className="bg-noise" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
          
          {/* 1. THE IMAGE AREA (Optimized for Mobile Performance) */}
          <div className="relative mb-10 group">
            
            {/* REMOVED: The 'blur-xl' glow div was causing the lag.
                ADDED: A simple static gold ring instead. It looks cleaner and scrolls perfectly.
            */}
            <div className="absolute -inset-3 rounded-full border border-[#C5A059]/20" />
            
            {/* FRAME CONTAINER */}
            <div className="relative w-48 h-48 rounded-full p-2 border-2 border-[#C5A059]/50 shadow-lg bg-[#021c16]">
              
              {/* INNER CIRCLE */}
              <div className="w-full h-full rounded-full overflow-hidden border border-[#C5A059]/20 relative">
                <Image 
                  src="/owner.png" 
                  alt={t.owner?.name || "Owner"}
                  fill
                  // PERFORMANCE FIX: 'sizes' tells the phone to download a small version
                  sizes="(max-width: 768px) 200px, 300px"
                  className="object-cover object-center transition duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Verification Badge */}
            <div className="absolute bottom-2 right-2 bg-[#C5A059] text-[#021c16] p-1.5 rounded-full border-4 border-[#021c16] shadow-md">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
               </svg>
            </div>
          </div>

          {/* 2. THE TEXT CONTENT */}
          <h4 className="text-[#C5A059] font-serif text-xs uppercase tracking-[0.3em] mb-4">
            {t.owner?.title}
          </h4>

          <h2 className="text-4xl md:text-5xl font-bold text-[#E2E8F0] mb-3 font-serif">
            {t.owner?.name}
          </h2>
          
          <div className="w-16 h-px bg-[#C5A059] my-6" />
          
          <div className="relative px-6 md:px-12">
            <Quote className="absolute -top-4 left-0 w-8 h-8 text-[#C5A059]/40 fill-current" />
            <p className="text-[#94A3B8] text-xl italic leading-relaxed font-light">
              "{t.owner?.quote}"
            </p>
            <Quote className="absolute -bottom-4 right-0 w-8 h-8 text-[#C5A059]/40 fill-current rotate-180" />
          </div>

        </div>
      </div>
    </section>
  );
}