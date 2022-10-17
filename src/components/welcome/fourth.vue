<template>
  <card :img-src="chart" text-up="每日提醒" text-down="不遗漏每一笔账单"></card>
</template>

<script lang="ts" setup>
import Card from './components/card.vue'
import chart from '../../assets/icons/chart.svg'
</script>
<style scoped lang="scss">

</style>