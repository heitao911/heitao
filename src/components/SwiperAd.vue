<template>
  <div class="swiperWrap">
    <div class="relative">
      <div class="swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img class="ad-img" src="@/assets/images/banner-ad/swiper-20230804103744.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img class="ad-img" src="@/assets/images/banner-ad/swiper-20230612141509.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img class="ad-img" src="@/assets/images/banner-ad/swiper-20230724144429.jpg" alt="">
          </div>
          <div class="swiper-slide">
            <img class="ad-img" src="@/assets/images/banner-ad/swiper-20230922150753.jpg" alt="">
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
  </div>
</template>
<script setup name="SwiperAd">
import { onMounted, onBeforeUnmount, reactive } from 'vue'

const state = reactive({
  set: null
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
</script>
<style scoped lang="scss">
.swiperWrap {
  width: 1230px;
        height: 400px;

  transform: translate3d(0,0,0);
  background: pink;
  padding: 80px 0;
  margin: 0 auto;
  .relative {
    position: relative;
        height: 400px;

    width: 100%;
  }
  .swiper{
    width: 400px;
    margin: 0 auto;
    height: 400px;
    overflow: visible;
    perspective: 200px;
    transform: translate3d(0,0,0);
    .swiper-wrapper{
        transition-timing-function: linear;
      margin: 0 auto;
      .swiper-slide {
        box-sizing: content-box;
        overflow: hidden;
        width: 100%;
        height: 400px;
        transform: translate3d(0,0,0);
        img.ad-img{
          // width: 200px;
          height: 400px;
          transform: translate3d(0,0,0);
          // width: 100%;
        }
      }
    }
  }
}
</style>
