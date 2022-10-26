import { http } from '../request'


// 创建项目
export function createItem(data:any) {
  return http.post('/items',data )
}

// 账单总列表 
export function getItems(query: any) { 
  return http.get('/items', query)
}


// 根据 类型  获取账单列表

export function getItemsByGroup(query:any) {
  return http.get('/items/summary', query)
}
