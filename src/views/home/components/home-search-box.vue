<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="loaction">
      <div class="city" @click="cityClick">{{ currentCityName.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img alt="" src="@/assets/img/home/icon_location.png">
      </div>
    </div>
    <!-- 住店信息 -->
    <div class="selectDate" @click="selectClick">
      <!-- 左侧 -->
      <div class="sel_left">
        <div class="startDate Date border-left">
          <span class="selectTitle">入住</span>
          <span class="time">{{ startDateStr }}</span>
        </div>
        <div class="stayDate">
          <span class="selectTip">共{{ stayCount }}晚</span>
        </div>
      </div>

      <!-- 右侧 -->
      <div class="endDate Date">
        <span class="selectTitle">离店</span>
        <span class="time">{{ endDateStr }}</span>
      </div>
    </div>
    <!-- 选择日期期间 -->
    <van-calendar v-model:show="showCalendar"
                  :round="false"
                  color="#ff9854"
                  type="range"
                  @confirm="onConfirm" />

    <!-- 价格人数/关键字 -->
    <div class="selectDate">
      <div class="sel_left">
        <div class="startDate Date">
          <span class="selectTitle gray-color">价格不限</span>
        </div>
      </div>
      <div class="endDate Date">
        <span class="selectTitle gray-color">人数不限</span>
      </div>
    </div>
    <div class="selectDate gjzdiv">
      <span class="selectTitle gray-color gjz">关键字/位置/民宿名</span>
    </div>

    <!-- 热门建议 -->
    <div class="hotSuggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
            :style="{color: item.tagText.color, background: item.tagText.background.color}"
            class="item"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 搜索按钮 -->
    <div class="search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
import {computed, ref} from 'vue'
import {useRouter} from 'vue-router'
import {storeToRefs} from 'pinia'
import {formatMonthDate, getStayCount} from '@/utils/format_date'
import useCityStore from '@/stores/modules/city'
import useHomeStore from '@/stores/modules/home'
import useMainStore from "@/stores/modules/main";

const router = useRouter()

// props
// defineProps({
//   hotSugCitys: {
//     type: Array,
//     defaults: () => []
//   }
// })

// 位置/城市
const cityClick = () => {
  router.push("/city")
}

// 我的位置
const positionClick = () => {
  navigator.geolocation.getCurrentPosition(res => {
    console.log("获取位置成功：", res)
  }, err => {
    console.log("获取位置失败：", err)
  })
}

// 获取city.vue存在pinia中的城市名称
const cityStore = useCityStore()
const {currentCityName} = storeToRefs(cityStore)

// 日期范围的处理(默认是今天到明天)
const mainStore = useMainStore()
const {startDate, endDate} = storeToRefs(mainStore)

const startDateStr = computed(() => formatMonthDate(startDate.value))
const endDateStr = computed(() => formatMonthDate(endDate.value))

// 选择日期期间
const showCalendar = ref(false)
const stayCount = ref(getStayCount(startDate.value, endDate.value))

// 点击了选择日期区域
const selectClick = () => {
  showCalendar.value = true
}

// Vant日历
const onConfirm = (value) => {
  const startDay = value[0]
  const endDay = value[1]
  mainStore.startDate = startDay
  mainStore.endDate = endDay
  // 隐藏日历
  showCalendar.value = false
  // 停留几晚
  stayCount.value = getStayCount(startDay, endDay)
}

// 热门建议
const homeStore = useHomeStore()
const {hotSuggests} = storeToRefs(homeStore)

// 跳转搜索页面
const searchBtnClick = () => {
  router.push({
    path: '/search',
    query: {
      stateDate: startDateStr.value,
      endDate: endDateStr.value,
      cityStore: currentCityName.value.cityName
    }
  })
}
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
}

.loaction {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;

  .city {
    flex: 1;
  }

  .position {
    width: 88px;
    display: flex;
    justify-content: center;

    img {
      width: 20px;
      height: 20px;
      margin: -4px 5px auto auto;
    }
  }
}

.selectDate {
  display: flex;
  height: 44px;
  width: 88vw;
  margin-left: 20px;

  .sel_left {
    display: flex;
    flex: 1;
  }

  .Date {
    display: flex;
    flex-direction: column;
    line-height: 20px;
  }


  .stayDate {
    flex: 1;
    padding-top: 10px;
    text-align: center;
    color: #666;
  }

  .endDate {
    min-width: 30%;
    padding-left: 20px;
  }

  .gray-color {
    line-height: 48px;
    font-size: 13px !important;
  }

  .gjz {
    line-height: 18px !important;
  }


  .selectTitle {
    font-size: 12px;
    color: rgb(131, 131, 131);
  }

  .time {
    font-size: 16px;
    color: rgb(42, 42, 42);
  }

  .border-left {
    padding-left: 5px;
    border-left: 4px solid #ff9854;
  }
}

.gjzdiv {
  height: 28px !important;
}

.hotSuggests {
  display: flex;
  width: 88vw;
  flex-wrap: wrap;
  margin-left: 20px;

  .item {
    padding: 3px 8px;
    border-radius: 14px;
    font-size: 12px;
    margin: 6px;
    background-color: #faf0eb !important;
  }
}

.search-btn {
  .btn {
    color: #fff;
    width: 342px;
    height: 38px;
    line-height: 38px;
    max-height: 50px;
    font-size: 18px;
    font-weight: 500;
    margin: 14px auto;
    text-align: center;
    border-radius: 20px;
    box-shadow: -1px 1px 5px #fa8c1d;
    background-image: var(--theme-linear-gradient);
  }
}

</style>
