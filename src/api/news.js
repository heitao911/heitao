import { get, post } from '@/api/http'
import { setUrlParams } from '@/utils/tools'

// 新闻banner（location  0：新闻banner1， 1：新闻banner2）
export const apiGetNewsBanner = async (params) => {
  const url = 'https://www.huidu.io/api/content/banner/list?location=' + params.location
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 新闻列表
export const apiGetHomeNewsList = async (params) => {
  const url = 'https://www.huidu.io/api/content/list?page=1&limit=24&categoryId=0' // 首页新闻列表-最新
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 新闻分类
export const apiGetNewsCategory = async (params) => {
  const url = 'https://www.huidu.io/api/content/category/list'
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 根据分类查列表 categoryId  0:最新  2：头条 ...
export const apiGetNewsList = async (params) => {
  // https://www.huidu.io/api/content/list?page=1&limit=24&categoryId=0  // 新闻列表-最新
  const paramsStr = setUrlParams(params)
  const url = 'https://www.huidu.io/api/content/list?' + paramsStr
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`)
}
// 热门精选（type  0： 列表页精选  1：详情页精选）
export const apiGetHotspotContent = async (params) => {
  const url = 'https://www.huidu.io/api/content/hotspotContent?type=' + params.type
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
// 新闻详情
export const apiGetContentDetail = async (params) => {
  const url = `https://www.huidu.io/api/content/contentDetail?cId=${params.id}`
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`)
}
