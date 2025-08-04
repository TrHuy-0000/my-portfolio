// src/i18n.js
import { createI18n } from "vue-i18n";
import en from "@/locales/en.js";
import vi from "@/locales/vi.js";

export const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: "en", // default
  messages: {
    en,
    vi,
  },
});
