<template>
  <div class="welcome">
    <header>
      <img :src="logo" alt="">
      <h1>日常记账</h1>
    </header>
    <main><router-view /></main>
    <footer v-if="$route.path !== '/welcome/4'">
      <div class="fake">fake</div>
      <div class="pass" @click="$router.push('/start')">跳过</div>
      <div class="next" @click="nextPageClick">下一页</div>
    </footer>
    <footer v-else>
      <div class="fake">fake</div>
      <div class="fake">跳过</div>
      <div class="pass" @click="$router.push('/start')">完成</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import logo from '../assets/icons/mangosteen.svg'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const nextPageClick = () => {
  const path = route.path
  const num =  Number(path.split('/').pop())
  const newPath = path.slice(0, path.length - 1) + (num + 1).toString()
  router.push(newPath)
}
</script>
<style scoped lang="scss">
.welcome{
  height:100vh;
  display:flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #002ea6 , #3667e3);
  header {
    > img {
      width:60px;
      height: 60px;
    }
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top:66px;
    color:#d4d4ee;
  }
  main {
    flex-grow:1;
    padding:20px 20px 0 20px;
  }
  footer{
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color:white;
    font-size:22px;
    font-weight: 600;
    margin: 0 20px;
    .fake {visibility: hidden;}
    .fake,.pass,.next {
      padding: 20px;
      border-radius: 4px;
      &:active {
        background-color: #2054d7;
      }
    }
  }
}
</style>