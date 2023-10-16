<template>
  <article class="swiper-article" :class="{hiddenSwiper: !state.isShow}">
    <div class="relative">
      <el-icon class="close-btn" @click="closeSiper">
        <i-ep-close-bold />
      </el-icon>
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, i) in state.list" :key="i">
            <a :href="item.link" target="_blank" class="link">
              <img class="ad-img" :src="getImageUrl('banner-ad', item.img)" alt="">
            </a>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <!-- <div class="swiper-pagination"></div> -->
        <!-- 如果需要导航按钮 -->
        <!-- <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div> -->
        <!-- 如果需要滚动条 -->
        <!-- <div class="swiper-scrollbar"></div> -->
      </div>
    </div>
  </article>
</template>
<script setup name="SwiperAd">
// import { onMounted, onBeforeUnmount, reactive } from 'vue'
import { useAdStore } from '@/stores/ad'

const ad = useAdStore()
const state = reactive({
  list: ad.bottomSwiper,
  set: null,
  isShow: true
})
onMounted(() => {
  const mySwiper = new Swiper('.swiper', {
    direction: 'vertical', // 垂直切换选项 horizontal vertical
    loop: true, // 循环模式选项
    effect: 'cube',
    cube: {
      slideShadows: true,
      shadow: false,
      shadowOffset: 100,
      shadowScale: 0.6
    },
    speed: 1000,
    autoplay: 2000,
    autoplayDisableOnInteraction: false,
    autoHeight: true,
    observer: true,
    observeParents: true
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination'
    // },
    // 如果需要前进后退按钮
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev'
    // },
    // 如果需要滚动条
    // scrollbar: {
    //   el: '.swiper-scrollbar'
    // }
  })
  state.set && clearInterval(state.set)
  state.set = setInterval(() => {
    // mySwiper.slidePrev()
    // mySwiper.slideNext()
  }, 2000)
})
onBeforeUnmount(() => {
  clearInterval(state.set)
})
const closeSiper = () => {
  state.isShow = false
}
</script>
<style scoped lang="scss">
article.swiper-article {
  width: 1230px;
  transform: translate3d(0, 0, 0);
  // background: pink;
  // padding: 80px 0;
  margin: 0 auto;
  .relative {
    position: relative;
    width: 100%;
    .close-btn {
      position: absolute;
      right: 8px;
      top: 8px;
      z-index: 100;
      color: white;
      background-color: rgba(0, 0, 0, 0.2);
      padding: 4px;
      border-radius: 50%;
      cursor: pointer;
    }
  }
  .swiper {
    margin: 0 auto;
    overflow: visible;
    perspective: 1200px;
    transform: translate3d(0, 0, 0);
    height: 64px;
    .swiper-wrapper {
      transition-timing-function: linear;
      margin: 0 auto;
      .swiper-slide {
        box-sizing: content-box;
        overflow: hidden;
        width: 100%;
        height: 64px;
        transform: translate3d(0, 0, 0);
        cursor: pointer;
        img.ad-img {
          transform: translate3d(0, 0, 0);
          width: 100%;
        }
      }
    }
  }
}
</style>
