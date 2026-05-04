<script setup>
import { provide, ref } from "vue";

const pnjPos = ref([0, 0]);

async function pnjMouvement(poss) {
  for (const pos of poss) {
    await new Promise((resolve) =>
      setTimeout(() => {
        pnjPos.value[0] = pos[0];
        pnjPos.value[1] = pos[1];
        resolve();
      }, pos[2]),
    );
  }
}

provide("pnjMouvement", pnjMouvement);
provide("pnjPos", pnjPos);
</script>

<template>
  <RouterView />
</template>
