<script setup>
import { inject } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos = inject("pnjPos");
pnjMouvement([
  [6, 3, 0],
  [7, 3, 400],
  [8, 3, 400],
  [9, 3, 1150],
  [10, 3, 400],
  [11, 3, 1150],
  [-1, -1, 400],
]);
</script>

<template>
  <section>
    <img src="../../assets/Jeu/palappapa/1/fg.png" />
  </section>
  <Pnj :position="pnjPos" :sprite="1" />
  <Poppy
    :spawn="[2, 2]"
    :tp="{
      gauche: {
        positions: [],
        link: ``,
      },
      droite: {
        positions: [
          [2, 10],
          [3, 10],
          [4, 10],
          [5, 10],
        ],
        link: `/O`,
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
      [0, 6],
      [0, 7],
      [0, 8],
      [1, 8],
      [0, 9],
      [1, 9],
      [0, 10],
      [1, 10],
      [0, 11],
      [1, 11],
    ]"
  />
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/palappapa/1/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: row-reverse;

  img {
    height: 100dvh;
    aspect-ratio: 682 / 1080;
    z-index: 100;
  }
}
</style>
