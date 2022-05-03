import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: Home
  },
  {
    path: '/recipe/:slug',
    name: 'RecipeView',
    component: () => import('../views/RecipeView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router