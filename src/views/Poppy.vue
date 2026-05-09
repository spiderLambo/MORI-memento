<script setup>
import { ref, onUnmounted, inject } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  interdis: Array,
  spawn: Array,
  tp: Object,
  spriteType: Number,
  spriteSens: String,
});

const emit = defineEmits(["move"]);

const peuxBouger = inject("peuxBouger");

const top = ref(props.spawn[0]);
const left = ref(props.spawn[1]);
let sprite;
if (props.spriteSens[0] == "h") {
  sprite = ref(1);
} else {
  sprite = ref(2);
}
let direction = ref(props.spriteSens);

function getImgUrl() {
  return new URL(
    "../assets/poppy/" +
      direction.value +
      "/" +
      props.spriteType +
      "/poppy" +
      sprite.value +
      ".svg",
    import.meta.url,
  ).href;
}

function verifieValeurs(l, lig, col) {
  for (const x of l) {
    if (x[0] == lig && x[1] == col) {
      if (lig < 6 && col < 12) return true;
      else return false;
    }
  }
  return false;
}

function handleKeydown(e) {
  if (!peuxBouger.value) return;

  const modeHaut = props.spriteSens[0] == "h";

  if (modeHaut) {
    if (e.key == "ArrowLeft") direction.value = "hautgauche";
    else if (e.key == "ArrowRight") direction.value = "hautdroite";
    else if (e.key == "ArrowDown") direction.value = "hautbas";
    else if (e.key == "ArrowUp") direction.value = "hauthaut";
  } else {
    sprite.value = (sprite.value % 3) + 1;
    if (e.key == "ArrowLeft") direction.value = "gauche";
    else if (e.key == "ArrowRight") direction.value = "droite";
  }

  if (e.key == "ArrowDown") {
    if (
      props.tp.bas.positions.some(
        ([x, y]) => x === top.value && y === left.value,
      )
    )
      router.push(props.tp.bas.link);
    if (!verifieValeurs(props.interdis, top.value + 1, left.value))
      top.value += 1;
  } else if (e.key == "ArrowUp") {
    if (
      props.tp.haut.positions.some(
        ([x, y]) => x === top.value && y === left.value,
      )
    )
      router.push(props.tp.haut.link);
    if (!verifieValeurs(props.interdis, top.value - 1, left.value))
      top.value -= 1;
  } else if (e.key == "ArrowLeft") {
    if (
      props.tp.gauche.positions.some(
        ([x, y]) => x === top.value && y === left.value,
      )
    )
      router.push(props.tp.gauche.link);
    if (!verifieValeurs(props.interdis, top.value, left.value - 1))
      left.value -= 1;
  } else if (e.key == "ArrowRight") {
    if (
      props.tp.droite.positions.some(
        ([x, y]) => x === top.value && y === left.value,
      )
    )
      router.push(props.tp.droite.link);
    if (!verifieValeurs(props.interdis, top.value, left.value + 1))
      left.value += 1;
  }

  if (top.value < 0) top.value = 0;
  if (top.value >= 6) top.value = 5;
  if (left.value < 0) left.value = 0;
  if (left.value >= 12) left.value = 11;

  emit("move", { top: top.value, left: left.value });
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
}
</style>
