<template>
    <div class="date__main">
        <span class="black--medium title">Сменить данные</span>
        <span class="black--medium">Данные были обновлены 1 месяц назад</span>
        <div class="form">
            <div class="form__item" v-for="item in Inputs">
                <img src="/images/date/key.svg" alt="">
                <input :type="item.typeInput" :placeholder="item.title" class="dark--medium">
                <img :src="item.typeInput == 'password' ? '/images/date/blind.svg' : '/images/date/no-blind.svg'" alt=""
                    @click="changeInput(item.id)">
            </div>

        </div>
        <Button color="blue" class="support__btn">Отправить</Button>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import Button from '@/UI/Buttons/Button.vue';

function changeInput(id) {
    Inputs.value[id - 1].typeInput = Inputs.value[id - 1].typeInput == "password" ? "text" : "password"
}

const Inputs = ref(
    [
        {
            id: 1,
            title: "Введите старый пароль",
            typeInput: "password"
        },
        {
            id: 2,
            title: "Придумайте новый пароль",
            typeInput: "password"
        },
        {
            id: 3,
            title: "Повторите новый пароль",
            typeInput: "password"
        }
    ]
)
</script>

<style scoped>
.title {
    font-size: 20px;
}

.date__main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.date__main>*+* {
    margin-top: 20px
}

.form {
    display: flex;
    flex-direction: column;
    width: 324px;
}

.form>*+* {
    margin-top: 8px
}

.form__item {
    padding-left: 13px;
    padding-right: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;
    height: 36px;
}

.form__item>*+* {
    margin-left: 13px
}

.form__item img {
    cursor: pointer;
}

input {
    width: 230px;
    outline: none;
    border: none;
}

input::placeholder {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    color: #BABABA;
}

.support__btn {
    border-radius: 5px;
    width: 324px;
}
</style>