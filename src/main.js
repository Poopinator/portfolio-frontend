import "./assets/main.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n";
import en from "@/locales/en.json";
import zh from "@/locales/zh.json";

const savedLang = localStorage.getItem('lang') || 'en';

const i18n = createI18n({
  legacy: false,
  locale: savedLang, // ✅ loads saved preference
  fallbackLocale: 'en',
  messages: { en, zh }
});


const app = createApp(App);
app.use(router);
app.use(i18n);
app.mount("#app");
