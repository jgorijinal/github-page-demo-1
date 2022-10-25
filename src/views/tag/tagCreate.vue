<template>
  <nav-bar :title="isEdit ? '编辑标签' : '新建标签'">
    <template #leftIcon>
      <img :src="fanhuiSvg" alt="" @click="$router.back()">
    </template>
  </nav-bar>
  <form class="form" @submit="onSubmit">
    <div class="formRow">
      <label class="formLabel">
        <span class="formItem_name">标签名</span>
        <div class="formItem_value">
          <input class="formItem input" :class="{error: errors['tagName']}" v-model="formData.tagName" placeholder="可输入1-4个字符"/>
        </div>
        <div class="formItem_errorHint">
          <span>{{errors['tagName'] ? errors['tagName'][0] : '' }}</span>
        </div>
      </label>
    </div>
    <div class="formRow">
      <label class="formLabel">
        <span class="formItem_name">符号: {{formData.emoji}}</span>
        <div class="formItem_value">
          <!--表情选择器 组件-->
          <emoji-select class="formItem emojiList"  :class="{error: errors['emoji']}" v-model="formData.emoji"/>
        </div>
        <div class="formItem_errorHint">
          <span>{{ errors['emoji'] ? errors['emoji'][0] : '' }}</span>
        </div>
      </label>
    </div>
    <p class="tips">记账时长按标签即可进行编辑</p>
    <div class="formRow">
      <div class="formItem_value">
        <e-button class="button" @click="onSubmit">{{isEdit ? '保存' : '确定'}}</e-button>
      </div>
    </div>
    <div class="action-buttons" v-if="isEdit">
      <e-button class="action" >删除标签</e-button>
      <e-button class="action">删除标签和对应的记账</e-button>
    </div>
  </form>
</template>
<script setup lang="ts">
import NavBar from '../../components/navBar.vue'
import EButton from '../../components/button.vue'
import EmojiSelect from '../../components/emojiSelect.vue'
import fanhuiSvg from '../../assets/icons/fanhui.svg'
import { validate, Rules} from '../../utils/validate'
import { reactive, ref,computed } from 'vue'
import { useRoute,useRouter } from 'vue-router'
import { createTag } from '../../api/tags'
import { Toast } from 'vant';
import 'vant/es/toast/style';

const route = useRoute()
const router = useRouter()
// 表单数据
const formData = reactive({
  tagName: '',
  emoji: '',
  kind:route.query.kind!.toString()
})
// console.log(route.query.kind!.toString())
const rules:Rules<FormData> = [
  { key: 'tagName', required: true, message: '必填' },
  { key: 'tagName', pattern: /^.{1,4}$/, message: '请填入1~4个字符' },
  { key: 'emoji', required: true, message: '必填' },
]
type FormData =  {
  tagName:string
  emoji:string
}

// 表单验证报错结果
const errors = ref<any>([])
// 是否编辑状态
const isEdit = computed(() => {
  return Boolean(route.params.id)
})
//表单提交
const onSubmit = async (e:Event) => {
  e.preventDefault()
  errors.value = validate<FormData>(formData, rules)
  if (JSON.stringify(errors.value) === '{}') {
    // 没有错误, 可以点击确定按钮
    if (!isEdit.value) {
      // 创建标签
      const result =  await createTag({
      name:formData.tagName,
      sign:formData.emoji,
      kind:formData.kind
      })
    Toast.success('成功创建标签') 
    router.back()
    } else {
      // 编辑标签
      // TODO
    }
  }
}

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
}
::v-deep.action-buttons {
  justify-content: space-between;
  margin-top:8px;
  display: flex;
  .action {
    flex-grow: 1;
    &:first-child{
      margin-right:10px;
    }
     .eren-button {
      background-color: #e10405;
      border:1px solid #e10405;
    }
  }
}
</style>
