import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

import { fileURLToPath, URL } from 'node:url'
// 在setup中添加 name 属性，方便浏览器调试
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
// 配置global变量名
import externalGlobals from 'rollup-plugin-external-globals'
// gzip压缩
// import viteCompression from "vite-plugin-compression";
// 依赖分析插件
import { visualizer } from 'rollup-plugin-visualizer'

import obfuscator from 'rollup-plugin-obfuscator'
// import { terser } from 'rollup-plugin-terser'

// const isProd = process.env.NODE_ENV === 'production'

// https://vitejs.dev/config/
export default defineConfig({
  publicPath: '/',
  plugins: [
    vue(),
    VueSetupExtend(),
    visualizer({
      emitFile: false,
      file: 'stats.html', //分析图生成的文件名
      open: true //如果存在本地服务端口，将在打包后自动展示
    })
    // viteCompression(),
  ],
  build: {
    outDir: 'docs',
    rollupOptions: {
      // 排除不想被打包的库 缩小打包体积，请确保外部处理那些你不想打包进库的依赖
      external: ['vue'],
      // globals: {
      //   vue: 'Vue'
      // },
      plugins: [
        // obfuscator({
        //   globalOptions: {
        //     debugProtection: true,
        //     debugProtectionInterval: 2000,
        //     transformObjectKeys: true,
        //     unicodeEscapeSequence: true,
        //     numbersToExpressions: true,
        //     shuffleStringArray: true,
        //     splitStrings: true,
        //     stringArray: false,
        //     stringArrayThreshold: 1,
        //     identifierNamesGenerator: 'hexadecimal'
        //   }
        //   //   options: {
        //   //     // exclude:
        //   //     // Your javascript-obfuscator options here
        //   //     // See what's allowed: https://github.com/javascript-obfuscator/javascript-obfuscator
        //   //   },
        // })
        // terser(),
        // externalGlobals({
        //   vue: 'Vue'
        //   // 'element-plus': 'ElementPlus',
        //   // echarts: 'echarts',
        //   // 'vue-demi': 'VueDemi'
        // })
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        // globals: {
        //   vue: 'Vue'
        // },
        // manualChunks 配置
        // manualChunks: {
        //   // function manualChunks(id) {
        //   //   if (id.includes('node_modules')) {
        //   //     return 'vendor';
        //   //   }
        //   // }
        //   // vue vue-router合并打包
        //   vue: ['vue', 'vue-router'],
        //   elemenPlus: ['element-plus', '@element-plus/icons-vue'],
        // },
        // manualChunks(id) {
        //   //   //静态资源分拆打包
        //   if (id.includes('node_modules')) {
        //     return id
        //       .toString()
        //       .split('node_modules/')[1]
        //       .split('/')[0]
        //       .toString()
        //   }
        // },
        entryFileNames: `js/[name].[hash].js`,
        //     // chunkFileNames: `js/[name].[hash].js`,
        chunkFileNames: (chunkInfo) => {
          const facadeModuleId = chunkInfo.facadeModuleId
            ? chunkInfo.facadeModuleId.split('/')
            : []
          const fileName = facadeModuleId[facadeModuleId.length - 2] || '[name]'
          return `js/${fileName}/[name].[hash].js`
          // return `js/[name].[hash].js`
        },
        // //     // css、图片等资源文件名
        assetFileNames: '[ext]/[name].[hash].[ext]'
        //     // assetFileNames: `assets/[name].[hash].[ext]`,
        //     // 比如你想构建出来的css为dist/index.css，那么你可以这样
        //     //  assetFileNames: `index.[ext]`
      }
    }
    // chainWebpack: (config) => {
    //   config.optimization
    //     .minimize(true) // js文件最小化处理
    //     .splitChunks({ chunks: 'all' }) // 分割代码
    // },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    // extract: isProd,
    preprocessorOptions: {
      // 导入scss预编译程序
      scss: {
        additionalData: `@use "@/styles/common.scss" as *;`
      }
    }
  },
  // optimizeDeps: {
  //   include: ['ele']
  // },
  //启动服务配置
  server: {
    host: '0.0.0.0',
    port: 8000,
    open: true,
    https: false,
    proxy: {
      '/api': {
        // target: "http://192.168.10.169",
        // changeOrigin: true
      }
    }
  }
})
