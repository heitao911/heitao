// import { createApp } from 'vue'
import '@/styles/style.scss'
import App from './App.vue'
// import ElementPlus from 'element-plus'
import { ElMessage } from 'element-plus'
// import 'element-plus/dist/index.css'
import router from './router'
import globalComponent from '@/common/components/register.js'
import { createPinia } from 'pinia'
// import * as ElementPlusIconsVue from '@element-plus/icons-vue' // 如果您正在使用CDN引入，请删除这一行。
import { getImageUrl } from '@/utils/tools'

// Import Swiper styles
import 'swiper/css'

const pinia = createPinia()
const app = createApp(App).use(router).use(globalComponent).use(pinia)
// 全局注册组件
// for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
//   app.component(key, component)
// }
// 绑定全局方法
app.config.globalProperties.getImageUrl = getImageUrl
app.config.globalProperties.$message = ElMessage
// 注册完全局组件后-->才能挂载实例
app.mount('#app')
