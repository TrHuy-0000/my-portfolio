import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// 👉 Vuetify 3
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

// 👉 Pinia (state management)
import { createPinia } from "pinia";

// 👉 i18n (đa ngôn ngữ)
import { createI18n } from "vue-i18n";
import vi from "@/locales/vi";
import en from "@/locales/en";

// 1. Tạo instance Vuetify
const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
  },
});

// 2. Tạo instance Pinia
const pinia = createPinia();

// 3. Tạo instance i18n
const i18n = createI18n({
  legacy: false, // dùng Composition API
  globalInjection: true, // inject $t toàn cục
  locale: "vi", // ngôn ngữ mặc định
  fallbackLocale: "en", // fallback nếu thiếu
  messages: {
    vi,
    en,
  },
});

// 4. Khởi tạo Vue app và gắn plugin
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(i18n);

app.mount("#app");
