<template>
  <div class="item-summary">
    <ul class="item-summary-total">
      <li><span>收入</span><span>128</span></li>
      <li><span>支出</span><span>100</span></li>
      <li><span>净收入</span><span>28</span></li>
    </ul>
    <ul class="item-summary-list">
      <li class="item-summary-list-item" v-for="item in items" :key="item.id">
        <div class="sign">
          <span>{{item.tags[0].sign}}</span>
        </div>
        <div class="text">
          <div class="tagAndAmount">
            <span class="tag">{{item.tags[0].name}}</span>
            <span class="amount" :class="{isExpenses:item.kind === 'expenses'}">{{item.amount}}</span>
          </div>
          <div class="time">
            <span>{{item.kind === 'income' ? '收入' : '支出'}}</span>
          {{ formatDate(item.tags[0].updated_at)}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { getItems } from '../../../api/items'
import formatDate from '../../../utils/formatDate'
import dayjs from 'dayjs'
interface ItemSummaryProps {
  startDate: string
  endDate:string
}
const props = defineProps<ItemSummaryProps>()

const page = ref(0)
const hasMore = ref(false)
const items = ref<any>([])
const getAllItems = async () => {
  const res = await getItems({
    created_after: dayjs(props.startDate).toDate(),
    created_before: dayjs(props.endDate).toDate(),  
    page:page.value + 1
  })
  const { resources, pager } = res
  items.value.push(...resources)
  hasMore.value = (pager.page - 1) * pager.per_page + resources.length < pager.count
  console.log(items.value)
  console.log(hasMore.value)
}
getAllItems()
console.log(dayjs(props.startDate).toDate())
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
        background-color: #eae5e5;
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
          padding-bottom:4px;
          .tag{ font-size:18px;}
          .amount{
            color:#08d223;
            font-size:18px;
            &.isExpenses{
              color:#da4f3d;
            }
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