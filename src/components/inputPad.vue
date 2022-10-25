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
import { ref,watch } from 'vue';
import formatDate from '../utils/formatDate'
import { Toast } from 'vant';
import 'vant/es/toast/style';
// 弹出层
const popupVisible = ref(false)
// 选择的日期
const currentDate = ref(new Date());
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

const emits = defineEmits(['click-submit'])
const buttons = [
  { text: '1', clickFn: () => { appendText('1')} },
  { text: '2', clickFn: () => { appendText('2')} },
  { text: '3', clickFn: () => { appendText('3')} },
  { text: '4', clickFn: () => { appendText('4')} },
  { text: '5', clickFn: () => { appendText('5')} },
  { text: '6', clickFn: () => { appendText('6')} },
  { text: '7', clickFn: () => { appendText('7')} },
  { text: '8', clickFn: () => { appendText('8')} },
  { text: '9', clickFn: () => { appendText('9')} },
  { text: '0', clickFn: () => { appendText('0')} },
  { text: '·', clickFn: () => { appendText('.')} },
  { text: '清空', clickFn: () => {amount.value = '0' } },
  {
    text: '提交', clickFn: () => {
      if (Number(amount.value) === 0) {
        Toast.fail('输入金额哦~')
        return
      }
      emits('click-submit', { amount: Number(amount.value), happen_at: currentDate.value })
  } },
]
// 按键逻辑
const amount = ref('0')

const appendText = (str:string) => {
  if (str === '.') {
    if (amount.value.indexOf('.') > -1) {
      return 
    }
  }
  if (amount.value === '0') {
    if (str === '.') {
      amount.value += str
      return 
    }
    amount.value = ''  
    amount.value += str
    return 
  }
  if (amount.value.length === 16) {
    return
  }
  amount.value += str
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
      &:hover,&:active {
        background-color: #feedb0;
        border-right:1px solid #feedb0;
        border-bottom:1px solid #feedb0;
      }
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
        background-color: #3465e0;
        color:white;
        &:hover,&:active {
        background-color: #5a81e6;
        border-right:1px solid #3465e0;
        border-bottom:1px solid #3465e0;
      }
      }
    }
  }
}
</style>