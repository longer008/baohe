import { createRouter, createWebHashHistory ,RouteRecordRaw } from "vue-router";

const routes:Array<RouteRecordRaw > = [
  {
    path: "/",
    redirect: "/home",
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
