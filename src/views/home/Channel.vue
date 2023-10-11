<template>
  <div class="channel-main">
    <div class="channel-item" v-for="(item, i) in state.list" :key="i">
      <a rel="nofollow" :href="item.link" target="_blank" class="link">
        <div class="img-cover">
          <img :src="getImageUrl('channel',item.img)" class="el-image__inner" alt="广告" title="广告" />
        </div>
        <div class="title">{{ item.name }}</div>
        <div class="sort">
          <span class="sort-item" v-for="(e, index) in item.sorts.slice(0, 3)" :key="index">
            <i>{{ e }}</i>
            <i v-if="index!==2">/</i>
          </span>
        </div>

      </a>
    </div>
  </div>
</template>
<script setup name="Channel">
import { reactive } from 'vue'
import { useChannelStore } from '@/stores/channel'

const channel = useChannelStore()
const state = reactive({
  list: channel.dataList
})
</script>
<script>
export default {
  name: 'AdBanner'
}
</script>
<style scoped lang="scss">
.channel-main {
  padding: 40px 20px 20px;
  background-color: white;
  box-sizing: border-box;
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
    width: 230px;
    padding: 5px 0;
    overflow: hidden;
    margin-bottom: 20px;

    .link {
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
        .sort-item:hover i {
          color: $bg-red;
        }
      }
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
