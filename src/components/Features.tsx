'use client';
import { useLanguage } from '@/context/LanguageContext';
import { ShieldCheck, Users, Coins } from 'lucide-react';

export default function Features() {
  const { t } = useLanguage();
  return (
    <section className="py-12 bg-white -mt-16 relative z-20 container mx-auto px-4 rounded-2xl shadow-2xl max-w-5xl border border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-100">
        <div className="p-6 group hover:bg-emerald-50/50 transition duration-300 rounded-lg">
          <ShieldCheck className="w-14 h-14 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition duration-300" />
          <h3 className="font-bold text-xl mb-2 text-gray-800">{t.features.f1_title}</h3>
          <p className="text-gray-500">{t.features.f1_desc}</p>
        </div>
        <div className="p-6 group hover:bg-emerald-50/50 transition duration-300 rounded-lg">
          <Users className="w-14 h-14 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition duration-300" />
          <h3 className="font-bold text-xl mb-2 text-gray-800">{t.features.f2_title}</h3>
          <p className="text-gray-500">{t.features.f2_desc}</p>
        </div>
        <div className="p-6 group hover:bg-emerald-50/50 transition duration-300 rounded-lg">
          <Coins className="w-14 h-14 text-emerald-600 mx-auto mb-4 group-hover:scale-110 transition duration-300" />
          <h3 className="font-bold text-xl mb-2 text-gray-800">{t.features.f3_title}</h3>
          <p className="text-gray-500">{t.features.f3_desc}</p>
        </div>
      </div>
    </section>
  );
}