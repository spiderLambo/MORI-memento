<script setup>
const props = defineProps({
  position: Array,
  sprite: Number,
});

function getImgUrl() {
  return new URL(
    "../assets/villageois/courDroite/pnj" + props.sprite + ".svg",
    import.meta.url,
  ).href;
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
  width: 8.3vw;
  aspect-ratio: 794 / 805;
}
</style>
