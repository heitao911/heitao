<template>
  <div class="header">
    <header>
      <router-link class="logo" to="/home">
        <!-- <img src="@/assets/img/logo.png" alt="" /> -->
      </router-link>
      <!-- 大于900时 -->
      <nav class="bigger900">
        <ul>
          <!-- About菜单 -->
          <li>
            <router-link class="main-a" to="/home">About</router-link>
            <div class="transparent"></div>
            <div class="drop-down-wrap">
              <ul class="drop-down">
                <template v-for="(item, index) in menuAbout">
                  <li v-if="index !== 0" :key="item.name">
                    <router-link :to="item.toPath">{{ item.name }}</router-link>
                  </li>
                </template>
              </ul>
            </div>
          </li>
          <li>
            <!-- 注意有2份HTML -->
            <!-- School菜单 -->
            <router-link class="main-a" to="/home">Schools</router-link>
            <div class="transparent"></div>
            <div class="drop-down-wrap">
              <ul class="drop-down">
                <li v-for="item in schoolArr" :key="item.id">
                  <router-link :to="{ name: 'schoolDetail', query: { id: item.id } }">{{ item.name }}</router-link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <!-- Achievements菜单 -->
            <router-link class="main-a" to="/home">Outcomes</router-link>
            <div class="transparent"></div>
            <div class="drop-down-wrap">
              <ul class="drop-down">
                <template v-for="(item, index) in menuAchievements">
                  <li v-if="index !== 0" :key="item.name">
                    <router-link :to="item.toPath">{{ item.name }}</router-link>
                  </li>
                </template>
              </ul>
            </div>
          </li>
          <li>
            <router-link class="main-a" to="career">Career</router-link>
          </li>
          <li>
            <router-link class="main-a" to="contactUs">Contact Us</router-link>
          </li>
        </ul>
      </nav>

      <!-- 小于900，汉堡 -->
      <div class="hamburger">
        <div @click="foldMenu" id="nav_btn" class="hamburger-btn">
          <div id="nav_icon" :class="{ open: data.btnUnfold }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
    <nav ref="mobileNav" class="mobile-menu" :class="{ unfolding: data.btnUnfold }">
      <ul @click="foldMenu">
        <!-- About菜单 -->
        <li :class="{ title: index === 0 }" v-for="(item, index) in menuAbout" :key="item.name">
          <router-link :class="{ 'main-a': index === 0 }" :to="item.toPath">{{
            item.name
          }}</router-link>
        </li>

        <!-- 注意有2份HTML -->
        <!-- School菜单 -->
        <li class="title">
          <router-link class="main-a" to="/home">Schools</router-link>
        </li>
        <li v-for="item in schoolArr" :key="item.id">
          <router-link :to="{ name: 'schoolDetail', query: { id: item.id } }">{{
            item.name
          }}</router-link>
        </li>

        <!-- Achievements菜单 -->
        <li :class="{ title: index === 0 }" v-for="(item, index) in menuAchievements" :key="item.name">
          <router-link :class="{ 'main-a': index === 0 }" :to="item.toPath">{{
            item.name
          }}</router-link>
        </li>

        <!-- Career -->
        <li class="title">
          <router-link class="main-a" to="career">Career</router-link>
        </li>
        <!-- Contact Us -->
        <li class="title">
          <router-link class="main-a" to="contactUs">Contact Us</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script setup>
import { ref, reactive } from "vue"

let schoolArr = ref([])
let menuAbout = ref([
  {
    toPath: "/home",
    name: "About"
  },
  {
    toPath: "/our-story",
    name: "Our Story"
  },
  {
    toPath: "/leadership-vision",
    name: "Leadership Vision"
  },
  {
    toPath: "blog",
    name: "School News"
  },
  {
    toPath: "/media",
    name: "Media"
  }
])

let menuAchievements = ref([
  {
    toPath: "/home",
    name: "Outcomes"
  },
  {
    toPath: "/advanced-placement",
    name: "Advanced Placement"
  },
  {
    toPath: "/awards-and-distinctions",
    name: "Awards and Distinctions"
  },
  {
    toPath: "international-benchmarking",
    name: "International Benchmarking"
  },
  {
    toPath: "/US-rankings",
    name: "U.S. Rankings"
  },
  {
    toPath: "/college-acceptances",
    name: "College Acceptances"
  }
])

let mobileNav = ref("mobileNav")
let data = reactive({
  btnUnfold: false
})
function foldMenu() {
  data.btnUnfold = !data.btnUnfold
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  width: 100%;
  z-index: 2;
  background-color: #09111a;
}
// 大于900时
@media (min-width: 900px) {
  div.hamburger {
    display: none;
  }
  nav.mobile-menu {
    display: none;
  }
  header {
    img {
      width: 85px !important;
    }
  }
}

div.hamburger {
  margin-left: auto;
  .hamburger-btn {
    background: #3255a4;
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    > div {
      width: 100%;
    }
  }
}
nav.mobile-menu {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.4s linear;
  z-index: 99999;
  background-color: #fff;
  &.unfolding {
    max-height: 1600px; //自然高度
  }
  ul {
    border-top: 1px solid #222;
  }
  li {
    border-bottom: 1px solid #222;
    padding: 0px 15px;
    padding-left: 20px;
    cursor: pointer;
  }
  li.title {
    padding-left: 0;
  }
  a {
    color: #222;
    font-weight: bold;
  }

  @include media(M) {
    // height: 49px;
    // line-height: 49px;
    a {
      display: block;
      padding: 15px 0px;
      width: 100%;
    }
  }
}

header {
  display: flex;

  img {
    display: inline-block;
    margin-bottom: 30px;
    width: 60px;
    // height: 80px;
  }
  nav.bigger900 {
    @include media(M) {
      display: none;
    }
    margin-left: auto;
    > ul {
      display: flex;
      li {
        &:hover {
          div.drop-down-wrap {
            display: block;
            z-index: 99;
          }
        }
        position: relative;
        line-height: 60px;
        display: flex;
        > a.main-a {
          background: #3255a4;
          box-sizing: border-box;
          color: #fff;
          font-size: 18px;
          padding-left: 25px;
          padding-right: 25px;
        }
        div.transparent {
          height: 8px;
          width: 100%;
          position: absolute;
          // background: red;
          top: 60px;
        }
        div.drop-down-wrap {
          display: none;
          position: absolute;
          z-index: 9999;
          top: 61px;
          left: 0px;
          .transparent {
            height: 3px;
          }
          ul.drop-down {
            display: block;
            li {
              &:last-child {
                a {
                  border: none;
                }
              }
              background: #3255a4;
              &:hover {
                background: #888;
              }
              a {
                white-space: nowrap;
                line-height: 60px;
                display: block;
                width: 100%;
                font-size: 16px;
                color: #fff;
                border-bottom: 0.5px solid #7c8ac2;
                margin-left: 25px;
                margin-right: 25px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
