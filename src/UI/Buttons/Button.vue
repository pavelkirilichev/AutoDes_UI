<template>
  <button :class="{ [`button ${color}`]: color }">
    <span class=" text">
      <slot></slot>
    </span>
  </button>
</template>

<script setup>
import defineProps from 'vue'
defineProps({
  color: String
})
</script>

<style scoped>
.button {
  padding: 8px 15px;
  border-radius: 5px;
}

.blue {
  background: #3b0cfa;
}

.pink {
  background: #FA0C54;
}

.pink-transparent {
  background: transparent;
  border: 1px solid #FA0C54
}

.pink-transparent .text {
  color: #FA0C54;
}

.text {
  font-family: 'Montserrat';
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
}
</style>

