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
      </tab>
      <tab name="收入">内容 2</tab>
    </tabs>
    <!--数字键盘-->
    <div class="eren-inputPad" >
      <inputPad @click-submit="submitHandle"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
// 组件
import navBar from '../../components/navBar.vue'
import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import inputPad from '../../components/inputPad.vue'
// svg
import fanhuiSvg from '../../assets/icons/fanhui.svg'
// vue
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const leftClickHandle = () => {
  router.back()
}
const activeName = ref('支出')
// 监听键盘提交事件
const submitHandle = (amount:string) => {
  console.log(amount)
}
// 标签列表 - 支出
const expensesTags = ref([
  { id: 1, tagName: '餐费', emoji: 'xxx' },
  { id: 2, tagName: '打车费', emoji: 'yyy' },
  {id:3, tagName:'聚餐',emoji:'zzz'}
])
// 标签列表 - 收入
const inComeTags = ref([
  { id: 4, tagName: '工资', emoji: 'vvv' },
  { id:5, tagName: '彩票', emoji: 'bbb' },
  {id:6, tagName: '抢劫',emoji:'jjj'}
])
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
</style>