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
    <line-echart :x-labels="['x1','x2','x3']" :values="['123','231','564']"></line-echart>
  </div>
</template>
<script setup lang="ts">
import { ref,onMounted } from 'vue'
import lineEchart from './LineEchart.vue'
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