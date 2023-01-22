<template>
    <div class="PA__main">
        <span class="title">Личный кабинет</span>
        <PA_Menu />

    </div>
</template>

<script setup>
import PA_Menu from "./Menu.vue";
</script>

<style scoped>
.PA__main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #000000;
}
</style>

