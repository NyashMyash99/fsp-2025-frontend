import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

void i18n
  // Получение локализации из public директории.
  .use(Backend)
  // Определение языка по настройкам браузера.
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['ru', 'en'],
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
