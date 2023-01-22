<template>
    <div class="menu__main">
        <div class="menu__row">
            <div class="menu__item"><span>Данные</span></div>
            <div class="menu__item"><span>Безопасность</span></div>
            <div class="menu__item menu__item-active"><span>Тарифы</span></div>
            <div class="menu__item"><span>Поддержка</span></div>
            <div class="menu__item"><span>Выбор оплаты</span></div>
        </div>
    </div>
</template>


<style scoped>
.menu__main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #000000;
}

.menu__row {
    padding-top: 40px;
    display: flex;
    align-items: center;
}

.menu__item {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 33px;
}

.menu__item span {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #303030
}

.menu__item-active {
    background: #E2E2E2;
    border-radius: 5px;
}

.menu__item-active span {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #3B0CFA;
}
</style>

