<template>
    <div class="rates__main">
        <div class="item" :class="rate.id == RateSelect ? 'item-active' : ''" v-for="rate in rates">
            <div class="title">
                <span class="dark--semibold">{{ rate.title }}</span>
                <span class="dark--semibold">{{ rate.price }} ₽</span>
            </div>
            <div class="list">
                <div v-for="option in rate.options" class="rates__item">
                    <img alt=""
                        :src="rate.id == RateSelect ? '/images/rates/mark-pink.svg' : '/images/rates/mark-blue.svg'">
                    <p class="dark--medium" v-html="option"></p>
                </div>
            </div>
            <Button :color="rate.id == RateSelect ? 'pink' : 'blue'" class="item__btn"
                @click="setRateSelect(rate.id)">Выбрать тариф</Button>
            <p class="align--center" :class="rate.id == RateSelect ? 'violet--medium' : 'violet--medium'">{{
                rate.description
            }}</p>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

import Button from '@/UI/Buttons/Button.vue';

const RateSelect = ref(2)

function setRateSelect(id) {
    RateSelect.value = id
}

let rates = [
    {
        id: 1,
        title: "SMM",
        price: 399,
        description: "При оплате на 6 месяцев 1799 (~299 рублей в месяц)",
        options: [
            "Работа с любыми вводными <br> (размер, текст, картинки)",
            "Автоматическая <br> генерация изображения", "Редактирование изображений",
            "Создание проектов",
            "Скачивание изображений в любом формате (jpeg,png,svg)",
            "Создание изображений для разных площадок и платформ"
        ]
    },
    {
        id: 2,
        title: "Презентации",
        price: 449,
        description: "При оплате на 6 месяцев 2399 (~399 рублей в месяц)",
        options: [
            "Автоматическая <br> генерация <br> дизайна презентаций",
            "Редактирование <br> слайдов",
            "Создание фирменного стиля презентаций ",
            "Работа с инфографикой: графики, таблицы",
            "Совместное редактирование",
            "Загрузка презентаций <br> в формате pdf"
        ]
    },
    {
        id: 3,
        title: "Все и сразу",
        price: 649,
        description: "При оплате на 6 месяцев 3299 (~549 рублей в месяц)",
        options: [
            "Все функции тарифа «SММ»",
            "Все функции тарифа «Презентации»",
            "Доступ ко всему функционалу <br> платформмы",
        ]
    }
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