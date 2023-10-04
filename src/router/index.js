// import VueRouter from "vue-router"
import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from "@/views/home/index.vue"

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  // mode: "hash",
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      redirect: "/home",
      component: HomeView,
      children: [
        {
          path: "/home",
          name: "homePage",
          component: () => import("@/views/home/index.vue")
        }
      ]
    },
    {
      path: "/check",
      name: "check",
      component: () => import("@/views/check/index.vue")
    }
  ]
})

router.afterEach(() => {
  try {
    // setTimeout(() => {
    //   document.documentElement.scrollTop = 0
    //   document.scrollingElement.scrollTop = 0
    // })
  } catch (e) {
    console.log(e)
  }
})

export default router
