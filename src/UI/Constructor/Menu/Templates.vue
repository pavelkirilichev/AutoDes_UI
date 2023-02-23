<template>
    <div class="templates">
        <div class="image_list">
            <img src="/images/constructor/sidebar_menu/templates/image_1.png" alt="">
            <img src="/images/constructor/sidebar_menu/templates/image_2.png" alt="">
            <img src="/images/constructor/sidebar_menu/templates/image_3.png" alt="">
            <img src="/images/constructor/sidebar_menu/templates/image_4.png" alt="">
        </div>
        <button class="generate-btn">
            <span>Сгенерировать еще</span>
        </button>
    </div>
</template>

<style scoped>
.templates {
    padding: 0 20px;
}

.image_list {
    display: flex;
    flex-direction: column;
}

.image_list>*+* {
    margin-top: 16px;
}

.generate-btn {
    margin-top: 20px;
    padding: 9px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #3B0CFA;
    background: #F7F7FF;
    border-radius: 5px;
}

.generate-btn span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;

    color: #3B0CFA;
}
</style>