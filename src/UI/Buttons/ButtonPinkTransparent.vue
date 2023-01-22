<template>
    <button class="button">
        <span class="text">
            <slot></slot>
        </span>
    </button>
</template>

<style scoped>
.button {
    padding: 8px 15px;
    background: transparent;
    border-radius: 5px;
    border: 1px solid #FA0C54;
}

.text {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #FA0C54;
}
</style>

