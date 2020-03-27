import i18n from "i18next";
import i18n_en from "../i18n/en.json";

import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: i18n_en
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});
