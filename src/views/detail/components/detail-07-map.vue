<template>
  <div class="map">
    <DetailSection title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef"></div>
    </DetailSection>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import DetailSection from "@/components/detail-section/detail-section.vue"

const props = defineProps({
  detailPosition: ({
    type: Object,
    default: () => ({})
  })
})

// 百度地图
const mapRef = ref()
onMounted(() => {
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例
  const point = new BMapGL.Point(props.detailPosition.longitude, props.detailPosition.latitude);   // 创建点坐标
  map.centerAndZoom(point, 15);                      // 初始化地图，设置中心点坐标和地图级别
  var marker = new BMapGL.Marker(point);             // 创建标注
  map.addOverlay(marker);                            // 将标注添加到地图中
})
</script>

<style scoped>
.baidu {
  height: 250px;
}
</style>
