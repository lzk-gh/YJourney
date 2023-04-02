<template>
  <div class="order-item">
    <div class="header">
      <span>预定时间：{{ title }}</span>
    </div>
    <div class="content">
      <slot>
        <h3>我是默认内容</h3>
      </slot>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>

</style>
