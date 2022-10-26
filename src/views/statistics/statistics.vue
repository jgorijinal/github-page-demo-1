<template>
  <nav-bar left-text="统计图标" @clickLeft="overlayVisible = true">
    <template #leftIcon>
      <img :src="menuSvg" alt="" class="left-icon-img">
    </template>
  </nav-bar>
  <div class="container-wrapper">
    <tabs v-model:active="activeName">
    <tab name="本月">
      <charts  :startDate="getThisMonth().startDate" :endDate="getThisMonth().endDate" v-model="activeSelect1"/>
    </tab>
    <tab name="上月">
      <charts  :startDate="getLastMonth().startDate" :endDate="getLastMonth().endDate" v-model="activeSelect2"/>
    </tab>
    <tab name="今年">
      <charts  :startDate="getThisYear().startDate" :endDate="getThisYear().endDate" v-model="activeSelect3"/>
    </tab>
    <tab name="自定义时间">
          <!--日期选择器(二次封装)-->
        <date-picker @date-changed="dateChanged"/>
        <charts  :startDate="customDate.startDate" :endDate="customDate.endDate" v-model="activeSelect4"/>
    </tab>
  </tabs>
  </div>
  <overlay-with-route :overlayVisible="overlayVisible" @close-overlay="overlayVisible = false"/>
</template>
<script lang="ts" setup>
import menuSvg from '../../assets/icons/menu.svg'
import NavBar from '../../components/navBar.vue'

import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import datePicker from '../../components/datePicker.vue'
import charts from './components/charts.vue'
import overlayWithRoute from '../../components/overlayWithRoute.vue'
import { getThisMonth,getLastMonth,getThisYear } from '../../utils/dateCalc'
import { ref } from 'vue';
// 左侧菜单显示/隐藏
const overlayVisible = ref(false)
// 标签页激活项
const activeName = ref('本月')
// 自定义日期
const customDate = ref({
  startDate: '',
  endDate:''
})

// 日期改变
const dateChanged = (date:any) => {
  customDate.value = date
}

// 类型选择 收入income / 支出 expenses
const activeSelect1 = ref('expenses')
const activeSelect2 = ref('expenses')
const activeSelect3 = ref('expenses')
const activeSelect4 = ref('expenses')
</script>
<style lang="scss" scoped>
img{
  width:1.2em;
  height:1.2em;
}
.eren-navBar-content{
  position:fixed;
  left:0;
  top:0;
  z-index:20;
}
.container-wrapper {
  padding-top:50px;
}
</style>