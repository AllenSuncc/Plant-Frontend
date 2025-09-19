import { createRouter, createWebHistory } from 'vue-router'
import WelcomePage from '@/views/WelcomePage.vue' // 引入欢迎页
import HomePage from '@/views/HomePage.vue'       // 示例页面
import AboutPage from '@/views/AboutPage.vue'     // 示例页面

const routes = [
  {
    path: '/',              // 默认首页
    name: 'welcome',
    component: WelcomePage
  },
  {
    path: '/home',
    name: 'home',
    component: HomePage
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
