import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Palappapa1 from "../views/jeu/Palappapa1.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Menu },
    { path: "/M", component: Palappapa1 },
  ],
});

export default router;
