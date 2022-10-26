<template>
  <div>
    <!--导航栏-->
    <nav-bar left-text="记一笔账" @click-left="overlayVisible = true">
      <template #leftIcon>
        <img :src="menuSvg" alt="" class="left-icon-img">
      </template>
    </nav-bar>
    <overlay-with-route :overlayVisible="overlayVisible" @close-overlay="overlayVisible = false"/>
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
          :class="{selected:tag_ids.includes(tag.id)}"
          @touchstart="onTouchStart(tag.id)" 
          @touchend="onTouchend"  
          >
            <span class="eren-tag-emoji">
              {{tag.sign}}
            </span>
            <span class="eren-tag-name">
              {{tag.name}}
            </span>
          </div>
          <span class="tag-tips" v-if="JSON.stringify(expensesTags) === '[]'">点击新增标签哦~</span>
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
          :class="{selected:tag_ids.includes(tag.id)}"
          @touchstart="onTouchStart(tag.id)" 
          @touchend="onTouchend"  
          >
          <span class="eren-tag-emoji">
            {{tag.sign}}
          </span>
          <span class="eren-tag-name">
            {{tag.name}}
          </span>
        </div>
        <span class="tag-tips" v-if="JSON.stringify(incomeTags) === '[]'">点击新增标签哦~</span>
      </div>
      </tab>
    </tabs>
    <!--数字键盘-->
    <div class="eren-inputPad" >
      <inputPad @click-submit="submitHandle" ref="inputPadRef"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 组件
import navBar from '../../components/navBar.vue'
import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import inputPad from '../../components/inputPad.vue'
import overlayWithRoute from '../../components/overlayWithRoute.vue'
// svg
import menuSvg from '../../assets/icons/menu.svg'
import add2Svg from '../../assets/icons/add2.svg'
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { createItem } from '../../api/items'
// vue
import { ref,computed, watch } from 'vue'
import { useRouter } from 'vue-router'

import { getTags } from '../../api/tags'

const router = useRouter()
// 左侧菜单显示/隐藏
const overlayVisible = ref(false)

const activeName = ref('支出')
const expensesTags = ref<any>([])
const incomeTags = ref<any>([])
const page = ref(0) // 当前页码
// 获取支出标签
const getExpenseTags = async () => {
  const toast = Toast.loading({
  duration: 0, // 持续展示 toast
  message: "获取中...",
  forbidClick: true // 是否禁止背景点击
  });
  try {
    const { resources, pager } = await getTags({ page: (page.value + 1), kind: 'expenses' }) 
    expensesTags.value = resources
  } catch (err) {
    console.log(err)
  }
  toast.clear()
}

// 获取收入标签
const getIncomeTags = async () => {
  const toast = Toast.loading({
  duration: 0, // 持续展示 toast
  message: "获取中...",
  forbidClick: true // 是否禁止背景点击
  });
  const { resources,pager } = await getTags({ page: (page.value + 1), kind: 'income' }) 
  incomeTags.value = resources
  toast.clear()
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
}
// 选择不同类型前 , 先清空选择标签数组
watch(activeName, () => {
  tag_ids.value = []
})
const inputPadRef = ref()
// 监听键盘提交事件
const submitHandle = async (obj: any) => {
  // 至少选择一个标签
  if ((tag_ids.value).length === 0) {
    Toast.fail('至少选择一个标签哦~')
    return
  }
  const result = {
    amount: obj.amount,
    happen_at:obj.happen_at,
    kind: activeName.value === '支出' ? 'expenses' : 'income',
    tag_ids:tag_ids.value
  }
  // 发起网络请求
  try {
    const res = await createItem(result)
    Toast.success('成功创建一笔账~')
    // 重置相关数据
    tag_ids.value = []
    inputPadRef.value.resetData()
    // TODO: 成功记账之后可以跳转到记录页面
  } catch (err) {
    console.log(err)
  }
}
// 长按跳转
const longPress = (id:number) => {
  activeName.value === '支出' ? router.push(`/tag/${id}/edit?kind=expenses`)  : router.push(`/tag/${id}/edit?kind=income`)
}
let timer:any = null
const onTouchStart = (id:number) => {
  timer = setTimeout(() => {
    longPress(id)
  },400)
}
const onTouchend = () => {
  clearTimeout(timer)
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
    border-top:1px solid white;
    position:relative;
    .tag-tips{
      display: inline-block;
      position:absolute;
      left:50%;
      top:50%;
      transform:translate(-50%,-50%);
      font-size:25px;
      color:rgb(223, 219, 219)
    }
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
    background-color: #f7f3f3;
    display: flex;
    justify-content: center;
    border:1px solid #3465e0;
    align-items: center;
    &.add {
      background-color: white;
    }
  }
  &-name {
    margin-top:4px;
    font-size:14px;
    color:rgb(61, 59, 59)
  }
}
</style>