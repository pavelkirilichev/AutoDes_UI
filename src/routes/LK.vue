<template>
    <div class="main">
        <NavBar />
        <div class="main__center">
            <Main />
        </div>
        <Footer />
    </div>
    <div class="lk_mobile">
        <NavbarMob @changeNavbar="changeNavbar" :navbar="navbar" />
        <div class="lk_mobile__main" :class="navbar == 1 ? 'hide' : ''">
            <Main />
        </div>
        <FooterMob :class="navbar == 1 ? 'hide' : ''" />
    </div>
</template>
  
<script setup>

import Footer from "../UI/PersonalAccount/Footer.vue";
import Main from "../UI/PersonalAccount/Main.vue";
import ModalAuth from "../UI/Modals/ModalAuth.vue"
import NavbarMob from "../UI/PersonalAccount/NavbarMob.vue";
import FooterMob from "../UI/PersonalAccount/FooterMob.vue";
import NavBar from "../UI/PersonalAccount/NavBar.vue";
import ModalCash from "../UI/PersonalAccount/Payment/ModalCash.vue";
import ModalFree from "../UI/PersonalAccount/Payment/ModalFree.vue";
import Constructor from "../UI/Constructor/Main.vue"
import { ref, defineEmits } from 'vue';


const navbar = ref(0)

const changeNavbar = () => {
    navbar.value = navbar.value == 0 ? 1 : 0
}

const emit = defineEmits(['changeNavbar'])
</script>
  
<style>
.hide {
    display: none !important;
}

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

span {
    padding: 0;
    margin: 0;
}

ul {
    list-style: none;
}

button {
    border: none;
    cursor: pointer;
}

textarea {
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
}

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
    background: #F5F5F7;
}

.main__center {
    padding-top: 100px;
    min-height: calc(100vh - 271px);
}

.black--medium {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #000000;
}

.black--semibold {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
}

.dark--medium {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #303030;
}

.dark--semibold {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #000000;
}

.white--medium {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FFFFFF;
}

.white--bold {
    font-family: 'Montserrat';
    font-weight: 700;
    font-size: 33px;
    line-height: 40px;
    color: #FFFFFF;
}

.violet--regular {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #3B0CFA;
}

.violet--medium {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #3B0CFA;
}

.violet--semibold {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 15px;
    line-height: 18px;
    color: #3B0CFA
}

.pink--medium {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FA0C54;
}

.pink--semibold {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    color: #303030;
}

.grey--medium {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #BABABA;
}

.green--medium {
    font-family: 'Gilroy';
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #0CFAB2;
}

.text__logo {
    font-weight: 400;
    font-family: 'Inter';
}

.align--center {
    text-align: center;
}


input {
    border: none;
    outline: none;
}

.lk_mobile {
    display: none;
    justify-content: space-between;
    background: #F5F5F7;
    min-height: 100vh;
}

.lk_mobile__main {
    padding-top: 20px;
    min-height: calc(100vh - 400px);
}

@media (max-width: 1015px) {
    .main {
        display: none;
    }

    .lk_mobile {
        display: flex;
        flex-direction: column;
    }

    .black--semibold {
        font-size: 20px;
    }

}
</style>
  