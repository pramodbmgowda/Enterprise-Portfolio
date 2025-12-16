'use client';
import { useLanguage } from '@/context/LanguageContext';
import { MapPin, Phone } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="contact" className="bg-[#01140f] text-[#94A3B8] py-20 border-t border-[#C5A059]/10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-[#E2E8F0] mb-8 font-serif">{t.contact.title}</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <MapPin className="text-[#C5A059] shrink-0" />
              <p className="text-lg leading-relaxed">{t.contact.address}</p>
            </div>
            <div className="flex gap-4">
              <Phone className="text-[#C5A059] shrink-0" />
              <p className="text-lg">+91 96631 70200</p>
            </div>
          </div>
        </div>
        
        <div className="h-64 rounded-lg overflow-hidden border border-[#C5A059]/20 grayscale hover:grayscale-0 transition duration-700">
           <iframe 
              src="https://maps.google.com/maps?q=Senthepete,+Hutridurga,+kunigal,+karnataka+-572126&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%" style={{ border: 0 }} 
              allowFullScreen={true} loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
      </div>
      
      <div className="text-center mt-16 pt-8 border-t border-[#C5A059]/10 text-xs tracking-widest uppercase text-[#C5A059]/50">
        © 2024 Kalabhairaveshvara Enterprises.
      </div>
    </footer>
  );
}