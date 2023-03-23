<template>
    <div class="modal__section">
        <div class="modal">
            <div class="modal__inner">
                <span class="modal_title">Выберите, что будем создавать</span>
                <div class="creation">
                    <button class="create__img">
                        <span>Создать изображение</span>
                    </button>
                    <button class="create__presentation" disable="disabled">
                        <span>Создать презентацию</span>
                        <img src="/images/new_project/save.svg" />
                    </button>
                    <div class="lock-message">
                        <span class="black--medium">
                            Кажется, эта функция не входит в ваш тариф. Смените тариф на
                            <span class="violet--semibold">Презентации</span>
                            или
                            <span class="violet--semibold">Всё и Сразу</span> для ее использования
                        </span>
                        <button class="lock-btn">
                            <span>Сменить тариф</span>
                        </button>
                    </div>
                </div>
                <div class="parametrs">
                    <div class="name_project">
                        <span class="name_project__title">Введите название проекта</span>
                        <input placeholder="Начните вводить...." />
                    </div>
                    <div class="name_project">
                        <div class="choise">
                            <span>Выберите теги</span>
                            <span>*</span>
                        </div>
                        <div class="writing">
                            <input placeholder="Введите или выберите" />
                            <img src="/images/new_project/choise.svg" />
                        </div>
                        <div class="tegs">
                            <div class="object">
                                <span>Банк</span>
                                <img src="/images/new_project/close.svg" />
                            </div>
                            <div class="object">
                                <span>Тег теговский</span>
                                <img src="/images/new_project/close.svg" />
                            </div>
                            <div class="object">
                                <span>Абобоус</span>
                                <img src="/images/new_project/close.svg" />
                            </div>
                        </div>
                        <div class="name_project color">
                            <span class="name_project__title">Выберите цвет</span>
                            <div class="paint">
                                <img src="/images/new_project/heq.svg" />
                                <span>#HEX</span>
                            </div>
                        </div>
                        <div class="downloading">
                            <div class="logo">
                                <span class="name_project__title">Загрузите логотип</span>
                                <div class="loading">
                                    <div class="loading_logo">
                                        <img src="/images/new_project/download.svg" />
                                        <span>Загрузить</span>
                                    </div>
                                    <img class="info" src="/images/new_project/info.svg" />
                                </div>
                            </div>
                            <div class="logo">
                                <span class="name_project__title">Выберите шрифт</span>
                                <div class="writing shrift">
                                    <span>Montserrat</span>
                                    <img src="/images/new_project/choise.svg" />
                                </div>
                            </div>
                            <div class="logo">
                                <span class="name_project__title">Загрузите картинку</span>
                                <div class="loading">
                                    <div class="loading_logo">
                                        <img src="/images/new_project/download.svg" />
                                        <span>Загрузить</span>
                                    </div>
                                    <img class="info" src="/images/new_project/info.svg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="finish">
                    <span>Готово</span>
                </button>
                <span class="name_project__title arxif">Архив проекта</span>
                <div class="projects">
                    <div class="projects_object"></div>
                    <div class="projects_object"></div>
                    <div class="projects_object"></div>
                    <div class="projects_object"></div>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup>
import Button from '@/UI/Buttons/Button.vue';
</script>
<style scoped>
.create__presentation:hover+.lock-message {
    display: flex;
}

.lock-message:hover {
    display: flex;
}

.lock-message {
    display: none;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    position: absolute;
    right: -160px;
    top: 50px;
    width: 280px;
    background: #FFFFFF;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
}

.lock-message span {
    width: 100%;
}

.lock-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto !important;
    height: 34px;
    background: #3B0CFA;
    border-radius: 10px;
    padding: 0 15px;
}

.lock-btn span {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
    white-space: nowrap;
}

.lock-message>*+* {
    margin-top: 20px;
}

.creation {
    position: relative;
}

.creation img {
    cursor: pointer;
    position: absolute;
    right: -43px;
    top: 16px
}

.modal__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.projects_object {
    width: 131px;
    height: 131px;
    margin-top: 20px;
    background: #E6E6E6;
    border-radius: 5px;
}

.projects>*+* {
    margin-left: 20px;
}

.projects {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
}

.arxif {
    margin-top: 20px;
}

.finish {
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 159px;
    height: 36px;
    background: #3B0CFA;
    border-radius: 5px;
}

.finish span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    color: #FFFFFF;

}

.shrift span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #303030;
}

.shrift {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 9px 20px;
}

.info {
    position: absolute;
    right: -30px;
}

.loading_logo span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.loading_logo>*+* {
    margin-left: 14.25px;
}

.loading_logo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 34px;
    background: #F7F5FF;
    border: 1px dashed #3B0CFA;
    border-radius: 10px;
}

.loading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
}

.logo>*+* {
    margin-top: 10px;
}

.logo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.downloading>*+* {
    margin-top: 20px;
}

.downloading {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.paint span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #303030;

}

.paint {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 34px;
    background: #E6E6E6;
    border-radius: 5px;
}

.paint>*+* {
    margin-left: 11.5px;
}

.color {
    margin-top: 20px !important;
}

.object>*+* {
    margin-left: 17px;
}

.object span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.object {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 9px 20px;
    height: 36px;
    background: #E6E6E6;
    border-radius: 5px;
}

.tegs>*+* {
    margin-left: 10px;
}

.tegs {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

.writing {
    display: flex;
    align-items: center;
    width: 280px;
    height: 36px;
    background: #E6E6E6;
    border-radius: 5px;
    padding-right: 16px;
}

.choise span:nth-child(1) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
}

.choise span:nth-child(2) {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FA0C54;
}

.choise {
    display: flex;
    align-items: center;
    justify-content: center;
}

.name_project__title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #303030;
}

.name_project input {
    width: 280px;
    height: 36px;
    background: #E6E6E6;
    border-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #303030;
}

.name_project input::placeholder {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    color: #A4A4A4;
}

.name_project>*+* {
    margin-top: 10px;
}

.name_project {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.parametrs>*+* {
    margin-top: 20px;
}

.parametrs {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.create__presentation {
    width: 235px;
    height: 60px;
    background: #D9D9D9;
    border-radius: 5px;
}

.create__presentation span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    color: #9D9D9D;

}

.create__img {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 235px;
    height: 60px;
    background: #3B0CFA;
    border-radius: 5px;
}

.create__img span {

    font-family: 'Montserrat';

    font-weight: 600;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;

}

.creation>*+* {
    margin-left: 20px;
}

.creation {
    margin-top: 19px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal_title {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

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
    max-height: 80vh;
    padding: 20px;
    width: 853px;
    overflow-y: auto;
    background: #f5f5f7;
    border-radius: 10px;
}


.modal__enter {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}

.modal__enter>*+* {
    margin-left: 5px
}

.modal__data {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
}
</style>
