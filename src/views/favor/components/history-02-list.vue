<template>
  <div class="favorList">
    <template v-for="(itex, index) in favorHistory" :key="index">
      <!-- 各列表 -->
      <div class="favorEveryList">
        <!-- 轮播图 -->
        <van-swipe class="swipe-list" lazy-render>
          <van-swipe-item v-for="(itey, indey) in itex.pictureList.slice(0, 5)" :key="indey" class="item">
            <img :src="itey" alt="图片加载失败" class="mainImg" />
          </van-swipe-item>
        </van-swipe>
        <!-- 列表信息 -->
        <div class="favorInfos">
          <div class="infosTitle">{{ itex.unitName }}</div>
          <div v-for="(item, indem) in itex.unitSummeries" class="unitTitle">
            <span>{{ item.text }}</span>
            <span v-if="indem !== itex.unitSummeries.length - 1" class="dot">·</span>
          </div>
          <div class="bottom">
            <div class="btmLeft">
              <div v-for="iten in itex.houseTags" class="Preferential">
                {{ iten.text }}
              </div>
              <div class="price">
                <div class="priceLeft">
                  <span class="rmb">¥</span>
                  <span class="money">{{ itex.productPrice }}</span>
                </div>
                <span class="qi">起</span>
              </div>
            </div>
            <div class="btmRight">
              <img :src="itex.logoUrl" alt="">
            </div>
          </div>
        </div>
      </div>
    </template>
    <template>

    </template>
  </div>
</template>

<script setup>
defineProps({
  favorHistory: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="less" scoped>
.favorList {
  padding-top: 20px;

  .favorEveryList {
    width: 94vw;
    margin: 0 auto 20px;
    border-radius: 5px 5px 4px 4px;
    overflow: hidden;
    background-color: #fff;

    .mainImg {
      width: 100%;
      height: 30vh;
    }

    // 列表信息
    .favorInfos {
      padding: 12px 20px 20px;

      .infosTitle {
        margin-bottom: 8px;
        font-size: 15px;
        font-weight: 600;
        white-space: nowrap;
        text-indent: 0.6em;
        text-overflow: ellipsis;
        overflow: hidden;
        letter-spacing: 3px;
      }

      .unitTitle {
        display: table-cell;
        vertical-align: center;
        font-size: 12px;
        color: #656464;

        .dot {
          margin: 0 3px;
          font-weight: 800;
        }
      }

      .bottom {
        display: flex;
        justify-content: space-between;


        .btmLeft {
          .Preferential {
            display: inline-block;
            margin: 12px 5px 12px auto;
            padding: 4px;
            font-size: 5px;
            color: #ff0202;
            border: 1px solid #e36868;
          }

          .price {
            display: flex;

            .priceLeft {
              display: flex;
              align-items: center;
            }

            .rmb {
              color: #ff660c;

            }

            .money {
              font-size: 20px;
              font-weight: 600;
              color: #ff660c;
              margin: 0 2px;
            }

            .qi {
              color: #969696;
              font-size: 12px;
              padding-top: 6px;

            }
          }
        }

        .btmRight img {
          max-width: 46px;
          max-height: 46px;
          border-radius: 50%;
          margin-top: 25%;
        }
      }
    }
  }
}
</style>
