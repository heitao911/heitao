<template>
  <div class="header-wrap">
    <header class="header">
      <div class="left">
        <router-link class="logo" to="/home">
          <img src="@/assets/images/img/logo.png" alt="" />
        </router-link>
        <!-- <router-link class="search" to="/check" title="黑桃出海防骗查询">
          <img src="@/assets/images/img/search.png" alt="" />
        </router-link> -->
      </div>
      <div class="right">
        <!-- <a class="link" href="https://telegram.org/" target="_blank">
          <div class="telegram"></div>
        </a> -->
        <el-menu :default-active="state.activeIndex" class="header-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item :index="item.id" v-for="(item, i) in state.menuList" :key="i">
            <router-link v-if="item.id === '10'" class="search" to="/check" target="_blank" title="黑桃出海防骗查询">
              账号查询<img src="@/assets/images/img/search.png" alt="" />
            </router-link>
            <router-link v-else :to="item.toPath">{{item.name}}</router-link>
          </el-menu-item>
        </el-menu>
      </div>
    </header>
  </div>
</template>
<script setup>

const route = useRoute()
const state = reactive({
  activeIndex: '01',
  menuList: [
    {
      id: '01',
      toPath: '/home',
      name: '首页'
    },
    {
      id: '02',
      toPath: '/cooperation',
      name: '合作'
    },
    {
      id: '10',
      toPath: '/check',
      name: '防骗查询'
    }
  ]
})
onMounted(() => {
  state.menuList.forEach((e) => {
    if (e.toPath === route.path) {
      state.activeIndex = e.id
    }
  })
})
const handleSelect = (key, keyPath) => {
  // console.log(key, keyPath)
}
watch(route, (newVal) => {
  if (!newVal.query.replace) {
    document.title = newVal.meta.title
  }
  console.log(newVal)
  state.menuList.forEach(e => {
    if (e.toPath === newVal.path) {
      state.activeIndex = e.id
    }
  })
})
</script>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  background-color: $bg-black;
  z-index: 100;
  @media only screen and (min-width: 900px) {
    min-width: 1300px;
  }
  .header {
    height: 60px;
    width: 1200px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    @media only screen and (min-width: 900px) {
      min-width: 1200px;
    }
    @include media(M) {
      width: 100%;
    }
    .left {
      margin-right: 50px;
      .logo {
        margin-right: 20px;
        display: inline-block;
      }
    }
    .right {
      flex-grow: 1;

      .header-menu {
        height: 60px;
        background-color: $bg-black;
        border: none;
        padding: 10px 0;
        box-sizing: border-box;
        .el-menu-item {
          border: none;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          &.is-active {
            background-color: transparent;
            color: $bg-red !important;
          }
          &:hover {
            background-color: rgba(51, 58, 62);
            color: white;
          }
          a {
            display: inline-block;
            height: 100%;
            width: 100%;
            padding: 0 15px;
            line-height: 40px;
          }
        }
      }

      .search {
        display: inline-block;
        img {
          margin-left: 3px;
          width: 17px;
          vertical-align: -4px;
        }
      }
      .telegram {
        // border-radius: 50%;
        padding: 2px;
        width: 30px;
        height: 30px;
        background-position-x: 34px;
        background-size: cover;
        background-image: url(@/assets/images/img/telegram.svg);
      }
    }
  }
}
</style>
