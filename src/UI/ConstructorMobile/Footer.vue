<template>
    <div class="footer">
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/templates.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/templates_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Шаблоны</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/text.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/text_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Текст</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/font.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/font_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Шрифт</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/elements.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/elements_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Элементы</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/infographics.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/infographics_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Инфографика</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/photo.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/photo_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Фото</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/bg.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/bg_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Фон</span>
            <div class="footer__item__border"></div>
        </div>
        <div class="footer__item">
            <img src="/images/constructor/sidebar_menu/type_slide.svg" alt="" class="item__img">
            <img src="/images/constructor/sidebar_menu/type_slide_active.svg" alt="" class="item__img--active">
            <span class="dark--medium">Тип слайда</span>
            <div class="footer__item__border"></div>
        </div>
    </div>
</template>

<style scoped>
.footer {
    position: fixed;
    width: 100vw;
    height: 83px;
    bottom: 0;
    left: 0;
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
    padding: 10px 20px 0 20px;
}

.footer__item>*+* {
    margin-top: 8px;
}

.footer__item img {
    width: 27px;
    height: 27px;
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
    height: 7px;
    left: 0;
    bottom: 0;
    background: #3B0CFA;
    border-radius: 20px 20px 0px 0px;
}

.footer__item:hover .footer__item__border {
    display: block;
}

.footer__item:hover {
    background: #F7F7FF;
    padding: 10px 35px 0 35px;
}

.footer__item:hover .item__img--active {
    display: block;
}

.footer__item:hover .item__img {
    display: none;
}

.footer__item:hover span {
    color: #3B0CFA;
}
</style>