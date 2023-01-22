<template>
  <div class="main">
    <nav-bar></nav-bar>
    <footer></footer>

  </div>

</template>

<script>
import NavBar from "./UI/NavBar.vue";
import Footer from "./UI/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  },
};
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
  margin: 5px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
