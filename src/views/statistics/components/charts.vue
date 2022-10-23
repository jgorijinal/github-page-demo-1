<template>
  <div class="eren-chart-container">
    <div class="eren-chart-select">
      <span>类型</span>
      <!--select 控件-->
    <select :value="modelValue" @change="selectChange">
      <option disabled value="">请选择</option>
      <option value="expense">支出</option>
      <option value="income">收入</option>
    </select>
    </div>
    <!--图表-->
    <div ref="divRef" :style="{width:'100vw', height:'300px'}"></div>
  </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import * as echarts from 'echarts'
// 开始时间, 结束时间, 支出/收入类型 v-model 绑定
interface chartsProps {
  startDate: string
  endDate: string
  modelValue:string
}
const props = defineProps<chartsProps>()
const emits = defineEmits(['update:modelValue'])

// 支出,收入切换动作
const selectChange = (e:any) => {
  // console.log(e.target.value) // 支出,收入
  emits('update:modelValue',e.target.value)
}

const divRef = ref<HTMLDivElement>()
onMounted(() => {
  const echartsInstance = echarts.init(divRef.value!)
  const options = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
  };
  echartsInstance.setOption(options)
})
</script>
<style lang="scss" scoped>
.eren-chart-container{
  padding:8px;
  .eren-chart-select{
    display: flex;
    align-items: center;
    select{
      margin-left:10px; 
    width:80px;
    height:30px;
    border:1px solid #3465e0;
  }
  }
}
</style>