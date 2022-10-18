<template>
  <div>
    <e-button class="button" @click="handleClick">开始记账</e-button>
  </div>
</template>
<script setup lang="ts">
import EButton from '../components/button.vue'
const handleClick = () => {
  console.log('hi')
}
</script>
<style lang="scss" scoped>
.button {
  display: block;
  margin:10px;
}
</style>