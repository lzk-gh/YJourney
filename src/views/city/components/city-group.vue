<template>
  <div class="city-group">
    <van-index-bar  :index-list="indexList">
      <!-- 热门城市 -->
      <van-index-anchor index="热门" />
      <div class="hot-list">
        <template v-for="(hotCity, index) in groupData.hotCities">
          <div class="hotCity" @click="cityClick(hotCity)">{{ hotCity.cityName }}</div>
        </template>
      </div>
      <!-- 国内·海外 -->
      <template v-for="item in groupData.cities">
        <!-- 字母标题 -->
        <van-index-anchor :index="item.group" />
        <!-- 遍历城市名称 -->
        <template v-for="(itemName, indey) in item.cities" :key="indey">
          <van-cell :title="itemName.cityName" @click="cityClick(itemName)"/>
        </template>
      </template>
    </van-index-bar>
  </div>

</template>

<script setup>
  import { computed } from 'vue';
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/city.js';
  
  // 父子组件通信
  const props = defineProps({
    groupData: {
      type: Object,
      default: () => ({})
    }
  })

  // 右侧字母序列与服务器获取的数据一样
  const indexList = computed(() => {
    const list = props.groupData.cities.map(index => index.group)
    list.unshift("#")
    // Vant indexBar没有#，可以自己添加
    return list
  })

  // 点击城市回显
  const router = useRouter()
  const cityStore = useCityStore()
  const cityClick = (city) => {
    // 动态决定store中的数据
    cityStore.currentCityName = city
    // 路由跳转，返回上级
    router.back()
  }
</script>

<style lang="less" scoped>
  .city-group {
    .hot-list {
      display: flex;
      justify-content: space-around;
      flex-wrap: wrap;
      margin-right: 20px;
    }

    .hotCity {
      width: 70px;
      height: 28px;
      line-height: 28px;
      border-radius: 14px;
      background-color: #fff4ec;
      text-align: center;
      margin: 6px;
      margin-top: 12px;
    } 
  }
</style>