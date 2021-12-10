/*
 * @Author: HaoQi Shi
 * @Date: 2021-12-09 15:26:27
 * @LastEditors: HaoQi Shi
 * @LastEditTime: 2021-12-09 17:36:31
 * @Description: store
 * @FilePath: \vite-demo\src\store\index.ts
 */
import { createStore, createLogger } from 'vuex';
import user from './modules/user/index'

const debug = import.meta.env.DEV

const store = createStore({
    modules: {
        user
    },
    plugins: debug ? [createLogger()] : []
})

export default store
