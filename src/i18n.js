import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Importando os dicionários
import ptTranslation from './locales/pt.json';
import enTranslation from './locales/en.json';
import esTranslation from './locales/es.json';

const resources = {
  pt: { translation: ptTranslation },
  en: { translation: enTranslation },
  es: { translation: esTranslation }
};

i18n
  .use(LanguageDetector) // Detecta o idioma do navegador do usuário
  .use(initReactI18next) // Passa a instância para o react-i18next
  .init({
    resources,
    fallbackLng: 'pt', // Se der erro, cai pro Português
    interpolation: {
      escapeValue: false // O React já protege contra XSS de forma nativa
    }
  });

export default i18n;