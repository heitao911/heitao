<template>
  <div class="footer-wrap">
    <div class="footer">
      <div class="row1">
        <a href="https://basis-global.com/" class="logo">
          <!-- <img src="@/assets/img/logo-white.png" alt="" /> -->
        </a>

        <div>Global Education Redefined</div>
      </div>

      <div class="row2-row3">
        <div class="row2">
          <div class="contact-us">
            <!-- <router-link to="contactUs">Contact Us</router-link> -->
          </div>
          <div class="addr">
            7975 N. Hayden Road, Suite C360, Scottsdale, AZ 85258
          </div>
          <div class="copyright">
            © 2018 BASIS Global, LLC. All Rights Reserved.
          </div>
        </div>

        <div class="row3">
          <ul id="menu-social" class="menu icon-box">
            <li
              v-for="item in iconList"
              :class="item.iconClass"
              :key="item.iconText"
            >
              <a :href="item.linkUrl" :title="item.title" target="_blank">
                <div class="icon-div"></div>
                <!-- <p>{{ item.iconText }}</p> -->
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup name="Footer">
import { ref } from "vue";
const iconList = ref([
  {
    linkUrl: "https://www.facebook.com/BASISInternationalSchools/",
    iconClass: "facebook",
    iconText: "Facebook",
    title: "Like us on Facebook at BASIS International Schools",
  },

  {
    linkUrl: "mailto:info@basis-global.com",
    iconClass: "emailUs",
    iconText: "Email Us",
    title: "Email us",
  },

  {
    linkUrl: "https://www.linkedin.com/company/basis-international-schools",
    iconClass: "linkedin",
    iconText: "LinkedIn",
    title: "Connect with us on LinkedIn",
  },

  {
    linkUrl: "http://blog.basisinternationalschools.com/",
    iconClass: "blog",
    iconText: "Blog",
    title: "Read our updates",
  },

  // {
  //   linkUrl: "http://blog.basisinternationalschools.com/",
  //   iconClass: "wechat",
  //   iconText: "Wechat",
  //   title: 'Follow us on Wechat'
  // },

  {
    linkUrl: "https://www.instagram.com/basisinternationalschools/",
    iconClass: "instagram",
    iconText: "Instagram",
    title: "Follow us on Instagram",
  },
]);
</script>

<style scoped lang="scss">
.footer-wrap {
  width: 100%;
  margin-top: 8rem;
  height: 200px;
  background: #4d4d4d;
}
.footer {
  color: #fff;
  max-width: 1140px;
  padding: 40px;
  // position: relative;
  margin: 0 auto;
  a {
    color: #fff;
  }
}
img {
  width: 70px;
}

.row1 {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #a6a6a7;
  margin-bottom: 2.5rem;
  padding-bottom: 2.5rem;
  > div {
    margin-left: auto;
    font-size: 28px;
  }
}

.row2-row3 {
  display: flex;
  .row2 {
    .contact-us {
      margin-bottom: 0.75rem;
      font-size: 1.8rem;
    }
    .addr {
      margin-bottom: 0.75rem;
    }
    .copyright {
      color: #a6a6a7;
      font-size: 1rem;
    }
  }
  .row3 {
    margin-left: auto;
    ul {
      display: flex;
      li {
        margin-left: 16px;
        a {
          i {
            font-size: 20px;
          }
        }
      }
    }
  }
}

@media (max-width: 600px) {
  .row1 {
    flex-direction: column;
    border-bottom: none;
    > div {
      display: none;
    }
  }
  .row2-row3 {
    flex-direction: column-reverse;
  }
  .row3 {
    margin-left: 0 !important;
    display: flex;
    justify-content: center;
  }
  .row2 {
    .contact-us {
      text-align: center;
      margin-top: 40px;
    }
    .addr {
      text-align: center;
      border-bottom: 2px solid #a6a6a7;
      margin-bottom: 2.25rem;
      padding-bottom: 2.25rem;
    }
    .copyright {
      text-align: center;
      margin-top: 20px;
    }
  }
}

.icon-box {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  .icon-div {
    width: 36px;
    height: 36px;
    background-size: contain;
  }

  // .linkedin .icon-div {
  //   background-image: url('../assets/img/Linkin.png');
  // }

  // .emailUs .icon-div {
  //   background-image: url('../assets/img/Email.png');
  // }

  // .blog .icon-div {
  //   background-image: url('../assets/img/Blog.png');
  // }

  // .facebook .icon-div {
  //   background-image: url('../assets/img/Facebook.png');
  // }

  // .wechat .icon-div {
  //   background-image: url('../assets/img/WeChat.png');
  // }

  // .instagram .icon-div {
  //   background-image: url('../assets/img/Ins.png');
  // }
}
</style>
