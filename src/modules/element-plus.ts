/*
 * @Author: HaoQi Shi
 * @Date: 2021-12-09 14:58:25
 * @LastEditors: HaoQi Shi
 * @LastEditTime: 2021-12-09 17:34:48
 * @Description: export element-plus
 * @FilePath: \vite-demo\src\modules\element-plus.ts
 */
import type { App } from "vue";
import "element-plus/theme-chalk/base.css";

export const install = (app: App) => {
  app.config.globalProperties.$ELEMENT = { size: "mini" };
};

