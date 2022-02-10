import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// load resource translasi file dari backend server
import BackEnd from "i18next-http-backend";

// untuk deteksi bahasa yang digunakan pada browser berdasarkan local storage dll.
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(BackEnd)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "id",
    detection: {
      order: ["path", "localStorage", "htmlTag", "cookie"],
      caches: ["localStorage", "cookie"],
      lookupLocalStorage: "i18nextLng",
    },
  });
