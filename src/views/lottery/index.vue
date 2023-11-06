<template>
  <article class="lottery-article">
    <header>

    </header>
    <section class="content">
      <article class="left">
        <section class="table">
          <el-table></el-table>
          <!-- <el-empty class="empty" v-else description="暂无数据" /> -->
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
  dataList: []
})

const requestData = () => {
  state.showList = state.secondFilterList.slice((pageData.currentPage - 1) * pageData.pageSize, pageData.currentPage * pageData.pageSize)
  pageData.recordCount = state.secondFilterList.length
  nextTick(() => {
    document.documentElement.scrollTop = 0
  })
}
const { pageData, handlePageChange, handleSizeChange } = useHandlePages(requestData)

const toDetail = (row) => {
  window.open('/#/cooperation/cooperationDetail?id=' + row.id, '_blank')
  // router.push({ name: 'cooperationDetail' })
}

defineExpose({ requestData })

</script>
<style lang="scss" scoped>
article.lottery-article {
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
