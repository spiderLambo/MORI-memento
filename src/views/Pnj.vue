<script setup>
defineOptions({ inheritAttrs: true });
const props = defineProps({
  position: Array,
  sprite: String,
});

// ✅
function getImgUrl() {
  return `/assets/pnj/${props.sprite}`;
}
</script>

<template>
  <img
    :src="getImgUrl()"
    :style="{
      top: props.position[1] * 16.6 + 'vh',
      left: props.position[0] * 8.3 + 'vw',
    }"
  />
</template>

<style lang="scss" scoped>
img {
  position: absolute;
  height: 16.6vh;
  aspect-ratio: auto;
}
</style>
