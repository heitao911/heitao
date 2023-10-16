import { defineStore, acceptHMRUpdate } from 'pinia'

export const useAdStore = defineStore({
  id: 'ad',
  state: () => ({
    danbao: 'https://t.me/heitaoch004',
    topBanner: [{
      img: 'banner-top.jpg',
      link: 'https://t.me/heitaoch002'
    }, {
      img: 'banner-top.jpg',
      link: 'https://t.me/heitaoch002'
    }],
    banner1: [
      {
        img: 'photo_20231010_0001.jpeg',
        link: 'https://www.k36group.com/'
      },
      {
        img: 'photo_20231010_0002.jpeg',
        link: 'https://www.dbgaming.com/Home'
      },
      {
        img: 'photo_20231010_0003.jpeg',
        link: 'https://t.me/kin_kaqiusha'
      },
      {
        img: 'photo_20231010_0004.jpeg',
        link: 'https://t.me/Junepay_M'
      },
      {
        img: 'photo_20231010_0005.jpeg',
        link: 'https://t.me/heitaoch002'
      },
      {
        img: 'photo_20231010_0006.jpeg',
        link: 'https://t.me/JunePay999'
      }
    ],
    banner2: [
      {
        img: 'photo_20231010_0011.jpeg',
        link: 'https://kmbw.club/'
      },
      {
        img: 'photo_20231010_0012.jpeg',
        link: 'https://t.me/SBO568WinSales'
      },
      {
        img: 'photo_20231010_0013.jpeg',
        link: 'https://t.me/damexcha'
      },
      {
        img: 'photo_20231010_0014.jpeg',
        link: 'https://t.me/heitaoch002'
      },
      {
        img: 'photo_20231010_0015.jpeg',
        link: 'https://t.me/heitaoch002'
      },
      {
        img: 'photo_20231010_0016.jpeg',
        link: 'https://t.me/heitaoch002'
      }
    ],
    leftBanner: [{
      img: '20230904172010.png',
      link: 'https://t.me/sir1685/'
    }, {
      img: '20230904172010.png',
      link: 'https://t.me/sir1685/'
    }, {
      img: '20230904172010.png',
      link: 'https://t.me/sir1685/'
    }, {
      img: '20230904172010.png',
      link: 'https://t.me/sir1685/'
    }],
    rightBanner: [{
      img: '20230831164340.png',
      link: 'https://t.me/sir1685/'
    }, {
      img: '20230831164340.png',
      link: 'https://t.me/sir1685/'
    }, {
      img: '20230831164340.png',
      link: 'https://t.me/sir1685/'
    }],
    bottomSwiper: [{
      img: 'swiper_20230804103744.jpg',
      link: 'https://t.me/sir1685/'
    }, {
      img: 'swiper_20230612141509.jpg',
      link: 'https://t.me/sir1685//'
    }, {
      img: 'swiper_20230724144429.jpg',
      link: 'https://t.me/sir1685//'
    }, {
      img: 'swiper_20230922150753.jpg',
      link: 'https://t.me/sir1685//'
    }]
  }),
  getters: {
    items: (state) => {

    }
  },
  actions: {
    addItem (name) {
    },
    removeItem (name) {
    },
    async purchaseItems () {
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAdStore, import.meta.hot))
}
