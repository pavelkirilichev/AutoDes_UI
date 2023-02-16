<template>
    <div class="modal__section">
        <div class="modal">
            <span class="title">
                Действительно хотите приобрести <br />
                тариф «Презентации»?
            </span>
            <span class="dark--medium align--center">Вы можете попробовать использовать данный тариф <br /> 7 дней
                бесплатно</span>
            <Button color="pink">Попробовать бесплатно</Button>

            <div class="price">
                <span class="dark--medium">Стоимость составит:</span>
                <span class="violet--semibold">0 ₽</span>
            </div>
            <span class="grey--medium no-sale">А после составит 399 ₽/мес </span>
        </div>
</div>
</template>

<script setup>
import Button from '@/UI/Buttons/Button.vue';
</script>

<style scoped>
.modal__section {
    position: fixed;
    top: -100px;
    width: 100vw;
    height: calc(100vh + 157px);
    background: rgba(0, 0, 0, 0.31);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
}


.modal {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    width: 623px;
    height: 263px;
    background: #f5f5f7;
    border-radius: 10px;
}

.modal>*+* {
    margin-top: 20px
}

.title {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #000000;
}

.menu {
    display: flex;
}

.menu>*+* {
    margin-left: 20px
}

.menu__item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 40px;
    background: #E6E6E6;
    border-radius: 5px;
}

.menu__item-active {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 73px;
    height: 40px;
    background: #3B0CFA;
    border-radius: 5px;
}

.price {
    display: flex;
}

.price>*+* {
    margin-left: 5px
}

.btn-div {
    display: flex;
}

.btn-div>*+* {
    margin-left: 15px
}

button {
    border-radius: 10px !important
}

.no-sale {
    margin-top: 10px;
}
</style>
