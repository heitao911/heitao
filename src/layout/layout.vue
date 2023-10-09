<!--框架首页 - 包括左侧导航栏的实现-->
<template>
  <el-row class="container">
    <Header></Header>
    <el-col :span="24" class="main">
      <section class="content-container">
        <el-col :span="24" class="content-wrapper" ref="coms">
          <router-view v-slot="{ Component }">
            <keep-alive :exclude="exclude">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </el-col>
      </section>
    </el-col>
    <Footer></Footer>
  </el-row>
</template>
<script>
// import utils from '@/common/js/utils.js'
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'

export default {
  name: 'Index',
  data () {
    return {
      exclude: []
    }
  },
  components: {
    Header,
    Footer
  },
  created () {
    const self = this
    // utils.bus.$on('closeTab', (tag, index) => {
    //   closeVm(self.$refs.coms, tag, index)
    // })
  }
}
</script>
<style lang="scss" scoped>
.container {
  // position: absolute;
  // top: 0px;
  // bottom: 0px;
  width: 100%;
  .main {
    width: 100%;
    display: flex;
    // position: absolute;
    // top: 56px;
    // bottom: 0px;
    margin-top: 56px;
    // overflow: hidden;
    .content-container {
      position: relative;
      box-sizing: border-box;
      // background: $bg-color;
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow-x: scroll;
      // overflow: hidden;
      .breadcrumb-container {
        span.el-tag {
          height: 30px;
          line-height: 30px;
          margin-right: 10px;
          // background: $bg-color;
          color: #919191;
          border: none;
          .el-icon-close {
            color: #919191 !important;
          }
        }
      }
      .content-wrapper {
        height: 100%;
        width: 100%;
        min-width: 1140px;
        @include media(M) {
          width: 100%;
          min-width: 100%;
        }
        box-sizing: border-box;
        // padding:30px 30px 50px;
        // padding: 30px 100px 50px;
        flex: 1;
        overflow-y: auto;
      }
      @media screen and (max-width: 1600px) {
        .content-wrapper {
          // padding: 30px 30px 50px;
        }
      }
    }
  }
}
</style>
