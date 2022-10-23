<template>
  <div class="pie-echart">
    <base-echart :options="options"></base-echart>
  </div>
</template>
<script setup lang="ts">
import baseEchart from './base-echart.vue'
import { EChartsOption } from 'echarts'
import { computed } from 'vue'

export interface IDateType {
  name: string
  value:string
}
const props = defineProps<{
  pieData: IDateType[]
}>()
// props数据有可能随时会变, 所以使用 computed 计算属性
const options = computed(() => {
  return {
    grid: {
    left: '2%',
    bottom: '0',
      right: '2%',
    top:'0',
    containLabel: true
  },
    series: [
    {
        name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: props.pieData,
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
    ],
} as EChartsOption
})
</script>