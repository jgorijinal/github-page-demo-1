<template>
  <div class="eren-login">
    <nav-bar title="登录">
    <template #leftIcon>
      <img :src="fanhuiSvg" alt="" class="fanhui">
    </template>
  </nav-bar>
  <!--中间图标-->
  <div class="eren-logo">
    <div class="eren-logo-wrapper">
      <img :src="mangosteenSvg" alt="">
      <span>日常记账</span>
    </div>
  </div>
  <!--表单-->
  <van-form @submit="onSubmit" ref="formRef">
  <van-cell-group inset>
    <van-field
      v-model="formData.email"
      name="email"
      label="邮箱"
      placeholder="请输入邮箱"
      :rules="formRules.email"
    />
    <van-field
      v-model="formData.code"
      center
      clearable
      name="code"
      label="邮箱验证码"
      placeholder="请输入收到的验证码"
      :rules="formRules.code"
    >
    <template #button>
      <van-count-down :time="60* 1000" format="ss 秒" v-if="countDownVisible" @finish="countDownVisible = false"/>
      <van-button v-if="!countDownVisible" size="small" type="primary" color="#3465e0" @click="onSendCode">发送验证码</van-button>
    </template>
  </van-field>
  <van-button block type="primary" color="#3465e0" round style="margin:30px 0"  native-type="submit" :loading="loginLoading">登录</van-button>
</van-cell-group>
</van-form>
  </div>
</template>
<script setup lang="ts">
import fanhuiSvg from '../assets/icons/fanhui.svg'
import mangosteenSvg from '../assets/icons/mangosteen.svg'
import NavBar from '../components/navBar.vue'
import { ref, reactive } from 'vue'
import { sendCode,login } from '../api/login'
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { useRouter } from 'vue-router'
// 表单数据
const formData = reactive({
  email: '',
  code:''
})
// 倒计时显示/隐藏
const countDownVisible =  ref(false)
// 表单规则
const formRules = {
  email: [
    { required: true, message: '请填写邮箱' },
    { pattern:/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:'请输入正确的邮箱地址'}
  ],
  code: [
  { required: true, message: '请填写验证码' }
  ]
}

// 表单的实例
const formRef = ref(null)
// 发送验证码
const onSendCode = () => {
    // 校验邮箱, 然后发送验证码
    (formRef.value as any).validate('email').then(async () => {
      countDownVisible.value = true
      // TODO : 发送验证码
      const result = await sendCode({ email: formData.email })
      console.log('发送验证码成功')
      console.log(result)
    }).catch(() => {
      // 校验不通过 
      console.log('校验不通过')
  })
}
const router = useRouter()
const loginLoading = ref(false)
// 点击最终登录按钮
const onSubmit = async (val: any) => {
  // 1. 整个表单校验 (Vant自动会做校验)
  // 2. 发登录请求
  Toast.loading({
  duration: 0, // 持续展示 toast
  message: "登录中...",
  forbidClick: true // 是否禁止背景点击
  });
  loginLoading.value = true
  try {
    const response = await login(formData)
    console.log(response)
    Toast.success("登录成功");
    loginLoading.value = false
    router.push('/start')
  } catch (err:any) {
    if (err.response.status === 422) {
      Toast.fail("验证码不正确, 请重新输入");
    } else {
      Toast.fail("登录失败, 请稍后重试");
    }
    loginLoading.value = false
  }
}

</script>
<style lang="scss" scoped>
  .eren-login {
    .fanhui {
      width:1.5em;
      height:1.5em;
    }
  }
  .eren-logo {
    display:flex;
    justify-content: center;
    align-items: center;
    height:250px;;
    &-wrapper{
      display: flex;
      flex-direction: column;
      align-items: center;
      span {
        font-size:30px;
        color:#2055da;
      }
    }
    img {
      width:100px;
      height:100px;
    }
  }
</style>