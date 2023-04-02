<template>
  <div class="favor-none">
    <div class="favor-img">
      <img src="@/assets/img/favor/empty_favorite.44731802.png" alt="">
    </div>
    <div class="none-text">收藏列表空空如也~</div>
  </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.favor-none {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100vw;
  text-align: center;
  margin: 10vh auto auto;

  .favor-img {
    width: 100vw;
  }

  .favor-img img {
    width: inherit;
  }

  .none-text {
    color: #ef9b6a;
    font-size: 16px;
  }
}

</style>
