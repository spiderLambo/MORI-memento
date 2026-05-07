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
    <img src="../../assets/Jeu/chromatique/1/fg1.png" id="fg1" />
    <img src="../../assets/Jeu/chromatique/1/fg2.png" id="fg2" />
    <Poppy
      style="translate: -50% -50%"
      :spawn="[1, 0]"
      :sprite-type="2"
      :sprite-sens="'droite'"
      :tp="{
        gauche: {
          positions: [[1, 0]],
          link: `/e1`,
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
        [2, 0],
        [2, 1],
        [2, 2],
        [2, 3],
        [2, 4],
        [2, 5],
        [2, 6],
        [2, 7],
        [2, 8],
        [2, 9],
        [3, 0],
        [3, 1],
        [4, 0],
        [4, 3],
        [4, 4],
        [4, 5],
        [4, 6],
        [4, 7],
        [4, 8],
        [4, 9],
        [4, 10],
        [4, 11],
        [5, 0],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/chromatique/1/bg.png")
    center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;

  #fg1,
  #fg2 {
    position: absolute;
    height: 80dvh;
    width: 102dvw;
  }

  #fg2 {
    right: -10px;
    top: 0;
  }

  #fg1 {
    bottom: 0;
    left: -10px;
  }
}
</style>
