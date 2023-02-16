<template>
    <div class="navbar__main">
        <div class="logo__block navbar__topic">
            <div class="navbar__topic__logo">
                <img src="/images/logo.svg" alt="" />
                <span class="item__text text__logo">Autodesigner</span>
            </div>
            <img src="/images/navbar/close.svg" />
        </div>
        <ul class="navbar__left navbar__list">
            <li>
                <span class="black--medium">Мои проекты</span>
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
        <div class="btn__container">
            <Button color="pink-transparent">Выйти</Button>
            <button class="btn-arrow">
                <span>Перейти в личный кабинет</span>
                <img src="/images/navbar/arrow.svg" alt="" />
            </button>
        </div>
    </div>
</template>
<script setup>
import Button from "./Buttons/Button.vue";
</script>

<style scoped>
.navbar__main {
    width: 100%;
    padding: 36px 5px 0 6px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.navbar__topic {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navbar__topic__logo {
    display: flex;
    align-items: center;
}

.navbar__topic__logo>*+* {
    margin-left: 5px
}

.navbar__list {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.navbar__list>*+* {
    margin-top: 20px
}

.btn__container {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.btn__container>*+* {
    margin-top: 14px
}

.btn-arrow {
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding: 8px 15px;
    border-radius: 5px;
    background: #3b0cfa;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
}

.btn-arrow>*+* {
    margin-left: 13px
}
</style>
