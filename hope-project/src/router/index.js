import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './testRoute.vue'

const routes = [
  { path: '/', component: HomeView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})