<template>
  <nav-bar leftText="日常记账" @clickLeft="overlayVisible = true">
    <template #leftIcon >
      <img :src="menuSvg" alt="" class="left-icon-img">
    </template>
  </nav-bar>
  <overlay-with-route :overlayVisible="overlayVisible" @close-overlay="overlayVisible = false"/>
  <!--标签页-->
  <tabs v-model:active="activeName">
    <tab name="本月">
      <item-summary  :startDate="getThisMonth().startDate" :endDate="getThisMonth().endDate"/>
    </tab>
    <tab name="上月">
      <item-summary  :startDate="getLastMonth().startDate" :endDate="getLastMonth().endDate"/>
    </tab>
    <tab name="今年">
      <item-summary  :startDate="getThisYear().startDate" :endDate="getThisYear().endDate"/>
    </tab>
    <tab name="自定义时间"></tab>
  </tabs> 
</template>
<script setup lang="ts">
import navBar from '../../components/navBar.vue'
import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import menuSvg from '../../assets/icons/menu.svg'

import overlayWithRoute from '../../components/overlayWithRoute.vue'
import itemSummary from './components/itemSummary.vue'
import { ref } from 'vue'
import { getThisMonth,getLastMonth,getThisYear } from '../../utils/dateCalc'
const overlayVisible = ref(false)


const activeName = ref('本月')
</script>
<style lang="scss" scoped>
.left-icon-img {
  width:1.2em;
  height:1.2em;
}
</style>