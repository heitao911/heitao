<!--框架首页 - 包括左侧导航栏的实现-->
<template>
  <div class="container">
    <Header></Header>
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
    <Footer></Footer>
  </div>
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
  created () { }
}
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .main {
    width: 100%;
    display: flex;
    margin-top: 60px;
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
