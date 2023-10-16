// https://www.huidu.io/api/content/list?page=1&limit=4&categoryId=21
import http from '@/api/http'

export const apiGetContent = async () => {
  http.get('https://www.huidu.io/api/content/list?page=1&limit=4&categoryId=21&callback=fetchUser').then(res => {
    if (res) {
      console.log(res)
      return res
    }
  })
}

export const apiGet = async (url) => {
  http.get(url).then(res => {
    if (res) {
      console.log(res)
      return res
    }
  })
}
