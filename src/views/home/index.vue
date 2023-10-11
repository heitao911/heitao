<template>
  <div>
    <main class="content">
      <div class="banner-top">
        <img class="ad-img" src="@/assets/images/banner-ad/banner-top.jpg" alt="">
      </div>
      <div class="banner-wrap">
        <div class="banner-left">
          <img class="banner" src="@/assets/images/banner-ad/20230904172010.png" alt="">
          <img class="banner" src="@/assets/images/banner-ad/20230904172010.png" alt="">
          <img class="banner" src="@/assets/images/banner-ad/20230904172010.png" alt="">
          <img class="banner" src="@/assets/images/banner-ad/20230904172010.png" alt="">
        </div>
        <AdBanner class="banner-center" />
        <div class="banner-right">
          <img class="banner" src="@/assets/images/banner-ad/20230831164340.png" alt="">
          <img class="banner" src="@/assets/images/banner-ad/20230831164340.png" alt="">
          <img class="banner" src="@/assets/images/banner-ad/20230831164340.png" alt="">
        </div>
      </div>
      <div class="channel-wrap">
        <Channel />
      </div>

      <!-- <HelloWorld /> -->
    </main>
  </div>
</template>
<script setup name="Home">
// import { ref } from 'vue'
import AdBanner from './AdBanner.vue'
import Channel from './Channel.vue'
</script>
<style scoped lang="scss">
main.content {
  width: 100%;
  background: $bg-black;
  @media only screen and (min-width: 900px) {
    margin: 0px auto 0;
    min-width: 1420px;
    // background-image: url(@/assets/images/img/banner-bg.png);
    // background-size: 100% auto;
    // background-repeat: no-repeat;
  }
  // padding-top: 5px;
  @include media(M) {
    width: 100%;
    padding-top: 10px;
  }

  // height: 2000px;
  .banner-top {
    text-align: center;
    font-size: 0;
    margin-bottom: 10px;
    @include media(M) {
      display: none;
    }
    text-align: center;
    img.ad-img {
      max-width: 1200px;
      max-height: 60px;
    }
  }
  .banner-wrap {
    display: grid;
    grid-template-columns: 1fr 1200px 1fr;
    @include media(M) {
      grid-gap: 0px;
      grid-template-columns: 0 100% 0;
    }
    .banner-center {
      width: 100%;
    }
    .banner-left {
      text-align: right;
      margin-right: 10px;
      img {
        width: 80%;
      }
    }
    .banner-right {
      margin-left: 10px;
      img {
        width: 80%;
      }
    }
  }
}
</style>
