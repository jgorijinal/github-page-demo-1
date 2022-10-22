<template>
  <!--导航栏-->
  <div class="container">
    <nav-bar left-text="日常记账"
    @click-left="clickLeftHandle" @click-right="clickRightHandle">
      <template #leftIcon>
        <img :src="menuSvg" alt="" class="left-icon-img">
      </template>
    </nav-bar>
    <!--中间主要内容-->
    <div class="start-content">
      <img :src="pigSvg" alt="">
      <span>点击下方 ↓ 按钮可以随时记账</span>
    </div>
    <!--记账按钮-->
    <e-button class="button" @click="handleClick">开始记账</e-button>
    <!--悬浮按钮-->
    <float-button />
    <!--遮罩层-->
    <overlay-with-route :overlayVisible="overlayVisible" @close-overlay="closeOverlayHandle"/>
  </div>
</template>
<script setup lang="ts">
// svg
import menuSvg from '../assets/icons/menu.svg'
import pigSvg from '../assets/icons/pig.svg'
// 组件
import EButton from '../components/button.vue'
import navBar from '../components/navBar.vue'
import FloatButton from '../components/floatButton.vue'
import OverlayWithRoute from '../components/OverlayWithRoute.vue'

import { ref } from 'vue'
import { useRouter} from 'vue-router'
const router = useRouter()
const handleClick = () => {
  router.push('/item/create')
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
.container {
  height:100vh;
}
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