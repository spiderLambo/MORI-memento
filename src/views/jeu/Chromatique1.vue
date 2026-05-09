<script setup>
import { ref, provide } from "vue";
import Poppy from "../Poppy.vue";

const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}

const sortie = ref([]);
const event1Declanche = ref(false);
let event1Positions = [[1, 2]];
const event2Declanche = ref(false);
let event2Positions = [[3, 10]];
const event3Declanche = ref(false);
let event3Positions = [[3, 7]];
const event4Declanche = ref(false);
let event4Positions = [[3, 4]];
const event5Declanche = ref(false);
let event5Positions = [[5, 6]];
const event6Declanche = ref(false);
let event6Positions = [[5, 11]];

const afficheImage = ref(false);
const numImage = ref(1);

function getImgUrl(num) {
  return `/assets/vision/vision${num}.png`;
}

function afficherImage(d1, d2) {
  afficheImage.value = true;
  numImage.value = 1;
  attendre((d1 + d2) * 1000);
  setTimeout(() => {
    numImage.value = 2;
  }, d1 * 1000);
  setTimeout(
    () => {
      afficheImage.value = false;
    },
    (d1 + d2) * 1000,
  );
}

function event1() {
  event1Declanche.value = true;
}
function event2() {
  event2Declanche.value = true;
  afficherImage(1, 0);
}
function event3() {
  event3Declanche.value = true;
  afficherImage(0.7, 0.1);
}
function event4() {
  event4Declanche.value = true;
  afficherImage(0.5, 0.2);
}
function event5() {
  event5Declanche.value = true;
  afficherImage(0.2, 0.7);
}
function event6() {
  event6Declanche.value = true;
  afficherImage(0, 1.5);
  sortie.value = [1, 0];
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
  if (
    event3Positions.some(([y, x]) => x == left && y == top) &&
    !event3Declanche.value
  )
    event3();
  if (
    event4Positions.some(([y, x]) => x == left && y == top) &&
    !event4Declanche.value
  )
    event4();
  if (
    event5Positions.some(([y, x]) => x == left && y == top) &&
    !event5Declanche.value
  )
    event5();
  if (
    event6Positions.some(([y, x]) => x == left && y == top) &&
    !event6Declanche.value
  )
    event6();
}

peuxBouger.value = true;
</script>

<template>
  <section>
    <img src="/assets/Jeu/chromatique/1/fg1.png" id="fg1" />
    <img src="/assets/Jeu/chromatique/1/fg2.png" id="fg2" />
    <Transition name="fade">
      <h1 v-if="event6Declanche">
        Un peu d'amour, un peu d'eau fraiche, un peu de traumatismes
      </h1>
      <h1 v-else-if="event1Declanche">J'm'enfonce dans les ténèbres</h1>
    </Transition>
    <div id="vision" v-if="afficheImage">
      <img :src="getImgUrl(numImage)" />
    </div>
    <Poppy
      style="translate: -50% -50%"
      @move="onPoppyMove"
      :spawn="[1, 0]"
      :sprite-type="2"
      :sprite-sens="'droite'"
      :tp="{
        gauche: { positions: [sortie], link: `/e1` },
        droite: { positions: [], link: `` },
        haut: { positions: [], link: `` },
        bas: { positions: [], link: `` },
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
  background: no-repeat url("/assets/Jeu/chromatique/1/bg.png") center/cover;
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

  #vision {
    position: fixed;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    z-index: 100;

    img {
      aspect-ratio: auto;
      height: 100%;
    }
  }
}
</style>
