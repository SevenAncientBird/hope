import { createWebHistory, createRouter } from 'vue-router'

import homePage from '@/views/homePage/index.vue'

const routes = [
  { path: '/', component: homePage },
]

const router = createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
})

export default router;