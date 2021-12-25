import { createStore } from 'vuex'
import home from './modules/home'
import { IHomeSate } from '@/utils/dataType'
// 1.模块分类
// 2.各模块的数据
// 3.Vuex状态管理

// 首页模块会包含哪些数据信息 （底部导航，轮播，列表）
// 全局数据状态 对里面的模块进行约束
export interface IGlobalState {
    home: IHomeSate
}

export default createStore<IGlobalState>({
    // state: {},
    mutations: {},
    actions: {},
    modules: {
        home
    }
})