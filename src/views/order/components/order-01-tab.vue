<template>
  <div>
    <!--<template v-for="(item, index) in orderRecent" :key="index">-->
    <!--  <span>{{ item.address }}</span>-->
    <!--</template>-->
    <van-tabs sticky>
      <van-tab title="全部">
        <div class="box">
          <template v-for="(item, index) in orderAll" :key="index">
            <div class="orderInfos">
              <div class="checkDate">预定时间：{{ item.checkInDate }} {{ item.checkInLatestTime }}</div>
              <div class="content">
                <div class="contentImg">
                  <img alt="" :src="item.unitPicture">
                </div>
                <div class="contentInfo">
                  <div class="hotelName">{{ item.hotelName }}</div>
                  <div class="unitName">{{ item.unitName.slice(0, 20) }}</div>
                  <div class="price">¥ {{ item.prepayAmount }}</div>
                </div>
                <div class="rightTop">{{ item.orderStatusDesc }}</div>
              </div>
              <div class="infoBottom">
                <div class="orderNumber">订单号：{{ item.orderNumber }}</div>
                <div class="total">合计：<span>¥ {{ item.prepayAmount }}</span></div>
              </div>
              <div class="payment">
                <div class="orderDetails same">订单详情</div>
                <div class="CancelOrder same">取消订单</div>
                <div class="goPayment same">去付款</div>
              </div>
            </div>
          </template>
        </div>
      </van-tab>
      <van-tab title="待付款">
        <div class="box">
          <template v-for="(item, index) in orderPend" :key="index">
            <div class="orderInfos">
              <div class="checkDate">预定时间：{{ item.checkInDate }} {{ item.checkInLatestTime }}</div>
              <div class="content">
                <div class="contentImg">
                  <img alt=""
                       :src="item.unitPicture">
                </div>
                <div class="contentInfo">
                  <div class="hotelName">{{ item.hotelName }}</div>
                  <div class="unitName">{{ item.unitName.slice(0, 20) }}</div>
                  <div class="price">¥ {{ item.prepayAmount }}</div>
                </div>
                <div class="rightTop">{{ item.orderStatusDesc }}</div>
              </div>
              <div class="infoBottom">
                <div class="orderNumber">订单号：{{ item.orderNumber }}</div>
                <div class="total">合计：<span>¥ {{ item.prepayAmount }}</span></div>
              </div>
              <div class="payment">
                <div class="orderDetails same">订单详情</div>
                <div class="CancelOrder same">取消订单</div>
                <div class="goPayment same">去付款</div>
              </div>
            </div>
          </template>
        </div>
      </van-tab>
      <van-tab title="最近订单">
        <div class="box">
          <template v-for="(item, index) in orderRecent" :key="index">
            <div class="orderInfos">
              <div class="checkDate">预定时间：{{ item.checkInDate }} {{ item.checkInLatestTime }}</div>
              <div class="content">
                <div class="contentImg">
                  <img alt=""
                       :src="item.unitPicture">
                </div>
                <div class="contentInfo">
                  <div class="hotelName">{{ item.hotelName }}</div>
                  <div class="unitName">{{ item.unitName.slice(0, 20) }}</div>
                  <div class="price">¥ {{ item.prepayAmount }}</div>
                </div>
                <div class="rightTop">{{ item.orderStatusDesc }}</div>
              </div>
              <div class="infoBottom">
                <div class="orderNumber">订单号：{{ item.orderNumber }}</div>
                <div class="total">合计：<span>¥ {{ item.prepayAmount }}</span></div>
              </div>
              <div class="payment">
                <div class="orderDetails same">订单详情</div>
                <div class="CancelOrder same">取消订单</div>
                <div class="goPayment same">去付款</div>
              </div>
            </div>
          </template>
        </div>
      </van-tab>

      <van-tab title="待评价"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
defineProps({
  orderAll: {
    type: Array,
    default: () => []
  },
  orderPend: {
    type: Array,
    default: () => []
  },
  orderRecent: {
    type: Array,
    default: () => []
  }
})

</script>

<style lang="less" scoped>
.box {
  height: auto;
  background-color: #f1f0f0;
  padding-bottom: 8vh;
}

.orderInfos {
  width: 90vw;
  height: auto;
  padding: 12px;
  margin: 10px auto;
  border-radius: 4px;
  background-color: #ffffff;
  //box-shadow: 0 0 10px 10px #ecebeb;

  .checkDate {
    color: #706f6f;
  }

  .content {
    display: flex;
    align-items: center;
    margin: 5px auto 8px;
    padding-bottom: 8px;
    border-bottom: 1px dashed #999999;

    .contentImg img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      border-radius: 10px;
    }

    .contentInfo {
      margin: 10px;
      max-width: 42vw;


      .hotelName {
        font-size: 16px;
      }

      .unitName {
        color: #737171;
        margin: 5px auto 16px;
      }

      .price {
        color: #ff6400;
        font-size: 16px;
      }


    }

    .rightTop {
      margin-bottom: auto;
      padding: 6px;
      background-color: #f5975b;
      color: #ffffff;
      border-radius: 0 0 12px 12px;
    }
  }

  .infoBottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 18px;

    .total {
      height: 18px;
      line-height: 18px;
    }

    .total span {
      color: #ff6400;
      font-size: 18px;
      vertical-align: top;

    }
  }

  .payment {
    display: flex;
    text-align: center;
    justify-content: flex-end;


    .same {
      padding: 5px 8px;
      min-width: 60px;
      border-radius: 16px;
      border: 1px solid rgb(164, 165, 166);
      margin-left: 8px;
    }

    .goPayment {
      color: #ff8a38;
      border: 1px solid #ff8a38;
    }
  }

}
</style>
