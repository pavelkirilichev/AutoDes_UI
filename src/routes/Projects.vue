<template>
    <div class="main">
        <NavBar />
        <div class="main__center">
            <div class="projects">
                <DeleteModal />
                <div class="projects_header">
                    <img src="/images/project/left.svg" />
                    <span>Абобус диджитал</span>
                </div>
                <img class="btn-add" src="/images/project/btn-add.svg" />
                <div class="main__objects">
                    <div class="product">
                        <img src="/images/project/banner.svg" />
                        <span>Баннер</span>
                    </div>
                    <div class="product">
                        <img src="/images/project/banner.svg" />
                        <span>Презентация</span>
                    </div>
                    <div class="product">
                        <img src="/images/project/banner.svg" />
                        <span>Работа 3</span>
                        <span>(YouTube)</span>
                    </div>
                    <img class="trash_bin" src="/images/project/trash_bin.svg" />
                </div>
                <div class="specials">
                    <img src="/images/project/star.svg" />
                    <span>Избранные шрифты</span>
                </div>
                <div class="font__list">
                    <div class="font__item">
                        <span class="montserrat">Montserrat</span>
                    </div>
                    <div class="font__item">
                        <span class="roman">Times new roman</span>
                    </div>
                    <div class="font__item">
                        <span class="arial">Arial</span>
                    </div>
                </div>
                <div class="logo">
                    <span class="name_project__title">Загруженные шрифты</span>
                    <div class="loading">
                        <div class="loading_logo">
                            <img src="/images/new_project/download.svg" />
                            <span>Загрузить</span>
                        </div>
                        <img class="info" src="/images/new_project/info.svg" />
                    </div>
                </div>
                <div class="writing">
                    <span class="montserrat">Montserrat</span>
                    <img src="/images/new_project/choise.svg" />
                </div>
                <span class="name_project__title main_color">Основные цвета</span>
                <div class="color__container">
                    <div class="color color-add">
                        <img src="/images/project/color-add.svg" alt="">
                    </div>
                    <div class="color" style="background-color: #3B0CFA;"></div>
                    <div class="color" style="background-color: #FA0C54;"></div>
                    <div class="color" style="background-color: #0CFAB2;"></div>
                    <div class="color" style="background-color: #CBFA0C;"></div>
                </div>
                <div class="logo">
                    <span class="name_project__title">Логотип</span>
                    <div class="loading">
                        <div class="loading_logo">
                            <img src="/images/new_project/download.svg" />
                            <span>Загрузить</span>
                        </div>
                        <img class="info" src="/images/new_project/info.svg" />
                    </div>
                </div>
                <div class="logotype"></div>
                <div class="logo">
                    <span class="name_project__title">Архив картинок</span>
                    <div class="loading">
                        <div class="loading_logo">
                            <img src="/images/new_project/download.svg" />
                            <span>Загрузить</span>
                        </div>
                        <img class="info" src="/images/new_project/info.svg" />
                    </div>
                </div>
                <div class="projective">
                    <div class="projects_object"></div>
                    <div class="projects_object"></div>
                    <div class="projects_object"></div>
                </div>
                <button class="save">
                    <span>Сохранить</span>
                </button>
            </div>
        </div>
        <Footer />
    </div>
</template>


<style scoped>
.save span {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    color: #FFFFFF;
}

.save {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 36px;
    background: #3B0CFA;
    border-radius: 5px;
}

.projective>*+* {
    margin-left: 20px;
}

.projective {
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.projects_object {
    width: 110px;
    height: 110px;
    background: #FFFFFF;
    border-radius: 5px;
}

.logotype {
    margin-top: 10px;
    width: 83px;
    height: 83px;
    background: #3B0CFA;
    border-radius: 5px;
}

.color {
    cursor: pointer;
    width: 36px;
    height: 36px;
    border-radius: 5px;
}

.color-add {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3B0CFA;
}

.color__container {
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
}

.color__container>*+* {
    margin-left: 10px;
}

.main_color {
    margin-top: 20px;
}

.writing {
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    padding: 9px 15.76px 9px 10px;
    align-items: center;
    width: 280px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 5px;
}

.info {
    position: absolute;
    right: -30px;
}

.name_project__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
}

.loading_logo span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.loading_logo>*+* {
    margin-left: 14.25px;
}

.loading_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 34px;
    background: #F7F5FF;
    border: 1px dashed #3B0CFA;
    border-radius: 10px;
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.logo>*+* {
    margin-top: 10px;
}

.logo {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.arial {
    font-family: 'Arial';
    font-weight: 400;
    font-size: 15px;
    color: #303030;

}

.roman {
    font-family: 'Times New Roman';
    font-weight: 400;
    font-size: 15px;
    color: #303030;
}

.montserrat {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    color: #303030;
}

.font__list>*+* {
    margin-top: 10px;
}

.font__list {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

.font__item {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 280px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 5px;
    padding: 9px 0px 9px 20px;

}

.specials span {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    color: #303030;
}

.specials>*+* {
    margin-left: 5px;
}

.specials {
    display: flex;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
}

.product img {
    width: 86px;
    height: 87px;
}

.product span {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    color: #000000;
}

.product {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 7px 0px 10px 0px;
    width: 146px;
    height: 147px;
    background: #FFFFFF;
    border-radius: 5px;
}

.main__objects>*+* {
    margin-left: 20px;
}

.main__objects {
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    position: relative;
}

.trash_bin {
    position: absolute;
    top: 126px;
    left: 435px;
}

.btn-add {
    margin-top: 20px;
}

.projects {
    padding-bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.projects_header {
    display: flex;
    align-items: center;
    justify-content: center;
}

.projects_header>*+* {
    margin-left: 10.5px;
}


.projects_header span {

    font-family: 'Montserrat';

    font-weight: 600;
    font-size: 25px;
    color: #303030;
}
</style>

<script setup>

import Footer from "../UI/Footer.vue";
import NavBar from "../UI/NavBar.vue";
import DeleteModal from "../UI/Constructor/Modals/DeleteProject"
</script>