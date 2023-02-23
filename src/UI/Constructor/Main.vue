<template>
    <div class="constructor">
        <NavBar />
        <div class="container">
            <SideBarLeft />
            <SideBarRight />
        </div>
    </div>
</template>

<script setup>
import NavBar from './NavBar.vue';
import SideBarLeft from './SideBarLeft.vue';
import SideBarRight from './SideBarRight.vue';
</script>

<style scoped>
.container {
    display: flex;
    justify-content: space-between;
}
</style>