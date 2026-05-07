<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos = inject("pnjPos");
const spriteLink = inject("spriteLink");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);
pnjMouvement([
  [1, 3, 0, "secte/courDroite/pnj1.svg"],
  [2, 3, 400, "secte/courDroite/pnj2.svg"],
  [3, 3, 400, "secte/courDroite/pnj3.svg"],
  [4, 3, 1150, "secte/courDroite/pnj2.svg"],
  [5, 3, 400, "secte/courDroite/pnj1.svg"],
  [6, 3, 1150, "secte/courDroite/pnj2.svg"],
  [7, 3, 400, "secte/courDroite/pnj3.svg"],
  [7, 2, 1150, "secte/courGauche/pnj2.svg"],
  [7, 2, 400, "secte/standGauche/pnj1.svg"],
]);
async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}

const spriteType = ref(1);
const event1Declanche = ref(false);
let event1Positions = [
  [1, 5],
  [2, 5],
  [3, 5],
  [4, 5],
  [4, 6],
  [5, 6],
];

function event1() {
  event1Declanche.value = true;
  spriteType.value = 2;

  attendre(3500);
  pnjMouvement([
    [8, 2, 0, "secte/courDroiteFleur/pnj1.svg"],
    [9, 2, 400, "secte/courDroiteFleur/pnj2.svg"],
    [9, 3, 1150, "secte/courDroiteFleur/pnj3.svg"],
    [10, 3, 400, "secte/courDroiteFleur/pnj2.svg"],
    [11, 3, 1150, "secte/courDroiteFleur/pnj1.svg"],
    [-1, -1, 400, ""],
  ]);
}

function onPoppyMove({ top, left }) {
  if (
    event1Positions.some(([y, x]) => x == left && y == top) &&
    !event1Declanche.value
  ) {
    event1();
  }
}

attendre(5450);
</script>

<template>
  <section>
    <img src="../../assets/Jeu/palappapa/2/fg.png" id="fg" />
    <img src="../../assets/Jeu/palappapa/2/fleur.svg" id="fleur" />
    <Transition name="fade">
      <h1 v-if="event1Declanche">Des fleurs ont poussé dans ma cervelle</h1>
    </Transition>
    <Pnj :position="pnjPos" :sprite="spriteLink" />
    <Poppy
      @move="onPoppyMove"
      :spawn="[2, 0]"
      :sprite-type="spriteType"
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
          link: `/R`,
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
        [0, 4],
        [0, 5],
        [0, 6],
        [0, 7],
        [0, 8],
        [0, 9],
        [0, 10],
        [0, 11],
        [1, 11],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/palappapa/2/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  display: flex;
  position: relative;

  #fg {
    height: 100dvh;
    aspect-ratio: 758 / 1080;
    z-index: 100;
  }

  #fleur {
    position: absolute;
    height: 8.3vh;
    left: 50vw;
    top: 50vh;
    aspect-ratio: 812 / 354;
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
    right: 10px;
    top: 10px;
    color: whitesmoke;
    text-shadow: 1px 1px 2px red;
  }
}
</style>
