<template>
  <article class="newsDetail-article" v-cloak>
    <article class="newsDetail-main">
      <section class="left" v-loading="state.loading">
        <header>
          <h1>{{ detailData.title }}</h1>
          <div>{{ detailData.intro }}</div>
        </header>
        <div class="content" v-html="detailData.content"></div>
      </section>
      <aside class="right">
        <h1>热门文章</h1>
        <div class="right-news" v-for="(item, i) in state.hotspotContent" :key="i">
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
import { replaceText } from '@/utils/tools'

const route = useRoute()
const detailData = ref({})
const state = reactive({
  loading: true,
  adList: []
})
onBeforeMount(() => {
  window.scroll({
    left: 0,
    top: 0,
    behavior: 'smooth'
  })
  const id = route.params.id || ''
  getContentDetail(id)
  getHotspotContent()
})
const getContentDetail = async (id) => {
  try {
    state.loading = true
    const { status, data } = await apiGetContentDetail({ id })
    if (status === '1') {
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
      .content {
        width: 100%;
      }
      h2 {
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      .text {
        white-space: break-spaces;
        line-height: 25px;
        color: $color-gray;
        margin-bottom: 10px;
      }
      .tips {
        margin-top: 50px;
        background-color: $bg-gray;
        padding: 20px;
        border-radius: 15px;
        h3 {
          font-size: 16px;
          font-weight: 700;
          color: #333;
          margin-bottom: 10px;
        }
        ol li {
          color: gray;
          line-height: 22px;
        }
      }
    }
    .right {
      height: fit-content;
      overflow-y: auto;
      width: 350px;
      flex-shrink: 0;
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
