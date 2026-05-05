<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos = inject("pnjPos");
const spriteLink = inject("spriteLink");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);
// pnjMouvement([
//   [6, 3, 0, "secte/courDroite/pnj1.svg"],
//   [7, 3, 400, "secte/courDroite/pnj2.svg"],
//   [8, 3, 400, "secte/courDroite/pnj3.svg"],
//   [9, 3, 1150, "secte/courDroite/pnj2.svg"],
//   [10, 3, 400, "secte/courDroite/pnj1.svg"],
//   [11, 3, 1150, "secte/courDroite/pnj2.svg"],
//   [-1, -1, 400, ""],
// ]);

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
    <img src="../../assets/Jeu/palappapa/3/fg.png" id="fg" />
    <!-- <Pnj :position="pnjPos" :sprite="spriteLink" /> -->
    <Poppy
      @move="onPoppyMove"
      :spawn="[4, 0]"
      :sprite-type="2"
      :tp="{
        gauche: {
          positions: [],
          link: ``,
        },
        droite: {
          positions: [],
          link: ``,
        },
        haut: {
          positions: [
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
          ],
          link: `/I`,
        },
        bas: {
          positions: [],
          link: ``,
        },
      }"
      :interdis="[
        [0, 0],
        [1, 0],
        [0, 1],
        [1, 1],
        [0, 2],
        [1, 2],
        [0, 3],
        [0, 9],

        [5, 9],
        [5, 8],
        [0, 10],
        [4, 10],
        [5, 10],
        [0, 11],
        [1, 11],
        [3, 11],
        [4, 11],
        [5, 11],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/palappapa/3/bg.png") center/cover;
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
