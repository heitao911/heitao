<template>
  <div class="ad-wrap">
    <div class="ad-item" v-for="(item, i) in state.list" :key="i">
      <a rel="nofollow" :href="item.link" target="_blank" class="relative block h-full w-full">
        <div class="img-cover">
          <img :src="item.imgUrl" class="el-image__inner" alt="广告" title="广告" />
        </div>
      </a>
    </div>
  </div>
</template>
<script setup name="AdBanner">
import { ref, reactive, onBeforeMount } from "vue"

const state = reactive({
  list: [
    {
      img: "20230627155550.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230819140731.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230829151247.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230901171533.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230428182146.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230615181530.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230811133726.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230911163217.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230810133739.png",
      link: "https://t.me/sir1685",
    },
    {
      img: "20230904101347.png",
      link: "https://t.me/sir1685",
    },
  ],
})

onBeforeMount(() => {
  // console.log(import.meta.url)
  state.list.map((e) => {
    e.imgUrl = new URL("/src/assets/images/ad/" + e.img, import.meta.url).href
    return e
  })
})
</script>
<script>
export default {
  name: "AdBanner",
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
  .ad-item:nth-child(odd) {
    img: {
      -webkit-animation: 1s ease-in 0s infinite brightnessFn;
      animation: 1s ease-in 0s infinite brightnessFn;
    }
  }
  .ad-item:nth-child(even) {
    img: {
      -webkit-animation: 1s ease-in 0s infinite alternate brightnessFn;
      animation: 1s ease-in 0s infinite alternate brightnessFn;
    }
  }
  .ad-item {
    img: {
      // -webkit-animation: 1s ease-in 0s infinite alternate brightnessFn;
      // animation: 1s ease-in 0s infinite alternate brightnessFn;
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
