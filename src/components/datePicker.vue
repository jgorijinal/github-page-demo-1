<template>
  <div class="eren-date-picker">
    <van-field
      v-model="startDate"
      label="开始时间"
      label-width="56px"
      placeholder="选择开始时间"
      @focus="dateStartPickerVisible = true"
    />
    <van-field
      v-model="endDate"
      label="结束时间"
      label-width="56px"
      placeholder="选择结束时间"
      @focus="dateEndPickerVisible = true"
      :disabled="dateEndDisabled"
      @click="clickDateEndPicker"
    />
    <van-popup v-model:show="dateStartPickerVisible" position="bottom">
      <van-datetime-picker
          :value="startDate"
          type="date"
          title="请选择年月日"
          @confirm = "dateStartConfirm"
          @cancel = "onCancel"
      />
    </van-popup>
    <van-popup v-model:show="dateEndPickerVisible" position="bottom">
      <van-datetime-picker
          :value="endDate"
          :min-date="dayjs(startDate).$d"
          type="date"
          title="请选择年月日"
          @confirm = "dateEndConfirm"
          @cancel = "onCancel"
      />
    </van-popup>
  </div>
</template>
<script setup lang="ts">
import { ref, watch } from "vue";
import dayjs from 'dayjs'
import formateDate from '../utils/formatDate'
import { Toast } from 'vant';
import 'vant/es/toast/style';
const startDate = ref("");
const endDate = ref("");

const dateStartPickerVisible = ref(false);
const dateEndPickerVisible = ref(false);

// 结束时间 可点击 
const dateEndDisabled = ref(true)

// 开始 确认
const dateStartConfirm = (date:Date) => {
  console.log(date)
  startDate.value = formateDate(date)
  dateStartPickerVisible.value = false
}
// 结束 确认
const dateEndConfirm = (date:Date) => {
  console.log(date)
  endDate.value = formateDate(date)
  dateEndPickerVisible.value = false

}
// 取消
const onCancel = () => {
  dateStartPickerVisible.value = false
  dateEndPickerVisible.value = false
}

// 开始时间 和 结束时间 两者逻辑 : 没选择开始时间, 则不能选择先结束时间
watch(startDate, (value) => {
  if (value) { // 有值
    dateEndDisabled.value = false
    endDate.value = ''
  } else {
    endDate.value = ''
    dateEndDisabled.value = true
  }
})
const emits = defineEmits(['date-changed'])
// 选择完结束时间, 派发事件给外部传递 startDate, endDate
watch(endDate, (value) => {
  if (value) {
    emits('date-changed', {
      startDate: startDate.value,
      endDate:endDate.value
    })
  }
})

// 点击 结束时间 提醒用户 
const clickDateEndPicker = () => {
  if (dateEndDisabled.value) {
    Toast.fail('请先选择开始时间') // 提示
  }
}
</script>
<style lang="scss" scoped>
.eren-date-picker {
  display: flex;
}
</style>
