<template>
  <div class="eren-chart-container">
    <select :value="modelValue" @change="selectChange">
      <option disabled value="">请选择</option>
      <option value="expense">支出</option>
      <option value="income">收入</option>
    </select>
  </div>
  {{modelValue}}
</template>
<script setup lang="ts">
import { ref} from 'vue'
// 开始时间, 结束时间
interface chartsProps {
  startDate: string
  endDate: string
  modelValue:string
}
const props = defineProps<chartsProps>()
const emits = defineEmits(['update:modelValue'])

// 支出,收入切换动作
const selectChange = (e:any) => {
  console.log(e.target.value) // 支出,收入
  emits('update:modelValue',e.target.value)
}
</script>
<style lang="scss" scoped>
.eren-chart-container{
  padding:8px;
  select{
    width:80px;
    height:30px;
    border:1px solid #3465e0;
  }
}
</style>