import { defineStore } from 'pinia'
import { login } from '../api/login'
import storage from '../utils/storage'
import router from '../router'
import { getUserInfo } from '../api/login'
export const useStore = defineStore('main', {
  state: () => {
    return {
      token: storage.getItem('jwt') || '',
      userInfo: {}
    }
  },
  actions: {
    async loginAction(data: any) {
      try {
        const { jwt } = await login(data)  
        storage.setItem('jwt', jwt)
        this.token = jwt
        // 登录后跳转
        const redirectRoute = router.currentRoute.value.query.redirectRoute
        console.log(redirectRoute)
        if (redirectRoute) {
          router.push(decodeURIComponent(redirectRoute as string))
        } else {
          router.push('/start')
        }
      } catch (err) {
        console.log(err)
      }
    },
    // 调用时机?  
    // 路由守卫: (1)已登录 (2)不是去登录页面, (3)JSON.stringify(store里的userInfo) 是 '{}'
    async getUserInfoAction() {
      const { resource } = await getUserInfo()
      this.userInfo = resource
    },
    logoutAction() { //退出登录
      storage.removeItem('jwt')
      this.token = ''
      this.userInfo = {}
      router.push('/login')
    }
  }
})



