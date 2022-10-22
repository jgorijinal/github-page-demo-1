import dayjs from 'dayjs'

// 上个月
export function getLastMonth() {
  return {
    startDate: dayjs().subtract(1, 'month').startOf('month').format('YYYY-MM-DD'),
    endDate:dayjs().subtract(1, 'month').endOf('month').format('YYYY-MM-DD')
  }
}

// 本月
export function getThisMonth(){
  return {
    startDate: dayjs().startOf('month').format('YYYY-MM-DD'),
    endDate:dayjs().endOf('month').format('YYYY-MM-DD'),
  }
}
// 今年
export function getThisYear(){
  return {
    startDate: dayjs().startOf('year').format('YYYY-MM-DD'),
    endDate:dayjs().endOf('year').format('YYYY-MM-DD'),
  }
}