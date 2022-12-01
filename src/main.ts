import { createApp, } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/store'
import './assets/font/iconfont.css'
import cpmts from '@/common'

// UI组件引入
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 图标引入
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App);
// 注册全局公共组件组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
for (const key in (cpmts)) {
    app.component(key, cpmts[key])
}
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router).use(store).mount('#app')

