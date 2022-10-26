<template>
  <div class="eren-chart-container">
    <div class="eren-chart-select">
      <span>类型</span>
      <!--select 控件-->
    <select :value="modelValue" @change="selectChange">
      <option disabled value="">请选择</option>
      <option value="expenses">支出</option>
      <option value="income">收入</option>
    </select>
    </div>
    <!--图表-->
    <line-echart :x-labels="xLabels" :values="values" v-if="hasItems"></line-echart>
    <pie-echart :pie-data="pieData" v-if="hasItems"/>
    <!--进度条-->
    <progress-bar :data="items" v-if="hasItems"/> 
    <div class="chart-tip" v-if="!hasItems">
      <div>先去记一笔账哦</div>
    <div>目前还没有账单</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import lineEchart from './LineEchart.vue'
import pieEchart from './pieEchart.vue'
import progressBar from './progressBar.vue'
import { getItemsByGroup } from '../../../api/items'
import { ref, watch,computed,nextTick } from 'vue'
import { Toast } from 'vant';
import 'vant/es/toast/style'
import { Notify } from 'vant';
import 'vant/es/notify/style';
// 开始时间, 结束时间, 支出/收入类型 v-model 绑定
interface chartsProps {
  startDate: string
  endDate: string
  modelValue:string // 收入/支出
}
const props = defineProps<chartsProps>()
const emits = defineEmits(['update:modelValue'])

// 支出,收入切换动作
const selectChange = (e:any) => {
  // console.log(e.target.value) // 支出,收入
  emits('update:modelValue', e.target.value)
}
const items = ref<any>([])
const hasItems = computed(() => {
  return Boolean(JSON.stringify(items.value) !== '[]')
})
setTimeout(() => {
    if (!hasItems.value) {
      Notify({ type: 'warning', message: '先去记一笔账哦~ 目前还没有账单' });
}
},1000)
const totalAmount= ref(0)
// 获取账单列表
const getItems = async () => {
  const toast = Toast.loading({
    duration: 0, // 持续展示 toast
    message: "数据加载中...",
    forbidClick: true // 是否禁止背景点击
  });
  try {
    const { groups, total } = await getItemsByGroup({
    happened_after: props.startDate,
    happened_before: props.endDate,
    kind: props.modelValue,
    group_by: 'tag_id'
  })
    items.value = groups
    totalAmount.value = total 
  } catch (err) {
    console.log(err)
  }
  toast.clear()
}
// 进页面, 就发请求
getItems()
// 监听类型切换, 重新发请求
watch(() => props.modelValue, () => {
  getItems()
})
// 折线图数据 : 轴, y轴
const xLabels = computed(() => {
  return items.value.map(item => item.tag.name)
})
const values = computed(() => {
  return items.value.map(item => item.amount)
})
// 饼图的数据:  {name:'xxx',value:'xxx'} 组成的数组
const pieData = computed(() => {
  return items.value.map(item => {
    return {
      name: item.tag.name,
      value:item.amount
    }
  })
})

// 日期改变
watch(() => props.endDate, () => {
  getItems()
})
</script>
<style lang="scss" scoped>
.eren-chart-container{
  .chart-tip{
    position: absolute;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    font-size:20px;
    color:gray;
  }
    // padding:8px;
  .eren-chart-select{
    padding: 20px 0 0 8px;
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