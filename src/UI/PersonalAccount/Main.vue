<template>
    <div class="PA__main">
        <span class="title">Личный кабинет</span>
        <PA_Menu />
        <chapter />
    </div>
</template>

<script setup>
import PA_Menu from "./Menu.vue";
import Rates from "./Rates/Main.vue";
import Support from "./Support/Main.vue";
import Payment from "./Payment/Main.vue";
import Date from "./Date/Main.vue"
import Security from "./Security/Main.vue"

export default {
    data() {
        return {
            chapter: Rates
        }
    }
}

</script>

<style scoped>
.PA__main {
    padding-bottom: 40px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: #000000;
}
</style>

