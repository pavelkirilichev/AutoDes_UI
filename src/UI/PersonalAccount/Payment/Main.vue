<template>
    <div class="payment__main">
        <Transition>
            <AddCardModal @SetCardModal="SetCardModal" @addCard="addCard" v-if="CardModal" />
        </Transition>

        <span class="dark--semibold">Выбор карты</span>
        <div class="list">
            <div class="item item__add" @click="SetCardModal()">
                <img src="/images/payment/plus.svg" alt="">
                <span class="white--medium add-card__span">Добавить карту</span>
            </div>
            <div class="item item__req" v-for="card in Cards">
                <div class="item__req__inner">
                    <img :src="`/images/payment/${card.bank}.svg`" alt="">
                    <img src="/images/payment/trash.svg" alt="" class="delete" @click="deleteCard(card.id)">
                </div>
                <div class="item__req__inner">
                    <span class="white--medium">**{{ card.number }}</span>
                    <img :src="`/images/payment/${card.payment_system}.svg`" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, defineEmits } from 'vue';
import AddCardModal from './AddCardModal.vue';



const CardModal = ref(0)

function SetCardModal() {
    CardModal.value = CardModal.value == 0 ? 1 : 0
}

function deleteCard(id) {
    Cards.value = Cards.value.filter(item => item.id != id)
}

function addCard() {
    Cards.value = Cards.value.concat({
        id: Cards.value.length > 0 ? Cards.value[Cards.value.length - 1].id + 1 : 0,
        number: 7777,
        payment_system: "mastercard",
        bank: "tinkoff"
    })
}

const emit = defineEmits(['SetCardModal', 'addCard'])

const Cards = ref(
    [
        {
            id: 1,
            number: 6318,
            payment_system: "mastercard",
            bank: "tinkoff"
        },
        {
            id: 2,
            number: 6319,
            payment_system: "mastercard",
            bank: "tinkoff"
        },
    ]
)


</script>

<style scoped>
.add-card__span {
    width: 90px;
}

.payment__main {
    display: flex;
    flex-direction: column;
    align-items: center;
}



.list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

.list>*+* {
    margin-left: 20px;
    margin-top: 20px;
}

.item {
    width: 151px;
    height: 82px;
    border-radius: 5px;
}

.item__add {
    margin-top: 20px;
    cursor: pointer;
    padding: 12px 15px;
    display: flex;
    flex-direction: column;
    background: #3B0CFA;
}

.item__add>*+* {
    margin-top: 12px
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

.v-enter-active,
.v-leave-active {
    transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@media (max-width: 1015px) {
    .list {
        margin-top: 20px;
        justify-content: left;
        flex-wrap: nowrap;
        max-width: 90vw;
        width: fit-content;
        overflow-x: auto;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    .item {
        flex-shrink: 0;

    }

    .list::-webkit-scrollbar {
        display: none;
    }

    .list>*+* {
        margin-top: 0;
    }

    .item__add {
        margin-top: 0;
    }
}
</style>