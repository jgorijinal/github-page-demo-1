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
      <tab name="支出">内容 1</tab>
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