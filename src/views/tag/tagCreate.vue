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
          <input class="formItem input error" />
        </div>
        <div class="formItem_errorHint">
          <span>必填</span>
        </div>
      </label>
    </div>
    <div class="formRow">
      <label class="formLabel">
        <span class="formItem_name">符号</span>
        <div class="formItem_value">
          <div class="formItem emojiList error">
            <nav>
              <span class="selected">表情</span>
              <span>手势</span>
              <span>职业</span>
              <span>衣服</span>
              <span>动物</span>
              <span>自然</span>
              <span>食物</span>
              <span>运动</span>
              <span>表情</span>
              <span>手势</span>
              <span>职业</span>
              <span>衣服</span>
              <span>动物</span>
              <span>自然</span>
              <span>食物</span>
              <span>运动</span>
            </nav>
            <ol>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
              <li>😀</li>
            </ol>
          </div>
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
import fanhuiSvg from '../../assets/icons/fanhui.svg'
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
  &.emojiList {
    flex-grow: 1;
    border: 1px solid #5c33be;
    border-radius: 4px;
    font-size: 18px;
    font-size: 14px;
    &.error {
      border-color: #E10505;
    }
    > nav {
      display: flex;
      flex-wrap: nowrap;
      overflow: auto;
      padding: 0 4px;
      &::-webkit-scrollbar {
        display: none;
      }
      > span {
        flex-shrink: 0;
        display: inline-block;
        padding: 8px;
        color: #999;
        &.selected {
          color:  #333;
        }
      }
    }
    > ol {
      display: flex;
      flex-wrap: wrap;
      font-size: 22px;
      line-height: 32px;
      height: calc(32px * 12);
      overflow: auto;
      padding: 0 4px;
      &::-webkit-scrollbar {
        display: none;
      }
      > li {
        flex-shrink: 0;
        flex-grow: 0;
        width: 10%;
        text-align: center;
      }
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
