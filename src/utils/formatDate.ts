import dayjs from 'dayjs'

// 加载中文语言包
import 'dayjs/locale/zh-cn'

// 配置使用中文语言包
dayjs.locale('zh-cn')

const DATE_TIME_FORMAT = "YYYY-MM-DD"

export default function formateDate(date:Date,format:string = DATE_TIME_FORMAT) {
  return dayjs(date).format(format)
}

