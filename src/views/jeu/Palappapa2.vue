<script setup>
import Poppy from "../Poppy.vue";
</script>

<template>
  <section>
    <img src="../../assets/Jeu/palappapa/2/fg.png" id="fg" />
    <img src="../../assets/Jeu/palappapa/2/fleur.svg" id="fleur" />
    <Poppy
      :spawn="[2, 0]"
      :tp="{
        gauche: {
          positions: [],
          link: ``,
        },
        droite: {
          positions: [],
          link: ``,
        },
        haut: {
          positions: [],
          link: ``,
        },
        bas: {
          positions: [],
          link: ``,
        },
      }"
      :interdis="[]"
    />
  </section>
</template>

<style lang="scss" scoped>
section {
  background: no-repeat url("../../assets/Jeu/palappapa/2/bg.png") center/cover;
  height: 100dvh;
  width: 100dvw;
  display: flex;

  #fg {
    height: 100dvh;
    aspect-ratio: 758 / 1080;
    z-index: 100;
  }

  #fleur {
    position: absolute;
    height: 8.3vh;
    left: 50vw;
    top: 50vh;
    aspect-ratio: 812 / 354;
  }
}
</style>
