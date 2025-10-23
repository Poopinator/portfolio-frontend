import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";
import ResumeView from "../views/ResumeView.vue";
import ContactView from "../views/ContactView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/about", name: "about", component: AboutView },
    { path: "/projects", name: "projects", component: ProjectsView },
    { path: "/resume", name: "resume", component: ResumeView },
    { path: "/contact", name: "contact", component: ContactView },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
