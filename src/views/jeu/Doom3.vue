<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";
import { useRouter } from "vue-router";

const room0 = inject("room0");
const room1 = inject("room1");
const room2 = inject("room2");
const room3 = inject("room3");
const room4 = inject("room4");
const room0SpawnPos = inject("room0SpawnPos");
const room0SpawnDir = inject("room0SpawnDir");

room0.value = false;
room1.value = false;
room2.value = false;
room3.value = false;
room4.value = false;
room0SpawnPos.value = [0, 5];
room0SpawnDir.value = "hautbas";

const router = useRouter();
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}
peuxBouger.value = true;

const event1Declanche = ref(false);
const texte = ref(0);

function event1() {
  event1Declanche.value = true;
  setTimeout(() => {
    texte.value = 1;
  }, 1300);
  setTimeout(() => {
    texte.value = 2;
  }, 2500);
  setTimeout(() => {
    texte.value = 3;
  }, 3700);
  setTimeout(() => {
    texte.value = 4;
  }, 4200);
  setTimeout(() => {
    texte.value = 5;
  }, 5300);
  setTimeout(() => {
    texte.value = 6;
  }, 6400);
  setTimeout(() => {
    texte.value = 7;
  }, 7800);
  setTimeout(() => {
    texte.value = 8;
  }, 8200);
  setTimeout(() => {
    texte.value = 9;
  }, 9100);
  setTimeout(() => {
    texte.value = 10;
  }, 9900);
  setTimeout(() => {
    texte.value = 11;
  }, 10700);
  setTimeout(() => {
    texte.value = 12;
  }, 11300);
  setTimeout(() => {
    texte.value = 13;
  }, 12000);
  setTimeout(() => {
    texte.value = 14;
  }, 13000);
  setTimeout(() => {
    texte.value = 15;
  }, 13500);
  setTimeout(() => {
    texte.value = 16;
  }, 13800);
  setTimeout(() => {
    texte.value = 17;
  }, 15000);
  setTimeout(() => {
    texte.value = 18;
  }, 15700);
  setTimeout(() => {
    texte.value = 19;
  }, 16400);
  setTimeout(() => {
    texte.value = 20;
  }, 17100);
  setTimeout(() => {
    texte.value = 21;
  }, 17800);
  setTimeout(() => {
    texte.value = 22;
  }, 18500);
  setTimeout(() => {
    texte.value = -1;
  }, 19200);
  setTimeout(() => {
    texte.value = -2;
  }, 21200);
  setTimeout(() => {
    texte.value = -3;
  }, 23200);
  setTimeout(() => {
    texte.value = -4;
  }, 25200);
  setTimeout(() => {
    texte.value = -5;
  }, 27200);
  setTimeout(() => {
    texte.value = -6;
  }, 29200);
  setTimeout(() => {
    texte.value = -7;
  }, 31200);
  setTimeout(() => {
    router.push("/");
  }, 32000);
}

function onPoppyMove({ top, left }) {
  if (5 == left && 5 == top && !event1Declanche.value) event1();
}
</script>

