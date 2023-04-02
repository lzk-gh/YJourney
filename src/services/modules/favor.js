import hyRequest from '../request'

export function getFavorAll() {
  return hyRequest.get({
    url: `/favor/list`
  })
}

export function getFavorHistory() {
  return hyRequest.get({
    url: `/favor/history`
  })
}
