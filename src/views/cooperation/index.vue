<template>
  <article class="cooperation-article">
    <header>
      <div class="header-main">
        <ul class="sort-list">
          <li class="sort-item" :class="{all: i===0,active: state.activeTab === i+''}" v-for="(e, i) in state.sortList"
            :key="i" :data-index="i" @click="selectFn($event, e)">
            {{ e.name }}</li>
        </ul>
        <ul class="sort-second-list" v-if="state.sortSecondList.length">
          <li v-if="state.sortSecondList.length" class="sort-item" :class="{active: state.activeTab2 === '0'}"
            data-index="0" @click="selecSecondtFn($event, 'all')">全部</li>
          <li class="sort-item" :class="{active: state.activeTab2 === i+1+''}" v-for="(e, i) in state.sortSecondList"
            :key="i" :data-index="i+1" @click="selecSecondtFn($event, e)">{{ e }}</li>
        </ul>
      </div>
    </header>
    <section class="content">
      <article class="left">
        <section class="table">
          <template v-if="state.showList.length">
            <div class="table-item" v-for="(item ,i) in state.showList" :key="i" @click="toDetail(item)">
              <img v-if="item.isTop" class="zhiding" src="@/assets/images/img/zhiding.png" alt="">
              <div class="title">{{ item.title }}</div>
              <div class="flex jsb des-wrap">
                <div class="table-sort">
                  <img class="offer-img" src="@/assets/images/img/offer.png" alt="">
                  {{ item.typeStr }}-{{ item.businessSubdivides[item.businessSubdivide] }}
                  <div class="vertical-divider"></div>
                  <span v-for="(e, i) in getIndustry(item)" :key="i">{{ e }}</span>
                  <div class="vertical-divider"></div>
                  <span v-for="(e, i) in getRegion(item)" :key="i">{{ e }}</span>
                </div>
                <div class="danbao">
                  <img v-if="item.gurantee" src="@/assets/images/img/danbao.png" alt="担保交易">
                  <img v-if="item.firmVerify" src="@/assets/images/img/company-cn.png" alt="企业担保">
                </div>
              </div>
              <div class="divider"></div>
              <div class="flex jsb">
                <div class="user-wrap gray">
                  <div class="avatar-wrap">
                    <el-avatar class="avatar" :size="28" :src="item.headUrl" fit="contain" />
                    <img v-if="item.vipLogo" class="vipLogo" :src="item.vipLogo" alt="">
                  </div>
                  <span class="userName">{{ item.userName }}</span> · <span class="position">{{ item.position }}</span>
                  <span class="companyName" v-if="item.firmName">{{ item.firmName }}
                    <img src="@/assets/images/img/company.png" alt="企业担保">
                  </span>
                </div>
                <div class="gray">{{ getTimeAgo(item.updateTime + '000') }}</div>
              </div>
            </div>
          </template>
          <el-empty class="empty" v-else description="暂无数据" />
        </section>
        <footer class="pagination-wrap">
          <el-pagination background layout="prev,pager,next,total" @current-change="handlePageChange"
            @size-change="handleSizeChange" :current-page="pageData.currentPage" :page-size="pageData.pageSize"
            :total="pageData.recordCount" />
        </footer>
      </article>
      <aside class="right">
        <a :href="item.link" target="_blank" class="link" v-for="(item, i) in state.adList" :key="i">
          <div class="img-cover">
            <img :src="getImageUrl('channel', item.img)" class="el-image__inner" alt="广告" title="广告" />
          </div>
          <div class="span">广告</div>
        </a>
      </aside>
    </section>

  </article>
</template>
<script setup name="Cooperation">
import { useChannelStore } from '@/stores/channel'
import { useHandlePages } from '@/hooks/usePagination'
import { getTimeAgo } from '@/utils/tools'

const route = useRoute()
const router = useRouter()
// const { proxy } = getCurrentInstance()
const channel = useChannelStore()
const state = reactive({
  adList: channel.adList,
  sortList: channel.sortList,
  sortSecondList: [],
  activeTab: '0',
  activeTab2: '0',
  allDataList: channel.dataList,
  firstFilterList: [],
  secondFilterList: [],
  showList: []
})
onActivated(() => {
  const sort = route.query.sort
  nextTick(() => {
    if (sort) {
      document.querySelectorAll('.sort-list .sort-item').forEach(dom => {
        if (dom.innerText === sort) {
          dom.click()
        }
      })
    } else {
      document.querySelector('.all').click()
    }
  })
})
// 一级分类
const selectFn = (event, item) => {
  pageData.currentPage = 1
  state.activeTab = event.currentTarget.dataset.index || '0'
  state.activeTab2 = '0'
  // 处理筛选
  state.sortList.forEach((e, i) => {
    if (i + '' === event.target.dataset.index) {
      state.sortSecondList = e.sorts
      // debugger
      document.title = e.name + '_' + route.meta.title
      router.replace({
        path: '/cooperation',
        query: {
          sort: e.name,
          replace: 1
        }
      })
    }
  })
  // 处理数据
  state.firstFilterList = []
  if (state.activeTab === '0') {
    state.allDataList.forEach(obj => {
      state.firstFilterList = state.firstFilterList.concat(obj.records)
    })
  } else {
    state.allDataList.forEach(e => {
      if (e.pName === item.name) {
        state.firstFilterList = e.records
      }
    })
  }
  state.secondFilterList = JSON.parse(JSON.stringify(state.firstFilterList))
  requestData()
}
// 二级分类
const selecSecondtFn = (event, key) => {
  pageData.currentPage = 1
  state.activeTab2 = event.currentTarget.dataset.index || '0'
  // 处理数据
  if (key === 'all') {
    state.secondFilterList = JSON.parse(JSON.stringify(state.firstFilterList))
  } else {
    state.secondFilterList = state.firstFilterList.filter(obj => {
      const secondSort = obj.businessSubdivides[obj.businessSubdivide]
      return secondSort === key
    })
  }
  requestData()
}

