import { createApp, } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from '@/store'
import './assets/font/iconfont.css'
// import cpmts from '@/common'

const app = createApp(App);
app.use(router).use(store).mount('#app')

// 注册全局组件
// Object.keys(cpmts).forEach(key => {
//     app.component(key, cpmts[key])
// })
