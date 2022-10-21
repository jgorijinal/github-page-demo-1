<template>
  <nav-bar title="新建标签">
    <template #leftIcon>
      <img :src="fanhuiSvg" alt="">
    </template>
  </nav-bar>
  <form class="form">
    <div class="formRow">
      <label class="formLabel">
        <span class="formItem_name">标签名</span>
        <div class="formItem_value">
          <input class="formItem input error" v-model="formData.tagName" placeholder="可输入1-4个字符"/>
        </div>
        <div class="formItem_errorHint">
          <span>必填</span>
        </div>
      </label>
    </div>
    <div class="formRow">
      <label class="formLabel">
        <span class="formItem_name">符号: {{formData.emoji}}</span>
        <div class="formItem_value">
          <!--符号选择组件-->
          <emoji-select class="formItem emojiList error" v-model="formData.emoji"/>
        </div>
        <div class="formItem_errorHint">
          <span>必填</span>
        </div>
      </label>
    </div>
    <p class="tips">记账时长按标签即可进行编辑</p>
    <div class="formRow">
      <div class="formItem_value">
        <e-button class="button">确定</e-button>
      </div>
    </div>
  </form>
</template>
<script setup lang="ts">
import NavBar from '../../components/navBar.vue'
import EButton from '../../components/button.vue'
import EmojiSelect from '../../components/emojiSelect.vue'
import fanhuiSvg from '../../assets/icons/fanhui.svg'
import { reactive } from 'vue'
const formData = reactive({
  tagName: '',
  emoji:'(请选择符号)'
})
</script>
<style lang="scss" scoped>
img {
  width:1.2em;
  height:1.2em;
}
.tips{
  text-align: center;
  padding: 16px 0;
}
.form {
  padding: 16px;
}
.formRow {
  margin-top: 8px;
}
.formLabel {
}
.formItem {
  min-height: 48px;
  max-width: 100%;
  &.input {
    flex-grow: 1;
    border: 1px solid  #5c33be;
    border-radius: 4px;
    font-size: 18px;
    font-family: inherit;
    padding-left: 16px;
    padding-right: 16px;
    box-shadow: inset 0 0 3px  rgba(0,0,0,0.25);
    &.error {
      border-color: #E10505;
    }
  }
  &_name {
  }
  &_value {
    display: flex;
    margin-top: 4px;
    > .button {
      width: 100%;
    }
  }
  &_errorHint {
    margin-top: 4px;
    color: red;
    font-size: 12px;
  }
}</style>
