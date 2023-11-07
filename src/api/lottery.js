import { get, post } from '@/api/http'
import { setUrlParams } from '@/utils/tools'

//
export const apiGetLotteryHistoryList = async (params) => {
  // 'https://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&systemType=PC
  // name=ssq&issueCount=30&issueStart=&issueEnd=&dayStart=&dayEnd=&pageNo=1&pageSize=30&week=&systemType=PC'
  // https://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&systemType=PC
  // &issueStart=&issueEnd=&dayStart=&dayEnd=&week=&pageNo=1&pageSize=30&issueCount=30
  const paramsStr = setUrlParams(params)
  const url = 'https://www.cwl.gov.cn/cwl_admin/front/cwlkj/search/kjxx/findDrawNotice?name=ssq&systemType=PC&issueStart=&issueEnd=&dayStart=&dayEnd=&week=&' + paramsStr
  console.log(url)
  // url = 'http://192.168.10.169/api/basis-miscellany/purchase/list?currentPage=1&pageSize=10&sid=BG_PC-~-167b032d-a21c-4fae-9971-1c2e2ae722e2'
  return get(`/api?key=hiudu&url=${encodeURIComponent(url)}`, params)
}
