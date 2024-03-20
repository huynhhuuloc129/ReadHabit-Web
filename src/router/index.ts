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
      path: '/post/:id',
      name: 'post detail',
      component: () => import('../views/PostDetail.vue')
    },
    {
      path: '/personal/:id',
      name: 'personal page',
      component: () => import('../views/PersonalPage.vue')
    }
    ,
    {
      path: '/upload-post',
      name: 'upload post',
      component: () => import('../views/UploadPost.vue')
    }
    ,
    {
      path: '/statistic',
      name: 'statistic',
      component: () => import('../views/StatisticPage.vue')
    }
  ]
})

export default router
