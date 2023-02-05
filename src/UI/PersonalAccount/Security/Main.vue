<template>
    <div class="date__main">
        <span class="black--medium title">Сменить данные</span>
        <span class="black--medium">Данные были обновлены 1 месяц назад</span>
        <div class="form">
            <div class="form__item">
                <img src="/images/date/key.svg" alt="">
                <input type="text" placeholder="Введите старый пароль" class="dark--medium">
                <img src="/images/date/blind.svg" alt="">
            </div>
            <div class="form__item">
                <img src="/images/date/key.svg" alt="">
                <input type="text" placeholder="Придумайте новый пароль" class="dark--medium">
                <img src="/images/date/blind.svg" alt="">
            </div>
            <div class="form__item">
                <img src="/images/date/key.svg" alt="">
                <input type="text" placeholder="Повторите новый пароль" class="dark--medium">
                <img src="/images/date/blind.svg" alt="">
            </div>
        </div>
        <Button color="blue" class="support__btn">Отправить</Button>
    </div>
</template>

<script setup>
import Button from '@/UI/Buttons/Button.vue';
</script>

<style scoped>
.title {
    font-size: 20px;
}

.date__main {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
}

.form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 324px;
}

.form__item {
    padding-left: 13px;
    padding-right: 13px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 13px;
    background: #FFFFFF;
    border-radius: 5px;
    height: 36px;
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
    border-radius: 10px;
}
</style>