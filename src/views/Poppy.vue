<script setup>
import { ref, onUnmounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  interdis: Array,
  spawn: Array,
  tp: Object,
});

const top = ref(props.spawn[0]);
const left = ref(props.spawn[1]);
let sprite = ref(2);
let direction = ref("droite");

function getImgUrl() {
  return new URL(
    "../assets/poppy/" + direction.value + "/1/poppy" + sprite.value + ".svg",
    import.meta.url,
  ).href;
}

function verifieValeurs(l, lig, col) {
  for (const x of l) {
    console.log(lig);

    if (x[0] == lig && x[1] == col) {
      if (lig < 6 && col < 12) return true;
      else return false;
    }
  }
  return false;
}

function handleKeydown(e) {
  sprite.value = (sprite.value % 3) + 1;

  let bouge = true;

  if (e.key == "ArrowLeft") direction.value = "gauche";
  else if (e.key == "ArrowRight") direction.value = "droite";
  if (bouge) {
    if (
      e.key == "ArrowDown" &&
      !verifieValeurs(props.interdis, top.value + 1, left.value)
    )
      top.value += 1;
    else if (
      e.key == "ArrowUp" &&
      !verifieValeurs(props.interdis, top.value - 1, left.value)
    )
      top.value -= 1;
    else if (
      e.key == "ArrowLeft" &&
      !verifieValeurs(props.interdis, top.value, left.value - 1)
    ) {
      left.value -= 1;
    } else if (e.key == "ArrowRight") {
      if (
        props.tp.droite.positions.some(
          ([x, y]) => x === top.value && y === left.value,
        )
      ) {
        router.push(props.tp.droite.link);
      }
      if (!verifieValeurs(props.interdis, top.value, left.value + 1)) {
        left.value += 1;
        direction.value = "droite";
      }
    }
    bouge = false;
  }

  if (top.value < 0) top.value = 0;
  if (top.value >= 6) top.value = 5;
  if (left.value < 0) left.value = 0;
  if (left.value >= 12) left.value = 11;
}

document.addEventListener("keydown", handleKeydown);

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeydown);
});
</script>

<template>
  <img
    :src="getImgUrl()"
    id="Poppy"
    alt=""
    :style="{ top: top * 16.6 + 'vh', left: left * 8.3 + 'vw' }"
  />
</template>

<style lang="scss" scoped>
img {
  position: absolute;
  height: 16.6vh;
  width: 8.3vw;
  aspect-ratio: 794 / 805;
}
</style>
