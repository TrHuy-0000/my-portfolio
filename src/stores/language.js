import { defineStore } from "pinia";
import { i18n } from "@/i18n"; // 👈 Đảm bảo bạn export `i18n` từ file cài đặt Vue I18n

export const useLanguageStore = defineStore("language", {
  state: () => ({
    current: "en", // mặc định là tiếng Anh
  }),
  actions: {
    setLanguage(lang) {
      this.current = lang;
      i18n.global.locale.value = lang;
    },
    toggle() {
      this.current = this.current === "en" ? "vi" : "en";
      i18n.global.locale.value = this.current;
    },
  },
});
