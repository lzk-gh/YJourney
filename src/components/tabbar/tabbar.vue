<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div :class="{active: currentIndex === index}"
           class="tab-bar-item"
           @click="itemClick(index, item)"
      >
        <img v-if="currentIndex !== index" :src="getAssetURL(item.image)" alt="">
        <img v-else-if="currentIndex === index" :src="getAssetURL(item.imageActive)" alt="">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>
<script setup>
// 导入本地tabbar图片
import tabbarData from "@/assets/data/tabbar.js"
// 导入ref
import {ref, watch} from "vue"
import {useRoute, useRouter} from "vue-router"

// vite环境下，读取本地资源图片路径
const getAssetURL = image => {
  // 第一个参数：相对路径
  // 第二个参数：当前路径的URL(拼接路径)
  return new URL(`../../assets/img/${image}`, import.meta.url).href
}

// 用于响应式样式的变动
const currentIndex = ref(0)

// 当直接修改网址跳转路由时，让tab-bar也切换路由
const route = useRoute()
  watch(route, (newRoute) => {
    const index = tabbarData.findIndex(item => item.path === newRoute.path)
    if (index === -1) return
    currentIndex.value = index
  })

// tabbar事件-点击切换
const router = useRouter()
const itemClick = (index, item) => {
  currentIndex.value = index
  // 编程式导航
  router.push(item.path)
}
</script>

<style lang="less" scoped>
.tab-bar {

  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  background-color: rgb(244, 244, 244);
  z-index: 999;

  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      // 定义在css/common.css文件
      color: var(--primary-color);
    }

    img {
      width: 36px;
      height: 28px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}

</style>
