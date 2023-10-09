<template>
  <div>
    <main class="content">
      <div class="banner-top">
        <img class="banner" src="@/assets/images/ad/20230811133726.png" alt="">
      </div>
      <div class="banner-wrap">
        <div class="banner-left">
          <img class="banner" src="@/assets/images/ad/20230904172010.png" alt="">
          <img class="banner" src="@/assets/images/ad/20230904172010.png" alt="">
          <img class="banner" src="@/assets/images/ad/20230904172010.png" alt="">
          <img class="banner" src="@/assets/images/ad/20230904172010.png" alt="">
        </div>
        <AdBanner />
        <div class="banner-right">
          <img class="banner" src="@/assets/images/ad/20230831164340.png" alt="">
          <img class="banner" src="@/assets/images/ad/20230831164340.png" alt="">
          <img class="banner" src="@/assets/images/ad/20230831164340.png" alt="">
        </div>
      </div>
      <div class="channel-wrap">
        <Channel></Channel>
      </div>

      <!-- <HelloWorld /> -->
    </main>
  </div>
</template>
<script setup name="Home">
// import { ref } from 'vue'
import AdBanner from './AdBanner.vue'
import Channel from './Channel.vue'
</script>
<style scoped lang="scss">
main.content {
  width: 100%;
  @media only screen and (min-width: 900px) {
    min-width: 1420px;
    // background-image: url(@/assets/images/img/banner-bg.png);
    // background-size: 100% auto;
    // background-repeat: no-repeat;
    margin: 5px auto;
  }
  padding-top: 5px;
  @include media(M) {
    width: 100%;
    padding-top: 10px;
  }
  // background-color: #141619;

  // height: 2000px;
  .banner-top {
    text-align: center;
    margin-bottom: 5px;
    @include media(M) {
      display: none;
    }
    text-align: center;
    img {
      width: 80%;
    }
  }
  .banner-wrap {
    display: grid;
    grid-template-columns: 15% 70% 15%;
    grid-gap: 10px;
    @include media(M) {
      grid-gap: 0px;
      grid-template-columns: 0 100% 0;
    }
    .banner-left {
      text-align: right;
      img {
        width: 80%;
      }
    }
    .banner-right {
      img {
        width: 80%;
      }
    }
  }
}
</style>
