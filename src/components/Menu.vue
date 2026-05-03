<script setup></script>

<template>
    <header>
        <h1>MORI! memento</h1>
        <ul>
            <li><a href="#">Jouer</a></li>
        </ul>
    </header>
</template>

<style lang="scss" scoped>
header {
    background: no-repeat url('../assets/Menu/bgMenu.png') center/cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #da0005;

    h1 {
        font-size: 25vh;
        margin: 0;
    }

    ul {
        list-style-type: none;
        font-size: 20vh;
        padding: 0;
        margin: 0;
        a {
            display: inline-block;
            text-decoration: none;
            color: #e32522;
            transition: all 0.1s ease-in-out;

            &:hover {
                color: #da0005;
                transform: scale(1.2);
            }
        }
    }
}
</style>