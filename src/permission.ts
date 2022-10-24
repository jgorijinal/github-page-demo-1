import router from './router'
import storage from './utils/storage'
import { Toast } from 'vant';
import 'vant/es/toast/style';

const whiteList = ['/welcome','/login','/start']
router.beforeEach((to, from, next) => {
  if (storage.getItem('jwt')) {
    // 已登录
    if (to.path === '/login') {
      next('/start')
    } else {
      next()
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      Toast.fail("请您先登录哦");
      next('/login')
    }
  }
})
