<template>
  <template v-for="item in betterData" :key="item.tag.id">
  <div class="progress-bar">
    <div class="progress-bar-sign">
      {{item.tag.sign}}
    </div>
    <div class="progress-bar-text">
      <div class="progress-bar-text-info">
        <span>{{item.tag.name}}</span>
        <span>{{item.amount}}</span>
      </div>
      <van-progress :percentage="item.percentage.slice(0,-1)" color="#53a868" track-color="#cccccc"/>
    </div>
  </div>
</template>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
// 数据示例
const data = [
  { tag: { id: 1, name: '房租', sign: 'x' }, amount: 100 },
  { tag: { id: 2, name: '吃饭', sign: 'x' }, amount: 120 },
  { tag: {id:3,name:'娱乐',sign:'x'},amount: 140 },
]
// 每个数据加工加入百分比
const betterData = computed(() => {
  let total = 0
  data.forEach((item) => {
    total += item.amount
  })
  return data.map(item => {
    return {
      ...item, percentage: Math.round((item.amount / total) * 100) + '%'
    }
  })
})
console.log(betterData.value)
</script>
<style lang="scss" scoped>
.progress-bar {
  padding:10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  &-sign{
    width:40px;
    height:40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e8e4e4;
    border-radius: 50%;
    margin-right:6px;
  }
  &-text{
    flex-grow: 1;
    &-info{
      padding-bottom:10px;
      display: flex;
      color:#a5a2a2;
      justify-content: space-between;
    }
  }
}
</style>