import axios from 'axios'
import { ElMessage } from 'element-plus'

const config = {
  timeout: 60 * 1000 * 2,
  withCredentials: true,
  baseURL: '/',
}

const _axios = axios.create(config)

_axios.interceptors.request.use(
  // loading
  async config => {
    config.headers = {
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers':
        'Authorization,Origin, X-Requested-With, Content-Type, Accept',
      // "Access-Control-Request-Headers":"x-requested-with",
      'Access-Control-Allow-Origin': '*',
      // "Content-Type": "application/json;charset=UTF-8",
      'Access-Control-Allow-Methods': '*',
    }

    // 如果存在token 就携带token
    const token = window.localStorage.getItem('accessToken')
    if (token) {
      config.headers.common.Authorization = token
    }
    return config
  },
  async error => {
    ElMessage({
      type:'error',
      message:'请求失败！',
      duration:3000,
    })
    return Promise.reject(error)
  },
)

_axios.interceptors.response.use(
  response => {
    const res = response.data

    if (response.status !== 200) {
      ElMessage({
        type:'error',
        message:res.message || 'Error',
        duration:3000,
      })
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return Promise.resolve(res)
    }
  },
  error => {
    loading.close()
    ElMessage({
      type:'error',
      message:'请求失败！',
      duration:3000,
    })
    return Promise.reject(error)
  },
)

export default _axios
