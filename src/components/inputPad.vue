<template>
  <div class="inputPad">
    <div class="notes">
      <span class="date" @click="popupVisible = true">
        <img :src="dateSvg" alt="">
        <span class="dateText">{{formatDate(currentDate)}}</span>
      </span>
      <span class="amount">{{amount}}</span>
    </div>
    <div class="pad">
      <button v-for="button in buttons" @click="button.clickFn">{{button.text}}</button>
    </div>
    <!--弹出层 - 日期选择器-->
    <van-popup v-model:show="popupVisible" position="bottom">
      <van-datetime-picker
          :value="currentDate"
          type="date"
          title="请选择年月日"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm = "clickConfirmHandle"
          @cancel = "clickCancelHandle"
      />
    </van-popup>
  </div>
</template>
<script lang="ts" setup>
import dateSvg from '../assets/icons/date.svg'
import { ref } from 'vue';
import formatDate from '../utils/formatDate'
// 弹出层
const popupVisible = ref(false)
// 选择的日期
const currentDate = ref(new Date(2021, 0, 17));
const minDate = new Date(2020, 0, 1)
const maxDate = new Date(2025, 10, 1)

// 日期选择 - 点击确认
const clickConfirmHandle = (date:Date) => {
  console.log(date)
  popupVisible.value = false
  currentDate.value = date
}
// 日期选择 - 点击取消
const clickCancelHandle = () => {
  popupVisible.value = false
}

const buttons = [
  { text: '1', clickFn: () => { appendText('1') } },
  { text: '2', clickFn: () => { appendText('2') } },
  { text: '3', clickFn: () => { appendText('3') } },
  { text: '4', clickFn: () => { } },
  { text: '5', clickFn: () => { } },
  { text: '6', clickFn: () => { } },
  { text: '7', clickFn: () => { } },
  { text: '8', clickFn: () => { } },
  { text: '9', clickFn: () => { } },
  { text: '0', clickFn: () => {appendText('0') } },
  { text: '·', clickFn: () => { } },
  { text: '清空', clickFn: () => { } },
  { text: '提交', clickFn: () => { } },
  
]
// 按键逻辑
const amount = ref('0')

const appendText = (val:string) => {

}

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
    border-top:1px solid rgb(225, 224, 224);
    display:grid;
    grid-template-areas: 
    "n1 n2 n3 d"
    "n4 n5 n6 d"
    "n7 n8 n9 s"
    "n0 n0 nd s";
    grid-auto-columns: 1fr;
    gap:6px;
    button {
      border:none;
      border-right:1px solid rgb(225, 224, 224);
      border-bottom:1px solid rgb(225, 224, 224);
      padding:16px;
      width:100%;
      border-radius:4px;
      color:#636e72;
      background-color:white;
      transition:all 0.25s ease;
      &:nth-child(1) {
        grid-area:n1;
      }
      &:nth-child(2) {
        grid-area:n2;
      }
      &:nth-child(3) {
        grid-area:n3;
      }
      &:nth-child(4) {
        grid-area:n4;
      }
      &:nth-child(5) {
        grid-area:n5;
      }
      &:nth-child(6) {
        grid-area:n6;
      }
      &:nth-child(7) {
        grid-area:n7;
      }
      &:nth-child(8) {
        grid-area:n8;
      }
      &:nth-child(9) {
        grid-area:n9;
      }
      &:nth-child(10) {
        grid-area:n0;
      }
      &:nth-child(11) {
        grid-area:nd;
      }
      &:nth-child(12) {
        grid-area:d;
      }
      &:nth-child(13) {
        grid-area:s;
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