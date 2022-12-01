// 用来处理组件引入报错的问题和添加组件提示
import cpmts from '@/common'
declare module '@vue/runtime-core' {
    export interface GlobalComponents {
        cpmts: typeof cpmts
    }
}