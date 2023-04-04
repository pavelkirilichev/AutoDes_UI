<template>
    <Constructor id="desktop" />
    <ConstructorMob id="mobile" />
</template>
  
<script setup>
import Constructor from '../UI/Constructor/Main.vue'
import ConstructorMob from '../UI/ConstructorMobile/Main.vue'
</script>

<style>
#mobile {
    display: none;
}

#desktop {
    display: flex;
}

@media (max-width: 1000px) {
    #mobile {
        display: flex;
    }

    #desktop {
        display: none;
    }
}
</style>
  
  