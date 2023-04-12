<template>
    <div class="text">
        <span class="pull"> Нажмите на текст </span>
        <span class="pull pull_down"> Основное</span>
        <div class="images">
            <div class="add_first">
                <span class="add">Добавьте</span>
                <span class="add">заголовок</span>
            </div>
            <div class="add_second">
                <span class="add_medium">Добавьте</span>
                <span class="add_medium">подзаголовок</span>
            </div>
            <div class="add_third">
                <span class="add_little">Добавьте</span>
                <span class="add_little">основной</span>
                <span class="add_little">текст</span>
            </div>
        </div>
        <span class="pull pull_down"> Дополнительные </span>
        <div class="image">
            <div class="add_first"> <span class="add_little">Подпись</span></div>
            <div class="add_second"> <span class="add_little">Список</span></div>
            <div class="add_third"></div>
        </div>
    </div>
</template>

<style scoped>
.image div {
    flex-shrink: 0;
    width: 143px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 5px;
}

.image::-webkit-scrollbar {
    display: none;
}

.image>*+* {
    margin-left: 10px;
}

.image {
    margin-top: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px;
    display: flex;
    width: 100vw;
    overflow-x: auto;
}

.add_little {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;

    color: #303030;
}

.add_third {
    box-sizing: border-box;
    padding-left: 16px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.add_medium {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    color: #303030;
}

.add_second {
    box-sizing: border-box;
    padding-left: 12px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.add_first {
    box-sizing: border-box;
    padding-left: 13px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
}

.add {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;

    color: #303030;
}

.images div {
    flex-shrink: 0;
    width: 143px;
    height: 88px;
    background: #FFFFFF;
    border-radius: 5px;
}

.images>*+* {
    margin-left: 10px;
}

.images {
    margin-top: 10px;
    -ms-overflow-style: none;
    scrollbar-width: none;
    padding: 0 16px;
    display: flex;
    width: 100vw;
    overflow-x: auto;
}

.images::-webkit-scrollbar {
    display: none;
}

.pull_down {
    margin-top: 10px;
}

.text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.pull {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;

}
</style>