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
        <div class="eren-tag-container add" @click="$router.push('/tag/create')">
          <img :src="add2Svg" alt="" class="eren-tag-emoji add">
          <span class="eren-tag-name">
            新增标签
          </span>
        </div>
        <div class="eren-tag-container" v-for="tag in expensesTags" :key="tag.id">
          <span class="eren-tag-emoji">
            {{tag.emoji}}
          </span>
          <span class="eren-tag-name">
            {{tag.tagName}}
          </span>
        </div>
      </div>
      </tab>
      <tab name="收入">
        <div class="eren-tag-wrapper">
        <div class="eren-tag-container add" @click="$router.push('/tag/create')">
          <img :src="add2Svg" alt="" class="eren-tag-emoji add">
          <span class="eren-tag-name">
            新增标签
          </span>
        </div>
        <div class="eren-tag-container" v-for="tag in inComeTags" :key="tag.id">
          <span class="eren-tag-emoji">
            {{tag.emoji}}
          </span>
          <span class="eren-tag-name">
            {{tag.tagName}}
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
// 组件
import navBar from '../../components/navBar.vue'
import tabs from '../../components/tabs.vue'
import tab from '../../components/tab.vue'
import inputPad from '../../components/inputPad.vue'
// svg
import fanhuiSvg from '../../assets/icons/fanhui.svg'
import add2Svg from '../../assets/icons/add2.svg'
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
  { id: 3, tagName: '聚餐', emoji: 'zzz' },
  { id: 8, tagName: '餐费', emoji: 'xxx' },
  { id: 54, tagName: '打车费', emoji: 'yyy' },
  { id: 435, tagName: '聚餐', emoji: 'zzz' },
  { id: 3213, tagName: '聚餐', emoji: 'zzz' },
  { id: 832523, tagName: '餐费', emoji: 'xxx' },
  { id: 54346346, tagName: '打车费', emoji: 'yyy' },
  { id: 435346, tagName: '聚餐', emoji: 'zzz' },
  { id: 334636, tagName: '聚餐', emoji: 'zzz' },
  { id: 8463, tagName: '餐费', emoji: 'xxx' },
  { id: 541234, tagName: '打车费', emoji: 'yyy' },  
  {id:435235436, tagName:'聚餐',emoji:'zzz'},
  { id: 3324, tagName: '聚餐', emoji: 'zzz' },
  { id: 83245, tagName: '餐费', emoji: 'xxx' },
  { id: 54235, tagName: '打车费', emoji: 'yyy' },
  { id: 4356356, tagName: '聚餐', emoji: 'zzz' },
  { id: 43512312, tagName: '聚餐', emoji: 'zzz' },
  { id: 321332423, tagName: '聚餐', emoji: 'zzz' },
  { id: 832235523, tagName: '餐费', emoji: 'xxx' },
  { id: 54356446346, tagName: '打车费', emoji: 'yyy' },
  { id: 4355467346, tagName: '聚餐', emoji: 'zzz' },
  { id: 334745636, tagName: '聚餐', emoji: 'zzz' },
  { id: 8463413, tagName: '餐费', emoji: 'xxx' },
  { id: 543561234, tagName: '打车费', emoji: 'yyy' },  
  {id:435231435436, tagName:'聚餐',emoji:'zzz'},
  { id: 3332424, tagName: '聚餐', emoji: 'zzz' },
  { id: 83243545, tagName: '餐费', emoji: 'xxx' },
  { id: 54234635, tagName: '打车费', emoji: 'yyy' },
  {id:435656356, tagName:'聚餐',emoji:'zzz'},
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
.eren-tag{
  &-wrapper{
    display: flex;
    width:100vw;
    height: calc(100vh - 368px);
    flex-wrap: wrap;
    overflow-y: auto;
    padding:10px 0 10px 0 ; 
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
    &:hover,&:active {
      background-color: #fff6d6;
    }
  }
  &-emoji{
    border-radius:50%;
    width:14vw;
    height:14vw;
    background-color: rgb(235, 235, 235);
    display: flex;
    justify-content: center;
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