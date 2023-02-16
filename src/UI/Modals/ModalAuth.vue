<template>
    <div class="modal__section">
        <div class="modal">
            <div class="modal__enter">
                <span class="dark--medium">Уже зарегистрированы?</span>
                <span class="pink--medium">Войти</span>
            </div>
            <div class="modal__data">
                <span class="black--semibold">Впервые на Autodesigner?</span>
                <div class="data__enter">
                    <input class="data__input" placeholder="autodesigner@mail.ru" />
                    <span class="data__input__title">Ваша почта введена некорректно</span>
                    <div class="forma_box">
                        <input class="data__input__grey" placeholder="•••••••••••••••" />
                        <img src="/images/date/blind.svg" />
                    </div>
                    <img class="thumb" src="/images/modal/thumb.svg" />
                    <span class="data__input__title">Надёжный пароль</span>
                    <div class="forma_box">
                        <input class="data__input__grey" placeholder="•••••••••••••••" />
                        <img src="/images/date/blind.svg" />
                    </div>
                    <span class="data__input__title">Пароли не совпадают</span>
                </div>
                <div class="accept">
                    <img src="/images/modal/accept.svg" />
                    <span class="black--litle">Принимаю</span>
                    <span class="blue--litle">Пользовательское соглашение</span>
                </div>
                <button class="btn-add">
                    <img src="/images/modal/user.svg" alt="">
                    <span>Создать аккаунт</span>
                </button>
            </div>
        </div>
    </div>
</template>



<style scoped>
.btn-add {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 24px;
    width: 324px;
    height: 36px;
    background: #374EF3;
    border-radius: 5px;
}

.btn-add>*+* {
    margin-left: 10px
}

.btn-add span {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;

    color: #FFFFFF;
}

.black--litle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #000000;
    margin-left: 6px;
}

.blue--litle {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #374EF3;
}

.accept {
    display: flex;
    align-items: center;
    margin-top: 24px;
}

.accept>*+* {
    margin-left: 3px
}

.thumb {
    width: 195px;
    margin-left: 15px;
    margin-top: 10px;
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
    z-index: 2;
}

.modal {
    padding: 20px;
    width: 534px;
    height: 558px;
    background: #f5f5f7;
    border-radius: 10px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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

.data__enter {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
}

.data__enter>*+* {
    margin-top: 10px
}

.data__input {
    width: 324px;
    height: 36px;
    background: #FFFFFF;
    border: 1px solid #FA0C54;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 15px;
}

.data__input::placeholder {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #BABABA;
}

.data__input__title {
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    color: #FA0C54;
    margin-left: 15px;
}

.data__input__grey {
    width: 324px;
    height: 36px;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    padding-left: 5px;
}

.data__input__grey::placeholder {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #BABABA;
}

.forma_box {
    box-sizing: border-box;
    padding: 0px 6px 0px 10px;
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border-radius: 5px;
    width: 324px;
    height: 36px;
}
</style>
