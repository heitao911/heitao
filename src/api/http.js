import axios from 'axios'
import NProgress from 'nprogress'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'
// axios.defaults.timeout = 10 * 1000 // 全局设置10s
const instance = axios.create({
  baseURL: '/',
  timeout: 20000
})

axios.interceptors.request.use((config) => {
  console.log(config)
  return config
}, (err) => {
  console.log(err)
  return err
})
//  response 错误统一处理
axios.interceptors.response.use((res) => {
  if (res.data.type === 'TIPS' || res.data.type === 'ALERT') {
    ElMessage({ type: 'error', message: res.data.message })
    return res
  } else if (res.data.status === 200) {
    return res.data
  }
  return res
}, (err) => {
  console.log('接口访问失败')
  return err
})

export function get (url, params) {
  return new Promise((resolve, reject) => {
    NProgress.start()
    instance.get(url, { params }).then((res) => {
      NProgress.done()
      resolve(res.data)
    }).catch((err) => {
      NProgress.done()
      reject(err.data)
    })
  })
}
export function post (url, params) {
  return new Promise((resolve, reject) => {
    NProgress.start()
    instance.post(url, JSON.stringify(params)).then((res) => {
      NProgress.done()
      resolve(res.data)
    }).catch((err) => {
      NProgress.done()
      reject(err.data)
    })
  })
}
export function upload (url, file) {
  return new Promise((resolve, reject) => {
    NProgress.start()
    instance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' }
    }).then((res) => {
      NProgress.done()
      resolve(res.data)
    }).catch((err) => {
      NProgress.done()
      reject(err.data)
    })
  })
}
const ajax = {
  post,
  get,
  axios
}
export default ajax
