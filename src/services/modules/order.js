import hyRequest from "../request"

// 全部订单
export function getOrderAll() {
  return hyRequest.get({
    url: `/order/list?type=all`,
  })
}

// 未完成订单
export function getOrderPend() {
  return hyRequest.get({
    url: `/order/list?type=pend`
  })
}

// 最近订单
export function getOrderRecent() {
  return hyRequest.get({
    url: `/order/list?type=recent`
  })
}
