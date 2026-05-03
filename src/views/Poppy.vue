<script setup>
import { ref } from 'vue';

const top = ref(0);
const left = ref(0);
let sprite = 1;
let direction = 'droite';

document.addEventListener("keydown", (e) => {
  sprite = sprite % 3 + 1;
  if (e.key == "ArrowDown") top.value +=16.6;
  else if (e.key == "ArrowUp") top.value -= 16.6;
  else if (e.key == "ArrowRight") {
    left.value += 8.3;
    direction = 'droite';
  }
  else if (e.key == "ArrowLeft") {
    left.value -= 8.3;
    direction = 'gauche';
  }
});
</script>

<template>
  <img 
    :src="`src/assets/poppy/${direction}/3/poppy${sprite}.svg`" 
    id="Poppy" 
    alt=""
    :style="{ top: top + 'vh', left: left + 'vw' }"
  >
</template>

<style lang="scss" scoped>
img {
    position: absolute;
    height: 16.6vh;
    width: 8.3vw;
    aspect-ratio: 794 / 805;
}
</style>