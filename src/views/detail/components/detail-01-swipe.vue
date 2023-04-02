<template>
  <div class="swipe">
    <van-swipe :autoplay="5000" class="swipe-list" lazy-render>
      <template v-for="(item, index) in detailSwipe">
        <van-swipe-item class="item">
          <img :src="item.url" />
        </van-swipe-item>
      </template>
      <!--自定义指示器-->
      <template #indicator="{ active, total }">
        <div class="custom-indicator">{{ active + 1 }} / {{ total }}</div>
      </template>
    </van-swipe>
  </div>

</template>

<script setup>
defineProps({
  detailSwipe: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list {
    .item {

      img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 8px;
    color: #fff;
    font-size: 12px;
    border-radius: 24px;
    background: #e3af90;
  }

  .like {
    background-color: #fff;
  }
}
</style>
