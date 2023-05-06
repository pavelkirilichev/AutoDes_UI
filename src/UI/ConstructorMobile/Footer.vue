<template>
    <div class="footer">
        <div v-for="item, index in menu" :key="index" class="footer__item"
            :class="chapterName == item.key ? 'footer__item__active' : ''" @click="$emit('changeChapter', item.key)">
            <img :src="`/images/constructor/sidebar_menu/${item.src}.svg`" alt="" class="item__img">
            <img :src="`/images/constructor/sidebar_menu/${item.src}_active.svg`" alt="" class="item__img--active">
            <span class="dark--medium">{{ item.text }}</span>
            <div class="footer__item__border"></div>
        </div>
    </div>
</template>
<script>
export default {
    data: () => ({
        menu: [
            {
                text: "Шаблоны",
                key: "Templates",
                src: "templates"
            },
            {
                text: "Текст",
                key: "Text",
                src: "text"
            },
            {
                text: "Шрифт",
                key: "Font",
                src: "font"
            },
            {
                text: "Элементы",
                key: "Elements",
                src: "elements"
            },
            {
                text: "Инфографика",
                key: "Infographics",
                src: "infographics"
            },
            {
                text: "Фото",
                key: "Photo",
                src: "photo"
            },
            {
                text: "Фон",
                key: "BackGround",
                src: "bg"
            },
            {
                text: "Тип слайда",
                key: "TypeSlide",
                src: "type_slide"
            }
        ]
    }),
    emits: [
        "changeChapter"
    ],
    props: {
        chapterName: String
    }
}
</script>

<style scoped>
.footer {
    position: fixed;
    left: 0;
    bottom: 0;
    z-index: 2;
    width: 100vw;
    height: 67px;
    background: #EAEAFF;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
    display: flex;
    align-items: center;
}

.footer::-webkit-scrollbar {
    display: none;
}

.footer__item {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 7px 15px 0 15px;
}

.footer__item>*+* {
    margin-top: 5px;
}

.footer__item img {
    width: 24px;
    height: 24px;
}

.item__img--active {
    margin-top: 0;
    display: none;
}

.footer__item span {
    white-space: nowrap;
}

.footer__item__border {
    display: none;
    position: absolute;
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
    background: #3B0CFA;
    border-radius: 20px 20px 0px 0px;
}

.footer__item__active .footer__item__border {
    display: block;
}

.footer__item__active {
    background: #F7F7FF;
    padding: 7px 20px 0 20px;
}

.footer__item__active .item__img--active {
    display: block;
}

.footer__item__active .item__img {
    display: none;
}

.footer__item__active span {
    color: #3B0CFA;
}
</style>