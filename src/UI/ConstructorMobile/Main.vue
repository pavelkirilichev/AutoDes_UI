<template>
    <div class="constructor">
        <NavBar @click="exitOptions" />
        <div class="constructor__main" :class="optionsShow == 0 ? 'no-scroll' : ''">
            <div class="slide-image" @click="changesidebarShow" :class="sidebarShow == 1 ? 'slide-image--active' : ''">
                <img src="/images/constructor/navbar/arrow_left-side.svg" alt="">
            </div>
            <div class="sidebar" :class="sidebarShow == 1 ? 'sidebar--active' : ''">
                <div class="list elements">
                    <div class="item item__main">
                        <span>Элемент 1</span>
                    </div>
                    <div class="item">
                        <span>Текст 1</span>
                        <img src="/images/date/no-blind.svg" alt="">
                    </div>
                    <div class="item">
                        <span>Текст 2</span>
                        <img src="/images/date/blind.svg" alt="">
                    </div>
                    <div class="item">
                        <span>Логотип 1</span>
                        <img src="/images/date/no-blind.svg" alt="">
                    </div>
                    <button class="item add-element"><span>Добавить</span></button>
                </div>
                <div class="list slides">
                    <div class="item item--big">
                        <span>Элемент 2</span>
                    </div>
                    <div class="item item--big">
                        <span>Элемент 3</span>
                    </div>
                    <button class="item add-slide">
                        <span>+</span>
                    </button>
                </div>
            </div>
            <div @click="exitOptions" class="work__main"
                style="background-image: url(http://images.fineartamerica.com/images-medium-large-5/myrtle-falls-and-mount-rainier-michael-russell.jpg);">
            </div>
        </div>
        <div class="constructor-bottom">
            <div class="options__container">
                <div class="hide-options__btn" :class="optionsShow == 0 ? 'hide-options__btn--up' : ''"
                    @click="changeOptionsShow">
                    <img src="/images/constructor/navbar/arrow_down.svg" alt="">
                </div>
                <div class="options__main" :class="optionsShow == 1 ? 'options__main--active' : ''">
                    <component :is="chapter" />
                </div>
            </div>
            <Footer @changeChapter="changeChapter" :chapterName="chapterName" />
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import Templates from './Parts/Templates.vue';
import Text from './Parts/Text.vue';
import Font from './Parts/Font.vue';
import Elements from './Parts/Elements.vue';
import Infographics from './Parts/Infographics.vue';
import Photo from './Parts/Photo.vue';
import BackGround from './Parts/BackGround.vue';
import TypeSlide from './Parts/TypeSlide.vue';

const comp = ref({
    Templates,
    Text,
    Font,
    Elements,
    Infographics,
    Photo,
    BackGround,
    TypeSlide
})

const chapterName = ref('Templates')

function changeChapter(key) {
    chapterName.value = key
    optionsShow.value = 1;
    sidebarShow.value = 0;
}

const chapter = computed(() => {
    return comp.value[chapterName.value]
})

const optionsShow = ref(1);


function changeOptionsShow() {
    optionsShow.value = optionsShow.value == 0 ? 1 : 0
}


const sidebarShow = ref(0);

function changesidebarShow() {
    sidebarShow.value = sidebarShow.value == 0 ? 1 : 0
    optionsShow.value = sidebarShow.value == 1 ? 0 : 1
}

function exitOptions() {
    optionsShow.value = 0;
}
</script>

<style scoped>
.no-scroll {
    overflow-y: hidden;
    height: calc(100vh - 85px);
}

.constructor {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
}


.options__main {
    margin-top: -1px;
    display: none;
    padding: 20px 0;
    width: 100%;
    max-height: 35vh;
    overflow-y: auto;
    background: #F7F7FF;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.options__container {
    width: 100%;
    position: fixed;
    bottom: 67px;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.options__main--active {
    display: block;
}

.hide-options__btn {
    width: 50px;
    height: 17.5px;
    background-color: #EAEAFF;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px 6px 0 0;
}

.hide-options__btn img {
    margin-top: 1px;
}

.hide-options__btn--up img {
    margin-top: -1px;
}

.hide-options__btn--up {
    transform: rotate(180deg);
    border-radius: 0 0 6px 6px;
}

.options__main::-webkit-scrollbar {
    display: none;
}


.constructor__main {
    width: 100vw;
    margin-top: 85px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    width: 283px;
    height: 284px;
}

.work__main {
    overflow-y: auto;
    width: 90vw;
    height: calc(90vh - 152px);
    background-repeat: no-repeat;
    background-size: auto calc(90vh - 152px);
    background-position: 50% 50%;
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.work__main::-webkit-scrollbar {
    display: none;
}

.slide-image {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    top: calc(50% - 32px);
    width: 24px;
    height: 64px;
    background: #EAEAFF;
    border-radius: 10px 0px 0px 10px;
}

.slide-image--active {
    transform: rotate(180deg);
    border-radius: 0px 10px 10px 0px;
    right: 264px;
}

.slide-image--active img {
    margin-right: 1px;
}

.sidebar {
    overflow-y: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding-top: 93px;
    padding-bottom: 90px;
    width: 265px;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    display: none;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    background: #EAEAFF;
}

.sidebar::-webkit-scrollbar {
    display: none;
}

.sidebar--active {
    display: flex;
}

.list {
    display: flex;
    flex-direction: column;
    width: 190px;
}

.elements>*+* {
    margin-top: 5px
}

.slides {
    margin-top: 10px;
}

.slides>*+* {
    margin-top: 10px
}

.item {
    padding: 0 10px 0 13px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 36px;
    background: #FFFFFF;
    border-radius: 5px;
}

.item__main {
    height: 44px;
}

.item span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #878D94;
}

.item__main span {
    color: #303030;
}

.item--big {
    height: 44px;
}

.add-element {
    justify-content: center;
    padding: 0;
    background: #3B0CFA;
}

.add-element span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
}

.add-slide {
    justify-content: center;
    padding: 0;
    background: #FA0C54;
    height: 44px;
}

.add-slide span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 18px;
    text-align: center;
    color: #FFFFFF;
}
</style>