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
            <div class="question--mail">
                <div class="question" @click="doCopy()">
                    <span class="violet--medium">autodesigner@mail.ru</span>
                    <img src="/images/support/copy.svg" alt="" class="copy_icon">
                </div>
                <div class="mail-copy__block" v-if="copyDisplay == 1">
                    <span class="mail-copy__block__text">Скопировано!</span>
                </div>
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
import { ref } from 'vue';
import { copyText } from 'vue3-clipboard'

function doCopy() {
    copyText('autodesigner@mail.ru', undefined, (error, event) => {
        if (error) {
            alert('Can not copy')
        } else {
            console.log('Copied')
            copyDisplay.value = 1
            setTimeout(() => {
                copyDisplay.value = 0
            }, 2000)
        }
    })
}

const copyDisplay = ref(0)
</script>

<style scoped>
.question--mail {
    display: flex;
    align-items: center;
    height: 13px;
}

.question--mail>*+* {
    margin-left: 25px
}

.mail-copy__block {
    padding: 2px 15px 3px 15px;
    background: #3B0CFA;
    border-radius: 5px;
    animation: animateCopy 3s ease-in;
}

@keyframes animateCopy {
    0% {
        opacity: 1;
    }

    100% {
        opacity: 0;
    }
}

.mail-copy__block__text {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 11px;
    color: #FFFFFF;
}

.copy_icon {
    height: 15px;
}

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
    margin-left: 140px;
    width: 393px;
    margin-top: 23px;
    display: flex;
    flex-direction: column;
}

.questions>*+* {
    margin-top: 10px
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
}

.support__form>*+* {
    margin-top: 10px
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
