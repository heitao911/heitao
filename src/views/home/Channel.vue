<template>
  <article class="channel-article">
    <section class="channel-item" v-for="(item, i) in state.list" :key="i">
      <!-- <a rel="nofollow" :href="item.link" target="_blank" class="link"> -->
      <div class="img-cover" @click="toCooperation(item, '')">
        <img :src="getImageUrl('channel',item.img)" class="el-image__inner" alt="广告" title="广告" />
      </div>
      <div class="title" @click="toCooperation(item)">{{ item.name }}</div>
      <div class="sort">
        <span class="sort-item" v-for="(e, index) in item.sorts.slice(0, 3)" :key="index"
          @click="toCooperation(item, e)">
          <b>{{ e }}</b>
          <i v-if="index!==item.sorts.slice(0, 3).length-1"> / </i>
        </span>
      </div>
      <!-- </a> -->
    </section>
  </article>
</template>
<script setup name="Channel">
// import { reactive } from 'vue'
import { useChannelStore } from '@/stores/channel'
const router = useRouter()
const channel = useChannelStore()
const state = reactive({
  list: []
})
state.list = channel.sortList.filter(e => e.sorts.length)
const toCooperation = (item, e) => {
  if (typeof e === 'object') {
    router.push({
      path: '/cooperation',
      query: {
        sort: item.name,
        sSort: e
      }
    })
  } else {
    router.push({
      path: '/cooperation',
      query: {
        sort: item.name
        // sSort: e
      }
    })
  }
}
</script>
<style scoped lang="scss">
article.channel-article {
  padding: 40px 20px 20px;
  background-color: white;
  box-sizing: border-box;
  @media only screen and (min-width: 900px) {
    width: 1200px;
  }
  @include media(M) {
    width: 100%;
  }
  margin: 20px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  .channel-item {
    width: 230px;
    padding: 5px 0;
    overflow: hidden;
    margin-bottom: 20px;
    cursor: pointer;
    // .link {
    // display: inline-block;
    // text-align: center;
    &:hover {
      .img-cover {
        transform: translateY(-5px);
      }
    }
    .img-cover {
      margin: 0 auto;
      text-align: center;
      width: 60px;
      height: 60px;
      margin-bottom: 10px;
      border-radius: 50%;
      overflow: hidden;
      transition: 0.5s;
      img {
        width: 100%;
      }
    }
    .title {
      &:hover {
        color: $bg-red;
      }
      text-align: center;
      font-weight: 700;
      color: black;
      margin-bottom: 10px;
    }
    .sort {
      text-align: center;
      color: #888;
      font-size: 12px;
      .sort-item:hover b {
        color: $bg-red;
      }
    }
    // }
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
