import { createRouter, createWebHashHistory, RouteRecordRaw ,useRoute } from 'vue-router'

const routes:Array<RouteRecordRaw > = [
  {
    path: '/',
    name:'home',
    meta:{
      title: '首页',
    },
    redirect: '/weibo',
  },

  {
    path: '/zhihu',
    name: 'zhihu',
    meta: {
      title: '知乎',
      hasFooter:false,
      keepAlive:true
    },
    component: () => import('../views/Zhihu.vue'),
  },
  {
    path: '/weibo',
    name: 'weibo',
    meta: {
      title: '微博',
    },
    component: () => import('../views/Weibo.vue'),
  },
  {
    path: '/fund',
    name: 'fund',
    meta: {
      title: '基金',
    },
    component: () => import('../views/Fund.vue'),
  },
  {
    path: '/joke',
    name: 'joke',
    meta: {
      title: '笑话',
    },
    component: () => import('../views/Joke.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于',
    },
    component: () => import('../views/About.vue'),
  },
  {
    path: '/hello',
    name: 'hello',
    meta: {
      title: '嗨',
      name:'hello'
    },
    component: () => import('../views/Hello'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export const route=useRoute()

export default router
