/*
 * @Author: HaoQi Shi
 * @Date: 2021-12-09 15:26:21
 * @LastEditors: HaoQi Shi
 * @LastEditTime: 2021-12-09 17:39:52
 * @Description: router
 * @FilePath: \vite-demo\src\router\index.ts
 */
import type { RouteRecordRaw } from 'vue-router';
import { createRouter, createWebHashHistory } from 'vue-router';
import LayoutDefault from '~/layouts/default.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/discovery',
        component: LayoutDefault,
        children: [
            {
                path: '/discovery',
                component: () => import('../pages/discovery/index.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory('/'),
    routes
})

export default router