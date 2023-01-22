<template>
    <nav class="navbar">
        <ul class="navbar__left">
            <li class="logo__block">
                <img src="../../public/images/navbar/logo.svg" alt="">
                <span class="item__text">Autodesigner</span>
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
            <button-blue>Приветствуем, Олег!</button-blue>
            <button-pink-transparent>Выйти</button-pink-transparent>
        </div>
    </nav>
</template>

<script>
import ButtonBlue from "./Buttons/ButtonBlue.vue";
import ButtonPinkTransparent from "./Buttons/ButtonPinkTransparent.vue";

export default {
    components: {
        ButtonBlue,
        ButtonPinkTransparent,
    },
};
</script>

<style scoped>
.navbar {
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 37px;
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

.item__text {
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}

.navbar__right {
    display: flex;
    align-items: center;
    gap: 15px;
}
</style>

