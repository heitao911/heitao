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
          component: () => import('@/views/home/index.vue'),
          meta: {
            keepAlive: false,
            title: '黑桃商务'
          }
        }, {
          path: '/cooperation',
          name: 'coopetarion',
          component: () => import('@/views/cooperation/index.vue'),
          meta: {
            keepAlive: false,
            title: '合作-黑桃商务'
          }
        }, {
          path: '/cooperation/cooperationDetail',
          name: 'cooperationDetail',
          component: () => import('@/views/cooperation/detail.vue')
        }
      ]
    },
    {
      path: '/check',
      name: 'check',
      component: () => import('@/views/check/index.vue'),
      meta: {
        keepAlive: false,
        title: '账号查询-黑桃商务'
      }
    },
    {
      path: '/:pathMatch(.*)',
      name: '404',
      component: () => import('@/views/404.vue')
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  try {
    const countryCode = await getIpCountry()
    // console.info(countryCode)
    // throw error
    // 国内禁止访问
    if (countryCode !== 'CN') {
      next()
      return
    }
  } catch (error) {
    console.log(error)
  }

  // console.log([to, from, next])
  console.log('it is CN')
  if (to.path === '/404') {
    next()
  }
  next()
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
