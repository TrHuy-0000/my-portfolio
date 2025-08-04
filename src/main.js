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
import { i18n } from "@/i18n";

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

// 4. Khởi tạo Vue app và gắn plugin
const app = createApp(App);

app.use(router);
app.use(vuetify);
app.use(pinia);
app.use(i18n);

app.mount("#app");
