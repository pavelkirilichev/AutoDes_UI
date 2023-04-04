<template>
    <div class="constructor">
        <NavBar />
        <Footer />
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
</script>

<style>
.constructor {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
}
</style>