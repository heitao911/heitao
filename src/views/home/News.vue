<template>
  <article class="news-article" v-loading="state.loading">
    <h1 @click="toNewsList">
      <el-icon><i-ep-memo /></el-icon>黑桃资讯<el-icon><i-ep-ArrowRight /></el-icon>
    </h1>
    <section class="news-main">
      <el-carousel height="250px" :interval="3000" type="card">
        <el-carousel-item v-for="(item, i) in state.topList" :key="i" @click="toDetail(item)">
          <div class="box">
            <div class="cover"></div>
            <h2>{{item.title}}</h2>
            <el-image :src="item.coverUrl" lazy fit="cover"></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
      <div class="new-list">
        <div class="news-item" v-for="(item, i) in state.list" :key="i" @click="toDetail(item)">
          <el-icon>
            <i-ep-document />
          </el-icon>
          <span>{{item.title}}</span>
        </div>
      </div>
    </section>
  </article>
</template>
<script setup name="News">
import { apiGetHomeNewsList } from '@/api/index.js'

const router = useRouter()
const state = reactive({
  loading: false,
  topList: [],
  list: []
})
onBeforeMount(async () => {
  try {
    state.loading = true
    const res = await apiGetHomeNewsList()
    if (res.status === '1') {
      state.topList = res.data.records.slice(0, 3)
      state.list = res.data.records.slice(3)
    }
  } catch (error) {

  } finally {
    state.loading = false
  }
})
const toNewsList = () => {
  router.push({
    path: '/news'
  })
}
const toDetail = (item) => {
  router.push({
    name: 'newsDetail',
    params: {
      id: item.id
    }
  })
}
</script>
<style scoped lang="scss">
.news-article {
  margin: 30px auto 20px;
  @media only screen and (min-width: 900px) {
    width: $min-width;
  }
  @include media(M) {
    width: 100%;
  }
  h1 {
    font-size: 22px;
    font-weight: 500;
    color: white;
    margin-bottom: 10px;
    cursor: pointer;
    .el-icon {
      vertical-align: top;
      margin-right: 5px;
      color: $bg-red;
    }
  }
  section.news-main {
    padding: 20px;
    background-color: white;
    box-sizing: border-box;
  }
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
      padding: 10px;
      color: rgb(254, 254, 254);
    }
    .el-image {
      height: 100%;
      width: 100%;
    }
  }
  .new-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 15px;
    .news-item {
      cursor: pointer;
      line-height: 30px;
      color: $color-gray;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      &:hover {
        text-decoration: underline;
      }
      .el-icon {
        vertical-align: middle;
        margin-right: 5px;
      }
    }
  }
}
</style>
