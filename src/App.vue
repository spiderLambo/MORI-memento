<script setup>
import { provide, ref } from "vue";

const pnjPos = ref([0, 0]);
const spriteLink = ref("");
const activeLoops = [];

const room0 = ref(false);
const room1 = ref(false);
const room2 = ref(false);
const room3 = ref(false);
const room4 = ref(false);

const room0SpawnPos = ref([0, 5]);
const room0SpawnDir = ref("hautbas");

async function pnjMouvement(poss, pos, sprite, loop = false) {
  pos = pos || pnjPos;
  sprite = sprite || spriteLink;

  let timeoutId;
  let actif = true;

  activeLoops.push(() => {
    actif = false;
    clearTimeout(timeoutId);
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
provide("room0", room0);
provide("room1", room1);
provide("room2", room2);
provide("room3", room3);
provide("room4", room4);
provide("room0SpawnPos", room0SpawnPos);
provide("room0SpawnDir", room0SpawnDir);
</script>

<template>
  <RouterView />
</template>
