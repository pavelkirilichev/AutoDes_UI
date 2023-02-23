<template>
    <div class="sidebar">
        <div class="menu_container">
            <div class="menu">
                <div v-for="item in menu" class="menu__item" :class="getClass(item.id)" @click="changeChapter(item)">
                    <div :class="item.id == chapter.id ? 'item__border--active' : 'item__border'"></div>
                    <img :src="item.id == chapter.id ? `/images/constructor/sidebar_menu/${item.img}_active.svg` : `/images/constructor/sidebar_menu/${item.img}.svg`"
                        alt="">
                    <span class="dark--medium">{{ item.title }}</span>
                </div>
            </div>
            <Button color="blue" class="save-btn">Сохранить набор</Button>
        </div>
        <div class="sidebar__content">
            <component :is="chapterSelect" />
        </div>
    </div>
</template>

<script setup>
import Button from '../Buttons/Button.vue';
import Elements from '../Constructor/Menu/Elements.vue'
import { ref, computed } from 'vue'
import Templates from './Menu/Templates.vue';
import InfoGraphy from './Menu/InfoGraphy.vue';
import Photo from './Menu/Photo.vue';
import TypeSlides from './Menu/TypeSlides.vue';
import Text from './Menu/Text.vue';
import Font from './Menu/Font.vue';
import BackGround from './Menu/BackGround.vue';

const chapter = ref({
    id: 2,
    title: "Текст",
    img: "text",
    key: "Text"
})

function changeChapter(item) {
    chapter.value = item
}

const comp = ref({
    Templates,
    Text,
    Font,
    Elements,
    InfoGraphy,
    Photo,
    BackGround,
    TypeSlides
})


const chapterSelect = computed(() => {
    return comp.value[chapter.value.key]
})

function getClass(id) {
    if (id == chapter.value) {
        return 'menu__item--active'
    }
    if (id == chapter.value + 1) {
        return 'menu__item--next'
    }
    if (id == chapter.value - 1) {
        return 'menu__item--prev'
    }
}

const menu = [
    {
        id: 1,
        title: "Шаблоны",
        img: "templates",
        key: "Templates"
    },
    {
        id: 2,
        title: "Текст",
        img: "text",
        key: "Text"
    },
    {
        id: 3,
        title: "Шрифт",
        img: "font",
        key: "Font"
    },
    {
        id: 4,
        title: "Элементы",
        img: "elements",
        key: "Elements"
    },
    {
        id: 5,
        title: "Инфографика",
        img: "infographics",
        key: "InfoGraphy"
    },
    {
        id: 6,
        title: "Фото",
        img: "photo",
        key: "Photo"
    },
    {
        id: 7,
        title: "Фон",
        img: "bg",
        key: "BackGround"
    },
    {
        id: 8,
        title: "Тип слайда",
        img: "type_slide",
        key: "TypeSlides"
    },
]
</script>

<style scoped>
.sidebar__content {
    margin-left: 214px;
    padding: 20px;
    padding-top: 95px;
    width: 274px;
    background: #F7F7FF;
}

.save-btn {
    margin-top: 20px;
    margin-left: 22px;
}

.sidebar {
    display: flex;
    min-height: 100vh;
}

.menu_container {
    z-index: 1;
    position: fixed;
    background-color: #EAEAFF;
    width: 214px;
    height: 100vh;
    padding-top: 81px;
}

.menu {
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #F7F7FF
}



.menu__item {
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 17px 0 17px 26px;
    background-color: #EAEAFF;
}

.menu__item span {
    margin-left: 13px
}

.menu__item--active {
    background: linear-gradient(269.74deg, #F6F6FF 0.19%, rgba(246, 246, 255, 0) 108.62%);

}

.menu__item--prev {
    border-radius: 0 0 10px 0;
}

.menu__item--next {
    border-radius: 0 10px 0 0;
}

.menu__item--active span {
    color: #3B0CFA !important;
}

.item__border {
    display: none;
}

.item__border--active {
    position: absolute;
    left: 0;
    top: 0;
    width: 7px;
    height: 61px;
    background: #3B0CFA;
    border-radius: 0px 5px 5px 0px;
}
</style>