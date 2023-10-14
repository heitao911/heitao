<template>
  <main class="wrap">
    <div class="header-wrap">
      <header>
        <ul class="sort-list">
          <li class="sort-item" :class="{active: state.activeTab === i+''}" v-for="(e, i) in state.sortList" :key="i"
            :data-index="i" @click="selectFn($event, e)">
            {{ e.name }}</li>
        </ul>
        <ul class="sort-second-list">
          <li v-if="state.sortSecondList.length" class="sort-item" :class="{active: state.activeTab2 === '0'}"
            data-index="0" @click="selecSecondtFn($event)">全部</li>
          <li class="sort-item" :class="{active: state.activeTab2 === i+1+''}" v-for="(e, i) in state.sortSecondList"
            :key="i" :data-index="i+1" @click="selecSecondtFn($event, e)">{{ e }}</li>
        </ul>
      </header>
    </div>
    <section class="content">
      <div class="table">
        <div class="table-item" v-for="(item ,i) in state.fliteredList" :key="i">
          <div class="title">{{ item.title }}</div>
          <div class="flex jsb des-wrap">
            <div class="table-sort">{{ item.typeStr }}-{{ item.businessSubdivides[item.businessSubdivide] }}</div>
            <div class="danbao">担保交易</div>
          </div>
          <div class="divider"></div>
          <div class="user-wrap">
            <el-avatar class="avatar" :size="28" :src="item.headUrl" />
            <span class="userName">{{ item.userName }}</span> ·
            <span class="position">{{ item.position }}</span>
          </div>
        </div>
      </div>
      <div class="pagination-wrap">
        <el-pagination background layout="prev,pager,next,total" @current-change="handlePageChange"
          @size-change="handleSizeChange" v-model:current-page="pageData.currentPage"
          v-model:page-size="pageData.pageSize" :total="pageData.recordCount" />
      </div>

    </section>

  </main>
</template>
<script setup name="Cooperation">
import { useChannelStore } from '@/stores/channel'
import { useHandlePages } from '@/hooks/usePagination'

const { proxy } = getCurrentInstance()
console.log(proxy)
const { pageData, handlePageChange, handleSizeChange } = useHandlePages(proxy)
const channel = useChannelStore()
const state = reactive({
  sortList: channel.sortList,
  sortSecondList: [],
  activeTab: '0',
  activeTab2: '0',
  dataList: channel.dataList,
  tableList: [],
  fliteredList: []
})
onMounted(() => {
  state.sortList.forEach((e, i) => {
    if (i + '' === state.activeTab) {
      state.sortSecondList = e.sorts
    }
  })
})
// 一级分类
const selectFn = (event, item) => {
  state.activeTab = event.currentTarget.dataset.index || '0'
  state.activeTab2 = '0'
  state.sortList.forEach((e, i) => {
    if (i + '' === event.target.dataset.index) {
      state.sortSecondList = e.sorts
    }
  })
  state.dataList.forEach(e => {
    if (e.pName === item.name) {
      state.tableList = e.records
    }
  })
  requestData()
  console.log(state.tableList)
}
// 二级分类
const selecSecondtFn = (event) => {
  state.activeTab2 = event.currentTarget.dataset.index || '0'
}

const requestData = () => {
  state.fliteredList = state.tableList.slice((pageData.currentPage - 1) * pageData.pageSize, pageData.currentPage * pageData.pageSize)
  pageData.recordCount = state.tableList.length
}

defineExpose({ requestData })

</script>
<style lang="scss" scoped>
main.wrap {
  width: 100%;
  background: $bg-black;
  .header-wrap {
    position: fixed;
    z-index: 10;
    background: $bg-black;
    width: 100%;
    @media only screen and (min-width: 900px) {
      min-width: 1300px;
    }
  }
  header {
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
        &:hover {
          // background-color: $bg-red;
        }
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
    padding-top: 150px;
    .table {
      .table-item {
        background-color: white;
        border: 4px solid #fff;
        padding: 15px 20px;
        margin-bottom: 10px;
        cursor: pointer;
        &:hover {
          border-color: $bg-red;
        }
        .title {
          font-size: 18px;
          line-height: 20px;
        }
        .divider {
          border-top: 1px dashed rgba(231, 231, 231);
          margin: 10px 0;
        }
        .des-wrap {
          margin-top: 20px;
          .table-sort {
            color: $bg-gray;
          }
        }
        .user-wrap {
          .avatar {
            vertical-align: -8px;
            margin-right: 10px;
          }
          .position {
            color: $bg-gray;
          }
        }
      }
    }
    .pagination-wrap {
      margin: 0 auto;
      display: flex;
      justify-content: center;
      .el-pagination {
        margin: 0 auto;
        li.is-active {
          background-color: $bg-red !important;
        }
      }
    }
  }
}
</style>
