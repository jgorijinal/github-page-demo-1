<template>
  统计组件
</template>
<script setup lang="ts">
// 开始时间, 结束时间
interface chartsProps {
  startDate: string
  endDate:string
}
const props = defineProps<chartsProps>()
</script>
<style lang="scss" scoped>
  
</style>