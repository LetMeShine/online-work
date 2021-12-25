// 首页模块的数据状态
export interface IHomeSate {
    swiper: ISwiper[], // 轮播
    nav: INav[],
    // lists:
}

export interface ISwiper {
    url: string
}

export interface INav {
    title: string,
    path: string,
    icon: string
}

export interface ISwiper {
    url: string
}
// 接口返回的数据信息进行约束 {data:[],code:200}
export interface IResponse {
    data: INav[] | ISwiper[],
    code?: number
}