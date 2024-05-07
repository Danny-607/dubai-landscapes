import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {
        title: 'Home'
      },
      component: HomeView
    },
    {
      path: '/faq',
      name: 'faq',
      meta: {
        title: 'Frequently Asked Questions'
      },
      component: () => import('../views/FaqView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      meta: {
        title: 'Contact Us'
      },
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/services',
      name: 'services',
      meta: {
        title: 'Landscaping Services'
      },
      component: () => import('../views/ServicesView.vue')
    },
    {
      path: '/gallery',
      name: 'gallery',
      meta: {
        title: 'Projects Gallery'
      },
      component: () => import('../views/GalleryView.vue')
    }

  ]
})
router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title}`
  next()
})
export default router
