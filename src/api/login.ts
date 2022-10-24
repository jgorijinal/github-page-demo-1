import { http } from '../request'

// 发送邮箱验证码
export function sendCode(data:any) {
  return http.post('/validation_codes', data)
}