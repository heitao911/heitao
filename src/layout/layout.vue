<!--框架首页 - 包括左侧导航栏的实现-->
<template>
  <div class="container">
    <!-- <Header></Header>
    <div class="main">
      <section class="content-container">
        <div class="content-wrapper">
          <router-view v-slot="{ Component }">
            <keep-alive :exclude="exclude">
              <component :is="Component" />
            </keep-alive>
          </router-view>
        </div>
      </section>
    </div>
    <Footer></Footer> -->
  </div>
</template>
<script>
// import utils from '@/common/js/utils.js'
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
import {apiGet}  from '@/api/index.js'
export default {
  name: 'Index',
  data () {
    return {
      exclude: []
    }
  },
  components: {
    // Header,
    // Footer
  },
  created () {
    const url = 'https://www.huidu.io/api/content/list?page=1&limit=4&categoryId=21&callback=fetchUser'
    apiGet('').then(res => {
      debugger
    })
   }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .main {
    width: 100%;
    display: flex;
    margin-top: 60px;
    min-height: 100vh;
    // overflow: hidden;
    .content-container {
      position: relative;
      box-sizing: border-box;
      // background: $bg-color;
      flex: 1;
      display: flex;
      flex-direction: column;
      height: 100%;
      // overflow: hidden;
      .content-wrapper {
        height: 100%;
        width: 100%;
        min-width: 1300px;
        @include media(M) {
          width: 100%;
          min-width: 100%;
        }
        box-sizing: border-box;
        flex: 1;
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
