<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const room1 = inject("room1");
const room0SpawnPos = inject("room0SpawnPos");
const room0SpawnDir = inject("room0SpawnDir");
room0SpawnPos.value = [5, 5];
room0SpawnDir.value = "hauthaut";

const spritePnj = ref("secte/haut/hauthaut.svg");

const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

async function attendre(dure) {
  peuxBouger.value = false;
  setTimeout(() => {
    peuxBouger.value = true;
  }, dure);
}
peuxBouger.value = true;
</script>

<template>
  <section>
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
      ]"
    />
    <Pnj :position="[5, 4]" :sprite="spritePnj" class="clickable" />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat
    url("../../assets/Jeu/lemanquidecoupedescocatrix/1/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
  display: flex;

  :deep(img.clickable) {
    cursor: pointer;
  }
}
</style>
