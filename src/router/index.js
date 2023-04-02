import {createRouter, createWebHashHistory } from 'vue-router'
import useMainStore from '../stores/modules/main'

const router = createRouter({
  history: createWebHashHistory(),
  // 映射关系：path -> component
  routes: [
    {
      // 重定向
      path: "/",
      redirect: "/login",
      meta: {
        hideTabBar: true
      }
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/login",
      component: () => import("@/views/login/login.vue"),
      meta: {
        hideTabBar: true
      }
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue"),
      meta: {
        hideTabBar: true,
        requireLogin: true
      }
    },
    {
      path: "/mine",
      component: () => import("@/views/mine/mine.vue"),
      meta: {
        requireLogin: true
      }
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
      meta: {
        hideTabBar: true,
        requireLogin: true
      }
    },
    {
      path: "/search",
      component: () => import("@/views/search/search.vue"),
      meta: {
        hideTabBar: true,
        requireLogin: true
      }
    },
    {
      path: "/detail/:id",
      component: () => import("@/views/detail/detail.vue"),
      meta: {
        hideTabBar: true,
        requireLogin: true
      }
    }
  ]
})

export default router
