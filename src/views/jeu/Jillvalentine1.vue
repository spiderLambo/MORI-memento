<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const room0 = inject("room0");
const room3 = inject("room3");
const room0SpawnPos = inject("room0SpawnPos");
const room0SpawnDir = inject("room0SpawnDir");
room0SpawnPos.value = [2, 11];
room0SpawnDir.value = "hautgauche";
room0.value = true;

const bg = ref(`url('/assets/Jeu/jillvalentine/1/bg.png')`);
const spritePnj = ref("secte/haut/hautgauche.svg");
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

if (room3.value) {
  event1Declanche.value = true;
  bg.value = `url('/assets/Jeu/jillvalentine/1bis/bg.png')`;
  spritePnj.value = "secte/mort/pnj3.png";
}

peuxBouger.value = true;

function event1() {
  event1Declanche.value = true;
  attendre(0.8);
  setTimeout(() => {
    bg.value = `url('/assets/Jeu/jillvalentine/1bis/bg.png')`;
    spritePnj.value = "secte/mort/pnj3.png";
  }, 200);
  cligoteurVisible.value = true;
  setTimeout(() => {
    cligoteurVisible.value = false;
  }, 800);
  room3.value = true;
}
</script>

<template>
  <section :style="{ backgroundImage: bg }">
    <Poppy
      :spawn="[2, 0]"
      :sprite-type="1"
      :sprite-sens="'hautdroite'"
      :tp="{
        gauche: {
          positions: [
            [1, 0],
            [2, 0],
            [3, 0],
            [4, 0],
          ],
          link: `/m2`,
        },
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
        [1, 11],
        [2, 11],
        [3, 11],
        [4, 11],
        [1, 10],
        [2, 10],
        [3, 10],
        [4, 10],
        [5, 0],
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
        [5, 11],
        [3, 9],
      ]"
    />
    <Pnj
      :position="[9, 3]"
      :sprite="spritePnj"
      :class="{ clickable: !event1Declanche }"
      @click="!event1Declanche && event1()"
    />
    <Transition name="fade">
      <h1 v-if="event1Declanche" class="ev-1">
        Évidemment qu'on fera la diff'
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
    top: 10px;
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
