<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const room0 = inject("room0");
const room1 = inject("room1");
const room2 = inject("room2");
const room3 = inject("room3");
const room4 = inject("room4");
const room0SpawnPos = inject("room0SpawnPos");
const room0SpawnDir = inject("room0SpawnDir");

if (!(room1.value || room2.value || room3.value || room4.value)) {
  room0SpawnPos.value = [0, 5];
  room0SpawnDir.value = "hautbas";
}

const spritePnj = ref("secte/haut/hauthaut.svg");

const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

const tpList = ref({
  gauche: {
    positions: [],
    link: ``,
  },
  droite: {
    positions: [],
    link: ``,
  },
  haut: {
    positions: [],
    link: ``,
  },
  bas: {
    positions: [],
    link: ``,
  },
});

const interdisList = ref([
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
  [0, 2],
  [1, 2],
  [2, 2],
  [3, 2],
  [4, 2],
  [5, 2],
  [0, 3],
  [1, 3],
  [2, 3],
  [3, 3],
  [4, 3],
  [5, 3],
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4],
  [4, 4],
  [5, 4],

  [0, 6],
  [1, 6],
  [2, 6],
  [3, 6],
  [4, 6],
  [5, 6],
  [0, 7],
  [1, 7],
  [2, 7],
  [3, 7],
  [4, 7],
  [5, 7],
  [0, 8],
  [1, 8],
  [2, 8],
  [3, 8],
  [4, 8],
  [5, 8],
  [0, 9],
  [1, 9],
  [2, 9],
  [3, 9],
  [4, 9],
  [5, 9],
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

  [3, 5],
]);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}
const event1Declanche = ref(false);
const event2Declanche = ref(false);
const event3Declanche = ref(false);
const event4Declanche = ref(false);
const bg = ref(
  `url('${new URL("../../assets/Jeu/cebouquetdefleurs=)/1/bg.png", import.meta.url).href}')`,
);
let event3Positions = [[1, 5]];
const afficheEv3 = ref(false);
const cligoteurVisible = ref(false);

if (room0.value) {
  event1Declanche.value = true;
  event2Declanche.value = true;
  event3Declanche.value = true;
  event4Declanche.value = true;
  bg.value = `url('${new URL("../../assets/Jeu/cebouquetdefleurs=)/1bis/bg.png", import.meta.url).href}')`;
  spritePnj.value = "secte/mort/fleur.png";
  interdisList.value = [[3, 5]];
  tpList.value = {
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
  };
  peuxBouger.value = true;
} else {
  peuxBouger.value = false;

  setTimeout(() => {
    event1Declanche.value = true;
  }, 750);
  setTimeout(() => {
    event2Declanche.value = true;
    peuxBouger.value = true;
  }, 1500);
}

function event3() {
  attendre(1.2);
  event3Declanche.value = true;
  afficheEv3.value = true;
  setTimeout(() => {
    afficheEv3.value = false;
  }, 1200);
}

function event4() {
  cligoteurVisible.value = true;
  setTimeout(() => {
    bg.value = `url('${new URL("../../assets/Jeu/cebouquetdefleurs=)/1bis/bg.png", import.meta.url).href}')`;
  }, 500);
  attendre(800);
  setTimeout(() => {
    cligoteurVisible.value = false;
    event4Declanche.value = true;
  }, 800);

  spritePnj.value = "secte/mort/fleur.png";
  interdisList.value = [[3, 5]];
  tpList.value = {
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
  };

  room0.value = true;
}

function onPoppyMove({ top, left }) {
  if (
    event3Positions.some(([y, x]) => x == left && y == top) &&
    !event3Declanche.value
  ) {
    event3();
  }
}
</script>

<template>
  <section :style="{ backgroundImage: bg }">
    <Poppy
      @move="onPoppyMove"
      :spawn="room0SpawnPos"
      :sprite-type="1"
      :sprite-sens="room0SpawnDir"
      :tp="tpList"
      :interdis="interdisList"
    />
    <Pnj
      :position="[5, 3]"
      :sprite="spritePnj"
      :class="{ clickable: event3Declanche && !event4Declanche }"
      @click="event3Declanche && event4()"
    />

    <Transition name="fade">
      <h1 v-if="event1Declanche && !event3Declanche" class="ev-1">
        Avec elle j'ai confiance
      </h1>
    </Transition>
    <Transition name="fade">
      <h1 v-if="event2Declanche && !event3Declanche" class="ev-2">
        Ils avaient tous des rêves, <br />
        c'qui n'm'intéressait guère
      </h1>
    </Transition>
    <Transition name="fade">
      <h1 v-if="event3Declanche && afficheEv3" class="ev-3">Tu vois nada</h1>
    </Transition>
    <div v-if="!event4Declanche && cligoteurVisible" class="clignoteur"></div>
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;

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

    &.ev-1 {
      left: 10px;
      top: 10px;
    }
    &.ev-2 {
      right: 10px;
      top: 10px;
    }
    &.ev-3 {
      font-size: 30vh;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      margin: 0;
      animation: clignote linear 0.1s 8;
    }
  }

  :deep(img.clickable) {
    cursor: pointer;
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
