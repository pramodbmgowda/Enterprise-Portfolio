'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { content, Language } from '@/data/translations';

type LanguageContextType = {
  lang: Language;
  toggleLanguage: () => void;
  t: typeof content['en'];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app-lang') as Language;
      if (saved) setLang(saved);
    }
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'en' ? 'kn' : 'en';
    setLang(newLang);
    localStorage.setItem('app-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};