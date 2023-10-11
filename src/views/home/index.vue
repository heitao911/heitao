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
        <!-- 首屏之间广告 -->
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
      <!-- 底部swiper广告 -->
      <SwiperAd class="bottom-swiper" :class="{hiddenSwiper: state.hiddenSwiper}" />
    </main>

  </div>
</template>
<script setup name="Home">
import { onMounted, nextTick, reactive } from 'vue'
import AdBanner from './AdBanner.vue'
import Channel from './Channel.vue'
import SwiperAd from '@/components/SwiperAd.vue'
import { apiGetContent } from '@/api'

const state = reactive({
  hiddenSwiper: false
})
onMounted(() => {
  // getContent()
  nextTick(() => {
    document.documentElement.onscroll = () => {
      debugger
      const offsetHeight = document.documentElement.offsetHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      console.log(scrollTop)
      if (scrollTop + clientHeight >= offsetHeight - 10) {
        state.hiddenSwiper = true
      } else {
        state.hiddenSwiper = false
      }
    }
  }, 1000)
})
const getContent = () => {
  apiGetContent()
}
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
    max-width: 1600px;
    margin: 0 auto;
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
  .bottom-swiper {
    position: fixed;
    z-index: 100;
    bottom: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    &.hiddenSwiper {
      bottom: -100px;
    }
  }
}
</style>
