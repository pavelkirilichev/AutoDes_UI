<template>
    <div class="payment__main">
        <span class="dark--semibold">Выбор карты</span>
        <div class="list">
            <div class="item item__add">
                <img src="/images/payment/plus.svg" alt="">
                <span class="white--medium">Добавить
                    карту</span>
            </div>
            <div class="item item__req">
                <div class="item__req__inner">
                    <img src="/images/payment/tinkoff.svg" alt="">
                    <img src="/images/payment/trash.svg" alt="" class="delete">
                </div>
                <div class="item__req__inner">
                    <span class="white--medium">**6318</span>
                    <img src="/images/payment/mastercard.svg" alt="">
                </div>
            </div>
            <div class="item item__req">
                <div class="item__req__inner">
                    <img src="/images/payment/tinkoff.svg" alt="">
                    <img src="/images/payment/trash.svg" alt="" class="delete">
                </div>
                <div class="item__req__inner">
                    <span class="white--medium">**6318</span>
                    <img src="/images/payment/mastercard.svg" alt="">
                </div>
            </div>

        </div>
    </div>
</template>

<style scoped>
.payment__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.list {
    display: flex;
    gap: 20px;
}

.item {

    width: 151px;
    height: 82px;
    border-radius: 5px;
}

.item__add {
    cursor: pointer;
    padding: 12px 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: #3B0CFA;
}

.item__add img {
    width: 13px;
    height: 13px;
}

.item__req {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 12px 20px 10px 15px;
    background: #222222;
}

.item__req__inner {
    display: flex;
    justify-content: space-between;
}

.delete {
    cursor: pointer;
}
</style>