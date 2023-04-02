<template>
  <div class="tab-control">
    <template v-for="(item, index) in titles" :key="item">
      <div :class="{ active: index === currentIndex }"
           class="tab-control-item"
           @click="itemClick(index)">
        <span>{{ item }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";

// 定义props
defineProps({
  titles: {
    type: Array,
    default: () => []
  }
})

const currentIndex = ref(0)
// 定义emits
const toDetail = defineEmits(['tabItemClick'])

// 点击itemClick时，将index传递给父组件
const itemClick = index => {
  currentIndex.value = index
  toDetail('tabItemClick', index)
}

// (滑动屏幕时)将setCurrentIndex暴露,父组件直接调用其方法，从而获取index
const setCurrentIndex = index => currentIndex.value = index
defineExpose({ setCurrentIndex })

</script>

<style lang="less" scoped>
.tab-control {
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
  background-color: #fff;
}

.tab-control-item {
  flex: 1;
}

.tab-control-item.active {
  color: var(--primary-color);
  font-weight: 700;
}

.tab-control-item.active span {
  border-bottom: 3px solid var(--primary-color);
  padding: 8px;
}
</style>
