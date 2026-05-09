<script setup>
import { inject, ref, provide } from "vue";
import Poppy from "../Poppy.vue";
import Pnj from "../Pnj.vue";

const pnjMouvement = inject("pnjMouvement");
const pnjPos = ref([0, 0]);
const spriteLink = ref("");
const peuxBouger = ref(false);
provide("peuxBouger", peuxBouger);

pnjMouvement(
  [
    [1, 3, 0, "chat/stand/stand.svg"],
    [2, 3, 400, "chat/droite/chat1.svg"],
    [3, 3, 400, "chat/droite/chat2.svg"],
    [4, 3, 400, "chat/droite/chat1.svg"],
    [5, 3, 400, "chat/droite/chat2.svg"],
    [5, 2, 400, "chat/droite/chat1.svg"],
    [6, 2, 400, "chat/droite/chat2.svg"],
    [6, 1, 400, "chat/droite/chat1.svg"],
    [7, 1, 400, "chat/droite/chat2.svg"],
    [8, 1, 400, "chat/droite/chat1.svg"],
    [9, 1, 400, "chat/droite/chat2.svg"],
    [9, 0, 400, "chat/droite/chat1.svg"],
    [10, 0, 400, "chat/droite/chat2.svg"],
    [11, 0, 400, "chat/droite/chat1.svg"],
    [-1, -1, 400, ""],
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
attendre(5600);
</script>

<template>
  <section>
    <Poppy
      :spawn="[4, 0]"
      :sprite-type="3"
      :sprite-sens="'droite'"
      :tp="{
        gauche: { positions: [], link: `` },
        droite: {
          positions: [
            [0, 11],
            [1, 11],
            [2, 11],
            [3, 11],
            [4, 11],
            [5, 11],
          ],
          link: `/RI`,
        },
        haut: {
          positions: [
            [0, 5],
            [0, 6],
            [0, 7],
            [0, 8],
            [0, 9],
            [0, 10],
            [0, 11],
          ],
          link: `/RI`,
        },
        bas: { positions: [], link: `` },
      }"
      :interdis="[
        [0, 0],
        [1, 0],
        [2, 0],
        [0, 1],
        [1, 1],
        [2, 1],
        [0, 2],
        [1, 2],
        [0, 3],
        [1, 3],
        [0, 4],
      ]"
    />
    <Pnj :sprite="spriteLink" :position="pnjPos" />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("/assets/Jeu/lunechatetherisson/bg.png")
    center/cover;
  height: 100dvh;
  width: 100dvw;
  position: relative;
}
</style>
