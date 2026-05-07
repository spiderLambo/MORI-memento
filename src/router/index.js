import { createRouter, createWebHistory } from "vue-router";
import Menu from "../views/Menu.vue";
import Palappapa1 from "../views/jeu/Palappapa1.vue";
import Palappapa2 from "../views/jeu/Palappapa2.vue";
import Palappapa3 from "../views/jeu/Palappapa3.vue";
import Latoupiw from "../views/jeu/Latoupiw.vue";
import Chromatique1 from "../views/jeu/Chromatique1.vue";
import Chromatique2 from "../views/jeu/Chromatique2.vue";
import Cebouquetdefleurs from "../views/jeu/Cebouquetdefleurs=.vue";
import Lemanquidecoupedescocatrix1 from "../views/jeu/Lemanquidecoupedescocatrix1.vue";
import Lemanquidecoupedescocatrix2 from "../views/jeu/Lemanquidecoupedescocatrix2.vue";
import Jillvalentine1 from "../views/jeu/Jillvalentine1.vue";
import Jillvalentine2 from "../views/jeu/Jillvalentine2.vue";
import Bouquetdefleurs from "../views/jeu/Bouquetdefleurs=.vue";
import Lunechateetherisson from "../views/jeu/Lunechateetherisson.vue";
import Doom3 from "../views/jeu/Doom3.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Menu },
    { path: "/M", component: Palappapa1 },
    { path: "/O", component: Palappapa2 },
    { path: "/R", component: Palappapa3 },
    { path: "/I", component: Latoupiw },
    { path: "/m1", component: Chromatique1 },
    { path: "/e1", component: Chromatique2 },
    { path: "/m2", component: Cebouquetdefleurs },
    { path: "/e2", component: Lemanquidecoupedescocatrix1 },
    { path: "/n", component: Lemanquidecoupedescocatrix2 },
    { path: "/t", component: Jillvalentine1 },
    { path: "/o1", component: Jillvalentine2 },
    { path: "/memento", component: Bouquetdefleurs },
    { path: "/MO", component: Lunechateetherisson },
    { path: "/RI", component: Doom3 },
  ],
});

export default router;
