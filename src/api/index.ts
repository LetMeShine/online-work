import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

axios.defaults.baseURL = 'http://47.96.117.121:7002'

axios.interceptors.request.use((config: AxiosRequestConfig) => {
    return config
})

axios.interceptors.response.use((response: AxiosResponse) => {
    return response
}, err => {
    return Promise.reject(err)
})

export default axios