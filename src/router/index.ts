// import routerData from '@/utils/routerData'
// vue-router 4.0以上
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
        name: 'Home',
        component: Home
    }
]
// routerData.forEach(item => {
// routes.push({
// path: item.path,
// name: item.name,
// component: () => import('../views/' + item.component)
// })
// });
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;