import http from '@/api/http'
// 获取IP所在国家地区
export const getIpCountry = async () => {
  return new Promise((resolve, reject) => {
    http.get('http://api.ipify.org/').then(res => {
      if (res) {
        return res
      }
    }).then((ip) => {
      console.log(ip)
      http.get(`http://ip-api.com/json/${ip}?lang=zh-CN`).then(res => {
        console.log(res)
        if (res.status === 'success') {
          resolve(res.countryCode)
        }
      })
    }).catch((err) => {
      console.log(err)
      reject(new Error(err))
    })
  })
}
/* import.meta.url 是一个 ESM 的原生功能，会暴露当前模块的 URL。
将它与原生的 URL 构造器 组合使用，在一个 JavaScript 模块中，通过相对路径我们就能得到一个被完整解析的静态资源 URL： */
export const getImageUrl = (dir, name) => {
  return new URL(`../assets/images/${dir}/${name}`, import.meta.url).href
}
