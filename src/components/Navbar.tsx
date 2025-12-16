'use client';
import { useLanguage } from '@/context/LanguageContext';
import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const { t, lang, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#021c16]/95 backdrop-blur-md text-white sticky top-0 z-50 border-b border-[#C5A059]/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* LOGO AREA - Optimized for Mobile */}
        <div className="flex items-center gap-3 md:gap-4">
          <div className="relative z-10 w-10 h-10 md:w-16 md:h-16 shrink-0 rounded-full border-2 border-[#C5A059] overflow-hidden bg-[#052e24] flex items-center justify-center">
            <Image 
              src="/logo.svg" 
              alt="Logo" 
              fill
              className="object-contain scale-[2.2]" 
            />
          </div>

          <div className="flex flex-col justify-center">
            {/* Smaller text on mobile to prevent overflow */}
            <h1 className="text-xs md:text-lg font-bold tracking-wider text-[#C5A059] uppercase leading-none max-w-[140px] md:max-w-[200px]">
              Kalabhairaveshvara
            </h1>
            <span className="text-[9px] md:text-[10px] text-[#94A3B8] tracking-widest mt-0.5 uppercase">
              Enterprises
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-[#E2E8F0] hover:text-[#C5A059] transition text-xs font-bold tracking-[0.15em] uppercase">{t.nav.home}</a>
          <a href="#products" className="text-[#E2E8F0] hover:text-[#C5A059] transition text-xs font-bold tracking-[0.15em] uppercase">{t.nav.products}</a>
          <a href="#contact" className="text-[#E2E8F0] hover:text-[#C5A059] transition text-xs font-bold tracking-[0.15em] uppercase">{t.nav.contact}</a>
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 border border-[#C5A059]/50 rounded-full px-4 py-1 hover:bg-[#C5A059] hover:text-[#021c16] transition text-xs font-bold"
          >
            <span>{lang === 'en' ? 'EN' : 'ಕನ್ನಡ'}</span>
          </button>

          <a href="tel:+919663170200" className="bg-[#C5A059] text-[#021c16] px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-white transition shadow-[0_0_15px_rgba(197,160,89,0.3)]">
            {t.nav.call}
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
           <button onClick={toggleLanguage} className="font-bold border border-[#C5A059] px-2 py-1 rounded text-[10px] text-[#C5A059]">
            {lang === 'en' ? 'KN' : 'EN'}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#C5A059]">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#021c16] border-t border-[#C5A059]/20 p-6 space-y-6 h-screen">
          <a href="#home" className="block text-center text-[#E2E8F0] font-serif text-xl border-b border-[#C5A059]/10 pb-4" onClick={() => setIsOpen(false)}>{t.nav.home}</a>
          <a href="#products" className="block text-center text-[#E2E8F0] font-serif text-xl border-b border-[#C5A059]/10 pb-4" onClick={() => setIsOpen(false)}>{t.nav.products}</a>
          <a href="#contact" className="block text-center text-[#E2E8F0] font-serif text-xl border-b border-[#C5A059]/10 pb-4" onClick={() => setIsOpen(false)}>{t.nav.contact}</a>
          <a href="tel:+919876543210" className="block text-center bg-[#C5A059] text-[#021c16] py-3 rounded font-bold uppercase tracking-widest mt-8">
            {t.nav.call}
          </a>
        </div>
      )}
    </nav>
  );
}