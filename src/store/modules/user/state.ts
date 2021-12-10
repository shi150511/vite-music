/*
 * @Author: HaoQi Shi
 * @Date: 2021-12-09 17:01:24
 * @LastEditors: HaoQi Shi
 * @LastEditTime: 2021-12-09 17:09:01
 * @Description: 
 * @FilePath: \vite-demo\src\store\modules\user\state.ts
 */
import type { IUser } from "~/types";
export interface IUserState {
    user: IUser
}

const state: IUserState = {
    user: {} as IUser
}

export default state