<template>
  <div class="header-wrap">
    <header class="header">
      <div class="left">
        <router-link class="logo" to="/home">
          <img src="@/assets/images/img/logo.png" alt="" />
        </router-link>
        <router-link class="search" to="/check" title="黑桃出海防骗查询">
          <img src="@/assets/images/img/search.png" alt="" />
        </router-link>
      </div>
      <div class="right">
        <!-- <a class="link" href="https://telegram.org/" target="_blank">
          <div class="telegram"></div>
        </a> -->
      </div>
    </header>
  </div>
</template>
<script setup>

const schoolArr = ref([])
const menuAbout = ref([
  {
    toPath: '/home',
    name: 'About'
  },
  {
    toPath: '/our-story',
    name: 'Our Story'
  },
  {
    toPath: '/leadership-vision',
    name: 'Leadership Vision'
  },
  {
    toPath: 'blog',
    name: 'School News'
  },
  {
    toPath: '/media',
    name: 'Media'
  }
])

const mobileNav = ref('mobileNav')
const data = reactive({
  btnUnfold: false
})
function foldMenu () {
  data.btnUnfold = !data.btnUnfold
}
</script>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  background-color: $bg-black;
  z-index: 2;
  @media only screen and (min-width: 900px) {
    min-width: 1420px;
  }
  .header {
    height: 60px;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (min-width: 900px) {
      min-width: 1200px;
    }
    @include media(M) {
      width: 100%;
    }
    margin: 0 auto;
    .logo {
      margin-right: 20px;
      display: inline-block;
    }
    .search {
      vertical-align: 5px;
      display: inline-block;
      padding: 6px 5px;
      img {
        width: 20px;
      }
    }
    .telegram {
      // border-radius: 50%;
      padding: 2px;
      width: 30px;
      height: 30px;
      background-position-x: 34px;
      background-size: cover;
      background-image: url(@/assets/images/img/telegram.svg);
    }
  }
}
</style>
