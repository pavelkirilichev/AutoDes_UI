<template>
    <nav class="footer">
        <ul class="footer__top">
            <li class="logo__block">
                <img src="../../public/images/navbar/logo.svg" alt="">
                <span class="item__text">Autodesigner</span>
            </li>
            <li>
                <span class="item__text">Мои работы</span>
            </li>
            <li>
                <span class="item__text">FAQ</span>
            </li>
            <li>
                <span class="item__text">О нас</span>
            </li>
            <li>
                <span class="item__text">Тарифы</span>
            </li>
            <li>
                <span class="item__text">Блог</span>
            </li>
        </ul>
        <div class="footer__bottom">

        </div>
    </nav>
</template>



<style scoped>
.footer {
    padding-top: 20px;
    max-width: 1170px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #C2C2C2;
}

.footer__top {
    display: flex;
    align-items: center;
    gap: 40px;
}

.logo__block {
    display: flex;
    gap: 5px;
    align-items: center;
}

.item__text {
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}
</style>

