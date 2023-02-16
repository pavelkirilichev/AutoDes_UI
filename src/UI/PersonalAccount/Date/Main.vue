<template>
    <div class="date__main">
        <span class="black--medium title">Сменить данные</span>
        <span class="black--medium">Данные были обновлены 1 месяц назад</span>
        <div class="form">
            <div class="form__item">
                <img src="/images/date/edit_alt.svg" alt="">
                <input type="text" placeholder="Олег" class="dark--medium">
            </div>
            <div class="form__item">
                <img src="/images/date/email.svg" alt="">
                <input type="text" placeholder="example@mail.ru" class="dark--medium">
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
    padding-left: 15px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;
    height: 36px;
}

.form__item>*+* {
    margin-left: 13px
}

input {
    width: 260px;
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