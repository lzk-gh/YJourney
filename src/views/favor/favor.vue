<template>
  <div class="favor" ref="favorRef">
    <!-- 顶部切换列表 -->
    <van-tabs sticky>
      <van-tab title="我的收藏">
        <!--<div v-if="favorAllList">-->
          <favorList :favor-all-list="favorAllList"></favorList>
        <!--</div>-->
      </van-tab>
      <van-tab title="浏览历史">
        <favorHistory :favor-history="historyList"></favorHistory>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
// import FavorNone from "./components/favor-none.vue"
import { computed } from 'vue'
import { storeToRefs } from 'pinia/dist/pinia'
import favorList from "./components/favor-01-list.vue"
import favorHistory from "./components/history-02-list.vue"
import useFavorStore from "@/stores/modules/favor"

// 收藏页面发送网络请求
const favorStore = useFavorStore()
favorStore.fetchFavorAllData()
favorStore.fetchFavorHistoryData()

// 解构store中的数据
const { allFavor, historyFavor } = storeToRefs(favorStore)
const favorAllList = computed(() => allFavor.value.data?.items)
const historyList = computed(() => historyFavor.value.data?.items)
</script>

<style lang="less" scoped>
/deep/ .van-swipe__indicator--active {
  background-color: #ffffff !important;
  //opacity: #ffffff !important;
}

/deep/ .van-tabs__line {
  bottom: 5vw;
}

.nav-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 46px;
  background-color: #ef9b6a;

  .title {
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
  }
}

.favor {
  background-color: #eae9e9;
  padding-bottom: 50px;
}
</style>
