<template>
  <overlay :visible="overlayVisible" @closeOverlay="onClose">
    <ul class="menu-nav">
      <li class="menu-nav-item" @click="$router.push('/start')" :class="{selected:$route.path === '/start'}">
          <img :src="startSvg" alt="">
          <span>首页</span>
        </li>  
        <li class="menu-nav-item" @click="$router.push('/item/create')" :class="{selected:$route.path === '/item/create'}">
          <img :src="jizhangSvg" alt="">
          <span>记一笔账</span>
        </li> 
        <li class="menu-nav-item"  @click="$router.push('/item/list')" :class="{selected:$route.path === '/item/list'}">
          <img :src="listSvg" alt="">
          <span>账单列表</span>
        </li>  
      <li class="menu-nav-item"  @click="$router.push('/statistics')" :class="{selected:$route.path === '/statistics'}">
          <img :src="tongjiSvg" alt="">
          <span>统计图表</span>
        </li>
        <li class="menu-nav-item">
          <img :src="fenleiSvg" alt="">
          <span>自定义分类</span>
        </li>
        <li class="menu-nav-item">
          <img :src="exportSvg" alt="">
          <span>导出数据</span>
        </li>
        <li class="menu-nav-item">
          <img :src="tixingSvg" alt="">
          <span>记账提醒</span>
        </li>
      </ul>
  </overlay>
</template>
<script setup lang="ts">
import tongjiSvg from '../assets/icons/tongji.svg'
import fenleiSvg from '../assets/icons/fenlei.svg'
import exportSvg from '../assets/icons/export.svg'
import tixingSvg from '../assets/icons/tixing.svg'
import startSvg from '../assets/icons/start.svg'
import listSvg from '../assets/icons/list.svg'
import jizhangSvg from '../assets/icons/jizhang.svg'
import overlay from './overlay.vue'

const props = defineProps({
  overlayVisible: {
    type: Boolean,
    required: true
  }
})
const emits = defineEmits(['close-overlay'])
const onClose = () => {
  emits('close-overlay')
}
</script>
<style lang="scss" scoped>
.left-icon-img {
  width:1.2em;
  height:1.2em;
}
.menu-nav {
    display: flex;
    flex-direction: column;
  &-item {
    display: flex;
    align-items: center;
    font-size: 18px;
    padding:8px 10px;
    transition: all 0.25s ease;
    cursor:pointer;
    &:hover,&:active,&.selected {
      background-color: antiquewhite;
    }
    img{
      width:1.8em;
      height:1.8em;
      margin-right: 8px;
    }
  }
}
</style>