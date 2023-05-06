<template>
    <div class="PA__main">
        <span class="title">Личный кабинет</span>
        <PA_Menu @changeChapter="changeChapter" :chapterName="chapterName" />
        <Transition mode="out-in">
            <component :is="chapter" />
        </Transition>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import PA_Menu from "./Menu.vue";
import Rates from "./Rates/Main.vue";
import Support from "./Support/Main.vue";
import Payment from "./Payment/Main.vue";
import Date from "./Date/Main.vue"
import Security from "./Security/Main.vue"

const comp = ref({
    Rates,
    Support,
    Payment,
    Date,
    Security
})

const chapterName = ref('Rates')

function changeChapter(key) {
    chapterName.value = key
}

const chapter = computed(() => {
    return comp.value[chapterName.value]
})
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



.v-enter-active,
.v-leave-active {
    transition: opacity 0.15s ease;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}

@media (max-width: 1015px) {
    .title {
        font-size: 20px;
        line-height: 20px;
    }
}
</style>