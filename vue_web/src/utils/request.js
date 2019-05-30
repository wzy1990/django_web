import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://127.0.0.1:8000/', // api的base_url
  timeout: 15 * 60 * 1000, // 请求超时时间
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded' // 修改请求头
  }
})

// request拦截器
service.interceptors.request.use(config => {
  if (config.data) {
    config.headers['Content-Type'] = '' //
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    /**
     * status为非100是抛错 可结合自己业务进行修改
     */
    return Promise.resolve(response)
  },
  error => { // 服务器异常，错误
    console.log('服务器异常：' + error.message)
    return Promise.reject(error)
  }
)

export default service
