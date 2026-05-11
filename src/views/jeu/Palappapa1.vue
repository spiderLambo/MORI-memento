<script setup>
import { inject, ref, provide, onUnmounted } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos = ref([0, 0]);
const spriteLink = ref("");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

const anim = new Audio("sound/anim/palappapa1.mp3");
const sfx = new Audio("sound/sfx/palappapa1.mp3");
sfx.loop = true;

onUnmounted(() => {
  sfx.pause();
  sfx.src = "";
});

pnjMouvement(
  [
    [6, 3, 0, "secte/courDroite/pnj1.svg"],
    [7, 3, 400, "secte/courDroite/pnj2.svg"],
    [8, 3, 400, "secte/courDroite/pnj3.svg"],
    [9, 3, 1150, "secte/courDroite/pnj2.svg"],
    [10, 3, 400, "secte/courDroite/pnj1.svg"],
    [11, 3, 1150, "secte/courDroite/pnj2.svg"],
    [-1, -1, 400, ""],
  ],
  pnjPos,
  spriteLink,
);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}
attendre(3900);

setTimeout(() => {
  sfx.play();
}, 3900);
anim.play();
</script>

<template>
  <section>
    <img src="/assets/Jeu/palappapa/1/fg.png" />
  </section>
  <Pnj :position="pnjPos" :sprite="spriteLink" />
  <Poppy
    :spawn="[2, 2]"
    :sprite-type="1"
    :sprite-sens="'droite'"
    :tp="{
      gauche: { positions: [], link: `` },
      droite: {
        positions: [
          [2, 11],
          [3, 11],
          [4, 11],
          [5, 11],
        ],
        link: `/O`,
      },
      haut: { positions: [], link: `` },
      bas: { positions: [], link: `` },
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
  background: no-repeat url("/assets/Jeu/palappapa/1/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: row-reverse;
  position: relative;

  img {
    height: 100dvh;
    aspect-ratio: 682 / 1080;
    z-index: 100;
  }
}
</style>
