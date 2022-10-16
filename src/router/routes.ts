import { RouteRecordRaw } from 'vue-router';
import Welcome from '../views/welcome.vue'
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component:() => import('../views/home.vue')
  },
  {
    path: '/welcome',
    component: Welcome,
    children: [
      { path: '1', component:() => import('../components/welcome/first.vue') },
      { path: '2', component:() => import('../components/welcome/second.vue') },
      { path: '3', component:() => import('../components/welcome/third.vue') },
      { path: '4', component:() => import('../components/welcome/fourth.vue') }
    ]
  }
]