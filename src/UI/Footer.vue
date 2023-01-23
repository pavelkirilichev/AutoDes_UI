<template>
    <footer class="footer">
        <div class="footer__list-item-left">
            <div class="logo__block">
                <img src="/images/logo.svg" alt="">
                <span class="item__text text__logo">Autodesigner</span>
            </div>
            <p class="item__text">
                2022 ООО «Autodesigner»<br />
                autodesigner@mail.ru
            </p>
        </div>
        <div class="footer__list-item">
            <span class="item__text">FAQ</span>
            <span class="item__text">О нас</span>
            <span class="item__text">Тарифы</span>
        </div>
        <div class="footer__list-item">
            <span class="item__text">Политика конфиденциальности</span>
            <span class="item__text">Предложить улучшения</span>
        </div>
        <div class="footer__list-item-right">
            <span class="item__text no-click">Связаться с нами</span>
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
    gap: 20px;
}

.footer__list-item-right {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

.social__list {
    display: flex;
    align-items: center;
    gap: 20px;
}

.social__list img {
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

.item__text {
    cursor: pointer;
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}

.text__logo {
    font-weight: 400;
    font-family: 'Inter';
}

.footer__bottom p {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #303030;
}
</style>

