<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const room0 = inject("room0");
const room1 = inject("room1");
const room0SpawnPos = inject("room0SpawnPos");
const room0SpawnDir = inject("room0SpawnDir");
room0SpawnPos.value = [5, 5];
room0SpawnDir.value = "hauthaut";
const bg = ref(
  `url('${new URL("../../assets/Jeu/lemanquidecoupedescocatrix/1/bg.png", import.meta.url).href}')`,
);

room0.value = true;

const spritePnj = ref("secte/haut/hauthaut.svg");

const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}
const event1Declanche = ref(false);
const cligoteurVisible = ref(false);

if (room1.value) {
  event1Declanche.value = true;
  bg.value = `url('${new URL("../../assets/Jeu/lemanquidecoupedescocatrix/1bis/bg.png", import.meta.url).href}')`;
  spritePnj.value = "secte/mort/pnj1.png";
}

peuxBouger.value = true;

function event1() {
  event1Declanche.value = true;
  attendre(0.8);
  setTimeout(() => {
    bg.value = `url('${new URL("../../assets/Jeu/lemanquidecoupedescocatrix/1bis/bg.png", import.meta.url).href}')`;
    spritePnj.value = "secte/mort/pnj1.png";
  }, 400);
  cligoteurVisible.value = true;
  setTimeout(() => {
    cligoteurVisible.value = false;
  }, 800);
  room1.value = true;
}
</script>

<template>
  <section :style="{ backgroundImage: bg }">
    <Poppy
      :spawn="[0, 5]"
      :sprite-type="1"
      :sprite-sens="'hautbas'"
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
            [0, 2],
            [0, 3],
            [0, 4],
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
          ],
          link: `/m2`,
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
        [3, 0],
        [4, 0],
        [5, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [5, 1],

        [0, 10],
        [1, 10],
        [2, 10],
        [3, 10],
        [4, 10],
        [5, 10],
        [0, 11],
        [1, 11],
        [2, 11],
        [3, 11],
        [4, 11],
        [5, 11],

        [5, 2],
        [5, 3],
        [5, 4],
        [5, 5],
        [5, 6],
        [5, 7],
        [5, 8],
        [5, 9],

        [4, 5],
      ]"
    />
    <Pnj
      :position="[5, 4]"
      :sprite="spritePnj"
      :class="{ clickable: !event1Declanche }"
      @click="!event1Declanche && event1()"
    />
    <Transition name="fade">
      <h1 v-if="event1Declanche" class="ev-1">
        Je suis dans un champ de fleurs, il est jonché de cadavres
      </h1>
    </Transition>
    <div v-if="event1Declanche && cligoteurVisible" class="clignoteur"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  :deep(img.clickable) {
    cursor: pointer;
  }

  h1 {
    font-size: 7.5vh;
    position: absolute;
    color: whitesmoke;
    text-shadow: 1px 1px 2px red;
    bottom: 10px;
    text-align: center;
    left: 50%;
    translate: -50%;
    width: 100%;
  }

  .clignoteur {
    position: fixed;
    height: 100dvh;
    width: 100dvw;
    background-color: #000000;
    z-index: 1000;
    animation: clignote linear 0.1s 8;
  }
}

@keyframes clignote {
  0%,
  49%,
  100% {
    visibility: visible;
  }
  50%,
  99% {
    visibility: hidden;
  }
}
</style>
