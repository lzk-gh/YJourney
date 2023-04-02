import dayjs from "dayjs"

export function formatMonthDate(date, formatStr = "MM月DD日") {
  return dayjs(date).format(formatStr)
}

export function getStayCount(startDay, endDay) {
  return dayjs(endDay).diff(startDay, "day")
}
