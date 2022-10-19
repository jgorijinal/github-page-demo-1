<template>
  <div class="eren-tabs">
    <ul>
      <li v-for="item in arr" 
        :key="item.props?.name" 
        class="eren-tab" 
        :class="{'active':item.props?.name === active}"
        @click="clickTab(item)"
      >{{item.props?.name}}</li>
    </ul>
    <!--细节: 这个时候 component 动态组件必须要加上 key-->
    <component :is="activeTab" :key="activeTab.props?.name"></component>
  </div>
</template>
<script lang="ts" setup>
import { useSlots,computed } from 'vue'
import tab from './tab.vue'

const slots = useSlots()
const arr = slots.default() 

// 检查 tabs 的子元素必须是 tab 组件
arr.forEach(item => {
  if (item.type !== tab) {
    throw new Error('tabs 组件的的子元素必须要求是 tab 组件')
  }
})
const props = defineProps({
  active: {
    type:String
  }
})
const emits = defineEmits(['update:active'])

// 获取当前激活的 tab 组件实例(必须计算属性)
const activeTab = computed(() => {
  return arr.filter(tab => tab.props?.name === props.active )[0]
})
// 点击标签名
const clickTab = (item:any) => {
  emits('update:active' , item.props.name)
}
</script>
<style lang="scss" scoped>
.eren-tabs{
  .active {
     background-color: antiquewhite;
  }
}
</style>
