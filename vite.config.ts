/*
 * @Author: HaoQi Shi
 * @Date: 2021-12-09 14:33:08
 * @LastEditors: HaoQi Shi
 * @LastEditTime: 2021-12-09 17:50:46
 * @Description: 
 * @FilePath: \vite-demo\vite.config.ts
 */
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import ElementPlus from 'unplugin-vue-components/vite'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue(),
    ElementPlus()
  ]
})
