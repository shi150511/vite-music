/*
 * @Author: HaoQi Shi
 * @Date: 2021-12-09 14:33:08
 * @LastEditors: HaoQi Shi
 * @LastEditTime: 2021-12-09 18:02:05
 * @Description: main.ts
 * @FilePath: \vite-demo\src\main.ts
 */
import { createApp } from 'vue'
import router from './router/index'
import store from './store/index'
import App from './App.vue'


const app = createApp(App)
app.use(router).use(store).mount('#app')

Object.values(import.meta.globEager("./modules/*.ts")).map(i => i.install?.(app))

