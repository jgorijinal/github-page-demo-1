<template>
  <div class="inputPad">
    <div class="notes">
      <span class="date">
        <img :src="dateSvg" alt="">
        <span class="dateText">2025-04-12</span>
      </span>
      <span class="amount">123456</span>
    </div>
    <div class="pad">
      <button v-for="button in buttons" @click="button.clickFn">{{button.text}}</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import dateSvg from '../assets/icons/date.svg'
const buttons = [
  { text: '1', clickFn: () => { } },
  { text: '2', clickFn: () => { } },
  { text: '3', clickFn: () => { } },
  { text: 'del', clickFn: () => { } },
  { text: '4', clickFn: () => { } },
  { text: '5', clickFn: () => { } },
  { text: '6', clickFn: () => { } },
  { text: '+', clickFn: () => { } },
  { text: '7', clickFn: () => { } },
  { text: '8', clickFn: () => { } },
  { text: '9', clickFn: () => { } },
  { text: '-', clickFn: () => { } },
  { text: '.', clickFn: () => { } },
  { text: '0', clickFn: () => { } },
  { text: '清空', clickFn: () => { } },
  { text: '提交', clickFn: () => { } },
]
</script>
<style lang="scss" scoped>
.inputPad{
  .notes {
    display: flex;
    padding:8px;
    border-top:1px solid rgb(225, 224, 224); ;
    justify-content: space-between;
    .date {
      display: flex;
      img{
      width:30px;
      height:30px;
      margin-right:8px;
    }
    .dateText{
      display: flex;
      align-items: center;
      color:gray;
      font-size:14px;
    }
    }
    .amount {
      display: flex;
      align-items: center;
      color:#00b894;
      font-size:22px;
    }
  }
  .pad{
    font-size: 18px;
    display: flex;
    flex-wrap: wrap;
    border-top:1px solid rgb(225, 224, 224);
    button {
      border:none;
      border-right:1px solid rgb(225, 224, 224);
      border-bottom:1px solid rgb(225, 224, 224);
      padding:16px;
      width:25%;
      color:#636e72;
      background-color:white;
      transition:all 0.25s ease;
      &:nth-child(4n) {
        border-right:none;
      }
      &:hover,&:active {
        background-color: #feedb0;
        border-right:1px solid #feedb0;
      border-bottom:1px solid #feedb0;
      }
    }
  }
}
</style>