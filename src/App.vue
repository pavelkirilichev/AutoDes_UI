<template>
  <Constructor />
</template>

<script setup>

import Footer from "./UI/Footer.vue";
import Main from "./UI/PersonalAccount/Main.vue";
import ModalAuth from "./UI/Modals/ModalAuth.vue"
import NavbarMob from "./UI/NavbarMob.vue";
import FooterMob from "./UI/FooterMob.vue";
import NavBar from "./UI/NavBar.vue";
import ModalCash from "./UI/PersonalAccount/Payment/ModalCash.vue";
import ModalFree from "./UI/PersonalAccount/Payment/ModalFree.vue";
import Constructor from "./UI/Constructor/Main.vue"
</script>

<style>
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
</style>
