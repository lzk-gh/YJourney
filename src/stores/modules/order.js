import { defineStore } from 'pinia'
import { getOrderAll, getOrderPend, getOrderRecent } from "@/services"

const useOrderStore = defineStore("order", {
  state: () => ({
    allOrder: {},
    pendOrder: {},
    recentOrder: {}
  }),

  actions: {
    async fetchOrderAllData() {
      const res = await getOrderAll()
      this.allOrder = res.data
    },

    async fetchOrderPendData() {
      const res = await getOrderPend()
      this.pendOrder = res.data
    },

    async fetchOrderRecentData() {
      const res = await getOrderRecent()
      this.recentOrder = res.data
    }
  }
})

export default useOrderStore
