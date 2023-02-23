<template>
    <div class="font">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск шрифтов" />
        </div>
        <div class="font__list">
            <span class="title">Избранные шрифты</span>
            <div class="font__item">
                <span class="dark--medium">Times New Roman</span>
            </div>
            <div class="font__item">
                <span class="dark--medium">Montserrat</span>
            </div>
            <div class="font__item">
                <span class="dark--medium">HeadlandOne</span>
            </div>
            <div class="font__item">
                <span class="dark--medium">Gilroy</span>
            </div>
        </div>
        <div class="font__list">
            <span class="title">Мои шрифты</span>
            <div class="font__item">
                <span class="dark--medium">Times New Roman</span>
            </div>
            <div class="font__item">
                <span class="dark--medium">Montserrat</span>
            </div>
            <div class="font__item">
                <span class="dark--medium">HeadlandOne</span>
            </div>
            <div class="font__item">
                <span class="dark--medium">Gilroy</span>
            </div>
        </div>
        <div class="font__save">
            <span class="font__save__title">Загрузка шрифта</span>
            <button class="upload-btn">
                <img src="/images/constructor/sidebar_menu/font/upload.svg" />
                <span class="violet--medium">Загрузить</span>
            </button>
        </div>
    </div>
</template>

<style scoped>
.font {
    display: flex;
    flex-direction: column;
}

.font>*+* {
    margin-top: 20px;
}

.font__list {
    display: flex;
    flex-direction: column;
}

.font__list>*+* {
    margin-top: 10px;
}

.font__item {
    padding-left: 10px;
    display: flex;
    align-items: center;
    width: 234px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 5px;
}

.title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
}

.font__save {
    display: flex;
    flex-direction: column;
}

.font__save>*+* {
    margin-top: 10px;
}

.font__save__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
}

.upload-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 234px;
    height: 32px;
    background: #E8E2FF;
    border: 1px dashed #3B0CFA;
    border-radius: 10px;
}

.upload-btn>*+* {
    margin-left: 14px;
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

.search__font {
    height: 18px;
}

.search__font::placeholder {
    font-weight: 500;
    font-size: 15px;
    color: #878D94;
}
</style>