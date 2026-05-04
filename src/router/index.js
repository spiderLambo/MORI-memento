import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Palappapa1 from "../views/jeu/Palappapa1.vue";
import Palappapa2 from "../views/jeu/Palappapa2.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Menu },
    { path: "/M", component: Palappapa1 },
    { path: "/O", component: Palappapa2 },
  ],
});

export default router;
