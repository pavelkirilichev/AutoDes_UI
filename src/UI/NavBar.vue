<template>
    <nav class="navbar">
        <ul class="navbar__left">
            <li class="logo__block">
                <img src="/images/logo.svg" alt="">
                <span class="item__text text__logo">Autodesigner</span>
            </li>
            <li>
                <span class="black--medium">Мои работы</span>
            </li>
            <li>
                <span class="black--medium">FAQ</span>
            </li>
            <li>
                <span class="black--medium">О нас</span>
            </li>
            <li>
                <span class="black--medium">Тарифы</span>
            </li>
            <li>
                <span class="black--medium">Блог</span>
            </li>
        </ul>
        <div class="navbar__right">
            <Button color="blue">Приветствуем, Олег!</Button>
            <Button color="pink-transparent">Выйти</Button>
        </div>
    </nav>
</template>

<script setup>
import Button from "./Buttons/Button.vue";
</script>

<style scoped>
.navbar {
    padding-top: 20px;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.navbar__left {
    display: flex;
    align-items: center;
    gap: 40px;
}

.logo__block {
    display: flex;
    gap: 5px;
    align-items: center;
}

.logo__block img {
    cursor: pointer;
}


.navbar__right {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>

