import { get, post } from '@/api/http'

export const apiGetNewsBanner = async (params) => {
  const url = 'https://www.huidu.io/api/content/banner/list?location=0' // banner1
  // const url = 'https://www.huidu.io/api/content/banner/list?location=1' // banner2
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 新闻分类
export const apiGetNewsCategory = async (params) => {
  const url = 'https://www.huidu.io/api/content/category/list'
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 新闻列表
export const apiGetNewsList = async (params) => {
  // https://www.huidu.io/api/content/list?page=1&limit=24&categoryId=0  // 首页新闻列表-最新
  // https://www.huidu.io/api/content/list?page=1&limit=16&categoryId=2  // 头条
  const url = 'https://www.huidu.io/api/content/list?page=1&limit=4&categoryId=21'
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 热门精选
export const apiGetHotspotContent = async (params) => {
  const url = 'https://www.huidu.io/api/content/hotspotContent?type=0' // 列表页精选
  // const url = 'https://www.huidu.io/api/content/hotspotContent?type=1' // 详情页精选
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 新闻详情
export const apiGetContentDetail = async (params) => {
  const url = `https://www.huidu.io/api/content/contentDetail?cId=${params.id}`
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`)
}
