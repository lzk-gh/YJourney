import {onMounted, onUnmounted, ref} from "vue";
import {throttle} from "underscore";

export default function useScroll(elRef) {
  let el = window
  // 是否到达底部
  const isReachBottom = ref(false)
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  // 节流
  const scrollListenerHandler = throttle(() => {
    // console.log("正在进行滚动");
    // 既可以监听window的滚动，也可以监听元素的滚动
    if (el === window) {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
    } else {
      clientHeight.value = el.clientHeight
      scrollTop.value = el.scrollTop

      scrollHeight.value = el.scrollHeight
      // console.log(clientHeight.value, scrollTop.value, scrollHeight.value)
    }
    if (clientHeight.value + scrollTop.value + 1 >= scrollHeight.value) {
      console.log("滚动到底部了")
      isReachBottom.value = true
    }
  }, 100)

  // 进入页面
  onMounted(() => {
    if (elRef) el = elRef.value
    el.addEventListener("scroll", scrollListenerHandler)
  })

  // 离开页面
  onUnmounted(() => {
    el.addEventListener("scroll", scrollListenerHandler)
  })

  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}
