import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-nocheck
import { svgstore } from './src/vite_plugins/svgstore';
// https://vitejs.dev/config/
export default defineConfig({
  // base:'/github-page-demo-1/dist/',
  plugins: [vue(),svgstore(),]
})
