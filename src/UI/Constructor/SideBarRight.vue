<template>
    <div class="sidebar">
        <div class="list elements">
            <div class="item item__main">
                <span>Слайд 1</span>
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
                <span>Слайд 1</span>
            </div>
            <div class="item item--big">
                <span>Слайд 2</span>
            </div>
            <button class="item add-slide">
                <span>+</span>
            </button>
        </div>
    </div>
</template>



<style scoped>
.sidebar {
    padding-top: 93px;
    width: 265px;
    z-index: 1;
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    background: #EAEAFF;
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