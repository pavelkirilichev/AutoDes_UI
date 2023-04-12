<template>
    <div class="templates">
        <div class="images">
            <img src="/images/constructor/sidebar_menu/templates/image_1.png" alt="">
            <img src="/images/constructor/sidebar_menu/templates/image_2.png" alt="">
            <img src="/images/constructor/sidebar_menu/templates/image_3.png" alt="">
            <img src="/images/constructor/sidebar_menu/templates/image_4.png" alt="">
        </div>
        <button class="generate">
            <span>Сгенерировать ещё</span>
        </button>
    </div>
</template>

<style scoped>
.generate span {
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    text-align: center;
    color: #3B0CFA;
}

.generate {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    width: 50%;
    margin-left: 25%;
    height: 36px;
    border: 1px solid #3B0CFA;
    border-radius: 5px;
    background: #fff;
}

.images>*+* {
    margin-left: 10px;
}

.images {
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px;
    display: flex;
    overflow-x: auto;
}

.images::-webkit-scrollbar {
    display: none;
}
</style>