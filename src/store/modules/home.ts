import { IHomeSate, INav, IResponse } from "@/utils/dataType"
import { IGlobalState } from '..'
import { Module } from "vuex"
import { getNav } from '@/api/http'
import * as Type from '../action-type'
const state: IHomeSate = {
    swiper: [],
    nav: []
}

const home: Module<IHomeSate, IGlobalState> = {
    namespaced: true,
    state,
    mutations: {
        [Type.SET_NAV](state, payload: INav[]) {// 对接口返回的数据进行约束
            state.nav = payload
        }
    },
    actions: {
        async [Type.SET_NAV]({ commit }) {
            const nav = await getNav<IResponse>();
            commit(Type.SET_NAV, nav.data)
        }
    }
}

export default home