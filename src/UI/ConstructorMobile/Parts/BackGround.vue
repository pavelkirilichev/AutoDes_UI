<template>
    <div class="bg">
        <div class="head">
            <span class="dark--medium">Загрузка</span>
            <div class="save">
                <button class="upload-btn">
                    <img src="/images/constructor/sidebar_menu/font/upload.svg" />
                    <span class="violet--medium">Логотипа</span>
                </button>
                <button class="upload-btn">
                    <img src="/images/constructor/sidebar_menu/font/upload.svg" />
                    <span class="violet--medium">Фото</span>
                </button>
            </div>
            <span class="dark--medium change-color__span">Выбор цвета</span>
            <div class="color__menu">
                <div class="color" style="background-color: #ffffff;">
                    <img src="/images/constructor/sidebar_menu/bg/palitra.svg" alt="">
                </div>
                <div class="color__list">
                    <div class="color" style="background-color: #000000;"></div>
                    <div class="color" style="background-color: #8774FF;"></div>
                    <div class="color" style="background-color: #00FF85;"></div>
                    <div class="color" style="background-color: #FFE600;"></div>
                    <div class="color" style="background-color: #6732FF;"></div>
                </div>
            </div>
            <div class="search">
                <img src="/images/constructor/sidebar_menu/elements/look.svg" />
                <input class="search__font dark--medium" placeholder="Поиск фона" />
            </div>
            <div class="bg-choise">
                <span class="dark--medium change-color__span">Выбор фона</span>
                <div v-masonry transition-duration="0.3s" item-selector=".item" column-width=".item" gutter="10">
                    <img v-masonry-tile class="item" :src="`/images/constructor/sidebar_menu/bg/image_4.png`" alt=""
                        v-for="n in 4" :key="n">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup></script>
<style scoped>
.change-color__span {
    margin-top: 20px !important;
}

.bg {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.item {
    cursor: pointer;
    margin-bottom: 5px;
    width: calc(50% - 5px);
}

.item--long {
    cursor: pointer;
    margin-bottom: 5px;
    width: 100%;
}


.image__item {
    cursor: pointer;
    width: 115px;
    height: 114px;
    background-color: #fff;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    background-size: 90%;
}

.image__item:first-child {
    margin-top: 5px;
}

.image__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.image__list>*+* {
    margin-top: 5px;
}

.bg-choise {
    display: flex;
    flex-direction: column;
}

.bg-choise>*+* {
    margin-top: 10px;
}

.color__list {
    margin-left: 18px;
    display: flex;
}

.color {
    cursor: pointer;
    width: 33px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
}

.color__list>*+* {
    margin-left: 5px;
}

.color__menu {
    display: flex;
}

.upload-btn {
    width: calc(50% - 7.125px);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 32px;
    background: #E8E2FF;
    border: 1px dashed #3B0CFA;
    border-radius: 10px;
}

.upload-btn>*+* {
    margin-left: 14.25px;
}

.head {
    width: 90%;
    display: flex;
    flex-direction: column;
}

.save {
    width: 100%;
    display: flex;
    justify-content: space-between;
}


.head>*+* {
    margin-top: 10px;
}

.search>*+* {
    margin-left: 13.18px;
}

.search {
    margin-top: 20px;
    padding-left: 13px;
    display: flex;
    align-items: center;
    height: 32px;
    width: 100%;
    background: #FFFFFF;
    border: 1.3px solid #3B0CFA;
    border-radius: 5px;
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
</style>