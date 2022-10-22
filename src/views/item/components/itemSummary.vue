<template>
  <div class="item-summary">
    <ul class="item-summary-total">
      <li><span>收入</span><span>128</span></li>
      <li><span>支出</span><span>100</span></li>
      <li><span>净收入</span><span>28</span></li>
    </ul>
    <ul class="item-summary-list">
      <li class="item-summary-list-item" v-for="item in data" :key="item.id">
        <div class="sign">
          <span>{{item.emoji}}</span>
        </div>
        <div class="text">
          <div class="tagAndAmount">
            <span class="tag">{{item.tagName}}</span>
            <span class="amount">{{item.amount}}</span>
          </div>
          <div class="time">
            {{item.time}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
interface ItemSummaryProps {
  startDate: string
  endDate:string
}
const props = defineProps<ItemSummaryProps>()

const data = ref([
  { id:1,emoji: 'xxx', tagName: '旅行', amount: '$100', time: '2020-01-01 12:39' },
  { id:2,emoji: 'xxx', tagName: '旅行', amount: '$100', time: '2020-01-01 12:39' },
  { id:3,emoji:'xxx',tagName:'旅行',amount:'$100',time:'2020-01-01 12:39'}
])
</script>
<style lang="scss" scoped>
.item-summary{
  padding:10px;
  &-total{
    height:70px;
    background-color: #272a42;
    color:white;
    display: flex;
    justify-content: space-between;
    border-radius: 4px;
    li {
      flex-grow:1;
      display: flex;
      flex-direction: column;
      justify-content:center;
      align-items: center;
      &:first-child{color:#17e914}
      &:nth-child(2){color:#fe8474}
    }
  }
  &-list{
    &-item {
      display: flex;
      padding:12px 0;
      .sign{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #cac6c6;
        border-radius: 50%;
        width:3em;
        height:3em;
        margin-right:10px;
      }
      .text{
        flex-grow:1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .tagAndAmount{
          display: flex;
          justify-content: space-between;
          .tag{ font-size:18px;}
          .amount{
            color:#0eba25;
            font-size:18px;
          }
        }
        .time{
          color:#999696
        }
      }
    }
  }
}
</style>