<template>
  <div class="channel-wrap">
    <div class="channel-item" v-for="(item, i) in state.list" :key="i">
      <a rel="nofollow" :href="item.link" target="_blank" class="link">
        <div class="img-cover">
          <img :src="item.imgUrl" class="el-image__inner" alt="广告" title="广告" />
        </div>
        <div class="title">{{ item.title }}</div>
        <div class="des">{{ item.des }}</div>
      </a>
    </div>
  </div>
</template>
<script setup name="Channel">
import { ref, reactive, onBeforeMount } from "vue"

const state = reactive({
  list: [
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
      link: "https://t.me/sir1685",
    },
    {
      title: '游戏招商',
      des: '游戏代理/游戏独代/游戏联运',
      img: "20230904172010.png",
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
.channel-wrap {
  padding: 20px;
  background-color: white;
  @media only screen and (min-width: 900px) {
    width: 1200px;
  }
  @include media(M) {
    width: 100%;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .channel-item {
    width: 220px;
    // height: 100px;
    overflow: hidden;
    margin-bottom: 25px;

    .link {
      // display: inline-block;
      // text-align: center;
    }
    .img-cover {
      margin: 0 auto;
      text-align: center;
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
      border-radius: 50%;
      overflow: hidden;
    }
    .title {
      text-align: center;
      font-weight: 700;
      color: black;
      margin-bottom: 10px;
    }
    .des {
      text-align: center;
      color: #888;
      font-size: 12px;
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
