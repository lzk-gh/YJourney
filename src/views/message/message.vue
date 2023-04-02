<template>
  <div class="message">
    <div v-if="select">
      <div class="back" @click="toHome">
        <van-icon name="home-o"/>
      </div>
      <div class="userInfo">
        <div class="userLogo">
          <img src="@/assets/img/message/userLogo.jpg" alt="">
          <span>LuckyOne</span>
        </div>
      </div>
      <div class="column" @click="toLogin">
        <van-icon name="revoke" />
        <span>退出登录</span>
      </div>
    </div>
    <div v-else class="loading">
      <van-loading type="spinner" size="24px" />
    </div>
  </div>

</template>

<script setup>
import { useRouter } from 'vue-router/dist/vue-router'
import { ref } from 'vue'
let select = ref(true)
const router = useRouter()

const toHome = () => {
  select.value = false
  // router.push("/login")
  setTimeout(() => {
    router.push("/home")
  }, 800)
}

const toLogin = () => {
  select.value = false
  // router.push("/login")
  setTimeout(() => {
    router.push("/login")
  }, 1000)
}
</script>

<style lang="less" scoped>
.message {
  position: relative;
  width: 100vw;
  height: 80vh;
  padding-top: 20vh;
  background-color: #0b1127;
  overflow: hidden;

  .back {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 34px;
    height: 34px;
    line-height: 34px;
    text-align: center;
    background-color: white;
    z-index: 999;
    border-radius: 25px;
    font-size: 20px;
  }

  .userInfo {

    .userLogo {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        box-shadow: 0 0 10px #ffffff;
      }

      span {
        font-size: 16px;
        color: #ffffff;
        margin: 25px auto;
      }
    }
  }

  .column {
    width: 90vw;
    height: 40px;
    line-height: 40px;
    text-align: center;
    margin: 50% auto;
    background-color: white;
    z-index: 999;
    border-radius: 25px;
  }

  .loading {
    position: absolute;
    top: 50%;
    left: 180px;
  }
}
</style>
