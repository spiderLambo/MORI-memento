<script setup>
import { provide, ref } from "vue";

const pnjPos = ref([0, 0]);
const spriteLink = ref("");
const activeLoops = [];

async function pnjMouvement(poss, pos, sprite, loop = false) {
  pos = pos || pnjPos;
  sprite = sprite || spriteLink;

  let timeoutId;
  let actif = true;

  activeLoops.push(() => {
    actif = false;
    clearTimeout(timeoutId); // 👈 annule le timeout en cours
  });

  do {
    for (const p of poss) {
      if (!actif) return;
      await new Promise((resolve) => {
        timeoutId = setTimeout(() => {
          if (actif) {
            pos.value[0] = p[0];
            pos.value[1] = p[1];
            sprite.value = p[3];
          }
          resolve();
        }, p[2]);
      });
    }
  } while (loop && actif);
}

function stopAllPnj() {
  activeLoops.forEach((stop) => stop());
  activeLoops.length = 0;
}

provide("pnjMouvement", pnjMouvement);
provide("stopAllPnj", stopAllPnj);
provide("pnjPos", pnjPos);
provide("spriteLink", spriteLink);
</script>

<template>
  <RouterView />
</template>
