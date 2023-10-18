<template>
  <article class="news-article">
    <div class="news-article-box">
      <header>
        <el-carousel height="350px" :interval="3000" type="card">
          <el-carousel-item v-for="(item, i) in state.bannerList" :key="i" @click="toDetail(item.cid)">
            <div class="box">
              <div class="cover"></div>
              <h2>{{item.title}}</h2>
              <el-image :src="item.url" fit="cover"></el-image>
            </div>
          </el-carousel-item>
        </el-carousel>
      </header>
      <section class="content">
        <article class="left">
          <nav>
            <ul class="sort-list">
              <li class="sort-item" :class="{active: state.activeTab === '-1'}" @click="navClick(-1, '')">最新动态</li>
              <li class="sort-item" :class="{active: state.activeTab === i+''}" v-for="(e, i) in state.newsCategory"
                :key="i" @click="navClick(i, e)">
                {{ replaceText(e.name) }}</li>
            </ul>
          </nav>
          <section class="table" v-loading="state.loadingTab">
            <template v-if="state.newsList.length">
              <div class="news-item" v-for="item in state.newsList" :key="item.id" @click="toDetail(item.id)">
                <div class="news-box">
                  <el-image :src="item.coverUrl" fit="cover"></el-image>
                  <div class="flex-c jsb content">
                    <div>
                      <h2>{{ item.title }}</h2>
                      <div class="intro">{{ item.intro }}</div>
                    </div>
                    <span>{{ replaceText(item.categoryName) }}</span>
                  </div>
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
          <h1>热门文章</h1>
          <div class="right-news" v-for="(item, i) in state.hotspotContent" :key="i" @click="toDetail(item.id)">
            <div v-if="i <= 1" class="news-box1">
              <div class="cover"></div>
              <div class="img-wrap">
                <el-image :src="item.coverUrl" fit="cover"></el-image>
              </div>
              <h2>{{ item.title }}</h2>
            </div>
            <div v-else class="news-box2">
              <el-image :src="item.coverUrl" fit="cover"></el-image>
              <div class="flex-c jsb title">
                <h2>{{ item.title }}</h2>
                <span>{{ replaceText(item.categoryName) }}</span>
              </div>
            </div>
          </div>
        </aside>
      </section>
    </div>
  </article>
</template>
<script setup name="News">
import { useHandlePages } from '@/hooks/usePagination'
import { apiGetNewsBanner, apiGetNewsCategory, apiGetHotspotContent, apiGetNewsList } from '@/api/index.js'
import { replaceText } from '@/utils/tools'

const state = reactive({
  activeTab: '-1',
  categoryId: 0,
  bannerList: [],
  newsCategory: [],
  hotspotContent: [],
  newsList: [],
  loading: false
})
onBeforeMount(() => {
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
  getBanner()
  getNewsCategory()
  getHotspotContent()
  requestData(true)
})

const getBanner = async () => {
  try {
    const res = await apiGetNewsBanner({ location: 1 })
    if (res.status === '1') {
      state.bannerList = res.data
    }
  } catch (error) {

  }
}
const getNewsCategory = async () => {
  try {
    const res = await apiGetNewsCategory()
    if (res.status === '1') {
      state.newsCategory = res.data
    }
  } catch (error) {

  }
}
const getHotspotContent = async () => {
  try {
    const res = await apiGetHotspotContent({ type: 0 })
    if (res.status === '1') {
      state.hotspotContent = res.data
    }
  } catch (error) {

  }
}
const navClick = (index, obj) => {
  pageData.currentPage = 1
  state.activeTab = index + ''
  state.categoryId = obj ? obj.id : 0
  requestData()
}
const requestData = async (key) => {
  try {
    const params = {
      categoryId: state.categoryId,
      page: pageData.currentPage,
      limit: pageData.pageSize
    }
    state.loadingTab = true
    const { status, data } = await apiGetNewsList(params)
    if (status === '1') {
      state.newsList = data.records || []
      pageData.recordCount = data.total
      key || window.scroll({
        left: 0,
        top: 400,
        behavior: 'smooth'
      })
    }
  } catch (error) {

  } finally {
    state.loadingTab = false
  }
}
const { pageData, handlePageChange, handleSizeChange } = useHandlePages(requestData)

const toDetail = (id) => {
  window.open('/#/news/newsDetail/' + id, '_blank')
}
defineExpose({ requestData })

</script>
<style lang="scss" scoped>
article.news-article {
  width: 100%;
  background: $bg-black;
  .news-article-box {
    width: $min-width;
    margin: 0 auto;
    header {
      width: 100%;

      .box {
        position: relative;
        height: 100%;
        .cover {
          position: absolute;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.2);
          z-index: 1;
        }
        h2 {
          width: 100%;
          position: absolute;
          top: 10px;
          text-align: center;
          font-size: 18px;
          font-weight: 700;
          z-index: 2;
          padding: 10px 30px;
          box-sizing: border-box;
          color: rgb(254, 254, 254);
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .el-image {
        height: 100%;
        width: 100%;
      }
    }
    nav {
      .sort-list {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
        .sort-item {
          padding: 12px 15px;
          margin-right: 15px;
          margin-bottom: 15px;
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
    }
    section.content {
      width: 1200px;
      // min-height: 100vh;
      margin: 0 auto;
      padding-top: 50px;
      padding-bottom: 20px;
      display: grid;
      grid-template-columns: 5fr 2fr;
      grid-column-gap: 15px;
      .left {
        .table {
          .news-item {
            height: 150px;
            background-color: white;
            padding: 15px;
            margin-bottom: 10px;
            position: relative;
            cursor: pointer;
            .news-box {
              display: flex;
              grid-column-gap: 10px;
              height: 100%;

              .el-image {
                width: 250px;
                flex-shrink: 0;
                height: 100%;
              }
              .content {
                h2 {
                  font-size: 20px;
                  font-weight: 700;
                  margin-bottom: 10px;
                  line-height: 24px;
                }
                .intro,
                span {
                  color: $color-gray;
                  line-height: 20px;
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
      }
      .right {
        height: fit-content;
        h1 {
          font-size: 20px;
          font-weight: 700;
          color: white;
          margin: 10px 0 15px;
        }
        .right-news {
          margin-bottom: 15px;
          cursor: pointer;
          .news-box1 {
            position: relative;
            .cover {
              position: absolute;
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, 0.4);
              z-index: 1;
            }
            .img-wrap {
              height: 150px;
              .el-image {
                width: 100%;
                height: 100%;
              }
            }
            h2 {
              position: absolute;
              top: 10px;
              z-index: 1;
              width: 100%;
              padding: 0 20px;
              box-sizing: border-box;
              color: white;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              font-weight: 600;
            }
          }
          .news-box2 {
            height: 90px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            background-color: white;
            .title {
              padding: 8px;
              h2 {
                font-weight: 500;
                line-height: 18px;
                overflow: hidden;
                text-overflow: ellipsis;
                // white-space: nowrap;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
              }
              span {
                font-size: 12px;
                color: $color-gray;
              }
            }
          }
        }
      }
    }
  }
}
</style>
