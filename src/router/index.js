import { createRouter, createWebHashHistory } from 'vue-router'
import { getIpCountry } from '@/utils/tools'
const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  // mode: "hash",
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: () => import('@/layout/layout.vue'),
      children: [
        {
          path: '/home',
          name: 'homePage',
          // redirect: '/check',
          component: () => import('@/views/home/index.vue')
        }
      ]
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('@/views/check/index.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  console.log([to, from, next])
  const countryCode = await getIpCountry()
  console.info(countryCode)
  if (to.path === '/404') {
    next()
  }
  // 国内禁止访问
  // if (countryCode !== 'CN') {
  next()
  // } else {
  //   next({ path: '404', replace: true })
  // }
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
