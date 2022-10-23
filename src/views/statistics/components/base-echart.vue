<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width:width, height:height }"></div>
  </div>
</template>
<script setup lang="ts">
import { withDefaults,ref, onMounted,watchEffect} from 'vue'
import useEchart from '../../../hooks/useEchart'
import { EChartsOption } from 'echarts'

interface baseEchartProps {
  width?: string
  height?: string
  options:EChartsOption
}
const props = withDefaults(defineProps<baseEchartProps>(), {
  width: '100vw',
  height: '300px'
})
const echartDivRef = ref<HTMLDivElement>()

onMounted(() => {
  const { echartInstance, setOptions, updateSize } = useEchart(echartDivRef.value!)
  // 但是 options 的数据可能会变, 每当变化时需重新调用 setOptions 方法所以 , 使用了 watchEffect
  watchEffect(() => {
    setOptions(props.options)
})
})

</script>
<style lang="scss" scoped>
</style>