import { createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw > = [
  {
    path: "/",
    redirect: "/zhihu",
  },
  // {
  //   path: "/login",
  //   name: "login",
  //   meta: {
  //     title: "登录",
  //   },
  //   component: () => import("../views/login/index.vue"),
  // },
  {
    path: "/home",
    name: "home",
    meta: {
      title: "首页",
    },
    component: () => import("../components/home/Home.vue"),
  },
  {
    path: "/zhihu",
    name: "zhihu",
    meta: {
      title: "知乎",
    },
    component: () => import("../views/Zhihu.vue"),
  },
  {
    path: "/weibo",
    name: "weibo",
    meta: {
      title: "微博",
    },
    component: () => import("../views/Weibo.vue"),
  },
  {
    path: "/joke",
    name: "joke",
    meta: {
      title: "笑话",
    },
    component: () => import("../views/Joke.vue"),
  },
  // {
  //   path: "/user",
  //   name: "user",
  //   meta: {
  //     title: "我的",
  //   },
  //   component: () => import("../views/user/index.vue"),
  // },
  // {
  //   path: "/article",
  //   name: "article",
  //   meta: {
  //     title: "新闻详情",
  //   },
  //   component: () => import("../views/article/index.vue"),
  // },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
