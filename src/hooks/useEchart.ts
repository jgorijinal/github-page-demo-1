import * as echarts from 'echarts'

export default function useEchart(el: HTMLDivElement) {
  // 初始化实例
  const echartInstance = echarts.init(el)
  
  const setOptions = (options: echarts.EChartsOption) => {
    echartInstance.setOption(options)
  }
  // 浏览器窗口大小变化时. 自动调整 echart 的大小
  window.addEventListener('resize', () => {
    echartInstance.resize()
  })
  // 可以让外部自己调用 调整echart 函数
  const updateSize = () => {
    echartInstance.resize()
  }
  return {
    echartInstance,
    setOptions,
    updateSize
  }
}