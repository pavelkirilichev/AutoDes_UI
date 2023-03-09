<template>
    <div class="elements">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск фото" />
        </div>
        <div class="category">
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/photo/business.svg);">
                </div>
                <span class="dark--medium">Бизнес и финансы</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/map.svg);">
                </div>
                <span class="dark--medium">Страны</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/nature.svg);">
                </div>
                <span class="dark--medium">Природа</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/people.svg);">
                </div>
                <span class="dark--medium">Люди</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/beauty.svg);">
                </div>
                <span class="dark--medium">Красота и здоровье</span>
            </div>
            <div class="styles styles--active">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/science.svg);">
                </div>
                <span class="dark--medium">Наука</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/space.svg);">
                </div>
                <span class="dark--medium">Космос</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/city.svg);">
                </div>
                <span class="dark--medium">Город</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/animals.svg);">
                </div>
                <span class="dark--medium">Животные</span>
            </div>
            <div class="styles">
                <div class="styles__img" style="background-image: url(/images/constructor/sidebar_menu/photo/art.svg);">
                </div>
                <span class="dark--medium">Искусство</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/photo/mysticism.svg);">
                </div>
                <span class="dark--medium">Мистика</span>
            </div>
            <div class="styles">
                <div class="styles__img"
                    style="background-image: url(/images/constructor/sidebar_menu/photo/interior.svg);">
                </div>
                <span class="dark--medium">Дом и интерьер</span>
            </div>
        </div>

    </div>
</template>

<style scoped>
.category>*+* {
    margin-top: 10px;
}

.styles {
    width: 234px;
    height: 58px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 15px;
    display: flex;
    align-items: center;
}

.styles__img {
    width: 40px;
    height: 40px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}

.styles--active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
}

.styles>*+* {
    margin-left: 15px;
}

.search__font {
    width: 170px;
    height: 18px;
}

.search__font::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #878D94;
}

.elements>*+* {
    margin-top: 20px;
}

.elements {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.search>*+* {
    margin-left: 13.18px;
}

.search {
    padding-left: 13px;
    display: flex;
    align-items: center;
    height: 32px;
    width: 100%;
    background: #FFFFFF;
    border: 1.3px solid #3B0CFA;
    border-radius: 5px;
}
</style>