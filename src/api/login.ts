import { http } from '../request'

// 发送邮箱验证码
export function sendCode(data:any) {
  return http.post('/validation_codes', data)
}

// 登录
export function login(data: any) {
  return http.post('/session', data)
}

// 获取当前用户信息
export function getUserInfo() {
  return http.get('/me')
}
