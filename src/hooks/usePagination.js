export const useHandlePages = (proxy) => {
  const pageData = reactive({
    currentPage: 1, // 分页当前第几页
    recordCount: 0, // 数据总数
    pageSize: 5, // 每页的数据量
    pageCount: 1, /// 总页数
    stateFalg: true
  })

  // 解决在后面页的时候切换分页条数，触发两次请求
  const handleSizeChange = (val) => {
    pageData.pageSize = val
    const pageMax = Math.ceil(pageData.pageCount / val)
    if (pageData.currentPage > pageMax) {
      pageData.stateFalg = false
      pageData.currentPage = pageMax
    } else {
      pageData.stateFalg = true
    }
    proxy.requestData()
  }

  const handlePageChange = (val) => {
    console.log(proxy)
    pageData.currentPage = val
    if (!pageData.stateFalg) {
      pageData.stateFalg = true
    } else {
      proxy.requestData()
    }
  }

  watch(() => pageData.recordCount, (val) => {
    if (!val) return
    if (pageData.currentPage > Math.ceil(val / pageData.pageSize)) {
      pageData.currentPage = Math.ceil(val / pageData.pageSize)
      proxy.requestData()
    }
  }, {
    immediate: true
  })
  return {
    pageData,
    handleSizeChange,
    handlePageChange
  }
}
