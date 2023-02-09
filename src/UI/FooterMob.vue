<template>
    <footer class="footer">
        <div class="footer__top">
            <div class="logo__block">
                <img src="/images/logo.svg" alt="">
                <span class="item__text text__logo">Autodesigner</span>
            </div>
            <div class="social__list">
                <img src="/images/footer/vk.svg" alt="">
                <img src="/images/footer/tg.svg" alt="">
                <img src="/images/footer/mail.svg" alt="">
            </div>
        </div>
        <div class="footer__list-item">
            <span class="dark--medium">FAQ</span>
            <span class="dark--medium">О нас</span>
            <span class="dark--medium">Тарифы</span>
            <span class="dark--medium">Политика конфиденциальности</span>
            <span class="dark--medium">Предложить улучшения</span>
            <p class="dark--medium">
                2022 ООО «Autodesigner»<br />
                autodesigner@mail.ru
            </p>
        </div>


    </footer>
</template>



<style scoped>
.no-click {
    cursor: default !important;
}

.footer {
    padding: 20px 0;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 20px;
    border-top: 1px solid #C2C2C2;
}

.footer__top {
    display: flex;
    justify-content: space-between;
}



.social__list {
    display: flex;
    align-items: center;
    gap: 20px;
}

.social__list img {
    width: 27px;
    height: 27px;
    cursor: pointer;
}

.footer__list-item {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.logo__block {
    display: flex;
    gap: 5px;
    align-items: center;
}

.logo__block img {
    cursor: pointer;
}
</style>

