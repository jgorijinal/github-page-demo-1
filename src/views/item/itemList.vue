<template>
  <nav-bar leftText="日常记账" @clickLeft="overlayVisible = true">
    <template #leftIcon >
      <img :src="menuSvg" alt="" class="left-icon-img">
    </template>
  </nav-bar>
  <overlay-with-route :overlayVisible="overlayVisible" @close-overlay="overlayVisible = false"/>
</template>
<script setup lang="ts">
import navBar from '../../components/navBar.vue'
// import tabs from '../../components/tabs.vue'
// import tab from '../../components/tab.vue'
import menuSvg from '../../assets/icons/menu.svg'

import overlayWithRoute from '../../components/overlayWithRoute.vue'
import { ref } from 'vue'
const overlayVisible = ref(false)
</script>
<style lang="scss" scoped>
.left-icon-img {
  width:1.2em;
  height:1.2em;
}
</style>