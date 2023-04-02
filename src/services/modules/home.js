import hyRequest from '@/services/request/index'

export function getHomeHotSuggests() {
  return hyRequest.get({
    url: '/home/hotSuggests'
  })
}

export function getHomeCateGories() {
  return hyRequest.get({
    url: '/home/categories'
  })
}

export function getHomeHouseList(currentPage) {
  return hyRequest.get({
    url: '/home/houselist',
    params: {
      page: currentPage
    }
  })
}