const requestData = () => {
  state.showList = state.secondFilterList.slice((pageData.currentPage - 1) * pageData.pageSize, pageData.currentPage * pageData.pageSize)
  pageData.recordCount = state.secondFilterList.length
  nextTick(() => {
    document.documentElement.scrollTop = 0
  })
}
const { pageData, handlePageChange, handleSizeChange } = useHandlePages(requestData)

const getIndustry = (obj) => {
  const indexs = obj.industry.split('|').filter(e => e !== '')
  let strs = ''
  if (!indexs.length) return obj.industrys ? obj.industrys[0] : ''
  indexs.forEach(i => {
    strs += obj.industrys[i]
  })
  return strs
}
const getRegion = (obj) => {
  const indexs = obj.region.split('|').filter(e => e !== '')
  let strs = ''
  if (!indexs.length) return obj.regions ? obj.regions[0] : ''
  indexs.forEach(i => {
    strs += obj.regions[i]
  })
  return strs
}

const toDetail = (row) => {
  window.open('/#/cooperation/cooperationDetail?id=' + row.id, '_blank')
  // router.push({ name: 'cooperationDetail' })
}

defineExpose({ requestData })

</script>
<style lang="scss" scoped>
article.cooperation-article {
  width: 100%;
  background: $bg-black;
  header {
    position: fixed;
    z-index: 10;
    background: $bg-black;
    width: 100%;
    @media only screen and (min-width: 900px) {
      min-width: 1300px;
    }
  }
  .header-main {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    .sort-list {
      display: flex;
      margin-bottom: 20px;
      .sort-item {
        padding: 12px 10px;
        margin-right: 10px;
        color: rgba(192, 199, 206);
        border-radius: 4px;
        cursor: pointer;
        font-weight: 500;
        &.active {
          background-color: $bg-red;
          color: white;
          font-weight: 700;
        }
      }
    }
    .sort-second-list {
      margin-bottom: 20px;
      display: flex;
      .sort-item {
        color: rgba(192, 199, 206);
        border: 1px solid rgba(51, 58, 62);
        border-radius: 20px;
        padding: 8px 15px;
        margin-right: 10px;
        cursor: pointer;
        &.active {
          color: rgba(51, 58, 62);
          border-color: $bg-red;
          font-weight: 700;
          color: $bg-red;
        }
      }
    }
  }
  section.content {
    width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding-top: 110px;
    padding-bottom: 20px;
    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-column-gap: 10px;
    .table {
      .table-item {
        background-color: white;
        border: 4px solid #fff;
        padding: 15px 20px;
        margin-bottom: 10px;
        position: relative;
        cursor: pointer;
        &:hover {
          border-color: $bg-red;
        }
        .zhiding {
          position: absolute;
          left: -4px;
          top: -4px;
          width: 40px;
        }
        .title {
          font-size: 18px;
          line-height: 20px;
        }
        .des-wrap {
          margin-top: 20px;
          .table-sort {
            color: $color-gray;
            display: flex;
            align-items: center;
            .offer-img {
              width: 70px;
              margin-right: 18px;
            }
          }
          .danbao img {
            width: 70px;
            margin-left: 5px;
          }
        }
        .user-wrap {
          display: flex;
          align-items: center;
          .avatar-wrap {
            position: relative;
            display: inline-block;
            margin-right: 12px;
            .vipLogo {
              position: absolute;
              right: 8px;
              bottom: -2px;
              width: 12px;
            }
          }
          .userName {
            color: rgb(51, 51, 51);
          }
          .position {
            color: $color-gray;
          }
          .companyName {
            background-color: rgb(246, 246, 246);
            padding: 2px 4px;
            border-radius: 4px;
            font-size: 12px;
            margin-left: 10px;
            img {
              width: 12px;
              vertical-align: -2px;
            }
          }
        }
      }
      .empty {
        background-color: white;
        padding: 100px 0;
      }
    }
    .pagination-wrap {
      margin: 20px auto;
      display: flex;
      justify-content: center;
      :deep(.el-pagination) {
        margin: 0 auto;
        li.is-active {
          background-color: $bg-red !important;
          &:hover {
            color: white;
          }
        }
        li:hover,
        button:hover {
          color: $bg-red;
        }
        .el-pagination__total {
          color: white;
        }
      }
    }
    .right {
      max-height: 500px;
      height: fit-content;
      // overflow-y: auto;
      .link {
        position: relative;
        margin-bottom: 10px;
        display: block;
        img {
          width: 100%;
        }
        div.span {
          position: absolute;
          right: 5px;
          top: 5px;
          padding: 5px;
          background-color: rgba(0, 0, 0, 0.4);
          color: rgb(254, 254, 254);
          --tw-bg-opacity: 0.2;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
