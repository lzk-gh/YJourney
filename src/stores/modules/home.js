import { defineStore } from "pinia"
import { getHomeHotSuggests, getHomeCateGories, getHomeHouseList} from '@/services'

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],

    currentPage: 1,
    houseList: []
  }),

  actions: {
    async fetchHotSuggestsData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },

    async fetchCateGoriesData() {
      const res = await getHomeCateGories()
      this.categories = res.data
    },

    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore
