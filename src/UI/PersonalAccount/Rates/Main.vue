<template>
    <div class="rates">
        <span class="black--semibold">Тарифные планы</span>
        <div class="rates__title-block">
            <span class="white--medium">Ваш тариф: Презентации</span>
        </div>
        <span class="black--medium">Следующее списание: 24.09.2023</span>
        <RatesList :style="{ marginTop: '20px' }" />
    </div>
</template>

<script setup>
import RatesList from './RatesList.vue';
</script>

<style scoped>
.rates {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.rates__title-block {
    margin-bottom: 10px;
    margin-top: 20px;
    padding: 8px 48px;
    background: #3B0CFA;
    border-radius: 5px;
}

.rates__title-block span {
    font-size: 20px;
    line-height: 24px;
}
</style>