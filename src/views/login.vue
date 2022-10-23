<template>
  <nav-bar left-text="登录">
    <template #leftIcon>
      <img :src="fanhuiSvg" alt="">
    </template>
  </nav-bar>
</template>
<script setup lang="ts">
import fanhuiSvg from '../assets/icons/fanhui.svg'
import NavBar from '../components/navBar.vue'
</script>
<style lang="scss" scoped>
  
</style>