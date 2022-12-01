// 组件类型校验，否则注册会一直报错，同时需要在根目录下添加components.d.ts文件
import type { Component } from 'vue'
// 轮播图组件
import Banner from './Banner.vue'

// 重写组件约束接口
interface IComponents {
    [propName: string]: Component
}

const components: IComponents = {
    Banner
}
export default components