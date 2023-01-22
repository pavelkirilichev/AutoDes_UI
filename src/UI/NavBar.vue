<template>
    <nav class="navbar">
        <ul class="navbar__left">
            <li class="logo__block">
                <img src="/images/logo.svg" alt="">
                <span class="item__text text__logo">Autodesigner</span>
            </li>
            <li>
                <span class="item__text">Мои работы</span>
            </li>
            <li>
                <span class="item__text">FAQ</span>
            </li>
            <li>
                <span class="item__text">О нас</span>
            </li>
            <li>
                <span class="item__text">Тарифы</span>
            </li>
            <li>
                <span class="item__text">Блог</span>
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
    width: 1170px;
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

.item__text {
    cursor: pointer;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}

.navbar__right {
    display: flex;
    align-items: center;
    gap: 15px;
}

.text__logo {
    font-weight: 400;
    font-family: 'Inter';
}
</style>

