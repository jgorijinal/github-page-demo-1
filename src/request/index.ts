import axios, {AxiosInstance,AxiosRequestConfig,AxiosError } from 'axios'
type JSONValue = string | number | null | boolean | JSONValue[] | { [key: string]: JSONValue };

export default class Http {
  instance:AxiosInstance
  constructor(baseURL: string) {
    this.instance = axios.create({
      baseURL
    }) 
  }
  get<R = any>(url: string, query?: Record<string, string>,config?:AxiosRequestConfig) {
    return this.instance.request<R>({ ...config, url, params: query, method:'GET' })
  }
  post<R = any>(url: string, data?: Record<string, JSONValue>, config?: AxiosRequestConfig) { 
    return this.instance.request<R>({ ...config, url, data, method:'POST' })
  }
  patch<R = any>(url: string, data?: Record<string, JSONValue>, config?: AxiosRequestConfig) { 
    return this.instance.request<R>({ ...config, url, data, method:'PATCH' })
  }
  delete<R = any>(url: string, query?: Record<string, JSONValue>,config?:AxiosRequestConfig) {
    return this.instance.request<R>({ ...config, url, params: query, method:'DELETE' })
  }
}

export const http = new Http('/api/v1')

http.instance.interceptors.response.use((res) => {
  return res.data
}, (error:AxiosError) => {
  // 直接断言成 AxiosError 类型, 那就就介意愉快的使用代码提示
  if (error.response?.status === 429) {
    // 弹出错误提示
    console.log('请求过于频发, 请稍后再试')
  }
  // TODO: 提示对话框
  return Promise.reject(error)
})
