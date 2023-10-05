import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs'
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url))
    }
  },
  css: {
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
    host: "0.0.0.0",
    port: 8000,
    open: true,
    https: false,
    proxy: {
      "/api": {
        // target: "http://192.168.10.169",
        // changeOrigin: true
      }
    }
  }
})
