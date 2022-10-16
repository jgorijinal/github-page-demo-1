<template>
  <div class="welcome">
    <header>
      <img :src="logo" alt="">
      <h1>日常记账</h1>
    </header>
    <main><router-view /></main>
    <footer>
      <div class="fake">fake</div>
      <div class="pass">跳过</div>
      <div class="next">下一页</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import logo from '../assets/icons/mangosteen.svg'
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