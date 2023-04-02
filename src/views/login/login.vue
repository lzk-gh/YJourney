<template>
  <div class="login-container">
    <div class="login-back">
      <img src="@/assets/img/back1.png" alt="">
    </div>
    <div class="login-wapper">
      <div class="company-title">
        <div class="logo">
          <img src="@/assets/img/ico.png" alt="">
        </div>
        <div class="title">青春旅途</div>
      </div>
      <van-form class="login-form">
        <van-cell-group inset>
          <van-field
              label-width="3em"
              v-model="inputValue.username"
              name="账号"
              label="账号"
              placeholder="用户名"
              :rules="inputRule.userName"
          />
          <van-field
              label-width="3em"
              v-model="inputValue.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="inputRule.userPassword"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit" @click="onSubmit">
            <span v-if="loading">登录</span>
            <van-loading v-else type="spinner" size="24px" />
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useRouter } from 'vue-router/dist/vue-router'

// 自定义校验规则
const inputRule = reactive({
  userName : [
    { required: true, message: '填admin即可' }
  ],
  userPassword : [
    { required: true, message: '填123456即可' }
  ]
})

// 账号密码
const inputValue = reactive({
  username: 'admin',
  password: '123456'
})

let code = '200'
let loading = ref(true)
const router = useRouter()
// 登陆成功后默认跳转的路由
const onSubmit = () => {
  if (inputValue.username === 'admin' && inputValue.password === '123456') {
    // sessionStorage.setItem('loginInfo',JSON.stringify(res.data.result));
    console.log('认证成功1')
    code = '200'
    console.log(code)
    loading.value = false
    // router.push("/login")
    setTimeout(() => {
      router.push("/home")
    }, 2000)
  } else {
    code = '404'
    console.log('不行')
    console.log(code)
  }
}

// defineExpose({
//   code
// })

</script>

<style lang="less" scoped>
.login-container {
  display: flex;
  align-items: center;
  //justify-content: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  //background: linear-gradient(to right, #39399f, rgba(225, 199, 179, 0.95));

  .login-back {
    position: relative;

    img {
      width: 100%;
      height: 100%;
    }
  }

  .login-wapper {
    //position: absolute;
    //width: 44vw;
    min-height: 100px;
    //margin: 50% auto 0;
    //background-color: #f7f7f8;
    //box-shadow: -2px 5px 10px #d2d0d0;
    z-index: 999;

    .company-title {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      margin-bottom: 20px;


      .logo {
        width: 25px;
        height: 25px;
        margin-right: 10px;
        img {
          width: 100%;
        }
      }

      .title {
        font-size: 20px;
      }
    }

    .login-form {

    }
  }
}
</style>
