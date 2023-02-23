<template>
    <div class="text">
        <div class="text__main">
            <span>Нажми на текст</span>
            <span>Основное</span>
        </div>
        <div class="text__medium">
            <div class="text__add">
                <span class="big_heading">Добавьте заголовок</span>
            </div>
            <div class="text__splash">
                <span class="medium_heading">Добавьте подзаголовок</span>
            </div>
            <div class="text__splash">
                <span class="little_heading">Добавьте основной текст</span>
            </div>
        </div>
        <div class="text__down">
            <span class="text__down_span ">Дополнительные</span>
            <div class="text__splash">
                <span class="little_heading">Подпись</span>
            </div>
            <div class="text__splash">
                <span class="little_heading">Список</span>
            </div>
            <div class="text__splash">
            </div>
        </div>
    </div>
</template>

<style scoped>
.text__down_span {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-family: 'Montserrat';
    color: #303030;
}

.text__down {
    margin-top: 47px;
    display: flex;
    flex-direction: column;
}

.text__down>*+* {
    margin-top: 10px;
}

.little_heading {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 18px;
    color: #303030;

}

.text__splash {
    display: flex;
    justify-content: start;
    align-items: center;
    width: 234px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 5px;
    padding-left: 10px;
}

.medium_heading {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.big_heading {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    color: #303030;

}

.text__add {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 234px;
    height: 39px;
    background: #FFFFFF;
    border-radius: 5px;
}

.text__medium {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
}

.text__medium>*+* {
    margin-top: 10px;
}


.text {
    display: flex;
    flex-direction: column;
}

.text__main {
    display: flex;
    flex-direction: column;
}

.text__main span {
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    font-family: 'Montserrat';
    color: #303030;
}

.text__main>*+* {
    margin-top: 20px;
}
</style>