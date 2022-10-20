<template>
  <div class="inputPad">
    <div class="notes">
      <span class="date" @click="popupVisible = true">
        <img :src="dateSvg" alt="">
        <span class="dateText">{{currentDate}}</span>
      </span>
      <span class="amount">123456</span>
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
    font-size: 16px;
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