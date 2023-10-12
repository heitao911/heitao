import axios from 'axios'
import NProgress from 'nprogress'

axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8'

axios.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    return err
  }
)
//  response 错误统一处理
axios.interceptors.response.use(
  (res) => {
    if (res.data.type === 'TIPS' || res.data.type === 'ALERT') {
      ElMessage({ type: 'error', message: res.data.message })
      return res
    }
    return res
  },
  (err) => {
    console.log('接口访问失败')
    return err
  }
)

const http = {
  get(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  post(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, JSON.stringify(params))
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  upload(url, file) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .post(url, file, {
          headers: { 'Content-Type': 'multipart/form-data' }
        })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  },
  jsonp(url, params) {
    return new Promise((resolve, reject) => {
      NProgress.start()
      axios
        .get(url, { params })
        .then((res) => {
          NProgress.done()
          resolve(res.data)
        })
        .catch((err) => {
          NProgress.done()
          reject(err.data)
        })
    })
  }
}

export default http
