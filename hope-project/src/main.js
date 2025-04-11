import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { request } from '@/api/index'

const app = createApp(App)

app.use(router)
app.mount('#app')
app.config.globalProperties.$request = request;
