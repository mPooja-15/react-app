import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from '../src/Componant/locales/en.json';
import he from '../src/Componant/locales/he.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    resources: {
      en: { translation: en },
      he: { translation: he }
    },
    fallbackLng: "en",
    interpolation: { escapeValue: false },
    detection: {
      order: ['path', 'navigator'], 
      lookupFromPathIndex: 0 
    }
  });

const updateDirection = (lng) => {
  const isRTL = lng === 'he';
  document.documentElement.lang = lng;
  document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
};

i18n.on('languageChanged', (lng) => updateDirection(lng));

updateDirection(i18n.language);

export default i18n;

