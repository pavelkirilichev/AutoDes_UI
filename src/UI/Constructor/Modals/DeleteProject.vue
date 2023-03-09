<template>
    <div class="modal__section">
        <div class="modal">
            <span class="title">Хотите удалить проект?</span>
            <span class="subtitle">Хотите удалить проект?</span>
            <div class="btn-container">
                <Button color="blue">Отмена</Button>
                <Button color="pink-transparent">Удалить</Button>
            </div>
        </div>
    </div>
</template>
<script setup>
import Button from '@/UI/Buttons/Button.vue';
</script>
<style scoped>
.btn-container {
    margin-top: 20px;
    display: flex;
}

.btn-container>*+* {
    margin-left: 15px;
}

.title {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 35px;
    text-align: center;
    color: #303030;
}

.subtitle {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    text-align: center;
    color: #303030;
}

.modal__section {
    position: fixed;
    top: -100px;
    width: 100vw;
    height: calc(100vh + 157px);
    background: rgba(0, 0, 0, 0.31);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 3;
}

.modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 154px;
    width: 405px;
    background: #f5f5f7;
    border-radius: 5px;
}
</style>
