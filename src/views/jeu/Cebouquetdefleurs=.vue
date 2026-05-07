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
      :spawn="[0, 5]"
      :sprite-type="2"
      :sprite-sens="'droite'"
      :tp="{
        gauche: {
          positions: [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
          ],
          link: `/n`,
        },
        droite: {
          positions: [
            [1, 11],
            [2, 11],
            [3, 11],
            [4, 11],
          ],
          link: `/t`,
        },
        haut: {
          positions: [
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
          ],
          link: `/o1`,
        },
        bas: {
          positions: [
            [5, 1],
            [5, 2],
            [5, 3],
            [5, 4],
            [5, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [5, 9],
            [5, 10],
          ],
          link: `/e2`,
        },
      }"
      :interdis="[]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/cebouquetdefleurs=\)/1/bg.png")
    center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
}
</style>
