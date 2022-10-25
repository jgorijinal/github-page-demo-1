import { http } from '../request'


// 创建项目
export function createItem(data:any) {
  return http.post('/items',data )
}

// 
export function getItems(query: any) { 
  return http.get('/items', query)
}