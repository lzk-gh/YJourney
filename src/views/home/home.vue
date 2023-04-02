<template>
  <div class="home" ref="homeRef">
    <home-nav-bar></home-nav-bar>
    <div class="banner">
      <img alt="" src="@/assets/img/home/banner.webp">
    </div>
    <home-search-box />
    <home-cate-gories />
    <div v-if="isShowSearchBar" class="search-bar">
      <search-bar></search-bar>
    </div>
    <home-content />
  </div>
</template>

<script>
export default { name: "home" }
</script>

<script setup>
import { computed, onActivated, ref, watch } from 'vue'
import useHomeStore from '@/stores/modules/home'
import homeNavBar from './components/home-nav-bar.vue'
import homeSearchBox from './components/home-search-box.vue'
import homeCateGories from './components/home-categories.vue'
import homeContent from './components/home-content.vue'
import useScroll from '@/hooks/useScroll'
import searchBar from '@/components/search-bar/search-bar.vue'
// import hyRequest from '@/services/request/index'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestsData()
homeStore.fetchCateGoriesData()
homeStore.fetchHouseListData()

// 到达底部发送列表数据请求
const homeRef = ref()
const { isReachBottom, scrollTop } = useScroll(homeRef)
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false
    })
  }
})

// 搜索框显示的控制
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 402
})

// 跳转回home页面时，保留原来的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;

  .banner {
    img {
      width: 100vw;
    }
  }

  .search-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    z-index: 9;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
