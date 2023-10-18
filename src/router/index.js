import { createRouter, createWebHashHistory } from 'vue-router'
import { getIpCountry } from '@/api'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  // mode: "hash",
  // base: import.meta.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect: '/home',
      component: () => import('@/layout/Layout.vue'),
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
          meta: {
            keepAlive: false,
            title: '合作-黑桃商务'
          },
          component: () => import('@/views/cooperation/index.vue')
        }, {
          path: '/cooperation/cooperationDetail',
          name: 'cooperationDetail',
          meta: {
            keepAlive: false,
            title: '业务详情-黑桃商务'
          },
          component: () => import('@/views/cooperation/detail.vue')
        }, {
          path: '/news',
          name: 'news',
          meta: {
            keepAlive: false,
            title: '海外资讯_海外新闻_海外信息_海外政策-黑桃商务'
          },
          component: () => import('@/views/news/index.vue')
        }, {
          path: '/news/newsDetail/:id',
          name: 'newsDetail',
          meta: {
            keepAlive: false,
            title: '海外资讯_海外新闻_海外信息_海外政策-黑桃商务'
          },
          component: () => import('@/views/news/NewsDetail.vue')
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
  const loading = ''
  try {
    // loading = ElLoading.service({
    //   lock: true,
    //   text: '加载中',
    //   background: 'rgba(0, 0, 0, 0.7)'
    // })
    // const countryCode = await getIpCountry()
    // console.info(countryCode)
    // 国内禁止访问
    // if (countryCode !== 'CN') {
    //   next()
    //   return
    // }
  } catch (error) {
    console.log(error)
  } finally {
    // loading.close()
  }

  // console.log([to, from, next])
  console.log('getIpCountry请求失败')
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
