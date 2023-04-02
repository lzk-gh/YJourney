import { defineStore } from 'pinia'
import { getFavorAll, getFavorHistory } from '@/services'

const useFavorStore = defineStore('favor', {
  state: () => ({
    allFavor: {},
    historyFavor: {}
  }),

  actions: {
    async fetchFavorAllData() {
      const res = await getFavorAll()
      this.allFavor = res.data
    },

    async fetchFavorHistoryData() {
      const res = await getFavorHistory()
      this.historyFavor = res.data
    }
  }
})

export default useFavorStore
