import { get, post } from '@/api/http'
export * from './news.js'
export * from './lottery.js'

// 获取IP所在国家地区
export const getIpCountry = async () => {
  return new Promise((resolve, reject) => {
    get('http://api.ipify.org/').then(res => {
      if (res) {
        return res
      }
    }).then((ip) => {
      // console.log(ip)
      get(`http://ip-api.com/json/${ip}?lang=zh-CN`).then(res => {
        // console.log(res)
        if (res.status === 'success') {
          resolve(res.countryCode)
        }
      }).catch((err) => {
        reject(new Error(err))
      })
    }).catch((err) => {
      console.log(err)
      reject(new Error(err))
    })
  })
}
