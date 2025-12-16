'use client';
import { useLanguage } from '@/context/LanguageContext';
import { HelpCircle } from 'lucide-react';

export default function FarmerFAQ() {
  const { t } = useLanguage();
  const faqs = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
  ];

  return (
    <section className="relative bg-[#021c16] py-24">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-[#E2E8F0] mb-12 text-center font-serif flex items-center justify-center gap-3">
          <HelpCircle className="text-[#C5A059]" /> {t.faq.title}
        </h2>
        
        <div className="space-y-6">
          {faqs.map((item, idx) => (
            <div key={idx} className="border-b border-[#C5A059]/20 pb-6">
              <h3 className="text-lg text-[#C5A059] font-medium mb-2 font-serif">{item.q}</h3>
              <p className="text-[#94A3B8] font-light leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}