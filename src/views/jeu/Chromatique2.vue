<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos = inject("pnjPos");
const spriteLink = inject("spriteLink");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

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
    <img src="../../assets/Jeu/chromatique/2/fg.png" id="fg" />
    <Poppy
      :spawn="[4, 11]"
      :sprite-type="2"
      :sprite-sens="'gauche'"
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
          positions: [],
          link: ``,
        },
        bas: {
          positions: [
            [5, 4],
            [5, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [5, 9],
            [5, 10],
            [5, 11],
          ],
          link: `/m2`,
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
  background: no-repeat url("../../assets/Jeu/chromatique/2/bg.png")
    center/cover;
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
