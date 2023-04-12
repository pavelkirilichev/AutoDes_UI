<template>
    <div class="constructor">
        <NavBar />
        <div class="constructor__main">
            <img src="/images/constructor_mobile/slide.svg" alt="" class="slide-image" />
            <img src="/images/constructor_mobile/image.png" alt="" class="main-image" />
        </div>
        <div class="constructor-bottom">
            <div class="options__main">
                <component :is="chapter" />
            </div>
            <Footer @changeChapter="changeChapter" :chapterName="chapterName" />
        </div>

    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

import NavBar from './NavBar.vue';
import Footer from './Footer.vue';
import Templates from './Parts/Templates.vue';
import Text from './Parts/Text.vue';
import Font from './Parts/Font.vue';
import Elements from './Parts/Elements.vue';

const comp = ref({
    Templates,
    Text,
    Font,
    Elements,
})

const chapterName = ref('Templates')

function changeChapter(key) {
    chapterName.value = key
}

const chapter = computed(() => {
    return comp.value[chapterName.value]
})
</script>

<style scoped>
.constructor {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
}

.constructor-bottom {
    position: fixed;
    width: 100vw;
    bottom: 0;
    left: 0;
}

.options__main {
    padding: 20px 0;
    width: 100%;
    background: #F7F7FF;
}


.constructor__main {
    width: 100vw;
    margin-top: 135px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    width: 283px;
    height: 284px;
}

.slide-image {
    cursor: pointer;
    position: fixed;
    right: 0;
    top: calc(50% - 32px);
}
</style>