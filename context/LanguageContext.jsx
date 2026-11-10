'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext({
  language: 'en',
  setLanguage: () => {},
  toggleLanguage: () => {},
  t: (val) => (typeof val === 'object' && val !== null ? val.en : val),
});

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  useEffect(() => {
    const saved = localStorage.getItem('papiya_portfolio_lang');
    if (saved === 'en' || saved === 'bn') {
      setLanguage(saved);
    }
  }, []);

  const handleSetLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('papiya_portfolio_lang', lang);
  };

  const toggleLanguage = () => {
    const next = language === 'en' ? 'bn' : 'en';
    handleSetLanguage(next);
  };

  const t = (val) => {
    if (!val) return '';
    if (typeof val === 'object') {
      return val[language] || val.en || '';
    }
    return val;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        toggleLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
