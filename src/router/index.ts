import routerData from '@/utils/routerData'
// vue-router 4.0以上
import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '@/components/home/container/index.vue'

const routes = [
    {
        path: '/',
        redirect: '/home',
        // name: 'Home',
        // component: Home
    },
    {
        path: '/home',
        // redirect: '/home',
        name: 'Home',
        component: () => import('@/components/home/container/index.vue')
    },
    {
        path: '/work-step',
        name: 'WorkStep',
        component: () => import('@/components/work-step/container/index.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/components/login/container/index.vue')
    },
]
routerData.forEach(item => {
    // 此处push进去的格式需要和原先的字段（前面静态的路由）保持一致
    routes.push({
        path: item.path,
        // redirect: item.path,
        name: item.name,
        component: () => import('@/components/' + item.component + '/container/index.vue')
    })
});
const router = createRouter({
    history: createWebHashHistory(),
    routes
})
export default router;
