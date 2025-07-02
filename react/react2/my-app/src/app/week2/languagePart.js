import { createContext, useContext, useState } from 'react';

const LanguagePart = createContext();

const translations = {
  en: {
    greeting: 'Hello',
    dateLabel: 'Date',
    changeButton: 'Switch to Turkish',
  },
  tr: {
    greeting: 'Merhaba',
    dateLabel: 'Tarih',
    changeButton: 'İngilizceye geç',
  },
};

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const switchLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'tr' : 'en'));
  };

  return (
    <LanguagePart.Provider value={{ language, switchLanguage, translations }}>
      {children}
    </LanguagePart.Provider>
  );
}

export const useLanguage = () => useContext(LanguagePart);