<template>
  <section>
    <img src="/assets/Jeu/doom3/fg.png" id="fg" />
    <Poppy
      @move="onPoppyMove"
      v-if="!event1Declanche"
      :spawn="[5, 0]"
      :sprite-type="3"
      :sprite-sens="'droite'"
      :tp="{
        gauche: { positions: [], link: `` },
        droite: { positions: [], link: `` },
        haut: { positions: [], link: `` },
        bas: { positions: [], link: `` },
      }"
      :interdis="[
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [3, 1],
        [4, 1],
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [0, 3],
        [1, 3],
        [2, 3],
        [3, 3],
        [4, 3],
        [0, 4],
        [1, 4],
        [2, 4],
        [3, 4],
        [4, 4],
        [0, 5],
        [1, 5],
        [2, 5],
        [3, 5],
        [4, 5],
        [0, 6],
        [1, 6],
        [2, 6],
        [3, 6],
        [4, 6],
        [0, 7],
        [1, 7],
        [2, 7],
        [3, 7],
        [4, 7],
        [0, 8],
        [1, 8],
        [2, 8],
        [3, 8],
        [4, 8],
        [0, 9],
        [1, 9],
        [2, 9],
        [3, 9],
        [4, 9],
        [0, 10],
        [1, 10],
        [2, 10],
        [3, 10],
        [4, 10],
        [0, 11],
        [1, 11],
        [2, 11],
        [3, 11],
        [4, 11],
      ]"
    />
    <Pnj :sprite="'chat/stand/stand.svg'" :position="[7, 5]" />
    <img
      v-if="event1Declanche"
      src="/assets/pnj/poppy/stand/stand1.svg"
      id="Poppy"
    />

    <Transition v-if="texte >= 1" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 2" name="fade"
      ><h1 class="texte1">la nuit est profonde</h1></Transition
    >
    <Transition v-if="texte >= 3" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 4" name="fade"
      ><h1 class="texte1">la nuit est profonde</h1></Transition
    >
    <Transition v-if="texte >= 5" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 6" name="fade"
      ><h1 class="texte1">la nuit est profonde</h1></Transition
    >
    <Transition v-if="texte >= 7" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 8" name="fade"
      ><h1 class="texte1">la nuit est profonde</h1></Transition
    >
    <Transition v-if="texte >= 9" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 10" name="fade"
      ><h1 class="texte1">la nuit est profonde</h1></Transition
    >
    <Transition v-if="texte >= 11" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 12" name="fade"
      ><h1 class="texte1">la nuit est profonde</h1></Transition
    >
    <Transition v-if="texte >= 13" name="fade"
      ><h1 class="texte1">La nuit est noire</h1></Transition
    >
    <Transition v-if="texte >= 14" name="fade"
      ><h1 class="texte1">noire</h1></Transition
    >
    <Transition v-if="texte >= 15" name="fade"
      ><h1 class="texte1">noire</h1></Transition
    >
    <Transition v-if="texte >= 16" name="fade"
      ><h1 class="texte1">noire</h1></Transition
    >

    <Transition v-if="texte == 17" name="fade"
      ><h1 class="texte2">Que</h1></Transition
    >
    <Transition v-else-if="texte == 18" name="fade"
      ><h1 class="texte2">veux</h1></Transition
    >
    <Transition v-else-if="texte == 19" name="fade"
      ><h1 class="texte2">tu</h1></Transition
    >
    <Transition v-else-if="texte == 20" name="fade"
      ><h1 class="texte2">qu'on</h1></Transition
    >
    <Transition v-else-if="texte == 21" name="fade"
      ><h1 class="texte2">fonde</h1></Transition
    >
    <Transition v-else-if="texte == 22" name="fade"
      ><h1 class="texte2">?</h1></Transition
    >

    <div v-if="texte < 0" class="clignoteur"></div>
    <img v-if="texte == -2" src="/cover.jpg" id="Cover" />
    <Transition v-else-if="texte == -3" name="fade"
      ><h1 class="texte3">MEMENTO! mori Poppy</h1></Transition
    >
    <img
      v-else-if="texte == -4"
      src="/coverfinale.jpg"
      id="Cover"
      :style="{ zIndex: 500 }"
    />
    <Transition v-else-if="texte == -5" name="fade"
      ><h1 class="texte3" :style="{ zIndex: 500 }">Merci tkkf</h1></Transition
    >
    <Transition v-else-if="texte == -6" name="fade"
      ><h1 class="texte3" :style="{ zIndex: 500 }">
        Merci Charlotte Missaa
      </h1></Transition
    >
    <Transition v-else-if="texte == -7" name="fade"
      ><h1 class="texte3" :style="{ zIndex: 500 }">&#60;3</h1></Transition
    >
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("/assets/Jeu/doom3/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  #fg {
    height: 100dvh;
    width: 100dvw;
  }

  #Poppy {
    position: absolute;
    height: 16.6vh;
    width: 8.3vw;
    top: 83vh;
    left: 41.5vw;
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
    color: whitesmoke;
    text-shadow: 1px 1px 2px red;

    &.texte1 {
      &:nth-of-type(1) {
        left: 10px;
        top: 10px;
      }
      &:nth-of-type(2) {
        right: 20vw;
        top: 10vh;
        rotate: 7deg;
      }
      &:nth-of-type(3) {
        right: 28vw;
        top: 17vh;
        rotate: -5deg;
      }
      &:nth-of-type(4) {
        left: 18vw;
        top: 16vh;
        rotate: 20deg;
      }
      &:nth-of-type(5) {
        left: 50vw;
        top: 50vh;
      }
      &:nth-of-type(6) {
        right: 50vw;
        top: 38vh;
        rotate: -16deg;
      }
      &:nth-of-type(7) {
        left: 15vw;
        top: 18vh;
        rotate: -9deg;
      }
      &:nth-of-type(8) {
        right: 10vw;
        top: 28vh;
        rotate: 21deg;
      }
      &:nth-of-type(9) {
        left: 30vw;
        top: 28vh;
        rotate: 9deg;
      }
      &:nth-of-type(10) {
        right: 40vw;
        top: 12vh;
        rotate: 4deg;
      }
      &:nth-of-type(11) {
        right: 31vw;
        top: 44vh;
        rotate: 70deg;
      }
      &:nth-of-type(12) {
        right: 10vw;
        top: 57vh;
        rotate: -5deg;
      }
      &:nth-of-type(13) {
        left: 10vw;
        top: 57vh;
      }
      &:nth-of-type(14) {
        left: 35vw;
        top: 65vh;
      }
      &:nth-of-type(15) {
        left: 47vw;
        top: 74vh;
      }
      &:nth-of-type(16) {
        left: 47vw;
        top: 27vh;
        scale: 3;
      }
    }

    &.texte2 {
      font-size: 70vh;
    }
    &.texte3 {
      font-size: 30vh;
    }
    &.texte2,
    &.texte3 {
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
      margin: 0;
      width: 100dvw;
      text-align: center;
    }
  }

  .clignoteur {
    position: fixed;
    height: 100dvh;
    width: 100dvw;
    background-color: #000000;
    z-index: 100;
    animation: clignote linear 0.1s 70;
  }

  #Cover {
    height: 75dvh;
    aspect-ratio: 1/1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
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
