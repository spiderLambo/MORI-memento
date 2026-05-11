<script setup>
import { inject, ref, provide, onUnmounted } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const stopAllPnj = inject("stopAllPnj");
const pnjMouvement = inject("pnjMouvement");
const pnjPos1 = ref([0, 0]);
const spriteLink1 = ref("");
const pnjPos2 = ref([0, 0]);
const spriteLink2 = ref("");
const pnjPos3 = ref([0, 0]);
const spriteLink3 = ref("");
const pnjPos4 = ref([0, 0]);
const spriteLink4 = ref("");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

const sfx = new Audio("sound/sfx/chromatique2.wav");
sfx.loop = true;
sfx.play();

onUnmounted(() => {
  stopAllPnj();
  sfx.pause();
  sfx.src = "";
});

pnjMouvement(
  [
    [7, 2, 0, "secte/ronde/pos11.png"],
    [8, 2, 400, "secte/ronde/pos21.png"],
    [8, 3, 1150, "secte/ronde/pos31.png"],
    [7, 3, 400, "secte/ronde/pos41.png"],
    [6, 3, 1150, "secte/ronde/pos51.png"],
    [6, 2, 400, "secte/ronde/pos61.png"],
    [7, 2, 1150, "secte/ronde/pos11.png"],
  ],
  pnjPos1,
  spriteLink1,
  true,
);
pnjMouvement(
  [
    [8, 2, 0, "secte/ronde/pos22.png"],
    [8, 3, 400, "secte/ronde/pos32.png"],
    [7, 3, 1150, "secte/ronde/pos42.png"],
    [6, 3, 400, "secte/ronde/pos52.png"],
    [6, 2, 1150, "secte/ronde/pos62.png"],
    [7, 2, 400, "secte/ronde/pos12.png"],
    [8, 2, 1150, "secte/ronde/pos22.png"],
  ],
  pnjPos2,
  spriteLink2,
  true,
);
pnjMouvement(
  [
    [8, 3, 0, "secte/ronde/pos31.png"],
    [7, 3, 400, "secte/ronde/pos41.png"],
    [6, 3, 1150, "secte/ronde/pos51.png"],
    [6, 2, 400, "secte/ronde/pos61.png"],
    [7, 2, 1150, "secte/ronde/pos11.png"],
    [8, 2, 400, "secte/ronde/pos21.png"],
    [8, 3, 1150, "secte/ronde/pos31.png"],
  ],
  pnjPos3,
  spriteLink3,
  true,
);
pnjMouvement(
  [
    [7, 3, 0, "secte/ronde/pos42.png"],
    [6, 3, 400, "secte/ronde/pos52.png"],
    [6, 2, 1150, "secte/ronde/pos62.png"],
    [7, 2, 400, "secte/ronde/pos12.png"],
    [8, 2, 1150, "secte/ronde/pos22.png"],
    [8, 3, 400, "secte/ronde/pos32.png"],
    [7, 3, 1150, "secte/ronde/pos42.png"],
  ],
  pnjPos4,
  spriteLink4,
  true,
);

peuxBouger.value = true;
</script>

<template>
  <section>
    <img src="/assets/Jeu/chromatique/2/fg.png" id="fg" />
    <Pnj :position="pnjPos1" :sprite="spriteLink1" />
    <Pnj :position="pnjPos2" :sprite="spriteLink2" />
    <Pnj :position="pnjPos3" :sprite="spriteLink3" />
    <Pnj :position="pnjPos4" :sprite="spriteLink4" />
    <Poppy
      :spawn="[4, 11]"
      :sprite-type="2"
      :sprite-sens="'gauche'"
      :tp="{
        gauche: { positions: [], link: `` },
        droite: { positions: [], link: `` },
        haut: { positions: [], link: `` },
        bas: {
          positions: [
            [5, 4],
            [5, 5],
            [5, 6],
            [5, 7],
            [5, 8],
            [5, 9],
            [5, 10],
            [5, 11],
          ],
          link: `/m2`,
        },
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
        [1, 1],
        [1, 2],
        [1, 11],
        [2, 0],
        [2, 1],
      ]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("/assets/Jeu/chromatique/2/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  #fg {
    height: 100dvh;
    width: 100dvw;
    z-index: 100;
  }
}
</style>
