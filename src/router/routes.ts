import { RouteRecordRaw } from 'vue-router';
import Welcome from '../views/welcome.vue'
import storage from '../utils/storage';
export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/welcome/1',
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
  },
  {
    path: '/start',
    component: ()=>import('../views/start.vue')
  },
  {
    path: '/item',
    redirect:'/item/create',
    children: [
      {
        path: 'create',
        component:()=>import('../views/item/itemCreate.vue')
      },
      {
        path: 'list',
        component:()=>import('../views/item/itemList.vue')
      }
    ]
  },
  {
    path: '/tag',
    redirect:'/tag/create',
    children: [
      {
        path: 'create',
        component:()=>import('../views/tag/tagCreate.vue')
      },
      {
        path: ':id/edit',
        component:()=>import('../views/tag/tagCreate.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')
  },
  {
    path: '/statistics',
    name: 'statistics',
    component: () => import('../views/statistics/statistics.vue')
  },
  {
    path: '/:pathMatch(.*)',
    component:()=>import('../views/404.vue')
  }
]