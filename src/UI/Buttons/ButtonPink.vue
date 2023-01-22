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
    background: #FA0C54;
    ;
    border-radius: 5px;
}

.text {
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    color: #ffffff;
}
</style>

