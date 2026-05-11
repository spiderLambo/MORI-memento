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
    [1, 3, 0, "secte/courDroiteFleur/pnj1.svg"],
    [2, 3, 400, "secte/courDroiteFleur/pnj2.svg"],
    [3, 3, 400, "secte/courDroiteFleur/pnj3.svg"],
    [4, 3, 1150, "secte/courDroiteFleur/pnj2.svg"],
    [4, 2, 400, "secte/courDroiteFleur/pnj1.svg"],
    [5, 2, 1150, "secte/courDroiteFleur/pnj2.svg"],
    [6, 2, 400, "secte/standFrontFleur/pnj1.svg"],
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

const event1Declanche = ref(false);
const event2Declanche = ref(false);
let event1Positions = [
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [4, 4],
  [5, 4],
];
let event2Positions = [
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [3, 5],
  [4, 5],
  [5, 5],
];

function event1() {
  event1Declanche.value = true;
}
function event2() {
  event2Declanche.value = true;
}

function onPoppyMove({ top, left }) {
  if (
    event1Positions.some(([y, x]) => x == left && y == top) &&
    !event1Declanche.value
  )
    event1();
  if (
    event2Positions.some(([y, x]) => x == left && y == top) &&
    !event2Declanche.value
  )
    event2();
}

attendre(3900);
setTimeout(() => {
  sfx.play();
}, 3900);

anim.play();
</script>

<template>
  <section>
    <img src="/assets/Jeu/palappapa/3/fg.png" id="fg" />
    <Transition name="fade">
      <h1 v-if="event2Declanche">Moi j'tourne autour de toi</h1>
      <h1 v-else-if="event1Declanche">Nan, j'veux qu'on s'oublie pas</h1>
    </Transition>
    <Pnj :position="pnjPos" :sprite="spriteLink" />
    <Poppy
      @move="onPoppyMove"
      :spawn="[4, 0]"
      :sprite-type="2"
      :sprite-sens="'droite'"
      :tp="{
        gauche: { positions: [], link: `` },
        droite: { positions: [], link: `` },
        haut: {
          positions: [
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
          ],
          link: `/I`,
        },
        bas: { positions: [], link: `` },
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
        [2, 6],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("/assets/Jeu/palappapa/3/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  #fg {
    height: 100dvh;
    width: 100dvw;
    z-index: 100;
  }

  .fade-enter-active {
    transition: opacity 0.2s ease-in-out;
  }
  .fade-enter-from {
    opacity: 0;
  }

  h1 {
    font-size: 7.5vh;
    position: absolute;
    left: 10px;
    color: whitesmoke;
    text-shadow: 1px 1px 2px red;
  }
}
</style>
