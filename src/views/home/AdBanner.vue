<template>
  <div class="ad-wrap">
    <div class="ad-row">
      <div class="ad-item" v-for="(item, i) in state.list1" :key="i">
        <a :href="item.link" target="_blank" class="link">
          <div class="img-cover">
            <img :src="getImageUrl('banner-ad', item.img)" class="el-image__inner" alt="广告" title="广告" />
          </div>
          <div class="span">广告</div>
        </a>
      </div>
    </div>
    <el-row class="ad-row2" :gutter="10">
      <el-col class="ad-item" :span="12" v-for="(item, i) in state.list2" :key="i">
        <a :href="item.link" target="_blank" class="link">
          <div class="img-cover">
            <img :src="getImageUrl('banner-ad', item.img)" class="el-image__inner" alt="广告" title="广告" />
          </div>
          <div class="span">广告</div>
        </a>
      </el-col>
    </el-row>
  </div>
</template>
<script setup name="AdBanner">
// import { reactive, onBeforeMount } from 'vue'
import { useAdStore } from '@/stores/ad'

const ad = useAdStore()
const state = reactive({
  list1: ad.banner1,
  list2: ad.banner2
})

onBeforeMount(() => {
  // console.log(import.meta.url)
})

</script>
<script>
export default {
  name: 'AdBanner'
}
</script>
<style scoped lang="scss">
.ad-wrap {
  @media only screen and (min-width: 900px) {
    // width: 1200px;
  }
  @include media(M) {
    width: 100%;
  }
  margin: 0 auto;
  .ad-item {
    margin-bottom: 10px;
    position: relative;
    div.span {
      position: absolute;
      right: 5px;
      top: 5px;
      padding: 5px;
      background-color: rgba(0, 0, 0, 0.4);
      color: rgb(254, 254, 254);
      --tw-bg-opacity: 0.2;
      font-size: 12px;
    }
  }
  .ad-row2 {
    .img-cover img {
      height: 64px;
    }
  }
}
</style>
