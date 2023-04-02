<template>
  <div class="detail-tabbar">
    <van-action-bar>
      <van-action-bar-icon icon="chat-o" text="客服" color="#ff9854" to="/message" @click="onCustomerTip"/>
      <van-action-bar-icon icon="cart-o" text="订单" color="#ff9854" to="/order" badge="1" @click="OnOrder"/>
      <van-action-bar-icon v-if="currentIndex" icon="star-o" text="收藏" color="#ff9854" @click="onCollection"/>
      <van-action-bar-icon v-else icon="star" text="收藏" color="#ff9854" @click="onCollection"/>
      <van-action-bar-button linear-gradient="#ff9854" type="warning" text="加入订单" />
      <van-action-bar-button color="#f67b2a" type="danger" text="立即订购" />
    </van-action-bar>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
const currentIndex = ref(true)

const onCollection = () => {
  currentIndex.value = !currentIndex.value
}
</script>

<style scoped>

</style>
