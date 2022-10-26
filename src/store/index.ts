import { defineStore } from 'pinia'
import { login } from '../api/login'
import storage from '../utils/storage'
import router from '../router'

export const useStore = defineStore('main', {
  state: () => {
    return {
      token:storage.getItem('jwt') || ''
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
    }
  }
})


