<template>
    <div class="slides">
        <div class="forms">
            <div class="slides__forms">
                <img src="/images/constructor/sidebar_menu/type_slides/titul.svg" />
            </div>
            <span>Титульный слайд</span>
        </div>
        <div class="forms">
            <div class="slides__forms">
                <img src="/images/constructor/sidebar_menu/type_slides/head__obj.svg" />
            </div>
            <span>Заголовок и объект</span>
        </div>
        <div class="forms">
            <div class="slides__forms">
                <img src="/images/constructor/sidebar_menu/type_slides/category.svg" />
            </div>
            <span>Заголовок раздела</span>
        </div>
        <div class="forms">
            <div class="slides__forms">
                <img src="/images/constructor/sidebar_menu/type_slides/two_objects.svg" />
            </div>
            <span>Два объекта</span>
        </div>
        <div class="forms">
            <div class="slides__forms">
                <img src="/images/constructor/sidebar_menu/type_slides/comparison.svg" />
            </div>
            <span>Сравнение</span>
        </div>
        <div class="forms">
            <div class="slides__forms">
                <img src="/images/constructor/sidebar_menu/type_slides/heading.svg" />
            </div>
            <span>Только заголовок</span>
        </div>
        <div class="forms">
            <div class="slides__forms">

            </div>
            <span>Пустой слайд</span>
        </div>
    </div>
</template>

<style scoped>
.slides__forms {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 167px;
    height: 93px;
    background: #FFFFFF;
    border: 1px solid #303030;
}

.slides__forms img {
    margin-top: 12px;
}

.forms span {
    font-family: 'Inter';
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.slides {
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter';

}

.slides>*+* {
    margin-top: 22px;
}

.forms>*+* {
    margin-top: 10px;
}

.forms {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>