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
    <Poppy
      :spawn="[4, 0]"
      :sprite-type="2"
      :sprite-sens="'droite'"
      :tp="{
        gauche: {
          positions: [],
          link: ``,
        },
        droite: {
          positions: [
            [0, 11],
            [1, 11],
            [2, 11],
            [3, 11],
            [4, 11],
            [5, 11],
          ],
          link: `/RI`,
        },
        haut: {
          positions: [
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
          ],
          link: `/RI`,
        },
        bas: {
          positions: [],
          link: ``,
        },
      }"
      :interdis="[
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [0, 3],
        [1, 3],
        [0, 4],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/lunechatetherisson/bg.png")
    center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
}
</style>
