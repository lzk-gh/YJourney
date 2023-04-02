import { createApp, ref } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores'

import "normalize.css"
import "./assets/css/index.css"

// import { code } from "@/views/login/login.vue"

// 登录权限判断
// router.beforeEach((to, from, next) => {
//   // 判断该路由是否需要登录
//   if (to.matched.some(record => record.meta.requireLogin)) {
//     // 判断当前用户的登录信息loginInfo是否存在
//     if (sessionStorage.getItem('loginInfo')) {
//       next()
//     } else {
//       next({
//         path: '/'
//       })
//     }
//   } else {
//     next()
//   }
// })

// router.beforeEach((to, from, next) => {
//   // 判断该路由是否需要登录
//   if (to.matched.some(record => record.meta.requireLogin)) {
//     // 判断当前用户的登录信息loginInfo是否存在
//     if (code == '200') {
//       next({
//         path: '/home'
//       })
//     } else {
//       next({
//         path: '/'
//       })
//     }
//   } else {
//     next()
//   }
// })

createApp(App).use(router).use(pinia).mount('#app')
