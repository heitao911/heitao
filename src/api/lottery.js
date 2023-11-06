import { get, post } from '@/api/http'

//
export const apiGetLotteryHistoryList = async (params) => {
  const url = 'https://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&issueCount=30&issueStart=&issueEnd=&dayStart=&dayEnd=&pageNo=1&pageSize=30&week=&systemType=P'
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
