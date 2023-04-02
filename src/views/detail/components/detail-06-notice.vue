<template>
  <div class="notice">
    <DetailSection title="预定须知" more-text="查看具体说明">
      <div class="notice-inner">
        <template v-for="(item, index) in detailNotice.slice(0, 4)" :key="index">
          <div class="item">
            <span class="title">{{ item.title }}</span>
            <span class="intro">{{ item.introduction }}</span>
          </div>
        </template>
      </div>
    </DetailSection>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-section.vue"

defineProps({
  detailNotice: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.notice-inner {
  padding: 5px 8px;
  background-color: #f5f7fa;
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;

    .title {
      width: 64px;
      color: #666;
    }

    .intro {
      float: 1;
      color: #333;
    }

    .tip {
      mix-width: 70vw;

    }
  }
}
</style>
