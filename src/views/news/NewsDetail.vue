<template>
  <article class="newsDetail-article" v-cloak>
    <article class="newsDetail-main" v-loading="state.loading" element-loading-text="Loading...">
      <section class="left">
        <header v-if="detailData.title">
          <h1 class="news-title">{{ detailData.title }}</h1>
          <div class="flex">
            <div class="type">{{ replaceText(detailData.name) }}</div>
            <div class="createTime">{{ getTimeAgo(detailData.createTime+'000') }}</div>
          </div>
        </header>
        <section style="min-height: 500px">
          <div class="news-intro">{{ detailData.intro }}</div>
          <div class="content" v-html="detailData.content"></div>
        </section>
        <footer>
          <div>
            <a href="https://t.me/heitaoch" target="_blank">欢迎加入 黑桃-海外资源交流群 @heitaoch</a>
          </div>
          <div>
            <a href="https://t.me/heitaoch002" target="_blank">商务合作: @heitaoch002</a>
          </div>
          <div>
            <a href="https://t.me/heitaoch003" target="_blank">购买会员: @heitaoch003</a>
          </div>
          <div>
            <a href="https://t.me/heitaoch004" target="_blank">黑桃♠担保: @heitaoch004</a>
          </div>
        </footer>
      </section>
      <aside class="right">
        <h1>热门精选</h1>
        <div class="right-news" v-for="(item, i) in state.hotspotContent" :key="i" @click="toDetail(item)">
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
    </article>

  </article>
</template>
<script setup name="NewsDetail">
import { apiGetContentDetail, apiGetHotspotContent } from '@/api/index.js'
import { replaceText, getTimeAgo } from '@/utils/tools'

const route = useRoute()
const detailData = ref({})
const state = reactive({
  loading: true,
  adList: []
})
onBeforeMount(async () => {
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
  const id = route.params.id || ''
  await getContentDetail(id)
  getHotspotContent()
})
const getContentDetail = async (id) => {
  try {
    state.loading = true
    const { status, data } = await apiGetContentDetail({ id })
    if (status === '1') {
      data.content = data.content.replace(/https:\/\/www\.huidu\.io\/news\/\d*/g, '/#/news')
      const arr = data.content.split('游戏需求资源高效对接')
      data.content = arr[0]
      detailData.value = data
    }
  } catch (error) {

  } finally {
    state.loading = false
  }
}

const getHotspotContent = async () => {
  try {
    const res = await apiGetHotspotContent({ type: 1 })
    if (res.status === '1') {
      state.hotspotContent = res.data
    }
  } catch (error) {

  }
}
const toDetail = (item) => {
  window.open('/#/news/newsDetail/' + item.id, '_blank')
}
</script>
<style lang="scss" scoped>
article.newsDetail-article {
  width: 100%;
  background-color: white;
  article.newsDetail-main {
    width: 1200px;
    min-height: 90vh;
    margin: 0 auto;
    padding-bottom: 20px;
    display: flex;
    grid-column-gap: 10px;

    .left {
      padding: 30px;
      overflow: hidden;
      flex-grow: 1;
      header {
        .news-title {
          font-size: 30px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        .type {
          font-size: 12px;
          color: white;
          background-color: #000;
          padding: 6px 8px;
          border-radius: 2px;
          margin-right: 10px;
        }
        .createTime {
          font-size: 12px;
          color: $color-gray;
          line-height: 24px;
        }
      }
      :deep(.content) {
        width: 100%;
        line-height: 24px;
        font-size: 16px;
        color: rgb(51, 51, 51);
        a {
          color: rgb(51, 51, 51);
          font-weight: bold;
        }
        img {
          max-width: 100%;
        }
      }
      .news-intro {
        color: $color-gray;
        margin: 20px 0;
        font-size: 16px;
        line-height: 22px;
      }
      footer {
        a {
          display: inline-block;
          font-weight: bold;
          color: black;
          font-size: 16px;
          line-height: 30px;
        }
      }
    }
    .right {
      height: fit-content;
      overflow-y: auto;
      width: 350px;
      flex-shrink: 0;
      h1 {
        font-size: 22px;
        font-weight: 700;
        margin: 80px 0 20px;
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
            height: 200px;
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
</style>
