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
    <tab name="自定义时间">
          <!--日期选择器(二次封装)-->
        <date-picker @date-changed="dateChanged"/>
        <item-summary  :startDate="customDate.startDate" :endDate="customDate.endDate"/>
    </tab>
  </tabs>
</template>
<script setup lang="ts">
import navBar from '../../components/navBar.vue'
import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import menuSvg from '../../assets/icons/menu.svg'

import overlayWithRoute from '../../components/overlayWithRoute.vue'
import itemSummary from './components/itemSummary.vue'
import datePicker from '../../components/datePicker.vue'
import { ref } from 'vue'
import { getThisMonth,getLastMonth,getThisYear } from '../../utils/dateCalc'
// 左侧菜单显示/隐藏
const overlayVisible = ref(false)
// 标签页激活项
const activeName = ref('本月')
// 自定义时间 , 注意这个在我选择完 结束时间后被日期选择器重新赋值
const customDate = ref({
  startDate: '',
  endDate:''
})

const dateChanged = (x:any) => {
  customDate.value = x
}
</script>
<style lang="scss" scoped>
.left-icon-img {
  width:1.2em;
  height:1.2em;
}
.custom-date-btn {
  margin:10px 10px 0 10px;
    display: block;
    height: 48px;
    border:1px solid #272a42;
    padding:8px 16px; 
    font-size:16px;
    color:white;
    background-color:#272a42;
    border-radius:4px;
    transition: all 0.3s ease;
    &:hover,&:active {
      background-color:#3f425b;
      border:1px solid #3f425b;
    }
}
</style>