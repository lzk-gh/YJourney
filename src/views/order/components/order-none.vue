<template>
  <div class="order-none">
    <img src="@/assets/img/order/icon-order.png" alt="">
    <div class="none-text">暂无订单，快去看看吧~</div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.order-none {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  text-align: center;
  margin: 10vh auto auto;

  .order-none img {
    object-fit: cover;
  }

  .none-text {
    color: #ef9b6a;
    font-size: 16px;
  }
}

</style>
