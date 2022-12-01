import axios from '.'

export function getNav<T>() {
    // 对返回的数据进行约束
    // return axios.get<T>('/nav-data')
    return {
        data: [
            { title: '首页', path: '/home', icon: 'iconiconfontzhizuobiaozhun023101' },
            // { title: '订单', path: '/order', icon: 'icondingdan' },
            // { title: '发现', path: '/find', icon: 'iconfaxian1' },
            // { title: '地图', path: '/map', icon: 'iconwo1' }
        ],
        code: 200
    }
}