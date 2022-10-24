import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// https://vitejs.dev/config/
export default defineConfig({
  // base:'/github-page-demo-1/dist/',
  plugins: [vue(),svgstore(), Components({
    resolvers: [VantResolver()],
  }),],
  server:{
    proxy: {
      '/api/v1': {
        target: 'http://121.196.236.94:8080/',
        changeOrigin:true
      }
    }
  }
})
