import { http }  from '../request'

// 获取标签
export function getTags(query:any) {
  return http.get('/tags',query )
}

// 创建标签
export function createTag(data:any) {
  return http.post('/tags', data)
}

// 获取标签信息
export function getTagInfo(id:string) {
  return http.get(`/tags/${id}`)
} 

// 修改标签
export function editTag(id:string , data:any) {
  return http.patch(`/tags/${id}`,data)
}

// 删除标签
export function deleteTag(id: string) {
  return http.delete(`/tags/${id}`)
}