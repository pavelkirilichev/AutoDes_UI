<template>
    <div class="rates__main">
        <div class="item">
            <div class="title">
                <span class="dark--semibold">SMM</span>
                <span class="dark--semibold">399 ₽ </span>
            </div>
            <div class="list">
                <div v-for="item in ratesFirst" class="rates__item">
                    <img src="/images/rates/mark-blue.svg" alt="">
                    <p class="dark--medium" v-html="item"></p>
                </div>
            </div>
            <Button color="blue" class="item__btn">Выбрать тариф</Button>
            <p class="violet--medium align--center">При оплате на 6 месяцев 1799 (~299 рублей в месяц)</p>
        </div>
        <div class="item item-active">
            <div class="title">
                <span class="dark--semibold">Презентации</span>
                <span class="dark--semibold">449 ₽ </span>
            </div>
            <div class="list">
                <div v-for="item in ratesSecond" class="rates__item">
                    <img src="/images/rates/mark-pink.svg" alt="">
                    <p class="dark--medium" v-html="item"></p>
                </div>
            </div>
            <Button color="pink" class="item__btn">Выбрать тариф</Button>
            <p class="violet--medium align--center">При оплате на 6 месяцев 2399 (~399 рублей в месяц)</p>
        </div>
        <div class="item">
            <div class="title">
                <span class="dark--semibold">Все и сразу</span>
                <span class="dark--semibold">649 ₽ </span>
            </div>
            <div class="list">
                <div v-for="item in ratesThird" class="rates__item">
                    <img src="/images/rates/mark-blue.svg" alt="">
                    <p class="dark--medium" v-html="item"></p>
                </div>
            </div>
            <Button color="blue" class="item__btn">Выбрать тариф</Button>
            <p class="violet--medium align--center">При оплате на 6 месяцев 3299 (~549 рублей в месяц)</p>
        </div>
    </div>
</template>

<script setup>
import Button from '@/UI/Buttons/Button.vue';

let ratesFirst = [
    "Работа с любыми вводными <br> (размер, текст, картинки)",
    "Автоматическая <br> генерация изображения", "Редактирование изображений",
    "Создание проектов",
    "Скачивание изображений в любом формате (jpeg,png,svg)",
    "Создание изображений для разных площадок и платформ"
]
let ratesSecond = [
    "Автоматическая <br> генерация <br> дизайна презентаций",
    "Редактирование <br> слайдов",
    "Создание фирменного стиля презентаций ",
    "Работа с инфографикой: графики, таблицы",
    "Совместное редактирование",
    "Загрузка презентаций <br> в формате pdf"
]
let ratesThird = [
    "Все функции тарифа «SММ»",
    "Все функции тарифа «Презентации»",
    "Доступ ко всему функционалу <br> платформмы",
]



</script>

<style scoped>
.rates__main {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 34px;
}

.item {
    padding: 20px 0;
    width: 267px;
    height: 573px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border-radius: 10px;
}

.item-active {
    box-shadow: 0px 0px 9px 1px rgba(252, 113, 159, 0.28);
}

.title {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.list {
    margin-top: 20px;
    height: 323px;
    padding-left: 22px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.rates__item {
    display: flex;
    gap: 10px;
}

.item__btn {
    margin: 20px 0;
    border-radius: 10px;
}
</style>