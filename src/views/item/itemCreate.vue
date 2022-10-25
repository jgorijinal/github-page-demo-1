<template>
  <div>
    <!--导航栏-->
    <nav-bar title="记一笔" @click-left="leftClickHandle">
      <template #leftIcon>
        <img :src="fanhuiSvg" alt="">
      </template>
    </nav-bar>
  <!--标签栏-->
    <tabs v-model:active="activeName">
      <tab name="支出">
        <div class="eren-tag-wrapper">
          <div class="eren-tag-container add" @click="$router.push('/tag/create?kind=expenses')">
            <img :src="add2Svg" alt="" class="eren-tag-emoji add">
            <span class="eren-tag-name">
              新增标签
            </span>
          </div>
          <div class="eren-tag-container" 
          v-for="tag,index in expensesTags" :key="tag.id" 
          @click="onSelect(tag)" 
          :class="{selected:tag_ids.includes(tag.id)}">
            <span class="eren-tag-emoji">
              {{tag.sign}}
            </span>
            <span class="eren-tag-name">
              {{tag.name}}
            </span>
          </div>
      </div>
      </tab>
      <tab name="收入">
        <div class="eren-tag-wrapper">
        <div class="eren-tag-container add" @click="$router.push('/tag/create?kind=income')">
          <img :src="add2Svg" alt="" class="eren-tag-emoji add">
          <span class="eren-tag-name">
            新增标签
          </span>
        </div>
        <div class="eren-tag-container" v-for="tag in incomeTags" :key="tag.id" @click="onSelect(tag)" 
          :class="{selected:tag_ids.includes(tag.id)}">
          <span class="eren-tag-emoji">
            {{tag.sign}}
          </span>
          <span class="eren-tag-name">
            {{tag.name}}
          </span>
        </div>
      </div>
      </tab>
    </tabs>
    <!--数字键盘-->
    <div class="eren-inputPad" >
      <inputPad @click-submit="submitHandle"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
// $router.push(`/tag/${tag.id}/edit?kind=expenses`)
// $router.push(`/tag/${tag.id}/edit?kind=income`)
// 组件
import navBar from '../../components/navBar.vue'
import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import inputPad from '../../components/inputPad.vue'
// svg
import fanhuiSvg from '../../assets/icons/fanhui.svg'
import add2Svg from '../../assets/icons/add2.svg'
// vue
import { ref,computed, watch } from 'vue'
import { useRouter } from 'vue-router'

import { getTags } from '../../api/tags'
const router = useRouter()
const leftClickHandle = () => {
  router.back()
}
const activeName = ref('支出')
const expensesTags = ref<any>([])
const incomeTags = ref<any>([])
const page = ref(0) // 当前页码
// 获取支出标签
const getExpenseTags = async() => {
  const { resources, pager } = await getTags({ page: (page.value + 1), kind: 'expenses' }) 
  expensesTags.value = resources
}

// 获取收入标签
const getIncomeTags = async() => {
  const { resources,pager } = await getTags({ page: (page.value + 1), kind: 'income' }) 
  incomeTags.value = resources
}
getExpenseTags()
getIncomeTags()

// 选中的标签- 数组
const tag_ids = ref<Number[]>([])
// 选中标签
const onSelect = (tag:any) => {
  const isIncludes = tag_ids.value.includes(tag.id)
  if (!isIncludes) {
    tag_ids.value.push(tag.id) 
  } else {
    tag_ids.value = tag_ids.value.filter(id => id !== tag.id)
  }
  console.log(tag_ids.value)
}
// 选择不同类型前 , 先清空选择标签数组
watch(activeName, () => {
  tag_ids.value = []
})
// 监听键盘提交事件
const submitHandle = (amount:string) => {
  console.log(amount)
}
</script>
<style lang="scss" scoped>
img {
  width:1.2em;
  height:1.2em;
}
.eren-inputPad {
  position:fixed;
  left:0;
  width:100%;
  bottom:0;
}
.eren-tag{
  &-wrapper{
    display: flex;
    width:100vw;
    height: calc(100vh - 368px);
    flex-wrap: wrap;
    overflow-y: auto;
    padding:10px 0 10px 0 ; 
    align-content: flex-start;
  }
  &-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius:6px;
    width:20vw;
    height:20vw; 
    transition: all 0.3s ease;
    &.add {
      justify-content: flex-start;
      background-color:transparent;
    }
    &.selected {
      background-color: #fde590;
    }
  }
  &-emoji{
    border-radius:50%;
    width:14vw;
    height:14vw;
    background-color: #edecec;
    display: flex;
    justify-content: center;
    border:1px solid #3465e0;
    align-items: center;
    &.add {
      background-color: white;
    }
  }
  &-name {
    font-size:14px;
    color:rgb(61, 59, 59)
  }
}
</style>