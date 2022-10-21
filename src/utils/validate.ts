export interface FData {
  [k: string]: string | number | undefined | null
}
// Rules 的 key 必须是 FData的属性值, 所以使用泛型
export interface Rule<T>  {
  key: keyof T
  message: string
  required?: boolean
  pattern?: RegExp
} 

export type Rules<T> = Rule<T>[]

export const validate = <T extends FData>(formData: T, rules: Rules<T>) => {
  type Errors = {
    [k in keyof T]?:string[]
  }
  const errors:Errors = {}

  // 遍历 rules , 分析出错情况
  rules.forEach(rule => {
    const { key, message, pattern, required } = rule
    const value = formData[key]
    // 校验
    if (required === true && !value) {
      errors[key] = errors[key] ?? []
          errors[key]?.push(message)
    } else if (pattern && value && !pattern.test(value.toString())) {
      errors[key] = errors[key] ?? []
      errors[key]?.push(message)
    }
  })
  return errors
}