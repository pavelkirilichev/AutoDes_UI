<template>
    <div class="font">
        <div class="search">
            <img src="/images/constructor/sidebar_menu/elements/look.svg" />
            <input class="search__font dark--medium" placeholder="Поиск шрифтов" />
        </div>
        <div class="star">
            <img src="/images/constructor/sidebar_menu/templates/star.svg" />
            <span class="star_title">Избранные шрифты</span>
        </div>
        <div class="image">
            <div class="add_first"> <span class="add">Times New Roman</span></div>
            <div class="add_second"> <span class="add_medium">Montserrat</span></div>
            <div class="add_third"><span class="add_little">Gilroy</span></div>
        </div>
        <span class="star_title star_down">Мои шрифты</span>
        <div class="image">
            <div class="add_first"> <span class="add">Times New Roman</span></div>
            <div class="add_second"> <span class="add_medium">Montserrat</span></div>
            <div class="add_third"><span class="add_little">Gilroy</span></div>
        </div>
        <button class="upload-btn">
            <img src="/images/constructor/sidebar_menu/font/upload.svg" />
            <span class="violet--medium">Загрузить шрифт</span>
        </button>

    </div>
</template>
<style scoped>
.search>*+* {
    margin-left: 13.18px;
}

.search {
    padding-left: 13px;
    display: flex;
    align-items: center;
    height: 32px;
    width: 90%;
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

.upload-btn {
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90%;
    height: 32px;
    background: #E8E2FF;
    border: 1px dashed #3B0CFA;
    border-radius: 10px;
}

.upload-btn>*+* {
    margin-left: 14px;
}

.star_down {
    margin-top: 20px;
}

.add_little {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;
    color: #303030;
}

.add_medium {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.add {
    font-family: 'Times New Roman';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 17px;

    color: #303030;
}

.image div {
    padding-left: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    flex-shrink: 0;
    width: 144px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 5px;
}

.image::-webkit-scrollbar {
    display: none;
}

.image>*+* {
    margin-left: 10px;
}

.image {
    margin-top: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px;
    display: flex;
    width: 100vw;
    overflow-x: auto;
}

.star_title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
}

.star>*+* {
    margin-left: 5px;
}

.star {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.font {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>