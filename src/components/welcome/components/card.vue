<template>
  <div class="welcome-card">
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.welcome-card {
  background-color:#feedb0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 6px;
}
</style>