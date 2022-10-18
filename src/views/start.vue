<template>
    <nav-bar left-text="日常记账"
    @click-left="clickLeftHandle" @click-right="clickRightHandle">
      <template #leftIcon>
        <img :src="menuSvg" alt="" class="left-icon-img">
      </template>
    </nav-bar>
    <e-button class="button" @click="handleClick">开始记账</e-button>
    <float-button />
</template>
<script setup lang="ts">
import EButton from '../components/button.vue'
import FloatButton from '../components/floatButton.vue'
import menuSvg from '../assets/icons/menu.svg'
import navBar from '../components/navBar.vue'
const handleClick = () => {
  console.log('hi')
}
const clickLeftHandle = () => {
  console.log('点击了 navBar的左侧区域')
}
const clickRightHandle = () => {
  console.log('点击了 navBar的右侧区域')
}
</script>
<style lang="scss" scoped>
.button {
  display: block;
  margin:10px;
}
.left-icon-img {
  width:1.2em;
  height:1.2em;
}
</style>