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
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminPage.vue')
    }
    ,
    {
      path: '/tag/:id',
      name: 'tag',
      component: () => import('../views/ListPostTags.vue')
    }
  ]
})

export default router
