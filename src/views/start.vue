<template>
    <nav-bar left-text="日常记账"
    @click-left="clickLeftHandle" @click-right="clickRightHandle">
      <template #leftIcon>
        <img :src="menuSvg" alt="" class="left-icon-img">
      </template>
    </nav-bar>
    <div class="start-content">
      <img :src="pigSvg" alt="">
      <span>点击下方 ↓ 按钮可以随时记账</span>
    </div>
    <e-button class="button" @click="handleClick">开始记账</e-button>
    <float-button />
    <Overlay :visible="overlayVisible" @close-overlay="closeOverlayHandle"/>
</template>
<script setup lang="ts">
// svg
import menuSvg from '../assets/icons/menu.svg'
import pigSvg from '../assets/icons/pig.svg'
import navBar from '../components/navBar.vue'
// 组件
import EButton from '../components/button.vue'
import FloatButton from '../components/floatButton.vue'
import Overlay from '../components/overlay.vue'

import { ref } from 'vue'
const handleClick = () => {
  console.log('hi')
}
const clickLeftHandle = () => {
  // console.log('点击了 navBar的左侧区域')
  overlayVisible.value = !overlayVisible.value
}
const clickRightHandle = () => {
  console.log('点击了 navBar的右侧区域')
}
// 遮罩层
const overlayVisible = ref(false)

const closeOverlayHandle = () => {
  overlayVisible.value = false
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
.start-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 80px;
  > span {
    margin-top:16px;
  }
}
</style>