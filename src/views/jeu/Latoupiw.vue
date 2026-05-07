<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos1 = inject("pnjPos");
const spriteLink1 = inject("spriteLink");
const pnjPos2 = ref([0, 0]);
const spriteLink2 = ref("");
const pnjPos3 = ref([0, 0]);
const spriteLink3 = ref("");
const pnjPos4 = ref([0, 0]);
const spriteLink4 = ref("");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

pnjMouvement(
  [
    [7, 2, 0, "secte/ronde/pos11.png"],
    [8, 2, 400, "secte/ronde/pos21.png"],
    [8, 3, 1150, "secte/ronde/pos31.png"],
    [7, 3, 400, "secte/ronde/pos41.png"],
    [6, 3, 1150, "secte/ronde/pos51.png"],
    [6, 2, 400, "secte/ronde/pos61.png"],
    [7, 2, 1150, "secte/ronde/pos11.png"],
  ],
  pnjPos1,
  spriteLink1,
  true,
);

pnjMouvement(
  [
    [8, 2, 0, "secte/ronde/pos22.png"],
    [8, 3, 400, "secte/ronde/pos32.png"],
    [7, 3, 1150, "secte/ronde/pos42.png"],
    [6, 3, 400, "secte/ronde/pos52.png"],
    [6, 2, 1150, "secte/ronde/pos62.png"],
    [7, 2, 400, "secte/ronde/pos12.png"],
    [8, 2, 1150, "secte/ronde/pos22.png"],
  ],
  pnjPos2,
  spriteLink2,
  true,
);

pnjMouvement(
  [
    [8, 3, 0, "secte/ronde/pos31.png"],
    [7, 3, 400, "secte/ronde/pos41.png"],
    [6, 3, 1150, "secte/ronde/pos51.png"],
    [6, 2, 400, "secte/ronde/pos61.png"],
    [7, 2, 1150, "secte/ronde/pos11.png"],
    [8, 2, 400, "secte/ronde/pos21.png"],
    [8, 3, 1150, "secte/ronde/pos31.png"],
  ],
  pnjPos3,
  spriteLink3,
  true,
);

pnjMouvement(
  [
    [7, 3, 0, "secte/ronde/pos42.png"],
    [6, 3, 400, "secte/ronde/pos52.png"],
    [6, 2, 1150, "secte/ronde/pos62.png"],
    [7, 2, 400, "secte/ronde/pos12.png"],
    [8, 2, 1150, "secte/ronde/pos22.png"],
    [8, 3, 400, "secte/ronde/pos32.png"],
    [7, 3, 1150, "secte/ronde/pos42.png"],
  ],
  pnjPos4,
  spriteLink4,
  true,
);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}
peuxBouger.value = true;
</script>

<template>
  <section>
    <img src="../../assets/Jeu/latoupiw/fg.png" id="fg" />
    <Pnj :position="pnjPos1" :sprite="spriteLink1" />
    <Pnj :position="pnjPos2" :sprite="spriteLink2" />
    <Pnj :position="pnjPos3" :sprite="spriteLink3" />
    <Pnj :position="pnjPos4" :sprite="spriteLink4" />
    <Poppy
      :spawn="[5, 5]"
      :sprite-type="2"
      :sprite-sens="'droite'"
      :tp="{
        gauche: {
          positions: [],
          link: ``,
        },
        droite: {
          positions: [
            [2, 11],
            [3, 11],
            [4, 11],
            [5, 11],
          ],
          link: `/m1`,
        },
        haut: {
          positions: [],
          link: ``,
        },
        bas: {
          positions: [],
          link: ``,
        },
      }"
      :interdis="[
        [0, 0],
        [0, 1],
        [0, 2],
        [0, 3],
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
        [0, 10],
        [0, 11],
        [1, 0],
        [1, 1],
        [1, 2],
        [1, 11],
        [2, 0],
        [2, 1],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/latoupiw/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  #fg {
    height: 100dvh;
    width: 100dvw;
    z-index: 100;
  }
}
</style>
