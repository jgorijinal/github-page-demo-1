<template>
  <div class="emojiList">
    <nav>
      <span v-for="item,index in table" :key="index" @click="clickTab(index)" :class="{selected:selectedTab === index}">{{item[0]}}</span>
    </nav>
    <ol>
      <li v-for="(emoji,index) in emojis" :key="index" @click="clickEmoji(emoji)">{{emoji}}</li>
    </ol>
  </div>
</template>
<script setup lang="ts">
import { emojiList } from './emojiList'
import { ref,computed } from 'vue' 
const table: [string, string[]][] = [
      ['表情', ['face-smiling', 'face-affection', 'face-tongue', 'face-hand',
        'face-neutral-skeptical', 'face-sleepy', 'face-unwell', 'face-hat',
        'face-glasses', 'face-concerned', 'face-negative', 'face-costume'
      ]],
      ['手势', ['hand-fingers-open', 'hand-fingers-partial', 'hand-single-finger',
        'hand-fingers-closed', 'hands', 'hand-prop', 'body-parts']],
      ['人物', ['person', 'person-gesture', 'person-role', 'person-fantasy',
        'person-activity', 'person-sport', 'person-resting']],
      ['衣服', ['clothing']],
      ['动物', ['cat-face', 'monkey-face', 'animal-mammal', 'animal-bird',
        'animal-amphibian', 'animal-reptile', 'animal-marine', 'animal-bug']],
      ['植物', ['plant-flower', 'plant-other']],
      ['自然', ['sky & weather', 'science']],
      ['食物', [
        'food-fruit', 'food-vegetable', 'food-prepared', 'food-asian',
        'food-marine', 'food-sweet'
      ]],
      ['运动', ['sport', 'game']],
]
// 当前的 tab
const selectedTab = ref(0)
// 筛选选中的 tab 对应的符号
const emojis = computed(() => {
      const selectedItem = table[selectedTab.value][1]
      return selectedItem.map(category =>
        emojiList.find(item => item[0] === category)?.[1]
      ).flat()
})
// 选择 tab
const clickTab = (index:number) => {
  selectedTab.value = index
}
const props = defineProps({
  modelValue: {
    type:String
  }
})
const emits = defineEmits(['update:modelValue'])
// 点击 emoji 
const clickEmoji = (emoji:string) => {
  emits('update:modelValue',emoji)
}
</script>
<style lang="scss" scoped>
.emojiList {
  flex-grow: 1;
  border: 1px solid #5c33be;
  border-radius: 4px;
  font-size: 18px;
  font-size: 14px;
  &.error {
    border-color: #e10505;
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
        color: #333;
        font-weight: bold;
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
    align-content:flex-start;
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
</style>
