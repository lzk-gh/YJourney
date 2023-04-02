<template>
  <div class="cate-gories">
    <template v-for="(item, index) in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="">
        <div class="title">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import useHomeStore from '@/stores/modules/home.js'

  const categoriesStore = useHomeStore()
  const { categories } = storeToRefs(categoriesStore)
</script>

<style lang="less" scoped>
  .cate-gories {
    display: flex;
    height: 60px;
    width: 96vw;
    margin: 0 auto;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }

    .item {
      flex-shrink: 0;
      padding: 0 12px;
      text-align: center;


      img {
        width: 38px;
        height: 38px;
      }

      .title {
        font-size: 12px;
        margin-top: 6px;
      }
    }
  }
</style>