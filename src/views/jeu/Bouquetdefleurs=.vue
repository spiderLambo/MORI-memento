<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

const pnjMouvement = inject("pnjMouvement");
const position = ref([0, 0]);
const sprite = ref("");
const texte = ref(0);
const peuxPop = ref(false);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}

pnjMouvement(
  [
    [0, 3, 0, "poppy/droite/poppy1.svg"],
    [1, 3, 400, "poppy/droite/poppy2.svg"],
    [2, 3, 400, "poppy/droite/poppy3.svg"],
    [3, 3, 400, "poppy/droite/poppy2.svg"],
    [4, 3, 400, "poppy/droite/poppy1.svg"],
    [5, 3, 400, "poppy/droite/poppy2.svg"],
    [5, 3, 400, "poppy/stand/stand.svg"],
    [5, 3, 11800, "poppy/stand/stand1.svg"],
    [11, 3, 400, "chat/gauche/chat1.svg"],
    [11, 3, 800, "chat/stand/stand.svg"],
    [11, 3, 3200, "chat/droite/chat1.svg"],
    [-1, -1, 600, ""],
  ],
  position,
  sprite,
);

setTimeout(() => {
  texte.value = 1;
}, 2400);
setTimeout(() => {
  texte.value = 2;
}, 3900);
setTimeout(() => {
  texte.value = 3;
}, 5400);
setTimeout(() => {
  texte.value = 4;
}, 7400);
setTimeout(() => {
  texte.value = 5;
}, 8000);
setTimeout(() => {
  texte.value = 6;
}, 8600);
setTimeout(() => {
  texte.value = 7;
}, 9200);
setTimeout(() => {
  texte.value = 8;
}, 9800);
setTimeout(() => {
  texte.value = 9;
}, 10400);
setTimeout(() => {
  texte.value = 10;
}, 11000);
setTimeout(() => {
  texte.value = 0;
}, 14000);
setTimeout(() => {
  texte.value = 11;
}, 16400);
setTimeout(() => {
  texte.value = 12;
}, 17400);
setTimeout(() => {
  peuxPop.value = true;
}, 14600);
attendre(19200);
</script>

<template>
  <section>
    <img src="/assets/Jeu/bouquetdefleurs=/fg.png" id="fg" />
    <Pnj :position="position" :sprite="sprite" />
    <Transition name="fade">
      <h1 v-if="texte == 1" id="Texte1">J'suis perdu dans la fo-forêt</h1>
      <h1 v-else-if="texte == 2" id="Texte2">J'ai peur et j'suis terrifié</h1>
      <h1 v-else-if="texte == 3" id="Texte3">J'connais le vice de TKKF</h1>
      <h1 v-else-if="texte == 4" id="Texte4">Comment</h1>
      <h1 v-else-if="texte == 5" id="Texte4">pourrai-je</h1>
      <h1 v-else-if="texte == 6" id="Texte4">aimer</h1>
      <h1 v-else-if="texte == 7" id="Texte4">les</h1>
      <h1 v-else-if="texte == 8" id="Texte4">gens</h1>
      <h1 v-else-if="texte == 9" id="Texte4">?</h1>
      <h1 v-else-if="texte == 10" id="Texte5">
        Dis-moi, l'bonheur il est par où ?
      </h1>
      <h1 v-else-if="texte == 11" id="Texte6">Ah, bonsoir, pitit chat</h1>
      <h1 v-else-if="texte == 12" id="Texte6">
        Ah, bonsoir, pitit chat <br />
        Veux-tu une cigarette ?
      </h1>
    </Transition>
    <div v-if="texte == 10" class="clignoteur"></div>
    <Poppy
      v-if="peuxPop"
      :spawn="[3, 5]"
      :sprite-type="3"
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
          link: `/MO`,
        },
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
        [1, 0],
        [1, 11],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("/assets/Jeu/bouquetdefleurs=/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  #fg {
    height: 100vh;
    aspect-ratio: 445 / 1080;
    z-index: 50;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.2s ease-in-out;
  }
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }

  h1 {
    font-size: 7.5vh;
    position: absolute;
    color: whitesmoke;
    text-shadow: 1px 1px 2px red;
    opacity: 0;
    z-index: 100;

    &#Texte1 {
      animation: text1 1.5s ease-out 1;
    }
    &#Texte2 {
      animation: text2 1.5s ease-out 1;
    }
    &#Texte3 {
      position: fixed;
      opacity: 1;
      left: 50%;
      transform: translateX(-50%);
      animation: clignote 0.2s linear 10;
    }
    &#Texte4 {
      opacity: 1;
      font-size: 50vh;
      margin: 0;
      padding: 0;
      width: 100%;
      text-align: center;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &#Texte5 {
      opacity: 1;
      font-size: 15vh;
      width: 100%;
      margin: 0;
      padding: 0;
      text-align: center;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
    &#Texte6 {
      opacity: 1;
      top: 10px;
      right: 20px;
    }
  }

  .clignoteur {
    position: fixed;
    height: 100dvh;
    width: 100dvw;
    background-color: #000000;
    z-index: 1000;
    animation: clignote 0.1s linear 30;
    visibility: hidden;
  }
}

@keyframes text1 {
  from {
    opacity: 1;
    top: 15vh;
    left: 6vw;
    rotate: -23deg;
    scale: 1;
  }
  to {
    opacity: 1;
    top: 34vh;
    left: 23vw;
    rotate: 0deg;
    scale: 0.1;
  }
}

@keyframes text2 {
  from {
    opacity: 1;
    right: 10vw;
    top: 12vh;
    rotate: 38deg;
    scale: 1;
  }
  to {
    opacity: 1;
    right: 33vw;
    top: 42vh;
    rotate: 0deg;
    scale: 0.1;
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
