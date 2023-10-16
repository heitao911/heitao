import { defineStore, acceptHMRUpdate } from 'pinia'

export const useChannelStore = defineStore('channel', {
  state: () => ({
    sortList: [
      {
        name: '业务列表',
        sorts: [],
        img: '20230407151039.png',
        link: 'https://www.k36group.com/'
      },
      {
        name: '游戏招商',
        sorts: ['游戏代理', '游戏独代', '游戏联运'],
        img: '20230407151039.png',
        link: 'https://www.k36group.com/'
      },
      {
        name: '游戏包网',
        sorts: ['游戏包网', '数字货币包网'],
        img: '20230630105431.png',
        link: 'https://www.dbgaming.com/Home'
      },
      {
        name: '游戏API',
        sorts: ['游戏API'],
        img: '20230630104900.png',
        link: 'https://t.me/kin_kaqiusha'
      },
      {
        name: '支付渠道',
        sorts: ['全球支付', '承兑换汇', 'U兑换'],
        img: '20230407144118.png',
        link: 'https://t.me/Junepay_M'
      },
      {
        name: '营销渠道',
        sorts: ['Google', 'Facebook', 'Telegram', 'Tiktok', 'ASO/ASM',
          'SEO/SEM', '线下流量', '流量变现', '网红KOL', '其他流量'],
        img: '20230407144502.png',
        link: 'https://t.me/heitaoch002'
      },
      {
        name: '云服务',
        sorts: ['服务器',
          'CDN/安防',
          '国际短信',
          '数据统计'
        ],
        img: '20230407151807.png',
        link: 'https://t.me/JunePay999'
      }, {
        name: '技术外包',
        sorts: ['交易所开发',
          '游戏搭建',
          '设计外包',
          '企业签名',
          'App开发',
          '本地测试',
          '其他系统开发'],
        img: '20230407150437.png',
        link: 'https://t.me/Junepay_M'
      },
      {
        name: 'WEB 3.0',
        sorts: ['WEB 3.0',
          '钱包合作',
          '币圈项目方',
          '交易所代理'],
        img: '20230630113907.png',
        link: 'https://t.me/heitaoch002'
      }, {
        name: '媒体渠道',
        sorts: ['博娱媒体',
          '币圈媒体',
          '华人媒体'],
        img: '20230407151348.png',
        link: 'https://t.me/JunePay999'
      }, {
        name: '本地服务',
        sorts: ['翻译服务',
          '客服外包',
          '注册财税',
          '配音视频',
          '投放素材'
        ],
        img: '20230407152324.png',
        link: 'https://t.me/JunePay999'
      }
    ],
    dataList: [
      {
        pName: '',
        records: [
          {
            id: 12534,
            userName: 'BUKA国际短信',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195357.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230718/3f8f184d-47f7-41eb-a113-6c7b641e4d22.jpg',
            position: '市场',
            logo: null,
            title: '东南亚国际短信 / WhatsApp business api / 国际语音外呼/群呼-全球直连-16年品牌',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '70',
            businessSubdivides: {
              70: '数据统计'
            },
            region: '15|11|21',
            regions: {
              21: '印尼',
              11: '巴西',
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'buka sms',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193680'
          },
          {
            id: 11771,
            userName: 'CQ9-WEN',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230831/50224090-09f9-4457-8a5e-b4df6d63eaad.jpeg',
            position: '業務經理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230831/bb21a9d7-96a2-4ac7-99d4-72b5bb245eb6.jpeg',
            title: 'CQ9 Gaming 電子及真人遊戲API',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '17|19|20',
            industrys: {
              17: '综合博弈',
              19: '真人视讯',
              20: '老虎机'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193665'
          },
          {
            id: 12300,
            userName: 'K36官方',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926184554.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230926/19c244e6-eab5-407a-8f70-c8ba3b0e8018.png',
            title: 'K36东南亚包网搭建站服务、支持多语言、游戏API转售',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1',
            industrys: {
              1: '综合博弈'
            },
            isTop: 1,
            firmName: 'K36',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193641'
          },
          {
            id: 12559,
            userName: '开云商务小夜',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/12.png',
            position: '招商经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231013/927c7a41-7e12-436f-8db2-cb290e38aa9c.png',
            title: '开云体育代理合营零门槛',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697176454'
          },
          {
            id: 1262,
            userName: 'OKpay全球付',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20220920/d6dbbc1f-6012-4668-919c-d31ce884b598.jpg',
            position: '市场部经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-07/20231007222155.png',
            title: '印度原生支付 D0，U回，成功率80%+',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '15',
            regions: {
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'okpay',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163868'
          },
          {
            id: 7938,
            userName: '海外支付阿东',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/1.png',
            position: '渠道总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230316/e6f8fc6e-e17b-44a2-a6b8-e0ca139dbc10.png',
            title: '土耳其 孟加拉 印度 巴西原生游戏支付',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'Fastpay',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697163861'
          },
          {
            id: 11579,
            userName: 'HKP-商务',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'http://file.huidu.io/avatar/4.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/7f379b20-2412-4876-b93d-2002cf2b824f.jpg',
            title: 'HKPPAY，专业支付30年，巴西持牌机构提供源头支付，安全、稳定，专为游戏、bet提供一站式支付服务',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11|12|21',
            regions: {
              21: '印尼',
              11: '巴西',
              12: '菲律宾'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163853'
          },
          {
            id: 12127,
            userName: '黑桃Max',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2022-12-13/20221213124647.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221108/f11844b3-409c-4599-a50d-9cdcaead0285.png',
            position: '运营主管',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920164138.png',
            title: '黑桃SIGMA马耳他酒会招商！',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: '黑桃集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163845'
          },
          {
            id: 4840,
            userName: 'CASHPAY',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9269820c-6a90-496c-aaf4-08c98869803a.png',
            position: '运营总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221114/12f22392-3d48-4c29-8216-6f1306568efb.jpg',
            title: '巴西支付源头',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11',
            regions: {
              11: '巴西'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'CASHPAY',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163835'
          },
          {
            id: 11492,
            userName: 'No钱包 Titus',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230609/7406b686-85d7-417a-b109-379ff7391e7b.jpg',
            position: '商务负责人',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230819/76e419ce-8773-4850-b7fb-24a8bae2068c.png',
            title: '【NO钱包】NO.com 专业RMB、USDT通道，提现免费，摆脱冻结及跑单，彻底解决支付痛点，无痕兑换守护资产安全，诚邀各大商户及代理入驻合作',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'No钱包',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163826'
          },
          {
            id: 9630,
            userName: '彩虹抖抖',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230609/c244be04-0c64-40f7-abdd-4b5fac778e62.jpeg',
            position: '市场部总监',
            logo: null,
            title: '巴西H5投放寻优秀产品合作',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '11|18|7',
            regions: {
              18: '越南',
              7: '泰国',
              11: '巴西'
            },
            industry: '16',
            industryStr: '游戏',
            industrySubdivide: '32',
            industrys: {
              32: '真金游戏'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163818'
          },
          {
            id: 11511,
            userName: '小峰',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/11.png',
            position: '市场总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230821/915468e4-50db-42d1-a7dd-583d79417c80.jpg',
            title: 'Fastpay5年老牌支付 巴西   墨西哥  埃及   菲律宾 源头冰点费率',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11|12|13',
            regions: {
              11: '巴西',
              12: '菲律宾',
              13: '墨西哥'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: '成都行付天下科技有限公司',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163810'
          },
          {
            id: 11576,
            userName: 'Santos',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727174637.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-25/20230825171244.png',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/3533abf1-cf59-4504-9ba6-125ef881d00e.jpg',
            title: '皇家娱乐，招商代理，游戏丰富实力雄厚',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '15|11|18',
            regions: {
              18: '越南',
              11: '巴西',
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163804'
          },
          {
            id: 12024,
            userName: '海外流量代投',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9df07a92-2dbd-47cf-b108-17cfa429afc9.jpg',
            position: '商务',
            logo: null,
            title: '出海广告代投，GG,TT,FB,KWAI代投',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '18',
            businessSubdivides: {
              18: 'Google'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163791'
          },
          {
            id: 11575,
            userName: 'alfapay',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/4a33b338-bb35-4a74-b015-96736cce2106.jpg',
            position: '商务经理',
            logo: null,
            title: '东南亚支付、承兑、金流系统承租',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '83',
            businessSubdivides: {
              83: '承兑换汇'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106396'
          },
          {
            id: 12118,
            userName: 'DB Gaming',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102245.png',
            position: '市場',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102417.png',
            title: 'DB游戏/KM包网 API接口',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'DB Gaming',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106387'
          }
        ]
      }, {
        pName: '游戏招商',
        records: [
          {
            id: 12559,
            userName: '开云商务小夜',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/12.png',
            position: '招商经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231013/927c7a41-7e12-436f-8db2-cb290e38aa9c.png',
            title: '开云体育代理合营零门槛',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            details: '',
            introduce: {
              imgs: ['https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-13/20231013103206.png'],
              content: '【开云代理】\n1、55%会员净输赢分红\n2、独立代理后台，一对一官方维护\n3、人头费（2998-299998元）无上限}'
            },
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697176454'
          },
          {
            id: 12127,
            userName: '黑桃Max',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2022-12-13/20221213124647.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221108/f11844b3-409c-4599-a50d-9cdcaead0285.png',
            position: '运营主管',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920164138.png',
            title: '黑桃SIGMA马耳他酒会招商！',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: '黑桃集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163845'
          },
          {
            id: 11576,
            userName: 'Santos',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727174637.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-25/20230825171244.png',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/3533abf1-cf59-4504-9ba6-125ef881d00e.jpg',
            title: '皇家娱乐，招商代理，游戏丰富实力雄厚',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            details: '',
            introduce: {
              imgs: [],
              content: '主打多币别充提快速到账\n极致游戏画面支持4k画质\n极多游戏平台，任君选择\n让您无时无刻享受极致游戏体验\n\n诚招代理！！！佣金无上限！！！\n实力招商，资金雄厚，佣金每周准时派发绝无拖欠！\n—24/7客服全天候服务，保证让宾客们宾至如归—\n网站多优惠出款快，查看名片可联系了解更多！'
            },
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '15|11|18',
            regions: {
              18: '越南',
              11: '巴西',
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1691625600'
          },
          {
            id: 12291,
            userName: '阿麒',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926175551.png',
            position: '招商',
            logo: '',
            title: '诚招代理 负盈利佣金55% 开线即送短域名 欢迎老板来询',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193697'
          },
          {
            id: 12288,
            userName: '威震天',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926174608.png',
            position: '负责人',
            logo: '',
            title: '官方金牌招商，扶持期间55%佣金（后期无需新增）',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193696'
          },
          {
            id: 12299,
            userName: '恭喜 发财',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926183906.png',
            position: '技术',
            logo: '',
            title: '乐娱包网 实力包网平台 性价比市面最高 简单开站',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193695'
          },
          {
            id: 12326,
            userName: '文文',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927161827.png',
            position: '商务',
            logo: '',
            title: '全民代理-凯发招商 诚招代理 待遇丰厚 欢迎来聊',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161196'
          },
          {
            id: 12292,
            userName: '经理',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926180150.png',
            position: '经理',
            logo: '',
            title: '游戏招商 招募会员 会员当日首存礼最高8888元',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161195'
          },
          {
            id: 12301,
            userName: '瓦力',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926184317.png',
            position: '客服',
            logo: '',
            title: '瓦力游戏 TG视讯玩法震撼来袭',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '67',
            businessSubdivides: {
              67: '游戏独代'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '49',
            industryStr: '游戏',
            industrySubdivide: '54|55|56',
            industrys: {
              54: '捕鱼游戏',
              55: '棋牌游戏',
              56: '卡牌游戏'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074961'
          },
          {
            id: 12327,
            userName: '张龙',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927162149.png',
            position: 'CEO',
            logo: '',
            title: '488体育诚招代理 开通最高50%返佣 欢迎来合作',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '',
            regions: null,
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697021138'
          },
          {
            id: 12075,
            userName: '百胜 小卫',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-18/20230918171235.png',
            position: '商务',
            logo: '',
            title: '新百胜赌场 主营：百家乐，龙虎，斗牛 资金安全可玩',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '67',
            businessSubdivides: {
              67: '游戏独代'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697002339'
          },
          {
            id: 12201,
            userName: 'TYC招代理',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/12.png',
            position: '经理',
            logo: '',
            title: '太阳城招代理 有效新增人头费 上不封顶',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '太阳城网上娱乐',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697002338'
          },
          {
            id: 12269,
            userName: '华子',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926145602.png',
            position: '商务',
            logo: '',
            title: 'AG直营招代理 合作共赢 55%高额返佣',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697002333'
          },
          {
            id: 11820,
            userName: 'fkai',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230904/825c6c75-4fed-4af5-ad2b-270092ee63b8.jpg',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230904/ad4c84d5-ec63-4afd-999d-b06e01735c49.jpg',
            title: '海外多语言游戏平台，招募联合运营商、代理商出海捕鱼',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '68',
            businessSubdivides: {
              68: '游戏联运'
            },
            region: '11|12|21',
            regions: {
              21: '印尼',
              11: '巴西',
              12: '菲律宾'
            },
            industry: '50',
            industryStr: '游戏',
            industrySubdivide: '62',
            industrys: {
              62: '棋牌游戏'
            },
            isTop: 0,
            firmName: '卡洛思',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696922871'
          },
          {
            id: 12249,
            userName: '体育代理招商',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230925/dd38a544-dde1-439a-87ce-fa7ed481dc03.jpg',
            position: '综合盘口',
            logo: '',
            title: '亚洲顶级体育官方代理招商 高佣金',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '82',
            businessSubdivides: {
              82: '游戏代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'OB游戏',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696902506'
          },
          {
            id: 11465,
            userName: '炒饭',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/2.png',
            position: '商务主管',
            logo: null,
            title: '接上架代投联运，主营游戏类产品，主营地区：巴西，菲律宾，印度印尼',
            ty: 1,
            tyStr: '我提供',
            type: 17,
            typeStr: '游戏招商',
            businessSubdivide: '68',
            businessSubdivides: {
              68: '游戏联运'
            },
            region: '15|11|12',
            regions: {
              11: '巴西',
              12: '菲律宾',
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696822078'
          }
        ]
      },
      {
        pName: '游戏包网',
        records: [
          {
            id: 12300,
            userName: 'K36官方',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926184554.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230926/19c244e6-eab5-407a-8f70-c8ba3b0e8018.png',
            title: 'K36东南亚包网搭建站服务、支持多语言、游戏API转售',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1',
            industrys: {
              1: '综合博弈'
            },
            isTop: 1,
            firmName: 'K36',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193641'
          },
          {
            id: 6497,
            userName: 'SBOBET - Huo',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221206/0467a0a5-08e4-4f3c-9496-6a5633607b29.jpg',
            position: '商務',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230107/9a1271e0-5183-43fd-b4c7-1a808ab49e6d.png',
            title: 'SBOBET 利记 - API 接入及包网服务',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1',
            industrys: {
              1: '综合博弈'
            },
            isTop: 1,
            firmName: 'SBOBET-568Win',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106352'
          },
          {
            id: 12581,
            userName: 'aya ',
            vipLogo: '',
            headUrl: '',
            position: '商务经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-14/20231014223413.png',
            title: 'KM包网产品自带品牌流量—开云体育',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '',
            industrys: {
              1: '游戏'
            },
            isTop: 0,
            firmName: 'KM包网',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697294442'
          },
          {
            id: 12224,
            userName: 'Min Jun',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230512/59745138-b794-410a-83bc-5f015eecaf2b.jpg',
            position: '经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230925/1cf80207-567c-48bc-aea4-3e7124ae217d.jpg',
            title: '一站式包网',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1|13',
            industrys: {
              1: '综合博弈',
              13: '体育博弈'
            },
            isTop: 0,
            firmName: null,
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697203251'
          },
          {
            id: 12247,
            userName: 'GoodGaming',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925185506.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925190319.png',
            title: 'GOOD GAMING游戏，专业游戏包网/API服务',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'GoodGaming',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193645'
          },
          {
            id: 12246,
            userName: '汤姆',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925190051.png',
            position: '技术',
            logo: '',
            title: '游戏包网 搭建钱包  直播站 娱乐站',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193643'
          },
          {
            id: 12279,
            userName: '彩票平台搭建',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/8.png',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230926/fc052c36-bf1f-4e85-a4ae-bacb6ac0fcaf.jpeg',
            title: '综合站包网一条龙服务 博彩平台搭建',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1',
            industrys: {
              1: '综合博弈'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193642'
          },
          {
            id: 11495,
            userName: '博发娱乐',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230821/391fc935-d779-449f-aba4-4a7b05dffe2d.jpg',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230819/6c11f572-96de-407b-90a9-b83ed2cf76ce.jpg',
            title: '博发娱乐-包网一条龙，客制化项目系统和游戏API,有兴趣请私',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697188043'
          },
          {
            id: 12240,
            userName: 'TOM',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/6.png',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230925/743ff693-282a-4c9c-9f84-ccf28a7a0689.jpg',
            title: '提供：体育，彩票综合平台包网服务',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1',
            industrys: {
              1: '综合博弈'
            },
            isTop: 0,
            firmName: '果实科技',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161147'
          },
          {
            id: 12277,
            userName: 'play star',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926164521.png',
            position: '商务',
            logo: '',
            title: '玩星电子包网提供百款老虎机，以及捕鱼机与棋牌类游戏',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697021089'
          },
          {
            id: 12319,
            userName: '大 海',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927145743.png',
            position: '商务',
            logo: '',
            title: '一站式搭建BC/MT4 MT5 FX6产品系列等游戏包网合作 可提供模板',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697021087'
          },
          {
            id: 10772,
            userName: 'KM包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230817/4afe2943-b8f8-4529-afeb-b9bc6772c6a7.png',
            position: '商務总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-04/20230804111958.png',
            title: 'SKG包网',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '25',
            regions: {
              25: '中国'
            },
            industry: '1',
            industryStr: '游戏',
            industrySubdivide: '1',
            industrys: {
              1: '综合博弈'
            },
            isTop: 0,
            firmName: 'KM包网',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1696945273'
          },
          {
            id: 11448,
            userName: 'KM包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230817/4afe2943-b8f8-4529-afeb-b9bc6772c6a7.png',
            position: '商務总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230817/43b96161-a9f6-493f-abc4-86e55873f801.png',
            title: 'KM包网重磅推出精品合营包网',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '25',
            regions: {
              25: '中国'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'KM包网',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1696945271'
          },
          {
            id: 12296,
            userName: '一',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-26/20230926182838.png',
            position: '商务',
            logo: '',
            title: '一站式搭建Bc/MT4 MT5 FX6产品系列等包网合作',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696815503'
          },
          {
            id: 12223,
            userName: 'K36_Woody',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925161839.png',
            position: 'BD',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925161556.png',
            title: 'K36精品包网 东南亚包网建站服务 需要的老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'K36',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1696313041'
          },
          {
            id: 12328,
            userName: 'Frank',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927162348.png',
            position: null,
            logo: '',
            title: '文娱/金融/Gaming方向投资孵化 自营游戏API/包网搭建',
            ty: 1,
            tyStr: '我提供',
            type: 1,
            typeStr: '游戏包网',
            businessSubdivide: '6',
            businessSubdivides: {
              6: '游戏包网'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695803124'
          }
        ]
      }, {
        pName: '游戏API',
        records: [
          {
            id: 11771,
            userName: 'CQ9-WEN',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230831/50224090-09f9-4457-8a5e-b4df6d63eaad.jpeg',
            position: '業務經理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230831/bb21a9d7-96a2-4ac7-99d4-72b5bb245eb6.jpeg',
            title: 'CQ9 Gaming 電子及真人遊戲API',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '17|19|20',
            industrys: {
              17: '综合博弈',
              19: '真人视讯',
              20: '老虎机'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193665'
          },
          {
            id: 12118,
            userName: 'DB Gaming',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102245.png',
            position: '市場',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102417.png',
            title: 'DB游戏/KM包网 API接口',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'DB Gaming',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106387'
          },
          {
            id: 12047,
            userName: 'Shila',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-15/20230915180900.png',
            position: '商务',
            logo: '',
            title: '游戏API设计 提供在线老虎机和钓鱼游戏',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193663'
          },
          {
            id: 12049,
            userName: 'Mitch',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-15/20230915183147.png',
            position: '商务',
            logo: '',
            title: '游戏API连接 多国游戏连接 欢迎需要游戏API的老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193662'
          },
          {
            id: 12474,
            userName: 'John',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231010/c08aa08a-3de1-463b-bf42-16fb44868384.jpg',
            position: '商務',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231012/e481d116-1932-4db0-a3db-48258a927975.png',
            title: 'WE世界娛樂 真人視訊API供應商',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '19',
            industrys: {
              19: '真人视讯'
            },
            isTop: 0,
            firmName: '世界娛樂',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193659'
          },
          {
            id: 12095,
            userName: 'VG',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-19/20230919153243.png',
            position: '商务',
            logo: '',
            title: '两种游戏API集成方案 转账钱包集成方案和单一钱包集成方案',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'VG',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161164'
          },
          {
            id: 11220,
            userName: 'DB Gaming',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920102245.png',
            position: '市場',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920101721.png',
            title: '游戏API连接全球游戏 需要的老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '',
            industrys: {
              5: '游戏'
            },
            isTop: 0,
            firmName: 'DB Gaming',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106389'
          },
          {
            id: 11732,
            userName: 'david',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/11.png',
            position: '商务总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230830/8bee0861-3aa3-418d-9b83-d0bf19cb0c46.png',
            title: '出印度运营级游戏源代码 游戏运行稳定 玩法多样',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '15',
            regions: {
              15: '印度'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '',
            industrys: {
              5: '游戏'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696902435'
          },
          {
            id: 11485,
            userName: '游戏API',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230818/969e9b75-9607-481f-b82b-63b169fbced1.jpg',
            position: '市场经理',
            logo: '',
            title: '提供市面所有游戏API 性能高效，运行稳定，安全可靠',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '14|15|16|17|18|19|20|21',
            industrys: {
              16: '棋牌博弈',
              17: '综合博弈',
              18: '彩票娱乐',
              19: '真人视讯',
              20: '老虎机',
              21: '捕鱼博弈',
              14: '体育博弈',
              15: '电竞博弈'
            },
            isTop: 0,
            firmName: 'bcapis',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696759864'
          },
          {
            id: 11494,
            userName: 'jacky',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230819/523796df-d0c3-4e69-9e29-9250c0c1cb16.jpg',
            position: '官方商務',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230819/db888bdb-2170-42e6-9022-bbec8dfca782.jpg',
            title: '提供真人，老虎機API接口對接',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '19|20|21',
            industrys: {
              19: '真人视讯',
              20: '老虎机',
              21: '捕鱼博弈'
            },
            isTop: 0,
            firmName: 'SA gaming',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696596284'
          },
          {
            id: 11413,
            userName: 'LEG乐游',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-16/20230816164124.png',
            position: '商务',
            logo: '',
            title: '棋牌商务 东南亚 各国道地棋牌 API 需要的滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696389411'
          },
          {
            id: 9549,
            userName: '开心电竞',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230607/fad8d3ea-2ab5-4f5b-95d6-c5d1e11bdb73.png',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230607/c476e63f-f23b-46d0-956f-7a0eff285b87.png',
            title: '开心电竞KSGAMING 电竞竞猜API包网系统云服务商',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '开心电竞KSGAMING',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695531354'
          },
          {
            id: 10894,
            userName: '风神WS群发',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727181819.png',
            position: '商务',
            logo: '',
            title: '诚信接单全球WS超链群发，官方API群发',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '',
            businessSubdivides: null,
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694500774'
          },
          {
            id: 10185,
            userName: '亚系代理招商',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-10/20230710135819.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-10/20230710140012.png',
            title: '亚系BC一手API游戏端口和代付业务 绝对一手',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694500771'
          },
          {
            id: 10874,
            userName: 'Carol Royal',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727163902.png',
            position: '商务',
            logo: '',
            title: '专注游戏api，主攻泰国台湾等地区 欢迎来询',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '5',
            industryStr: '游戏',
            industrySubdivide: '17|18|19',
            industrys: {
              17: '综合博弈',
              18: '彩票娱乐',
              19: '真人视讯'
            },
            isTop: 0,
            firmName: 'RoyalgClub',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694500770'
          },
          {
            id: 8470,
            userName: 'OG东方游戏 ',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230331/ccd7aab5-cfcf-40ba-bf68-3bb0caeb2e01.jpg',
            position: '市场部',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230331/abba864e-798b-4b30-88a1-39e871b71724.jpg',
            title: 'OG真人视讯 / API游戏接口 / 客制大厅 对接促销',
            ty: 1,
            tyStr: '我提供',
            type: 3,
            typeStr: '游戏API',
            businessSubdivide: '12',
            businessSubdivides: {
              12: '游戏API'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'OG东方包网',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694319676'
          }
        ]
      },
      {
        pName: '支付渠道',
        records: [
          {
            id: 1262,
            userName: 'OKpay全球付',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20220920/d6dbbc1f-6012-4668-919c-d31ce884b598.jpg',
            position: '市场部经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-07/20231007222155.png',
            title: '印度原生支付 D0，U回，成功率80%+',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '15',
            regions: {
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'okpay',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163868'
          },
          {
            id: 7938,
            userName: '海外支付阿东',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/1.png',
            position: '渠道总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230316/e6f8fc6e-e17b-44a2-a6b8-e0ca139dbc10.png',
            title: '土耳其 孟加拉 印度 巴西原生游戏支付',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'Fastpay',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697163861'
          },
          {
            id: 11579,
            userName: 'HKP-商务',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'http://file.huidu.io/avatar/4.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/7f379b20-2412-4876-b93d-2002cf2b824f.jpg',
            title: 'HKPPAY，专业支付30年，巴西持牌机构提供源头支付，安全、稳定，专为游戏、bet提供一站式支付服务',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11|12|21',
            regions: {
              21: '印尼',
              11: '巴西',
              12: '菲律宾'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163853'
          },
          {
            id: 4840,
            userName: 'CASHPAY',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9269820c-6a90-496c-aaf4-08c98869803a.png',
            position: '运营总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20221114/12f22392-3d48-4c29-8216-6f1306568efb.jpg',
            title: '巴西支付源头',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11',
            regions: {
              11: '巴西'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'CASHPAY',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163835'
          },
          {
            id: 11492,
            userName: 'No钱包 Titus',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230609/7406b686-85d7-417a-b109-379ff7391e7b.jpg',
            position: '商务负责人',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230819/76e419ce-8773-4850-b7fb-24a8bae2068c.png',
            title: '【NO钱包】NO.com 专业RMB、USDT通道，提现免费，摆脱冻结及跑单，彻底解决支付痛点，无痕兑换守护资产安全，诚邀各大商户及代理入驻合作',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'No钱包',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163826'
          },
          {
            id: 11511,
            userName: '小峰',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/11.png',
            position: '市场总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230821/915468e4-50db-42d1-a7dd-583d79417c80.jpg',
            title: 'Fastpay5年老牌支付 巴西   墨西哥  埃及   菲律宾 源头冰点费率',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11|12|13',
            regions: {
              11: '巴西',
              12: '菲律宾',
              13: '墨西哥'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: '成都行付天下科技有限公司',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163810'
          },
          {
            id: 11575,
            userName: 'alfapay',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230822/4a33b338-bb35-4a74-b015-96736cce2106.jpg',
            position: '商务经理',
            logo: null,
            title: '东南亚支付、承兑、金流系统承租',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '83',
            businessSubdivides: {
              83: '承兑换汇'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106396'
          },
          {
            id: 9404,
            userName: '佳运支付安博',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230801/1ce0e17f-93f2-424b-a3e5-9f5b00abbbd6.jpg',
            position: '商务经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230528/46552a7c-42cf-4b3e-a8fb-77d6dfec626b.jpg',
            title: '佳运支付~世界知名线上 线下支付供应商！',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: '佳运支付',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106345'
          },
          {
            id: 12022,
            userName: '全球源头支付',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'http://file.huidu.io/avatar/4.png',
            position: '印度巴西支付',
            logo: '',
            title: '源头印度一类、二类支付通道 真正源头 24小时交易',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '15|11|13',
            regions: {
              11: '巴西',
              13: '墨西哥',
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106338'
          },
          {
            id: 12097,
            userName: '乐乐',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/2.png',
            position: '市场经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230919/27230941-bb99-4522-9561-e06c5c0a508d.png',
            title: '承接巴西一切资金 一手源头',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '11',
            regions: {
              11: '巴西'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697075136'
          },
          {
            id: 12363,
            userName: 'AtPay商务',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/9.png',
            position: '商务总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231001/b6a800c4-0a9a-44b7-9300-30403adde8d3.jpg',
            title: 'AtPay全球支付 巴基斯坦 孟加拉 尼日利亚等多国家海外支付',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'AtPay',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697075059'
          },
          {
            id: 11670,
            userName: '佛系pay',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-20/20230920113512.png',
            position: '负责人',
            logo: null,
            title: '全球支付承兑 支付通道，卡接回U，D0结算',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '83',
            businessSubdivides: {
              83: '承兑换汇'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1696902984'
          },
          {
            id: 11884,
            userName: 'Sunpay 三一',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/6.png',
            position: '商务经理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230906/903b5bf5-0b60-4e3c-af50-765662afabe6.jpg',
            title: '巴西、印度、埃及源头支付，全网可接，冰点费率',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'Sunpay',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697341037'
          },
          {
            id: 12547,
            userName: '六佐支付',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012172538.png',
            position: '商务',
            logo: '',
            title: '新加坡 马来西亚 泰国 印度  日本支付',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193635'
          },
          {
            id: 12556,
            userName: 'sam',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/11.png',
            position: '总监',
            logo: '',
            title: '海外支付源头一手原生支付通道 行业内最佳',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193634'
          },
          {
            id: 12562,
            userName: '王多鱼',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/3.png',
            position: '商务',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231013/8ac939f8-a248-4cc2-82b3-53681c8c76bc.jpg',
            title: '源头支付  通道稳定 费率冰点 价格美丽 通道丝滑',
            ty: 1,
            tyStr: '我提供',
            type: 0,
            typeStr: '支付渠道',
            businessSubdivide: '61',
            businessSubdivides: {
              61: '全球支付'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'SHPAY',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697182366'
          }
        ]
      },
      {
        pName: '营销渠道',
        records: [
          {
            id: 9630,
            userName: '彩虹抖抖',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230609/c244be04-0c64-40f7-abdd-4b5fac778e62.jpeg',
            position: '市场部总监',
            logo: null,
            title: '巴西H5投放寻优秀产品合作',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '11|18|7',
            regions: {
              18: '越南',
              7: '泰国',
              11: '巴西'
            },
            industry: '16',
            industryStr: '游戏',
            industrySubdivide: '32',
            industrys: {
              32: '真金游戏'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163818'
          },
          {
            id: 12024,
            userName: '海外流量代投',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9df07a92-2dbd-47cf-b108-17cfa429afc9.jpg',
            position: '商务',
            logo: null,
            title: '出海广告代投，GG,TT,FB,KWAI代投',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '18',
            businessSubdivides: {
              18: 'Google'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697163791'
          },
          {
            id: 12146,
            userName: '赛亚人代投',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230921/b0d6c4fc-da6b-4069-8cde-622153f33ddb.png',
            position: '投放主管',
            logo: null,
            title: '顶级代投团队，迅速起量，专业巴西，东南亚地区',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '11|18|24',
            regions: {
              18: '越南',
              24: '日韩',
              11: '巴西'
            },
            industry: '16',
            industryStr: '游戏',
            industrySubdivide: '31|32',
            industrys: {
              32: '真金游戏',
              31: '上架游戏'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697021255'
          },
          {
            id: 10997,
            userName: '订制独享IP',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/12.png',
            position: '总经理',
            logo: null,
            title: '台湾股民表筛，二筛，可甲料，需要的老板来',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '34',
            businessSubdivides: {
              34: '其他流量'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697352243'
          },
          {
            id: 12582,
            userName: '周山过海',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231014/14fed245-3b1e-4eb4-be54-d3cbc175855a.jpg',
            position: '商务经理',
            logo: null,
            title: '专业提供谷歌上架代投/全球短信等，欢迎来聊',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '34',
            businessSubdivides: {
              34: '其他流量'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697295226'
          },
          {
            id: 11678,
            userName: 'Nice',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230803/b70f6061-6f99-4b0f-9b9b-bd3373a61ad7.jpg',
            position: '市场经理',
            logo: null,
            title: '国际短信，免费测试，极高转化率！不限国家，不限内容！东南亚BC短信首选，注册率超高！',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '34',
            businessSubdivides: {
              34: '其他流量'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'BUKA CLOUD Communication ',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697290752'
          },
          {
            id: 12580,
            userName: '云上数据',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/9.png',
            position: '老板',
            logo: null,
            title: '出BC QP的数据',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '34',
            businessSubdivides: {
              34: '其他流量'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697289797'
          },
          {
            id: 12444,
            userName: 'nt512400',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/6.png',
            position: '商务',
            logo: null,
            title: 'FB/kwai开户代投 可代投游戏类代投金融加粉类',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697273376'
          },
          {
            id: 12564,
            userName: '铁头娃',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-13/20231013160127.png',
            position: '商务',
            logo: null,
            title: '多年老出海出各国WS协议号 劫持号 欢迎中介 老板 甲方来聊',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '34',
            businessSubdivides: {
              34: '其他流量'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193674'
          },
          {
            id: 12561,
            userName: '六花 ',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-13/20231013151818.png',
            position: '商务',
            logo: null,
            title: '专业ASO全球优化排名 谷歌商店---全球操作',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '23',
            businessSubdivides: {
              23: 'ASO/ASM'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193673'
          },
          {
            id: 12575,
            userName: '传奇',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-13/20231013175939.png',
            position: '商务',
            logo: null,
            title: '经营各种热门社交软件号！欢迎来聊！',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697191241'
          },
          {
            id: 11446,
            userName: '钱来',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230907/0745af8f-97c4-4349-a9e7-2d1383451271.jpg',
            position: '商务经理',
            logo: null,
            title: '海外广告专业代投，自运营，投手队伍大，日消耗高，起量快，稳定消耗',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '18',
            businessSubdivides: {
              18: 'Google'
            },
            region: '15|11|12',
            regions: {
              11: '巴西',
              12: '菲律宾',
              15: '印度'
            },
            industry: '12',
            industryStr: '游戏',
            industrySubdivide: '28|29',
            industrys: {
              28: '上架游戏',
              29: '真金游戏'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697180649'
          },
          {
            id: 12464,
            userName: '赛亚人代投',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231009/f19f92f3-4275-4dc8-9334-6e83783ee800.jpg',
            position: '商务',
            logo: null,
            title: '顶级代投团队，迅速起量,专业巴西,东南亚地区',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '11|18|24',
            regions: {
              18: '越南',
              24: '日韩',
              11: '巴西'
            },
            industry: '16',
            industryStr: '游戏',
            industrySubdivide: '31|32',
            industrys: {
              32: '真金游戏',
              31: '上架游戏'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697174404'
          },
          {
            id: 12535,
            userName: 'Zreo ',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012134458.png',
            position: '商务',
            logo: null,
            title: '出售源头开发者账号 手工注册！ 价格低 后续稳 上架APP也接单中',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '18',
            businessSubdivides: {
              18: 'Google'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161174'
          },
          {
            id: 12533,
            userName: '乐天',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012115429.png',
            position: '商务',
            logo: null,
            title: 'fb主推 ws拉群发 泰国 土耳其 阿曼 印尼 埃及  欢迎来聊',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '19',
            businessSubdivides: {
              19: 'Facebook'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161173'
          },
          {
            id: 12545,
            userName: '黑白',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012164641.png',
            position: '商务',
            logo: null,
            title: '一手ws印度拉260人群支持担保，源头混合ws协议号，个人印尼号，各国协议号',
            ty: 1,
            tyStr: '我提供',
            type: 4,
            typeStr: '营销渠道',
            businessSubdivide: '18',
            businessSubdivides: {
              18: 'Google'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161172'
          }
        ]
      },
      {
        pName: '云服务',
        records: [
          {
            id: 12534,
            userName: 'BUKA国际短信',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195357.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230718/3f8f184d-47f7-41eb-a113-6c7b641e4d22.jpg',
            position: '市场',
            logo: null,
            title: '东南亚国际短信 / WhatsApp business api / 国际语音外呼/群呼-全球直连-16年品牌',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '70',
            businessSubdivides: {
              70: '数据统计'
            },
            region: '15|11|21',
            regions: {
              21: '印尼',
              11: '巴西',
              15: '印度'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: 'buka sms',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193680'
          },
          {
            id: 532,
            userName: 'jack 马',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727174637.png',
            headUrl: 'http://file.huidu.io/huidu/images/20220428/ab22e273-cd89-4918-b6ff-2bb3e13ce9c7.png',
            position: '高级商务总监',
            logo: '',
            title: '全球短信直連下發，OTP短信注冊驗證-群發推廣會員召回通知類短信，多通道儲備，歡迎代理和廠商對接',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '69',
            businessSubdivides: {
              69: '国际短信'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 1,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697106359'
          },
          {
            id: 10642,
            userName: 'Alicia',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/10.png',
            position: '市場經理',
            logo: '',
            title: '全球服务器/高防CDN/免备案/国际短信/域名，全网最低价',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '39',
            businessSubdivides: {
              39: 'CDN/安防'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697307721'
          },
          {
            id: 12523,
            userName: '瑶瑶',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011172508.png',
            position: '商务',
            logo: '',
            title: '【全球海外机房直营服务器,高防CDN,解决移动屏蔽】 一次合作终身伙伴！！',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193682'
          },
          {
            id: 12508,
            userName: 'Janice',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'http://file.huidu.io/avatar/3.png',
            position: 'Marketing',
            logo: null,
            title: '大陆加速 DDoS CC防御 域名跳转 ',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '39',
            businessSubdivides: {
              39: 'CDN/安防'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'Greypanel',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193681'
          },
          {
            id: 12548,
            userName: '国际短信',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012173627.png',
            position: '商务',
            logo: '',
            title: '国际短信通道 实发推荐： 印尼、印度、越南 欢迎老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '69',
            businessSubdivides: {
              69: '国际短信'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193678'
          },
          {
            id: 12560,
            userName: 'Jenny',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/5.png',
            position: '商務',
            logo: null,
            title: 'multi-CDN 高速+高防 一站完成 ​免備案CN2方案',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '39',
            businessSubdivides: {
              39: 'CDN/安防'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '騰雲運算',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697177159'
          },
          {
            id: 12486,
            userName: '玥玥牌',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-10/20231010171253.png',
            position: '商务',
            logo: '',
            title: '高防CDN◆◆无视CC◆◆全球定制◆◆海外服务器 ',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161180'
          },
          {
            id: 12542,
            userName: 'Ann',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012161915.png',
            position: '商务',
            logo: '',
            title: '海外高防加速CDN/服务器/免实名免备案/不限内容/ 7*24客服/[不限域名]移動屏蔽',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161179'
          },
          {
            id: 12541,
            userName: 'Nico',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012161541.png',
            position: '商务',
            logo: '',
            title: '显卡 美国 香港 大带宽带 服务器诚信经营 主要勾搭代理 招代理全网最好的价格',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697098581'
          },
          {
            id: 12539,
            userName: '小佩',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012161400.png',
            position: '商务',
            logo: '',
            title: ' 服务器/高防CDN/国际阿里云，华为云，AWS亚马逊，腾讯云，谷歌云代开户与代充服务 需要的可以滴我',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697098473'
          },
          {
            id: 11285,
            userName: 'BUKA国际短信',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195357.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230718/3f8f184d-47f7-41eb-a113-6c7b641e4d22.jpg',
            position: '市场',
            logo: null,
            title: '澳大利亚、科威特 短信实卡已测试，营销内容可接，实时发送，客户反馈效果不错',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '70',
            businessSubdivides: {
              70: '数据统计'
            },
            region: '16',
            regions: {
              16: '柬埔寨'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'buka sms',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697082883'
          },
          {
            id: 12433,
            userName: '国内外服务器',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-08/20231008180152.png',
            position: '商务',
            logo: '',
            title: '直营海外机房服务器 CDN加速 DDos高防IP 对象存储OSS',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074945'
          },
          {
            id: 12470,
            userName: '茨威格',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-10/20231010113156.png',
            position: '商务',
            logo: '',
            title: 'CN2|海外服务器，|物理机大盘/G口，站群服务器, 高性能铂金VPS--诚招代理.24h',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074944'
          },
          {
            id: 12436,
            userName: '顺顺',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-08/20231008180302.png',
            position: '商务',
            logo: '',
            title: '国际营销短信群发，全球OTP验证码下发。',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '69',
            businessSubdivides: {
              69: '国际短信'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074943'
          },
          {
            id: 12527,
            userName: '小钰',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011174828.png',
            position: '商务',
            logo: '',
            title: '海外服务器公司✦安全✦免实名✦不限内容  欢迎老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 7,
            typeStr: '云服务',
            businessSubdivide: '36',
            businessSubdivides: {
              36: '服务器'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697021123'
          }
        ]
      },
      {
        pName: '技术外包',
        records: [
          {
            id: 11659,
            userName: 'mengpend',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/11.png',
            position: '商务',
            logo: null,
            title: '专业谷歌IOS马甲包上架，谷歌当天出包，客户可自定义名称、图片、LOGO、简介，不保时间，速度过包，你有资金我有实力',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '73',
            businessSubdivides: {
              73: 'App开发'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697287768'
          },
          {
            id: 11661,
            userName: 'sskk9999',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230731/7b8cbc8f-dae7-4bb7-9134-40b4b309c63f.png',
            position: '商务负责人',
            logo: null,
            title: '最新版 安卓远控/作者直出/ 优化内核/不卡顿',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '73',
            businessSubdivides: {
              73: 'App开发'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '迅发科技',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697283633'
          },
          {
            id: 12515,
            userName: '创码',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011161354.png',
            position: '商务',
            logo: null,
            title: '各类海外盘口搭建 实力团队搭建各类资金盘 交易所 bc娱乐站',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193690'
          },
          {
            id: 12543,
            userName: '阿星',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012162035.png',
            position: '商务',
            logo: '',
            title: '服务器、包域名 你看到的站都能仿 企业站、广告软文站、软件系统定制开发、各种网站搭建',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '11',
            businessSubdivides: {
              11: '其他系统开发'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193689'
          },
          {
            id: 12517,
            userName: '原马搭建',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011162441.png',
            position: '技术',
            logo: null,
            title: '接各种海外盘、娱乐站、修复、二开等 Java、PHP、Uniapp、Vue',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193688'
          },
          {
            id: 12516,
            userName: '我不是大神',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011161947.png',
            position: '商务',
            logo: null,
            title: '程序主项目搭建 开发交易所/彩票娱乐城/资金盘',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193687'
          },
          {
            id: 12554,
            userName: '百晓生',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012182305.png',
            position: '技术',
            logo: null,
            title: '高端盘口定制开发二开维护 娱乐站 交易所 各类平台app搭建',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193686'
          },
          {
            id: 8183,
            userName: 'no03rsi7',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/10.png',
            position: '市场总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230323/0a6bc2f1-a312-44d2-9f31-a77a79b534f1.jpg',
            title: 'MT5.主标/小白标 破解版    区块链交易所  FX6 Trandingweb 一站式搭建',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '71',
            businessSubdivides: {
              71: '交易所开发'
            },
            region: '32',
            regions: {
              32: '新加坡'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697168111'
          },
          {
            id: 12511,
            userName: '九鼎开发',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011152649.png',
            position: '技术',
            logo: null,
            title: '专业搭建各种平台网站 彩票 娱乐综合盘 交易所 微盘',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161189'
          },
          {
            id: 12504,
            userName: '祢豆子 ',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011113143.png',
            position: '商务',
            logo: null,
            title: 'APP上架谷歌IOS 全球FB GOOGLE代投，不限行业',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '73',
            businessSubdivides: {
              73: 'App开发'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161188'
          },
          {
            id: 12553,
            userName: '小武',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-12/20231012182052.png',
            position: '技术',
            logo: null,
            title: '项目定制/部署/搭建/运维/二开/仿站/游戏/源码出售',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161186'
          },
          {
            id: 9426,
            userName: '欧创金融科技',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230530/9e570692-5555-462e-97e9-404a0d91caab.jpg',
            position: '經理',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230530/2c6faefb-c68b-46ff-be88-41bbc4adb497.png',
            title: 'HT5外汇交易系统，优惠加码大放送',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '71',
            businessSubdivides: {
              71: '交易所开发'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697100510'
          },
          {
            id: 12488,
            userName: '酷奇科技',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/10.png',
            position: '技术',
            logo: null,
            title: 'app软件开发.平台搭建 彩票/棋牌/商城/交易所 一手源码',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074954'
          },
          {
            id: 12497,
            userName: '传奇开发',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/5.png',
            position: '技术',
            logo: null,
            title: '专业搭建各种平台网站，彩票 综合盘 交易所 微盘 等',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074952'
          },
          {
            id: 12518,
            userName: '网站搭建',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-11/20231011162812.png',
            position: '技术',
            logo: null,
            title: '团队主营各类APP平台搭建，支持二次开发定制维护',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '72',
            businessSubdivides: {
              72: '游戏搭建'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074950'
          },
          {
            id: 11300,
            userName: '海外流量代投',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9df07a92-2dbd-47cf-b108-17cfa429afc9.jpg',
            position: '商务',
            logo: '',
            title: '提供马甲包上架和投放业务- 寻优秀老板合作',
            ty: 1,
            tyStr: '我提供',
            type: 8,
            typeStr: '技术外包',
            businessSubdivide: '73',
            businessSubdivides: {
              73: 'App开发'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697021219'
          }
        ]
      },
      {
        pName: 'WEB 3.0',
        records: [
          {
            id: 12206,
            userName: '讯泰包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230125/a9cf7f2f-6d1b-4768-aaae-81160342a453.jpg',
            position: '商务',
            logo: null,
            title: '海外精聊盘口搭建',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '81',
            businessSubdivides: {
              81: 'WEB 3.0'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '讯泰集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697344600'
          },
          {
            id: 11172,
            userName: '何经理',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230331/6e520288-5ee3-46ab-a3ce-ca909d532c2d.jpg',
            position: '商务经理',
            logo: null,
            title: 'NFT/盲盒/DAPP奖金模式、LP流动性挖矿无后门智能合约开发',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '81',
            businessSubdivides: {
              81: 'WEB 3.0'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193655'
          },
          {
            id: 11836,
            userName: 'KM包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230817/4afe2943-b8f8-4529-afeb-b9bc6772c6a7.png',
            position: '商務总监',
            logo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230904/992ca562-a939-4534-a9a9-73f26aaf15f7.png',
            title: '易币付 - 多链钱包 支持多种虚拟资产 0手续费转账',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '63',
            businessSubdivides: {
              63: '钱包合作'
            },
            region: '25',
            regions: {
              25: '中国'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'KM包网',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 1,
            views: null,
            updateTime: '1697193653'
          },
          {
            id: 11739,
            userName: 'Mixing Cash',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-30/20230830155348.png',
            position: '市场经理',
            logo: '',
            title: 'Mixing.cash跨链交换混币服务平台',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '60',
            industryStr: '数字货币',
            industrySubdivide: '',
            industrys: {
              60: '数字货币'
            },
            isTop: 0,
            firmName: 'Mixing Cash',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193652'
          },
          {
            id: 12117,
            userName: '外汇币盘直招',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/11.png',
            position: '招商经理',
            logo: '',
            title: '外汇 币盘 商城 盘口招商',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '64',
            businessSubdivides: {
              64: '币圈项目方'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193651'
          },
          {
            id: 11428,
            userName: '国际云代开',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-16/20230816172757.png',
            position: '商务',
            logo: null,
            title: '服务器/网站 交友app 婚恋 注册、实名认证，各种APP账号',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '81',
            businessSubdivides: {
              81: 'WEB 3.0'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161153'
          },
          {
            id: 11493,
            userName: '讯泰包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230125/a9cf7f2f-6d1b-4768-aaae-81160342a453.jpg',
            position: '商务',
            logo: null,
            title: '海外精聊盘口搭建   欢迎老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '81',
            businessSubdivides: {
              81: 'WEB 3.0'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '讯泰集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161152'
          },
          {
            id: 11751,
            userName: '外汇FX6',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-30/20230830172711.png',
            position: '商务',
            logo: '',
            title: '外汇正版FX6-ST5MAX—双盘直招，招代理，点位高，欢迎咨询',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697074910'
          },
          {
            id: 11481,
            userName: 'v2app',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/4.png',
            position: '王总监',
            logo: '',
            title: '数字货币盘 招业务代理 非诚勿扰/直奔主题 全球法币直充通道 谷歌应用商城下载',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '60',
            industryStr: '数字货币',
            industrySubdivide: '',
            industrys: {
              60: '数字货币'
            },
            isTop: 0,
            firmName: '2v交易所',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696988504'
          },
          {
            id: 12061,
            userName: '榴芒先生',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195441.png',
            headUrl: 'http://file.huidu.io/avatar/3.png',
            position: '老板',
            logo: '',
            title: '各国WhatsApp云控协议号批发 ',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '81',
            businessSubdivides: {
              81: 'WEB 3.0'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696934364'
          },
          {
            id: 11074,
            userName: '讯泰包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230125/a9cf7f2f-6d1b-4768-aaae-81160342a453.jpg',
            position: '商务',
            logo: null,
            title: '海外精聊盘口搭建 绝对专业 需要的老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '讯泰集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695366717'
          },
          {
            id: 10954,
            userName: '讯泰包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230125/a9cf7f2f-6d1b-4768-aaae-81160342a453.jpg',
            position: '商务',
            logo: null,
            title: '全新模式海外精聊盘口',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '讯泰集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695260452'
          },
          {
            id: 10897,
            userName: '讯泰包网',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-05-31/20230531195256.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230125/a9cf7f2f-6d1b-4768-aaae-81160342a453.jpg',
            position: '商务',
            logo: null,
            title: '海外精聊盘口搭建 专业的技术服务团队',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '81',
            businessSubdivides: {
              81: 'WEB 3.0'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '讯泰集团',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694583112'
          },
          {
            id: 10491,
            userName: '2v数字交易所',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/10.png',
            position: '招商部总监',
            logo: null,
            title: '海外货币交易所招商 秒合约无限级裂变模式',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '63',
            businessSubdivides: {
              63: '钱包合作'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '2V数字货币交易所',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694319653'
          },
          {
            id: 10510,
            userName: '娜娜',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/2.png',
            position: '招商部A组',
            logo: null,
            title: '海外货币交易所招商 秒合约无限级裂变模式',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '60',
            industryStr: '数字货币',
            industrySubdivide: '',
            industrys: {
              60: '数字货币'
            },
            isTop: 0,
            firmName: '2V数字货币交易所',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694319646'
          },
          {
            id: 10612,
            userName: '2v石总监',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/2.png',
            position: '总监',
            logo: null,
            title: '2v交易所总部直招',
            ty: 1,
            tyStr: '我提供',
            type: 2,
            typeStr: 'WEB 3.0',
            businessSubdivide: '66',
            businessSubdivides: {
              66: '交易所代理'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '60',
            industryStr: '数字货币',
            industrySubdivide: '',
            industrys: {
              60: '数字货币'
            },
            isTop: 0,
            firmName: '2V数字货币交易所',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694319641'
          }
        ]
      },
      {
        pName: '媒体渠道',
        records: [
          {
            id: 12330,
            userName: '杨幂',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927171855.png',
            position: '商务',
            logo: null,
            title: '一手数据，精筛（WS,Line,Tg,ZALO,viber)苹果，安卓，性别，年龄，头像，，领英，车主等等',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193706'
          },
          {
            id: 12241,
            userName: '栖姐',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925175604.png',
            position: '商务',
            logo: null,
            title: '印度 巴西 美国 英国 印尼 土耳其 新加坡 尼利日亚 秘鲁 法国 荷兰 澳大利亚 日本 台湾 泰国 南非 实卡接码可邮寄 需要联系',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193704'
          },
          {
            id: 12392,
            userName: '蜡笔小新',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-07/20231007171753.png',
            position: '商务',
            logo: null,
            title: '不跑一户，终成大户！个人一手机房Whatsapp协议号大量出产对接盘口 /AI换脸',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193703'
          },
          {
            id: 12194,
            userName: '金莲妹妹',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-22/20230922181017.png',
            position: '商务',
            logo: null,
            title: '国内外实卡接码/WS协议号/TG直登号/FB ins 推特 tiktok 领英等耐用老号 欢迎老板和中介 全面招代理',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161204'
          },
          {
            id: 11822,
            userName: 'Sking',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'http://file.huidu.io/avatar/2.png',
            position: 'FB金融粉',
            logo: null,
            title: '提供 美国  泰国  新加坡 等股民粉， FB 投放',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '77',
            businessSubdivides: {
              77: '华人媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161203'
          },
          {
            id: 11490,
            userName: '海外流量代投',
            vipLogo: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-07-27/20230727180222.png',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230811/9df07a92-2dbd-47cf-b108-17cfa429afc9.jpg',
            position: '商务',
            logo: null,
            title: '提供GG,TT,FB,KWAI代投业务  越南，泰国，印度，',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697021219'
          },
          {
            id: 11893,
            userName: '杰克',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-07/20230907172841.png',
            position: '商务',
            logo: null,
            title: '覆盖230+个国家和地区，运营商直营通道对接服务，价低稳定。',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697002347'
          },
          {
            id: 9744,
            userName: '马斯克',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230614/0f7404f1-bb4a-4cfa-8788-3dd79a16f3fa.jpg',
            position: '市场经理',
            logo: null,
            title: '海外本地媒体发稿/自媒体账户代运营/项目包装服务',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '76',
            businessSubdivides: {
              76: '币圈媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '全海集市',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696759927'
          },
          {
            id: 12242,
            userName: '大门 ',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-25/20230925180536.png',
            position: '商务',
            logo: null,
            title: '全球实卡接码一手资源，欢迎咨询。真诚的服务态度对待每一位客户',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696759920'
          },
          {
            id: 11515,
            userName: '筱柔',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-21/20230821160917.png',
            position: '商务',
            logo: null,
            title: 'B广告投放兼职刷单，tiktok精聊兼职 WS 各种活料 群发各类料子',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695620094'
          },
          {
            id: 11487,
            userName: 'feiyu',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/5.png',
            position: '商务经理',
            logo: null,
            title: '加密交易所或者博彩平台做体育赞助 需要的老板可以聊合作',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '77',
            businessSubdivides: {
              77: '华人媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '米克里体育',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695346985'
          },
          {
            id: 6807,
            userName: 'Web3世界',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-01-20/20230120162709.png',
            position: '经理',
            logo: null,
            title: 'Web3.0世界门户网区块链',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '76',
            businessSubdivides: {
              76: '币圈媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: 'Web3.0世界门户网',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694759497'
          },
          {
            id: 7737,
            userName: 'BrainLi',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/10.png',
            position: '运营',
            logo: '',
            title: '交易策略代写、信号定制',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '普擎数字科技',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694759495'
          },
          {
            id: 8621,
            userName: '乔氏项目包装',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230412/98033473-1131-4fe7-9c22-247593b0e36e.jpg',
            position: '商务',
            logo: null,
            title: '乔氏项目包装一站式服务 海外头部媒体渠道',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '76',
            businessSubdivides: {
              76: '币圈媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694319799'
          },
          {
            id: 9706,
            userName: '发哥',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/6.png',
            position: '主管',
            logo: '',
            title: '海外新闻媒体发布账号代运营服务',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '全海集市传媒',
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1694319783'
          },
          {
            id: 9407,
            userName: 'Terry',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20230529/a0cb902e-6eb2-4f98-8fd0-2e85d84e043e.jpg',
            position: '商务总监',
            logo: null,
            title: '钛动-最大的流量聚合平台-接产品投放',
            ty: 1,
            tyStr: '我提供',
            type: 18,
            typeStr: '媒体渠道',
            businessSubdivide: '75',
            businessSubdivides: {
              75: '博娱媒体'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: '钛动科技',
            firmVerify: true,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1693792032'
          }
        ]
      },
      {
        pName: '本地服务',
        records: [
          {
            id: 12423,
            userName: 'Tim',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/7.png',
            position: '市场经理',
            logo: null,
            title: '海外顶级投放团队，FB，GG，kwai代投',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193613'
          },
          {
            id: 12351,
            userName: '上架',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-28/20230928162601.png',
            position: '商务',
            logo: null,
            title: '承接iOS、谷歌APP代上架、马甲包定制、搭建开发一条龙服务',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193612'
          },
          {
            id: 12460,
            userName: '卓越',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-09/20231009174157.png',
            position: '商务',
            logo: '',
            title: '主營業務：海外公司註冊、宣传视频等全套包装、搭建',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '52',
            businessSubdivides: {
              52: '注册财税'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193611'
          },
          {
            id: 12565,
            userName: '小三百',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/20231013/8576e8e9-58c4-4456-8709-0015d087857d.jpg',
            position: '商务',
            logo: null,
            title: 'FB二筛表筛竞价精准指定投放',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697193610'
          },
          {
            id: 12563,
            userName: '55',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-13/20231013155656.png',
            position: '商务',
            logo: null,
            title: '海外专业投放团队，FB，GG，kwai，TT代投',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697183864'
          },
          {
            id: 12338,
            userName: 'iOS谷歌上架',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-27/20230927175737.png',
            position: '商务',
            logo: null,
            title: '全球APP 谷歌 iOS上架',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161129'
          },
          {
            id: 12350,
            userName: '上架投放',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-28/20230928162356.png',
            position: '商务',
            logo: null,
            title: '海外户一代 专业开户代投 欢迎老板滴滴',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161126'
          },
          {
            id: 12369,
            userName: '钟胜',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/2.png',
            position: '翻译经理',
            logo: '',
            title: '英语，葡萄牙语，西班牙语等8个国家语言翻译',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '51',
            businessSubdivides: {
              51: '翻译服务'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161123'
          },
          {
            id: 12490,
            userName: '大兵',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-10-10/20231010174147.png',
            position: '商务',
            logo: null,
            title: '专业代投上架 主营：游戏 bc qp 海外广告FB.GG.Kwai 上架、投放、开户 【巴西/印度/东南亚】等地区',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1697161121'
          },
          {
            id: 11478,
            userName: '苹果谷歌上架',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-08-18/20230818161820.png',
            position: '商务',
            logo: null,
            title: '苹果 谷歌 上架 专业上架团队 欢迎老板来聊',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696934340'
          },
          {
            id: 11671,
            userName: '青阳',
            vipLogo: '',
            headUrl: 'http://file.huidu.io/avatar/9.png',
            position: '号商卡商',
            logo: null,
            title: '出售海外社交软件手机卡',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '10|16|25',
            regions: {
              16: '柬埔寨',
              25: '中国',
              10: '马来西亚'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696934339'
          },
          {
            id: 12183,
            userName: '慢村长',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-22/20230922172542.png',
            position: '商务',
            logo: null,
            title: '海外顶级投放团队，FB，GG，kwai上架/代投',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696831676'
          },
          {
            id: 12154,
            userName: '芸芸',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-21/20230921173925.png',
            position: '商务',
            logo: null,
            title: '专业谷歌 苹果上架代投 效率高不限类型 欢迎老板咨询 服务至上',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696743117'
          },
          {
            id: 12100,
            userName: '上架',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-19/20230919172619.png',
            position: '商务',
            logo: null,
            title: 'iOS 谷歌代上架h5马甲包，不限类型',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '',
            regions: null,
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1696389338'
          },
          {
            id: 12028,
            userName: '景天',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-15/20230915155138.png',
            position: '商务',
            logo: null,
            title: '柬埔寨 缅甸 墨西哥 等bc均有投',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695865326'
          },
          {
            id: 11941,
            userName: '谷歌苹果上架',
            vipLogo: '',
            headUrl: 'https://huidu-bucket.s3.ap-southeast-1.amazonaws.com/huidu/images/2023-09-11/20230911174319.png',
            position: '商务',
            logo: null,
            title: '专业 全球谷歌 苹果 上架 ',
            ty: 1,
            tyStr: '我提供',
            type: 16,
            typeStr: '本地服务',
            businessSubdivide: '54',
            businessSubdivides: {
              54: '投放素材'
            },
            region: '|',
            regions: {
              0: '区域不限'
            },
            industry: '|',
            industryStr: null,
            industrySubdivide: '',
            industrys: {
              0: '行业不限'
            },
            isTop: 0,
            firmName: null,
            firmVerify: false,
            originalLanguage: 'zh-CN',
            gurantee: 0,
            views: null,
            updateTime: '1695430201'
          }
        ]
      }
    ],
    // 合作列表页  广告
    adList: [
      {
        img: '20230928121323.jpeg',
        link: 'https://www.k36group.com/'
      },
      {
        img: '20231009132956.jpeg',
        link: 'https://www.k36group.com/'
      },
      {
        img: '20230901161946.jpeg',
        link: ''
      }
      // {
      //   img: '20230901161946.jpeg',
      //   link: ''
      // },
      // {
      //   img: '20230901161946.jpeg',
      //   link: ''
      // }
    ]
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
      // const user = useUserStore()
      // if (!user.name) return
      const n = this.items.length
      this.rawItems = []
      return n
    }
  }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useChannelStore, import.meta.hot))
}
