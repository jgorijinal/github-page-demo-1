<template>
  <div class="item-summary">
    <ul class="item-summary-total">
      <li><span>收入</span><span>{{incomeValues || ''}}</span></li>
      <li><span>支出</span><span>{{expensesValues  || ''}}</span></li>
      <li><span>净收入</span><span>{{profit  || ''}}</span></li>
    </ul>
    <div class="tips" v-if="items.length === 0">目前还没有记录</div>
    <ul class="item-summary-list">
      <li class="item-summary-list-item" v-for="item in items" :key="item.id">
        <div class="sign">
          <span>{{item.tags[0].sign}}</span>
        </div>
        <div class="text">
          <div class="tagAndAmount">
            <div class="tag-wrapper">
              <span class="tag" v-for="tag,index in item.tags" :key="index">{{tag.name}}</span>
            </div>
            <span class="amount" :class="{isExpenses:item.kind === 'expenses'}">{{item.amount}} 元</span>
          </div>
          <div class="time">
            <span>{{item.kind === 'income' ? '收入' : '支出'}}</span>
          {{ formatDate(item.tags[0].updated_at)}}
          </div>
        </div>
      </li>
    </ul>
      <van-pagination v-model="page" :page-count="pageCount" mode="simple"   @change="getAllItems"/>
  </div>
</template>
<script setup lang="ts">
import { ref,watch, computed } from 'vue'
import { getItems } from '../../../api/items'
import formatDate from '../../../utils/formatDate'
import { Toast } from 'vant';
import 'vant/es/toast/style';

interface ItemSummaryProps {
  startDate: string
  endDate:string
}
const props = defineProps<ItemSummaryProps>()

const page = ref(1)
const items = ref<any>([])
const pageCount = ref(1)
const getAllItems = async () => {
  const toast1 = Toast.loading({
  duration: 0, // 持续展示 toast
  message: "加载中...",
  forbidClick: true // 是否禁止背景点击
  });
  try {
    const res = await getItems({
      happen_before: props.endDate,
      happen_after: props.startDate,
    page: page.value,
  })
  const { resources, pager } = res
    items.value = resources
    console.log(items.value)
  if (pager.count === pager.per_page) {
    pageCount.value +=  1
  }
  } catch (err) {
  console.log(err)
  }
  toast1.clear()
}
getAllItems()
watch(() => {
  return props.endDate
}, () => {
  getAllItems()
})

// 总支出
const expensesValues = computed(() => {
  let expensesTotal = 0
  items.value.forEach(item => {
    if (item.kind == "expenses") {
      expensesTotal += item.amount
    }
  })
  return expensesTotal
})
// 总收入
const incomeValues = computed(() => {
  let incomeTotal = 0
  items.value.forEach(item => {
    if (item.kind == "income") {
      incomeTotal += item.amount
    }
  })
  return incomeTotal
})
// 利润
const profit = computed(() => {
  return incomeValues.value - expensesValues.value
})
</script>
<style lang="scss" scoped>
.item-summary{
  .tips {
    display: flex;
    justify-content: center;
    padding:30px 0;
    color:rgb(173, 168, 168);
  }
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
          .tag-wrapper {
            width:50vw;
            overflow: hidden;
            text-overflow: ellipsis;
          }
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