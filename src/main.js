import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'  // 全局引入 Tailwind

const app = createApp(App)

app.use(router)   // 使用 router
app.mount('#app')
