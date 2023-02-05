<template>
    <div class="support__main">
        <span class="black--semibold">Поддержка</span>
        <p class="support__title black--medium">
            Здесь вы сможете найти ответы на вопросы, решить личный вопрос с
            техподдержкой и помочь сервису стать лучше для вас
        </p>
        <div class="questions">
            <div class="question">
                <span class="violet--medium">Часто задаваемые вопросы</span>
                <img src="/images/support/arrow.svg" alt="">
            </div>
            <div class="question">
                <span class="violet--medium">Telegram</span>
                <img src="/images/support/arrow.svg" alt="">
            </div>
            <div class="question">
                <span class="violet--medium">autodesigner@mail.ru</span>
                <img src="/images/support/arrow.svg" alt="">
            </div>
        </div>
        <div class="support__form">
            <span class="black--semibold">Написать обращение</span>
            <span class="black--medium">Чем мы можем вам помочь?</span>
            <textarea class="support__textarea dark--medium" placeholder="Введите текст..."></textarea>
        </div>
        <Button color="blue" class="support__btn">Отправить</Button>
    </div>
</template>

<script setup>
import Button from '@/UI/Buttons/Button.vue';
</script>

<style scoped>
.support__main {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.support__title {
    text-align: center;
    margin-top: 10px;
    width: 571px;
}

.questions {
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.question {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 255px;
}

.support__form {
    margin-top: 23px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
}

.support__textarea {
    padding: 10px 20px;
    width: 529px;
    height: 124px;
}

.support__textarea::placeholder {
    font-family: 'Montserrat';

    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    color: #BABABA;
}

.support__btn {
    margin-top: 23px;
    border-radius: 10px;
}
</style>
