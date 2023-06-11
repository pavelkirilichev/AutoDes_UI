<template>
    <div class="rates">
        <span class="black--semibold">Тарифные планы</span>
        <div class="rates__title-block">
            <span class="white--medium">Ваш тариф: {{ RateTitle }}</span>
        </div>
        <span class="black--medium">Следующее списание: 24.09.2023</span>
        <div class="rates__main" :style="{ marginTop: '20px' }">
            <div class="item" :class="rate.id == RateSelect ? 'item-active' : ''" v-for="rate in rates"
                @mouseover="setRateSelect(rate.id)" @mouseleave="setRateSelect(0)" @click="setRateTitle(rate.title)">
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
                <Button :color="rate.id == RateSelect ? 'pink' : 'blue'" class="item__btn">{{
                    rate.title == RateTitle ?
                    'Тариф выбран' : 'Выбрать тариф'
                }}</Button>
                <p class="align--center" :class="rate.id == RateSelect ? 'violet--medium' : 'violet--medium'">{{
                    rate.description
                }}</p>
            </div>

        </div>
        <div class="rates__main-mobile" :style="{ marginTop: '20px' }" v-touch:swipe="changeIndexSwipe()">
            <img src="/images/rates/arrow-left.svg" alt="" class="arrow-left" v-if="RateIndex > 1"
                @click="changeIndex('left')">
            <div class="item" :class="rate.id == RateSelect ? 'item-active' : ''"
                v-for="rate in rates.filter(item => item.id === RateIndex)" @mouseover="setRateSelect(rate.id)"
                @mouseleave="setRateSelect(0)" @click="setRateTitle(rate.title)">
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
                <Button :color="rate.id == RateSelect ? 'pink' : 'blue'" class="item__btn">{{
                    rate.title == RateTitle ?
                    'Тариф выбран' : 'Выбрать тариф'
                }}</Button>
                <p class="align--center" :class="rate.id == RateSelect ? 'violet--medium' : 'violet--medium'">{{
                    rate.description
                }}</p>
            </div>
            <img src="/images/rates/arrow-right.svg" alt="" class="arrow-right" v-if="RateIndex < 3"
                @click="changeIndex('right')">
        </div>
    </div>
</template>

<script setup>

import { ref } from 'vue';

import Button from '@/UI/Buttons/Button.vue';

const RateSelect = ref(0)
const RateTitle = ref("Презентации")
const RateIndex = ref(2)

function setRateSelect(id) {
    RateSelect.value = id
    //const title = rates.find(item => item.id = id).title


}

function setRateTitle(title) {
    RateTitle.value = title
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

function changeIndexSwipe() {
    return function (side) {
        if (side === "left") {
            if (RateIndex.value < 3) {
                RateIndex.value += 1
            }
        }
        else if (side === "right") {
            if (RateIndex.value > 1) {
                RateIndex.value -= 1
            }
        }
    }

}
function changeIndex(side) {
    if (side === "left") {
        RateIndex.value -= 1
    }
    else {
        RateIndex.value += 1
    }
}
</script>

<style scoped>
.rates {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.rates__title-block {
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 8px 48px;
    background: #3B0CFA;
    border-radius: 5px;
}

.rates__title-block span {
    font-size: 20px;
    line-height: 24px;
}

.rates__main {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.rates__main>*+* {
    margin-left: 34px
}

.item {
    cursor: pointer;
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
}

.title>*+* {
    margin-top: 20px
}

.list {
    margin-top: 20px;
    height: 323px;
    padding-left: 22px;
    display: flex;
    flex-direction: column;
}

.list>*+* {
    margin-top: 15px
}

.rates__item {
    display: flex;
    align-items: center;
}

.rates__item>*+* {
    margin-left: 10px
}

.item__btn {
    margin: 20px 0;
    border-radius: 10px;
}

.rates__main-mobile {
    display: none;
}

@media (max-width: 1015px) {
    .rates__title-block span {
        font-size: 15px;
    }

    .rates__main-mobile {
        position: relative;
        display: flex;
        width: 100vw;
        max-width: 450px;
        justify-content: center;
    }

    .rates__main {
        display: none;
    }

    .arrow-left {
        width: 13.75px;
        height: 22.25px;
        position: fixed;
        left: 3%;
        top: calc(50% - 9px);
    }

    .arrow-right {
        width: 13.75px;
        height: 22.25px;
        position: fixed;
        right: 3%;
        top: calc(50% - 9px);
    }

    .item {
        max-width: 300px;
        width: 80%;
    }
}
</style>