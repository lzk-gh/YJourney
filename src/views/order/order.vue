<template>
  <div class="order">
    <div class="nav-bar">
      <div class="title">我的订单</div>
    </div>
    <OrderTab :order-all="orderAll" :order-pend="orderPend" :order-recent="orderRecent"></OrderTab>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia/dist/pinia'
// import OrderNone from "./components/order-none.vue"
import OrderTab from "./components/order-01-tab.vue"
import useOrderStore from '@/stores/modules/order'
import { computed } from 'vue'

// 订单页面发送网络请求
const orderStore = useOrderStore()
orderStore.fetchOrderAllData()
orderStore.fetchOrderPendData()
orderStore.fetchOrderRecentData()

// 获取stores中的数据
const orderInfosStore = useOrderStore()
const { allOrder, pendOrder, recentOrder } = storeToRefs(orderInfosStore)

// 分割不同订单状态数据
// JSON.parse(JSON.stringify(allOrder.value.data.orders)))
// 先将对象或值转换成json格式字符串，再解析json格式字符串
const orderAll = computed(() => allOrder.value.data?.orders)
const orderPend = computed(() => pendOrder.value.data?.orders)
const orderRecent = computed(() => recentOrder.value.data?.orders)
</script>

<style lang="less" scoped>
.order {
  height: 100vh;
  background-color: #f8f8f8;
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

  .content {
    width: 92vw;
    height: 800px;
    margin: 30px auto auto;
    background-color: #f1c8c8;
    border-radius: 6px;
  }
}
</style>
