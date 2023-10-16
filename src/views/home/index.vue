<template>
  <article class="content">
    <header class="banner-top">
      <a href="https://t.me/heitaoch002" target="_blank" class="link">
        <img class="ad-img" src="@/assets/images/banner-ad/banner-top.jpg" alt="">
      </a>
    </header>
    <article class="banner-wrap">
      <aside class="banner-left">
        <a :href="item.link" target="_blank" class="link" v-for="(item, i) in state.leftBanner" :key="i">
          <img class="ad-img" :src="getImageUrl('banner-ad', item.img)" alt="">
        </a>
      </aside>
      <AdBanner />
      <aside class="banner-right">
        <a :href="item.link" target="_blank" class="link" v-for="(item, i) in state.rightBanner" :key="i">
          <img class="ad-img" :src="getImageUrl('banner-ad', item.img)" alt="">
        </a>
      </aside>
    </article>
    <Channel />
    <News></News>
    <SwiperAd class="bottom-swiper" :class="{hiddenSwiper: state.hiddenSwiper}" />
  </article>
</template>
<script setup name="Home">
import { useAdStore } from '@/stores/ad'

const AdBanner = defineAsyncComponent(() => import('./AdBanner.vue'))
const Channel = defineAsyncComponent(() => import('./Channel.vue'))
const News = defineAsyncComponent(() => import('./News.vue'))
const SwiperAd = defineAsyncComponent(() => import('@/components/SwiperAd.vue'))
const TopSwiperAd = defineAsyncComponent(() => import('@/components/TopSwiperAd.vue'))

const ad = useAdStore()
const state = reactive({
  hiddenSwiper: false,
  leftBanner: ad.leftBanner,
  rightBanner: ad.rightBanner
})
onMounted(() => {
  nextTick(() => {
    window.onscroll = () => {
      const offsetHeight = document.documentElement.offsetHeight
      const clientHeight = document.documentElement.clientHeight
      const scrollTop = document.documentElement.scrollTop
      if (scrollTop + clientHeight >= offsetHeight - 200) {
        state.hiddenSwiper = true
      } else {
        state.hiddenSwiper = false
      }
    }
  }, 1000)
})
</script>
<style scoped lang="scss">
article.content {
  width: 100%;
  background: $bg-black;
  overflow-y: auto;
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
    .banner-left {
      text-align: right;
      margin-right: 10px;
      img {
        width: 100%;
        max-width: 200px;
      }
    }
    .banner-right {
      margin-left: 10px;
      img {
        width: 100%;
        max-width: 200px;
      }
    }
  }
  .bottom-swiper {
    position: fixed;
    z-index: 100;
    bottom: 0;
    margin-left: 50%;
    transform: translateX(-50%);
    transition: 1s;
    &.hiddenSwiper {
      bottom: -100px;
    }
  }
}
</style>
