<template>
  <div ref="detailRef" class="detail top-page">
    <TabControl
        v-if="showTabControl"
        ref="tabControlRef"
        :titles="names"
        class="tab-control"
        @tabItemClick="tabClick"
    />
    <van-nav-bar
        left-arrow
        left-text="返回"
        title="房屋详情"
        @click-left="onClickLeft"
    />
    <div v-if="detailInfos?.mainPart" v-memo="[detailInfos.mainPart]" class="main">
      <DetailSwipe :detail-swipe="detailSwipe" />
      <DetailInfos :detail-info="detailInfo" />
      <DetailFacility :ref="getSelectionRef" :detail-facilitys="detailFacility" name="设施" />
      <DetailLandlord :ref="getSelectionRef" :detail-landlord="detailLandlord" name="房东" />
      <DetailComment :ref="getSelectionRef" :detail-comment="detailComment" name="评论" />
      <DetailNotice :ref="getSelectionRef" :detail-notice="detailNotice" name="须知" />
      <DetailMap :ref="getSelectionRef" :detail-position="detailMap" name="周边" />
      <DetailIntro :detail-intro="detailIntro" />
    </div>
    <div class="footer">
      <img alt="" src="@/assets/img/detail/icon_ensure.png">
      <div class="text">学习永无止境</div>
    </div>
    <div class="tabbar">
      <DetailActionBar></DetailActionBar>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from "vue"
import { useRoute, useRouter } from "vue-router"
import { storeToRefs } from "pinia/dist/pinia"
import useDetailStore from "@/stores/modules/detail"
import TabControl from "@/components/tab-control/tab-control.vue";
import DetailSwipe from "./components/detail-01-swipe.vue"
import DetailInfos from "./components/detail-02-infos.vue"
import DetailFacility from "./components/detail-03-facility.vue"
import DetailLandlord from "./components/detail-04-landlord.vue"
import DetailComment from "./components/detail-05-comment.vue"
import DetailNotice from "./components/detail-06-notice.vue"
import DetailMap from "./components/detail-07-map.vue"
import DetailIntro from "./components/detail-08-intro.vue"
import DetailActionBar from "./components/detail-ActionBar.vue"
import useScroll from "../../hooks/useScroll";
import detail from "../../stores/modules/detail";

// 点击返回按钮
const router = useRouter()
const onClickLeft = () => {
  router.back()
}

// 网络请求数据
const route = useRoute()
const DetailStore = useDetailStore()
DetailStore.fetchDetailInfosData(route.params.id)

// 获取stores中的数据
const detailInfosStore = useDetailStore()
const { detailInfos } = storeToRefs(detailInfosStore)

// const detailSwipe = reactive([])
// const detailInfo = ref({})

// 一个计算渲染到两个组件的话 倘若一个组件数据发生变更 就会重新计算 影响性能
// const cpt = computed(() => {
//   return {
//     detailSwipe: detailInfos.value.mainPart.topModule.housePicture.housePics,
//     detailInfo: detailInfos.value.mainPart.topModule
//   }
// detailSwipe: detailSwipe.value = detailInfos.value.mainPart.topModule.housePicture.housePics
// detailInfo: detailInfo.value = detailInfos.value.mainPart.topModule
// })
//     <DetailSwipe :detail-swipe="cpt.detailSwipe" />
//     <DetailInfos :detail-info="cpt.detailInfo" />

// 倘若分割成两个计算 就成了按需计算 可以减少一些不必要的计算 节省内存开销...这样组件的颗粒度会好一点
const detailSwipe = computed(() => detailInfos.value.mainPart.topModule.housePicture.housePics)
const detailInfo = computed(() => detailInfos.value.mainPart.topModule)
const detailFacility = computed(() => detailInfos.value.mainPart.dynamicModule.facilityModule.houseFacility)
const detailLandlord = computed(() => detailInfos.value.mainPart.dynamicModule.landlordModule)
const detailComment = computed(() => detailInfos.value.mainPart.dynamicModule.commentModule)
const detailNotice = computed(() => detailInfos.value.mainPart.dynamicModule.rulesModule.orderRules)
const detailMap = computed(() => detailInfos.value.mainPart.dynamicModule.positionModule)
const detailIntro = computed(() => detailInfos.value.mainPart.introductionModule)

// tab-control相关操作
const detailRef = ref()
const tabControlRef = ref()
const { scrollTop } = useScroll(detailRef)

// 是否显示tab-control
const showTabControl = computed(() => {
  // console.log(scrollTop.value);
  return scrollTop.value >= 300
})

const selectEls = ref({})
const names = computed(() => {
  return Object.keys(selectEls.value)
})

const getSelectionRef = (value) => {
  if (!value) return
  // console.log('-----');
  const name = value.$el.getAttribute("name")        // 拿到元素中的name属性
  // console.log(name);
  selectEls.value[name] = value.$el
}

let isClick = false
let currentDistance = -1
const tabClick = (index) => {
  isClick = true
  const key = Object.keys(selectEls.value)[index]
  const el = selectEls.value[key]
  // console.log(el);
  let distance = el.offsetTop
  currentDistance = distance
  detailRef.value.scrollTo({
    top: distance - 38,
    behavior: 'smooth'
  })
}

/*
* selectEls对象：设施：el元素，房东：el元素
* 页面滚动时，匹配对应的tabcontrol的index
* */
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance - 38) {
    isClick = false
    console.log(isClick);
  }
  if (isClick) return
  // 1.获取所有区域的offsetTops
  const els = Object.values(selectEls.value)
  const values = els.map(el => el.offsetTop)
  // console.log(values);

  // 2.根据newValue去匹配对应索引
  let index = values.length - 1
  for (let i = 1; i < values.length; i++) {
    if (values[i] >= newValue + 44) {
      index = i - 1
      break
    }
  }
  // console.log(index);

  tabControlRef.value?.setCurrentIndex(index)
})

</script>

<style lang="less" scoped>
.detail {
  height: 100vh;
  overflow-y: auto;

  .tab-control {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 888;
    background-color: #fff;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;
    padding-bottom: 60px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
