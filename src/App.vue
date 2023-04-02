<template>
  <!-- name属性 -->
  <router-view v-slot="props">
    <keep-alive include="home">
      <component :is="props.Component"></component>
    </keep-alive>
  </router-view>
  <tab-bar v-if="!router.meta.hideTabBar" class="ads"></tab-bar>
  <loading></loading>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  import tabBar from './components/tabbar/tabbar.vue';
  import loading from './components/loading/loading.vue'

  const router = useRoute()
</script>
<style scoped>

</style>
