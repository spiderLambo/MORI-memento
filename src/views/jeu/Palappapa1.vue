<script setup>
import Poppy from '../Poppy.vue';
import Pnj from '../Pnj.vue';
</script>

<template>
    <section>
        <img src="../../assets/Jeu/palappapa/1/fg.png">
    </section>
    <Pnj :position="[2,2]" :sprite="1"/>
    <Poppy :interdis="[[0,6],[0,7],[0,8],[1,8],[0,9],[1,9],[0,10],[1,10],[0,11],[1,11]]"/>
</template>

<style lang="scss" scoped>
section {
    background: no-repeat url('../../assets/Jeu/palappapa/1/bg.png') center/cover;
    height: 100dvh;
    width: 100dvw;
    display: flex;
    flex-direction: row-reverse;

    img {
        height: 100dvh;
        aspect-ratio: 682 / 1080;
        z-index: 100;
    }
}
</style>