<template>
  <div class="eren-tabs">
    <ul class="eren-tabs-tab">
      <li v-for="item in arr" 
        :key="item.props?.name"
        class="eren-tabs-tab-name"
        :class="{'active':item.props?.name === active}"
        @click="clickTab(item)"
      >{{item.props?.name}}</li>
    </ul>
    <!--细节: 这个时候 component 动态组件必须要加上 key-->
    <keep-alive>
      <component :is="activeTab" :key="activeTab.props?.name"></component>
    </keep-alive>
  </div>
</template>
<script lang="ts" setup>
import { useSlots, computed } from 'vue'
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
    // transition: all 0.4s ease;
    position:relative;
    // border:4px solid #f7f1e3
    background-color:#ffffff ;
    color:black;
    // font-weight: bold;
  }
  &-tab {
    background-color: #273c75;
    display:flex;
    font-size: 16px;
    &-name {
      // border:4px solid #273c75;
      color:white;
      // border-radius: 4px;
      padding:8px 16px;
      flex-grow:1;
      display:flex;
      justify-content: center;
      align-items: center;
      cursor:pointer;
    }
  }
}
</style>
