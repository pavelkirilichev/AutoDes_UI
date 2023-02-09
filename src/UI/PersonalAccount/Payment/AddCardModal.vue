<template>
    <div class="modal__section" @click="сlose($event)">
        <div class="modal">
            <span class="dark--medium">Привязка новой карты</span>
            <div class="card__form">
                <div class="card__row">
                    <div class="form__item">
                        <input v-model="cardNumber" @input="formatCardNumber" type="text"
                            class="form__input dark--medium" placeholder="Номер карты" />
                    </div>
                    <div class="form__item">
                        <input v-model="cardDate" @input="formatCardDate" type="text" class="form__input dark--medium"
                            placeholder="ММ/ГГ" />
                    </div>
                </div>
                <div class="card__row">
                    <span>Последние цифры на обороте карты<span class="red">*</span></span>
                    <div class="form__item item__last">
                        <input v-model="cardCVV" @input="formatCardCVV" type="text" class="form__input dark--medium"
                            placeholder="CVV" />
                        <img src="/images/modal/cart-pink.svg" alt="" />
                    </div>
                </div>
            </div>
            <div class="btn__container">
                <Button color="pink-transparent" @click="$emit('SetCardModal')">Отмена</Button>
                <Button color="blue" @click="linkCard">Привязать</Button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from "@/UI/Buttons/Button.vue";

import { defineEmits, ref } from "vue";

const cardNumber = ref("")
const cardDate = ref("")
const cardCVV = ref("")

function formatCardNumber() {
    if (cardNumber.value.length != 20) {
        cardNumber.value = cardNumber.value.replace(/ /g, '')
        cardNumber.value = cardNumber.value ? cardNumber.value.match(/.{1,4}/g).join(' ') : ''
    }
    else {
        cardNumber.value = cardNumber.value.slice(0, -1)
    }

}

function formatCardDate() {
    if (cardDate.value.length != 6) {
        cardDate.value = cardDate.value.replace('/', '')
        cardDate.value = cardDate.value ? cardDate.value.match(/.{1,2}/g).join('/') : ''
    }
    else {
        cardDate.value = cardDate.value.slice(0, -1)
    }

}

function formatCardCVV() {
    if (cardCVV.value.length == 4) {
        cardCVV.value = cardCVV.value.slice(0, -1)
    }

}

function linkCard() {
    emit('SetCardModal')
    emit('addCard')
}

function сlose(e) {
    if (e.currentTarget === e.target) {
        emit('SetCardModal');
    }
}


const emit = defineEmits(['SetCardModal', 'addCard'])
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
    padding: 20px;
    width: 433px;
    height: 326px;
    background: #f5f5f7;
    border-radius: 10px;
}

.card__form {
    display: flex;
    flex-direction: column;
    gap: 75px;
    padding: 20px;
    margin-top: 20px;
    width: 100%;
    height: 194px;
    background: #ffffff;
    border-radius: 10px;
}

.card__row {
    display: flex;
    justify-content: flex-end;
    gap: 18px;
}

.form__item {
    padding-bottom: 11px;
    border-bottom: 1px solid #3b0cfa;
}

.form__item:first-child {
    width: 234px;
}

.form__item:last-child {
    width: 101px;
}

.form__input {
    outline: none;
    border: none;
    width: 100%;
    height: 18px;
}

.form__input::placeholder {
    font-family: "Montserrat";
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #bababa;
}

.card__row span {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-align: right;
    color: #000000;
}

.red {
    color: #fb81aa !important;
}

.item__last {
    display: flex;
    gap: 10px;
    justify-content: space-between;
}

.btn__container {
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    gap: 15px;
}

.btn__container button {
    border-radius: 10px !important;
}
</style>
