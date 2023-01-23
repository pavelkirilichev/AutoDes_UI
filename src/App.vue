<template>
  <div class="main">
    <NavBar />
    <div class="main__center">
      <Main />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import NavBar from "./UI/NavBar.vue";
import Footer from "./UI/Footer.vue";
import Main from "./UI/PersonalAccount/Main.vue";
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

.main {
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  background: #F5F5F7;
}

.main__center {
  margin-top: 60px;
  min-height: calc(100vh - 271px);
}
</style>
