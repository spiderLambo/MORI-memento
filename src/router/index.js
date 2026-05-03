import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Jeu from "../views/Poppy.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Menu },
    { path: "/jouer", component: Jeu },
  ],
});

export default router;
