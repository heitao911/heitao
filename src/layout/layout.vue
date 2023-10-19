<!--框架首页 - 包括左侧导航栏的实现-->
<template>
  <div class="layout">
    <Header></Header>
    <main>
      <section class="content-container">
        <router-view v-slot="{ Component }">
          <keep-alive :exclude="exclude">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </section>
      <el-backtop :right="40" :bottom="50"></el-backtop>
    </main>
    <Footer></Footer>
  </div>
</template>
<script >
import Header from '@/layout/Header.vue'
import Footer from '@/layout/Footer.vue'
export default {
  name: 'Index',
  data () {
    return {
      exclude: ['News', 'NewsDetail']
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>
<style lang="scss" scoped>
.layout {
  main {
    width: 100%;
    display: flex;
    padding-top: 60px;
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
  }
}
</style>
