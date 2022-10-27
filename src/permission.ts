import router from './router'
import storage from './utils/storage'
import { Toast } from 'vant';
import 'vant/es/toast/style';
import { useStore } from './store';

const whiteList = ['/welcome','/welcome/1','/welcome/2','/welcome/3','/welcome/4','/login','/start']
router.beforeEach((to, from, next) => {
  if (storage.getItem('jwt')) {
    // 已登录
    if (to.path === '/login') {
      next('/start')
    } else {
      // 获取当前用户信息
      const store = useStore()
      if(JSON.stringify(store.userInfo) === '{}'){
        store.getUserInfoAction()
      }
      next()
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      Toast.fail("请您先登录哦");
      next(`/login?redirectRoute=${to.path}`)
    }
  }
})
