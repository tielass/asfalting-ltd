import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import translation resources
import enTranslation from "./locales/en/translation.json";
import bgTranslation from "./locales/bg/translation.json";
import deTranslation from "./locales/de/translation.json";

// Configure i18next
i18n
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: enTranslation,
      },
      bg: {
        translation: bgTranslation,
      },
      de: {
        translation: deTranslation,
      },
    },
    fallbackLng: "en", // Default language
    debug: false,
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
