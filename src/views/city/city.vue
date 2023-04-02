<template>
  <div class="city">
    <div class="top">
    <!-- 1.搜索框 -->
    <van-search v-model="searchValue"
                placeholder="城市/区域/位置"
                shape="round"
                show-action
                @cancel="cancelClick" />

    <!-- 2.tab切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <!-- 这里遍历的是对象 -->
      <template v-for="(value, key, index) in allCities" :key="key">
        <van-tab :title="value.title" :name="key"></van-tab>
      </template>
    </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive === key" :group-data="value" highlight-color="#ff9854"></city-group>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  // import { getCityAll } from '@/services'
  import useCityStore from '@/stores/modules/city'
  import CityGroup from './components/city-group.vue'

  // 搜索框功能
  const searchValue = ref("")
  const router = useRouter()
  // 取消按钮返回上一级页面
  const cancelClick = () => {
  router.back()
  }

  /** 
   * 这个位置发送网络请求有两个缺点
   * 1.如果网络请求太多了，那么页面组件中就包含了大量对于网络请求和数据的处理逻辑
   * 2.如果页面封装了很多的子组件，子组件需要这些数据，这里就得一步步将数据传递过去(props)
   */
  // 网络请求：请求城市的数据
  // const allCity = ref({})
  // getCityAll().then(res => {
  //   allCity.value = res.data
  // })

  // 从Store中获取数据
  const cityStore = useCityStore()
  // 让actions去通知发送网络请求
  cityStore.fetchAllCitiesData()
  // 解构
  const { allCities } = storeToRefs(cityStore)

  // 获取选中(国内外城市)标签的数据
  const tabActive = ref()
  // 利用计算属性实现响应式
  // const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
  .city {
    .top {
      position: relative;
      z-index: 9;
    }
    .content {
      height: calc(100vh - 98px);
      overflow-y: auto;
    }
  }
</style>
