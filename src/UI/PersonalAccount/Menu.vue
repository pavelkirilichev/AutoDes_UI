<template>
    <div class="menu__main">
        <div class="menu__row">
            <div class="menu__item"><span class="dark--medium">Данные</span></div>
            <div class="menu__item"><span class="dark--medium">Безопасность</span></div>
            <div class="menu__item menu__item-active"><span class="violet--medium">Тарифы</span></div>
            <div class="menu__item"><span class="dark--medium">Поддержка</span></div>
            <div class="menu__item"><span class="dark--medium">Выбор оплаты</span></div>
        </div>
    </div>
</template>


<style scoped>
.menu__main {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
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


.menu__item-active {
    background: #E2E2E2;
    border-radius: 5px;
}
</style>

