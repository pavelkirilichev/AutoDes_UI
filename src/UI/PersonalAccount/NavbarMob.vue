<template>
    <div class="navbar__main" :class="navbar == 0 ? 'navbar__main--disable' : ''">
        <div class="logo__block navbar__topic">
            <div class="navbar__topic__logo">
                <img src="/images/logo.svg" alt="" class="logo-img" />
                <span class="item__text text__logo">Autodesigner</span>
            </div>
            <img :src="`/images/navbar/${navbar == 1 ? 'close' : 'burger'}.svg`" class="close-img"
                @click="$emit('changeNavbar')" />
        </div>
        <ul class="navbar__left navbar__list" v-if="navbar == 1">
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
        <div class="btn__container" v-if="navbar == 1">
            <Button color="pink-transparent">Выйти</Button>
            <button class="btn-arrow">
                <span>Перейти в личный кабинет</span>
                <img src="/images/navbar/arrow.svg" alt="" />
            </button>
        </div>
    </div>
</template>
<script>
import Button from "../Buttons/Button.vue";
import { ref } from "vue";

export default {
    components: { Button },
    emits: [
        "changeNavbar"
    ],
    props: {
        navbar: Number
    }
}

</script>

<style scoped>
.close-img {
    margin-right: 10px;
}

.logo-img {
    width: 37px;
    height: 37px;
}

.navbar__main {
    width: 100%;
    height: 100vh;
    padding: 36px 15px 0 15px;
    display: flex;
    flex-direction: column;
    background: #F5F5F7;
}

.navbar__main--disable {
    height: initial;
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
