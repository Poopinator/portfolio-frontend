import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import zh from "@/locales/zh.json";

const i18n = createI18n({
  legacy: false,
  locale: "en",
  fallbackLocale: "en",
  messages: { en, zh },
});

i18n.global.locale = "en"; // ✅ ensure default language is set before mount

const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
