import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './../views/HomePage.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/post',
      name: 'post detail',
      component: () => import('../views/PostDetail.vue')
    },
    {
      path: '/personal',
      name: 'personal page',
      component: () => import('../views/PersonalPage.vue')
    }
  ]
})

export default router
