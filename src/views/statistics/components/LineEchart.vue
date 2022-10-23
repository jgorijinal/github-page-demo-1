<template>
  <div>
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script setup lang="ts">
import baseEchart from './base-echart.vue'
import { EChartsOption } from 'echarts'
import { computed } from 'vue'
// x轴,y轴 数据
export interface LineEchartProps {
  xLabels: string[]
  values:string[]
}
const props = defineProps<LineEchartProps>()
// props数据有可能随时会变, 所以使用 computed 计算属性
const options = computed(() => {
  return {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  // grid: {
  //   left: '3%',
  //   right: '4%',
  //   bottom: '3%',
  //   containLabel: true
  // },
  xAxis: [
    {
      type: 'category',
      boundaryGap: false,
      data: props.xLabels
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      areaStyle: {},
      emphasis: {
        focus: 'series'
      },
      data:props.values
    }
  ]
} as EChartsOption
})
</script>
<style lang="scss" scoped>
</style>