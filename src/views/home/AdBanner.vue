<template>
  <div class="ad-wrap">
    <div class="ad-row">
      <div class="ad-item" v-for="(item, i) in state.list1" :key="i">
        <a :href="item.link" target="_blank" class="link">
          <div class="img-cover">
            <img :src="item.imgUrl" class="el-image__inner" alt="广告" title="广告" />
          </div>
        </a>
      </div>
    </div>
    <el-row class="ad-row2" :gutter="10">
      <el-col class="ad-item" :span="12" v-for="(item, i) in state.list2" :key="i">
        <a :href="item.link" target="_blank" class="link">
          <div class="img-cover">
            <img :src="item.imgUrl" class="el-image__inner" alt="广告" title="广告" />
          </div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>
<script setup name="AdBanner">
import { reactive, onBeforeMount } from 'vue'
import { useAdStore } from '@/stores/ad'

const ad = useAdStore()
const state = reactive({
  list1: ad.banner1,
  list2: ad.banner2
})

onBeforeMount(() => {
  // console.log(import.meta.url)
  state.list1.map((e) => {
    e.imgUrl = new URL('/src/assets/images/banner-ad/' + e.img, import.meta.url).href
    return e
  })
  state.list2.map((e) => {
    e.imgUrl = new URL('/src/assets/images/banner-ad/' + e.img, import.meta.url).href
    return e
  })
})
</script>
<script>
export default {
  name: 'AdBanner'
}
</script>
<style scoped lang="scss">
.ad-wrap {
  // width: 60%;
  @media only screen and (min-width: 900px) {
    // width: 1200px;
  }
  @include media(M) {
    width: 100%;
  }
  margin: 0 auto;
  // .ad-item:nth-child(odd) {
  //   img: {
  //     -webkit-animation: 1s ease-in 0s infinite brightnessFn;
  //     animation: 1s ease-in 0s infinite brightnessFn;
  //   }
  // }
  // .ad-item:nth-child(even) {
  //   img: {
  //     -webkit-animation: 1s ease-in 0s infinite alternate brightnessFn;
  //     animation: 1s ease-in 0s infinite alternate brightnessFn;
  //   }
  // }
  .ad-item {
    margin-bottom: 10px;
    img: {
      // -webkit-animation: 1s ease-in 0s infinite alternate brightnessFn;
      // animation: 1s ease-in 0s infinite alternate brightnessFn;
    }
  }
  .ad-row2 {
    .img-cover {
      height: 64px;
    }
  }
}

@keyframes brightnessFn {
  0% {
    filter: brightness(1);
  }
  50% {
    filter: brightness(70%);
    transform: scaleX(1.01);
  }
}
</style>
