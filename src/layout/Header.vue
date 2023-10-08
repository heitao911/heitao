<template>
  <div class="header-wrap">
    <header class="header">
      <router-link class="logo" to="/home">
        <img src="@/assets/images/img/logo.png" alt="" />
      </router-link>
      <router-link class="search" to="/check">
        <img src="@/assets/images/img/search.png" alt="" />
      </router-link>
    </header>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue";

let schoolArr = ref([]);
let menuAbout = ref([
  {
    toPath: "/home",
    name: "About",
  },
  {
    toPath: "/our-story",
    name: "Our Story",
  },
  {
    toPath: "/leadership-vision",
    name: "Leadership Vision",
  },
  {
    toPath: "blog",
    name: "School News",
  },
  {
    toPath: "/media",
    name: "Media",
  },
]);

let mobileNav = ref("mobileNav");
let data = reactive({
  btnUnfold: false,
});
function foldMenu() {
  data.btnUnfold = !data.btnUnfold;
}
</script>

<style lang="scss" scoped>
.header-wrap {
  width: 100%;
  position: fixed;
  top: 0;
  height: 60px;
  background-color: #09111a;
  z-index: 2;
  @media only screen and (min-width: 900px) {
    min-width: 1420px;
  }
  .header {
    height: 60px;
    width: 60%;
    display: flex;
    align-items: center;
    @media only screen and (min-width: 900px) {
      min-width: 1200px;
    }
    @include media(M) {
      width: 100%;
    }
    margin: 0 auto;
    .logo {
      margin-right: 15px;
    }
    .search {
    }
  }
}
</style>
