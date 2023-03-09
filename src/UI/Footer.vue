<template>
    <footer class="footer">
        <div class="footer__list-item-left">
            <div class="logo__block">
                <img src="/images/logo.svg" alt="" class="logo-main">
                <span class="item__text text__logo">Autodesigner</span>
            </div>
            <p class="dark--medium">
                2022 ООО «Autodesigner»<br />
                autodesigner@mail.ru
            </p>
        </div>
        <div class="footer__list-item">
            <span class="dark--medium">FAQ</span>
            <span class="dark--medium">О нас</span>
            <span class="dark--medium">Тарифы</span>
        </div>
        <div class="footer__list-item">
            <span class="dark--medium">Политика конфиденциальности</span>
            <span class="dark--medium">Предложить улучшения</span>
        </div>
        <div class="footer__list-item-right">
            <span class="dark--medium no-click">Связаться с нами</span>
            <div class="social__list">
                <img src="/images/footer/vk.svg" alt="">
                <img src="/images/footer/tg.svg" alt="">
                <img src="/images/footer/mail.svg" alt="">
            </div>
        </div>
    </footer>
</template>



<style scoped>
.no-click {
    cursor: default !important;
}

.footer {
    padding: 20px 0;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #C2C2C2;
}

.footer__list-item-left {
    display: flex;
    flex-direction: column;
}

.footer__list-item-left>*+* {
    margin-top: 20px
}

.footer__list-item-right {
    display: flex;
    flex-direction: column;
}

.footer__list-item-right>*+* {
    margin-top: 14px
}

.social__list {
    display: flex;
    align-items: center;
}

.social__list>*+* {
    margin-left: 20px
}

.social__list img {
    cursor: pointer;
}

.footer__list-item {
    display: flex;
    flex-direction: column;
}

.footer__list-item>*+* {
    margin-top: 20px
}

.logo__block {
    display: flex;
    align-items: center;
}

.logo__block>*+* {
    margin-left: 5px
}

.logo__block img {
    cursor: pointer;
}
</style>

