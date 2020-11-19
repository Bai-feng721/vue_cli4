import axios from 'axios'
// import Adapter from 'axios-mock-adapter'
import {get} from 'lodash'
import {getToken} from '@/plugins/js-cookie'
import {errorLog, errorCreate} from './tools'
// import router from '@/router'


/**
 * @description 创建请求实例
 */
function createService() {
    // 创建一个 axios 实例
    const service = axios.create()
    // 请求拦截
    service.interceptors.request.use(
        config => config,
        error => {
            // 发送失败
            console.log(error)
            return Promise.reject(error)
        }
    )
    // 响应拦截
    service.interceptors.response.use(
        response => {
            // dataAxios 是 axios 返回数据中的 data
            const dataAxios = response.data
            // 这个状态码是和后端约定的
            const {code} = dataAxios
            // 根据 code 进行判断
            if (code === undefined) {
                // 如果没有 code 代表这不是项目后端开发的接口 比如可能是 D2Admin 请求最新版本
                return dataAxios
            } else {
                // 有 code 代表这是一个后端接口 可以进行进一步的判断
                switch (code) {
                    case 200:
                        // [ 示例 ] code === 0 代表没有错误
                        if (dataAxios.data) {
                            return dataAxios.data
                        } else {
                            return dataAxios
                        }
                    case 403:
                        router.push({ name: 'login' })
                        errorCreate("您登录过期或尚未登录")
                        break
                    default:
                        // 不是正确的 code
                        errorCreate(`${dataAxios.data}`)
                        serverError(dataAxios)
                        break
                }
            }
        },
        error => {
            const status = get(error, 'response.code')
            switch (status) {
                case 400:
                    error.message = '请求错误';
                    break
                case 401:
                    error.message = '未授权，请登录';
                    break
                case 403:
                    error.message = '拒绝访问';
                    break
                case 404:
                    error.message = `请求地址出错: ${error.response.config.url}`;
                    break
                case 408:
                    error.message = '请求超时';
                    break
                case 500:
                    error.message = '服务器内部错误';
                    error.message = serverError(error);
                    break
                case 501:
                    error.message = '服务未实现';
                    break
                case 502:
                    error.message = '网关错误';
                    break
                case 503:
                    error.message = '服务不可用';
                    break
                case 504:
                    error.message = '网关超时';
                    break
                case 505:
                    error.message = 'HTTP版本不受支持';
                    break
                default:
                    break
            }
            errorLog(error)
            return Promise.reject(error)
        }
    )
    return service
}

function serverError(error) {
    console.log('error', error)
}

/**
 * @description 创建请求方法
 * @param {Object} service axios 实例
 */
function createRequestFunction(service) {
    return function (config) {
        const token = getToken()
        const configDefault = {
            headers: {
                'x-token': token,
                'Content-Type': get(config, 'headers.Content-Type', 'application/json')
            },
            timeout: 30000,
            baseURL: process.env.VUE_APP_API,
            params:{},
            data: {}
        }
        return service(Object.assign(configDefault, config))
    }
}

// 用于真实网络请求的实例和请求方法
export const service = createService()
export const request = createRequestFunction(service)

// 用于模拟网络请求的实例和请求方法
// export const serviceForMock = createService()
// export const requestForMock = createRequestFunction(serviceForMock)

// 网络请求数据模拟工具
// export const mock = new Adapter(serviceForMock)
