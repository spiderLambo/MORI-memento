<script setup>
import { provide, ref } from "vue";

const pnjPos = ref([0, 0]);
const spriteLink = ref("");

async function pnjMouvement(poss, pos, sprite, loop = false) {
  pos = pos || pnjPos;
  sprite = sprite || spriteLink;

  do {
    for (const p of poss) {
      await new Promise((resolve) =>
        setTimeout(() => {
          pos.value[0] = p[0];
          pos.value[1] = p[1];
          sprite.value = p[3];
          resolve();
        }, p[2]),
      );
    }
  } while (loop);
}

provide("pnjMouvement", pnjMouvement);
provide("pnjPos", pnjPos);
provide("spriteLink", spriteLink);
</script>

<template>
  <RouterView />
</template>
