<script setup>
import { ref } from "vue";

const props = defineProps({
  interdis: Array,
});

const top = ref(0);
const left = ref(0);
let sprite = ref(1);
let direction = ref("droite");

function getImgUrl() {
  return new URL(
    "../assets/poppy/" + direction.value + "/1/poppy" + sprite.value + ".svg",
    import.meta.url,
  ).href;
}

function verifieValeurs(l, lig, col) {
  for (const x of l) {
    if (x[0] == lig && x[1]==col) {return true;}
  }
  return false;
}

document.addEventListener("keydown", (e) => {
  sprite.value = (sprite.value % 3) + 1;

  const ligne = Math.floor(top.value / 16.6);
  const colonne = Math.floor(left.value / 8.3);
  let bouge = true;

  if (e.key == "ArrowLeft") direction.value = "gauche";
  else if (e.key == "ArrowRight") direction.value = "droite";
  if (bouge) {
    if (
      e.key == "ArrowDown" &&
      !verifieValeurs(props.interdis, ligne + 1, colonne)
    )
      top.value += 16.6;
    else if (
      e.key == "ArrowUp" &&
      !verifieValeurs(props.interdis, ligne - 1, colonne)
    )
      top.value -= 16.6;
    else if (
      e.key == "ArrowLeft" &&
      !verifieValeurs(props.interdis, ligne, colonne - 1)
    ) {
      left.value -= 8.3;
    } else if (
      e.key == "ArrowRight" &&
      !verifieValeurs(props.interdis, ligne, colonne + 1)
    ) {
      left.value += 8.3;
      direction.value = "droite";
    }
    bouge = false;
  }

  if (top.value < 0) top.value = 0;
  if (top.value >= 100) top.value = 83.4;
  if (left.value < 0) left.value = 0;
  if (left.value >= 100) left.value = 91.7;
});
</script>

<template>
  <img :src="getImgUrl()" id="Poppy" alt="" :style="{ top: top + 'vh', left: left + 'vw' }" />
</template>

<style lang="scss" scoped>
img {
  position: absolute;
  height: 16.6vh;
  width: 8.3vw;
  aspect-ratio: 794 / 805;
}
</style>
